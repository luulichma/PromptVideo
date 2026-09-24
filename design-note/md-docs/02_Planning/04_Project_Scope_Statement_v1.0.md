# P04 — Tuyên bố phạm vi dự án

**Phiên bản:** v1.0 · cập nhật 24/09/2026. **Trạng thái:** Working Draft đã chuẩn hóa nội dung; chưa nghiệm thu.

**Chủ nội dung:** Chiến. **Người kiểm tra được giao:** Việt Quang. Việc ghi tên là phân công, không phải chữ ký xác nhận. Nội dung được cập nhật bằng Codex theo ủy quyền của người dùng.

## 1. Sản phẩm và đầu ra

Tạo, soạn, lưu và xuất MP4 từ chữ/ảnh cục bộ. A phụ trách renderer/editor/export; B phụ trách tài khoản, thuê bao, quota, thanh toán; C phụ trách quản trị mẫu, tài sản, hỗ trợ, giám sát. Giữ toàn phạm vi Charter, gồm phần chưa làm trong PP. Bộ quản lý gồm Planning, thực hiện, kiểm soát và bàn giao. Pre-project/Initiating dùng bản đã có và rà liên kết/phiên bản.

| Nhóm đầu ra | WBS sở hữu | Tiêu chí / nơi truy vết |
| --- | --- | --- |
| Hồ sơ quản lý, yêu cầu, thiết kế | 1.x, 2.x, 3.x | Mã duy nhất, từ điển và ước lượng, RTM, giao tiếp; P01–13 |
| Nền tảng/CI | 4.1 | Build/test có log; Auth/CSRF/OpenAPI; E01 |
| Editor/render/export/storage | 4.2.1–7 | REQ-A-01–14, NF-A-01–10; pause còn PP |
| Identity/quota/payment/subscription/invoice/seats | 4.3.1–6 | REQ-B/NF-B; hóa đơn và chỗ giữ PP; fake không thay cổng thật |
| Templates/assets/support/metrics/health/admin | 4.4.1–4 | REQ-C/NF-C; support/UI chưa triển khai vẫn thuộc phạm vi |
| Tích hợp và kiểm thử nghiệm thu | 5.1–3 | TC-I; 1080p, bộ nhớ ×10, 3 máy, 134 tổ hợp, 100 lần, 10 người thử |
| Triển khai/hướng dẫn/đóng gói/nghiệm thu | 6.1–4 | Rollback/restore, hướng dẫn, tồn đọng, chữ ký thật khi đủ điều kiện |

## 2. Demo và loại trừ

Demo 5 cảnh/60 giây, chữ tiếng Việt và ảnh cục bộ, một mẫu, preview, MP4 Free 720p có watermark; ba lượt rồi chặn lần thứ tư và thử hủy. Demo Admin fake Personal ở nonProduction và mẫu Retired nếu môi trường/probe cho phép. Demo một mẫu không xóa yêu cầu 5 mẫu; probe 1080p thất bại không tự hạ tiêu chí Charter.

Loại trừ audio/TTS/nhạc, AI, khung dọc, upload nội dung lên server, cloud sync và tính năng ngoài Charter. NF-07/NF-08 vẫn trong danh mục tuân thủ cấp Charter với trạng thái chưa xác minh. Đợt này không tự thêm nhiệm vụ rà giấy phép khi hướng dẫn nguồn không giao việc đó.

## 3. Giả định, ràng buộc và nghiệm thu

Công suất 10 giờ/người/tuần chưa được xác nhận; Docker, máy đo và người thử là điều kiện cần. Tiền mặt 3,5 triệu VND; công tham chiếu 450 giờ/trần 495 giờ; forecast 599 giờ cần CR-G-001. Không ghi OB/NF đạt chỉ vì có code.

P09 nối từng REQ/NF với Charter, thiết kế, code, TC và trạng thái; từ điển P05 quy định đầu ra; P06 quy định ngưỡng kiểm. QC cung cấp bằng chứng → người có thẩm quyền Validate Scope (M06) → bàn giao/Close. Phê duyệt kế hoạch, review tài liệu và nghiệm thu sản phẩm là ba trạng thái khác nhau.

## 4. Xử lý phần chưa hoàn thành

Giữ PP và chủ việc trong WBS, phân rã trước cổng thiết kế liên quan. ISS-G-001/002/003 là việc đã biết, sửa trong gói hiện hành; không ghi lại thành risk ngẫu nhiên để cộng chi phí.

Đổi tiêu chí/phạm vi phải có CR phân tích tác động và quyết định đúng thẩm quyền; không xóa dòng RTM để làm số liệu đẹp hơn.
