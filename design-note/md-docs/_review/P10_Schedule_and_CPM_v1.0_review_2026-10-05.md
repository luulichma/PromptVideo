# Review — P10 Schedule and CPM v1.0 (xlsx)

| Tài liệu | Luật | Người review | Ngày | Kết luận |
| --- | --- | --- | --- | --- |
| [10_Schedule_and_CPM_v1.0.xlsx](../../official-docs/02_Planning/10_Schedule_and_CPM_v1.0.xlsx) | `knowledge/rules/08_schedule.md` | Claude (skill `pm-ndq`), chờ Chiến xác nhận | 2026-10-05 | 0 🔴 thiếu · 1 🔴 một phần · 0 🟡 · 3 🔵 |

Cách review: trích 6 sheet (Milestones, Activities, Estimates, CPM, Gantt, Calendar) gồm cả công thức.

- Activities: 35 hoạt động cộng đúng **427 giờ** = tổng WP của P05; PP chưa có hoạt động (đúng rolling wave, PM05:52).
- Estimates: 32 gói, công thức `=SUM(O:M:P)/3` khớp P05.
- CPM: ES/EF/LS/LF/total float/free float đều là công thức; thời lượng = giờ / (10 giờ/tuần ÷ 5 ngày) = giờ/2. Thời lượng logic 83,5 ngày; sau san bằng nguồn lực đến ngày 46500 (23/04/2027) — khớp M01 (151,17 ngày làm việc).

## Checklist

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| Activity có mã, tên, mô tả, một người phụ trách (PM06:19, PM06:22) | 🔴 | Đạt | Activities | Mỗi ACT một chủ. Gói A/C chỉ có một hoạt động "Hoàn thiện và tự kiểm: …"; nên tách 2–3 hoạt động như B để lịch có ý nghĩa. |
| Milestone list phân loại, thời lượng 0 (PM06:16, PM06:17) | 🔴 | Đạt | Milestones | Ba loại: cổng hồ sơ, mốc Charter đối chiếu, mốc phân rã PP. |
| Network, critical path, float đúng công thức (PM06:57, PM06:59) | 🔴 | Đạt | CPM | Total float = LS − ES; cột "Găng CPM" dùng `ABS(float) < 1e-6` để bỏ sai số dấu phẩy động (−7,1e−15). |
| Reserve tách contingency và management (PM06:46, PM06:48) | 🔴 | Một phần | — | P10 không có dòng reserve lịch. Thêm vào Calendar: contingency 46,2 giờ (P08/P11) quy ra ngày; management reserve "chưa phân bổ". |
| Tách schedule baseline và project schedule (PM06:73, PM06:74) | 🔴 | Đạt | Calendar r9, Milestones FC-WP | "Baseline schedule: Chưa phê duyệt"; forecast tách khỏi baseline. |
| Năng lực 10h/người/tuần (DEC-008), nêu thiếu công suất | 🔵 | Đạt | Calendar | — |

## Gợi ý khác (🔵)

1. Ngày hiển thị dạng số serial (46291…) khi đọc bằng công cụ không định dạng; kiểm định dạng ô ngày (dd/mm/yyyy) trong file.
2. Chữ dính trong cột "Cơ sở" của Estimates ("Forecast23h", "cũ8/10/16", "sang3.1", "3nămvậnhành", "checksum3máy", "134tổ hợp,100lần xuất,10người thử"). Nguồn là `md-docs/_data/*.json`; script sinh workbook đã lưu trữ, nên sửa trực tiếp trong xlsx hoặc dựng lại công cụ sinh trước khi sửa JSON.
3. Ngày kết thúc san bằng 23/04/2027 vượt CT-01 (06/12/2026) nếu giữ 10 giờ/người/tuần — đây là con số then chốt cho CR-G-001; nên nêu thẳng trong M01 và CR.
