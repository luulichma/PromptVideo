# Review — M04 Performance and EVM v1.0 (xlsx)

| Tài liệu | Luật | Người review | Ngày | Kết luận |
| --- | --- | --- | --- | --- |
| [04_Performance_and_EVM_v1.0.xlsx](../../official-docs/04_Monitoring_and_Controlling/04_Performance_and_EVM_v1.0.xlsx) | `knowledge/rules/09_cost.md` | Claude (skill `pm-ndq`), chờ Chiến xác nhận | 2026-10-05 | 0 🔴 thiếu · 1 🔴 một phần · 0 🟡 · 2 🔵 |

Cách review: trích 3 sheet (EVM, Variance, Inputs) gồm công thức. Mọi chỉ số đang là "n.a." vì công thức chỉ tính khi đủ 32 dòng PV/EV/AC và baseline được duyệt — đúng DEC-009, không tự điền 0.

## Checklist

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| PV, EV, AC theo định nghĩa; theo kỳ và lũy kế (PM07:42) | 🔴 | Đạt (khung) | EVM r8–r10, Variance | Công thức đúng; chưa có số. |
| SV = EV − PV; SPI = EV / PV (PM06:83) | 🔴 | Đạt | EVM r11, r13 | — |
| EAC / ETC / VAC; nói rõ kịch bản EAC (PM07:50, PM07:51) | 🔴 | Một phần | EVM r15–r17 | Có EAC = BAC/CPI (typical) và VAC. Thiếu ETC và ba kịch bản còn lại; thêm ETC = EAC − AC và một dòng EAC = AC + (BAC − EV) cho trường hợp atypical. |
| TCPI (PM07:52) | 🔴 | Không bắt buộc trong checklist | — | Nên thêm TCPI = (BAC − EV)/(BAC − AC) (🔵 dạng công thức). |

## Gợi ý khác (🔵)

1. CV, CPI chỉ có trong hình slide (PM07:46–48); ghi chú "(hình PM07:46–48)" cạnh hai dòng này.
2. Khi chưa có baseline duyệt, có thể chạy một kịch bản "thử" trên forecast 599 giờ (ghi rõ không phải EVM chính thức) để nhóm quen cách đọc chỉ số.
