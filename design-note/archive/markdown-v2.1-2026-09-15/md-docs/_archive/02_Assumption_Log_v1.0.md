<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                     |                                   |
| ------------------- | --------------------------------- |
| **Nhóm tiến trình** | Initiating                        |
| **Tên tài liệu**    | Assumption Log                    |
| **Phiên bản**       | Ver. 1.1                          |
| **Nhóm thực hiện**  | Nhóm 02                    |
| **Ngày phát hành**  | 2026-08-25                        |
| **Trạng thái**      | Tài liệu sống — cập nhật liên tục |

<div style="page-break-after: always"></div>

<!-- ======================= TRANG 2 — XÁC NHẬN & LỊCH SỬ ======================= -->

## Xác nhận

| Người tạo         | Người kiểm tra   | Người xác nhận         |
| ----------------- | ---------------- | ---------------------- |
| Nguyễn Việt Quang | Nguyễn Thế Chiến | Phạm Quang Anh         |
|                   | Phạm Quang Anh   | Thầy Nguyễn Đình Quảng |

## Lịch sử cập nhật

| No  | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi                                                                                        | Người thực hiện   | Người phê duyệt |
| --- | --------- | ------------- | -------------- | -------------------------------------------------------------------------------------------------------- | ----------------- | --------------- |
| 1   | Ver 1.0   | 2026-08-20    | Tạo mới        | Khởi tạo sổ giả định: 32 giả định (AS-01 → AS-32) và 7 ràng buộc (CT-01 → CT-07) từ giai đoạn Initiating | Nguyễn Việt Quang | Phạm Quang Anh  |
| 2   | Ver 1.1   | 2026-08-25    | Bổ sung và làm rõ | Bổ sung 6 giả định mới (AS-33 → AS-38) về Quality, Stakeholder, Integration, Procurement; phân loại lại AS-30 từ nhóm 3.4 sang 3.3 (Kinh doanh); làm rõ chiến lược Transfer trong AS-20; thêm mục 3.5 Nhóm Truyền thông/Stakeholder; bổ sung AS-33 vào danh sách ưu tiên xác minh gấp | Nguyễn Việt Quang | Phạm Quang Anh  |

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

Sổ này ghi lại **mọi điều được coi là đúng mà chưa được chứng minh** (giả định) và **mọi giới hạn mà dự án phải chấp nhận** (ràng buộc). Lý do tồn tại rất cụ thể: các con số trong [Business Case](../00_Pre-project/01_Business_Case_v1.1.md) và các cam kết trong [Project Charter](./01_Project_Charter_v1.0.md) đều đứng trên những giả định này. Nếu một giả định sai mà không ai phát hiện, cả chuỗi kết luận phía sau sai theo — nhưng không ai truy được về gốc.

Phiên bản 1.1 của sổ này là một ví dụ thực tế của việc đó. Phiên bản 1.0 chứa một giả định ngầm chưa bao giờ được viết ra: *"có thể thu tiền bằng cách khoá tính năng trong ứng dụng"*. Giả định đó sai — với sản phẩm mã nguồn mở chạy hoàn toàn trên máy người dùng, cổng khoá không thực thi được. Vì nó không nằm trong sổ, không ai kiểm tra nó, và toàn bộ phần doanh thu của Business Case đã phải làm lại. Bài học: **giả định không được viết ra là giả định nguy hiểm nhất.**

Sổ được lập ở nhóm tiến trình Initiating và **cập nhật liên tục trong suốt vòng đời dự án**. Đây không phải tài liệu ký một lần rồi đóng.

---

## 2. Cách sử dụng sổ này

### 2.1. Quy ước mã

| Tiền tố | Loại       | Ý nghĩa                                             |
| ------- | ---------- | --------------------------------------------------- |
| `AS-nn` | Assumption | Điều được coi là đúng nhưng chưa xác minh           |
| `CT-nn` | Constraint | Giới hạn đã biết chắc, dự án phải làm việc trong đó |

### 2.2. Trạng thái

| Trạng thái     | Ý nghĩa                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------ |
| 🔵 Mở          | Chưa xác minh, vẫn đang được coi là đúng                                                   |
| 🟢 Đã xác nhận | Đã kiểm chứng là đúng, có bằng chứng                                                       |
| 🔴 Bị bác bỏ   | Đã kiểm chứng là sai — phải kích hoạt hành động ứng phó và cập nhật các tài liệu phụ thuộc |
| ⚫ Đã đóng      | Không còn liên quan (phạm vi thay đổi, dự án chuyển giai đoạn)                             |

### 2.3. Quy tắc bắt buộc

1. Mỗi giả định phải có **chủ sở hữu** và **hạn xác minh**. Giả định không có hạn là giả định sẽ không bao giờ được kiểm tra.
2. Khi một giả định chuyển sang 🔴 **Bị bác bỏ**, người chủ sở hữu phải thông báo Giám đốc dự án trong vòng **2 ngày làm việc** và rà soát mọi tài liệu tham chiếu đến nó.
3. Giả định mới phát sinh trong quá trình làm phải được thêm vào sổ này, không ghi rải rác trong biên bản họp.
4. Sổ được rà soát tại **mỗi mốc M0–M7**.

---

## 3. Assumptions

### 3.1. Nhóm Kỹ thuật

| ID    | Nội dung giả định                                                                                                             | Ngày ghi nhận | Chủ sở hữu           | Hạn xác minh    | Trạng thái | Tác động nếu sai                                                                                                                                   | Hành động ứng phó                                                                                                         |
| ----- | ----------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------------- | --------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| AS-10 | Người dùng mục tiêu dùng trình duyệt có hỗ trợ WebCodecs (Chrome 94+, Firefox 130+ máy tính, Safari 26+)                      | 2026-08-20    | Trưởng nhóm kỹ thuật | M1 (2026-09-13) | 🔵 Mở      | Sản phẩm không dùng được với một phần người dùng; ảnh hưởng BN-05, BN-06                                                                           | Khảo sát trình duyệt của người dùng mục tiêu khi thu thập yêu cầu; phát hiện năng lực trình duyệt và thông báo rõ (RQ-10) |
| AS-14 | WebCodecs `VideoEncoder` mã hoá được H.264 ở 1920×1080, 30 fps trên máy cấu hình phổ thông                                    | 2026-08-20    | Trưởng nhóm kỹ thuật | M2 (2026-09-27) | 🔵 Mở      | Không đạt OB-01 — mục tiêu cốt lõi của dự án                                                                                                       | Dựng nguyên mẫu ngay tuần 2; dự phòng chuyển sang VP9/WebM                                                                |
| AS-15 | Có thư viện muxer chạy trong trình duyệt, **hỗ trợ ghép theo luồng** (không cần biết trước tổng số khung), giấy phép phù hợp  | 2026-08-20    | Trưởng nhóm kỹ thuật | M2 (2026-09-27) | 🔵 Mở      | Phải tự viết muxer theo luồng — phát sinh 3–4 tuần công sức không có trong 450 giờ                                                                 | Đánh giá `mp4-muxer`, `mp4box.js` ở tuần 2; nếu không dùng được, chuyển sang WebM (muxer đơn giản hơn nhiều)              |
| AS-16 | **Kiến trúc mã hoá theo luồng giữ được bộ nhớ đỉnh không phụ thuộc độ dài video** (tăng ≤ 15% khi độ dài tăng 10 lần)         | 2026-08-20    | Trưởng nhóm kỹ thuật | M2 (2026-09-27) | 🔵 Mở      | **Không đạt OB-02** — phải quay lại giới hạn độ dài, mất một trong bốn lợi thế cạnh tranh và mâu thuẫn với yêu cầu người dùng tự quyết định độ dài | Chứng minh bằng nguyên mẫu tại M2, đo bằng chỉ số MT-07; nếu không đạt, công bố giới hạn rõ ràng thay vì hứa suông        |
| AS-32 | Ghi được file ra đĩa theo từng phần trong lúc mã hoá — qua File System Access API (Chromium) hoặc OPFS (các trình duyệt khác) | 2026-08-20    | Trưởng nhóm kỹ thuật | M2 (2026-09-27) | 🔵 Mở      | Không ghi dần được thì phải giữ toàn bộ file trong bộ nhớ, làm AS-16 sụp đổ trên các trình duyệt không hỗ trợ                                      | Nguyên mẫu kiểm chứng trên cả 3 trình duyệt tại M2; công bố giới hạn theo trình duyệt (RQ-10)                             |
| AS-17 | Việc dựng bằng HTML/CSS rồi vẽ lên canvas cho ra hình ảnh giống hệt nhau giữa các trình duyệt                                 | 2026-08-20    | Trưởng nhóm kỹ thuật | M3 (2026-10-18) | 🔵 Mở      | OB-03 không đạt — mất một lợi thế cạnh tranh cốt lõi                                                                                               | Cố định phiên bản font và nhúng font vào ứng dụng; so sánh checksum sớm từ M3                                             |
| AS-18 | Bộ dựng theo khung hình đủ nhanh để xem trước ở thời gian thực (≥ 24 fps)                                                     | 2026-08-20    | Trưởng nhóm kỹ thuật | M3 (2026-10-18) | 🔵 Mở      | Chức năng xem trước (RQ-05) phải hạ cấp thành xem trước từng khung                                                                                 | Đo hiệu năng sớm; nếu chậm, xem trước ở độ phân giải thấp                                                                 |
| AS-33 | Người dùng không cần kiến thức kỹ thuật (codec, bitrate, frame rate) để sử dụng được sản phẩm từ đầu đến cuối                  | 2026-08-25    | Trưởng nhóm sản phẩm | M3 (2026-10-18) | 🔵 Mở      | OB-01 không đạt về trải nghiệm người dùng; sản phẩm không tiếp cận được đối tượng mục tiêu phi kỹ thuật — ảnh hưởng BN-05, BN-06                    | Kiểm thử khả năng sử dụng (usability test) với ≥ 5 người dùng phi kỹ thuật tại M3; ẩn toàn bộ tham số kỹ thuật theo mặc định |
| AS-34 | Video đầu ra đạt chất lượng thị giác chấp nhận được ở bitrate mặc định — không có artifact rõ ràng (blocking, banding, smearing) | 2026-08-25    | Trưởng nhóm kỹ thuật | M3 (2026-10-18) | 🔵 Mở      | Sản phẩm không đạt OB-01; người dùng từ chối vì chất lượng kém dù tính năng đầy đủ — ảnh hưởng toàn bộ dòng doanh thu BN-01, BN-02                  | Chọn bitrate mặc định đủ cao (≥ 4 Mbps cho 1080p30); kiểm tra thị giác bằng mắt trên ≥ 3 mẫu nội dung đại diện tại M3      |
| AS-37 | Ba module renderer/encoder/muxer pipeline được với nhau mà không tạo backpressure gây blocking ở mức người dùng cảm nhận được (< 500ms stall) | 2026-08-25    | Trưởng nhóm kỹ thuật | M2 (2026-09-27) | 🔵 Mở      | Người dùng thấy giao diện đóng băng trong lúc xuất video; OB-01 không đạt về trải nghiệm — ngay cả khi từng module riêng lẻ hoạt động đúng           | Đo end-to-end latency trong nguyên mẫu M2; nếu có stall, thêm worker thread hoặc đặt yield point giữa các bước pipeline     |

### 3.2. Nhóm Pháp lý

| ID    | Nội dung giả định                                                                                                                          | Ngày ghi nhận | Chủ sở hữu           | Hạn xác minh    | Trạng thái | Tác động nếu sai                                                                                                                                   | Hành động ứng phó                                                                                                                                                                                            |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | -------------------- | --------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AS-11 | Mua được ảnh, biểu tượng và font có **quyền phân phối lại trong sản phẩm phái sinh** trong ngân sách 1.000.000 VND                         | 2026-08-20    | Trưởng nhóm sản phẩm | M2 (2026-09-27) | 🔵 Mở      | **Không bán được gói template — dòng doanh thu BN-01 sụp đổ.** Giấy phép "dùng thương mại" thông thường không đủ, cần loại extended/redistribution | Ưu tiên nguồn CC0: Unsplash, Pexels, Lucide, Phosphor. Font SIL OFL cho phép đóng gói bán kèm trong sản phẩm lớn hơn nhưng cấm bán riêng font. Lập danh mục giấy phép cho từng tài sản                       |
| AS-12 | Mã hoá H.264 qua API sẵn có của trình duyệt không phát sinh nghĩa vụ bản quyền sáng chế với MPEG LA, vì sản phẩm không phân phối bộ mã hoá | 2026-08-20    | Nhà tài trợ          | M4 (2026-11-01) | 🔵 Mở      | Rủi ro pháp lý khi thương mại hoá; có thể phải trả phí bản quyền                                                                                   | Xin ý kiến tư vấn pháp lý trước M4; dự phòng chuyển sang VP9/AV1 trong WebM                                                                                                                                  |
| AS-19 | Kiến trúc client-side khiến sản phẩm gần như không thực hiện hành vi "xử lý dữ liệu cá nhân" theo Nghị định 13/2023/NĐ-CP                  | 2026-08-20    | Nhà tài trợ          | M6 (2026-11-29) | 🔵 Mở      | Phát sinh nghĩa vụ đăng ký, chỉ định người phụ trách bảo vệ dữ liệu, hồ sơ đánh giá tác động                                                       | Kiểm toán lưu lượng mạng trước M6 (chỉ số MT-09); không cài công cụ phân tích thu thập nội dung; công bố Chính sách quyền riêng tư                                                                           |
| AS-20 | Nội dung và hình ảnh do người dùng đưa vào là hợp pháp và thuộc quyền của họ                                                               | 2026-08-20    | Nhà tài trợ          | M6 (2026-11-29) | 🔵 Mở      | Rủi ro liên đới về bản quyền nếu sản phẩm bị coi là trung gian                                                                                     | **Transfer (chuyển giao rủi ro):** Điều khoản sử dụng nêu rõ trách nhiệm thuộc người dùng; sản phẩm không lưu trữ, không phân phối nội dung. Điều khoản sử dụng và Chính sách quyền riêng tư phải soạn và phát hành trước M6.                                                                                                                     |
| AS-21 | Mọi thư viện phụ thuộc có giấy phép MIT / Apache-2.0 / BSD / SIL OFL, không có GPL hay AGPL                                                | 2026-08-20    | Trưởng nhóm kỹ thuật | Mỗi mốc         | 🔵 Mở      | Xung đột giấy phép với Apache 2.0; phải thay thư viện muộn                                                                                         | Rà soát giấy phép phụ thuộc tại mỗi mốc; đưa vào danh mục kiểm tra định nghĩa hoàn thành                                                                                                                     |
| AS-26 | Việc bên thứ ba fork mã nguồn Apache 2.0 và cạnh tranh bằng gói template không làm mất thị phần đáng kể trong 3 năm đầu                    | 2026-08-20    | Nhà tài trợ          | Cuối mỗi năm    | 🔵 Mở      | Doanh thu BN-01, BN-02 bị chia sẻ                                                                                                                  | **Không có biện pháp pháp lý nào ngăn được, và cũng không nên tìm cách ngăn** — Apache 2.0 là quyết định có chủ đích. Cạnh tranh bằng vị thế upstream, chất lượng mẫu, tốc độ cập nhật và quan hệ khách hàng |
| AS-38 | Tài sản đồ họa CC0/SIL OFL đủ chất lượng cho 3 template ban đầu có thể tìm và kiểm tra giấy phép trong ≤ 8 giờ công sức                   | 2026-08-25    | Trưởng nhóm sản phẩm | M2 (2026-09-27) | 🔵 Mở      | Nếu tìm kiếm mất hơn 8 giờ, ngân sách 450 giờ bị ăn mòn không kế hoạch; nếu không tìm được tài sản đủ chất lượng, chất lượng template bị ảnh hưởng | Lập danh mục nguồn ưu tiên trước khi tìm: Unsplash, Pexels (ảnh CC0), Lucide, Phosphor (icon MIT), Google Fonts (SIL OFL); ghi rõ nguồn và giấy phép từng tài sản ngay khi tải về                            |

### 3.3. Nhóm Kinh doanh

| ID    | Nội dung giả định                                                                                                           | Ngày ghi nhận | Chủ sở hữu           | Hạn xác minh    | Trạng thái | Tác động nếu sai                                                                                                                                       | Hành động ứng phó                                                                                                  |
| ----- | --------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------------- | --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| AS-01 | Người dùng hiện mất ~45 phút để tạo một video trình chiếu 60 giây                                                           | 2026-08-20    | Trưởng nhóm sản phẩm | M1 (2026-09-13) | 🔵 Mở      | Lợi ích BN-06 bị thổi phồng; luận điểm bán hàng yếu đi                                                                                                 | Đo baseline thật trên ≥ 10 người dùng trước M1 (chỉ số MT-06) — đầu ra bắt buộc của M1                             |
| AS-04 | Người dùng chấp nhận mức giá 249.000 VND cho một gói template                                                               | 2026-08-20    | Nhà tài trợ          | Quý 2 Năm 1     | 🔵 Mở      | Doanh thu BN-01 không đạt                                                                                                                              | Khảo sát mức sẵn sàng chi trả khi thu thập yêu cầu; thử nghiệm nhiều mức giá ở Quý 2 Năm 1                         |
| AS-05 | Bán được 80 / 260 / 500 gói template trong ba năm đầu                                                                       | 2026-08-20    | Nhà tài trợ          | Cuối mỗi quý    | 🔵 Mở      | Dưới ngưỡng hoà vốn 48% thì công sức bỏ ra không thu lại được giá trị tương xứng                                                                       | Rà soát hàng quý; điểm quyết định chính thức hết Quý 4 Năm 1                                                       |
| AS-31 | **Người dùng miễn phí chuyển đổi thành khách hàng trả tiền ở tỷ lệ đủ để đạt AS-05**                                        | 2026-08-20    | Trưởng nhóm sản phẩm | Quý 2 Năm 1     | 🔵 Mở      | Đây là mắt xích nối phần mềm miễn phí với doanh thu. Nếu đứt, sản phẩm có người dùng nhưng không có doanh thu — rủi ro lớn nhất của mô hình M2 (BR-04) | Theo dõi tỷ lệ chuyển đổi từ tháng đầu; nếu thấp, chuyển trọng tâm sang dòng dịch vụ B2B vốn ít phụ thuộc số lượng |
| AS-27 | Bán được dịch vụ B2B (template theo thương hiệu, đào tạo) ở mức 8.000.000 VND/hợp đồng                                      | 2026-08-20    | Nhà tài trợ          | Quý 3 Năm 1     | 🔵 Mở      | Doanh thu BN-02 không đạt                                                                                                                              | Chào giá thử với 3–5 doanh nghiệp trong Quý 2 Năm 1 trước khi chốt mức giá                                         |
| AS-28 | Ký được 2 / 5 / 9 hợp đồng dịch vụ trong ba năm                                                                             | 2026-08-20    | Nhà tài trợ          | Cuối mỗi quý    | 🔵 Mở      | Doanh thu BN-02 không đạt                                                                                                                              | Rà soát hàng quý                                                                                                   |
| AS-29 | Doanh nghiệp chấp nhận hợp đồng hỗ trợ có SLA ở mức 12.000.000 VND/năm, đạt 0 / 2 / 5 khách hàng                            | 2026-08-20    | Nhà tài trợ          | Cuối Năm 1      | 🔵 Mở      | Doanh thu BN-03 không đạt. Đây là dòng doanh thu rủi ro nhất vì cần uy tín tích luỹ                                                                    | Chỉ chào bán sau khi sản phẩm vận hành ổn định ≥ 12 tháng                                                          |
| AS-06 | Tỷ lệ chiết khấu 12%/năm phản ánh đúng chi phí vốn                                                                          | 2026-08-20    | Nhà tài trợ          | M1 (2026-09-13) | 🔵 Mở      | NPV tính sai; tác động thấp vì NPV vẫn dương trong khoảng r rộng                                                                                       | Xác nhận với bộ phận tài chính của tổ chức chủ quản                                                                |
| AS-07 | Chi phí vận hành tiền mặt không vượt 6 / 14 / 26 triệu VND mỗi năm                                                          | 2026-08-20    | Nhà tài trợ          | Cuối Năm 1      | 🔵 Mở      | BN-04 không đạt; NPV giảm                                                                                                                              | Theo dõi chỉ số MT-05 hàng tháng; hạ tầng tĩnh giữ chi phí ở mức tối thiểu                                         |
| AS-08 | Giá đối thủ ở mức 15–23 USD/tháng và không giảm mạnh trong 3 năm                                                            | 2026-08-20    | Trưởng nhóm sản phẩm | Cuối mỗi quý    | 🔵 Mở      | Lợi thế giá giảm; BN-05 kém hấp dẫn                                                                                                                    | Theo dõi giá đối thủ hàng quý; khác biệt hoá bằng tiếng Việt, xử lý cục bộ và không giới hạn độ dài                |
| AS-13 | Nhà tài trợ duy trì việc theo dõi lợi ích trong 3 năm sau khi dự án đóng                                                    | 2026-08-20    | Nhà tài trợ          | M7 (2026-12-06) | 🔵 Mở      | Toàn bộ lợi ích sau bàn giao không được đo                                                                                                             | Biên bản bàn giao có chữ ký tại M7; đặt sẵn lịch rà soát hàng quý (BR-01)                                          |
| AS-30 | Công sức bảo trì và sản xuất gói template sau bàn giao là 200 / 400 / 700 giờ mỗi năm                                       | 2026-08-20    | Nhà tài trợ          | Cuối Năm 1      | 🔵 Mở      | NPV cơ sở kinh tế tính sai; nếu thực tế cao hơn nhiều, dự án có thể không đáng làm                                                                     | Ghi nhận giờ công thực tế từ tháng đầu sau bàn giao                                                                 |
| AS-22 | Thị trường Việt Nam chưa có sản phẩm cùng lúc đáp ứng: miễn phí + xử lý cục bộ + không giới hạn độ dài + ưu tiên tiếng Việt | 2026-08-20    | Trưởng nhóm sản phẩm | M1 (2026-09-13) | 🔵 Mở      | Luận điểm khác biệt hoá trong Business Case sụp đổ                                                                                                     | Khảo sát đối thủ có hệ thống khi thu thập yêu cầu                                                                  |

### 3.4. Nhóm Nguồn lực và Tiến độ

| ID    | Nội dung giả định                                                                     | Ngày ghi nhận | Chủ sở hữu           | Hạn xác minh     | Trạng thái | Tác động nếu sai                                                                                                   | Hành động ứng phó                                                                                                 |
| ----- | ------------------------------------------------------------------------------------- | ------------- | -------------------- | ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| AS-03 | **Đội có 3 thành viên, mỗi người dành 10 giờ/tuần trong 15 tuần — tổng 450 giờ**      | 2026-08-20    | Giám đốc dự án       | M0 (2026-08-30)  | 🔵 Mở      | Với đội 3 người, mất 1 người là **mất 1/3 năng lực** và không có nguồn dự phòng. Phải cắt phạm vi hoặc lùi tiến độ | Xác nhận cam kết bằng văn bản tại M0; xác nhận lại mỗi 2 tuần (RS-02); không để kiến thức tập trung vào một người |
| AS-02 | Đơn giá công sức quy đổi 80.000 VND/giờ là hợp lý cho mức lập trình viên tập sự       | 2026-08-20    | Giám đốc dự án       | M1 (2026-09-13)  | 🔵 Mở      | Chi phí cơ hội 36 triệu tính sai; ảnh hưởng NPV cơ sở kinh tế                                                      | Đối chiếu mặt bằng lương thực tế; điều chỉnh nếu lệch > 15%                                                       |
| AS-09 | Học kỳ kéo dài từ 2026-08-24 đến 2026-12-06, không có gián đoạn ngoài kế hoạch        | 2026-08-20    | Giám đốc dự án       | M0 (2026-08-30)  | 🔵 Mở      | Toàn bộ lịch mốc M0–M7 phải lập lại                                                                                | Đối chiếu lịch chính thức của Học viện ngay tuần 1                                                                |
| AS-23 | Ít nhất một trong 3 thành viên có kinh nghiệm TypeScript ở mức trung bình trở lên     | 2026-08-20    | Giám đốc dự án       | M0 (2026-08-30)  | 🔵 Mở      | Thời gian học công nghệ ăn vào 450 giờ vốn đã eo hẹp                                                               | Đánh giá năng lực đội ở tuần 1; nếu thiếu, dành tuần 2 cho việc học có định hướng                                 |
| AS-24 | Mùa thi giữa kỳ và cuối kỳ không rơi vào tuần 4–10 (giai đoạn đường găng M2–M4)       | 2026-08-20    | Giám đốc dự án       | M0 (2026-08-30)  | 🔵 Mở      | Đường găng bị chậm; kéo lùi ngày bàn giao                                                                          | Đối chiếu lịch thi ngay tuần 1; nếu trùng, dồn việc nặng lên tuần 2–3                                             |
| AS-25 | Gói miễn phí của Cloudflare Pages / GitHub Pages đủ cho quy mô người dùng dự kiến     | 2026-08-20    | Trưởng nhóm kỹ thuật | Cuối Quý 1 Năm 1 | 🔵 Mở      | Phát sinh chi phí hạ tầng ngoài dự toán; BN-04 không đạt                                                           | Theo dõi hạn mức băng thông; sản phẩm là file tĩnh nên chi phí tăng rất chậm                                      |

### 3.5. Nhóm Truyền thông / Stakeholder

| ID    | Nội dung giả định                                                                                                         | Ngày ghi nhận | Chủ sở hữu     | Hạn xác minh    | Trạng thái | Tác động nếu sai                                                                                                                         | Hành động ứng phó                                                                                                               |
| ----- | ------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------- | --------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| AS-35 | Thầy hướng dẫn (Nguyễn Đình Quảng) phản hồi trong vòng 5 ngày làm việc kể từ khi nhóm gửi tài liệu hoặc câu hỏi         | 2026-08-25    | Giám đốc dự án | M0 (2026-08-30) | 🔵 Mở      | Các quyết định chờ phê duyệt của thầy bị treo; có thể làm chậm các mốc M0–M1 nơi sản phẩm công việc cần xác nhận trước khi tiếp tục     | Đặt lịch họp định kỳ ngay từ tuần 1; giao tiếp bằng văn bản (email/chat) và ghi rõ ngày gửi — nếu quá 5 ngày không có phản hồi, chủ động nhắc lại |
| AS-36 | Tiêu chí chấm điểm của môn học không thay đổi sau khi Project Charter được thầy phê duyệt                                 | 2026-08-25    | Giám đốc dự án | M0 (2026-08-30) | 🔵 Mở      | Nhóm phải làm lại các tài liệu hoặc tính năng không nằm trong kế hoạch ban đầu, ăn vào 450 giờ                                           | Xác nhận tiêu chí chấm điểm bằng văn bản tại M0; nếu có thay đổi, Giám đốc dự án trình bày tác động và xin phê duyệt điều chỉnh phạm vi |

---

## 4. Constraints

| ID    | Ràng buộc                                                                                              | Loại               | Nguồn            | Tác động lên dự án                                                                                   | Cách xử lý                                                                                                                                                             |
| ----- | ------------------------------------------------------------------------------------------------------ | ------------------ | ---------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CT-01 | Dự án phải kết thúc trước 2026-12-06 (15 tuần)                                                         | Tiến độ            | Lịch học kỳ      | Biên an toàn bằng không; đường găng M2→M3→M4 rất căng                                                | Cắt phạm vi ngay từ đầu ([Charter §5.2](./01_Project_Charter_v1.0.md#52-ranh-giới-phạm-vi)); dời ngày bàn giao cần phê duyệt Nhà tài trợ                               |
| CT-02 | Vốn tiền mặt 1.500.000 VND — không huy động thêm                                                       | Chi phí            | Nhà tài trợ      | Loại bỏ mọi phương án cần đầu tư hạ tầng hoặc mua tài sản đắt tiền                                   | Kiến trúc client-side; ưu tiên tài sản đồ hoạ CC0 và font SIL OFL                                                                                                      |
| CT-03 | Không có ngân sách cho hạ tầng máy chủ                                                                 | Chi phí            | Nhà tài trợ      | Loại bỏ hoàn toàn phương án render phía máy chủ (P2) và tier đám mây (M3)                            | Đây là một trong những lý do chính chọn kiến trúc client-side                                                                                                          |
| CT-04 | **Đội 3 thành viên bán thời gian, không tuyển thêm — tổng 450 giờ**                                    | Nguồn lực          | Bối cảnh môn học | Tổng công sức cố định và rất eo hẹp; rủi ro tập trung cao                                            | Ưu tiên hoá phạm vi nghiêm ngặt; không nhận thêm yêu cầu ngoài phạm vi; có phương án giảm phạm vi định sẵn                                                             |
| CT-05 | Chỉ dùng thư viện và tài sản có giấy phép cho phép thương mại hoá **và phân phối lại**                 | Pháp lý            | Nhà tài trợ      | Loại bỏ thư viện GPL và tài sản chỉ có giấy phép dùng thương mại thông thường                        | Rà soát giấy phép tại mỗi mốc (AS-21, AS-11)                                                                                                                           |
| CT-06 | Sản phẩm phải chạy được mà không cần cài đặt gì ngoài trình duyệt                                      | Kỹ thuật           | Định vị sản phẩm | Không dùng được thành phần gốc, không dùng WebAssembly nặng                                          | Toàn bộ chức năng dựa trên API tiêu chuẩn của trình duyệt                                                                                                              |
| CT-07 | **Toàn bộ mã nguồn phát hành theo Apache 2.0 — không có phiên bản đóng, không có cổng khoá tính năng** | Pháp lý / Sản phẩm | Nhà tài trợ      | Loại bỏ mọi mô hình doanh thu dựa trên chặn truy cập; buộc doanh thu phải đến từ nội dung và dịch vụ | Mô hình M2 trong [Business Case §3.2](../00_Pre-project/01_Business_Case_v1.1.md#32-phương-án-mô-hình-doanh-thu); RQ-11 là điều kiện kỹ thuật để mô hình này chạy được |

---

## 5. Giả định cần xác minh gấp

Những giả định sau có **tác động cao** và **hạn xác minh sớm nhất**. Nếu bất kỳ giả định nào trong nhóm này bị bác bỏ, dự án phải xem xét lại phạm vi hoặc căn cứ kinh doanh — không phải chỉ điều chỉnh nhỏ.

| Thứ tự ưu tiên | ID    | Hạn             | Vì sao gấp                                                                                                                                                              |
| -------------- | ----- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1              | AS-16 | M2 — 2026-09-27 | Kiến trúc theo luồng là điều kiện để người dùng tự quyết định độ dài video. Không đạt thì phải quay lại giới hạn cứng và một cam kết cốt lõi với người dùng bị rút lại. |
| 2              | AS-14 | M2 — 2026-09-27 | Nếu WebCodecs không mã hoá được H.264 như mong đợi, toàn bộ sản phẩm phải đổi hướng.                                                                                    |
| 3              | AS-03 | M0 — 2026-08-30 | Toàn bộ ước lượng đứng trên 450 giờ. Với đội 3 người, một thành viên hụt là mất 1/3 năng lực.                                                                           |
| 4              | AS-32 | M2 — 2026-09-27 | Không ghi được file theo luồng thì AS-16 sụp đổ trên các trình duyệt không hỗ trợ.                                                                                      |
| 5              | AS-37 | M2 — 2026-09-27 | Pipeline ba module nếu có backpressure > 500ms thì trải nghiệm xuất video bị phá vỡ — cần phát hiện sớm để thiết kế lại luồng xử lý.                                    |
| 6              | AS-11 | M2 — 2026-09-27 | Không có quyền phân phối lại tài sản đồ hoạ thì **không bán được gói template** — dòng doanh thu chính không tồn tại.                                                   |
| 7              | AS-09 | M0 — 2026-08-30 | Sai lịch học kỳ thì mọi mốc M0–M7 phải lập lại.                                                                                                                         |
| 8              | AS-15 | M2 — 2026-09-27 | Không có muxer theo luồng dùng được thì phát sinh 3–4 tuần không có trong 450 giờ.                                                                                      |
| 9              | AS-33 | M3 — 2026-10-18 | Nếu người dùng phi kỹ thuật không dùng được sản phẩm, OB-01 không đạt và toàn bộ luận điểm "dễ dùng" trong Business Case sụp đổ — cần phát hiện trước khi ra mắt.       |
| 10             | AS-01 | M1 — 2026-09-13 | Không đo baseline trước khi phát triển thì lợi ích BN-06 vĩnh viễn không chứng minh được.                                                                               |
| 11             | AS-24 | M0 — 2026-08-30 | Mùa thi rơi vào đường găng là rủi ro tiến độ lớn nhất mà đội kiểm soát được.                                                                                            |

**Sáu trong mười một giả định gấp nhất đều đến hạn tại M2.** Đây là lý do M2 được thiết kế thành mốc quyết định: nếu nguyên mẫu không đạt, còn 10 tuần để đổi hướng — muộn hơn thì không kịp.

---

## 6. Lịch sử thay đổi trạng thái

Mỗi lần một giả định đổi trạng thái, ghi một dòng vào bảng dưới. Bảng này là bằng chứng cho thấy sổ được sử dụng thật, không phải lập ra rồi bỏ đó.

| Ngày | ID  | Trạng thái cũ | Trạng thái mới | Bằng chứng / lý do | Tài liệu đã cập nhật theo | Người thực hiện |
| ---- | --- | ------------- | -------------- | ------------------ | ------------------------- | --------------- |
|      |     |               |                |                    |                           |                 |

---

*Tài liệu liên quan: [Business Case](../00_Pre-project/01_Business_Case_v1.1.md) · [Benefit Management Plan](../00_Pre-project/02_Benefit_Management_Plan_v1.1.md) · [Project Charter](./01_Project_Charter_v1.0.md)*
