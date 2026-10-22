# Review — M03 Issue and Change Log v1.0 (xlsx)

| Tài liệu | Luật | Người review | Ngày | Kết luận |
| --- | --- | --- | --- | --- |
| [03_Issue_and_Change_Log_v1.0.xlsx](../../official-docs/04_Monitoring_and_Controlling/03_Issue_and_Change_Log_v1.0.xlsx) | `knowledge/rules/14_monitoring-change-control.md`, `knowledge/rules/12_communication-stakeholder.md` | Claude (skill `pm-ndq`), chờ Chiến xác nhận | 2026-10-05 | 1 🔴 thiếu · 1 🔴 một phần · 0 🟡 · 2 🔵 |

Cách review: trích sheet Issues (5 dòng ISS-G-001…005) và Changes (1 dòng CR-G-001).

## Checklist

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| Issue log có tác động, ưu tiên, owner, hạn (PM10:54, PM10:77) | 🔴 | Đạt | Issues | — |
| Mã ISS-G-nnn duy nhất (DEC-004) | 🔵 | Đạt | Issues | — |
| Change log có mọi CR, kể cả chưa duyệt (PM08:103) | 🔴 | Đạt | Changes | CR-G-001 có mặt dù chưa duyệt. |
| CR ghi loại theo PM10:76 | 🔴 | Thiếu | Changes | Thêm cột "Loại" (corrective / preventive / defect repair / updates). |
| Quyết định approve / defer / reject (PM08:102) | 🔴 | Một phần | Changes | "Phương án nội bộ đã chọn; baseline sponsor chưa phê duyệt" → ghi rõ trạng thái CCB = Deferred, lý do, ngày xem lại. |
| Issue là risk đã xảy ra (PM08:7) | 🔴 | Đạt | Issues | — |

## Gợi ý khác (🔵)

1. Hạn của ISS-G-001…005 là DOC-03 (02/10) đã qua mà trạng thái vẫn Open/Blocked; cập nhật hạn mới hoặc ghi lý do trễ.
2. Thêm cột "Rủi ro liên quan" (ví dụ ISS-G-001 ↔ R-A-03) để thấy issue nào đến từ rủi ro đã nhận diện.
