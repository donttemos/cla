const path = require("node:path");
const fs = require("node:fs");

const root = path.resolve(__dirname, "..");

const requiredFiles = [
  ".next/server/app-paths-manifest.json",
  ".next/server/pages-manifest.json",
  ".next/server/app/category/[slug]/page.js",
  ".next/server/pages/_app.js",
  ".next/server/pages/_document.js",
];

function resolveFromRoot(relativePath) {
  return path.join(root, relativePath);
}

function assertBuiltFile(relativePath) {
  const absolutePath = resolveFromRoot(relativePath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Missing built Next.js server file: ${relativePath}`);
  }
}

function loadBuiltBundle(relativePath) {
  const absolutePath = resolveFromRoot(relativePath);

  assertBuiltFile(relativePath);

  try {
    require(absolutePath);
  } catch (error) {
    throw new Error(`Built Next.js server bundle failed to load: ${relativePath}`, {
      cause: error,
    });
  }
}

for (const file of requiredFiles.slice(0, 2)) {
  assertBuiltFile(file);
}

for (const bundle of requiredFiles.slice(2)) {
  loadBuiltBundle(bundle);
}

console.log("Verified Next.js server bundles load successfully.");
