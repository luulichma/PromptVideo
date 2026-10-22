# E03 — Hướng dẫn cài đặt, sử dụng và vận hành

**Cập nhật:** 24/09/2026 · **Phiên bản:** v1.0 · **Trạng thái:** Dự thảo làm việc, chưa nghiệm thu.

**Chủ nội dung:** Quang Anh. **Kiểm tra được giao:** Chiến. Đây là phân công, không phải chữ ký hay xác nhận đã review. Codex cập nhật nội dung theo ủy quyền của người dùng.

## 1. Môi trường và cài đặt

Nguồn thao tác là [src/README.md](../../src/README.md). Yêu cầu .NET 10, Node 24/npm 11 và Docker Compose. Các lệnh sau chạy tại thư mục `src`, nơi chứa `compose.yaml`. Chỉ sao chép `.env.example` nếu chưa có `.env`; cấu hình secret riêng và không chép mật khẩu vào hồ sơ.

```powershell
Set-Location 'F:/Enticy Studios/PromptVideo/src'
if (-not (Test-Path -LiteralPath '.env')) { Copy-Item -LiteralPath '.env.example' -Destination '.env' }
docker compose up -d postgres
dotnet tool restore
dotnet restore PromptVideo.sln
dotnet tool run dotnet-ef database update --project backend/PromptVideo.Api --startup-project backend/PromptVideo.Api
npm ci --prefix frontend
```

Mở API và frontend trong hai terminal riêng:

```powershell
dotnet run --project backend/PromptVideo.Api
```

```powershell
npm run dev --prefix frontend
```

Cổng mặc định: UI tại localhost:5173, API tại 5080, PostgreSQL tại 55432. Vite proxy giữ cookie cùng origin. Seed development chỉ bật khi chủ động cấu hình theo README; không ghi credentials trong tài liệu hoặc dùng tài khoản seed cho Production. Lệnh trên giữ nguyên file env đã có.

## 2. Sử dụng và kiểm tra nhanh

Tạo dự án 5 cảnh/60 giây; nhập chữ và ảnh cục bộ; chọn mẫu, xem trước và lưu; đăng nhập để xuất. Free có 3 lượt/tháng, tối đa 720p và có watermark; máy chủ quyết định quyền cuối cùng. Theo IF-AB-01, chỉ thông báo hoàn lượt sau khi máy chủ xác nhận hủy. Mã hiện tại còn ISS-G-001 nên cần đối chiếu hạn mức khi thử.

Admin có thể đổi trạng thái mẫu qua API hiện có; Retired bị ẩn khỏi danh mục hiện hành. Giao diện Admin và CRUD đầy đủ vẫn là phần chưa xong, không mô tả như thao tác UI đã có. Thanh toán giả lập chỉ dùng trên non-Production với quyền Admin và phải ghi rõ không thu tiền thật.

Kiểm `GET /api/foundation/health`, `/health/live` và `/health/ready`. Chạy unit frontend bằng `npm test --prefix frontend`; chạy backend bằng `dotnet test backend/PromptVideo.Api.Tests/PromptVideo.Api.Tests.csproj`, cần Docker cho các ca integration. `scripts/check.ps1` trong `src` là chuỗi kiểm tra CI; không tuyên bố đã chạy toàn bộ CI trong lần xác minh ngày 24/09.

## 3. Xử lý sự cố

| Biểu hiện | Kiểm tra và cách xử lý |
| --- | --- |
| Docker named pipe không tồn tại | Mở hoặc khôi phục Docker Engine, kiểm `docker version`, rồi chạy test lại; không xóa dữ liệu DB để thử |
| Không kết nối được cổng 55432 | Kiểm container, cổng và biến cấu hình kết nối; tránh nhầm với PostgreSQL có sẵn tại 5432 |
| Lỗi 401/CSRF sau đăng nhập | Lấy lại token sau khi danh tính thay đổi; không tắt CSRF để bỏ qua lỗi |
| Lỗi 403 ở lần xuất thứ 4 | Đối chiếu capabilities và UsagePeriod; phân biệt hết lượt với lỗi độ phân giải |
| Encoder không hỗ trợ 1080p | Ghi probe và môi trường; kết quả 720p không chứng minh 1080p đạt |
| Complete trả 409 hoặc mất mạng | ISS-G-001: đối soát reservation, không ghi nghiệm thu đạt; cần sửa cơ chế ghi tạm và xác nhận hoàn tất |
| Mẫu cũ đổi diện mạo | ISS-G-002: kiểm phiên bản, snapshot và migration; không ghi đè dữ liệu gốc |

## 4. Vận hành và bàn giao còn cần chứng minh

PWA chỉ cache app shell; API, health và OpenAPI luôn dùng mạng. Nội dung được lưu cục bộ nên cần hướng dẫn xuất gói dự án trước khi đổi máy hoặc xóa dữ liệu trình duyệt. Backup/restore máy chủ, HTTPS, rollback và cảnh báo production thuộc PP 6.1, chưa có biên bản thử.

Không công bố dịch vụ production đã sẵn sàng hoặc uptime 30 ngày đạt từ một lần healthcheck. Chi phí vận hành chỉ ghi thực tế khi có chứng từ; Phạm Quang Anh là người tổng hợp hồ sơ vận hành.
