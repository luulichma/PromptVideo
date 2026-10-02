// Sinh knowledge/slides/PMxx.md từ PDF bài giảng: mỗi trang PDF = một slide,
// tiêu đề "## PMxx:n" để trích dẫn dạng PM03:26 grep được trực tiếp.
// Cần pdftotext (có sẵn trong Git for Windows: /mingw64/bin/pdftotext).
// Chạy: node knowledge/build-slides.mjs [thư-mục-pdf]
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const candidates = [process.argv[2], join(here, "pdf"), join(here, "..", "design-note", "research", "PM - NDQ")];
const pdfDir = candidates.find((d) => d && existsSync(d) && readdirSync(d).some((f) => f.endsWith(".pdf")));
if (!pdfDir) throw new Error("Không tìm thấy thư mục chứa PDF bài giảng");

const outDir = join(here, "slides");
mkdirSync(outDir, { recursive: true });

const clean = (page) =>
  page
    .split("\n")
    .map((l) => l.replace(/\s+$/, "").replace(/[-]/g, "•"))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

for (const file of readdirSync(pdfDir).filter((f) => f.endsWith(".pdf")).sort()) {
  const deck = file.slice(0, 4); // PM01…PM11
  const title = basename(file, ".pdf").slice(5).replace(/_/g, " ");
  const text = execFileSync("pdftotext", ["-enc", "UTF-8", join(pdfDir, file), "-"], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  const pages = text.split("\f");
  if (pages.at(-1).trim() === "") pages.pop();

  const body = pages
    .map((p, i) => `## ${deck}:${i + 1}\n\n${clean(p) || "_(slide chỉ có hình, không có text)_"}`)
    .join("\n\n");
  const header =
    `# ${deck} — ${title}\n\n` +
    `> Sinh tự động từ \`${file}\` bằng \`knowledge/build-slides.mjs\`. KHÔNG sửa tay.\n` +
    `> ${pages.length} slide. Slide chỉ có hình/sơ đồ sẽ thiếu nội dung — mở PDF để xem.\n\n`;
  writeFileSync(join(outDir, `${deck}.md`), header + body + "\n");
  console.log(`${deck}  ${String(pages.length).padStart(3)} slide  ${title}`);
}
