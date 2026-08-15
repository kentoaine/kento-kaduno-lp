import fs from "node:fs";
import path from "node:path";

const root = path.resolve("public");
const htmlPath = path.join(root, "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
const localReferences = [...html.matchAll(/(?:src|href)="([^"#][^"]*)"/g)]
  .map((match) => match[1])
  .filter((value) => !/^(https?:|mailto:|tel:)/.test(value));
const missingFiles = localReferences.filter((value) => {
  const cleanPath = value.split(/[?#]/)[0];
  return !fs.existsSync(path.resolve(root, cleanPath));
});
const inlineScript = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];

if (inlineScript) new Function(inlineScript);

if (duplicateIds.length || missingFiles.length) {
  console.error({ duplicateIds, missingFiles });
  process.exit(1);
}

console.log(`Site check passed: ${ids.length} unique IDs, ${localReferences.length} local references.`);
