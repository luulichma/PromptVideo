# PromptVideo — Slide-to-Video Generator

**Pre-project · Business Case · Ver. 2.2**

Nhóm 02 · Ngày phát hành: 2026-09-13 · Trạng thái: Draft — chờ phê duyệt

| Xác nhận | Người tạo | Người kiểm tra | Người xác nhận |
| :-: | :-: | :-: | :-: |
| Nguyễn Thế Chiến | Phạm Quang Anh | Phạm Quang Anh | |
| | Nguyễn Việt Quang | Thầy Nguyễn Đình Quảng | |

## Lịch sử cập nhật

| No | Phiên bản | Ngày | Lý do | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 1 | Ver 1.0 | 2026-08-20 | Tạo mới | Khởi tạo Business Case | Nguyễn Thế Chiến | Phạm Quang Anh |
| 2 | Ver 1.1 | 2026-08-24 | Chỉnh sửa | Bổ sung mục tiêu nghiệp vụ; chuyển tính toán tài chính sang Benefit Management Plan | Nguyễn Thế Chiến | Phạm Quang Anh |
| 3 | Ver 2.0 | 2026-08-27 | Chỉnh sửa lớn | Chuyển sang mô hình máy chủ dịch vụ, thu phí thuê bao thường niên, mã nguồn độc quyền | Nguyễn Thế Chiến | Phạm Quang Anh |
| 4 | Ver 2.1 | 2026-09-01 | Tái cấu trúc | Rút gọn cho người đọc nghiệp vụ | Nguyễn Thế Chiến | Phạm Quang Anh |
| 5 | Ver 2.2 | 2026-09-13 | Tái cấu trúc | Gộp còn 5 mục; bỏ hệ mã tham chiếu chéo và 7 bảng chi tiết; gom mục tiêu nghiệp vụ theo ba nghiệp vụ A, B, C và bổ sung ranh giới giữa chúng | Nguyễn Thế Chiến | Phạm Quang Anh |

## Mục lục

1. Tóm tắt và khuyến nghị
2. Nhu cầu kinh doanh
3. Mục tiêu nghiệp vụ
4. Phương án và mô hình kinh doanh
5. Khả thi, rủi ro và điều kiện phê duyệt

## 1. Tóm tắt và khuyến nghị

PromptVideo là dịch vụ web thu phí thuê bao thường niên, biến văn bản và hình ảnh thành video trình chiếu MP4. Sản phẩm gồm hai phần: ứng dụng chạy trong trình duyệt dựng và mã hoá video ngay trên máy người dùng, và máy chủ dịch vụ giữ tài khoản, giấy phép, hạn mức và thanh toán. Máy chủ biết ai đang dùng và dùng bao nhiêu lần, nhưng không bao giờ biết nội dung gì. Đây không phải chi tiết triển khai mà là ranh giới định vị sản phẩm, chi phối cả nghĩa vụ pháp lý lẫn cấu trúc chi phí.

Dự án cần 3.500.000 VND tiền mặt và 450 giờ công của 3 thành viên trong 15 tuần, từ 24/08/2026 đến 06/12/2026. Trên vòng đời 3 năm với tỷ lệ chiết khấu 12%, dự án đạt NPV +433 triệu VND, BCR 3,52 và thu hồi vốn sau khoảng 11 tháng. Điểm hoà vốn ở 28% kịch bản doanh thu cơ sở, tức biên an toàn 72%.

**Khuyến nghị: phê duyệt phương án render trong trình duyệt kết hợp máy chủ tài khoản – giấy phép, bán theo mô hình thuê bao thường niên ba bậc.** Điều kiện kèm theo nêu ở mục 5.

## 2. Nhu cầu kinh doanh

Nhu cầu video ngắn dạng trình chiếu tăng đều ở ba nhóm tại Việt Nam: doanh nghiệp vừa và nhỏ (4–8 video/tháng), giáo viên (5–20 video/học kỳ) và người sáng tạo nội dung (10–30 video/tháng). Quy trình hiện tại — soạn slide, quay màn hình, chỉnh sửa, xuất file — tốn khoảng 45 phút cho một video 60 giây, và phải làm lại toàn bộ khi sai một chi tiết nhỏ.

Công cụ sẵn có không giải quyết được vì cùng lúc mắc sáu hạn chế: thuê bao tính bằng USD, tương đương 4,5–7 triệu VND/năm nên quá tầm doanh nghiệp nhỏ và giáo viên; render trên máy chủ nhà cung cấp khiến số liệu kinh doanh và thông tin học sinh rời khỏi tổ chức; giới hạn độ dài và hạn mức xuất tồn tại ở cả gói miễn phí lẫn gói trả phí; công cụ dùng AI cho kết quả khác nhau mỗi lần chạy; xử lý tiếng Việt kém, dấu bị cắt và ngắt dòng sai ở khung hình dọc; không xuất được hoá đơn VAT hợp lệ nên doanh nghiệp không hạch toán được chi phí.

Chưa có sản phẩm nào trên thị trường Việt Nam kết hợp đồng thời giá nội địa, xử lý nội dung cục bộ, không giới hạn độ dài, ưu tiên tiếng Việt và hoá đơn VAT. Công nghệ mã hoá video ngay trong trình duyệt vừa đủ chín trên cả ba dòng trình duyệt phổ biến, lần đầu cho phép bán một dịch vụ thuê bao mà chi phí phục vụ không tăng theo lượng video khách hàng xuất.

## 3. Mục tiêu nghiệp vụ

Sáu mục tiêu dưới đây gom theo ba nghiệp vụ của sản phẩm, để mỗi mục tiêu có một nghiệp vụ chịu trách nhiệm rõ ràng.

**Nghiệp vụ A — Sản xuất video:**

- **Rút ngắn thời gian tạo video** — dưới 5 phút cho một video 60 giây, giảm ít nhất 85%
- **Bỏ giới hạn độ dài video** — bộ nhớ tăng không quá 15% khi độ dài tăng 10 lần
- **Xử lý tiếng Việt đúng** — 100% ký tự đúng trên bộ 134 tổ hợp dấu
- **Giữ nội dung trong tổ chức** — 0 byte nội dung rời khỏi trình duyệt

**Nghiệp vụ B — Đăng ký, cấp phép và thanh toán:**

- **Hạ chi phí phần mềm cho người dùng** — 599.000 VND/năm, thấp hơn ít nhất 85%
- **Xây dựng dòng doanh thu định kỳ** — NPV dương, BCR trên 1, tỷ lệ gia hạn từ 70%

**Nghiệp vụ C — Quản trị và vận hành dịch vụ** không sở hữu mục tiêu nghiệp vụ riêng, nhưng là điều kiện để hai nhóm trên giữ được kết quả sau bàn giao: máy chủ có người vận hành, mẫu có người bổ sung, lợi ích có người đo.

Khi phải đánh đổi: thời gian tạo video và xử lý tiếng Việt không được hy sinh, đó là lý do sản phẩm tồn tại. Mục tiêu hạ chi phí cho người dùng có thể giảm phạm vi. Dòng doanh thu định kỳ chỉ hiện thực hoá được sau bàn giao; trong 15 tuần, dự án chịu trách nhiệm tạo điều kiện kỹ thuật cho nó.

## 4. Phương án và mô hình kinh doanh

Bốn phương án kiến trúc được chấm trên sáu tiêu chí ưu tiên cho một dịch vụ thu phí do đội 3 người vận hành: chi phí phục vụ mỗi thuê bao, khả năng thực thi thuê bao, riêng tư dữ liệu, tính lặp lại của đầu ra, mức phù hợp với năng lực đội và vốn khởi tạo.

| Phương án | Nhận xét | Kết luận |
| :-- | :-- | :-: |
| Không làm gì | Không giải quyết được nhu cầu; chỉ dùng làm mốc so sánh | Loại |
| Bán lại phần mềm dịch vụ nước ngoài | Biên lợi nhuận mỏng; phần lớn điều khoản bán lại không cho phép | Loại |
| Dịch vụ render trên máy chủ | Chi phí máy chủ tăng theo số phút video nên biên lợi nhuận co lại đúng lúc khách hàng dùng nhiều; lưu nội dung làm phát sinh nghĩa vụ nặng theo NĐ 13/2023/NĐ-CP | Loại |
| **Render trong trình duyệt kết hợp máy chủ tài khoản – giấy phép** | Chi phí phục vụ tính theo số tài khoản chứ không theo lượng video; thuê bao thực thi được ở tầng máy chủ; nội dung không rời máy người dùng | **Được chọn** |

Hai đánh đổi của phương án được chọn là phụ thuộc phần cứng người dùng và cần Internet khi xuất video. Bù lại, cổng khoá tính năng đặt ở máy chủ nên quyền lợi trả phí thực thi được: không có giấy phép hợp lệ thì không xuất được video.

Theo kiến trúc này, sản phẩm gồm ba nghiệp vụ tách bạch, mỗi nghiệp vụ có tác nhân và đầu ra riêng:

| Nghiệp vụ | Từ đâu đến đâu | Tác nhân |
| :-- | :-- | :-- |
| A. Sản xuất video | Từ bản thảo văn bản và ảnh đến file MP4 nằm trên máy người dùng | Người dùng cuối |
| B. Đăng ký, cấp phép và thanh toán | Từ lúc khách tạo tài khoản đến lúc giấy phép có hiệu lực, hết hạn hoặc được gia hạn | Khách hàng và cổng thanh toán |
| C. Quản trị và vận hành dịch vụ | Từ việc nạp mẫu và tài sản đồ hoạ, giám sát máy chủ, xử lý hỗ trợ, đến đo lường lợi ích định kỳ | Quản trị viên và nhà tài trợ |

Ranh giới giữa A và B là ranh giới định vị đã nêu ở mục 1: B biết ai đang dùng và dùng bao nhiêu lần, A biết nội dung nhưng không gửi nội dung đi đâu. Chỗ hai nghiệp vụ giao nhau là lệnh xuất video phải hỏi giấy phép trước khi chạy, và hạn mức bậc miễn phí do B đếm nhưng do A thi hành. Ranh giới giữa A và C là định dạng mẫu: C nạp mẫu vào hệ thống, A tiêu thụ mẫu đó.

Mô hình doanh thu chọn theo đó là thuê bao thường niên ba bậc:

- **Miễn phí** — 0 VND: 3 video/tháng, có watermark, tối đa 720p, dùng đủ 5 mẫu
- **Cá nhân** — 599.000 VND/năm: không giới hạn số video, 1080p, không watermark
- **Doanh nghiệp** — 4.900.000 VND/năm: như bậc Cá nhân, 5 chỗ, hoá đơn VAT, phản hồi hỗ trợ trong 1 ngày làm việc

Bậc miễn phí giới hạn bằng độ phân giải chứ không bằng số mẫu: người dùng thấy được toàn bộ sản phẩm nên có lý do nâng cấp, trong khi trần 720p tự nó chặn dùng cho mục đích thương mại. Ba mô hình còn lại bị loại vì trả tiền theo lần xuất cho doanh thu không dự báo được, giấy phép vĩnh viễn không tạo dòng tiền nuôi máy chủ, còn thuê bao kèm render đám mây làm mất chính lợi thế chi phí thấp.

Về mặt kinh tế, chi phí tiền mặt là 3,5 / 6,5 / 15 / 28 triệu VND cho Năm 0 đến Năm 3, doanh thu là 0 / 74,6 / 240,7 / 487,4 triệu VND. Dòng tiền chiết khấu, phân tích độ nhạy và cách đo từng lợi ích trình bày ở Benefit Management Plan. Điểm cần lưu ý ở cấp quyết định: mô hình thuần thuê bao chỉ có một trụ doanh thu, nên toàn bộ kết quả đứng hay đổ theo số thuê bao Năm 1 và tỷ lệ gia hạn.

## 5. Khả thi, rủi ro và điều kiện phê duyệt

**Khả thi trên cả năm khía cạnh:**

- **Kỹ thuật** — khả thi có điều kiện. Mã hoá video trong trình duyệt đã hỗ trợ đủ trên Chrome/Edge, Firefox và Safari bản mới. Ràng buộc khó nhất là video không giới hạn độ dài, bắt buộc dùng kiến trúc xử lý theo luồng; chứng minh bằng nguyên mẫu tại mốc M2 để nếu phải đổi hướng thì còn 10 tuần.
- **Pháp lý** — khả thi. Chỉ thu thập email, tên và lịch sử thanh toán theo NĐ 13/2023/NĐ-CP; nội dung video không thuộc diện này vì không rời máy người dùng. Hoá đơn cho bậc Doanh nghiệp xử lý qua cổng thanh toán nội địa; hệ thống không lưu thông tin thẻ.
- **Vận hành** — khả thi, kèm nghĩa vụ mới. Là dịch vụ thu phí nên sản phẩm có nghĩa vụ chạy liên tục sau khi dự án đóng. Hạ tầng chỉ cần một máy chủ ảo nhỏ cho tối đa 1.000 thuê bao, mục tiêu hoạt động từ 99%/tháng. Chi phí phục vụ là 65.000 / 50.000 / 45.000 VND mỗi thuê bao mỗi năm, giảm dần vì phần lớn chi phí cố định, nên biên lợi nhuận nở ra theo quy mô thay vì co lại.
- **Tiến độ** — khả thi nhưng là điểm căng nhất. 450 giờ cho một bộ dựng video, một trình soạn thảo, 5 mẫu và một hệ thống tài khoản – giấy phép – thanh toán là ước lượng eo hẹp. Nếu hết mốc M2 nguyên mẫu chưa chạy, giảm phạm vi xuống 3 mẫu và bỏ chức năng lưu/mở dự án, không lùi ngày bàn giao.
- **Nguồn lực** — khả thi, phụ thuộc cam kết thời gian. 3 thành viên × 10 giờ/tuần × 15 tuần. Mất một thành viên là mất một phần ba năng lực và không có dự phòng.

**Rủi ro ở cấp quyết định đầu tư:**

- Nguyên mẫu xử lý theo luồng không đạt — mức cao. Làm nguyên mẫu ngay tuần 4, chuẩn bị dự phòng định dạng khác và phương án giảm phạm vi.
- Một thành viên rút lui hoặc không đủ 10 giờ/tuần — mức cao. Cam kết bằng văn bản tại mốc M0 và rà lại mỗi 2 tuần; không để kiến thức tập trung vào một người.
- Máy chủ giấy phép ngừng hoạt động khiến người dùng trả phí không xuất được video — mức cao. Giám sát tự động, mục tiêu hoạt động từ 99%/tháng, diễn tập quy trình khôi phục tại mốc M6.
- Tỷ lệ gia hạn thấp làm doanh thu Năm 2 và Năm 3 sụp đổ — mức cao. Theo dõi từ chu kỳ gia hạn đầu tiên; điểm quyết định đặt ở cuối Quý 4 Năm 1.
- Cổng thanh toán không duyệt hồ sơ kịp mốc M6 — mức trung bình. Nộp hồ sơ tại mốc M2; dự phòng chuyển khoản và kích hoạt thủ công trong 3 tháng đầu.

**Ràng buộc.** Khuyến nghị ở trên chỉ đúng bên trong các điều kiện biên sau; nếu một trong số đó thay đổi, Business Case phải được lập lại: 15 tuần, kết thúc trước 06/12/2026; vốn tiền mặt 3.500.000 VND, không huy động thêm; hạ tầng tối đa 150.000 VND/tháng trong Năm 0 và 800.000 VND/tháng đến hết Năm 3; 3 thành viên bán thời gian, tổng 450 giờ; chỉ dùng thư viện và tài sản có giấy phép cho phép thương mại hoá và phân phối lại; chạy được mà không cần cài đặt gì ngoài trình duyệt nhưng cần Internet khi xuất video; mã nguồn độc quyền, mọi quyền lợi trả phí thực thi ở tầng máy chủ.

**Điều kiện kèm theo khi phê duyệt:**

- Nguyên mẫu chứng minh bộ nhớ không tăng theo độ dài video, hoàn thành trước hết mốc M2; nếu thất bại thì kích hoạt phương án giảm phạm vi
- Nộp hồ sơ cổng thanh toán tại mốc M2, hoàn tất trước mốc M6
- Ban hành Chính sách quyền riêng tư và Điều khoản sử dụng, đồng thời xác minh bản quyền định dạng mã hoá, trước khi mở đăng ký công khai
- Cam kết thời gian của cả 3 thành viên bằng văn bản tại mốc M0, và nhà tài trợ xác nhận bằng văn bản việc tiếp nhận nghĩa vụ vận hành máy chủ 3 năm sau bàn giao

**Bước tiếp theo:** ký Hợp đồng thực hiện dự án, phê duyệt Project Charter và bổ nhiệm Giám đốc dự án.

---

*Tài liệu liên quan: Benefit Management Plan · Hợp đồng thực hiện dự án · Project Charter · Assumption Log.*
