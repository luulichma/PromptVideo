---
name: pm-ndq
description: Viết hoặc review hồ sơ quản lý dự án PromptVideo theo bài giảng thầy Nguyễn Đình Quảng (11 deck PM01–PM11). Dùng khi soạn, sửa, chấm một tài liệu PM (Business Case, Charter, PMP, WBS, Risk Register, Status Report, Final Report…), khi cần trích slide `PMxx:n`, hoặc khi gõ "write <tài liệu>" / "review <file>".
---

# pm-ndq: hồ sơ PM theo slide môn học

Skill này chỉ điều phối. Nội dung luật nằm ở `knowledge/rules/`, không chép sang đây.

## Thứ bậc nguồn (cao thắng thấp)

1. `knowledge/slides/PMxx.md`: text slide, sinh tự động, không sửa tay.
2. `knowledge/rules/`: luật theo tài liệu, mỗi dòng 🔴/🟡 có trích slide.
3. `DEC-nnn` trong `md-docs/00_Quyet_dinh_va_quy_uoc_ma.md`.
4. Hồ sơ markdown `md-docs/`.
5. docx/xlsx: chỉ sinh từ ④.

Mức: 🔴 Bắt buộc · 🟡 Mẫu thầy · 🔵 Diễn giải. Định nghĩa đầy đủ ở `knowledge/rules/00_index.md` §2.

## Tài liệu → file luật

| Tài liệu | File luật |
| --- | --- |
| Business Case | `01_business-case.md` |
| Benefits Management Plan | `02_benefit-management-plan.md` |
| Project Charter | `03_project-charter.md` |
| Assumption Log | `04_assumption-log.md` |
| Stakeholder Register | `05_stakeholder-register.md` |
| Project Management Plan | `06_project-management-plan.md` |
| Requirements, RTM, Scope Statement, WBS, Scope Validation | `07_scope.md` |
| Lịch, milestone, CPM | `08_schedule.md` |
| Ước lượng, ngân sách, EVA | `09_cost.md` |
| Quality Plan, test case, Quality Report | `10_quality.md` |
| Resource Plan, RACI, team charter | `11_resource.md` |
| Communications, Stakeholder Engagement, issue log | `12_communication-stakeholder.md` |
| Risk Plan, Risk Register | `13_risk.md` |
| Implementation record, Status Report, CR, change log | `14_monitoring-change-control.md` |
| Final Report, Handover, Lessons Learned | `15_closing.md` |
| Công cụ / kỹ thuật bất kỳ | `16_tools-catalog.md` |

Bảng chi tiết theo đường dẫn hồ sơ hiện có: `00_index.md` §3.

## `write <tài liệu>`

1. Tra bảng trên, nạp **đúng một** file luật (thêm `16_tools-catalog.md` chỉ khi cần tra công cụ).
2. Nạp các DEC mà file luật nêu ở dòng "Liên quan DEC".
3. Nạp đầu vào module liên quan: `md-docs/*/_module-input/` (A, B, C) và tài liệu đầu vào mà file luật nêu (ví dụ Charter cần Business Case).
4. Viết theo thứ tự mục của file luật. Đủ mọi mục 🔴. Mục 🟡 nào bỏ thì ghi lý do. Mục 🔵 ghi rõ là diễn giải.
5. Trích slide `(PMxx:n)` cạnh mỗi khẳng định lấy từ bài giảng. Cần xem nguyên văn thì grep `knowledge/slides/` theo đúng `## PMxx:n`; không đọc cả deck.
6. Dùng khung chung (`00_index.md` §4) và mã theo DEC-004.
7. Chạy `node knowledge/check-citations.mjs <file>`; sửa hết LỖI.

## `review <file>`

1. Xác định loại tài liệu, nạp đúng file luật và DEC liên quan.
2. Chấm từng dòng trong mục **Checklist review**: Đạt / Thiếu / Sai / Không áp dụng, kèm vị trí (`file:dòng`) và bằng chứng ngắn.
3. Gom kết quả theo mức: 🔴 thiếu/sai là phải sửa; 🟡 là nên sửa; 🔵 là gợi ý.
4. Chạy `node knowledge/check-citations.mjs <file>`; báo LỖI (slide không tồn tại) và CẢNHBÁO (slide chỉ có hình, phải mở PDF).
5. Kiểm số liệu khớp với tài liệu đầu vào (Charter ↔ PMP ↔ Status Report ↔ Final Report).
6. Trả về bảng: mục · mức · kết quả · vị trí · đề xuất sửa. Không tự sửa file nếu chưa được yêu cầu.

## Quy tắc

- Trả lời tiếng Việt; thuật ngữ PM giữ tiếng Anh như slide.
- Trích slide sai thì sửa luật ②, không sửa slide ①. Slide sinh lại bằng `node knowledge/build-slides.mjs`.
- Không ghi "đã duyệt", "đã đạt" khi chưa có bằng chứng (DEC-009, DEC-007).
- `archive/research-2026-09/01_Quy_tac_bat_buoc.md`, `02_Kien_thuc_su_dung.md` đã bị thay thế: trích dẫn lệch +1 slide, không dùng.
- Dời/xoá file, commit, push: hỏi Chiến trước.
