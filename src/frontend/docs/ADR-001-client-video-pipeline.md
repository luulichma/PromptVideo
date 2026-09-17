# ADR-001: Client-side video pipeline

- Trạng thái: **Proposed — chờ benchmark Tier 1/Tier 2**
- Ngày: 17/09/2026
- Phạm vi: Plan 01 feasibility spike

## Bối cảnh

PromptVideo cần render project 5 cảnh/60 giây mà không gửi text, ảnh, project JSON hay MP4 lên server. Rủi ro chính là khả năng encode H.264/AAC, thời gian export và peak memory khác nhau theo browser/OS.

## Quyết định đang kiểm chứng

1. Renderer dùng Canvas 2D và timestamp tuyệt đối `frameIndex / fps`.
2. Video dùng WebCodecs H.264/AVC, mux vào MP4 bằng Mediabunny.
3. Frame được render rồi encode tuần tự; không giữ toàn bộ raw frame trong RAM.
4. Ưu tiên `StreamTarget` vào file handle hoặc OPFS. `BufferTarget -> Blob` là fallback cho file nhỏ khi browser không có đường ghi trực tiếp.
5. MP4 spike chỉ có video track. AAC-LC được capability probe riêng; việc thêm audio track thuộc Plan 05 sau khi Tier 1 xác nhận encode AAC ổn định.
6. Không đưa FFmpeg WASM vào bundle. Chỉ đánh giá WASM/desktop shell nếu kết quả đạt điều kiện No Go.

## Ngưỡng quyết định

- **Go:** Tier 1 xuất 720p/60 giây dưới 5 phút, peak memory dưới 1.5 GB, ba lượt liên tiếp không tăng tài nguyên rõ rệt.
- **Go có điều kiện:** Tier 1 đạt; Tier 2 chỉ editor/preview và export bị khóa bằng capability probe.
- **No Go:** Tier 1 không đạt thời gian/bộ nhớ hoặc H.264 không ổn định.

## Trigger xem lại

- H.264 encoder biến mất hoặc lỗi trên một browser Tier 1 hiện hành.
- Sai duration quá một frame, frame đen đầu/cuối, hoặc file không phát được.
- Peak memory vượt 1.5 GB hoặc tăng rõ qua ba lượt liên tiếp.
- Yêu cầu audio bắt buộc trên Firefox/Linux trong khi AAC WebCodecs không khả dụng.
- File đầu ra thường xuyên vượt ngưỡng an toàn của BufferTarget và browser không có OPFS/file handle.

## Nguồn kỹ thuật

- WebCodecs codec selection: https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API/Codec_selection
- Mediabunny writing/output targets: https://mediabunny.dev/guide/writing-media-files

