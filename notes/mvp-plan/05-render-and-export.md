# Kế hoạch 05 Render và xuất MP4

## Mục tiêu

Biến project thành preview và MP4 xác định theo frame, có progress/cancel, tuân thủ quyền và không làm treo giao diện.

## Checklist

- [x] Tách renderer khỏi React; input duy nhất là project, timestamp và surface. **Kiểm chứng:** renderer chạy được trong unit test/browser harness không mount UI.
- [x] Hoàn thiện layout ảnh/chữ, background và transition tối thiểu cho 5 template. **Kiểm chứng:** golden image tại đầu/giữa/cuối mỗi cảnh đạt ngưỡng pixel diff đã định.
- [x] Chuyển vòng render/export sang worker; chỉ gửi command và progress qua message. **Kiểm chứng:** UI vẫn phản hồi khi export; không gửi bitmap thô qua lại mỗi frame nếu tránh được.
- [x] Kiểm capability bằng `VideoEncoder.isConfigSupported` trước khi cho xuất. **Kiểm chứng:** cấu hình không hỗ trợ bị chặn trước khi reserve quota.
- [x] Tích hợp entitlement: reserve trước export, complete khi finalize, cancel/expire khi lỗi hoặc người dùng hủy. **Kiểm chứng:** mọi nhánh lỗi trả quota đúng và retry giữ idempotency.
- [x] Tạo MP4 H.264 30 fps bằng Mediabunny, 720p/1080p theo quyền; chèn watermark trong renderer. **Kiểm chứng:** `ffprobe`/trình phát xác nhận codec, duration, resolution và frame rate.
- [x] Ghi output theo luồng khi browser hỗ trợ; fallback Blob có kiểm tra dung lượng trước. **Kiểm chứng:** lỗi hết quota bộ nhớ/disk trả thông báo và dọn file tạm.
- [x] Thêm progress, ETA gần đúng, cancel và cleanup encoder/frame/file handle trong `finally`. **Kiểm chứng:** ba lần start-cancel-export không làm số worker/handle tăng dần.
- [ ] Chạy benchmark 5 cảnh/60 giây trên ma trận Tier 1. **Kiểm chứng:** lưu thời gian, peak memory, kích thước và hash output vào evidence pack.

## Ghi chú kiểm chứng (2026-09-18)

- Benchmark mới chạy trên **một** cấu hình: headless Chrome 152 / Windows 11 / 12 luồng / 16 GiB. Ma trận Tier 1 đầy đủ chưa chạy, nên mục benchmark vẫn để trống.
- Số liệu lần chạy đó: 60 giây 720p, 1800 frame, 8.8 giây, 2.49 MB, lệch duration 0 frame, ghi theo luồng vào OPFS. Lưu ở `src/frontend/artifacts/worker-benchmark.json`.
- **Peak memory chưa đo được** ở đường worker: `performance.memory` chỉ có trên main thread của Chrome. Con số peak heap hiện chỉ lấy được từ lần chạy spike cũ.
- Codec/duration/resolution/frame rate được xác nhận bằng demuxer của Mediabunny (`validateMp4`), chưa chạy `ffprobe` ngoài trình duyệt.
- Quy tắc watermark và độ phân giải theo gói được kiểm bằng backend giả lập trong Playwright. Đối chiếu với backend thật thuộc kịch bản demo của kế hoạch 06.

## Hoàn thành khi

- [x] Video 720p Free có watermark; Personal/Business 1080p không watermark.
- [x] Nội dung media không xuất hiện trong request, server log, trace hoặc database.

