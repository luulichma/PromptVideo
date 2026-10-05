# PromptVideo — Slide-to-Video Generator

**Assumption Log** · Initiating · Ver. 2.1 · Nhóm 02

| Ngày phát hành | Trạng thái |
| --- | --- |
| 2026-09-01 | Tài liệu sống |

> **Nguồn:** chuyển nguyên văn từ `official-docs/01_Initiating/02_Assumption_Log_v2.1.docx` ngày 05/10/2026. Từ nay file markdown này là nguồn sửa (DEC-014); bản docx sinh lại từ đây. Nội dung, mã AS/CT và số liệu không đổi. Phụ lục A là phần thêm khi chuyển, dùng để đối chiếu luật môn học.

## Xác nhận

| Người tạo | Người kiểm tra | Người xác nhận |
| --- | --- | --- |
| Nguyễn Việt Quang | Nguyễn Thế Chiến<br>Phạm Quang Anh | Phạm Quang Anh<br>Thầy Nguyễn Đình Quảng |

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Ver 1.0 | 2026-08-20 | Tạo mới | Khởi tạo sổ giả định và ràng buộc: quy ước mã, trạng thái, quy trình xác minh, danh mục AS và CT theo nhóm | Nguyễn Việt Quang | Phạm Quang Anh<br>Nguyễn Thế Chiến |
| 2 | Ver 2.0 | 2026-08-27 | Chỉnh sửa lớn | Cập nhật danh mục theo mô hình dịch vụ máy chủ thu phí thuê bao thường niên: bổ sung giả định về giá, số thuê bao, tỷ lệ gia hạn, cổng thanh toán, hạ tầng máy chủ, kết nối Internet và dữ liệu cá nhân; cập nhật ràng buộc về vốn, hạ tầng và giấy phép sản phẩm | Nguyễn Việt Quang | Phạm Quang Anh<br>Nguyễn Thế Chiến |
| 3 | Ver 2.1 | 2026-09-01 | Chỉnh sửa | Ghi rõ payback danh nghĩa và payback chiết khấu tại AS-39 (§8) cho khớp Business Case và Benefit Management Plan | Nguyễn Việt Quang | Phạm Quang Anh<br>Nguyễn Thế Chiến |

## Mục lục

1. Mục đích
2. Cách sử dụng sổ này
3. Giả định kỹ thuật
4. Giả định pháp lý và tuân thủ
5. Giả định kinh doanh và tài chính
6. Giả định về nguồn lực và bối cảnh
7. Ràng buộc
8. Giả định có rủi ro cao nhất
9. Mã không còn sử dụng

## 1. Mục đích và cách sử dụng

Sổ này ghi mọi điều được coi là đúng mà chưa được chứng minh (giả định) và mọi giới hạn dự án phải chấp nhận (ràng buộc). Các con số trong Business Case và các cam kết trong Project Charter đều đứng trên những giả định này; nếu một giả định sai mà không ai phát hiện, cả chuỗi kết luận phía sau sai theo mà không truy được về gốc.

Với mô hình thuê bao, sổ còn giữ vai trò thứ hai: phần lớn giá trị dự án nằm ở những con số chỉ kiểm chứng được sau bàn giao — số thuê bao, tỷ lệ gia hạn, tỷ lệ chuyển đổi. Không đăng ký chúng thành giả định có ngày kiểm chứng và người chịu trách nhiệm thì chúng sẽ trôi thành sự thật mà không ai nhớ đã giả định từ đâu.

**Quy ước mã.** AS-nn là giả định, CT-nn là ràng buộc. Mã không bao giờ được cấp lại: khi một mục hết hiệu lực, mã của nó rút khỏi danh mục và ghi vào mục 8, không gán cho nội dung mới. Nhờ vậy mọi viện dẫn AS-xx ở tài liệu khác không bao giờ trỏ nhầm.

**Trạng thái.** *Mở* — chưa xác minh, vẫn đang được coi là đúng. *Đã xác nhận* — đã kiểm chứng đúng, có bằng chứng. *Bị bác bỏ* — đã kiểm chứng sai, phải mở yêu cầu thay đổi cho mọi tài liệu phụ thuộc. *Không còn áp dụng* — bối cảnh thay đổi khiến giả định không còn liên quan.

**Quy trình xác minh.** Mỗi giả định có một người chịu trách nhiệm và một hạn xác minh gắn với mốc dự án. Tại mỗi mốc, Giám đốc dự án rà soát toàn bộ giả định đến hạn và cập nhật trạng thái. Giả định bị bác bỏ phải xử lý trong 5 ngày làm việc. Giả định mới phát sinh phải ghi vào sổ ngay khi phát hiện, không đợi tới mốc.

Sổ lập ở nhóm tiến trình Initiating và cập nhật liên tục suốt vòng đời dự án. Đây không phải tài liệu ký một lần rồi đóng.

## 2. Giả định kỹ thuật

| ID | Nội dung | Chịu trách nhiệm | Hạn xác minh | Trạng thái | Hệ quả nếu sai và cách xử lý |
| --- | --- | --- | --- | --- | --- |
| AS-10 | Người dùng mục tiêu dùng trình duyệt hỗ trợ WebCodecs | Đỗ Bảo Long | M1 | Mở | Một phần thị trường không dùng được sản phẩm. Khảo sát người dùng mục tiêu; phát hiện năng lực trình duyệt khi mở ứng dụng theo RQ-10 |
| AS-14 | WebCodecs mã hoá được H.264 ở 1920×1080, 30 fps trên máy cấu hình phổ thông | Đỗ Bảo Long | M2 | Mở | Phải đổi hướng sang codec khác. Nguyên mẫu tại M2; dự phòng VP9/WebM |
| AS-15 | Có thư viện ghép luồng chạy trong trình duyệt, không cần biết trước tổng số khung, giấy phép phù hợp NF-07 | Đỗ Bảo Long | M2 | Mở | Phải tự viết bộ ghép, vượt xa 450 giờ. Khảo sát thư viện tại M2; nếu không có thì giảm phạm vi |
| AS-16 | Kiến trúc mã hoá theo luồng giữ bộ nhớ đỉnh không phụ thuộc độ dài video, tăng dưới 15% khi độ dài tăng 10 lần | Đỗ Bảo Long | M2 | Mở | Không đạt OB-02, mất một trong bốn lợi thế cạnh tranh. Chứng minh bằng nguyên mẫu tại M2; nếu không đạt thì công bố giới hạn rõ ràng thay vì hứa suông |
| AS-32 | Ghi được file ra đĩa theo từng phần trong lúc mã hoá | Đỗ Bảo Long | M2 | Mở | Phải giữ toàn bộ file trong bộ nhớ, làm AS-16 sụp đổ trên trình duyệt không hỗ trợ. Nguyên mẫu kiểm chứng trên cả 3 trình duyệt tại M2; công bố giới hạn theo trình duyệt |
| AS-17 | Dựng bằng HTML/CSS rồi vẽ lên canvas cho ra hình ảnh giống hệt nhau giữa các trình duyệt | Đỗ Bảo Long | M3 | Mở | OB-03 không đạt. Cố định phiên bản font và nhúng font vào ứng dụng; so sánh checksum sớm từ M3 |
| AS-18 | Bộ dựng đủ nhanh để xem trước ở thời gian thực, từ 24 fps | Đỗ Bảo Long | M3 | Mở | Xem trước phải hạ cấp thành xem từng khung. Đo hiệu năng sớm; nếu chậm thì xem trước ở độ phân giải thấp |
| AS-33 | Người dùng không cần kiến thức kỹ thuật để dùng sản phẩm từ đầu đến cuối | Vũ Khánh Linh | M6 | Mở | OB-08 không đạt, tỷ lệ chuyển đổi từ bậc miễn phí sụt theo. Kiểm thử với 10 người chưa từng dùng tại M6 |
| AS-34 | Video đầu ra đạt chất lượng thị giác chấp nhận được ở bitrate mặc định | Đỗ Bảo Long | M4 | Mở | Người dùng không trả tiền cho video trông kém. Duyệt thị giác trên bộ mẫu chuẩn tại M4 |
| AS-37 | Ba mô-đun bộ dựng, bộ mã hoá và bộ ghép ghép được với nhau mà không gây nghẽn ở mức người dùng cảm nhận được | Đỗ Bảo Long | M4 | Mở | Thời gian xuất vượt ngưỡng OB-01. Đo khi tích hợp ba mô-đun; tinh chỉnh hàng đợi giữa chúng |
| AS-44 | Một máy chủ ảo nhỏ kèm cơ sở dữ liệu đủ phục vụ tối đa 1.000 thuê bao trong trần 800.000 VND/tháng | Đỗ Bảo Long | M6 | Mở | Chi phí phục vụ mỗi thuê bao vượt mục tiêu, CT-03 bị phá. Đo tải thực tế tại M6; máy chủ chỉ xác thực nên tải rất nhẹ |
| AS-45 | Người dùng có kết nối Internet ổn định tại thời điểm xuất video | Vũ Khánh Linh | M6 | Mở | Người dùng ở nơi mạng kém, nhất là giáo viên dùng máy trường, không xuất được video dù đã trả tiền. Xác thực trước khi bắt đầu mã hoá để không hỏng lần xuất đang chạy; thông báo trạng thái kết nối rõ ràng; ghi nhận phản hồi từ tháng đầu |
| AS-47 | Xác thực giấy phép trước mỗi lần xuất không làm tăng thời gian xuất quá 1 giây | Đỗ Bảo Long | M5 | Mở | Trải nghiệm xấu đi ở đúng thao tác quan trọng nhất. Ngưỡng NF-09; đo trong kiểm thử đầu-cuối tại M5 |

## 3. Giả định pháp lý và tuân thủ

| ID | Nội dung | Chịu trách nhiệm | Hạn xác minh | Trạng thái | Hệ quả nếu sai và cách xử lý |
| --- | --- | --- | --- | --- | --- |
| AS-11 | Mua được ảnh, biểu tượng và font có quyền phân phối lại trong sản phẩm phái sinh cho 5 mẫu, trong 700.000 VND | Vũ Khánh Linh | M2 | Mở | Không phát hành được mẫu đi kèm; NF-08 và CT-05 không đạt. Ưu tiên nguồn CC0; lập hồ sơ giấy phép từng tài sản; nếu không đủ thì làm mẫu tối giản không dùng ảnh |
| AS-12 | Mã hoá H.264 qua API sẵn có của trình duyệt không phát sinh nghĩa vụ bản quyền sáng chế, vì sản phẩm không phân phối bộ mã hoá | Trần Minh Đức | M4 | Mở | Phát sinh nghĩa vụ tài chính khi thương mại hoá. Tra cứu điều khoản cấp phép; nếu rủi ro thì chuyển sang VP9 hoặc AV1 |
| AS-19 | Nội dung video của người dùng không thuộc phạm vi xử lý dữ liệu cá nhân theo NĐ 13/2023/NĐ-CP vì không rời khỏi trình duyệt | Trần Minh Đức | M4 | Mở | Phát sinh nghĩa vụ nặng hơn nhiều so với dự kiến. Kiểm chứng bằng phép đo OB-09; đây là bằng chứng kỹ thuật cho lập luận pháp lý |
| AS-46 | Việc thu thập email, tên và lịch sử thanh toán nằm trong phạm vi NĐ 13/2023/NĐ-CP và tổ chức đáp ứng được nghĩa vụ ở mức cơ bản | Trần Minh Đức | M6 | Mở | Hoạt động thu phí không tuân thủ, rủi ro pháp lý cho tổ chức chủ quản. Ban hành Chính sách quyền riêng tư và cơ chế đồng ý trước khi mở đăng ký công khai |
| AS-20 | Nội dung và hình ảnh người dùng đưa vào là hợp pháp và thuộc quyền của họ | Trần Minh Đức | M6 | Mở | Tranh chấp bản quyền liên quan tới sản phẩm. Điều khoản sử dụng nêu rõ trách nhiệm thuộc người dùng; sản phẩm không lưu trữ nên không đóng vai trò trung gian |
| AS-21 | Mọi thư viện phụ thuộc có giấy phép MIT, Apache-2.0, BSD hoặc SIL OFL, không có GPL hay AGPL | Đỗ Bảo Long | M6 | Mở | Sản phẩm mã nguồn đóng vi phạm giấy phép copyleft, hệ quả nghiêm trọng hơn hẳn so với sản phẩm mở. Rà soát giấy phép tự động trong quy trình tích hợp; kiểm lại toàn bộ tại M6 |
| AS-43 | Cổng thanh toán nội địa duyệt hồ sơ cho tổ chức quy mô nhỏ trong tối đa 4 tuần | Trần Minh Đức | M6 | Mở | Không thu được tiền khi phát hành, OB-15 không đạt. Nộp hồ sơ ngay tại M2 để có 8 tuần đệm; dự phòng thu bằng chuyển khoản và kích hoạt giấy phép thủ công trong 3 tháng đầu |
| AS-38 | Tài sản đồ hoạ CC0 hoặc SIL OFL đủ chất lượng cho các mẫu ban đầu tìm và kiểm tra được trong tối đa 8 giờ công | Vũ Khánh Linh | M2 | Mở | Công việc tìm tài sản đồ hoạ vượt giờ dự toán. Bắt đầu tìm ngay tuần 4; đặt giới hạn thời gian tìm kiếm |

## 4. Giả định kinh doanh và tài chính

| ID | Nội dung | Chịu trách nhiệm | Hạn xác minh | Trạng thái | Hệ quả nếu sai và cách xử lý |
| --- | --- | --- | --- | --- | --- |
| AS-01 | Người dùng hiện mất khoảng 45 phút để tạo một video trình chiếu 60 giây | Vũ Khánh Linh | M1 | Mở | Lợi ích rút ngắn thời gian tạo video mất ý nghĩa; nếu hiện trạng thật thấp hơn nhiều thì mức cải thiện không đủ hấp dẫn để trả tiền. Đo hiện trạng trên ít nhất 10 người trước khi kết thúc M1 |
| AS-41 | Người dùng chấp nhận mức giá 599.000 VND/năm bậc Cá nhân và 4.900.000 VND/năm bậc Doanh nghiệp | Trần Minh Đức | Quý 1 Năm 1 | Mở | Cả hai dòng doanh thu không đạt, toàn bộ thẩm định tài chính phải tính lại. Phỏng vấn giá với ít nhất 10 người dùng mục tiêu tại M1; theo dõi tỷ lệ chuyển đổi từ tháng đầu |
| AS-39 | Đạt 100 / 320 / 650 thuê bao Cá nhân đang hoạt động cuối mỗi năm | Trần Minh Đức | Cuối mỗi quý, Năm 1 đến Năm 3 | Mở | Là biến số chính của phân tích độ nhạy; dưới 28% kịch bản cơ sở thì BCR nhỏ hơn 1. Đo số thuê bao hàng tháng; điểm quyết định hết Quý 4 Năm 1 |
| AS-40 | Đạt 3 / 10 / 20 thuê bao Doanh nghiệp đang hoạt động cuối mỗi năm | Trần Minh Đức | Cuối mỗi quý, Năm 1 đến Năm 3 | Mở | Mất phân khúc có giá trị mỗi khách hàng cao nhất. Tiếp cận doanh nghiệp trực tiếp thay vì chờ họ tự đăng ký |
| AS-42 | Tỷ lệ gia hạn hằng năm từ 70% | Trần Minh Đức | Quý 4 Năm 1 | Mở | Giả định rủi ro nhất của toàn bộ mô hình. Doanh thu Năm 2 và Năm 3 gần như hoàn toàn do tỷ lệ này quyết định, nhưng nó chỉ đo được sau 12 tháng. Trong khoảng mù đó, dùng tỷ lệ chuyển đổi và phản hồi người dùng làm chỉ số thay thế; phỏng vấn mọi khách hàng rời bỏ ngay từ trường hợp đầu tiên |
| AS-31 | Người dùng bậc miễn phí chuyển đổi thành thuê bao trả phí ở tỷ lệ đủ để đạt AS-39 | Trần Minh Đức | Quý 1 Năm 1 | Mở | Mắt xích nối bậc miễn phí với doanh thu đứt. Theo dõi tỷ lệ chuyển đổi hàng tháng; nếu thấp thì siết hạn mức bậc miễn phí hoặc điều chỉnh giá |
| AS-06 | Tỷ lệ chiết khấu 12%/năm phản ánh đúng chi phí vốn | Trần Minh Đức | M1 | Mở | NPV, BCR và payback đều tính trên tỷ lệ này nên đều lệch theo. Đối chiếu lãi suất vay trung hạn tại thời điểm lập |
| AS-07 | Chi phí vận hành tiền mặt không vượt 6,5 / 15 / 28 triệu VND mỗi năm | Trần Minh Đức | Cuối mỗi năm | Mở | Mẫu số của BCR tăng, mục tiêu chi phí phục vụ mỗi thuê bao không đạt. Đối soát hoá đơn nhà cung cấp hàng quý |
| AS-30 | Công sức vận hành, hỗ trợ khách hàng và bảo trì là 260 / 480 / 800 giờ mỗi năm | Trần Minh Đức | Cuối mỗi quý | Mở | Mẫu số của BCR tăng đáng kể; đây là khoản chi phí lớn nhất sau bàn giao. Ghi nhận giờ công thực tế từ tháng đầu; tính lại BCR mỗi quý |
| AS-08 | Giá đối thủ ở mức 15–23 USD/tháng và không giảm mạnh trong 3 năm | Vũ Khánh Linh | Cuối mỗi năm | Mở | Lợi thế giá thu hẹp. Theo dõi bảng giá đối thủ hàng quý |
| AS-22 | Thị trường Việt Nam chưa có sản phẩm cùng lúc đáp ứng giá nội địa, xử lý nội dung cục bộ, không giới hạn độ dài, ưu tiên tiếng Việt và hoá đơn VAT | Vũ Khánh Linh | M1 | Mở | Mất lợi thế người đi trước, phải cạnh tranh trực diện. Khảo sát thị trường lại tại M1 |
| AS-13 | Nhà tài trợ duy trì việc vận hành máy chủ và theo dõi lợi ích trong 3 năm sau khi dự án đóng | Trần Minh Đức | Tuần 15 | Mở | Máy chủ ngừng thì toàn bộ người dùng trả phí mất quyền sử dụng, nghiêm trọng hơn hẳn việc chỉ ngừng theo dõi lợi ích. Xác nhận bằng văn bản tại buổi ký Charter và biên bản bàn giao có chữ ký tại tuần 15 |
| AS-02 | Đơn giá công sức quy đổi 80.000 VND/giờ là hợp lý cho mức lập trình viên tập sự | Lê Hoàng Nam | M1 | Mở | Chi phí cơ hội bị định giá sai, NPV và BCR lệch theo. Đối chiếu mức lương thực tập tại thị trường Hà Nội |

## 5. Giả định về nguồn lực và bối cảnh

| ID | Nội dung | Chịu trách nhiệm | Hạn xác minh | Trạng thái | Hệ quả nếu sai và cách xử lý |
| --- | --- | --- | --- | --- | --- |
| AS-03 | Đội có 3 thành viên, mỗi người dành 10 giờ/tuần trong 15 tuần, tổng 450 giờ | Lê Hoàng Nam | M0 | Mở | Toàn bộ lịch và phạm vi phải lập lại; mất một người là mất một phần ba năng lực. Cam kết bằng văn bản tại M0 và rà lại mỗi 2 tuần |
| AS-23 | Ít nhất một trong 3 thành viên có kinh nghiệm TypeScript từ mức trung bình | Lê Hoàng Nam | M0 | Mở | Thời gian học vượt quá phần đệm của lịch. Đánh giá năng lực tại M0; phân công gói việc theo kết quả |
| AS-48 | Đội tự triển khai và vận hành được máy chủ dịch vụ có xác thực và tích hợp thanh toán trong 60 giờ | Đỗ Bảo Long | M2 | Mở | Nhánh máy chủ vượt giờ, lấn sang các gói khác ở M5 và M6. Dùng thư viện xác thực và bộ công cụ cổng thanh toán có sẵn thay vì tự viết; rà lại ước lượng cuối M2 |
| AS-09 | Học kỳ kéo dài từ 2026-08-24 đến 2026-12-06, không có gián đoạn ngoài kế hoạch | Lê Hoàng Nam | M0 | Mở | CT-01 bị phá, không còn tuần nào để bù. Đối chiếu lịch học vụ chính thức tại M0 |
| AS-24 | Mùa thi giữa kỳ và cuối kỳ không rơi vào tuần 4 đến tuần 12, tức giai đoạn đường găng | Lê Hoàng Nam | M0 | Mở | Năng lực đội sụt đúng vào giai đoạn cần 33–39 giờ/tuần. Đối chiếu lịch thi tại M0; nếu trùng thì dồn giờ sang tuần trước và sau |
| AS-25 | Ứng dụng trình duyệt phát hành dạng tĩnh qua mạng phân phối nội dung ở gói miễn phí là đủ | Đỗ Bảo Long | M6 | Mở | Phát sinh chi phí ngoài trần CT-03. Theo dõi lưu lượng từ khi phát hành; ứng dụng là file tĩnh nên rất nhẹ |
| AS-35 | Giảng viên hướng dẫn phản hồi trong 5 ngày làm việc kể từ khi nhóm gửi tài liệu | Lê Hoàng Nam | M1 | Mở | Tài liệu chờ duyệt chặn tiến độ mốc kế tiếp. Gửi tài liệu sớm hơn hạn 5 ngày; không để việc duyệt nằm trên đường găng |
| AS-36 | Tiêu chí chấm điểm của môn học không thay đổi sau khi Project Charter được phê duyệt | Lê Hoàng Nam | M0 | Mở | Phạm vi tài liệu phải làm lại. Xác nhận tiêu chí bằng văn bản tại M0 |

## 6. Ràng buộc

| ID | Nội dung | Loại | Nguồn | Hệ quả với dự án |
| --- | --- | --- | --- | --- |
| CT-01 | Dự án phải kết thúc trước 2026-12-06, tức 15 tuần | Tiến độ | Lịch học kỳ | Biên an toàn bằng không; khi chậm thì giảm phạm vi trước, lùi ngày sau |
| CT-02 | Vốn tiền mặt 3.500.000 VND, không huy động thêm | Chi phí | Nhà tài trợ | Mọi khoản vượt phải có phê duyệt của Nhà tài trợ |
| CT-03 | Chi phí hạ tầng tối đa 150.000 VND/tháng trong Năm 0 và 800.000 VND/tháng đến hết Năm 3 | Chi phí | Nhà tài trợ | Loại bỏ mọi kiến trúc có chi phí tăng theo lượng video; buộc máy chủ chỉ làm xác thực |
| CT-04 | Đội 3 thành viên bán thời gian, không tuyển thêm, tổng 450 giờ | Nguồn lực | Bối cảnh môn học | Năng lực 30 giờ/tuần đúng bằng tổng nhu cầu, mọi tuần phải chạy ở 100% |
| CT-05 | Chỉ dùng thư viện và tài sản có giấy phép cho phép thương mại hoá và phân phối lại | Pháp lý | Nhà tài trợ | Cấm GPL và AGPL; tài sản đồ hoạ phải có quyền phân phối lại trong sản phẩm phái sinh |
| CT-06 | Sản phẩm chạy được mà không cần cài đặt gì ngoài trình duyệt, nhưng cần Internet khi xuất video | Kỹ thuật | Quyết định sản phẩm | Loại bỏ phương án ứng dụng cài đặt; đồng thời tạo ra phụ thuộc AS-45 |
| CT-08 | Mã nguồn độc quyền, không công khai; mọi quyền lợi trả phí phải thực thi ở tầng máy chủ | Sản phẩm | Nhà tài trợ | Mọi kiểm tra bậc, hạn mức và watermark do máy chủ quyết định, ứng dụng chỉ thi hành |

## 7. Giả định có rủi ro cao nhất

Năm giả định dưới đây tách riêng vì nếu một trong số chúng sai, hệ quả không dừng ở một tài liệu mà lan ra toàn bộ bộ hồ sơ.

| ID | Vì sao nguy hiểm nhất | Dấu hiệu sớm cần theo dõi |
| --- | --- | --- |
| AS-42 — tỷ lệ gia hạn từ 70% | Quyết định phần lớn NPV nhưng chỉ đo được sau 12 tháng vận hành. Suốt Năm 1 không có cách nào biết chắc mô hình có bền hay không | Tỷ lệ chuyển đổi từ bậc miễn phí và phản hồi định tính của người dùng trả phí trong 6 tháng đầu |
| AS-16 — bộ nhớ không tăng theo độ dài | Là lời hứa cốt lõi của sản phẩm. Sai thì mất một trong bốn đặc tính định vị, phải sửa cả Business Case lẫn Charter | Kết quả nguyên mẫu tại M2; đây là lý do M2 có tiêu chí hoàn thành nghiêm ngặt |
| AS-39 — 100 thuê bao Cá nhân Năm 1 | Thời gian hoàn vốn khoảng 0,84 năm danh nghĩa và 0,94 năm chiết khấu hoàn toàn dựa vào con số này. Nếu Năm 1 chỉ đạt một nửa, payback lùi về khoảng 1,7 năm | Số thuê bao đang hoạt động, đo hàng tháng từ tháng đầu sau phát hành |
| AS-43 — cổng thanh toán duyệt trong 4 tuần | Nằm ngoài tầm kiểm soát của đội và chặn OB-15. Không thu được tiền thì sản phẩm chạy tốt cũng vô nghĩa | Trạng thái hồ sơ sau khi nộp ở M2; quá 3 tuần chưa có phản hồi thì kích hoạt phương án dự phòng |
| AS-03 — 3 người, 10 giờ/tuần | Toàn bộ lịch và phạm vi đứng trên con số này, và năng lực đúng bằng nhu cầu nên không có chỗ hụt | Số giờ công thực tế báo cáo hàng tuần; hụt hai tuần liên tiếp là tín hiệu phải giảm phạm vi |

Tài liệu liên quan: [Project Charter](01_Project_Charter_v2.1.md) · [Business Case](../00_Pre-project/01_Business_Case_v2.2.md) · [Benefit Management Plan](../00_Pre-project/02_Benefit_Management_Plan_v2.2.md) · Stakeholder Register (`official-docs/01_Initiating/03_Stakeholder_Register_v1.0.xlsx`).

## Phụ lục A. Đối chiếu luật môn học (thêm khi chuyển sang markdown)

Luật: `knowledge/rules/04_assumption-log.md`. Phụ lục này không thay đổi nội dung §1–§7.

| Mục luật | Mức | Vị trí | Kết quả | Ghi chú |
| --- | --- | --- | --- | --- |
| Ghi cả assumption lẫn constraint (PM03:28) | 🔴 | §2–§5 (AS), §6 (CT) | Đạt | Tách bằng tiền tố mã AS/CT, thay cho cột Type. |
| Assumption cấp cao từ Business Case chảy vào Charter (PM03:28) | 🔴 | §4, §6 | Đạt | AS-39 → AS-42, AS-06, AS-07 khớp các số liệu tài chính của Business Case. |
| Assumption cấp hoạt động từ đặc tả kỹ thuật, ước lượng, lịch, rủi ro (PM03:28) | 🔴 | — | Thiếu | Bản 01/09 có trước đợt Planning 24/09. Chưa có các giả định: năng lực kế hoạch 10 giờ/người/tuần (DEC-008), forecast 599 giờ so với AS-03 450 giờ (DEC-009), thang xác suất P1–P5 của Risk Management Plan. |
| Cập nhật sau Create WBS, Estimate Costs, qualitative risk analysis (PM05:56, PM07:30, PM08:46) | 🔴 | Lịch sử cập nhật | Thiếu | Lần cập nhật cuối là 2026-09-01, trước WBS, ước lượng và Risk Register. |
| Monitor Risks kiểm lại assumption còn hợp lệ (PM08:81) | 🔴 | §1 "Quy trình xác minh" | Một phần | Có quy trình; xem điểm lệch 4. |
| Người cung cấp: PM, sponsor, stakeholder, chuyên gia kỹ thuật (PM03:29) | 🔴 | cột "Chịu trách nhiệm" | Đạt | |
| Mẫu 5 cột ID · Assumption · Impact Area · Validity Status · Notes (PM03:30) | 🟡 | §2–§5 | Khác mẫu | Không có cột Impact Area: nhóm theo mục (kỹ thuật, pháp lý, kinh doanh, nguồn lực) thay thế. Có thêm owner, hạn xác minh, hệ quả. |
| Validity Status dùng 3 giá trị Validated / Not Yet Validated / Validated (Conditional) (PM03:30) | 🟡 | §1 "Trạng thái" | Khác mẫu | Dùng 4 trạng thái tiếng Việt; "Mở" tương ứng Not Yet Validated, "Đã xác nhận" tương ứng Validated. Chưa có trạng thái tương đương Validated (Conditional). |
| Assumption sai hoặc chưa kiểm được liên kết sang R-X-nn | 🔵 | §7 | Một phần | §7 có dấu hiệu sớm nhưng chưa trỏ tới mã rủi ro trong Risk Register. |

**Điểm lệch cần nhóm xử lý (🔵):**

1. Mục lục liệt kê 9 mục, nhưng thân tài liệu chỉ có 7: "Mục đích" và "Cách sử dụng" gộp thành §1, và không có mục "Mã không còn sử dụng". Vì vậy §1 viết "ghi vào mục 8" và Lịch sử v2.1 viết "AS-39 (§8)" đều trỏ sai; AS-39 hiện nằm ở §7.
2. Các mã AS-04, AS-05, AS-26 → AS-29 và CT-07 không có trong sổ, cũng không có danh sách mã đã rút. Quy ước mã ở §1 và DEC-004 yêu cầu ghi lại mã đã bỏ.
3. Sổ dùng năng lực 450 giờ (AS-03, CT-04, AS-15); DEC-009 dùng forecast 599 giờ và CR-G-001. Giữ số gốc làm nguồn so sánh; thay đổi đi qua CR, không sửa số quá khứ (PM08:103).
4. Theo lịch Charter §7, M0 (30/08), M1 (13/09) và M2 (27/09) đã qua, nhưng mọi dòng có hạn M0–M2 vẫn ở trạng thái "Mở" và chưa ghi ngày kiểm gần nhất.
