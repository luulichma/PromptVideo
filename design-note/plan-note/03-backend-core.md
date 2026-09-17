# Kế hoạch 03 Lõi backend C Sharp

## Mục tiêu

Hoàn thiện business rules tài khoản, thuê bao, quyền xuất và vận hành mà không nhận hoặc lưu media/nội dung project.

## Mô hình dữ liệu tối thiểu

`User`, `Role`, `Plan`, `Subscription`, `Entitlement`, `UsagePeriod`, `ExportReservation`, `PaymentEvent`, `TemplateCatalogEntry`, `AuditEvent`.

## Checklist

- [ ] Hoàn thiện đăng ký, đăng nhập, đăng xuất, đổi mật khẩu và seed admin; áp dụng rate limit cho auth. **Kiểm chứng:** integration test success/failure/lockout/forbidden đều xanh.
- [ ] Mã hóa ba gói Free/Personal/Business thành policy dữ liệu, không rải `if plan == ...` trong endpoint. **Kiểm chứng:** bảng test quyền 720p/1080p, watermark và quota phủ đủ ba gói.
- [ ] Xây `EntitlementService` trả capability snapshot có hạn dùng ngắn. **Kiểm chứng:** hết hạn subscription lập tức mất quyền ở lần kiểm tra tiếp theo.
- [ ] Xây giao thức `reserve -> complete/cancel` cho export với idempotency key và transaction. **Kiểm chứng:** retry không trừ hai lượt; hai request đồng thời không vượt quota.
- [ ] Reset quota Free theo chu kỳ tháng với timestamp UTC và rule được test ở ranh giới tháng. **Kiểm chứng:** test dùng clock giả, không phụ thuộc giờ hệ thống.
- [ ] Xây payment port và `FakePaymentGateway` chỉ hoạt động ở dev/test hoặc admin được ủy quyền. **Kiểm chứng:** event trùng không cấp quyền trùng; production không bật fake endpoint.
- [ ] Xây API template catalog chỉ chứa ID, version, status và manifest an toàn; asset template được bundle trong frontend MVP. **Kiểm chứng:** người thường chỉ đọc template active; admin mới đổi trạng thái.
- [ ] Thêm health, metrics tổng hợp, audit nghiệp vụ và data-retention job. **Kiểm chứng:** telemetry không chứa nội dung, ảnh, project JSON, MP4 hoặc token.
- [ ] Viết xUnit unit test cho policy và integration test bằng PostgreSQL Testcontainers. **Kiểm chứng:** test chạy độc lập, không dùng chung database dev.

## Hoàn thành khi

- [ ] OpenAPI mô tả đủ auth, entitlement, export reservation, template và admin.
- [ ] Tất cả invariant quota/idempotency/concurrency có test tự động.

