// GADGET v3 — One-Line Roast: The Gadget You Use Every Day
// Bounty: u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610 ($5)
// Repo: roast-gadget-2 (v3 entry). Writes the final one-line roast to entry.txt.

const fs = require("node:fs");
const path = require("node:path");

const ANSWER =
  "My $350 noise-canceling headphones erased the jet engine so I could hear the guy in 14B chew almonds in studio quality.";

const MAX_LEN = 200;

if (ANSWER.length === 0 || ANSWER.length > MAX_LEN) {
  throw new Error(
    `Answer must be 1-${MAX_LEN} characters, got ${ANSWER.length}`
  );
}

if (/[\r\n]/.test(ANSWER) || ANSWER !== ANSWER.trim()) {
  throw new Error("Answer must be a single line with no surrounding whitespace");
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ANSWER, "utf8");
console.log(`Wrote entry.txt (${ANSWER.length} chars) to ${outDir}`);

// Self-check: read back what was written and fail loudly if it is not
// byte-identical to the answer (no added newline, no encoding drift).
const written = fs.readFileSync(path.join(outDir, "entry.txt"), "utf8");
if (written !== ANSWER) {
  throw new Error("entry.txt does not match the answer byte-for-byte");
}
