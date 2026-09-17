# Capability matrix — Plan 01

Ma trận này khóa cách sản phẩm phản ứng theo capability runtime; ô bằng chứng thực tế chỉ được điền từ JSON do probe sinh ra.

| Môi trường | Editor/preview | H.264 MP4 | AAC | Output ưu tiên | Chính sách MVP |
| --- | --- | --- | --- | --- | --- |
| Chrome/Edge hiện hành · Windows | Có | Probe 720p + 1080p | Probe | File handle → OPFS → Buffer | Tier 1; export khi probe đạt |
| Chrome hiện hành · macOS/Linux | Có | Probe 720p + 1080p | Probe; AAC có thể thiếu trên Linux | OPFS → File handle nếu có → Buffer | Tier 1; khóa audio nếu AAC không đạt |
| Safari hiện hành · macOS | Có | Probe | Probe | OPFS/Buffer theo capability | Tier 2; export chỉ bật khi probe đạt |
| Firefox hiện hành · desktop | Có | Probe | Dự kiến không có AAC WebCodecs | OPFS/Buffer theo capability | Tier 2; preview mặc định, export có điều kiện |
| Mobile/browser cũ | Không cam kết | Không cam kết | Không cam kết | Không cam kết | Ngoài phạm vi MVP |

## Quy tắc capability

- Không dùng user-agent để quyết định encode; luôn gọi `VideoEncoder.isConfigSupported()`/`AudioEncoder.isConfigSupported()`.
- H.264 MP4 là cấu hình tương thích chính; codec string probe là `avc1.42001f`.
- AAC-LC probe dùng `mp4a.40.2`, 48 kHz, stereo, 128 kbps.
- `BufferTarget` giữ toàn bộ file đã nén trong RAM, không giữ raw frame. Với file lớn, ưu tiên StreamTarget.
- Mọi báo cáo lưu user agent, platform, CPU logical threads, RAM ước lượng (nếu browser cung cấp), thời gian, peak JS heap (nếu có), file size và lỗi codec.

