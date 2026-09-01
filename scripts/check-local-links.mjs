import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const markdownFiles = [];

async function collect(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory() && entry.name !== ".git") await collect(fullPath);
    if (entry.isFile() && entry.name.endsWith(".md")) markdownFiles.push(fullPath);
  }
}

await collect(root);
const missing = [];
let checked = 0;

for (const markdownFile of markdownFiles) {
  const markdown = await fs.readFile(markdownFile, "utf8");
  for (const match of markdown.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const link = match[1];
    if (/^(https?:|mailto:|#)/.test(link)) continue;
    checked += 1;
    const target = path.resolve(path.dirname(markdownFile), decodeURIComponent(link));
    try {
      await fs.access(target);
    } catch {
      missing.push(`${path.relative(root, markdownFile)} -> ${link}`);
    }
  }
}

console.log(`Checked ${checked} local links across ${markdownFiles.length} Markdown files.`);
if (missing.length) {
  console.error(`Missing links:\n${missing.join("\n")}`);
  process.exitCode = 1;
} else {
  console.log("All local links resolve.");
}
