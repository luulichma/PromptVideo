# Từ điển WBS nhánh 4.2 Tạo video (bản nháp)

Bản nháp để duyệt trước khi sửa vào tài liệu WBS và từ điển WBS trên Drive. Ngày 22/10/2026, người soạn Nguyễn Thế Chiến.

## 1. Thay đổi so với bản 2.3

- Gói "Bộ 3 mẫu trình chiếu" (13,3 giờ cho cả 3 mẫu) tách thành 4 gói con: tài sản đồ hoạ có bản quyền và mỗi mẫu một gói.
- Thêm 2 gói phần mềm mà mẫu cần để chạy: bộ máy đọc mẫu, và hiệu ứng vào ra.
- Tách khỏi trình soạn 3 gói đang bị gộp: ảnh trong cảnh, đổi mẫu và đổi kiểu cảnh, xử lý chữ dài.
- Thêm gói màn hình chọn mẫu, trước đây chưa có ở đâu.
- Gói kiểm quyền xuất ghi rõ thêm phần thông báo giới hạn trước khi xuất và chặn hai lượt xuất cùng lúc.
- Nhánh 4.2 từ 8 gói thành 17 gói, từ 155 giờ thành 196,3 giờ (tăng 41,3 giờ). Phần lớn số giờ tăng thêm là do trước đây ước lượng thiếu cho mẫu, hiệu ứng và ảnh. Mỗi gói vẫn ước lượng ba con số (nhanh nhất, bình thường, chậm nhất) rồi lấy trung bình.

## 2. Cây nhánh 4.2

- 4.2 Tạo video
  - 4.2.1 Màn hình chọn mẫu
  - 4.2.2 Trình soạn cảnh
  - 4.2.3 Ảnh trong cảnh
  - 4.2.4 Nhạc nền
  - 4.2.5 Đổi mẫu và đổi kiểu cảnh
  - 4.2.6 Xử lý chữ dài
  - 4.2.7 Bộ máy mẫu
  - 4.2.8 Hiệu ứng vào và ra
  - 4.2.9 Bộ 3 mẫu trình chiếu
    - 4.2.9.1 Tài sản đồ hoạ có bản quyền
    - 4.2.9.2 Mẫu Tươi sáng
    - 4.2.9.3 Mẫu Cao cấp tối giản
    - 4.2.9.4 Mẫu Năng động mạng xã hội
  - 4.2.10 Xem trước video
  - 4.2.11 Xuất video MP4
  - 4.2.12 Tạm dừng xuất và cảnh báo trình duyệt
  - 4.2.13 Kiểm quyền xuất video
  - 4.2.14 Lưu và mở dự án

Cả nhánh do Chiến phụ trách, Việt Quang kiểm (theo Charter mục 11.4). Mẫu do Trưởng nhóm sản phẩm duyệt.

## 3. Từ điển từng gói

### 4.2.1 Màn hình chọn mẫu

- **Làm gì:** màn hình đầu tiên khi mở ứng dụng. Người dùng xem trước 3 mẫu, chọn khung ngang hoặc khung dọc, rồi chọn một mẫu để tạo dự án mới.
- **Gồm:** ảnh hoặc đoạn xem trước ngắn của từng mẫu ở cả hai khung; nút chọn khung; nút tạo dự án; nút mở tệp dự án có sẵn.
- **Không gồm:** đăng nhập (chỉ hỏi khi xuất, thuộc 4.3.1); cảnh báo trình duyệt (4.2.12).
- **Cần từ gói khác:** 3 mẫu đã phát hành (4.2.9); bộ máy mẫu (4.2.7).
- **Sản phẩm giao:** màn hình chọn mẫu chạy trong ứng dụng.
- **Yêu cầu đáp ứng:** xem và chọn mẫu (REQ-A-01), chọn khung hình (REQ-A-09).
- **Giờ:** 4,3 (nhanh 3, bình thường 4, chậm 6). **Mốc:** M5.
- **Giả định và rủi ro:** không có rủi ro riêng.
- **Tính là xong khi:** chưa đăng nhập vẫn xem trước được cả 3 mẫu ở cả hai khung và tạo được dự án mới từ mẫu đã chọn.

### 4.2.2 Trình soạn cảnh

- **Làm gì:** nơi người dùng điền và sửa nội dung từng cảnh bằng biểu mẫu, không phải viết dữ liệu thô.
- **Gồm:** thêm, xoá, sắp xếp lại cảnh; chọn kiểu cảnh khi thêm; gõ chữ vào từng ô; đổi thời lượng cảnh; chỉnh trong giới hạn mẫu (dời ô chữ và ô ảnh trong vùng cho phép, chọn màu trong bảng màu, chọn font trong 2–3 font của mẫu, chọn hiệu ứng trong danh sách của mẫu); hoàn tác, làm lại; phím tắt.
- **Không gồm:** chèn và xử lý ảnh (4.2.3); nhạc nền (4.2.4); đổi mẫu, đổi kiểu cảnh (4.2.5); co chữ dài (4.2.6).
- **Cần từ gói khác:** định dạng dữ liệu cảnh (3.2); bộ máy mẫu cho biết giới hạn được chỉnh (4.2.7).
- **Sản phẩm giao:** trình soạn chạy trong ứng dụng, kèm ca kiểm thử.
- **Yêu cầu đáp ứng:** quản lý cảnh (REQ-A-02), nhập nội dung (REQ-A-03, phần chữ), chỉnh trong giới hạn mẫu (REQ-A-04).
- **Giờ:** 20 (nhanh 14, bình thường 18, chậm 28). **Mốc:** M5.
- **Giả định và rủi ro:** người dùng không cần kiến thức kỹ thuật (AS-33). Nếu trình soạn khó dùng thì mục tiêu "8/10 người mới làm xong video trong 10 phút" không đạt.
- **Tính là xong khi:** mọi thao tác ở mục "Gồm" chạy đúng ca kiểm thử; không chỉnh được ra ngoài giới hạn của mẫu (khung bố cục, nền, đồ hoạ, cỡ chữ tối thiểu giữ nguyên).

### 4.2.3 Ảnh trong cảnh

- **Làm gì:** cho người dùng đưa ảnh từ máy vào ô ảnh của cảnh.
- **Gồm:** chọn ảnh JPG hoặc PNG; tự xoay đúng chiều theo thông tin trong ảnh; đặt ảnh lấp đầy ô và căn giữa; báo lỗi khi ảnh hỏng hoặc sai định dạng; nhúng ảnh vào tệp dự án.
- **Không gồm:** cắt, chỉnh màu, bộ lọc ảnh; ảnh nền và đồ hoạ của mẫu (thuộc 4.2.9).
- **Cần từ gói khác:** trình soạn cảnh (4.2.2); định dạng tệp dự án (3.2).
- **Sản phẩm giao:** chức năng chèn ảnh, kèm ca kiểm thử.
- **Yêu cầu đáp ứng:** chèn ảnh từ máy (RQ-09, REQ-A-03 phần ảnh).
- **Giờ:** 5,3 (nhanh 3, bình thường 5, chậm 8). **Mốc:** M5.
- **Giả định và rủi ro:** ảnh người dùng đưa vào thuộc quyền của họ (AS-20).
- **Tính là xong khi:** ảnh chụp dọc và ngang đều hiện đúng chiều, không méo; ảnh lỗi bị báo, không làm hỏng dự án; lưu rồi mở lại vẫn còn ảnh.

### 4.2.4 Nhạc nền

- **Làm gì:** một bản nhạc cho cả video, ghép vào file MP4.
- **Gồm:** chọn tệp MP3 hoặc M4A tối đa 20 MB; chỉnh âm lượng; bỏ nhạc; nhạc dài hơn video thì cắt ở cuối và nhỏ dần trong 2 giây cuối; ngắn hơn thì phát lặp lại; ghép âm thanh vào MP4.
- **Không gồm:** cắt hoặc chỉnh sửa âm thanh; nhiều bản nhạc.
- **Cần từ gói khác:** xuất video MP4 (4.2.11).
- **Sản phẩm giao:** chức năng nhạc nền, kèm ca kiểm thử.
- **Yêu cầu đáp ứng:** nhạc nền (RQ-21, REQ-A-08).
- **Giờ:** 12 (giữ như bản 2.3). **Mốc:** M4.
- **Giả định và rủi ro:** trình duyệt ghép được âm thanh mà vẫn xuất trong ngưỡng tốc độ (AS-49); nhạc thuộc quyền người dùng (AS-20).
- **Tính là xong khi:** video xuất ra có nhạc, đúng quy tắc cắt và lặp; tốc độ xuất vẫn trong ngưỡng 1,5 lần độ dài video.

### 4.2.5 Đổi mẫu và đổi kiểu cảnh

- **Làm gì:** cho người dùng đổi sang mẫu khác hoặc đổi kiểu của một cảnh mà không mất nội dung.
- **Gồm:** cảnh báo trước khi đổi mẫu; sau khi đổi giữ chữ, ảnh, nhạc, thứ tự và thời lượng, còn vị trí, font, màu, hiệu ứng trở về mặc định của mẫu mới; khi đổi kiểu cảnh, nội dung không có chỗ thì ẩn đi kèm thông báo, đổi lại kiểu cũ thì hiện lại.
- **Không gồm:** đổi khung hình của dự án đang làm.
- **Cần từ gói khác:** trình soạn cảnh (4.2.2); bộ máy mẫu (4.2.7).
- **Sản phẩm giao:** chức năng đổi mẫu và đổi kiểu cảnh, kèm ca kiểm thử.
- **Yêu cầu đáp ứng:** đổi mẫu (REQ-A-05), đổi kiểu cảnh (REQ-A-06).
- **Giờ:** 6,3 (nhanh 4, bình thường 6, chậm 9). **Mốc:** M5.
- **Giả định và rủi ro:** cả 3 mẫu dùng chung 4 kiểu cảnh. Mẫu nào thêm kiểu riêng thì đổi mẫu sẽ mất nội dung.
- **Tính là xong khi:** đổi qua lại giữa 3 mẫu và giữa 4 kiểu cảnh không mất chữ, ảnh hay nhạc nào.

### 4.2.6 Xử lý chữ dài

- **Làm gì:** giữ chữ luôn nằm trong khung, kể cả khi người dùng gõ quá dài.
- **Gồm:** tự co chữ tới cỡ tối thiểu của mẫu; vẫn quá dài thì ô chữ báo đỏ; xuống dòng đúng với tiếng Việt có dấu, dấu câu và chuỗi dài không có dấu cách; chạy đúng ở cả hai khung.
- **Không gồm:** tự rút gọn hay sửa chữ của người dùng.
- **Cần từ gói khác:** bộ máy mẫu (4.2.7), nơi lấy cỡ chữ tối thiểu.
- **Sản phẩm giao:** chức năng co chữ và báo tràn, kèm bộ chữ kiểm thử.
- **Yêu cầu đáp ứng:** xử lý chữ dài (REQ-A-07), hiển thị tiếng Việt đầy đủ (NF-05).
- **Giờ:** 7,7 (nhanh 4, bình thường 7, chậm 12). **Mốc:** M3.
- **Giả định và rủi ro:** font hiển thị giống nhau trên các trình duyệt (AS-17).
- **Tính là xong khi:** trên bộ chữ kiểm thử, ở cả 3 mẫu và cả hai khung, chữ không bao giờ tràn khung; ô quá dài luôn báo đỏ.

### 4.2.7 Bộ máy mẫu

- **Làm gì:** phần mềm đọc một gói mẫu và dựng cảnh theo đúng gói đó. Nhờ có nó, thêm mẫu mới chỉ cần thêm dữ liệu, không phải viết lại mã.
- **Gồm:** đọc gói mẫu gồm bố cục 4 kiểu cảnh cho hai khung, vùng được di chuyển, font, bảng màu, danh sách hiệu ứng, thời lượng mặc định, cỡ chữ tối thiểu; kiểm gói mẫu hợp lệ trước khi dùng; giữ mã phiên bản mẫu trong dự án để mẫu cũ đã gỡ vẫn mở đúng.
- **Không gồm:** thiết kế định dạng gói mẫu (3.2); nội dung của từng mẫu (4.2.9); phát hành mẫu lên hệ thống (4.4.1).
- **Cần từ gói khác:** định dạng gói mẫu (3.2); kiến trúc bộ dựng (3.1).
- **Sản phẩm giao:** bộ máy mẫu trong ứng dụng, kèm một gói mẫu thử.
- **Yêu cầu đáp ứng:** gói mẫu theo tài liệu Phạm vi và yêu cầu mục 6.3; phiên bản mẫu (REQ-C-02, phần ứng dụng); mở dự án có mẫu đã gỡ (REQ-A-12).
- **Giờ:** 12 (nhanh 8, bình thường 11, chậm 17). **Mốc:** M3.
- **Giả định và rủi ro:** dựng bằng HTML/CSS rồi vẽ lên canvas cho hình giống nhau giữa các trình duyệt (AS-17).
- **Tính là xong khi:** đưa vào một gói mẫu hợp lệ thì dựng đúng 4 kiểu cảnh ở hai khung; gói sai bị từ chối kèm lý do.

### 4.2.8 Hiệu ứng vào và ra

- **Làm gì:** bộ hiệu ứng khi chữ, ảnh và cảnh xuất hiện hoặc biến mất. Mẫu chọn hiệu ứng nào được dùng; người dùng chọn trong danh sách đó.
- **Gồm:** 4 loại hiệu ứng: hiện dần, trượt vào, phóng nhẹ, không hiệu ứng; mỗi hiệu ứng có thời lượng; hiệu ứng tính theo số thứ tự khung hình, không theo giờ máy, để xem trước và video xuất ra giống nhau.
- **Không gồm:** người dùng tự tạo hiệu ứng mới; hiệu ứng 3D, hiệu ứng hạt.
- **Cần từ gói khác:** bộ máy mẫu (4.2.7).
- **Sản phẩm giao:** thư viện hiệu ứng trong bộ dựng, kèm video mẫu cho từng hiệu ứng.
- **Yêu cầu đáp ứng:** hiệu ứng vào và ra (RQ-12, nay là Bắt buộc); chỉnh hiệu ứng trong giới hạn mẫu (REQ-A-04).
- **Giờ:** 9,7 (nhanh 6, bình thường 9, chậm 14). **Mốc:** M3.
- **Giả định và rủi ro:** xem trước đủ nhanh, từ 24 khung/giây (AS-18). Hiệu ứng làm chậm bộ dựng thì xem trước bị giật.
- **Tính là xong khi:** cả 4 hiệu ứng chạy ở mọi kiểu cảnh và hai khung; cùng một dự án xuất hai lần cho hình giống hệt nhau.

### 4.2.9 Bộ 3 mẫu trình chiếu

Gói tổng hợp, gồm 4 gói con dưới đây, tổng 27,3 giờ. Một mẫu được tính là dùng được theo Charter mục 3.1 (mục tiêu thư viện mẫu): đủ 4 kiểu cảnh ở hai khung, mỗi kiểu cảnh có hiệu ứng vào và ra, qua bộ nội dung kiểm thử, xem trước khớp video xuất ra, và Trưởng nhóm sản phẩm đã duyệt.

Bộ nội dung kiểm thử dùng chung cho cả 3 mẫu: chữ ngắn, chữ dài, có ảnh, không ảnh, tiếng Việt có dấu, mỗi trường hợp ở cả hai khung.

#### 4.2.9.1 Tài sản đồ hoạ có bản quyền

- **Làm gì:** tìm, mua và lập hồ sơ cho ảnh nền, biểu tượng, hình trang trí và font dùng trong 3 mẫu.
- **Gồm:** ưu tiên nguồn CC0 và font SIL OFL; mua phần còn thiếu; hồ sơ giấy phép cho từng tài sản (nguồn, loại giấy phép, được phân phối lại hay không).
- **Không gồm:** ảnh người dùng tự đưa vào (4.2.3).
- **Cần từ gói khác:** không.
- **Sản phẩm giao:** bộ tài sản đồ hoạ và bảng hồ sơ giấy phép.
- **Yêu cầu đáp ứng:** giấy phép tài sản đồ hoạ (NF-08), ràng buộc giấy phép (CT-05).
- **Giờ:** 6 (nhanh 4, bình thường 6, chậm 8). **Tiền mặt:** tối đa 700.000 đồng. **Mốc:** M2.
- **Giả định và rủi ro:** mua đủ tài sản trong 700.000 đồng (AS-11); tìm và kiểm xong trong 8 giờ (AS-38). Không đủ thì làm mẫu tối giản không dùng ảnh nền.
- **Tính là xong khi:** mọi tài sản trong 3 mẫu đều có dòng trong hồ sơ giấy phép và được phép phân phối lại.

#### 4.2.9.2 Mẫu Tươi sáng

- **Làm gì:** mẫu màu sáng, vui, hợp cửa hàng nhỏ và sản phẩm tiêu dùng. Làm đầu tiên, dùng để chốt cách làm cho hai mẫu sau.
- **Gồm:** 8 bố cục (4 kiểu cảnh × 2 khung); vùng được di chuyển của ô chữ và ô ảnh; 2–3 font; bảng màu; nền và đồ hoạ; hiệu ứng mặc định và danh sách hiệu ứng được chọn cho từng kiểu cảnh; thời lượng mặc định; cỡ chữ tối thiểu; mã phiên bản 1.0.
- **Không gồm:** phát hành mẫu lên hệ thống (4.4.1).
- **Cần từ gói khác:** tài sản đồ hoạ (4.2.9.1); bộ máy mẫu (4.2.7); hiệu ứng (4.2.8).
- **Sản phẩm giao:** gói mẫu Tươi sáng bản 1.0 và kết quả chạy bộ nội dung kiểm thử.
- **Yêu cầu đáp ứng:** thư viện 3 mẫu (RQ-06), mục tiêu thư viện mẫu (OB-04).
- **Giờ:** 8,7 (nhanh 6, bình thường 8, chậm 12). **Mốc:** M3.
- **Giả định và rủi ro:** như 4.2.9.1.
- **Tính là xong khi:** đạt điều kiện "dùng được" ở đầu mục 4.2.9.

#### 4.2.9.3 Mẫu Cao cấp tối giản

- **Làm gì:** mẫu tông tối, ít chi tiết, hợp thương hiệu muốn trông sang trọng.
- **Gồm, không gồm, cần từ gói khác:** như 4.2.9.2.
- **Sản phẩm giao:** gói mẫu Cao cấp tối giản bản 1.0 và kết quả chạy bộ nội dung kiểm thử.
- **Yêu cầu đáp ứng:** RQ-06, OB-04.
- **Giờ:** 6,3 (nhanh 4, bình thường 6, chậm 9). **Mốc:** M3.
- **Giả định và rủi ro:** như 4.2.9.1.
- **Tính là xong khi:** đạt điều kiện "dùng được" ở đầu mục 4.2.9.

#### 4.2.9.4 Mẫu Năng động mạng xã hội

- **Làm gì:** mẫu nhịp nhanh, chữ lớn, ưu tiên khung dọc cho mạng xã hội.
- **Gồm, không gồm, cần từ gói khác:** như 4.2.9.2.
- **Sản phẩm giao:** gói mẫu Năng động mạng xã hội bản 1.0 và kết quả chạy bộ nội dung kiểm thử.
- **Yêu cầu đáp ứng:** RQ-06, OB-04.
- **Giờ:** 6,3 (nhanh 4, bình thường 6, chậm 9). **Mốc:** M3.
- **Giả định và rủi ro:** như 4.2.9.1.
- **Tính là xong khi:** đạt điều kiện "dùng được" ở đầu mục 4.2.9.

### 4.2.10 Xem trước video

- **Làm gì:** phát thử video ngay trong trình soạn, trước khi xuất.
- **Gồm:** nút phát, dừng, tua; xem từng cảnh hoặc cả video; hình xem trước dựng bằng cùng bộ dựng với lúc xuất.
- **Không gồm:** phần đọc mẫu (4.2.7) và hiệu ứng (4.2.8), đã tách ra gói riêng.
- **Cần từ gói khác:** bộ máy mẫu (4.2.7); hiệu ứng (4.2.8).
- **Sản phẩm giao:** trình xem trước trong ứng dụng.
- **Yêu cầu đáp ứng:** xem trước (RQ-05, REQ-A-10).
- **Giờ:** 15,3 (nhanh 10, bình thường 14, chậm 22; trước đây 24,7 khi còn gộp phần đọc mẫu). **Mốc:** M3.
- **Giả định và rủi ro:** xem trước đạt từ 24 khung/giây (AS-18); chậm thì hạ độ phân giải xem trước.
- **Tính là xong khi:** hình xem trước khớp với video xuất ra ở cùng khung hình.

### 4.2.11 Xuất video MP4

- **Làm gì:** dựng video ngay trên máy người dùng và ghi ra file MP4.
- **Gồm:** khung ngang 1920×1080 và khung dọc 1080×1920, 30 khung/giây; thanh tiến trình theo khung hình; thời gian còn lại; nút huỷ; vẽ watermark và hạ độ phân giải khi gói dịch vụ yêu cầu; mất mạng sau khi đã được cấp quyền thì vẫn dựng tiếp tới khi xong.
- **Không gồm:** tạm dừng và tiếp tục (4.2.12); xin quyền xuất (4.2.13); ghép nhạc (4.2.4).
- **Cần từ gói khác:** nguyên mẫu xuất (3.1); xem trước (4.2.10).
- **Sản phẩm giao:** chức năng xuất MP4.
- **Yêu cầu đáp ứng:** xuất MP4 trên máy (RQ-03, RQ-04, REQ-A-11), khung hình (RQ-22).
- **Giờ:** 26 (giữ như bản 2.3). **Mốc:** M4.
- **Giả định và rủi ro:** ghi file theo luồng không chạy trên Firefox và Safari (RS-03); ghi được file theo từng phần (AS-32); ba mô-đun ghép với nhau không bị nghẽn (AS-37).
- **Tính là xong khi:** file MP4 ở cả hai khung phát được; có tiến trình và nút huỷ; gói Miễn phí ra đúng watermark và 720p.

### 4.2.12 Tạm dừng xuất và cảnh báo trình duyệt

- **Làm gì:** cho tạm dừng rồi tiếp tục một lần xuất; báo ngay khi trình duyệt không hỗ trợ.
- **Gồm:** tạm dừng và tiếp tục không hỏng file; kiểm năng lực trình duyệt khi vừa mở ứng dụng, trước khi người dùng nhập gì; hướng dẫn dùng Chrome hoặc Edge bản mới.
- **Không gồm:** báo mất mạng khi xin quyền (4.2.13).
- **Cần từ gói khác:** xuất video MP4 (4.2.11).
- **Sản phẩm giao:** hai chức năng trên, kèm ca kiểm thử.
- **Yêu cầu đáp ứng:** tạm dừng (RQ-04), trình duyệt (RQ-10, REQ-A-13).
- **Giờ:** 11,3 (giữ như bản 2.3). **Mốc:** M4.
- **Giả định và rủi ro:** người dùng mục tiêu dùng trình duyệt có hỗ trợ (AS-10).
- **Tính là xong khi:** tạm dừng rồi tiếp tục vẫn ra file đúng; mở bằng trình duyệt không hỗ trợ thì thấy cảnh báo ngay.

### 4.2.13 Kiểm quyền xuất video

- **Làm gì:** phần phía ứng dụng của việc xin quyền xuất từ máy chủ.
- **Gồm:** gửi yêu cầu xin quyền chỉ kèm phiên đăng nhập, khung hình, độ phân giải và thời lượng, không kèm nội dung; trước khi xuất, báo rõ watermark, độ phân giải tối đa và số lượt còn lại; hết lượt thì chặn và gợi ý nâng cấp; chặn bấm xuất lần hai khi đang xuất; giữ kết quả xuất và gửi lại khi có mạng; chỉ dùng mẫu đang phát hành; mất mạng lúc xin quyền thì báo rõ và không bắt đầu xuất.
- **Không gồm:** trừ và hoàn lượt trên máy chủ (4.3.2).
- **Cần từ gói khác:** giấy phép và hạn mức trên máy chủ (4.3.2); đăng nhập (4.3.1).
- **Sản phẩm giao:** luồng xin quyền và báo kết quả xuất trong ứng dụng.
- **Yêu cầu đáp ứng:** REQ-B-02, REQ-B-03, REQ-B-05, REQ-B-06 (phần ứng dụng); mất mạng lúc xin quyền (REQ-A-13).
- **Giờ:** 23,7 (giữ như bản 2.3). **Mốc:** M5.
- **Giả định và rủi ro:** người dùng có mạng ổn định khi xuất (AS-45); xin quyền mất không quá 1 giây (AS-47).
- **Tính là xong khi:** không có quyền thì không xuất được; yêu cầu gửi đi không chứa chữ, ảnh hay nhạc; bấm xuất hai lần không trừ hai lượt.

### 4.2.14 Lưu và mở dự án

- **Làm gì:** lưu cả dự án thành một tệp trên máy, mở lại để sửa tiếp.
- **Gồm:** lưu, mở, khôi phục khi trình duyệt tắt đột ngột; tệp mang sang máy khác dùng Chrome hoặc Edge vẫn mở đúng; ảnh và nhạc nhúng sẵn trong tệp.
- **Không gồm:** lưu trên đám mây, đồng bộ giữa các máy.
- **Cần từ gói khác:** định dạng tệp dự án (3.2); bộ máy mẫu cho phần phiên bản mẫu (4.2.7).
- **Sản phẩm giao:** chức năng lưu và mở dự án.
- **Yêu cầu đáp ứng:** lưu và mở dự án (RQ-08, REQ-A-12).
- **Giờ:** 15,3 (giữ như bản 2.3). **Mốc:** M5.
- **Giả định và rủi ro:** hình dựng giống nhau giữa các trình duyệt (AS-17).
- **Tính là xong khi:** lưu rồi mở lại, ở cùng máy hay máy khác, không mất dữ liệu nào.

## 4. Giờ của nhánh 4.2

| Gói | Bản 2.3 | Bản nháp |
| --- | --- | --- |
| Trình soạn (cũ 4.2.1), nay tách thành 4.2.2, 4.2.3, 4.2.5, 4.2.6 | 28,7 | 39,3 |
| Xem trước (cũ 4.2.3), nay tách thành 4.2.7, 4.2.8, 4.2.10 | 24,7 | 37,0 |
| Bộ 3 mẫu (cũ 4.2.2), nay là 4.2.9 | 13,3 | 27,3 |
| Màn hình chọn mẫu (mới, 4.2.1) | 0 | 4,3 |
| Các gói giữ nguyên: nhạc nền, xuất MP4, tạm dừng, kiểm quyền, lưu và mở | 88,3 | 88,3 |
| **Cộng** | **155,0** | **196,3** |

Tổng kế hoạch của dự án sẽ từ 615 lên khoảng 656 giờ. Phần dự phòng trong trần 675 giờ còn khoảng 19 giờ.

## 5. Điểm cần chốt trước khi sửa trên Drive

1. Số giờ tăng 41,3 giờ lấy từ dự phòng (còn khoảng 19 giờ), hay bớt việc ở chỗ khác để giữ 615 giờ?
2. Bốn loại hiệu ứng (hiện dần, trượt vào, phóng nhẹ, không hiệu ứng) là đề xuất của bản nháp này, tài liệu yêu cầu chưa ghi. Có giữ không?
3. Ảnh trong cảnh mặc định lấp đầy ô và căn giữa, người dùng không tự cắt. Có giữ không?

Khi sửa trên Drive phải sửa theo các chỗ sau: cây WBS và hình vẽ cây, bảng từ điển, tổng giờ và số gói có dấu \* ở phần ghi chú của WBS; bảng giờ theo mốc trong Charter mục 8.4; và chỗ trỏ "gói 3.2" ở mục 6.3 tài liệu Phạm vi và yêu cầu.
