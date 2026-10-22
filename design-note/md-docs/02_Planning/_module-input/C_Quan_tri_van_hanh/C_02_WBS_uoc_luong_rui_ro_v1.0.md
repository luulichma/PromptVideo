# C_02 — WBS, ước lượng và rủi ro: Quản trị và vận hành

| Thuộc tính | Giá trị |
| --- | --- |
| Phiên bản / cập nhật | v1.0 / 2026-09-24 |
| Trạng thái | Draft forecast; chưa là baseline đã phê duyệt |
| Chủ / kiểm tra / xác nhận nội bộ | Phạm Quang Anh / Nguyễn Thế Chiến / Nguyễn Việt Quang |
| Phạm vi | Nhánh xây dựng 4.4; công việc quản lý/thiết kế/kiểm thử/bàn giao dẫn sang WBS chung |

## 1. Quyết định và cơ sở

Áp dụng [danh mục quyết định](../../../00_Quyet_dinh_va_quy_uoc_ma.md) DEC-003/005/008/009, [C_01](C_01_Yeu_cau_va_kiem_thu_v1.0.md) và [P05](../../05_WBS_and_WBS_Dictionary_v1.0.md). Ước lượng ba điểm theo công thức dùng trong bộ hồ sơ môn học: **tE = (O + M + P) / 3**, không gọi đây là PERT trọng số `(O + 4M + P) / 6`. Giờ là công sức dự kiến để tạo đủ đầu ra, không phải giờ thực tế đã làm, không phải thời lượng lịch và cũng chưa phải công sức còn lại sau khi trừ phần có mã.

Bản cũ 40 giờ thiếu validation/version của mẫu, upload tài sản, chống lặp/giao dịch của hỗ trợ và health/đo lợi ích. Ước lượng mới 72 giờ giữ đủ phạm vi. Đây là phán đoán kỹ thuật từ các endpoint/test hiện có và phần thiếu; độ tin cậy trung bình–thấp, không ép tổng về 40. Khi chủ module ghi giờ thực và remaining estimate, P10 mới lập lịch công việc còn lại đáng tin cậy.

## 2. Cây và từ điển WBS

```text
4.4 Quản trị và vận hành (C)............................72,0 giờ
├── 4.4.1 Danh mục mẫu và tài sản đồ họa................22,0 giờ · WP
├── 4.4.2 Hồ sơ hỗ trợ và giao tiếp điều chỉnh hạn mức...20,0 giờ · PP
├── 4.4.3 Giám sát, health và dữ liệu đo lợi ích.........14,0 giờ · WP
└── 4.4.4 Giao diện quản trị............................16,0 giờ · PP
```

| WBS | Đầu ra, phạm vi và tiêu chí chấp nhận | Người làm | Phụ thuộc / mốc | Trạng thái |
| --- | --- | --- | --- | --- |
| 4.4.1 | Catalog metadata/phiên bản, vòng đời Draft/Active/Retired, validator trước publish, ảnh dùng chung có kiểm file; đạt TC-C-01…10 trong phạm vi tương ứng | Quang Anh | IF-CA-01; quyền B; M3 | WP; có danh mục và đổi trạng thái, chưa đủ CRUD/assets |
| 4.4.2 | Tra cứu tài khoản/reservation, ticket, yêu cầu bù lượt với reason/idempotency/audit nguyên tử qua IF-CB-01; đạt TC-C-11…16 | Quang Anh; Việt Quang cung cấp service quota | 4.3.1/4.3.2 và IF-CB-01; M6 | PP; phân rã sau P03 và schema B ổn định, tại DOC-02 |
| 4.4.3 | Metrics có kỳ/nghĩa chỉ số, health an toàn, đầu vào báo cáo LI-01…05; đạt TC-C-21…25; thiếu số đo vẫn thể hiện rõ | Quang Anh | Dữ liệu B, phép đo A; M6; uptime đo sau M7 | WP; có snapshot metrics/readiness, chưa có bộ đo đủ |
| 4.4.4 | UI admin mẫu/ticket/metrics, trạng thái lỗi/đang tải/quyền; không lộ thao tác cho User và vẫn kiểm server | Quang Anh | 4.4.1/4.4.2/4.4.3; M6 | PP; phân rã sau hợp đồng endpoint chốt, tại DOC-02 |

Các gói lá đều 14–22 giờ, trong khoảng 8–80; tổng 22+20+14+16=72. Gói PP có phạm vi, chủ, mốc làm rõ và ước lượng thô, **không tạo activity giả** trước khi đủ chi tiết. Ngày DOC-02 chỉ là hạn phân rã hồ sơ, không phải cam kết xây xong sản phẩm.

| Yêu cầu C | WBS xây dựng |
| --- | --- |
| REQ-C-01,02,03; NF-C-02; phần mẫu của NF-C-03 | 4.4.1 |
| REQ-C-04,05,09; phần quota của NF-C-03 | 4.4.2 |
| REQ-C-06,07,08; NF-C-01 | 4.4.3 |
| Thao tác giao diện cho các yêu cầu trên | 4.4.4; không cộng lại giờ backend |

Phần đặc tả C_01/P03 thuộc WBS 2/3; P06/P07 thuộc 1.2; test độc lập/tích hợp thuộc 5; hướng dẫn, báo cáo bàn giao thuộc 6. Quang Anh chịu nội dung các phần này nhưng giờ được nhập **một lần** vào gói chung ở P05/P11. Test unit phục vụ xây từng gói đã nằm trong 4.4, không cộng lại ở test độc lập.

## 3. Hoạt động và ước lượng

### 3.1. Hoạt động cho hai work package đã phân rã

| Mã hoạt động | Việc và đầu ra | Giờ | Tiền nhiệm | Quan hệ / chủ |
| --- | --- | ---: | --- | --- |
| ACT-4.4.1-01 | Chuẩn hóa model/catalog và validator manifest/version trước publication | 7 | Không có activity nội bộ; điều kiện đầu vào P03 IF-CA-01 và B xác thực | FS, lag 0 / Quang Anh |
| ACT-4.4.1-02 | Hoàn thiện ảnh dùng chung, kiểm loại/kích thước và tham chiếu | 9 | ACT-4.4.1-01 | FS, lag 0 / Quang Anh |
| ACT-4.4.1-03 | Kiểm unit/integration của gói, lỗi quyền, trạng thái và audit; sửa theo TC | 6 | ACT-4.4.1-02 | FS, lag 0 / Quang Anh |
| ACT-4.4.3-01 | Định nghĩa cửa sổ/snapshot metrics, nguồn LI và dữ liệu đối chiếu | 5 | Không có activity nội bộ; điều kiện P03 và định nghĩa dữ liệu B | FS, lag 0 / Quang Anh |
| ACT-4.4.3-02 | Hoàn thiện readiness/error và thu bộ dữ liệu theo kỳ phục vụ báo cáo | 5 | ACT-4.4.3-01 | FS, lag 0 / Quang Anh |
| ACT-4.4.3-03 | Kiểm fixture metrics, failure health, redaction và lưu kết quả | 4 | ACT-4.4.3-02 | FS, lag 0 / Quang Anh |

Giờ hoạt động là phân bổ của tE gói, không cộng thêm lên 72 giờ. Hai chuỗi có thể độc lập về dữ liệu, nhưng cùng Quang Anh nên P10 phải cân nguồn lực, không tự xếp chạy đồng thời. Liên kết với B/A là điều kiện đầu vào; khi hoạt động B/A ổn định, P10 chuyển thành predecessor cụ thể, không giả một activity không tồn tại.

### 3.2. Ước lượng ba điểm

| WBS | O | M | P | tE | Cơ sở và giả định | Tin cậy |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| 4.4.1 | 14 | 20 | 32 | 22 | Tái dùng list/status và test quyền; còn validator, phiên bản, upload ảnh, kiểm tham chiếu. P gồm sửa lệch catalog manifest/frontend schema và vòng hồi quy | Trung bình–thấp |
| 4.4.2 | 10 | 18 | 32 | 20 | Tra cứu + ticket + UI gọi adjustment; B làm transaction quota dùng chung trong 4.3.2, C không tính lại phần service B. P gồm contract drift và retry/concurrency phía hỗ trợ | Thấp, PP |
| 4.4.3 | 8 | 12 | 22 | 14 | Tái dùng metrics/readiness; bổ sung kỳ đo, failure fixture, nguồn lợi ích. Không bao gồm vận hành ba năm hay giả làm đủ 30 ngày uptime | Trung bình |
| 4.4.4 | 8 | 14 | 26 | 16 | Ba khu vực mẫu/hỗ trợ/metrics; lỗi, quyền, tải dữ liệu. API chưa ổn định tăng số vòng sửa; chưa có màn admin hoàn chỉnh được chứng minh | Thấp, PP |
| **Tổng** | **40** | **64** | **112** | **72** | Tổng từ dưới lên | Forecast |

### 3.3. Nguồn lực, lịch và chi phí

Năng lực dùng để lập hồ sơ: 10 giờ/người/tuần, hai tuần 24/09–07/10 là 20 giờ/người và 60 giờ nhóm. Đây là giả định kế hoạch DEC-008, chưa phải khai báo giờ rảnh thực tế. 72 giờ xây dựng C chưa kể nhiệm vụ chung không thể nhận là sẽ xong trong 20 giờ đợt hồ sơ. Ưu tiên đợt này là sáu đầu vào module, Planning, bằng chứng và danh sách thiếu; xây phần thiếu theo lịch forecast/CR-G-001.

| Khoản | Giá trị / cách hạch toán |
| --- | --- |
| Công xây dựng C | 72 giờ × 80.000 VND/giờ = 5.760.000 VND chi phí cơ hội, không phải tiền mặt đã chi |
| Phơi nhiễm rủi ro C sản phẩm | 12,8 giờ = 1.024.000 VND quy đổi, tính ở §5; là ứng viên để xem xét contingency, chưa được cấp |
| Forecast dùng để ghép | Giữ base 72 giờ / 5.760.000 VND; chưa cộng toàn bộ 12,8 giờ vì cần loại phần đã nằm trong O/M/P. Không phát hành tổng 84,8 giờ như ngân sách được duyệt |
| Rủi ro quá tải việc chung R-C-05 | 8,4 giờ là exposure công việc chung; chuyển P13/P11 phân bổ ở quản lý/tích hợp, không cộng vào 12,8 giờ C |
| Phòng ngừa đã có trong base | Validator, test retry/audit, redaction, phân công test; không thêm một dòng dự phòng trùng giờ này |
| Management reserve | Chưa phân bổ cho C; thuộc cấp dự án, ngoài cost baseline, không mặc định 0 |
| Tiền mặt | Chưa có báo giá mới hoặc chi thực cho C; dùng máy/DB local hiện có. Hosting/storage nếu triển khai thật lấy báo giá trong P11, không ghi 0 là kết luận đã xác minh |

| Nguồn lực cần | Cách có và tiêu chí | Trước mốc |
| --- | --- | --- |
| Máy phát triển, Docker/PostgreSQL và .NET/Node đúng README | Dùng máy nhóm có sẵn; kiểm Docker/test container chạy được trước nhận ca | DOC-01 cho kế hoạch, trước lượt thử thực |
| Máy Windows với Chrome/Edge và frontend/backend tích hợp | Ghi phiên bản thực; seed riêng; không dùng tài khoản/dữ liệu thật | DOC-03 |
| Dữ liệu fixture và tài khoản Admin/User | Tự tạo fixture có counts dự kiến, phân quyền và CSRF; không dùng sửa DB làm chứng cứ tính năng quota | Trước test C |
| Storage/hosting phát hành | Chỉ chọn sau yêu cầu môi trường và báo giá; lưu đơn vị tiền, kỳ trả và người quản lý | Trước triển khai sản phẩm, không giả đã mua |

## 4. Chất lượng và trách nhiệm

P06 là kế hoạch chung. Quang Anh viết unit/integration cho C; Chiến chạy hoặc review ca C độc lập; Việt Quang xác nhận kết quả nội bộ sau sửa/thử lại. Đạt code review không bằng nghiệm thu. Bằng chứng chạy lưu runId/build/env/input/expected/actual/status/path trong M05; không lấy bản kế hoạch làm bằng chứng chạy.

| Hành động | Chiến | Việt Quang | Quang Anh | Nhà tài trợ/GV |
| --- | --- | --- | --- | --- |
| Viết và sửa C_01/C_02 và code C | C | I | A/R | I |
| Kiểm tra độc lập C | A/R | I | C | I |
| Xác nhận nội bộ C sau sửa | C | A/R | R | I |
| Tổng hợp P06/P07/P12 | C | C | A/R | I |
| Quyết định nội bộ về thứ tự/phối hợp | A/R | C | C | I |
| Phê duyệt thay đổi vượt quyền Charter | R trình | C | C | A theo thẩm quyền Charter, chưa ghi đã ký |

## 5. Sổ rủi ro và dự phòng

P1=.10, P2=.30, P3=.50, P4=.70, P5=.90 là phán đoán thống nhất, không phải tần suất đã đo. I1≤2h, I2>2–4h, I3>4–8h, I4>8–16h, I5>16h. Điểm 1–6 thấp, 7–12 trung bình, 13–25 cao. Điểm và EMV dùng cho hai mục đích khác nhau.

| ID | Nguyên nhân → sự kiện → hậu quả | P / I / điểm | Trigger | Phòng ngừa và phản ứng | Chủ / trạng thái |
| --- | --- | --- | --- | --- | --- |
| R-C-01 | Manifest catalog khác schema frontend → publish mẫu không render đúng → sửa contract và hồi quy | 3 / 3 / 9 | Key/version không được hỗ trợ hoặc validation TC-C-05 fail | Validator/adapter, contract fixture; dừng publish bản lỗi, giữ mẫu đã biết tương thích, Chiến rà A | Quang Anh / Open |
| R-C-02 | Bù lượt lặp hoặc tách audit khỏi quota → sai UsagePeriod → người dùng nhận thừa/thiếu lượt và khó đối soát | 2 / 4 / 8 | Retry cho kết quả khác hoặc audit thiếu sau commit | B sở hữu transaction/idempotency; tạm dừng adjustment, đối soát ledger, sửa rồi thử đồng thời | Việt Quang phối hợp Quang Anh / Open |
| R-C-03 | Nhận file sai/không giới hạn → lỗi bộ nhớ hoặc mẫu tham chiếu hỏng → sửa upload và phục hồi asset | 2 / 2 / 4 | File vượt 50 MiB được nhận, sai magic bytes, tham chiếu mất | Kiểm phía server, staging asset trước publish; ngừng endpoint lỗi và phục hồi bản trước | Quang Anh / Open |
| R-C-04 | Định nghĩa kỳ/nguồn khác nhau → dashboard bị dùng làm doanh thu hay lợi ích đã đạt → sửa số và báo cáo | 3 / 3 / 9 | Count tổng lịch sử bị gọi là tháng hoặc giả lập bị gọi doanh thu thực | Data dictionary và đối chiếu fixture/BMP; đánh dấu số sai, phát hành báo cáo sửa, không đoán dữ liệu thiếu | Quang Anh / Open |
| R-C-05 | C kiêm tổng hợp và chạy mọi test → vượt công suất → gate hồ sơ chậm | 4 / 4 / 16 | Việc còn lại vượt giờ tuần hoặc review bị chờ >24h | Vòng kiểm chéo DEC-002, giao chủ module tự cấp bằng chứng; Chiến cân lại thứ tự, dùng phần reserve chung, báo ảnh hưởng gate | Chiến / Open, rủi ro nguồn lực chung |

| Rủi ro | Xác suất | Tác động giờ nếu xảy ra | Cơ sở tác động | Exposure giờ | Hạch toán |
| --- | ---: | ---: | --- | ---: | --- |
| R-C-01 | 0,50 | 8 | Một vòng sửa contract 4h và hồi quy 4h | 4,0 | Contingency C |
| R-C-02 | 0,30 | 12 | Đối soát/sửa 8h, retry và concurrency 4h; phần hậu quả, không lặp giờ phòng ngừa | 3,6 | Contingency C; P11 không cộng lần nữa ở B cho cùng sự kiện |
| R-C-03 | 0,30 | 4 | Khoanh vùng 2h + sửa/thử 2h | 1,2 | Contingency C |
| R-C-04 | 0,50 | 8 | Đối chiếu 4h + tái lập báo cáo 4h | 4,0 | Contingency C |
| **C sản phẩm** | | | | **12,8** | Tổng định lượng, không giới hạn ở rủi ro cao |
| R-C-05 | 0,70 | 12 | Phối hợp 4h + một lượt review/ghép 8h | 8,4 | Reserve chung; loại khỏi tổng C để tránh cộng đôi |

Không ghi “điểm 16 = 16 giờ”. Các con số là giả định ban đầu, xem lại khi có actuals. Cột hạch toán là nơi xem xét phần dự phòng nếu được cấp, không phải quyết định cấp toàn bộ exposure. R-C-01/R-C-04 có thể giao với biến động đã tính trong O/M/P; P11 chỉ cộng hậu quả dư được xác định ngoài base, không tự cộng đủ 12,8 giờ lên 72 giờ. R-C-02 không được cấp lại ở B; R-C-05 đối chiếu rủi ro quá tải của A trước xét reserve chung. Nếu P08 chọn tập rủi ro khác, P11 ghi rõ tập chọn và exposure còn lại; không chuyển exposure thành tiền mặt thực chi.

## 6. Giao đầu vào và kiểm soát thay đổi

DOC-01 26/09: C_01/C_02 dùng mã thống nhất; DOC-02 29/09: đưa số liệu vào P05/P10/P11/P13 và phân rã hai PP nếu đủ schema; DOC-03 02/10: bằng chứng chạy/blocked và issue; DOC-04 05/10: C_05 dự thảo; DOC-05 07/10: review bộ hồ sơ. Các mốc là mục tiêu hồ sơ, không thay M3/M6/M7 sản phẩm của Charter.

Thay đổi yêu cầu → ghi issue/CR → chủ đánh giá ảnh hưởng REQ/TC/WBS/giờ/rủi ro → Chiến điều phối → cấp có thẩm quyền chấp thuận/hoãn/từ chối → ghi Change Log → cập nhật phiên bản và thông báo người chịu ảnh hưởng. Không coi một tin nhắn standup là phê duyệt baseline. C thay schema mẫu phải có A rà; thay quota phải có B rà. CV-C-04 được xử lý bằng các bảng trên, còn giờ thực và kiểm chứng sản phẩm phải cập nhật từ người thực hiện.
