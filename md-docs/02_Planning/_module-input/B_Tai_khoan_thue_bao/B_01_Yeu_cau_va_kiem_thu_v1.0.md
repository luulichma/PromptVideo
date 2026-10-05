# B_01 — Yêu cầu và kiểm thử: Tài khoản, thuê bao và thanh toán

| Thuộc tính | Giá trị |
| --- | --- |
| Nguồn soạn hiện hành | Module B, Planning, phiên bản 1.0 ngày 24/09/2026 |
| Trạng thái | Đã chuẩn hóa theo quyết định nội bộ; chờ kiểm tra chéo, chưa nghiệm thu sản phẩm |
| Chủ nội dung | Nguyễn Việt Quang |
| Kiểm tra / xác nhận nội bộ | Phạm Quang Anh / Nguyễn Thế Chiến; chưa ghi nhận chữ ký hoặc kết quả review |
| Phạm vi sửa | CV-B-01, CV-B-02, CV-B-06; đầu vào CV-B-07/CV-B-08 |
| Quy ước chung | [Quyết định và mã](../../../00_Quyet_dinh_va_quy_uoc_ma.md) |

## 1. Mục đích và phạm vi

B quản lý tài khoản, thuê bao, quyền xuất, hạn mức, thanh toán, gia hạn, hóa đơn và chỗ Doanh nghiệp. A dựng video trên trình duyệt; C hỗ trợ/quản trị theo quyền. Tài liệu này thay phần yêu cầu/RTM/TC của [planning_b.md](../../../../archive/plan-note-2026-09-23/planning_b.md); bản cũ được giữ để tra lịch sử, không dùng số giờ hoặc kết luận phê duyệt của bản cũ làm baseline hiện hành.

| Hạng mục | Toàn phạm vi v2.1 | Phạm vi trình diễn và hiện trạng 24/09 |
| --- | --- | --- |
| Tài khoản, gói, giấy phép, hạn mức | Đầy đủ quy tắc và kiểm thử liên quan | Có mã backend và test; chưa chạy kiểm tra chéo A–B thật kỳ này |
| Mua/gia hạn | Thanh toán thật, tự động cấp quyền ≤ 5 phút, nhắc hạn | Có cổng giả lập; event dedup có mã; checkout operation dedup, cổng thật và nhắc hạn còn thiếu |
| Hóa đơn, 5 chỗ | Vẫn thuộc phạm vi; tách thành PP 4.3.5/4.3.6 | Chưa có entity/API; số Seats=5 trong policy chưa phải quản lý 5 tài khoản |
| Trang thuê bao | Gói, lượt, hạn, mua/gia hạn, hóa đơn, chỗ | Có trang tài khoản và capabilities; các phần còn lại chưa đủ |
| Giao tiếp hỗ trợ C→B | Thực thi theo IF-CB-01 | Hợp đồng nội bộ đã chốt; API chưa được triển khai |

D = có phần trong mục tiêu demo; V = thuộc v2.1. D không có nghĩa là đạt. Không xử lý media/project nội dung trên máy chủ B. Không thêm audio/video nền hoặc nhiệm vụ rà giấy phép phần mềm. Phí/gói bên dưới là dữ liệu dự án, không phải báo giá thị trường.

## 2. Nguồn và thuật ngữ

| Nguồn | Ngày / phiên bản đối chiếu | Giá trị và giới hạn |
| --- | --- | --- |
| [Project Charter](../../../../official-docs/01_Initiating/01_Project_Charter_v2.1.docx) | v2.1 hiện hành | OB-09/12/13/14/15, NF-09, thẩm quyền; tên thư mục không chứng minh đã ký |
| [Business Case và Benefit Plan](../../../../official-docs/00_Pre-project/) | Nguồn Pre-project v2.2 theo danh mục chung | Nguồn giá trị kinh doanh; không tự gán mã MT chưa đối soát |
| [Thiết kế backend](../../../../notes/mvp-plan/03-backend-core.md) | Ghi kết quả 17/09/2026 | Có tuyên bố 60/60 pass lịch sử; không kèm raw result/commit trong chính nguồn đó |
| [Source backend](../../../../src/backend/PromptVideo.Api/) và [test](../../../../src/backend/PromptVideo.Api.Tests/) | Đọc ngày 24/09; HEAD `28a07efcc119493e0d89fbfb72ba422b864de747` | Bằng chứng tĩnh về mã và tên test, không thay kết quả chạy |
| [AccountPage](../../../../src/frontend/src/features/account/AccountPage.tsx), [reservation](../../../../src/frontend/src/core/export/reservation.ts) | Cùng lần đọc source 24/09 | Xác nhận UI hiện có một phần và complete/cancel đang best-effort |
| [Sổ bằng chứng chung](../../../03_Executing/04_Quality_Assurance_and_Lessons_Learned_v1.0.md) | EV-001/EV-002/EV-005 | Kết quả lần chạy mới được ghi tại nguồn này; test xanh hiện hành không tự chứng minh hợp đồng mới |

| Thuật ngữ | Nghĩa dùng thống nhất |
| --- | --- |
| Plan / policy | Free, Personal, Business; quyền là dữ liệu PlanCatalog và Entitlements |
| Capability snapshot | Bản đọc quyền có TTL mặc định 60 giây; API reserve tự tính lại quyền phía server, không nhận snapshot như chứng thư |
| UsagePeriod | Bộ đếm theo tháng UTC; gồm lượt Reserved và Completed, kể cả khi đang dùng paid |
| Reservation | Giữ lượt với key duy nhất theo người dùng; TTL 30 phút; trạng thái API `Reserved/Completed/Canceled` |
| Idempotency | Lặp cùng thao tác không gây tác dụng lần hai; key reserve khác key sự kiện thanh toán |
| Applied / Duplicate / AmountMismatch | Kết quả service apply payment; không đồng nhất với toàn bộ trạng thái lưu PaymentEvent |
| Seat | Tài khoản được quyền Business từ thuê bao; tổng 5 gồm owner theo quyết định nội bộ |
| Bằng chứng tĩnh / bằng chứng chạy | Đọc source chứng minh có mã; log/TRX/HAR đúng phiên bản mới chứng minh ca đã chạy |

## 3. Đặc tả và quyết định nghiệp vụ

### 3.1. Luồng chính và ranh giới

```text
Đăng ký → đăng nhập → đọc quyền
                        ├─ reserve → dựng/mã hóa cục bộ → complete được server xác nhận → giao file
                        │     └─ hủy/lỗi/chưa hoàn tất → cancel hoặc giải phóng khi xử lý reservation hết TTL
                        └─ mua/gia hạn → payment được xác nhận → subscription → đọc quyền mới
Business: subscription → quản lý chỗ / hóa đơn (planning package, chưa có mã)
C hỗ trợ: Admin → IF-CB-01 cộng lượt có reason + idempotency + audit (chưa có API)
```

Request xuất chỉ mang định danh/quyền truy cập, idempotency key, độ phân giải yêu cầu hoặc reservation ID; không mang chữ, ảnh, scene/project JSON, MP4. Email/mật khẩu chỉ đi qua luồng tài khoản cần thiết và không được đưa vào telemetry. Không nói “máy chủ không nhận dữ liệu người dùng nào” vì máy chủ vẫn cần dữ liệu tài khoản/thanh toán.

### 3.2. Tác nhân và gói

Khách xem gói/đăng ký; User quản lý tài khoản và xuất theo quyền; owner Business quản lý chỗ/hóa đơn của thuê bao mình; Admin thao tác vận hành đã được phân quyền. A thực thi quyền xuất; C yêu cầu hỗ trợ theo IF-CB-01. Cổng thanh toán thật là hệ thống bên ngoài, khác cổng giả lập.

| Chính sách | Free | Personal | Business |
| --- | --- | --- | --- |
| Giá dự án | 0 VND | 599.000 VND/năm | 4.900.000 VND/năm |
| Kỳ hạn | Không có kỳ trả phí | 12 tháng | 12 tháng |
| Hạn mức | 3 lượt/tháng UTC | Không giới hạn | Không giới hạn |
| Trần / watermark | 720p / có | 1080p / không | 1080p / không |
| Số tài khoản/chỗ | 1 | 1 | 5 gồm owner |
| Hóa đơn Business | Không | Không | Có trong toàn phạm vi; chưa triển khai |
| Hỗ trợ theo đặc tả gói | Cộng đồng | Tiêu chuẩn | Phản hồi 1 ngày làm việc; chưa có bằng chứng đạt SLA |
| Hết hạn | Không áp dụng | Trở về Free ở lần kiểm quyền kế tiếp | Chỗ dùng chung mất quyền; xét quyền cá nhân còn hiệu lực rồi Free |

### 3.3. Quy tắc đã quyết định

- **QT-B-1 — Kiểm quyền trước xuất.** Chỉ bắt đầu dựng/mã hóa sau khi reserve được server chấp nhận; snapshot cũ không cho phép bỏ qua máy chủ.
- **QT-B-2 — Máy chủ quyết định lượt.** Reserve tăng Consumed ngay, complete giữ nguyên, cancel hoàn tối đa một lần về UsagePeriodId gốc. Completed không được cancel hoàn lại.
- **QT-B-3 — Chống lặp theo thao tác.** Reserve dùng UserId + IdempotencyKey; payment event dùng Provider + ExternalEventId. Checkout cần operation key để retry không mua thêm kỳ ngoài ý muốn; phần này đang thiếu, theo **ISS-G-003**.
- **QT-B-4 — Cập nhật nhất quán.** Tạo reservation và tăng bộ đếm cùng lần commit, dùng concurrency token/retry. Kiểm thêm đua complete/cancel/sweep; có test reserve không chứng minh mọi đua trạng thái.
- **QT-B-5 — UTC và hết hạn.** Chỉ đổi tháng UTC mới tạo kỳ mới. Paid hết hạn giữ Consumed tháng đó; không tự cấp lại 3 lượt. TTL reservation là 30 phút; quá TTL complete trả 409. Quét giải phóng diễn ra khi reserve mới hoặc khi sweep được bật; mặc định sweep tắt và khoảng quét là 6 giờ, không cam kết hoàn đúng tại phút 30.
- **QT-B-6 — Giả lập tách theo môi trường.** Production không đăng ký gateway giả lập và không map route, kể cả Admin. Development/Testing cho người đã xác thực; môi trường khác nhưng không Production chỉ Admin. Mọi kết quả giả lập ghi nhãn “không thu tiền thật”.
- **QT-B-7 — Không gửi nội dung.** Payload B không mang media/nội dung project; cần HAR luồng thật để chứng minh ngoài việc đọc schema.
- **QT-B-8 — Audit có phạm vi.** Mọi thao tác nhạy cảm mục tiêu có audit tối thiểu actor/action/đối tượng/thời điểm/correlation; telemetry không ghi nội dung hoặc bí mật. Source hiện chỉ chứng minh những sự kiện đã có code; không coi phần chưa triển khai là đã audit.

Mã `RQ-1..RQ-8` ở bản B cũ chuyển tương ứng sang `QT-B-1..QT-B-8`; không đổi `RQ/OB/NF` của Charter. Các REQ-B, NF-B và TC-B hiện có giữ nguyên ID; bổ sung TC mới ở số chưa dùng.

**Quyết định A–B:** sản phẩm mục tiêu chỉ giao file sau server xác nhận Completed (hoặc retry cùng reservation xác nhận đã Completed). Khi timeout, giữ kết quả tạm và thử lại trước TTL; khi expired/conflict thì không giao file, giải quyết lượt và yêu cầu một lần xuất mới. Source frontend hiện giao file với complete best-effort; đây là **ISS-G-001, chưa sửa mã, chưa đạt quyết định mới**.

### 3.4. Yêu cầu chức năng và tiêu chí

Các câu dưới đây là điều kiện mong đợi có thể kiểm; cách thử và ngoại lệ tương ứng nằm ở §3.6/§5. Không gộp điều kiện còn thiếu vào “đã hoàn thành”.

| ID | Nội dung và tiêu chí chấp nhận | WBS xây dựng | Phạm vi |
| --- | --- | --- | --- |
| REQ-B-01 | Đăng ký email duy nhất, mật khẩu tối thiểu 10 ký tự; tài khoản mới dùng Free. | 4.3.1 | D |
| REQ-B-02 | Đăng nhập/đăng xuất; cookie HttpOnly, hỗ trợ bearer; 401 khi chưa xác thực, 403 khi thiếu quyền. | 4.3.1 | D |
| REQ-B-03 | Đổi mật khẩu trong phiên hợp lệ; 5 lần sai khóa 15 phút, lần tiếp theo dù đúng vẫn từ chối. | 4.3.1 | D |
| REQ-B-04 | Phân vai User/Admin; seed admin có kiểm soát; User thường không gọi được chức năng quản trị. | 4.3.1 | D |
| REQ-B-05 | Danh mục Free/Personal/Business và policy đúng bảng gói, đọc được công khai, dữ liệu thiếu phải báo lỗi. | 4.3.2 | D |
| REQ-B-06 | Máy chủ tự giải quyền trước mỗi reserve; snapshot mới có TTL 60 giây. Thuê bao hết hạn chuyển Free ở lần kiểm tra kế tiếp. | 4.3.2 | D |
| REQ-B-07 | Free yêu cầu 1080p được cấp 720p + watermark; trả phí 1080p không watermark; A phải xuất theo quyền trả về. | 4.3.2 | D |
| REQ-B-08 | UsagePeriod theo tháng UTC; tháng mới tạo kỳ mới; cancel hoàn về kỳ của reservation. | 4.3.2 | D |
| REQ-B-09 | Free chỉ giữ/hoàn tất tối đa 3 lượt trong tháng; yêu cầu thứ tư trả 403 kèm thông báo hạn mức. | 4.3.2 | D |
| REQ-B-10 | Reserve tăng bộ đếm ngay; retry cùng UserId+key không tăng lần hai; complete giữ nguyên số đã tính. | 4.3.2 | D |
| REQ-B-11 | 8 reserve đồng thời của Free quota 3 cho đúng 3 Reserved và 5 QuotaExceeded; DB không vượt 3. | 4.3.2 | D |
| REQ-B-12 | Hủy/lỗi trước complete hoàn một lần; completed không hoàn; reservation quá TTL không complete; A chỉ giao file sau complete được xác nhận. | 4.3.2 | D |
| REQ-B-13 | Mua gói năm; thanh toán hợp lệ kích hoạt tự động không quá 5 phút. Demo phải ghi giả lập, không thu tiền. | 4.3.3 | D một phần / V |
| REQ-B-14 | Sự kiện thanh toán trùng không cấp quyền hai lần; sai tiền bị từ chối. Retry checkout cùng thao tác cũng phải chống lặp. | 4.3.3 | D một phần / V |
| REQ-B-15 | Gia hạn còn hiệu lực cộng 12 tháng từ hạn cũ; hết hạn tính từ kích hoạt mới; nhắc trước 7 ngày và 1 ngày. | 4.3.3 | V |
| REQ-B-16 | Hết hạn trả phí về Free; giữ nguyên số đã dùng trong UsagePeriod tháng hiện tại, không tặng lại 3 lượt. | 4.3.2 | D |
| REQ-B-17 | Mỗi giao dịch Applied Business sinh một hóa đơn; trùng sự kiện không sinh lại, owner được xem; thông tin thuế lấy cấu hình đã xác minh. | 4.3.5 | V |
| REQ-B-18 | Business có tối đa 5 tài khoản gồm owner; cấp/thu hồi phải kiểm quyền, khi hết hạn mất quyền dùng chung. | 4.3.6 | V |
| REQ-B-19 | Trang thuê bao có gói, lượt, hạn, mua/gia hạn, hóa đơn và chỗ theo quyền; dữ liệu khớp API. | 4.3.4 | D một phần / V |
| REQ-B-20 | Rate limit auth theo cấu hình; đổi danh tính phải lấy antiforgery mới; request ghi thiếu CSRF bị chặn. | 4.3.1 | D |
| REQ-B-21 | Audit nghiệp vụ và telemetry không chứa nội dung/email/password/key; giữ dữ liệu theo chính sách và phân quyền. | 4.3.1,4.3.2,4.3.3 | D một phần / V |

### 3.5. Phi chức năng

| ID | Ngưỡng / yêu cầu | Nguồn | TC | Số đo / kết luận hiện có |
| --- | --- | --- | --- | --- |
| NF-B-01 | Kiểm quyền p95 ≤ 1 giây | NF-09 của Charter | TC-B-93 | Chưa đo tải/độ trễ kỳ này |
| NF-B-02 | 0 byte nội dung project/ảnh/video gửi đến B | OB-09 | TC-B-94 | Đã đọc schema; chưa có HAR thật kỳ này |
| NF-B-03 | Không vượt quota khi request đồng thời; trạng thái và bộ đếm nhất quán | OB-14 | TC-B-36, TC-B-99 | Có test reserve; chưa chứng minh mọi race complete/cancel/sweep |
| NF-B-04 | Độ phủ module B ≥ 70%; bất biến quota/idempotency có test | OB-12; ngưỡng áp dụng nội bộ cho B | TC-B-92 | Chưa có báo cáo coverage xác minh |
| NF-B-05 | Mật khẩu băm; cookie/bearer; CSRF; lockout; rate limit đúng cấu hình | OB-13 (hỗ trợ); quy tắc bảo mật B | TC-B-51, TC-B-52, TC-B-53, TC-B-54, TC-B-55, TC-B-56 | Có mã và ca thử; EV-002: bị chặn Docker ngày 24/09 |
| NF-B-06 | Health/metrics/audit không lộ nội dung; chính sách retention được cấu hình và kiểm | OB-09; yêu cầu vận hành B/C | TC-B-91, TC-B-39 | Có mã/test; sweep mặc định tắt, chu kỳ 6 giờ |
| NF-B-07 | Testcontainers tách DB; fake gateway không đăng ký và không map trong Production, kể cả Admin | QT-B-6; nguyên tắc môi trường | TC-B-95 | Có test chặn Production; ngoài Dev/Testing còn cần test quyền Admin |

Đo NF-B-01 với warm-up rồi 100 lần kiểm quyền, concurrency 5, ghi CPU/RAM/DB/network, p95 và tỷ lệ lỗi; đây là quy trình kiểm nội bộ đã chọn, không tự thay môi trường nghiệm thu Charter. Coverage phải ghi phạm vi module và mẫu số, không lấy số test pass làm phần trăm phủ.

### 3.6. Trạng thái và ngoại lệ

| Tình huống | Xử lý thống nhất | Ca thử |
| --- | --- | --- |
| Chưa có thuê bao paid | Resolve Free; tài khoản mới chưa dùng có 3 lượt | TC-B-09 |
| Paid hiệu lực / gia hạn | Quyền paid; cùng gói còn hiệu lực cộng 12 tháng từ hạn cũ | TC-B-13/14 |
| Paid hết hạn | Resolve Free, đọc số đã dùng trong kỳ hiện tại; còn quota thì vẫn reserve được | TC-B-15/16/97 |
| Snapshot đã cũ | Server tự giải lại; không quy định cứ cũ là 403 | TC-B-32 |
| Reservation còn TTL, paid hết hạn giữa chừng | Complete căn cứ reservation đã cấp; lần reserve mới xét quyền hiện thời | TC-B-42 |
| Reserved → Completed | Consumed giữ nguyên; complete lặp an toàn | TC-B-33/37 |
| Reserved → Canceled | Hoàn một lần về kỳ gốc; cancel lặp không hoàn thêm | TC-B-38/98/99 |
| Completed → cancel | 409, không hoàn | TC-B-37 |
| Quá TTL / mất mạng | Complete quá TTL 409; chưa giao file; release khi xử lý stale, không mô tả thành job chạy đúng 30 phút | TC-B-39/41 |
| Reserve cùng key đã kết thúc | Server trả bản ghi cũ; A phải kiểm trạng thái, không dùng key cũ cho lần xuất mới | TC-B-35; kiểm tích hợp bổ sung |
| Khóa tài khoản / quá rate limit | Lockout sau 5 sai trong 15 phút; 429 theo cấu hình; tách hai cách thử | TC-B-54/55 |
| Payment event lần đầu / lặp | Applied một lần; lặp trả Duplicate, không cấp thêm; DB có Received/Applied/Rejected, không có đủ mọi state thiết kế | TC-B-22/23 |
| Sai tiền / cổng báo thất bại | Sai tiền có AmountMismatch và không cấp quyền; Pending/Failed/callback thật vẫn là đầu ra phải xây | TC-B-24/25 |
| Seat bị thu hồi / Business hết hạn | Mất quyền dùng chung; fallback entitlement cá nhân/Free, không mặc định 403 | TC-B-63/64 |
| Hóa đơn | Mỗi Applied Business một hóa đơn; duplicate không sinh thêm; thuế là cấu hình được xác minh trước triển khai | TC-B-71..74 |

## 4. Ma trận truy vết

Trạng thái dựa trên source review, nguồn lịch sử và lần chạy EV-002 ngày 24/09: **18 unit case PlanPolicyTests đạt; 42 integration case bị chặn khi khởi tạo Docker/Testcontainers**. Runner ghi Failed nhưng đây là lỗi môi trường, không kết luận 42 lỗi nghiệp vụ. Kết quả này **không phải nghiệm thu**. Tên lớp được nối đến đường dẫn trong B_03; ngày chạy, môi trường và phiên bản được giữ riêng trong B_04 và sổ bằng chứng chung.

| Req ID | Requirement Description | Business Objective | Design Doc | Code Module | Test Case | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-B-01 | Đăng ký email duy nhất, mật khẩu tối thiểu 10 ký tự; tài khoản mới dùng Free. | OB-14 | B_01 §3; P03 | IdentityModule; ApplicationUser | TC-B-09, TC-B-57 | Có mã và ca thử; email trùng chưa có ca riêng |
| REQ-B-02 | Đăng nhập/đăng xuất; cookie HttpOnly, hỗ trợ bearer; 401 khi chưa xác thực, 403 khi thiếu quyền. | OB-13 | B_01 §3; P03 | IdentityModule; AuthResponseConventions | TC-B-51, TC-B-52, TC-B-53 | Có mã và ca thử; EV-002: integration bị chặn Docker ngày 24/09 |
| REQ-B-03 | Đổi mật khẩu trong phiên hợp lệ; 5 lần sai khóa 15 phút, lần tiếp theo dù đúng vẫn từ chối. | OB-13 (hỗ trợ); NF-B-05 | B_01 §3; P03 | IdentityModule | TC-B-54, TC-B-56 | Có mã và ca thử; EV-002: integration bị chặn Docker ngày 24/09 |
| REQ-B-04 | Phân vai User/Admin; seed admin có kiểm soát; User thường không gọi được chức năng quản trị. | OB-13 (hỗ trợ) | B_01 §3; P03 | Roles; ReferenceDataSeeder; AdminModule | TC-B-53 | Có mã và ca thử; không chứng minh mọi endpoint tương lai |
| REQ-B-05 | Danh mục Free/Personal/Business và policy đúng bảng gói, đọc được công khai, dữ liệu thiếu phải báo lỗi. | OB-13, OB-14, OB-15 | B_01 §3; P03 | PlanCatalog; PlanCapabilities; SubscriptionsModule | TC-B-10 | Có mã và ca thử; EV-002: integration bị chặn Docker ngày 24/09 |
| REQ-B-06 | Máy chủ tự giải quyền trước mỗi reserve; snapshot mới có TTL 60 giây. Thuê bao hết hạn chuyển Free ở lần kiểm tra kế tiếp. | OB-13 | B_01 §3; P03 | EntitlementService; ExportReservationService | TC-B-15, TC-B-32 | Có mã và ca thử một phần; snapshot không phải token gửi lại cho reserve |
| REQ-B-07 | Free yêu cầu 1080p được cấp 720p + watermark; trả phí 1080p không watermark; A phải xuất theo quyền trả về. | OB-14 | B_01 §3; P03 | PlanCatalog; ExportReservationService; frontend export | TC-B-31 | API có mã và ca thử; file đầu ra A–B chưa kiểm chứng kỳ này |
| REQ-B-08 | UsagePeriod theo tháng UTC; tháng mới tạo kỳ mới; cancel hoàn về kỳ của reservation. | OB-14 | B_01 §3; P03 | UsagePeriod; ExportReservationService | TC-B-40, TC-B-98 | Có test chuyển tháng; cancel xuyên tháng còn thiếu ca chạy |
| REQ-B-09 | Free chỉ giữ/hoàn tất tối đa 3 lượt trong tháng; yêu cầu thứ tư trả 403 kèm thông báo hạn mức. | OB-14 | B_01 §3; P03 | ExportsModule; ExportReservationService | TC-B-34 | Có mã và ca thử; EV-002: integration bị chặn Docker ngày 24/09 |
| REQ-B-10 | Reserve tăng bộ đếm ngay; retry cùng UserId+key không tăng lần hai; complete giữ nguyên số đã tính. | OB-13, OB-14 | B_01 §3; P03 | ExportReservationService; ApplicationDbContext | TC-B-33, TC-B-35, TC-B-37 | Có mã và ca thử; EV-002: integration bị chặn Docker ngày 24/09 |
| REQ-B-11 | 8 reserve đồng thời của Free quota 3 cho đúng 3 Reserved và 5 QuotaExceeded; DB không vượt 3. | OB-14; NF-B-03 | B_01 §3; P03 | ExportReservationService; UsagePeriod xmin | TC-B-36 | Có test concurrency; EV-002: bị chặn Docker ngày 24/09 |
| REQ-B-12 | Hủy/lỗi trước complete hoàn một lần; completed không hoàn; reservation quá TTL không complete; A chỉ giao file sau complete được xác nhận. | OB-13, OB-14 | B_01 §3; P03 | ExportReservationService; DataRetentionService; frontend reservation | TC-B-37, TC-B-38, TC-B-39, TC-B-41, TC-B-99 | Có mã B; A lệch quyết định giao file: ISS-G-001; TTL/sweep cần phân biệt |
| REQ-B-13 | Mua gói năm; thanh toán hợp lệ kích hoạt tự động không quá 5 phút. Demo phải ghi giả lập, không thu tiền. | OB-15 | B_01 §3; P03 | PaymentGateway; SubscriptionService; SubscriptionsModule | TC-B-13, TC-B-21, TC-B-22, TC-B-25, TC-B-95 | Có mô phỏng và test cấp quyền; cổng thật/pending/failed chưa triển khai đầy đủ |
| REQ-B-14 | Sự kiện thanh toán trùng không cấp quyền hai lần; sai tiền bị từ chối. Retry checkout cùng thao tác cũng phải chống lặp. | OB-15 | B_01 §3; P03 | SubscriptionService; PaymentEvent | TC-B-23, TC-B-24, TC-B-100 | Event dedup có mã/test; checkout chưa có client idempotency key |
| REQ-B-15 | Gia hạn còn hiệu lực cộng 12 tháng từ hạn cũ; hết hạn tính từ kích hoạt mới; nhắc trước 7 ngày và 1 ngày. | OB-15 | B_01 §3; P03 | SubscriptionService; phần nhắc chưa có | TC-B-14, TC-B-16, TC-B-17 | Gia hạn có mã, thiếu ca riêng; nhắc hạn chưa có bằng chứng |
| REQ-B-16 | Hết hạn trả phí về Free; giữ nguyên số đã dùng trong UsagePeriod tháng hiện tại, không tặng lại 3 lượt. | OB-13, OB-14 | B_01 §3; P03 | EntitlementService; PlanCapabilities; ExportReservationService | TC-B-15, TC-B-42, TC-B-97 | Fallback có mã/test; dùng lại quota sau paid cần test riêng |
| REQ-B-17 | Mỗi giao dịch Applied Business sinh một hóa đơn; trùng sự kiện không sinh lại, owner được xem; thông tin thuế lấy cấu hình đã xác minh. | OB-15 | B_01 §3; P03 | Chưa có Invoice/entity/API | TC-B-71, TC-B-72, TC-B-73, TC-B-74 | Chưa triển khai; PP; không chốt VAT 10% thành quy định thuế |
| REQ-B-18 | Business có tối đa 5 tài khoản gồm owner; cấp/thu hồi phải kiểm quyền, khi hết hạn mất quyền dùng chung. | OB-15 | B_01 §3; P03 | PlanCatalog chỉ có Seats=5; chưa có Seat/entity/API | TC-B-61, TC-B-62, TC-B-63, TC-B-64 | Có dữ liệu số chỗ; chức năng quản lý chưa triển khai, PP |
| REQ-B-19 | Trang thuê bao có gói, lượt, hạn, mua/gia hạn, hóa đơn và chỗ theo quyền; dữ liệu khớp API. | OB-15 | B_01 §3; P03 | frontend features/account/AccountPage.tsx; useCapabilities.ts | TC-B-81 | Có auth + bảng quyền; còn thiếu hạn thuê bao/mua/gia hạn/hóa đơn/chỗ |
| REQ-B-20 | Rate limit auth theo cấu hình; đổi danh tính phải lấy antiforgery mới; request ghi thiếu CSRF bị chặn. | OB-13 (hỗ trợ); NF-B-05 | B_01 §3; P03 | Program; AntiforgeryEndpointFilter; IdentityModule | TC-B-55, TC-B-52 | Có mã/test; 3/5 phút là cấu hình test, mặc định code 10/1 phút |
| REQ-B-21 | Audit nghiệp vụ và telemetry không chứa nội dung/email/password/key; giữ dữ liệu theo chính sách và phân quyền. | OB-09; NF-B-06 | B_01 §3; P03 | AuditService; AdminModule; Logging; DataRetentionService | TC-B-91, TC-B-39 | Có test một số sự kiện; chưa chứng minh audit toàn bộ vòng đời hoặc vận hành retention |
| NF-B-01 | Kiểm quyền p95 ≤ 1 giây | NF-09 của Charter | B_01 §3.5; P03/P06 | EntitlementService; ExportsModule | TC-B-93 | Chưa đo tải/độ trễ kỳ này |
| NF-B-02 | 0 byte nội dung project/ảnh/video gửi đến B | OB-09 | B_01 §3.5; P03/P06 | ExportsModule DTO; frontend reservation | TC-B-94 | Đã đọc schema; chưa có HAR thật kỳ này |
| NF-B-03 | Không vượt quota khi request đồng thời; trạng thái và bộ đếm nhất quán | OB-14 | B_01 §3.5; P03/P06 | UsagePeriod; ExportReservationService | TC-B-36, TC-B-99 | Có test reserve; chưa chứng minh mọi race complete/cancel/sweep |
| NF-B-04 | Độ phủ module B ≥ 70%; bất biến quota/idempotency có test | OB-12; ngưỡng áp dụng nội bộ cho B | B_01 §3.5; P03/P06 | PromptVideo.Api.Tests | TC-B-92 | Chưa có báo cáo coverage xác minh |
| NF-B-05 | Mật khẩu băm; cookie/bearer; CSRF; lockout; rate limit đúng cấu hình | OB-13 (hỗ trợ); quy tắc bảo mật B | B_01 §3.5; P03/P06 | IdentityModule; Infrastructure/Security | TC-B-51, TC-B-52, TC-B-53, TC-B-54, TC-B-55, TC-B-56 | Có mã và ca thử; EV-002: bị chặn Docker ngày 24/09 |
| NF-B-06 | Health/metrics/audit không lộ nội dung; chính sách retention được cấu hình và kiểm | OB-09; yêu cầu vận hành B/C | B_01 §3.5; P03/P06 | FoundationModule; AdminModule; DataRetentionService | TC-B-91, TC-B-39 | Có mã/test; sweep mặc định tắt, chu kỳ 6 giờ |
| NF-B-07 | Testcontainers tách DB; fake gateway không đăng ký và không map trong Production, kể cả Admin | QT-B-6; nguyên tắc môi trường | B_01 §3.5; P03/P06 | SubscriptionsModule; PostgresContainerFixture | TC-B-95 | Có test chặn Production; ngoài Dev/Testing còn cần test quyền Admin |

## 5. Danh mục kiểm thử có thể giao lại

Mỗi dòng có đầu vào, bước và expected result. Đường dẫn tự động đều ở `src/backend/PromptVideo.Api.Tests/` trừ ghi rõ frontend. “Có test” nghĩa là có phương thức source; lần chạy 24/09 có 18 unit case đạt và 42 integration case Blocked môi trường; xem EV-002/B_04. Với ca chưa viết/chưa có API, kết quả là **Chưa thử/Blocked**, không tính vào số đạt. Frontend 79/79 (EV-001) là kết quả bộ hiện hành; không chứng minh TC-B-41 theo hợp đồng đã đổi.

| TC | Yêu cầu | Cấp | Bước / dữ liệu | Kết quả mong đợi | Phương thức hiện có / phần cần viết |
| --- | --- | --- | --- | --- | --- |
| TC-B-09 | REQ-B-01 | Integration | Tạo tài khoản mới, đăng nhập và đọc capabilities | Free; quota 3; 720p; watermark | SubscriptionTests.ANewAccountFallsBackToTheFreePlan |
| TC-B-10 | REQ-B-05 | Unit/Integration | Đọc cả 3 gói; thử capability thiếu | Đúng bảng; thiếu capability báo lỗi | PlanPolicyTests.EachPlanExposesItsDocumentedCapabilities; EveryPlanDefinesEveryCapability; SubscriptionTests.PlanCatalogIsReadableAnonymouslyAndExposesCapabilitiesAsData |
| TC-B-13 | REQ-B-13 | Integration/E2E | Dev/Testing mua Personal giả lập, đo từ Applied đến quyền có hiệu lực; cổng thật thử riêng sau tích hợp | Đúng 12 tháng và ≤ 5 phút; nhãn giả lập | SubscriptionTests.PayingForPersonalUpgradesCapabilitiesImmediately (chưa đo E2E ≤ 5 phút) |
| TC-B-14 | REQ-B-15 | Integration | Gói còn hạn T, áp dụng giao dịch mới khác event | Hạn mới = T + 12 tháng, không mất thời gian cũ | Cần viết test gia hạn còn hiệu lực |
| TC-B-15 | REQ-B-06, REQ-B-16 | Integration | Clock vượt hạn paid rồi đọc capabilities | Free, không 403 chỉ vì hết paid; đọc quota kỳ hiện tại | SubscriptionTests.AnExpiredSubscriptionLosesItsCapabilitiesOnTheNextCheck |
| TC-B-16 | REQ-B-15 | Integration | Gói đã hết hạn, áp dụng giao dịch mới | Kỳ mới từ now + 12 tháng | Cần viết |
| TC-B-17 | REQ-B-15 | Integration | Clock tại hạn − 7 ngày và hạn − 1 ngày, chạy tác vụ hai lần | Mỗi mốc nhắc một lần, không trùng; chưa có tác vụ hiện hành | Cần triển khai và viết |
| TC-B-21 | REQ-B-13 | Integration | Checkout Personal/Business trong Testing; thử mua Free | Số tiền đúng giá; Free bị từ chối | SubscriptionTests.BuyingTheFreePlanIsRefused; PayingForPersonalUpgradesCapabilitiesImmediately |
| TC-B-22 | REQ-B-13 | Integration | Apply một PaymentNotification mới hợp lệ | Applied; một subscription hiệu lực | SubscriptionTests.ReplayingAPaymentEventDoesNotGrantEntitlementTwice (lần 1) |
| TC-B-23 | REQ-B-14 | Integration | Gửi cùng Provider+ExternalEventId hai lần | Lần 2 Duplicate, không cộng kỳ; hóa đơn thử ở TC-B-73 | SubscriptionTests.ReplayingAPaymentEventDoesNotGrantEntitlementTwice |
| TC-B-24 | REQ-B-14 | Integration | Apply event đúng plan sai AmountVnd | AmountMismatch; không cấp quyền | SubscriptionTests.APaymentWithTheWrongAmountIsRejected |
| TC-B-25 | REQ-B-13 | Integration | Cổng thật/adapter trả failed hoặc cancelled | Không Applied, không quyền; cho thử lại có kiểm soát | Chưa có luồng đầy đủ, cần viết |
| TC-B-31 | REQ-B-07 | Integration/E2E | Free reserve 1080 và trả phí reserve 1080; kiểm file thật ở A | Free 720p + watermark; paid 1080p không watermark | ExportReservationTests.FreePlanGrants720pWithWatermarkAndClampsAnOverAmbitiousRequest; E2E file cần chạy |
| TC-B-32 | REQ-B-06 | Integration | Cache snapshot quá 60 giây rồi reserve với phiên hợp lệ; paid đã hết hạn | Server tự giải policy mới; không nhận snapshot như chứng thư; Free còn lượt được reserve | PlanPolicyTests.SnapshotCarriesAShortLifetimeAndTheCurrentPeriod; cần ca reserve dùng snapshot cũ |
| TC-B-33 | REQ-B-10 | Integration | Free mới reserve một lần | Consumed=1, remaining=2 ngay lúc Reserved | ExportReservationTests.FreePlanGrants720pWithWatermarkAndClampsAnOverAmbitiousRequest |
| TC-B-34 | REQ-B-09 | Integration/E2E | Reserve 3 key khác; gửi key thứ 4 | HTTP 403, Consumed=3; UI giải thích hạn mức | ExportReservationTests.FourthExportInAMonthIsRefusedOnTheFreePlan; E2E cần chạy |
| TC-B-35 | REQ-B-10 | Integration | Retry reserve cùng UserId+key | Cùng reservationId; Consumed vẫn 1; không cấp slot mới | ExportReservationTests.RetryingWithTheSameIdempotencyKeyDoesNotConsumeASecondSlot |
| TC-B-36 | REQ-B-11, NF-B-03 | Integration | 8 reserve đồng thời, 8 key, Free quota 3 | 3 Reserved; 5 QuotaExceeded; Consumed=3 | ExportReservationTests.ConcurrentReservesCannotExceedTheQuota |
| TC-B-37 | REQ-B-10, REQ-B-12 | Integration | Reserve; complete hai lần; cancel sau complete | Complete không tăng thêm; cancel 409; Consumed=1 | ExportReservationTests.CompletedReservationsAreNotRefundableAndCompletingIsIdempotent |
| TC-B-38 | REQ-B-12 | Integration | Reserve rồi cancel do xuất lỗi | Canceled; hoàn về kỳ gốc một lượt | ExportReservationTests.CancelingAReservationReturnsTheSlot |
| TC-B-39 | REQ-B-12, NF-B-06 | Integration | Clock + 31 phút; complete cũ; reserve mới hoặc gọi SweepAsync; sau 90/180 ngày thử dọn | Complete quá TTL trả 409; release một lần khi quét/reserve; không cam kết quét tại phút 30 | ExportReservationTests.AnExpiredReservationReleasesItsSlotOnTheNextReserve; TemplateAndAdminTests.RetentionSweepReleasesAbandonedReservationsAndPrunesOldRows; thiếu ca complete trả 409 riêng |
| TC-B-40 | REQ-B-08 | Unit/Integration | 31/01→01/02 reserve; qua năm/năm nhuận/offset địa phương | Kỳ mới độc lập; sau reserve đầu tháng còn 2 | ExportReservationTests.QuotaResetsWhenTheClockCrossesIntoANewMonth; PlanPolicyTests.PeriodBoundariesFollowTheUtcCalendarMonth; LocalOffsetsAreNormalisedToUtcBeforeBucketing |
| TC-B-41 | REQ-B-12 | E2E A–B | Ngắt mạng lúc reserve, lúc complete; xuất kéo dài > 30 phút | Reserve lỗi không dựng; chưa complete xác nhận không giao file; ghi ISS-G-001 cho hiện trạng | Cần chạy tích hợp thật; hiện frontend xử lý settle best-effort |
| TC-B-42 | REQ-B-16 | Integration | Paid hết hạn giữa một reservation còn trong TTL; complete trước/sau TTL; reserve mới | Complete trong TTL theo reservation đã cấp; quá TTL trả 409; lần reserve mới dùng Free | Cần viết test riêng; source CompleteAsync không tái giải plan |
| TC-B-51 | REQ-B-02, NF-B-05 | Integration | Đăng nhập đúng, đọc quyền; đăng xuất rồi đọc lại | Cookie HttpOnly + SameSite; đăng xuất mất phiên | IdentityApiTests.CookieLoginIsHttpOnlyAndSameSiteLax; LogoutClearsTheSession |
| TC-B-52 | REQ-B-02, REQ-B-20, NF-B-05 | Integration | Anonymous reserve; đăng nhập rồi ghi thiếu CSRF; đổi danh tính dùng token cũ | 401 chưa auth; thiếu CSRF trả 400; token mới dùng được | ExportReservationTests.ReservingRequiresAuthenticationAndAnAntiforgeryToken; FoundationApiTests.UnsafeRequestRequiresAntiforgeryToken |
| TC-B-53 | REQ-B-04, NF-B-05 | Integration | User thường rồi Admin gọi /api/admin/metrics | User 403; Admin 200 | IdentityApiTests.AdminEndpointIsForbiddenForOrdinaryUsersAndAllowedForAdmins |
| TC-B-54 | REQ-B-03, NF-B-05 | Integration | 5 lần sai; lần 6 đúng; dùng cấu hình test không bị rate limit che lockout | LockedOut khi chưa hết 15 phút | IdentityApiTests.WrongPasswordIsRejectedAndRepeatedFailuresLockTheAccount |
| TC-B-55 | REQ-B-20, NF-B-05 | Integration | Cấu hình AuthPermitLimit 3/5 phút; gọi vượt; đọc templates | Auth 429; templates không bị chặn; không suy ra default=3/5 | AuthRateLimitTests.RepeatedLoginAttemptsAreThrottled; ThrottlingDoesNotAffectOrdinaryEditorTraffic |
| TC-B-56 | REQ-B-03, NF-B-05 | Integration | Đổi mật khẩu trong phiên; thử mật khẩu cũ/mới | Cũ bị từ chối; mới đăng nhập được | IdentityApiTests.PasswordCanBeChangedAndTheOldOneStopsWorking |
| TC-B-57 | REQ-B-01 | Integration | Đăng ký cùng email đã tồn tại | Bị từ chối, không tạo tài khoản thứ hai | Cần viết ca riêng |
| TC-B-61 | REQ-B-18 | Integration | Business owner + 4 thành viên hợp lệ | 5 tài khoản dùng quyền Business; đúng ánh xạ owner | Chưa triển khai |
| TC-B-62 | REQ-B-18 | Integration | Từ 5 tài khoản thêm thành viên thứ 6; hai add đồng thời | SEAT_LIMIT_EXCEEDED; không vượt 5 | Chưa triển khai |
| TC-B-63 | REQ-B-18 | Integration | Thu hồi 1 seat; member kiểm quyền lại | Về quyền paid cá nhân nếu còn; không thì Free; không mặc định 403 | Chưa triển khai |
| TC-B-64 | REQ-B-18 | Integration | Cho Business hết hạn rồi các member kiểm quyền | Không giữ quyền Business; áp quyền cá nhân/Free | Chưa triển khai |
| TC-B-71 | REQ-B-17 | Integration | Giao dịch Free/Personal | Không sinh hóa đơn Business | Chưa triển khai |
| TC-B-72 | REQ-B-17 | Integration | Applied Business; truy cập owner/khác owner; cấu hình thuế đã xác minh | Đúng 1 hóa đơn; tiền khớp; khác owner bị chặn; không dùng VAT 10% mặc định | Chưa triển khai |
| TC-B-73 | REQ-B-17, REQ-B-14 | Integration | Replay cùng event Applied Business | Vẫn 1 hóa đơn | Chưa triển khai |
| TC-B-74 | REQ-B-17 | Integration | Gia hạn Business bằng giao dịch mới | Hóa đơn mới cho giao dịch mới, không sửa kỳ cũ | Chưa triển khai |
| TC-B-81 | REQ-B-19 | E2E | Đăng nhập; so UI gói/lượt/hạn/hóa đơn/chỗ với API; sau mua/gia hạn refresh | Hiển thị đủ theo quyền; không stale; thiếu API phải ghi rõ | Auth+capabilities có mã; chưa đủ trang thuê bao |
| TC-B-91 | REQ-B-21, NF-B-06 | Integration | Đăng nhập, reserve, apply payment; đọc metrics/audit/log và health | Không nội dung/email/password/key; health không lộ chi tiết; ghi đúng hành động đã hỗ trợ | LoggingRedactionTests.AuthenticationRoundTripDoesNotLogSecrets; TemplateAndAdminTests.AdminMetricsAreAggregatesWithNoUserContent; AuditTrailRecordsActionsWithoutContent; FoundationApiTests.FoundationHealthReportsReadinessWithoutLeakingCheckDetail |
| TC-B-92 | NF-B-04 | Coverage | Chạy backend với XPlat Code Coverage; lọc namespace B | ≥ 70% dòng module B; ghi denominator, commit, môi trường | Cần đo/chuẩn hóa phạm vi coverage |
| TC-B-93 | NF-B-01 | Performance | Warm-up rồi 100 lần kiểm quyền, concurrency 5 trên cùng môi trường đã ghi | p95 ≤ 1.000 ms; ghi cả lỗi; protocol nội bộ, cần so cấu hình nghiệm thu | Chưa đo |
| TC-B-94 | NF-B-02 | E2E mạng | Xuất 5 cảnh 60 giây A–B thật; lưu HAR đã che token; rà mọi payload | 0 byte nội dung/ảnh/project/video đến B; chỉ dữ liệu điều khiển | Chưa có bằng chứng kỳ này |
| TC-B-95 | REQ-B-13, NF-B-07 | Integration | Production cả Admin/User; Testing; Staging User/Admin; kiểm đăng ký DI | Production 404, không IPaymentGateway; Dev/Testing có auth; Staging chỉ Admin | SubscriptionTests.FakeGatewayEndpointIsNotMappedInProduction; FakeGatewayIsNotEvenRegisteredInProduction; cần ca Staging riêng |
| TC-B-96 | Giao tiếp IF-CB-01 | Integration | Admin cộng lượt bù kèm reason và key; User thử; retry; race với reserve | Đúng quyền; atomic; retry không cộng hai lần; audit actor, reason, kỳ và mức đổi | Hợp đồng đã chốt; API chưa triển khai |
| TC-B-97 | REQ-B-16 | Integration | Trong một tháng đã dùng Free 2 lượt, paid dùng thêm 2 rồi paid hết hạn | Consumed=4 còn nguyên; FreeRemaining=0; không reset vì hết paid | Cần viết |
| TC-B-98 | REQ-B-08 | Integration | Reserve cuối tháng, cancel đầu tháng; tháng mới có lượt khác | Chỉ hoàn UsagePeriodId gốc; kỳ mới không giảm sai | Cần viết |
| TC-B-99 | REQ-B-12, NF-B-03 | Integration | Cancel lặp/đồng thời; cancel đua với complete; sweep đua với cancel | Không âm; chỉ hoàn một lần; trạng thái cuối nhất quán | Ca tuần tự có một phần; cần test concurrency đầy đủ |
| TC-B-100 | REQ-B-14 | Integration | Retry cùng checkout operation key sau timeout ở thời điểm khác | Chỉ một giao dịch nghiệp vụ; kỳ gia hạn không nhân đôi | Chưa có operation key trên FakeCheckoutRequest |

## 6. Giao tiếp và trách nhiệm kiểm

### 6.1. A→B

| API hiện có | Đầu vào | Kết quả / ngoại lệ |
| --- | --- | --- |
| GET `/api/me/capabilities` | Phiên hợp lệ | Quyền/TTL 60 giây/kỳ và lượt; không có ngày hết subscription trong snapshot hiện hành |
| POST `/api/exports/reservations` | `idempotencyKey` dài 1–128, `requestedHeight` 720/1080, auth + CSRF | 200 gồm ID/status/grantedHeight/watermark/expiry/lượt; 401 chưa auth; 400 đầu vào/CSRF; 403 hết quota |
| POST `.../{reservationId}/complete` | ID thuộc User; auth + CSRF | 200 Completed hoặc đã Completed; 404 không có/không thuộc User; 409 canceled/expired |
| POST `.../{reservationId}/cancel` | ID thuộc User; auth + CSRF | 200 Canceled hoặc đã Canceled; 404 không có; 409 completed |

A dùng độ phân giải/watermark server cấp; không gửi nội dung. B trả `status`, nhưng kiểu client reservation hiện chưa giữ trường này: bổ sung vào checklist sửa ISS-G-001 để retry reservation đã kết thúc không bị hiểu là lượt mới.

### 6.2. C→B — IF-CB-01

Quyết định nội bộ: C cung cấp lý do hỗ trợ, người dùng cần cộng và kỳ áp dụng; B sở hữu phép cập nhật hạn mức. Thao tác phải có Admin, reason không rỗng, operation key duy nhất, delta dương có giới hạn do policy quy định, transaction cập nhật và audit cùng nhau. Retry cùng key trả kết quả cũ; cùng key payload khác bị conflict; User thường bị 403; ghi actor, target, period, delta, reason và key tham chiếu an toàn. Không giảm bộ đếm âm để giả cộng lượt. Đây là **hợp đồng đích, chưa có endpoint hiện hành**; đường dẫn/schema cụ thể do P03 quản lý, không tự nhận route đã tồn tại.

C quản lý vòng đời mẫu `Draft/Active/Retired`; B không đổi các trạng thái này. B chỉ cung cấp quyền tài khoản cần cho các route C.

### 6.3. Ai kiểm và ai chấp nhận

Việt Quang tự kiểm B; Quang Anh kiểm chéo B; Chiến xác nhận nội bộ sau sửa. Việt Quang kiểm A theo danh mục TC của A/P03, không định nghĩa lại mã TC-A hoặc tự cấp TC-I chung. Nhà tài trợ ký nghiệm thu sản phẩm theo Charter; giảng viên đánh giá hồ sơ học thuật. Quyết định nội bộ của người dùng không phải chữ ký nghiệm thu từ các bên bên ngoài.

## 7. Những sửa đã thực hiện và phần phải thực thi tiếp

Đã chuẩn hóa 21 REQ, 7 NF, 8 QT và 50 TC; sửa RQ nội bộ trùng Charter, hành vi quota/hết hạn/TTL, trạng thái thanh toán, quyền giả lập và bằng chứng. Đã quyết định cách tính 5 chỗ, cách xử lý giao file và nguyên tắc hỗ trợ C→B. Giữ mọi yêu cầu v2.1 chưa làm.

Các bước phần mềm tiếp theo: xử lý ISS-G-001 và ISS-G-003; bổ sung test paid-expiry/cross-month/race; đo coverage/p95/HAR; hoàn thiện UI/nhắc/cổng thật; phân rã invoice và seats trước triển khai. Chi tiết ước lượng, rủi ro và lịch ở [B_02](B_02_WBS_uoc_luong_rui_ro_v1.0.md). Không tự đánh dấu những bước này là đã xong khi mới sửa tài liệu.
