<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                     |                                |
| ------------------- | ------------------------------ |
| **Nhóm tiến trình** | Pre-project                    |
| **Tên tài liệu**    | Business Case                  |
| **Phiên bản**       | Ver. 2.1                       |
| **Nhóm thực hiện**  | Nhóm 02                        |
| **Ngày phát hành**  | 2026-09-01                     |
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
| 1  | Ver 1.0   | 2026-08-20    | Tạo mới        | Khởi tạo Business Case | Nguyễn Thế Chiến | Phạm Quang Anh |
| 2  | Ver 1.1   | 2026-08-24    | Chỉnh sửa      | Bổ sung mục tiêu nghiệp vụ và bảng truy vết BO → OB → BN; chuyển tính toán tài chính sang Benefit Management Plan | Nguyễn Thế Chiến | Phạm Quang Anh |
| 3  | Ver 2.0   | 2026-08-27    | Chỉnh sửa lớn  | Chuyển sang mô hình máy chủ dịch vụ, thu phí thuê bao thường niên, mã nguồn độc quyền | Nguyễn Thế Chiến | Phạm Quang Anh |
| 4  | Ver 2.1   | 2026-09-01    | Tái cấu trúc   | Rút gọn cho người đọc nghiệp vụ: lược chi tiết kỹ thuật trong đánh giá khả thi, lược ma trận trọng số và số liệu trùng với Benefit Management Plan | Nguyễn Thế Chiến | Phạm Quang Anh |

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

> **Ghi chú.** Tài liệu lập trên bối cảnh doanh nghiệp giả định (Enticy Studios là tổ chức chủ quản), phục vụ môn Quản lý dự án phần mềm. Số liệu tài chính và quy mô thuê bao là **giả định**, đăng ký tại **Assumption Log** theo mã `AS-xx`. Thẩm định tài chính chi tiết nằm ở **Benefit Management Plan §4**.

---

## 1. Executive Summary

PromptVideo là **dịch vụ web thu phí thuê bao thường niên** biến văn bản và hình ảnh thành video trình chiếu MP4. Sản phẩm gồm hai phần: **ứng dụng chạy trong trình duyệt** dựng và mã hoá video ngay trên máy người dùng, và **máy chủ dịch vụ** giữ tài khoản, giấy phép, hạn mức và thanh toán.

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

### 1.1. Mục tiêu nghiệp vụ

| ID    | Mục tiêu nghiệp vụ                | Tiêu chí đạt                            | Truy vết |
| ----- | --------------------------------- | --------------------------------------- | -------- |
| BO-01 | Rút ngắn thời gian tạo video      | ≤ 5 phút cho video 60 giây (giảm ≥ 85%) | OB-01 · BN-06 · MT-06 |
| BO-03 | Giữ nội dung trong tổ chức        | 0 byte **nội dung** rời khỏi trình duyệt | OB-09 · BN-09 · MT-09 |
| BO-04 | Bỏ giới hạn độ dài video          | Bộ nhớ tăng ≤ 15% khi độ dài tăng 10 lần | OB-02 · BN-07 · MT-07 |
| BO-05 | Xử lý tiếng Việt đúng             | 100% ký tự đúng trên bộ 134 tổ hợp dấu  | OB-07 · BN-10 · MT-10 |
| BO-07 | Hạ chi phí phần mềm cho người dùng | 599.000 VND/năm (thấp hơn ≥ 85%)        | BN-14 |
| BO-08 | Xây dựng dòng doanh thu định kỳ   | NPV > 0 và BCR > 1; tỷ lệ gia hạn ≥ 70% | BN-13 · BN-16 · BN-17 · MT-13 → MT-16 |

*Mã BO-02 và BO-06 đã bị loại ở Ver 2.0 và không dùng lại, để không phá vỡ tham chiếu ở tài liệu khác. Chi tiết chuyển đổi sang mục tiêu kỹ thuật: Project Charter §3.1.*

**Ưu tiên khi phải đánh đổi.** BO-01 và BO-04 không được hy sinh — đó là lý do sản phẩm tồn tại. BO-05 có thể giảm phạm vi. BO-08 chỉ hiện thực hoá được sau bàn giao; trong 15 tuần, dự án chịu trách nhiệm tạo **điều kiện kỹ thuật** cho nó (RQ-13 → RQ-17).

---

## 2. Business Need

Nhu cầu video ngắn dạng trình chiếu tăng đều ở ba nhóm tại Việt Nam: **doanh nghiệp vừa và nhỏ** (4–8 video/tháng), **giáo viên** (5–20 video/học kỳ) và **người sáng tạo nội dung** (10–30 video/tháng). Quy trình hiện tại — soạn slide → quay màn hình → chỉnh sửa → xuất file — tốn **~45 phút cho một video 60 giây** (AS-01), và phải làm lại toàn bộ khi sai một chi tiết nhỏ.

Công cụ sẵn có không giải quyết được vì cùng lúc mắc sáu hạn chế:

| Hạn chế của giải pháp hiện có     | Ảnh hưởng                                                     |
| --------------------------------- | ------------------------------------------------------------- |
| Thuê bao tính bằng USD            | 4,5–7 triệu VND/năm — rào cản với SME và giáo viên (AS-08)     |
| Render trên máy chủ nhà cung cấp  | Số liệu kinh doanh, thông tin học sinh rời khỏi tổ chức        |
| Giới hạn độ dài và hạn mức xuất   | Cả gói miễn phí lẫn gói trả phí đều có hạn mức                 |
| Kết quả không lặp lại được        | Công cụ AI cho kết quả khác nhau mỗi lần chạy                  |
| Xử lý tiếng Việt kém              | Dấu bị cắt, ngắt dòng sai ở khung hình dọc                     |
| Không có hoá đơn VAT hợp lệ       | Doanh nghiệp không hạch toán được chi phí                      |

**Cơ hội.** Chưa có sản phẩm nào trên thị trường Việt Nam kết hợp đồng thời **giá nội địa + xử lý nội dung cục bộ + không giới hạn độ dài + ưu tiên tiếng Việt + hoá đơn VAT** (AS-22). Công nghệ mã hoá video ngay trong trình duyệt vừa đủ chín trên cả ba dòng trình duyệt phổ biến, lần đầu cho phép bán một dịch vụ thuê bao mà chi phí phục vụ không tăng theo lượng video khách hàng xuất.

**Nếu không làm:** người dùng mục tiêu tiếp tục trả 180–276 USD/năm cho công cụ nước ngoài không xuất được hoá đơn hợp lệ, và Enticy Studios bỏ lỡ cửa sổ công nghệ trước khi đối thủ lớn bắt kịp.

---

## 3. Analysis of Options

### 3.1. Phương án kiến trúc

Bốn phương án được chấm trên sáu tiêu chí có trọng số, ưu tiên những gì quan trọng nhất với một dịch vụ thu phí do đội 3 người vận hành: chi phí phục vụ mỗi thuê bao, khả năng thực thi thuê bao, riêng tư dữ liệu, tính lặp lại của đầu ra, phù hợp năng lực đội, vốn khởi tạo.

| Mã     | Phương án                                | Điểm | Kết luận |
| ------ | ---------------------------------------- | ---: | -------- |
| **P0** | Không làm gì                              | 2,50 | Loại — chỉ dùng làm mốc so sánh |
| **P1** | Bán lại SaaS nước ngoài                   | 2,05 | Loại — biên lợi nhuận mỏng; phần lớn điều khoản bán lại không cho phép |
| **P2** | Dịch vụ render trên máy chủ               | 2,90 | Loại — chi phí máy chủ tăng theo số phút video nên biên lợi nhuận co lại đúng lúc khách hàng dùng nhiều; lưu nội dung làm phát sinh nghĩa vụ nặng theo NĐ 13/2023/NĐ-CP |
| **P4** | **Render trong trình duyệt + máy chủ tài khoản và giấy phép** | **4,60** | ✅ **Được chọn** — chi phí phục vụ theo số tài khoản chứ không theo lượng video; thuê bao thực thi được ở tầng máy chủ; nội dung không rời máy người dùng |

Hai đánh đổi của P4 — phụ thuộc phần cứng người dùng và phụ thuộc kết nối Internet khi xuất video — xử lý tại §5.

**Ranh giới trách nhiệm giữa hai phần.** Máy chủ biết *ai* đang dùng và *bao nhiêu lần*; nó không bao giờ biết *nội dung gì*. Đây không phải chi tiết triển khai mà là ranh giới định vị sản phẩm, chi phối cả nghĩa vụ pháp lý lẫn cấu trúc chi phí.

### 3.2. Phương án mô hình doanh thu

Với kiến trúc P4, cổng khoá tính năng đặt ở máy chủ nên **thực thi được**: không có giấy phép hợp lệ thì không xuất được video.

**M1 — thuê bao thường niên ba bậc — được chọn:** doanh thu định kỳ dự báo được; bậc miễn phí là kênh thu hút và **đếm được** vì hạn mức kiểm ở máy chủ; bậc Doanh nghiệp bán hoá đơn VAT và trách nhiệm hỗ trợ. Ba phương án còn lại bị loại: trả tiền theo lần xuất (M2) cho doanh thu không dự báo được và bắt người dùng cân nhắc chi phí đúng lúc cần dùng sản phẩm; giấy phép vĩnh viễn (M3) không tạo dòng tiền định kỳ để nuôi máy chủ; thuê bao kèm render đám mây (M4) làm mất chính lợi thế chi phí thấp — để lại lộ trình sau.

| Bậc | Giá | Hạn mức và quyền lợi |
| --- | --- | -------------------- |
| **Miễn phí** | 0 VND | 3 video/tháng · watermark · tối đa 720p · đủ 5 mẫu |
| **Cá nhân** | **599.000 VND/năm** | Không giới hạn số video · 1080p · không watermark |
| **Doanh nghiệp** | **4.900.000 VND/năm** | Như bậc Cá nhân · 5 chỗ · hoá đơn VAT · phản hồi hỗ trợ trong 1 ngày làm việc |

Bậc miễn phí giới hạn bằng **độ phân giải** chứ không bằng số mẫu: người dùng thấy được toàn bộ sản phẩm nên có lý do nâng cấp, trong khi trần 720p tự nó chặn dùng cho mục đích thương mại. Phân khúc trả nhiều nhất là doanh nghiệp — họ trả vì hoá đơn hợp lệ và vì có một bên chịu trách nhiệm hỗ trợ.

**Điều kiện để M1 hoạt động:** cơ chế tài khoản, giấy phép và hạn mức phải **thực thi ở máy chủ** — yêu cầu bắt buộc RQ-13 → RQ-17 (Project Charter §4.1).

---

## 4. Cost–Benefit Summary

Chi phí tách rõ **chi phí tiền mặt** (tiền thật phải chi) và **chi phí cơ hội của công sức** (450 giờ quy đổi 80.000 VND/giờ — AS-02, không phải tiền chi ra). Đơn vị: triệu VND.

| Hạng mục                              | Năm 0 (dự án) |  Năm 1 |  Năm 2 |  Năm 3 |
| ------------------------------------- | ------------: | -----: | -----: | -----: |
| Chi phí tiền mặt                      |           3,5 |    6,5 |   15,0 |   28,0 |
| Chi phí công sức (quy đổi)            |          36,0 |   20,8 |   38,4 |   64,0 |
| Doanh thu                             |             0 |   74,6 |  240,7 |  487,4 |
| **Dòng ròng — cơ sở kinh tế đầy đủ**  |     **−39,5** | **+47,3** | **+187,3** | **+395,4** |

Doanh thu đến từ hai dòng của M1: thuê bao Cá nhân (100/320/650) và Doanh nghiệp (3/10/20), tính theo số **đang hoạt động cuối mỗi năm** đã trừ phần không gia hạn (AS-39 → AS-42). Kết quả thẩm định tóm tắt ở bảng §1; bảng dòng tiền chiết khấu và phân tích độ nhạy nằm ở **Benefit Management Plan §4**.

**Con số này nhạy nhất với một biến duy nhất.** Mô hình thuần thuê bao chỉ có một trụ doanh thu, nên toàn bộ kết quả đứng hay đổ theo **số thuê bao Năm 1 và tỷ lệ gia hạn**. Đây là khác biệt quan trọng so với một mô hình nhiều dòng doanh thu.

**Lợi ích phi tài chính:** thời gian tạo video ~45 phút → ≤ 5 phút; chi phí phần mềm cho người dùng giảm từ 4,5–7 triệu xuống 599.000 VND/năm; nội dung không rời tổ chức; không giới hạn độ dài; đầu ra lặp lại được; năng lực và tài sản mã nguồn tích luỹ cho Enticy Studios. Cách đo từng lợi ích: Benefit Management Plan §2.

---

## 5. Feasibility Assessment

**Kỹ thuật — khả thi, có điều kiện.** Công nghệ mã hoá video trong trình duyệt đã hỗ trợ đầy đủ trên Chrome/Edge, Firefox và Safari bản mới. Ràng buộc khó nhất là **BO-04 — video không giới hạn độ dài**: bắt buộc dùng kiến trúc xử lý theo luồng để bộ nhớ không tăng theo độ dài video. Đây là rủi ro kỹ thuật số một, chứng minh bằng nguyên mẫu ngay tại mốc M2 để nếu phải đổi hướng thì còn 10 tuần. Phần máy chủ dùng công nghệ phổ thông, không có yêu cầu hiệu năng cao vì nó chỉ xác thực, không xử lý video.

**Pháp lý — khả thi.** Hai nghĩa vụ thực chất. Thứ nhất, **bảo vệ dữ liệu cá nhân** người đăng ký theo NĐ 13/2023/NĐ-CP — chỉ email, tên và lịch sử thanh toán, còn nội dung video không thuộc diện này vì không rời máy người dùng; cần Chính sách quyền riêng tư, cơ chế đồng ý và quy trình xoá tài khoản. Thứ hai, **hoá đơn và nghĩa vụ thuế** cho bậc Doanh nghiệp, xử lý bằng cổng thanh toán nội địa có hỗ trợ xuất hoá đơn (AS-43); thông tin thẻ do cổng giữ, hệ thống dự án không lưu. Bản quyền tài sản đồ hoạ, giấy phép thư viện và bằng sáng chế định dạng mã hoá đều có phương án và mốc xác minh, đăng ký tại Assumption Log.

**Vận hành — khả thi, có nghĩa vụ mới.** Là dịch vụ thu phí nên sản phẩm **có nghĩa vụ chạy liên tục**: máy chủ giấy phép phải sống, thanh toán phải được xử lý, khách hàng phải được hỗ trợ. Hạ tầng chỉ cần một máy chủ ảo nhỏ cho ≤ 1.000 thuê bao (AS-44), mục tiêu hoạt động ≥ 99%/tháng. Chi phí vận hành tương đương **65.000 / 50.000 / 45.000 VND mỗi thuê bao mỗi năm** — giảm dần vì phần lớn chi phí là cố định trong khi số thuê bao tăng. Đây là đặc tính kinh tế quan trọng nhất của kiến trúc P4: biên lợi nhuận **nở ra** theo quy mô thay vì co lại.

**Tiến độ — khả thi, nhưng là điểm căng nhất.** 450 giờ cho một bộ dựng video, một trình soạn thảo, 5 mẫu trình chiếu **và** một hệ thống tài khoản – giấy phép – thanh toán là ước lượng eo hẹp. Nếu hết M2 nguyên mẫu chưa chạy, phương án là **giảm phạm vi xuống 3 mẫu và bỏ chức năng lưu/mở dự án**, chứ không lùi ngày bàn giao.

**Nguồn lực — khả thi, phụ thuộc cam kết thời gian.** 3 thành viên × 10 giờ/tuần × 15 tuần = 450 giờ (AS-03). Với đội 3 người, **mất một thành viên là mất 1/3 năng lực** và không có dự phòng. Vốn 3.500.000 VND nằm trong khả năng tự trang trải.

| Khía cạnh | Kết luận              | Rủi ro còn lại lớn nhất |
| --------- | --------------------- | ----------------------- |
| Kỹ thuật  | Khả thi, có điều kiện | Xử lý theo luồng chưa được chứng minh; máy chủ giấy phép là điểm chết đơn lẻ |
| Pháp lý   | Khả thi               | Nghĩa vụ dữ liệu cá nhân và hồ sơ cổng thanh toán |
| Vận hành  | Khả thi               | **Nghĩa vụ chạy liên tục 3 năm sau khi dự án đóng** |
| Tiến độ   | Khả thi               | **450 giờ eo hẹp; đường găng không có dự phòng** |
| Nguồn lực | Khả thi               | Mất 1 thành viên là mất 1/3 năng lực |

**Kết luận: khả thi trên cả năm khía cạnh.** Ba điều kiện cần theo dõi sát nhất là nguyên mẫu mã hoá, hồ sơ cổng thanh toán, và cam kết thời gian của đội.

---

## 6. Risks and Constraints

Đây là rủi ro **ở cấp quyết định đầu tư** — thứ có thể làm khuyến nghị ở §7 sụp đổ. Rủi ro cấp thực thi nằm ở Project Charter §6.

| ID    | Rủi ro                                                     | Mức | Ứng phó |
| ----- | ---------------------------------------------------------- | --- | ------- |
| RS-01 | Nguyên mẫu xử lý theo luồng không đạt trong M2–M4           | **Cao** | Nguyên mẫu ngay tuần 4; dự phòng định dạng khác; giảm phạm vi theo §5 |
| RS-02 | Một thành viên rút lui hoặc không đủ 10 giờ/tuần            | **Cao** | Cam kết bằng văn bản tại M0 và mỗi 2 tuần; không để kiến thức tập trung vào một người |
| RS-09 | **Máy chủ giấy phép ngừng hoạt động** — người dùng trả phí không xuất được video | **Cao** | Giám sát tự động; mục tiêu ≥ 99%/tháng; quy trình khôi phục diễn tập tại M6 |
| RS-11 | **Tỷ lệ gia hạn thấp** làm doanh thu Năm 2–3 sụp đổ         | **Cao** | Theo dõi MT-15 từ tháng gia hạn đầu tiên; điểm quyết định hết Quý 4 Năm 1 |
| RS-10 | Cổng thanh toán không duyệt hồ sơ kịp mốc M6                | Trung bình | Nộp hồ sơ tại M2; dự phòng chuyển khoản và kích hoạt thủ công 3 tháng đầu |
| RS-06 | Doanh thu dưới ngưỡng hoà vốn 28%                           | Trung bình | Chi phí cố định thấp nên lỗ tiền mặt khó xảy ra; rà soát hàng quý |
| RS-05 | Không mua được tài sản đồ hoạ có quyền phân phối lại        | Trung bình | Ưu tiên nguồn CC0; nếu không đủ, tự thiết kế mẫu tối giản |
| RS-12 | Rò rỉ dữ liệu tài khoản người dùng                          | Trung bình | Băm mật khẩu, không lưu thông tin thẻ, thu thập tối thiểu (NF-11) |

Ràng buộc dưới đây là **điều kiện biên mà khuyến nghị ở §7 chỉ đúng bên trong**; nếu một trong số đó thay đổi, Business Case phải được lập lại.

| ID    | Ràng buộc                                                      | Loại      |
| ----- | -------------------------------------------------------------- | --------- |
| CT-01 | 15 tuần, kết thúc trước 2026-12-06                              | Tiến độ   |
| CT-02 | Vốn tiền mặt 3.500.000 VND — không huy động thêm                | Chi phí   |
| CT-03 | Hạ tầng ≤ 150.000 VND/tháng trong Năm 0 và ≤ 800.000 VND/tháng đến hết Năm 3 | Chi phí |
| CT-04 | 3 thành viên bán thời gian — tổng 450 giờ                       | Nguồn lực |
| CT-05 | Chỉ dùng thư viện và tài sản có giấy phép cho phép thương mại hoá và phân phối lại | Pháp lý   |
| CT-06 | Chạy được mà không cần cài đặt gì ngoài trình duyệt, nhưng **cần Internet khi xuất video** | Kỹ thuật |
| CT-08 | Mã nguồn độc quyền; **mọi quyền lợi trả phí thực thi ở tầng máy chủ** | Sản phẩm |

---

## 7. Recommendation

**Khuyến nghị phê duyệt phương án kiến trúc P4 kết hợp mô hình doanh thu M1**, với vốn tiền mặt 3.500.000 VND và 450 giờ công sức trong 15 tuần.

Dự án có nhu cầu thật và chưa có sản phẩm nội địa nào giải quyết đồng thời cả sáu hạn chế ở §2; sáu mục tiêu nghiệp vụ đều định lượng và truy vết được; khả thi trên cả năm khía cạnh; và đạt ngưỡng tài chính ngay cả khi đã trừ đủ chi phí cơ hội của 450 giờ. Điểm hoà vốn ở 28% kịch bản cơ sở để lại biên an toàn 72%.

**Rủi ro thật của phương án này không phải chi phí mà là sự phụ thuộc vào một biến duy nhất.** Chi phí cố định thấp nên lỗ tiền mặt khó xảy ra, nhưng toàn bộ giá trị dự án nằm trên số thuê bao và tỷ lệ gia hạn — hai con số chỉ kiểm chứng được sau khi bàn giao. Đây là lý do Benefit Management Plan §5 đặt một điểm quyết định chính thức ở cuối Quý 4 Năm 1.

**Điều kiện kèm theo khi phê duyệt:**

- Nguyên mẫu chứng minh **bộ nhớ không tăng theo độ dài video** trước hết mốc M2; nếu thất bại, kích hoạt phương án giảm phạm vi tại §5
- Nộp hồ sơ cổng thanh toán tại M2, hoàn tất trước M6
- Xác minh bản quyền định dạng mã hoá trước mốc M4
- Ban hành Chính sách quyền riêng tư và Điều khoản sử dụng trước khi mở đăng ký công khai
- Cam kết thời gian của cả 3 thành viên bằng văn bản tại M0
- Nhà tài trợ xác nhận bằng văn bản việc tiếp nhận nghĩa vụ vận hành máy chủ 3 năm sau bàn giao

**Bước tiếp theo:** ký Hợp đồng thực hiện dự án, phê duyệt Project Charter và bổ nhiệm Giám đốc dự án.

---

*Tài liệu liên quan: Benefit Management Plan · Hợp đồng thực hiện dự án · Project Charter · Assumption Log.*
