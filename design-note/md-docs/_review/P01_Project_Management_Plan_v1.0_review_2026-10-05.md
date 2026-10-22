# Review — P01 Project Management Plan v1.0

| Tài liệu | Luật | Người review | Ngày | Kết luận |
| --- | --- | --- | --- | --- |
| [01_Project_Management_Plan_v1.0.md](../02_Planning/01_Project_Management_Plan_v1.0.md) | `knowledge/rules/06_project-management-plan.md` | Claude (skill `pm-ndq`), chờ Chiến xác nhận | 2026-10-05 | 4 🔴 thiếu · 2 🔴 một phần · 2 🟡 · 2 🔵 |

Kiểm trích dẫn: tài liệu không trích slide nào (0 trích dẫn). Kiểm số §4: 599 − 450 = 149 (33,11%); 599 − 495 = 104 (21,01%); 599 × 80.000 = 47.920.000. Đúng.

## Checklist

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| Nói rõ dự án thực hiện, giám sát/kiểm soát, đóng thế nào (PM04:10) | 🔴 | Đạt | §3, §5 | — |
| Đủ subsidiary plan PM04:10 + Resource, Risk (PM09:18, PM08:15) | 🔴 | Đạt | §3 | Mỗi lĩnh vực có cách áp dụng và trỏ tới file nguồn (P02–P13). |
| Ba baseline (Scope, Schedule, Cost) (PM04:10, PM04:12) | 🔴 | Một phần | §4 | Có định nghĩa Scope baseline (PM05:56); schedule/cost baseline mới ở dạng forecast, chưa duyệt. Ghi rõ trạng thái từng baseline trong một bảng. |
| Ba baseline gộp thành PMB (PM07:54) | 🔴 | Thiếu | — | Thêm một câu: "Scope + Schedule + Cost baseline = Performance Measurement Baseline; EVM (M04) đo trên PMB". |
| Change management plan và Configuration management plan (PM04:10) | 🔴 | Một phần | §2, §3 dòng "Cấu hình/thay đổi", §5 | Có CCB nội bộ và nguyên tắc CR, nhưng chưa có quy trình (nộp CR → phân tích tác động → CCB quyết định → cập nhật baseline/log) và danh sách configuration item. Thêm tiểu mục §5.1, §5.2. |
| Danh sách tài liệu chịu formal change control (PM04:16) | 🔴 | Thiếu | — | Liệt kê: Charter, PMP, P04 Scope Statement, P05 WBS, P10 lịch, P11 chi phí, P13 Risk Register (khi đã là baseline). Áp ngay khi có phiên bản đầu (PM10:74). |
| PMP chỉ đổi qua Integrated Change Control (PM04:10) | 🔴 | Thiếu | — | Thêm câu ở §5: mọi thay đổi PMP và baseline đi qua CR-G-nnn và M03. |
| Kick-off meeting: mục tiêu, cam kết, vai trò (PM04:18) | 🔴 | Thiếu | — | Không tài liệu nào ghi kick-off. Thêm mục kick-off (ngày, người dự, mục tiêu, cam kết, vai trò) vào PMP và biên bản vào E02. Nếu chưa họp thì lên lịch, không ghi đã họp. |
| Chọn life cycle / approach, có lý do (PM02:6, PM02:10) | 🟡 | Thiếu | — | Ghi approach (ví dụ hybrid: predictive cho hồ sơ/baseline, incremental cho sản phẩm theo M0–M7) và lý do. |
| Phase gate Go / Hold / Kill / Recycle (PM02:14) | 🟡 | Một phần | §4 bảng DOC-01…05 | Cổng có đầu ra nhưng chưa có quyết định cổng. Thêm cột "Quyết định (Go/Hold/Kill/Recycle) · người quyết". |
| Lịch hồ sơ, cổng, năng lực theo DEC-008; điều phối DEC-001 | 🔵 | Đạt | §2, §4 | — |
| Khung chung đầu/cuối file (`00_index.md` §4) | 🔵 | Thiếu | Đầu file | Thêm khối Xác nhận, lịch sử phiên bản, danh sách nguồn (slide/DEC). |

## Gợi ý khác (🔵)

1. §3 dòng "Mua/thuê" cộng 1,5 + 0,7 + 0,6 + 0,3 = 3,1 triệu, khớp "3,1 triệu mua/thuê" ở dòng Chi phí và Charter §8.2 (cộng dự phòng 0,4 = 3,5 triệu).
2. Câu "Nội dung được cập nhật bằng Codex theo ủy quyền của người dùng" nên bỏ khỏi bản nộp hoặc chuyển xuống lịch sử phiên bản.
