const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { neon } = require("@neondatabase/serverless");
const ts = require("typescript");

const rootDir = path.resolve(__dirname, "..");

function loadEnv() {
  const envFiles = [".env.local", ".env", ".dev.vars"];
  for (const file of envFiles) {
    const envPath = path.join(rootDir, file);
    if (fs.existsSync(envPath)) {
      console.log(`Loading env from ${file}`);
      for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
        const match = line.match(/^\s*([^#][^=]+)=(.*)$/);
        if (match) {
          const name = match[1].trim();
          const value = match[2].trim().replace(/^["']|["']$/g, "");
          process.env[name] = process.env[name] || value;
        }
      }
      break;
    }
  }
}

function resolveTsPath(importPath) {
  if (importPath.startsWith("@/")) {
    const relPath = importPath.replace("@/", "src/");
    const fullPath = path.join(rootDir, relPath);
    
    const extensions = [".ts", ".tsx", "/index.ts", "/index.tsx"];
    for (const ext of extensions) {
      if (fs.existsSync(fullPath + ext)) return fullPath + ext;
      if (ext.startsWith("/") && fs.existsSync(fullPath + ext)) return fullPath + ext;
    }
  }
  return null;
}

const loadedModules = new Map();

function loadTsModule(filePath) {
  if (loadedModules.has(filePath)) {
    return loadedModules.get(filePath);
  }

  const source = fs.readFileSync(filePath, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
      skipLibCheck: true,
    },
  }).outputText;

  const m = { exports: {} };
  loadedModules.set(filePath, m.exports); // Prevent circular loops

  const context = vm.createContext({
    exports: m.exports,
    module: m,
    require: (name) => {
      const tsPath = resolveTsPath(name);
      if (tsPath) {
        return loadTsModule(tsPath);
      }
      try {
        return require(name);
      } catch (e) {
        // Fallback for relative imports within the context
        const dir = path.dirname(filePath);
        const relTsPath = path.resolve(dir, name);
        const extensions = [".ts", ".tsx", "/index.ts", "/index.tsx"];
        for (const ext of extensions) {
          const p = relTsPath + (ext.startsWith("/") ? "" : "") + ext;
          if (fs.existsSync(p)) return loadTsModule(p);
        }
        throw e;
      }
    },
    console,
    process,
    __dirname: path.dirname(filePath),
    __filename: filePath,
  });
  
  try {
    vm.runInContext(output, context);
  } catch (e) {
    console.error(`Error loading ${filePath}:`, e);
  }

  return m.exports;
}

async function seed() {
  loadEnv();
  
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not defined");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  console.log("Checking database schema...");
  const schemaPath = path.join(rootDir, "docs", "postgres-schema.sql");
  if (fs.existsSync(schemaPath)) {
    const schemaSql = fs.readFileSync(schemaPath, "utf8");
    const statements = schemaSql.split(";").filter(s => s.trim().length > 0);
    for (const statement of statements) {
      await sql(statement);
    }
    console.log("Schema verified/updated.");
  }
  
  console.log("Loading content from data-seed.ts...");
  const dataSeedPath = path.join(rootDir, "src", "lib", "data-seed.ts");
  if (!fs.existsSync(dataSeedPath)) {
    console.error("Critical Error: src/lib/data-seed.ts not found. Ensure backup was created.");
    process.exit(1);
  }

  const content = loadTsModule(dataSeedPath);
  const seoCenters = loadTsModule(path.join(rootDir, "src", "lib", "seo-centers.ts"));

  const categories = content.categories || [];
  const calculators = content.calculators || [];
  const blogPosts = content.blogPosts || [];
  
  const comparisons = seoCenters.comparisons || [];
  const formulas = seoCenters.formulas || [];
  const examples = seoCenters.examples || [];

  console.log(`Found: ${categories.length} categories, ${calculators.length} calculators, ${blogPosts.length} posts.`);

  try {
    // 1. Categories
    console.log("Seeding categories...");
    for (const cat of categories) {
      await sql`
        INSERT INTO categories (id, name, slug, description, icon, seo_title, seo_description)
        VALUES (${cat.id}, ${cat.name}, ${cat.slug}, ${cat.description}, ${cat.icon}, ${cat.seoTitle}, ${cat.seoDescription})
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          description = EXCLUDED.description,
          icon = EXCLUDED.icon,
          seo_title = EXCLUDED.seo_title,
          seo_description = EXCLUDED.seo_description
      `;
    }

    // 2. Calculators
    console.log("Seeding calculators...");
    for (const calc of calculators) {
      await sql`
        INSERT INTO calculators (
          id, category_slug, name, slug, description, formula, content_summary,
          what_is, formula_explanation, how_to_steps, example, use_cases, faq,
          featured, related_calculator_slugs, related_blog_post_slugs,
          seo_title, seo_description, last_updated, reviewed_by,
          calculation_method, version_history
        ) VALUES (
          ${calc.id}, ${calc.categorySlug}, ${calc.name}, ${calc.slug}, ${calc.description}, ${calc.formula}, ${calc.contentSummary},
          ${calc.whatIs}, ${calc.formulaExplanation}, ${JSON.stringify(calc.howToSteps)}, ${calc.example}, ${JSON.stringify(calc.useCases)}, ${JSON.stringify(calc.faq)},
          ${calc.featured}, ${JSON.stringify(calc.relatedCalculatorSlugs)}, ${JSON.stringify(calc.relatedBlogPostSlugs)},
          ${calc.seoTitle}, ${calc.seoDescription}, ${calc.lastUpdated}, ${calc.reviewedBy},
          ${calc.calculation_method || calc.calculationMethod}, ${JSON.stringify(calc.versionHistory)}
        )
        ON CONFLICT (id) DO UPDATE SET
          category_slug = EXCLUDED.category_slug,
          name = EXCLUDED.name,
          description = EXCLUDED.description,
          formula = EXCLUDED.formula,
          content_summary = EXCLUDED.content_summary,
          what_is = EXCLUDED.what_is,
          formula_explanation = EXCLUDED.formula_explanation,
          how_to_steps = EXCLUDED.how_to_steps,
          example = EXCLUDED.example,
          use_cases = EXCLUDED.use_cases,
          faq = EXCLUDED.faq,
          featured = EXCLUDED.featured,
          related_calculator_slugs = EXCLUDED.related_calculator_slugs,
          related_blog_post_slugs = EXCLUDED.related_blog_post_slugs,
          seo_title = EXCLUDED.seo_title,
          seo_description = EXCLUDED.seo_description,
          last_updated = EXCLUDED.last_updated,
          reviewed_by = EXCLUDED.reviewed_by,
          calculation_method = EXCLUDED.calculation_method,
          version_history = EXCLUDED.version_history
      `;
    }

    // 3. Blog Posts
    console.log("Seeding blog posts...");
    for (const post of blogPosts) {
      await sql`
        INSERT INTO blog_posts (
          id, title, slug, excerpt, seo_title, seo_description, 
          published, category_slug, related_calculator_slugs, sections
        ) VALUES (
          ${post.id}, ${post.title}, ${post.slug}, ${post.excerpt}, ${post.seoTitle}, ${post.seoDescription},
          ${post.published}, ${post.categorySlug}, ${JSON.stringify(post.relatedCalculatorSlugs)}, ${JSON.stringify(post.sections)}
        )
        ON CONFLICT (id) DO UPDATE SET
          title = EXCLUDED.title,
          excerpt = EXCLUDED.excerpt,
          seo_title = EXCLUDED.seo_title,
          seo_description = EXCLUDED.seo_description,
          published = EXCLUDED.published,
          category_slug = EXCLUDED.category_slug,
          related_calculator_slugs = EXCLUDED.related_calculator_slugs,
          sections = EXCLUDED.sections
      `;
    }

    // 4. Comparisons
    console.log("Seeding comparisons...");
    for (const comp of comparisons) {
      await sql`
        INSERT INTO comparisons (slug, title, excerpt, description, differences, conclusion, related_calculators, seo_title, seo_description)
        VALUES (${comp.slug}, ${comp.title}, ${comp.excerpt}, ${comp.description}, ${JSON.stringify(comp.differences)}, ${comp.conclusion}, ${JSON.stringify(comp.relatedCalculators)}, ${comp.seoTitle}, ${comp.seoDescription})
        ON CONFLICT (slug) DO UPDATE SET
          title = EXCLUDED.title,
          excerpt = EXCLUDED.excerpt,
          description = EXCLUDED.description,
          differences = EXCLUDED.differences,
          conclusion = EXCLUDED.conclusion,
          related_calculators = EXCLUDED.related_calculators,
          seo_title = EXCLUDED.seo_title,
          seo_description = EXCLUDED.seo_description
      `;
    }

    // 5. Formulas
    console.log("Seeding formulas...");
    for (const form of formulas) {
      await sql`
        INSERT INTO formulas (slug, title, excerpt, description, formula, variables, explanation, related_calculators, seo_title, seo_description)
        VALUES (${form.slug}, ${form.title}, ${form.excerpt}, ${form.description}, ${form.formula}, ${JSON.stringify(form.variables)}, ${JSON.stringify(form.explanation)}, ${JSON.stringify(form.relatedCalculators)}, ${form.seoTitle}, ${form.seoDescription})
        ON CONFLICT (slug) DO UPDATE SET
          title = EXCLUDED.title,
          excerpt = EXCLUDED.excerpt,
          description = EXCLUDED.description,
          formula = EXCLUDED.formula,
          variables = EXCLUDED.variables,
          explanation = EXCLUDED.explanation,
          related_calculators = EXCLUDED.related_calculators,
          seo_title = EXCLUDED.seo_title,
          seo_description = EXCLUDED.seo_description
      `;
    }

    // 6. Examples
    console.log("Seeding examples...");
    for (const ex of examples) {
      await sql`
        INSERT INTO examples (slug, title, excerpt, description, scenario, steps, result, related_calculators, seo_title, seo_description)
        VALUES (${ex.slug}, ${ex.title}, ${ex.excerpt}, ${ex.description}, ${ex.scenario}, ${JSON.stringify(ex.steps)}, ${ex.result}, ${JSON.stringify(ex.relatedCalculators)}, ${ex.seoTitle}, ${ex.seoDescription})
        ON CONFLICT (slug) DO UPDATE SET
          title = EXCLUDED.title,
          excerpt = EXCLUDED.excerpt,
          description = EXCLUDED.description,
          scenario = EXCLUDED.scenario,
          steps = EXCLUDED.steps,
          result = EXCLUDED.result,
          related_calculators = EXCLUDED.related_calculators,
          seo_title = EXCLUDED.seo_title,
          seo_description = EXCLUDED.seo_description
      `;
    }

    console.log("Seeding completed successfully!");
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
}

seed();
