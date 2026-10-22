# PromptVideo --- Mô tả sản phẩm và cách khách hàng sử dụng

---

## 1. Tổng quan sản phẩm

### 1.1. PromptVideo là gì?

PromptVideo là công cụ giúp người dùng tạo video dạng trình chiếu từ các mẫu có sẵn. Người dùng chọn mẫu, nhập nội dung và hình ảnh cho từng cảnh, xem trước, chỉnh sửa trong phạm vi cho phép rồi xuất thành tệp MP4 ngay trên máy của mình.

**Giá trị cốt lõi:** giảm thời gian và số thao tác cần thiết để tạo video, bằng cách chuẩn bị sẵn bố cục, kiểu chữ, màu sắc và hiệu ứng trong các mẫu.

### 1.3. Đối tượng sử dụng

- Nhân viên marketing hoặc chủ cửa hàng cần tạo video giới thiệu, quảng cáo sản phẩm.
- Giáo viên cần tạo video trình chiếu nội dung.
- Người sáng tạo nội dung cần làm video ngắn từ chữ và hình ảnh có sẵn.

### 1.4. Giải thích tên gọi

- **Prompt** trong phiên bản 1.0 là nội dung người dùng gõ vào các ô của cảnh, không phải câu lệnh gửi cho AI.
- **AI không nằm trong phạm vi phiên bản 1.0.**

### 1.5. Phạm vi chính của phiên bản 1.0

Phiên bản 1.0 tập trung vào việc tạo video từ mẫu có sẵn, chỉnh sửa nội dung trong giới hạn được thiết kế, xem trước, xuất MP4 và lưu/mở lại tệp dự án trên máy người dùng.

Các giới hạn đã thống nhất trong bản nháp:

- Chỉ đội Enticy tạo và đưa mẫu vào hệ thống; người dùng cuối không tự tạo mẫu.
- Không có cộng tác trực tuyến hoặc đồng bộ dự án qua đám mây.
- Video được dựng trên máy người dùng trong trình duyệt.
- Máy chủ xác thực quyền xuất và áp dụng giới hạn theo gói dịch vụ.
- Không tích hợp AI trong phiên bản 1.0.

---

## 2. Khái niệm và cấu trúc mẫu video

### 2.1. Mẫu video (Template) là gì?

**Một mẫu video là một phong cách thiết kế áp dụng cho toàn bộ video.**
Mẫu định nghĩa cách video trông như thế nào, bao gồm bố cục, font chữ,
màu sắc, nền, đồ họa, hiệu ứng và thời lượng mặc định.

Mẫu giúp người dùng không phải tự thiết kế từng cảnh từ đầu.

### 2.2. Kiểu cảnh (Scene Type) là gì?

Kiểu cảnh là một dạng bố cục được định nghĩa sẵn để dùng trong video.
Phiên bản 1.0 sử dụng bộ kiểu cảnh chung gồm:

- **Mở đầu:** giới thiệu chủ đề hoặc tên sản phẩm.
- **Chỉ có chữ:** trình bày thông điệp bằng văn bản.
- **Chữ kèm ảnh:** kết hợp nội dung chữ với hình ảnh.
- **Kết thúc:** hiển thị thông tin kết thúc, thương hiệu hoặc lời kêu
  gọi hành động.

Đây là bộ kiểu cảnh dùng chung giữa các mẫu. Mỗi mẫu có thể định dạng
các kiểu cảnh này theo phong cách riêng, nhưng không tự bổ sung một kiểu
cảnh hoàn toàn mới.

### 2.3. Cảnh cụ thể (Scene Instance) là gì?

Cảnh cụ thể là một cảnh được tạo ra trong dự án video của người dùng,
dựa trên một kiểu cảnh. Cảnh có nội dung, hình ảnh, thời lượng và các
thiết lập được phép chỉnh sửa riêng.

Ví dụ: trong video quảng cáo kem chống nắng, một cảnh kiểu **Chữ kèm
ảnh** có thể chứa nội dung "Bảo vệ da mỗi ngày" cùng một ảnh sản phẩm.

### 2.4. Quan hệ giữa mẫu, kiểu cảnh và cảnh cụ thể

- **Mẫu video** quyết định phong cách tổng thể.
- **Kiểu cảnh** quyết định cấu trúc và loại nội dung mà cảnh có thể
  chứa.
- **Cảnh cụ thể** chứa nội dung thực tế do người dùng nhập hoặc lựa
  chọn.

Vì mọi mẫu trong phiên bản 1.0 dùng chung bộ kiểu cảnh, người dùng có
thể đổi phong cách mẫu mà vẫn giữ nội dung và thứ tự cảnh. Bố cục được
thể hiện theo mẫu mới có thể thay đổi, nhưng nội dung của người dùng
được giữ lại.

### 2.5. Thành phần của một mẫu

Mỗi mẫu bao gồm:

- Bộ kiểu cảnh dùng chung.
- Vị trí và bố cục mặc định của ô chữ, ô ảnh trong từng kiểu cảnh.
- Font chữ và bảng màu.
- Hình nền và đồ họa.
- Hiệu ứng vào và ra.
- Thời lượng mặc định cho mỗi cảnh.
- Các giới hạn thiết kế liên quan, ví dụ cỡ chữ tối thiểu.

### 2.6. Ba mẫu minh họa đề xuất

Ba mẫu dưới đây là các hướng thiết kế minh họa cho cùng một quy trình sử
dụng. Đây là đề xuất để thảo luận; cần xác nhận trước khi coi là danh
sách mẫu chính thức của phiên bản 1.0.

1. **Tươi sáng:** màu sắc sáng, cảm giác thân thiện; phù hợp với video
   giới thiệu sản phẩm phổ thông.
2. **Cao cấp tối giản:** bố cục thoáng, màu sắc tiết chế; phù hợp với
   sản phẩm muốn thể hiện cảm giác cao cấp.
3. **Năng động mạng xã hội:** nhịp nhanh, chữ nổi bật và chuyển động
   rõ; phù hợp với video ngắn trên mạng xã hội.

Các mẫu nên dùng chung bộ kiểu cảnh, dữ liệu dự án và quy trình xem
trước/xuất video. Khác biệt giữa các mẫu chủ yếu nằm ở cấu hình thiết
kế, thay vì mỗi mẫu có một quy trình dựng video riêng.

---

## 3. Kịch bản sử dụng: Chị Hà làm video giới thiệu sản phẩm

### 3.1. Bối cảnh

Chị Hà là nhân viên marketing của một cửa hàng mỹ phẩm nhỏ. Chị cần tạo một video dài khoảng 60 giây để giới thiệu dòng kem chống nắng mới. Chị
đã chuẩn bị nội dung và bốn ảnh sản phẩm.

### 3.2. Các bước sử dụng

#### Bước 1 --- Chọn mẫu

Chị Hà mở PromptVideo bằng Chrome, xem trước các mẫu và chọn mẫu **Tươi
sáng**. Ở bước này, chị chưa cần đăng nhập.

#### Bước 2 --- Điền nội dung cho từng cảnh

Chị tạo video gồm năm cảnh:

1. **Mở đầu:** tên sản phẩm.
2. **Chữ kèm ảnh:** thông điệp và ảnh sản phẩm.
3. **Chữ kèm ảnh:** một lợi ích khác và ảnh sản phẩm.
4. **Chữ kèm ảnh:** thông tin bổ sung và ảnh sản phẩm.
5. **Kết thúc:** tên cửa hàng và số điện thoại.

Chị không cần tự dàn trang hoặc căn chỉnh toàn bộ bố cục; mẫu đã cung
cấp cấu trúc và thiết kế mặc định.

#### Bước 3 --- Xem trước và chỉnh sửa

Chị xem trước video trong trình chỉnh sửa. Chị thấy cảnh 3 cần hiển thị
lâu hơn nên tăng thời lượng cảnh lên 3 giây. Chị cũng có thể chỉnh vị
trí ô chữ, màu chữ và những thuộc tính khác được cho phép trong phạm vi
chỉnh sửa.

#### Bước 4 --- Kiểm tra và xuất video

Chị bấm **Xuất video**. Hệ thống yêu cầu đăng nhập tại bước xuất và máy
chủ kiểm tra quyền sử dụng/gói dịch vụ. Theo thiết kế dự kiến, yêu cầu
xác thực chỉ gửi thông tin phiên hoặc thông tin cần thiết để kiểm tra
quyền, không gửi nội dung chữ hay ảnh của dự án lên máy chủ.

Sau khi được cấp quyền xuất, trình duyệt trên máy chị dựng video. Giao
diện hiển thị tiến trình theo quá trình xuất; người dùng có thể tạm dừng
hoặc hủy theo thiết kế đã nêu trong bản nháp.

#### Bước 5 --- Nhận file MP4

Khi xuất hoàn tất, chị tải/lưu file MP4 trên máy và có thể đăng lên
fanpage.

#### Bước 6 --- Lưu và mở lại dự án

Chị lưu một tệp dự án trên máy. Hôm sau, cửa hàng thay đổi giá khuyến
mãi, chị mở lại tệp, sửa ô chữ tương ứng và xuất video mới mà không phải
làm lại từ đầu.

### 3.3. Mục tiêu về thời gian

Mục tiêu đang được đề xuất là hoàn thành quy trình trong **dưới 5
phút**, tính từ lúc mở công cụ đến khi có file MP4, với điều kiện người
dùng đã chuẩn bị sẵn nội dung và hình ảnh. Thời gian nghĩ nội dung và
tìm ảnh không tính vào phép đo.

Phân bổ mục tiêu hiện tại:

- Khoảng 3,5 phút cho việc chọn mẫu và điền năm cảnh.
- Khoảng 1,5 phút cho quá trình xuất video.

Mục tiêu xuất là tối đa khoảng 1,5 lần độ dài video trên máy tham chiếu.
Máy tham chiếu dự kiến: Core i5 thế hệ 10, RAM 8 GB.

**Trạng thái:** Đây là mục tiêu chưa được kiểm chứng. Con số 45 phút cho
cách làm cũ cũng là ước tính, chưa phải kết quả đo. Theo kế hoạch hiện
tại, Vũ Khánh Linh kiểm tra bằng thử nghiệm người dùng tại mốc M6, cho
cùng một người tạo cùng một video bằng cách cũ và bằng PromptVideo.

### 3.4. Vì sao sản phẩm có thể tiết kiệm thời gian?

- Người dùng không phải tự dàn trang từng cảnh hoặc căn vị trí chữ và
  ảnh từ đầu.
- Mẫu cung cấp sẵn font, màu sắc, nền và hiệu ứng.
- Người dùng sửa nội dung trực tiếp trong các ô thay vì làm lại toàn
  bộ video.
- Có thể mở tệp dự án cũ, sửa nội dung và xuất lại.
- Hệ thống có quy tắc xử lý chữ dài nhằm hạn chế tràn khung.

### 3.5. Nhạc nền

Bản nháp hiện tại cho phép người dùng chèn nhạc từ máy tính. Cần xác
nhận và đặc tả thêm các quy tắc liên quan như định dạng tệp được hỗ trợ,
cắt/đặt thời lượng nhạc và hành vi khi video dài hơn hoặc ngắn hơn bản
nhạc.

---

## 4. Phạm vi chỉnh sửa

### 4.1. Những gì người dùng được chỉnh sửa

Người dùng có thể:

- Chỉnh nội dung chữ của từng cảnh.
- Chọn hoặc thay ảnh từ máy tính.
- Thay đổi kiểu cảnh trong phạm vi bộ kiểu cảnh chung.
- Thay đổi thời lượng từng cảnh.
- Thay đổi thứ tự cảnh.
- Thêm hoặc xóa cảnh.
- Chỉnh vị trí ô nội dung, font, màu và hiệu ứng trong giới hạn mà
  trình chỉnh sửa cho phép.
- Chèn nhạc từ máy tính theo phạm vi dự kiến.

### 4.2. Những gì mẫu quyết định sẵn

Mẫu cung cấp cấu hình mặc định cho:

- Bố cục và vị trí các ô chữ/ảnh.
- Font chữ và bảng màu.
- Hình nền và đồ họa.
- Hiệu ứng vào/ra.
- Thời lượng mặc định.
- Cỡ chữ tối thiểu và các giới hạn thiết kế liên quan.

Người dùng có thể điều chỉnh một số thuộc tính này trong trình chỉnh
sửa, nhưng không được tự do tạo một hệ thống bố cục mới từ đầu.

### 4.3. Quy tắc khi đổi mẫu

- Đổi mẫu giữ lại nội dung, danh sách cảnh và thứ tự cảnh.
- Các cảnh được hiển thị theo phong cách của mẫu mới.
- Vì các mẫu dùng chung bộ kiểu cảnh, nội dung cảnh cần được ánh xạ
  sang kiểu cảnh tương ứng của mẫu mới.
- Mẫu mới không được yêu cầu người dùng nhập lại toàn bộ nội dung chỉ
  vì đổi phong cách.

### 4.4. Quy tắc xử lý chữ dài

- Hệ thống tự giảm cỡ chữ để nội dung vừa trong vùng hiển thị, nhưng
  không nhỏ hơn cỡ chữ tối thiểu do mẫu quy định.
- Nếu nội dung vẫn quá dài ở cỡ chữ tối thiểu, vùng nội dung được báo
  đỏ để người dùng rút gọn.
- Mục tiêu là ngăn nội dung vượt khỏi bố cục đã định.

Cần kiểm thử quy tắc này với tiếng Việt, dấu câu, các chuỗi dài không có
khoảng trắng và nhiều cỡ màn hình/trình duyệt.

### 4.5. Những gì không nằm trong phạm vi phiên bản 1.0

- Người dùng cuối tự tạo hoặc phát hành mẫu mới.
- Tự do thiết kế bố cục hoàn toàn mới.
- Cộng tác chỉnh sửa trực tuyến.
- Lưu trữ và đồng bộ dự án qua đám mây.
- Tính năng AI tạo nội dung hoặc tự sinh thiết kế.
- Nhập PowerPoint chỉ dựa trên cách hiểu từ chữ "Slide".

---

## 5. Quy trình tạo và quản lý mẫu

### 5.1. Ai tạo mẫu?

Chỉ đội Enticy tạo và đưa mẫu vào hệ thống trong phiên bản 1.0. Người
dùng cuối lựa chọn và sử dụng các mẫu đã được cung cấp.

### 5.2. Nguyên tắc thiết kế mẫu

- Các mẫu dùng chung bộ kiểu cảnh: Mở đầu, Chỉ có chữ, Chữ kèm ảnh,
  Kết thúc.
- Mỗi mẫu định nghĩa phong cách riêng thông qua bố cục, font, màu,
  nền, đồ họa, hiệu ứng và thời lượng mặc định.
- Nên ưu tiên cấu hình mẫu thay vì viết lại quy trình dựng video cho
  từng mẫu.
- Mẫu mới được mở cho mọi bậc dịch vụ; sự khác biệt giữa các bậc nằm ở
  giới hạn sử dụng, watermark và độ phân giải, không phải số lượng
  mẫu.

### 5.3. Phiên bản mẫu

Mỗi tệp dự án lưu tên mẫu và phiên bản mẫu đã dùng. Khi Enticy cập nhật
mẫu, phiên bản cũ vẫn được giữ để dự án cũ có thể mở lại theo đúng phiên
bản thiết kế đã lưu.

**Yêu cầu cần kiểm chứng:** "Cùng một tệp dự án luôn cho ra cùng một
video" còn phụ thuộc vào việc lưu đủ tài nguyên, phiên bản mẫu, font,
hiệu ứng và cách xử lý của trình duyệt. Cần xác định chính xác mức độ
tái tạo được bảo đảm và các ngoại lệ.

### 5.4. Quy trình đưa mẫu mới vào hệ thống

1. Enticy thiết kế mẫu dựa trên bộ kiểu cảnh dùng chung.
2. Kiểm tra mẫu với nội dung ngắn, dài, có/không có ảnh và nội dung
   tiếng Việt.
3. Xác nhận mẫu hoạt động với trình xem trước và cơ chế xuất hiện có.
4. Đóng gói mẫu cùng mã phiên bản.
5. Đưa mẫu vào hệ thống để người dùng lựa chọn.

Các bước trên là quy trình đề xuất ở mức sản phẩm; quy trình kỹ thuật và
phê duyệt cụ thể cần được nhóm thống nhất.

---

## 6. Nguyên tắc vận hành

### 6.1. Xem trước và xuất video

- Người dùng nhập nội dung và xem trước trong trình duyệt.
- Video được dựng trên máy người dùng, không phải gửi nội dung dự án
  lên máy chủ để dựng.
- Máy chủ kiểm tra quyền xuất trước khi quá trình xuất bắt đầu.
- Theo thiết kế dự kiến, khi đã được cấp quyền và quá trình dựng đã
  bắt đầu, việc mất mạng giữa chừng không làm gián đoạn quá trình
  xuất.
- Giao diện xuất dự kiến có tiến trình và cho phép tạm dừng hoặc hủy.

Các hành vi cụ thể cần được xác nhận bằng triển khai và kiểm thử thực
tế.

### 6.2. Yêu cầu trình duyệt

- Hỗ trợ Chrome và Edge phiên bản hiện đại.
- Nếu trình duyệt không hỗ trợ, ứng dụng cần thông báo sớm trước khi
  người dùng nhập nhiều nội dung, đồng thời hướng dẫn dùng Chrome hoặc
  Edge bản mới.

### 6.3. Hiệu năng

Máy tham chiếu dự kiến dùng để kiểm tra tốc độ là Core i5 thế hệ 10, RAM
8 GB. Mục tiêu hiện tại là thời gian xuất không vượt quá khoảng 1,5 lần
thời lượng video trên máy tham chiếu.

Đây là mục tiêu hiệu năng cần đo; chưa nên xem là cam kết đã được chứng
minh.

### 6.4. Quyền riêng tư và xử lý dữ liệu

Theo định hướng hiện tại:

- Nội dung chữ và ảnh dự án được xử lý trên máy người dùng.
- Ảnh được nhúng vào tệp dự án.
- Máy chủ dùng để kiểm tra quyền xuất và gói dịch vụ.
- Dự án không được lưu trên đám mây và không tự đồng bộ giữa các máy.

Cần xác nhận dữ liệu tối thiểu nào được gửi đến máy chủ trong quá trình
đăng nhập, xác thực quyền và ghi nhận lượt xuất.

### 6.5. Xử lý trường hợp có trục trặc

- **Mất mạng trước khi mở trang hoặc xác thực quyền xuất:** người dùng
  có thể không truy cập được trang hoặc không bắt đầu được lượt xuất
  mới.
- **Mất mạng sau khi đã được cấp quyền và bắt đầu dựng:** theo thiết
  kế dự kiến, quá trình dựng trên máy tiếp tục.
- **Trình duyệt không tương thích:** hiển thị cảnh báo và hướng dẫn
  trình duyệt được hỗ trợ.
- **Máy cấu hình yếu:** có thể xuất chậm hơn máy tham chiếu.
- **Người dùng hủy hoặc xuất lỗi:** ứng dụng cần thông báo trạng thái
  rõ ràng và xử lý lượt xuất theo quy tắc gói dịch vụ.

---

## 7. Tệp dự án và gói dịch vụ

### 7.1. Tệp dự án

Tệp dự án có các đặc điểm dự kiến:

- Lưu thành một tệp duy nhất trên máy người dùng.
- Nhúng hình ảnh đã sử dụng để khi chuyển tệp sang máy khác vẫn có thể
  mở dự án.
- Lưu nội dung cảnh, thứ tự cảnh, thời lượng và các thiết lập chỉnh
  sửa.
- Lưu tên mẫu và phiên bản mẫu.
- Không lưu trên đám mây và không tự đồng bộ giữa các thiết bị.

Cần xác định định dạng tệp, cách xử lý font/nhạc bị thiếu và khả năng
tương thích khi mở dự án trên trình duyệt hoặc thiết bị khác.

### 7.2. Các gói dịch vụ

---

  Gói                                    Giá dự kiến Giới hạn và quyền lợi

---

  Miễn phí                                    0 đồng 3 video/tháng,
                                                     watermark, tối đa
                                                     720p

  Cá nhân                           599.000 đồng/năm Không giới hạn video,
                                                     1080p, không
                                                     watermark

Doanh nghiệp                    4.900.000 đồng/năm Quyền lợi như gói Cá
                                                     nhân, 5 chỗ và hóa
                                                     đơn VAT
--------------------------------------------------------------

Gói Doanh nghiệp cung cấp một tài khoản cho mỗi người trong cùng gói.
Người dùng có thể chia sẻ tệp dự án qua Zalo hoặc email, nhưng không có
chức năng cộng tác trực tuyến.

Các mức giá và quyền lợi trên là thông tin trong bản nháp, cần được xác
nhận trước khi công bố cho khách hàng.

### 7.3. Hiển thị giới hạn gói trước khi xuất

Với gói Miễn phí, ngay trước khi xuất, giao diện cần thông báo rõ
watermark, độ phân giải tối đa và số lượt còn lại trong tháng. Ví dụ:

> Bản này có watermark, tối đa 720p. Tháng này còn 2/3 lượt.

Khi người dùng đã dùng hết ba lượt, hệ thống chặn lượt xuất tiếp theo và
giải thích lý do, đồng thời cung cấp lựa chọn nâng cấp.

### 7.4. Trừ và hoàn lượt xuất

Quy tắc dự kiến:

- Trừ lượt khi máy chủ cấp quyền cho một lần xuất.
- Nếu người dùng hủy hoặc quá trình xuất thất bại, ứng dụng báo trạng
  thái để hệ thống hoàn lại lượt theo quy tắc đã thống nhất.

Cần đặc tả cách xử lý trường hợp mất kết nối trong lúc ghi nhận kết quả,
bấm xuất nhiều lần hoặc máy khách đóng trình duyệt đột ngột.

---

## 8. Tiêu chí nghiệm thu và các vấn đề cần xác nhận

### 8.1. Tiêu chí nghiệm thu đề xuất

- [ ] Người dùng có thể xem trước và chọn một mẫu.
- [ ] Người dùng có thể tạo dự án và thêm nội dung/hình ảnh vào các
  kiểu cảnh được hỗ trợ.
- [ ] Người dùng có thể chỉnh sửa nội dung, thời lượng và thứ tự cảnh.
- [ ] Người dùng có thể xem trước thay đổi trước khi xuất.
- [ ] Đổi mẫu giữ nguyên nội dung và thứ tự cảnh.
- [ ] Nội dung chữ dài được tự co đến giới hạn tối thiểu; nếu vẫn quá
  dài, giao diện cảnh báo rõ.
- [ ] Người dùng có thể xuất MP4 trong giới hạn quyền lợi của gói.
- [ ] Người dùng có thể lưu tệp dự án, mở lại và tiếp tục chỉnh sửa.
- [ ] Tệp dự án mang sang máy khác vẫn có thể mở được khi đáp ứng các
  yêu cầu tương thích đã công bố.
- [ ] Gói Miễn phí áp dụng đúng giới hạn lượt, watermark và độ phân
  giải.
- [ ] Hủy hoặc xuất lỗi được xử lý theo quy tắc lượt xuất đã thống
  nhất.
- [ ] Trình duyệt không hỗ trợ được cảnh báo trước khi người dùng mất
  công nhập nội dung.

Các tiêu chí trên là đề xuất ban đầu, cần được nhóm xác nhận và bổ sung
các điều kiện đo cụ thể.

### 8.2. Các giả định cần kiểm chứng

1. **Mục tiêu dưới 5 phút:** cần thử nghiệm với người dùng thực tế.
2. **Cách làm cũ mất 45 phút:** hiện là ước tính, chưa đo.
3. **Thời gian xuất:** mục tiêu không vượt quá khoảng 1,5 lần thời
   lượng video trên máy tham chiếu.
4. **Tính nhất quán khi mở lại dự án:** cần xác định các điều kiện để
   cùng một dự án tạo ra kết quả nhất quán.
5. **Xuất khi mất mạng giữa chừng:** cần xác nhận trong triển khai thực
   tế.
6. **Chèn nhạc từ máy tính:** cần chốt định dạng tệp và quy tắc xử lý
   thời lượng.
7. **Hoàn lượt khi hủy hoặc xuất lỗi:** cần chốt cơ chế và các trường
   hợp ngoại lệ.

### 8.3. Câu hỏi cần nhóm chốt

- Người dùng được chỉnh vị trí, font, màu và hiệu ứng đến mức nào
  trong giao diện?
- Các thuộc tính nào là bắt buộc phải dùng giá trị của mẫu, thuộc tính
  nào được ghi đè theo từng cảnh?
- Đổi mẫu có giữ lại toàn bộ các chỉnh sửa thủ công về vị
  trí/font/màu/hiệu ứng hay chỉ giữ nội dung và thứ tự cảnh?
- Khi một kiểu cảnh không phù hợp với nội dung hiện tại, hệ thống sẽ
  chuyển đổi hoặc cảnh báo như thế nào?
- Định dạng tệp dự án và các giới hạn tương thích cụ thể là gì?
- Những trường hợp nào được hoàn lượt xuất và thời điểm hoàn lượt là
  khi nào?
- Danh sách ba mẫu đầu tiên có được chốt chính thức không?

### 8.4. Việc tiếp theo sau khi nhóm đồng ý

- Cập nhật câu chuyện người dùng, định nghĩa mẫu và các quy tắc vào
  Đặc tả yêu cầu.
- Đưa "người dùng cuối tự tạo mẫu" vào danh sách ngoài phạm vi phiên
  bản 1.0.
- Ghi mục tiêu 45 phút cho cách làm cũ vào Assumption Log dưới dạng
  giả định chưa kiểm chứng; người phụ trách kiểm tra là Vũ Khánh Linh,
  tại mốc M6.
- Điều chỉnh kế hoạch Benefit Management Plan: xác nhận trước M1 và đo
  bắt buộc tại M1 thành mốc M6 theo ghi chú hiện tại.
- Sinh lại bản DOCX sau khi các tài liệu liên quan được cập nhật.
- Theo ghi chú hiện tại, Charter không cần sửa vì nội dung mới làm rõ
  chi tiết, chưa tạo mâu thuẫn với nội dung đã thống nhất.

---

## Ghi chú về trạng thái tài liệu

Tài liệu này tổng hợp các nội dung đã có trong bản nháp và sắp xếp lại
theo hướng dễ đọc hơn. Các nội dung ghi là **đề xuất**, **dự kiến**,
**cần xác nhận** hoặc **chưa kiểm chứng** không nên được coi là quyết
định cuối cùng cho đến khi nhóm thống nhất.
