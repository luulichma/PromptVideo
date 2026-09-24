# M01 — Báo cáo trạng thái ngày 24/09/2026

**Cập nhật:** 24/09/2026 · **Phiên bản:** v1.0 · **Trạng thái:** Dự thảo làm việc, chưa nghiệm thu.

**Chủ nội dung:** Việt Quang. **Kiểm tra được giao:** Quang Anh. Đây là phân công, không phải chữ ký hay xác nhận đã review. Codex cập nhật nội dung theo ủy quyền của người dùng.

## 1. Tình trạng tổng thể

**Hồ sơ đã được chuẩn hóa; sản phẩm chưa đủ điều kiện nghiệm thu.** Pre-project và Initiating có bản hiện hữu. Planning có đầu vào của ba module và bộ kế hoạch ghép; số liệu dùng chung một hệ WBS/REQ/TC. Executing, Monitoring và Closing ghi tiến độ, bằng chứng và dự thảo bàn giao theo dữ liệu đang có.

## 2. Phạm vi, thời gian và chi phí

Dự báo toàn phạm vi gồm 32 gói, tổng cộng **599 giờ = 427 giờ WP + 172 giờ PP**. WP là gói công việc đã phân rã; PP là gói kế hoạch cần tiếp tục phân rã. Tổng này cao hơn mức 450 giờ là 149 giờ và cao hơn trần 495 giờ là 104 giờ.

Giá trị công sức quy đổi là 47.92 triệu đồng theo đơn giá 80 nghìn đồng/giờ. Ngân sách tiền mặt 3.5 triệu đồng gồm 3.1 triệu đồng dự trù và 400 nghìn đồng dự phòng; đây chưa phải số đã chi. Dự phòng rủi ro dự thảo 46.2 giờ được tách khỏi 599 giờ; dự phòng quản lý chưa được phân bổ. CR-G-001 chọn điều chỉnh lịch và nguồn lực để giữ phạm vi; chưa có baseline được phê duyệt.

Năng lực 10 giờ/người/tuần là giả định. P10 tính thời lượng theo quan hệ phụ thuộc của WP là 83.5 ngày làm việc; sau san bằng nguồn lực là 151.167 ngày làm việc, với 2 giờ/người/ngày và giả định làm toàn bộ WP từ 24/09. Các số này **không phải ngày hoàn thành dự án hoặc công sức còn lại (ETC)**: nhiều WP đã có mã, chưa có actual/ETC, 172 giờ PP chưa được phân rã và còn phụ thuộc bên ngoài. Các mốc 26/09, 29/09, 02/10, 05/10 và 07/10 là lịch hoàn thiện hồ sơ đã chọn.

## 3. Chất lượng và vấn đề cần xử lý

Frontend đạt 79/79 unit test. Backend có 60 ca: 18 đạt và 42 thất bại do môi trường Docker/Testcontainers. Các vấn đề đang mở gồm ISS-G-001 (xác nhận complete), ISS-G-002 (snapshot mẫu), ISS-G-003 (chống lặp yêu cầu checkout), ISS-G-004 (Docker) và ISS-G-005 (thiếu actual/baseline).

Cổng thanh toán thật, hóa đơn, seats, giao diện Admin, hỗ trợ, các phép thử theo Charter và vận hành production chưa đầy đủ. M03 ghi người xử lý từng vấn đề; việc sửa tài liệu không tự chuyển chúng thành Done.

## 4. Công việc kỳ tiếp

Việt Quang khôi phục môi trường, quản lý actual và xử lý chống lặp yêu cầu checkout. Chiến phối hợp Việt Quang sửa và thử complete/quota; phối hợp Quang Anh xử lý snapshot mẫu. Quang Anh tổng hợp bằng chứng và tổ chức kiểm thử chéo. Ba người xác nhận ETC và thời gian có thể dành cho dự án trong cuộc họp, rồi cập nhật P10 và CR-G-001. Người kiểm tra chéo phải ghi kết quả thực tế trước khi đóng trách nhiệm.

Không báo phần trăm hoàn thành dự án hoặc SPI/CPI khi chưa có PV/EV/AC đủ căn cứ. M04 để trống chỉ số không tính được khi thiếu đầu vào.
