// One-Line Roast: The Gadget You Use Every Day
// Roast of the household printer, written fresh for this bounty.
// Node 22, no dependencies: writes exactly one line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The roast is exactly 115 characters: one breath, one gadget, one betrayal.
// No trailing newline is appended, so the file is exactly 115 bytes.
const ENTRY =
  "My printer prints the test page perfectly, then takes one look at the document I actually need and runs out of ink.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
