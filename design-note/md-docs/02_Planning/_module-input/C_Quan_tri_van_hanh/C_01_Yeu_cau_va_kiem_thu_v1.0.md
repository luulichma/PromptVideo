# C_01 — Yêu cầu và kiểm thử: Quản trị và vận hành

| Thuộc tính | Giá trị |
| --- | --- |
| Nhóm tiến trình / phiên bản | Planning / v1.0 |
| Ngày cập nhật | 2026-09-24 |
| Trạng thái | Draft; quy ước nội bộ đã chốt theo ủy quyền, chưa có xác nhận kiểm tra hay phê duyệt baseline |
| Chủ nội dung | Phạm Quang Anh |
| Kiểm tra / xác nhận nội bộ | Nguyễn Thế Chiến / Nguyễn Việt Quang |
| Thay thế | Phần nghiệp vụ C trong `plan-note/05_Ke_hoach_nghiep_vu_C_v1.0.md` |

## 1. Phạm vi và căn cứ

C cung cấp danh mục mẫu, tài sản đồ họa dùng chung, quyền quản trị, hỗ trợ người dùng, giám sát và dữ liệu phục vụ đo lợi ích. C không nhận ảnh, văn bản, dự án hay video của người dùng. Bộ dữ liệu demo thống nhất là **5 cảnh / 60 giây**, chữ tiếng Việt và ảnh cục bộ; âm thanh, video nền và xử lý video phía máy chủ nằm ngoài phạm vi đang áp dụng.

| Nguồn | Cách sử dụng |
| --- | --- |
| [Project Charter v2.1](../../../../official-docs/01_Initiating/01_Project_Charter_v2.1.docx), §3–5 | Ranh giới A/B/C; OB-04, OB-09, OB-16; NF-03, NF-10; yêu cầu quản trị/vận hành ở §5 |
| [Benefit Management Plan v2.2](../../../../official-docs/00_Pre-project/02_Benefit_Management_Plan_v2.2.docx), §2, §7 | Lợi ích LI-01…LI-05 và trách nhiệm đo sau bàn giao; bản hiện hành không có mã MT-06…MT-09 |
| [C_02](C_02_WBS_uoc_luong_rui_ro_v1.0.md) | WBS, công sức và rủi ro của C |
| [P06](../../06_Quality_Plan_and_Test_Cases_v1.0.md), [P07](../../07_Resource_and_Communication_Plan_v1.0.md) | Chất lượng và tổ chức chung; không gộp vào trách nhiệm lập trình C |
| `src/backend/PromptVideo.Api/Modules/{Admin,Templates,Foundation}` | Hiện trạng API đọc ngày 24/09/2026; đường dẫn mã trong tài liệu tính từ gốc kho |
| `src/frontend/src/core/templates/{templates,catalog}.ts` | Frontend giữ phần trình bày; danh mục máy chủ quyết định mẫu được chọn cho dự án mới |

**Phân biệt trạng thái:** “Có mã/test nguồn” chỉ là kiểm tra tĩnh. “Đã kiểm thử đạt” phải có lần chạy, build, môi trường và bằng chứng. Đợt này chưa chạy lại test C, không phát hành kết luận Pass mới.

| Hạng mục | Phạm vi đầy đủ | Hiện trạng và mục tiêu demo |
| --- | --- | --- |
| Mẫu | Tạo/cập nhật metadata và phiên bản; xác thực manifest; phát hành/rút mẫu | Có danh sách admin/public, đổi trạng thái và 5 mẫu seed; chưa đủ CRUD hoặc xác thực trước phát hành |
| Tài sản dùng chung | Ảnh đồ họa do quản trị cung cấp, kiểm file và liên kết phiên bản | Chưa có module upload asset phía quản trị; ảnh người dùng trong A vẫn cục bộ |
| Hỗ trợ | Tra cứu người dùng/lịch sử xuất; ghi ticket; điều chỉnh hạn mức có kiểm soát | Đặc tả đã chốt, chưa thấy endpoint và UI hoàn chỉnh; ghi ticket demo bằng sổ hỗ trợ có kiểm soát được chấp nhận tạm thời |
| Giám sát | Metrics theo kỳ, health, báo cáo dữ liệu lợi ích | Có metrics tổng hợp hiện tại và readiness; chưa có job DailyMetrics hay báo cáo đủ lợi ích |
| Giao diện | Màn hình admin cho mẫu, hỗ trợ, giám sát | Chỉ được ghi hoàn thành từng thao tác có bằng chứng; không suy ra toàn bộ UI từ API |

## 2. Thuật ngữ, tác nhân và quy tắc

**Template** gồm hai phần: metadata của máy chủ (`templateKey`, `name`, `version`, `status`, `manifestJson`) và trình bày đóng gói trong A (màu, hình học slot, typography). Manifest là dữ liệu tham số trình bày; không phải nội dung dự án hay đường dẫn tới ảnh/video của người dùng. **Global asset** là ảnh dùng chung do quản trị đưa vào, khác kho ảnh cục bộ của A. **Ticket** là hồ sơ yêu cầu hỗ trợ, chỉ chứa thông tin tối thiểu phục vụ xử lý, không chứa nội dung video.

| Tác nhân | Quyền và trách nhiệm |
| --- | --- |
| Admin | Quản lý mẫu, xem metrics, xử lý ticket và yêu cầu điều chỉnh hạn mức; theo dõi health và dữ liệu lợi ích sau bàn giao khi có xác nhận tiếp nhận; quyền được kiểm ở máy chủ |
| Người dùng | Đọc danh mục Active; gửi mã lỗi/mã reservation cần hỗ trợ; không có quyền quản trị |
| A | Tiêu thụ metadata, áp trình bày từ bundle và giữ nội dung cục bộ |
| B | Sở hữu định danh, thuê bao, UsagePeriod, reservation và giao dịch quota |

- **QT-C-1:** mọi API `/api/admin/*` kiểm chính sách Admin; chưa đăng nhập trả 401, đã đăng nhập không đủ quyền trả 403. Cookie và cơ chế chống CSRF hiện có phải được dùng đúng; không ghi mặc định hệ thống chỉ xác thực bằng JWT.
- **QT-C-2:** tài sản ảnh dùng chung của quản trị tách khỏi ảnh người dùng; người dùng không có quyền thay đổi global asset. Tài sản còn được tham chiếu phải được giữ hoặc chuyển phiên bản an toàn.
- **QT-C-3:** mẫu đang được dùng không bị thay đổi ngược do phát hành phiên bản mới. Đích DEC-012 là snapshot/phiên bản trong dự án đã lưu; mã hiện tại chỉ lưu templateId, còn khoảng trống ISS-G-002. Dự án Retired vẫn mở/xem trước/xuất khi quyền B hợp lệ.
- **QT-C-4:** metrics/log/audit không chứa nội dung dự án, media, token hoặc bí mật kết nối. Dữ liệu tài khoản chỉ xem trong màn hình hỗ trợ có phân quyền, không đưa vào dashboard tổng hợp.
- **QT-C-5:** điều chỉnh hạn mức phải có Admin, kỳ UTC, số lượt, lý do, ticket và idempotency key; quota và audit commit cùng giao dịch. C không sửa trực tiếp `ExportsConsumed` để bỏ qua B.
- **QT-C-6:** chỉ `Draft`, `Active`, `Retired` là trạng thái mẫu chuẩn; `Inactive` trong nháp cũ chuyển sang `Retired`. Khi online, chỉ Active có key trong bundle A mới được chọn cho dự án mới.
- **QT-C-7:** chỉ số giả lập, số đếm reservation và doanh thu thực thu là ba loại khác nhau; không thay thế cho nhau trong đo LI-04/LI-05.
- **QT-C-8:** kiểm cấu trúc, key/phiên bản hỗ trợ và trường cấm của manifest **trước khi phát hành**. Catalog manifest khác frontend exportManifest/schema, cần adapter và kiểm phiên bản; endpoint đổi trạng thái hiện tại chưa chứng minh kiểm này. QT-C-1…4 giữ ý nghĩa của QC-1…4 bản cũ; các quy tắc thêm dùng số mới.

## 3. Yêu cầu và tiêu chí chấp nhận

| ID | Nội dung, luồng chính và ngoại lệ | Tiêu chí chấp nhận | WBS / mức sẵn sàng |
| --- | --- | --- | --- |
| REQ-C-01 | Admin quản lý phiên bản mẫu, phát hành/rút; lỗi key, manifest hoặc phiên bản phải từ chối | Public chỉ Active; admin thấy mọi trạng thái; mẫu không hợp lệ không thể publish; dự án cũ dùng Retired còn mở được | 4.4.1; có danh sách/đổi trạng thái, thiếu CRUD và validation trước publish |
| REQ-C-02 | Quản lý ảnh đồ họa dùng chung; kiểm loại/kích thước, quyền đọc, tham chiếu và xóa an toàn | Nhận PNG/JPEG/WebP tối đa 50 MiB/file; từ chối file giả định dạng/vượt ngưỡng; tài sản còn được tham chiếu không bị xóa cứng; không nhận audio/video | 4.4.1; chưa triển khai đầy đủ, 50 MiB là giới hạn nội bộ đã chọn, không phải ngưỡng Charter |
| REQ-C-03 | Kiểm Admin trên mọi thao tác quản trị, giữ CSRF cho thao tác thay đổi | Anonymous 401, User 403, Admin hợp lệ mới xử lý; thiếu token CSRF bị từ chối theo hợp đồng hiện hành | 4.4.1; có code/policy và test nguồn, chưa chạy lại |
| REQ-C-04 | Admin tra cứu tài khoản bằng email chính xác/ID và lịch sử reservation phân trang | Chỉ trả dữ liệu tài khoản cần hỗ trợ và reservation đúng người; không có nội dung video, không trộn người dùng khác | 4.4.2; chưa có endpoint tra cứu được xác minh |
| REQ-C-05 | Từ ticket đã xác minh, Admin gửi điều chỉnh hạn mức qua IF-CB-01 | Retry cùng key không cộng hai lần; cùng key khác payload bị từ chối; lỗi audit/quota rollback toàn bộ; không sửa kỳ khác | 4.4.2; hợp đồng đích, chưa có endpoint thực hiện |
| REQ-C-06 | Xem dashboard số đếm theo định nghĩa và kỳ đo rõ | Bộ dữ liệu biết trước cho ra đúng counts; ghi GeneratedAtUtc và kỳ của mỗi chỉ số; dữ liệu tổng hợp không chứa nội dung/tài khoản | 4.4.3; có snapshot hiện tại, chưa có lọc 30 ngày đầy đủ |
| REQ-C-07 | Xuất bộ dữ liệu phục vụ đo LI-01…LI-05 và lưu hồ sơ theo kỳ | Mỗi số có nguồn, đơn vị, cửa sổ, người đo; thiếu dữ liệu ghi Chưa đo; không tuyên bố doanh thu thực từ giao dịch giả lập | 4.4.3; thiết kế đo, chưa có job tổng hợp tự động được xác minh |
| REQ-C-08 | Xem liveness/readiness để biết hệ thống đang nhận yêu cầu được không | Readiness khỏe trả 200 và trạng thái; lỗi phụ thuộc trả 503; chỉ tên check/trạng thái, không lộ exception/connection string | 4.4.3; có FoundationModule và test nguồn |
| REQ-C-09 | Ghi nhận và theo dõi yêu cầu hỗ trợ | Ticket có mã, thời điểm, người tiếp nhận, mô tả lỗi tối thiểu, trạng thái, chủ xử lý, hạn và kết quả; không bỏ mất yêu cầu khi chưa có API | 4.4.2; sổ demo do Quang Anh quản lý, workflow API chưa triển khai |

| ID | Tiêu chí phi chức năng | Môi trường/cách đo | Số đo hiện có |
| --- | --- | --- | --- |
| NF-C-01 | p95 dashboard ≤2 giây trên cửa sổ 30 ngày, 10.000 reservation, 100 requests tuần tự; ngưỡng nội bộ đã chốt | API local/staging, PostgreSQL, ghi CPU/RAM/build và thời gian cold/warm riêng; chỉ áp khi API theo kỳ đã có | Chưa đo; API snapshot hiện tại không đáp ứng đủ phép đo theo kỳ |
| NF-C-02 | 0 file audio/video hoặc file >50 MiB được nhận vào kho asset quản trị | Bộ fixture hợp lệ/sai MIME/sai magic bytes/50 MiB +1 byte; kiểm phía máy chủ | Chưa triển khai/Chưa đo |
| NF-C-03 | 100% thay đổi trạng thái mẫu và điều chỉnh quota được gắn audit với actor, đối tượng, thời điểm và lý do phù hợp; không lộ nội dung | Integration với DB; quota/audit có rollback cùng giao dịch | Audit đổi trạng thái có code; lý do nghiệp vụ và điều chỉnh quota chưa đủ |

## 4. Trạng thái và hợp đồng giao tiếp

| Trạng thái mẫu | Cách vào/ra và hệ quả | Ca thử |
| --- | --- | --- |
| Draft | Bản chưa phát hành; chỉ admin xem; publish sau validation thành Active | TC-C-01, TC-C-05 |
| Active | Public có key; A chỉ hiện nếu key tồn tại trong bundle; có thể rút thành Retired | TC-C-02, TC-C-06 |
| Retired | Không dùng cho lựa chọn mới; giữ dữ liệu dự án cũ. Muốn phát hành lại phải qua kiểm tương thích như Active | TC-C-03, TC-C-05 |

**IF-CA-01 — danh mục C → A.** `GET /api/templates` trả metadata Active. Key chưa có trong A bị bỏ qua. Catalog manifest và frontend exportManifest/schema là hai cấu trúc khác nhau; adapter/version check và snapshot mẫu là đích DEC-012, chưa được coi đã triển khai. Khi không đọc được catalog, A hiện có fallback mẫu đóng gói; đích là chỉ dùng snapshot/danh mục đã biết có nhãn thời điểm. API và fallback là hiện trạng, không coi fallback là bảo đảm cập nhật trạng thái khi mất mạng. Luôn kiểm quyền B trước xuất. C chịu validation trước publication; A chịu presentation và xử lý key/phiên bản không hỗ trợ. TC-I-04 kiểm luồng này; gap snapshot là ISS-G-002.

**IF-CB-01 — hỗ trợ/điều chỉnh C → B.** P03 chốt đường dẫn thiết kế `POST /api/admin/support/quota-adjustments`, **chưa phải route đang tồn tại**. Dùng đúng tên trường của P03: userId, usagePeriodStartUtc, delta nguyên dương, ticketId, reason, idempotencyKey; actor Admin lấy từ phiên xác thực, kèm CSRF. B kiểm người/kỳ/lý do/số lượt, lưu kết quả idempotency cùng cập nhật quota và AuditEvent trong giao dịch nguyên tử. Response đích gồm adjustmentId, userId, usagePeriodStartUtc, balanceBefore, balanceAfter, auditEventId. Retry cùng payload trả kết quả ban đầu; key trùng payload khác trả 409; dữ liệu không hợp lệ 400, User thường 403, ticket/user không có 404. Không dùng thanh toán giả lập để bù lượt. B chịu logic/giao dịch, C chịu ticket/UI và dữ liệu yêu cầu. Bổ sung schema vào OpenAPI khi triển khai; giữ route ở trạng thái thiết kế cho tới lúc có mã và kiểm thử.

## 5. RTM của C

| Req ID | Requirement Description | Business Objective | Design Doc | Code Module | Test Case | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-C-01 | Danh mục và vòng đời mẫu | OB-04, RQ-06; Charter §5 nghiệp vụ C | C_01 §3–4, P03 IF-CA-01 | Modules/Admin; Modules/Templates; frontend/core/templates | TC-C-01,02,03,05,06,09 | Có mã một phần; chưa kiểm đầy đủ CRUD/validation |
| REQ-C-02 | Ảnh đồ họa dùng chung | Charter §5 nghiệp vụ C; hỗ trợ OB-04 | C_01 §3 | Chưa có module asset quản trị được xác minh | TC-C-04,10 | Chưa làm đầy đủ |
| REQ-C-03 | Quyền quản trị | Charter §5 nghiệp vụ C; NF-11 hỗ trợ bảo vệ tài khoản | C_01 QT-C-1 | Infrastructure/Security; Modules/Admin | TC-C-07,08 | Có code/test nguồn; chưa chạy lại |
| REQ-C-04 | Tra cứu hỗ trợ | Charter §5 nghiệp vụ C; không gán một OB không tồn tại | C_01 IF-CB-01 | Chưa có route được xác minh | TC-C-11 | Chưa làm |
| REQ-C-05 | Điều chỉnh hạn mức | Hỗ trợ OB-14; Charter §5 nghiệp vụ C | C_01 IF-CB-01 | B: UsagePeriod, AuditService; service điều chỉnh chưa có | TC-C-12,13,14 | Chưa làm |
| REQ-C-06 | Giám sát tổng hợp | Hỗ trợ vận hành Charter §5 và LI-04; counts không bằng doanh thu | C_01 §3 | Modules/Admin/GetMetricsAsync | TC-C-21,23 | Có snapshot, thiếu lọc kỳ; chưa chạy lại |
| REQ-C-07 | Dữ liệu đo lợi ích | BMP v2.2 LI-01…LI-05 | C_01 §7 | Chưa có DailyMetricsJob; nguồn A/B và sổ vận hành | TC-C-22 | Chưa có đo đủ theo kỳ |
| REQ-C-08 | Health/readiness | OB-16, NF-10; probe đơn lẻ không chứng minh uptime | C_01 §3 | Modules/Foundation; health configuration | TC-C-24,25 | Có code/test nguồn; lỗi phụ thuộc cần thử |
| REQ-C-09 | Ghi và theo dõi hỗ trợ | Charter §5 nghiệp vụ C | C_01 §3, C_03 §4 | Sổ hỗ trợ demo; service/UI chưa có | TC-C-15,16 | Workflow đã mô tả; chưa có ticket thực được ghi nhận |
| NF-C-01 | Hiệu năng dashboard | Ngưỡng nội bộ cho vận hành C | C_01 §3 | Modules/Admin | TC-C-23 | Chưa đo |
| NF-C-02 | Giới hạn file asset | Ngưỡng nội bộ, hỗ trợ OB-09 | C_01 §3 | Chưa có upload admin được xác minh | TC-C-04,10 | Chưa làm |
| NF-C-03 | Audit và giao dịch | Hỗ trợ kiểm soát vận hành; NF-11 | C_01 QT-C-4,5 | Infrastructure/Audit; Modules/Admin | TC-C-09,12,13,14 | Có audit một phần; thiếu nghiệp vụ điều chỉnh |

OB-11 là **ngân sách/công sức**, OB-12 là **coverage** của bộ dựng, mã hóa và giấy phép. Không dùng OB-11 cho nội dung mẫu, OB-12 cho dashboard, OB-13 làm nhãn chung cho mọi bảo mật. P09 bổ sung WBS và bằng chứng ngoài bảy cột bắt buộc này. Mã TC viết rút gọn trong ô `TC-C-01,02` có nghĩa TC-C-01 và TC-C-02.

## 6. Ca kiểm thử C — thiết kế đã chốt, chưa phải kết quả chạy

Tiền điều kiện chung: DB thử riêng, tài khoản Admin/User/Anonymous, không dùng dữ liệu thật; ghi build, thời gian, fixture, môi trường vào M05. Các mã TC-C-17…20 chưa cấp, không được tự suy ra là ca đã tồn tại.

| TC | REQ/NF | Cấp | Dữ liệu và bước | Kết quả mong đợi | Ánh xạ nguồn / trạng thái |
| --- | --- | --- | --- | --- | --- |
| TC-C-01 | REQ-C-01 | Integration | Seed một Draft, một Active; gọi public bằng Anonymous và danh sách admin bằng Admin | Public không có Draft; admin có cả hai | TemplateAndAdminTests có nền danh mục; cần thêm fixture Draft; Not Run |
| TC-C-02 | REQ-C-01 | Integration | Admin phát hành một mẫu hợp lệ đã có trong A; tải lại public | Chỉ một metadata đúng key/version, status Active | Cần bổ sung kịch bản publish; Not Run |
| TC-C-03 | REQ-C-01 | Integration/E2E | Tạo dự án dùng promo, đổi sang Retired; tải lại danh mục và mở dự án cũ | Không được chọn mới; dự án cũ giữ nội dung/xem trước; export vẫn cần B | OrdinaryCallersSeeOnlyActiveTemplates + catalog.test.ts; chưa đủ một lần end-to-end; Not Run |
| TC-C-04 | REQ-C-02, NF-C-02 | Integration | Upload ảnh PNG/JPEG/WebP hợp lệ; thử file audio/video giả đuôi ảnh và 50 MiB +1 byte | Chỉ nhận ảnh hợp lệ trong ngưỡng; lỗi không để file rác | Chưa có upload admin; Blocked |
| TC-C-05 | REQ-C-01 | Integration | Tạo manifest sai JSON, key/phiên bản không hỗ trợ, hoặc chứa assetUrl/nội dung; yêu cầu publish từng trường hợp | Từ chối trước đổi trạng thái; public không xuất hiện mẫu lỗi | TemplateManifestsCarryLayoutParametersOnly chỉ kiểm seed, không đủ test publish; Blocked phần validation |
| TC-C-06 | REQ-C-01 | Unit/E2E | API online trả key lạ; thử offline; đổi mẫu trên dự án có chữ/ảnh | Key lạ không render; offline dùng bundle theo thông báo; nội dung không mất | frontend/core/templates/catalog.test.ts và templates.test.ts; Not Run |
| TC-C-07 | REQ-C-03 | Integration | Gọi list/status/metrics với Anonymous, User rồi Admin hợp lệ | 401, 403, thành công tương ứng; User không sửa dữ liệu | OnlyAnAdminMayChangeTemplateStatus có phần User/Admin; cần đủ ma trận endpoint; Not Run |
| TC-C-08 | REQ-C-03 | Integration | Đăng nhập Admin bằng cookie, POST đổi status thiếu/sai/có CSRF mới sau login | Thiếu/sai bị từ chối; token đúng mới thành công | FoundationApiTests và AntiforgeryEndpointFilter; Not Run |
| TC-C-09 | REQ-C-01, NF-C-03 | Integration | Admin đổi trạng thái; đối chiếu DB/audit, actor, đối tượng, thời điểm; kiểm payload log | Có audit phù hợp, không nội dung/tokens; yêu cầu reason nghiệp vụ được kiểm theo đích | AuditService có nguồn; cần test đầy đủ reason/status audit; Not Run |
| TC-C-10 | REQ-C-02, NF-C-02 | Integration | User cố upload/xóa; Admin xóa asset còn tham chiếu, rồi asset không còn tham chiếu | User bị chặn; không làm hỏng mẫu đang tham chiếu; xóa an toàn có audit | Chưa có service admin asset; Blocked |
| TC-C-11 | REQ-C-04 | Integration | Hai user có reservation riêng; Admin tìm email chính xác của một người; thử email không tồn tại và phân trang | Chỉ lịch sử đúng người, không media; kết quả rỗng rõ khi không tìm thấy | Chưa có API; Blocked |
| TC-C-12 | REQ-C-05, NF-C-03 | Integration | User đã hết 3 lượt; Admin bù 1 lượt với ticket/reason/key; gọi lại cùng key hai lần | Chỉ thêm một lượt; audit một điều chỉnh; user reserve thêm đúng một lần | IF-CB-01 chưa có service; Blocked |
| TC-C-13 | REQ-C-05, NF-C-03 | Integration | Gửi cùng key với số lượt/user khác; gửi hai yêu cầu đồng thời; ép lỗi ghi audit | Payload khác bị conflict; không cộng lặp; lỗi audit rollback quota | IF-CB-01; Blocked |
| TC-C-14 | REQ-C-05, NF-C-03 | Integration | User thường, lý do rỗng, kỳ sai, delta≤0; lấy snapshot DB trước/sau | Không chỉnh quota; trả lỗi phân quyền/validation theo hợp đồng | IF-CB-01; Blocked |
| TC-C-15 | REQ-C-09 | Manual/E2E | Ghi yêu cầu support giả lập gồm mã lỗi, userId, reservationId; phân công rồi đóng | Ticket có đủ ID/thời điểm/chủ/hạn/kết quả; lịch sử chuyển Open → InProgress → Resolved → Closed | Sổ demo C_03; Not Run |
| TC-C-16 | REQ-C-09 | Manual/E2E | Ticket thiếu chủ xử lý, hoặc mô tả dán nội dung video/token; yêu cầu bổ sung an toàn | Không đưa nội dung/token vào sổ; chuyển NeedsInfo có chủ và hạn; không đóng giả | Sổ demo C_03; Not Run |
| TC-C-21 | REQ-C-06 | Integration | Seed 2 Completed, 1 Reserved, 1 Canceled; tài khoản/gói biết trước; gọi metrics | Counts đúng fixture, không email/nội dung/key idempotency; phân biệt tổng lịch sử và tháng hiện tại | AdminMetricsAreAggregatesWithNoUserContent có phần nguồn; Not Run |
| TC-C-22 | REQ-C-07 | Manual/Integration | Đối chiếu báo cáo lợi ích với 1 benchmark A, B giả lập và sổ chi phí chưa đủ | LI-01 có nguồn đo hoặc Chưa đo; LI-04 không gọi giả lập là doanh thu thực; LI-05 không tính khi thiếu mẫu số | Chưa có báo cáo tự động; Manual Not Run |
| TC-C-23 | REQ-C-06, NF-C-01 | Performance | Seed 10.000 reservation/30 ngày; chạy 100 requests sau warmup, lưu raw durations | p95≤2 giây; số lượng và kỳ đúng; không bỏ requests lỗi khỏi mẫu | API theo kỳ còn thiếu; Blocked phép đo đầy đủ |
| TC-C-24 | REQ-C-08 | Integration | PostgreSQL thử hoạt động; GET foundation/health và /health/live | 200, readiness Healthy, chỉ name/status từng check | FoundationHealthReportsReadinessWithoutLeakingCheckDetail; Not Run |
| TC-C-25 | REQ-C-08 | Integration | Cô lập/ngắt DB thử; gọi readiness; kiểm body/log và phục hồi DB | 503 khi Unhealthy, không lộ secret; phục hồi trả khỏe; không kết luận uptime30 ngày từ ca này | Cần thêm failure fixture; Not Run |

Không định nghĩa lại TC-A/TC-B tại đây. Người chạy C: Chiến; người sửa: Quang Anh; người xác nhận nội bộ: Việt Quang. Mã test code có sẵn chỉ là ứng viên bằng chứng cho ca tài liệu; cần đối chiếu độ bao phủ từng bước.

## 7. Ánh xạ dữ liệu lợi ích đúng bản hiện hành

| Lợi ích | Dữ liệu cần / công thức | Nguồn và người chuẩn bị | C còn phải làm |
| --- | --- | --- | --- |
| LI-01 giảm thời gian tạo video | Thời gian từ bắt đầu đến lưu MP4; chuẩn 5 cảnh/60 giây | A đo đầu-cuối; C tổng hợp; thời gian encode riêng không thay phép đo này | Giữ timestamp, môi trường và mẫu benchmark; chưa có baseline đã xác nhận thì ghi thiếu |
| LI-02 giảm chi phí sử dụng | Chi phí phần mềm một năm, so sánh cùng nhu cầu | BMP2.2 và dữ liệu giá/chi phí thực; chủ đo theo BMP | Không tính tự động từ reservation; lưu bằng chứng chi phí |
| LI-03 giảm rủi ro lộ nội dung | 0 byte nội dung rời máy trong luồng tạo/xuất | A/B kiểm network, C kiểm metrics/audit | Lưu log đã làm sạch và ca kiểm luồng thực |
| LI-04 doanh thu định kỳ | Doanh thu thực thu và thuê bao trả phí còn hiệu lực; thêm chuyển đổi/gia hạn | B cung cấp ledger thật khi có; C cung cấp số thuê bao; BMP giao chủ kinh doanh | API hiện chỉ counts và active subscriptions, chưa chứng minh doanh thu hoặc renewal; không dùng payment giả lập |
| LI-05 chi phí phục vụ thấp | Tiền mặt vận hành/năm / số thuê bao trả phí trung bình | Sổ chi phí + snapshots theo kỳ đủ mẫu | Chưa có số trung bình và chi phí thực; không điền 0 thay dữ liệu thiếu |

Uptime hỗ trợ OB-16/NF-10 cần chuỗi đo đủ 30 ngày sau phát hành. Một endpoint health không tự chứng minh 99%. Quyền và vai trò kinh doanh trong BMP là bối cảnh dự án; ba thành viên chỉ chuẩn bị hồ sơ, không ký thay người tiếp nhận vận hành hay nhà tài trợ.

## 8. Nội dung đã sửa theo feedback

CV-C-01: tách nghiệp vụ/chất lượng/nguồn lực; CV-C-02: chốt Draft/Active/Retired, IF-CA-01/IF-CB-01 và bổ sung health/ticket; CV-C-03: sửa OB/LI, TC-C đầy đủ và trạng thái có căn cứ. Lịch sử: 24/09/2026 chuẩn hóa từ bản C ngày 21/09; không sửa ngược nội dung lịch sử hoặc ghi nhận phê duyệt chưa diễn ra.
