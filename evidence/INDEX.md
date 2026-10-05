# Danh mục bằng chứng PromptVideo

Chốt dữ liệu ngày **24/09/2026**. Lần chạy mới do Codex thực hiện tại workspace của người dùng; không ghi tên một thành viên như thể họ đã chạy hoặc kiểm tra chéo. HEAD nguồn là `28a07efcc119493e0d89fbfb72ba422b864de747`, working tree đã có thay đổi. [SHA-256 của nguồn và log](2026-09-24/source-and-evidence-sha256.json) giúp đối chiếu chính xác hơn HEAD.

| EV | Phạm vi / thời điểm | Lệnh hoặc phương pháp | Kết quả có thể kết luận | Nguồn |
| --- | --- | --- | --- | --- |
|EV-001|Frontend unit, 24/09/2026; Node 24.11, Windows|`npm test -- --reporter=default --reporter=json --outputFile=../../evidence/2026-09-24/frontend-vitest.json`, cwd `src/frontend`|79/79 ca, 12 file đạt; thời gian suite khoảng 3.44 giây. Không phải giờ công, coverage hoặc E2E thật|[JSON](2026-09-24/frontend-vitest.json), [log](2026-09-24/frontend-vitest.log) |
|EV-002|Backend, 24/09/2026; .NET 10.0.303, Windows|`dotnet test src/backend/PromptVideo.Api.Tests/PromptVideo.Api.Tests.csproj --no-restore --logger "trx;LogFileName=backend-tests.trx" --results-directory evidence/2026-09-24 --verbosity minimal` từ root|60 ca: 18 đạt, 42 thất bại khi dựng fixture Docker/Testcontainers. Không kết luận 42 lỗi nghiệp vụ. Cần chạy lại integration khi daemon sẵn sàng|[TRX](2026-09-24/backend-tests.trx), [log](2026-09-24/backend-tests.log) |
|EV-003|A benchmark Worker lịch sử; môi trường ghi trong JSON|Đọc artifact đã có, không chạy lại kỳ này|720p/60 giây được báo là 8.8 giây; không suy ra 1080p đạt hoặc dùng làm số đo mới|[worker-benchmark.json](../src/frontend/artifacts/worker-benchmark.json) |
|EV-004|A benchmark lịch sử ngày 17/09; Headless Chrome 152, 12 luồng, 16 GiB|Đọc báo cáo và artifact|Ba lần main-thread heap 35.44/32.07/36.11 MB; không đo Worker, không phải phép ×10; 1080p probe không đạt ở môi trường đó|[Báo cáo](../src/frontend/docs/benchmark-results.md), [artifact](../src/frontend/artifacts/benchmark-report.json) |
|EV-005|Rà mã nguồn ngày 24/09|Đọc exportProject/reservation/schema, service quota, Admin/Templates/Payments và module docs|Phát hiện complete lỗi vẫn giao file, thiếu snapshot/version, checkout chưa có request idempotency. Đây là kết quả rà tĩnh, chưa thay test động|[Snapshot hash](2026-09-24/source-and-evidence-sha256.json), [E01](../md-docs/03_Executing/01_Implementation_and_Integration_Record_v1.0.md) |

**Chưa có bằng chứng nghiệm thu:** TC-I-01–06 trên server thật, HAR 0 byte, 1080p trên máy tham chiếu, bộ nhớ ×10, checksum trên 3 máy, 134 tổ hợp dấu, 100 lần xuất, 10 người thử, coverage ≥70%, uptime trong 30 ngày, cổng thanh toán thật,hóa đơn/seats và xác nhận bàn giao. Kết quả E2E ngày 23/09 trong A_01 là nội dung nguồn cũ báo cáo, không tự ghi thành lần chạy mới.

Khi thêm EV: ghi ngày/múi giờ, người chạy, cấu hình, build/hash, command/dataset, expected/actual, trạng thái, đường dẫn và giới hạn kết luận. HAR phải che cookie/token trước khi đưa vào bộ chia sẻ. Không sao chép secret vào báo cáo.
