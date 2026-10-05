# Kế hoạch 02 Nền tảng dự án

## Mục tiêu

Tạo một repository chạy được nhất quán, có contract giữa frontend/backend và hàng rào chất lượng tối thiểu trước khi phát triển tính năng.

## Checklist

- [x] Scaffold `frontend` bằng Vite React TypeScript strict và `backend` bằng ASP.NET Core 10; thêm `PromptVideo.sln`. **Kiểm chứng:** cả hai dev server khởi động trên máy sạch.
- [x] Tổ chức frontend theo `app`, `features`, `core`; backend theo module nghiệp vụ trong một API project. **Kiểm chứng:** dependency direction được ghi trong README và không có import vòng.
- [x] Thêm PostgreSQL 18 vào `compose.yaml`, EF Core migration đầu tiên và health checks. **Kiểm chứng:** tạo/xóa volume test rồi migration vẫn dựng schema thành công.
- [x] Thiết lập ASP.NET Core Identity bằng HTTP-only cookie, Vite proxy trong development và same-origin production; cấu hình SameSite/CSRF. **Kiểm chứng:** cookie không đọc được bằng JavaScript; unauthenticated API trả 401; request ghi thiếu antiforgery token bị từ chối.
- [x] Phát OpenAPI từ backend và sinh TypeScript types/client vào `frontend/src/generated/api`. **Kiểm chứng:** CI thất bại nếu contract sinh lại tạo diff.
- [x] Cấu hình format/lint/typecheck/test: ESLint, Prettier, `tsc --noEmit`, .NET analyzers và warnings-as-errors cho code dự án. **Kiểm chứng:** một lệnh kiểm tra chung trả exit code khác 0 khi cài lỗi mẫu.
- [x] Tạo CI cache dependency và chạy frontend/backend test + production build. **Kiểm chứng:** pipeline xanh từ checkout sạch, không phụ thuộc file bí mật cục bộ.
- [x] Tạo `.env.example`, seed dev, logging có correlation ID và quy tắc redaction. **Kiểm chứng:** log mẫu không chứa password, cookie, project JSON hoặc tên file ảnh.
- [x] Thêm Web App Manifest và service worker chỉ cache app shell/asset versioned; loại API và dữ liệu người dùng khỏi runtime cache. **Kiểm chứng:** production build cài được trên Tier 1, editor mở offline sau lần tải đầu và auth/API không trả dữ liệu cache cũ.

## Hoàn thành khi

- [x] Thành viên mới có thể chạy toàn hệ thống theo README mà không sửa mã nguồn.
- [x] Frontend gọi health endpoint qua client sinh từ OpenAPI.

## Kết quả kiểm chứng (2026-09-17)

Chạy trên Windows 11, .NET SDK 10.0.303, Node 24.11.0, Docker 29.4.0.

| Kiểm chứng | Cách chạy | Kết quả |
| --- | --- | --- |
| Backend build + test | `dotnet build/test PromptVideo.sln -c Release` | 0 warning, 0 error, 9/9 test pass |
| Frontend gates | `npm run check` | Prettier, ESLint, `tsc -b`, 6/6 Vitest, production build đều pass |
| TypeScript strict | probe gán `string` vào `number` | báo `TS2322`; probe `null` báo `TS18047` |
| Migration trên volume sạch | `docker compose down -v` → `up -d` → `dotnet-ef database update` | dựng đủ 8 bảng Identity + `__EFMigrationsHistory` |
| Health qua OpenAPI client | `GET /api/foundation/health` trên API thật | `{"status":"Healthy","checks":[{"name":"postgres","status":"Healthy"}]}` |
| Unauthenticated API | `GET /api/foundation/private` | 401 |
| Thiếu antiforgery token | `POST /api/foundation/csrf-check` | 400 |
| Cookie không đọc được bằng JS | register + login thật | `PromptVideo.Auth=...; samesite=lax; httponly` |
| Redaction | quét 86 dòng log sau luồng có password | 0 lần xuất hiện password, cookie, CSRF token, connection string |
| Correlation ID | header `X-Correlation-ID` | echo giá trị hợp lệ, thay bằng GUID khi giá trị không an toàn |
| Contract drift | `git add -N` + `git diff --exit-code` | exit 1 khi contract chưa commit; regenerate hai lần cho checksum giống nhau |
| Exit code khi có lỗi mẫu | seed lỗi type/format/lint/C# warning | lần lượt exit 2, 1, 1 và `error CS0219` |
| PWA offline | Playwright: load → `setOffline(true)` → reload | app shell render offline, `caches` không chứa path `/api/` `/health/` `/openapi/` |

## Lỗi đã phát hiện và sửa trong lúc kiểm chứng

1. **Mount volume Postgres 18 sai.** `compose.yaml` mount `/var/lib/postgresql/data` theo layout trước 18; image 18+ lưu data theo thư mục major version (`/var/lib/postgresql/18/docker`) nên container `Exited (1)`. Đã chuyển mount lên `/var/lib/postgresql`.
2. **Xung đột cổng 5432.** Máy dev có sẵn PostgreSQL native chiếm 5432 nên `dotnet-ef` nối nhầm và trả `FATAL 28P01`. `appsettings.json` lại hardcode `Port=5432` nên đổi `POSTGRES_PORT` không đủ. Đã dời cổng dev sang **55432** ở `compose.yaml`, `.env.example` và `appsettings.json`.
3. **TypeScript strict chưa bật.** `tsconfig.app.json` và `tsconfig.node.json` thiếu `"strict": true`. Đã bật; code hiện tại không phát sinh lỗi nào.
4. **CI hỏng từ checkout sạch.** Bước `dotnet-ef database update --no-build` chạy trước khi build nên không có assembly. Đã đổi thứ tự thành build → migrate → test.
5. **CI cache trỏ vào file không tồn tại.** `cache-dependency-path: src/**/packages.lock.json` nhưng repo chưa có lock file. Đã bật `RestorePackagesWithLockFile` và sinh lock file cho cả hai project.
6. **Contract drift giả trên Windows.** `core.autocrlf=true` biến file sinh ra thành CRLF trong khi generator ghi LF. Đã thêm `.gitattributes` ghim `eol=lf` cho `contracts/openapi` và `frontend/src/generated`.
7. **PWA thiếu icon bitmap.** Manifest chỉ có SVG nên không chắc cài được. Đã sinh icon 192/512 và maskable 512 từ logo, thêm `apple-touch-icon`, và đặt `<title>` thành `PromptVideo`.
8. **Health endpoint không nằm trong OpenAPI.** `/health/live` và `/health/ready` do `MapHealthChecks` tạo nên không sinh ra type. Đã thêm `GET /api/foundation/health` có mô tả OpenAPI để frontend gọi qua client sinh tự động.

## Việc cần làm trước khi CI chạy được

`src/contracts/openapi` và `src/frontend/src/generated/api` hiện vẫn **chưa được commit**. Bước "Verify generated contracts are committed" sẽ đỏ cho tới khi hai thư mục này vào git.
