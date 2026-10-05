# Kế hoạch 03 Lõi backend C Sharp

## Mục tiêu

Hoàn thiện business rules tài khoản, thuê bao, quyền xuất và vận hành mà không nhận hoặc lưu media/nội dung project.

## Mô hình dữ liệu tối thiểu

`User`, `Role`, `Plan`, `Subscription`, `Entitlement`, `UsagePeriod`, `ExportReservation`, `PaymentEvent`, `TemplateCatalogEntry`, `AuditEvent`.

## Checklist

- [x] Hoàn thiện đăng ký, đăng nhập, đăng xuất, đổi mật khẩu và seed admin; áp dụng rate limit cho auth. **Kiểm chứng:** integration test success/failure/lockout/forbidden đều xanh.
- [x] Mã hóa ba gói Free/Personal/Business thành policy dữ liệu, không rải `if plan == ...` trong endpoint. **Kiểm chứng:** bảng test quyền 720p/1080p, watermark và quota phủ đủ ba gói.
- [x] Xây `EntitlementService` trả capability snapshot có hạn dùng ngắn. **Kiểm chứng:** hết hạn subscription lập tức mất quyền ở lần kiểm tra tiếp theo.
- [x] Xây giao thức `reserve -> complete/cancel` cho export với idempotency key và transaction. **Kiểm chứng:** retry không trừ hai lượt; hai request đồng thời không vượt quota.
- [x] Reset quota Free theo chu kỳ tháng với timestamp UTC và rule được test ở ranh giới tháng. **Kiểm chứng:** test dùng clock giả, không phụ thuộc giờ hệ thống.
- [x] Xây payment port và `FakePaymentGateway` chỉ hoạt động ở dev/test hoặc admin được ủy quyền. **Kiểm chứng:** event trùng không cấp quyền trùng; production không bật fake endpoint.
- [x] Xây API template catalog chỉ chứa ID, version, status và manifest an toàn; asset template được bundle trong frontend MVP. **Kiểm chứng:** người thường chỉ đọc template active; admin mới đổi trạng thái.
- [x] Thêm health, metrics tổng hợp, audit nghiệp vụ và data-retention job. **Kiểm chứng:** telemetry không chứa nội dung, ảnh, project JSON, MP4 hoặc token.
- [x] Viết xUnit unit test cho policy và integration test bằng PostgreSQL Testcontainers. **Kiểm chứng:** test chạy độc lập, không dùng chung database dev.

## Hoàn thành khi

- [x] OpenAPI mô tả đủ auth, entitlement, export reservation, template và admin.
- [x] Tất cả invariant quota/idempotency/concurrency có test tự động.

## Thiết kế đã chọn

**Policy là dữ liệu.** Ba gói nằm ở `Domain/PlanCatalog.cs` dưới dạng cặp key/value, được seed vào bảng `Plans`/`Entitlements` mỗi lần khởi động và đọc lại qua `EntitlementService`. Không endpoint nào rẽ nhánh theo mã gói, nên đổi quota hay trần độ phân giải là đổi dữ liệu rồi redeploy.

| Gói | Xuất/tháng | Trần chiều cao | Watermark | Chỗ ngồi |
| --- | --- | --- | --- | --- |
| Miễn phí | 3 | 720 | có | 1 |
| Cá nhân | không giới hạn | 1080 | không | 1 |
| Doanh nghiệp | không giới hạn | 1080 | không | 5 |

**Hai bất biến của export.** Idempotency dựa trên unique index `(UserId, IdempotencyKey)`: retry trả về đúng reservation cũ thay vì trừ lượt thứ hai. Chống vượt quota khi chạy song song dựa trên `xmin` của PostgreSQL map làm concurrency token trên `UsagePeriod`: bên thua cuộc đua nhận `DbUpdateConcurrencyException`, đọc lại số đã dùng rồi đánh giá lại thay vì ghi đè.

**Reset quota không cần job.** Sang tháng UTC mới nghĩa là một dòng `UsagePeriod` mới; không có tiến trình nào sửa dữ liệu theo lịch. Reservation treo quá 30 phút được trả lại lượt.

**Phân tầng.** `Domain/` chứa entity và catalog; cả `Modules/` lẫn `Infrastructure/` phụ thuộc vào nó, còn nó không phụ thuộc ngược, nên không phá quy tắc "infrastructure không phụ thuộc modules" đã ghi ở kế hoạch 02.

## Kết quả kiểm chứng (2026-09-17)

| Kiểm chứng | Cách chạy | Kết quả |
| --- | --- | --- |
| Build backend | `dotnet build -c Release` | 0 warning, 0 error |
| Toàn bộ test | `dotnet test -c Release` | **60/60 pass** |
| Bảng quyền 3 gói | unit test thuần `PlanPolicyTests` | 720p/1080p, watermark, quota, seats đúng cho cả ba gói |
| Ranh giới tháng | unit test `UsagePeriodTests` | qua năm, năm nhuận, và offset local được quy về UTC |
| Reset quota | integration, clock giả 31/01 → 01/02 | hết lượt tháng 1, sang tháng 2 còn 2 lượt |
| Idempotency | integration + curl thật | retry trả cùng `reservationId`, `exportsRemaining` vẫn là 2 |
| Concurrency | 8 reserve song song, quota 3 | đúng 3 `Reserved`, 5 `QuotaExceeded`, DB ghi nhận 3 |
| Clamp độ phân giải | curl thật, gói Free xin 1080 | trả `grantedHeight: 720`, `watermarkRequired: true` |
| Chặn lượt thứ tư | curl thật | 403 "Monthly export quota reached." |
| Hết hạn subscription | integration, clock giả vượt ngày hết hạn | lần kiểm tra kế tiếp rớt về gói Free |
| Payment trùng | integration | lần 1 `Applied`, lần 2 `Duplicate`, chỉ 1 subscription |
| Sai số tiền | integration | `AmountMismatch`, không cấp subscription |
| Fake gateway ở Production | factory chạy env Production | endpoint không được map, `IPaymentGateway` không đăng ký |
| Lockout | 5 lần sai mật khẩu | lần 6 dù đúng mật khẩu vẫn bị từ chối, body chứa `LockedOut` |
| Rate limit auth | limit 3/5 phút | xuất hiện 429; `/api/templates` không bị ảnh hưởng |
| Phân quyền admin | user thường gọi `/api/admin/metrics` | 403; sau khi cấp role Admin thì 200 |
| Template catalog | retire 1 template | user thường thấy 4, admin vẫn thấy 5 |
| Telemetry sạch | metrics + audit | không chứa email, idempotency key, hay nội dung |
| Retention job | clock giả +1h rồi +200 ngày | trả lại 1 reservation treo, xóa reservation và audit quá hạn |
| Test độc lập | Testcontainers | 1 container, mỗi test class một database riêng, không đụng DB dev |
| OpenAPI | `contracts/openapi` | 24 path, phủ auth, plans, capabilities, exports, templates, admin |

## Lỗi đã phát hiện và sửa trong lúc kiểm chứng

1. **Cookie đăng nhập bị API từ chối.** `AddIdentityApiEndpoints` đặt bearer làm scheme mặc định, nên mọi endpoint `RequireAuthorization()` trả 401 cho phiên cookie — chính là cơ chế xác thực dự án đang dùng. Đã đặt default policy chấp nhận cả `ApplicationScheme` lẫn `BearerScheme`. Đây là lỗi thật, không phải lỗi test.
2. **Reference data không được seed khi migrate bằng CLI.** Seeder chỉ chạy trong nhánh `ApplyMigrationsOnStartup`, nên một database migrate bằng `dotnet ef database update` sẽ không có gói nào và `/api/me/capabilities` trả 500 ("Sequence contains no elements"). Đã tách seeding ra chạy mỗi lần khởi động khi schema đã đủ, và bọc lỗi kết nối để app không crash-loop khi DB tạm chết. Đã kiểm chứng bằng cách xóa sạch `Plans`/`Entitlements`/`Templates` rồi khởi động lại: dữ liệu quay về đủ 3/12/5.
3. **Testcontainers kéo theo SSH.NET 2024.2.0 có lỗ hổng mức cao.** `TreatWarningsAsErrors` chặn restore (NU1903). Đã nâng `Testcontainers.PostgreSql` lên 4.15.0, restore sạch.
4. **Analyzer chặn migration do EF sinh ra.** CA1861 báo lỗi trên mảng hằng trong file migration. Sửa tay sẽ bị ghi đè ở lần `migrations add` kế tiếp, nên đã thêm `.editorconfig` trong thư mục `Migrations` đánh dấu `generated_code = true`.
5. **Cookie giả lập bị client test vứt đi.** App chạy trên clock giả (tháng 1/2026) nên đóng dấu hạn cookie theo clock đó, trong khi `CookieContainer` so với đồng hồ máy thật (tháng 9/2026) và coi cookie đã hết hạn. Đã thay bằng `CookieJarHandler` bám theo clock của ứng dụng. Đây là lỗi hạ tầng test, không phải lỗi sản phẩm.

## Ghi chú cho frontend

Antiforgery token gắn với danh tính, nên token lấy lúc chưa đăng nhập sẽ mất hiệu lực ngay khi đăng nhập xong. Phải lấy token mới sau khi login; `getAntiforgeryHeaders()` trong client sinh tự động đã làm việc này mỗi request.

## Việc còn lại

- `src/contracts/openapi` và `src/frontend/src/generated/api` vẫn **chưa commit**, CI sẽ đỏ ở bước kiểm tra contract cho tới khi đưa vào git.
- Chạy test cần Docker daemon vì dùng Testcontainers.
