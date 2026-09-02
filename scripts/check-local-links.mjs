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
const missingAnchors = [];
let checked = 0;

function githubAnchor(heading) {
  return heading
    .replace(/<[^>]*>/g, "")
    .replace(/[`*_~]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s/g, "-");
}

for (const markdownFile of markdownFiles) {
  const markdown = await fs.readFile(markdownFile, "utf8");
  for (const match of markdown.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const link = match[1];
    if (/^(https?:|mailto:|#)/.test(link)) continue;
    checked += 1;
    const [relativeTarget, fragment] = decodeURIComponent(link).split("#", 2);
    const target = path.resolve(path.dirname(markdownFile), relativeTarget);
    try {
      await fs.access(target);
      if (fragment && target.endsWith(".md")) {
        const targetMarkdown = await fs.readFile(target, "utf8");
        const anchors = [...targetMarkdown.matchAll(/^#{1,6}\s+(.+)$/gm)].map((heading) => githubAnchor(heading[1]));
        if (!anchors.includes(fragment)) missingAnchors.push(`${path.relative(root, markdownFile)} -> ${link}`);
      }
    } catch {
      missing.push(`${path.relative(root, markdownFile)} -> ${link}`);
    }
  }
}

console.log(`Checked ${checked} local links across ${markdownFiles.length} Markdown files.`);
if (missing.length) {
  console.error(`Missing links:\n${missing.join("\n")}`);
  process.exitCode = 1;
} else if (missingAnchors.length) {
  console.error(`Missing anchors:\n${missingAnchors.join("\n")}`);
  process.exitCode = 1;
} else {
  console.log("All local links and Markdown anchors resolve.");
}
