<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                     |                                |
| ------------------- | ------------------------------ |
| **Nhóm tiến trình** | Initiating                     |
| **Tên tài liệu**    | Assumption Log                 |
| **Phiên bản**       | Ver. 1.0                       |
| **Nhóm thực hiện**  | `<<Tên nhóm>>`                 |
| **Ngày phát hành**  | 2026-08-20                     |
| **Trạng thái**      | Tài liệu sống — cập nhật liên tục |

<div style="page-break-after: always"></div>

<!-- ======================= TRANG 2 — XÁC NHẬN & LỊCH SỬ ======================= -->

## Xác nhận

| Người tạo       | Người kiểm tra  | Người xác nhận  |
| --------------- | --------------- | --------------- |
| `<<Họ và tên>>` | `<<Họ và tên>>` | `<<Họ và tên>>` |
|                 | `<<Họ và tên>>` | `<<Họ và tên>>` |
|                 | `<<Họ và tên>>` | `<<Họ và tên>>` |

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| -- | --------- | ------------- | -------------- | ----------------- | --------------- | --------------- |
| 1  | Ver 1.0   | 2026-08-20    | Tạo mới        | Khởi tạo sổ giả định: 25 giả định (AS-01 → AS-25) và 6 ràng buộc (CT-01 → CT-06) từ giai đoạn Initiating | `<<Họ và tên>>` | `<<Họ và tên>>` |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

## Mục lục

1. [Purpose](#1-purpose)
2. [Cách sử dụng sổ này](#2-cách-sử-dụng-sổ-này)
3. [Assumptions](#3-assumptions)
4. [Constraints](#4-constraints)
5. [Giả định cần xác minh gấp](#5-giả-định-cần-xác-minh-gấp)
6. [Lịch sử thay đổi trạng thái](#6-lịch-sử-thay-đổi-trạng-thái)

<div style="page-break-after: always"></div>

<!-- ============================== NỘI DUNG ============================== -->

## 1. Purpose

Sổ này ghi lại **mọi điều được coi là đúng mà chưa được chứng minh** (giả định) và **mọi giới hạn mà dự án phải chấp nhận** (ràng buộc). Lý do tồn tại rất cụ thể: các con số trong [Business Case](./01_Business_Case.md) và các cam kết trong [Project Charter](./03_Project_Charter.md) đều đứng trên những giả định này. Nếu một giả định sai mà không ai phát hiện, cả chuỗi kết luận phía sau sai theo — nhưng không ai truy được về gốc.

Sổ được lập ở nhóm tiến trình Initiating và **cập nhật liên tục trong suốt vòng đời dự án**. Đây không phải tài liệu ký một lần rồi đóng.

---

## 2. Cách sử dụng sổ này

### 2.1. Quy ước mã

| Tiền tố | Loại      | Ý nghĩa |
| ------- | --------- | ------- |
| `AS-nn` | Assumption | Điều được coi là đúng nhưng chưa xác minh |
| `CT-nn` | Constraint | Giới hạn đã biết chắc, dự án phải làm việc trong đó |

### 2.2. Trạng thái

| Trạng thái      | Ý nghĩa |
| --------------- | ------- |
| 🔵 Mở            | Chưa xác minh, vẫn đang được coi là đúng |
| 🟢 Đã xác nhận   | Đã kiểm chứng là đúng, có bằng chứng |
| 🔴 Bị bác bỏ     | Đã kiểm chứng là sai — phải kích hoạt hành động ứng phó và cập nhật các tài liệu phụ thuộc |
| ⚫ Đã đóng       | Không còn liên quan (phạm vi thay đổi, dự án chuyển giai đoạn) |

### 2.3. Quy tắc bắt buộc

1. Mỗi giả định phải có **chủ sở hữu** và **hạn xác minh**. Giả định không có hạn là giả định sẽ không bao giờ được kiểm tra.
2. Khi một giả định chuyển sang 🔴 **Bị bác bỏ**, người chủ sở hữu phải thông báo Giám đốc dự án trong vòng **2 ngày làm việc** và rà soát mọi tài liệu tham chiếu đến nó.
3. Giả định mới phát sinh trong quá trình làm phải được thêm vào sổ này, không ghi rải rác trong biên bản họp.
4. Sổ được rà soát tại **mỗi mốc M0–M7**.

---

## 3. Assumptions

### 3.1. Nhóm Kỹ thuật

| ID    | Nội dung giả định | Ngày ghi nhận | Người ghi nhận | Chủ sở hữu | Hạn xác minh | Trạng thái | Tác động nếu sai | Hành động ứng phó |
| ----- | ----------------- | ------------- | -------------- | ---------- | ------------ | ---------- | ---------------- | ----------------- |
| AS-10 | Người dùng mục tiêu dùng trình duyệt có hỗ trợ WebCodecs (Chrome 94+, Firefox 130+ máy tính, Safari 26+) | 2026-08-20 | `<<Họ và tên>>` | Trưởng nhóm kỹ thuật | M1 (2026-09-13) | 🔵 Mở | Sản phẩm không dùng được với một phần người dùng; ảnh hưởng trực tiếp BN-01, BN-03 | Khảo sát trình duyệt của người dùng mục tiêu ở giai đoạn thu thập yêu cầu; phát hiện năng lực trình duyệt và thông báo rõ (RQ-10) |
| AS-14 | WebCodecs `VideoEncoder` mã hoá được H.264 ở 1920×1080, 30 fps trên máy cấu hình phổ thông | 2026-08-20 | `<<Họ và tên>>` | Trưởng nhóm kỹ thuật | M2 (2026-09-27) | 🔵 Mở | Không đạt OB-01 — mục tiêu cốt lõi của dự án | Dựng nguyên mẫu ngay tuần 2; dự phòng chuyển sang VP9/WebM |
| AS-15 | Ghép được luồng đã mã hoá thành file MP4 bằng thư viện muxer chạy trong trình duyệt, có giấy phép phù hợp | 2026-08-20 | `<<Họ và tên>>` | Trưởng nhóm kỹ thuật | M2 (2026-09-27) | 🔵 Mở | Phải tự viết muxer — phát sinh 2–3 tuần công sức không có trong lịch | Đánh giá `mp4-muxer`, `mp4box.js` ở tuần 2; nếu không dùng được, chuyển sang WebM (muxer đơn giản hơn nhiều) |
| AS-16 | Máy người dùng có đủ RAM để giữ bộ đệm khung hình cho video dài đến 2 phút | 2026-08-20 | `<<Họ và tên>>` | Trưởng nhóm kỹ thuật | M3 (2026-10-18) | 🔵 Mở | Trình duyệt sập giữa chừng khi xuất; ảnh hưởng OB-04 | Giới hạn cứng 2 phút ở v1.0 (NF-06); kiểm thử trên máy 8 GB RAM; tối ưu streaming ở v1.1 |
| AS-17 | Việc dựng bằng HTML/CSS rồi vẽ lên canvas cho ra hình ảnh giống hệt nhau giữa các trình duyệt | 2026-08-20 | `<<Họ và tên>>` | Trưởng nhóm kỹ thuật | M3 (2026-10-18) | 🔵 Mở | OB-02 không đạt — mất một trong ba lợi thế cạnh tranh cốt lõi | Cố định phiên bản font và nhúng font vào ứng dụng; kiểm thử so sánh checksum sớm từ M3 |
| AS-18 | Bộ dựng theo khung hình đủ nhanh để xem trước ở thời gian thực (≥ 24 fps) | 2026-08-20 | `<<Họ và tên>>` | Trưởng nhóm kỹ thuật | M3 (2026-10-18) | 🔵 Mở | Chức năng xem trước (RQ-04) không dùng được, phải hạ cấp thành xem trước từng khung | Đo hiệu năng sớm; nếu chậm, chuyển sang xem trước ở độ phân giải thấp |

### 3.2. Nhóm Pháp lý

| ID    | Nội dung giả định | Ngày ghi nhận | Người ghi nhận | Chủ sở hữu | Hạn xác minh | Trạng thái | Tác động nếu sai | Hành động ứng phó |
| ----- | ----------------- | ------------- | -------------- | ---------- | ------------ | ---------- | ---------------- | ----------------- |
| AS-11 | Có font tiếng Việt với giấy phép cho phép nhúng và dùng thương mại, trong ngân sách 2.000.000 VND | 2026-08-20 | `<<Họ và tên>>` | Trưởng nhóm sản phẩm | M2 (2026-09-27) | 🔵 Mở | Phải đổi font, làm lại toàn bộ template; rủi ro vi phạm bản quyền nếu bỏ sót | Ưu tiên font SIL OFL: Be Vietnam Pro, Noto Sans, Inter — miễn phí và cho phép thương mại |
| AS-12 | Mã hoá H.264 qua API sẵn có của trình duyệt không phát sinh nghĩa vụ bản quyền sáng chế với MPEG LA, vì sản phẩm không phân phối bộ mã hoá | 2026-08-20 | `<<Họ và tên>>` | Nhà tài trợ | M4 (2026-11-01) | 🔵 Mở | Rủi ro pháp lý khi thương mại hoá; có thể phải trả phí bản quyền | Xin ý kiến tư vấn pháp lý trước M4; dự phòng chuyển sang VP9/AV1 trong WebM (không vướng bản quyền) |
| AS-19 | Kiến trúc client-side khiến sản phẩm gần như không thực hiện hành vi "xử lý dữ liệu cá nhân" theo Nghị định 13/2023/NĐ-CP | 2026-08-20 | `<<Họ và tên>>` | Nhà tài trợ | M6 (2026-11-29) | 🔵 Mở | Phát sinh nghĩa vụ đăng ký, chỉ định người phụ trách bảo vệ dữ liệu, và hồ sơ đánh giá tác động | Kiểm toán lưu lượng mạng trước M6 (chỉ số MT-05); không cài công cụ phân tích thu thập nội dung; công bố Chính sách quyền riêng tư |
| AS-20 | Nội dung và hình ảnh do người dùng đưa vào là hợp pháp và thuộc quyền của họ | 2026-08-20 | `<<Họ và tên>>` | Nhà tài trợ | M6 (2026-11-29) | 🔵 Mở | Rủi ro liên đới về bản quyền nếu sản phẩm bị coi là trung gian | Điều khoản sử dụng nêu rõ trách nhiệm thuộc người dùng; sản phẩm không lưu trữ, không phân phối nội dung |
| AS-21 | Mọi thư viện phụ thuộc có giấy phép MIT / Apache-2.0 / BSD / SIL OFL, không có GPL hay AGPL | 2026-08-20 | `<<Họ và tên>>` | Trưởng nhóm kỹ thuật | Mỗi mốc | 🔵 Mở | Buộc phải mở mã nguồn phần thương mại, hoặc phải thay thư viện muộn | Rà soát giấy phép phụ thuộc tại mỗi mốc bàn giao; đưa vào danh mục kiểm tra định nghĩa hoàn thành |

### 3.3. Nhóm Kinh doanh

| ID    | Nội dung giả định | Ngày ghi nhận | Người ghi nhận | Chủ sở hữu | Hạn xác minh | Trạng thái | Tác động nếu sai | Hành động ứng phó |
| ----- | ----------------- | ------------- | -------------- | ---------- | ------------ | ---------- | ---------------- | ----------------- |
| AS-01 | Người dùng hiện mất ~45 phút để tạo một video trình chiếu 60 giây | 2026-08-20 | `<<Họ và tên>>` | Trưởng nhóm sản phẩm | M1 (2026-09-13) | 🔵 Mở | Lợi ích BN-03 bị thổi phồng; luận điểm bán hàng yếu đi | Đo baseline thật trên ≥ 10 người dùng trước M1 (chỉ số MT-03) — đây là đầu ra bắt buộc của M1 |
| AS-04 | Người dùng mục tiêu chấp nhận mức giá 99.000 VND/tháng cho gói Pro | 2026-08-20 | `<<Họ và tên>>` | Nhà tài trợ | Quý 1 Năm 1 | 🔵 Mở | Doanh thu BN-01 không đạt; NPV giảm | Khảo sát mức sẵn sàng chi trả khi thu thập yêu cầu; dự phòng mô hình trả một lần |
| AS-05 | Đạt trung bình 40 / 110 / 200 thuê bao Pro trong ba năm đầu | 2026-08-20 | `<<Họ và tên>>` | Nhà tài trợ | Cuối mỗi quý | 🔵 Mở | Dưới ngưỡng hoà vốn 62% thì NPV âm | Rà soát hàng quý; điểm quyết định chính thức hết Quý 4 Năm 1 (RS-03) |
| AS-06 | Tỷ lệ chiết khấu 12%/năm phản ánh đúng chi phí vốn | 2026-08-20 | `<<Họ và tên>>` | Nhà tài trợ | M1 (2026-09-13) | 🔵 Mở | NPV tính sai; tuy nhiên NPV vẫn dương trong khoảng r rộng nên tác động thấp | Xác nhận với bộ phận tài chính của tổ chức chủ quản |
| AS-07 | Chi phí vận hành không vượt 36 / 54 / 72 triệu VND mỗi năm | 2026-08-20 | `<<Họ và tên>>` | Nhà tài trợ | Cuối Năm 1 | 🔵 Mở | BN-07 không đạt; NPV giảm | Theo dõi chỉ số MT-07 hàng tháng; hạ tầng tĩnh giữ chi phí ở mức tối thiểu |
| AS-08 | Giá đối thủ ở mức 15–23 USD/tháng và không giảm mạnh trong 3 năm | 2026-08-20 | `<<Họ và tên>>` | Trưởng nhóm sản phẩm | Cuối mỗi quý | 🔵 Mở | Lợi thế giá biến mất; BN-02 không còn hấp dẫn | Theo dõi giá đối thủ hàng quý; khác biệt hoá thêm bằng tiếng Việt và xử lý cục bộ |
| AS-13 | Nhà tài trợ duy trì việc theo dõi lợi ích trong 3 năm sau khi dự án đóng | 2026-08-20 | `<<Họ và tên>>` | Nhà tài trợ | M7 (2026-12-06) | 🔵 Mở | Toàn bộ lợi ích sau bàn giao không được đo; không biết dự án có thành công hay không | Biên bản bàn giao có chữ ký tại M7; đặt sẵn lịch rà soát hàng quý (BR-01) |
| AS-22 | Thị trường Việt Nam chưa có sản phẩm cùng lúc đáp ứng: giá nội địa + xử lý cục bộ + đầu ra xác định + ưu tiên tiếng Việt | 2026-08-20 | `<<Họ và tên>>` | Trưởng nhóm sản phẩm | M1 (2026-09-13) | 🔵 Mở | Luận điểm khác biệt hoá trong Business Case sụp đổ | Khảo sát đối thủ có hệ thống ở giai đoạn thu thập yêu cầu |

### 3.4. Nhóm Nguồn lực và Tiến độ

| ID    | Nội dung giả định | Ngày ghi nhận | Người ghi nhận | Chủ sở hữu | Hạn xác minh | Trạng thái | Tác động nếu sai | Hành động ứng phó |
| ----- | ----------------- | ------------- | -------------- | ---------- | ------------ | ---------- | ---------------- | ----------------- |
| AS-02 | Đơn giá nhân công quy đổi 80.000 VND/giờ là hợp lý cho mức lập trình viên tập sự | 2026-08-20 | `<<Họ và tên>>` | Giám đốc dự án | M1 (2026-09-13) | 🔵 Mở | Ngân sách 60 triệu tính sai; ảnh hưởng NPV và OB-09 | Đối chiếu mặt bằng lương thực tế; điều chỉnh ngân sách nếu lệch > 15% |
| AS-03 | Đội có 5 thành viên, mỗi người dành 10 giờ/tuần trong 15 tuần | 2026-08-20 | `<<Họ và tên>>` | Giám đốc dự án | M0 (2026-08-30) | 🔵 Mở | Tổng công sức 750 giờ không đạt; phải cắt phạm vi hoặc lùi tiến độ | Xác nhận cam kết bằng văn bản tại M0; xác nhận lại mỗi 2 tuần (RS-02) |
| AS-09 | Học kỳ kéo dài từ 2026-08-24 đến 2026-12-06, không có gián đoạn ngoài kế hoạch | 2026-08-20 | `<<Họ và tên>>` | Giám đốc dự án | M0 (2026-08-30) | 🔵 Mở | Toàn bộ lịch mốc M0–M7 phải lập lại | Đối chiếu lịch chính thức của Học viện ngay tuần 1 |
| AS-23 | Ít nhất một thành viên có kinh nghiệm TypeScript ở mức trung bình trở lên | 2026-08-20 | `<<Họ và tên>>` | Giám đốc dự án | M0 (2026-08-30) | 🔵 Mở | Thời gian học công nghệ ăn vào biên an toàn vốn đã hẹp | Đánh giá năng lực đội ở tuần 1; nếu thiếu, dành tuần 2 cho việc học có định hướng |
| AS-24 | Mùa thi giữa kỳ và cuối kỳ không rơi vào tuần 6–10 (giai đoạn đường găng) | 2026-08-20 | `<<Họ và tên>>` | Giám đốc dự án | M0 (2026-08-30) | 🔵 Mở | Đường găng bị chậm; kéo lùi ngày bàn giao | Đối chiếu lịch thi ngay tuần 1; nếu trùng, dồn việc nặng lên tuần 3–5 |
| AS-25 | Gói miễn phí của Cloudflare Pages / GitHub Pages đủ cho quy mô người dùng dự kiến | 2026-08-20 | `<<Họ và tên>>` | Trưởng nhóm kỹ thuật | Cuối Quý 1 Năm 1 | 🔵 Mở | Phát sinh chi phí hạ tầng ngoài dự toán; BN-07 không đạt | Theo dõi hạn mức băng thông; sản phẩm là file tĩnh nên chi phí tăng rất chậm |

---

## 4. Constraints

| ID    | Ràng buộc | Loại      | Nguồn | Tác động lên dự án | Cách xử lý |
| ----- | --------- | --------- | ----- | ------------------ | ---------- |
| CT-01 | Dự án phải kết thúc trước 2026-12-06 (15 tuần) | Tiến độ | Lịch học kỳ | Không có biên an toàn; đường găng M2→M3→M4 rất căng | Cắt phạm vi ngay từ đầu (Charter §5.2); dời ngày bàn giao cần phê duyệt Nhà tài trợ |
| CT-02 | Ngân sách 68.530.000 VND, sai lệch không vượt 10% | Chi phí | Nhà tài trợ | Giới hạn công sức ở 750 giờ | Theo dõi chi phí tại mỗi mốc; quy tắc dùng dự phòng tại Charter §8.3 |
| CT-03 | Không có ngân sách tiền mặt cho hạ tầng máy chủ | Chi phí | Nhà tài trợ | Loại bỏ hoàn toàn phương án render phía máy chủ | Đây là một trong những lý do chính chọn kiến trúc client-side (P3) |
| CT-04 | Đội 5 thành viên bán thời gian, không được tuyển thêm | Nguồn lực | Bối cảnh môn học | Tổng công sức cố định 750 giờ | Ưu tiên hoá phạm vi nghiêm ngặt; không nhận thêm yêu cầu ngoài phạm vi |
| CT-05 | Chỉ dùng thư viện có giấy phép cho phép thương mại hoá | Pháp lý | Nhà tài trợ | Loại bỏ một số thư viện GPL có sẵn | Rà soát giấy phép tại mỗi mốc (AS-21) |
| CT-06 | Sản phẩm phải chạy được mà không cần cài đặt gì ngoài trình duyệt | Kỹ thuật | Định vị sản phẩm | Không dùng được thành phần gốc, không dùng WebAssembly nặng | Toàn bộ chức năng dựa trên API tiêu chuẩn của trình duyệt |

---

## 5. Giả định cần xác minh gấp

Những giả định sau có **tác động cao** và **hạn xác minh sớm nhất**. Nếu bất kỳ giả định nào trong nhóm này bị bác bỏ, dự án phải xem xét lại phạm vi hoặc căn cứ kinh doanh — không phải chỉ điều chỉnh nhỏ.

| Thứ tự ưu tiên | ID | Hạn | Vì sao gấp |
| -------------- | -- | --- | ---------- |
| 1 | AS-14 | M2 — 2026-09-27 | Nếu WebCodecs không mã hoá được H.264 như mong đợi, toàn bộ sản phẩm phải đổi hướng. Đây là giả định sống còn. |
| 2 | AS-03 | M0 — 2026-08-30 | Toàn bộ ước lượng công sức và ngân sách đứng trên con số 750 giờ. |
| 3 | AS-09 | M0 — 2026-08-30 | Sai lịch học kỳ thì mọi mốc M0–M7 phải lập lại. |
| 4 | AS-15 | M2 — 2026-09-27 | Không có muxer dùng được thì phát sinh 2–3 tuần không có trong lịch. |
| 5 | AS-01 | M1 — 2026-09-13 | Không đo baseline trước khi phát triển thì lợi ích BN-03 vĩnh viễn không chứng minh được. |
| 6 | AS-24 | M0 — 2026-08-30 | Mùa thi rơi vào đường găng là rủi ro tiến độ lớn nhất mà đội kiểm soát được. |

---

## 6. Lịch sử thay đổi trạng thái

Mỗi lần một giả định đổi trạng thái, ghi một dòng vào bảng dưới. Bảng này là bằng chứng cho thấy sổ được sử dụng thật, không phải lập ra rồi bỏ đó.

| Ngày | ID | Trạng thái cũ | Trạng thái mới | Bằng chứng / lý do | Tài liệu đã cập nhật theo | Người thực hiện |
| ---- | -- | ------------- | -------------- | ------------------ | ------------------------- | --------------- |
|      |    |               |                |                    |                           |                 |

---

*Tài liệu liên quan: [Business Case](./01_Business_Case.md) · [Benefit Management Plan](./02_Benefit_Management_Plan.md) · [Project Charter](./03_Project_Charter.md)*
