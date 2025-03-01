#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const appName = process.argv[2];

if (!appName) {
  console.log("❌ Please provide a project name.");
  console.log("Example: npx create-siddharth-app myapp");
  process.exit(1);
}

const appPath = path.join(process.cwd(), appName);
fs.mkdirSync(appPath, { recursive: true });

console.log("🚀 Creating project...");

// Copy template files (Cross-Platform)
const copyRecursiveSync = (src, dest) => {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  entries.forEach(entry => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyRecursiveSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
};

copyRecursiveSync(path.join(__dirname, "template"), appPath);

// Change to the newly created project directory
process.chdir(appPath);

console.log("📦 Installing dependencies...");
execSync("npm install", { stdio: "inherit" });

console.log(`✅ Successfully created ${appName}!`);
console.log(`👉 cd ${appName} && expo start`);
