# Kế hoạch 06 Tích hợp nghiệp vụ và quản trị

## Mục tiêu

Ghép editor, export và backend thành một hành trình MVP hoàn chỉnh, đồng thời cung cấp vận hành tối thiểu cho quản trị viên.

## Checklist

- [ ] Ghép luồng đăng ký/đăng nhập -> tạo project -> preview -> kiểm quyền -> export. **Kiểm chứng:** Playwright chạy luồng từ database sạch đến MP4 tải xuống.
- [ ] Hiển thị plan, quota còn lại, ngày hết hạn và lý do bị chặn ngay tại export panel. **Kiểm chứng:** UI phản ánh đúng capability snapshot sau refresh và sau thay đổi gói.
- [ ] Hoàn thiện Free flow: ba export thành công, export thứ tư bị chặn, cancel không mất lượt. **Kiểm chứng:** E2E và database assertion cùng xác nhận.
- [ ] Hoàn thiện payment sandbox: admin kích hoạt Personal, event trùng an toàn, hết hạn quay lại Free theo policy. **Kiểm chứng:** audit trail có actor/event ID nhưng không có media.
- [ ] Xây admin template catalog: bật/tắt/version template và kiểm tra manifest. **Kiểm chứng:** template inactive biến mất với user nhưng project cũ vẫn mở ở chế độ tương thích.
- [ ] Xây admin operations: health, tổng số user/export, lỗi export theo mã và audit gần nhất. **Kiểm chứng:** user thường nhận 403; dashboard không hiển thị nội dung cá nhân.
- [ ] Thêm form support tối thiểu chỉ nhận mô tả do người dùng chủ động gửi; cảnh báo không đính kèm media ở MVP. **Kiểm chứng:** dữ liệu được phân quyền và có trạng thái Open/In progress/Closed.
- [ ] Chặn mọi payload có trường project/text/image/video tại API boundary. **Kiểm chứng:** negative contract tests trả 400/413 và log chỉ chứa mã lỗi.

## Kịch bản demo bắt buộc

1. Đăng nhập tài khoản Free và tạo project 5 cảnh bằng tiếng Việt.
2. Chọn template, lưu, refresh, mở lại và preview.
3. Xuất 720p có watermark ba lần; lần thứ tư bị chặn.
4. Admin mô phỏng thanh toán Personal; user xuất 1080p không watermark.
5. Admin xem health/usage; network evidence chứng minh media không lên server.

## Hoàn thành khi

- [ ] Kịch bản trên chạy từ đầu đến cuối bằng seed data và hướng dẫn duy nhất.

