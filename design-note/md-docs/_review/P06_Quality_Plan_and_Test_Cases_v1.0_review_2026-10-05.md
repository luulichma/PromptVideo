# Review — P06 Quality Plan and Test Cases v1.0

| Tài liệu | Luật | Người review | Ngày | Kết luận |
| --- | --- | --- | --- | --- |
| [06_Quality_Plan_and_Test_Cases_v1.0.md](../02_Planning/06_Quality_Plan_and_Test_Cases_v1.0.md) | `knowledge/rules/10_quality.md` | Claude (skill `pm-ndq`), chờ Chiến xác nhận | 2026-10-05 | 0 🔴 thiếu · 0 🟡 · 2 🔵 |

Kiểm trích dẫn: tài liệu không trích slide theo dạng `PMxx:n` (chỉ ghi "bài giảng PM11").

## Checklist

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| Có QA, QC và quản lý chất lượng (PM11:19) | 🔴 | Đạt | §1, §2, §7 | — |
| Quality metric đo được, có ngưỡng (PM11:20) | 🔴 | Đạt | §1 | Mọi ngưỡng lấy từ OB/NF của Charter, kèm cách đo và giới hạn kết luận. |
| Kế hoạch test và inspection (PM11:17, PM11:18) | 🔴 | Đạt | §3, §4, §5 | Có cấp kiểm thử, môi trường, người chạy/kiểm/xác nhận; inspection tài liệu ở dòng "Kiểm tài liệu/bảng tính". |
| CoQ đủ 4 loại (PM11:13, PM11:14) | 🔴 | Đạt | §2 | Phòng ngừa, thẩm định, sai lỗi nội bộ, sai lỗi bên ngoài; có quy tắc tránh cộng đôi với P11. |
| Báo cáo QC theo deliverable, lỗi kiểm lại (PM11:65–67) | 🔴 | Không áp dụng | — | Thuộc M02/M05; P06 đã quy định trường bắt buộc của Test_Run và vòng Fail → fix → retest (§5, §6). |
| TC theo DEC-006: ngày, build, môi trường, người chạy; Not Run/Blocked | 🔵 | Đạt | §5 | — |
| TC không đổi nghĩa; nối REQ qua RTM | 🔵 | Đạt | §4 | TC-A-20/36 đổi kỳ vọng có lịch sử. |

## Gợi ý khác (🔵)

1. Thêm trích slide `(PM11:n)` cạnh định nghĩa QA/QC/CoQ để người chấm thấy căn cứ, rồi chạy `check-citations`.
2. Đã sửa trong lần review này các chữ dính "hay3", "trong10", "trong5", "fixture5", "file720p", "BMP2.2" (cùng lỗi ở P02, P07 và một số module input).
