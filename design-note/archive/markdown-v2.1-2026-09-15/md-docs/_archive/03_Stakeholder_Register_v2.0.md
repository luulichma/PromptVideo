# PromptVideo — Slide-to-Video Generator

**Initiating · Stakeholder Register · Ver. 2.0**

Nhóm 02 · Ngày phát hành: 2026-09-13 · Trạng thái: Tài liệu sống

| Xác nhận | Người tạo | Người kiểm tra | Người xác nhận |
| :-: | :-: | :-: | :-: |
| Nguyễn Thế Chiến | Phạm Quang Anh | Nguyễn Việt Quang | |
| | Nguyễn Việt Quang | Thầy Nguyễn Đình Quảng | |

## Lịch sử cập nhật

| No | Phiên bản | Ngày | Lý do | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 1 | Ver 1.0 | 2026-09-01 | Tạo mới | Khởi tạo danh sách bên liên quan tách từ Project Charter §9 | Nguyễn Thế Chiến | Phạm Quang Anh |
| 2 | Ver 2.0 | 2026-09-13 | Chỉnh sửa | Bổ sung Giảng viên hướng dẫn còn thiếu và đánh số lại SH-01 → SH-09 cho khớp Charter §9; mô tả khách hàng theo tệp kèm đặc điểm chung thay vì cá nhân cụ thể; chuyển toàn bộ nhân vật sang tên giả định; bổ sung chiến lược tác động | Nguyễn Thế Chiến | Phạm Quang Anh |

## Mục lục

1. Mục đích và quy ước
2. Cách phân loại
3. Bên liên quan nội bộ
4. Tệp khách hàng
5. Bên liên quan bên ngoài khác
6. Chiến lược tác động

## 1. Mục đích và quy ước

Sổ này ghi lại các bên có ảnh hưởng tới dự án hoặc chịu ảnh hưởng từ dự án, kèm kỳ vọng của họ và cách trao đổi. Nó là bản chi tiết của danh sách mức cao tại Project Charter §9.

**Toàn bộ nhân vật trong sổ này là giả định.** Enticy Studios là tổ chức chủ quản giả định, nên các cá nhân đại diện cho từng vai trò cũng là nhân vật hư cấu. Việc ánh xạ từng vai trò sang thành viên thật của nhóm ghi tại Project Charter §11.4.

Khách hàng được mô tả theo **tệp**, không chỉ đích danh một cá nhân. Mỗi tệp phải có đặc điểm chung đủ rõ để suy ra được yêu cầu và cách tiếp cận; nếu không nêu được đặc điểm chung thì đó không phải một tệp mà chỉ là một danh sách rời rạc.

Sổ được cập nhật khi có bên liên quan mới xuất hiện, hoặc khi mức ảnh hưởng và mức quan tâm của một bên thay đổi.

## 2. Cách phân loại

**Mức ảnh hưởng** là khả năng tác động tới quyết định của dự án. **Mức quan tâm** là mức độ bên đó bị ảnh hưởng bởi kết quả dự án. Hai trục này quyết định cách đối xử:

- Ảnh hưởng cao, quan tâm cao — quản lý sát, hỏi ý kiến trước khi quyết
- Ảnh hưởng cao, quan tâm thấp — giữ hài lòng, báo cáo đủ, không làm phiền
- Ảnh hưởng thấp, quan tâm cao — giữ thông tin đầy đủ, thu thập phản hồi
- Ảnh hưởng thấp, quan tâm thấp — theo dõi, trao đổi khi cần

## 3. Bên liên quan nội bộ

| ID | Vai trò | Người đại diện (giả định) | Ảnh hưởng | Quan tâm | Kỳ vọng chính | Cách trao đổi |
| :-: | :-- | :-- | :-: | :-: | :-- | :-- |
| SH-01 | Nhà tài trợ — Nhà sáng lập kiêm Giám đốc điều hành Enticy Studios | Trần Minh Đức | Cao | Cao | Phê duyệt Charter, quyết định mọi thay đổi lớn, nhận bàn giao và vận hành dịch vụ trong 3 năm sau đó | Báo cáo tại mỗi mốc M0–M7; họp riêng khi có vấn đề vượt cấp |
| SH-02 | Giám đốc dự án | Lê Hoàng Nam | Cao | Cao | Điều hành hằng ngày, giữ tiến độ và ngân sách, ráp bộ tài liệu quản lý dự án | Báo cáo tiến độ hằng tuần kèm số giờ công thực tế |
| SH-03 | Trưởng nhóm kỹ thuật | Đỗ Bảo Long | Cao | Cao | Chốt kiến trúc trước khi viết mã; chủ trì nguyên mẫu mã hoá theo luồng tại M2 | Họp kỹ thuật hằng tuần; xác nhận nghiệm thu tại mốc |
| SH-04 | Trưởng nhóm sản phẩm | Vũ Khánh Linh | Cao | Cao | Duyệt mẫu trước mỗi vòng phát triển; thu thập yêu cầu và chủ trì kiểm thử người dùng | Họp sản phẩm hằng tuần; xác nhận nghiệm thu tại mốc |

Đội thực tế chỉ có 3 người nên một người kiêm nhiều vai trò trong bảng trên. Việc chia nhiệm vụ theo module nghiệp vụ ghi tại Project Charter §11.4, không ghi ở đây.

## 4. Tệp khách hàng

Ba tệp dưới đây lấy từ phân tích nhu cầu tại Business Case §2, giữ nguyên tần suất sử dụng đã nêu ở đó để hai tài liệu khớp nhau.

| ID | Tệp | Đặc điểm chung | Nhu cầu đặc thù | Ảnh hưởng | Quan tâm |
| :-: | :-- | :-- | :-- | :-: | :-: |
| SH-06 | Doanh nghiệp vừa và nhỏ | Cần 4–8 video mỗi tháng cho tiếp thị và đào tạo nội bộ; có bộ phận kế toán nên cần chứng từ hợp lệ; nội dung chứa số liệu kinh doanh không muốn đưa lên máy chủ bên thứ ba; ngân sách phần mềm duyệt theo năm | Hoá đơn VAT hợp lệ; hỗ trợ có cam kết thời gian phản hồi; nhiều chỗ dùng chung một thuê bao; dữ liệu không rời tổ chức | Cao | Cao |
| SH-07 | Giáo viên và giảng viên | Cần 5–20 video mỗi học kỳ, dồn vào đầu và cuối kỳ; dùng máy của trường, cấu hình yếu và mạng không ổn định; nội dung có thông tin học sinh; tự bỏ tiền nên nhạy cảm về giá | Hiển thị tiếng Việt chính xác; chạy được trên máy cấu hình thấp; bài giảng dài không bị chặn bởi hạn mức độ dài | Trung bình | Cao |
| SH-08 | Người sáng tạo nội dung | Cần 10–30 video mỗi tháng, làm việc theo nhịp gấp; quen công cụ dựng phim nên đòi hỏi cao về chất lượng hình ảnh; nhạy với tốc độ xuất file hơn là với giá | Tốc độ xuất nhanh; chất lượng hình ảnh không có lỗi nén rõ ràng; được thử bản beta sớm và phản hồi được ghi nhận | Trung bình | Cao |

Cách tiếp cận từng tệp trong dự án: phỏng vấn yêu cầu và phỏng vấn giá tại M1, kiểm thử người dùng tại M6, kiểm thử chấp nhận trước M7. Tệp Doanh nghiệp được tiếp cận trực tiếp thay vì chờ họ tự đăng ký, vì đây là phân khúc có giá trị mỗi khách hàng cao nhất và số lượng mục tiêu nhỏ.

## 5. Bên liên quan bên ngoài khác

| ID | Bên liên quan | Vai trò | Ảnh hưởng | Quan tâm | Kỳ vọng chính | Cách trao đổi |
| :-: | :-- | :-- | :-: | :-: | :-- | :-- |
| SH-05 | Giảng viên hướng dẫn (giả định: Thầy Bùi Trọng Nghĩa) | Đánh giá học thuật | Cao | Cao | Bộ tài liệu đầy đủ theo các nhóm tiến trình, nộp đúng hạn, đúng cấu trúc đã thống nhất | Nộp tài liệu trước hạn ít nhất 5 ngày làm việc; báo cáo tại mốc |
| SH-09 | Nhà cung cấp cổng thanh toán nội địa | Đối tác | Trung bình | Thấp | Hồ sơ hợp lệ nộp tại M2; tuân thủ quy định về thanh toán và hoá đơn | Email doanh nghiệp; đối soát giao dịch hàng tháng sau phát hành |

## 6. Chiến lược tác động

| Nhóm | Chiến lược | Việc phải làm |
| :-- | :-- | :-- |
| SH-01, SH-05 — ảnh hưởng cao, quan tâm cao | Quản lý sát | Hỏi ý kiến trước mọi quyết định lớn; báo cáo tại mọi mốc; không để bất ngờ ở phút chót |
| SH-02, SH-03, SH-04 — đội dự án | Điều hành trực tiếp | Họp hằng tuần; kiểm tra chéo tài liệu; cam kết thời gian bằng văn bản tại M0 và rà lại mỗi 2 tuần |
| SH-06 — khách hàng Doanh nghiệp | Giữ hài lòng, tiếp cận chủ động | Phỏng vấn yêu cầu sớm tại M1; mời kiểm thử chấp nhận; xác nhận quy trình xuất hoá đơn trước M6 |
| SH-07, SH-08 — khách hàng Cá nhân | Giữ thông tin đầy đủ, thu phản hồi | Kiểm thử người dùng tại M6; mở kênh phản hồi ngay khi phát hành; phỏng vấn mọi khách hàng rời bỏ |
| SH-09 — cổng thanh toán | Theo dõi | Nộp hồ sơ tại M2; nếu quá 3 tuần chưa có phản hồi thì kích hoạt phương án thu bằng chuyển khoản |

Hai rủi ro về bên liên quan cần theo dõi. Thứ nhất, giảng viên hướng dẫn phản hồi chậm hơn 5 ngày làm việc sẽ chặn tiến độ mốc kế tiếp, nên tài liệu phải gửi sớm và việc duyệt không được nằm trên đường găng. Thứ hai, cả ba tệp khách hàng hiện chưa được phỏng vấn thật; mọi con số về giá và số thuê bao vẫn là giả định chưa xác minh, đăng ký tại Assumption Log.

---

*Tài liệu liên quan: Project Charter · Business Case · Assumption Log · Communications Management Plan (Planning).*
