# Kế hoạch hoàn thiện bài tập PromptVideo trong 2 tuần

**Bản đề xuất ngày 15/09/2026 — chờ Chiến duyệt.** Mục tiêu đã được chọn: bộ bài tập Quản lý dự án phần mềm hoàn chỉnh kèm demo tối thiểu. Đây là lịch làm bài của nhóm sinh viên, không thay thế lịch dự án giả định 24/08–06/12/2026 trong hồ sơ v2.1.

## 1. Kết luận đề xuất

Giữ Chiến phụ trách A, Việt Quang phụ trách B, Quang Anh phụ trách C xuyên suốt yêu cầu, kế hoạch, thực hiện, kiểm thử và báo cáo. Mỗi người viết phần nghiệp vụ của mình vào bộ tài liệu chung; người tổng hợp quản lý cấu trúc và liên kết, không viết lại thay cả nhóm.

Đề xuất làm từ **16/09 đến hết 29/09/2026**, họp khởi động tối 15/09. Năng lực đề xuất **20 giờ/người/tuần**, tổng 120 giờ: 108 giờ giao việc và 12 giờ đệm sửa lỗi. Đây là nhu cầu ước lượng, chưa phải cam kết của thành viên. Mức hiện có trong hồ sơ là 10 giờ/người/tuần, chỉ tương đương 60 giờ trong hai tuần; chưa đủ cơ sở cam kết cùng đầu ra ở mức đó.

Ước lượng sơ bộ theo đầu ra, độ tin cậy thấp đến trung bình do chưa có ứng dụng và chưa biết năng lực kỹ thuật từng người. Điều kiện: ba người dùng được công cụ soạn hồ sơ, có ít nhất một người tự triển khai được nguyên mẫu web, dùng lại mẫu soạn thảo hiện có. Rà lại công sức vào ngày 2 và ngày 5. Không coi phần đệm là bảo đảm chắc chắn hoàn thành.

## 2. Căn cứ đã kiểm tra

- README.vi.md: ba nghiệp vụ, cách kiểm tra chéo, phạm vi và hiện trạng repository.
- Business Case v2.1: kiến trúc cục bộ, thuê bao thường niên, ba nghiệp vụ, giới hạn nguồn lực.
- Benefit Management Plan v2.1: danh mục lợi ích, số liệu tài chính và trách nhiệm sau bàn giao.
- Project Charter v2.1, đặc biệt §3–5, §7, §10–11: mục tiêu, yêu cầu, mốc và phân công xuyên suốt nghiệp vụ.
- Assumption Log v2.1: rủi ro nguyên mẫu, trình duyệt, tích hợp thanh toán và cam kết thời gian.
- Stakeholder Register v1.0: tám bên liên quan; vai trò Enticy Studios là giả định, khác tên thật nhóm sinh viên.
- research/01_Quy_tac_bat_buoc.md và research/02_Kien_thuc_su_dung.md: cấu trúc, WBS, lịch, chi phí, rủi ro, chất lượng và kết thúc. File đối chiếu 03 chỉ là lịch sử nhận xét; không áp dụng máy móc.

Repository hiện có thay đổi chưa commit ở README.vi.md; Planning, Executing, Monitoring and Controlling, Closing chỉ có file giữ chỗ. Chưa thấy cấu hình ứng dụng chạy được. Không sử dụng archive để phục hồi nội dung.

## 3. Đầu ra phải có sau hai tuần

### Bộ hồ sơ

| Nhóm | Đầu ra đề xuất | Người tổng hợp | Người đóng góp |
| --- | --- | --- | --- |
| Pre-project và Initiating | Rà soát năm hồ sơ hiện có; bảng vấn đề và quyết định xử lý | Chiến | Cả ba |
| Planning — yêu cầu | Đặc tả A/B/C, quy tắc nghiệp vụ, luồng chính/ngoại lệ, ma trận truy vết RTM | Chiến | Mỗi người viết nghiệp vụ mình |
| Planning — phạm vi | Scope Statement, WBS đủ phạm vi v2.1, WBS Dictionary | Chiến | Mỗi người lập nhánh A/B/C |
| Planning — kế hoạch tổng | Project Management Plan; lịch công việc, phụ thuộc, Gantt, CPM; ngân sách theo thời gian | Chiến | Việt Quang chuẩn bị dữ liệu lịch và chi phí; Quang Anh kiểm tra |
| Planning — kế hoạch thành phần | Chất lượng, nguồn lực/RACI, truyền thông, stakeholder engagement, rủi ro, mua sắm và kiểm soát thay đổi | Quang Anh | Việt Quang làm rủi ro/mua sắm; Chiến chịu trách nhiệm quy trình thay đổi |
| Executing | Nhật ký công việc và giờ thực tế, biên bản họp, demo, hướng dẫn chạy và sử dụng | Quang Anh | Mỗi người nộp bằng chứng nghiệp vụ mình |
| Monitoring and Controlling | Báo cáo tiến độ, Issue Log, Change Log, Risk Register cập nhật, báo cáo kiểm thử; ví dụ EVM có nguồn số liệu | Việt Quang | Cả ba |
| Closing | Báo cáo tổng kết, bài học kinh nghiệm, danh mục bàn giao, đánh giá phạm vi đã đạt/chưa đạt | Quang Anh | Cả ba; Chiến rà tổng thể |
| Bảo vệ | Slide ngắn, kịch bản demo, bộ câu hỏi và câu trả lời | Quang Anh | Mỗi người trình bày nghiệp vụ mình |

Các kế hoạch thành phần có thể là mục trong Project Management Plan, các sổ có thể là tab trong một workbook. Không cần tạo một file riêng cho mỗi thuật ngữ. Đối chiếu danh mục nộp thực tế của lớp ngay ngày 1; danh mục trên là đề xuất dựa trên research, chưa phải xác nhận của giảng viên.

Hồ sơ sản phẩm vẫn mô tả đầy đủ phạm vi v2.1. RTM ghi rõ phần nào đã demo, phần nào chưa triển khai/chưa kiểm thử. Kết thúc đợt làm bài không có nghĩa là nghiệm thu sản phẩm v1.0 theo Charter. Hồ sơ nghiệm thu toàn sản phẩm chỉ chuẩn bị biểu mẫu khi chưa đủ điều kiện. Tình huống mô phỏng phải được ghi nhãn; không điền chữ ký giả hoặc tạo số liệu thực tế giả. Lợi ích ba năm và uptime 30 ngày tiếp tục là mục tiêu theo dõi.

### Demo tối thiểu đề xuất

1. **A:** nhập chữ tiếng Việt và ảnh cục bộ, chọn một mẫu, xem trước, tạo video 5 cảnh/60 giây và xuất MP4 bằng WebCodecs trên một môi trường Chrome/Edge được ghi rõ phiên bản. Ghi thời gian thực đo, không tuyên bố đạt mọi chỉ tiêu hiệu năng của Charter.
2. **B:** đăng nhập bằng tài khoản thử; máy chủ kiểm quyền trước khi xuất, lưu hạn mức; ba lượt miễn phí có watermark/720p, lượt thứ tư bị chặn. Dữ liệu hạn mức còn sau khi khởi động lại máy chủ. Thể hiện gói năm và trạng thái hết hạn; dùng sự kiện thanh toán giả lập có nhãn để minh họa kích hoạt quyền Cá nhân và đầu ra 1080p không watermark. Chỉ quản trị viên thử nghiệm được kích hoạt sự kiện đó.
3. **C:** quản trị viên đưa mẫu vào danh mục để A sử dụng, kiểm tra quyền truy cập trang quản trị; xem tình trạng máy chủ và số lượt xuất không chứa nội dung; ghi một yêu cầu hỗ trợ và minh họa hướng xử lý sự cố.
4. **Tích hợp:** dữ liệu cảnh, ảnh và MP4 ở máy người dùng; máy chủ chỉ nhận dữ liệu tài khoản/quyền/hạn mức cần thiết. Kiểm tra request và log trong kịch bản thử để chứng minh ranh giới này trong phạm vi đã kiểm thử.

Một mẫu và thanh toán giả lập là **phạm vi trình diễn** được đề xuất, không sửa yêu cầu 5 mẫu, thanh toán thật, VAT, 5 chỗ hay các tiêu chí đa trình duyệt trong hồ sơ v2.1. Những phần chưa làm phải còn trong đặc tả và danh mục tồn đọng. Không thêm AI, âm thanh, khung dọc hoặc tính năng mới. Không giao việc rà soát license phần mềm theo quyết định của Chiến.

## 4. Bảng giao việc để duyệt

Ngày 1 = 16/09. Giờ là công sức riêng của người được giao. Đây là **danh sách hoạt động điều hành**, không phải WBS; hoạt động dưới 8 giờ không thay thế gói WBS theo quy tắc 8/80.

| ID | Người làm | Ngày | Giờ | Việc và đầu ra | Phụ thuộc | Tiêu chí hoàn thành |
| --- | --- | --- | ---: | --- | --- | --- |
| A1 | Chiến | 1–2 | 4 | Đặc tả A, tiêu chí demo; danh mục hồ sơ và vấn đề cần xử lý | Họp khởi động | Có yêu cầu, luồng lỗi, phân biệt demo/v1.0; kiểm danh mục nộp |
| B1 | Việt Quang | 1–2 | 4 | Đặc tả B: tài khoản, gói năm, quyền, hạn mức, thanh toán/gia hạn | Họp khởi động | Bảng quyền và trạng thái; quy tắc xuất lỗi, xuất đồng thời, tính lại hạn mức |
| C1 | Quang Anh | 1–2 | 4 | Đặc tả C: mẫu, quyền quản trị, giám sát, hỗ trợ, đo lợi ích | Họp khởi động | Có tác nhân, luồng và tiêu chí; danh mục vấn đề hồ sơ hiện tại |
| A2 | Chiến | 3–4 | 6 | Chốt cấu trúc cảnh và giao tiếp A–B/A–C; tổng hợp scope, WBS, dictionary | A1, B1, C1 | B/C xác nhận giao tiếp; WBS có quản lý dự án và đủ phạm vi v2.1 |
| B2 | Việt Quang | 3–4 | 6 | Lập dữ liệu hoạt động, phụ thuộc, ước lượng, chi phí A/B/C; bản tính lịch và ngân sách | A1, B1, C1; chốt sau A2 | Có cơ sở ước lượng, không lẫn tiền mặt/giờ; dữ liệu sẵn cho CPM |
| C2 | Quang Anh | 3–4 | 6 | Kế hoạch chất lượng, RACI, truyền thông, stakeholder; bộ test và dữ liệu mẫu | A1, B1, C1 | Mỗi việc có một accountable; ca thử gắn yêu cầu; mẫu trao đổi thống nhất |
| A3 | Chiến | 5–6 | 6 | Tổng hợp PM Plan, WBS, CPM, ngân sách; quy trình thay đổi và rà khởi tạo | A2, B2, C2 | Không thiếu chủ đầu ra; lịch cân đối nguồn lực; các chỗ lệch nguồn được ghi quyết định |
| B3 | Việt Quang | 5–6 | 6 | Risk Register, P&I/ứng phó; phần mua sắm; khung báo cáo và EVM | B2, C2 | Rủi ro có chủ/trigger; dự phòng có căn cứ; số mô phỏng có nhãn |
| C3 | Quang Anh | 5–6 | 6 | Rà chéo Planning, RTM và tiêu chí nghiệm thu; tổ chức dữ liệu/bằng chứng | A2, B2, C2 | RTM liên kết yêu cầu–thiết kế–module–test; có danh sách lỗi cần sửa |
| A4 | Chiến | 7–10 | 12 | Làm và ghép demo A: editor, preview, WebCodecs/MP4 và kiểm quyền xuất | A2; nguyên mẫu A3; giao tiếp với B4/C4 | Video thử phát được; đúng watermark/độ phân giải; nội dung không gửi lên máy chủ |
| B4 | Việt Quang | 7–10 | 12 | Làm demo B: đăng nhập, quyền, hạn mức lưu bền, mô phỏng thanh toán | B1, A2 | Lượt 4 bị chặn; hết hạn xử lý đúng; gửi sự kiện trùng không cấp trùng |
| C4 | Quang Anh | 7–10 | 12 | Làm demo C: mẫu dùng bởi A, trang quản trị, health, nhật ký và hỗ trợ | C1, A2 | Mẫu chạy trong A; người thường bị chặn quản trị; log không chứa nội dung |
| A5 | Chiến | 11–12 | 4 | Kiểm tra C; sửa A; ghép báo cáo dự án và dữ liệu nguồn | A4, B4, C4 | Luồng chung chạy được; nhận xét C có bằng chứng; sửa điểm lệch tổng thể |
| B5 | Việt Quang | 11–12 | 4 | Kiểm tra A, thử chặn quyền và dò dữ liệu mạng; tổng hợp báo cáo kiểm soát | A4, B4, C4 | Có kết quả đạt/lỗi/chưa thử, môi trường và file bằng chứng; cập nhật RTM |
| C5 | Quang Anh | 11–12 | 4 | Kiểm tra B; tổng hợp hướng dẫn, báo cáo kết thúc đợt và bàn giao | A4, B4, C4 | Phân biệt kết thúc bài tập/nghiệm thu v1.0; có tồn đọng và người tiếp nhận |
| A6 | Chiến | 13–14 | 4 | Rà bộ nộp, xác nhận phần B, tập bảo vệ phần A và điều phối | A5, B5, C5 | Dẫn chiếu đúng; mọi lỗi quan trọng có kết luận; chạy thử từ hướng dẫn |
| B6 | Việt Quang | 13–14 | 4 | Sửa workbook/công thức, xác nhận C, tập bảo vệ B | A5, B5, C5 | Công thức kiểm được; số liệu có nguồn; giải thích hạn mức/thanh toán |
| C6 | Quang Anh | 13–14 | 4 | Đóng gói, kiểm trình bày DOCX/XLSX, slide; xác nhận A, tập bảo vệ C | A5, B5, C5 | Mở được tất cả file, không lỗi bố cục; có mục lục bộ nộp và kịch bản demo |

Mỗi người: **36 giờ giao việc + 4 giờ đệm = 40 giờ/2 tuần**. Tuần 1 (ngày 1–7): 16 giờ A1–A3/B1–B3/C1–C3 và tối đa 4 giờ bắt đầu demo. Tuần 2: 8 giờ demo còn lại, 8 giờ kiểm tra/đóng gói và 4 giờ đệm. Họp, đọc chéo và ghi nhật ký tính trong các dòng trên, không coi là thời gian miễn phí.

Trong A3 dành tối đa 2 giờ thử sớm đường WebCodecs → MP4 để phát hiện rủi ro trước khi viết UI. Nếu thất bại, rà lại phạm vi/nguồn lực demo ngay ngày 5; không đợi ngày 10. Các việc B3 và C3 hỗ trợ đọc chéo bộ chung theo đúng vòng kiểm tra.

## 5. Mốc kiểm soát và cách điều hành

| Mốc nội bộ | Hạn | Bằng chứng phải thấy |
| --- | --- | --- |
| Chốt yêu cầu | 17/09, ngày 2 | Đặc tả A/B/C; danh mục đầu ra; cam kết giờ; phạm vi demo được duyệt |
| Chốt giao tiếp | 19/09, ngày 4 | Cấu trúc cảnh/mẫu và API quyền xuất có ví dụ dùng chung |
| Rà khả thi | 20/09, ngày 5 | Thử WebCodecs/MP4; ước lượng còn lại và xử lý tắc nghẽn |
| Chốt bản Planning đầu | 21/09, ngày 6 | Scope, WBS/dictionary, RTM, lịch/CPM, ngân sách, các kế hoạch thành phần |
| Demo tích hợp | 25/09, ngày 10 | Đăng nhập → nhập nội dung → hỏi quyền → MP4 → lượt 4 bị chặn; mẫu từ C |
| Chốt nội dung | 27/09, ngày 12 | Kết quả test, log, báo cáo, danh mục phần chưa đạt |
| Sẵn sàng nộp | 29/09, ngày 14 | Bộ file mở được, hướng dẫn chạy lại, slide và buổi diễn tập |

Chuỗi phụ thuộc cần bảo vệ: yêu cầu → giao tiếp chung → demo A/B/C → kiểm thử tích hợp → bằng chứng/báo cáo → diễn tập. Đây là chuỗi ưu tiên điều hành; CPM chính thức cần tính từ lịch hoạt động và nguồn lực, không tuyên bố đường găng chỉ từ danh sách này.

Mỗi ngày mỗi người cập nhật: đã làm gì, link đầu ra, số giờ thực tế, vướng gì, việc tiếp theo. Quá 24 giờ bị chặn hoặc dự kiến vượt giờ quá 20% thì báo Chiến. Ngày 2, 6, 10, 12 và 14 họp ngắn gắn với đầu ra. Mỗi thời điểm mỗi người chỉ giữ một việc chính đang làm.

Trạng thái dùng chung: Chưa bắt đầu → Đang làm → Chờ kiểm tra → Cần sửa → Chờ xác nhận → Hoàn thành. Người kiểm tra/người xác nhận theo Charter: A = Việt Quang/Quang Anh; B = Quang Anh/Chiến; C = Chiến/Việt Quang. Tài liệu tổng hợp do Chiến tạo được Việt Quang kiểm tra và Quang Anh xác nhận. Đây là xác nhận nội bộ nhóm, không thay chữ ký sponsor hoặc đánh giá của giảng viên.

Đến ngày 10, dừng thêm tính năng; dùng ngày 11–14 để sửa, kiểm chứng và đóng gói. Nếu chưa đủ năng lực, giữ hồ sơ, ranh giới dữ liệu và luồng xuất cốt lõi; trình Chiến điều chỉnh phạm vi demo hoặc giờ công. Không tự đánh dấu đạt các yêu cầu chưa thực hiện.

## 6. Vấn đề hồ sơ cần giải quyết trong đợt

1. Business Case/Charter liệt kê khả thi về nguồn lực thay cho kinh tế; research yêu cầu đúng năm khía cạnh. Ghi đề xuất chỉnh cấu trúc, giữ mô hình và số liệu nguồn v2.1.
2. Thẩm định tài chính hiện nằm trong Benefit Management Plan, khác hướng dẫn research. Trong khi chưa có quyết định sửa hồ sơ, tiếp tục dẫn nguồn BMP; không tự di chuyển hoặc nhân bản bảng tính.
3. Assumption Log dùng sáu cột và trạng thái Mở, khác mẫu năm cột/ba trạng thái trong research. Lập ánh xạ khi chuẩn hóa, giữ mã và dữ liệu hiện có.
4. Stakeholder Register có Nguyễn Thế Chiến ở ô PM đầu bảng, nhưng Lê Hoàng Nam là PM giả định trong danh sách và Charter. Làm rõ nhãn vai trò sinh viên/nhân vật giả định.
5. Charter ghi tên giảng viên Nguyễn Đình Quảng ở đầu và Bùi Trọng Nghĩa ở phần ký; xác minh nguồn lớp trước khi thống nhất.
6. Charter kiểm tiếng Việt cả ngang/dọc nhưng khung dọc nằm ngoài phạm vi; ghi vấn đề nhất quán để chốt phạm vi kiểm thử, không tự thêm tính năng dọc.
7. M1 dự kiến 13/09 đã qua nhưng repository chưa có đầu ra chính thức của mốc này. Ghi là chưa tìm thấy bằng chứng, không suy ra đã hoàn thành hoặc tự ghi ngày hoàn thành.

## 7. Nội dung họp tối nay và quyết định cần duyệt

Buổi họp 45 phút: 5 phút thống nhất đầu ra; 10 phút xem phạm vi demo và danh mục hồ sơ; 15 phút mỗi người nhận việc và xác nhận giờ/năng lực; 10 phút chốt A–B/A–C và các mốc; 5 phút đọc lại quyết định, chủ việc và đầu ra ngày 2.

Đề nghị Chiến duyệt **phạm vi demo, bảng phân công, lịch 16–29/09 và mức 20 giờ/người/tuần** hoặc cung cấp mức giờ thực tế để cân lại. Phạm vi đầu ra “bộ bài tập hoàn chỉnh và demo tối thiểu” đã được xác nhận. Sau khi duyệt, chuyển danh sách hoạt động này thành sheet theo dõi có chủ việc, người kiểm tra/xác nhận, hạn, giờ kế hoạch/thực tế, trạng thái, phụ thuộc và link bằng chứng.
