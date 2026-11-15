import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `Midnight. The kitchen light still on,
the blue mug gone cold, a skin on the tea.
On the screen, a letter in my voice —
almost my voice — to my brother,
saying sorry in sentences I would never choose.
It remembers a lake we never had —
we had a cracked plastic pool in the yard, green with leaves.
It offers to send it. All I have to do is nothing.

My thumb hovers over the button.
Three years of silence, and this is how it ends?
Not with my handwriting, not with my throat going dry,
but with a stranger's perfect paragraph
wearing my name like a borrowed coat.

I close the tab. I open a blank page.
I type one sentence, short, misspelled.
It is the worst sentence I have ever written.
It is the first true one in years.
I press send myself.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
