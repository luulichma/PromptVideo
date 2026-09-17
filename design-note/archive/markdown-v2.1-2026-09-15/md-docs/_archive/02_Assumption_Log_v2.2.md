# PromptVideo — Slide-to-Video Generator

**Initiating · Assumption Log · Ver. 2.2**

Nhóm 02 · Ngày phát hành: 2026-09-13 · Trạng thái: Tài liệu sống

| Xác nhận | Người tạo | Người kiểm tra | Người xác nhận |
| :-: | :-: | :-: | :-: |
| Nguyễn Việt Quang | Nguyễn Thế Chiến | Phạm Quang Anh | |
| | Phạm Quang Anh | Thầy Nguyễn Đình Quảng | |

## Lịch sử cập nhật

| No | Phiên bản | Ngày | Lý do | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 1 | Ver 1.0 | 2026-08-20 | Tạo mới | Khởi tạo sổ giả định và ràng buộc: quy ước mã, trạng thái, quy trình xác minh, danh mục AS và CT theo nhóm | Nguyễn Thế Chiến | Phạm Quang Anh |
| 2 | Ver 2.0 | 2026-08-27 | Chỉnh sửa lớn | Cập nhật theo mô hình dịch vụ máy chủ thu phí thuê bao thường niên | Nguyễn Thế Chiến | Phạm Quang Anh |
| 3 | Ver 2.1 | 2026-09-01 | Chỉnh sửa | Ghi rõ payback danh nghĩa và payback chiết khấu tại AS-39 | Nguyễn Thế Chiến | Phạm Quang Anh |
| 4 | Ver 2.2 | 2026-09-13 | Tái cấu trúc | Rút gọn theo yêu cầu viết ở mức tổng quát; gộp cột hệ quả và cách xử lý; thay các mã tham chiếu BN, MT, BO đã bị bỏ khi rút gọn Pre-project bằng tên gọi trực tiếp | Nguyễn Thế Chiến | Phạm Quang Anh |

## Mục lục

1. Mục đích và cách sử dụng
2. Giả định kỹ thuật
3. Giả định pháp lý và tuân thủ
4. Giả định kinh doanh và tài chính
5. Giả định về nguồn lực và bối cảnh
6. Ràng buộc
7. Giả định có rủi ro cao nhất
8. Mã không còn sử dụng

## 1. Mục đích và cách sử dụng

Sổ này ghi mọi điều được coi là đúng mà chưa được chứng minh (giả định) và mọi giới hạn dự án phải chấp nhận (ràng buộc). Các con số trong Business Case và các cam kết trong Project Charter đều đứng trên những giả định này; nếu một giả định sai mà không ai phát hiện, cả chuỗi kết luận phía sau sai theo mà không truy được về gốc.

Với mô hình thuê bao, sổ còn giữ vai trò thứ hai: phần lớn giá trị dự án nằm ở những con số chỉ kiểm chứng được sau bàn giao — số thuê bao, tỷ lệ gia hạn, tỷ lệ chuyển đổi. Không đăng ký chúng thành giả định có ngày kiểm chứng và người chịu trách nhiệm thì chúng sẽ trôi thành sự thật mà không ai nhớ đã giả định từ đâu.

**Quy ước mã.** AS-nn là giả định, CT-nn là ràng buộc. Mã không bao giờ được cấp lại: khi một mục hết hiệu lực, mã của nó rút khỏi danh mục và ghi vào mục 8, không gán cho nội dung mới. Nhờ vậy mọi viện dẫn AS-xx ở tài liệu khác không bao giờ trỏ nhầm.

**Trạng thái.** *Mở* — chưa xác minh, vẫn đang được coi là đúng. *Đã xác nhận* — đã kiểm chứng đúng, có bằng chứng. *Bị bác bỏ* — đã kiểm chứng sai, phải mở yêu cầu thay đổi cho mọi tài liệu phụ thuộc. *Không còn áp dụng* — bối cảnh thay đổi khiến giả định không còn liên quan.

**Quy trình xác minh.** Mỗi giả định có một người chịu trách nhiệm và một hạn xác minh gắn với mốc dự án. Tại mỗi mốc, Giám đốc dự án rà soát toàn bộ giả định đến hạn và cập nhật trạng thái. Giả định bị bác bỏ phải xử lý trong 5 ngày làm việc. Giả định mới phát sinh phải ghi vào sổ ngay khi phát hiện, không đợi tới mốc.

Sổ lập ở nhóm tiến trình Initiating và cập nhật liên tục suốt vòng đời dự án. Đây không phải tài liệu ký một lần rồi đóng.

## 2. Giả định kỹ thuật

| ID | Nội dung | Chịu trách nhiệm | Hạn xác minh | Trạng thái | Hệ quả nếu sai và cách xử lý |
| :-: | :-- | :-- | :-- | :-: | :-- |
| AS-10 | Người dùng mục tiêu dùng trình duyệt hỗ trợ WebCodecs | Trưởng nhóm kỹ thuật | M1 | Mở | Một phần thị trường không dùng được sản phẩm. Khảo sát người dùng mục tiêu; phát hiện năng lực trình duyệt khi mở ứng dụng theo RQ-10 |
| AS-14 | WebCodecs mã hoá được H.264 ở 1920×1080, 30 fps trên máy cấu hình phổ thông | Trưởng nhóm kỹ thuật | M2 | Mở | Phải đổi hướng sang codec khác. Nguyên mẫu tại M2; dự phòng VP9/WebM |
| AS-15 | Có thư viện ghép luồng chạy trong trình duyệt, không cần biết trước tổng số khung, giấy phép phù hợp NF-07 | Trưởng nhóm kỹ thuật | M2 | Mở | Phải tự viết bộ ghép, vượt xa 450 giờ. Khảo sát thư viện tại M2; nếu không có thì giảm phạm vi |
| AS-16 | Kiến trúc mã hoá theo luồng giữ bộ nhớ đỉnh không phụ thuộc độ dài video, tăng dưới 15% khi độ dài tăng 10 lần | Trưởng nhóm kỹ thuật | M2 | Mở | Không đạt OB-02, mất một trong bốn lợi thế cạnh tranh. Chứng minh bằng nguyên mẫu tại M2; nếu không đạt thì công bố giới hạn rõ ràng thay vì hứa suông |
| AS-32 | Ghi được file ra đĩa theo từng phần trong lúc mã hoá | Trưởng nhóm kỹ thuật | M2 | Mở | Phải giữ toàn bộ file trong bộ nhớ, làm AS-16 sụp đổ trên trình duyệt không hỗ trợ. Nguyên mẫu kiểm chứng trên cả 3 trình duyệt tại M2; công bố giới hạn theo trình duyệt |
| AS-17 | Dựng bằng HTML/CSS rồi vẽ lên canvas cho ra hình ảnh giống hệt nhau giữa các trình duyệt | Trưởng nhóm kỹ thuật | M3 | Mở | OB-03 không đạt. Cố định phiên bản font và nhúng font vào ứng dụng; so sánh checksum sớm từ M3 |
| AS-18 | Bộ dựng đủ nhanh để xem trước ở thời gian thực, từ 24 fps | Trưởng nhóm kỹ thuật | M3 | Mở | Xem trước phải hạ cấp thành xem từng khung. Đo hiệu năng sớm; nếu chậm thì xem trước ở độ phân giải thấp |
| AS-33 | Người dùng không cần kiến thức kỹ thuật để dùng sản phẩm từ đầu đến cuối | Trưởng nhóm sản phẩm | M6 | Mở | OB-08 không đạt, tỷ lệ chuyển đổi từ bậc miễn phí sụt theo. Kiểm thử với 10 người chưa từng dùng tại M6 |
| AS-34 | Video đầu ra đạt chất lượng thị giác chấp nhận được ở bitrate mặc định | Trưởng nhóm kỹ thuật | M4 | Mở | Người dùng không trả tiền cho video trông kém. Duyệt thị giác trên bộ mẫu chuẩn tại M4 |
| AS-37 | Ba mô-đun bộ dựng, bộ mã hoá và bộ ghép ghép được với nhau mà không gây nghẽn ở mức người dùng cảm nhận được | Trưởng nhóm kỹ thuật | M4 | Mở | Thời gian xuất vượt ngưỡng OB-01. Đo khi tích hợp ba mô-đun; tinh chỉnh hàng đợi giữa chúng |
| AS-44 | Một máy chủ ảo nhỏ kèm cơ sở dữ liệu đủ phục vụ tối đa 1.000 thuê bao trong trần 800.000 VND/tháng | Trưởng nhóm kỹ thuật | M6 | Mở | Chi phí phục vụ mỗi thuê bao vượt mục tiêu, CT-03 bị phá. Đo tải thực tế tại M6; máy chủ chỉ xác thực nên tải rất nhẹ |
| AS-45 | Người dùng có kết nối Internet ổn định tại thời điểm xuất video | Trưởng nhóm sản phẩm | M6 | Mở | Người dùng ở nơi mạng kém, nhất là giáo viên dùng máy trường, không xuất được video dù đã trả tiền. Xác thực trước khi bắt đầu mã hoá để không hỏng lần xuất đang chạy; thông báo trạng thái kết nối rõ ràng; ghi nhận phản hồi từ tháng đầu |
| AS-47 | Xác thực giấy phép trước mỗi lần xuất không làm tăng thời gian xuất quá 1 giây | Trưởng nhóm kỹ thuật | M5 | Mở | Trải nghiệm xấu đi ở đúng thao tác quan trọng nhất. Ngưỡng NF-09; đo trong kiểm thử đầu-cuối tại M5 |

## 3. Giả định pháp lý và tuân thủ

| ID | Nội dung | Chịu trách nhiệm | Hạn xác minh | Trạng thái | Hệ quả nếu sai và cách xử lý |
| :-: | :-- | :-- | :-- | :-: | :-- |
| AS-11 | Mua được ảnh, biểu tượng và font có quyền phân phối lại trong sản phẩm phái sinh cho 5 mẫu, trong 700.000 VND | Trưởng nhóm sản phẩm | M2 | Mở | Không phát hành được mẫu đi kèm; NF-08 và CT-05 không đạt. Ưu tiên nguồn CC0; lập hồ sơ giấy phép từng tài sản; nếu không đủ thì làm mẫu tối giản không dùng ảnh |
| AS-12 | Mã hoá H.264 qua API sẵn có của trình duyệt không phát sinh nghĩa vụ bản quyền sáng chế, vì sản phẩm không phân phối bộ mã hoá | Nhà tài trợ | M4 | Mở | Phát sinh nghĩa vụ tài chính khi thương mại hoá. Tra cứu điều khoản cấp phép; nếu rủi ro thì chuyển sang VP9 hoặc AV1 |
| AS-19 | Nội dung video của người dùng không thuộc phạm vi xử lý dữ liệu cá nhân theo NĐ 13/2023/NĐ-CP vì không rời khỏi trình duyệt | Nhà tài trợ | M4 | Mở | Phát sinh nghĩa vụ nặng hơn nhiều so với dự kiến. Kiểm chứng bằng phép đo OB-09; đây là bằng chứng kỹ thuật cho lập luận pháp lý |
| AS-46 | Việc thu thập email, tên và lịch sử thanh toán nằm trong phạm vi NĐ 13/2023/NĐ-CP và tổ chức đáp ứng được nghĩa vụ ở mức cơ bản | Nhà tài trợ | M6 | Mở | Hoạt động thu phí không tuân thủ, rủi ro pháp lý cho tổ chức chủ quản. Ban hành Chính sách quyền riêng tư và cơ chế đồng ý trước khi mở đăng ký công khai |
| AS-20 | Nội dung và hình ảnh người dùng đưa vào là hợp pháp và thuộc quyền của họ | Nhà tài trợ | M6 | Mở | Tranh chấp bản quyền liên quan tới sản phẩm. Điều khoản sử dụng nêu rõ trách nhiệm thuộc người dùng; sản phẩm không lưu trữ nên không đóng vai trò trung gian |
| AS-21 | Mọi thư viện phụ thuộc có giấy phép MIT, Apache-2.0, BSD hoặc SIL OFL, không có GPL hay AGPL | Trưởng nhóm kỹ thuật | M6 | Mở | Sản phẩm mã nguồn đóng vi phạm giấy phép copyleft, hệ quả nghiêm trọng hơn hẳn so với sản phẩm mở. Rà soát giấy phép tự động trong quy trình tích hợp; kiểm lại toàn bộ tại M6 |
| AS-43 | Cổng thanh toán nội địa duyệt hồ sơ cho tổ chức quy mô nhỏ trong tối đa 4 tuần | Nhà tài trợ | M6 | Mở | Không thu được tiền khi phát hành, OB-15 không đạt. Nộp hồ sơ ngay tại M2 để có 8 tuần đệm; dự phòng thu bằng chuyển khoản và kích hoạt giấy phép thủ công trong 3 tháng đầu |
| AS-38 | Tài sản đồ hoạ CC0 hoặc SIL OFL đủ chất lượng cho các mẫu ban đầu tìm và kiểm tra được trong tối đa 8 giờ công | Trưởng nhóm sản phẩm | M2 | Mở | Công việc tìm tài sản đồ hoạ vượt giờ dự toán. Bắt đầu tìm ngay tuần 4; đặt giới hạn thời gian tìm kiếm |

## 4. Giả định kinh doanh và tài chính

| ID | Nội dung | Chịu trách nhiệm | Hạn xác minh | Trạng thái | Hệ quả nếu sai và cách xử lý |
| :-: | :-- | :-- | :-- | :-: | :-- |
| AS-01 | Người dùng hiện mất khoảng 45 phút để tạo một video trình chiếu 60 giây | Trưởng nhóm sản phẩm | M1 | Mở | Lợi ích rút ngắn thời gian tạo video mất ý nghĩa; nếu hiện trạng thật thấp hơn nhiều thì mức cải thiện không đủ hấp dẫn để trả tiền. Đo hiện trạng trên ít nhất 10 người trước khi kết thúc M1 |
| AS-41 | Người dùng chấp nhận mức giá 599.000 VND/năm bậc Cá nhân và 4.900.000 VND/năm bậc Doanh nghiệp | Nhà tài trợ | Quý 1 Năm 1 | Mở | Cả hai dòng doanh thu không đạt, toàn bộ thẩm định tài chính phải tính lại. Phỏng vấn giá với ít nhất 10 người dùng mục tiêu tại M1; theo dõi tỷ lệ chuyển đổi từ tháng đầu |
| AS-39 | Đạt 100 / 320 / 650 thuê bao Cá nhân đang hoạt động cuối mỗi năm | Nhà tài trợ | Cuối mỗi quý, Năm 1 đến Năm 3 | Mở | Là biến số chính của phân tích độ nhạy; dưới 28% kịch bản cơ sở thì BCR nhỏ hơn 1. Đo số thuê bao hàng tháng; điểm quyết định hết Quý 4 Năm 1 |
| AS-40 | Đạt 3 / 10 / 20 thuê bao Doanh nghiệp đang hoạt động cuối mỗi năm | Nhà tài trợ | Cuối mỗi quý, Năm 1 đến Năm 3 | Mở | Mất phân khúc có giá trị mỗi khách hàng cao nhất. Tiếp cận doanh nghiệp trực tiếp thay vì chờ họ tự đăng ký |
| AS-42 | Tỷ lệ gia hạn hằng năm từ 70% | Nhà tài trợ | Quý 4 Năm 1 | Mở | Giả định rủi ro nhất của toàn bộ mô hình. Doanh thu Năm 2 và Năm 3 gần như hoàn toàn do tỷ lệ này quyết định, nhưng nó chỉ đo được sau 12 tháng. Trong khoảng mù đó, dùng tỷ lệ chuyển đổi và phản hồi người dùng làm chỉ số thay thế; phỏng vấn mọi khách hàng rời bỏ ngay từ trường hợp đầu tiên |
| AS-31 | Người dùng bậc miễn phí chuyển đổi thành thuê bao trả phí ở tỷ lệ đủ để đạt AS-39 | Nhà tài trợ | Quý 1 Năm 1 | Mở | Mắt xích nối bậc miễn phí với doanh thu đứt. Theo dõi tỷ lệ chuyển đổi hàng tháng; nếu thấp thì siết hạn mức bậc miễn phí hoặc điều chỉnh giá |
| AS-06 | Tỷ lệ chiết khấu 12%/năm phản ánh đúng chi phí vốn | Nhà tài trợ | M1 | Mở | NPV, BCR và payback đều tính trên tỷ lệ này nên đều lệch theo. Đối chiếu lãi suất vay trung hạn tại thời điểm lập |
| AS-07 | Chi phí vận hành tiền mặt không vượt 6,5 / 15 / 28 triệu VND mỗi năm | Nhà tài trợ | Cuối mỗi năm | Mở | Mẫu số của BCR tăng, mục tiêu chi phí phục vụ mỗi thuê bao không đạt. Đối soát hoá đơn nhà cung cấp hàng quý |
| AS-30 | Công sức vận hành, hỗ trợ khách hàng và bảo trì là 260 / 480 / 800 giờ mỗi năm | Nhà tài trợ | Cuối mỗi quý | Mở | Mẫu số của BCR tăng đáng kể; đây là khoản chi phí lớn nhất sau bàn giao. Ghi nhận giờ công thực tế từ tháng đầu; tính lại BCR mỗi quý |
| AS-08 | Giá đối thủ ở mức 15–23 USD/tháng và không giảm mạnh trong 3 năm | Trưởng nhóm sản phẩm | Cuối mỗi năm | Mở | Lợi thế giá thu hẹp. Theo dõi bảng giá đối thủ hàng quý |
| AS-22 | Thị trường Việt Nam chưa có sản phẩm cùng lúc đáp ứng giá nội địa, xử lý nội dung cục bộ, không giới hạn độ dài, ưu tiên tiếng Việt và hoá đơn VAT | Trưởng nhóm sản phẩm | M1 | Mở | Mất lợi thế người đi trước, phải cạnh tranh trực diện. Khảo sát thị trường lại tại M1 |
| AS-13 | Nhà tài trợ duy trì việc vận hành máy chủ và theo dõi lợi ích trong 3 năm sau khi dự án đóng | Nhà tài trợ | Tuần 15 | Mở | Máy chủ ngừng thì toàn bộ người dùng trả phí mất quyền sử dụng, nghiêm trọng hơn hẳn việc chỉ ngừng theo dõi lợi ích. Xác nhận bằng văn bản tại buổi ký Charter và biên bản bàn giao có chữ ký tại tuần 15 |
| AS-02 | Đơn giá công sức quy đổi 80.000 VND/giờ là hợp lý cho mức lập trình viên tập sự | Giám đốc dự án | M1 | Mở | Chi phí cơ hội bị định giá sai, NPV và BCR lệch theo. Đối chiếu mức lương thực tập tại thị trường Hà Nội |

## 5. Giả định về nguồn lực và bối cảnh

| ID | Nội dung | Chịu trách nhiệm | Hạn xác minh | Trạng thái | Hệ quả nếu sai và cách xử lý |
| :-: | :-- | :-- | :-- | :-: | :-- |
| AS-03 | Đội có 3 thành viên, mỗi người dành 10 giờ/tuần trong 15 tuần, tổng 450 giờ | Giám đốc dự án | M0 | Mở | Toàn bộ lịch và phạm vi phải lập lại; mất một người là mất một phần ba năng lực. Cam kết bằng văn bản tại M0 và rà lại mỗi 2 tuần |
| AS-23 | Ít nhất một trong 3 thành viên có kinh nghiệm TypeScript từ mức trung bình | Giám đốc dự án | M0 | Mở | Thời gian học vượt quá phần đệm của lịch. Đánh giá năng lực tại M0; phân công gói việc theo kết quả |
| AS-48 | Đội tự triển khai và vận hành được máy chủ dịch vụ có xác thực và tích hợp thanh toán trong 60 giờ | Trưởng nhóm kỹ thuật | M2 | Mở | Nhánh máy chủ vượt giờ, lấn sang các gói khác ở M5 và M6. Dùng thư viện xác thực và bộ công cụ cổng thanh toán có sẵn thay vì tự viết; rà lại ước lượng cuối M2 |
| AS-09 | Học kỳ kéo dài từ 2026-08-24 đến 2026-12-06, không có gián đoạn ngoài kế hoạch | Giám đốc dự án | M0 | Mở | CT-01 bị phá, không còn tuần nào để bù. Đối chiếu lịch học vụ chính thức tại M0 |
| AS-24 | Mùa thi giữa kỳ và cuối kỳ không rơi vào tuần 4 đến tuần 12, tức giai đoạn đường găng | Giám đốc dự án | M0 | Mở | Năng lực đội sụt đúng vào giai đoạn cần 33–39 giờ/tuần. Đối chiếu lịch thi tại M0; nếu trùng thì dồn giờ sang tuần trước và sau |
| AS-25 | Ứng dụng trình duyệt phát hành dạng tĩnh qua mạng phân phối nội dung ở gói miễn phí là đủ | Trưởng nhóm kỹ thuật | M6 | Mở | Phát sinh chi phí ngoài trần CT-03. Theo dõi lưu lượng từ khi phát hành; ứng dụng là file tĩnh nên rất nhẹ |
| AS-35 | Giảng viên hướng dẫn phản hồi trong 5 ngày làm việc kể từ khi nhóm gửi tài liệu | Giám đốc dự án | M1 | Mở | Tài liệu chờ duyệt chặn tiến độ mốc kế tiếp. Gửi tài liệu sớm hơn hạn 5 ngày; không để việc duyệt nằm trên đường găng |
| AS-36 | Tiêu chí chấm điểm của môn học không thay đổi sau khi Project Charter được phê duyệt | Giám đốc dự án | M0 | Mở | Phạm vi tài liệu phải làm lại. Xác nhận tiêu chí bằng văn bản tại M0 |

## 6. Ràng buộc

| ID | Nội dung | Loại | Nguồn | Hệ quả với dự án |
| :-: | :-- | :-- | :-- | :-- |
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
| :-: | :-- | :-- |
| AS-42 — tỷ lệ gia hạn từ 70% | Quyết định phần lớn NPV nhưng chỉ đo được sau 12 tháng vận hành. Suốt Năm 1 không có cách nào biết chắc mô hình có bền hay không | Tỷ lệ chuyển đổi từ bậc miễn phí và phản hồi định tính của người dùng trả phí trong 6 tháng đầu |
| AS-16 — bộ nhớ không tăng theo độ dài | Là lời hứa cốt lõi của sản phẩm. Sai thì mất một trong bốn đặc tính định vị, phải sửa cả Business Case lẫn Charter | Kết quả nguyên mẫu tại M2; đây là lý do M2 có tiêu chí hoàn thành nghiêm ngặt |
| AS-39 — 100 thuê bao Cá nhân Năm 1 | Thời gian hoàn vốn khoảng 0,84 năm danh nghĩa và 0,94 năm chiết khấu hoàn toàn dựa vào con số này. Nếu Năm 1 chỉ đạt một nửa, payback lùi về khoảng 1,7 năm | Số thuê bao đang hoạt động, đo hàng tháng từ tháng đầu sau phát hành |
| AS-43 — cổng thanh toán duyệt trong 4 tuần | Nằm ngoài tầm kiểm soát của đội và chặn OB-15. Không thu được tiền thì sản phẩm chạy tốt cũng vô nghĩa | Trạng thái hồ sơ sau khi nộp ở M2; quá 3 tuần chưa có phản hồi thì kích hoạt phương án dự phòng |
| AS-03 — 3 người, 10 giờ/tuần | Toàn bộ lịch và phạm vi đứng trên con số này, và năng lực đúng bằng nhu cầu nên không có chỗ hụt | Số giờ công thực tế báo cáo hàng tuần; hụt hai tuần liên tiếp là tín hiệu phải giảm phạm vi |

## 8. Mã không còn sử dụng

Theo quy ước ở mục 1, các mã dưới đây không được cấp lại cho nội dung khác.

| Mã | Ghi chú |
| :-: | :-- |
| AS-04, AS-05 | Liên quan tới mô hình bán gói mẫu — không còn áp dụng |
| AS-26 | Liên quan tới việc phái sinh từ mã nguồn mở — không còn áp dụng với sản phẩm mã nguồn đóng |
| AS-27, AS-28, AS-29 | Liên quan tới dịch vụ theo hợp đồng và hỗ trợ bán riêng — không còn áp dụng |
| CT-07 | Liên quan tới yêu cầu công khai mã nguồn — không còn áp dụng từ Ver 2.0 |

---

*Tài liệu liên quan: Project Charter · Business Case · Benefit Management Plan · Stakeholder Register.*
