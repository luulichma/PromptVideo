<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                     |                                |
| ------------------- | ------------------------------ |
| **Nhóm tiến trình** | Initiating                     |
| **Tên tài liệu**    | Assumption Log                 |
| **Phiên bản**       | Ver. 2.1                       |
| **Nhóm thực hiện**  | Nhóm 02                        |
| **Ngày phát hành**  | 2026-09-01                     |
| **Trạng thái**      | Tài liệu sống                  |

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
| 1  | Ver 1.0   | 2026-08-20    | Tạo mới        | Khởi tạo sổ giả định và ràng buộc: quy ước mã, trạng thái, quy trình xác minh, danh mục AS và CT theo nhóm | Nguyễn Thế Chiến | Phạm Quang Anh |
| 2  | Ver 2.0   | 2026-08-27    | Chỉnh sửa lớn  | Cập nhật danh mục theo mô hình dịch vụ máy chủ thu phí thuê bao thường niên: bổ sung giả định về giá, số thuê bao, tỷ lệ gia hạn, cổng thanh toán, hạ tầng máy chủ, kết nối Internet và dữ liệu cá nhân; cập nhật ràng buộc về vốn, hạ tầng và giấy phép sản phẩm | Nguyễn Thế Chiến | Phạm Quang Anh |
| 3  | Ver 2.1   | 2026-09-01    | Chỉnh sửa      | Ghi rõ payback danh nghĩa và payback chiết khấu tại AS-39 (§8) cho khớp Business Case và Benefit Management Plan | Nguyễn Thế Chiến | Phạm Quang Anh |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

## Mục lục

1. [Mục đích](#1-mục-đích)
2. [Cách sử dụng sổ này](#2-cách-sử-dụng-sổ-này)
3. [Giả định kỹ thuật](#3-giả-định-kỹ-thuật)
4. [Giả định pháp lý và tuân thủ](#4-giả-định-pháp-lý-và-tuân-thủ)
5. [Giả định kinh doanh và tài chính](#5-giả-định-kinh-doanh-và-tài-chính)
6. [Giả định về nguồn lực và bối cảnh](#6-giả-định-về-nguồn-lực-và-bối-cảnh)
7. [Ràng buộc](#7-ràng-buộc)
8. [Giả định có rủi ro cao nhất](#8-giả-định-có-rủi-ro-cao-nhất)
9. [Mã không còn sử dụng](#9-mã-không-còn-sử-dụng)

<div style="page-break-after: always"></div>

<!-- ============================== NỘI DUNG ============================== -->

## 1. Mục đích

Sổ này ghi lại **mọi điều được coi là đúng mà chưa được chứng minh** (giả định) và **mọi giới hạn mà dự án phải chấp nhận** (ràng buộc). Lý do tồn tại rất cụ thể: các con số trong [Business Case](../00_Pre-project/01_Business_Case_v2.2.md) và các cam kết trong [Project Charter](./01_Project_Charter_v2.0.md) đều đứng trên những giả định này. Nếu một giả định sai mà không ai phát hiện, cả chuỗi kết luận phía sau sai theo — nhưng không ai truy được về gốc.

Với mô hình thuê bao, sổ này còn giữ một vai trò thứ hai: **phần lớn giá trị dự án nằm ở những con số chỉ kiểm chứng được sau khi bàn giao** — số thuê bao, tỷ lệ gia hạn, tỷ lệ chuyển đổi. Không đăng ký chúng thành giả định có ngày kiểm chứng và người chịu trách nhiệm thì chúng sẽ trôi thành sự thật không ai nhớ đã giả định từ đâu.

Sổ được lập ở nhóm tiến trình Initiating và **cập nhật liên tục trong suốt vòng đời dự án**. Đây không phải tài liệu ký một lần rồi đóng.

---

## 2. Cách sử dụng sổ này

### 2.1. Quy ước mã

| Tiền tố | Loại       | Ý nghĩa                                             |
| ------- | ---------- | --------------------------------------------------- |
| `AS-nn` | Assumption | Điều được coi là đúng nhưng chưa xác minh           |
| `CT-nn` | Constraint | Giới hạn đã biết chắc, dự án phải làm việc trong đó |

**Mã không bao giờ được cấp lại.** Khi một giả định hoặc ràng buộc không còn hiệu lực, mã của nó bị rút khỏi danh mục và ghi vào §9, chứ không gán cho nội dung mới. Quy tắc này tồn tại để mọi viện dẫn `AS-xx` trong các tài liệu khác không bao giờ trỏ nhầm sang một nội dung khác với lúc nó được viết.

### 2.2. Trạng thái

| Trạng thái     | Ý nghĩa                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------ |
| 🔵 Mở          | Chưa xác minh, vẫn đang được coi là đúng                                                   |
| 🟢 Đã xác nhận | Đã kiểm chứng là đúng, có bằng chứng                                                       |
| 🔴 Bị bác bỏ   | Đã kiểm chứng là sai — phải mở yêu cầu thay đổi cho mọi tài liệu phụ thuộc                 |
| ⚪ Không còn áp dụng | Bối cảnh thay đổi khiến giả định không còn liên quan                                  |

### 2.3. Quy trình xác minh

1. Mỗi giả định có **một người chịu trách nhiệm** và **một hạn xác minh** gắn với mốc dự án.
2. Tại mỗi mốc, Giám đốc dự án rà soát toàn bộ giả định đến hạn và cập nhật trạng thái.
3. Giả định chuyển sang 🔴 **Bị bác bỏ** phải được xử lý trong 5 ngày làm việc: đánh giá tác động, mở yêu cầu thay đổi nếu cần, cập nhật mọi tài liệu viện dẫn nó.
4. Giả định mới phát sinh trong quá trình làm việc phải được ghi vào sổ **ngay khi phát hiện**, không đợi tới mốc.

---

## 3. Giả định kỹ thuật

| ID | Nội dung | Ngày lập | Người chịu trách nhiệm | Hạn xác minh | Trạng thái | Hệ quả nếu sai | Cách xác minh / giảm thiểu |
| -- | -------- | -------- | ---------------------- | ------------ | ---------- | -------------- | -------------------------- |
| AS-10 | Người dùng mục tiêu dùng trình duyệt có hỗ trợ WebCodecs (Chrome 94+, Firefox 130+ máy tính, Safari 26+) | 2026-08-20 | Trưởng nhóm kỹ thuật | M1 (2026-09-13) | 🔵 Mở | Một phần thị trường không dùng được sản phẩm | Khảo sát người dùng mục tiêu; phát hiện năng lực khi mở ứng dụng (RQ-10) |
| AS-14 | WebCodecs `VideoEncoder` mã hoá được H.264 ở 1920×1080, 30 fps trên máy cấu hình phổ thông | 2026-08-20 | Trưởng nhóm kỹ thuật | M2 (2026-09-27) | 🔵 Mở | Sản phẩm phải đổi hướng sang codec khác | Nguyên mẫu tại M2; dự phòng VP9/WebM |
| AS-15 | Có thư viện muxer chạy trong trình duyệt, **hỗ trợ ghép theo luồng** (không cần biết trước tổng số khung), giấy phép phù hợp NF-07 | 2026-08-20 | Trưởng nhóm kỹ thuật | M2 (2026-09-27) | 🔵 Mở | Phải tự viết muxer — vượt xa 450 giờ | Khảo sát thư viện tại M2; nếu không có, giảm phạm vi |
| AS-16 | **Kiến trúc mã hoá theo luồng giữ được bộ nhớ đỉnh không phụ thuộc độ dài video** (tăng ≤ 15% khi độ dài tăng 10 lần) | 2026-08-20 | Trưởng nhóm kỹ thuật | M2 (2026-09-27) | 🔵 Mở | **Không đạt OB-02** — phải quay lại giới hạn độ dài, mất một trong bốn lợi thế cạnh tranh | Chứng minh bằng nguyên mẫu tại M2, đo bằng chỉ số MT-07; nếu không đạt, công bố giới hạn rõ ràng thay vì hứa suông |
| AS-32 | Ghi được file ra đĩa theo từng phần trong lúc mã hoá — qua File System Access API (Chromium) hoặc OPFS (các trình duyệt khác) | 2026-08-20 | Trưởng nhóm kỹ thuật | M2 (2026-09-27) | 🔵 Mở | Không ghi dần được thì phải giữ toàn bộ file trong bộ nhớ, làm AS-16 sụp đổ trên các trình duyệt không hỗ trợ | Nguyên mẫu kiểm chứng trên cả 3 trình duyệt tại M2; công bố giới hạn theo trình duyệt (RQ-10) |
| AS-17 | Việc dựng bằng HTML/CSS rồi vẽ lên canvas cho ra hình ảnh giống hệt nhau giữa các trình duyệt | 2026-08-20 | Trưởng nhóm kỹ thuật | M3 (2026-10-18) | 🔵 Mở | OB-03 không đạt — mất một lợi thế cạnh tranh cốt lõi | Cố định phiên bản font và nhúng font vào ứng dụng; so sánh checksum sớm từ M3 |
| AS-18 | Bộ dựng theo khung hình đủ nhanh để xem trước ở thời gian thực (≥ 24 fps) | 2026-08-20 | Trưởng nhóm kỹ thuật | M3 (2026-10-18) | 🔵 Mở | Chức năng xem trước (RQ-05) phải hạ cấp thành xem trước từng khung | Đo hiệu năng sớm; nếu chậm, xem trước ở độ phân giải thấp |
| AS-33 | Người dùng không cần kiến thức kỹ thuật (codec, bitrate, frame rate) để sử dụng được sản phẩm từ đầu đến cuối | 2026-08-20 | Trưởng nhóm sản phẩm | M6 (2026-11-29) | 🔵 Mở | OB-08 không đạt; tỷ lệ chuyển đổi từ bậc miễn phí sụt theo | Kiểm thử người dùng tại M6 với 10 người chưa từng dùng |
| AS-34 | Video đầu ra đạt chất lượng thị giác chấp nhận được ở bitrate mặc định — không có artifact rõ ràng | 2026-08-20 | Trưởng nhóm kỹ thuật | M4 (2026-11-01) | 🔵 Mở | Người dùng không trả tiền cho video trông kém | Duyệt thị giác trên bộ mẫu chuẩn tại M4 |
| AS-37 | Ba mô-đun bộ dựng / bộ mã hoá / muxer ghép được với nhau mà không tạo backpressure gây nghẽn ở mức người dùng cảm nhận được | 2026-08-20 | Trưởng nhóm kỹ thuật | M4 (2026-11-01) | 🔵 Mở | Thời gian xuất vượt ngưỡng OB-01 | Đo tại gói 5.1.4; tinh chỉnh hàng đợi giữa các mô-đun |
| AS-44 | **Một máy chủ ảo nhỏ (2 vCPU / 4 GB) kèm PostgreSQL đủ phục vụ ≤ 1.000 thuê bao với chi phí ≤ 800.000 VND/tháng** | 2026-08-27 | Trưởng nhóm kỹ thuật | M6 (2026-11-29) | 🔵 Mở | Chi phí phục vụ mỗi thuê bao (BN-13) vượt mục tiêu; CT-03 bị phá | Đo tải thực tế tại M6; máy chủ chỉ xác thực nên tải rất nhẹ so với một dịch vụ render |
| AS-45 | **Người dùng có kết nối Internet ổn định tại thời điểm xuất video** | 2026-08-27 | Trưởng nhóm sản phẩm | M6 (2026-11-29) | 🔵 Mở | Người dùng ở nơi mạng kém — đặc biệt giáo viên dùng máy trường (SH-07) — không xuất được video, dù đã trả tiền | Đây là hệ quả trực tiếp của quyết định xác thực trực tuyến bắt buộc (RQ-14). Xác thực **trước** khi bắt đầu mã hoá để không hỏng một lần xuất đang chạy dở; thông báo trạng thái kết nối rõ ràng (RQ-10); ghi nhận phản hồi người dùng về tình huống này từ tháng đầu |
| AS-47 | **Xác thực giấy phép trước mỗi lần xuất không làm tăng thời gian xuất quá 1 giây** | 2026-08-27 | Trưởng nhóm kỹ thuật | M5 (2026-11-15) | 🔵 Mở | Trải nghiệm xấu đi ở mỗi thao tác quan trọng nhất của sản phẩm | Ngưỡng NF-09 (≤ 1 giây ở phân vị 95); đo trong kiểm thử đầu-cuối tại M5 |

---

## 4. Giả định pháp lý và tuân thủ

| ID | Nội dung | Ngày lập | Người chịu trách nhiệm | Hạn xác minh | Trạng thái | Hệ quả nếu sai | Cách xác minh / giảm thiểu |
| -- | -------- | -------- | ---------------------- | ------------ | ---------- | -------------- | -------------------------- |
| AS-11 | Mua được ảnh, biểu tượng và font có **quyền phân phối lại trong sản phẩm phái sinh** cho 5 mẫu đi kèm, trong ngân sách 700.000 VND | 2026-08-20 | Trưởng nhóm sản phẩm | M2 (2026-09-27) | 🔵 Mở | Không phát hành được mẫu đi kèm; NF-08 và CT-05 không đạt | Ưu tiên nguồn CC0; lập hồ sơ giấy phép cho từng tài sản; nếu không đủ, làm mẫu tối giản không dùng ảnh |
| AS-12 | Mã hoá H.264 qua API sẵn có của trình duyệt không phát sinh nghĩa vụ bản quyền sáng chế với MPEG LA, vì sản phẩm không phân phối bộ mã hoá | 2026-08-20 | Nhà tài trợ | M4 (2026-11-01) | 🔵 Mở | Phát sinh nghĩa vụ tài chính khi thương mại hoá | Tra cứu điều khoản cấp phép; nếu rủi ro, chuyển sang VP9/AV1 |
| AS-19 | Nội dung video của người dùng **không thuộc phạm vi xử lý dữ liệu cá nhân** theo NĐ 13/2023/NĐ-CP, vì nội dung không bao giờ rời khỏi trình duyệt | 2026-08-27 | Nhà tài trợ | M4 (2026-11-01) | 🔵 Mở | Phát sinh nghĩa vụ nặng hơn nhiều so với dự kiến | Kiểm chứng bằng phép đo OB-09 (0 byte nội dung rời trình duyệt) — đây là bằng chứng kỹ thuật cho lập luận pháp lý |
| AS-46 | **Việc thu thập email, tên và lịch sử thanh toán nằm trong phạm vi NĐ 13/2023/NĐ-CP, và tổ chức đáp ứng được nghĩa vụ ở mức cơ bản** (thông báo, đồng ý, quyền xoá) | 2026-08-27 | Nhà tài trợ | M6 (2026-11-29) | 🔵 Mở | Hoạt động thu phí không tuân thủ; rủi ro pháp lý cho tổ chức chủ quản | Ban hành Chính sách quyền riêng tư và cơ chế đồng ý khi đăng ký trước khi mở đăng ký công khai (điều kiện nghiệm thu số 5) |
| AS-20 | Nội dung và hình ảnh do người dùng đưa vào là hợp pháp và thuộc quyền của họ | 2026-08-20 | Nhà tài trợ | M6 (2026-11-29) | 🔵 Mở | Tranh chấp bản quyền liên quan tới sản phẩm | Điều khoản sử dụng nêu rõ trách nhiệm thuộc về người dùng; sản phẩm không lưu trữ nên không đóng vai trò trung gian |
| AS-21 | Mọi thư viện phụ thuộc có giấy phép MIT / Apache-2.0 / BSD / SIL OFL, không có GPL hay AGPL | 2026-08-20 | Trưởng nhóm kỹ thuật | M6 (2026-11-29) | 🔵 Mở | **Sản phẩm mã nguồn đóng vi phạm giấy phép copyleft** — hệ quả nghiêm trọng hơn hẳn so với một sản phẩm mở | Rà soát giấy phép tự động trong CI; kiểm tra lại toàn bộ tại gói 8.2 |
| AS-43 | **Cổng thanh toán nội địa duyệt hồ sơ cho một tổ chức quy mô nhỏ trong ≤ 4 tuần** | 2026-08-27 | Nhà tài trợ | M6 (2026-11-29) | 🔵 Mở | Không thu được tiền khi phát hành — OB-15 không đạt và mô hình doanh thu chưa vận hành được | Nộp hồ sơ ngay tại M2 để có 8 tuần đệm; dự phòng thu bằng chuyển khoản và kích hoạt giấy phép thủ công trong 3 tháng đầu (RS-10) |
| AS-38 | Tài sản đồ hoạ CC0/SIL OFL đủ chất lượng cho các mẫu ban đầu có thể tìm và kiểm tra giấy phép trong ≤ 8 giờ công | 2026-08-20 | Trưởng nhóm sản phẩm | M2 (2026-09-27) | 🔵 Mở | Gói 3.2.1 vượt giờ dự toán | Bắt đầu tìm tài sản ngay tuần 4; giới hạn thời gian tìm kiếm |

---

## 5. Giả định kinh doanh và tài chính

| ID | Nội dung | Ngày lập | Người chịu trách nhiệm | Hạn xác minh | Trạng thái | Hệ quả nếu sai | Cách xác minh / giảm thiểu |
| -- | -------- | -------- | ---------------------- | ------------ | ---------- | -------------- | -------------------------- |
| AS-01 | Người dùng hiện mất ~45 phút để tạo một video trình chiếu 60 giây | 2026-08-20 | Trưởng nhóm sản phẩm | M1 (2026-09-13) | 🔵 Mở | BN-06 mất ý nghĩa — nếu baseline thật thấp hơn nhiều thì mức cải thiện không đủ hấp dẫn để trả tiền | **Đo baseline trên ≥ 10 người trước khi kết thúc M1** (gói 2.4.1, xử lý rủi ro BR-02) |
| AS-41 | **Người dùng chấp nhận mức giá 599.000 VND/năm (Cá nhân) và 4.900.000 VND/năm (Doanh nghiệp)** | 2026-08-27 | Nhà tài trợ | Quý 1 Năm 1 | 🔵 Mở | BN-16 và BN-17 không đạt; toàn bộ §4 của Benefit Management Plan phải tính lại | Phỏng vấn giá với ≥ 10 người dùng mục tiêu tại M1; theo dõi MT-16 (tỷ lệ chuyển đổi) từ tháng đầu |
| AS-39 | **Đạt 100 / 320 / 650 thuê bao Cá nhân đang hoạt động cuối mỗi năm** | 2026-08-27 | Nhà tài trợ | Cuối mỗi quý, Năm 1 → Năm 3 | 🔵 Mở | Là biến số chính của phân tích độ nhạy §4.7; dưới 28% kịch bản cơ sở thì BCR < 1 | Đo bằng MT-14 hàng tháng; điểm quyết định hết Quý 4 Năm 1 |
| AS-40 | **Đạt 3 / 10 / 20 thuê bao Doanh nghiệp đang hoạt động cuối mỗi năm** | 2026-08-27 | Nhà tài trợ | Cuối mỗi quý, Năm 1 → Năm 3 | 🔵 Mở | BN-17 không đạt; mất phân khúc có giá trị mỗi khách hàng cao nhất | Đo bằng MT-14; tiếp cận trực tiếp doanh nghiệp thay vì chờ họ tự đăng ký |
| AS-42 | **Tỷ lệ gia hạn hằng năm ≥ 70%** | 2026-08-27 | Nhà tài trợ | Quý 4 Năm 1 | 🔵 Mở | **Giả định rủi ro nhất của toàn bộ mô hình.** Doanh thu Năm 2 và Năm 3 gần như hoàn toàn do tỷ lệ này quyết định, nhưng nó chỉ đo được sau 12 tháng — có một khoảng mù một năm | Đo bằng MT-15 từ chu kỳ gia hạn đầu tiên; trong khoảng mù, dùng MT-16 và phản hồi người dùng làm chỉ số thay thế; phỏng vấn mọi khách hàng rời bỏ ngay từ trường hợp đầu tiên |
| AS-31 | **Người dùng bậc miễn phí chuyển đổi thành thuê bao trả phí ở tỷ lệ đủ để đạt AS-39** | 2026-08-27 | Nhà tài trợ | Quý 1 Năm 1 | 🔵 Mở | Mắt xích nối bậc miễn phí với doanh thu đứt — rủi ro BR-08 | Theo dõi MT-16 hàng tháng; nếu thấp, siết hạn mức bậc miễn phí hoặc điều chỉnh giá |
| AS-06 | Tỷ lệ chiết khấu 12%/năm phản ánh đúng chi phí vốn | 2026-08-20 | Nhà tài trợ | M1 (2026-09-13) | 🔵 Mở | NPV, BCR và payback đều tính trên `r` này nên đều lệch theo | Đối chiếu lãi suất vay trung hạn tại thời điểm lập; phân tích độ nhạy theo `r` nếu cần |
| AS-07 | Chi phí vận hành tiền mặt không vượt 6,5 / 15 / 28 triệu VND mỗi năm | 2026-08-27 | Nhà tài trợ | Cuối mỗi năm | 🔵 Mở | Mẫu số của BCR tăng; BN-13 không đạt | Đối soát hoá đơn nhà cung cấp hàng quý; phí cổng thanh toán co giãn theo doanh thu nên tự điều chỉnh |
| AS-30 | Công sức vận hành máy chủ, hỗ trợ khách hàng và bảo trì là 260 / 480 / 800 giờ mỗi năm | 2026-08-27 | Nhà tài trợ | Cuối mỗi quý | 🔵 Mở | Mẫu số của BCR tăng đáng kể — đây là khoản chi phí lớn nhất sau bàn giao | Ghi nhận giờ công thực tế từ tháng đầu; tính lại BCR mỗi quý (rủi ro BR-07) |
| AS-08 | Giá đối thủ ở mức 15–23 USD/tháng và không giảm mạnh trong 3 năm | 2026-08-20 | Trưởng nhóm sản phẩm | Cuối mỗi năm | 🔵 Mở | Lợi thế giá của BO-07 thu hẹp | Theo dõi bảng giá đối thủ hàng quý |
| AS-22 | Thị trường Việt Nam chưa có sản phẩm cùng lúc đáp ứng: giá nội địa + xử lý nội dung cục bộ + không giới hạn độ dài + ưu tiên tiếng Việt + hoá đơn VAT | 2026-08-20 | Trưởng nhóm sản phẩm | M1 (2026-09-13) | 🔵 Mở | Mất lợi thế người đi trước; phải cạnh tranh trực diện | Khảo sát thị trường lại tại M1 |
| AS-13 | Nhà tài trợ duy trì việc **vận hành máy chủ và theo dõi lợi ích** trong 3 năm sau khi dự án đóng | 2026-08-27 | Nhà tài trợ | Tuần 15 (2026-12-06) | 🔵 Mở | Máy chủ ngừng thì toàn bộ người dùng trả phí mất quyền sử dụng — nghiêm trọng hơn hẳn việc chỉ ngừng theo dõi lợi ích | Xác nhận bằng văn bản tại buổi ký Charter (§12.3) và biên bản bàn giao có chữ ký tại tuần 15 |
| AS-02 | Đơn giá công sức quy đổi 80.000 VND/giờ là hợp lý cho mức lập trình viên tập sự | 2026-08-20 | Giám đốc dự án | M1 (2026-09-13) | 🔵 Mở | Chi phí cơ hội bị định giá sai, NPV và BCR lệch theo | Đối chiếu mức lương thực tập tại thị trường Hà Nội |

---

## 6. Giả định về nguồn lực và bối cảnh

| ID | Nội dung | Ngày lập | Người chịu trách nhiệm | Hạn xác minh | Trạng thái | Hệ quả nếu sai | Cách xác minh / giảm thiểu |
| -- | -------- | -------- | ---------------------- | ------------ | ---------- | -------------- | -------------------------- |
| AS-03 | **Đội có 3 thành viên, mỗi người dành 10 giờ/tuần trong 15 tuần — tổng 450 giờ** | 2026-08-20 | Giám đốc dự án | M0 (2026-08-30) | 🔵 Mở | Toàn bộ lịch và phạm vi phải lập lại; mất 1 người là mất 1/3 năng lực (RS-02) | Xác nhận cam kết bằng văn bản tại M0 và rà lại mỗi 2 tuần |
| AS-23 | Ít nhất một trong 3 thành viên có kinh nghiệm TypeScript ở mức trung bình trở lên | 2026-08-20 | Giám đốc dự án | M0 (2026-08-30) | 🔵 Mở | Thời gian học vượt quá phần đệm của lịch | Đánh giá năng lực tại M0; phân công gói việc theo kết quả |
| AS-48 | **Đội tự triển khai và vận hành được một máy chủ dịch vụ có xác thực và tích hợp thanh toán trong 60 giờ** | 2026-08-27 | Trưởng nhóm kỹ thuật | M2 (2026-09-27) | 🔵 Mở | Nhánh máy chủ vượt giờ, lấn sang các gói khác ở M5–M6 | Dùng thư viện xác thực và SDK cổng thanh toán có sẵn thay vì tự viết; rà lại ước lượng cuối M2 |
| AS-09 | Học kỳ kéo dài từ 2026-08-24 đến 2026-12-06, không có gián đoạn ngoài kế hoạch | 2026-08-20 | Giám đốc dự án | M0 (2026-08-30) | 🔵 Mở | CT-01 bị phá; không còn tuần nào để bù | Đối chiếu lịch học vụ chính thức tại M0 |
| AS-24 | Mùa thi giữa kỳ và cuối kỳ không rơi vào tuần 4–12 (giai đoạn đường găng M2–M5) | 2026-08-20 | Giám đốc dự án | M0 (2026-08-30) | 🔵 Mở | Năng lực đội sụt đúng vào giai đoạn cần 33–39 giờ/tuần | Đối chiếu lịch thi tại M0; nếu trùng, dồn giờ sang tuần trước và sau |
| AS-25 | Ứng dụng trình duyệt phát hành dạng tĩnh qua CDN ở gói miễn phí đủ cho quy mô người dùng dự kiến | 2026-08-20 | Trưởng nhóm kỹ thuật | M6 (2026-11-29) | 🔵 Mở | Phát sinh chi phí ngoài trần CT-03 | Theo dõi lưu lượng CDN từ khi phát hành; ứng dụng là file tĩnh nên rất nhẹ |
| AS-35 | Thầy hướng dẫn phản hồi trong vòng 5 ngày làm việc kể từ khi nhóm gửi tài liệu hoặc câu hỏi | 2026-08-20 | Giám đốc dự án | M1 (2026-09-13) | 🔵 Mở | Tài liệu chờ duyệt chặn tiến độ mốc kế tiếp | Gửi tài liệu sớm hơn hạn 5 ngày; không để việc duyệt nằm trên đường găng |
| AS-36 | Tiêu chí chấm điểm của môn học không thay đổi sau khi Project Charter được thầy phê duyệt | 2026-08-20 | Giám đốc dự án | M0 (2026-08-30) | 🔵 Mở | Phạm vi tài liệu phải làm lại | Xác nhận tiêu chí bằng văn bản tại M0 |

---

## 7. Ràng buộc

| ID | Nội dung | Loại | Nguồn | Hệ quả với dự án |
| -- | -------- | ---- | ----- | ---------------- |
| CT-01 | Dự án phải kết thúc trước 2026-12-06 (15 tuần) | Tiến độ | Lịch học kỳ | Biên an toàn bằng không; khi chậm thì **giảm phạm vi trước, lùi ngày sau** |
| CT-02 | **Vốn tiền mặt 3.500.000 VND — không huy động thêm** | Chi phí | Nhà tài trợ | Mọi khoản vượt phải có phê duyệt Nhà tài trợ (Charter §8.5) |
| CT-03 | **Chi phí hạ tầng máy chủ ≤ 150.000 VND/tháng trong Năm 0 và ≤ 800.000 VND/tháng đến hết Năm 3** | Chi phí | Nhà tài trợ | Loại bỏ mọi kiến trúc có chi phí tăng theo lượng video; buộc máy chủ chỉ làm xác thực |
| CT-04 | **Đội 3 thành viên bán thời gian, không tuyển thêm — tổng 450 giờ** | Nguồn lực | Bối cảnh môn học | Năng lực 30 giờ/tuần, đúng bằng tổng nhu cầu — mọi tuần phải chạy ở 100% |
| CT-05 | Chỉ dùng thư viện và tài sản có giấy phép cho phép thương mại hoá **và phân phối lại** | Pháp lý | Nhà tài trợ | Cấm GPL/AGPL; tài sản đồ hoạ phải có quyền phân phối lại trong sản phẩm phái sinh |
| CT-06 | Sản phẩm chạy được mà không cần cài đặt gì ngoài trình duyệt, **nhưng cần kết nối Internet khi xuất video** | Kỹ thuật | Quyết định sản phẩm | Loại bỏ phương án ứng dụng cài đặt; đồng thời tạo ra phụ thuộc AS-45 |
| CT-08 | **Mã nguồn độc quyền, không công khai; mọi quyền lợi trả phí phải được thực thi ở tầng máy chủ**, không đặt trong mã chạy trên máy người dùng | Sản phẩm | Nhà tài trợ | Quyết định kiến trúc bắt buộc: mọi kiểm tra bậc, hạn mức và watermark phải do máy chủ quyết định, ứng dụng chỉ thi hành |

---

## 8. Giả định có rủi ro cao nhất

Năm giả định dưới đây được tách riêng vì **nếu một trong số chúng sai, hệ quả không dừng ở một tài liệu mà lan ra toàn bộ bộ hồ sơ.**

| ID | Vì sao nguy hiểm nhất | Dấu hiệu sớm cần theo dõi |
| -- | --------------------- | ------------------------- |
| **AS-42** — tỷ lệ gia hạn ≥ 70% | Quyết định phần lớn NPV, nhưng **chỉ đo được sau 12 tháng vận hành**. Trong suốt Năm 1 không có cách nào biết chắc mô hình có bền hay không | MT-16 (tỷ lệ chuyển đổi) và phản hồi định tính của người dùng trả phí trong 6 tháng đầu |
| **AS-16** — bộ nhớ không tăng theo độ dài | Là lời hứa cốt lõi của sản phẩm. Sai thì mất một trong bốn đặc tính định vị, và phải sửa cả Business Case lẫn Charter | Kết quả nguyên mẫu tại M2 — đây là lý do M2 có tiêu chí hoàn thành nghiêm ngặt |
| **AS-39** — 100 thuê bao Cá nhân Năm 1 | Payback ~0,84 năm danh nghĩa (~0,94 năm chiết khấu) hoàn toàn dựa vào con số này. Nếu Năm 1 chỉ đạt một nửa, payback lùi về ~1,7 năm | MT-14 hàng tháng từ tháng đầu tiên sau phát hành |
| **AS-43** — cổng thanh toán duyệt trong 4 tuần | Nằm ngoài tầm kiểm soát của đội và chặn OB-15. Không thu được tiền thì sản phẩm chạy tốt cũng vô nghĩa | Trạng thái hồ sơ sau khi nộp ở M2; nếu quá 3 tuần chưa có phản hồi, kích hoạt phương án dự phòng |
| **AS-03** — 3 người × 10 giờ/tuần | Toàn bộ lịch và phạm vi đứng trên con số này, và năng lực đúng bằng nhu cầu nên không có chỗ hụt | Số giờ công thực tế báo cáo hàng tuần; hụt hai tuần liên tiếp là tín hiệu phải giảm phạm vi |

---

## 9. Mã không còn sử dụng

Các mã dưới đây từng được cấp và nay không còn hiệu lực. Theo quy tắc ở §2.1, chúng **không được cấp lại** cho nội dung khác.

| Mã | Ghi chú |
| -- | ------- |
| AS-04, AS-05 | Liên quan tới mô hình bán gói template — không còn áp dụng |
| AS-26 | Liên quan tới việc fork mã nguồn mở — không còn áp dụng với sản phẩm mã nguồn đóng |
| AS-27, AS-28, AS-29 | Liên quan tới dịch vụ B2B theo hợp đồng và hỗ trợ SLA bán riêng — không còn áp dụng |
| CT-07 | Ràng buộc phát hành theo giấy phép mở — thay bằng CT-08 |

---

*Tài liệu liên quan: [Project Charter](./01_Project_Charter_v2.0.md) · [Business Case](../00_Pre-project/01_Business_Case_v2.2.md) · [Benefit Management Plan](../00_Pre-project/02_Benefit_Management_Plan_v2.2.md)*
