# Kế hoạch 04 Lõi trình biên tập

## Mục tiêu

Người dùng tạo, chỉnh sửa, xem trước và lưu/mở project 5 cảnh hoàn toàn cục bộ; editor không phụ thuộc backend ngoài auth/template metadata.

## Checklist

- [ ] Xây app shell gồm project dashboard, editor workspace, account và capability banner. **Kiểm chứng:** keyboard navigation tới mọi vùng chính, không cần chuột để lưu/xuất.
- [ ] Hiện thực project store từ schema V1; mọi thay đổi đi qua command có undo/redo. **Kiểm chứng:** 20 thao tác undo/redo trả về đúng project ban đầu và cuối.
- [ ] Xây scene list đúng 5 cảnh với reorder, duration và tổng thời lượng mặc định 60 giây. **Kiểm chứng:** validation ngăn duration âm, scene thiếu và tổng timeline không hợp lệ.
- [ ] Xây text layer hỗ trợ tiếng Việt, căn chỉnh, cỡ/chữ/màu, xuống dòng và safe area. **Kiểm chứng:** bộ chuỗi dấu tiếng Việt không mất glyph hoặc cắt dấu ở preview.
- [ ] Xây image import bằng object URL/OPFS, crop kiểu cover/contain, position và scale. **Kiểm chứng:** EXIF orientation đúng; file lỗi/quá lớn có thông báo và không làm hỏng project.
- [ ] Xây hệ template theo manifest và đủ 5 template; template chỉ tạo style/layout, không chứa business logic. **Kiểm chứng:** một project đổi qua 5 template mà dữ liệu người dùng không mất.
- [ ] Dùng cùng `renderFrame(project, timestamp, surface)` cho preview và export. **Kiểm chứng:** snapshot preview tại các timestamp chuẩn khớp snapshot export.
- [ ] Lưu metadata vào IndexedDB, blob vào OPFS; thêm autosave và phục hồi crash. **Kiểm chứng:** refresh/offline vẫn mở lại project và ảnh.
- [ ] Thêm export/import gói project có version/migration và checksum asset. **Kiểm chứng:** project chuyển giữa hai máy mở được; file giả mạo/sai version bị chặn an toàn.

## Hoàn thành khi

- [ ] Người dùng hoàn tất một project mẫu mà không cần backend đang online, trừ bước kiểm quyền xuất.
- [ ] DevTools Network chứng minh thao tác editor không gửi nội dung/media.

