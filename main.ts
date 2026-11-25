import { mkdirSync, writeFileSync } from "node:fs";

const ANSWER =
  "My photo app put romantic music over the photos for my landlord: six close-ups of mold.";

const EXPECTED_LENGTH = 87;

if (ANSWER.length !== EXPECTED_LENGTH) {
  throw new Error(
    `Answer length mismatch: expected ${EXPECTED_LENGTH} characters, got ${ANSWER.length}.`
  );
}

if (ANSWER.length < 1 || ANSWER.length > 200) {
  throw new Error(
    `Answer must be 1-200 characters, got ${ANSWER.length}.`
  );
}

if (ANSWER.trim().length === 0) {
  throw new Error("Answer must not be only whitespace.");
}

const outputDir = process.env.MAKEFUN_OUTPUT || "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, ANSWER, "utf8");

console.log(`Wrote entry.txt (${ANSWER.length} characters) to ${outputDir}`);
