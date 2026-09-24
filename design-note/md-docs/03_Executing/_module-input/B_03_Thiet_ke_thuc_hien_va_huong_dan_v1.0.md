# B_03 — Thiết kế, thực hiện và hướng dẫn module B

| Thuộc tính | Giá trị |
| --- | --- |
| Phiên bản / ngày chốt | 1.0 / 24/09/2026 |
| Trạng thái | Danh mục bằng chứng thực hiện; chưa nghiệm thu |
| Chủ nội dung / kiểm / xác nhận nội bộ | Nguyễn Việt Quang / Phạm Quang Anh / Nguyễn Thế Chiến |
| Nguồn hiện hành | [B_01](../../02_Planning/_module-input/B_Tai_khoan_thue_bao/B_01_Yeu_cau_va_kiem_thu_v1.0.md), [B_02](../../02_Planning/_module-input/B_Tai_khoan_thue_bao/B_02_WBS_uoc_luong_rui_ro_v1.0.md) |
| Phiên bản mã đối chiếu | HEAD `28a07efcc119493e0d89fbfb72ba422b864de747`; đọc working tree ngày 24/09 |

## 1. Kiến trúc có thật trong source

B dùng ASP.NET Identity, PostgreSQL/EF Core, policy dữ liệu và dịch vụ reservation/payment. Domain chứa các entity; Modules chứa endpoint/dịch vụ; Infrastructure chứa persistence, audit, retention, bảo vệ. Frontend giữ project/media cục bộ; B không nhận media trong DTO xuất.

| Phần | Source hiện có | Bằng chứng có / thiếu |
| --- | --- | --- |
| Tài khoản | [IdentityModule](../../../../src/backend/PromptVideo.Api/Modules/Identity/IdentityModule.cs), [Roles](../../../../src/backend/PromptVideo.Api/Infrastructure/Security/Roles.cs) | Cookie/bearer, lockout 5 lần/15 phút, role; chưa thay kết quả E2E |
| Policy | [PlanCatalog](../../../../src/backend/PromptVideo.Api/Domain/PlanCatalog.cs), [PlanCapabilities](../../../../src/backend/PromptVideo.Api/Modules/Subscriptions/PlanCapabilities.cs) | 3 gói, quota/trần/watermark/chỗ; 18 unit cases PlanPolicyTests pass EV-002 |
| Giấy phép | [EntitlementService](../../../../src/backend/PromptVideo.Api/Modules/Subscriptions/EntitlementService.cs) | Giải gói tại thời điểm server, snapshot 60 giây, lấy usage kỳ hiện tại |
| Giữ/hoàn lượt | [ExportReservationService](../../../../src/backend/PromptVideo.Api/Modules/Exports/ExportReservationService.cs), [ExportsModule](../../../../src/backend/PromptVideo.Api/Modules/Exports/ExportsModule.cs) | Reserve tăng ngay, complete không tăng, cancel trả về kỳ gốc, TTL 30 phút; concurrency reserve có test source |
| Thanh toán | [SubscriptionService](../../../../src/backend/PromptVideo.Api/Modules/Subscriptions/SubscriptionService.cs), [PaymentGateway](../../../../src/backend/PromptVideo.Api/Modules/Subscriptions/PaymentGateway.cs), [SubscriptionsModule](../../../../src/backend/PromptVideo.Api/Modules/Subscriptions/SubscriptionsModule.cs) | Event dedup và kiểm amount có; fake checkout chỉ nhận PlanCode, chưa có operation key; cổng thật chưa có |
| Audit/retention | [AuditService](../../../../src/backend/PromptVideo.Api/Infrastructure/Audit/AuditService.cs), [DataRetentionService](../../../../src/backend/PromptVideo.Api/Infrastructure/Retention/DataRetentionService.cs) | Audit các sự kiện đã cài; sweep mặc định tắt/chu kỳ 6 giờ; retention audit 180 ngày/reservation đã resolve 90 ngày |
| UI | [AccountPage](../../../../src/frontend/src/features/account/AccountPage.tsx), [useCapabilities](../../../../src/frontend/src/features/account/useCapabilities.ts) | Có auth/gói/quyền/lượt; chưa đủ trang quản lý thuê bao toàn phạm vi |
| Giao tiếp A | [reservation.ts](../../../../src/frontend/src/core/export/reservation.ts) | Complete/cancel best-effort; chưa giữ status trong kiểu client; ISS-G-001 |
| Chưa có | Invoice; Seat; API hỗ trợ IF-CB-01; adapter cổng thật; nhắc trước hạn | Ghi việc còn lại; không tạo tên endpoint để giả có mã |

## 2. Sổ bằng chứng module

| Mã bằng chứng chung | Nguồn / ngày / phiên bản | Kết quả và giới hạn |
| --- | --- | --- |
| EV-001 | [frontend-vitest.json](../../../evidence/2026-09-24/frontend-vitest.json), [log](../../../evidence/2026-09-24/frontend-vitest.log), 24/09; working tree HEAD nêu trên | 79/79 test frontend, 12 file; kiểm hành vi hiện hành, không chứng minh hợp đồng complete mới hoặc API thật |
| EV-002 | [backend-tests.trx](../../../evidence/2026-09-24/backend-tests.trx), [log](../../../evidence/2026-09-24/backend-tests.log); 24/09 09:02 +07, .NET10 Windows | Runner:18 Passed, 42 Failed, 60 total. 42 ca bị lỗi khởi tạo Docker/Testcontainers; quản lý chất lượng phân loại Blocked môi trường, không kết luận42 lỗi nghiệp vụ |
| EV-005 | Source ở bảng1, đọc24/09; commit nêu trên | Chứng minh mã/test tồn tại và các lệch hợp đồng; không thay thử runtime |
| Nguồn lịch sử | [03-backend-core](../../../plan-note/03-backend-core.md), ghi 17/09, không nêu commit tại bảng kết quả | Tuyên bố60/60; chưa có raw log/TRX trong chính nguồn đó. Giữ làm lịch sử, không gộp với lần chạy24/09 |

Không tính số test unit frontend/backend thành số yêu cầu nghiệm thu. Một test có thể chỉ phủ một phần của nhiều REQ; coverage, p95, HAR và E2E thật vẫn thiếu.

## 3. Hướng dẫn chạy kiểm B

1. Dùng .NET10 và Docker daemon hoạt động; Testcontainers tạo PostgreSQL riêng, không dùng DB dev chung. Kiểm cấu hình runtime theo README dự án.
2. Từ gốc repo chạy:
   ```powershell
   dotnet test src/backend/PromptVideo.Api.Tests/PromptVideo.Api.Tests.csproj -c Release --logger "trx; LogFileName=backend-tests.trx" --results-directory design-note/evidence/NEW-RUN-DATE
   ```
   Thay NEW-RUN-DATE bằng thư mục lần chạy mới để giữ nguyên bằng chứng24/09.
3. Ghi commit, môi trường, UTC/local timestamp, lệnh và file log. Nếu Docker chưa lên, giữ kết quả Blocked cho integration; sửa môi trường rồi chạy lại.
4. Dùng B_01 §5 đối chiếu phương thức hiện có với TC-B; ca chưa có mã/test phải được bổ sung chứ không tự đánh dấu pass.
5. Chạy E2E A–B bằng backend thật; dùng tài khoản kiểm thử và dữ liệu giả lập. Lưu HAR đã che token/password, screenshot/video kết quả; không đưa bí mật vào evidence.
6. Muốn đo coverage, chạy collector `--collect:"XPlat Code Coverage"`, xác định namespace/denominator B và ghi report. Chưa có report thì không điền phần trăm.

## 4. Kịch bản demo B có thể chuẩn bị

- Tạo tài khoản kiểm thử Free, đăng nhập và đọc quyền; giải thích đây là dữ liệu điều khiển, không tải project/video.
- Xin 1080p nhưng server cấp 720p có watermark; xuất theo quyền A nhận.
- Giữ/hoàn tất 3 lượt rồi thử lần 4; màn hình phải giải thích hạn mức.
- Với lượt đang Reserved, thử cancel và đối soát hoàn 1 lần; complete rồi cancel phải 409.
- Demo paid qua fake gateway chỉ ở môi trường được phép, luôn nói rõ không thu tiền thật; không dùng demo này chứng minh OB-15 môi trường thật.
- Nêu rõ ISS-G-001: hiện source chưa bảo đảm giao file sau complete được xác nhận theo quyết định mới. Kịch bản lỗi mạng/TTL phải trình bày như phần chưa đạt, không che bằng ca thuận lợi.

## 5. Nhật ký thực hiện và đầu vào vận hành

Lượt này tạo/chuẩn hóa tài liệu và ghi nguồn; không thay code nghiệp vụ. Không có căn cứ để ghi giờ công quá khứ, tiền mặt đã chi hoặc người đã ký review. Bổ sung từ nay theo bảng:

| Ngày | Người thực hiện | WBS / ACT / nhiệm vụ | Đầu ra | Actual giờ | Actual tiền | Chứng cứ |
| --- | --- | --- | --- | --- | --- | --- |
| 24/09/2026 | Lượt hỗ trợ soạn tài liệu theo ủy quyền người dùng; chủ quản nội dung Việt Quang | CV-B-01..04, 06, 08 | B_01..B_05, dữ liệu planning B | Chưa có time log đáng tin cậy | Chưa có chứng từ | Các file hiện hành và EV-001/002/005 |

Chi phí theo kế hoạch trong B_02 không được nhập cột Actual. Các vấn đề/rủi ro sau khi có sự kiện chuyển M03/P13 theo đúng mã chung.
