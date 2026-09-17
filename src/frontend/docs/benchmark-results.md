# Benchmark results — Plan 01

Trạng thái: **Kết quả sơ bộ đạt trên một môi trường Windows/Chrome headless; chưa đủ bằng chứng cross-platform để ra quyết định Go/No Go cuối cùng.**

## Bằng chứng tự động ngày 17/09/2026

- Môi trường: Windows, HeadlessChrome 152, 12 logical CPU threads, browser báo 16 GiB device memory.
- Capability: WebCodecs, H.264 720p, AAC-LC, OffscreenCanvas, OPFS và File System Access đạt; H.264 1080p không đạt trong môi trường headless này.
- Snapshot frame 720 ổn định qua ba lượt, SHA-256 `71e7a74ee8dc1f01ff0c7d5b33d26499bd3992622985e9be3762ac35fa8bc5d8`.
- Cả bốn MP4 đều có 1.800 frame, duration 60.000 giây, 1280×720, AVC, không có frame đen đầu/cuối.
- File mẫu: `artifacts/sample-720p-watermarked.mp4`; báo cáo máy đọc được: `artifacts/benchmark-report.json`.

## Cách thu bằng chứng

1. Chạy trang probe trên từng môi trường bên dưới.
2. Export 720p có watermark ba lần liên tiếp bằng đường Stream khi có.
3. Export 1080p một lần.
4. Tải JSON sau mỗi nhóm chạy và lưu cùng MP4 mẫu.
5. Ghi số đo do browser cung cấp; dùng `N/A` nếu browser không cung cấp peak JS heap/RAM estimate.

| Tier | OS / browser | CPU / RAM | Mode | Run | Time | Peak JS heap | File | Duration delta | First/last black | Kết quả |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1 sơ bộ | Windows / HeadlessChrome 152 | 12 threads / 16 GiB estimate | 720p OPFS | 1 | 34.86 s | 35.44 MB | 3.09 MB | 0 frame | Không/Không | Pass |
| 1 sơ bộ | Windows / HeadlessChrome 152 | 12 threads / 16 GiB estimate | 720p OPFS | 2 | 33.82 s | 32.07 MB | 3.09 MB | 0 frame | Không/Không | Pass |
| 1 sơ bộ | Windows / HeadlessChrome 152 | 12 threads / 16 GiB estimate | 720p OPFS | 3 | 36.26 s | 36.11 MB | 3.09 MB | 0 frame | Không/Không | Pass |
| 1 sơ bộ | Windows / HeadlessChrome 152 | 12 threads / 16 GiB estimate | 720p Buffer | 1 | 33.45 s | 40.56 MB | 3.09 MB | 0 frame | Không/Không | Pass |
| 1 | Windows / Edge | Chờ đo | 720p Stream | 1 | — | — | — | — | — | Chờ |
| 1 | macOS / Chrome | Chờ đo | 720p Stream | 1 | — | — | — | — | — | Chờ |
| 1 | Linux / Chrome | Chờ đo | 720p Stream | 1 | — | — | — | — | — | Chờ |
| 2 | macOS / Safari | Chờ đo | 720p capability-gated | 1 | — | — | — | — | — | Chờ |
| 2 | Desktop / Firefox | Chờ đo | 720p capability-gated | 1 | — | — | — | — | — | Chờ |

## Kết luận

Ba lượt OPFS không cho thấy JS heap tăng đơn điệu (35.44 → 32.07 → 36.11 MB). Đây là tín hiệu ban đầu tốt, nhưng `performance.memory` chỉ phản ánh JS heap và không thay thế phép đo tổng RAM tiến trình/GPU từ hệ điều hành.

Chỉ chuyển ADR-001 sang Accepted sau khi có ít nhất bộ bằng chứng Windows Chrome/Edge, macOS Chrome và Linux Chrome cho Tier 1. Một máy phát triển đơn lẻ không đủ để tuyên bố “cross-platform”.
