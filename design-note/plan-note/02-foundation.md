# Kế hoạch 02 Nền tảng dự án

## Mục tiêu

Tạo một repository chạy được nhất quán, có contract giữa frontend/backend và hàng rào chất lượng tối thiểu trước khi phát triển tính năng.

## Checklist

- [ ] Scaffold `frontend` bằng Vite React TypeScript strict và `backend` bằng ASP.NET Core 10; thêm `PromptVideo.sln`. **Kiểm chứng:** cả hai dev server khởi động trên máy sạch.
- [ ] Tổ chức frontend theo `app`, `features`, `core`; backend theo module nghiệp vụ trong một API project. **Kiểm chứng:** dependency direction được ghi trong README và không có import vòng.
- [ ] Thêm PostgreSQL 18 vào `compose.yaml`, EF Core migration đầu tiên và health checks. **Kiểm chứng:** tạo/xóa volume test rồi migration vẫn dựng schema thành công.
- [ ] Thiết lập ASP.NET Core Identity bằng HTTP-only cookie, Vite proxy trong development và same-origin production; cấu hình SameSite/CSRF. **Kiểm chứng:** cookie không đọc được bằng JavaScript; unauthenticated API trả 401; request ghi thiếu antiforgery token bị từ chối.
- [ ] Phát OpenAPI từ backend và sinh TypeScript types/client vào `frontend/src/generated/api`. **Kiểm chứng:** CI thất bại nếu contract sinh lại tạo diff.
- [ ] Cấu hình format/lint/typecheck/test: ESLint, Prettier, `tsc --noEmit`, .NET analyzers và warnings-as-errors cho code dự án. **Kiểm chứng:** một lệnh kiểm tra chung trả exit code khác 0 khi cài lỗi mẫu.
- [ ] Tạo CI cache dependency và chạy frontend/backend test + production build. **Kiểm chứng:** pipeline xanh từ checkout sạch, không phụ thuộc file bí mật cục bộ.
- [ ] Tạo `.env.example`, seed dev, logging có correlation ID và quy tắc redaction. **Kiểm chứng:** log mẫu không chứa password, cookie, project JSON hoặc tên file ảnh.
- [ ] Thêm Web App Manifest và service worker chỉ cache app shell/asset versioned; loại API và dữ liệu người dùng khỏi runtime cache. **Kiểm chứng:** production build cài được trên Tier 1, editor mở offline sau lần tải đầu và auth/API không trả dữ liệu cache cũ.

## Hoàn thành khi

- [ ] Thành viên mới có thể chạy toàn hệ thống theo README mà không sửa mã nguồn.
- [ ] Frontend gọi health endpoint qua client sinh từ OpenAPI.
