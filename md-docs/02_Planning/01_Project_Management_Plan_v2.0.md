# PromptVideo — Slide-to-Video Generator

**Kế hoạch quản lý dự án** (Project Management Plan) · Planning · Ver. 2.0 · Nhóm 02

| Ngày phát hành | Trạng thái |
| --- | --- |
| 2026-10-14 | Draft - chờ kiểm tra |

## Xác nhận

| Người tạo | Người kiểm tra | Người xác nhận |
| --- | --- | --- |
| Nguyễn Thế Chiến | Nguyễn Việt Quang | Phạm Quang Anh |

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Ver 1.0 | 2026-09-24 | Tạo mới | Bản làm việc đầu tiên | Nguyễn Thế Chiến | |
| 2 | Ver 2.0 | 2026-10-14 | Viết lại | Theo Charter sửa ngày 14/10 và luật môn học; thêm cách làm dự án, mốc chuẩn, kiểm soát thay đổi, họp khởi động | Nguyễn Thế Chiến | |

## Mục lục

1. Giới thiệu
2. Cách làm dự án
3. Phân công
4. Các kế hoạch con
5. Ba mốc chuẩn: phạm vi, lịch, chi phí
6. Kiểm soát thay đổi và quản lý phiên bản
7. Theo dõi, báo cáo và đóng dự án
8. Họp khởi động

# 1. Giới thiệu

Tài liệu này nói dự án PromptVideo được làm, theo dõi, kiểm soát và đóng như thế nào. Nó gom các kế hoạch con và ba mốc chuẩn về một chỗ. Chi tiết nằm ở từng tài liệu riêng; ở đây chỉ tóm tắt và trỏ link.

Kế hoạch được chi tiết dần qua các lần cập nhật. Mỗi lần đổi đều phải qua kiểm soát thay đổi ở phần 6.

**Thông tin nhanh:**

- Thời gian: 24/08/2026 → 06/12/2026, 15 tuần.
- Nguồn lực: 3 người × 10 giờ/tuần × 15 tuần = 450 giờ; trần 495 giờ.
- Tiền mặt: tối đa 3.500.000 VND.
- Thời điểm soạn bản này: tuần 8, ngay trước mốc M3 (18/10/2026). Phần đã qua (M0–M2) ghi theo thực tế có bằng chứng; phần còn lại lập kế hoạch từ M3 trở đi.

# 2. Cách làm dự án

## 2.1. Chọn kiểu làm

Dự án làm theo kiểu **kết hợp** (hybrid):

- **Khung tổng làm theo kế hoạch định trước** (predictive): phạm vi, 8 mốc và ngân sách đã chốt trong Charter.
- **Phần xây dựng làm tăng dần**: mỗi mốc ra thêm một phần chạy được, theo thứ tự bộ dựng → xuất MP4 → soạn thảo và giấy phép → thanh toán.

Lý do chọn:

- Yêu cầu đã khá rõ trong Charter, ít khả năng đổi lớn.
- Hạn bàn giao cứng theo học kỳ, ngân sách nhỏ.
- Đội 3 người bán thời gian, không đủ sức chạy nhiều vòng làm lại.
- Rủi ro kỹ thuật lớn nhất là mã hoá video theo luồng, nên phải thử sớm bằng nguyên mẫu ở M2 trước khi làm tiếp.

Công việc chia theo 6 nhánh WBS: quản lý, yêu cầu, thiết kế, xây dựng, tích hợp và kiểm thử, triển khai và bàn giao.

## 2.2. Các mốc và cổng duyệt

Mỗi mốc là một **cổng duyệt** (phase gate): xem đã đạt tiêu chí của mốc chưa rồi quyết định một trong bốn hướng:

- **Đi tiếp** (Go)
- **Tạm dừng** (Hold)
- **Dừng hẳn** (Kill)
- **Làm lại** (Recycle)

Giám đốc dự án đề xuất, Nhà tài trợ quyết định. Kết quả ghi vào báo cáo tiến độ.

Các mốc theo Charter mục 7:

- M0 - 30/08: khởi động, ký Charter.
- M1 - 13/09: chốt yêu cầu và định dạng dữ liệu cảnh.
- M2 - 27/09: thiết kế kiến trúc, 5 mẫu, nguyên mẫu mã hoá theo luồng; nộp hồ sơ cổng thanh toán.
- M3 - 18/10: bộ dựng, xem trước, bộ ghi file; đạt mục tiêu 5 mẫu và hiển thị tiếng Việt.
- M4 - 01/11: xuất MP4 theo luồng; đạt mục tiêu tốc độ, bộ nhớ, đầu ra giống nhau, không gửi nội dung đi.
- M5 - 15/11: trình soạn thảo, lưu/mở dự án, giấy phép và hạn mức.
- M6 - 29/11: thanh toán, trang thuê bao, kiểm thử, tài liệu; diễn tập khôi phục máy chủ.
- M7 - 06/12: nghiệm thu và bàn giao v1.0.

Riêng cổng M2: nếu nguyên mẫu không đạt, Giám đốc dự án được giảm phạm vi ngay (còn 3 mẫu, bỏ lưu/mở dự án). Việc này không được đụng tới phần tài khoản, giấy phép và thanh toán (Charter mục 11.2).

# 3. Phân công

## 3.1. Vai trò trong bối cảnh dự án

Các nhân vật dưới đây là giả định, theo Charter mục 9, 11 và 12:

- **Nhà tài trợ - Trần Minh Đức:** duyệt kế hoạch, mốc chuẩn, thay đổi lớn và ký nghiệm thu.
- **Giám đốc dự án - Lê Hoàng Nam:** điều hành hằng ngày, duyệt thay đổi nhỏ, báo cáo Nhà tài trợ.
- **Trưởng nhóm kỹ thuật - Đỗ Bảo Long:** kiến trúc, nguyên mẫu, xác nhận các mục tiêu kỹ thuật.
- **Trưởng nhóm sản phẩm - Vũ Khánh Linh:** duyệt mẫu, kiểm thử với người dùng.

## 3.2. Phân công trong nhóm

Mỗi người giữ một nghiệp vụ và soạn một nhóm tài liệu Planning. Người kiểm và người xác nhận đi theo vòng chéo của Charter mục 11.4:

- **Nguyễn Thế Chiến** — nghiệp vụ A (sản xuất video). Soạn: kế hoạch quản lý dự án, phạm vi, WBS. Quang kiểm, Quang Anh xác nhận.
- **Nguyễn Việt Quang** — nghiệp vụ B (tài khoản, giấy phép, thanh toán). Soạn: lịch, chi phí, rủi ro. Quang Anh kiểm, Chiến xác nhận.
- **Phạm Quang Anh** — nghiệp vụ C (quản trị, vận hành). Soạn: chất lượng, nguồn lực, truyền thông. Chiến kiểm, Quang xác nhận.

Charter giao 4 việc xuyên suốt cho Giám đốc dự án: WBS tổng, đường găng, ngân sách hợp nhất, quy trình kiểm soát thay đổi. Trong hồ sơ, Giám đốc dự án là người chịu trách nhiệm. Người soạn thật là:

- Chiến: WBS tổng và quy trình kiểm soát thay đổi.
- Quang: đường găng và ngân sách hợp nhất.

**Hai quy tắc chung:**

- Không ai tự kiểm hay tự xác nhận tài liệu của mình.
- Tài liệu chỉ coi là xong khi lịch sử cập nhật có đủ ba tên: người tạo, người kiểm, người xác nhận.

# 4. Các kế hoạch con

Dự án có 10 kế hoạch con. Kế hoạch nào có tài liệu riêng thì ở đây chỉ tóm tắt và ghi số tài liệu trong thư mục 02_Planning.

## 4.1. Phạm vi

- **Cách lập:** Tuyên bố phạm vi (tài liệu 04) mô tả sản phẩm, đầu ra và những gì không làm, theo Charter mục 5.2. WBS và từ điển WBS (tài liệu 05) chia toàn bộ công việc thành các gói việc nhỏ.
- **Cách duyệt:** Giám đốc dự án kiểm, Nhà tài trợ duyệt. Sau khi duyệt, ba tài liệu này thành mốc chuẩn phạm vi (phần 5).
- **Cách nghiệm thu:** mỗi sản phẩm bàn giao phải kiểm thử đạt trước, sau đó người có thẩm quyền theo Charter mục 10 ký nhận.

## 4.2. Yêu cầu

- Yêu cầu chi tiết nằm ở tài liệu 02. Mỗi chủ nghiệp vụ viết và giữ phần yêu cầu của mình; Chiến ghép lại.
- Mỗi yêu cầu được nối với mục tiêu trong Charter và với ca kiểm thử trong bảng truy vết (tài liệu 09).
- Ưu tiên theo Charter: Bắt buộc hoặc Nên có. Yêu cầu Bắt buộc làm trước.
- Mỗi yêu cầu có một trong ba trạng thái: chưa làm, đang làm, đã kiểm thử đạt. Báo cáo tuần ghi tỷ lệ yêu cầu Bắt buộc đã kiểm thử đạt.
- Sửa hoặc bỏ một yêu cầu đã chốt phải qua kiểm soát thay đổi (phần 6).

## 4.3. Lịch

- Lịch chi tiết và đường găng (chuỗi việc quyết định ngày xong dự án) nằm ở tài liệu 10.
- Mỗi gói việc ước lượng ba con số: nhanh nhất, bình thường, chậm nhất; lấy trung bình cộng làm thời lượng dự kiến.
- Năng lực tính theo 10 giờ/người/tuần. Tuần nào vượt năng lực thì ghi rõ trong lịch.
- Lịch đang chạy được cập nhật mỗi tuần theo tiến độ thật. Mốc chuẩn lịch giữ nguyên để so sánh.
- Giám đốc dự án được dời việc giữa các mốc. Dời mốc bàn giao cuối (M7) phải có Nhà tài trợ duyệt.

## 4.4. Chi phí

- Ước lượng chi phí và ngân sách nằm ở tài liệu 11.
- **Đơn vị:** giờ công (quy đổi 80.000 VND/giờ, là chi phí cơ hội, không phải tiền chi ra) và tiền mặt VND. Giờ làm tròn đến 0,5 giờ, tiền làm tròn đến 1.000 VND.
- **Ngưỡng cảnh báo** theo Charter mục 8.5: một mốc vượt 120% số giờ phân bổ thì báo ngay ở họp tuần; vượt 495 giờ, vượt 3.500.000 VND, hoặc hạ tầng vượt 150.000 VND/tháng thì phải có Nhà tài trợ duyệt.
- **Cách đo:** mỗi tuần so ba số: giờ theo kế hoạch, giờ của phần việc đã xong, giờ thực tế đã dùng. Gói việc chỉ tính là xong khi có sản phẩm và người kiểm đã xác nhận; chưa xong thì tính 0%.

## 4.5. Chất lượng

- Kế hoạch chất lượng và ca kiểm thử nằm ở tài liệu 06.
- **Đảm bảo chất lượng:** rà tài liệu và cách làm theo vòng kiểm chéo ở phần 3.
- **Kiểm soát chất lượng:** kiểm thử từng phần, kiểm thử ghép nối và kiểm thử từ đầu đến cuối.
- **Thước đo** lấy thẳng từ mục tiêu Charter, ví dụ: xuất video không quá 1,5 lần thời lượng; bộ nhớ tăng dưới 15% khi video dài gấp 10; ít nhất 95% lần xuất thành công trên 100 lần thử ở Chrome và Edge; 8/10 người dùng mới làm xong video đầu tiên trong 10 phút.
- Mỗi kết quả kiểm thử ghi ngày, bản build, môi trường và người chạy. Chưa chạy thì ghi là chưa chạy, không ghi đạt.

## 4.6. Nguồn lực

- Kế hoạch nguồn lực nằm ở tài liệu 07, bảng phân công ở tài liệu 12.
- **Con người:** 3 thành viên, mỗi người 10 giờ/tuần, vai trò như phần 3. Mỗi việc có đúng một người chịu trách nhiệm chính.
- **Máy móc:** mỗi người dùng máy cá nhân. Riêng phép đo hiệu năng dùng máy tham chiếu theo Charter: Core i5 thế hệ 10, 8 GB RAM, Windows 11, Chrome bản ổn định.
- Nội quy làm việc nhóm do cả nhóm cùng viết, nằm trong tài liệu 07.

## 4.7. Truyền thông

- Kế hoạch truyền thông nằm ở tài liệu 07.
- **Kênh:** trao đổi hằng ngày qua nhóm Zalo; tài liệu chính thức lưu trên Google Drive; mã nguồn lưu trong kho git.
- **Báo cáo** theo Charter mục 11.3: tiến độ hằng tuần kèm giờ thực tế; báo cáo tại mỗi mốc; báo cáo sự cố trong 24 giờ; báo cáo tổng kết ở tuần 15. Báo cáo mốc và báo cáo tổng kết gửi thêm bản sao cho giảng viên môn học.

## 4.8. Rủi ro

- Kế hoạch rủi ro nằm ở tài liệu 08, sổ rủi ro ở tài liệu 13.
- Mỗi rủi ro được chấm khả năng xảy ra (1–5) và tác động (1–5). Điểm bằng hai số nhân nhau; từ 13 trở lên là mức Cao.
- Sổ rủi ro ghi cả cơ hội, không chỉ mối đe doạ.
- **Rủi ro mức Cao hiện có:** nguyên mẫu mã hoá không đạt; thành viên rút lui hoặc không đủ giờ; máy chủ giấy phép ngừng hoạt động; tỷ lệ gia hạn thấp; cổng thanh toán không duyệt kịp; phạm vi bị nới rộng.
- Rà rủi ro trong họp tuần và tại mỗi mốc. Rủi ro mức Cao báo Giám đốc dự án ngay khi phát hiện.

## 4.9. Bên liên quan

- Danh sách 8 bên liên quan và cách làm việc với từng bên nằm ở Stakeholder Register; cách thực hiện chi tiết nằm ở tài liệu 07.
- Với mỗi bên, sổ ghi mức tham gia hiện tại và mức mong muốn, kèm việc cần làm để kéo lên mức mong muốn.

## 4.10. Mua sắm

- **Không áp dụng:** dự án không thuê nhà thầu bên ngoài.
- Bốn khoản mua dịch vụ nhỏ trong Charter mục 8.2 (cổng thanh toán, tài sản đồ hoạ, máy chủ ảo, tên miền) được theo dõi trong tài liệu chi phí. Hợp đồng có trả phí do Nhà tài trợ ký.

# 5. Ba mốc chuẩn: phạm vi, lịch, chi phí

Mốc chuẩn là bản kế hoạch đã duyệt, được giữ cố định để so với thực tế. Mốc chuẩn chỉ được đổi qua kiểm soát thay đổi (phần 6).

- **Mốc chuẩn phạm vi:** Tuyên bố phạm vi (tài liệu 04), WBS và từ điển WBS (tài liệu 05) sau khi được duyệt.
- **Mốc chuẩn lịch:** 8 mốc M0–M7 của Charter và lịch chi tiết đã duyệt trong tài liệu 10.
- **Mốc chuẩn chi phí:** 450 giờ công chia theo mốc như Charter mục 8.4, cộng 3.100.000 VND tiền chi và 400.000 VND tiền dự phòng. Phần 45 giờ từ 450 đến 495 giờ là dự phòng cho các rủi ro đã biết, do Giám đốc dự án quản lý.
- Dự án không có khoản dự phòng riêng do Nhà tài trợ giữ. Mọi phần vượt 495 giờ hoặc 3.500.000 VND phải xin Nhà tài trợ.

Ba mốc chuẩn gộp lại thành một mốc chung để đo tiến độ và chi phí mỗi tuần.

**Tình trạng hiện tại:** ba mốc chuẩn chưa được Nhà tài trợ duyệt. Ước lượng chi tiết hiện ra 599 giờ, vượt 495 giờ. Nhóm đã lập đề nghị thay đổi CR-G-001 (giữ phạm vi, điều chỉnh lịch và nguồn lực) và đang chờ Nhà tài trợ quyết định.

# 6. Kiểm soát thay đổi và quản lý phiên bản

## 6.1. Cách xử lý một thay đổi

- **Bước 1:** người đề nghị ghi phiếu đề nghị thay đổi: nội dung, lý do, ảnh hưởng tới phạm vi, lịch, giờ công, tiền và chất lượng.
- **Bước 2:** chủ nghiệp vụ bị ảnh hưởng đánh giá tác động.
- **Bước 3:** người có thẩm quyền duyệt hoặc từ chối, theo mục 6.2.
- **Bước 4:** ghi vào sổ thay đổi, sửa tài liệu và mốc chuẩn liên quan, báo cả nhóm.

Không làm thay đổi trước khi được duyệt.

## 6.2. Ai duyệt

Theo Charter mục 10.3:

- Không ảnh hưởng phạm vi, tiến độ, giờ công: Giám đốc dự án, trong 1 ngày làm việc.
- Chi tiền trong khoản dự phòng: Giám đốc dự án, trong 2 ngày làm việc.
- Thay đổi phạm vi hoặc phát sinh giờ công trên 10%: Nhà tài trợ, trong 5 ngày làm việc.
- Dời ngày bàn giao cuối: Nhà tài trợ, trong 5 ngày làm việc.
- Thay đổi định dạng dữ liệu cảnh sau M5: Nhà tài trợ, trong 5 ngày làm việc. Từ sau M1 đến trước M5 chưa chốt người duyệt; trong lúc chờ, áp các quy tắc chung ở trên.
- Thay đổi mức giá hoặc cấu trúc bậc thuê bao: Nhà tài trợ, trong 5 ngày làm việc.

## 6.3. Tài liệu phải qua kiểm soát thay đổi

- **Phải được duyệt khi sửa:** Project Charter; Kế hoạch quản lý dự án (01); Đặc tả yêu cầu (02); Đặc tả giao tiếp và định dạng dữ liệu cảnh (03); Tuyên bố phạm vi (04); WBS và từ điển WBS (05); lịch mốc chuẩn (10); ngân sách (11).
- **Tài liệu sống,** sửa thường xuyên nhưng phải ghi lịch sử: sổ rủi ro, sổ vấn đề và thay đổi, nhật ký giờ công, báo cáo tiến độ, Assumption Log, Stakeholder Register.

## 6.4. Quản lý phiên bản

- Mỗi tài liệu chỉ có một bản chính thức, nằm trên Google Drive trong thư mục của giai đoạn.
- Số phiên bản dạng x.y: sửa nhỏ thì tăng y; thay đổi lớn hoặc sau khi được duyệt thì tăng x. Mỗi lần sửa thêm một dòng vào bảng lịch sử cập nhật.
- Mã nguồn lưu trong kho git. Mỗi bản bàn giao được gắn nhãn phiên bản, ví dụ v1.0.
- Định dạng dữ liệu cảnh có số phiên bản riêng, vì cả A, B và C cùng dùng.

# 7. Theo dõi, báo cáo và đóng dự án

## 7.1. Theo dõi

- **Hằng ngày:** mỗi người cập nhật ngắn trong nhóm Zalo trước 20:00: việc đã làm, số giờ, vướng mắc.
- **Hằng tuần:** họp nhóm; báo cáo tiến độ so với mốc chuẩn, giờ thực tế, rủi ro, vấn đề và đề nghị thay đổi. Quang tổng hợp số liệu, Giám đốc dự án gửi Nhà tài trợ.
- **Tại mỗi mốc:** xét cổng duyệt như mục 2.2 và gửi báo cáo mốc.
- **Khi lệch:** tiến độ chậm hơn hoặc chi phí cao hơn kế hoạch quá 5% thì nêu nguyên nhân và cách xử lý ngay trong họp tuần.

## 7.2. Nghiệm thu

- Sản phẩm phải kiểm thử đạt trước, sau đó mới đưa người có thẩm quyền nghiệm thu.
- Mỗi lần nghiệm thu có một trong ba kết quả: chấp nhận; trả lại để sửa lỗi; hoặc chuyển thành đề nghị thay đổi.
- Kết quả ghi vào biên bản, có người ký và lý do nếu không chấp nhận.

## 7.3. Đóng dự án (tuần 15)

- Nghiệm thu v1.0 theo 9 điều kiện ở Charter mục 10.1; Nhà tài trợ ký biên bản.
- Bàn giao sản phẩm, hướng dẫn người dùng, tài liệu vận hành máy chủ và danh mục lợi ích cho Nhà tài trợ.
- Viết báo cáo tổng kết và bài học kinh nghiệm.
- Sau khi đóng: bảo hành lỗi 30 ngày; bắt đầu đo thời gian hoạt động của máy chủ giấy phép (mục tiêu từ 99%).

# 8. Họp khởi động

Họp khởi động đánh dấu kết thúc lập kế hoạch và bắt đầu thực hiện.

- **Thời điểm:** sau khi bộ tài liệu Planning có bản đầy đủ đầu tiên; ngày cụ thể chốt trong họp nhóm.
- **Người dự:** cả 3 thành viên.
- **Nội dung:** nhắc lại mục tiêu và 8 mốc của dự án; từng người xác nhận cam kết 10 giờ/tuần và phần việc của mình; giải thích vai trò, vòng kiểm chéo, cách báo cáo và cách xử lý thay đổi.
- **Đầu ra:** biên bản họp có danh sách người dự, các cam kết và quyết định, lưu trên Google Drive.
