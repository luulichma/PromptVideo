<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                     |                                |
| ------------------- | ------------------------------ |
| **Nhóm tiến trình** | Pre-project                     |
| **Tên tài liệu**    | Business Case                  |
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
| 1  | Ver 1.0   | 2026-08-20    | Tạo mới        | Khởi tạo Business Case: nhu cầu, phân tích phương án, chi phí – lợi ích, phân tích tài chính, đánh giá khả thi, khuyến nghị | Nguyễn Thế Chiến | Phạm Quang Anh |
| 2  | Ver 1.1   | 2026-08-24    | Chỉnh sửa      | Bổ sung mục tiêu nghiệp vụ BO-01 → BO-06 và bảng truy vết BO → OB → BN. Chuyển toàn bộ tính toán tài chính chi tiết sang **Benefit Management Plan §4**, chỉ giữ bảng kết quả. Rút gọn tài liệu về đúng vai trò hồ sơ quyết định đầu tư | Nguyễn Thế Chiến | Phạm Quang Anh |

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

> **Ghi chú.** Tài liệu lập trên bối cảnh doanh nghiệp giả định (Enticy Studios là tổ chức chủ quản), phục vụ môn Quản lý dự án phần mềm. Số liệu tài chính và quy mô người dùng là **giả định**, đăng ký đầy đủ kèm nguồn tại **Assumption Log** (`01_Initiating/02_Assumption_Log_v1.0.md`) theo mã `AS-xx`; thông số kỹ thuật là số liệu thật. Định lượng lợi ích và thẩm định tài chính chi tiết nằm ở **Benefit Management Plan §4**.

---

## 1. Executive Summary

PromptVideo là công cụ web biến văn bản và hình ảnh thành video trình chiếu MP4, với **toàn bộ quá trình dựng và mã hoá chạy trên máy người dùng** qua API WebCodecs — không cần máy chủ render. Phần mềm **mã nguồn mở, miễn phí, giấy phép Apache 2.0**; doanh thu đến từ hai thứ một bản sao chép không tự có được: **gói template có bản quyền** và **dịch vụ doanh nghiệp**.

| Hạng mục                          | Giá trị                                       |
| --------------------------------- | --------------------------------------------- |
| Vốn tiền mặt bỏ ra (Năm 0)        | **1.500.000 VND**                             |
| Công sức quy đổi (không chi tiền) | 450 giờ ≈ 36.000.000 VND                      |
| Thời lượng dự án                  | 15 tuần (2026-08-24 → 2026-12-06), đội 3 người |
| NPV — cơ sở kinh tế đầy đủ        | **+165.094.000 VND**                          |
| BCR — cơ sở kinh tế đầy đủ        | **2,08**                                      |
| Payback (chiết khấu)              | ~1,38 năm                                     |
| Điểm hoà vốn                      | 48% kịch bản doanh thu cơ sở                  |
| **Khuyến nghị**                   | **Phê duyệt phương án P3 + mô hình M2**       |

Bốn đặc tính tạo nên vị thế sản phẩm: **vốn khởi tạo gần bằng không**, **chi phí vận hành gần bằng không**, **dữ liệu không rời máy người dùng**, **kết quả xuất ra lặp lại được**.

### 1.1. Mục tiêu nghiệp vụ (Project Objectives)

Mỗi mục tiêu được Project Charter §3.1 chuyển thành mục tiêu kỹ thuật đo được (OB-xx), và Benefit Management Plan §2 chuyển thành lợi ích theo dõi được (BN-xx).

| ID    | Mục tiêu nghiệp vụ                | Tiêu chí đạt                            | Truy vết |
| ----- | --------------------------------- | --------------------------------------- | -------- |
| BO-01 | Rút ngắn thời gian tạo video      | ≤ 5 phút cho video 60 giây, giảm ≥ 85% so với baseline | OB-01 · BN-06 · MT-06 |
| BO-02 | Gỡ bỏ rào cản chi phí phần mềm    | Người dùng trả **0 VND** cho phần mềm   | BN-05 |
| BO-03 | Giữ nội dung trong tổ chức        | 0 byte nội dung rời khỏi trình duyệt    | OB-09 · BN-09 · MT-09 |
| BO-04 | Bỏ giới hạn độ dài video          | Bộ nhớ đỉnh tăng ≤ 15% khi độ dài tăng 10 lần | OB-02 · BN-07 · MT-07 |
| BO-05 | Xử lý tiếng Việt đúng             | 100% ký tự đúng trên bộ 134 tổ hợp dấu  | OB-07 · BN-10 · MT-10 |
| BO-06 | Tạo dòng doanh thu không cần vốn  | NPV dương và BCR > 1 trên cơ sở kinh tế đầy đủ | BN-01 → BN-04 · MT-01 → MT-05 |

**Ưu tiên khi phải đánh đổi.** BO-01 và BO-04 không được hy sinh — đó là lý do sản phẩm tồn tại. BO-05 có thể giảm phạm vi. BO-06 nằm ngoài 15 tuần vì phụ thuộc hoạt động kinh doanh sau bàn giao; dự án chỉ chịu trách nhiệm tạo **điều kiện kỹ thuật** cho nó (RQ-11 — định dạng gói template cài thêm được).

---

## 2. Business Need

Nhu cầu video ngắn dạng trình chiếu tăng đều ở ba nhóm tại Việt Nam: **doanh nghiệp vừa và nhỏ** (4–8 video/tháng), **giáo viên** (5–20 video/học kỳ) và **người sáng tạo nội dung** (10–30 video/tháng). Quy trình hiện tại — soạn slide → quay màn hình → chỉnh sửa → xuất file — tốn **~45 phút cho một video 60 giây** (AS-01), phần lớn là thao tác lặp lại và phải xuất lại toàn bộ khi sai một chi tiết nhỏ.

Các công cụ sẵn có không giải quyết được, vì cùng lúc mắc năm hạn chế:

| Hạn chế của giải pháp hiện có     | Ảnh hưởng tới nhóm người dùng mục tiêu                                     |
| --------------------------------- | ------------------------------------------------------------------------- |
| Thuê bao tính bằng USD            | Canva Pro ~15 USD/tháng, Pictory ~23 USD/tháng — rào cản với SME và giáo viên (AS-08) |
| Render trên máy chủ nhà cung cấp  | Nội dung (số liệu kinh doanh, thông tin học sinh) rời khỏi tổ chức          |
| Giới hạn độ dài và hạn mức xuất   | Gói miễn phí giới hạn số phút; gói trả phí vẫn có hạn mức                   |
| Kết quả không lặp lại được        | Công cụ sinh video bằng AI cho kết quả khác nhau mỗi lần chạy               |
| Xử lý tiếng Việt kém              | Dấu bị cắt, ngắt dòng sai ở khung hình dọc                                  |

**Cơ hội.** Chưa có sản phẩm nào trên thị trường Việt Nam kết hợp đồng thời **miễn phí + xử lý cục bộ + không giới hạn độ dài + ưu tiên tiếng Việt** (AS-22). WebCodecs (ổn định trên Chrome từ 2021, Firefox từ 2024, Safari từ 2025) lần đầu cho phép mã hoá video chất lượng sản xuất ngay trong trình duyệt, mở ra khả năng vận hành với chi phí biên gần bằng không.

**Nếu không làm:** nhóm người dùng mục tiêu tiếp tục trả 180–276 USD/năm cho công cụ nước ngoài, và Enticy Studios bỏ lỡ cửa sổ công nghệ trước khi đối thủ lớn tích hợp WebCodecs.

---

## 3. Analysis of Options

Có hai quyết định độc lập nhưng phải nhất quán: kiến trúc (3.1) và mô hình doanh thu (3.2).

### 3.1. Phương án kiến trúc

Bốn phương án được chấm trên sáu tiêu chí, thang 1–5, trọng số phản ánh mức quan trọng với đội 3 người gần như không có vốn tiền mặt: vốn khởi tạo thấp (25%), chi phí vận hành thấp (20%), riêng tư dữ liệu (15%), tính lặp lại của đầu ra (15%), phù hợp năng lực đội (15%), khả năng khác biệt hoá (10%).

| Mã     | Phương án                                | Điểm | Kết luận |
| ------ | ---------------------------------------- | ---: | -------- |
| **P0** | Không làm gì — giữ nguyên hiện trạng      | 3,85 | Loại — không tạo ra giá trị, chỉ dùng làm mốc so sánh |
| **P1** | Mua/thuê lại SaaS nước ngoài, bán kèm hỗ trợ tiếng Việt | 2,05 | Loại — biên lợi nhuận mỏng, phụ thuộc chính sách giá nhà cung cấp; phần lớn điều khoản bán lại không cho phép |
| **P2** | Tự dựng dịch vụ render máy chủ (Remotion + FFmpeg) | 2,05 | Loại — chi phí máy chủ tăng tuyến tính theo số phút video trong khi đội không có vốn; lưu nội dung người dùng làm phát sinh nghĩa vụ theo NĐ 13/2023/NĐ-CP |
| **P3** | **Render trong trình duyệt (WebCodecs)** — máy chủ chỉ phục vụ file tĩnh | **4,85** | ✅ **Được chọn** — vốn và chi phí biên gần bằng không; dữ liệu không rời máy người dùng; đầu ra xác định vì mọi hiệu ứng là hàm của số khung hình |

*Cách tính P3: 5(0,25) + 5(0,20) + 5(0,15) + 5(0,15) + 4(0,15) + 5(0,10) = 4,85.* Đánh đổi của P3 là phụ thuộc trình duyệt và phần cứng người dùng — xử lý tại mục 5.1.

### 3.2. Phương án mô hình doanh thu

Kiến trúc P3 cộng giấy phép Apache 2.0 tạo một ràng buộc cứng: **mọi cổng khoá tính năng đều không thực thi được** — một điều kiện `if (isPro)` chạy trên máy người dùng bị vô hiệu hoá trong vài phút bằng công cụ nhà phát triển. Đây là hệ quả của kiến trúc client-side, không phải của giấy phép. Vì vậy mô hình doanh thu bắt buộc dựa trên thứ mà bản sao chép không tự có được.

| Mã     | Mô hình                                   | Kết luận |
| ------ | ----------------------------------------- | -------- |
| **M0** | Thuê bao gỡ watermark — khoá tính năng trong mã client | ❌ **Không thực thi được** trên kiến trúc P3 |
| **M1** | Giấy phép thương mại (source-available)   | ⚠️ Loại — buộc từ bỏ Apache 2.0, mâu thuẫn định hướng mã nguồn mở |
| **M2** | **Gói template có bản quyền + dịch vụ B2B** | ✅ **Được chọn** — template là *nội dung* chứ không phải mã; dịch vụ là *công sức con người*; hỗ trợ SLA bán *trách nhiệm và hoá đơn VAT*. Fork mã nguồn không vô hiệu hoá được cả ba |
| **M3** | Tier đám mây trả phí — bán năng lực máy chủ | ⚠️ Hoãn — làm mất lợi thế chi phí ~0 và cần vốn hạ tầng; để ở lộ trình sau |

Phân khúc trả tiền là doanh nghiệp — họ trả vì hoá đơn và rủi ro pháp lý, và với phân khúc đó mã nguồn mở **làm tăng** giá trị vì họ không bị khoá vào một nhà cung cấp.

**Điều kiện để M2 hoạt động:** sản phẩm phải hỗ trợ **định dạng gói template cài thêm được** — yêu cầu bắt buộc RQ-11 trong Project Charter §4.1.

---

## 4. Cost–Benefit Summary

Dự án có đặc điểm khác thường: **vốn tiền mặt gần bằng không, chi phí chủ yếu là công sức của chính đội dự án.** Vì vậy mọi con số tách rõ **chi phí tiền mặt** (tiền thật phải chi) và **chi phí cơ hội của công sức** (quy đổi 80.000 VND/giờ — AS-02, không phải tiền chi ra). Bảng chi phí chi tiết, dòng tiền chiết khấu và phân tích độ nhạy nằm ở **Benefit Management Plan §4**.

Đơn vị: triệu VND.

| Hạng mục                              | Năm 0 (dự án) |  Năm 1 |  Năm 2 |  Năm 3 |
| ------------------------------------- | ------------: | -----: | -----: | -----: |
| Chi phí tiền mặt                      |           1,5 |    6,0 |   14,0 |   26,0 |
| Chi phí công sức (quy đổi 80.000đ/giờ) |          36,0 |   16,0 |   32,0 |   56,0 |
| Doanh thu                             |             0 |   35,9 |  128,7 |  256,5 |
| **Dòng ròng — cơ sở kinh tế đầy đủ**  |     **−37,5** | **+13,9** | **+82,7** | **+174,5** |

**Ba dòng doanh thu theo M2:** gói template chuyên ngành (249.000 VND/gói — 80/260/500 gói), dịch vụ B2B (8.000.000 VND/hợp đồng — 2/5/9 hợp đồng), hỗ trợ SLA (12.000.000 VND/năm/khách — 0/2/5 khách). Năm 1 chưa có doanh thu SLA vì sản phẩm chưa đủ thời gian vận hành để doanh nghiệp cam kết hợp đồng dài hạn. Giả định: AS-04, AS-05, AS-27 → AS-30.

| Chỉ tiêu (r = 12%, 3 năm)  |   Cơ sở tiền mặt | Cơ sở kinh tế đầy đủ | Ngưỡng chấp nhận |
| -------------------------- | ---------------: | -------------------: | ---------------- |
| **NPV**                    | +280.750.000 VND | **+165.094.000 VND** | > 0 |
| **BCR**                    |             8,69 |             **2,08** | > 1 |
| **Payback** (chiết khấu)   |        ~0,06 năm |        **~1,38 năm** | < 3 năm |
| **Điểm hoà vốn**           |                — | **48% kịch bản cơ sở** | < 100% |

Chỉ tiêu dùng để ra quyết định là **cột cơ sở kinh tế đầy đủ** — đã trừ cả chi phí cơ hội của 450 giờ. Cột cơ sở tiền mặt cho con số đẹp hơn nhiều nhưng mất ý nghĩa vì mẫu số quá nhỏ.

**Lợi ích phi tài chính:** thời gian tạo video ~45 phút → ≤ 5 phút; người dùng không phải trả phí phần mềm (180–276 USD/năm → 0 VND); nội dung không rời tổ chức; không giới hạn độ dài; đầu ra lặp lại được; năng lực kỹ thuật và tài sản mã nguồn mở tích luỹ cho Enticy Studios. Cách đo từng lợi ích tại Benefit Management Plan §2.

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
| File System Access API chỉ có trên Chromium (AS-32)    | Firefox, Safari không ghi trực tiếp ra đĩa    | Dự phòng ghi vào OPFS rồi tải xuống một lần khi xong |
| WebCodecs phải mã hoá H.264 ở 1920×1080/30fps (AS-14)  | Không đạt thì sản phẩm phải đổi hướng         | Nguyên mẫu tuần 2; dự phòng VP9/WebM |
| Tốc độ xuất phụ thuộc phần cứng người dùng             | Trải nghiệm không đồng đều                     | Công bố cấu hình tham chiếu; hiển thị tiến trình theo khung hình |
| Trình duyệt không hỗ trợ WebCodecs (AS-10)             | Người dùng không xuất được video               | Phát hiện năng lực ngay khi mở, gợi ý trình duyệt thay thế |

**Năng lực đội:** HTML/CSS/TypeScript và Canvas API nằm trong phạm vi đã học. Phần mới cần nghiên cứu là WebCodecs, muxer MP4 và ghi file theo luồng — đã dành mốc M2 cho việc dựng nguyên mẫu.

### 5.2. Khả thi về pháp lý — **KHẢ THI**

Mô hình M2 đưa trọng tâm pháp lý sang bản quyền tài sản đồ hoạ, vì đây chính là hàng hoá được bán.

| Vấn đề pháp lý                    | Đánh giá | Căn cứ và biện pháp |
| --------------------------------- | -------- | ------------------- |
| **Quyền phân phối lại tài sản trong gói template bán ra** | ⚠️ **Quan trọng nhất** | Ảnh, biểu tượng và font phải có giấy phép cho phép **phân phối lại trong sản phẩm phái sinh** — giấy phép "dùng thương mại" thông thường không đủ. Cần lập danh mục giấy phép cho từng tài sản. (AS-11) |
| **Bảo vệ dữ liệu cá nhân** (NĐ 13/2023/NĐ-CP) | ✅ Rủi ro thấp | Kiến trúc client-side: nội dung không truyền lên máy chủ, không lưu trữ. Cần công bố Chính sách quyền riêng tư. (AS-19) |
| **Bản quyền nội dung người dùng đưa vào** | ⚠️ Chuyển giao trách nhiệm | Do không lưu trữ hay phân phối nội dung, sản phẩm không đóng vai trò trung gian lưu trữ. Cần Điều khoản sử dụng nêu rõ. (AS-20) |
| **Bằng sáng chế H.264/AVC**       | ⚠️ Cần xác minh | Mã hoá do trình duyệt/hệ điều hành thực hiện qua API sẵn có. Đánh giá sơ bộ: không phát sinh nghĩa vụ với MPEG LA. **Cần xác minh trước M4**; nếu rủi ro, chuyển VP9/AV1. (AS-12) |
| **Giấy phép mã nguồn và thư viện** | ✅ Đã rõ | Apache 2.0 cho phần mềm; chỉ dùng thư viện MIT/Apache-2.0/BSD/SIL OFL, cấm GPL/AGPL. (AS-21) |
| **Fork thương mại hợp pháp**      | ⚠️ Chấp nhận | Apache 2.0 cho phép fork và bán dịch vụ cạnh tranh. Biện pháp thực tế: giữ vị thế upstream, chất lượng template và quan hệ khách hàng. (AS-26) |

### 5.3. Khả thi về vận hành — **KHẢ THI**

Không có máy chủ render nghĩa là không có ca trực vận hành. Sản phẩm là ứng dụng tĩnh, triển khai qua CDN ở mức gói miễn phí (AS-25). Bán gói template dùng nền tảng thanh toán sẵn có. Kênh hỗ trợ giai đoạn đầu là email và trang issue công khai.

### 5.4. Khả thi về tiến độ — **KHẢ THI, nhưng là điểm căng nhất**

450 giờ cho một bộ dựng theo khung hình, một pipeline mã hoá theo luồng, một trình soạn thảo và 8 mẫu trình chiếu là ước lượng **eo hẹp**. Biện pháp giữ khả thi: cắt hạng mục ngoài lõi khỏi bản phát hành đầu (Charter §5.2); dùng thư viện muxer có sẵn (AS-15); dựng nguyên mẫu ngay ở M2 để nếu phải đổi hướng thì còn 10 tuần; bảo vệ đường găng M2 → M3 → M4.

Nếu hết M2 nguyên mẫu chưa chạy được, phương án là **giảm phạm vi xuống 4 mẫu trình chiếu và bỏ chức năng lưu/mở dự án**, chứ không lùi ngày bàn giao.

### 5.5. Khả thi về nguồn lực — **KHẢ THI, phụ thuộc cam kết thời gian**

3 thành viên × 10 giờ/tuần × 15 tuần = 450 giờ (AS-03). Với đội 3 người, **một thành viên rút lui là mất 1/3 năng lực** và không có nguồn lực dự phòng. Vốn tiền mặt 1.500.000 VND nằm trong khả năng tự trang trải. Cần ít nhất một thành viên có kinh nghiệm TypeScript từ mức trung bình (AS-23).

### 5.6. Tổng hợp

| Khía cạnh | Kết luận              | Rủi ro còn lại lớn nhất |
| --------- | --------------------- | ----------------------- |
| Kỹ thuật  | Khả thi, có điều kiện | Ghi file theo luồng ngoài Chromium |
| Pháp lý   | Khả thi               | Quyền phân phối lại tài sản trong gói template |
| Vận hành  | Khả thi               | Không đáng kể |
| Tiến độ   | Khả thi               | **450 giờ eo hẹp; đường găng không có dự phòng** |
| Nguồn lực | Khả thi               | Mất 1 thành viên là mất 1/3 năng lực |

**Kết luận chung: khả thi trên cả năm khía cạnh.** Hai điều kiện cần theo dõi sát nhất là nguyên mẫu mã hoá theo luồng và cam kết thời gian của đội.

---

## 6. Risks and Constraints

Dưới đây là rủi ro **ở cấp quyết định đầu tư** — thứ có thể làm khuyến nghị ở §7 sụp đổ. Rủi ro cấp thực thi nằm ở Project Charter §6 và sẽ chi tiết hoá thành Risk Register ở giai đoạn Planning.

| ID    | Rủi ro                                                     | Mức | Ứng phó |
| ----- | ---------------------------------------------------------- | --- | ------- |
| RS-01 | Nguyên mẫu mã hoá theo luồng không đạt trong M2–M4          | **Cao** | Nguyên mẫu ngay tuần 2; dự phòng WebM/VP9; giảm phạm vi theo mục 5.4 |
| RS-02 | Một thành viên rút lui hoặc không đủ 10 giờ/tuần            | **Cao** | Xác nhận cam kết bằng văn bản tại M0 và mỗi 2 tuần; không để kiến thức tập trung vào một người |
| RS-03 | Doanh thu dưới ngưỡng hoà vốn 48% kịch bản cơ sở            | Trung bình | Cấu trúc gần như toàn biến phí nên lỗ tiền mặt rất khó xảy ra; rà soát hàng quý |
| RS-04 | Không mua được tài sản đồ hoạ có quyền phân phối lại trong ngân sách | Trung bình | Ưu tiên nguồn CC0; nếu không đủ, tự thiết kế mẫu tối giản không dùng ảnh |
| RS-05 | Ghi file theo luồng không hoạt động trên Firefox/Safari     | Trung bình | Phương án dự phòng OPFS; công bố rõ giới hạn theo trình duyệt |

Ràng buộc dưới đây là **điều kiện biên mà khuyến nghị ở §7 chỉ đúng bên trong**; nếu một trong số đó thay đổi, Business Case phải được lập lại.

| ID    | Ràng buộc                                                      | Loại      |
| ----- | -------------------------------------------------------------- | --------- |
| CT-01 | Thời gian: 15 tuần, kết thúc trước 2026-12-06                   | Tiến độ   |
| CT-02 | Vốn tiền mặt: 1.500.000 VND — không huy động thêm               | Chi phí   |
| CT-03 | Không có ngân sách cho hạ tầng máy chủ                          | Chi phí   |
| CT-04 | Nhân lực: 3 thành viên bán thời gian — tổng 450 giờ             | Nguồn lực |
| CT-05 | Chỉ dùng thư viện và tài sản có giấy phép cho phép thương mại hoá và phân phối lại | Pháp lý |
| CT-06 | Sản phẩm phải chạy được mà không cần cài đặt gì ngoài trình duyệt | Kỹ thuật |
| CT-07 | Toàn bộ mã nguồn phát hành theo Apache 2.0 — không có cổng khoá tính năng | Pháp lý / Sản phẩm |

---

## 7. Recommendation

**Khuyến nghị phê duyệt phương án kiến trúc P3 (render client-side) kết hợp mô hình doanh thu M2 (gói template có bản quyền + dịch vụ B2B)**, với vốn tiền mặt 1.500.000 VND và 450 giờ công sức trong 15 tuần.

Dự án có nhu cầu thật và chưa có sản phẩm nội địa nào giải quyết đồng thời cả bốn hạn chế ở §2; sáu mục tiêu BO-01 → BO-06 đều có tiêu chí định lượng và truy vết được; khả thi trên cả năm khía cạnh; và đạt ngưỡng tài chính (NPV +165,1 triệu VND, BCR 2,08) ngay cả khi đã tính đầy đủ chi phí cơ hội của 450 giờ. Cấu trúc chi phí gần như toàn biến phí, nên rủi ro thực sự là **lãng phí công sức nếu không bán được, chứ không phải mất tiền**.

**Điều kiện kèm theo khi phê duyệt:**

- Hoàn thành nguyên mẫu chứng minh **mã hoá theo luồng, bộ nhớ không tăng theo độ dài video** trước hết mốc M2; nếu thất bại, kích hoạt phương án giảm phạm vi tại mục 5.4
- Xác minh vấn đề bản quyền H.264 trước mốc M4
- Lập danh mục giấy phép cho từng tài sản đồ hoạ trước khi bán gói template đầu tiên
- Xác nhận cam kết thời gian của cả 3 thành viên bằng văn bản tại M0

**Bước tiếp theo:** ký Hợp đồng thực hiện dự án, phê duyệt Project Charter và bổ nhiệm Giám đốc dự án.

---

*Tài liệu liên quan: Benefit Management Plan · Hợp đồng thực hiện dự án · Project Charter · Assumption Log — cùng bộ tài liệu quản lý dự án PromptVideo.*
