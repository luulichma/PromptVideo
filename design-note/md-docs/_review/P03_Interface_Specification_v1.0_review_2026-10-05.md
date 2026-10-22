# Review — P03 Interface Specification v1.0

| Tài liệu | Luật | Người review | Ngày | Kết luận |
| --- | --- | --- | --- | --- |
| [03_Interface_Specification_v1.0.md](../02_Planning/03_Interface_Specification_v1.0.md) | `knowledge/rules/07_scope.md` (external interface requirement, PM05:18) và tiêu chí chấp nhận WBS 3.2 trong P05 | Claude (skill `pm-ndq`), chờ Chiến xác nhận | 2026-10-05 | 0 🔴 · 0 🟡 · 3 🔵 |

Slide không có mẫu riêng cho đặc tả giao tiếp; luật áp dụng là yêu cầu phải đo được, test được, truy vết được (PM05:36, PM05:37). Phần còn lại chấm theo tiêu chí do chính nhóm đặt ở P05 §3 dòng 3.2: "mỗi giao tiếp có request/response/error/version và TC; tách đích/hiện có".

## Checklist

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| Hợp đồng đo được, test được (PM05:36) | 🔴 | Đạt | §2–§5 | Mỗi giao tiếp có mã lỗi/hành vi mong đợi và TC-I tương ứng. |
| Truy vết tới yêu cầu và TC (PM05:37) | 🔴 | Đạt | §1, §5 | TC-I-01…06 nối IF và OB. |
| Request / response / error (P05 3.2) | 🔵 | Một phần | §2, §3, §4 | IF-AB-01 và IF-CB-01 đủ. IF-CA-01 chưa có bảng mã lỗi (404 key, mẫu không Active, manifest sai). |
| Version của hợp đồng (P05 3.2) | 🔵 | Thiếu | §2, §4 | IF-CA-01 có version mẫu; IF-AB-01 và IF-CB-01 không ghi phiên bản API. Thêm "Phiên bản hợp đồng: v1" và quy tắc tăng phiên bản ở §6. |
| Tách đích / hiện có (P05 3.2) | 🔵 | Đạt | §2 ISS-G-001, §3 ISS-G-002, §4 "chưa có endpoint" | — |

## Gợi ý khác (🔵)

1. Bỏ câu "cập nhật bằng Codex"; thêm khối Xác nhận và lịch sử theo `00_index.md` §4.
