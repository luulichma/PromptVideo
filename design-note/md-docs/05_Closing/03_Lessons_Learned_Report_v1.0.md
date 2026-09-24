# C03 — Bài học kinh nghiệm có hành động

**Cập nhật:** 24/09/2026 · **Phiên bản:** v1.0 · **Trạng thái:** Dự thảo làm việc, chưa nghiệm thu.

**Chủ nội dung:** Quang Anh. **Kiểm tra được giao:** Chiến. Đây là phân công, không phải chữ ký hay xác nhận đã review. Codex cập nhật nội dung theo ủy quyền của người dùng.

| Bài học và nguồn | Nguyên nhân | Thay đổi áp dụng | Người duy trì |
| --- | --- | --- | --- |
| Mã WBS 3.x/7.x/8.x khác nhau | Chia tài liệu trước khi có danh mục mã chung | Dùng một WBS sáu nhánh, giữ ánh xạ lịch sử và kiểm ID khi ghép | Chiến |
| Ước lượng thiếu phần thanh toán, hóa đơn và seats | Nhầm dữ liệu policy với tính năng đầy đủ | Tách PP, ước lượng từ dưới lên thành 599 giờ, không ép về 450 giờ | Việt Quang |
| TC-A được tạo lại trong C; audio/video nằm ngoài Charter | Module được viết độc lập, thiếu hợp đồng giao tiếp | Mỗi TC có một người sở hữu; P03 giữ TC-I; phạm vi phải có nguồn | Quang Anh |
| Unit test đạt nhưng complete/quota còn khác hành vi đích | Test kế thừa hành vi hiện có | Review kỳ vọng khi chốt hợp đồng, thử lại ngoại lệ TTL và mất mạng | Chiến / Việt Quang |
| Phiên bản catalog không giữ được diện mạo dự án cũ | Thiếu snapshot trong dữ liệu dự án | Bổ sung schema/migration và test Retired/offline | Chiến / Quang Anh |
| CPM và giờ ngân sách bị nhầm với actual | Không có work log; PP chưa phân rã | Tách forecast, ETC và actual; để trống EVM khi thiếu đầu vào | Việt Quang |
| Benchmark bị diễn giải vượt phạm vi đo | Số đo không gắn đúng môi trường và phạm vi | EV INDEX ghi đầu vào, máy, build và giới hạn; phân biệt heap luồng chính với bộ nhớ Worker | Quang Anh |
| Tên người trong hồ sơ dễ bị hiểu là đã duyệt | Dùng mẫu ký để ghi phân công | Ghi rõ người được giao kiểm tra và trạng thái chưa ký; thực hiện M06 đúng trình tự | Chiến |

Các bài học lấy từ lần rà ngày 24/09 và nguồn đã có; không giả lập cuộc phỏng vấn hồi cứu. Sau cuộc họp, bổ sung ý kiến thành viên và kết quả áp dụng từng hành động.
