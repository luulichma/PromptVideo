# M02 — Báo cáo chất lượng và kiểm thử

**Cập nhật:** 24/09/2026 · **Phiên bản:** v1.0 · **Trạng thái:** Dự thảo làm việc, chưa nghiệm thu.

**Chủ nội dung:** Quang Anh. **Kiểm tra được giao:** Chiến. Đây là phân công, không phải chữ ký hay xác nhận đã review. Codex cập nhật nội dung theo ủy quyền của người dùng.

## 1. Kết quả xác minh kỳ này

| Lần kiểm tra | Kết quả thực tế | Giới hạn |
| --- | --- | --- |
| Frontend Vitest ngày 24/09 | 79/79 ca đạt trong 12 file; EV-001 | Chỉ là unit test hiện có; không chứng minh coverage 70% hoặc TC-I đạt |
| Backend xUnit ngày 24/09 | 18 ca đạt, 42 ca thất bại, tổng 60 ca; EV-002 | 42 ca thất bại do môi trường Docker/Testcontainers; chưa đánh giá được logic nghiệp vụ của các ca integration này |
| Rà mã và hợp đồng ngày 24/09 | Phát hiện ISS-G-001/002/003; EV-005 | Rà tĩnh; cần kiểm thử hồi quy sau khi sửa |
| Benchmark lịch sử | Có số đo 720p và heap của luồng chính; EV-003/004 | Không thay bằng chứng 1080p, bộ nhớ Worker, phép lặp ×10 hoặc kiểm tra trên 3 máy |

Không cộng 79 ca frontend và 18 ca backend thành tỷ lệ nghiệm thu sản phẩm. Phạm vi kiểm tra khác nhau và 42 ca chưa chạy được phần nghiệp vụ. A_01 cũ có báo cáo E2E dùng mock ngày 23/09; không ghi kết quả đó thành lần chạy ngày 24/09.

## 2. Những tiêu chí chưa đủ bằng chứng

- TC-I-01–06 và HAR chứng minh 0 byte nội dung gửi lên máy chủ.
- Xuất 1080p trong thời gian ≤1.5× trên máy tham chiếu; tăng bộ nhớ sau ×10 lần xuất <15%; checksum giống nhau trên 3 máy.
- 134 tổ hợp dấu tiếng Việt; 100 lần xuất với tỷ lệ thành công ≥95%; ít nhất 8 trong 10 người mới hoàn thành trong 10 phút.
- Coverage ≥70%; thanh toán thật; uptime trong 30 ngày.
- Hỗ trợ, giao diện Admin, hóa đơn và seats.

P06 ghi tiêu chí và người phụ trách; P09 quản lý truy vết; M05 giữ kết quả và lỗi.

## 3. Điều kiện kiểm lại và chuyển nghiệm thu

Khôi phục Docker, chạy lại backend và lưu log mới. Hoàn thiện phần mã còn lệch hợp đồng, chạy từng TC với kỳ vọng đã chốt, sau đó review bằng chứng. Chỉ đóng lỗi khi người kiểm tra đã xác minh lại. Chỉ đưa sang M06 khi đáp ứng tiêu chí của phạm vi được phê duyệt. Ca Blocked hoặc Not Run không được ghi Pass.
