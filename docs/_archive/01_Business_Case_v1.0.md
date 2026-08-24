<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                     |                                |
| ------------------- | ------------------------------ |
| **Nhóm tiến trình** | Pre-project                     |
| **Tên tài liệu**    | Business Case                  |
| **Phiên bản**       | Ver. 1.0                       |
| **Nhóm thực hiện**  | `<<Tên nhóm>>`                 |
| **Ngày phát hành**  | 2026-08-20                     |
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
| 1  | Ver 1.0   | 2026-08-20    | Tạo mới        | Khởi tạo Business Case: nhu cầu, phân tích phương án, chi phí – lợi ích, phân tích tài chính, đánh giá khả thi, khuyến nghị | Nguyễn Thế Chiến | Phạm Quang Anh |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

## Mục lục

1. [Executive Summary](#1-executive-summary)
2. [Business Need](#2-business-need)
3. [Analysis of the Situation](#3-analysis-of-the-situation)
4. [Cost–Benefit Analysis](#4-costbenefit-analysis)
5. [Financial Analysis](#5-financial-analysis)
6. [Feasibility Assessment](#6-feasibility-assessment)
7. [Risks and Constraints](#7-risks-and-constraints)
8. [Recommendation](#8-recommendation)
9. [Phụ lục A — Nguồn và giả định số liệu](#9-phụ-lục-a--nguồn-và-giả-định-số-liệu)

<div style="page-break-after: always"></div>

<!-- ============================== NỘI DUNG ============================== -->

> **Lưu ý về bối cảnh.** Tài liệu này được lập trên một **bối cảnh doanh nghiệp giả định** (Enticy Studios là tổ chức chủ quản) phục vụ môn Quản lý dự án phần mềm. Toàn bộ số liệu tài chính, quy mô người dùng và đơn giá là **giả định có ghi chú**, được liệt kê tại [Phụ lục A](#9-phụ-lục-a--nguồn-và-giả-định-số-liệu) và đăng ký trong [Assumption Log](../01_Initiating/02_Assumption_Log_v1.0.md). Các thông số kỹ thuật (hỗ trợ trình duyệt, đặc tính API) là số liệu thật.

---

## 1. Executive Summary

PromptVideo là công cụ web biến văn bản và hình ảnh thành video trình chiếu MP4, trong đó **toàn bộ quá trình dựng và mã hoá chạy trên máy người dùng** thông qua API WebCodecs — không cần máy chủ render.

**Phần mềm là mã nguồn mở, miễn phí, giấy phép Apache 2.0.** Doanh thu không đến từ việc bán quyền truy cập phần mềm mà từ hai thứ mà một bản sao chép không tự có được: **gói template có bản quyền** và **dịch vụ doanh nghiệp**.

| Hạng mục                          | Giá trị                                       |
| --------------------------------- | --------------------------------------------- |
| Vốn tiền mặt bỏ ra (Năm 0)        | **1.500.000 VND**                             |
| Công sức quy đổi (không chi tiền) | 450 giờ ≈ 36.000.000 VND                      |
| NPV — cơ sở tiền mặt (3 năm, r = 12%) | **+280.750.000 VND**                      |
| NPV — cơ sở kinh tế đầy đủ (gồm chi phí cơ hội) | **+165.094.000 VND**            |
| Hoàn vốn — cơ sở kinh tế          | ~1,29 năm (danh nghĩa) — ~1,38 năm (chiết khấu) |
| Điểm hoà vốn                      | 48% kịch bản doanh thu cơ sở                  |
| Thời lượng dự án                  | 15 tuần (2026-08-24 → 2026-12-06), đội 3 người |
| Khuyến nghị                       | **Phê duyệt phương án P3 + mô hình M2**       |

Bốn đặc tính tạo nên vị thế của sản phẩm: **vốn khởi tạo gần bằng không**, **chi phí vận hành gần bằng không** (không có máy chủ render), **dữ liệu không rời khỏi máy người dùng**, và **kết quả xuất ra lặp lại được**.

---

## 2. Business Need

### 2.1. Vấn đề

Nhu cầu video ngắn dạng trình chiếu — báo cáo nội bộ, bài giảng, nội dung mạng xã hội — đang tăng đều ở ba nhóm người dùng tại Việt Nam:

| Nhóm                          | Nhu cầu điển hình                         | Tần suất       |
| ----------------------------- | ----------------------------------------- | -------------- |
| Doanh nghiệp vừa và nhỏ (SME) | Video giới thiệu sản phẩm, báo cáo tháng  | 4–8 video/tháng |
| Giáo viên, giảng viên         | Bài giảng số, video ôn tập                | 5–20 video/học kỳ |
| Người sáng tạo nội dung       | Video tóm tắt, danh sách, tin nhanh       | 10–30 video/tháng |

Quy trình hiện tại: soạn slide (PowerPoint/Canva) → quay màn hình hoặc xuất video → chỉnh sửa trên CapCut/Premiere → xuất file. Ước tính **~45 phút cho một video 60 giây**, phần lớn là thao tác lặp lại.

### 2.2. Hạn chế của các giải pháp hiện có

| Vấn đề                            | Ảnh hưởng                                                                 |
| --------------------------------- | ------------------------------------------------------------------------- |
| Thuê bao tính bằng USD            | Canva Pro ~15 USD/tháng, Pictory ~23 USD/tháng — rào cản với SME và giáo viên |
| Render trên máy chủ nhà cung cấp  | Nội dung (số liệu kinh doanh, thông tin học sinh) rời khỏi tổ chức          |
| Giới hạn độ dài và hạn mức xuất   | Gói miễn phí giới hạn số phút; gói trả phí vẫn có hạn mức                   |
| Kết quả không lặp lại được        | Công cụ sinh video bằng AI cho kết quả khác nhau mỗi lần chạy               |
| Khó dựng hàng loạt                | Không có định dạng dữ liệu mở để sinh 50 video từ một bảng tính             |
| Xử lý tiếng Việt kém              | Dấu bị cắt, ngắt dòng sai ở khung hình dọc                                  |

### 2.3. Cơ hội

Chưa có sản phẩm nào trên thị trường Việt Nam kết hợp đồng thời: **miễn phí + xử lý cục bộ + không giới hạn độ dài + ưu tiên tiếng Việt**. Công nghệ WebCodecs (ổn định trên Chrome từ 2021, Firefox từ 2024, Safari từ 2025) lần đầu cho phép mã hoá video chất lượng sản xuất ngay trong trình duyệt — cửa sổ công nghệ này mở ra khả năng vận hành với chi phí biên gần bằng không.

### 2.4. Hệ quả nếu không làm gì

- Nhóm người dùng mục tiêu tiếp tục trả 180–276 USD/năm cho công cụ nước ngoài
- Enticy Studios bỏ lỡ cửa sổ công nghệ trước khi đối thủ lớn tích hợp WebCodecs
- Nhóm dự án không có sản phẩm thực hành cho môn Quản lý dự án phần mềm

---

## 3. Analysis of the Situation

Có **hai quyết định độc lập** cần phân tích: quyết định về kiến trúc (mục 3.1–3.3) và quyết định về mô hình doanh thu (mục 3.4). Trước đây hai quyết định này bị gộp lại, dẫn đến một mô hình doanh thu mâu thuẫn với chính kiến trúc đã chọn — sai sót đã được sửa ở phiên bản 1.1 này.

### 3.1. Các phương án kiến trúc

| Mã     | Phương án                                | Mô tả                                                              |
| ------ | ---------------------------------------- | ------------------------------------------------------------------ |
| **P0** | Không làm gì                             | Giữ nguyên hiện trạng, người dùng tự xoay xở                        |
| **P1** | Mua/thuê lại SaaS nước ngoài             | Mua giấy phép sỉ Canva/Pictory, bán lại kèm dịch vụ hỗ trợ tiếng Việt |
| **P2** | Tự dựng dịch vụ render phía máy chủ      | Remotion + FFmpeg trên máy chủ đám mây, người dùng gửi yêu cầu lên   |
| **P3** | **Render trong trình duyệt (WebCodecs)** | Dựng và mã hoá hoàn toàn trên máy người dùng, máy chủ chỉ phục vụ file tĩnh |

### 3.2. Bảng so sánh kiến trúc

Thang điểm 1–5 (5 là tốt nhất). Trọng số phản ánh mức độ quan trọng với một đội 3 người, vốn tiền mặt gần bằng không.

| Tiêu chí                     | Trọng số | P0 | P1 | P2 | P3 |
| ---------------------------- | -------- | -- | -- | -- | -- |
| Vốn khởi tạo thấp            | 25%      | 5  | 2  | 1  | 5  |
| Chi phí vận hành thấp        | 20%      | 5  | 2  | 1  | 5  |
| Tính riêng tư của dữ liệu    | 15%      | 3  | 1  | 2  | 5  |
| Tính lặp lại của đầu ra      | 15%      | 2  | 2  | 4  | 5  |
| Phù hợp năng lực đội         | 15%      | 5  | 4  | 2  | 4  |
| Khả năng khác biệt hoá       | 10%      | 1  | 1  | 3  | 5  |
| **Điểm có trọng số**         | **100%** | **3,85** | **2,05** | **2,05** | **4,85** |

*Cách tính P3: 5(0,25) + 5(0,20) + 5(0,15) + 5(0,15) + 4(0,15) + 5(0,10) = 1,25 + 1,00 + 0,75 + 0,75 + 0,60 + 0,50 = 4,85.*

### 3.3. Lý do loại từng phương án kiến trúc

- **P0 — Không làm gì.** Điểm cao giả tạo do không phát sinh chi phí và rủi ro, nhưng không tạo ra giá trị nào. Chỉ dùng làm mốc so sánh.
- **P1 — Bán lại SaaS.** Biên lợi nhuận mỏng, phụ thuộc hoàn toàn vào chính sách giá của nhà cung cấp nước ngoài; điều khoản bán lại của phần lớn nhà cung cấp không cho phép mô hình này nếu không có hợp đồng đối tác.
- **P2 — Render phía máy chủ.** Chi phí GPU/CPU tăng tuyến tính theo số phút video xuất ra, trong khi đội **không có vốn tiền mặt**. Việc nhận và lưu nội dung người dùng còn làm phát sinh nghĩa vụ xử lý dữ liệu cá nhân theo Nghị định 13/2023/NĐ-CP.
- **P3 — Render client-side. ✅ Được chọn.** Vốn và chi phí biên gần bằng không; dữ liệu không rời máy người dùng; đầu ra xác định do mọi hiệu ứng là hàm của số khung hình. Đánh đổi: phụ thuộc trình duyệt và phần cứng người dùng — phương án giảm thiểu tại [mục 6.1](#61-khả-thi-về-kỹ-thuật).

### 3.4. Các phương án mô hình doanh thu

Kiến trúc P3 kết hợp với giấy phép Apache 2.0 tạo ra một ràng buộc cứng: **mọi cổng khoá tính năng đều không thực thi được.**

- **Về kỹ thuật:** toàn bộ mã chạy trên máy người dùng. Một điều kiện `if (isPro)` trong JavaScript bị vô hiệu hoá trong vài phút bằng công cụ dành cho nhà phát triển. Điều này đúng kể cả khi mã nguồn đóng — nó là hệ quả của kiến trúc client-side, không phải của giấy phép.
- **Về pháp lý:** Apache 2.0 cho phép bất kỳ ai fork mã nguồn, gỡ watermark, build lại và phân phối. Không có cơ sở pháp lý để ngăn.

Vì vậy mô hình doanh thu **bắt buộc phải dựa trên thứ mà bản sao chép không tự có được**, chứ không dựa trên việc chặn truy cập.

| Mã     | Mô hình                                   | Cơ chế thu tiền                                       | Đánh giá |
| ------ | ----------------------------------------- | ----------------------------------------------------- | -------- |
| **M0** | Thuê bao gỡ watermark                     | Khoá tính năng trong mã client                        | ❌ **Không thực thi được** — đã loại, xem lý do trên |
| **M1** | Giấy phép thương mại (source-available)   | Doanh nghiệp phải mua quyền dùng thương mại           | ⚠️ Buộc từ bỏ Apache 2.0; mâu thuẫn với định hướng mã nguồn mở của nhánh `main` |
| **M2** | **Gói template có bản quyền + dịch vụ B2B** | Bán **nội dung** (mẫu thiết kế, bộ nhận diện) và **dịch vụ** (tuỳ chỉnh, đào tạo, hỗ trợ SLA) | ✅ **Được chọn** |
| **M3** | Tier đám mây trả phí                      | Bán năng lực máy chủ cho việc client làm không nổi     | ⚠️ Làm mất lợi thế chi phí ~0; cần vốn hạ tầng — để ở lộ trình sau |

### 3.5. Vì sao M2 đứng vững

Ba dòng doanh thu của M2 đều không thể bị vô hiệu hoá bằng cách fork mã nguồn:

| Dòng doanh thu | Vì sao fork không thay thế được |
| -------------- | ------------------------------- |
| **Gói template có bản quyền** | Template là **nội dung**, không phải mã. Sao chép được phần mềm không có nghĩa là có bộ mẫu thiết kế, ảnh và biểu tượng đã mua quyền phân phối lại. Đây cũng là dòng doanh thu phù hợp nhất với kiến trúc client-side: gói template là file dữ liệu, giao hàng bằng cách tải về, không cần máy chủ. |
| **Dịch vụ B2B** | Thiết kế bộ template theo nhận diện thương hiệu của khách hàng, đào tạo đội marketing, tích hợp vào quy trình sẵn có. Là công sức con người, không sao chép được. |
| **Hỗ trợ có cam kết SLA** | Doanh nghiệp trả tiền để có người chịu trách nhiệm khi hỏng, có hoá đơn VAT, có đầu mối liên hệ. Một bản fork trên GitHub không cấp được những thứ đó. |

**Luận điểm nền tảng:** người sẵn sàng bẻ khoá thì dù có cổng khoá cũng không trả tiền. Phân khúc trả tiền là doanh nghiệp — họ trả vì hoá đơn, vì rủi ro pháp lý, vì có người hỗ trợ, không phải vì bị chặn tính năng. Mã nguồn mở còn **làm tăng** giá trị của dòng doanh thu này: doanh nghiệp yên tâm hơn khi biết mình không bị khoá vào một nhà cung cấp có thể biến mất.

**Điều kiện để M2 hoạt động:** sản phẩm phải hỗ trợ **định dạng gói template cài thêm được**. Đây là yêu cầu bắt buộc của v1.0 (RQ-11 trong [Project Charter](../01_Initiating/01_Project_Charter_v1.0.md#41-yêu-cầu-chức-năng)) — không có nó thì toàn bộ mô hình doanh thu không triển khai được.

---

## 4. Cost–Benefit Analysis

### 4.1. Nguyên tắc trình bày chi phí

Dự án có đặc điểm khác thường: **vốn tiền mặt gần bằng không, chi phí chủ yếu là công sức của chính đội dự án.** Nếu chỉ trình bày một trong hai, bức tranh sẽ bị bóp méo. Vì vậy tài liệu này tách rõ:

| Loại chi phí                  | Ý nghĩa | Dùng để |
| ----------------------------- | ------- | ------- |
| **Chi phí tiền mặt**          | Tiền thật phải chi ra | Đánh giá rủi ro thanh khoản, xác định vốn cần huy động |
| **Chi phí cơ hội của công sức** | Giá trị thời gian đội bỏ ra, quy đổi theo đơn giá thị trường; **không phải tiền chi ra** | Đánh giá xem dự án có đáng làm so với việc đội dùng thời gian đó vào việc khác |

### 4.2. Chi phí đầu tư ban đầu (Năm 0 — giai đoạn dự án, 15 tuần)

**Chi phí tiền mặt:**

| Hạng mục                             | Cách tính                                     | Thành tiền (VND) |
| ------------------------------------ | --------------------------------------------- | ---------------: |
| Tên miền năm đầu                     | 1 tên miền `.com`                              |          300.000 |
| Tài sản đồ hoạ có bản quyền cho 8 mẫu miễn phí | Ảnh, biểu tượng có quyền phân phối lại |        1.000.000 |
| Font chữ                             | SIL OFL — Be Vietnam Pro, Noto Sans            |                0 |
| Hạ tầng (hosting tĩnh)               | Cloudflare Pages / GitHub Pages — gói miễn phí |                0 |
| Dự phòng                             |                                                |          200.000 |
| **TỔNG VỐN TIỀN MẶT**                |                                                |   **1.500.000** |

**Chi phí cơ hội của công sức (không chi tiền):**

| Hạng mục            | Cách tính                                    | Quy đổi (VND) |
| ------------------- | -------------------------------------------- | ------------: |
| Công sức phát triển | 3 người × 15 tuần × 10 giờ/tuần = **450 giờ** |    36.000.000 |

### 4.3. Chi phí vận hành hàng năm sau bàn giao

**Tiền mặt:**

| Hạng mục                                        | Năm 1     | Năm 2      | Năm 3      |
| ----------------------------------------------- | --------: | ---------: | ---------: |
| Hạ tầng, tên miền, chứng chỉ                    | 1.500.000 |  3.000.000 |  6.000.000 |
| Bản quyền tài sản đồ hoạ cho gói template mới   | 3.000.000 |  6.000.000 | 10.000.000 |
| Phí cổng thanh toán và kênh bán (~5% doanh thu) | 1.500.000 |  5.000.000 | 10.000.000 |
| **Cộng tiền mặt**                               | **6.000.000** | **14.000.000** | **26.000.000** |

**Công sức (không chi tiền):**

| Hạng mục                                    | Năm 1      | Năm 2      | Năm 3      |
| ------------------------------------------- | ---------: | ---------: | ---------: |
| Bảo trì, làm gói template mới, thực hiện dịch vụ | 200 giờ | 400 giờ    | 700 giờ    |
| **Quy đổi (VND)**                           | 16.000.000 | 32.000.000 | 56.000.000 |

### 4.4. Lợi ích

**Lợi ích tài chính — ba dòng doanh thu theo mô hình M2:**

| Dòng doanh thu                | Đơn giá                     | Năm 1        | Năm 2         | Năm 3         |
| ----------------------------- | --------------------------- | -----------: | ------------: | ------------: |
| Gói template chuyên ngành     | 249.000 VND/gói (mua một lần) | 80 gói<br>19.920.000 | 260 gói<br>64.740.000 | 500 gói<br>124.500.000 |
| Dịch vụ B2B (template theo thương hiệu, đào tạo) | 8.000.000 VND/hợp đồng | 2 hợp đồng<br>16.000.000 | 5 hợp đồng<br>40.000.000 | 9 hợp đồng<br>72.000.000 |
| Hỗ trợ có SLA                 | 12.000.000 VND/năm/khách hàng | 0 | 2 khách hàng<br>24.000.000 | 5 khách hàng<br>60.000.000 |
| **TỔNG DOANH THU**            |                             | **35.920.000** | **128.740.000** | **256.500.000** |

Năm 1 không có doanh thu hỗ trợ SLA vì sản phẩm chưa đủ thời gian vận hành để doanh nghiệp cam kết hợp đồng dài hạn.

**Lợi ích phi tài chính** — chi tiết cách đo tại [Benefit Management Plan](./02_Benefit_Management_Plan_v1.0.md).

| Lợi ích                                  | Hiện trạng          | Mục tiêu                | Người hưởng lợi |
| ---------------------------------------- | ------------------- | ----------------------- | --------------- |
| Rút ngắn thời gian tạo một video 60 giây | ~45 phút            | ≤ 5 phút (giảm ~89%)    | Người dùng cuối |
| Chi phí phần mềm hàng năm                | 180–276 USD/năm     | **0 VND** — phần mềm miễn phí | SME, giáo viên |
| Nội dung rời khỏi tổ chức                | Có (upload lên SaaS)| Không (xử lý cục bộ)    | Bộ phận tuân thủ |
| Giới hạn độ dài video                    | Có hạn mức theo gói | Không giới hạn cứng     | Người dùng cuối |
| Đầu ra giống nhau giữa các lần chạy      | Không đảm bảo       | 100% giống nhau         | Người dùng cuối |
| Năng lực đội ngũ                         | —                   | Làm chủ WebCodecs, Canvas API | Enticy Studios |
| Tài sản mã nguồn mở và uy tín kỹ thuật   | —                   | Kho mã công khai, có người dùng thật | Enticy Studios |

---

## 5. Financial Analysis

### 5.1. Bảng dòng tiền — cơ sở tiền mặt (đơn vị: VND)

Bảng này chỉ tính tiền thật vào và ra. Nó trả lời câu hỏi: *dự án có cần huy động vốn không, và bao lâu thì có tiền về?*

| Năm | Dòng vào    | Dòng ra    | Dòng tiền ròng | Hệ số chiết khấu (12%) | Giá trị hiện tại | Luỹ kế PV     |
| --- | ----------: | ---------: | -------------: | ---------------------: | ---------------: | ------------: |
| 0   |           0 |  1.500.000 |    −1.500.000  |                 1,0000 |      −1.500.000  |   −1.500.000  |
| 1   |  35.920.000 |  6.000.000 |    29.920.000  |                 0,8929 |      26.714.286  |   25.214.286  |
| 2   | 128.740.000 | 14.000.000 |   114.740.000  |                 0,7972 |      91.469.986  |  116.684.272  |
| 3   | 256.500.000 | 26.000.000 |   230.500.000  |                 0,7118 |     164.065.347  |  280.749.619  |

**NPV (cơ sở tiền mặt) = +280.749.619 VND.** Luỹ kế chuyển dương ngay trong Năm 1.

### 5.2. Bảng dòng tiền — cơ sở kinh tế đầy đủ (đơn vị: VND)

Bảng này cộng thêm chi phí cơ hội của công sức. Nó trả lời câu hỏi khắt khe hơn: *đội có nên dùng 450 giờ vào việc này thay vì việc khác?*

| Năm | Doanh thu   | Chi phí tiền mặt | Chi phí công sức | Dòng ròng      | Hệ số chiết khấu | Giá trị hiện tại | Luỹ kế PV     |
| --- | ----------: | ---------------: | ---------------: | -------------: | ---------------: | ---------------: | ------------: |
| 0   |           0 |        1.500.000 |       36.000.000 |  −37.500.000   |           1,0000 |     −37.500.000  |  −37.500.000  |
| 1   |  35.920.000 |        6.000.000 |       16.000.000 |   +13.920.000  |           0,8929 |      12.428.571  |  −25.071.429  |
| 2   | 128.740.000 |       14.000.000 |       32.000.000 |   +82.740.000  |           0,7972 |      65.959.694  |  +40.888.265  |
| 3   | 256.500.000 |       26.000.000 |       56.000.000 |  +174.500.000  |           0,7118 |     124.205.653  | +165.093.918  |

**NPV (cơ sở kinh tế) = +165.093.918 VND.**

### 5.3. Các chỉ tiêu

| Chỉ tiêu                            | Cơ sở tiền mặt   | Cơ sở kinh tế đầy đủ |
| ----------------------------------- | ---------------: | -------------------: |
| **NPV** (r = 12%, 3 năm)            | +280.749.619 VND | **+165.093.918 VND** |
| **Payback danh nghĩa**              | ~0,05 năm        | **~1,29 năm** (≈ 15 tháng) |
| **Payback chiết khấu**              | ~0,06 năm        | **~1,38 năm** (≈ 17 tháng) |
| **ROI** (chưa chiết khấu)           | ~24.900% — *không có ý nghĩa* | **623,1%** |
| **IRR** (xấp xỉ)                    | *không hội tụ có ý nghĩa*     | **~126%** |

> **Ghi chú phương pháp — quan trọng khi đọc bảng trên.** Khi vốn bỏ ra tiến gần về 0, **ROI và thời gian hoàn vốn trên cơ sở tiền mặt mất ý nghĩa** vì mẫu số quá nhỏ: chia bất cứ khoản lãi nào cho 1.500.000 cũng ra một tỷ lệ khổng lồ. Chỉ tiêu đáng dùng để ra quyết định trong trường hợp này là **NPV tuyệt đối trên cơ sở kinh tế đầy đủ** — nó cho biết dự án tạo ra bao nhiêu giá trị sau khi đã trừ cả chi phí cơ hội của thời gian mà đội bỏ ra. Trình bày ROI cơ sở tiền mặt ở đây chỉ để chỉ ra rằng con số đó không nên được dùng.

*Cách tính payback danh nghĩa (cơ sở kinh tế): vốn ban đầu 37.500.000; hết Năm 1 luỹ kế đạt 13.920.000, còn thiếu 23.580.000; dòng ròng Năm 2 là 82.740.000 → 23.580.000 / 82.740.000 = 0,29 năm. Tổng: 1 + 0,29 = 1,29 năm.*

### 5.4. Phân tích độ nhạy

Biến số rủi ro nhất là **khối lượng bán được** (số gói template và số hợp đồng dịch vụ). Bảng dưới thay đổi doanh thu cả ba năm theo tỷ lệ, giữ nguyên chi phí, tính trên **cơ sở kinh tế đầy đủ**:

| Kịch bản  | Hệ số doanh thu | NPV (VND)        | Kết luận |
| --------- | --------------- | ---------------: | -------- |
| Bi quan   | 50%             |     +6.457.000   | Vẫn hoà vốn, nhưng biên rất mỏng |
| **Cơ sở** | 100%            | **+165.094.000** | Khả thi |
| Lạc quan  | 150%            |   +323.731.000   | Rất hiệu quả |

*Cách tính: giá trị hiện tại của dòng doanh thu kịch bản cơ sở là 317.273.733 VND; tổng giá trị hiện tại của chi phí (tiền mặt 35.024.144 + công sức 79.655.612 + vốn ban đầu 37.500.000) là 152.179.756 VND. NPV = k × 317.273.733 − 152.179.756.*

**Điểm hoà vốn:** NPV = 0 khi k = 152.179.756 / 317.273.733 ≈ **48% kịch bản cơ sở** — tương đương khoảng **38 / 125 / 240 gói template** và **1 / 2 / 4 hợp đồng dịch vụ** trong ba năm. Đây là ngưỡng cần theo dõi trong [Benefit Management Plan](./02_Benefit_Management_Plan_v1.0.md).

Biên an toàn 52% rộng hơn đáng kể so với mô hình thuê bao ở phiên bản trước, vì **cấu trúc chi phí gần như toàn bộ là biến phí**: không bán được gói template thì cũng không phải mua tài sản đồ hoạ cho gói đó.

---

## 6. Feasibility Assessment

> Mục này được tách riêng theo yêu cầu của giảng viên — độ khả thi kỹ thuật và pháp lý là căn cứ cho việc thu thập yêu cầu ở giai đoạn sau.

### 6.1. Khả thi về kỹ thuật

**Kết luận: KHẢ THI, có điều kiện.**

Công nghệ lõi là WebCodecs `VideoEncoder`. Tình trạng hỗ trợ thực tế:

| Trình duyệt              | Phiên bản hỗ trợ | Ghi chú                                       |
| ------------------------ | ---------------- | --------------------------------------------- |
| Chrome / Edge (máy tính) | 94+              | Hỗ trợ đầy đủ, nền tảng mục tiêu chính         |
| Firefox (máy tính)       | 130+             | Hỗ trợ đầy đủ                                  |
| Safari (macOS/iOS)       | 26+              | Hỗ trợ đầy đủ                                  |
| Safari 16.4 – 18.7       | một phần         | Mã hoá được hình, **không mã hoá được âm thanh** |
| Firefox trên Android     | ❌               | Chưa hỗ trợ                                    |

**Yêu cầu mới: video không giới hạn độ dài.** Người dùng tự quyết định độ dài video và hệ thống phải dựng theo. Điều này loại bỏ cách làm đơn giản là giữ toàn bộ khung hình trong bộ nhớ rồi ghép một lần ở cuối, và bắt buộc dùng **kiến trúc mã hoá theo luồng**:

```
Dựng khung hình  →  Mã hoá  →  Ghép  →  Ghi ra file (từng phần)  →  Giải phóng bộ nhớ
        └────────────────── lặp lại theo từng khung ──────────────────┘
```

Bộ nhớ đỉnh khi đó phụ thuộc vào độ phân giải, **không phụ thuộc độ dài video**. Kỹ thuật này khả thi: `VideoEncoder` vốn hoạt động theo luồng, và File System Access API cho phép ghi dần ra file trên đĩa.

| Ràng buộc kỹ thuật                                     | Ảnh hưởng                                     | Phương án giảm thiểu |
| ------------------------------------------------------ | --------------------------------------------- | -------------------- |
| Kiến trúc theo luồng phải giữ bộ nhớ không tăng theo độ dài ([AS-16](../01_Initiating/02_Assumption_Log_v1.0.md)) | Không đạt thì phải quay lại giới hạn độ dài cứng | Chứng minh bằng nguyên mẫu tại M2, đo bằng tỷ lệ bộ nhớ 10 phút ÷ 1 phút ≤ 1,15 |
| File System Access API chỉ có trên Chromium ([AS-32](../01_Initiating/02_Assumption_Log_v1.0.md)) | Firefox và Safari không ghi trực tiếp ra đĩa được | Phương án dự phòng: ghi vào OPFS (Origin Private File System) rồi tải xuống một lần khi xong; nếu cũng không có, cảnh báo giới hạn độ dài theo bộ nhớ khả dụng |
| WebCodecs phải mã hoá được H.264 ở 1920×1080/30fps ([AS-14](../01_Initiating/02_Assumption_Log_v1.0.md)) | Không đạt thì toàn bộ sản phẩm phải đổi hướng | Nguyên mẫu tuần 2; dự phòng VP9/WebM |
| Video rất dài làm thời gian xuất kéo dài               | Người dùng có thể tưởng ứng dụng bị treo       | Thanh tiến trình theo khung hình, ước lượng thời gian còn lại, cho phép tạm dừng và huỷ |
| Tốc độ xuất phụ thuộc phần cứng người dùng             | Trải nghiệm không đồng đều                     | Công bố cấu hình tham chiếu; đo và hiển thị tốc độ thực tế |
| Không dùng được CSS animation (trôi khung hình)        | Phải tự viết bộ dựng, không tái sử dụng thư viện sẵn có | Chấp nhận — đây là quyết định kiến trúc cốt lõi, đã tính vào ước lượng công sức |
| Trình duyệt không hỗ trợ WebCodecs                     | Người dùng không xuất được video               | Phát hiện năng lực trình duyệt ngay khi mở, thông báo rõ và gợi ý trình duyệt thay thế |

**Năng lực đội:** công nghệ dùng đến là HTML/CSS/TypeScript và Canvas API — nằm trong phạm vi đã học. Phần mới cần nghiên cứu là WebCodecs, muxer MP4 và ghi file theo luồng; đã dành mốc M2 cho việc dựng nguyên mẫu kỹ thuật.

### 6.2. Khả thi về pháp lý

**Kết luận: KHẢ THI. Mô hình M2 đưa trọng tâm pháp lý sang bản quyền tài sản đồ hoạ — cần xử lý cẩn thận vì đây chính là hàng hoá được bán.**

| Vấn đề pháp lý                    | Đánh giá | Căn cứ và biện pháp |
| --------------------------------- | -------- | ------------------- |
| **Quyền phân phối lại tài sản trong gói template bán ra** | ⚠️ **Quan trọng nhất** | Gói template là sản phẩm thương mại. Ảnh, biểu tượng và font trong đó phải có giấy phép cho phép **phân phối lại trong sản phẩm phái sinh** — giấy phép "dùng thương mại" thông thường **không đủ**, cần loại *extended / multi-seat / redistribution*. Font SIL OFL cho phép đóng gói và bán kèm như một phần của sản phẩm lớn hơn, nhưng cấm bán riêng font. Cần lập danh mục giấy phép cho từng tài sản. Đăng ký ở [AS-11](../01_Initiating/02_Assumption_Log_v1.0.md). |
| **Bảo vệ dữ liệu cá nhân** (Nghị định 13/2023/NĐ-CP) | ✅ Rủi ro thấp | Kiến trúc client-side: ảnh và nội dung không truyền lên máy chủ, không lưu trữ. Sản phẩm gần như không thực hiện hành vi "xử lý dữ liệu cá nhân" của người dùng cuối. Cần công bố Chính sách quyền riêng tư và không cài công cụ phân tích thu thập nội dung. |
| **Bản quyền nội dung do người dùng đưa vào** | ⚠️ Chuyển giao trách nhiệm | Người dùng tự chịu trách nhiệm. Do không lưu trữ hay phân phối nội dung, sản phẩm không đóng vai trò trung gian lưu trữ. Cần Điều khoản sử dụng nêu rõ. |
| **Bằng sáng chế H.264/AVC**       | ⚠️ Cần xác minh | Việc mã hoá do trình duyệt/hệ điều hành của người dùng thực hiện qua API sẵn có, không phải do sản phẩm phân phối bộ mã hoá. Đánh giá sơ bộ: không phát sinh nghĩa vụ với MPEG LA. **Cần xác minh trước M4** — nếu rủi ro, chuyển sang VP9/AV1 trong WebM. Đăng ký ở [AS-12](../01_Initiating/02_Assumption_Log_v1.0.md). |
| **Giấy phép mã nguồn**            | ✅ Đã rõ | Apache License 2.0 — cho phép sử dụng thương mại, có điều khoản cấp phép sáng chế. **Toàn bộ phần mềm mở, không có phiên bản đóng.** |
| **Thư viện bên thứ ba**           | ✅ Kiểm soát được | Chỉ dùng thư viện MIT/Apache-2.0/BSD. Cấm GPL/AGPL. Rà soát trước mỗi mốc bàn giao. |
| **Fork thương mại hợp pháp**      | ⚠️ Chấp nhận | Apache 2.0 cho phép người khác fork và bán dịch vụ cạnh tranh. Không có biện pháp pháp lý nào ngăn được, và cũng không nên tìm cách ngăn. Biện pháp thực tế: giữ vị thế upstream, chất lượng template, và quan hệ khách hàng. Đăng ký ở [AS-26](../01_Initiating/02_Assumption_Log_v1.0.md). |
| **Hoá đơn, thuế khi bán gói template và dịch vụ** | ⚠️ Ngoài phạm vi dự án | Cần pháp nhân và đăng ký kinh doanh. Thuộc trách nhiệm nhà tài trợ, không nằm trong 15 tuần của dự án. |

### 6.3. Khả thi về vận hành

**Kết luận: KHẢ THI.** Không có máy chủ render nghĩa là không có ca trực vận hành. Sản phẩm là ứng dụng tĩnh, triển khai qua CDN, hạ tầng ở mức gói miễn phí. Việc bán gói template có thể dùng nền tảng thanh toán sẵn có, không cần tự xây hệ thống. Kênh hỗ trợ giai đoạn đầu là email và trang issue công khai.

### 6.4. Khả thi về tiến độ

**Kết luận: KHẢ THI, nhưng đây là điểm căng nhất của dự án.**

450 giờ cho một bộ dựng theo khung hình, một pipeline mã hoá theo luồng, một trình soạn thảo và 8 mẫu trình chiếu là một ước lượng **eo hẹp**. Việc bỏ giới hạn 2 phút còn làm tăng độ khó của M4 so với phương án đơn giản. Ban lãnh đạo dự án cần biết điều này khi phê duyệt.

Các biện pháp đã áp dụng để giữ khả thi:

- Cắt toàn bộ hạng mục ngoài lõi khỏi v1.0 (xem [Charter §5.2](../01_Initiating/01_Project_Charter_v1.0.md#52-ranh-giới-phạm-vi))
- Dùng thư viện muxer có sẵn thay vì tự viết ([AS-15](../01_Initiating/02_Assumption_Log_v1.0.md))
- Dựng nguyên mẫu kỹ thuật ngay ở M2, để nếu phải đổi hướng thì còn 10 tuần
- Đường găng M2 → M3 → M4 được bảo vệ: không xếp việc khác chồng lên

Nếu đến hết M2 nguyên mẫu chưa chạy được, phương án là **giảm phạm vi v1.0 xuống còn 4 mẫu trình chiếu và bỏ chức năng lưu/mở dự án**, chứ không lùi ngày bàn giao.

### 6.5. Khả thi về nguồn lực

**Kết luận: KHẢ THI, phụ thuộc chặt vào cam kết thời gian.**

3 thành viên × 10 giờ/tuần × 15 tuần = 450 giờ. Với đội 3 người, **việc một thành viên rút lui hoặc giảm thời gian làm mất 1/3 năng lực** — rủi ro tập trung cao hơn hẳn so với đội lớn. Không có nguồn lực dự phòng.

Vốn tiền mặt 1.500.000 VND nằm trong khả năng tự trang trải của đội, không cần huy động bên ngoài. Cần ít nhất một thành viên có kinh nghiệm TypeScript ở mức trung bình trở lên.

### 6.6. Tổng hợp

| Khía cạnh | Kết luận              | Rủi ro còn lại lớn nhất |
| --------- | --------------------- | ----------------------- |
| Kỹ thuật  | Khả thi, có điều kiện | Ghi file theo luồng ngoài Chromium |
| Pháp lý   | Khả thi               | Quyền phân phối lại tài sản trong gói template bán ra |
| Vận hành  | Khả thi               | Không đáng kể |
| Tiến độ   | Khả thi               | **450 giờ là eo hẹp; đường găng không có dự phòng** |
| Nguồn lực | Khả thi               | Đội 3 người — mất 1 thành viên là mất 1/3 năng lực |

---

## 7. Risks and Constraints

### 7.1. Rủi ro chính

| ID    | Rủi ro                                                     | Khả năng | Tác động | Mức        | Ứng phó |
| ----- | ---------------------------------------------------------- | -------- | -------- | ---------- | ------- |
| RS-01 | Nguyên mẫu mã hoá theo luồng không đạt trong thời gian dành cho M2–M4 | Trung bình | Cao | **Cao** | Dựng nguyên mẫu ngay tuần 2; dự phòng xuất WebM/VP9; dự phòng giảm phạm vi theo mục 6.4 |
| RS-02 | Một thành viên rút lui hoặc không đủ 10 giờ/tuần            | Trung bình | Cao   | **Cao**    | Đội chỉ 3 người nên mất 1 người là mất 1/3 năng lực — xác nhận cam kết bằng văn bản tại M0 và mỗi 2 tuần; không để kiến thức tập trung vào một người |
| RS-03 | Doanh thu dưới ngưỡng hoà vốn 48% kịch bản cơ sở            | Trung bình | Trung bình | **Trung bình** | Cấu trúc gần như toàn biến phí nên lỗ tiền mặt rất khó xảy ra; rà soát hàng quý; điều chỉnh giá gói template |
| RS-04 | Không mua được tài sản đồ hoạ có quyền phân phối lại trong ngân sách | Trung bình | Cao | **Trung bình** | Ưu tiên nguồn CC0 (Unsplash, Pexels, Lucide, Phosphor); nếu không đủ, tự thiết kế mẫu tối giản không dùng ảnh |
| RS-05 | Ghi file theo luồng không hoạt động trên Firefox/Safari     | Cao      | Trung bình | **Trung bình** | Phương án dự phòng OPFS; công bố rõ giới hạn theo trình duyệt |
| RS-06 | Vấn đề bản quyền H.264 phát sinh khi thương mại hoá         | Thấp     | Cao      | Trung bình | Xác minh trước M4; dự phòng VP9/AV1 |
| RS-07 | Phạm vi bị nới rộng trong quá trình làm                     | Trung bình | Cao   | **Trung bình** | Với 450 giờ, nới phạm vi là rủi ro nghiêm trọng — mọi thay đổi phải qua kiểm soát thay đổi |
| RS-08 | Bên thứ ba fork mã nguồn và cạnh tranh bằng gói template    | Thấp     | Trung bình | Thấp     | Không ngăn được về pháp lý; cạnh tranh bằng chất lượng mẫu, tốc độ cập nhật và quan hệ khách hàng |

### 7.2. Ràng buộc

| ID    | Ràng buộc                                                      | Loại      |
| ----- | -------------------------------------------------------------- | --------- |
| CT-01 | Thời gian: 15 tuần, kết thúc trước 2026-12-06                   | Tiến độ   |
| CT-02 | Vốn tiền mặt: 1.500.000 VND — không huy động thêm               | Chi phí   |
| CT-03 | Không có ngân sách cho hạ tầng máy chủ                          | Chi phí   |
| CT-04 | Nhân lực: 3 thành viên bán thời gian, không tuyển thêm — tổng 450 giờ | Nguồn lực |
| CT-05 | Chỉ dùng thư viện và tài sản có giấy phép cho phép thương mại hoá và phân phối lại | Pháp lý |
| CT-06 | Sản phẩm phải chạy được mà không cần cài đặt gì ngoài trình duyệt | Kỹ thuật |
| CT-07 | Toàn bộ mã nguồn phát hành theo Apache 2.0 — không có phiên bản đóng, không có cổng khoá tính năng | Pháp lý / Sản phẩm |

---

## 8. Recommendation

**Khuyến nghị phê duyệt phương án kiến trúc P3 (render client-side) kết hợp mô hình doanh thu M2 (gói template có bản quyền + dịch vụ B2B)**, với vốn tiền mặt 1.500.000 VND và 450 giờ công sức trong 15 tuần.

Căn cứ:

1. **Tài chính** — NPV dương 165,1 triệu VND ngay cả khi đã tính đầy đủ chi phí cơ hội của công sức; hoà vốn ở mức 48% kịch bản cơ sở. Vốn tiền mặt 1.500.000 VND nằm trong khả năng tự trang trải, không cần huy động.
2. **Tính nhất quán** — đây là điểm được sửa ở phiên bản 1.1: mô hình doanh thu M2 không dựa vào bất kỳ cổng khoá kỹ thuật nào, nên nó **tương thích với kiến trúc client-side và giấy phép Apache 2.0**, thay vì mâu thuẫn với chúng.
3. **Cấu trúc chi phí** — gần như toàn bộ là biến phí. Rủi ro thua lỗ tiền mặt gần như bằng không; rủi ro thực sự là lãng phí công sức nếu không bán được, chứ không phải mất tiền.
4. **Chiến lược** — mã nguồn mở làm tăng, chứ không làm giảm, giá trị của dòng doanh thu dịch vụ B2B: doanh nghiệp yên tâm hơn khi không bị khoá vào một nhà cung cấp.
5. **Khả thi** — cả năm khía cạnh đều đạt. Rủi ro nghiêm trọng nhất là tiến độ (450 giờ eo hẹp), đã có phương án giảm phạm vi cụ thể thay vì lùi ngày bàn giao.

**Điều kiện kèm theo khi phê duyệt:**

- Hoàn thành nguyên mẫu kỹ thuật chứng minh **mã hoá theo luồng, bộ nhớ không tăng theo độ dài video** trước hết mốc M2. Nếu thất bại, kích hoạt phương án giảm phạm vi tại mục 6.4.
- Xác minh vấn đề bản quyền H.264 trước mốc M4.
- Lập danh mục giấy phép cho từng tài sản đồ hoạ trước khi bán gói template đầu tiên.
- Xác nhận cam kết thời gian của cả 3 thành viên bằng văn bản tại M0.

**Bước tiếp theo:** phê duyệt [Project Charter](../01_Initiating/01_Project_Charter_v1.0.md) và bổ nhiệm Giám đốc dự án.

---

## 9. Phụ lục A — Nguồn và giả định số liệu

| Số liệu                                | Giá trị              | Nguồn / căn cứ                                    | ID giả định |
| -------------------------------------- | -------------------- | ------------------------------------------------- | ----------- |
| Hỗ trợ WebCodecs theo trình duyệt      | (bảng mục 6.1)       | **Số liệu thật** — tài liệu MDN và ghi chú phát hành trình duyệt | — |
| File System Access API chỉ có trên Chromium | —               | **Số liệu thật** — tình trạng hỗ trợ tại thời điểm lập tài liệu | — |
| Thời gian tạo video thủ công           | ~45 phút/video 60s   | Giả định — cần khảo sát xác nhận ở giai đoạn requirements | AS-01 |
| Đơn giá công sức quy đổi               | 80.000 VND/giờ       | Giả định — mức lập trình viên tập sự tại Việt Nam  | AS-02 |
| Quy mô đội và thời lượng               | 3 người × 10 giờ/tuần × 15 tuần = 450 giờ | Giả định — theo nhóm thực tế | AS-03 |
| Giá gói template                       | 249.000 VND/gói      | Giả định — chưa khảo sát mức sẵn sàng chi trả      | AS-04 |
| Khối lượng bán 3 năm                   | 80 / 260 / 500 gói   | Giả định — chưa có nghiên cứu thị trường           | AS-05 |
| Tỷ lệ chiết khấu                       | 12%/năm              | Giả định — chi phí vốn của doanh nghiệp nhỏ tại Việt Nam | AS-06 |
| Chi phí vận hành tiền mặt hàng năm     | 6 / 14 / 26 triệu    | Giả định — ước lượng theo quy mô                   | AS-07 |
| Giá thuê bao đối thủ                   | 15–23 USD/tháng      | Giá công bố của Canva Pro và Pictory (tham chiếu thời điểm lập tài liệu) | AS-08 |
| Lịch học kỳ 2026-08-24 → 2026-12-06    | 15 tuần              | Giả định — cần đối chiếu lịch chính thức của Học viện | AS-09 |
| Đơn giá dịch vụ B2B                    | 8.000.000 VND/hợp đồng | Giả định — chưa có hợp đồng tham chiếu           | AS-27 |
| Số hợp đồng dịch vụ 3 năm              | 2 / 5 / 9            | Giả định                                          | AS-28 |
| Đơn giá và số khách hàng hỗ trợ SLA    | 12 triệu/năm; 0 / 2 / 5 | Giả định                                       | AS-29 |
| Công sức bảo trì hàng năm              | 200 / 400 / 700 giờ  | Giả định — ước lượng theo quy mô người dùng        | AS-30 |

Toàn bộ giả định trên được theo dõi và cập nhật trạng thái tại [Assumption Log](../01_Initiating/02_Assumption_Log_v1.0.md).

---

*Tài liệu liên quan: [Benefit Management Plan](./02_Benefit_Management_Plan_v1.0.md) · [Project Charter](../01_Initiating/01_Project_Charter_v1.0.md) · [Assumption Log](../01_Initiating/02_Assumption_Log_v1.0.md)*
