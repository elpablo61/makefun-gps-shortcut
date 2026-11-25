import { mkdirSync, writeFileSync } from "node:fs";

// One-liner entry: exactly one line to stdout and to entry.txt.
// The winning line below must stay byte-identical — do not edit it.
const line = "The map moved the bridge three streets left in the 03:00 update. Mr. Chen has driven into the river twice. The map has not apologised once.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
