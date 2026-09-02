<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                     |                                |
| ------------------- | ------------------------------ |
| **Nhóm tiến trình** | Initiating                     |
| **Tên tài liệu**    | Stakeholder Register           |
| **Phiên bản**       | Ver. 1.0                       |
| **Nhóm thực hiện**  | Nhóm 02                        |
| **Ngày phát hành**  | 2026-09-01                     |
| **Trạng thái**      | Tài liệu sống                  |

<div style="page-break-after: always"></div>

<!-- ======================= TRANG 2 — XÁC NHẬN & LỊCH SỬ ======================= -->

## Xác nhận

| Người tạo       | Người kiểm tra  | Người xác nhận  |
| --------------- | --------------- | --------------- |
| Nguyễn Thế Chiến | Nguyễn Việt Quang | Phạm Quang Anh |
|                 | Phạm Quang Anh | Thầy Nguyễn Đình Quảng |

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| -- | --------- | ------------- | -------------- | ----------------- | --------------- | --------------- |
| 1  | Ver 1.0   | 2026-09-01    | Tạo mới        | Khởi tạo Stakeholder Register: 9 bên liên quan SH-01 → SH-09, phân loại theo Category, Power/Influence và Interest; chuyển bảng chi tiết từ Project Charter §9 sang tài liệu này | Nguyễn Thế Chiến | Phạm Quang Anh |

<div style="page-break-after: always"></div>

<!-- ============================== NỘI DUNG ============================== -->

## 1. Mục đích

Sổ này là đầu ra của tiến trình **Identify Stakeholders**. Nó trả lời: *ai có liên quan tới dự án, họ có bao nhiêu quyền, quan tâm tới mức nào, kỳ vọng gì, và liên lạc với họ qua đâu.*

Sổ được lập trong nhóm tiến trình **Initiating và phải hoàn tất trước khi bắt đầu Planning**, vì mọi kế hoạch tham gia và kế hoạch truyền thông ở Planning đều lấy sổ này làm đầu vào. Lý do tồn tại rất cụ thể: **một bên liên quan chủ chốt không được nhận diện sẽ trở thành rủi ro cao cho dự án.**

[Project Charter §9](./01_Project_Charter_v2.0.md#9-stakeholder-list) chỉ nêu danh sách ở mức cao; toàn bộ chi tiết nằm ở đây. Đây là **tài liệu sống** — rà lại tại mỗi mốc, không phải ký một lần rồi đóng.

---

## 2. Stakeholder Register

| Project | Project Manager | Date |
| ------- | --------------- | ---- |
| PromptVideo — Slide-to-Video Generator | Nguyễn Thế Chiến | 01/09/2026 |

| ID | Stakeholder Name | Role | Category | Power/Influence | Interest | Expectation | Communication | Contact |
| -- | ---------------- | ---- | -------- | --------------- | -------- | ----------- | ------------- | ------- |
| SH-01 | Phạm Quang Anh | Nhà tài trợ — Enticy Studios | Internal | Strong | Strong | Báo cáo tại mỗi mốc M0–M7; được phê duyệt Charter, rà soát tại mốc và quyết định mọi thay đổi lớn | Zalo | SĐT |
| SH-02 | Nguyễn Thế Chiến | Giám đốc dự án | Internal | Strong | Strong | Báo cáo tiến độ hằng tuần kèm số giờ công thực tế; điều hành hằng ngày | Zalo | SĐT |
| SH-03 | Nguyễn Việt Quang | Trưởng nhóm kỹ thuật | Internal | Strong | Strong | Chốt kiến trúc trước khi viết mã; chủ trì nguyên mẫu mã hoá tại M2 | Zalo | SĐT |
| SH-04 | Phạm Quang Anh | Trưởng nhóm sản phẩm | Internal | Strong | Strong | Duyệt mẫu trước mỗi vòng phát triển; thu thập yêu cầu và kiểm thử người dùng | Zalo | SĐT |
| SH-05 | Thầy Nguyễn Đình Quảng | Giảng viên hướng dẫn | External | Strong | Strong | Nộp tài liệu đúng từng mốc tiến trình; đánh giá học thuật theo từng nhóm tiến trình | Zalo | SĐT |
| SH-06 | Doanh nghiệp vừa và nhỏ | Khách hàng bậc Doanh nghiệp | External | Strong | Strong | Hoá đơn VAT hợp lệ, hỗ trợ có cam kết phản hồi, dữ liệu không rời tổ chức; phỏng vấn yêu cầu và kiểm thử chấp nhận | Các nền tảng MXH | Email |
| SH-07 | Giáo viên, giảng viên | Khách hàng bậc Cá nhân | External | Neutral | Neutral | Hỗ trợ tiếng Việt, chạy được trên máy trường, không giới hạn độ dài bài giảng; phỏng vấn yêu cầu và kiểm thử chấp nhận | Các nền tảng MXH | Email |
| SH-08 | Người sáng tạo nội dung | Khách hàng bậc Cá nhân | External | Neutral | Neutral | Bản beta dùng thử sớm, tốc độ xuất nhanh, phản hồi được ghi nhận; tham gia kiểm thử beta | Các nền tảng MXH | Email |
| SH-09 | Nhà cung cấp cổng thanh toán | Đối tác | External | Neutral | Neutral | Hồ sơ hợp lệ nộp tại M2, tuân thủ quy định về thanh toán và hoá đơn; đối soát giao dịch hàng tháng | Email | Email doanh nghiệp |

**Đội 3 người kiêm nhiều vai trò.** Phạm Quang Anh xuất hiện ở hai dòng (SH-01 và SH-04) vì đó là hai vai trò khác nhau với hai loại quyền khác nhau: nhà tài trợ quyết định giá và ngân sách, trưởng nhóm sản phẩm quyết định trải nghiệm. Sổ liệt kê theo **vai trò**, không theo người.

---

## 3. Cách đọc các cột

| Cột | Giá trị dùng | Ý nghĩa |
| --- | ------------ | ------- |
| **Category** | `Internal` · `External` | Bên trong hay bên ngoài tổ chức chủ quản |
| **Power/Influence** | `Strong` · `Neutral` · `Weak` | Mức thẩm quyền và khả năng tác động lên kết quả dự án |
| **Interest** | `Strong` · `Neutral` · `Weak` | Mức quan tâm tới kết quả dự án |
| **Expectation** | Văn bản | Điều bên liên quan mong nhận được, kèm nhịp và cách họ tham gia |
| **Communication** | Văn bản | Kênh liên lạc chính |

Kế hoạch tham gia chi tiết (mức tham gia hiện tại → mức mong muốn) và kế hoạch truyền thông đầy đủ sẽ được lập ở nhóm tiến trình **Planning**, lấy sổ này làm đầu vào.

---

## 4. Phân tích Power × Interest

|                        | **Interest — Strong**                              | **Interest — Neutral / Weak** |
| ---------------------- | -------------------------------------------------- | ----------------------------- |
| **Power — Strong**     | **Quản lý sát** — SH-01, SH-02, SH-03, SH-04, SH-05, SH-06 | *Giữ hài lòng* — không có |
| **Power — Neutral / Weak** | *Giữ thông tin* — SH-07, SH-08, SH-09          | *Theo dõi* — không có |

**Đọc kết quả.** Sáu trên chín bên nằm ở ô **quản lý sát**, và năm trong số đó là người trong đội hoặc giảng viên — nghĩa là rủi ro bên liên quan của dự án này **không nằm ở bên ngoài mà nằm ở bên trong**: mất cam kết thời gian của một thành viên (RS-02) tác động lớn hơn bất kỳ bên ngoài nào.

**SH-06 là ngoại lệ đáng chú ý** — bên ngoài nhưng quyền mạnh, vì bậc Doanh nghiệp là nguồn doanh thu có giá trị đơn cao nhất và là bên duy nhất trả tiền vì lý do pháp lý (hoá đơn VAT) chứ không vì tính năng. Mất nhóm này thì BN-17 mất hoàn toàn.

**SH-09 quyền không mạnh nhưng chặn được cả dự án.** Cổng thanh toán không duyệt hồ sơ thì OB-15 không đạt và không thu được đồng nào — đây là lý do rủi ro RS-10 yêu cầu nộp hồ sơ tại M2 chứ không đợi M6.

---

## 5. Rà soát và cập nhật

| Thời điểm | Việc phải làm | Người chịu trách nhiệm |
| --------- | ------------- | ---------------------- |
| Tại mỗi mốc M0 → M7 | Rà lại danh sách: có bên nào mới xuất hiện, có bên nào đổi mức quyền hoặc mức quan tâm | Giám đốc dự án |
| Khi phát hiện bên liên quan mới | Ghi vào sổ **ngay**, không đợi tới mốc | Người phát hiện |
| Trước khi bắt đầu Planning | Chốt bản dùng làm đầu vào cho kế hoạch tham gia và kế hoạch truyền thông | Giám đốc dự án |

Mã `SH-xx` được đánh số liên tục từ SH-01. Khi một bên liên quan không còn liên quan, ghi rõ trạng thái ở cột Role thay vì xoá dòng, để các tài liệu viện dẫn không bị trỏ hụt.

---

*Tài liệu liên quan: [Project Charter](./01_Project_Charter_v2.0.md) · [Assumption Log](./02_Assumption_Log_v2.0.md) · [Business Case](../00_Pre-project/01_Business_Case_v2.0.md) · [Benefit Management Plan](../00_Pre-project/02_Benefit_Management_Plan_v2.0.md)*
