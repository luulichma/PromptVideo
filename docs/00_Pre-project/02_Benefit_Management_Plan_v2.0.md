<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                     |                                |
| ------------------- | ------------------------------ |
| **Nhóm tiến trình** | Pre-project                    |
| **Tên tài liệu**    | Benefit Management Plan        |
| **Phiên bản**       | Ver. 2.0                       |
| **Nhóm thực hiện**  | Nhóm 02                        |
| **Ngày phát hành**  | 2026-08-27                     |
| **Trạng thái**      | Draft — chờ phê duyệt          |

<div style="page-break-after: always"></div>

<!-- ======================= TRANG 2 — XÁC NHẬN & LỊCH SỬ ======================= -->

## Xác nhận

| Người tạo       | Người kiểm tra  | Người xác nhận  |
| --------------- | --------------- | --------------- |
| Nguyễn Thế Chiến | Phạm Quang Anh | Phạm Quang Anh |
|                 | Nguyễn Việt Quang | Thầy Nguyễn Đình Quảng |

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| -- | --------- | ------------- | -------------- | ----------------- | --------------- | --------------- |
| 1  | Ver 1.0   | 2026-08-20    | Tạo mới        | Khởi tạo Benefit Management Plan: danh mục lợi ích, chỉ số đo, chủ sở hữu, lộ trình và cơ chế theo dõi | Nguyễn Thế Chiến | Phạm Quang Anh |
| 2  | Ver 1.1   | 2026-08-24    | Chỉnh sửa      | Tiếp nhận phần thẩm định tài chính từ Business Case: bổ sung §4 với NPV, BCR, Payback, ROI kèm công thức, bảng dòng tiền chiết khấu và phân tích độ nhạy | Nguyễn Thế Chiến | Phạm Quang Anh |
| 3  | Ver 2.0   | 2026-08-27    | Chỉnh sửa lớn  | Cập nhật danh mục lợi ích và toàn bộ §4 theo mô hình dịch vụ máy chủ thu phí thuê bao thường niên: dòng doanh thu, cấu trúc chi phí vận hành, kịch bản thuê bao, điểm hoà vốn. Bổ sung chỉ số tỷ lệ gia hạn và thời gian hoạt động của máy chủ | Nguyễn Thế Chiến | Phạm Quang Anh |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

## Mục lục

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Target Benefits](#2-target-benefits)
3. [Strategic Alignment](#3-strategic-alignment)
4. [Financial Appraisal — NPV, BCR, Payback, ROI](#4-financial-appraisal--npv-bcr-payback-roi)
5. [Timeframe for Realizing Benefits](#5-timeframe-for-realizing-benefits)
6. [Benefits Owner](#6-benefits-owner)
7. [Metrics](#7-metrics)
8. [Assumptions and Risks](#8-assumptions-and-risks)
9. [Benefits Realization Tracking](#9-benefits-realization-tracking)

<div style="page-break-after: always"></div>

<!-- ============================== NỘI DUNG ============================== -->

> **Ghi chú.** Tài liệu lập trên bối cảnh doanh nghiệp giả định (Enticy Studios), phục vụ môn Quản lý dự án phần mềm. Số liệu tài chính và quy mô thuê bao là giả định, đăng ký kèm nguồn tại **Assumption Log** (`01_Initiating/02_Assumption_Log_v2.0.md`) theo mã `AS-xx`.

---

## 1. Purpose and Scope

**Business Case** trả lời *có nên làm dự án này không*. Tài liệu này trả lời câu tiếp theo: **dự án tạo ra lợi ích gì, đáng bao nhiêu tiền, đo bằng cách nào, ai chịu trách nhiệm, và khi nào lợi ích được coi là đã hiện thực hoá.**

Nó tồn tại vì dự án kết thúc ở tuần 15 khi phần mềm được bàn giao, nhưng **phần lớn lợi ích chỉ xuất hiện sau đó**. Với một sản phẩm thuê bao, điều này còn đúng hơn bình thường: doanh thu Năm 1 chỉ là điểm khởi đầu, và giá trị thật của mô hình nằm ở việc khách hàng **gia hạn** — thứ chỉ kiểm chứng được sau 12 tháng vận hành.

| Trong phạm vi | Ngoài phạm vi |
| ------------- | ------------- |
| Lợi ích từ sản phẩm PromptVideo và dịch vụ thuê bao đi kèm | Lợi ích của sản phẩm khác trong danh mục Enticy Studios |
| Chu kỳ theo dõi 3 năm kể từ khi bàn giao | Lợi ích sau năm thứ 3 |
| Lợi ích cho người dùng cuối, tổ chức chủ quản và đội dự án | Lợi ích gián tiếp không đo được (ví dụ "uy tín thương hiệu") |
| Thẩm định tài chính toàn bộ vòng đời 3 năm | Định giá tài sản vô hình, định giá doanh nghiệp |

**Chuỗi truy vết:** `BO-xx` (mục tiêu nghiệp vụ — Business Case §1.1) → `OB-xx` (mục tiêu kỹ thuật đo được — Project Charter §3.1) → `BN-xx` (lợi ích — §2 tài liệu này) → `MT-xx` (chỉ số đo — §7 tài liệu này).

---

## 2. Target Benefits

**Nhóm lợi ích tài chính — theo mô hình doanh thu M1:**

| ID    | Lợi ích                     | Nguồn gốc | Chỉ số đo | Baseline | Mục tiêu Năm 1 | Mục tiêu Năm 2 | Mục tiêu Năm 3 | Chủ sở hữu |
| ----- | --------------------------- | --------- | --------- | -------- | -------------: | -------------: | -------------: | ---------- |
| BN-16 | Doanh thu thuê bao Cá nhân  | BO-08 | MT-13, MT-14 | 0 VND | 59.900.000<br>(100 thuê bao) | 191.680.000<br>(320 thuê bao) | 389.350.000<br>(650 thuê bao) | Nhà tài trợ |
| BN-17 | Doanh thu thuê bao Doanh nghiệp | BO-08 | MT-13, MT-14 | 0 VND | 14.700.000<br>(3 thuê bao) | 49.000.000<br>(10 thuê bao) | 98.000.000<br>(20 thuê bao) | Nhà tài trợ |
| BN-13 | Chi phí phục vụ mỗi thuê bao thấp | BO-08 | MT-18 | Không áp dụng | ≤ 65.000 VND | ≤ 50.000 VND | ≤ 45.000 VND | Nhà tài trợ |

**Nhóm lợi ích phi tài chính:**

| ID    | Lợi ích                                | Nguồn gốc | Chỉ số đo | Baseline                     | Mục tiêu                     | Thời điểm hiện thực hoá | Chủ sở hữu |
| ----- | -------------------------------------- | --------- | --------- | ---------------------------- | ---------------------------- | ----------------------- | ---------- |
| BN-14 | Giảm chi phí phần mềm cho người dùng    | BO-07 | — | 4,5–7 triệu VND/năm (180–276 USD) | **599.000 VND/năm** (giảm ≥ 85%) | Ngay khi phát hành | Trưởng nhóm sản phẩm |
| BN-06 | Rút ngắn thời gian tạo một video       | BO-01 | MT-06 | ~45 phút                     | ≤ 5 phút (giảm ≥ 85%)        | Ngay khi bàn giao  | Trưởng nhóm sản phẩm |
| BN-07 | Không giới hạn độ dài video            | BO-04 | MT-07 | Hạn mức theo gói ở công cụ hiện có | Tăng bộ nhớ ≤ 15% khi độ dài tăng 10 lần | Mốc M4 (tuần 10) | Trưởng nhóm kỹ thuật |
| BN-08 | Đầu ra xác định, lặp lại được          | — | MT-08 | Không đảm bảo | 100% (3/3 máy) | Mốc M4 (tuần 10) | Trưởng nhóm kỹ thuật |
| BN-09 | Nội dung không rời khỏi máy người dùng | BO-03 | MT-09 | Toàn bộ nội dung được upload | 0 byte nội dung              | Mốc M4 (tuần 10)        | Trưởng nhóm kỹ thuật |
| BN-10 | Hiển thị tiếng Việt chính xác          | BO-05 | MT-10 | Lỗi dấu, ngắt dòng sai ở công cụ hiện có | 100%          | Mốc M3 (tuần 8)         | Trưởng nhóm kỹ thuật |
| BN-11 | Nâng cao năng lực đội ngũ              | — | MT-12 | 0/3 | ≥ 2/3          | Khi kết thúc dự án      | Giám đốc dự án |
| BN-15 | Tài sản kỹ thuật tái sử dụng           | — | — | 0 | ≥ 3 (bộ dựng khung hình, pipeline mã hoá theo luồng, mô-đun tài khoản – giấy phép) | Khi kết thúc dự án | Nhà tài trợ |

**Hai nhóm theo thời điểm.** BN-07 → BN-11 và BN-15 hiện thực hoá **trong dự án** (nghiệm thu ngay tại các mốc, đội dự án chịu trách nhiệm trực tiếp). BN-06, BN-13, BN-14, BN-16, BN-17 hiện thực hoá **sau bàn giao**, được chuyển giao cho nhà tài trợ tại buổi đóng dự án.

**Lưu ý về BN-14 và mắt xích chuyển đổi.** Bậc miễn phí (3 video/tháng, watermark, 720p) không tạo doanh thu trực tiếp nhưng là **kênh thu hút duy nhất** của mô hình: người dùng thử miễn phí, một phần chuyển thành thuê bao trả phí. Nếu tỷ lệ chuyển đổi (MT-16) quá thấp thì BN-16 và BN-17 không có nền để đứng — xem rủi ro BR-08.

**Lưu ý về BN-13.** Chi phí phục vụ giảm dần theo năm (65.000 → 45.000 VND/thuê bao) vì phần lớn chi phí máy chủ là **cố định** trong khi số thuê bao tăng. Đây là đặc tính kinh tế quan trọng nhất của kiến trúc P4 và là lý do biên lợi nhuận nở ra theo quy mô thay vì co lại.

---

## 3. Strategic Alignment

| Mục tiêu chiến lược của Enticy Studios       | Lợi ích đóng góp        | Cách đóng góp |
| -------------------------------------------- | ----------------------- | ------------- |
| Xây dựng dòng doanh thu định kỳ, dự báo được  | BN-16, BN-17            | Thuê bao thường niên thay vì bán đứt từng lần |
| Giữ chi phí phục vụ ở mức tối thiểu           | BN-13                   | Máy chủ chỉ xác thực, không xử lý video |
| Tạo khác biệt trên thị trường công cụ nội địa | BN-06, BN-07, BN-10, BN-14 | Giá nội địa, nhanh hơn, không giới hạn độ dài, tiếng Việt tốt hơn |
| Giảm rủi ro pháp lý về dữ liệu cá nhân        | BN-09                   | Không thu thập, không lưu trữ nội dung người dùng |
| Phục vụ được phân khúc doanh nghiệp           | BN-17                   | Hoá đơn VAT, 5 chỗ, cam kết hỗ trợ |
| Tích luỹ năng lực và tài sản kỹ thuật         | BN-11, BN-15            | Làm chủ WebCodecs và mô hình dịch vụ thuê bao; tách mô-đun dùng lại |

---

## 4. Financial Appraisal — NPV, BCR, Payback, ROI

Mục này quy đổi danh mục lợi ích ở §2 thành tiền và đối chiếu với chi phí, để trả lời: **dự án có tạo ra giá trị không, và bao nhiêu?**

### 4.1. Dữ liệu đầu vào — chi phí

Chi phí tách thành hai loại và **không bao giờ cộng gộp**, vì trả lời hai câu hỏi khác nhau: **chi phí tiền mặt** (tiền thật phải chi) trả lời *có cần huy động vốn không*; **chi phí cơ hội của công sức** (450 giờ quy đổi 80.000 VND/giờ — AS-02, không phải tiền chi ra) trả lời *đội có nên dùng số giờ đó vào việc này thay vì việc khác*.

**Năm 0 — giai đoạn dự án (15 tuần):**

| Hạng mục                                       | Cách tính                                     | Tiền mặt (VND) | Công sức (VND) |
| ---------------------------------------------- | --------------------------------------------- | -------------: | -------------: |
| Tên miền năm đầu                               | 1 tên miền `.com`                             |        300.000 |              — |
| Tài sản đồ hoạ có bản quyền cho 5 mẫu đi kèm   | Ảnh, biểu tượng có quyền phân phối lại        |        700.000 |              — |
| Font chữ                                       | SIL OFL — Be Vietnam Pro, Noto Sans           |              0 |              — |
| Máy chủ ảo + chứng chỉ (4 tháng trong dự án)   | 150.000 VND/tháng × 4                         |        600.000 |              — |
| Phí khởi tạo và tích hợp cổng thanh toán       | Hồ sơ, phí kích hoạt (AS-43)                  |      1.500.000 |              — |
| Dự phòng                                       |                                               |        400.000 |              — |
| Công sức phát triển                            | 3 người × 15 tuần × 10 giờ/tuần = **450 giờ** |              — |     36.000.000 |
| **TỔNG NĂM 0**                                 |                                               |  **3.500.000** | **36.000.000** |

**Chi phí vận hành hàng năm sau bàn giao:**

| Hạng mục                                        | Năm 1     | Năm 2      | Năm 3      |
| ----------------------------------------------- | --------: | ---------: | ---------: |
| Máy chủ, tên miền, chứng chỉ, giám sát          | 2.400.000 |  4.800.000 |  9.600.000 |
| Phí cổng thanh toán (~2,5% doanh thu)           | 1.900.000 |  6.000.000 | 12.200.000 |
| Tài sản đồ hoạ cho mẫu bổ sung                  | 2.200.000 |  4.200.000 |  6.200.000 |
| **Cộng tiền mặt** (AS-07)                       | **6.500.000** | **15.000.000** | **28.000.000** |
| Vận hành máy chủ, hỗ trợ khách hàng, bảo trì, làm mẫu mới (AS-30) | 260 giờ | 480 giờ | 800 giờ |
| **Quy đổi công sức**                            | **20.800.000** | **38.400.000** | **64.000.000** |

Công sức vận hành cao hơn một sản phẩm không có máy chủ, vì phải cộng thêm trực vận hành, xử lý thanh toán và hỗ trợ khách hàng có cam kết phản hồi.

### 4.2. Dữ liệu đầu vào — lợi ích tài chính

Hai dòng doanh thu của mô hình M1, tương ứng BN-16 và BN-17. Số lượng là **thuê bao đang hoạt động cuối mỗi năm**, đã trừ phần không gia hạn (AS-42).

| Dòng doanh thu                | Đơn giá                       | Năm 1        | Năm 2         | Năm 3         |
| ----------------------------- | ----------------------------- | -----------: | ------------: | ------------: |
| Thuê bao Cá nhân              | 599.000 VND/năm               | 100 thuê bao<br>59.900.000 | 320 thuê bao<br>191.680.000 | 650 thuê bao<br>389.350.000 |
| Thuê bao Doanh nghiệp         | 4.900.000 VND/năm (5 chỗ)     | 3 thuê bao<br>14.700.000 | 10 thuê bao<br>49.000.000 | 20 thuê bao<br>98.000.000 |
| **TỔNG DOANH THU**            |                               | **74.600.000** | **240.680.000** | **487.350.000** |

Bậc miễn phí không tạo doanh thu và không được tính vào bảng trên; vai trò của nó là kênh thu hút, đo bằng MT-16.

**Lợi ích phi tài chính không được quy đổi thành tiền.** BN-06 → BN-11, BN-14 và BN-15 có giá trị thật nhưng gán một con số VND cho "nội dung không rời khỏi tổ chức" sẽ là con số bịa. Chúng được theo dõi bằng chỉ số riêng ở §7, không đưa vào tử số của NPV và BCR. Hệ quả: **các chỉ tiêu dưới đây là ước lượng thận trọng** — giá trị thật của dự án cao hơn con số tính ra.

### 4.3. Bốn công cụ thẩm định và công thức

| Công cụ | Công thức | Ý nghĩa | Ngưỡng chấp nhận |
| ------- | --------- | ------- | ---------------- |
| **Hệ số chiết khấu** (DF) | `DF(t) = 1 / (1 + r)^t` | Quy giá trị của tiền ở năm `t` về hiện tại, với `r = 12%` (AS-06) | — |
| **NPV** — Giá trị hiện tại ròng | `NPV = Σ (Bₜ − Cₜ) / (1 + r)^t` | Giá trị **tuyệt đối** dự án tạo ra sau khi trừ chi phí, tính theo tiền hôm nay | **NPV > 0** |
| **BCR** — Tỷ số lợi ích / chi phí | `BCR = PV(lợi ích) / PV(chi phí)` | **Hiệu suất** của đồng vốn: một đồng chi phí đổi lấy bao nhiêu đồng lợi ích | **BCR > 1** |
| **Payback** — Thời gian hoàn vốn | Thời điểm luỹ kế dòng ròng đổi dấu từ âm sang dương | Bao lâu thu hồi được vốn bỏ ra | < 3 năm |
| **ROI** — Tỷ suất hoàn vốn | `ROI = (Tổng lợi ích ròng chưa chiết khấu) / (Vốn đầu tư ban đầu)` | Mức sinh lời so với vốn ban đầu, **không xét giá trị thời gian của tiền** | > 0% |

**NPV và BCR là hai mặt của cùng một phép tính** — NPV là hiệu `PV(lợi ích) − PV(chi phí)`, BCR là thương `PV(lợi ích) ÷ PV(chi phí)`, nên `NPV > 0 ⟺ BCR > 1`. Dùng cả hai vì NPV nói **quy mô giá trị** còn BCR nói **hiệu suất** — BCR cho phép so sánh hai dự án chênh lệch quy mô vốn, điều NPV không làm được. Riêng với dự án này, **nghịch đảo của BCR chính là điểm hoà vốn** (§4.7).

### 4.4. Áp dụng — bảng dòng tiền chiết khấu

Hệ số chiết khấu với `r = 12%`: `DF(0) = 1,0000` · `DF(1) = 0,8929` · `DF(2) = 0,7972` · `DF(3) = 0,7118`.

**Bảng A — cơ sở tiền mặt.** Chỉ tính tiền thật vào và ra. Trả lời: *dự án có cần huy động vốn không?*

| Năm | Dòng vào    | Dòng ra    | Dòng ròng      |     DF | Giá trị hiện tại | Luỹ kế PV     |
| --- | ----------: | ---------: | -------------: | -----: | ---------------: | ------------: |
| 0   |           0 |  3.500.000 |    −3.500.000  | 1,0000 |      −3.500.000  |   −3.500.000  |
| 1   |  74.600.000 |  6.500.000 |    68.100.000  | 0,8929 |      60.803.571  |   57.303.571  |
| 2   | 240.680.000 | 15.000.000 |   225.680.000  | 0,7972 |     179.910.715  |  237.214.286  |
| 3   | 487.350.000 | 28.000.000 |   459.350.000  | 0,7118 |     326.956.256  |  564.170.542  |

**NPV (cơ sở tiền mặt) = +564.170.542 VND.** Luỹ kế chuyển dương ngay trong Năm 1.

**Bảng B — cơ sở kinh tế đầy đủ.** Cộng thêm chi phí cơ hội của công sức. Trả lời câu hỏi khắt khe hơn: *đội có nên dùng 450 giờ vào việc này thay vì việc khác?*

| Năm | Doanh thu   | Chi phí tiền mặt | Chi phí công sức | Dòng ròng      |     DF | Giá trị hiện tại | Luỹ kế PV     |
| --- | ----------: | ---------------: | ---------------: | -------------: | -----: | ---------------: | ------------: |
| 0   |           0 |        3.500.000 |       36.000.000 |  −39.500.000   | 1,0000 |     −39.500.000  |  −39.500.000  |
| 1   |  74.600.000 |        6.500.000 |       20.800.000 |   +47.300.000  | 0,8929 |      42.232.143  |   +2.732.143  |
| 2   | 240.680.000 |       15.000.000 |       38.400.000 |  +187.280.000  | 0,7972 |     149.298.470  | +152.030.613  |
| 3   | 487.350.000 |       28.000.000 |       64.000.000 |  +395.350.000  | 0,7118 |     281.402.321  | +433.432.934  |

**NPV (cơ sở kinh tế đầy đủ) = +433.432.934 VND.**

### 4.5. Áp dụng — tính BCR

BCR cần tách riêng **PV của lợi ích** và **PV của chi phí**, thay vì gộp thành dòng ròng như bảng trên.

| Năm | Doanh thu   |     DF | PV(lợi ích)      |
| --- | ----------: | -----: | ---------------: |
| 1   |  74.600.000 | 0,8929 |      66.607.143  |
| 2   | 240.680.000 | 0,7972 |     191.868.623  |
| 3   | 487.350.000 | 0,7118 |     346.886.104  |
| **Cộng** | | | **605.361.870** |

| Thành phần chi phí          | Năm 0      | Năm 1      | Năm 2      | Năm 3      | PV cộng dồn |
| --------------------------- | ---------: | ---------: | ---------: | ---------: | ----------: |
| Tiền mặt (danh nghĩa)       |  3.500.000 |  6.500.000 | 15.000.000 | 28.000.000 |             |
| Tiền mặt (đã chiết khấu)    |  3.500.000 |  5.803.571 | 11.957.908 | 19.929.847 |  41.191.326 |
| Công sức (danh nghĩa)       | 36.000.000 | 20.800.000 | 38.400.000 | 64.000.000 |             |
| Công sức (đã chiết khấu)    | 36.000.000 | 18.571.429 | 30.612.245 | 45.553.936 | 130.737.610 |
| **PV(chi phí) — kinh tế đầy đủ** | | | | | **171.928.936** |

| Cơ sở tính | PV(lợi ích) | PV(chi phí) | BCR | Diễn giải |
| ---------- | ----------: | ----------: | --: | --------- |
| Tiền mặt   | 605.361.870 |  41.191.326 | **14,70** | Mỗi 1 đồng **tiền mặt** chi ra đổi lấy 14,70 đồng lợi ích |
| **Kinh tế đầy đủ** | 605.361.870 | 171.928.936 | **3,52** | Mỗi 1 đồng chi phí (gồm cả công sức quy đổi) đổi lấy 3,52 đồng lợi ích |

*Kiểm chứng nhất quán: 605.361.870 − 171.928.936 = 433.432.934 VND — khớp Bảng B ở §4.4; và BCR 3,52 > 1 tương ứng NPV > 0, đúng quan hệ nêu ở §4.3.*

### 4.6. Đọc kết quả — chỉ tiêu nào đáng tin

| Chỉ tiêu                            | Cơ sở tiền mặt   | Cơ sở kinh tế đầy đủ | Ngưỡng | Đạt? |
| ----------------------------------- | ---------------: | -------------------: | ------ | ---- |
| **NPV** (r = 12%, 3 năm)            | +564.170.542 VND | **+433.432.934 VND** | > 0    | ✅ |
| **BCR**                             |            14,70 |             **3,52** | > 1    | ✅ |
| **Payback danh nghĩa**              |        ~0,05 năm |     **~0,84 năm** (≈ 10 tháng) | < 3 năm | ✅ |
| **Payback chiết khấu**              |        ~0,06 năm |     **~0,94 năm** (≈ 11 tháng) | < 3 năm | ✅ |
| **ROI** (chưa chiết khấu)           | ~16.870% — *không có ý nghĩa* | **1.494,8%** | > 0% | ✅ |
| **IRR** (xấp xỉ)                    | *không hội tụ có ý nghĩa* | **~243%** | > r = 12% | ✅ |

> **Ghi chú phương pháp.** Khi vốn tiền mặt rất nhỏ so với dòng tiền vào, **ROI, BCR và payback trên cơ sở tiền mặt đều mất ý nghĩa** vì mẫu số quá nhỏ: chia bất cứ khoản lãi nào cho 3.500.000 cũng ra một tỷ lệ khổng lồ. Chỉ tiêu dùng để ra quyết định là **cột cơ sở kinh tế đầy đủ** — đã trừ cả chi phí cơ hội của 450 giờ. Cột cơ sở tiền mặt trình bày ở đây chỉ để chỉ ra rằng con số đó không nên được dùng.

*Payback danh nghĩa (cơ sở kinh tế): vốn ban đầu 39.500.000; dòng ròng Năm 1 là 47.300.000 → 39.500.000 / 47.300.000 = 0,84. Vậy payback = **0,84 năm**.*
*ROI (cơ sở kinh tế): 802.630.000 − 172.700.000 − 39.500.000 = 590.430.000 → 590.430.000 / 39.500.000 = **1.494,8%**.*

**Vì sao payback ngắn bất thường.** Doanh thu Năm 1 (74,6 triệu) đã gần gấp đôi tổng chi phí Năm 0 (39,5 triệu), nên vốn thu hồi trong vòng 12 tháng đầu. Con số đẹp này **hoàn toàn phụ thuộc giả định AS-39** — 100 thuê bao Cá nhân trong Năm 1. Nếu Năm 1 chỉ đạt một nửa, payback lùi về ~1,7 năm nhưng vẫn dưới ngưỡng 3 năm.

### 4.7. Phân tích độ nhạy và điểm hoà vốn

Mô hình thuần thuê bao chỉ có **một biến rủi ro thực sự**: số thuê bao đang hoạt động — do số bán mới (AS-39, AS-40) và tỷ lệ gia hạn (AS-42) cùng quyết định. Bảng dưới nhân doanh thu cả ba năm với hệ số `k`, giữ nguyên chi phí, tính trên cơ sở kinh tế đầy đủ:

| Kịch bản  | Hệ số `k` | PV(lợi ích)  | NPV (VND)        |  BCR | Kết luận |
| --------- | --------- | -----------: | ---------------: | ---: | -------- |
| Bi quan   | 50%       | 302.680.935  |   +130.751.999   | 1,76 | Vẫn hiệu quả rõ rệt |
| **Cơ sở** | 100%      | 605.361.870  | **+433.432.934** | **3,52** | Khả thi |
| Lạc quan  | 150%      | 908.042.805  |   +736.113.869   | 5,28 | Rất hiệu quả |

**Điểm hoà vốn.** Dự án hoà vốn khi `NPV = 0`, tức `BCR = 1`, tức `PV(lợi ích) = PV(chi phí)`:

```
k × 605.361.870 = 171.928.936   →   k = 171.928.936 / 605.361.870 ≈ 0,28
```

Cách khác cho cùng kết quả: `k = 1 / BCR = 1 / 3,52 ≈ 0,28`. Ngưỡng **28% kịch bản cơ sở** tương đương khoảng **28 / 91 / 185 thuê bao Cá nhân** và **1 / 3 / 6 thuê bao Doanh nghiệp** trong ba năm — đây là ngưỡng theo dõi tại điểm kiểm tra §5.

**Giữ nguyên chi phí khi doanh thu giảm là giả định thận trọng.** Thực tế, phí cổng thanh toán (~2,5% doanh thu) và chi phí tài sản đồ hoạ cho mẫu mới đều co lại khi doanh thu co lại, nên NPV ở kịch bản bi quan cao hơn con số trong bảng. Bảng cố ý không tính phần này để không làm đẹp kết quả.

**Biên an toàn 72%** rộng, nhưng cần đọc đúng: nó rộng vì **chi phí cố định thấp**, chứ không vì doanh thu chắc chắn. Kể cả ở kịch bản bi quan, dự án **không lỗ tiền mặt** — hậu quả của việc không đạt ngưỡng là công sức bỏ ra không thu lại được giá trị tương xứng, nghiêm trọng nhưng khác bản chất so với thua lỗ tài chính.

**Rủi ro thật nằm ngoài bảng độ nhạy.** Hệ số `k` giả định doanh thu giảm đều cả ba năm. Kịch bản nguy hiểm hơn là **Năm 1 đạt mục tiêu nhưng tỷ lệ gia hạn sụp ở Năm 2** — khi đó chi phí đã tăng theo quy mô Năm 1 nhưng doanh thu không theo. Đây là lý do MT-15 (tỷ lệ gia hạn) là chỉ số cần theo dõi sớm nhất và sát nhất trong toàn bộ §7.

---

## 5. Timeframe for Realizing Benefits

| Giai đoạn                    | Thời gian                   | Lợi ích bắt đầu xuất hiện | Trạng thái mong đợi |
| ---------------------------- | --------------------------- | ------------------------- | ------------------- |
| Trong dự án — mốc M3         | Tuần 8 (2026-10-18)         | BN-10                     | Đo và nghiệm thu tại mốc |
| Trong dự án — mốc M4         | Tuần 10 (2026-11-01)        | BN-07, BN-08, BN-09       | Đo và nghiệm thu tại mốc |
| Đóng dự án                   | Tuần 15 (2026-12-06)        | BN-11, BN-14, BN-15       | Đánh giá tại buổi tổng kết |
| Quý 1 sau bàn giao           | Tháng 1–3 Năm 1             | BN-06, BN-13, BN-16       | Thuê bao trả phí đầu tiên; đo trên nhóm người dùng đầu |
| Quý 2 sau bàn giao           | Tháng 4–6 Năm 1             | BN-17                     | Thuê bao Doanh nghiệp đầu tiên |
| Quý 4 sau bàn giao           | Tháng 10–12 Năm 1           | —                         | **Chu kỳ gia hạn đầu tiên — MT-15 lần đầu đo được** |
| Năm 1 → Năm 3                | 36 tháng                    | Toàn bộ                   | Đạt mục tiêu Năm 3 |

**Điểm quyết định chính thức.** Nếu đến hết **Quý 4 Năm 1** số thuê bao Cá nhân đang hoạt động dưới **28** (ngưỡng hoà vốn 28% tính tại §4.7) **hoặc** tỷ lệ gia hạn dưới **50%**, nhà tài trợ phải xem xét lại giá, hạn mức bậc miễn phí, hoặc chính giả định về nhu cầu thị trường. Đây là điểm quyết định, không phải cảnh báo mềm.

Hai điều kiện được kiểm tra **độc lập**: đạt số thuê bao nhưng không giữ được họ cũng là tín hiệu hỏng, và nó hỏng theo cách khó cứu hơn.

---

## 6. Benefits Owner

Đội chỉ có 3 thành viên nên **một người kiêm nhiều vai trò**. Bảng phân theo vai trò; ánh xạ vai trò sang người cụ thể ghi tại Project Charter §9.

| Vai trò                | Người đảm nhiệm  | Trách nhiệm về lợi ích |
| ---------------------- | ---------------- | ---------------------- |
| Nhà tài trợ (Sponsor)  | Phạm Quang Anh — Enticy Studios | Chịu trách nhiệm cuối cùng về BN-13, BN-15, BN-16, BN-17. **Chịu trách nhiệm vận hành máy chủ dịch vụ trong 3 năm sau bàn giao.** Ra quyết định khi lợi ích chệch mục tiêu |
| Giám đốc dự án (PM)    | Nguyễn Thế Chiến  | Chịu trách nhiệm BN-11 và việc bàn giao danh mục lợi ích khi đóng dự án |
| Trưởng nhóm kỹ thuật   | Nguyễn Việt Quang  | Chịu trách nhiệm BN-07, BN-08, BN-09, BN-10 trong thời gian dự án |
| Trưởng nhóm sản phẩm   | Phạm Quang Anh  | Chịu trách nhiệm BN-06, BN-14. Thu thập phản hồi người dùng |
| Giảng viên hướng dẫn   | Thầy Nguyễn Đình Quảng | Đánh giá về mặt học thuật; không chịu trách nhiệm về lợi ích kinh doanh |

**Chuyển giao.** Tại buổi đóng dự án (tuần 15), Giám đốc dự án bàn giao cho Nhà tài trợ — **có biên bản** — bảng danh mục lợi ích kèm trạng thái, số liệu baseline đã đo, **tài liệu vận hành máy chủ và quy trình khôi phục sự cố**, và lịch rà soát 3 năm tiếp theo. Không có biên bản thì các lợi ích sau bàn giao sẽ không có ai theo dõi, và không có tài liệu vận hành thì máy chủ không có ai giữ.

---

## 7. Metrics

| ID    | Chỉ số                          | Đo cho lợi ích | Định nghĩa đo                                              | Nguồn dữ liệu | Tần suất | Người đo |
| ----- | ------------------------------- | -------------- | ---------------------------------------------------------- | ------------- | -------- | -------- |
| MT-13 | Doanh thu thuê bao              | BN-16, BN-17 | Tổng tiền thu từ thuê bao trong kỳ, tách theo bậc, chưa trừ phí cổng thanh toán | Báo cáo cổng thanh toán | Hàng tháng | Nhà tài trợ |
| MT-14 | Số thuê bao đang hoạt động      | BN-16, BN-17 | Số tài khoản có giấy phép còn hiệu lực tại cuối kỳ, tách theo bậc | Cơ sở dữ liệu giấy phép | Hàng tháng | Nhà tài trợ |
| MT-15 | **Tỷ lệ gia hạn**               | BN-16, BN-17 | Số thuê bao gia hạn ÷ số thuê bao đến hạn trong kỳ         | Cơ sở dữ liệu giấy phép | Hàng quý, từ Quý 4 Năm 1 | Nhà tài trợ |
| MT-16 | Tỷ lệ chuyển đổi từ bậc miễn phí | BN-16 | Số tài khoản miễn phí nâng cấp lên trả phí ÷ tổng số tài khoản miễn phí trong kỳ | Cơ sở dữ liệu tài khoản | Hàng tháng | Nhà tài trợ |
| MT-18 | Chi phí phục vụ mỗi thuê bao    | BN-13 | Tổng chi phí tiền mặt vận hành trong năm ÷ số thuê bao trung bình trong năm | Hoá đơn nhà cung cấp + cơ sở dữ liệu | Hàng quý | Nhà tài trợ |
| MT-17 | Thời gian hoạt động của máy chủ giấy phép | — (OB-16) | Tỷ lệ thời gian máy chủ phản hồi đúng trong tháng          | Công cụ giám sát tự động | Hàng tháng | Nhà tài trợ |
| MT-06 | Thời gian tạo một video         | BN-06 | Từ lúc mở ứng dụng đến lúc file MP4 được lưu; kịch bản chuẩn 5 cảnh, 60 giây, có ảnh | Buổi kiểm thử người dùng, ≥ 10 người | Mỗi quý | Trưởng nhóm sản phẩm |
| MT-07 | Mức tăng bộ nhớ theo độ dài     | BN-07 | Bộ nhớ đỉnh video 10 phút ÷ bộ nhớ đỉnh video 1 phút, cùng độ phân giải | Công cụ đo bộ nhớ của trình duyệt | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-08 | Tỷ lệ đầu ra giống nhau         | BN-08 | Xuất cùng một scene JSON trên 3 máy khác cấu hình, so checksum luồng video | Kịch bản kiểm thử tự động | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-09 | Lưu lượng nội dung gửi đi       | BN-09 | Tổng byte **nội dung người dùng** trong các request rời khỏi trình duyệt khi tạo và xuất video | Kiểm thử thủ công + kiểm toán | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-10 | Độ chính xác hiển thị tiếng Việt | BN-10 | Tỷ lệ ký tự đúng trên bộ kiểm thử đủ 134 tổ hợp dấu, cả khung ngang và dọc | Bộ kiểm thử hình ảnh | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-11 | Tỷ lệ xuất video thành công     | — (OB-06) | Số lần xuất thành công ÷ tổng số lần thử, trên 100 lần ở các trình duyệt mục tiêu | Kịch bản kiểm thử | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-12 | Năng lực đội                    | BN-11 | Số thành viên tự triển khai được pipeline WebCodecs theo luồng không cần hỗ trợ | Đánh giá nội bộ | Khi kết thúc dự án | Giám đốc dự án |

**Nguyên tắc đo:**

- **Có baseline trước khi bắt đầu.** MT-06 phải đo trên quy trình thủ công hiện tại **trước mốc M1**, nếu không BN-06 trở thành lời tuyên bố không kiểm chứng được.
- **MT-15 là chỉ số quan trọng nhất của mô hình.** Với sản phẩm thuê bao, doanh thu Năm 2 và Năm 3 gần như hoàn toàn do tỷ lệ gia hạn quyết định. Nó chỉ đo được từ Quý 4 Năm 1 — nghĩa là có **một khoảng mù 12 tháng** mà không ai biết mô hình có bền hay không. MT-16 là chỉ số thay thế duy nhất trong khoảng mù đó.
- **MT-09 đo nội dung, không đo lưu lượng.** Request xác thực giấy phép có rời khỏi trình duyệt, nhưng nó chỉ mang token và không mang nội dung người dùng. Phép đo phải phân biệt hai loại, nếu không chỉ số sẽ báo sai.
- **MT-07 là cách duy nhất kiểm chứng "không giới hạn độ dài".** Không thể chứng minh bằng cách xuất một video dài rồi tuyên bố thành công — phải chứng minh bộ nhớ **không tăng theo độ dài**.
- **MT-13 → MT-18 là đầu vào để tính lại NPV và BCR.** Mỗi quý, số thực đo thay số giả định trong §4, cho ra NPV và BCR cập nhật — đây là cách phát hiện sớm việc dự án đang rời khỏi ngưỡng hoà vốn 28%.

---

## 8. Assumptions and Risks

### 8.1. Giả định mà lợi ích phụ thuộc vào

| ID giả định | Nội dung                                                        | Lợi ích bị ảnh hưởng nếu sai |
| ----------- | --------------------------------------------------------------- | ---------------------------- |
| AS-01       | Người dùng hiện mất ~45 phút để tạo một video 60 giây            | BN-06 — nếu baseline thật thấp hơn nhiều, mức cải thiện không đủ hấp dẫn |
| AS-06       | Tỷ lệ chiết khấu 12%/năm phản ánh đúng chi phí vốn               | Toàn bộ §4 — NPV, BCR, payback đều tính trên `r` này |
| AS-10       | Người dùng mục tiêu dùng trình duyệt có hỗ trợ WebCodecs         | BN-06, BN-14 — không xuất được thì không có lợi ích nào |
| AS-11       | Mua được tài sản đồ hoạ có **quyền phân phối lại** trong ngân sách | BN-14 — không có quyền này thì không phát hành được mẫu đi kèm |
| AS-39       | Đạt 100 / 320 / 650 thuê bao Cá nhân trong ba năm                | BN-16 — là biến số của phân tích độ nhạy §4.7 |
| AS-40       | Đạt 3 / 10 / 20 thuê bao Doanh nghiệp trong ba năm               | BN-17 |
| AS-41       | Người dùng chấp nhận mức giá 599.000 và 4.900.000 VND/năm        | BN-16, BN-17 — trực tiếp |
| AS-42       | **Tỷ lệ gia hạn hằng năm ≥ 70%**                                 | BN-16, BN-17 — quyết định toàn bộ doanh thu Năm 2 và Năm 3 |
| AS-43       | Cổng thanh toán nội địa duyệt hồ sơ trong ≤ 4 tuần               | BN-16, BN-17 — không thu được tiền thì không có doanh thu nào |
| AS-44       | Một máy chủ ảo nhỏ đủ phục vụ ≤ 1.000 thuê bao trong ngân sách   | BN-13 — mẫu số của chi phí phục vụ |
| AS-45       | Người dùng có kết nối Internet ổn định khi xuất video            | BN-06 — mất mạng là không xuất được |
| AS-30       | Công sức vận hành 260 / 480 / 800 giờ mỗi năm                    | Mẫu số của BCR — nếu thực tế cao hơn nhiều, BCR có thể xuống đáng kể |
| AS-13       | Nhà tài trợ duy trì việc theo dõi lợi ích và vận hành máy chủ sau khi dự án đóng | Toàn bộ nhóm lợi ích sau bàn giao |

### 8.2. Rủi ro đối với việc hiện thực hoá lợi ích

| ID    | Rủi ro                                                         | Lợi ích bị đe doạ | Ứng phó |
| ----- | -------------------------------------------------------------- | ----------------- | ------- |
| BR-01 | Không ai theo dõi lợi ích sau khi dự án đóng                    | Tất cả sau bàn giao | Biên bản bàn giao có chữ ký; lịch rà soát đặt sẵn trong lịch của nhà tài trợ |
| BR-02 | Không đo baseline MT-06 trước khi phát triển                    | BN-06             | Đưa việc đo baseline thành đầu ra bắt buộc của mốc M1 |
| BR-08 | **Bậc miễn phí thu hút người dùng nhưng không ai nâng cấp**     | BN-16, BN-17      | Rủi ro lớn nhất của mô hình M1 — theo dõi MT-16 từ tháng đầu; nếu thấp, siết hạn mức bậc miễn phí hoặc điều chỉnh giá |
| BR-09 | **Tỷ lệ gia hạn dưới 50% ở chu kỳ đầu tiên**                    | BN-16, BN-17      | Doanh thu Năm 2–3 sụp; theo dõi MT-15 và phỏng vấn khách hàng rời bỏ ngay từ trường hợp đầu tiên |
| BR-10 | **Máy chủ giấy phép ngừng hoạt động kéo dài**                   | BN-06, BN-16, BN-17 | Người dùng trả phí không dùng được sản phẩm; giám sát tự động, mục tiêu MT-17 ≥ 99%, quy trình khôi phục diễn tập tại M6 |
| BR-03 | Doanh thu dưới ngưỡng hoà vốn 28% (BCR < 1)                     | BN-16, BN-17      | Quyết định tại điểm kiểm tra hết Quý 4 Năm 1 (§5) |
| BR-05 | Kiến trúc theo luồng không đạt, phải quay lại giới hạn độ dài   | BN-07             | Nguyên mẫu tại M2; nếu thất bại, công bố giới hạn rõ ràng thay vì hứa suông |
| BR-06 | Chỉ số được báo cáo nhưng không dẫn đến hành động nào           | Tất cả            | Mỗi kỳ rà soát phải kết thúc bằng một quyết định: tiếp tục, điều chỉnh, hoặc dừng |
| BR-07 | Công sức vận hành thực tế vượt xa ước lượng AS-30               | Toàn bộ nhóm tài chính | Ghi nhận giờ công thực tế từ tháng đầu; tính lại BCR mỗi quý |

---

## 9. Benefits Realization Tracking

| Kỳ rà soát                | Thời điểm                     | Người chủ trì   | Đầu ra |
| ------------------------- | ----------------------------- | --------------- | ------ |
| Rà soát tại mốc           | Tại M3, M4                    | Giám đốc dự án  | Cập nhật trạng thái BN-07 → BN-10 |
| Rà soát đóng dự án        | Tuần 15                       | Giám đốc dự án  | Biên bản bàn giao danh mục lợi ích + tài liệu vận hành |
| Rà soát hàng tháng        | Cuối mỗi tháng, Năm 1         | Nhà tài trợ     | MT-13, MT-14, MT-16, MT-17 — phát hiện sớm trong khoảng mù 12 tháng |
| Rà soát hàng quý          | Cuối mỗi quý, Năm 1 → Năm 3   | Nhà tài trợ     | Báo cáo hiện thực hoá lợi ích + NPV/BCR cập nhật |
| Rà soát điểm quyết định   | Hết Quý 4 Năm 1               | Nhà tài trợ     | Quyết định: tiếp tục / điều chỉnh giá / siết hạn mức miễn phí / dừng |

**Mẫu báo cáo.** Mỗi kỳ rà soát điền bảng dưới; cột *Đánh giá* dùng ba mức 🟢 Đạt · 🟡 Chệch < 20% · 🔴 Chệch ≥ 20%. Kèm theo đó, mỗi kỳ hàng quý phải cập nhật **NPV và BCR tính lại trên số thực đo** (theo phương pháp §4.4 và §4.5). Nếu BCR tụt dưới 1, kích hoạt rủi ro BR-03.

| ID    | Lợi ích | Mục tiêu kỳ này | Thực đạt | Chênh lệch | Đánh giá | Nguyên nhân | Hành động | Người chịu trách nhiệm | Hạn |
| ----- | ------- | --------------- | -------- | ---------- | -------- | ----------- | --------- | ---------------------- | --- |
| BN-16 |         |                 |          |            |          |             |           |                        |     |
| BN-17 |         |                 |          |            |          |             |           |                        |     |
| ...   |         |                 |          |            |          |             |           |                        |     |

| Mức đánh giá | Xử lý bắt buộc |
| ------------ | -------------- |
| 🟢 Đạt        | Ghi nhận, không cần hành động |
| 🟡 Chệch < 20% | Ghi nguyên nhân, đề ra hành động khắc phục, theo dõi ở kỳ sau |
| 🔴 Chệch ≥ 20% | Báo cáo nhà tài trợ trong 5 ngày làm việc; xem xét lại giả định gốc trong Assumption Log; nếu lệch hai kỳ liên tiếp, đưa ra quyết định về số phận sản phẩm |

**Đóng danh mục lợi ích** khi mọi lợi ích đạt trạng thái *Đã hiện thực hoá* hoặc *Không còn khả thi*, và nhà tài trợ ký xác nhận báo cáo tổng kết cuối Năm 3. Trước đó, danh mục vẫn là tài liệu sống.

---

*Tài liệu liên quan: Business Case · Hợp đồng thực hiện dự án · Project Charter · Assumption Log — cùng bộ tài liệu quản lý dự án PromptVideo.*
