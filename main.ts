// The Funniest Honest Appliance Error — make.fun one-liner entry.
// Writes the entry line to /output/entry.txt (Node 22, TypeScript).

import * as fs from "fs";
import * as path from "path";

const LINE =
  "Toaster: Setting 3 is not enough. Setting 4 is fire. There is no setting 3.5. There never has been.";

const OUT_DIR = "/output";
const OUT_FILE = path.join(OUT_DIR, "entry.txt");

// The bounty gate: a single honest error message, 1–200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

function main(): void {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, LINE, "utf8");
}

main();
