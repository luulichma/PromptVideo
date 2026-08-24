<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                     |                                |
| ------------------- | ------------------------------ |
| **Nhóm tiến trình** | Pre-project                     |
| **Tên tài liệu**    | Business Case                  |
| **Phiên bản**       | Ver. 1.1                       |
| **Nhóm thực hiện**  | `<<Tên nhóm>>`                 |
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
| 1  | Ver 1.0   | 2026-08-20    | Tạo mới        | Khởi tạo Business Case: nhu cầu, phân tích phương án, chi phí – lợi ích, phân tích tài chính, đánh giá khả thi, khuyến nghị | Nguyễn Thế Chiến | Phạm Quang Anh |
| 2  | Ver 1.1   | 2026-08-24    | Chỉnh sửa      | Tập trung tài liệu vào đúng chuyên môn. Bổ sung mục **Project Objectives** (BO-01 → BO-06) và bảng truy vết BO → OB → BN. Chuyển toàn bộ phần tính toán tài chính (bảng chi phí chi tiết, dòng tiền chiết khấu, NPV, độ nhạy) sang [Benefit Management Plan §4](./02_Benefit_Management_Plan_v1.1.md#4-financial-appraisal--công-cụ-npv-và-bcr), chỉ giữ bảng tóm tắt kết quả. Rút gọn phân tích phương án và danh mục rủi ro về cấp quyết định đầu tư | Nguyễn Thế Chiến | Phạm Quang Anh |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

## Mục lục

1. [Executive Summary](#1-executive-summary)
2. [Business Need](#2-business-need)
3. [Project Objectives](#3-project-objectives)
4. [Analysis of Options](#4-analysis-of-options)
5. [Cost–Benefit Summary](#5-costbenefit-summary)
6. [Feasibility Assessment](#6-feasibility-assessment)
7. [Risks and Constraints](#7-risks-and-constraints)
8. [Recommendation](#8-recommendation)
9. [Phụ lục A — Nguồn và giả định số liệu](#9-phụ-lục-a--nguồn-và-giả-định-số-liệu)

<div style="page-break-after: always"></div>

<!-- ============================== NỘI DUNG ============================== -->

> **Lưu ý về bối cảnh.** Tài liệu này được lập trên một **bối cảnh doanh nghiệp giả định** (Enticy Studios là tổ chức chủ quản) phục vụ môn Quản lý dự án phần mềm. Toàn bộ số liệu tài chính, quy mô người dùng và đơn giá là **giả định có ghi chú**, được liệt kê tại [Phụ lục A](#9-phụ-lục-a--nguồn-và-giả-định-số-liệu) và đăng ký trong [Assumption Log](../01_Initiating/02_Assumption_Log_v1.0.md). Các thông số kỹ thuật (hỗ trợ trình duyệt, đặc tính API) là số liệu thật.

> **Phân vai tài liệu.** Business Case trả lời ba câu hỏi: *có nhu cầu thật không*, *dự án nhắm tới mục tiêu gì*, và *có làm được không*. Việc **định lượng lợi ích và thẩm định tài chính** — NPV, BCR, thời gian hoàn vốn, phân tích độ nhạy — thuộc về [Benefit Management Plan](./02_Benefit_Management_Plan_v1.1.md); tài liệu này chỉ trích kết quả để làm căn cứ khuyến nghị.

---

## 1. Executive Summary

PromptVideo là công cụ web biến văn bản và hình ảnh thành video trình chiếu MP4, trong đó **toàn bộ quá trình dựng và mã hoá chạy trên máy người dùng** thông qua API WebCodecs — không cần máy chủ render.

**Phần mềm là mã nguồn mở, miễn phí, giấy phép Apache 2.0.** Doanh thu không đến từ việc bán quyền truy cập phần mềm mà từ hai thứ mà một bản sao chép không tự có được: **gói template có bản quyền** và **dịch vụ doanh nghiệp**.

| Hạng mục                          | Giá trị                                       |
| --------------------------------- | --------------------------------------------- |
| Vốn tiền mặt bỏ ra (Năm 0)        | **1.500.000 VND**                             |
| Công sức quy đổi (không chi tiền) | 450 giờ ≈ 36.000.000 VND                      |
| Thời lượng dự án                  | 15 tuần (2026-08-24 → 2026-12-06), đội 3 người |
| NPV — cơ sở kinh tế đầy đủ        | **+165.094.000 VND**                          |
| BCR — cơ sở kinh tế đầy đủ        | **2,08**                                      |
| Điểm hoà vốn                      | 48% kịch bản doanh thu cơ sở                  |
| Khuyến nghị                       | **Phê duyệt phương án P3 + mô hình M2**       |

*Bốn chỉ tiêu tài chính ở trên được tính đầy đủ tại [Benefit Management Plan §4](./02_Benefit_Management_Plan_v1.1.md#4-financial-appraisal--công-cụ-npv-và-bcr).*

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

Quy trình hiện tại: soạn slide (PowerPoint/Canva) → quay màn hình hoặc xuất video → chỉnh sửa trên CapCut/Premiere → xuất file. Ước tính **~45 phút cho một video 60 giây** ([AS-01](../01_Initiating/02_Assumption_Log_v1.0.md)), phần lớn là thao tác lặp lại: căn chữ, canh thời gian chuyển cảnh, và xuất lại toàn bộ khi sai một chi tiết nhỏ.

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

Chưa có sản phẩm nào trên thị trường Việt Nam kết hợp đồng thời: **miễn phí + xử lý cục bộ + không giới hạn độ dài + ưu tiên tiếng Việt** ([AS-22](../01_Initiating/02_Assumption_Log_v1.0.md)). Công nghệ WebCodecs (ổn định trên Chrome từ 2021, Firefox từ 2024, Safari từ 2025) lần đầu cho phép mã hoá video chất lượng sản xuất ngay trong trình duyệt — cửa sổ công nghệ này mở ra khả năng vận hành với chi phí biên gần bằng không.

### 2.4. Hệ quả nếu không làm gì

- Nhóm người dùng mục tiêu tiếp tục trả 180–276 USD/năm cho công cụ nước ngoài
- Enticy Studios bỏ lỡ cửa sổ công nghệ trước khi đối thủ lớn tích hợp WebCodecs
- Nhóm dự án không có sản phẩm thực hành cho môn Quản lý dự án phần mềm

---

## 3. Project Objectives

Mục này nêu **mục tiêu ở cấp nghiệp vụ** — điều dự án phải đạt được để giải quyết nhu cầu ở mục 2. Mỗi mục tiêu nghiệp vụ được [Project Charter §3.1](../01_Initiating/01_Project_Charter_v1.0.md#31-mục-tiêu-đo-được) chuyển thành mục tiêu kỹ thuật đo được (OB-xx), và được [Benefit Management Plan §2](./02_Benefit_Management_Plan_v1.1.md#2-target-benefits) chuyển thành lợi ích theo dõi được (BN-xx).

| ID    | Mục tiêu nghiệp vụ                | Vì sao cần                                    | Tiêu chí đạt                            | Truy vết |
| ----- | --------------------------------- | --------------------------------------------- | --------------------------------------- | -------- |
| BO-01 | Rút ngắn thời gian tạo video      | Vấn đề gốc ở mục 2.1 là thời gian, không phải chất lượng | ≤ 5 phút cho một video 60 giây, giảm ≥ 85% so với baseline | OB-01 · BN-06 · MT-06 |
| BO-02 | Gỡ bỏ rào cản chi phí phần mềm    | Thuê bao tính bằng USD là lý do chính nhóm mục tiêu không dùng công cụ hiện có | Người dùng trả **0 VND** cho phần mềm | BN-05 |
| BO-03 | Giữ nội dung trong tổ chức        | SME và trường học không muốn đưa số liệu, thông tin học sinh lên máy chủ nước ngoài | 0 byte nội dung rời khỏi trình duyệt | OB-09 · BN-09 · MT-09 |
| BO-04 | Bỏ giới hạn độ dài video          | Mọi công cụ hiện có đều áp hạn mức; bài giảng thường dài hơn hạn mức đó | Bộ nhớ đỉnh tăng ≤ 15% khi độ dài tăng 10 lần | OB-02 · BN-07 · MT-07 |
| BO-05 | Xử lý tiếng Việt đúng             | Đây là điểm yếu chung của công cụ nước ngoài, cũng là chỗ dễ tạo khác biệt nhất | 100% ký tự đúng trên bộ 134 tổ hợp dấu | OB-07 · BN-10 · MT-10 |
| BO-06 | Tạo dòng doanh thu không cần vốn  | Mục tiêu của tổ chức chủ quản, không phải của người dùng | NPV dương và BCR > 1 trên cơ sở kinh tế đầy đủ | BN-01 → BN-04 · MT-01 → MT-05 |

**Thứ tự ưu tiên khi phải đánh đổi.** BO-01 và BO-04 là hai mục tiêu không được hy sinh — chúng là lý do sản phẩm tồn tại và là hai điểm khác biệt mà đối thủ không có. BO-05 có thể giảm phạm vi (thu hẹp bộ tổ hợp dấu đưa vào kiểm thử). BO-06 nằm ngoài 15 tuần của dự án vì nó phụ thuộc hoạt động kinh doanh sau bàn giao; dự án chỉ chịu trách nhiệm tạo ra **điều kiện kỹ thuật** cho nó, cụ thể là RQ-11 (định dạng gói template cài thêm được).

---

## 4. Analysis of Options

Có **hai quyết định độc lập**: quyết định về kiến trúc (mục 4.1) và quyết định về mô hình doanh thu (mục 4.2). Hai quyết định này phải nhất quán với nhau — một mô hình doanh thu dựa trên khoá tính năng sẽ không thực thi được trên kiến trúc chạy hoàn toàn ở máy người dùng.

### 4.1. Phương án kiến trúc

| Mã     | Phương án                                | Mô tả                                                              |
| ------ | ---------------------------------------- | ------------------------------------------------------------------ |
| **P0** | Không làm gì                             | Giữ nguyên hiện trạng, người dùng tự xoay xở                        |
| **P1** | Mua/thuê lại SaaS nước ngoài             | Mua giấy phép sỉ Canva/Pictory, bán lại kèm dịch vụ hỗ trợ tiếng Việt |
| **P2** | Tự dựng dịch vụ render phía máy chủ      | Remotion + FFmpeg trên máy chủ đám mây, người dùng gửi yêu cầu lên   |
| **P3** | **Render trong trình duyệt (WebCodecs)** | Dựng và mã hoá hoàn toàn trên máy người dùng, máy chủ chỉ phục vụ file tĩnh |

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

*Cách tính P3: 5(0,25) + 5(0,20) + 5(0,15) + 5(0,15) + 4(0,15) + 5(0,10) = 4,85.*

**Lý do loại.** **P0** không tạo ra giá trị nào, chỉ dùng làm mốc so sánh. **P1** có biên lợi nhuận mỏng và phụ thuộc hoàn toàn vào chính sách giá của nhà cung cấp nước ngoài; điều khoản bán lại của phần lớn nhà cung cấp không cho phép mô hình này. **P2** có chi phí máy chủ tăng tuyến tính theo số phút video xuất ra trong khi đội không có vốn tiền mặt, đồng thời việc nhận và lưu nội dung người dùng làm phát sinh nghĩa vụ xử lý dữ liệu cá nhân theo Nghị định 13/2023/NĐ-CP.

**P3 — được chọn.** Vốn và chi phí biên gần bằng không; dữ liệu không rời máy người dùng; đầu ra xác định do mọi hiệu ứng là hàm của số khung hình. Đánh đổi: phụ thuộc trình duyệt và phần cứng người dùng — xử lý tại [mục 6.1](#61-khả-thi-về-kỹ-thuật).

### 4.2. Phương án mô hình doanh thu

Kiến trúc P3 kết hợp với giấy phép Apache 2.0 tạo ra một ràng buộc cứng: **mọi cổng khoá tính năng đều không thực thi được.** Về kỹ thuật, một điều kiện `if (isPro)` chạy trên máy người dùng bị vô hiệu hoá trong vài phút bằng công cụ dành cho nhà phát triển — điều này đúng kể cả khi mã nguồn đóng, vì nó là hệ quả của kiến trúc client-side chứ không phải của giấy phép. Về pháp lý, Apache 2.0 cho phép bất kỳ ai fork, gỡ watermark, build lại và phân phối.

Vì vậy mô hình doanh thu **bắt buộc phải dựa trên thứ mà bản sao chép không tự có được**, chứ không dựa trên việc chặn truy cập.

| Mã     | Mô hình                                   | Cơ chế thu tiền                                       | Đánh giá |
| ------ | ----------------------------------------- | ----------------------------------------------------- | -------- |
| **M0** | Thuê bao gỡ watermark                     | Khoá tính năng trong mã client                        | ❌ **Không thực thi được** |
| **M1** | Giấy phép thương mại (source-available)   | Doanh nghiệp phải mua quyền dùng thương mại           | ⚠️ Buộc từ bỏ Apache 2.0; mâu thuẫn với định hướng mã nguồn mở |
| **M2** | **Gói template có bản quyền + dịch vụ B2B** | Bán **nội dung** (mẫu thiết kế, bộ nhận diện) và **dịch vụ** (tuỳ chỉnh, đào tạo, hỗ trợ SLA) | ✅ **Được chọn** |
| **M3** | Tier đám mây trả phí                      | Bán năng lực máy chủ cho việc client làm không nổi     | ⚠️ Làm mất lợi thế chi phí ~0; cần vốn hạ tầng — để ở lộ trình sau |

**Vì sao M2 đứng vững.** Ba dòng doanh thu của M2 đều không bị vô hiệu hoá bằng cách fork mã nguồn: **gói template** là nội dung chứ không phải mã — sao chép được phần mềm không có nghĩa là có bộ mẫu thiết kế và ảnh đã mua quyền phân phối lại; **dịch vụ B2B** là công sức con người, không sao chép được; **hỗ trợ có SLA** bán trách nhiệm khi hỏng, hoá đơn VAT và đầu mối liên hệ — thứ một bản fork trên GitHub không cấp được.

Luận điểm nền tảng: người sẵn sàng bẻ khoá thì dù có cổng khoá cũng không trả tiền. Phân khúc trả tiền là doanh nghiệp — họ trả vì hoá đơn, vì rủi ro pháp lý, vì có người hỗ trợ. Với phân khúc đó, mã nguồn mở **làm tăng** giá trị chứ không làm giảm: doanh nghiệp yên tâm hơn khi biết mình không bị khoá vào một nhà cung cấp có thể biến mất.

**Điều kiện để M2 hoạt động:** sản phẩm phải hỗ trợ **định dạng gói template cài thêm được** — yêu cầu bắt buộc RQ-11 trong [Project Charter](../01_Initiating/01_Project_Charter_v1.0.md#41-yêu-cầu-chức-năng). Không có nó thì toàn bộ mô hình doanh thu không triển khai được.

---

## 5. Cost–Benefit Summary

Mục này chỉ nêu **tổng hợp**. Bảng chi phí chi tiết, bảng dòng tiền chiết khấu, cách tính NPV và BCR, cùng phân tích độ nhạy nằm ở [Benefit Management Plan §4](./02_Benefit_Management_Plan_v1.1.md#4-financial-appraisal--công-cụ-npv-và-bcr).

### 5.1. Nguyên tắc trình bày chi phí

Dự án có đặc điểm khác thường: **vốn tiền mặt gần bằng không, chi phí chủ yếu là công sức của chính đội dự án.** Nếu chỉ trình bày một trong hai, bức tranh sẽ bị bóp méo. Vì vậy mọi con số trong bộ tài liệu này luôn tách rõ hai loại:

| Loại chi phí                  | Ý nghĩa | Dùng để |
| ----------------------------- | ------- | ------- |
| **Chi phí tiền mặt**          | Tiền thật phải chi ra | Đánh giá rủi ro thanh khoản, xác định vốn cần huy động |
| **Chi phí cơ hội của công sức** | Giá trị thời gian đội bỏ ra, quy đổi 80.000 VND/giờ; **không phải tiền chi ra** | Đánh giá xem dự án có đáng làm so với việc đội dùng thời gian đó vào việc khác |

### 5.2. Tổng hợp chi phí và lợi ích

Đơn vị: triệu VND.

| Hạng mục                              | Năm 0 (dự án) |  Năm 1 |  Năm 2 |  Năm 3 |
| ------------------------------------- | ------------: | -----: | -----: | -----: |
| Chi phí tiền mặt                      |           1,5 |    6,0 |   14,0 |   26,0 |
| Chi phí công sức (quy đổi 80.000đ/giờ) |          36,0 |   16,0 |   32,0 |   56,0 |
| Doanh thu                             |             0 |   35,9 |  128,7 |  256,5 |
| **Dòng ròng — cơ sở kinh tế đầy đủ**  |     **−37,5** | **+13,9** | **+82,7** | **+174,5** |

**Ba dòng doanh thu theo mô hình M2:** gói template chuyên ngành (249.000 VND/gói — 80/260/500 gói), dịch vụ B2B (8.000.000 VND/hợp đồng — 2/5/9 hợp đồng), và hỗ trợ có SLA (12.000.000 VND/năm/khách hàng — 0/2/5 khách hàng). Năm 1 chưa có doanh thu SLA vì sản phẩm chưa đủ thời gian vận hành để doanh nghiệp cam kết hợp đồng dài hạn.

**Lợi ích phi tài chính:** rút ngắn thời gian tạo video (~45 phút → ≤ 5 phút), người dùng không phải trả phí phần mềm (180–276 USD/năm → 0 VND), nội dung không rời khỏi tổ chức, không giới hạn độ dài, đầu ra lặp lại được, cùng năng lực kỹ thuật và tài sản mã nguồn mở tích luỹ cho Enticy Studios. Cách đo từng lợi ích ghi tại [Benefit Management Plan §2](./02_Benefit_Management_Plan_v1.1.md#2-target-benefits).

### 5.3. Kết quả thẩm định tài chính

| Chỉ tiêu (r = 12%, 3 năm)  |   Cơ sở tiền mặt | Cơ sở kinh tế đầy đủ | Ngưỡng chấp nhận |
| -------------------------- | ---------------: | -------------------: | ---------------- |
| **NPV**                    | +280.750.000 VND | **+165.094.000 VND** | > 0 |
| **BCR**                    |             8,69 |             **2,08** | > 1 |
| **Payback** (chiết khấu)   |        ~0,06 năm |        **~1,38 năm** | < 3 năm |
| **Điểm hoà vốn**           |                — | **48% kịch bản cơ sở** | < 100% |

Chỉ tiêu dùng để ra quyết định là **cột cơ sở kinh tế đầy đủ** — cột đã trừ cả chi phí cơ hội của 450 giờ công sức. Cột cơ sở tiền mặt cho con số đẹp hơn nhiều nhưng mất ý nghĩa vì mẫu số quá nhỏ; lý do được giải thích tại [BMP §4.6](./02_Benefit_Management_Plan_v1.1.md#46-đọc-kết-quả--chỉ-tiêu-nào-đáng-tin).

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

**Ràng buộc khó nhất — BO-04, video không giới hạn độ dài.** Người dùng tự quyết định độ dài và hệ thống phải dựng theo. Điều này loại bỏ cách làm đơn giản là giữ toàn bộ khung hình trong bộ nhớ rồi ghép một lần ở cuối, và bắt buộc dùng **kiến trúc mã hoá theo luồng**:

```
Dựng khung hình  →  Mã hoá  →  Ghép  →  Ghi ra file (từng phần)  →  Giải phóng bộ nhớ
        └────────────────── lặp lại theo từng khung ──────────────────┘
```

Bộ nhớ đỉnh khi đó phụ thuộc vào độ phân giải, **không phụ thuộc độ dài video**. Kỹ thuật này khả thi: `VideoEncoder` vốn hoạt động theo luồng, và File System Access API cho phép ghi dần ra file trên đĩa.

| Ràng buộc kỹ thuật                                     | Ảnh hưởng                                     | Phương án giảm thiểu |
| ------------------------------------------------------ | --------------------------------------------- | -------------------- |
| Kiến trúc theo luồng phải giữ bộ nhớ không tăng theo độ dài ([AS-16](../01_Initiating/02_Assumption_Log_v1.0.md)) | Không đạt thì phải quay lại giới hạn độ dài cứng | Nguyên mẫu tại M2; đo tỷ lệ bộ nhớ 10 phút ÷ 1 phút ≤ 1,15 |
| File System Access API chỉ có trên Chromium ([AS-32](../01_Initiating/02_Assumption_Log_v1.0.md)) | Firefox và Safari không ghi trực tiếp ra đĩa được | Dự phòng: ghi vào OPFS rồi tải xuống một lần khi xong; nếu cũng không có, cảnh báo giới hạn theo bộ nhớ khả dụng |
| WebCodecs phải mã hoá được H.264 ở 1920×1080/30fps ([AS-14](../01_Initiating/02_Assumption_Log_v1.0.md)) | Không đạt thì toàn bộ sản phẩm phải đổi hướng | Nguyên mẫu tuần 2; dự phòng VP9/WebM |
| Tốc độ xuất phụ thuộc phần cứng người dùng             | Trải nghiệm không đồng đều                     | Công bố cấu hình tham chiếu; hiển thị tiến trình theo khung hình và thời gian còn lại |
| Không dùng được CSS animation (trôi khung hình)        | Phải tự viết bộ dựng, không tái sử dụng thư viện sẵn có | Chấp nhận — đây là quyết định kiến trúc cốt lõi, đã tính vào ước lượng công sức |
| Trình duyệt không hỗ trợ WebCodecs ([AS-10](../01_Initiating/02_Assumption_Log_v1.0.md)) | Người dùng không xuất được video               | Phát hiện năng lực trình duyệt ngay khi mở, thông báo rõ và gợi ý trình duyệt thay thế |

**Năng lực đội:** công nghệ dùng đến là HTML/CSS/TypeScript và Canvas API — nằm trong phạm vi đã học. Phần mới cần nghiên cứu là WebCodecs, muxer MP4 và ghi file theo luồng; đã dành mốc M2 cho việc dựng nguyên mẫu kỹ thuật.

### 6.2. Khả thi về pháp lý

**Kết luận: KHẢ THI. Mô hình M2 đưa trọng tâm pháp lý sang bản quyền tài sản đồ hoạ — cần xử lý cẩn thận vì đây chính là hàng hoá được bán.**

| Vấn đề pháp lý                    | Đánh giá | Căn cứ và biện pháp |
| --------------------------------- | -------- | ------------------- |
| **Quyền phân phối lại tài sản trong gói template bán ra** | ⚠️ **Quan trọng nhất** | Ảnh, biểu tượng và font trong gói phải có giấy phép cho phép **phân phối lại trong sản phẩm phái sinh** — giấy phép "dùng thương mại" thông thường **không đủ**, cần loại *extended / multi-seat / redistribution*. Font SIL OFL cho phép đóng gói bán kèm trong sản phẩm lớn hơn nhưng cấm bán riêng font. Cần lập danh mục giấy phép cho từng tài sản. [AS-11](../01_Initiating/02_Assumption_Log_v1.0.md) |
| **Bảo vệ dữ liệu cá nhân** (Nghị định 13/2023/NĐ-CP) | ✅ Rủi ro thấp | Kiến trúc client-side: ảnh và nội dung không truyền lên máy chủ, không lưu trữ. Sản phẩm gần như không thực hiện hành vi "xử lý dữ liệu cá nhân". Cần công bố Chính sách quyền riêng tư và không cài công cụ phân tích thu thập nội dung. [AS-19](../01_Initiating/02_Assumption_Log_v1.0.md) |
| **Bản quyền nội dung do người dùng đưa vào** | ⚠️ Chuyển giao trách nhiệm | Người dùng tự chịu trách nhiệm; do không lưu trữ hay phân phối nội dung, sản phẩm không đóng vai trò trung gian lưu trữ. Cần Điều khoản sử dụng nêu rõ. [AS-20](../01_Initiating/02_Assumption_Log_v1.0.md) |
| **Bằng sáng chế H.264/AVC**       | ⚠️ Cần xác minh | Mã hoá do trình duyệt/hệ điều hành của người dùng thực hiện qua API sẵn có, không phải do sản phẩm phân phối bộ mã hoá. Đánh giá sơ bộ: không phát sinh nghĩa vụ với MPEG LA. **Cần xác minh trước M4**; nếu rủi ro, chuyển sang VP9/AV1 trong WebM. [AS-12](../01_Initiating/02_Assumption_Log_v1.0.md) |
| **Giấy phép mã nguồn**            | ✅ Đã rõ | Apache License 2.0 — cho phép sử dụng thương mại, có điều khoản cấp phép sáng chế. **Toàn bộ phần mềm mở, không có phiên bản đóng.** |
| **Thư viện bên thứ ba**           | ✅ Kiểm soát được | Chỉ dùng thư viện MIT/Apache-2.0/BSD/SIL OFL. Cấm GPL/AGPL. Rà soát trước mỗi mốc bàn giao. [AS-21](../01_Initiating/02_Assumption_Log_v1.0.md) |
| **Fork thương mại hợp pháp**      | ⚠️ Chấp nhận | Apache 2.0 cho phép người khác fork và bán dịch vụ cạnh tranh. Không có biện pháp pháp lý nào ngăn được, và cũng không nên tìm cách ngăn. Biện pháp thực tế: giữ vị thế upstream, chất lượng template và quan hệ khách hàng. [AS-26](../01_Initiating/02_Assumption_Log_v1.0.md) |
| **Hoá đơn, thuế khi bán gói template và dịch vụ** | ⚠️ Ngoài phạm vi dự án | Cần pháp nhân và đăng ký kinh doanh. Thuộc trách nhiệm nhà tài trợ, không nằm trong 15 tuần của dự án. |

### 6.3. Khả thi về vận hành

**Kết luận: KHẢ THI.** Không có máy chủ render nghĩa là không có ca trực vận hành. Sản phẩm là ứng dụng tĩnh, triển khai qua CDN, hạ tầng ở mức gói miễn phí ([AS-25](../01_Initiating/02_Assumption_Log_v1.0.md)). Việc bán gói template dùng nền tảng thanh toán sẵn có, không cần tự xây hệ thống. Kênh hỗ trợ giai đoạn đầu là email và trang issue công khai.

### 6.4. Khả thi về tiến độ

**Kết luận: KHẢ THI, nhưng đây là điểm căng nhất của dự án.**

450 giờ cho một bộ dựng theo khung hình, một pipeline mã hoá theo luồng, một trình soạn thảo và 8 mẫu trình chiếu là một ước lượng **eo hẹp**. Việc theo đuổi BO-04 còn làm tăng độ khó của M4 so với phương án đơn giản. Ban lãnh đạo dự án cần biết điều này khi phê duyệt.

Các biện pháp đã áp dụng để giữ khả thi:

- Cắt toàn bộ hạng mục ngoài lõi khỏi bản phát hành đầu tiên (xem [Charter §5.2](../01_Initiating/01_Project_Charter_v1.0.md#52-ranh-giới-phạm-vi))
- Dùng thư viện muxer có sẵn thay vì tự viết ([AS-15](../01_Initiating/02_Assumption_Log_v1.0.md))
- Dựng nguyên mẫu kỹ thuật ngay ở M2, để nếu phải đổi hướng thì còn 10 tuần
- Đường găng M2 → M3 → M4 được bảo vệ: không xếp việc khác chồng lên

Nếu đến hết M2 nguyên mẫu chưa chạy được, phương án là **giảm phạm vi xuống còn 4 mẫu trình chiếu và bỏ chức năng lưu/mở dự án**, chứ không lùi ngày bàn giao.

### 6.5. Khả thi về nguồn lực

**Kết luận: KHẢ THI, phụ thuộc chặt vào cam kết thời gian.**

3 thành viên × 10 giờ/tuần × 15 tuần = 450 giờ ([AS-03](../01_Initiating/02_Assumption_Log_v1.0.md)). Với đội 3 người, **việc một thành viên rút lui hoặc giảm thời gian làm mất 1/3 năng lực** — rủi ro tập trung cao hơn hẳn so với đội lớn, và không có nguồn lực dự phòng.

Vốn tiền mặt 1.500.000 VND nằm trong khả năng tự trang trải của đội, không cần huy động bên ngoài. Cần ít nhất một thành viên có kinh nghiệm TypeScript ở mức trung bình trở lên ([AS-23](../01_Initiating/02_Assumption_Log_v1.0.md)).

### 6.6. Tổng hợp

| Khía cạnh | Kết luận              | Rủi ro còn lại lớn nhất |
| --------- | --------------------- | ----------------------- |
| Kỹ thuật  | Khả thi, có điều kiện | Ghi file theo luồng ngoài Chromium |
| Pháp lý   | Khả thi               | Quyền phân phối lại tài sản trong gói template bán ra |
| Vận hành  | Khả thi               | Không đáng kể |
| Tiến độ   | Khả thi               | **450 giờ là eo hẹp; đường găng không có dự phòng** |
| Nguồn lực | Khả thi               | Đội 3 người — mất 1 thành viên là mất 1/3 năng lực |

**Kết luận chung: dự án khả thi trên cả năm khía cạnh.** Hai điều kiện cần theo dõi sát nhất là nguyên mẫu mã hoá theo luồng (kỹ thuật) và cam kết thời gian của đội (nguồn lực).

---

## 7. Risks and Constraints

### 7.1. Rủi ro chính

Danh mục dưới đây là **rủi ro ở cấp quyết định đầu tư** — thứ có thể làm luận điểm của Business Case sụp đổ. Rủi ro cấp thực thi được quản lý tại [Project Charter §6](../01_Initiating/01_Project_Charter_v1.0.md#6-high-level-risks), và sẽ được chi tiết hoá thành Risk Register ở giai đoạn Planning.

| ID    | Rủi ro                                                     | Khả năng | Tác động | Mức        | Ứng phó |
| ----- | ---------------------------------------------------------- | -------- | -------- | ---------- | ------- |
| RS-01 | Nguyên mẫu mã hoá theo luồng không đạt trong M2–M4          | Trung bình | Cao | **Cao** | Nguyên mẫu ngay tuần 2; dự phòng xuất WebM/VP9; dự phòng giảm phạm vi theo mục 6.4 |
| RS-02 | Một thành viên rút lui hoặc không đủ 10 giờ/tuần            | Trung bình | Cao   | **Cao**    | Mất 1 người là mất 1/3 năng lực — xác nhận cam kết bằng văn bản tại M0 và mỗi 2 tuần; không để kiến thức tập trung vào một người |
| RS-03 | Doanh thu dưới ngưỡng hoà vốn 48% kịch bản cơ sở            | Trung bình | Trung bình | **Trung bình** | Cấu trúc gần như toàn biến phí nên lỗ tiền mặt rất khó xảy ra; rà soát hàng quý; điều chỉnh giá gói template |
| RS-04 | Không mua được tài sản đồ hoạ có quyền phân phối lại trong ngân sách | Trung bình | Cao | **Trung bình** | Ưu tiên nguồn CC0 (Unsplash, Pexels, Lucide, Phosphor); nếu không đủ, tự thiết kế mẫu tối giản không dùng ảnh |
| RS-05 | Ghi file theo luồng không hoạt động trên Firefox/Safari     | Cao      | Trung bình | **Trung bình** | Phương án dự phòng OPFS; công bố rõ giới hạn theo trình duyệt |

Ba rủi ro còn lại — bản quyền H.264 (thấp / cao), nới phạm vi trong quá trình làm (trung bình / cao) và fork thương mại (thấp / trung bình) — được ghi cùng phương án ứng phó tại Charter §6.

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

Chi tiết, chủ sở hữu và ảnh hưởng của từng ràng buộc tại [Assumption Log](../01_Initiating/02_Assumption_Log_v1.0.md).

---

## 8. Recommendation

**Khuyến nghị phê duyệt phương án kiến trúc P3 (render client-side) kết hợp mô hình doanh thu M2 (gói template có bản quyền + dịch vụ B2B)**, với vốn tiền mặt 1.500.000 VND và 450 giờ công sức trong 15 tuần.

Căn cứ:

1. **Có nhu cầu thật** — ba nhóm người dùng đều đang chịu cùng một tập hạn chế (chi phí thuê bao bằng USD, nội dung rời khỏi tổ chức, giới hạn độ dài, tiếng Việt kém), và chưa có sản phẩm nội địa nào giải quyết đồng thời cả bốn.
2. **Mục tiêu rõ và đo được** — sáu mục tiêu nghiệp vụ BO-01 → BO-06 đều có tiêu chí đạt định lượng, và đều truy vết được sang mục tiêu kỹ thuật trong Charter cùng lợi ích theo dõi được trong Benefit Management Plan.
3. **Khả thi trên cả năm khía cạnh** — kỹ thuật, pháp lý, vận hành, tiến độ, nguồn lực. Rủi ro nghiêm trọng nhất là tiến độ, đã có phương án giảm phạm vi cụ thể thay vì lùi ngày bàn giao.
4. **Tài chính đạt ngưỡng** — NPV dương 165,1 triệu VND và BCR 2,08 ngay cả khi đã tính đầy đủ chi phí cơ hội của công sức; hoà vốn ở mức 48% kịch bản cơ sở. Chi tiết tại [BMP §4](./02_Benefit_Management_Plan_v1.1.md#4-financial-appraisal--công-cụ-npv-và-bcr).
5. **Nhất quán về thiết kế** — mô hình doanh thu M2 không dựa vào bất kỳ cổng khoá kỹ thuật nào, nên tương thích với kiến trúc client-side và giấy phép Apache 2.0 thay vì mâu thuẫn với chúng. Cấu trúc chi phí gần như toàn biến phí: rủi ro thực sự là lãng phí công sức nếu không bán được, chứ không phải mất tiền.

**Điều kiện kèm theo khi phê duyệt:**

- Hoàn thành nguyên mẫu kỹ thuật chứng minh **mã hoá theo luồng, bộ nhớ không tăng theo độ dài video** trước hết mốc M2. Nếu thất bại, kích hoạt phương án giảm phạm vi tại mục 6.4.
- Xác minh vấn đề bản quyền H.264 trước mốc M4.
- Lập danh mục giấy phép cho từng tài sản đồ hoạ trước khi bán gói template đầu tiên.
- Xác nhận cam kết thời gian của cả 3 thành viên bằng văn bản tại M0.

**Bước tiếp theo:** ký [Hợp đồng thực hiện dự án](./03_Hop_dong_thuc_hien_du_an_v1.0.md), phê duyệt [Project Charter](../01_Initiating/01_Project_Charter_v1.0.md) và bổ nhiệm Giám đốc dự án.

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

*Tài liệu liên quan: [Benefit Management Plan](./02_Benefit_Management_Plan_v1.1.md) · [Hợp đồng thực hiện dự án](./03_Hop_dong_thuc_hien_du_an_v1.0.md) · [Project Charter](../01_Initiating/01_Project_Charter_v1.0.md) · [Assumption Log](../01_Initiating/02_Assumption_Log_v1.0.md)*
