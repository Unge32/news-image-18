import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry for make.fun news-image-20261118: copies the pre-rendered front page
// (entry.png, 1024x1024, Wednesday 18 November 2026) to the output dir.
// Standard library only, no network, deterministic: the same bytes every run.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
if (!existsSync(source)) {
  throw new Error("entry.png not found next to main.ts");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
console.log("wrote " + join(outDir, "entry.png"));
