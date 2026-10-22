# PromptVideo — Slide-to-Video Generator

**Initiating · Project Charter · Ver. 2.2**

Nhóm 02 · Ngày phát hành: 2026-09-13 · Trạng thái: Draft — chờ phê duyệt

| Xác nhận | Người tạo | Người kiểm tra | Người xác nhận |
| :-: | :-: | :-: | :-: |
| Phạm Quang Anh | Nguyễn Thế Chiến | Phạm Quang Anh | |
| | Nguyễn Việt Quang | Thầy Nguyễn Đình Quảng | |

## Lịch sử cập nhật

| No | Phiên bản | Ngày | Lý do | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 1 | Ver 1.0 | 2026-08-20 | Tạo mới | Khởi tạo Project Charter theo 12 mục chuẩn | Phạm Quang Anh | Phạm Quang Anh |
| 2 | Ver 2.0 | 2026-08-27 | Chỉnh sửa lớn | Cập nhật theo mô hình dịch vụ máy chủ thu phí thuê bao thường niên | Phạm Quang Anh | Phạm Quang Anh |
| 3 | Ver 2.1 | 2026-09-01 | Chỉnh sửa | Lược bỏ nội dung trùng Business Case và Benefit Management Plan; chuyển bảng bên liên quan sang Stakeholder Register | Phạm Quang Anh | Phạm Quang Anh |
| 4 | Ver 2.2 | 2026-09-13 | Tái cấu trúc | Rút gọn theo yêu cầu viết ở mức tổng quát, giữ nguyên 12 mục; bổ sung §11.4 bảng phân công theo module nghiệp vụ; chuyển nhân vật sang tên giả định; thay các mã tham chiếu đã bị bỏ khi rút gọn Pre-project | Nguyễn Thế Chiến | Phạm Quang Anh |

## Mục lục

1. Project Title
2. Project Purpose or Justification
3. Measurable Project Objectives and Success Criteria
4. High-level Requirements
5. High-level Project Description and Boundaries
6. High-level Risks
7. Summary Milestone Schedule
8. Summary Budget
9. Stakeholder List
10. Project Approval Requirements
11. Assigned Project Manager and Authority Level
12. Name and Authority of the Sponsor

## 1. Project Title

**PromptVideo — Dịch vụ tạo video trình chiếu từ văn bản và hình ảnh, thu phí thuê bao thường niên, dựng video ngay trong trình duyệt.**

| Thuộc tính | Giá trị |
| :-- | :-- |
| Mã dự án | PM-02 |
| Tổ chức chủ quản | Enticy Studios (bối cảnh giả định) |
| Giấy phép | Độc quyền — mã nguồn không công khai |
| Kiến trúc | Render trong trình duyệt kết hợp máy chủ tài khoản, giấy phép, thanh toán |
| Mô hình doanh thu | Thuê bao thường niên ba bậc |
| Thời gian | 2026-08-24 → 2026-12-06, 15 tuần |
| Quy mô đội | 3 thành viên bán thời gian — 450 giờ |

## 2. Project Purpose or Justification

### 2.1. Lý do thực hiện

Ba nhóm người dùng mục tiêu mất khoảng 45 phút cho một video 60 giây và phải trả 4,5–7 triệu VND mỗi năm cho công cụ nước ngoài render trên máy chủ nhà cung cấp. Phân tích đầy đủ nhu cầu và sáu hạn chế của công cụ hiện có nằm ở Business Case §2.

PromptVideo giải quyết bằng một quyết định kiến trúc duy nhất: mô tả video bằng dữ liệu, dựng bằng HTML/CSS, mã hoá theo luồng thành MP4 ngay trên máy người dùng, và đặt toàn bộ tài khoản, giấy phép, thanh toán trên một máy chủ dịch vụ.

Cách chia này cho hai hệ quả trực tiếp. Máy chủ không chạm vào nội dung, nên chi phí phục vụ tỷ lệ theo số tài khoản chứ không theo số phút video, và dữ liệu không rời máy người dùng. Mã hoá theo luồng nghĩa là bộ nhớ không tăng theo độ dài video, nên người dùng tự quyết định video dài bao nhiêu; và vì mọi hiệu ứng là hàm của số khung hình chứ không phải của đồng hồ thật, cùng một đầu vào luôn cho ra cùng một file.

### 2.2. Căn cứ phê duyệt

Phân tích đầy đủ tại Business Case và Benefit Management Plan. Tóm tắt: vốn tiền mặt 3.500.000 VND và 450 giờ công quy đổi 36.000.000 VND; NPV +433.433.000 VND trên vòng đời 3 năm với tỷ lệ chiết khấu 12%; BCR 3,52; thu hồi vốn khoảng 0,84 năm danh nghĩa và 0,94 năm chiết khấu; điểm hoà vốn ở 28% kịch bản doanh thu cơ sở. Đánh giá khả thi đạt trên cả năm khía cạnh: kỹ thuật, pháp lý, vận hành, tiến độ, nguồn lực.

Hai quyết định nền tảng đã chốt trong Business Case: kiến trúc render trong trình duyệt kết hợp máy chủ tài khoản và giấy phép; mô hình thuê bao thường niên ba bậc gồm Miễn phí (3 video/tháng, watermark, 720p), Cá nhân 599.000 VND/năm và Doanh nghiệp 4.900.000 VND/năm.

### 2.3. Liên kết với chiến lược

Dự án phục vụ mục tiêu của Enticy Studios về việc xây dựng dòng doanh thu định kỳ dự báo được với chi phí phục vụ thấp, đồng thời tạo tài sản kỹ thuật dùng lại được cho sản phẩm sau. Chi tiết tại Benefit Management Plan §3.

## 3. Measurable Project Objectives and Success Criteria

### 3.1. Mục tiêu đo được

Mọi mục tiêu phải kiểm chứng bằng phép đo, không bằng đánh giá cảm tính. Cấu hình máy tham chiếu cho các phép đo hiệu năng: Intel Core i5 thế hệ 10, 8 GB RAM, Chrome bản ổn định mới nhất, Windows 11.

| ID | Mục tiêu | Tiêu chí thành công | Mốc |
| :-: | :-- | :-- | :-: |
| OB-01 | Xuất được video MP4 | Thời gian xuất tối đa 1,5 lần thời lượng video, ở 1920×1080 và 30 fps | M4 |
| OB-02 | Không giới hạn độ dài video | Bộ nhớ đỉnh tăng dưới 15% khi độ dài tăng 10 lần | M4 |
| OB-03 | Đầu ra xác định | Checksum luồng video giống nhau trên 3 máy khác cấu hình | M4 |
| OB-04 | Thư viện mẫu | Từ 5 mẫu trình chiếu dùng được | M3 |
| OB-06 | Độ tin cậy khi xuất | Từ 95% thành công trên 100 lần thử ở các trình duyệt mục tiêu | M6 |
| OB-07 | Hiển thị tiếng Việt | 100% ký tự đúng trên bộ 134 tổ hợp dấu, cả khung ngang và dọc | M3 |
| OB-08 | Dễ dùng | Người dùng mới tạo xong video đầu tiên trong 10 phút, đạt với ít nhất 8/10 người | M6 |
| OB-09 | Không gửi nội dung đi | 0 byte nội dung người dùng rời khỏi trình duyệt | M4 |
| OB-10 | Đúng tiến độ | Bàn giao không muộn hơn 2026-12-06 | M7 |
| OB-11 | Đúng ngân sách và công sức | Tiền mặt tối đa 3.500.000 VND; công sức tối đa 495 giờ | M7 |
| OB-12 | Chất lượng mã nguồn | Độ phủ kiểm thử của mô-đun bộ dựng, mã hoá và giấy phép từ 70% | M6 |
| OB-13 | Thực thi thuê bao | 100% lần xuất được máy chủ xác thực trước; không có giấy phép hợp lệ thì không xuất được | M5 |
| OB-14 | Hạn mức bậc miễn phí | Video thứ 4 trong tháng bị từ chối kèm thông báo rõ; 3 video đầu có watermark và tối đa 720p | M5 |
| OB-15 | Chu trình thanh toán | Giấy phép có hiệu lực trong 5 phút sau khi thanh toán thành công, tự động | M6 |
| OB-16 | Thời gian hoạt động của máy chủ giấy phép | Từ 99%, đo trong 30 ngày sau phát hành | M7 |

**OB-02 là mục tiêu quan trọng nhất về kỹ thuật.** Nó không được chứng minh bằng cách xuất thử một video dài rồi tuyên bố thành công, mà phải chứng minh bộ nhớ không tăng theo độ dài.

**OB-13 là mục tiêu quan trọng nhất về kinh doanh.** Không đạt nó thì mô hình doanh thu không tồn tại, bất kể sản phẩm chạy tốt đến đâu.

Mã OB-05 không còn sử dụng và không được cấp lại.

### 3.2. Tiêu chí thành công tổng thể

Dự án **thành công** khi đồng thời: toàn bộ OB-01 → OB-04 và OB-06 → OB-09 đạt; OB-13, OB-14, OB-15 đạt; OB-10 và OB-11 đạt; Nhà tài trợ ký biên bản nghiệm thu v1.0; bộ tài liệu quản lý dự án đầy đủ theo các nhóm tiến trình và được giảng viên hướng dẫn chấp nhận.

Dự án **thất bại một phần** nếu OB-10 hoặc OB-11 không đạt nhưng sản phẩm vẫn nghiệm thu được. Dự án **thất bại** nếu OB-01 hoặc OB-13 không đạt, vì khi đó sản phẩm hoặc không làm được việc cốt lõi, hoặc không thu được tiền.

## 4. High-level Requirements

### 4.1. Yêu cầu chức năng

| ID | Yêu cầu | Ưu tiên |
| :-: | :-- | :-: |
| RQ-01 | Định nghĩa và xác thực cấu trúc dữ liệu mô tả cảnh | Bắt buộc |
| RQ-02 | Bộ dựng nhận số thứ tự khung hình và trả về trạng thái giao diện tại đúng khung đó | Bắt buộc |
| RQ-03 | Xuất MP4 theo luồng: mã hoá, ghép và ghi ra file theo từng phần, giải phóng bộ nhớ sau mỗi khung | Bắt buộc |
| RQ-04 | Thanh tiến trình theo khung hình, ước lượng thời gian còn lại, cho phép tạm dừng và huỷ | Bắt buộc |
| RQ-05 | Xem trước video trong trình duyệt trước khi xuất | Bắt buộc |
| RQ-06 | Thư viện ít nhất 5 mẫu trình chiếu | Bắt buộc |
| RQ-07 | Nhập nội dung bằng biểu mẫu, không bắt người dùng viết dữ liệu thô | Bắt buộc |
| RQ-08 | Lưu và mở lại dự án dưới dạng file trên máy người dùng | Bắt buộc |
| RQ-09 | Chèn ảnh từ máy người dùng vào cảnh | Bắt buộc |
| RQ-10 | Phát hiện trình duyệt không hỗ trợ và phát hiện mất kết nối, thông báo rõ kèm gợi ý | Bắt buộc |
| RQ-12 | Hiệu ứng chuyển cảnh vào và ra | Nên có |
| RQ-13 | Đăng ký, đăng nhập và quản lý tài khoản người dùng | Bắt buộc |
| RQ-14 | Máy chủ cấp và kiểm giấy phép; ứng dụng phải xác thực thành công trước mỗi lần xuất | Bắt buộc |
| RQ-15 | Đếm hạn mức bậc miễn phí; áp watermark và trần 720p cho bậc miễn phí | Bắt buộc |
| RQ-16 | Mua và gia hạn thuê bao qua cổng thanh toán nội địa; xuất hoá đơn VAT cho bậc Doanh nghiệp | Bắt buộc |
| RQ-17 | Trang quản lý thuê bao: bậc, hạn dùng, lịch sử hoá đơn, 5 chỗ cho bậc Doanh nghiệp | Bắt buộc |

**RQ-14 là điều kiện sống còn của mô hình doanh thu.** Không có xác thực ở tầng máy chủ thì mọi quyền lợi trả phí bị vô hiệu hoá trong vài phút bằng công cụ nhà phát triển. Đánh đổi đã chấp nhận: mất kết nối Internet thì không xuất được video. Việc xác thực phải diễn ra trước khi bắt đầu mã hoá để không làm hỏng một lần xuất đang chạy dở.

Mã RQ-11 không còn sử dụng và không được cấp lại.

### 4.2. Yêu cầu phi chức năng

| ID | Yêu cầu | Ngưỡng |
| :-: | :-- | :-- |
| NF-01 | Hiệu năng xuất video | Tối đa 1,5 lần thời lượng video trên máy tham chiếu |
| NF-02 | Bộ nhớ đỉnh không phụ thuộc độ dài video | Tăng dưới 15% khi độ dài tăng 10 lần |
| NF-03 | Không truyền nội dung người dùng ra ngoài | 0 byte |
| NF-04 | Tính xác định của đầu ra | 100% giống nhau giữa các máy |
| NF-05 | Hỗ trợ tiếng Việt đầy đủ | 100% ký tự đúng |
| NF-06 | Chạy được mà không cần cài đặt thêm | Chỉ cần trình duyệt; cần Internet khi xuất video |
| NF-07 | Giấy phép thư viện phụ thuộc | MIT, Apache-2.0, BSD hoặc SIL OFL; cấm GPL và AGPL |
| NF-08 | Giấy phép tài sản đồ hoạ trong mẫu đi kèm | Cho phép phân phối lại trong sản phẩm phái sinh |
| NF-09 | Thời gian phản hồi của máy chủ giấy phép | Tối đa 1 giây ở phân vị 95 |
| NF-10 | Thời gian hoạt động của máy chủ giấy phép | Từ 99% mỗi tháng |
| NF-11 | An toàn dữ liệu tài khoản | Mật khẩu lưu dạng băm; không lưu thông tin thẻ trên hệ thống của dự án |

Đây là yêu cầu mức cao. Việc phân rã chi tiết, xác định tiêu chí chấp nhận và truy vết yêu cầu thực hiện ở nhóm tiến trình Planning.

## 5. High-level Project Description and Boundaries

### 5.1. Mô tả sản phẩm

PromptVideo gồm hai phần, phát hành cùng nhau nhưng chạy ở hai nơi khác nhau.

**Ứng dụng trình duyệt.** Người dùng nhập nội dung qua biểu mẫu; ứng dụng sinh ra cấu trúc dữ liệu mô tả cảnh; bộ dựng chuyển dữ liệu đó thành trạng thái giao diện cho từng khung hình; mỗi khung được vẽ lên canvas, đưa vào bộ mã hoá, ghép và ghi dần ra file trên đĩa, giải phóng bộ nhớ sau mỗi khung.

**Máy chủ dịch vụ.** Giữ tài khoản, giấy phép, hạn mức và thanh toán. Trước mỗi lần xuất, ứng dụng gửi một yêu cầu xác thực kèm mã phiên chứ không kèm nội dung, và nhận về quyền xuất cùng cấu hình bậc.

Ranh giới giữa hai phần là ranh giới sản phẩm, không phải chi tiết triển khai: máy chủ biết ai xuất và bao nhiêu lần, nhưng không bao giờ biết nội dung gì. Đây là điều làm cho OB-09 vẫn đạt trong khi thuê bao vẫn thực thi được.

Sản phẩm chia thành ba nghiệp vụ: **A — sản xuất video**, từ bản thảo đến file MP4 trên máy người dùng; **B — đăng ký, cấp phép và thanh toán**, từ lúc tạo tài khoản đến khi giấy phép hết hạn hoặc được gia hạn; **C — quản trị và vận hành dịch vụ**, gồm nạp mẫu, giám sát máy chủ, hỗ trợ và đo lường lợi ích. Hai chỗ giáp ranh cần chốt bằng văn bản trong tuần đầu Planning: lệnh xuất video phải hỏi giấy phép trước khi chạy, và định dạng mẫu do C nạp vào để A tiêu thụ.

Cấu trúc dữ liệu mô tả cảnh là hợp đồng giữa các phần của hệ thống. Mọi thay đổi định dạng này phải qua kiểm soát thay đổi.

### 5.2. Ranh giới phạm vi

| Trong phạm vi v1.0 | Ngoài phạm vi v1.0 |
| :-- | :-- |
| Định dạng dữ liệu mô tả cảnh và bộ xác thực | Sinh nội dung cảnh tự động bằng AI |
| Bộ dựng theo từng khung hình | Nhạc nền và xử lý âm thanh |
| Xuất MP4 theo luồng, không giới hạn độ dài | Xuất file phụ đề |
| Xem trước trong trình duyệt | Ghép chữ và ảnh lên video nền có sẵn |
| Thư viện từ 5 mẫu trình chiếu | Khung hình dọc cho mạng xã hội |
| Nhập nội dung bằng biểu mẫu | Cộng tác nhiều người theo thời gian thực |
| Lưu và mở lại dự án dạng file cục bộ | Lưu dự án trên đám mây và đồng bộ giữa các máy |
| Chèn ảnh từ máy người dùng | Render video trên máy chủ |
| Tài khoản, đăng nhập, quản lý người dùng | Đăng nhập bằng tài khoản mạng xã hội |
| Máy chủ cấp và kiểm giấy phép | Giấy phép dùng ngoại tuyến dài hạn |
| Hạn mức bậc miễn phí, watermark, trần 720p | Bậc giá theo dung lượng hoặc theo phút video |
| Thanh toán và gia hạn thuê bao | Thanh toán quốc tế, nhiều loại tiền tệ |
| Khung ngang 1920×1080, 30 fps | Độ phân giải 4K, tốc độ 60 fps |
| Giao diện tiếng Việt | Đa ngôn ngữ giao diện |

Lý do cắt gọn: 15 tuần với 450 giờ, trong đó 60 giờ dành cho nhánh tài khoản, giấy phép và thanh toán. Các hạng mục bị cắt đều là mở rộng trên nền kiến trúc lõi — làm sau được, nhưng nếu làm trước thì kiến trúc lõi không kịp hoàn thiện.

Ranh giới giữa dự án và hoạt động kinh doanh: dự án bàn giao hệ thống thu phí đang chạy được. Việc vận hành máy chủ, bán hàng, hỗ trợ khách hàng và đối soát thanh toán trong ba năm tiếp theo là hoạt động kinh doanh của Nhà tài trợ sau khi dự án đóng, không nằm trong 450 giờ này, trừ 30 ngày bảo hành lỗi.

### 5.3. Sản phẩm bàn giao

| ID | Sản phẩm bàn giao | Mốc |
| :-: | :-- | :-: |
| DL-01 | Bộ tài liệu nhóm Initiating | M0 |
| DL-02 | Đặc tả yêu cầu, định nghĩa dữ liệu cảnh v1, ma trận năng lực trình duyệt | M1 |
| DL-03 | Tài liệu thiết kế kiến trúc, thư viện mẫu, nguyên mẫu mã hoá theo luồng | M2 |
| DL-04 | Bộ dựng theo khung hình, chức năng xem trước, bộ ghi file | M3 |
| DL-05 | Chức năng xuất MP4 theo luồng | M4 |
| DL-06 | Trình soạn thảo bằng biểu mẫu, lưu và mở dự án, kiểm giấy phép và hạn mức | M5 |
| DL-07 | Thanh toán và trang quản lý thuê bao, báo cáo kiểm thử, hướng dẫn người dùng, tài liệu vận hành máy chủ | M6 |
| DL-08 | Sản phẩm v1.0 đã triển khai, biên bản nghiệm thu, báo cáo tổng kết | M7 |

### 5.4. Giả định và ràng buộc

Ghi đầy đủ tại Assumption Log. Quan trọng nhất: vốn tiền mặt 3.500.000 VND và trần chi phí hạ tầng; đội 3 người bán thời gian với tổng 450 giờ; mã nguồn độc quyền và mọi quyền lợi trả phí thực thi ở tầng máy chủ; người dùng phải có trình duyệt hỗ trợ và có kết nối Internet khi xuất video.

## 6. High-level Risks

Mục này gán khả năng, tác động và chủ sở hữu cho từng rủi ro. Biện pháp ứng phó chi tiết tại Business Case §5.

| ID | Rủi ro | Khả năng | Tác động | Mức | Chủ sở hữu | Biện pháp then chốt |
| :-: | :-- | :-: | :-: | :-: | :-- | :-- |
| RS-01 | Nguyên mẫu mã hoá theo luồng không đạt | Trung bình | Cao | Cao | Trưởng nhóm kỹ thuật | Nguyên mẫu ngay tuần 4; giảm phạm vi nếu thất bại |
| RS-02 | Một thành viên rút lui hoặc không đủ 10 giờ/tuần | Trung bình | Cao | Cao | Giám đốc dự án | Cam kết bằng văn bản tại M0 và rà lại mỗi 2 tuần |
| RS-09 | Máy chủ giấy phép ngừng hoạt động | Trung bình | Cao | Cao | Trưởng nhóm kỹ thuật | Giám sát tự động; diễn tập khôi phục tại M6; ngưỡng NF-10 |
| RS-11 | Tỷ lệ gia hạn thấp làm doanh thu Năm 2 và Năm 3 sụp đổ | Trung bình | Cao | Cao | Nhà tài trợ | Theo dõi tỷ lệ gia hạn và tỷ lệ chuyển đổi; điểm quyết định hết Quý 4 Năm 1 |
| RS-10 | Cổng thanh toán không duyệt hồ sơ kịp M6 | Trung bình | Cao | Trung bình | Nhà tài trợ | Nộp hồ sơ tại M2 chứ không đợi tới M6 |
| RS-03 | Ghi file theo luồng không chạy trên Firefox và Safari | Cao | Trung bình | Trung bình | Trưởng nhóm kỹ thuật | Phương án dự phòng; công bố rõ giới hạn theo trình duyệt |
| RS-04 | Phạm vi bị nới rộng trong quá trình làm | Trung bình | Cao | Trung bình | Giám đốc dự án | Mọi thay đổi phải qua quy trình kiểm soát thay đổi tại §10.3 |
| RS-12 | Rò rỉ dữ liệu tài khoản người dùng | Thấp | Cao | Trung bình | Trưởng nhóm kỹ thuật | Thu thập dữ liệu ở mức tối thiểu; rà soát an toàn tại M6 |

Danh sách ở mức khởi tạo; sổ đăng ký rủi ro đầy đủ lập ở nhóm tiến trình Planning. Mã RS-08 không còn sử dụng.

## 7. Summary Milestone Schedule

| Mốc | Tên mốc | Tuần | Hoàn thành | Tiêu chí hoàn thành |
| :-: | :-- | :-: | :-: | :-- |
| M0 | Khởi động và phê duyệt Charter | 1 | 2026-08-30 | Nhà tài trợ ký Charter; 3 thành viên xác nhận cam kết thời gian bằng văn bản |
| M1 | Đặc tả yêu cầu và định dạng dữ liệu cảnh | 2–3 | 2026-09-13 | Định dạng dữ liệu được chốt; đã đo hiện trạng thời gian tạo video |
| M2 | Thiết kế kiến trúc, thư viện mẫu, nguyên mẫu | 4–5 | 2026-09-27 | Nguyên mẫu chứng minh bộ nhớ không tăng theo độ dài; từ 5 mẫu được duyệt; hồ sơ cổng thanh toán đã nộp |
| M3 | Bộ dựng, xem trước, bộ ghi file | 6–8 | 2026-10-18 | OB-04 và OB-07 đạt; xem trước chạy đúng khung hình |
| M4 | Xuất MP4 theo luồng | 9–10 | 2026-11-01 | OB-01, OB-02, OB-03, OB-09 đạt |
| M5 | Trình soạn thảo, lưu và mở, giấy phép và hạn mức | 11–12 | 2026-11-15 | RQ-07 đến RQ-09 hoạt động đầy đủ; OB-13 và OB-14 đạt |
| M6 | Thanh toán, quản lý thuê bao, kiểm thử, tài liệu | 13–14 | 2026-11-29 | OB-06, OB-08, OB-12, OB-15 đạt; quy trình khôi phục máy chủ đã diễn tập |
| M7 | Nghiệm thu và bàn giao v1.0 | 15 | 2026-12-06 | Biên bản nghiệm thu được ký; bắt đầu đo OB-16 |

**Đường găng** đi qua M1 → M2 → M3 → M4 → M5. M3 phụ thuộc định dạng dữ liệu chốt ở M1 và kiến trúc chốt ở M2; M4 phụ thuộc bộ dựng và bộ ghi file ở M3; M5 phụ thuộc chức năng xuất ở M4, vì không thể kiểm giấy phép cho một thao tác chưa tồn tại.

**Biên an toàn bằng không.** 15 tuần đúng bằng độ dài học kỳ và 450 giờ là ước lượng eo hẹp. Nếu nguyên mẫu không đạt ở M2, phương án là giảm phạm vi ngay, không lùi ngày bàn giao. Hồ sơ cổng thanh toán nộp ở M2 chứ không ở M6, vì việc duyệt nằm ngoài tầm kiểm soát của đội và có thể mất tới 4 tuần.

## 8. Summary Budget

### 8.1. Nguyên tắc

Dự án có vốn tiền mặt nhỏ, chi phí chủ yếu là công sức của chính đội. Ngân sách vì vậy được duyệt trên hai cơ sở tách biệt: tiền mặt và công sức. Vượt cơ sở nào cũng là vượt ngân sách.

### 8.2. Ngân sách tiền mặt Năm 0

| Hạng mục | Thành tiền (VND) |
| :-- | --: |
| Phí khởi tạo và tích hợp cổng thanh toán | 1.500.000 |
| Tài sản đồ hoạ có bản quyền cho 5 mẫu | 700.000 |
| Máy chủ ảo và chứng chỉ, 4 tháng trong dự án | 600.000 |
| Tên miền năm đầu | 300.000 |
| Dự phòng | 400.000 |
| **Tổng** | **3.500.000** |

Font chữ dùng giấy phép SIL OFL nên không tốn tiền. Cách tính từng hạng mục tại Benefit Management Plan §4.

### 8.3. Ngân sách công sức

450 giờ, tính theo 3 người × 15 tuần × 10 giờ/tuần, quy đổi 36.000.000 VND ở đơn giá 80.000 VND/giờ. Đây là chi phí cơ hội, không phải tiền chi ra.

### 8.4. Phân bổ công sức theo mốc

| Mốc | Tuần | Số giờ | Giờ/tuần | Ghi chú |
| :-: | :-: | --: | --: | :-- |
| M0 | 1 | 23 | 23 | Tài liệu khởi tạo, xác nhận cam kết |
| M1 | 2–3 | 48 | 24 | Đặc tả yêu cầu, định dạng dữ liệu, đo hiện trạng |
| M2 | 4–5 | 67 | 33,5 | Thiết kế, nguyên mẫu, mô hình tài khoản — mốc quyết định |
| M3 | 6–8 | 101 | 33,7 | Bộ dựng khung hình — hạng mục nặng nhất |
| M4 | 9–10 | 78 | 39 | Mã hoá theo luồng — tuần căng nhất |
| M5 | 11–12 | 74 | 37 | Trình soạn thảo, giấy phép, hạn mức |
| M6 | 13–14 | 45 | 22,5 | Thanh toán, kiểm thử, tài liệu |
| M7 | 15 | 14 | 14 | Nghiệm thu, bàn giao |
| **Cộng** | **15** | **450** | **30** | |

Năng lực danh nghĩa là 30 giờ/tuần và tổng 450 giờ trên 15 tuần đúng bằng con số đó, nghĩa là mọi tuần đều phải chạy ở 100% năng lực. Bốn mốc M2 đến M5 nằm trên mức 30 giờ/tuần, phần vượt chỉ được bù bằng phần dưới mức ở M0, M1, M6 và M7.

### 8.5. Quy tắc dự phòng và ngưỡng cảnh báo

| Nội dung | Quy tắc |
| :-- | :-- |
| Dự phòng tiền mặt 400.000 VND | Giám đốc dự án quản lý; dùng hết phải báo cáo Nhà tài trợ |
| Vượt ngân sách tiền mặt | Phải có phê duyệt của Nhà tài trợ |
| Vượt 495 giờ công | Phải có phê duyệt của Nhà tài trợ kèm phương án giảm phạm vi |
| Một mốc vượt 120% số giờ phân bổ | Báo cáo ngay ở kỳ họp tuần, không đợi đến mốc sau |
| Chi phí hạ tầng vượt 150.000 VND/tháng trong Năm 0 | Phải có phê duyệt của Nhà tài trợ |

## 9. Stakeholder List

Dự án có 9 bên liên quan, mã SH-01 → SH-09, chi tiết tại Stakeholder Register. Toàn bộ nhân vật trong danh sách là giả định, phù hợp với bối cảnh tổ chức chủ quản giả định.

- **Nội bộ, SH-01 → SH-04** — Nhà tài trợ, Giám đốc dự án, Trưởng nhóm kỹ thuật, Trưởng nhóm sản phẩm. Đội chỉ có 3 người nên một người kiêm nhiều vai trò.
- **Bên ngoài, ảnh hưởng cao, SH-05 và SH-06** — Giảng viên hướng dẫn và tệp khách hàng Doanh nghiệp vừa và nhỏ.
- **Bên ngoài, ảnh hưởng trung bình, SH-07 → SH-09** — tệp giáo viên và giảng viên, tệp người sáng tạo nội dung, nhà cung cấp cổng thanh toán.

Khách hàng được mô tả theo tệp kèm đặc điểm chung, không chỉ đích danh cá nhân.

## 10. Project Approval Requirements

### 10.1. Điều kiện nghiệm thu

| # | Điều kiện | Người xác nhận |
| :-: | :-- | :-- |
| 1 | Toàn bộ OB-01 → OB-04 và OB-06 → OB-09 đạt, có bằng chứng đo lường | Trưởng nhóm kỹ thuật |
| 2 | OB-13, OB-14, OB-15 đạt — hệ thống thu tiền chạy đầu-cuối trên môi trường thật | Giám đốc dự án |
| 3 | Toàn bộ yêu cầu bắt buộc tại §4.1 được triển khai và kiểm thử | Trưởng nhóm sản phẩm |
| 4 | Sản phẩm v1.0 đã triển khai và truy cập được công khai | Giám đốc dự án |
| 5 | Chính sách quyền riêng tư và Điều khoản sử dụng đã ban hành | Nhà tài trợ |
| 6 | Hướng dẫn người dùng, báo cáo kiểm thử và tài liệu vận hành máy chủ đã bàn giao | Giám đốc dự án |
| 7 | Chi tiền mặt và tổng giờ công không vượt ngưỡng tại §8.5 | Giám đốc dự án |
| 8 | Bộ tài liệu quản lý dự án đầy đủ theo các nhóm tiến trình | Giảng viên hướng dẫn |
| 9 | Danh mục lợi ích được bàn giao cho Nhà tài trợ, có biên bản | Nhà tài trợ |

### 10.2. Ai ký nghiệm thu

Nghiệm thu cuối cùng do Nhà tài trợ ký. Giảng viên hướng dẫn đánh giá độc lập về mặt học thuật; đánh giá này không thay thế nghiệm thu của Nhà tài trợ nhưng là điều kiện cần cho điều kiện số 8.

### 10.3. Kiểm soát thay đổi

| Loại thay đổi | Người phê duyệt | Thời hạn phản hồi |
| :-- | :-- | :-: |
| Không ảnh hưởng phạm vi, tiến độ, công sức | Giám đốc dự án | 1 ngày làm việc |
| Chi tiền mặt trong khoản dự phòng | Giám đốc dự án | 2 ngày làm việc |
| Thay đổi phạm vi hoặc phát sinh công sức trên 10% | Nhà tài trợ | 5 ngày làm việc |
| Dời ngày bàn giao cuối | Nhà tài trợ | 5 ngày làm việc |
| Thay đổi định dạng dữ liệu cảnh sau M5 | Nhà tài trợ | 5 ngày làm việc |
| Thay đổi mức giá hoặc cấu trúc bậc thuê bao | Nhà tài trợ | 5 ngày làm việc |

Mọi yêu cầu thay đổi phải lập thành văn bản và ghi vào Change Log. Thay đổi được thực hiện trước khi phê duyệt là vi phạm quy trình.

## 11. Assigned Project Manager and Authority Level

### 11.1. Bổ nhiệm

Giám đốc dự án là **Lê Hoàng Nam** (nhân vật giả định, SH-02), bổ nhiệm ngày 2026-08-24 bởi Nhà tài trợ, dành 10 giờ/tuần cho dự án và kiêm cả vai trò phát triển.

### 11.2. Thẩm quyền

| Lĩnh vực | Được quyền | Phải xin phê duyệt Nhà tài trợ |
| :-- | :-- | :-- |
| Nhân sự | Phân công công việc trong đội, điều chỉnh phân bổ giờ giữa các mốc | Thay đổi thành phần đội |
| Tiền mặt | Chi trong ngân sách đã duyệt, gồm cả khoản dự phòng | Mọi khoản vượt 3.500.000 VND |
| Công sức | Điều chỉnh phân bổ giờ giữa các mốc | Tổng công sức vượt 495 giờ |
| Phạm vi | Quyết định chi tiết triển khai trong phạm vi đã chốt | Mọi thay đổi ranh giới phạm vi tại §5.2 |
| Tiến độ | Điều chỉnh lịch nội bộ giữa các mốc | Dời mốc M7 |
| Kỹ thuật | Chọn công nghệ và kiến trúc cùng Trưởng nhóm kỹ thuật | Đổi công nghệ lõi |
| Sản phẩm | Quyết định trải nghiệm và luồng thao tác trong bậc đã chốt | Mức giá, cấu trúc bậc, hạn mức bậc miễn phí |
| Nhà cung cấp | Chọn công cụ và dịch vụ miễn phí; chọn nhà cung cấp hạ tầng trong trần đã duyệt | Ký hợp đồng cổng thanh toán và mọi hợp đồng có trả phí |
| Đối ngoại | Trao đổi với người dùng cuối để thu thập yêu cầu | Cam kết chính thức với bên ngoài |

**Quyền đặc biệt khi kích hoạt phương án dự phòng.** Nếu nguyên mẫu tại M2 không đạt, Giám đốc dự án được kích hoạt ngay phương án giảm phạm vi đã định trước — giảm xuống 3 mẫu và bỏ chức năng lưu, mở dự án — mà không cần chờ phê duyệt, với điều kiện báo cáo Nhà tài trợ trong 24 giờ. Với biên an toàn bằng không, chờ phê duyệt 5 ngày có thể làm mất luôn cơ hội cứu tiến độ.

**Giới hạn của quyền này:** phương án giảm phạm vi không được chạm vào RQ-13 → RQ-17. Cắt một mẫu trình chiếu là mất một tính năng; cắt cơ chế thu tiền là xoá bỏ mô hình doanh thu, và đó là quyết định chỉ Nhà tài trợ mới có thẩm quyền.

### 11.3. Trách nhiệm báo cáo

| Báo cáo | Tần suất | Gửi cho |
| :-- | :-- | :-- |
| Tiến độ tuần, kèm số giờ công thực tế | Hàng tuần | Nhà tài trợ, đội dự án |
| Báo cáo tại mốc | Mỗi mốc M0–M7 | Nhà tài trợ, giảng viên hướng dẫn |
| Báo cáo sự cố | Trong 24 giờ kể từ khi phát hiện | Nhà tài trợ |
| Báo cáo tổng kết dự án | Tuần 15 | Nhà tài trợ, giảng viên hướng dẫn |

### 11.4. Phân công theo module nghiệp vụ

Cả ba thành viên đóng vai trò quản lý dự án. Việc chia nhiệm vụ đi theo nghiệp vụ chứ không theo giai đoạn, để khối lượng đều nhau và mỗi người có một đầu mối rõ ràng. Bảng dưới ghi tên thật của thành viên nhóm; các nhân vật giả định ở §9 và Stakeholder Register là vai trò trong bối cảnh Enticy Studios.

| Nghiệp vụ | Chủ sở hữu | Người kiểm tra | Người xác nhận |
| :-- | :-- | :-- | :-- |
| A — Sản xuất video | Nguyễn Thế Chiến | Nguyễn Việt Quang | Phạm Quang Anh |
| B — Đăng ký, cấp phép và thanh toán | Nguyễn Việt Quang | Phạm Quang Anh | Nguyễn Thế Chiến |
| C — Quản trị và vận hành dịch vụ | Phạm Quang Anh | Nguyễn Thế Chiến | Nguyễn Việt Quang |

Mỗi chủ nghiệp vụ phải phủ đủ ba khía cạnh cho nghiệp vụ của mình: **phạm vi** — mô tả nghiệp vụ, tác nhân, luồng chính và ngoại lệ, quy tắc nghiệp vụ, yêu cầu và nhánh WBS tương ứng; **tiến độ, chất lượng và rủi ro** — danh sách công việc, ước lượng, tiêu chí nghiệm thu, ca kiểm thử, rủi ro và cách ứng phó; **chi phí, lợi ích và bên liên quan** — chi phí phát sinh, lợi ích tạo ra kèm cách đo, và cách trao đổi với bên liên quan của nghiệp vụ.

Bốn việc xuyên suốt không thuộc nghiệp vụ nào — Project Charter, WBS tổng và đường găng, ngân sách hợp nhất, quy trình kiểm soát thay đổi — do Giám đốc dự án đảm nhiệm.

Không ai kiểm tra hay xác nhận tài liệu của chính mình. Một tài liệu chỉ được coi là hoàn thành khi bảng lịch sử cập nhật của nó có đủ ba tên.

## 12. Name and Authority of the Sponsor

### 12.1. Nhà tài trợ

Nhà tài trợ là **Trần Minh Đức**, Nhà sáng lập kiêm Giám đốc điều hành Enticy Studios (nhân vật giả định, SH-01).

### 12.2. Thẩm quyền của Nhà tài trợ

Nhà tài trợ là người có thẩm quyền cao nhất của dự án:

1. Phê duyệt Project Charter — dự án chỉ chính thức tồn tại sau khi tài liệu này được ký.
2. Cấp và thu hồi ngân sách 3.500.000 VND tiền mặt và 450 giờ công.
3. Phê duyệt thay đổi phạm vi, tiến độ và ngân sách vượt thẩm quyền của Giám đốc dự án theo §10.3.
4. Quyết định về mức giá, cấu trúc bậc thuê bao và chính sách giấy phép sản phẩm — quyền riêng của Nhà tài trợ.
5. Ký hợp đồng với cổng thanh toán và chịu trách nhiệm pháp lý về hoạt động thu tiền.
6. Bổ nhiệm và thay thế Giám đốc dự án.
7. Giải quyết vấn đề vượt cấp mà Giám đốc dự án không xử lý được.
8. Ký nghiệm thu sản phẩm cuối cùng theo §10.2.
9. Quyết định dừng dự án nếu căn cứ kinh doanh không còn đứng vững.
10. Chịu trách nhiệm vận hành máy chủ dịch vụ và theo dõi lợi ích trong 3 năm sau khi dự án đóng, theo Benefit Management Plan §6. Nghĩa vụ này gồm giữ máy chủ hoạt động, xử lý thanh toán, hỗ trợ khách hàng và gia hạn thuê bao — hoạt động nằm ngoài phạm vi dự án.

### 12.3. Chữ ký phê duyệt

Bằng việc ký dưới đây, Nhà tài trợ uỷ quyền khởi động dự án, trao cho Giám đốc dự án thẩm quyền sử dụng nguồn lực của tổ chức để thực hiện, và xác nhận tiếp nhận nghĩa vụ vận hành dịch vụ sau bàn giao theo §12.2 khoản 10.

| Vai trò | Họ và tên | Chữ ký | Ngày |
| :-- | :-- | :-: | :-: |
| Nhà tài trợ | Trần Minh Đức | | |
| Giám đốc dự án | Lê Hoàng Nam | | |
| Giảng viên hướng dẫn (xác nhận học thuật) | Thầy Bùi Trọng Nghĩa | | |

---

*Tài liệu liên quan: Business Case · Benefit Management Plan · Assumption Log · Stakeholder Register.*
