# C_03 — Thiết kế, thực hiện và hướng dẫn module C

| Thuộc tính | Giá trị |
| --- | --- |
| Phiên bản / ngày chốt | v1.0 / 2026-09-24 |
| Trạng thái | Draft snapshot có nguồn; không là xác nhận hoàn thành module |
| Chủ / kiểm tra / xác nhận nội bộ | Phạm Quang Anh / Nguyễn Thế Chiến / Nguyễn Việt Quang |
| Nguồn yêu cầu | [C_01](../../02_Planning/_module-input/C_Quan_tri_van_hanh/C_01_Yeu_cau_va_kiem_thu_v1.0.md); P03 IF-CA-01/IF-CB-01 |

## 1. Thiết kế và phần thực sự đã có

Máy chủ giữ định danh/thuê bao/reservation/metadata; frontend giữ dự án, ảnh người dùng và trình bày mẫu. C đọc dữ liệu B qua nghiệp vụ/hợp đồng; không biến thao tác SQL trực tiếp thành tính năng hỗ trợ đã triển khai.

| Thành phần | Hiện trạng kiểm từ mã nguồn ngày 24/09 | Giới hạn cần giữ trong báo cáo |
| --- | --- | --- |
| `src/backend/PromptVideo.Api/Modules/Templates/TemplatesModule.cs` | `GET /api/templates` trả các entry Active với key/name/version/status/manifestJson | Đây là catalog metadata; frontend exportManifest/schema không đồng nhất tự động |
| `src/backend/PromptVideo.Api/Modules/Admin/AdminModule.cs` | Admin list mọi mẫu, đổi status, đọc metrics; group kiểm Roles.AdminPolicy; POST có CSRF | Chưa có CRUD/upload ảnh/ticket/adjustment; parse status chưa chứng minh toàn bộ validation manifest/phiên bản |
| `src/frontend/src/core/templates/catalog.ts` | Online lọc key Active có trong bundle; offline dùng bundle; dự án Retired vẫn mở | Đích DEC-012 yêu cầu snapshot/version và catalog có thời điểm; hiện chỉ templateId, còn ISS-G-002 |
| `src/frontend/src/core/templates/templates.ts` | Bundle giữ màu, vị trí, chữ và slot trình bày | Không phải máy chủ cấp toàn bộ kịch bản/nội dung dự án |
| `src/backend/PromptVideo.Api/Modules/Foundation/FoundationModule.cs` | Status/readiness; không trả mô tả/exception từ healthcheck; Unhealthy trả 503 | Không phải phép đo uptime30 ngày |
| `src/frontend/src/features/foundation/FoundationStatus.tsx` | Client hỏi readiness và báo khả dụng | Không chứng minh đã có dashboard admin hoàn chỉnh |
| `src/backend/PromptVideo.Api/Infrastructure/Audit/AuditService.cs` | Ghi sự kiện hệ thống theo đối tượng/actor | Cần kiểm đủ reason và transaction khi thêm adjustment; không suy từ export audit sang quota support |

Backend metrics hiện có: GeneratedAtUtc, UserCount, ReservationsTotal/Completed/Outstanding/Canceled, ExportsConsumedThisPeriod, ActiveTemplateCount, ActiveSubscriptionsByPlan. Phần counts reservation là toàn lịch sử còn lưu, `ExportsConsumedThisPeriod` là kỳ tháng hiện tại; không gọi tất cả là số 30 ngày. Không có doanh thu thực, cohort renewal hay chi phí phục vụ trong response này.

## 2. Hướng dẫn chuẩn bị và chạy kiểm tra

Nguồn kỹ thuật chính là [src/README.md](../../../src/README.md). Từ thư mục `src`, chuẩn bị .NET SDK theo `global.json`, Node/npm theo README, Docker daemon, PostgreSQL và dependencies. Chỉ dùng môi trường phát triển, tài khoản giả và fixture riêng.

1. Theo mục First run của README: cấu hình `.env` cục bộ, khởi động PostgreSQL, restore/migrate và `npm ci --prefix frontend`. Không đưa `.env` hoặc mật khẩu vào hồ sơ.
2. Chạy API bằng `dotnet run --project backend/PromptVideo.Api`; chạy frontend bằng `npm run dev --prefix frontend` ở terminal khác. URL/port lấy từ README hoặc log thực tế, ghi nếu đã đổi.
3. Nếu cần tài khoản quản trị demo, dùng cơ chế seed **development-only** được README mô tả; cung cấp secret qua môi trường, không chép secret vào biên bản. Đăng nhập đúng luồng; lấy CSRF mới sau login trước POST.
4. Đọc catalog public; với Admin đọc danh sách, đổi status một mẫu thử và kiểm public. Dùng bộ TC-C-01…09 ghi từng kết quả, không đổi seed của môi trường dùng chung mà không có kế hoạch phục hồi.
5. Xem health/metrics và đối chiếu fixture. Không bấm chức năng chưa có route rồi ghi Pass; ca ticket/adjustment/uploads chưa có điều kiện chạy ghi Blocked.
6. Chạy `dotnet test PromptVideo.sln` để kiểm backend trên Testcontainers riêng; nếu Docker không hoạt động lưu lỗi môi trường và chuyển người phụ trách, không dùng DB production thay thế.

Không hướng dẫn sử dụng route support giả định như thể có thật. Hợp đồng IF-CB-01 mô tả đích; chỉ bổ sung lệnh API cụ thể sau khi OpenAPI, backend và ca kiểm khớp nhau.

## 3. Hồ sơ thực hiện có thể chứng minh

| Bằng chứng | Nội dung có thể kết luận | Không được kết luận |
| --- | --- | --- |
| EV-005 kiểm mã nguồn | Có các file/endpoint/test nguồn nêu ở §1 | API đã chạy đạt, CRUD/adminUI đã hoàn tất |
| EV-001, [frontend-vitest.json](../../../evidence/2026-09-24/frontend-vitest.json) | Ngày 24/09 frontend 79/79 tests trong12 files đạt; kiểm tên test thực trong JSON để đối chiếu catalog/templates | TC-C/TC-I end-to-end hoặc backend đều đạt |
| EV-002, [backend-tests.trx](../../../evidence/2026-09-24/backend-tests.trx), [log](../../../evidence/2026-09-24/backend-tests.log) | Attempt backend 18 passed / 42 failed / 60 total; Docker/Testcontainers unavailable làm integration không chạy đúng điều kiện | Có 42 lỗi nghiệp vụ, hoặc C được kiểm chứng runtime |

Các EV được quản lý trong [INDEX](../../../evidence/INDEX.md). Khi có run mới, lưu runId/build/môi trường riêng và nối vào C_04/M05; không ghi đè bằng chứng thất bại cũ. Giờ thực do Quang Anh thực hiện và chi tiền mặt chưa được nguồn xác nhận: để **chưa ghi nhận**, không lấy 72 giờ forecast làm actual.

## 4. Quy trình hỗ trợ tạm áp dụng khi chưa có hệ thống ticket

Trong đợt demo, Quang Anh ghi yêu cầu vào sổ hỗ trợ có quyền truy cập hạn chế, dùng cấu trúc dưới đây; mỗi ticket được dẫn tới issue/defect nếu có. **Bảng này là schema vận hành, chưa là danh sách ticket thực đã nhận.**

| Trường | Quy tắc |
| --- | --- |
| ticketId | Mã ticket duy nhất do sổ hỗ trợ cấp; nếu cần issue dự án, liên kết ISS-G-nnn do sổ chung cấp |
| createdAt / updatedAt | Ngày giờ có múi giờ; không sửa ngược thời gian để khớp hạn |
| requester / reservationId | Định danh tối thiểu cần xử lý; không đính kèm nội dung video/ảnh/token |
| symptom / category | Hành vi, mã lỗi, bước xảy ra; phân biệt auth/quota/template/health |
| owner / dueAt | Người xử lý và hạn; không bỏ trống khi NeedsInfo |
| status | Open → InProgress → Resolved → Closed; NeedsInfo khi thiếu dữ kiện; mở lại khi lỗi tái hiện |
| resolution / evidence | Hành động đã thực hiện, kết quả kiểm và đường dẫn an toàn; bù lượt chỉ qua chức năng đã được kiểm và có audit |
| confirmedBy / confirmedAt | Chỉ ghi khi người kiểm/tiếp nhận thực sự xác nhận; tên dự kiến không là chữ ký |

Khi chưa có IF-CB-01 triển khai, ticket đề nghị bù lượt ở trạng thái chờ giải pháp; không sửa DB tay rồi gọi là tính năng hoàn tất. Thiếu thông tin thì hỏi mã lỗi/reservation và môi trường, không yêu cầu người dùng gửi toàn bộ project/media lên server.

## 5. Đầu việc thực hiện tiếp và lý do

- Hoàn thiện validation/version/snapshot A–C trước nhận catalogue phát hành: vì đổi status chưa ngăn mẫu không tương thích và dự án cũ có thể bị ảnh hưởng khi bundle đổi.
- Bổ sung tra cứu/ticket/adjustment theo IF-CB-01 với B: vì hỗ trợ phải truy vết được và retry không được cộng lượt nhiều lần.
- Chạy lại integration khi Docker sẵn, ghi run mới: vì attempt hiện tại bị môi trường chặn và đọc source chưa chứng minh hành vi.
- Đối chiếu nguồn LI với A/B và số liệu thật: vì dashboard counts không tự đo doanh thu/gia hạn/chi phí.
- Ghép phần hướng dẫn này vào E03, phần kiểm quy trình vào E04 và kết quả vào M05: vì bộ bàn giao cần một nơi tra chung mà vẫn truy được chủ module.

Ngày 24/09: xử lý CV-C-07 về hồ sơ hiện trạng và hướng dẫn, chưa đánh dấu các bước triển khai còn thiếu là hoàn thành.
