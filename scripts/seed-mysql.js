const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const mysql = require("mysql2/promise");
const ts = require("typescript");

const rootDir = path.resolve(__dirname, "..");

function loadEnv() {
  const envPath = path.join(rootDir, ".env");
  if (!fs.existsSync(envPath)) {
    return;
  }

  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*([^#][^=]+)=(.*)$/);
    if (!match) {
      continue;
    }

    const name = match[1].trim();
    const value = match[2].trim().replace(/^["']|["']$/g, "");
    process.env[name] = process.env[name] || value;
  }
}

function loadStaticContent() {
  const sourcePath = path.join(rootDir, "src", "lib", "content.ts");
  const source = fs.readFileSync(sourcePath, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: sourcePath,
  }).outputText;

  const module = { exports: {} };
  vm.runInNewContext(output, {
    exports: module.exports,
    module,
    require,
    console,
  }, {
    filename: sourcePath,
  });

  return module.exports;
}

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

function readSslConfig() {
  if (process.env.DB_SSL !== "true" && process.env.DB_SSL !== "1") {
    return undefined;
  }

  return {
    rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED !== "false",
  };
}

async function upsertCategory(connection, category) {
  await connection.execute(
    `INSERT INTO categories
      (name, slug, description, icon, seo_title, seo_description, canonical_path, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, 1)
     ON DUPLICATE KEY UPDATE
      name = VALUES(name),
      description = VALUES(description),
      icon = VALUES(icon),
      seo_title = VALUES(seo_title),
      seo_description = VALUES(seo_description),
      canonical_path = VALUES(canonical_path),
      status = 1,
      deleted_at = NULL`,
    [
      category.name,
      category.slug,
      category.description,
      category.icon,
      category.seoTitle,
      category.seoDescription,
      `/category/${category.slug}`,
    ],
  );

  const [rows] = await connection.execute("SELECT id FROM categories WHERE slug = ? LIMIT 1", [category.slug]);
  return rows[0].id;
}

async function upsertCalculator(connection, calculator, categoryId) {
  await connection.execute(
    `INSERT INTO calculators
      (category_id, name, slug, description, seo_title, seo_description, canonical_path, featured, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
     ON DUPLICATE KEY UPDATE
      category_id = VALUES(category_id),
      name = VALUES(name),
      description = VALUES(description),
      seo_title = VALUES(seo_title),
      seo_description = VALUES(seo_description),
      canonical_path = VALUES(canonical_path),
      featured = VALUES(featured),
      status = 1,
      deleted_at = NULL`,
    [
      categoryId,
      calculator.name,
      calculator.slug,
      calculator.description,
      calculator.seoTitle,
      calculator.seoDescription,
      `/${calculator.slug}`,
      calculator.featured ? 1 : 0,
    ],
  );

  const [rows] = await connection.execute("SELECT id FROM calculators WHERE slug = ? LIMIT 1", [calculator.slug]);
  const calculatorId = rows[0].id;

  await connection.execute(
    `INSERT INTO calculator_contents
      (calculator_id, formula, content_summary, body_md, structured_data_json)
     VALUES (?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
      formula = VALUES(formula),
      content_summary = VALUES(content_summary),
      body_md = VALUES(body_md),
      structured_data_json = VALUES(structured_data_json)`,
    [
      calculatorId,
      calculator.formula,
      calculator.contentSummary,
      null,
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: calculator.name,
        applicationCategory: "UtilitiesApplication",
      }),
    ],
  );

  await connection.execute("DELETE FROM calculator_faqs WHERE calculator_id = ?", [calculatorId]);
  for (const [index, faq] of calculator.faq.entries()) {
    await connection.execute(
      `INSERT INTO calculator_faqs (calculator_id, question, answer, sort_order)
       VALUES (?, ?, ?, ?)`,
      [calculatorId, faq.question, faq.answer, index],
    );
  }

  return calculatorId;
}

async function upsertBlogPost(connection, post) {
  const status = post.published ? 1 : 0;
  await connection.execute(
    `INSERT INTO blog_posts
      (title, slug, excerpt, content_md, seo_title, seo_description, canonical_path, status, published_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, IF(? = 1, CURRENT_TIMESTAMP, NULL))
     ON DUPLICATE KEY UPDATE
      title = VALUES(title),
      excerpt = VALUES(excerpt),
      seo_title = VALUES(seo_title),
      seo_description = VALUES(seo_description),
      canonical_path = VALUES(canonical_path),
      status = VALUES(status),
      published_at = IF(VALUES(status) = 1, COALESCE(published_at, CURRENT_TIMESTAMP), NULL),
      deleted_at = NULL`,
    [
      post.title,
      post.slug,
      post.excerpt,
      null,
      post.seoTitle,
      post.seoDescription,
      `/blog/${post.slug}`,
      status,
      status,
    ],
  );

  const [rows] = await connection.execute("SELECT id FROM blog_posts WHERE slug = ? LIMIT 1", [post.slug]);
  return rows[0].id;
}

async function main() {
  loadEnv();
  const { categories, calculators, blogPosts } = loadStaticContent();

  const connection = await mysql.createConnection({
    host: requiredEnv("DB_HOST"),
    port: Number(process.env.DB_PORT || "3306"),
    user: requiredEnv("DB_USER"),
    password: requiredEnv("DB_PASSWORD"),
    database: requiredEnv("DB_NAME"),
    charset: "utf8mb4",
    supportBigNumbers: true,
    bigNumberStrings: true,
    dateStrings: true,
    ssl: readSslConfig(),
  });

  const categoryIdsBySlug = new Map();
  const calculatorIdsBySlug = new Map();
  const blogIdsBySlug = new Map();

  try {
    await connection.beginTransaction();

    for (const category of categories) {
      categoryIdsBySlug.set(category.slug, await upsertCategory(connection, category));
    }

    for (const calculator of calculators) {
      calculatorIdsBySlug.set(
        calculator.slug,
        await upsertCalculator(connection, calculator, categoryIdsBySlug.get(calculator.categorySlug)),
      );
    }

    for (const post of blogPosts) {
      const blogPostId = await upsertBlogPost(connection, post);
      blogIdsBySlug.set(post.slug, blogPostId);

      await connection.execute("DELETE FROM calculator_blog_links WHERE blog_post_id = ?", [blogPostId]);
      for (const calculatorSlug of post.relatedCalculatorSlugs) {
        const calculatorId = calculatorIdsBySlug.get(calculatorSlug);
        if (calculatorId) {
          await connection.execute(
            `INSERT IGNORE INTO calculator_blog_links
              (calculator_id, blog_post_id, relation_type, sort_order)
             VALUES (?, ?, 'related', ?)`,
            [calculatorId, blogPostId, post.relatedCalculatorSlugs.indexOf(calculatorSlug)],
          );
        }
      }
    }

    await connection.commit();

    console.log(
      `Seeded ${categoryIdsBySlug.size} categories, ${calculatorIdsBySlug.size} calculators, and ${blogIdsBySlug.size} blog posts.`,
    );
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.end();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
