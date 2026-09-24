# B_02 — WBS, ước lượng, lịch, chi phí và rủi ro

| Thuộc tính | Giá trị |
| --- | --- |
| Phiên bản / ngày chốt | 1.0 / 24/09/2026 |
| Trạng thái | Dự báo nội bộ đã chọn để tổng hợp; chưa là baseline được phê duyệt |
| Chủ module | Nguyễn Việt Quang |
| Kiểm tra / xác nhận nội bộ | Phạm Quang Anh / Nguyễn Thế Chiến; chưa có biên bản xác nhận |
| Nhiệm vụ đã xử lý bằng tài liệu | CV-B-01 đến CV-B-04; dữ liệu đầu vào CV-B-05/CV-B-06/CV-B-08 |
| Quy ước | [Sổ quyết định chung](../../../00_Quyet_dinh_va_quy_uoc_ma.md) |

## 1. Cách sử dụng bản này

Nội dung dựa trên [B_01](B_01_Yeu_cau_va_kiem_thu_v1.0.md), source/test tại HEAD `28a07efcc119493e0d89fbfb72ba422b864de747` đọc ngày 24/09 và bản [planning_b.md lịch sử](../../../../../plan-note/planning_b.md). Đã bỏ cách chia ngược về 60 giờ; hóa đơn và chỗ là hai planning package riêng. Mọi số O/M/P dưới đây là **phán đoán lập kế hoạch nội bộ ngày 24/09**, có cơ sở khối lượng, không phải giờ thực tế đã đo hoặc số được thành viên cam kết.

Chỉ 4.3.x là công xây dựng B. Hồ sơ yêu cầu/RTM nằm ở 2.1/2.2; thiết kế giao tiếp ở 3.2; công ghép kế hoạch, lịch/chi phí/rủi ro ở 1.2; theo dõi ở 1.3; kiểm thử tích hợp thật ở 5.1; hướng dẫn/bàn giao ở 6.2/6.3. Các phần dùng chung do chủ gói chung phân bổ, không cộng thêm vào tổng 4.3 chỉ vì Việt Quang thực hiện.

## 2. WBS thống nhất và từ điển

### 2.1. Cây phạm vi B

```text
4.3 Dịch vụ tài khoản và thuê bao — 128,666666... giờ dự báo toàn phạm vi
├── 4.3.1 Mô-đun tài khoản và xác thực — 14,0 h [WP]
├── 4.3.2 Mô-đun giấy phép và hạn mức — 24,0 h [WP]
├── 4.3.3 Mô-đun thanh toán và gia hạn — 26,666666... h [WP]
├── 4.3.4 Trang quản lý thuê bao — 16,0 h [WP]
├── 4.3.5 Hóa đơn Doanh nghiệp — 22,0 h [PP]
└── 4.3.6 Quản lý 5 chỗ Doanh nghiệp — 26,0 h [PP]
```

100% phạm vi B vẫn được giữ; 4 WP tổng 80,666666... giờ, hai PP tổng 48 giờ. Gói nhỏ nhất 14 giờ, lớn nhất 26,666666... giờ, trong dải 8–80. Hoạt động nhỏ hơn 8 giờ được phép vì không phải gói WBS. Không dùng dấu tích “đã có sản phẩm” để suy ra gói đã được nghiệm thu.

| WBS | Đầu ra | Điều kiện kiểm nội bộ / chấp nhận đầu ra | Ràng buộc và trạng thái |
| --- | --- | --- | --- |
| 4.3.1 | Tài khoản, cookie/bearer, đổi mật khẩu, role, lockout, CSRF và rate limit | TC-B-09/51..57; 401/403/429 đúng ngữ cảnh; không lộ bí mật | Framework sẵn có; có source/test, chưa đủ kết quả kiểm chéo mới |
| 4.3.2 | Policy, entitlement, quota, reservation, release và phần dịch vụ hỗ trợ IF-CB-01 | TC-B-10/15/31..42/96..99; reserve tính ngay, complete giữ, cancel hoàn một lần về kỳ gốc | ISS-G-001 phải xử lý cùng A; IF-CB-01 chưa có API; p95/coverage cần đo |
| 4.3.3 | Payment port, adapter giả lập/thật, apply event, chống lặp checkout, gia hạn/nhắc | TC-B-13/14/16/17/21..25/95/100; fake không có tại Production; OB-15 kiểm riêng đầu-cuối thật | ISS-G-003; adapter thật phụ thuộc hồ sơ/nhà cung cấp; không gồm hóa đơn/chỗ |
| 4.3.4 | Giao diện thuê bao đầy đủ và trạng thái lỗi | TC-B-81; dữ liệu gói/lượt/hạn/mua/gia hạn/hóa đơn/chỗ khớp API và quyền | AccountPage hiện mới auth + capabilities; phần UI hóa đơn/chỗ bị chặn đến khi API PP có |
| 4.3.5 | Hóa đơn có dữ liệu tiền/thuế, truy cập owner, liên kết giao dịch, idempotency | TC-B-71..74; 1 Applied Business = 1 hóa đơn; rule thuế được xác minh | PP; không có entity/API; 10% không còn là giá trị thuế mặc định được coi đúng |
| 4.3.6 | Quan hệ thuê bao–member, 5 chỗ gồm owner, cấp/thu hồi/hết hạn | TC-B-61..64; không vượt 5; fallback đúng quyền cá nhân/Free | PP; PlanCatalog Seats=5 chưa hoàn thành chức năng |

Tất cả gói do **Nguyễn Việt Quang** chịu trách nhiệm nội dung; mốc Charter tương ứng M2, M5, M6 như bảng ước lượng. Mốc nêu ở đây là nguồn yêu cầu lập kế hoạch, không ghi là đã đạt.

### 2.2. Chuyển mã và ranh giới công việc

| Mã lịch sử | Mã hiện hành | Cách chuyển |
| --- | --- | --- |
| 7.1 | 4.3.1 | Giữ phạm vi tài khoản/xác thực |
| 7.2 và 7.3 | 4.3.2 | Gộp giấy phép + quota thành một đầu ra; hoạt động tách bên dưới |
| 7.4 phần payment/gia hạn | 4.3.3 | Bỏ invoice/seat ra khỏi gói payment, giữ cả phần chưa triển khai |
| 7.4 phần hóa đơn | 4.3.5 | PP riêng, có giờ riêng |
| 7.4 phần 5 chỗ | 4.3.6 | PP riêng, có giờ riêng |
| 7.5 | 4.3.4 | UI riêng, không bao công làm API invoice/seat |
| RQ-1..RQ-8 nội bộ B | QT-B-1..QT-B-8 | Chỉ đổi quy tắc B; RQ/OB/NF Charter không đổi |
| Hoạt động dùng mã WBS | ACT-&lt;WBS&gt;-nn | WBS nhận diện đầu ra; ACT nhận diện hành động trong lịch |

| Đầu vào yêu cầu | Gói xây dựng | Gói chung cần dẫn, không cộng lại |
| --- | --- | --- |
| REQ-B-01..04,20, phần21; NF-B-05 | 4.3.1 | Nền tảng4.1; yêu cầu2.1; RTM2.2 |
| REQ-B-05..12,16; NF-B-01/02/03/06 | 4.3.2 | Giao tiếp3.2; tích hợp/đo5.1/5.2 |
| REQ-B-13..15, phần21; NF-B-07 | 4.3.3 | Triển khai6.1; xác nhận phạm vi6.4 |
| REQ-B-19 | 4.3.4 | Tích hợp5.1; hướng dẫn6.2 |
| REQ-B-17 | 4.3.5 | UI ở4.3.4 |
| REQ-B-18 | 4.3.6 | UI ở4.3.4 |
| NF-B-04 | Kiểm thử cục bộ từng gói | Độ phủ/tổng hợp QA thuộc kế hoạch chất lượng chung |

## 3. Hoạt động và ước lượng từ dưới lên

### 3.1. Cơ sở ba điểm

Công thức theo quy tắc môn học: **tE=(O+M+P)/3**. Cộng số chưa làm tròn, cuối bảng mới làm tròn khi hiển thị. Không dùng (O+4M+P)/6. Khoảng O/P không là khoảng tin cậy thống kê; độ tin cậy phản ánh độ rõ đầu ra và nguồn chứng cứ.

| WBS | Loại | O | M | P | tE giờ | Cơ sở và độ tin cậy | Mốc nguồn |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| 4.3.1 | WP | 10 | 14 | 18 | 14,000 | Identity sẵn có; 3 nhóm auth, bảo vệ, test cục bộ có source rõ; trung bình | M2 |
| 4.3.2 | WP | 16 | 22 | 34 | 24,000 | 3 nhóm policy, reservation/hỗ trợ, ngoại lệ UTC/TTL; test reserve có nhưng race/IF-CB còn thiếu; trung bình | M5 |
| 4.3.3 | WP | 16 | 24 | 40 | 26,667 | 3 nhóm event/dedup, adapter, gia hạn/nhắc; cổng thật chưa chọn nên thấp | M6 |
| 4.3.4 | WP | 10 | 14 | 24 | 16,000 | 3 nhóm quyền, mua/gia hạn, hiển thị invoice/seats; API sau còn PP nên thấp | M6 |
| 4.3.5 | PP | 12 | 20 | 34 | 22,000 | Chưa có Invoice/provider/schema; dự báo cấp gói dựa số đầu ra và ngoại lệ; thấp | M6 |
| 4.3.6 | PP | 14 | 24 | 40 | 26,000 | Chưa có Seat; dự báo cấp gói có owner/member/revoke/expiry/concurrency; thấp | M6 |
| **Tổng** | **4 WP + hai PP** | **78** | **118** | **190** | **128,667** | **386/3; không phải tổng số đã làm tròn** | |

Ba điểm hoạt động WP được ước lượng trước rồi cộng thành gói. PP chỉ ước lượng mức đầu ra do chưa đủ chi tiết; không gọi hai PP là bottom-up đã hoàn tất.

| Hoạt động | Nhóm khối lượng | O | M | P | tE |
| --- | --- | ---: | ---: | ---: | ---: |
| ACT-4.3.1-01 | Auth/tài khoản/đổi mật khẩu | 4 | 6 | 8 | 6,000 |
| ACT-4.3.1-02 | Role/lockout/CSRF/rate limit | 3 | 4 | 5 | 4,000 |
| ACT-4.3.1-03 | Test cục bộ/API bàn giao | 3 | 4 | 5 | 4,000 |
| ACT-4.3.2-01 | Policy/snapshot/kỳ UTC | 5 | 6 | 9 | 6,667 |
| ACT-4.3.2-02 | Reservation/race/IF-CB-01 service | 7 | 10 | 15 | 10,667 |
| ACT-4.3.2-03 | Test ngoại lệ TTL/tháng | 4 | 6 | 10 | 6,667 |
| ACT-4.3.3-01 | Event/fake/dedup | 5 | 7 | 11 | 7,667 |
| ACT-4.3.3-02 | Adapter/callback thật | 7 | 11 | 19 | 12,333 |
| ACT-4.3.3-03 | Gia hạn/nhắc/test cục bộ | 4 | 6 | 10 | 6,667 |
| ACT-4.3.4-01 | UI auth/quyền | 3 | 4 | 6 | 4,333 |
| ACT-4.3.4-02 | UI mua/gia hạn/hạn dùng | 4 | 6 | 10 | 6,667 |
| ACT-4.3.4-03 | UI hóa đơn/chỗ | 3 | 4 | 8 | 5,000 |
| **Tổng WP** | | **52** | **74** | **116** | **80,667 = 242/3** |

Các giờ này ước lượng **toàn bộ đầu ra**, gồm phần đã có source và phần còn thiếu. Chưa có giờ thực tế đối soát nên không lấy tổng trên làm số giờ còn lại (ETC), không dùng số file/code làm phần trăm hoàn thành. Việt Quang phải đối chiếu actual và khối lượng còn lại trước khi chốt ETC; mục thiếu actual theo ISS-G-005.

### 3.2. Danh sách hoạt động và phụ thuộc

Tất cả quan hệ bên trong là FS, lag=0. Đây là mạng logic toàn phạm vi, chưa phải lịch thực hiện từ 24/09. Source có sẵn làm bằng chứng hiện trạng nhưng không tự đóng các hoạt động.

| Mã | Hoạt động | Giờ tE | Predecessor | Người làm | Điều kiện ngoài / trạng thái |
| --- | --- | ---: | --- | --- | --- |
| ACT-4.3.1-01 | Cấu hình tài khoản, đăng nhập và đổi mật khẩu | 6,0 | 4.1 sẵn sàng (gói chung) | Việt Quang | Đối soát phần đã có và phần còn lại trước chốt lịch |
| ACT-4.3.1-02 | Hoàn thiện role, lockout, CSRF và rate limit | 4,0 | ACT-4.3.1-01 | Việt Quang | Đối soát phần đã có và phần còn lại trước chốt lịch |
| ACT-4.3.1-03 | Kiểm test cục bộ và bàn giao API xác thực | 4,0 | ACT-4.3.1-02 | Việt Quang | Đối soát phần đã có và phần còn lại trước chốt lịch |
| ACT-4.3.2-01 | Hoàn thiện policy, snapshot và kỳ sử dụng UTC | 6,667 | ACT-4.3.1-03 | Việt Quang | Đối soát phần đã có và phần còn lại trước chốt lịch |
| ACT-4.3.2-02 | Hoàn thiện reserve/complete/cancel, concurrency và cộng lượt có kiểm soát | 10,667 | ACT-4.3.2-01 | Việt Quang | Đối soát phần đã có và phần còn lại trước chốt lịch |
| ACT-4.3.2-03 | Kiểm test cục bộ ranh giới hạn, TTL và hoàn lượt | 6,667 | ACT-4.3.2-02 | Việt Quang | Đối soát phần đã có và phần còn lại trước chốt lịch |
| ACT-4.3.3-01 | Hoàn thiện sự kiện, giả lập và chống lặp checkout | 7,667 | ACT-4.3.1-03 | Việt Quang | Đối soát phần đã có và phần còn lại trước chốt lịch |
| ACT-4.3.3-02 | Kết nối adapter/callback cổng thật sau hồ sơ được duyệt | 12,333 | ACT-4.3.3-01 | Việt Quang | Nhà cung cấp và hồ sơ cổng thật được chấp thuận; chưa có ngày xác nhận |
| ACT-4.3.3-03 | Hoàn thiện gia hạn, nhắc và test cục bộ | 6,667 | ACT-4.3.3-02 | Việt Quang | Đối soát phần đã có và phần còn lại trước chốt lịch |
| ACT-4.3.4-01 | Hoàn thiện trang auth và dữ liệu quyền | 4,333 | ACT-4.3.2-03 | Việt Quang | Đối soát phần đã có và phần còn lại trước chốt lịch |
| ACT-4.3.4-02 | Ghép mua/gia hạn và hạn thuê bao | 6,667 | ACT-4.3.3-03, ACT-4.3.4-01 | Việt Quang | Đối soát phần đã có và phần còn lại trước chốt lịch |
| ACT-4.3.4-03 | Ghép dữ liệu hóa đơn/chỗ sau hai PP phân rã và xong API | 5,0 | ACT-4.3.4-02 | Việt Quang | PP 4.3.5 và 4.3.6 được phân rã, API hoàn thành; chưa có thời điểm xác nhận |

Gate cổng thật và API 4.3.5/4.3.6 chưa có ngày xác nhận; vì vậy không tính một ngày hoàn thành/đường găng chắc chắn cho toàn bộ B bằng cách bỏ các gate đi. Hai PP chưa có hoạt động chi tiết. Hoạt động UI phụ thuộc PP vẫn được nhận diện như đầu ra WP nhưng **chưa được phát hành lịch thi công** cho đến khi đủ API.

### 3.3. Năng lực và mốc

- Dùng **10 giờ/người/tuần** làm công suất lập kế hoạch, không phải lời cam kết của Việt Quang. Giờ còn phải chia cho P08/P10/P11/P13, E05/M03/M04 và review A.
- 128,666666... giờ / 10 = **12,866666... tuần tương đương nếu làm lại toàn bộ và chỉ làm B**. Con số này cho thấy quy mô; không phải lịch còn lại từ hôm nay vì chưa biết actual/ETC và còn công chung.
- Mốc Charter: M2 27/09, M5 15/11, M6 29/11/2026; mốc đợt tài liệu 29/09 không thể tự đồng nhất với nghiệm thu sản phẩm đầy đủ.
- Quyết định ưu tiên nội bộ: chuẩn hóa B_01/B_02 và giao dữ liệu tổng hợp trước; sau đó xử lý test/giao tiếp nghiêm trọng, rồi phát triển phần thiếu theo phụ thuộc. Thời điểm tương đối trong kế hoạch chung do Chiến phát hành sau cân nguồn lực, không điền lại các mốc đã qua như chưa trễ.
- Chốt **không ép tổng về 60 giờ**. Chênh +68,666666... giờ so bản cũ đến từ bóc rõ đầu ra, ngoại lệ và hai PP; đưa vào sai lệch toàn dự án **CR-G-001** để quyết định lịch/phạm vi/baseline đúng thẩm quyền.

### 3.4. Công sức, tiền mặt và dự phòng

| Khoản | Giá trị / trạng thái | Cách dùng |
| --- | --- | --- |
| Dự báo công B toàn phạm vi | 128,666666... giờ | Tổng O/M/P chưa làm tròn; không phải actual/ETC/baseline |
| Giá trị công theo đơn giá Charter 80.000 VND/giờ | 10.293.333,33 VND | Chi phí cơ hội; không lấy từ quỹ tiền mặt |
| Exposure rủi ro còn lại (phần5) | 33,4 giờ ≈ 2.672.000 VND công | Dữ liệu đầu vào dự phòng; chưa được phê duyệt thành contingency |
| Kịch bản cộng toàn exposure | 162,066666... giờ ≈ 12.965.333,33 VND công | Chỉ độ nhạy dự báo; cần khử trùng rủi ro chung/giả định tương quan trước chốt |
| Contingency đã được phê duyệt riêng B | Chưa có chứng cứ | Không tiếp tục lấy 6 giờ hoặc 10% của bản cũ làm baseline |
| Management reserve | Quyết định ở cấp dự án theo đúng thẩm quyền | Tách khỏi cost baseline; không cộng một lần nữa ở mỗi module |
| Phí cổng thanh toán | 1.500.000 VND phân bổ dự kiến theo WBS/Charter nguồn | Khoản lập kế hoạch, chưa có hóa đơn/chi trả; chỉ ghi một lần tại 4.3.3 trong ngân sách chung |
| Demo giả lập | Không thu tiền từ người dùng qua fake gateway | Không suy ra hạ tầng và mọi chi phí thực tế bằng 0 |
| Actual giờ / chi phí | Chưa có nhật ký đủ để đối soát | Để thiếu dữ liệu, không dùng planned hour để điền actual |

Mua/thuê: dùng hạ tầng dev có sẵn theo nguồn chung; cổng thật phải được lựa chọn/duyệt hồ sơ trước ACT-4.3.3-02; chi phí VPS/tên miền thuộc 6.1, không đưa thêm vào 4.3. Không tự phát sinh mua sắm khi mới chốt tài liệu. Hóa đơn/chỗ cần quyết định chi tiết trước phân rã, không được xóa để vừa trần công.

## 4. Chất lượng và bằng chứng

| Cấp | Môi trường / phạm vi | Đầu ra cần lưu | Người làm / kiểm | Ngưỡng |
| --- | --- | --- | --- | --- |
| Unit | xUnit, PlanPolicyTests; policy/tháng UTC | Log/TRX và coverage đúng commit | Việt Quang / Quang Anh | Kỳ vọng từng TC; không test pass = coverage |
| Integration | PostgreSQL Testcontainers tách DB | TRX, config đã che bí mật, bất biến DB | Việt Quang / Quang Anh | Reserve3/8, idempotency, auth, TTL/expiry theo B_01 |
| E2E A–B–C | Frontend và API thật trong môi trường ghi rõ | Kết quả TC, HAR che token, video/ảnh minh họa | Quang Anh kiểm B; Việt Quang kiểm A; Chiến xác nhận nội bộ B | Quyền và file thật, không giao trước complete được xác nhận, không gửi nội dung |
| Hiệu năng / coverage | Cấu hình và phạm vi đo được công bố | p95, lỗi, coverage và mẫu số | Việt Quang cung cấp / Quang Anh kiểm nguồn | NF-B-01/04, chưa có số đo để tuyên bố đạt |

Kết quả nguồn lịch sử 60/60 ngày 17/09 không phải bản chạy mới. EV-001 frontend hiện hành 79/79 không chứng minh server thật hay hợp đồng đích đã sửa. EV-002 ngày 24/09 có 18 unit case đạt, 42 integration case Failed do khởi tạo Docker/Testcontainers. Quản lý chất lượng ghi Blocked môi trường cho 42 ca đó, không coi là 42 lỗi logic sản phẩm.

## 5. Rủi ro và tính exposure

### 5.1. Thang thống nhất

| Điểm xác suất | Xác suất dùng khi định lượng |
| --- | ---: |
| P1 | 0,10 |
| P2 | 0,30 |
| P3 | 0,50 |
| P4 | 0,70 |
| P5 | 0,90 |

| Điểm tác động công | Giờ công phát sinh |
| --- | --- |
| I1 | ≤ 2 giờ |
| I2 | > 2 đến 4 giờ |
| I3 | > 4 đến 8 giờ |
| I4 | > 8 đến 16 giờ |
| I5 | > 16 giờ |

Điểm ưu tiên = P×I: 1–6 thấp, 7–12 trung bình, 13–25 cao. Đó là điểm xếp hạng, **không phải xác suất**. Xác suất/giờ trong bảng này là giả định quản lý đã chọn để tính độ nhạy; chưa có tần suất lịch sử đủ lớn. Tác động về an toàn/riêng tư được ghi thêm định tính, không hạ mức quan tâm chỉ vì số giờ nhỏ.

### 5.2. Sổ rủi ro B

| ID | Nguyên nhân → sự kiện → hậu quả | P | I | Điểm | Chủ | Trigger | Phòng ngừa / ứng phó |
| --- | --- | ---: | ---: | ---: | --- | --- | --- |
| R-B-01 | Nhà cung cấp chưa duyệt hồ sơ → Adapter thật chậm sẵn sàng → Trễ OB-15, phát sinh công chuẩn bị | 3 | 4 | 12 | Việt Quang | Cổng chưa sẵn sàng trước ACT-4.3.3-02 | Chuẩn bị hồ sơ; giữ demo giả lập; trình hoãn nghiệm thu OB-15 nếu cần, không thay bằng kích hoạt tay |
| R-B-02 | Retry và event đến đồng thời → Giao dịch cấp kỳ nhiều lần → Sửa dữ liệu và khôi phục quyền | 2 | 4 | 8 | Việt Quang | Hai lần cấp kỳ cho cùng thao tác thanh toán | Unique event và operation key; phần sửa ISS-G-003 đã ở WP; reserve chỉ cho lỗi còn lại sau sửa |
| R-B-03 | Cạnh tranh cập nhật UsagePeriod → Reserve vượt quota → Sai hạn mức và cần đối soát dữ liệu | 2 | 3 | 6 | Việt Quang | Consumed vượt quota hoặc lỗi race không xử lý | xmin và retry; test trong WP; contingency dùng cho lỗi mới sau biện pháp phòng ngừa |
| R-B-04 | Đua trạng thái sau khi sửa hợp đồng A–B → Cancel/complete/sweep hoàn sai lượt → Sai hạn mức, phát sinh công sửa | 3 | 4 | 12 | Việt Quang | Test trạng thái cuối không khớp bộ đếm sau khi đã sửa ISS-G-001 | Sửa ISS-G-001 nằm trong gói hiện hành; reserve này chỉ cho sai lệch chưa biết còn lại, không tính hai lần |
| R-B-05 | Nhầm kỳ UTC hoặc hết hạn paid → Reset hoặc hoàn sai tháng → Người dùng mất hoặc được thêm lượt sai | 2 | 3 | 6 | Việt Quang | TC-B-97/98 thất bại hoặc phát hiện kỳ sai | UTC và UsagePeriodId gốc; test nằm trong WP; contingency dùng cho sai lệch mới |
| R-B-06 | Cấu hình môi trường sai → Giả lập mở trong Production → Phải dừng phát hành và sửa cấu hình | 1 | 4 | 4 | Việt Quang | Route fake hoặc DI còn đăng ký tại Production | Không đăng ký/map Production; kiểm gate triển khai; không cho Admin bỏ qua |
| R-B-07 | Quy tắc gói thay đổi sau chốt → Phạm vi và ước lượng tăng → Trễ lịch và tăng ngân sách | 2 | 3 | 6 | Việt Quang | Yêu cầu thay giá, quota, chỗ hoặc dữ liệu hóa đơn | Ghi Change Log; đánh giá phạm vi/lịch/chi phí; trình đúng thẩm quyền |
| R-B-08 | Trường dữ liệu nhạy cảm lọt vào log → Telemetry chứa dữ liệu thừa → Phát sinh công xử lý và sửa | 2 | 4 | 8 | Việt Quang | Log có email/password/key/nội dung | Allowlist và test redaction đã ở WP; reserve dành cho phát sinh sau phòng ngừa |
| R-B-09 | Công suất 10 giờ/tuần chia cho nhiều việc → Review B hoặc ghép kế hoạch chậm → Chậm bàn giao và tăng công điều phối | 3 | 3 | 9 | Việt Quang | Đầu vào trễ hơn 1 ngày làm việc hoặc vượt 10 giờ/tuần | Chiến điều phối, ưu tiên tích hợp; không coi 29/09 là hạn hoàn tất toàn sản phẩm |

### 5.3. Định lượng minh bạch

Exposure công kỳ vọng = xác suất × giờ phát sinh còn lại. Tính cả mức trung bình/thấp có tác động định lượng để lập ngân sách; không giả rằng có rủi ro “cao” chỉ vì cần dự phòng. Các tác động giờ là lượng công xử lý phát sinh theo judgment 24/09, không biến thời gian chờ duyệt lịch thành giờ làm.

| Rủi ro | Xác suất | Tác động giờ | Exposure giờ | Cơ sở / giới hạn |
| --- | ---: | ---: | ---: | --- |
| R-B-01 | 50,0% | 12 | 6,0 | Ước lượng công sửa/đối soát nếu sự kiện xảy ra sau phòng ngừa; chưa có dữ liệu tần suất |
| R-B-02 | 30,0% | 12 | 3,6 | Ước lượng công sửa/đối soát nếu sự kiện xảy ra sau phòng ngừa; chưa có dữ liệu tần suất |
| R-B-03 | 30,0% | 8 | 2,4 | Ước lượng công sửa/đối soát nếu sự kiện xảy ra sau phòng ngừa; chưa có dữ liệu tần suất |
| R-B-04 | 50,0% | 16 | 8,0 | Ước lượng công sửa/đối soát nếu sự kiện xảy ra sau phòng ngừa; chưa có dữ liệu tần suất |
| R-B-05 | 30,0% | 6 | 1,8 | Ước lượng công sửa/đối soát nếu sự kiện xảy ra sau phòng ngừa; chưa có dữ liệu tần suất |
| R-B-06 | 10,0% | 16 | 1,6 | Ước lượng công sửa/đối soát nếu sự kiện xảy ra sau phòng ngừa; chưa có dữ liệu tần suất |
| R-B-07 | 30,0% | 8 | 2,4 | Ước lượng công sửa/đối soát nếu sự kiện xảy ra sau phòng ngừa; chưa có dữ liệu tần suất |
| R-B-08 | 30,0% | 12 | 3,6 | Ước lượng công sửa/đối soát nếu sự kiện xảy ra sau phòng ngừa; chưa có dữ liệu tần suất |
| R-B-09 | 50,0% | 8 | 4,0 | Ước lượng công sửa/đối soát nếu sự kiện xảy ra sau phòng ngừa; chưa có dữ liệu tần suất |
| **Tổng** | | | **33,4** | **Chưa là khoản reserve được phê duyệt** |

Test, unique index, UTC, sửa ISS-G-001/003 và hồ sơ cổng là công đã biết trong WBS, **không cộng lại làm dự phòng**. R-B-02/R-B-04 chỉ xét sai lệch mới còn lại sau sửa. Khi tổng hợp P13/P11, tách công sửa chung A/B/C để không ba module cùng cộng một vấn đề; xem quan hệ giữa các rủi ro và chọn mức contingency thực tế. Số 6 giờ = 10% và phép 12/15 hoặc 10/15 ở bản lịch sử không còn hiệu lực.

## 6. RACI và thẩm quyền

R = làm; A = chịu trách nhiệm cuối của đúng dòng; C = tham vấn; I = nhận thông tin; — = không phân vai. Mỗi dòng có đúng **một A**.

| Việc | Chiến | Việt Quang | Quang Anh | Nhà tài trợ | Giảng viên |
| --- | --- | --- | --- | --- | --- |
| Soạn/sửa B_01..B_05 và mã B | C | R/A | C | I | I |
| Kiểm tra chéo B và xử lý ý kiến nội bộ | A | R (sửa) | R (kiểm) | I | I |
| Tổng hợp lịch/chi phí/rủi ro toàn dự án | A | R | C | I | I |
| Kiểm tra chéo A | R (sửa) | R (kiểm) | A (xác nhận nội bộ) | I | I |
| Điều phối nguồn lực nội bộ | R/A | C | C | I | I |
| Chuẩn bị hồ sơ/thẩm tra phương án cổng | A | R | C | C | I |
| Chấp thuận thuộc thẩm quyền Nhà tài trợ | R (trình) | C | C | A | I |
| Nghiệm thu sản phẩm cuối | R (trình) | C | C | A | I |
| Đánh giá hồ sơ học thuật | R (trình) | C | C | I | A |

Không gọi Chiến là người ký nghiệm thu sản phẩm thay Nhà tài trợ; không gộp “Sponsor/GV” thành một A mơ hồ. Chưa có ký tên/biên bản thì trạng thái vẫn chờ review/nghiệm thu tương ứng.

Cập nhật theo kỳ do P12 quy định: Việt Quang gửi link đầu ra, phần đã làm, actual có nguồn, vướng mắc và dự báo; báo Chiến khi gate chặn hoặc quá công suất. Không coi kênh/giờ họp chưa được ghi nhận là lời cam kết cá nhân.

## 7. Baseline và kiểm soát thay đổi

**Scope baseline = Scope Statement + WBS + WBS Dictionary** được phê duyệt. RTM và B_01 hỗ trợ truy vết, không thay cấu phần baseline. Schedule baseline lấy lịch hợp nhất đã cân nguồn lực và được phê duyệt; cost baseline lấy ngân sách theo thời gian cộng contingency được duyệt, không gồm management reserve.

Lượt này chốt nội dung nội bộ theo ủy quyền người dùng; không sửa lùi lịch sử hoặc tự ghi Approved. Luồng thay đổi: ghi yêu cầu → Việt Quang phân tích tác động → Chiến điều phối/xem thẩm quyền → trình bên có thẩm quyền khi vượt quyền → ghi quyết định → cập nhật phiên bản/forecast/baseline từ thời điểm hiệu lực. Dùng [mẫu Change Request](../../../_template/02_Change_Request_Form_v1.0.md). Cả đề nghị bị hoãn/từ chối vẫn lưu log.

## 8. Đầu ra theo nhiệm vụ và phần còn lại

| Việc giao | Đã có trong lượt sửa tài liệu | Còn phải thực hiện / bằng chứng đóng việc |
| --- | --- | --- |
| CV-B-01 | B_01/B_02 tách và bản cũ dẫn lịch sử | Quang Anh kiểm, Chiến xác nhận nội bộ |
| CV-B-02 | Sửa reserve/TTL/fake/expiry, RACI, baseline, authority, status | Kiểm chéo và sửa phần mềm theo ISS-G-001/003 |
| CV-B-03 | 6 gói, 12 hoạt động WP, O/M/P và cơ sở; tổng mới không ép về 60 giờ | Đối soát actual/ETC, phân rãhai PP khi gần làm |
| CV-B-04 | Thang P/I,9 rủi ro, exposure 33,4 tách reserve | Ghép rủi ro chung, khử trùng, duyệt contingency đúng quyền |
| CV-B-05 | Dữ liệu B đủ đầu vào P10/P11 | Tổng hợp với A/C, cân công suất/gate; không có CPM đầy đủ khi PP chưa phân rã |
| CV-B-06 | B_03/B_04 và danh mục phần thiếu | Ghi actual thực tế, chạy test có môi trường, cập nhật E05/M03/M04 |
| CV-B-07 | Danh sách kiểm A theo quyền/độ phân giải/hủy/expiry/HAR | Việt Quang thực hiện review/test; chưa tự ghi đã review thay người |
| CV-B-08 | B_05 snapshot bàn giao có điều kiện | Chốt số cuối kỳ, ký nhận đúng người và đóng tồn đọng nếu có chứng cứ |
