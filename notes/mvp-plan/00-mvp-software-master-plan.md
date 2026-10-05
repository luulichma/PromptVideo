# Kế hoạch tổng thể xây dựng MVP PromptVideo

**Trạng thái:** Proposed  
**Ngày lập:** 17/09/2026  
**Phạm vi:** Hoàn thiện lõi phần mềm trước khi hoàn thiện bộ hồ sơ báo cáo chính thức.

## 1. Kết luận kiến trúc

PromptVideo được xây dưới dạng **web app có khả năng cài như PWA**, chạy trên Windows, macOS và Linux. Toàn bộ ảnh, nội dung cảnh, project và video kết quả được xử lý trên thiết bị người dùng. Backend C# chỉ quản lý tài khoản, gói thuê bao, quyền xuất, hạn mức, danh mục template và dữ liệu vận hành không chứa nội dung.

Kiến trúc MVP là **modular monolith**, không dùng microservice. Frontend và backend có ranh giới rõ qua OpenAPI nhưng vẫn triển khai cùng origin ở môi trường production để giảm lỗi CORS và xác thực.

```text
React UI -> Project model -> Canvas renderer -> WebCodecs -> Mediabunny -> MP4 cục bộ
    |             |                |                |
    |             +-> IndexedDB/OPFS              File/Blob download
    |
    +-> ASP.NET Core API -> PostgreSQL
        tài khoản | entitlement | hạn mức | template metadata | vận hành
```

## 2. Stack được chọn

| Lớp | Công nghệ | Lý do chọn |
| --- | --- | --- |
| Frontend | Vite 8, React 19, TypeScript strict | Khởi động nhanh, phù hợp editor nhiều trạng thái, hỗ trợ web đa nền tảng |
| UI | Tailwind CSS 4, Radix UI primitives | Tùy biến cao, accessibility tốt, không khóa vào bộ giao diện nặng |
| PWA | Web App Manifest + vite-plugin-pwa/Workbox | Cài được trên desktop; chỉ cache app shell và asset có version, không cache API riêng tư |
| Routing và server state | React Router, TanStack Query | Tách navigation khỏi cache dữ liệu máy chủ |
| Editor state | Zustand + command history tự quản lý | State cục bộ nhanh; undo/redo rõ ràng, không đưa frame data vào React |
| Kiểm tra schema | Zod | Cùng schema runtime cho project JSON, template manifest và biên API |
| Lưu cục bộ | IndexedDB qua Dexie + OPFS cho blob lớn | Cross-browser, không gửi media lên server, phù hợp project có nhiều ảnh |
| Renderer | Canvas 2D + Web Worker/OffscreenCanvas khi khả dụng | Dễ kiểm soát frame theo thời gian; preview và export dùng chung renderer |
| Video | WebCodecs + Mediabunny MP4 | Encode/mux trong trình duyệt; hỗ trợ ghi theo luồng, tránh tải media lên server |
| Backend | .NET 10 LTS, ASP.NET Core 10 Minimal API | C# theo yêu cầu, LTS đến 11/2028, đủ nhẹ cho modular monolith |
| Persistence | EF Core 10 + PostgreSQL 18 | Transaction tốt cho entitlement/hạn mức; chạy đa nền tảng qua container |
| Auth | ASP.NET Core Identity, HTTP-only cookie cùng origin | Không tự xây cơ chế mật khẩu/token; giảm rủi ro lưu token ở frontend |
| API contract | OpenAPI + openapi-typescript/openapi-fetch | Type frontend sinh từ API, tránh DTO lệch hai phía |
| Test | Vitest, Testing Library, Playwright; xUnit, WebApplicationFactory, Testcontainers | Bao phủ unit, integration và luồng người dùng đa trình duyệt |
| Dev/Deploy | Node.js 24 LTS, Docker Compose, GitHub Actions | Công cụ ổn định, onboarding thống nhất trên ba hệ điều hành |

Phiên bản patch cụ thể phải được khóa trong lockfile khi scaffold. Không dùng phiên bản beta/preview.

## 3. Phạm vi MVP bắt buộc

- [ ] Người dùng đăng ký, đăng nhập và xem gói/quyền hiện tại.
- [ ] Tạo project 5 cảnh, nhập văn bản tiếng Việt và ảnh từ máy cục bộ.
- [ ] Chọn một trong 5 template và xem trước đúng theo timeline.
- [ ] Lưu/mở project cục bộ mà không tải nội dung lên backend.
- [ ] Xuất video 60 giây thành MP4 720p; gói có quyền được xuất 1080p.
- [ ] Gói Miễn phí có 3 lượt/tháng và watermark; lượt thứ tư bị chặn.
- [ ] Việc giữ lượt, hoàn tất và hoàn trả lượt xuất chịu được retry, refresh và request trùng.
- [ ] Admin quản lý trạng thái template, xem health và số liệu xuất không chứa nội dung.
- [ ] Thanh toán MVP dùng gateway giả lập có nhãn rõ; kiến trúc có cổng thay thế bằng gateway thật.
- [ ] Có bằng chứng mạng cho thấy 0 byte text/ảnh/project/video của người dùng tới server.

## 4. Ngoài phạm vi MVP

- AI sinh nội dung, text-to-speech, thu âm và thư viện nhạc.
- Upload video đầu vào, timeline nhiều track hoặc chỉnh sửa kiểu NLE.
- Đồng bộ project đám mây, cộng tác thời gian thực và app mobile native.
- Thanh toán production, VAT, quản lý 5 ghế doanh nghiệp và SLA hỗ trợ.
- Microservice, message broker, Kubernetes và event sourcing.

Các mục này chỉ được thêm sau khi MVP qua cổng nghiệm thu; mọi bổ sung trước đó phải là quyết định thay đổi phạm vi.

## 5. Mức hỗ trợ cross-platform

| Mức | Môi trường | Cam kết MVP |
| --- | --- | --- |
| Tier 1 | Chrome/Edge hiện hành trên Windows; Chrome trên macOS/Linux | Editor, lưu/mở, preview và xuất MP4 đầy đủ |
| Tier 2 | Safari hiện hành trên macOS; Firefox hiện hành trên Windows/macOS/Linux | Editor và preview; export chỉ bật khi capability probe đạt |
| Không nhắm tới | Điện thoại/máy tính bảng, browser cũ | Có trang báo không tương thích, không cam kết editor/export |

Cross-platform ở MVP có nghĩa là hỗ trợ nhiều hệ điều hành bằng trình duyệt hiện đại. Không hứa mọi codec trên mọi browser trước khi hoàn tất spike ở kế hoạch 01.

## 6. Trình tự và cổng kiểm soát

| Thứ tự | Kế hoạch | Đầu ra bắt buộc | Cổng qua pha |
| ---: | --- | --- | --- |
| 1 | `01-feasibility-spike.md` | Prototype 5 cảnh/60 giây -> MP4 và ma trận browser | Quyết định codec, bộ nhớ và Tier 1 |
| 2 | `02-foundation.md` | Repo chạy được, CI xanh, API/frontend giao tiếp | Một lệnh dựng toàn hệ thống |
| 3A | `03-backend-core.md` | Identity, entitlement, hạn mức, template, admin API | Integration test business rule xanh |
| 3B | `04-editor-core.md` | Editor, project model, 5 template, lưu/mở cục bộ | Project mẫu mở lại không sai dữ liệu |
| 4 | `05-render-and-export.md` | Preview/export chung renderer; MP4 720p/1080p | Video chuẩn phát được, đúng quyền/watermark |
| 5 | `06-integration-and-admin.md` | Luồng end-to-end và màn hình admin | Demo hoàn chỉnh qua Playwright |
| 6 | `07-quality-release-and-evidence.md` | Hardening, deploy, evidence pack | Đạt Definition of Done |

Pha 3A và 3B có thể làm song song sau khi contract project/export được khóa. Đường găng là `01 -> 02 -> 04 -> 05 -> 06 -> 07`.

## 7. Cấu trúc đích trong `src`

```text
src/
  frontend/
    src/app/
    src/features/editor/
    src/features/account/
    src/features/admin/
    src/core/project/
    src/core/rendering/
    src/core/export/
    src/core/storage/
    src/generated/api/
  backend/
    PromptVideo.Api/
      Modules/Identity/
      Modules/Subscriptions/
      Modules/Exports/
      Modules/Templates/
      Modules/Admin/
      Infrastructure/
    PromptVideo.Api.Tests/
  contracts/
  compose.yaml
  PromptVideo.sln
```

Không tạo nhiều C# project theo Clean Architecture ở MVP. Chỉ tách project hoặc service khi module có nhu cầu triển khai, scale hoặc vòng đời độc lập đã được chứng minh.

## 8. Definition of Done toàn MVP

- [ ] Clone sạch trên Windows/macOS/Linux có thể chạy bằng hướng dẫn đã kiểm chứng; bản production cài được như PWA trên Tier 1.
- [ ] Build, lint, typecheck, unit test, integration test và E2E Tier 1 đều xanh.
- [ ] MP4 đầu ra phát được, đúng 60 giây, đúng độ phân giải, watermark và tiếng Việt.
- [ ] P95 API nghiệp vụ không-media dưới 500 ms trong môi trường kiểm thử đã ghi cấu hình.
- [ ] Export chuẩn 5 cảnh/60 giây hoàn thành dưới 5 phút trên máy chuẩn đã công bố.
- [ ] Hủy export giải phóng worker/encoder/file handle; không tăng bộ nhớ qua ba lần export liên tiếp.
- [ ] Không request, log, trace hoặc database record nào chứa text, ảnh, project JSON hay MP4 người dùng.
- [ ] Hạn mức không bị trừ hai lần khi retry và không bị vượt khi hai export đồng thời.
- [ ] Không có lỗi Critical/High chưa xử lý trong dependency/security scan.
- [ ] Demo script, seed data, benchmark và ảnh/chứng cứ test đủ để cập nhật hồ sơ chính thức.

## 9. Tài liệu kỹ thuật tham chiếu

- .NET support policy: <https://dotnet.microsoft.com/en-us/platform/support/policy>
- Vite guide: <https://vite.dev/guide/>
- React TypeScript: <https://react.dev/learn/typescript>
- WebCodecs specification: <https://www.w3.org/TR/webcodecs/>
- Mediabunny writing media: <https://mediabunny.dev/guide/writing-media-files>
- ASP.NET Core OpenAPI: <https://learn.microsoft.com/en-us/aspnet/core/fundamentals/openapi/overview?view=aspnetcore-10.0>
- PostgreSQL versioning: <https://www.postgresql.org/support/versioning/>
