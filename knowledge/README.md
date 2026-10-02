# knowledge/: tầng kiến thức môn học

Nguồn sự thật cho hồ sơ PromptVideo, rút từ 11 deck bài giảng của thầy Nguyễn Đình Quảng.

| Thư mục / file | Vai trò |
| --- | --- |
| `slides/PM01.md` … `PM11.md` | ① Text slide sinh tự động, mỗi slide một tiêu đề `## PMxx:n` (n = số trang PDF). **Không sửa tay.** |
| `rules/` | ② Luật rút gọn theo tài liệu, mỗi dòng có mức 🔴/🟡/🔵 và trích slide. Bắt đầu từ `rules/00_index.md`. |
| `build-slides.mjs` | Sinh lại `slides/` từ PDF. |
| `check-citations.mjs` | Kiểm mọi trích dẫn `PMxx:n` trong markdown. |
| `pdf/` (tuỳ chọn) | Đặt PDF bài giảng ở đây nếu không dùng `design-note/research/PM - NDQ/`. |

Skill dùng các file này: `.claude/skills/pm-ndq/SKILL.md`.

## Sinh lại slides

Cần `pdftotext` (có sẵn trong Git Bash trên Windows; Linux: gói `poppler-utils`).

```bash
node knowledge/build-slides.mjs              # đọc knowledge/pdf/, nếu không có thì design-note/research/PM - NDQ/
node knowledge/build-slides.mjs "đường/dẫn/pdf"
```

Tên PDF phải bắt đầu bằng `PM01`…`PM11`. Sau khi sinh lại, chạy kiểm trích dẫn để phát hiện slide bị đổi số.

## Kiểm trích dẫn

```bash
node knowledge/check-citations.mjs                      # mặc định: knowledge/rules, .claude/skills, design-note/md-docs
node knowledge/check-citations.mjs design-note/md-docs/05_Closing/01_Final_Project_Report_v1.0.md
```

- Nhận dạng `PM03:27` và khoảng `PM07:46–48` (gạch ngang thường hoặc en dash).
- **LỖI** (exit 1): deck hoặc slide không tồn tại.
- **CẢNHBÁO**: slide chỉ có hình hoặc chỉ có tiêu đề (< 12 từ); phải mở PDF để kiểm nội dung.

Tra nguyên văn một slide: `grep -n -A20 "^## PM03:27$" knowledge/slides/PM03.md`.
