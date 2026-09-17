# Kế hoạch 05 Render và xuất MP4

## Mục tiêu

Biến project thành preview và MP4 xác định theo frame, có progress/cancel, tuân thủ quyền và không làm treo giao diện.

## Checklist

- [ ] Tách renderer khỏi React; input duy nhất là project, timestamp và surface. **Kiểm chứng:** renderer chạy được trong unit test/browser harness không mount UI.
- [ ] Hoàn thiện layout ảnh/chữ, background và transition tối thiểu cho 5 template. **Kiểm chứng:** golden image tại đầu/giữa/cuối mỗi cảnh đạt ngưỡng pixel diff đã định.
- [ ] Chuyển vòng render/export sang worker; chỉ gửi command và progress qua message. **Kiểm chứng:** UI vẫn phản hồi khi export; không gửi bitmap thô qua lại mỗi frame nếu tránh được.
- [ ] Kiểm capability bằng `VideoEncoder.isConfigSupported` trước khi cho xuất. **Kiểm chứng:** cấu hình không hỗ trợ bị chặn trước khi reserve quota.
- [ ] Tích hợp entitlement: reserve trước export, complete khi finalize, cancel/expire khi lỗi hoặc người dùng hủy. **Kiểm chứng:** mọi nhánh lỗi trả quota đúng và retry giữ idempotency.
- [ ] Tạo MP4 H.264 30 fps bằng Mediabunny, 720p/1080p theo quyền; chèn watermark trong renderer. **Kiểm chứng:** `ffprobe`/trình phát xác nhận codec, duration, resolution và frame rate.
- [ ] Ghi output theo luồng khi browser hỗ trợ; fallback Blob có kiểm tra dung lượng trước. **Kiểm chứng:** lỗi hết quota bộ nhớ/disk trả thông báo và dọn file tạm.
- [ ] Thêm progress, ETA gần đúng, cancel và cleanup encoder/frame/file handle trong `finally`. **Kiểm chứng:** ba lần start-cancel-export không làm số worker/handle tăng dần.
- [ ] Chạy benchmark 5 cảnh/60 giây trên ma trận Tier 1. **Kiểm chứng:** lưu thời gian, peak memory, kích thước và hash output vào evidence pack.

## Hoàn thành khi

- [ ] Video 720p Free có watermark; Personal/Business 1080p không watermark.
- [ ] Nội dung media không xuất hiện trong request, server log, trace hoặc database.

