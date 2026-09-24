# Feedback và giao việc đã chốt — họp ngày 24/09/2026

Các phương án đã được quyết định theo ủy quyền của bạn; nhóm dùng thống nhất hệ mã và người tổng hợp dưới đây. Phần sửa nội dung tài liệu đã thực hiện. Các việc cần chạy thực tế, cung cấp giờ công hoặc thành viên trực tiếp review được ghi rõ trong từng đầu việc.

## Quyết định áp dụng

- **Nguyễn Thế Chiến:** module A; PMP, yêu cầu, giao tiếp, phạm vi, WBS, RTM và tổng kết.
- **Nguyễn Việt Quang:** module B; lịch, CPM, chi phí, rủi ro, actual và EVM.
- **Phạm Quang Anh:** module C; chất lượng, nguồn lực, truyền thông và đóng gói.
- Dùng WBS sáu giai đoạn; nhánh xây dựng A là 4.2, B là 4.3, C là 4.4. REQ/NF/QT/TC/R có tiền tố module; mã Charter giữ nguyên. P03 sở hữu TC-I.
- Giữ toàn bộ phạm vi. Forecast 599 giờ dẫn tới CR-G-001 để điều chỉnh lịch/nguồn lực; không ép về 450/495 giờ. Trần tiền mặt vẫn là 3.5 triệu đồng.
- Lịch hồ sơ: DOC-01 ngày 26/09, DOC-02 ngày 29/09, DOC-03 ngày 02/10, DOC-04 ngày 05/10, DOC-05 ngày 07/10. Năng lực 10 giờ/người/tuần là giả định; mỗi người cần cung cấp thời gian thực tế có thể dành cho dự án.

Nguồn hiện hành: [Mục lục hồ sơ](md-docs/00_Muc_luc_va_chi_dan_ho_so.md), [quyết định và mã](md-docs/00_Quyet_dinh_va_quy_uoc_ma.md), [bằng chứng](evidence/INDEX.md). “Đã sửa tài liệu” không đồng nghĩa sản phẩm đã hoàn thành hoặc thành viên đã ký review.

## Nguyễn Thế Chiến — module A

### CV-A-01 — Chốt cấu trúc, mã và mẫu

- **Tại sao phải làm:** Các mã riêng trước đây không nối được khi ghép.
- **Đã sửa:** Danh mục mã, bảng ánh xạ, T0–T2 và G0 đã cập nhật.
- **Yêu cầu tiếp theo:** Duy trì một nguồn hiện hành khi có thay đổi.
- **Đầu ra đối chiếu:** G0/DEC/T0–T2.

### CV-A-02 — Hoàn thiện đầu vào A

- **Tại sao phải làm:** Trạng thái mã/test và nghĩa của baseline phải đúng căn cứ.
- **Đã sửa:** A_01/A_02 dùng WBS chung; ghi ISS-G-001/002 và thay đổi kỳ vọng TC có lịch sử.
- **Yêu cầu tiếp theo:** Sửa sản phẩm theo ISS rồi kiểm lại; sửa tài liệu chưa phải sửa mã.
- **Đầu ra đối chiếu:** A_01/A_02.

### CV-A-03 — Chốt giao tiếp A–B–C

- **Tại sao phải làm:** Quota, mẫu và hỗ trợ phải tuân theo cùng một hành vi.
- **Đã sửa:** P03 chốt 3 IF, TC-I-01–06, hiện trạng, hành vi đích và ngoại lệ.
- **Yêu cầu tiếp theo:** Chiến phối hợp Việt Quang/Quang Anh triển khai phần còn lệch và thu bằng chứng.
- **Đầu ra đối chiếu:** P03.

### CV-A-04 — Ghép yêu cầu, phạm vi và WBS

- **Tại sao phải làm:** Cần tránh bỏ sót hoặc tính hai lần các gói khi ghép.
- **Đã sửa:** P02/P04/P05 có đủ A/B/C; 32 gói, tổng 599 giờ.
- **Yêu cầu tiếp theo:** Cập nhật đồng thời các tài liệu khi REQ hoặc gói công việc thay đổi.
- **Đầu ra đối chiếu:** P02/P04/P05.

### CV-A-05 — Hoàn thiện RTM và PMP

- **Tại sao phải làm:** Cần nối yêu cầu với kế hoạch và cách kiểm chứng.
- **Đã sửa:** P01 và P09 đã ghép 65 REQ/NF, có trạng thái và nguồn rõ.
- **Yêu cầu tiếp theo:** Review cùng chủ module; giữ đúng trạng thái nếu baseline chưa được duyệt.
- **Đầu ra đối chiếu:** P01/P09.

### CV-A-06 — Bổ sung bằng chứng A và tích hợp

- **Tại sao phải làm:** Unit test hoặc mock chưa chứng minh tích hợp máy chủ thật hay chỉ tiêu Charter.
- **Đã sửa:** EV-001 ghi 79/79 unit test đạt; A_03/A_04 và EV INDEX ghi nguồn, giới hạn.
- **Yêu cầu tiếp theo:** Bổ sung TC-I/HAR, 1080p, bộ nhớ, 3 máy, 134 tổ hợp, 100 lần xuất, 10 người thử và coverage.
- **Đầu ra đối chiếu:** A_03/A_04/E/M.

### CV-A-07 — Kiểm tra chéo C

- **Tại sao phải làm:** Chủ module không tự xác nhận toàn bộ đầu ra của mình.
- **Đã sửa:** Codex đã rà nội dung C, đồng bộ phạm vi, IF và mã.
- **Yêu cầu tiếp theo:** Chiến review độc lập, ghi nhận xét và kiểm lại phần sửa lỗi.
- **Đầu ra đối chiếu:** C_01–05/P06/P07.

### CV-A-08 — Tổng kết và rà bộ nộp

- **Tại sao phải làm:** Báo cáo phải phân biệt kết quả thực tế với kế hoạch.
- **Đã sửa:** C01 và bộ Closing dự thảo có nguồn, tồn đọng; G1 là bản Markdown đọc liền mạch.
- **Yêu cầu tiếp theo:** Chốt sau review của thành viên; xuất định dạng nộp và lập biên bản nghiệm thu khi đủ điều kiện.
- **Đầu ra đối chiếu:** G1/C01–04.

## Nguyễn Việt Quang — module B

### CV-B-01 — Tách B thành đầu vào chuẩn

- **Tại sao phải làm:** Bản dài cũ khó ghép và có mã trùng.
- **Đã sửa:** Đã tách B_01/B_02; bản ghi cũ được đánh dấu lịch sử.
- **Yêu cầu tiếp theo:** Duy trì 5 file B và sửa từ nguồn module.
- **Đầu ra đối chiếu:** B_01/B_02.

### CV-B-02 — Sửa quy tắc và giao tiếp B

- **Tại sao phải làm:** Reserve, hết hạn, cancel và giả lập phải khớp API cùng các module.
- **Đã sửa:** Đã chốt QT-B, IF-AB/CB, TTL, UsagePeriod và điều kiện non-Production.
- **Yêu cầu tiếp theo:** Sửa phần complete/checkout/hỗ trợ còn thiếu; thử kỳ sử dụng tháng cũ và retry.
- **Đầu ra đối chiếu:** B_01/P03.

### CV-B-03 — Bổ sung hoạt động và ước lượng B

- **Tại sao phải làm:** PolicySeats=5 chưa đồng nghĩa đã có tính năng quản lý 5 chỗ.
- **Đã sửa:** Có 6 gói, tổng 128⅔ giờ; 12 hoạt động WP gồm 80⅔ giờ; hóa đơn/seats là 48 giờ PP.
- **Yêu cầu tiếp theo:** Phân rã PP và thu ETC thực tế; không ép về 60 giờ cũ.
- **Đầu ra đối chiếu:** B_02/P10.

### CV-B-04 — Sửa dự phòng và phương pháp rủi ro

- **Tại sao phải làm:** Điểm P×I khác EMV; dự phòng không được trùng phần đã tính trong ước lượng gốc.
- **Đã sửa:** P08/P13 dùng thang chung; 33.4 giờ của B là mức dự phòng đề xuất chưa duyệt.
- **Yêu cầu tiếp theo:** Rà rủi ro còn lại và O/M/P trước khi phê duyệt; theo dõi dấu hiệu kích hoạt.
- **Đầu ra đối chiếu:** P08/P13.

### CV-B-05 — Tổng hợp lịch, CPM và ngân sách

- **Tại sao phải làm:** Lịch phải xét phụ thuộc và năng lực nguồn lực, không chỉ cộng giờ.
- **Đã sửa:** P10/P11 có công thức, CPM và san bằng nguồn lực; tách PP, tiền mặt và dự phòng.
- **Yêu cầu tiếp theo:** Thu actual/ETC và xử lý CR-G-001 để có lịch cam kết.
- **Đầu ra đối chiếu:** P10/P11.

### CV-B-06 — Ghi kết quả B và actual

- **Tại sao phải làm:** Không được lấy giờ kế hoạch làm giờ thực tế hoặc tự đặt chi phí thực tế AC=0.
- **Đã sửa:** Đã lập B_03/B_04, E05, M03/M04; EV-002 ghi 18 ca đạt và 42 ca thất bại do môi trường.
- **Yêu cầu tiếp theo:** Khôi phục Docker, chạy lại integration; mỗi người ghi work log có nguồn.
- **Đầu ra đối chiếu:** B_03/B_04/E05/M03/M04.

### CV-B-07 — Kiểm tra chéo A

- **Tại sao phải làm:** Cần người ngoài module A đối chiếu TC với hành vi thực tế.
- **Đã sửa:** Codex đã rà tài liệu, ghi vấn đề và giới hạn của unit test.
- **Yêu cầu tiếp theo:** Việt Quang kiểm thử chéo A, ghi kỳ vọng, kết quả thực tế, EV và kết quả thử lại.
- **Đầu ra đối chiếu:** A_01–05/M05.

### CV-B-08 — Chốt số liệu và bàn giao B

- **Tại sao phải làm:** Báo cáo cuối không được dùng forecast như số đã chi.
- **Đã sửa:** B_05 và sổ chi phí/bàn giao ghi rõ trạng thái chưa có actual.
- **Yêu cầu tiếp theo:** Đối soát nhật ký, chứng từ; chốt tồn đọng và người tiếp nhận.
- **Đầu ra đối chiếu:** B_05/P11/C02.

## Phạm Quang Anh — module C

### CV-C-01 — Tách C và sửa phạm vi

- **Tại sao phải làm:** Audio/video và việc viết lại TC-A làm lệch Charter.
- **Đã sửa:** Đã tách C_01/C_02, bỏ nội dung ngoài phạm vi, giữ 5 cảnh/60 giây.
- **Yêu cầu tiếp theo:** Cập nhật theo REQ-C; không tự định nghĩa lại TC của module khác.
- **Đầu ra đối chiếu:** C_01/C_02.

### CV-C-02 — Chốt mẫu, Admin và hỗ trợ

- **Tại sao phải làm:** Retired, phiên bản và điều chỉnh quota phải thống nhất.
- **Đã sửa:** QT-C, IF-CA/CB khớp P03; endpoint đích chưa có được ghi rõ.
- **Yêu cầu tiếp theo:** Phối hợp A/B triển khai snapshot, bộ kiểm tra phiên bản và hỗ trợ.
- **Đầu ra đối chiếu:** C_01/P03.

### CV-C-03 — Sửa RTM và ca thử C

- **Tại sao phải làm:** Không thể nghiệm thu bằng mã mục tiêu không có trong nguồn.
- **Đã sửa:** Đã đối chiếu 12 REQ/NF, 21 TC-C, health/ticket và LI-01–05.
- **Yêu cầu tiếp theo:** Chạy TC-C thực tế và gắn EV; chưa chạy thì giữ Not Run.
- **Đầu ra đối chiếu:** C_01/P09.

### CV-C-04 — Bổ sung hoạt động, ước lượng và rủi ro

- **Tại sao phải làm:** Cần phân tích đầu ra thay vì chia đều số giờ.
- **Đã sửa:** C có 72 giờ: 36 giờ WP và 36 giờ PP cho hỗ trợ/UI; dự phòng đề xuất là 12.8 giờ.
- **Yêu cầu tiếp theo:** Phân rã PP; loại phần quá tải 8.4 giờ bị tính trùng và rà O/M/P trước khi cộng dự phòng.
- **Đầu ra đối chiếu:** C_02/P10/P13.

### CV-C-05 — Tổng hợp chất lượng

- **Tại sao phải làm:** QA kiểm quy trình; QC kiểm sản phẩm; nghiệm thu là bước xác nhận riêng.
- **Đã sửa:** P06, E04, M02/M05 phân biệt ba lớp, bằng chứng và ngưỡng.
- **Yêu cầu tiếp theo:** Điều phối đủ phép thử theo Charter và cung cấp kết quả QC cho M06.
- **Đầu ra đối chiếu:** P06/E04/M02/M05.

### CV-C-06 — Sửa RACI, nguồn lực và truyền thông

- **Tại sao phải làm:** Mỗi việc cần một người chịu trách nhiệm cuối cùng (A), vòng review và năng lực rõ.
- **Đã sửa:** P07/P12 đúng vai trò; 10 giờ/người/tuần là giả định; đã chọn các mốc DOC.
- **Yêu cầu tiếp theo:** Xác nhận lịch rảnh thực tế và ghi kết quả cuộc họp vào E02.
- **Đầu ra đối chiếu:** P07/P12/E02.

### CV-C-07 — Hoàn thiện bằng chứng C

- **Tại sao phải làm:** Số đếm metrics hoặc health riêng lẻ chưa chứng minh lợi ích hay uptime.
- **Đã sửa:** C_03/C_04 ghi đúng API đã có, phần còn thiếu và EV.
- **Yêu cầu tiếp theo:** Thu bằng chứng API/UI/audit, đo LI/uptime đúng nguồn và kỳ đo; không giả lập doanh thu.
- **Đầu ra đối chiếu:** C_03/C_04/EV.

### CV-C-08 — Kiểm tra chéo B

- **Tại sao phải làm:** Cần kiểm cả ngoại lệ thanh toán và quota.
- **Đã sửa:** Đã có hợp đồng và ca thử để review.
- **Yêu cầu tiếp theo:** Quang Anh kiểm B khi môi trường sẵn sàng, ghi kết quả và thử lại sau sửa.
- **Đầu ra đối chiếu:** B_01–05/M05.

### CV-C-09 — Gom bàn giao, bài học và trình bày

- **Tại sao phải làm:** Bộ nộp phải nhất quán và công khai phần còn thiếu.
- **Đã sửa:** Đã soạn C_05, C02–04, G0/G1; nội dung demo có điều kiện chạy rõ.
- **Yêu cầu tiếp theo:** Review hình thức, bản xuất và việc tiếp nhận; không ký nghiệm thu trước khi QC đủ điều kiện.
- **Đầu ra đối chiếu:** C_05/C02–04/G0/G1.

## Việc cần nhận ngay trong cuộc họp

Mỗi người nhận 5 file module của mình, xem công việc còn lại, ghi ETC và thời gian thực tế có thể làm. Việt Quang ưu tiên môi trường Docker và dữ liệu lịch; Chiến phối hợp sửa complete/snapshot; Quang Anh chuẩn bị ca thử và nhận bằng chứng. Vòng review: Việt Quang kiểm A, Quang Anh kiểm B, Chiến kiểm C.

Frontend đã đạt 79 unit test; backend có 18 ca đạt và 42 ca thất bại do môi trường. Chưa đủ TC-I/HAR và các phép đo theo Charter. Mỗi đầu việc chỉ được đóng theo đúng loại đầu ra: tài liệu được review, sản phẩm có TC/EV, nghiệm thu có xác nhận của người đúng thẩm quyền.
