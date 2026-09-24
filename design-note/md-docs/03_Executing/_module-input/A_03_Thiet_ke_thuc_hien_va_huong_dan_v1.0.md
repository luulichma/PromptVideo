# A_03 — Thiết kế, thực hiện và hướng dẫn module A

**Cập nhật:** 24/09/2026 · **Phiên bản:** v1.0 · **Trạng thái:** Dự thảo làm việc, chưa nghiệm thu.

**Chủ nội dung:** Chiến. **Kiểm tra được giao:** Việt Quang. Đây là phân công, không phải chữ ký hay xác nhận đã review. Codex cập nhật nội dung theo ủy quyền của người dùng.

## 1. Thiết kế đã có trong kho mã

Frontend React/Vite tách `features/editor` và `core`. `core/project` sở hữu schema, validation và timeline; `core/rendering` dựng Canvas và chữ; `core/export` dùng Worker, WebCodecs và Mediabunny; `core/storage` giữ dữ liệu cục bộ. Theo ranh giới thiết kế, project và media không được gửi lên API.

| WBS | Thành phần và đầu ra hiện có | Giới hạn cần theo dõi |
| --- | --- | --- |
| 3.1 | Prototype/probe, benchmark và quyết định xuất bằng WebCodecs | EV-003/004 là dữ liệu lịch sử; chưa chứng minh 1080p |
| 3.2 | ProjectDocumentV1, cảnh và validation | Thiếu snapshot/phiên bản mẫu; ISS-G-002 |
| 4.2.1–3 | Editor chữ/ảnh, 5 mẫu, render/preview, undo/redo | Chưa đủ bộ 134 tổ hợp và checksum trên 3 máy |
| 4.2.4 | Worker, MP4, ghi luồng, tiến trình, ETA và hủy | Pause/resume thuộc PP 4.2.7; lỗi complete vẫn có thể giao file |
| 4.2.5 | IndexedDB/OPFS, gói checksum và phục hồi | Cần migration mẫu khi sửa schema |
| 4.2.6 | Client quyền và catalog Active | IF-AB/CA đã chốt hành vi đích; ISS-G-001/002 chưa được sửa trong mã |
| 5.1 | Test unit và E2E mock trong kho mã | Chưa đủ TC-I với máy chủ thật |

## 2. Cách chạy và sử dụng

Theo [E03](../03_Installation_User_and_Operations_Guide_v1.0.md), chạy API và frontend, cài dependencies theo lockfile. Tạo dự án 5 cảnh/60 giây, nhập chữ/ảnh cục bộ, chọn mẫu, xem trước rồi đăng nhập trước khi xuất. Free được xuất 720p có watermark; quyền từ máy chủ quyết định chất lượng, UI không tự cấp 1080p.

Chạy unit bằng `npm test` tại `src/frontend`; E2E mock bằng `npm run test:e2e`; benchmark riêng bằng `npm run benchmark`. Không suy ra TC-I đạt từ E2E có `page.route`. Khi đo, ghi hệ điều hành, CPU, RAM, trình duyệt, codec probe, đầu vào và hash đầu ra.

## 3. Nhật ký thực hiện kỳ này

Ngày 24/09: chuẩn hóa A_01/A_02, ánh xạ WBS, đổi kỳ vọng TC-A-20/36 theo DEC-011, viết hợp đồng giao tiếp và hồ sơ chung; chạy frontend unit đạt 79/79 (EV-001), đọc mã đối chiếu (EV-005).

Giờ thực tế của Chiến và chi phí thực tế **chưa được cung cấp**; ghi vào E05 sau khi có nguồn. Thời gian chạy suite 3.44 giây không phải giờ công của thành viên.

## 4. Bài học và việc tiếp nối

Cơ chế đóng reservation hiện tại có thể bỏ qua lỗi, khiến UI báo thành công dù máy chủ chưa xác nhận. Hợp đồng phải bao gồm đường lỗi và cơ chế ghi tạm/xác nhận hoàn tất; cần sửa API client, luồng export, UI và test hồi quy.

Phiên bản metadata trên máy chủ chưa đủ giữ diện mạo dự án cũ nếu scene chỉ lưu templateId. Hai khoảng trống đã được ghi thành ISS-G; trạng thái “có mã” không thay kết quả xử lý.
