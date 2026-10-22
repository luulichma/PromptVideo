# Review — P02 Requirements Specification v1.0

| Tài liệu | Luật | Người review | Ngày | Kết luận |
| --- | --- | --- | --- | --- |
| [02_Requirements_Specification_v1.0.md](../02_Planning/02_Requirements_Specification_v1.0.md) | `knowledge/rules/07_scope.md` | Claude (skill `pm-ndq`), chờ Chiến xác nhận | 2026-10-05 | 0 🔴 thiếu · 2 🔴 một phần · 1 🟡 · 3 🔵 |

Kiểm bằng script trên toàn file (3 phụ lục A/B/C):

- 64 REQ/NF có định nghĩa, 64 dòng RTM, không trùng mã, không có mã chỉ nằm một bên. NF-G-01 ở §2 là yêu cầu chung (tổng 65, khớp mục lục hồ sơ).
- Mọi dòng định nghĩa đều có cột tiêu chí/ngưỡng không trống.
- 106 TC-A/B/C định nghĩa trong file; TC-I-01…06 định nghĩa ở P03 §5 và được P06 nhắc lại.

## Checklist

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| REQ đo được, test được (PM05:36) | 🔴 | Đạt | Bảng 3.4/3.5 mỗi phụ lục | — |
| REQ có trong RTM nối objective và TC (PM05:37) | 🔴 | Một phần | RTM A §4, B §4, C §5 | 58/64 dòng nối RQ/OB/NF của Charter. 6 dòng nối Charter §5, BMP LI hoặc nguyên tắc nội bộ: NF-B-07, REQ-C-04, REQ-C-06, REQ-C-07, REQ-C-09, NF-C-01. Chấp nhận được nếu ghi rõ "business objective = LI-nn / Charter §5"; NF-C-01 "ngưỡng nội bộ" cần nêu objective nó phục vụ. NF-A-09 (độ phủ ≥ 70%) chưa có TC: thêm TC đo coverage hoặc ghi "kiểm bằng báo cáo coverage CI". |
| Được key stakeholder chấp nhận (PM05:36) | 🔴 | Một phần | Phụ lục A "Phân công kiểm tra (chưa ký xác nhận)" | Có phân công kiểm, chưa có ghi nhận chấp nhận. Thêm bảng chấp nhận yêu cầu ở đầu P02 (người, ngày, phạm vi chấp nhận). |
| Requirements nói cái cần, scope nói cái giao/không giao (PM05:17) | 🔴 | Đạt | §1 | Phần loại trừ dẫn sang P04. |
| Cột RTM mẫu: ID · Description · Business Objective · Design · Code · TC · Status (PM05:38) | 🟡 | Đạt | RTM các phụ lục | — |
| Decision matrix có trọng số để ưu tiên / chọn MVP (PM05:30, PM05:31) | 🟡 | Một phần | Cột "Phạm vi" | Có phân demo/đầy đủ nhưng không có ma trận trọng số. Thêm bảng ưu tiên (tiêu chí, trọng số, điểm) cho tập demo. |
| Mã theo DEC-004; phần chưa làm vẫn có REQ (DEC-007) | 🔵 | Đạt | toàn file | — |

## Gợi ý khác (🔵)

1. Ba phụ lục giữ nguyên khối Xác nhận/Lịch sử/Mục lục của từng module input, nên P02 có ba đầu tài liệu lồng nhau. Cân nhắc rút các khối đó, chỉ giữ thân đặc tả.
2. Cột "Số đo hiện có" và "Trạng thái" trộn trạng thái thực hiện vào đặc tả; nguồn trạng thái chính nên là P09/M05.
3. RTM nằm ở cả P02 và P09; ghi rõ P09 là bản hiện hành (PMP đã ghi), P02 chỉ là ảnh chụp lúc ghép.
