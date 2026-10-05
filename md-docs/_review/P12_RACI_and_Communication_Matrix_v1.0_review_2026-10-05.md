# Review — P12 RACI and Communication Matrix v1.0 (xlsx)

| Tài liệu | Luật | Người review | Ngày | Kết luận |
| --- | --- | --- | --- | --- |
| [12_RACI_and_Communication_Matrix_v1.0.xlsx](../../official-docs/02_Planning/12_RACI_and_Communication_Matrix_v1.0.xlsx) | `knowledge/rules/11_resource.md`, `knowledge/rules/12_communication-stakeholder.md` | Claude (skill `pm-ndq`), chờ Chiến xác nhận | 2026-10-05 | 1 🔴 thiếu · 1 🔴 một phần · 0 🟡 · 3 🔵 |

Cách review: trích 5 sheet gồm công thức.

- RACI: 32 gói WBS, mỗi dòng đúng một `A/R` trong ba cột thành viên.
- Resource_Needs: giờ WP 248,33 (Chiến) + 120,67 (Việt Quang) + 58 (Quang Anh) = 427; giờ PP 68 + 48 + 56 = 172. Khớp P05.

## Checklist

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| RACI: mỗi việc đúng một A (PM09:16) | 🔴 | Đạt | RACI | Xem gợi ý 1 về cột đếm. |
| Resource requirements theo work package, có basis (PM09:29) | 🔴 | Đạt | RACI + Resource_Needs, P05 | Giờ theo người và theo WP truy được về O/M/P. |
| Resource calendar / team assignments (PM09:39) | 🔴 | Đạt | Resource_Calendar | Cột "Giờ khả dụng xác nhận" còn trống, đúng quy tắc không điền giả. |
| SEAM có C và D (PM04:28) | 🔴 | Một phần | Stakeholder_Engagement | D có; C toàn bộ "chưa đo". Giống P07. |
| Mỗi luồng trao đổi ghi push / pull / interactive (PM04:50) | 🔴 | Thiếu | Communication | Thêm cột "Phương pháp". |

## Gợi ý khác (🔵)

1. Cột "Số Accountable" là công thức `COUNTIFS(C:E,"*A*")` nhưng giá trị lưu sẵn trong file là **0** ở cả 32 dòng (file chưa được tính lại sau khi sinh). Excel sẽ tính lại khi mở, nhưng bản xem trước hoặc công cụ đọc không tính sẽ thấy 0 và hiểu là thiếu A. Mở và lưu lại bằng Excel/LibreOffice, hoặc bật "fullCalcOnLoad".
2. Lệch với P07: P12 ghi cập nhật hằng ngày "trước 22:00" qua "Tracker + nhật ký trong repository"; P07 ghi "trước 20:00" qua chat. Chọn một.
3. Phân bổ giờ WP lệch mạnh (Chiến 248 giờ, Quang Anh 58 giờ); đây là nguyên nhân lịch san bằng kéo tới 04/2027 (P10). Nên nêu trong P07 §3 và CR-G-001 như một phương án cân tải.
