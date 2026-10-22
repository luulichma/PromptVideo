// Kiểm trích dẫn slide dạng PM03:27 hoặc PM07:46–48 trong file markdown.
// Lỗi (exit 1): deck/slide không tồn tại trong knowledge/slides/.
// Cảnh báo: slide chỉ có hình hoặc gần như không có text, nên trích dẫn đó không tự kiểm được.
// Chạy: node knowledge/check-citations.mjs [file-hoặc-thư-mục …]
// Mặc định quét knowledge/rules, .claude/skills, md-docs.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const slidesDir = join(here, "slides");
const IMAGE_ONLY = "_(slide chỉ có hình, không có text)_";
const MIN_WORDS = 12; // slide ít chữ hơn mức này coi như chỉ có tiêu đề + hình

// deck -> Map(số slide -> số từ trong slide; 0 = chỉ có hình)
const decks = new Map();
for (const f of readdirSync(slidesDir).filter((f) => /^PM\d\d\.md$/.test(f))) {
  const pages = new Map();
  const parts = readFileSync(join(slidesDir, f), "utf8").split(/^## PM\d\d:(\d+)$/m);
  for (let i = 1; i < parts.length; i += 2) {
    const body = parts[i + 1].trim();
    pages.set(Number(parts[i]), body === IMAGE_ONLY ? 0 : body.split(/\s+/).length);
  }
  decks.set(f.slice(0, 4), pages);
}

const walk = (p) =>
  statSync(p).isDirectory()
    ? readdirSync(p).flatMap((f) => (f === "node_modules" || f.startsWith(".git") ? [] : walk(join(p, f))))
    : p.endsWith(".md")
      ? [p]
      : [];

const args = process.argv.slice(2);
const targets = (args.length ? args : ["knowledge/rules", ".claude/skills", "md-docs"])
  .map((t) => join(root, t))
  .filter((t) => existsSync(t));
const files = targets.flatMap(walk).filter((f) => !f.startsWith(slidesDir));

const cite = /\bPM(\d\d):(\d+)(?:\s*[–-]\s*(?:PM\d\d:)?(\d+))?/g;
let errors = 0;
let warnings = 0;
let total = 0;

for (const file of files) {
  const rel = relative(root, file);
  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      for (const m of line.matchAll(cite)) {
        const deck = `PM${m[1]}`;
        const from = Number(m[2]);
        const to = Number(m[3] ?? m[2]);
        const pages = decks.get(deck);
        total++;
        const where = `${rel}:${i + 1}  ${m[0]}`;
        if (!pages) {
          console.log(`LỖI     ${where}  — không có deck ${deck}`);
          errors++;
          continue;
        }
        if (to < from) {
          console.log(`LỖI     ${where}  — khoảng slide ngược`);
          errors++;
          continue;
        }
        for (let n = from; n <= to; n++) {
          const words = pages.get(n);
          if (words === undefined) {
            console.log(`LỖI     ${where}  — ${deck} chỉ có ${pages.size} slide, không có ${deck}:${n}`);
            errors++;
          } else if (words < MIN_WORDS) {
            console.log(`CẢNHBÁO ${where}  — ${deck}:${n} chỉ có hình/tiêu đề, phải mở PDF để kiểm`);
            warnings++;
          }
        }
      }
    });
}

console.log(`\n${files.length} file, ${total} trích dẫn, ${errors} lỗi, ${warnings} cảnh báo.`);
process.exit(errors ? 1 : 0);
