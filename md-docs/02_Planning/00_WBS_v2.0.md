<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                     |                                |
| ------------------- | ------------------------------ |
| **Nhóm tiến trình** | Planning                       |
| **Tên tài liệu**    | WBS & WBS Dictionary           |
| **Phiên bản**       | Ver. 2.0                       |
| **Nhóm thực hiện**  | Nhóm 02                        |
| **Ngày phát hành**  | 2026-08-27                     |
| **Trạng thái**      | Draft — chờ phê duyệt          |

<div style="page-break-after: always"></div>

<!-- ======================= TRANG 2 — XÁC NHẬN & LỊCH SỬ ======================= -->

## Xác nhận

| Người tạo       | Người kiểm tra  | Người xác nhận  |
| --------------- | --------------- | --------------- |
| Nguyễn Thế Chiến | Nguyễn Việt Quang | Phạm Quang Anh |
|                 | Phạm Quang Anh | Thầy Nguyễn Đình Quảng |

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| -- | --------- | ------------- | -------------- | ----------------- | --------------- | --------------- |
| 1  | Ver 1.0   | 2026-08-24    | Tạo mới        | Khởi tạo WBS và WBS Dictionary: phân rã 450 giờ thành gói công việc, ma trận truy vết, phân bổ công sức, đường găng | Nguyễn Thế Chiến | Phạm Quang Anh |
| 2  | Ver 2.0   | 2026-08-27    | Chỉnh sửa lớn  | Cập nhật theo mô hình dịch vụ máy chủ thu phí thuê bao thường niên: bổ sung nhánh cấp 1 *F5 — Tài khoản, thuê bao và giấy phép* (60 giờ); điều chỉnh phạm vi và giờ của các nhánh còn lại để giữ tổng 450 giờ; cập nhật ma trận truy vết, phân bổ theo mốc và đường găng | Nguyễn Thế Chiến | Phạm Quang Anh |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

## Mục lục

1. [Mục đích và phạm vi tài liệu](#1-mục-đích-và-phạm-vi-tài-liệu)
2. [Căn cứ lập](#2-căn-cứ-lập)
3. [Nguyên tắc phân rã](#3-nguyên-tắc-phân-rã)
4. [Cấu trúc phân rã công việc](#4-cấu-trúc-phân-rã-công-việc)
5. [WBS Dictionary](#5-wbs-dictionary)
6. [Ba tính năng nghiệp vụ chính](#6-ba-tính-năng-nghiệp-vụ-chính)
7. [Ma trận truy vết](#7-ma-trận-truy-vết)
8. [Phân bổ công sức](#8-phân-bổ-công-sức)
9. [Đường găng và ràng buộc lịch](#9-đường-găng-và-ràng-buộc-lịch)
10. [Phần chưa phân rã và quy tắc cập nhật](#10-phần-chưa-phân-rã-và-quy-tắc-cập-nhật)

<div style="page-break-after: always"></div>

<!-- ============================== NỘI DUNG ============================== -->

## 1. Mục đích và phạm vi tài liệu

Tài liệu này phân rã toàn bộ phạm vi dự án PromptVideo v1.0 thành các gói công việc (work package) có thể giao được cho một người, ước lượng được bằng giờ, và nghiệm thu được bằng tiêu chí khách quan.

WBS là thành phần của **Scope Baseline** cùng với Project Scope Statement và tài liệu này (WBS Dictionary). Sau khi được phê duyệt, mọi thay đổi phải đi qua quy trình kiểm soát thay đổi tại [Project Charter §10.3](../01_Initiating/01_Project_Charter_v2.2.md#103-kiểm-soát-thay-đổi).

**Tài liệu này mô tả *công việc*, không mô tả *người*.** Cột "Phụ trách" trong WBS Dictionary là đề xuất chủ sở hữu gói việc để lập lịch; ma trận phân vai đầy đủ (RACI, %effort) nằm ở Resource Management Plan.

**Tài liệu này cũng không mô tả *kiến trúc phần mềm*.** Phân rã thành phần kỹ thuật, giao diện giữa các thành phần và quyết định thiết kế thuộc Software Architecture Document (DL-03), lập ở mốc M2.

---

## 2. Căn cứ lập

| Nguồn | Nội dung sử dụng |
| ----- | ---------------- |
| [Project Charter §4](../01_Initiating/01_Project_Charter_v2.2.md#4-high-level-requirements) | 16 yêu cầu chức năng RQ-01 → RQ-17, 11 yêu cầu phi chức năng NF-01 → NF-11 |
| [Project Charter §5.2, §5.3](../01_Initiating/01_Project_Charter_v2.2.md#52-ranh-giới-phạm-vi) | Ranh giới phạm vi và 8 sản phẩm bàn giao DL-01 → DL-08 |
| [Project Charter §3.1](../01_Initiating/01_Project_Charter_v2.2.md#31-mục-tiêu-đo-được) | 15 mục tiêu đo được — nguồn của tiêu chí chấp nhận |
| [Project Charter §7](../01_Initiating/01_Project_Charter_v2.2.md#7-summary-milestone-schedule) | 8 mốc M0 → M7 |
| [Project Charter §8.4](../01_Initiating/01_Project_Charter_v2.2.md#84-phân-bổ-công-sức-theo-mốc) | Phân bổ 450 giờ theo mốc — ràng buộc mà tổng giờ WBS phải khớp |
| [Benefit Management Plan](../00_Pre-project/02_Benefit_Management_Plan_v2.2.md) | Chỉ số MT-06 → MT-09 và yêu cầu đo baseline MT-06 trước mốc M1 |
| [Assumption Log](../01_Initiating/02_Assumption_Log_v2.2.md) | Ràng buộc CT-01 (15 tuần), CT-04 (450 giờ), CT-03 (trần hạ tầng), CT-05 và CT-08 (giấy phép) |

---

## 3. Nguyên tắc phân rã

### 3.1. Quy tắc 100%

Tổng công việc ở mỗi cấp bằng đúng 100% công việc của phần tử cha. Không có công việc nào nằm ngoài WBS; công việc không xuất hiện trong WBS thì không thuộc phạm vi dự án và không được làm.

Hệ quả kiểm tra được: tổng giờ của 34 gói công việc bằng đúng **450 giờ**, và tổng giờ theo từng mốc khớp đúng bảng phân bổ tại [Charter §8.4](../01_Initiating/01_Project_Charter_v2.2.md#84-phân-bổ-công-sức-theo-mốc). Xem [§8.1](#81-theo-mốc--đối-chiếu-với-charter-84).

### 3.2. Cấu trúc lai — vì sao không thuần một kiểu

WBS chuẩn hướng theo sản phẩm bàn giao. Nhưng PromptVideo có một đặc điểm chi phối: **cả bốn tính năng dựng video đều chạy trên cùng một bộ dựng và một pipeline mã hoá.** Hai cách phân rã thuần đều hỏng:

| Cách phân rã | Vì sao không dùng |
| ------------ | ----------------- |
| Thuần theo thành phần kỹ thuật (bộ dựng, bộ mã hoá, bộ xác thực…) | Không hiện ra tính năng nghiệp vụ nào; gói việc không có tiêu chí nghiệm thu mà Nhà tài trợ kiểm chứng được |
| Thuần theo tính năng nghiệp vụ | 62 giờ của bộ dựng bị xé và tính trùng vào bốn nhánh; ước lượng sai và đường găng biến mất |

Vì vậy cấp 1 gồm **năm nhánh tính năng nghiệp vụ**, cộng **một nhánh nền tảng lõi** cho phần dùng chung, cộng **hai nhánh quản trị và phát hành**. Tách phần dùng chung thành một nhánh riêng (enabling work) là cách xử lý tiêu chuẩn cho tình huống này.

**Nhánh 7 là nhánh nghiệp vụ, không phải nhánh hạ tầng.** Tài khoản, giấy phép, hạn mức và thanh toán không phải là "phần kỹ thuật đi kèm" — đó là **cách sản phẩm tạo ra doanh thu**, và nó có tiêu chí nghiệm thu riêng mà Nhà tài trợ kiểm chứng trực tiếp (OB-13, OB-14, OB-15). Đặt nó chung vào nhánh nền tảng lõi sẽ làm mất đúng điều đó.

### 3.3. Độ mịn của gói công việc

Quy tắc 8–80 giờ áp cho dự án quy mô lớn. Với tổng ngân sách 450 giờ, quy tắc đó chỉ cho ra khoảng 6–10 gói việc — quá thô để phân công cho 3 người trong 15 tuần. Tài liệu này dùng **dải 3–40 giờ**, tương ứng khoảng **một phần ba tuần đến bốn tuần công của một người**.

Gói việc lớn nhất là **2.2.2 Bộ dựng lõi (38 giờ)**, nằm trên đường găng và được kiểm soát bằng ngưỡng cảnh báo 120% tại [Charter §8.5](../01_Initiating/01_Project_Charter_v2.2.md#85-quy-tắc-dự-phòng-và-ngưỡng-cảnh-báo).

### 3.4. Tài khoản kiểm soát

Mỗi **nhánh cấp 1 là một control account**. Giờ công được theo dõi và báo cáo ở cấp này trong họp tuần. Ngưỡng cảnh báo áp ở cấp mốc theo Charter §8.5; ngoài ra, một control account vượt 120% giờ dự toán phải được báo cáo ngay, không đợi mốc. Xem [§8.3](#83-theo-control-account).

---

## 4. Cấu trúc phân rã công việc

### 4.1. Sơ đồ phân cấp

```
PromptVideo v1.0  (450 giờ)
│
├── 1. Quản trị dự án ............................... 59 h  (13,1%)
│   ├── 1.1 Khởi tạo và phê duyệt Charter ........... 23 h
│   ├── 1.2 Lập bộ tài liệu Planning ................ 10 h
│   ├── 1.3 Điều hành, báo cáo và kiểm soát thay đổi  12 h
│   └── 1.4 Nghiệm thu và bàn giao .................. 14 h
│
├── 2. Nền tảng lõi  (enabling) .................... 118 h  (26,2%)
│   ├── 2.1 Scene Schema và bộ xác thực ............. 20 h
│   ├── 2.2 Bộ dựng theo khung hình
│   │   ├── 2.2.1 Thiết kế kiến trúc bộ dựng ........ 12 h
│   │   ├── 2.2.2 Bộ dựng lõi frame(n) → DOM ........ 38 h
│   │   └── 2.2.3 Timeline nhiều cảnh và chuyển cảnh  12 h
│   ├── 2.3 Phát hiện năng lực và trạng thái kết nối  9 h
│   └── 2.4 Hạ tầng chất lượng
│       ├── 2.4.1 Khung kiểm thử và baseline MT-06 .. 7 h
│       ├── 2.4.2 Kiểm chứng xác định và bộ nhớ ..... 14 h
│       └── 2.4.3 Độ tin cậy và độ phủ kiểm thử ..... 6 h
│
├── 3. F1 — Soạn video bằng biểu mẫu  ★ ............. 79 h  (17,6%)
│   ├── 3.1 Trình soạn thảo
│   │   ├── 3.1.1 Khung soạn thảo và danh sách cảnh . 14 h
│   │   └── 3.1.2 Biểu mẫu nhập nội dung theo mẫu ... 13 h
│   ├── 3.2 Thư viện mẫu trình chiếu
│   │   ├── 3.2.1 Thiết kế và duyệt 5 mẫu ........... 11 h
│   │   ├── 3.2.2 Hiện thực 5 mẫu ................... 15 h
│   │   └── 3.2.3 Typography tiếng Việt ............. 12 h
│   ├── 3.3 Chèn ảnh từ máy người dùng .............. 10 h
│   └── 3.4 Kiểm thử người dùng ..................... 4 h
│
├── 4. F2 — Xem trước trong trình duyệt .............. 8 h  (1,8%)
│   └── 4.1 Trình xem trước theo khung hình ......... 8 h
│
├── 5. F3 — Xuất MP4 không giới hạn độ dài  ★ ...... 110 h  (24,4%)
│   ├── 5.1 Pipeline mã hoá theo luồng
│   │   ├── 5.1.1 Nguyên mẫu mã hoá theo luồng ...... 28 h
│   │   ├── 5.1.2 Chụp khung hình và VideoEncoder ... 25 h
│   │   ├── 5.1.3 Muxer MP4 và ghi theo luồng ....... 29 h
│   │   └── 5.1.4 Tối ưu vòng giải phóng bộ nhớ ..... 8 h
│   ├── 5.2 Bộ ghi file (FSA + dự phòng OPFS) ....... 12 h
│   └── 5.3 Hộp thoại xuất: tiến trình, dừng, huỷ ... 8 h
│
├── 6. F4 — Lưu và mở lại dự án ...................... 8 h  (1,8%)
│   └── 6.1 Ghi và đọc file dự án ................... 8 h
│
├── 7. F5 — Tài khoản, thuê bao và giấy phép  ★ .... 60 h  (13,3%)
│   ├── 7.1 Mô hình tài khoản và xác thực ........... 14 h
│   ├── 7.2 Cấp và kiểm giấy phép khi xuất .......... 12 h
│   ├── 7.3 Hạn mức bậc miễn phí và watermark ....... 8 h
│   ├── 7.4 Cổng thanh toán, mua và gia hạn ......... 16 h
│   └── 7.5 Trang quản lý thuê bao .................. 10 h
│
└── 8. Phát hành và tài liệu ......................... 8 h  (1,8%)
    ├── 8.1 Tài liệu người dùng và tài liệu vận hành  5 h
    └── 8.2 Triển khai và rà soát giấy phép ......... 3 h
```

★ = tính năng nghiệp vụ chính, xem [§6](#6-ba-tính-năng-nghiệp-vụ-chính).

### 4.2. Tổng hợp cấp 1

| WBS | Nhánh cấp 1 | Loại | Sản phẩm bàn giao | Giờ | % |
| --- | ----------- | ---- | ----------------- | --: | --: |
| 1 | Quản trị dự án | Quản trị | DL-01, DL-08 | 59 | 13,1% |
| 2 | Nền tảng lõi | Enabling | DL-02, DL-04, DL-05 | 118 | 26,2% |
| 3 | F1 — Soạn video bằng biểu mẫu | Nghiệp vụ ★ | DL-03, DL-04, DL-06 | 79 | 17,6% |
| 4 | F2 — Xem trước trong trình duyệt | Nghiệp vụ | DL-04 | 8 | 1,8% |
| 5 | F3 — Xuất MP4 không giới hạn độ dài | Nghiệp vụ ★ | DL-03, DL-04, DL-05, DL-06 | 110 | 24,4% |
| 6 | F4 — Lưu và mở lại dự án | Nghiệp vụ | DL-06 | 8 | 1,8% |
| 7 | F5 — Tài khoản, thuê bao và giấy phép | Nghiệp vụ ★ | DL-03, DL-06, DL-07 | 60 | 13,3% |
| 8 | Phát hành và tài liệu | Hỗ trợ | DL-07 | 8 | 1,8% |
| | **TỔNG** | | | **450** | **100%** |

**Vì sao nhánh 2 vẫn lớn hơn mọi tính năng.** 118 giờ cho nền tảng lõi là 26,2% ngân sách, nhiều hơn bất kỳ nhánh nghiệp vụ nào. Đây là hệ quả có chủ đích của định vị sản phẩm: giá trị khác biệt của PromptVideo nằm ở kiến trúc dựng theo khung hình và mã hoá theo luồng, và OB-02 — bộ nhớ không tăng theo độ dài video — là một **mục tiêu dự án** được nêu trong Charter, không phải chi phí kỹ thuật ẩn. Gộp nhánh 2 vào nhánh 5 sẽ làm bảng gọn hơn nhưng sai: bộ dựng còn phục vụ nhánh 3 và nhánh 4.

**Vì sao nhánh 7 đắt hơn ba nhánh nghiệp vụ cộng lại.** 60 giờ cho tài khoản – giấy phép – thanh toán nhiều hơn tổng của F2, F4 và nhánh 8. Lý do là nhánh này chứa **hai thứ mà phần còn lại của dự án không có**: một hệ thống chạy trên máy chủ với vòng đời vận hành riêng, và một tích hợp với bên thứ ba (cổng thanh toán) mà đội không kiểm soát được tiến độ. Đây cũng là nhánh duy nhất mà việc "chạy được trên máy của lập trình viên" không đồng nghĩa với "xong".

<div style="page-break-after: always"></div>

## 5. WBS Dictionary

Mỗi dòng là một gói công việc. Cột **Tiêu chí chấp nhận** là điều kiện để gói việc được tính là hoàn thành — nghiệm thu bằng phép đo hoặc bằng thao tác kiểm chứng được, không bằng đánh giá cảm tính.

### 5.1. Nhánh 1 — Quản trị dự án

| Mã | Tên | Mô tả phạm vi | Đầu ra | Tiêu chí chấp nhận | Giờ | Mốc | Phụ thuộc | Phụ trách |
| -- | --- | ------------- | ------ | ------------------ | --: | --- | --------- | --------- |
| 1.1 | Khởi tạo và phê duyệt Charter | Hoàn thiện Business Case, Benefit Management Plan, Project Charter, Assumption Log, Stakeholder Register và hợp đồng với nhóm thực hiện; tổ chức họp phê duyệt | Bộ tài liệu Initiating (DL-01) | Nhà tài trợ ký Charter; 3 thành viên xác nhận cam kết ≥ 10 giờ/tuần bằng văn bản | 23 | M0 | — | Chiến |
| 1.2 | Lập bộ tài liệu Planning | Requirements Specification + RTM, Scope Management Plan, WBS này, Schedule Management Plan, Cost Management Plan, Risk Register, Stakeholder Engagement Plan | 7 tài liệu nhóm Planning | Scope Baseline được Nhà tài trợ phê duyệt; không còn placeholder `<<...>>` | 10 | M1 | 1.1 | Chiến |
| 1.3 | Điều hành, báo cáo và kiểm soát thay đổi | Họp tuần, cập nhật Risk Register và Assumption Log, xử lý yêu cầu thay đổi, theo dõi giờ công theo control account | Biên bản họp tuần, nhật ký thay đổi, bảng chấm công | Không có tuần nào thiếu biên bản; mọi thay đổi phạm vi đều có quyết định được ghi nhận | 12 | M1–M6 | 1.2 | Chiến |
| 1.4 | Nghiệm thu và bàn giao | Chuẩn bị hồ sơ nghiệm thu, đối chiếu toàn bộ mục tiêu OB, họp nghiệm thu, bàn giao quyền truy cập hệ thống, báo cáo tổng kết và bài học kinh nghiệm | Biên bản nghiệm thu, báo cáo tổng kết (DL-08) | Biên bản nghiệm thu được Nhà tài trợ ký; OB-10 và OB-11 được đối chiếu và ghi kết quả; Nhà tài trợ nhận đủ quyền truy cập máy chủ và cổng thanh toán | 14 | M7 | Tất cả | Chiến |

### 5.2. Nhánh 2 — Nền tảng lõi

| Mã | Tên | Mô tả phạm vi | Đầu ra | Tiêu chí chấp nhận | Giờ | Mốc | Phụ thuộc | Phụ trách |
| -- | --- | ------------- | ------ | ------------------ | --: | --- | --------- | --------- |
| 2.1 | Scene Schema và bộ xác thực | Định nghĩa cấu trúc Scene JSON v1 (fps, kích thước, danh sách cảnh, thời lượng, nội dung, hiệu ứng); JSON Schema; bộ xác thực kèm thông báo lỗi; quy tắc versioning và migration | Đặc tả Scene JSON v1, `schema.json`, thư viện xác thực (DL-02) | Bộ xác thực bắt đúng 100% trường hợp trong bộ kiểm thử hợp lệ/không hợp lệ; định dạng được chốt và đưa vào kiểm soát thay đổi | 20 | M1 | 1.2 | Quang |
| 2.2.1 | Thiết kế kiến trúc bộ dựng | Quyết định kiến trúc: hàm thuần theo số khung hình, ranh giới giữa bộ dựng / mẫu / bộ mã hoá, lý do loại bỏ CSS animation | Software Architecture Document (DL-03) | Tài liệu được Trưởng nhóm kỹ thuật và Giám đốc dự án duyệt; mọi giao diện giữa thành phần được đặc tả | 12 | M2 | 2.1 | Quang |
| 2.2.2 | Bộ dựng lõi `frame(n) → DOM` | Hiện thực hàm dựng nhận số thứ tự khung hình và trả về trạng thái giao diện tại đúng khung đó; bảo đảm không phụ thuộc đồng hồ hệ thống | Thư viện bộ dựng (DL-04) | Dựng cùng một khung hình 100 lần cho ra DOM giống hệt nhau; không tham chiếu `Date.now`, `performance.now` hay CSS animation trong đường dựng | 38 | M3 | 2.2.1 | Quang |
| 2.2.3 | Timeline nhiều cảnh và chuyển cảnh | Ghép nhiều cảnh theo thời lượng khung hình; hiệu ứng vào/ra (fade, fade-up) viết dưới dạng hàm easing thuần theo số khung | Mô-đun timeline và transition | Chuyển cảnh diễn ra đúng khung hình dự kiến, sai lệch 0 khung; RQ-12 hoạt động | 12 | M3 | 2.2.2 | Anh |
| 2.3 | Phát hiện năng lực và trạng thái kết nối | Kiểm tra WebCodecs, File System Access API, OPFS; **kiểm tra trạng thái kết nối Internet**; thông báo rõ ràng kèm gợi ý thay thế khi không hỗ trợ hoặc mất mạng | Mô-đun kiểm tra năng lực + ma trận hỗ trợ (DL-02) | RQ-10 đạt trên đủ bộ trình duyệt mục tiêu: Chrome, Firefox, Safari, và ít nhất một trình duyệt không hỗ trợ; **mô phỏng mất mạng cho thông báo đúng, không treo giao diện** | 9 | M1 | 2.1 | Chiến |
| 2.4.1 | Khung kiểm thử và baseline MT-06 | Dựng hạ tầng unit test và CI; đo baseline MT-06 trên quy trình thủ công hiện tại với kịch bản chuẩn 5 cảnh / 60 giây / có ảnh | Khung kiểm thử, báo cáo baseline MT-06 (DL-02) | Baseline MT-06 đo trên ≥ 10 người và được ghi vào Benefit Management Plan **trước khi kết thúc M1** (xử lý rủi ro BR-02) | 7 | M1 | 1.2 | Chiến |
| 2.4.2 | Kiểm chứng tính xác định và bộ nhớ | Kịch bản đo bộ nhớ đỉnh khi xuất video 1 phút và 10 phút; so sánh checksum luồng video trên 3 máy khác cấu hình; **kiểm tra lưu lượng rời trình duyệt, tách riêng nội dung với request giấy phép** | Báo cáo MT-07, MT-08, MT-09 (DL-05) | OB-02 ≤ 1,15; OB-03 giống nhau 3/3; **OB-09 bằng 0 byte nội dung người dùng** — request giấy phép được kiểm tra riêng và xác nhận chỉ mang token | 14 | M4 | 5.1.3 | Chiến |
| 2.4.3 | Độ tin cậy và độ phủ kiểm thử | Bộ kiểm thử 100 lần xuất trên các trình duyệt mục tiêu; nâng độ phủ kiểm thử của mô-đun bộ dựng, mã hoá và giấy phép | Báo cáo kiểm thử và độ phủ (DL-07) | OB-06 ≥ 95%; OB-12 độ phủ ≥ 70% | 6 | M6 | 2.4.2, 7.3 | Chiến |

### 5.3. Nhánh 3 — F1: Soạn video bằng biểu mẫu ★

| Mã | Tên | Mô tả phạm vi | Đầu ra | Tiêu chí chấp nhận | Giờ | Mốc | Phụ thuộc | Phụ trách |
| -- | --- | ------------- | ------ | ------------------ | --: | --- | --------- | --------- |
| 3.1.1 | Khung soạn thảo và danh sách cảnh | Bố cục ứng dụng; danh sách cảnh: thêm, xoá, sắp xếp lại, đặt thời lượng, chọn mẫu | Giao diện soạn thảo (DL-06) | Tạo, sắp xếp và xoá cảnh sinh ra Scene JSON hợp lệ theo gói 2.1 | 14 | M5 | 2.1, 3.2.2 | Anh |
| 3.1.2 | Biểu mẫu nhập nội dung theo mẫu | Sinh biểu mẫu từ khai báo trường của từng mẫu; xác thực đầu vào; người dùng không phải viết JSON | Mô-đun biểu mẫu | RQ-07 đạt: tạo được video hoàn chỉnh mà không mở trình soạn JSON lần nào | 13 | M5 | 3.1.1 | Anh |
| 3.2.1 | Thiết kế và duyệt 5 mẫu | Thiết kế thị giác 5 mẫu (tiêu đề, danh sách, ảnh + chữ, so sánh, kết thúc); mua và kiểm tra giấy phép tài sản đồ hoạ | Bộ thiết kế mẫu, hồ sơ giấy phép tài sản (DL-03) | OB-04 ≥ 5 mẫu được Trưởng nhóm sản phẩm duyệt; NF-08 và CT-05 đạt — mọi tài sản có quyền phân phối lại **trong sản phẩm thương mại mã nguồn đóng**; chi phí ≤ 700.000 VND | 11 | M2 | 2.1 | Anh |
| 3.2.2 | Hiện thực 5 mẫu | Chuyển thiết kế thành mẫu chạy được trên bộ dựng; khai báo trường nội dung cho biểu mẫu | Thư viện mẫu (DL-04) | Cả 5 mẫu dựng đúng ở 1920×1080, 30 fps và vượt bộ kiểm thử hình ảnh | 15 | M3 | 2.2.2, 3.2.1 | Anh |
| 3.2.3 | Typography tiếng Việt | Xử lý dấu, ngắt dòng, canh chỉnh cho tiếng Việt trên mọi mẫu; tích hợp font SIL OFL (Be Vietnam Pro, Noto Sans) | Mô-đun typography + bộ kiểm thử 134 tổ hợp dấu | OB-07 đạt 100% ký tự đúng trên bộ 134 tổ hợp dấu, cả khung ngang và dọc | 12 | M3 | 3.2.2 | Anh |
| 3.3 | Chèn ảnh từ máy người dùng | Chọn ảnh cục bộ, nhúng vào cảnh, giới hạn kích thước, giải phóng tài nguyên sau khi dựng | Mô-đun nhập ảnh (DL-06) | RQ-09 đạt; ảnh không rời khỏi trình duyệt (kiểm tra bằng tab Network) | 10 | M5 | 3.1.2 | Anh |
| 3.4 | Kiểm thử người dùng | Buổi kiểm thử với 10 người dùng mới, không hướng dẫn trước; đo thời gian tạo video đầu tiên và ghi nhận điểm vướng, **gồm cả bước đăng ký tài khoản** | Báo cáo kiểm thử người dùng (DL-07) | OB-08 đạt: ≥ 8/10 người hoàn thành trong ≤ 10 phút **tính từ lúc mở trang, gồm cả đăng ký**; đo lại MT-06 để so với baseline | 4 | M6 | 3.1.2, 5.3, 7.3 | Anh |

> **Cảnh báo về OB-08.** Việc bắt buộc có tài khoản làm tăng thời gian tới video đầu tiên, trong khi ngưỡng OB-08 vẫn giữ ở 10 phút. Bước đăng ký phải được thiết kế ở mức tối thiểu (email + mật khẩu, không xác minh nhiều bước) để không tiêu mất phần lớn ngân sách thời gian này.

### 5.4. Nhánh 4 — F2: Xem trước trong trình duyệt

| Mã | Tên | Mô tả phạm vi | Đầu ra | Tiêu chí chấp nhận | Giờ | Mốc | Phụ thuộc | Phụ trách |
| -- | --- | ------------- | ------ | ------------------ | --: | --- | --------- | --------- |
| 4.1 | Trình xem trước theo khung hình | Phát, tạm dừng, tua theo khung hình, dùng chung bộ dựng của 2.2; hiển thị số khung và mốc thời gian hiện tại | Chức năng xem trước (DL-04) | RQ-05 đạt; khung hình xem trước trùng khớp khung hình xuất ra tại cùng số thứ tự | 8 | M3 | 2.2.3 | Anh |

> **Ghi chú phạm vi.** Xem trước **không yêu cầu giấy phép** — người dùng bậc miễn phí xem trước không giới hạn, chỉ thao tác xuất mới bị kiểm. Đây là quyết định có chủ đích: xem trước là nơi người dùng nhận ra sản phẩm đáng trả tiền, nên chặn nó là chặn chính kênh chuyển đổi (MT-16).

### 5.5. Nhánh 5 — F3: Xuất MP4 không giới hạn độ dài ★

| Mã | Tên | Mô tả phạm vi | Đầu ra | Tiêu chí chấp nhận | Giờ | Mốc | Phụ thuộc | Phụ trách |
| -- | --- | ------------- | ------ | ------------------ | --: | --- | --------- | --------- |
| 5.1.1 | Nguyên mẫu mã hoá theo luồng | Nguyên mẫu chứng minh vòng lặp mã hoá → ghép → ghi → giải phóng bộ nhớ theo từng khung hoạt động được; xác minh vấn đề bản quyền H.264 (RS-07); chuẩn bị phương án dự phòng VP9/WebM | Nguyên mẫu + báo cáo khả thi (DL-03) | **Chứng minh bộ nhớ đỉnh không tăng theo độ dài video.** Đây là tiêu chí sống còn của mốc M2 — không đạt thì kích hoạt phương án giảm phạm vi ngay, không lùi ngày bàn giao (RS-01) | 28 | M2 | 2.2.1 | Quang |
| 5.1.2 | Chụp khung hình và VideoEncoder | Vẽ trạng thái DOM của từng khung lên canvas; cấu hình và điều khiển `VideoEncoder`; xử lý keyframe và bitrate; **nhận cấu hình độ phân giải và watermark từ kết quả kiểm giấy phép** | Mô-đun chụp và mã hoá (DL-05) | Xuất được luồng video hợp lệ ở 1920×1080, 30 fps từ Scene JSON bất kỳ; luồng ở bậc miễn phí bị giới hạn đúng 720p | 25 | M4 | 5.1.1, 2.2.3 | Quang |
| 5.1.3 | Muxer MP4 và ghi theo luồng | Ghép luồng video thành MP4 theo từng phần; ghi dần ra đĩa; xử lý backpressure giữa bộ mã hoá và bộ ghi | Muxer + đường ghi theo luồng (DL-05) | RQ-03 đạt: file MP4 mở được bằng trình phát phổ thông; bộ nhớ không tích luỹ theo số khung đã xử lý | 29 | M4 | 5.1.2, 5.2 | Quang |
| 5.1.4 | Tối ưu vòng giải phóng bộ nhớ | Rà soát và loại bỏ tham chiếu còn giữ khung hình đã xử lý; tinh chỉnh để đạt ngưỡng hiệu năng | Bản vá tối ưu + báo cáo đo (DL-05) | OB-01 ≤ 1,5× thời lượng video trên máy tham chiếu; NF-02 đạt | 8 | M4 | 5.1.3 | Chiến |
| 5.2 | Bộ ghi file | Ghi qua File System Access API; dự phòng OPFS cho trình duyệt không hỗ trợ; thông báo giới hạn theo trình duyệt | Mô-đun ghi file (DL-04) | Ghi thành công trên Chromium qua FSA và trên Firefox/Safari qua OPFS (xử lý rủi ro RS-03) | 12 | M3 | 2.3 | Chiến |
| 5.3 | Hộp thoại xuất | Thanh tiến trình theo khung hình, ước lượng thời gian còn lại, nút tạm dừng và huỷ, giải phóng tài nguyên khi huỷ; **hiển thị kết quả kiểm giấy phép trước khi bắt đầu** | Giao diện xuất video (DL-06) | RQ-04 đạt: tạm dừng rồi tiếp tục cho ra file giống hệt file xuất liền mạch; huỷ không để lại file dở dang; **mất mạng được báo trước khi mã hoá bắt đầu, không giữa chừng** | 8 | M5 | 5.1.3, 3.1.1, 7.2 | Anh |

### 5.6. Nhánh 6 — F4: Lưu và mở lại dự án

| Mã | Tên | Mô tả phạm vi | Đầu ra | Tiêu chí chấp nhận | Giờ | Mốc | Phụ thuộc | Phụ trách |
| -- | --- | ------------- | ------ | ------------------ | --: | --- | --------- | --------- |
| 6.1 | Ghi và đọc file dự án | Đóng gói Scene JSON kèm ảnh đã nhúng thành một file dự án; lưu ra máy và mở lại; xử lý file phiên bản cũ | Chức năng lưu/mở (DL-06) | RQ-08 đạt: lưu rồi mở lại cho ra đúng trạng thái soạn thảo trước đó, kể cả ảnh đã chèn | 8 | M5 | 5.2, 3.3 | Anh |

### 5.7. Nhánh 7 — F5: Tài khoản, thuê bao và giấy phép ★

| Mã | Tên | Mô tả phạm vi | Đầu ra | Tiêu chí chấp nhận | Giờ | Mốc | Phụ thuộc | Phụ trách |
| -- | --- | ------------- | ------ | ------------------ | --: | --- | --------- | --------- |
| 7.1 | Mô hình tài khoản và xác thực | Thiết kế lược đồ dữ liệu tài khoản – thuê bao – giấy phép; dựng máy chủ và cơ sở dữ liệu; đăng ký, đăng nhập, đặt lại mật khẩu; băm mật khẩu; triển khai và giám sát cơ bản | Máy chủ tài khoản + lược đồ dữ liệu (DL-03) | RQ-13 đạt: đăng ký, đăng nhập, đặt lại mật khẩu chạy được trên môi trường thật; NF-11 đạt — mật khẩu lưu dạng băm, không lưu thông tin thẻ; giám sát thời gian hoạt động đã bật | 14 | M2 | 1.2 | Chiến |
| 7.2 | Cấp và kiểm giấy phép khi xuất | Cấp giấy phép theo bậc; đầu mối xác thực trước mỗi lần xuất; trả về quyền xuất kèm cấu hình bậc (watermark, trần độ phân giải); xử lý trường hợp giấy phép hết hạn hoặc không hợp lệ | Mô-đun giấy phép + đầu mối xác thực (DL-06) | **OB-13 đạt: 100% lần xuất được xác thực trước khi bắt đầu; không có giấy phép hợp lệ thì không xuất được.** NF-09 đạt: phản hồi ≤ 1 giây ở phân vị 95 | 12 | M5 | 7.1, 5.1.2 | Chiến |
| 7.3 | Hạn mức bậc miễn phí và watermark | Đếm số video đã xuất trong tháng theo tài khoản; áp watermark và trần 720p cho bậc miễn phí; thông báo khi chạm hạn mức và gợi ý nâng cấp | Mô-đun hạn mức (DL-06) | **OB-14 đạt: tài khoản miễn phí bị từ chối đúng ở video thứ 4 trong tháng, kèm thông báo rõ; 3 video đầu có watermark và tối đa 720p.** Bộ đếm reset đúng đầu tháng | 8 | M5 | 7.2 | Chiến |
| 7.4 | Cổng thanh toán, mua và gia hạn | Tích hợp cổng thanh toán nội địa; luồng mua thuê bao; webhook xác nhận giao dịch; cấp giấy phép tự động; luồng gia hạn và thông báo trước hạn; hoá đơn VAT cho bậc Doanh nghiệp | Luồng thanh toán (DL-07) | **OB-15 đạt: mua thuê bao thành công trên môi trường thật, giấy phép có hiệu lực tự động trong ≤ 5 phút, không thao tác tay.** Giao dịch thất bại không cấp giấy phép | 16 | M6 | 7.3 | Anh |
| 7.5 | Trang quản lý thuê bao | Xem bậc hiện tại, hạn dùng, số video còn lại trong tháng, lịch sử hoá đơn; quản lý 5 chỗ cho bậc Doanh nghiệp | Trang quản lý thuê bao (DL-07) | RQ-17 đạt: người dùng tự xem được trạng thái thuê bao và tải hoá đơn; quản trị viên bậc Doanh nghiệp thêm và gỡ được thành viên trong 5 chỗ | 10 | M6 | 7.4 | Anh |

> **Cảnh báo ước lượng — nhánh này rủi ro nhất về giờ công.** 60 giờ cho một máy chủ có xác thực, giấy phép, hạn mức và tích hợp thanh toán là mức eo hẹp (AS-48). Ba biện pháp giảm thiểu: dùng thư viện xác thực và SDK cổng thanh toán có sẵn thay vì tự viết; **dựng gói 7.1 ngay tại M2** để phát hiện sớm nếu ước lượng sai, khi còn 10 tuần để xử lý; và rà lại ước lượng của 7.2 → 7.5 vào cuối M2.

> **Gói 7.4 phụ thuộc một bên ngoài tầm kiểm soát.** Hồ sơ cổng thanh toán do Bên A nộp tại M2 và có thể mất tới 4 tuần để duyệt (AS-43, RS-10). Nếu đến M6 chưa duyệt xong, gói 7.4 bàn giao cơ chế kích hoạt giấy phép thủ công và OB-15 được hoãn nghiệm thu theo Hợp đồng §6.

### 5.8. Nhánh 8 — Phát hành và tài liệu

| Mã | Tên | Mô tả phạm vi | Đầu ra | Tiêu chí chấp nhận | Giờ | Mốc | Phụ thuộc | Phụ trách |
| -- | --- | ------------- | ------ | ------------------ | --: | --- | --------- | --------- |
| 8.1 | Tài liệu người dùng và tài liệu vận hành | Hướng dẫn sử dụng tiếng Việt, ma trận trình duyệt hỗ trợ, xử lý sự cố thường gặp; **tài liệu vận hành máy chủ: triển khai, sao lưu, giám sát, quy trình khôi phục sự cố** | Tài liệu hướng dẫn + tài liệu vận hành (DL-07) | Người dùng trong buổi kiểm thử 3.4 tự xử lý được sự cố bằng tài liệu; **quy trình khôi phục được diễn tập một lần và Nhà tài trợ thực hiện được theo tài liệu mà không cần hỏi đội** | 5 | M6 | 3.4, 7.5 | Anh |
| 8.2 | Triển khai và rà soát giấy phép | Triển khai ứng dụng tĩnh lên CDN, cấu hình tên miền và chứng chỉ cho cả ứng dụng và máy chủ; rà soát giấy phép toàn bộ thư viện phụ thuộc | Bản triển khai công khai + báo cáo rà soát giấy phép (DL-07) | NF-07 đạt: mọi phụ thuộc thuộc MIT / Apache-2.0 / BSD / SIL OFL, **không có GPL/AGPL** — bắt buộc vì sản phẩm mã nguồn đóng; ứng dụng và máy chủ truy cập được qua tên miền | 3 | M6 | 2.4.3, 7.5 | Chiến |

<div style="page-break-after: always"></div>

## 6. Ba tính năng nghiệp vụ chính

Yêu cầu công việc của môn học đòi hỏi dự án có **ít nhất 3 tính năng nghiệp vụ (deliverable) chính**, không tính các chức năng phụ như đăng ký, đăng nhập. Ba tính năng dưới đây được đề cử:

| # | Tính năng | WBS | Giờ | Mục tiêu đo được | Nghiệm thu bằng |
| - | --------- | --- | --: | ---------------- | --------------- |
| 1 | **Soạn video trình chiếu bằng biểu mẫu** — nhập nội dung qua form, chọn trong thư viện ≥ 5 mẫu, chèn ảnh, không phải viết JSON | Nhánh 3 | 79 | OB-04, OB-07, OB-08 | Người dùng mới tạo xong video đầu tiên trong ≤ 10 phút |
| 2 | **Xuất video MP4 không giới hạn độ dài, mã hoá hoàn toàn trên máy người dùng** | Nhánh 5 | 110 | OB-01, OB-02, OB-03, OB-09 | Xuất video 10 phút với bộ nhớ đỉnh tăng ≤ 15% so với video 1 phút; 0 byte nội dung rời khỏi trình duyệt |
| 3 | **Thuê bao và giấy phép sử dụng** — bậc miễn phí có hạn mức, mua và gia hạn thuê bao, giấy phép kiểm ở máy chủ trước mỗi lần xuất | Nhánh 7 | 60 | OB-13, OB-14, OB-15 | Mua thuê bao thành công và giấy phép có hiệu lực tự động ≤ 5 phút; tài khoản miễn phí bị chặn đúng ở video thứ 4 trong tháng |

Ba tính năng này chiếm **249 giờ, tức 55,3%** tổng ngân sách công sức.

**Vì sao tính năng số 3 không phải là "chức năng phụ".** Đề bài loại trừ đăng ký và đăng nhập khỏi diện đếm, và điều đó được tôn trọng: trong 60 giờ của nhánh 7, phần **đăng ký – đăng nhập thuần tuý chỉ chiếm khoảng 14 giờ** (gói 7.1). 46 giờ còn lại là **cơ chế giấy phép, hạn mức, thanh toán và gia hạn** — tức là cách sản phẩm thu tiền, có quy tắc nghiệp vụ riêng (bậc, hạn mức tháng, watermark, trần độ phân giải, chu kỳ gia hạn) và có tiêu chí nghiệm thu mà Nhà tài trợ kiểm chứng trực tiếp. Nếu chỉ tính phần này, tính năng số 3 vẫn đủ trọng lượng để đứng độc lập.

**Hai tính năng còn lại — F2 Xem trước (nhánh 4) và F4 Lưu/mở dự án (nhánh 6) — là tính năng hỗ trợ**, không đưa vào diện đếm. Giờ công của chúng thấp (8 và 8 giờ) chính vì chúng tái sử dụng gần như toàn bộ nền tảng lõi và bộ ghi file đã dựng cho ba tính năng chính; đây là chỉ dấu kiến trúc tốt, không phải dấu hiệu phạm vi bị cắt.

**Đối chiếu các ràng buộc còn lại của đề bài:**

| Ràng buộc đề bài | Giá trị dự án | Trạng thái |
| ---------------- | ------------- | ---------- |
| Kinh phí < 1.000.000.000 VND | 3.500.000 VND tiền mặt + 450 giờ công (quy đổi 36.000.000 VND) | Đạt, biên rất rộng |
| Thời gian ≤ 6 tháng | 15 tuần (2026-08-24 → 2026-12-06) | Đạt |
| ≥ 3 tính năng nghiệp vụ chính | 5 tính năng nghiệp vụ, trong đó 3 tính năng chính | Đạt |
| Không tính chức năng phụ (đăng ký, đăng nhập…) | Gói 7.1 (14 giờ) là phần đăng ký – đăng nhập và **không được tính** vào trọng lượng tính năng số 3 | Đã trừ, tính năng vẫn đủ trọng lượng |

---

## 7. Ma trận truy vết

Mọi yêu cầu trong Charter phải được ít nhất một gói công việc thực hiện; mọi gói công việc phải phục vụ ít nhất một yêu cầu. Ba bảng dưới kiểm chứng cả hai chiều.

### 7.1. Yêu cầu chức năng → WBS

| RQ | Nội dung tóm tắt | Gói công việc | Mục tiêu kiểm chứng |
| -- | ---------------- | ------------- | ------------------- |
| RQ-01 | Định nghĩa và xác thực Scene JSON | 2.1 | — |
| RQ-02 | Bộ dựng theo số khung hình | 2.2.1, 2.2.2 | OB-03 |
| RQ-03 | Xuất MP4 theo luồng | 5.1.1, 5.1.2, 5.1.3, 5.1.4 | OB-01, OB-02 |
| RQ-04 | Tiến trình, tạm dừng, huỷ | 5.3 | — |
| RQ-05 | Xem trước trong trình duyệt | 4.1 | — |
| RQ-06 | Thư viện ≥ 5 mẫu | 3.2.1, 3.2.2 | OB-04 |
| RQ-07 | Nhập nội dung bằng biểu mẫu | 3.1.1, 3.1.2 | OB-08 |
| RQ-08 | Lưu và mở lại dự án | 6.1 | — |
| RQ-09 | Chèn ảnh từ máy người dùng | 3.3 | — |
| RQ-10 | Phát hiện trình duyệt không hỗ trợ và mất kết nối | 2.3 | — |
| RQ-12 | Hiệu ứng chuyển cảnh | 2.2.3 | — |
| RQ-13 | Tài khoản và đăng nhập | 7.1 | — |
| RQ-14 | Cấp và kiểm giấy phép trước mỗi lần xuất | 7.2 | **OB-13** |
| RQ-15 | Hạn mức bậc miễn phí, watermark, trần độ phân giải | 7.3, 5.1.2 | **OB-14** |
| RQ-16 | Mua và gia hạn thuê bao qua cổng thanh toán | 7.4 | **OB-15** |
| RQ-17 | Trang quản lý thuê bao | 7.5 | — |

### 7.2. Yêu cầu phi chức năng → WBS

| NF | Ngưỡng | Gói công việc |
| -- | ------ | ------------- |
| NF-01 | Xuất ≤ 1,5× thời lượng video | 5.1.4, 2.4.2 |
| NF-02 | Bộ nhớ tăng ≤ 15% khi độ dài tăng 10 lần | 5.1.1, 5.1.3, 5.1.4, 2.4.2 |
| NF-03 | 0 byte nội dung rời khỏi trình duyệt | 3.3, 2.4.2 |
| NF-04 | Đầu ra xác định 100% | 2.2.2, 2.4.2 |
| NF-05 | Tiếng Việt 100% ký tự đúng | 3.2.3 |
| NF-06 | Chỉ cần trình duyệt; cần kết nối khi xuất | 2.3, 8.2 |
| NF-07 | Giấy phép thư viện phụ thuộc | 8.2 |
| NF-08 | Giấy phép tài sản đồ hoạ | 3.2.1 |
| NF-09 | Máy chủ giấy phép phản hồi ≤ 1 giây (p95) | 7.2 |
| NF-10 | Thời gian hoạt động máy chủ ≥ 99%/tháng | 7.1, 8.1 |
| NF-11 | Băm mật khẩu, không lưu thông tin thẻ | 7.1 |

### 7.3. Sản phẩm bàn giao → WBS

| DL | Mốc | Gói công việc |
| -- | --- | ------------- |
| DL-01 | M0 | 1.1 |
| DL-02 | M1 | 1.2, 2.1, 2.3, 2.4.1 |
| DL-03 | M2 | 2.2.1, 3.2.1, 5.1.1, 7.1 |
| DL-04 | M3 | 2.2.2, 2.2.3, 3.2.2, 3.2.3, 4.1, 5.2 |
| DL-05 | M4 | 2.4.2, 5.1.2, 5.1.3, 5.1.4 |
| DL-06 | M5 | 3.1.1, 3.1.2, 3.3, 5.3, 6.1, 7.2, 7.3 |
| DL-07 | M6 | 2.4.3, 3.4, 7.4, 7.5, 8.1, 8.2 |
| DL-08 | M7 | 1.4 |

**Kiểm tra hai chiều:** 16/16 RQ, 11/11 NF và 8/8 DL đều được phủ. **33 trong 34 gói công việc** xuất hiện ở ít nhất một dòng trong ba bảng trên. Gói còn lại là **1.3 — Điều hành, báo cáo và kiểm soát thay đổi**, là công việc quản trị chạy liên tục từ M1 đến M6 và không sinh ra một sản phẩm bàn giao có mã DL; đầu ra của nó (biên bản họp tuần, nhật ký thay đổi, bảng chấm công) được nghiệm thu tại chính gói đó. Ghi rõ ngoại lệ này để bảng truy vết không tuyên bố một mức phủ mà nó không có.

---

## 8. Phân bổ công sức

### 8.1. Theo mốc — đối chiếu với Charter §8.4

| Mốc | Gói công việc | Giờ WBS | Giờ Charter §8.4 | Chênh |
| --- | ------------- | ------: | ---------------: | ----: |
| M0 | 1.1 | 23 | 23 | 0 |
| M1 | 1.2, 1.3¹, 2.1, 2.3, 2.4.1 | 48 | 48 | 0 |
| M2 | 1.3¹, 2.2.1, 3.2.1, 5.1.1, 7.1 | 67 | 67 | 0 |
| M3 | 1.3¹, 2.2.2, 2.2.3, 3.2.2, 3.2.3, 4.1, 5.2 | 101 | 101 | 0 |
| M4 | 1.3¹, 2.4.2, 5.1.2, 5.1.3, 5.1.4 | 78 | 78 | 0 |
| M5 | 1.3¹, 3.1.1, 3.1.2, 3.3, 5.3, 6.1, 7.2, 7.3 | 74 | 74 | 0 |
| M6 | 1.3¹, 2.4.3, 3.4, 7.4, 7.5, 8.1, 8.2 | 45 | 45 | 0 |
| M7 | 1.4 | 14 | 14 | 0 |
| | **TỔNG** | **450** | **450** | **0** |

¹ Gói 1.3 trải suốt M1–M6, phân bổ 2 / 2 / 4 / 2 / 1 / 1 giờ theo từng mốc.

WBS **không làm thay đổi baseline ngân sách công sức**. Nếu về sau việc phân rã chi tiết hơn cho thấy tổng vượt 450 giờ, đó là yêu cầu thay đổi phải trình Nhà tài trợ theo Charter §8.5, không phải điều chỉnh âm thầm trong tài liệu này.

### 8.2. Theo người

| Thành viên | Vai trò | Gói công việc phụ trách | Giờ | % |
| ---------- | ------- | ----------------------- | --: | --: |
| Nguyễn Việt Quang | Trưởng nhóm kỹ thuật (SH-03) | 2.1, 2.2.1, 2.2.2, 5.1.1, 5.1.2, 5.1.3 | 152 | 33,8% |
| Nguyễn Thế Chiến | Giám đốc dự án (SH-02) | 1.1, 1.2, 1.3, 1.4, 2.3, 2.4.1, 2.4.2, 2.4.3, 5.1.4, 5.2, 7.1, 7.2, 7.3, 8.2 | 152 | 33,8% |
| Phạm Quang Anh | Trưởng nhóm sản phẩm (SH-04) | 2.2.3, 3.1.1, 3.1.2, 3.2.1, 3.2.2, 3.2.3, 3.3, 3.4, 4.1, 5.3, 6.1, 7.4, 7.5, 8.1 | 146 | 32,4% |
| | | **TỔNG** | **450** | **100%** |

Mức chia đều là 150 giờ/người. Chênh lệch lớn nhất là **+2 giờ (Quang và Chiến, 101%)** và **−4 giờ (Anh, 97%)**, nằm gọn trong dung sai ±10% mà Charter §8.5 dùng làm ngưỡng.

**Bốn lưu ý về phân công:**

1. **Quang gánh toàn bộ đường găng kỹ thuật.** Cả 6 gói việc của Quang đều nằm trên chuỗi 2.1 → 2.2.1 → 2.2.2 / 5.1.1 → 5.1.2 → 5.1.3. Đây là hiện thân cụ thể của rủi ro RS-02: đội 3 người thì mất 1 người là mất 1/3 năng lực, và ở đây mất đúng người đang giữ đường găng. Biện pháp: Chiến tham gia cùng ở gói 5.1.4 và 5.2 để không tập trung toàn bộ kiến thức mã hoá vào một người.
2. **Chiến giữ toàn bộ phần máy chủ ở nửa đầu, Anh nhận phần thanh toán ở nửa cuối.** Gói 7.1 → 7.3 (34 giờ, giấy phép và hạn mức) giao Chiến vì nó gắn chặt với các phép đo an toàn và kiểm chứng ở nhánh 2.4. Gói 7.4 → 7.5 (26 giờ, thanh toán và trang quản lý) giao Anh vì đó là luồng người dùng chạm vào và trực tiếp quyết định tỷ lệ chuyển đổi. **Rủi ro của cách chia này là kiến thức về máy chủ nằm ở hai người khác nhau** — hai người phải cùng dự buổi thiết kế lược đồ dữ liệu tại gói 7.1.
3. **Phân công không trùng ranh giới nhánh WBS — và đó là chủ đích.** Gói 2.2.3 (chuyển cảnh) thuộc nhánh nền tảng nhưng giao cho Anh vì nó là lớp thị giác, liền mạch với thư viện mẫu. Gói 5.1.4 (tối ưu bộ nhớ) thuộc nhánh xuất video nhưng giao cho Chiến vì người đo bộ nhớ ở gói 2.4.2 cũng là người tối ưu. WBS mô tả việc, phân công theo kỹ năng — hai thứ cố ý tách nhau.
4. **Chiến kiêm cả quản trị lẫn kỹ thuật.** 59 trong 152 giờ của Chiến là quản trị dự án, 93 giờ còn lại là công việc kỹ thuật, trong đó 34 giờ là nhánh máy chủ ở M2 và M5. Với đội 3 người không có phương án nào khác; nhưng nghĩa là khi dự án trượt tiến độ, khối lượng quản trị tăng lên sẽ trực tiếp lấn vào các gói 7.2 và 7.3 ở mốc M5 — đúng những gói quyết định OB-13 và OB-14.

### 8.3. Theo control account

| Control account | Giờ | Người chịu trách nhiệm giờ công | Ngưỡng cảnh báo (120%) |
| --------------- | --: | ------------------------------- | ---------------------: |
| 1. Quản trị dự án | 59 | Chiến | 71 |
| 2. Nền tảng lõi | 118 | Quang | 142 |
| 3. F1 — Soạn video | 79 | Anh | 95 |
| 4. F2 — Xem trước | 8 | Anh | 10 |
| 5. F3 — Xuất MP4 | 110 | Quang | 132 |
| 6. F4 — Lưu/mở dự án | 8 | Anh | 10 |
| 7. F5 — Tài khoản và thuê bao | 60 | Chiến | 72 |
| 8. Phát hành và tài liệu | 8 | Anh | 10 |

---

## 9. Đường găng và ràng buộc lịch

### 9.1. Chuỗi găng

```
2.1 Scene Schema (M1)
   └─→ 2.2.1 Kiến trúc bộ dựng (M2)
          ├─→ 2.2.2 Bộ dựng lõi (M3) ─→ 2.2.3 Timeline (M3) ─┐
          └─→ 5.1.1 Nguyên mẫu mã hoá (M2) ──────────────────┤
                                                             ↓
                                        5.1.2 Chụp + Encoder (M4)
                                             └─→ 5.1.3 Muxer + ghi luồng (M4)
                                                    └─→ 5.1.4 Tối ưu (M4)
                                                           └─→ 2.4.2 Kiểm chứng (M4)
                                                                  ↓
                    7.1 Tài khoản (M2) ──→ 7.2 Kiểm giấy phép (M5)
                                                └─→ 7.3 Hạn mức (M5)
                                                       └─→ 7.4 Thanh toán (M6)
                                                              └─→ 7.5 Quản lý thuê bao (M6)
                                                                     └─→ 8.1, 8.2 (M6) ─→ 1.4 (M7)
```

Chuỗi này đi qua M1 → M2 → M3 → M4 → M5 → M6, và **dài hơn đường găng của một sản phẩm không có phần thu tiền**: gói 7.2 không thể bắt đầu trước khi chức năng xuất video tồn tại ở M4, vì không thể kiểm giấy phép cho một thao tác chưa có. Hệ quả là **chuỗi găng chạy suốt tới M6** thay vì kết thúc ở M4.

Gói 2.1 Scene Schema vẫn là nút thắt sớm nhất: chốt trễ định dạng Scene JSON thì các gói 2.2.2, 3.1.1, 3.2.2 và 6.1 đều đứng.

**Gói 7.1 được đặt sớm có chủ đích.** Về mặt phụ thuộc, mô hình tài khoản có thể làm muộn hơn. Nó được kéo lên M2 vì ba lý do: ước lượng của cả nhánh 7 dựa trên giả định AS-48 chưa được kiểm chứng, đặt sớm thì sai lệch lộ ra khi còn 10 tuần để xử lý; hồ sơ cổng thanh toán cần nộp ở M2 nên cần biết lược đồ dữ liệu; và việc dựng máy chủ sớm cho phép giám sát thời gian hoạt động chạy đủ lâu trước khi đo OB-16.

### 9.2. Điểm quyết định tại M2

Gói **5.1.1 Nguyên mẫu mã hoá theo luồng** là gói việc duy nhất trong WBS có thể một mình làm hỏng dự án. Nếu tiêu chí chấp nhận của nó không đạt vào cuối M2, phương án đã định sẵn tại Charter §7 là **giảm phạm vi ngay, không lùi ngày bàn giao**. Thứ tự cắt đề xuất, từ ít thiệt hại nhất:

| Thứ tự cắt | Hạng mục | Giờ thu hồi | Mất gì |
| ---------- | -------- | ----------: | ------ |
| 1 | Chuyển sang xuất WebM/VP9 thay MP4 | 0 (đổi phương án, không thu hồi giờ) | Tương thích với trình phát phổ thông kém hơn |
| 2 | Nhánh 6 — Lưu và mở lại dự án | 8 | RQ-08 |
| 3 | Giảm thư viện mẫu từ 5 xuống 3 (gói 3.2.1, 3.2.2) | ~10 | OB-04 không đạt |
| 4 | Nhánh 4 — Xem trước | 8 | RQ-05 |
| 5 | Rút gọn gói 7.5 xuống mức xem thông tin, bỏ quản lý 5 chỗ | ~4 | RQ-17 đạt một phần |

**Nhánh 7 gần như không nằm trong danh sách cắt.** Chỉ gói 7.5 — phần giao diện quản lý — được rút gọn ở bước cuối cùng. Các gói 7.1 → 7.4 không được cắt vì cắt chúng là xoá bỏ mô hình doanh thu M1 của Business Case; thiệt hại thuộc loại khác hẳn so với việc mất một tính năng người dùng, và Charter §11.2 đặt việc này ngoài thẩm quyền của Giám đốc dự án.

**Một điểm quyết định thứ hai, ở M6.** Nếu hồ sơ cổng thanh toán chưa duyệt xong, gói 7.4 chuyển sang phương án kích hoạt giấy phép thủ công. Đây không phải cắt phạm vi mà là hoãn nghiệm thu một mục tiêu (OB-15), và cách xử lý đã được ghi vào Hợp đồng §6 để không phải thương lượng khi sự việc xảy ra.

### 9.3. Ràng buộc lịch bên ngoài

| Ràng buộc | Nguồn | Ảnh hưởng tới WBS |
| --------- | ----- | ----------------- |
| Kết thúc trước 2026-12-06 | CT-01 | Biên an toàn bằng không; gói 1.4 không có chỗ trượt |
| 450 giờ, 3 người bán thời gian 10 giờ/tuần | CT-04 | Năng lực đúng 30 giờ/tuần và tổng nhu cầu cũng đúng 450 giờ — **mọi tuần phải chạy ở 100%**. Xem bảng dưới |
| Baseline MT-06 phải đo trước M1 | Benefit Management Plan, rủi ro BR-02 | Gói 2.4.1 không được lùi sang M2 dù chỉ 7 giờ |
| Hồ sơ cổng thanh toán mất tới 4 tuần | AS-43, RS-10 | Gói 7.4 ở M6 phụ thuộc một việc phải khởi động từ M2 — không nằm trong tay đội |
| Mùa thi không rơi vào tuần 4–12 | AS-24 | Nếu sai, giai đoạn 33–39 giờ/tuần mất năng lực đúng lúc căng nhất |

**Tải theo tuần của từng mốc:**

| Mốc | Tuần | Giờ | Giờ/tuần | So với năng lực 30 giờ/tuần |
| --- | ---- | --: | -------: | --------------------------- |
| M0 | 1 | 23 | 23,0 | 77% |
| M1 | 2–3 | 48 | 24,0 | 80% |
| M2 | 4–5 | 67 | 33,5 | **112%** |
| M3 | 6–8 | 101 | 33,7 | **112%** |
| M4 | 9–10 | 78 | 39,0 | **130%** — tuần căng nhất |
| M5 | 11–12 | 74 | 37,0 | **123%** |
| M6 | 13–14 | 45 | 22,5 | 75% |
| M7 | 15 | 14 | 14,0 | 47% |

Bốn mốc M2 → M5 chạy trên năng lực danh nghĩa, và phần vượt đó **chỉ được bù bằng phần dưới mức ở M0, M1, M6 và M7**. Đây là hệ quả toán học không tránh được: tổng 450 giờ đúng bằng tổng năng lực 15 tuần × 30 giờ, nên bất kỳ tuần nào chạy dưới 100% đều buộc một tuần khác chạy trên 100%.

Bảng này được đưa vào tài liệu để việc lập lịch chi tiết ở Schedule Management Plan làm việc với con số thật, thay vì phát hiện ra vấn đề khi đã trượt mốc. Hai cách xử lý khả dĩ, cả hai đều cần quyết định của Nhà tài trợ: **dồn giờ trước** (đội làm vượt 10 giờ/tuần ở M0, M1 để tích luỹ đệm cho M4, M5), hoặc **giảm phạm vi trước** theo thứ tự cắt tại §9.2. Không có phương án thứ ba nào nằm trong ràng buộc CT-01 và CT-04.

---

## 10. Phần chưa phân rã và quy tắc cập nhật

### 10.1. Planning package

Toàn bộ 450 giờ đã được phân rã tới cấp gói công việc; **không còn planning package nào** ở phiên bản này. Ba vùng có độ tin cậy ước lượng thấp hơn phần còn lại và cần rà lại tại mốc liền trước:

| Vùng | Rà lại tại | Lý do |
| ---- | ---------- | ----- |
| Gói 5.1.2, 5.1.3 (54 giờ) | Cuối M2, sau khi có kết quả nguyên mẫu 5.1.1 | Ước lượng dựa trên giả định nguyên mẫu chạy được; kết quả M2 sẽ cho số liệu thật |
| Gói 7.2 → 7.5 (46 giờ) | Cuối M2, sau khi hoàn thành gói 7.1 | Ước lượng cả nhánh dựa trên giả định AS-48 chưa kiểm chứng; gói 7.1 là mẫu thử để hiệu chỉnh phần còn lại |
| Gói 7.4 (16 giờ) | Cuối M4, sau khi biết kết quả hồ sơ cổng thanh toán | Khối lượng tích hợp phụ thuộc tài liệu và SDK của nhà cung cấp, chỉ biết được sau khi hồ sơ được duyệt |

### 10.2. Quy tắc cập nhật

WBS là một phần của Scope Baseline. Sau khi được phê duyệt:

| Loại thay đổi | Xử lý |
| ------------- | ----- |
| Sửa mô tả, làm rõ tiêu chí chấp nhận, không đổi phạm vi và giờ | Cập nhật trực tiếp, không tăng phiên bản |
| Chuyển giờ giữa các gói **trong cùng một control account** | Giám đốc dự án quyết, ghi vào biên bản họp tuần, tăng phiên bản phụ (v2.0 → v2.1) |
| Chuyển giờ **giữa các control account**, thêm hoặc bỏ gói công việc | Yêu cầu thay đổi trình Nhà tài trợ theo Charter §10.3, tăng phiên bản phụ |
| Thay đổi tổng 450 giờ hoặc bỏ một nhánh cấp 1 | Yêu cầu thay đổi trình Nhà tài trợ kèm đánh giá tác động tới OB-11, tăng phiên bản chính (v2.x → v3.0) |

Mỗi lần tăng phiên bản phải cập nhật đồng thời: tên file, ô **Phiên bản** ở trang bìa, bảng *Lịch sử cập nhật*, bảng danh mục trong [docs/README.md](../README.md), và Schedule Management Plan nếu thay đổi chạm vào đường găng.

---

*Tài liệu liên quan: [Project Charter](../01_Initiating/01_Project_Charter_v2.2.md) · [Assumption Log](../01_Initiating/02_Assumption_Log_v2.2.md) · [Business Case](../00_Pre-project/01_Business_Case_v2.2.md) · [Benefit Management Plan](../00_Pre-project/02_Benefit_Management_Plan_v2.2.md)*
