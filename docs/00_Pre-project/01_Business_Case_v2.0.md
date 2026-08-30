<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                     |                                |
| ------------------- | ------------------------------ |
| **Nhóm tiến trình** | Pre-project                    |
| **Tên tài liệu**    | Business Case                  |
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
| 1  | Ver 1.0   | 2026-08-20    | Tạo mới        | Khởi tạo Business Case: nhu cầu, phân tích phương án, chi phí – lợi ích, phân tích tài chính, đánh giá khả thi, khuyến nghị | Nguyễn Thế Chiến | Phạm Quang Anh |
| 2  | Ver 1.1   | 2026-08-24    | Chỉnh sửa      | Bổ sung mục tiêu nghiệp vụ và bảng truy vết BO → OB → BN. Chuyển tính toán tài chính chi tiết sang Benefit Management Plan §4 | Nguyễn Thế Chiến | Phạm Quang Anh |
| 3  | Ver 2.0   | 2026-08-27    | Chỉnh sửa lớn  | Cập nhật mô hình triển khai và mô hình doanh thu: sản phẩm vận hành theo dạng máy chủ dịch vụ, thu phí thuê bao thường niên, mã nguồn độc quyền. Cập nhật toàn bộ mục tiêu nghiệp vụ, phân tích phương án, chi phí – lợi ích, đánh giá khả thi và ràng buộc | Nguyễn Thế Chiến | Phạm Quang Anh |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

## Mục lục

1. [Executive Summary](#1-executive-summary)
2. [Business Need](#2-business-need)
3. [Analysis of Options](#3-analysis-of-options)
4. [Cost–Benefit Summary](#4-costbenefit-summary)
5. [Feasibility Assessment](#5-feasibility-assessment)
6. [Risks and Constraints](#6-risks-and-constraints)
7. [Recommendation](#7-recommendation)

<div style="page-break-after: always"></div>

<!-- ============================== NỘI DUNG ============================== -->

> **Ghi chú.** Tài liệu lập trên bối cảnh doanh nghiệp giả định (Enticy Studios là tổ chức chủ quản), phục vụ môn Quản lý dự án phần mềm. Số liệu tài chính và quy mô thuê bao là **giả định**, đăng ký đầy đủ kèm nguồn tại **Assumption Log** (`01_Initiating/02_Assumption_Log_v2.0.md`) theo mã `AS-xx`; thông số kỹ thuật là số liệu thật. Định lượng lợi ích và thẩm định tài chính chi tiết nằm ở **Benefit Management Plan §4**.

---

## 1. Executive Summary

PromptVideo là **dịch vụ web thu phí thuê bao thường niên** biến văn bản và hình ảnh thành video trình chiếu MP4. Sản phẩm gồm hai phần: một **ứng dụng chạy trong trình duyệt** dựng và mã hoá video ngay trên máy người dùng qua API WebCodecs, và một **máy chủ dịch vụ** giữ tài khoản, giấy phép, hạn mức và thanh toán. Mã nguồn độc quyền, không công khai.

Cách chia này quyết định toàn bộ cấu trúc kinh tế của sản phẩm: **chi phí máy chủ tỷ lệ theo số tài khoản, không tỷ lệ theo số phút video**, vì máy chủ không bao giờ chạm vào nội dung. Đây là lý do một đội ba người có thể vận hành dịch vụ thu phí mà không cần vốn hạ tầng.

| Hạng mục                          | Giá trị                                        |
| --------------------------------- | ---------------------------------------------- |
| Vốn tiền mặt bỏ ra (Năm 0)        | **3.500.000 VND**                              |
| Công sức quy đổi (không chi tiền) | 450 giờ ≈ 36.000.000 VND                       |
| Thời lượng dự án                  | 15 tuần (2026-08-24 → 2026-12-06), đội 3 người |
| NPV — cơ sở kinh tế đầy đủ        | **+433.433.000 VND**                           |
| BCR — cơ sở kinh tế đầy đủ        | **3,52**                                       |
| Payback (chiết khấu)              | ~0,94 năm                                      |
| Điểm hoà vốn                      | 28% kịch bản doanh thu cơ sở                   |
| **Khuyến nghị**                   | **Phê duyệt phương án P4 + mô hình M1**        |

Bốn đặc tính tạo nên vị thế sản phẩm: **doanh thu định kỳ dự báo được**, **chi phí phục vụ mỗi thuê bao thấp và không tăng theo lượng video**, **nội dung không rời máy người dùng**, **kết quả xuất ra lặp lại được**.

### 1.1. Mục tiêu nghiệp vụ (Project Objectives)

Mỗi mục tiêu được Project Charter §3.1 chuyển thành mục tiêu kỹ thuật đo được (OB-xx), và Benefit Management Plan §2 chuyển thành lợi ích theo dõi được (BN-xx).

| ID    | Mục tiêu nghiệp vụ                | Tiêu chí đạt                            | Truy vết |
| ----- | --------------------------------- | --------------------------------------- | -------- |
| BO-01 | Rút ngắn thời gian tạo video      | ≤ 5 phút cho video 60 giây, giảm ≥ 85% so với baseline | OB-01 · BN-06 · MT-06 |
| BO-03 | Giữ nội dung trong tổ chức        | 0 byte **nội dung** rời khỏi trình duyệt | OB-09 · BN-09 · MT-09 |
| BO-04 | Bỏ giới hạn độ dài video          | Bộ nhớ đỉnh tăng ≤ 15% khi độ dài tăng 10 lần | OB-02 · BN-07 · MT-07 |
| BO-05 | Xử lý tiếng Việt đúng             | 100% ký tự đúng trên bộ 134 tổ hợp dấu  | OB-07 · BN-10 · MT-10 |
| BO-07 | Hạ chi phí phần mềm cho người dùng | 599.000 VND/năm — thấp hơn ≥ 85% so với công cụ nước ngoài | BN-14 |
| BO-08 | Xây dựng dòng doanh thu thuê bao định kỳ | NPV dương và BCR > 1 trên cơ sở kinh tế đầy đủ; tỷ lệ gia hạn ≥ 70% | BN-13 · BN-16 · BN-17 · MT-13 → MT-16 |

**Ưu tiên khi phải đánh đổi.** BO-01 và BO-04 không được hy sinh — đó là lý do sản phẩm tồn tại. BO-05 có thể giảm phạm vi. BO-08 chỉ hiện thực hoá được sau bàn giao vì phụ thuộc hoạt động kinh doanh; trong 15 tuần dự án chịu trách nhiệm tạo **điều kiện kỹ thuật** cho nó — tức toàn bộ cơ chế tài khoản, giấy phép, hạn mức và thanh toán (RQ-13 → RQ-17).

---

## 2. Business Need

Nhu cầu video ngắn dạng trình chiếu tăng đều ở ba nhóm tại Việt Nam: **doanh nghiệp vừa và nhỏ** (4–8 video/tháng), **giáo viên** (5–20 video/học kỳ) và **người sáng tạo nội dung** (10–30 video/tháng). Quy trình hiện tại — soạn slide → quay màn hình → chỉnh sửa → xuất file — tốn **~45 phút cho một video 60 giây** (AS-01), phần lớn là thao tác lặp lại và phải xuất lại toàn bộ khi sai một chi tiết nhỏ.

Các công cụ sẵn có không giải quyết được, vì cùng lúc mắc sáu hạn chế:

| Hạn chế của giải pháp hiện có     | Ảnh hưởng tới nhóm người dùng mục tiêu                                     |
| --------------------------------- | ------------------------------------------------------------------------- |
| Thuê bao tính bằng USD            | Canva Pro ~15 USD/tháng, Pictory ~23 USD/tháng — tương đương 4,5–7 triệu VND/năm, rào cản với SME và giáo viên (AS-08) |
| Render trên máy chủ nhà cung cấp  | Nội dung (số liệu kinh doanh, thông tin học sinh) rời khỏi tổ chức          |
| Giới hạn độ dài và hạn mức xuất   | Gói miễn phí giới hạn số phút; gói trả phí vẫn có hạn mức                   |
| Kết quả không lặp lại được        | Công cụ sinh video bằng AI cho kết quả khác nhau mỗi lần chạy               |
| Xử lý tiếng Việt kém              | Dấu bị cắt, ngắt dòng sai ở khung hình dọc                                  |
| Không có hoá đơn VAT hợp lệ       | Doanh nghiệp không hạch toán được chi phí phần mềm nước ngoài               |

**Cơ hội.** Chưa có sản phẩm nào trên thị trường Việt Nam kết hợp đồng thời **giá nội địa + xử lý nội dung cục bộ + không giới hạn độ dài + ưu tiên tiếng Việt + hoá đơn VAT** (AS-22). WebCodecs (ổn định trên Chrome từ 2021, Firefox từ 2024, Safari từ 2025) lần đầu cho phép mã hoá video chất lượng sản xuất ngay trong trình duyệt, cho phép bán một dịch vụ thuê bao mà chi phí phục vụ không tăng theo lượng video khách hàng xuất.

**Nếu không làm:** nhóm người dùng mục tiêu tiếp tục trả 180–276 USD/năm cho công cụ nước ngoài không xuất được hoá đơn hợp lệ, và Enticy Studios bỏ lỡ cửa sổ công nghệ trước khi đối thủ lớn tích hợp WebCodecs.

---

## 3. Analysis of Options

Có hai quyết định độc lập nhưng phải nhất quán: kiến trúc (3.1) và mô hình doanh thu (3.2).

### 3.1. Phương án kiến trúc

Bốn phương án được chấm trên sáu tiêu chí, thang 1–5, trọng số phản ánh mức quan trọng với một dịch vụ thu phí do đội 3 người vận hành: chi phí phục vụ mỗi thuê bao (25%), khả năng thực thi thuê bao (20%), riêng tư dữ liệu (15%), tính lặp lại của đầu ra (15%), phù hợp năng lực đội (15%), vốn khởi tạo (10%).

| Mã     | Phương án                                | Điểm | Kết luận |
| ------ | ---------------------------------------- | ---: | -------- |
| **P0** | Không làm gì — giữ nguyên hiện trạng      | 2,50 | Loại — không tạo ra giá trị, chỉ dùng làm mốc so sánh |
| **P1** | Bán lại SaaS nước ngoài kèm hỗ trợ tiếng Việt | 2,05 | Loại — biên lợi nhuận mỏng, phụ thuộc chính sách giá nhà cung cấp; phần lớn điều khoản bán lại không cho phép |
| **P2** | Dịch vụ render trên máy chủ (Remotion + FFmpeg) | 2,90 | Loại — chi phí máy chủ tăng tuyến tính theo số phút video, nên biên lợi nhuận co lại đúng lúc khách hàng dùng nhiều; lưu nội dung người dùng làm phát sinh nghĩa vụ nặng theo NĐ 13/2023/NĐ-CP |
| **P4** | **Render trong trình duyệt (WebCodecs) + máy chủ tài khoản, giấy phép và thanh toán** | **4,60** | ✅ **Được chọn** — chi phí phục vụ tỷ lệ theo số tài khoản chứ không theo lượng video; thuê bao thực thi được ở tầng máy chủ; nội dung không rời máy người dùng; đầu ra xác định vì mọi hiệu ứng là hàm của số khung hình |

*Cách tính P4: 5(0,25) + 5(0,20) + 5(0,15) + 5(0,15) + 4(0,15) + 3(0,10) = 4,60.* Hai đánh đổi của P4 — phụ thuộc phần cứng người dùng và phụ thuộc kết nối Internet khi xuất video — xử lý tại mục 5.1.

**Ranh giới trách nhiệm giữa hai phần.** Máy chủ biết *ai* đang dùng và *bao nhiêu lần*; nó không bao giờ biết *nội dung gì*. Đây không phải chi tiết triển khai mà là ranh giới định vị sản phẩm, và nó chi phối cả mục 5.2 (pháp lý) lẫn cấu trúc chi phí ở §4.

### 3.2. Phương án mô hình doanh thu

Với kiến trúc P4, cổng khoá tính năng đặt ở máy chủ nên **thực thi được**: không có giấy phép hợp lệ thì không xuất được video. Điều này mở ra các mô hình doanh thu dựa trên quyền truy cập.

| Mã     | Mô hình                                   | Kết luận |
| ------ | ----------------------------------------- | -------- |
| **M1** | **Thuê bao thường niên ba bậc** — miễn phí có hạn mức, Cá nhân, Doanh nghiệp | ✅ **Được chọn** — doanh thu định kỳ dự báo được; bậc miễn phí là kênh thu hút và **đếm được** vì hạn mức kiểm ở máy chủ; bậc Doanh nghiệp bán hoá đơn VAT và trách nhiệm hỗ trợ |
| **M2** | Trả tiền theo lần xuất (pay-per-export)   | ⚠️ Loại — doanh thu không dự báo được, phí giao dịch ăn mòn giá trị đơn nhỏ, và người dùng phải cân nhắc chi phí ở đúng thời điểm cần dùng sản phẩm |
| **M3** | Giấy phép vĩnh viễn bán một lần           | ⚠️ Loại — không tạo dòng tiền định kỳ để nuôi chi phí máy chủ vận hành liên tục |
| **M4** | Thuê bao + tier render đám mây trả thêm   | ⚠️ Hoãn — làm mất lợi thế chi phí phục vụ thấp và cần vốn hạ tầng; để ở lộ trình sau |

**Ba bậc giá:**

| Bậc | Giá | Hạn mức và quyền lợi |
| --- | --- | -------------------- |
| **Miễn phí** | 0 VND | 3 video/tháng · có watermark · tối đa 720p · đủ 5 mẫu trình chiếu |
| **Cá nhân** | **599.000 VND/năm** | Không giới hạn số video · 1080p · không watermark |
| **Doanh nghiệp** | **4.900.000 VND/năm** | Như bậc Cá nhân · 5 chỗ · hoá đơn VAT · cam kết phản hồi hỗ trợ trong 1 ngày làm việc |

Bậc miễn phí giới hạn bằng **độ phân giải** chứ không bằng số mẫu: người dùng thấy được toàn bộ sản phẩm nên có lý do nâng cấp, trong khi trần 720p tự nó chặn dùng cho mục đích thương mại. Phân khúc trả nhiều nhất là doanh nghiệp — họ trả vì hoá đơn hợp lệ và vì có một bên chịu trách nhiệm hỗ trợ.

**Điều kiện để M1 hoạt động:** sản phẩm phải có **cơ chế tài khoản, giấy phép và hạn mức thực thi ở máy chủ** — yêu cầu bắt buộc RQ-13 → RQ-17 trong Project Charter §4.1.

---

## 4. Cost–Benefit Summary

Chi phí tách rõ **chi phí tiền mặt** (tiền thật phải chi) và **chi phí cơ hội của công sức** (quy đổi 80.000 VND/giờ — AS-02, không phải tiền chi ra). Bảng chi phí chi tiết, dòng tiền chiết khấu và phân tích độ nhạy nằm ở **Benefit Management Plan §4**.

Đơn vị: triệu VND.

| Hạng mục                              | Năm 0 (dự án) |  Năm 1 |  Năm 2 |  Năm 3 |
| ------------------------------------- | ------------: | -----: | -----: | -----: |
| Chi phí tiền mặt                      |           3,5 |    6,5 |   15,0 |   28,0 |
| Chi phí công sức (quy đổi 80.000đ/giờ) |          36,0 |   20,8 |   38,4 |   64,0 |
| Doanh thu                             |             0 |   74,6 |  240,7 |  487,4 |
| **Dòng ròng — cơ sở kinh tế đầy đủ**  |     **−39,5** | **+47,3** | **+187,3** | **+395,4** |

**Hai dòng doanh thu theo M1:** thuê bao Cá nhân (599.000 VND/năm — 100/320/650 thuê bao) và thuê bao Doanh nghiệp (4.900.000 VND/năm — 3/10/20 thuê bao). Số lượng là **thuê bao đang hoạt động cuối mỗi năm**, đã trừ phần không gia hạn. Giả định: AS-39 → AS-42.

| Chỉ tiêu (r = 12%, 3 năm)  |   Cơ sở tiền mặt | Cơ sở kinh tế đầy đủ | Ngưỡng chấp nhận |
| -------------------------- | ---------------: | -------------------: | ---------------- |
| **NPV**                    | +564.171.000 VND | **+433.433.000 VND** | > 0 |
| **BCR**                    |            14,70 |             **3,52** | > 1 |
| **Payback** (chiết khấu)   |        ~0,06 năm |        **~0,94 năm** | < 3 năm |
| **Điểm hoà vốn**           |                — | **28% kịch bản cơ sở** | < 100% |

Chỉ tiêu dùng để ra quyết định là **cột cơ sở kinh tế đầy đủ** — đã trừ cả chi phí cơ hội của 450 giờ. Cột cơ sở tiền mặt cho con số đẹp hơn nhiều nhưng mất ý nghĩa vì mẫu số quá nhỏ.

**Con số này nhạy nhất với một biến duy nhất.** Mô hình thuần thuê bao chỉ có một trụ doanh thu, nên toàn bộ kết quả trên đứng hay đổ theo **số thuê bao Năm 1 và tỷ lệ gia hạn**. Đây là điểm khác biệt quan trọng so với một mô hình nhiều dòng doanh thu, và là lý do phân tích độ nhạy ở Benefit Management Plan §4.7 phải được đọc cùng với bảng này chứ không phải như phụ lục.

**Lợi ích phi tài chính:** thời gian tạo video ~45 phút → ≤ 5 phút; chi phí phần mềm cho người dùng giảm từ 4,5–7 triệu VND/năm xuống 599.000 VND/năm; nội dung không rời tổ chức; không giới hạn độ dài; đầu ra lặp lại được; năng lực kỹ thuật và tài sản mã nguồn tích luỹ cho Enticy Studios. Cách đo từng lợi ích tại Benefit Management Plan §2.

---

## 5. Feasibility Assessment

### 5.1. Khả thi về kỹ thuật — **KHẢ THI, có điều kiện**

Công nghệ lõi là WebCodecs `VideoEncoder`. Tình trạng hỗ trợ thực tế (số liệu thật, nguồn MDN và ghi chú phát hành trình duyệt):

| Trình duyệt              | Phiên bản hỗ trợ | Ghi chú                                       |
| ------------------------ | ---------------- | --------------------------------------------- |
| Chrome / Edge (máy tính) | 94+              | Hỗ trợ đầy đủ, nền tảng mục tiêu chính         |
| Firefox (máy tính)       | 130+             | Hỗ trợ đầy đủ                                  |
| Safari (macOS/iOS)       | 26+              | Hỗ trợ đầy đủ                                  |
| Safari 16.4 – 18.7       | một phần         | Mã hoá được hình, **không mã hoá được âm thanh** |
| Firefox trên Android     | ❌               | Chưa hỗ trợ                                    |

**Ràng buộc khó nhất — BO-04, video không giới hạn độ dài.** Không thể giữ toàn bộ khung hình trong bộ nhớ rồi ghép một lần ở cuối; bắt buộc dùng **kiến trúc mã hoá theo luồng** (dựng → mã hoá → ghép → ghi từng phần ra file → giải phóng bộ nhớ, lặp theo từng khung), khi đó bộ nhớ đỉnh phụ thuộc độ phân giải chứ **không phụ thuộc độ dài video**. Khả thi vì `VideoEncoder` vốn hoạt động theo luồng và File System Access API cho phép ghi dần ra đĩa.

| Ràng buộc kỹ thuật                                     | Ảnh hưởng                                     | Phương án giảm thiểu |
| ------------------------------------------------------ | --------------------------------------------- | -------------------- |
| Bộ nhớ phải không tăng theo độ dài video (AS-16)       | Không đạt thì phải quay lại giới hạn độ dài cứng | Nguyên mẫu tại M2; đo tỷ lệ bộ nhớ 10 phút ÷ 1 phút ≤ 1,15 |
| **Xuất video cần kết nối Internet để xác thực giấy phép (AS-45)** | Mất mạng là không xuất được — ảnh hưởng trực tiếp giáo viên dùng máy trường | Thông báo rõ trạng thái kết nối trước khi bắt đầu xuất; xác thực trước, mã hoá sau, để không hỏng giữa chừng |
| **Máy chủ giấy phép là điểm chết đơn lẻ (RS-09)**       | Máy chủ ngừng là 100% người dùng trả phí không xuất được video | Giám sát thời gian hoạt động; mục tiêu ≥ 99%/tháng (NF-10); quy trình khôi phục ghi trong tài liệu vận hành |
| File System Access API chỉ có trên Chromium (AS-32)    | Firefox, Safari không ghi trực tiếp ra đĩa    | Dự phòng ghi vào OPFS rồi tải xuống một lần khi xong |
| WebCodecs phải mã hoá H.264 ở 1920×1080/30fps (AS-14)  | Không đạt thì sản phẩm phải đổi hướng         | Nguyên mẫu tuần 4–5; dự phòng VP9/WebM |
| Tốc độ xuất phụ thuộc phần cứng người dùng             | Trải nghiệm không đồng đều                     | Công bố cấu hình tham chiếu; hiển thị tiến trình theo khung hình |
| Trình duyệt không hỗ trợ WebCodecs (AS-10)             | Người dùng không xuất được video               | Phát hiện năng lực ngay khi mở, gợi ý trình duyệt thay thế |

**Năng lực đội.** HTML/CSS/TypeScript và Canvas API nằm trong phạm vi đã học. Ba phần mới cần nghiên cứu: WebCodecs, muxer MP4 và ghi file theo luồng (mốc M2), cùng **máy chủ tài khoản – giấy phép – thanh toán** (mốc M2 đến M6). Phần máy chủ dùng công nghệ phổ thông và không có yêu cầu hiệu năng cao vì nó chỉ phục vụ xác thực, không xử lý video.

### 5.2. Khả thi về pháp lý — **KHẢ THI**

Mô hình M1 đưa trọng tâm pháp lý sang hai chỗ: bảo vệ dữ liệu cá nhân của người đăng ký, và nghĩa vụ thuế – hoá đơn của một dịch vụ thu phí.

| Vấn đề pháp lý                    | Đánh giá | Căn cứ và biện pháp |
| --------------------------------- | -------- | ------------------- |
| **Bảo vệ dữ liệu cá nhân** (NĐ 13/2023/NĐ-CP) | ⚠️ **Quan trọng nhất** | Hệ thống có xử lý dữ liệu cá nhân ở mức tối thiểu: email, tên, lịch sử thanh toán. **Nội dung video không thuộc diện này vì không bao giờ rời máy người dùng.** Cần: Chính sách quyền riêng tư, cơ chế đồng ý khi đăng ký, quy trình xoá tài khoản theo yêu cầu, và mã hoá dữ liệu khi lưu (AS-46) |
| **Hoá đơn và nghĩa vụ thuế**      | ⚠️ Cần chuẩn bị | Bậc Doanh nghiệp bán kèm hoá đơn VAT — đây chính là lý do phân khúc này trả tiền. Dùng cổng thanh toán nội địa có hỗ trợ xuất hoá đơn; hồ sơ cổng thanh toán phải duyệt xong trước mốc M6 (AS-43, RS-10) |
| **Không lưu thông tin thẻ**       | ✅ Rủi ro thấp | Toàn bộ thông tin thanh toán do cổng thanh toán giữ; hệ thống dự án chỉ nhận mã giao dịch (NF-11) |
| **Bản quyền nội dung người dùng đưa vào** | ⚠️ Chuyển giao trách nhiệm | Do không lưu trữ hay phân phối nội dung, sản phẩm không đóng vai trò trung gian lưu trữ. Cần Điều khoản sử dụng nêu rõ (AS-20) |
| **Quyền phân phối lại tài sản trong 5 mẫu đi kèm** | ⚠️ Cần xử lý | Ảnh, biểu tượng và font phải có giấy phép cho phép **phân phối lại trong sản phẩm phái sinh** — giấy phép "dùng thương mại" thông thường không đủ. Cần lập danh mục giấy phép cho từng tài sản (AS-11) |
| **Bằng sáng chế H.264/AVC**       | ⚠️ Cần xác minh | Mã hoá do trình duyệt/hệ điều hành thực hiện qua API sẵn có. Đánh giá sơ bộ: không phát sinh nghĩa vụ với MPEG LA. **Cần xác minh trước M4**; nếu rủi ro, chuyển VP9/AV1 (AS-12) |
| **Giấy phép thư viện phụ thuộc**  | ✅ Đã rõ | Sản phẩm là mã nguồn đóng nên chỉ dùng thư viện MIT/Apache-2.0/BSD/SIL OFL, **cấm GPL/AGPL** — ràng buộc này chặt hơn chứ không lỏng đi (AS-21) |

### 5.3. Khả thi về vận hành — **KHẢ THI, có nghĩa vụ mới**

Sản phẩm là dịch vụ thu phí nên **có nghĩa vụ vận hành liên tục**: máy chủ giấy phép phải chạy, thanh toán phải được xử lý, khách hàng phải được hỗ trợ. Đây là khác biệt lớn nhất về vận hành so với một ứng dụng tĩnh.

| Hạng mục vận hành | Cách xử lý |
| ----------------- | ---------- |
| Hạ tầng           | Một máy chủ ảo nhỏ (2 vCPU / 4 GB) kèm PostgreSQL, đủ cho ≤ 1.000 thuê bao (AS-44); ứng dụng trình duyệt vẫn phát hành dạng tĩnh qua CDN |
| Thời gian hoạt động | Mục tiêu ≥ 99%/tháng (NF-10), giám sát tự động, cảnh báo qua email |
| Thanh toán        | Cổng thanh toán nội địa, đối soát hàng tháng |
| Hỗ trợ khách hàng | Email; bậc Doanh nghiệp cam kết phản hồi trong 1 ngày làm việc |
| Chủ sở hữu vận hành | Nhà tài trợ nhận toàn bộ từ tuần 15; Bên B bảo hành lỗi 30 ngày (Hợp đồng §7) |

Chi phí vận hành ước tính 6,5 / 15,0 / 28,0 triệu VND cho ba năm, tương đương **65.000 / 50.000 / 45.000 VND mỗi thuê bao mỗi năm** — giảm dần vì phần lớn chi phí là cố định trong khi số thuê bao tăng.

### 5.4. Khả thi về tiến độ — **KHẢ THI, nhưng là điểm căng nhất**

450 giờ cho một bộ dựng theo khung hình, một pipeline mã hoá theo luồng, một trình soạn thảo, 5 mẫu trình chiếu **và một hệ thống tài khoản – giấy phép – thanh toán** là ước lượng **eo hẹp**. Biện pháp giữ khả thi: cắt hạng mục ngoài lõi khỏi bản phát hành đầu (Charter §5.2); dùng thư viện muxer có sẵn (AS-15); dựng nguyên mẫu mã hoá ngay ở M2 để nếu phải đổi hướng thì còn 10 tuần; bảo vệ đường găng M2 → M3 → M4 → M5.

Nếu hết M2 nguyên mẫu chưa chạy được, phương án là **giảm phạm vi xuống 3 mẫu trình chiếu và bỏ chức năng lưu/mở dự án**, chứ không lùi ngày bàn giao.

### 5.5. Khả thi về nguồn lực — **KHẢ THI, phụ thuộc cam kết thời gian**

3 thành viên × 10 giờ/tuần × 15 tuần = 450 giờ (AS-03). Với đội 3 người, **một thành viên rút lui là mất 1/3 năng lực** và không có nguồn lực dự phòng. Vốn tiền mặt 3.500.000 VND nằm trong khả năng tự trang trải. Cần ít nhất một thành viên có kinh nghiệm TypeScript từ mức trung bình (AS-23).

### 5.6. Tổng hợp

| Khía cạnh | Kết luận              | Rủi ro còn lại lớn nhất |
| --------- | --------------------- | ----------------------- |
| Kỹ thuật  | Khả thi, có điều kiện | Ghi file theo luồng ngoài Chromium; máy chủ giấy phép là điểm chết đơn lẻ |
| Pháp lý   | Khả thi               | Nghĩa vụ dữ liệu cá nhân và hồ sơ cổng thanh toán |
| Vận hành  | Khả thi               | **Nghĩa vụ chạy liên tục 3 năm sau khi dự án đóng** |
| Tiến độ   | Khả thi               | **450 giờ eo hẹp; đường găng không có dự phòng** |
| Nguồn lực | Khả thi               | Mất 1 thành viên là mất 1/3 năng lực |

**Kết luận chung: khả thi trên cả năm khía cạnh.** Ba điều kiện cần theo dõi sát nhất là nguyên mẫu mã hoá theo luồng, hồ sơ cổng thanh toán, và cam kết thời gian của đội.

---

## 6. Risks and Constraints

Dưới đây là rủi ro **ở cấp quyết định đầu tư** — thứ có thể làm khuyến nghị ở §7 sụp đổ. Rủi ro cấp thực thi nằm ở Project Charter §6 và sẽ chi tiết hoá thành Risk Register ở giai đoạn Planning.

| ID    | Rủi ro                                                     | Mức | Ứng phó |
| ----- | ---------------------------------------------------------- | --- | ------- |
| RS-01 | Nguyên mẫu mã hoá theo luồng không đạt trong M2–M4          | **Cao** | Nguyên mẫu ngay tuần 4; dự phòng WebM/VP9; giảm phạm vi theo mục 5.4 |
| RS-02 | Một thành viên rút lui hoặc không đủ 10 giờ/tuần            | **Cao** | Xác nhận cam kết bằng văn bản tại M0 và mỗi 2 tuần; không để kiến thức tập trung vào một người |
| RS-09 | **Máy chủ giấy phép ngừng hoạt động** — 100% người dùng trả phí không xuất được video | **Cao** | Giám sát và cảnh báo tự động; mục tiêu ≥ 99%/tháng; quy trình khôi phục viết sẵn và diễn tập tại M6 |
| RS-11 | **Tỷ lệ gia hạn thấp** làm doanh thu Năm 2–3 sụp đổ         | **Cao** | Mô hình thuần thuê bao chỉ có một trụ; theo dõi MT-15 từ tháng gia hạn đầu tiên; điểm quyết định hết Quý 4 Năm 1 |
| RS-10 | Cổng thanh toán không duyệt hồ sơ kịp mốc M6                | Trung bình | Nộp hồ sơ ngay tại M2; dự phòng thu tiền bằng chuyển khoản và kích hoạt thủ công trong 3 tháng đầu |
| RS-06 | Doanh thu dưới ngưỡng hoà vốn 28% kịch bản cơ sở            | Trung bình | Chi phí cố định thấp nên lỗ tiền mặt khó xảy ra; rà soát hàng quý |
| RS-05 | Không mua được tài sản đồ hoạ có quyền phân phối lại trong ngân sách | Trung bình | Ưu tiên nguồn CC0; nếu không đủ, tự thiết kế mẫu tối giản không dùng ảnh |
| RS-12 | Rò rỉ dữ liệu tài khoản người dùng                          | Trung bình | Băm mật khẩu, không lưu thông tin thẻ, giới hạn dữ liệu thu thập ở mức tối thiểu (NF-11) |

Ràng buộc dưới đây là **điều kiện biên mà khuyến nghị ở §7 chỉ đúng bên trong**; nếu một trong số đó thay đổi, Business Case phải được lập lại.

| ID    | Ràng buộc                                                      | Loại      |
| ----- | -------------------------------------------------------------- | --------- |
| CT-01 | Thời gian: 15 tuần, kết thúc trước 2026-12-06                   | Tiến độ   |
| CT-02 | Vốn tiền mặt: 3.500.000 VND — không huy động thêm               | Chi phí   |
| CT-03 | Chi phí hạ tầng máy chủ ≤ 150.000 VND/tháng trong Năm 0 và ≤ 800.000 VND/tháng đến hết Năm 3 | Chi phí |
| CT-04 | Nhân lực: 3 thành viên bán thời gian — tổng 450 giờ             | Nguồn lực |
| CT-05 | Chỉ dùng thư viện và tài sản có giấy phép cho phép thương mại hoá và phân phối lại | Pháp lý |
| CT-06 | Sản phẩm chạy được mà không cần cài đặt gì ngoài trình duyệt, nhưng **cần kết nối Internet khi xuất video** | Kỹ thuật |
| CT-08 | Mã nguồn độc quyền, không công khai; **mọi quyền lợi trả phí phải được thực thi ở tầng máy chủ**, không đặt trong mã chạy trên máy người dùng | Sản phẩm |

---

## 7. Recommendation

**Khuyến nghị phê duyệt phương án kiến trúc P4 (render client-side + máy chủ tài khoản và giấy phép) kết hợp mô hình doanh thu M1 (thuê bao thường niên ba bậc)**, với vốn tiền mặt 3.500.000 VND và 450 giờ công sức trong 15 tuần.

Dự án có nhu cầu thật và chưa có sản phẩm nội địa nào giải quyết đồng thời cả sáu hạn chế ở §2; sáu mục tiêu nghiệp vụ đều có tiêu chí định lượng và truy vết được; khả thi trên cả năm khía cạnh; và đạt ngưỡng tài chính (NPV +433,4 triệu VND, BCR 3,52) ngay cả khi đã tính đầy đủ chi phí cơ hội của 450 giờ. Điểm hoà vốn ở 28% kịch bản cơ sở để lại biên an toàn 72%.

**Rủi ro thật của phương án này không phải chi phí mà là sự phụ thuộc vào một biến duy nhất.** Chi phí cố định thấp nên lỗ tiền mặt khó xảy ra, nhưng toàn bộ giá trị dự án nằm trên số thuê bao và tỷ lệ gia hạn — hai con số chỉ kiểm chứng được sau khi bàn giao. Đây là lý do §5 của Benefit Management Plan đặt một điểm quyết định chính thức ở cuối Quý 4 Năm 1.

**Điều kiện kèm theo khi phê duyệt:**

- Hoàn thành nguyên mẫu chứng minh **mã hoá theo luồng, bộ nhớ không tăng theo độ dài video** trước hết mốc M2; nếu thất bại, kích hoạt phương án giảm phạm vi tại mục 5.4
- Nộp hồ sơ cổng thanh toán tại M2 và hoàn tất trước M6
- Xác minh vấn đề bản quyền H.264 trước mốc M4
- Ban hành Chính sách quyền riêng tư và Điều khoản sử dụng trước khi mở đăng ký công khai
- Xác nhận cam kết thời gian của cả 3 thành viên bằng văn bản tại M0
- Nhà tài trợ xác nhận bằng văn bản việc tiếp nhận nghĩa vụ vận hành máy chủ trong 3 năm sau bàn giao

**Bước tiếp theo:** ký Hợp đồng thực hiện dự án, phê duyệt Project Charter và bổ nhiệm Giám đốc dự án.

---

*Tài liệu liên quan: Benefit Management Plan · Hợp đồng thực hiện dự án · Project Charter · Assumption Log — cùng bộ tài liệu quản lý dự án PromptVideo.*
