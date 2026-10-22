<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                     |                                |
| ------------------- | ------------------------------ |
| **Nhóm tiến trình** | Pre-project                     |
| **Tên tài liệu**    | Benefit Management Plan        |
| **Phiên bản**       | Ver. 1.1                       |
| **Nhóm thực hiện**  | Nhóm 02                 |
| **Ngày phát hành**  | 2026-08-24                     |
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
| 2  | Ver 1.1   | 2026-08-24    | Chỉnh sửa      | Tiếp nhận toàn bộ phần thẩm định tài chính từ Business Case: bổ sung **§4** với bốn công cụ NPV, BCR, Payback, ROI kèm công thức, bảng dòng tiền chiết khấu, tính BCR và phân tích độ nhạy. Rút gọn văn xuôi về đúng vai trò tài liệu theo dõi lợi ích | Nguyễn Thế Chiến | Phạm Quang Anh |

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

> **Ghi chú.** Tài liệu lập trên bối cảnh doanh nghiệp giả định (Enticy Studios), phục vụ môn Quản lý dự án phần mềm. Số liệu tài chính và khối lượng bán là giả định, đăng ký kèm nguồn tại **Assumption Log** (`01_Initiating/02_Assumption_Log_v1.0.md`) theo mã `AS-xx`.

---

## 1. Purpose and Scope

**Business Case** trả lời *có nên làm dự án này không*. Tài liệu này trả lời câu tiếp theo: **dự án tạo ra lợi ích gì, đáng bao nhiêu tiền, đo bằng cách nào, ai chịu trách nhiệm, và khi nào lợi ích được coi là đã hiện thực hoá.**

Nó tồn tại vì dự án kết thúc ở tuần 15 khi phần mềm được bàn giao, nhưng **phần lớn lợi ích chỉ xuất hiện sau đó**. Với dự án này việc theo dõi lợi ích còn quan trọng hơn bình thường: vốn tiền mặt chỉ 1.500.000 VND, nên **rủi ro thật không phải mất tiền mà là lãng phí 450 giờ công sức** — chỉ có đo lợi ích mới cho biết số giờ đó có đáng bỏ ra hay không.

| Trong phạm vi | Ngoài phạm vi |
| ------------- | ------------- |
| Lợi ích từ sản phẩm PromptVideo và các gói template đi kèm | Lợi ích của sản phẩm khác trong danh mục Enticy Studios |
| Chu kỳ theo dõi 3 năm kể từ khi bàn giao | Lợi ích sau năm thứ 3 |
| Lợi ích cho người dùng cuối, tổ chức chủ quản và đội dự án | Lợi ích gián tiếp không đo được (ví dụ "uy tín thương hiệu") |
| Thẩm định tài chính toàn bộ vòng đời 3 năm | Định giá tài sản vô hình, định giá doanh nghiệp |

**Chuỗi truy vết:** `BO-xx` (mục tiêu nghiệp vụ — Business Case §1.1) → `OB-xx` (mục tiêu kỹ thuật đo được — Project Charter §3.1) → `BN-xx` (lợi ích — §2 tài liệu này) → `MT-xx` (chỉ số đo — §7 tài liệu này).

---

## 2. Target Benefits

**Nhóm lợi ích tài chính — theo mô hình doanh thu M2:**

| ID    | Lợi ích                     | Nguồn gốc | Chỉ số đo | Baseline | Mục tiêu Năm 1 | Mục tiêu Năm 2 | Mục tiêu Năm 3 | Chủ sở hữu |
| ----- | --------------------------- | --------- | --------- | -------- | -------------: | -------------: | -------------: | ---------- |
| BN-01 | Doanh thu gói template      | BO-06 | MT-01, MT-02 | 0 VND    | 19.920.000<br>(80 gói) | 64.740.000<br>(260 gói) | 124.500.000<br>(500 gói) | Nhà tài trợ |
| BN-02 | Doanh thu dịch vụ B2B       | BO-06 | MT-03 | 0 VND | 16.000.000<br>(2 hợp đồng) | 40.000.000<br>(5 hợp đồng) | 72.000.000<br>(9 hợp đồng) | Nhà tài trợ |
| BN-03 | Doanh thu hỗ trợ có SLA     | BO-06 | MT-04 | 0 VND    | 0 | 24.000.000<br>(2 khách hàng) | 60.000.000<br>(5 khách hàng) | Nhà tài trợ |
| BN-04 | Chi phí vận hành gần bằng không | BO-06 | MT-05 | Không áp dụng | ≤ 500 VND | ≤ 500 VND | ≤ 500 VND | Nhà tài trợ |

**Nhóm lợi ích phi tài chính:**

| ID    | Lợi ích                                | Nguồn gốc | Chỉ số đo | Baseline                     | Mục tiêu                     | Thời điểm hiện thực hoá | Chủ sở hữu |
| ----- | -------------------------------------- | --------- | --------- | ---------------------------- | ---------------------------- | ----------------------- | ---------- |
| BN-05 | Người dùng không phải trả tiền phần mềm | BO-02 | — | 180–276 USD/năm (~4,5–7 triệu VND) | **0 VND** | Ngay khi phát hành | Trưởng nhóm sản phẩm |
| BN-06 | Rút ngắn thời gian tạo một video       | BO-01 | MT-06 | ~45 phút                     | ≤ 5 phút (giảm ≥ 85%)        | Ngay khi bàn giao  | Trưởng nhóm sản phẩm |
| BN-07 | Không giới hạn độ dài video            | BO-04 | MT-07 | Hạn mức theo gói ở công cụ hiện có | Tăng bộ nhớ ≤ 15% khi độ dài tăng 10 lần | Mốc M4 (tuần 10) | Trưởng nhóm kỹ thuật |
| BN-08 | Đầu ra xác định, lặp lại được          | — | MT-08 | Không đảm bảo | 100% (3/3 máy) | Mốc M4 (tuần 10) | Trưởng nhóm kỹ thuật |
| BN-09 | Nội dung không rời khỏi máy người dùng | BO-03 | MT-09 | Toàn bộ nội dung được upload | 0 byte                       | Mốc M4 (tuần 10)        | Trưởng nhóm kỹ thuật |
| BN-10 | Hiển thị tiếng Việt chính xác          | BO-05 | MT-10 | Lỗi dấu, ngắt dòng sai ở công cụ hiện có | 100%          | Mốc M3 (tuần 8)         | Trưởng nhóm kỹ thuật |
| BN-11 | Nâng cao năng lực đội ngũ              | — | MT-12 | 0/3 | ≥ 2/3          | Khi kết thúc dự án      | Giám đốc dự án |
| BN-12 | Tài sản mã nguồn mở tái sử dụng        | — | — | 0 | ≥ 2 (bộ dựng khung hình, pipeline mã hoá theo luồng) | Khi kết thúc dự án | Nhà tài trợ |

**Hai nhóm theo thời điểm.** BN-07 → BN-12 hiện thực hoá **trong dự án** (nghiệm thu ngay tại các mốc, đội dự án chịu trách nhiệm trực tiếp). BN-01 → BN-06 hiện thực hoá **sau bàn giao**, được chuyển giao cho nhà tài trợ tại buổi đóng dự án.

**Lưu ý về BN-05.** Đây là lợi ích *cho người dùng*, không phải doanh thu, nhưng nó chính là cơ chế tạo ra BN-01 → BN-03: phần mềm miễn phí thu hút người dùng, một phần trong số đó mua gói template hoặc trở thành khách hàng dịch vụ. Nếu BN-05 không đạt thì cả ba dòng doanh thu không có nền để đứng — xem rủi ro BR-04.

---

## 3. Strategic Alignment

| Mục tiêu chiến lược của Enticy Studios       | Lợi ích đóng góp        | Cách đóng góp |
| -------------------------------------------- | ----------------------- | ------------- |
| Xây dựng dòng doanh thu không cần vốn lớn     | BN-01, BN-02, BN-03     | Bán nội dung và dịch vụ, không cần đầu tư hạ tầng |
| Giữ chi phí vận hành ở mức tối thiểu          | BN-04                   | Kiến trúc client-side, không có máy chủ render |
| Tạo khác biệt trên thị trường công cụ nội địa | BN-05, BN-06, BN-07, BN-10 | Miễn phí, nhanh hơn, không giới hạn độ dài, tiếng Việt tốt hơn |
| Giảm rủi ro pháp lý về dữ liệu cá nhân        | BN-09                   | Không thu thập, không lưu trữ nội dung người dùng |
| Xây dựng uy tín kỹ thuật qua mã nguồn mở      | BN-12                   | Kho mã công khai Apache 2.0, là nền cho dòng doanh thu dịch vụ |
| Tích luỹ năng lực và tài sản kỹ thuật         | BN-11, BN-12            | Làm chủ WebCodecs, tách mô-đun dùng lại |

---

## 4. Financial Appraisal — NPV, BCR, Payback, ROI

Mục này quy đổi danh mục lợi ích ở §2 thành tiền và đối chiếu với chi phí, để trả lời: **dự án có tạo ra giá trị không, và bao nhiêu?**

### 4.1. Dữ liệu đầu vào — chi phí

Chi phí tách thành hai loại và **không bao giờ cộng gộp**, vì trả lời hai câu hỏi khác nhau: **chi phí tiền mặt** (tiền thật phải chi) trả lời *có cần huy động vốn không*; **chi phí cơ hội của công sức** (450 giờ quy đổi 80.000 VND/giờ — AS-02, không phải tiền chi ra) trả lời *đội có nên dùng số giờ đó vào việc này thay vì việc khác*.

**Năm 0 — giai đoạn dự án (15 tuần):**

| Hạng mục                                       | Cách tính                                     | Tiền mặt (VND) | Công sức (VND) |
| ---------------------------------------------- | --------------------------------------------- | -------------: | -------------: |
| Tên miền năm đầu                               | 1 tên miền `.com`                             |        300.000 |              — |
| Tài sản đồ hoạ có bản quyền cho 8 mẫu miễn phí | Ảnh, biểu tượng có quyền phân phối lại        |      1.000.000 |              — |
| Font chữ                                       | SIL OFL — Be Vietnam Pro, Noto Sans           |              0 |              — |
| Hạ tầng (hosting tĩnh)                         | Cloudflare Pages / GitHub Pages — gói miễn phí |             0 |              — |
| Dự phòng                                       |                                               |        200.000 |              — |
| Công sức phát triển                            | 3 người × 15 tuần × 10 giờ/tuần = **450 giờ** |              — |     36.000.000 |
| **TỔNG NĂM 0**                                 |                                               |  **1.500.000** | **36.000.000** |

**Chi phí vận hành hàng năm sau bàn giao:**

| Hạng mục                                        | Năm 1     | Năm 2      | Năm 3      |
| ----------------------------------------------- | --------: | ---------: | ---------: |
| Hạ tầng, tên miền, chứng chỉ                    | 1.500.000 |  3.000.000 |  6.000.000 |
| Bản quyền tài sản đồ hoạ cho gói template mới   | 3.000.000 |  6.000.000 | 10.000.000 |
| Phí cổng thanh toán và kênh bán (~5% doanh thu) | 1.500.000 |  5.000.000 | 10.000.000 |
| **Cộng tiền mặt** (AS-07)                       | **6.000.000** | **14.000.000** | **26.000.000** |
| Bảo trì, làm gói template mới, thực hiện dịch vụ (AS-30) | 200 giờ | 400 giờ | 700 giờ |
| **Quy đổi công sức**                            | **16.000.000** | **32.000.000** | **56.000.000** |

### 4.2. Dữ liệu đầu vào — lợi ích tài chính

Ba dòng doanh thu của mô hình M2, tương ứng BN-01 → BN-03:

| Dòng doanh thu                | Đơn giá                     | Năm 1        | Năm 2         | Năm 3         |
| ----------------------------- | --------------------------- | -----------: | ------------: | ------------: |
| Gói template chuyên ngành     | 249.000 VND/gói (mua một lần) | 80 gói<br>19.920.000 | 260 gói<br>64.740.000 | 500 gói<br>124.500.000 |
| Dịch vụ B2B (template theo thương hiệu, đào tạo) | 8.000.000 VND/hợp đồng | 2 hợp đồng<br>16.000.000 | 5 hợp đồng<br>40.000.000 | 9 hợp đồng<br>72.000.000 |
| Hỗ trợ có SLA                 | 12.000.000 VND/năm/khách hàng | 0 | 2 khách hàng<br>24.000.000 | 5 khách hàng<br>60.000.000 |
| **TỔNG DOANH THU**            |                             | **35.920.000** | **128.740.000** | **256.500.000** |

Năm 1 không có doanh thu SLA vì sản phẩm chưa đủ thời gian vận hành để doanh nghiệp cam kết hợp đồng dài hạn (AS-29).

**Lợi ích phi tài chính không được quy đổi thành tiền.** BN-05 → BN-12 có giá trị thật nhưng gán một con số VND cho "nội dung không rời khỏi tổ chức" sẽ là con số bịa. Chúng được theo dõi bằng chỉ số riêng ở §7, không đưa vào tử số của NPV và BCR. Hệ quả: **các chỉ tiêu dưới đây là ước lượng thận trọng** — giá trị thật của dự án cao hơn con số tính ra.

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
| 0   |           0 |  1.500.000 |    −1.500.000  | 1,0000 |      −1.500.000  |   −1.500.000  |
| 1   |  35.920.000 |  6.000.000 |    29.920.000  | 0,8929 |      26.714.286  |   25.214.286  |
| 2   | 128.740.000 | 14.000.000 |   114.740.000  | 0,7972 |      91.470.026  |  116.684.312  |
| 3   | 256.500.000 | 26.000.000 |   230.500.000  | 0,7118 |     164.065.339  |  280.749.651  |

**NPV (cơ sở tiền mặt) = +280.749.651 VND.** Luỹ kế chuyển dương ngay trong Năm 1.

**Bảng B — cơ sở kinh tế đầy đủ.** Cộng thêm chi phí cơ hội của công sức. Trả lời câu hỏi khắt khe hơn: *đội có nên dùng 450 giờ vào việc này thay vì việc khác?*

| Năm | Doanh thu   | Chi phí tiền mặt | Chi phí công sức | Dòng ròng      |     DF | Giá trị hiện tại | Luỹ kế PV     |
| --- | ----------: | ---------------: | ---------------: | -------------: | -----: | ---------------: | ------------: |
| 0   |           0 |        1.500.000 |       36.000.000 |  −37.500.000   | 1,0000 |     −37.500.000  |  −37.500.000  |
| 1   |  35.920.000 |        6.000.000 |       16.000.000 |   +13.920.000  | 0,8929 |      12.428.571  |  −25.071.429  |
| 2   | 128.740.000 |       14.000.000 |       32.000.000 |   +82.740.000  | 0,7972 |      65.959.831  |  +40.888.402  |
| 3   | 256.500.000 |       26.000.000 |       56.000.000 |  +174.500.000  | 0,7118 |     124.205.618  | +165.094.020  |

**NPV (cơ sở kinh tế đầy đủ) = +165.094.020 VND.**

### 4.5. Áp dụng — tính BCR

BCR cần tách riêng **PV của lợi ích** và **PV của chi phí**, thay vì gộp thành dòng ròng như bảng trên.

| Năm | Doanh thu   |     DF | PV(lợi ích)      |
| --- | ----------: | -----: | ---------------: |
| 1   |  35.920.000 | 0,8929 |      32.071.429  |
| 2   | 128.740.000 | 0,7972 |     102.630.740  |
| 3   | 256.500.000 | 0,7118 |     182.571.634  |
| **Cộng** | | | **317.273.803** |

| Thành phần chi phí          | Năm 0      | Năm 1      | Năm 2      | Năm 3      | PV cộng dồn |
| --------------------------- | ---------: | ---------: | ---------: | ---------: | ----------: |
| Tiền mặt (danh nghĩa)       |  1.500.000 |  6.000.000 | 14.000.000 | 26.000.000 |             |
| Tiền mặt (đã chiết khấu)    |  1.500.000 |  5.357.143 | 11.160.714 | 18.506.295 |  36.524.152 |
| Công sức (danh nghĩa)       | 36.000.000 | 16.000.000 | 32.000.000 | 56.000.000 |             |
| Công sức (đã chiết khấu)    | 36.000.000 | 14.285.714 | 25.510.204 | 39.859.713 | 115.655.631 |
| **PV(chi phí) — kinh tế đầy đủ** | | | | | **152.179.783** |

| Cơ sở tính | PV(lợi ích) | PV(chi phí) | BCR | Diễn giải |
| ---------- | ----------: | ----------: | --: | --------- |
| Tiền mặt   | 317.273.803 |  36.524.152 | **8,69** | Mỗi 1 đồng **tiền mặt** chi ra đổi lấy 8,69 đồng lợi ích |
| **Kinh tế đầy đủ** | 317.273.803 | 152.179.783 | **2,08** | Mỗi 1 đồng chi phí (gồm cả công sức quy đổi) đổi lấy 2,08 đồng lợi ích |

*Kiểm chứng nhất quán: 317.273.803 − 152.179.783 = 165.094.020 VND — khớp Bảng B ở §4.4; và BCR 2,08 > 1 tương ứng NPV > 0, đúng quan hệ nêu ở §4.3.*

### 4.6. Đọc kết quả — chỉ tiêu nào đáng tin

| Chỉ tiêu                            | Cơ sở tiền mặt   | Cơ sở kinh tế đầy đủ | Ngưỡng | Đạt? |
| ----------------------------------- | ---------------: | -------------------: | ------ | ---- |
| **NPV** (r = 12%, 3 năm)            | +280.749.651 VND | **+165.094.020 VND** | > 0    | ✅ |
| **BCR**                             |             8,69 |             **2,08** | > 1    | ✅ |
| **Payback danh nghĩa**              |        ~0,05 năm |     **~1,29 năm** (≈ 15 tháng) | < 3 năm | ✅ |
| **Payback chiết khấu**              |        ~0,06 năm |     **~1,38 năm** (≈ 17 tháng) | < 3 năm | ✅ |
| **ROI** (chưa chiết khấu)           | ~24.900% — *không có ý nghĩa* | **623,1%** | > 0% | ✅ |
| **IRR** (xấp xỉ)                    | *không hội tụ có ý nghĩa* | **~126%** | > r = 12% | ✅ |

> **Ghi chú phương pháp.** Khi vốn tiền mặt tiến gần về 0, **ROI, BCR và payback trên cơ sở tiền mặt đều mất ý nghĩa** vì mẫu số quá nhỏ: chia bất cứ khoản lãi nào cho 1.500.000 cũng ra một tỷ lệ khổng lồ. Chỉ tiêu dùng để ra quyết định là **cột cơ sở kinh tế đầy đủ** — đã trừ cả chi phí cơ hội của 450 giờ. Cột cơ sở tiền mặt trình bày ở đây chỉ để chỉ ra rằng con số đó không nên được dùng.

*Payback danh nghĩa (cơ sở kinh tế): vốn ban đầu 37.500.000; hết Năm 1 luỹ kế 13.920.000, còn thiếu 23.580.000; dòng ròng Năm 2 là 82.740.000 → 23.580.000 / 82.740.000 = 0,29. Tổng 1 + 0,29 = **1,29 năm**.*
*ROI (cơ sở kinh tế): 421.160.000 − 150.000.000 − 37.500.000 = 233.660.000 → 233.660.000 / 37.500.000 = **623,1%**.*

### 4.7. Phân tích độ nhạy và điểm hoà vốn

Biến số rủi ro nhất là **khối lượng bán được** — số gói template (AS-05) và số hợp đồng dịch vụ (AS-28). Bảng dưới nhân doanh thu cả ba năm với hệ số `k`, giữ nguyên chi phí, tính trên cơ sở kinh tế đầy đủ:

| Kịch bản  | Hệ số `k` | PV(lợi ích)  | NPV (VND)        |  BCR | Kết luận |
| --------- | --------- | -----------: | ---------------: | ---: | -------- |
| Bi quan   | 50%       | 158.636.902  |     +6.457.119   | 1,04 | Vẫn hoà vốn, nhưng biên rất mỏng |
| **Cơ sở** | 100%      | 317.273.803  | **+165.094.020** | **2,08** | Khả thi |
| Lạc quan  | 150%      | 475.910.705  |   +323.730.922   | 3,13 | Rất hiệu quả |

**Điểm hoà vốn.** Dự án hoà vốn khi `NPV = 0`, tức `BCR = 1`, tức `PV(lợi ích) = PV(chi phí)`:

```
k × 317.273.803 = 152.179.783   →   k = 152.179.783 / 317.273.803 ≈ 0,48
```

Cách khác cho cùng kết quả: `k = 1 / BCR = 1 / 2,08 ≈ 0,48`. Ngưỡng **48% kịch bản cơ sở** tương đương khoảng **38 / 125 / 240 gói template** và **1 / 2 / 4 hợp đồng dịch vụ** trong ba năm — đây là ngưỡng theo dõi tại điểm kiểm tra §5.

**Biên an toàn 52%** rộng, vì **cấu trúc chi phí gần như toàn biến phí**: không bán được gói template thì cũng không phải mua tài sản đồ hoạ cho gói đó. Hệ quả: kể cả ở kịch bản bi quan, dự án **không lỗ tiền mặt** — hậu quả của việc không đạt ngưỡng là công sức bỏ ra không thu lại được giá trị tương xứng, nghiêm trọng nhưng khác bản chất so với thua lỗ tài chính.

---

## 5. Timeframe for Realizing Benefits

| Giai đoạn                    | Thời gian                   | Lợi ích bắt đầu xuất hiện | Trạng thái mong đợi |
| ---------------------------- | --------------------------- | ------------------------- | ------------------- |
| Trong dự án — mốc M3         | Tuần 8 (2026-10-18)         | BN-10                     | Đo và nghiệm thu tại mốc |
| Trong dự án — mốc M4         | Tuần 10 (2026-11-01)        | BN-07, BN-08, BN-09       | Đo và nghiệm thu tại mốc |
| Đóng dự án                   | Tuần 15 (2026-12-06)        | BN-05, BN-11, BN-12       | Đánh giá tại buổi tổng kết |
| Quý 1 sau bàn giao           | Tháng 1–3 Năm 1             | BN-04, BN-06              | Đo trên nhóm người dùng đầu tiên |
| Quý 2 sau bàn giao           | Tháng 4–6 Năm 1             | BN-01                     | Gói template đầu tiên bán được |
| Quý 3 sau bàn giao           | Tháng 7–9 Năm 1             | BN-02                     | Hợp đồng dịch vụ đầu tiên |
| Năm 2                        | Tháng 13–24                 | BN-03                     | Hợp đồng hỗ trợ SLA đầu tiên |
| Năm 1 → Năm 3                | 36 tháng                    | Toàn bộ                   | Đạt mục tiêu Năm 3 |

**Điểm quyết định chính thức.** Nếu đến hết **Quý 4 Năm 1** số gói template bán được dưới **38** (ngưỡng hoà vốn 48% tính tại §4.7), nhà tài trợ phải xem xét lại giá gói, chất lượng mẫu, hoặc chính giả định về nhu cầu thị trường. Đây là điểm quyết định, không phải cảnh báo mềm.

---

## 6. Benefits Owner

Đội chỉ có 3 thành viên nên **một người kiêm nhiều vai trò**. Bảng phân theo vai trò; ánh xạ vai trò sang người cụ thể ghi tại Project Charter §9.

| Vai trò                | Người đảm nhiệm  | Trách nhiệm về lợi ích |
| ---------------------- | ---------------- | ---------------------- |
| Nhà tài trợ (Sponsor)  | Phạm Quang Anh — Enticy Studios | Chịu trách nhiệm cuối cùng về BN-01 → BN-04 và BN-12. Ra quyết định khi lợi ích chệch mục tiêu |
| Giám đốc dự án (PM)    | Nguyễn Thế Chiến  | Chịu trách nhiệm BN-11 và việc bàn giao danh mục lợi ích khi đóng dự án |
| Trưởng nhóm kỹ thuật   | Nguyễn Việt Quang  | Chịu trách nhiệm BN-07, BN-08, BN-09, BN-10 trong thời gian dự án |
| Trưởng nhóm sản phẩm   | Phạm Quang Anh  | Chịu trách nhiệm BN-05, BN-06. Thu thập phản hồi người dùng |
| Giảng viên hướng dẫn   | Thầy Nguyễn Đình Quảng | Đánh giá về mặt học thuật; không chịu trách nhiệm về lợi ích kinh doanh |

**Chuyển giao.** Tại buổi đóng dự án (tuần 15), Giám đốc dự án bàn giao cho Nhà tài trợ — **có biên bản** — bảng danh mục lợi ích kèm trạng thái, số liệu baseline đã đo, và lịch rà soát 3 năm tiếp theo. Không có biên bản thì các lợi ích sau bàn giao sẽ không có ai theo dõi.

---

## 7. Metrics

| ID    | Chỉ số                          | Đo cho lợi ích | Định nghĩa đo                                              | Nguồn dữ liệu | Tần suất | Người đo |
| ----- | ------------------------------- | -------------- | ---------------------------------------------------------- | ------------- | -------- | -------- |
| MT-01 | Doanh thu gói template          | BN-01 | Tổng tiền thu từ bán gói template trong kỳ, chưa trừ phí cổng thanh toán | Báo cáo cổng thanh toán | Hàng tháng | Nhà tài trợ |
| MT-02 | Số gói template bán được        | BN-01 | Số đơn hàng hoàn tất trong kỳ, theo từng gói                | Báo cáo cổng thanh toán | Hàng tháng | Nhà tài trợ |
| MT-03 | Doanh thu dịch vụ B2B           | BN-02 | Giá trị hợp đồng đã nghiệm thu trong kỳ                     | Hợp đồng đã ký | Hàng quý | Nhà tài trợ |
| MT-04 | Doanh thu hỗ trợ SLA            | BN-03 | Giá trị hợp đồng hỗ trợ còn hiệu lực, phân bổ theo kỳ       | Hợp đồng đã ký | Hàng quý | Nhà tài trợ |
| MT-05 | Chi phí hạ tầng / người dùng    | BN-04 | Tổng chi phí hạ tầng tháng ÷ số người dùng hoạt động tháng  | Hoá đơn nhà cung cấp + số liệu truy cập | Hàng tháng | Nhà tài trợ |
| MT-06 | Thời gian tạo một video         | BN-06 | Từ lúc mở ứng dụng đến lúc file MP4 được lưu; kịch bản chuẩn 5 cảnh, 60 giây, có ảnh | Buổi kiểm thử người dùng, ≥ 10 người | Mỗi quý | Trưởng nhóm sản phẩm |
| MT-07 | Mức tăng bộ nhớ theo độ dài     | BN-07 | Bộ nhớ đỉnh video 10 phút ÷ bộ nhớ đỉnh video 1 phút, cùng độ phân giải | Công cụ đo bộ nhớ của trình duyệt | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-08 | Tỷ lệ đầu ra giống nhau         | BN-08 | Xuất cùng một scene JSON trên 3 máy khác cấu hình, so checksum luồng video | Kịch bản kiểm thử tự động | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-09 | Lưu lượng nội dung gửi đi       | BN-09 | Tổng byte trong các request rời khỏi trình duyệt khi tạo và xuất video | Kiểm thử thủ công + kiểm toán | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-10 | Độ chính xác hiển thị tiếng Việt | BN-10 | Tỷ lệ ký tự đúng trên bộ kiểm thử đủ 134 tổ hợp dấu, cả khung ngang và dọc | Bộ kiểm thử hình ảnh | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-11 | Tỷ lệ xuất video thành công     | — (OB-06) | Số lần xuất thành công ÷ tổng số lần thử, trên 100 lần ở các trình duyệt mục tiêu | Kịch bản kiểm thử | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-12 | Năng lực đội                    | BN-11 | Số thành viên tự triển khai được pipeline WebCodecs theo luồng không cần hỗ trợ | Đánh giá nội bộ | Khi kết thúc dự án | Giám đốc dự án |

**Nguyên tắc đo:**

- **Có baseline trước khi bắt đầu.** MT-06 phải đo trên quy trình thủ công hiện tại **trước mốc M1**, nếu không BN-06 trở thành lời tuyên bố không kiểm chứng được.
- **MT-07 là cách duy nhất kiểm chứng "không giới hạn độ dài".** Không thể chứng minh bằng cách xuất một video dài rồi tuyên bố thành công — phải chứng minh bộ nhớ **không tăng theo độ dài**.
- **Không đo bằng cảm nhận.** Chỉ số nào không có nguồn dữ liệu cụ thể thì loại khỏi danh mục.
- **MT-01 → MT-05 là đầu vào để tính lại NPV và BCR.** Mỗi quý, số thực đo thay số giả định trong §4, cho ra NPV và BCR cập nhật — đây là cách phát hiện sớm việc dự án đang rời khỏi ngưỡng hoà vốn 48%.

---

## 8. Assumptions and Risks

### 8.1. Giả định mà lợi ích phụ thuộc vào

| ID giả định | Nội dung                                                        | Lợi ích bị ảnh hưởng nếu sai |
| ----------- | --------------------------------------------------------------- | ---------------------------- |
| AS-01       | Người dùng hiện mất ~45 phút để tạo một video 60 giây            | BN-06 — nếu baseline thật thấp hơn nhiều, mức cải thiện không đủ hấp dẫn |
| AS-04       | Người dùng chấp nhận mức giá 249.000 VND cho một gói template    | BN-01 — trực tiếp |
| AS-05       | Bán được 80 / 260 / 500 gói template trong ba năm                | BN-01 — là biến số của phân tích độ nhạy §4.7 |
| AS-06       | Tỷ lệ chiết khấu 12%/năm phản ánh đúng chi phí vốn               | Toàn bộ §4 — NPV, BCR, payback đều tính trên `r` này |
| AS-10       | Người dùng mục tiêu dùng trình duyệt có hỗ trợ WebCodecs         | BN-05, BN-06 — không xuất được thì không có lợi ích nào |
| AS-11       | Mua được tài sản đồ hoạ có **quyền phân phối lại** trong ngân sách | BN-01 — không có quyền này thì không bán gói template được |
| AS-27       | Bán được dịch vụ B2B ở mức 8.000.000 VND/hợp đồng                | BN-02 |
| AS-29       | Doanh nghiệp chấp nhận hợp đồng hỗ trợ SLA 12.000.000 VND/năm    | BN-03 |
| AS-30       | Công sức bảo trì 200 / 400 / 700 giờ mỗi năm                     | Mẫu số của BCR — nếu thực tế cao hơn nhiều, BCR có thể xuống dưới 1 |
| AS-31       | Người dùng miễn phí chuyển đổi thành khách hàng trả tiền ở tỷ lệ đủ | BN-01, BN-02, BN-03 — mắt xích nối BN-05 với doanh thu |
| AS-13       | Nhà tài trợ duy trì việc theo dõi lợi ích sau khi dự án đóng     | Toàn bộ nhóm lợi ích sau bàn giao |

### 8.2. Rủi ro đối với việc hiện thực hoá lợi ích

| ID    | Rủi ro                                                         | Lợi ích bị đe doạ | Ứng phó |
| ----- | -------------------------------------------------------------- | ----------------- | ------- |
| BR-01 | Không ai theo dõi lợi ích sau khi dự án đóng                    | Tất cả sau bàn giao | Biên bản bàn giao có chữ ký; lịch rà soát đặt sẵn trong lịch của nhà tài trợ |
| BR-02 | Không đo baseline MT-06 trước khi phát triển                    | BN-06             | Đưa việc đo baseline thành đầu ra bắt buộc của mốc M1 |
| BR-03 | Doanh thu dưới ngưỡng hoà vốn 48% (BCR < 1)                     | BN-01, BN-02, BN-03 | Quyết định tại điểm kiểm tra hết Quý 4 Năm 1 (§5) |
| BR-04 | Phần mềm miễn phí thu hút người dùng nhưng không ai mua gói template | BN-01        | Rủi ro lớn nhất của mô hình M2 — theo dõi tỷ lệ chuyển đổi từ tháng đầu; nếu thấp, chuyển trọng tâm sang dịch vụ B2B |
| BR-05 | Kiến trúc theo luồng không đạt, phải quay lại giới hạn độ dài   | BN-07             | Nguyên mẫu tại M2; nếu thất bại, công bố giới hạn rõ ràng thay vì hứa suông |
| BR-06 | Chỉ số được báo cáo nhưng không dẫn đến hành động nào           | Tất cả            | Mỗi kỳ rà soát phải kết thúc bằng một quyết định: tiếp tục, điều chỉnh, hoặc dừng |
| BR-07 | Công sức bảo trì thực tế vượt xa ước lượng AS-30                | Toàn bộ nhóm tài chính | Ghi nhận giờ công thực tế từ tháng đầu; tính lại BCR mỗi quý |

---

## 9. Benefits Realization Tracking

| Kỳ rà soát                | Thời điểm                     | Người chủ trì   | Đầu ra |
| ------------------------- | ----------------------------- | --------------- | ------ |
| Rà soát tại mốc           | Tại M3, M4                    | Giám đốc dự án  | Cập nhật trạng thái BN-07 → BN-10 |
| Rà soát đóng dự án        | Tuần 15                       | Giám đốc dự án  | Biên bản bàn giao danh mục lợi ích |
| Rà soát hàng quý          | Cuối mỗi quý, Năm 1 → Năm 3   | Nhà tài trợ     | Báo cáo hiện thực hoá lợi ích + NPV/BCR cập nhật |
| Rà soát điểm quyết định   | Hết Quý 4 Năm 1               | Nhà tài trợ     | Quyết định: tiếp tục / điều chỉnh giá / chuyển trọng tâm sang dịch vụ / dừng |

**Mẫu báo cáo.** Mỗi kỳ rà soát điền bảng dưới; cột *Đánh giá* dùng ba mức 🟢 Đạt · 🟡 Chệch < 20% · 🔴 Chệch ≥ 20%. Kèm theo đó, mỗi kỳ hàng quý phải cập nhật **NPV và BCR tính lại trên số thực đo** (theo phương pháp §4.4 và §4.5). Nếu BCR tụt dưới 1, kích hoạt rủi ro BR-03.

| ID    | Lợi ích | Mục tiêu kỳ này | Thực đạt | Chênh lệch | Đánh giá | Nguyên nhân | Hành động | Người chịu trách nhiệm | Hạn |
| ----- | ------- | --------------- | -------- | ---------- | -------- | ----------- | --------- | ---------------------- | --- |
| BN-01 |         |                 |          |            |          |             |           |                        |     |
| BN-02 |         |                 |          |            |          |             |           |                        |     |
| ...   |         |                 |          |            |          |             |           |                        |     |

| Mức đánh giá | Xử lý bắt buộc |
| ------------ | -------------- |
| 🟢 Đạt        | Ghi nhận, không cần hành động |
| 🟡 Chệch < 20% | Ghi nguyên nhân, đề ra hành động khắc phục, theo dõi ở kỳ sau |
| 🔴 Chệch ≥ 20% | Báo cáo nhà tài trợ trong 5 ngày làm việc; xem xét lại giả định gốc trong Assumption Log; nếu lệch hai kỳ liên tiếp, đưa ra quyết định về số phận sản phẩm |

**Đóng danh mục lợi ích** khi mọi lợi ích đạt trạng thái *Đã hiện thực hoá* hoặc *Không còn khả thi*, và nhà tài trợ ký xác nhận báo cáo tổng kết cuối Năm 3. Trước đó, danh mục vẫn là tài liệu sống.

---

*Tài liệu liên quan: Business Case · Hợp đồng thực hiện dự án · Project Charter · Assumption Log — cùng bộ tài liệu quản lý dự án PromptVideo.*
