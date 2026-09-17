# Kế hoạch 01 Kiểm chứng khả thi video đa nền tảng

## Mục tiêu

Loại bỏ rủi ro kỹ thuật lớn nhất trước khi xây editor: một project 5 cảnh/60 giây có thể được render và xuất MP4 hoàn toàn ở client với thời gian, bộ nhớ và mức hỗ trợ browser chấp nhận được.

## Checklist

- [x] Tạo trang probe tối thiểu trong `src/frontend` để báo WebCodecs, codec H.264/AAC, OffscreenCanvas, OPFS và File System Access. **Kiểm chứng:** kết quả có thể tải xuống dạng JSON kèm browser/OS.
- [x] Định nghĩa `ProjectDocumentV1`, `SceneV1`, `TextLayerV1`, `ImageLayerV1`, `TemplateManifestV1` và schema Zod. **Kiểm chứng:** dữ liệu hợp lệ round-trip JSON; dữ liệu sai version bị từ chối với lỗi rõ.
- [x] Viết renderer Canvas 2D thuần TypeScript cho một cảnh có nền, ảnh và chữ tiếng Việt; dùng font được bundle. **Kiểm chứng:** cùng timestamp cho ra ảnh snapshot ổn định trên ba lần chạy.
- [x] Tạo project benchmark 5 cảnh, tổng 60 giây, 30 fps; render frame theo `frameIndex/fps`, không dùng thời gian thực. **Kiểm chứng:** frame tại ranh giới cảnh và transition khớp timestamp kỳ vọng.
- [ ] Dùng WebCodecs và Mediabunny tạo MP4 720p, sau đó thử 1080p và watermark. **Kiểm chứng:** file phát được, duration sai không quá một frame, không có frame đen đầu/cuối.
- [x] Thử hai output path: stream/chunk vào OPFS hoặc file handle khi có; `BufferTarget -> Blob download` khi không có. **Kiểm chứng:** export 60 giây không giữ toàn bộ frame thô trong RAM.
- [ ] Đo thời gian, peak memory, kích thước file và lỗi codec trên Tier 1/Tier 2. **Kiểm chứng:** lưu bảng kết quả kèm cấu hình CPU/RAM/OS/browser, không ghi nhận bằng cảm tính.
- [ ] Ghi quyết định spike và khóa capability matrix. **Kiểm chứng:** nêu rõ codec/container, fallback, browser bị giới hạn và trigger phải xem lại kiến trúc.

## Ngưỡng Go No Go

- **Go:** Tier 1 xuất được MP4 720p 60 giây dưới 5 phút; peak memory không vượt 1.5 GB trên máy chuẩn; ba lần export liên tiếp không rò tài nguyên rõ rệt.
- **Go có điều kiện:** Tier 1 đạt nhưng Tier 2 không encode được; giữ Tier 2 ở editor/preview và hiển thị thông báo capability trước export.
- **No Go:** Tier 1 không đạt thời gian/bộ nhớ hoặc codec không ổn định. Khi đó mới đánh giá encoder WASM/desktop shell; không âm thầm thêm FFmpeg WASM vào bundle chính.

## Hoàn thành khi

- [ ] Có MP4 mẫu, báo cáo benchmark và ADR quyết định pipeline.
- [ ] Các giả định “xử lý theo luồng”, “0 byte lên server” và “cross-platform” đã có bằng chứng ban đầu.
