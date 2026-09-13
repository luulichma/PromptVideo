# PromptVideo — Slide-to-Video Generator

**Pre-project · Benefit Management Plan · Ver. 2.2**

Nhóm 02 · Ngày phát hành: 2026-09-13 · Trạng thái: Draft — chờ phê duyệt

| Xác nhận | Người tạo | Người kiểm tra | Người xác nhận |
| :-: | :-: | :-: | :-: |
| Nguyễn Thế Chiến | Phạm Quang Anh | Phạm Quang Anh | |
| | Nguyễn Việt Quang | Thầy Nguyễn Đình Quảng | |

## Lịch sử cập nhật

| No | Phiên bản | Ngày | Lý do | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 1 | Ver 1.0 | 2026-08-20 | Tạo mới | Khởi tạo Benefit Management Plan | Nguyễn Thế Chiến | Phạm Quang Anh |
| 2 | Ver 1.1 | 2026-08-24 | Chỉnh sửa | Đưa toàn bộ thẩm định tài chính về tài liệu này | Nguyễn Thế Chiến | Phạm Quang Anh |
| 3 | Ver 2.0 | 2026-08-27 | Chỉnh sửa lớn | Cập nhật danh mục lợi ích và thẩm định tài chính theo mô hình thuê bao thường niên | Nguyễn Thế Chiến | Phạm Quang Anh |
| 4 | Ver 2.1 | 2026-09-01 | Tái cấu trúc | Rút gọn cho người đọc nghiệp vụ | Nguyễn Thế Chiến | Phạm Quang Anh |
| 5 | Ver 2.2 | 2026-09-13 | Tái cấu trúc | Gộp còn 8 mục; bỏ hệ mã tham chiếu chéo; bỏ ROI và IRR; chia danh mục lợi ích theo ba nghiệp vụ A, B, C và gắn quyền sở hữu lợi ích theo chủ nghiệp vụ; tách vai nhà tài trợ khỏi thành viên nhóm | Nguyễn Thế Chiến | Phạm Quang Anh |

## Mục lục

1. Mục đích
2. Danh mục lợi ích
3. Liên kết chiến lược
4. Thẩm định tài chính
5. Lộ trình và điểm quyết định
6. Chủ sở hữu lợi ích
7. Giả định và rủi ro
8. Theo dõi hiện thực hoá

## 1. Mục đích

Business Case trả lời câu hỏi có nên làm dự án này không. Tài liệu này trả lời câu tiếp theo: dự án tạo ra lợi ích gì, đáng bao nhiêu tiền, đo bằng cách nào, ai chịu trách nhiệm, và khi nào lợi ích được coi là đã hiện thực hoá.

Nó tồn tại vì dự án kết thúc ở tuần 15 khi phần mềm được bàn giao, nhưng phần lớn lợi ích chỉ xuất hiện sau đó. Với một sản phẩm thuê bao, điều này còn đúng hơn bình thường: doanh thu Năm 1 chỉ là điểm khởi đầu, giá trị thật của mô hình nằm ở việc khách hàng gia hạn — thứ chỉ kiểm chứng được sau 12 tháng vận hành. Phạm vi theo dõi là 3 năm kể từ ngày bàn giao.

## 2. Danh mục lợi ích

Danh mục chia theo ba nghiệp vụ của sản phẩm. Chủ nghiệp vụ chịu trách nhiệm về lợi ích thuộc nghiệp vụ mình phụ trách.

**Nghiệp vụ A — Sản xuất video. Chủ sở hữu: Nguyễn Thế Chiến.**

| Lợi ích | Cách đo | Hiện trạng | Mục tiêu | Thời điểm đo |
| :-- | :-- | :-- | :-- | :-- |
| Rút ngắn thời gian tạo video | Từ lúc mở ứng dụng đến lúc lưu file MP4, kịch bản chuẩn 5 cảnh 60 giây | ~45 phút | Dưới 5 phút | Khi bàn giao |
| Không giới hạn độ dài video | Bộ nhớ đỉnh của video 10 phút chia cho video 1 phút, cùng độ phân giải | Hạn mức theo gói | Tăng dưới 15% | Mốc M4, tuần 10 |
| Nội dung không rời máy người dùng | Tổng byte nội dung người dùng rời khỏi trình duyệt khi tạo và xuất video | Toàn bộ nội dung phải tải lên | 0 byte | Mốc M4, tuần 10 |
| Hiển thị tiếng Việt chính xác | Tỷ lệ ký tự đúng trên bộ 134 tổ hợp dấu, cả khung ngang và dọc | Lỗi dấu, ngắt dòng sai | 100% | Mốc M3, tuần 8 |
| Đầu ra lặp lại được | Xuất cùng một nội dung trên 3 máy khác cấu hình rồi so kết quả | Không đảm bảo | 3/3 giống nhau | Mốc M4, tuần 10 |

**Nghiệp vụ B — Đăng ký, cấp phép và thanh toán. Chủ sở hữu: Nguyễn Việt Quang.**

| Lợi ích | Cách đo | Hiện trạng | Mục tiêu | Thời điểm đo |
| :-- | :-- | :-- | :-- | :-- |
| Giảm chi phí phần mềm cho người dùng | Giá thuê bao một năm | 4,5–7 triệu VND/năm | 599.000 VND/năm | Khi phát hành |
| Doanh thu thuê bao | Tiền thu trong kỳ và số tài khoản có giấy phép còn hiệu lực cuối kỳ, tách theo bậc | 0 | 74,6 / 240,7 / 487,4 triệu VND | Hàng tháng, Năm 1–3 |

**Nghiệp vụ C — Quản trị và vận hành dịch vụ. Chủ sở hữu: Phạm Quang Anh.**

| Lợi ích | Cách đo | Hiện trạng | Mục tiêu | Thời điểm đo |
| :-- | :-- | :-- | :-- | :-- |
| Chi phí phục vụ mỗi thuê bao thấp | Chi phí tiền mặt vận hành trong năm chia số thuê bao trung bình | — | Dưới 65.000 / 50.000 / 45.000 VND | Hàng quý |

**Xuyên nghiệp vụ. Chủ sở hữu: Nguyễn Thế Chiến, với tư cách giám đốc dự án.**

| Lợi ích | Cách đo | Hiện trạng | Mục tiêu | Thời điểm đo |
| :-- | :-- | :-- | :-- | :-- |
| Năng lực đội và tài sản tái sử dụng | Số thành viên tự triển khai được pipeline mã hoá; số mô-đun tách ra dùng lại | 0/3 và 0 mô-đun | Từ 2/3 và từ 3 mô-đun | Kết thúc dự án |

Hai chỉ số dưới đây không phải lợi ích nhưng quyết định cả nhóm doanh thu, nên theo dõi cùng nghiệp vụ B: **tỷ lệ gia hạn** (số thuê bao gia hạn chia số đến hạn trong kỳ, đo hàng quý từ Quý 4 Năm 1) và **tỷ lệ chuyển đổi từ bậc miễn phí** (số tài khoản miễn phí nâng cấp chia tổng tài khoản miễn phí, đo hàng tháng). Bậc miễn phí không tạo doanh thu trực tiếp nhưng là kênh thu hút duy nhất của mô hình; nếu tỷ lệ chuyển đổi quá thấp thì hai dòng doanh thu không có nền để đứng.

Chi phí phục vụ giảm dần qua ba năm vì phần lớn chi phí máy chủ là cố định trong khi số thuê bao tăng. Đây là đặc tính kinh tế quan trọng nhất của kiến trúc đã chọn.

Hiện trạng thời gian tạo video phải đo trên quy trình thủ công trước mốc M1, nếu không lợi ích thứ nhất trở thành lời tuyên bố không kiểm chứng được.

## 3. Liên kết chiến lược

- **Dòng doanh thu định kỳ, dự báo được** — thuê bao thường niên thay vì bán đứt từng lần
- **Chi phí phục vụ tối thiểu** — máy chủ chỉ xác thực, không xử lý video
- **Khác biệt trên thị trường công cụ nội địa** — giá nội địa, nhanh hơn, không giới hạn độ dài, tiếng Việt tốt hơn
- **Giảm rủi ro pháp lý về dữ liệu cá nhân** — không thu thập, không lưu trữ nội dung người dùng
- **Tích luỹ năng lực và tài sản kỹ thuật cho Enticy Studios** — làm chủ mô hình dịch vụ thuê bao, tách mô-đun dùng lại

## 4. Thẩm định tài chính

Chi phí tách thành hai loại và không bao giờ cộng gộp, vì chúng trả lời hai câu hỏi khác nhau. Chi phí tiền mặt trả lời có cần huy động vốn không. Chi phí cơ hội của công sức — 450 giờ quy đổi 80.000 VND/giờ, không phải tiền chi ra — trả lời đội có nên dùng số giờ đó vào việc này thay vì việc khác.

Năm 0 tốn **3.500.000 VND tiền mặt**: tên miền năm đầu 300.000, tài sản đồ hoạ cho 5 mẫu 700.000, máy chủ ảo và chứng chỉ 600.000, phí khởi tạo và tích hợp cổng thanh toán 1.500.000, dự phòng 400.000; font chữ dùng giấy phép SIL OFL nên không tốn tiền. Cộng thêm **450 giờ công** quy đổi 36.000.000 VND.

Vận hành sau bàn giao tốn **6,5 / 15 / 28 triệu VND tiền mặt** cho Năm 1 đến Năm 3, gồm máy chủ và giám sát, phí cổng thanh toán khoảng 2,5% doanh thu, và tài sản đồ hoạ cho mẫu bổ sung. Kèm theo **260 / 480 / 800 giờ công** quy đổi 20,8 / 38,4 / 64 triệu VND — cao hơn một sản phẩm không có máy chủ vì phải cộng trực vận hành, xử lý thanh toán và hỗ trợ khách hàng có cam kết phản hồi.

Doanh thu đến từ hai bậc trả phí, tính theo số thuê bao đang hoạt động cuối mỗi năm đã trừ phần không gia hạn: bậc Cá nhân 100 / 320 / 650 thuê bao ở giá 599.000 VND/năm, bậc Doanh nghiệp 3 / 10 / 20 thuê bao ở giá 4.900.000 VND/năm, tổng **74,6 / 240,7 / 487,4 triệu VND**. Bậc miễn phí không tính vào đây.

Bảng dưới tính trên cơ sở kinh tế đầy đủ, tức đã cộng cả chi phí cơ hội của công sức, với tỷ lệ chiết khấu 12%/năm. Đơn vị: VND.

| Năm | Doanh thu | Chi phí tiền mặt | Chi phí công sức | Dòng ròng | Hệ số chiết khấu | Giá trị hiện tại | Luỹ kế |
| :-: | --: | --: | --: | --: | :-: | --: | --: |
| 0 | 0 | 3.500.000 | 36.000.000 | −39.500.000 | 1,0000 | −39.500.000 | −39.500.000 |
| 1 | 74.600.000 | 6.500.000 | 20.800.000 | +47.300.000 | 0,8929 | +42.232.143 | +2.732.143 |
| 2 | 240.680.000 | 15.000.000 | 38.400.000 | +187.280.000 | 0,7972 | +149.298.470 | +152.030.613 |
| 3 | 487.350.000 | 28.000.000 | 64.000.000 | +395.350.000 | 0,7118 | +281.402.321 | +433.432.934 |

Tách riêng hai vế: giá trị hiện tại của lợi ích là 605.361.870 VND, của chi phí là 171.928.936 VND. Kết quả: **NPV +433.432.934 VND** (ngưỡng: lớn hơn 0), **BCR 3,52** (ngưỡng: lớn hơn 1), **thời gian thu hồi vốn chiết khấu khoảng 0,94 năm** (ngưỡng: dưới 3 năm). Cả ba đều đạt. ROI và IRR không dùng để ra quyết định vì mẫu số quá nhỏ, chia bất cứ khoản lãi nào cho 3.500.000 cũng ra tỷ lệ khổng lồ.

Lợi ích phi tài chính không được quy đổi thành tiền: gán một con số VND cho "nội dung không rời khỏi tổ chức" sẽ là con số bịa. Chúng theo dõi bằng chỉ số riêng ở mục 2 và không đưa vào tử số của NPV hay BCR. Hệ quả là các chỉ tiêu trên đã là ước lượng thận trọng.

| Kịch bản | Hệ số doanh thu | NPV (VND) | BCR | Kết luận |
| :-- | :-: | --: | :-: | :-- |
| Bi quan | 50% | +130.751.999 | 1,76 | Vẫn hiệu quả rõ rệt |
| **Cơ sở** | **100%** | **+433.432.934** | **3,52** | **Khả thi** |
| Lạc quan | 150% | +736.113.869 | 5,28 | Rất hiệu quả |

Điểm hoà vốn ở hệ số 28%, tương đương khoảng 28 / 91 / 185 thuê bao Cá nhân và 1 / 3 / 6 thuê bao Doanh nghiệp trong ba năm. Biên an toàn 72% rộng, nhưng cần đọc đúng: nó rộng vì chi phí cố định thấp chứ không phải vì doanh thu chắc chắn. Kể cả ở kịch bản bi quan, dự án không lỗ tiền mặt; hậu quả của việc không đạt ngưỡng là công sức bỏ ra không thu lại giá trị tương xứng — nghiêm trọng nhưng khác bản chất so với thua lỗ tài chính.

Rủi ro thật nằm ngoài bảng độ nhạy. Hệ số trên giả định doanh thu giảm đều cả ba năm; kịch bản nguy hiểm hơn là Năm 1 đạt mục tiêu nhưng tỷ lệ gia hạn sụp ở Năm 2, khi đó chi phí đã tăng theo quy mô Năm 1 nhưng doanh thu không theo.

## 5. Lộ trình và điểm quyết định

- **Mốc M3 (tuần 8) và M4 (tuần 10)** — nghiệm thu tại mốc: hiển thị tiếng Việt, không giới hạn độ dài, đầu ra lặp lại được, nội dung không rời máy người dùng
- **Đóng dự án (tuần 15)** — đánh giá năng lực đội, tài sản tái sử dụng và mức giảm chi phí cho người dùng; bàn giao danh mục lợi ích
- **Quý 1 và Quý 2 Năm 1** — thuê bao trả phí đầu tiên, thuê bao Doanh nghiệp đầu tiên, chi phí phục vụ mỗi thuê bao bắt đầu đo được
- **Quý 4 Năm 1** — chu kỳ gia hạn đầu tiên, tỷ lệ gia hạn lần đầu đo được

**Điểm quyết định chính thức.** Nếu đến hết Quý 4 Năm 1 số thuê bao Cá nhân đang hoạt động dưới 28, **hoặc** tỷ lệ gia hạn dưới 50%, nhà tài trợ phải xem xét lại giá, hạn mức bậc miễn phí, hoặc chính giả định về nhu cầu thị trường. Đây là điểm quyết định, không phải cảnh báo mềm. Hai điều kiện được kiểm tra độc lập: đạt số thuê bao nhưng không giữ được họ cũng là tín hiệu hỏng, và nó hỏng theo cách khó cứu hơn.

## 6. Chủ sở hữu lợi ích

Cả ba thành viên đóng vai trò quản lý dự án, chia việc theo nghiệp vụ chứ không theo giai đoạn. Quyền sở hữu lợi ích đi theo chủ nghiệp vụ: ai thiết kế nghiệp vụ nào thì chịu trách nhiệm về lợi ích nghiệp vụ đó tạo ra.

- **Nguyễn Thế Chiến — chủ nghiệp vụ A, kiêm giám đốc dự án:** chịu trách nhiệm nhóm lợi ích sản xuất video và nhóm lợi ích xuyên nghiệp vụ; chịu trách nhiệm bàn giao danh mục lợi ích khi đóng dự án
- **Nguyễn Việt Quang — chủ nghiệp vụ B:** chịu trách nhiệm nhóm lợi ích đăng ký, cấp phép và thanh toán, gồm cả hai dòng doanh thu
- **Phạm Quang Anh — chủ nghiệp vụ C:** chịu trách nhiệm chi phí phục vụ mỗi thuê bao; thiết kế quy trình vận hành và đo lường để chuyển giao cho nhà tài trợ
- **Nhà tài trợ — đại diện Enticy Studios:** chịu trách nhiệm cuối cùng về nhóm lợi ích tài chính sau bàn giao và về việc vận hành máy chủ dịch vụ 3 năm; ra quyết định khi lợi ích chệch mục tiêu
- **Giảng viên hướng dẫn — Thầy Nguyễn Đình Quảng:** đánh giá về mặt học thuật, không chịu trách nhiệm về lợi ích kinh doanh

Trong 15 tuần dự án, chủ nghiệp vụ chịu trách nhiệm đo và nghiệm thu lợi ích tại các mốc. Sau bàn giao, trách nhiệm chuyển sang nhà tài trợ; chủ nghiệp vụ C là người soạn quy trình để việc chuyển giao đó thực hiện được.

Tại buổi đóng dự án ở tuần 15, Giám đốc dự án bàn giao cho Nhà tài trợ, có biên bản: danh mục lợi ích kèm trạng thái, số liệu hiện trạng đã đo, tài liệu vận hành máy chủ và quy trình khôi phục sự cố, lịch rà soát 3 năm tiếp theo. Không có biên bản thì lợi ích sau bàn giao không có ai theo dõi; không có tài liệu vận hành thì máy chủ không có ai giữ.

## 7. Giả định và rủi ro

Bốn giả định mà nếu sai thì toàn bộ kết quả ở mục 4 sai theo:

- Đạt 100 / 320 / 650 thuê bao Cá nhân và 3 / 10 / 20 thuê bao Doanh nghiệp — đây chính là biến số của phân tích độ nhạy
- Tỷ lệ gia hạn hằng năm từ 70% — quyết định toàn bộ doanh thu Năm 2 và Năm 3
- Người dùng chấp nhận mức giá 599.000 và 4.900.000 VND/năm
- Công sức vận hành 260 / 480 / 800 giờ mỗi năm — là mẫu số của BCR, thực tế cao hơn nhiều thì BCR tụt đáng kể

Rủi ro đối với việc hiện thực hoá lợi ích:

- **Bậc miễn phí thu hút người dùng nhưng không ai nâng cấp** — rủi ro lớn nhất của mô hình. Theo dõi tỷ lệ chuyển đổi từ tháng đầu; nếu thấp thì siết hạn mức bậc miễn phí hoặc điều chỉnh giá.
- **Tỷ lệ gia hạn dưới 50% ở chu kỳ đầu tiên** — doanh thu Năm 2 và Năm 3 sụp. Phỏng vấn khách hàng rời bỏ ngay từ trường hợp đầu tiên.
- **Máy chủ giấy phép ngừng hoạt động kéo dài** — giám sát tự động, mục tiêu hoạt động từ 99%/tháng, diễn tập quy trình khôi phục tại mốc M6.
- **Không ai theo dõi lợi ích sau khi dự án đóng** — biên bản bàn giao có chữ ký; lịch rà soát đặt sẵn trong lịch của nhà tài trợ.
- **Không đo hiện trạng thời gian tạo video trước khi phát triển** — đưa việc đo hiện trạng thành đầu ra bắt buộc của mốc M1.
- **Công sức vận hành thực tế vượt xa ước lượng** — ghi nhận giờ công thực tế từ tháng đầu, tính lại BCR mỗi quý.

## 8. Theo dõi hiện thực hoá

- **Rà soát tại mốc M3 và M4** — Giám đốc dự án chủ trì; đầu ra là trạng thái cập nhật của các lợi ích kỹ thuật
- **Rà soát đóng dự án, tuần 15** — Giám đốc dự án chủ trì; đầu ra là biên bản bàn giao danh mục lợi ích và tài liệu vận hành
- **Rà soát hàng tháng trong Năm 1** — Nhà tài trợ chủ trì; theo dõi doanh thu, số thuê bao, tỷ lệ chuyển đổi và thời gian hoạt động máy chủ, để phát hiện sớm trong khoảng mù 12 tháng trước khi đo được tỷ lệ gia hạn
- **Rà soát hàng quý, Năm 1 đến Năm 3** — Nhà tài trợ chủ trì; đầu ra là báo cáo hiện thực hoá lợi ích kèm NPV và BCR tính lại trên số thực đo
- **Rà soát điểm quyết định, hết Quý 4 Năm 1** — Nhà tài trợ chủ trì; đầu ra là một quyết định: tiếp tục, điều chỉnh giá, siết hạn mức miễn phí, hoặc dừng

Mỗi kỳ rà soát ghi cho từng lợi ích: mục tiêu kỳ này, thực đạt, chênh lệch, đánh giá, nguyên nhân, hành động, người chịu trách nhiệm và hạn hoàn thành. Ba mức đánh giá và cách xử lý bắt buộc: **đạt** thì ghi nhận, không cần hành động; **chệch dưới 20%** thì ghi nguyên nhân, đề ra hành động khắc phục và theo dõi ở kỳ sau; **chệch từ 20% trở lên** thì báo cáo nhà tài trợ trong 5 ngày làm việc và xem xét lại giả định gốc, nếu lệch hai kỳ liên tiếp thì phải ra quyết định về số phận sản phẩm. Mỗi kỳ rà soát phải kết thúc bằng một quyết định, không dừng ở việc báo cáo số.

Danh mục lợi ích được đóng khi mọi lợi ích đạt trạng thái đã hiện thực hoá hoặc không còn khả thi, và nhà tài trợ ký xác nhận báo cáo tổng kết cuối Năm 3. Trước đó, danh mục vẫn là tài liệu sống.

---

*Tài liệu liên quan: Business Case · Hợp đồng thực hiện dự án · Project Charter · Assumption Log.*
