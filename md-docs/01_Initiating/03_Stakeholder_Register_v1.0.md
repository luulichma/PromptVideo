# PromptVideo — Slide-to-Video Generator

**Stakeholder Register** · Initiating · Ver. 1.0 · Nhóm 02

| Project | Project Manager | Date |
| --- | --- | --- |
| PromptVideo — Slide-to-Video Generator | Nguyễn Thế Chiến | 01/09/2026 |

> **Nguồn:** chuyển nguyên văn từ `official-docs/01_Initiating/03_Stakeholder_Register_v1.0.xlsx` (sheet "Stakeholder Register") ngày 05/10/2026. Từ nay file markdown này là nguồn sửa (DEC-014); bản xlsx sinh lại từ đây. Nội dung và mã SH không đổi. Bản gốc không có phần trạng thái, xác nhận và lịch sử cập nhật. Phụ lục A là phần thêm khi chuyển, dùng để đối chiếu luật môn học.

Toàn bộ nhân vật trong sổ là giả định, theo bối cảnh tổ chức chủ quản giả định của Project Charter §9.

## Danh sách bên liên quan

| ID | Stakeholder Name | Role | Category | Power/Influence | Interest | Expectation | Communication | Contact |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SH-01 | Trần Minh Đức | Nhà tài trợ — Nhà sáng lập kiêm Giám đốc điều hành Enticy Studios | Internal | Strong | Strong | Phê duyệt Charter; quyết định mọi thay đổi lớn; nhận bàn giao và vận hành dịch vụ trong 3 năm sau đó | Zalo — báo cáo tại mỗi mốc M0–M7; họp riêng khi có vấn đề vượt cấp | 0903 123 456 |
| SH-02 | Lê Hoàng Nam | Giám đốc dự án | Internal | Strong | Strong | Điều hành hằng ngày; giữ tiến độ và ngân sách; ráp bộ tài liệu quản lý dự án | Zalo — báo cáo tiến độ hằng tuần kèm số giờ công thực tế | 0912 345 678 |
| SH-03 | Đỗ Bảo Long | Trưởng nhóm kỹ thuật | Internal | Strong | Strong | Chốt kiến trúc trước khi viết mã; chủ trì nguyên mẫu mã hoá theo luồng tại M2 | Zalo — họp kỹ thuật hằng tuần; xác nhận nghiệm thu tại mốc | 0923 456 789 |
| SH-04 | Vũ Khánh Linh | Trưởng nhóm sản phẩm | Internal | Strong | Strong | Duyệt mẫu trước mỗi vòng phát triển; thu thập yêu cầu và chủ trì kiểm thử người dùng | Zalo — họp sản phẩm hằng tuần; xác nhận nghiệm thu tại mốc | 0934 567 890 |
| SH-05 | Doanh nghiệp vừa và nhỏ | Khách hàng bậc Doanh nghiệp | External | Strong | Strong | Hoá đơn VAT hợp lệ; hỗ trợ có cam kết thời gian phản hồi; nhiều chỗ dùng chung một thuê bao; dữ liệu không rời tổ chức | Email — tiếp cận trực tiếp; phỏng vấn yêu cầu tại M1; kiểm thử chấp nhận trước M7 | enterprise@promptvideo.vn |
| SH-06 | Giáo viên và giảng viên | Khách hàng bậc Cá nhân | External | Neutral | Strong | Hiển thị tiếng Việt chính xác; chạy được trên máy cấu hình thấp; bài giảng dài không bị chặn bởi hạn mức độ dài | Các nền tảng MXH — kiểm thử người dùng tại M6; mở kênh phản hồi ngay khi phát hành | education@promptvideo.vn |
| SH-07 | Người sáng tạo nội dung | Khách hàng bậc Cá nhân | External | Neutral | Strong | Tốc độ xuất nhanh; chất lượng hình ảnh không có lỗi nén rõ ràng; được thử bản beta sớm và phản hồi được ghi nhận | Các nền tảng MXH — mời thử beta sớm; kiểm thử người dùng tại M6 | creator@promptvideo.vn |
| SH-08 | Nhà cung cấp cổng thanh toán nội địa | Đối tác | External | Neutral | Weak | Hồ sơ hợp lệ nộp tại M2; tuân thủ quy định về thanh toán và hoá đơn | Email doanh nghiệp — đối soát giao dịch hàng tháng sau phát hành | merchant.support@paygate.vn |

Tài liệu liên quan: [Project Charter](01_Project_Charter_v2.1.md) §9 · [Assumption Log](02_Assumption_Log_v2.1.md).

## Phụ lục A. Đối chiếu luật môn học (thêm khi chuyển sang markdown)

Luật: `knowledge/rules/05_stakeholder-register.md`. Phụ lục này không thay đổi bảng ở trên.

| Mục luật | Mức | Vị trí | Kết quả | Ghi chú |
| --- | --- | --- | --- | --- |
| Identification: tên, vị trí, nơi làm việc, vai trò, liên hệ (PM03:49) | 🔴 | cột Name, Role, Contact | Một phần | Có tên, vai trò, liên hệ. Vị trí và nơi làm việc chỉ có ở SH-01; SH-02 → SH-04 không ghi tổ chức. |
| Assessment: yêu cầu chính, kỳ vọng chính, ảnh hưởng tiềm năng, phase quan tâm nhất (PM03:49) | 🔴 | cột Expectation | Thiếu | Có kỳ vọng. Thiếu cột ảnh hưởng tiềm năng và phase quan tâm nhất; mốc M0–M7 trong cột Communication chỉ là lịch liên lạc. |
| Classification theo một mô hình (PM03:49) | 🔴 | cột Category, Power/Influence, Interest | Một phần | Có Internal/External và Power/Interest, nhưng tài liệu không ghi tên mô hình và thang Strong/Neutral/Weak. |
| Không bỏ sót stakeholder chủ chốt (PM03:36) | 🔴 | toàn bảng | Thiếu | Không có giảng viên (người chấm, xác nhận học thuật) và 3 thành viên nhóm thật; sổ chỉ chứa nhân vật giả định. |
| Lập trước Planning, nhận diện lại định kỳ (PM03:36) | 🔴 | đầu sổ | Một phần | Lập 01/09, trước Planning 24/09. Chưa có ngày rà lại hoặc lịch sử cập nhật. |
| Kỹ thuật phân loại hợp quy mô dự án (PM03:42) | 🟡 | cột Power/Influence, Interest | Đạt | Grid Power/Interest hợp dự án nhỏ. |

**Điểm lệch cần nhóm xử lý (🔵):**

1. Đầu sổ ghi Project Manager là Nguyễn Thế Chiến, trong khi SH-02 và Charter §11 ghi Giám đốc dự án là Lê Hoàng Nam (nhân vật giả định).
2. Lịch sử v2.1 của Charter ghi "đánh số lại SH-01 → SH-09", trong khi Charter §9 và sổ này có 8 bên, SH-01 → SH-08.
3. Cột Contact có số điện thoại và email dạng thật. Vì nhân vật là giả định, cần ghi rõ đây là dữ liệu giả lập; nếu là số thật thì chỉ ghi kênh chung.
4. Bản gốc không có khối xác nhận và lịch sử cập nhật như các tài liệu Initiating khác (DEC-002).
