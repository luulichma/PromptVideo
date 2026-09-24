# Nhận xét và phân công sửa, thiết kế tài liệu

**Phạm vi:** chỉnh nội dung, cách diễn đạt, bố cục, bảng biểu, số liệu và cách ghép hồ sơ. Các đầu việc dưới đây dành cho việc viết và sửa tài liệu; không giao lập trình, chạy thử phần mềm hoặc xử lý môi trường kỹ thuật.

**Cách làm:** sửa trên các bản đã được chuẩn hóa, giữ hệ mã đã chốt. Mỗi người hoàn thiện phần mình phụ trách, sau đó ghép vào tài liệu chung. Chỗ chưa có thông tin phải ghi rõ còn thiếu và ai cần cung cấp.

## 1. Những điểm cả nhóm cần thống nhất khi viết

| Nội dung | Cách áp dụng |
| --- | --- |
| Viết để người ngoài nhóm hiểu | Mở đầu mỗi tài liệu bằng một đoạn ngắn: tài liệu này nói về việc gì, phục vụ ai và dùng để làm gì. |
| Dùng tiếng Việt dễ hiểu | Ưu tiên “phạm vi”, “ước lượng công sức”, “kế hoạch tiến độ”, “kiểm tra chéo”, “bằng chứng”, “bàn giao”. Thuật ngữ nước ngoài chỉ giữ khi cần đối chiếu nguồn hoặc tên trong phần mềm; giải thích ngay lần đầu. |
| Giữ mã để nối các tài liệu | Không đổi mã yêu cầu, công việc, tình huống kiểm thử hoặc rủi ro tùy ý. Khi nhắc mã, viết kèm tên ngắn để người đọc không phải mở nhiều file mới hiểu. |
| Tách kế hoạch với kết quả | “Dự kiến làm”, “đã có bản nháp”, “đã kiểm tra” và “đã được chấp nhận” phải được ghi riêng. Có tài liệu chưa có nghĩa công việc trong tài liệu đã hoàn thành. |
| Mỗi số liệu có nguồn | Ghi số liệu lấy từ đâu, thời điểm nào, đơn vị gì. Không dùng giờ ước lượng thay cho giờ đã làm; thiếu số liệu thì ghi “chưa có dữ liệu”. |
| Một nội dung có một nơi sửa chính | Chủ phần sửa tại tài liệu của mình trước. Người tổng hợp cập nhật bản ghép từ đó, tránh hai bản cùng tên nhưng khác nội dung. |

**Phân công giữ nguyên:** Chiến phụ trách A — sản xuất video; Việt Quang phụ trách B — tài khoản và thuê bao; Quang Anh phụ trách C — quản trị và vận hành.

## 2. Nguyễn Thế Chiến — sửa phần A và ghép nội dung chung

### Nhận xét

Phần A đã có nhiều nội dung chi tiết, gồm yêu cầu, cách kiểm tra và công sức dự kiến. Khi ghép vào báo cáo, cần làm rõ thứ tự đọc và giảm những đoạn chỉ nêu mã hoặc tên kỹ thuật. Phần quan trọng nhất là giúp người đọc hiểu yêu cầu nào thuộc phạm vi đầy đủ, yêu cầu nào chỉ được trình diễn và nội dung nào chưa có đủ căn cứ kết luận.

### Việc 1 — Làm rõ phần mở đầu và ranh giới của tài liệu A

- **Cần sửa:** ở đầu hai file A_01 và A_02, viết rõ A phụ trách việc gì; file nào mô tả yêu cầu, file nào mô tả công việc và ước lượng. Trình bày riêng phạm vi đầy đủ, phần trình diễn và phần chưa hoàn thiện.
- **Vì sao phải làm:** nếu các phần này nằm lẫn nhau, người đọc dễ hiểu rằng bản trình diễn đã đáp ứng toàn bộ yêu cầu dự án.
- **Kết quả cần giao:** hai phần mở đầu ngắn, thống nhất; có một bảng phân biệt phạm vi và tình trạng hiện tại.

### Việc 2 — Rà cách viết yêu cầu và tiêu chí kiểm tra

- **Cần sửa:** mỗi yêu cầu phải trả lời được: ai sử dụng, thực hiện việc gì, kết quả mong muốn là gì và căn cứ nào để nhận xét là đạt. Nội dung kỹ thuật dài đưa xuống phần giải thích hoặc phụ lục. Chỗ mô tả phần mềm hiện có khác yêu cầu mong muốn phải đặt thành hai cột riêng.
- **Vì sao phải làm:** mô tả “đã có chức năng” hoặc “hoạt động tốt” chưa đủ rõ để người khác kiểm tra tính đầy đủ của tài liệu.
- **Kết quả cần giao:** bảng yêu cầu A dễ đọc, mỗi dòng có tiêu chí rõ và chỉ dẫn đến phần giải thích liên quan. Đây là sửa cách mô tả, không phải yêu cầu thực hiện kiểm thử trong đầu việc này.

### Việc 3 — Hoàn thiện tài liệu mô tả sự phối hợp giữa A, B và C

- **Cần sửa:** trình bày mỗi điểm phối hợp theo cùng thứ tự: bên cung cấp, bên sử dụng, thông tin trao đổi, cách xử lý bình thường, trường hợp không thành công và nội dung còn thiếu. Ví dụ: A hỏi B về quyền xuất video; C cung cấp danh mục mẫu cho A. Chi tiết tên trường và đường dẫn kỹ thuật đặt sau phần giải thích bằng tiếng Việt.
- **Vì sao phải làm:** ba phần có thể viết đúng riêng lẻ nhưng vẫn mâu thuẫn khi ghép, nhất là cách tính lượt xuất và cách dùng mẫu đã ngừng cung cấp.
- **Kết quả cần giao:** P03 — tài liệu phối hợp giữa các phần — có bảng đối chiếu rõ, thống nhất với A_01, B_01 và C_01.

### Việc 4 — Ghép yêu cầu, phạm vi và bảng phân rã công việc

- **Cần sửa:** rà P02, P04 và P05 để một yêu cầu không bị mô tả khác nhau, một công việc không bị bỏ sót hoặc tính hai lần. Giữ mã công việc chung; dưới sơ đồ phân rã phải có bảng giải thích đầu ra, người phụ trách và điều kiện hoàn thành của từng gói.
- **Vì sao phải làm:** sơ đồ chỉ cho biết cách chia việc; nếu thiếu phần giải thích, người nhận vẫn không biết phải bàn giao cái gì.
- **Kết quả cần giao:** ba tài liệu khớp nhau về tên, mã và phạm vi; sơ đồ và bảng giải thích dùng cùng một bộ dữ liệu.

### Việc 5 — Biên tập kế hoạch quản lý và đường dẫn tra cứu

- **Cần sửa:** P01 cần giải thích cách quản lý dự án bằng các quyết định cụ thể: ai phụ trách, ai kiểm tra, cập nhật ở đâu, xử lý thay đổi thế nào. Trong bảng nối yêu cầu với thiết kế và cách kiểm tra, viết kèm tên tài liệu thay vì chỉ để mã. Rà mục lục và đường dẫn để mở đúng bản hiện hành.
- **Vì sao phải làm:** kế hoạch chung sẽ khó sử dụng nếu chỉ tập hợp định nghĩa hoặc buộc người đọc tự tìm ý nghĩa của từng mã.
- **Kết quả cần giao:** P01 đọc liền mạch; bảng tra cứu yêu cầu và mục lục chỉ đến đúng nguồn.

### Việc 6 — Kiểm tra nội dung phần C và kết luận của báo cáo chung

- **Cần sửa:** đọc phần C để phát hiện nội dung ngoài phạm vi, nội dung trùng A/B hoặc kết luận chưa có nguồn. Rà phần tổng kết để phân biệt việc đã làm được, việc mới được mô tả trong kế hoạch và việc còn thiếu thông tin. Ghi nhận xét theo file, mục, vấn đề và cách sửa.
- **Vì sao phải làm:** người ghép báo cáo cần kiểm tra tính nhất quán của toàn bộ nội dung, tránh một phần tự đưa ra kết luận mạnh hơn căn cứ hiện có.
- **Kết quả cần giao:** danh sách nhận xét tài liệu C và bản kết luận chung đã sửa. Không ghi thành xác nhận nghiệm thu sản phẩm.

## 3. Nguyễn Việt Quang — sửa phần B và thống nhất số liệu kế hoạch

### Nhận xét

Phần B đã mô tả nhiều tình huống về tài khoản, thuê bao và hạn mức. Tài liệu cần ưu tiên cách giải thích bằng tiếng Việt, nhất là việc giữ lượt, hoàn lượt, hết hạn thuê bao và thanh toán giả lập. Với phần kế hoạch chung, trọng tâm là giúp người đọc phân biệt công sức, thời gian theo lịch, chi phí dự kiến và chi phí thực tế.

### Việc 1 — Sắp xếp phần B đúng vai trò của từng file

- **Cần sửa:** rà B_01 để giữ nội dung yêu cầu, quy tắc, tình huống và tiêu chí kiểm tra; rà B_02 để giữ công việc, ước lượng, nguồn lực và rủi ro. Các nội dung thực hiện, theo dõi và bàn giao đặt ở B_03, B_04, B_05. Bản cũ chỉ dẫn sang bản đang dùng.
- **Vì sao phải làm:** khi một nội dung nằm ở nhiều nơi, lần sửa tiếp theo dễ bỏ sót và làm các bản khác nhau.
- **Kết quả cần giao:** năm file có mục đích riêng, ít lặp lại; phần trùng chỉ giữ ở nguồn chính và dẫn lại.

### Việc 2 — Viết lại quy tắc nghiệp vụ bằng các tình huống dễ hiểu

- **Cần sửa:** giải thích riêng các tình huống: bắt đầu xuất thì tính lượt thế nào; hủy thì hoàn lượt ra sao; gửi lại cùng yêu cầu có bị tính thêm không; thuê bao hết hạn thì quyền thay đổi thế nào. Phân biệt rõ thanh toán giả lập với thanh toán thật. Tên gọi kỹ thuật đặt trong ngoặc khi cần.
- **Vì sao phải làm:** nếu chỉ dùng tên lệnh hoặc thuật ngữ, người đọc khó nhận ra các quy tắc có mâu thuẫn với phần A và C hay không.
- **Kết quả cần giao:** bảng gồm “Tình huống — Quy tắc áp dụng — Ngoại lệ — Tài liệu liên quan”, khớp với P03.

### Việc 3 — Làm rõ cơ sở ước lượng công sức

- **Cần sửa:** ghi mỗi gói tạo ra đầu ra gì, gồm những việc nào và vì sao ước lượng như vậy. Giải thích ba mức: thuận lợi, thông thường và bất lợi. Đánh dấu phần chưa chia nhỏ; nêu rõ số giờ đang là ước lượng cho toàn đầu ra hay công sức còn lại.
- **Vì sao phải làm:** một con số không có cơ sở sẽ khó bảo vệ khi họp; người đọc cũng dễ nhầm phần đã có mã nguồn là không còn công việc.
- **Kết quả cần giao:** B_02 có bảng ước lượng kèm giải thích; số liệu dùng trong kế hoạch chung có thể truy ngược về từng gói.

### Việc 4 — Trình bày lịch và ngân sách để tránh nhầm đơn vị

- **Cần sửa:** ở đầu bảng tiến độ và ngân sách, thêm hướng dẫn đọc. Phân biệt “giờ công” với “số ngày theo lịch”; “giá trị công sức quy đổi” với “tiền cần chi”; “ước lượng” với “thực tế”. Đối chiếu các tổng với nguồn dữ liệu hiện hành. Giải thích 599 giờ là ước lượng toàn phạm vi, không phải số giờ còn phải làm trong hai tuần.
- **Vì sao phải làm:** bảng có công thức đúng vẫn có thể bị hiểu sai nếu không nói rõ ý nghĩa và điều kiện của các con số.
- **Kết quả cần giao:** P10 và P11 có chú giải, đơn vị và căn cứ rõ; phần nhận xét nêu đúng chênh lệch so với kế hoạch cấp cao.

### Việc 5 — Sửa cách trình bày rủi ro và khoản dự phòng

- **Cần sửa:** mỗi rủi ro viết theo thứ tự “nguyên nhân — việc có thể xảy ra — hậu quả”. Giải thích thang đánh giá, dấu hiệu cần xử lý, người phụ trách và cách ứng phó. Tách số dùng để xếp mức ưu tiên với số dùng để tính công sức hoặc tiền dự phòng; chỉ rõ phần nào chưa được duyệt.
- **Vì sao phải làm:** việc dùng chung một con số cho nhiều mục đích dễ làm dự phòng sai hoặc cộng hai lần phần đã nằm trong ước lượng.
- **Kết quả cần giao:** P08, P13 và phần rủi ro B dùng cùng cách viết, cùng thang đánh giá và cùng cách giải thích dự phòng.

### Việc 6 — Rà biểu mẫu theo dõi và kiểm tra tài liệu A

- **Cần sửa:** làm rõ các cột ngày, người làm, nội dung, giờ thực tế, chi phí và nguồn chứng minh trong sổ theo dõi. Chỗ thiếu dữ liệu để trống có chú thích, không tự điền số 0. Khi đọc tài liệu A, tập trung kiểm tên gói, mã, cách cộng giờ, số liệu và ý nghĩa trạng thái.
- **Vì sao phải làm:** biểu mẫu cần hướng dẫn đủ rõ để các thành viên điền thống nhất; kiểm tra chéo giúp phát hiện sai lệch trước khi ghép báo cáo.
- **Kết quả cần giao:** biểu mẫu dễ điền và danh sách nhận xét tài liệu A. Đầu việc này không yêu cầu thu thập số giờ chưa có hoặc chạy thử phần mềm.

## 4. Phạm Quang Anh — sửa phần C và thống nhất hình thức bộ tài liệu

### Nhận xét

Phần C vừa có nội dung quản trị, vận hành, vừa cung cấp đầu vào cho kế hoạch chất lượng và phân công chung. Cần tách rõ hai vai trò này để tránh một tài liệu ôm quá nhiều nội dung. Khi đóng gói, trọng tâm là bố cục thống nhất, bảng biểu đọc được và các kết luận có nguồn.

### Việc 1 — Làm rõ ranh giới phần C và tài liệu chung

- **Cần sửa:** C_01/C_02 tập trung vào quản lý mẫu, tài sản đồ họa, hỗ trợ và giám sát. Kế hoạch chất lượng, nguồn lực và truyền thông của cả nhóm đặt ở P06/P07, chỉ dẫn lại từ phần C. Rà để không còn nội dung ngoài phạm vi hoặc yêu cầu thuộc A/B được viết lại theo nghĩa khác.
- **Vì sao phải làm:** tách rõ phần riêng và phần chung sẽ giúp người đọc biết ai chịu trách nhiệm và tránh ghép trùng nội dung.
- **Kết quả cần giao:** tài liệu C có ranh giới rõ; P06/P07 thể hiện kế hoạch của cả dự án.

### Việc 2 — Thống nhất tên gọi, trạng thái và chỉ tiêu

- **Cần sửa:** dùng nhất quán ba trạng thái mẫu: “bản nháp”, “đang sử dụng”, “ngừng cung cấp”; kèm tên kỹ thuật một lần để đối chiếu. Viết rõ cách mô tả mẫu đang dùng trong dự án cũ. Kiểm mã mục tiêu và chỉ tiêu lợi ích theo đúng tài liệu nguồn; không tự đặt thêm mã như thể đã có từ trước.
- **Vì sao phải làm:** cùng một đối tượng nhưng nhiều tên gọi sẽ làm người đọc tưởng đó là những trạng thái hoặc chỉ tiêu khác nhau.
- **Kết quả cần giao:** một bảng thuật ngữ ngắn và các bảng yêu cầu C đã dùng thống nhất tên, mã, nguồn.

### Việc 3 — Chuẩn hóa bảng tình huống kiểm thử và cách ghi bằng chứng

- **Cần sửa:** mỗi tình huống kiểm thử có yêu cầu liên quan, điều kiện ban đầu, bước thực hiện, kết quả mong đợi và chỗ ghi kết quả thực tế. Tách phần thiết kế cách kiểm tra với phần báo cáo đã kiểm tra. Chỉ mô tả tình huống của C; khi liên quan A/B thì dẫn mã của tài liệu tương ứng.
- **Vì sao phải làm:** mô tả “sẽ kiểm tra như thế nào” không phải bằng chứng “đã kiểm tra và đạt”. Hai phần nằm lẫn sẽ làm báo cáo sai trạng thái.
- **Kết quả cần giao:** bảng kiểm thử C rõ ràng; phần chưa có kết quả ghi đúng tình trạng. Không giao chạy kiểm thử trong đầu việc này.

### Việc 4 — Biên tập kế hoạch chất lượng và bảng phân công

- **Cần sửa:** P06 phân biệt ba việc bằng tiếng Việt: kiểm tra quy trình và tài liệu; kiểm tra sản phẩm theo tiêu chí; xác nhận chấp nhận đầu ra. P07 và bảng phân công ghi rõ người thực hiện, người chịu trách nhiệm cuối cùng, người được hỏi ý kiến và người cần nhận thông tin. Mỗi việc có một người chịu trách nhiệm cuối cùng.
- **Vì sao phải làm:** nếu không phân biệt, một người có thể bị giao toàn bộ việc kiểm tra hoặc bị hiểu là có quyền xác nhận thay người khác.
- **Kết quả cần giao:** kế hoạch chất lượng và bảng phân công dễ hiểu, đúng vai trò đã chốt; có hướng dẫn đọc các ký hiệu.

### Việc 5 — Thống nhất bố cục và hình thức trình bày

- **Cần sửa:** áp dụng cùng mẫu bìa, thông tin phiên bản, hệ thống đề mục, cách đánh số bảng/hình và cách dẫn nguồn. Chỉnh bảng quá rộng, câu quá dài, chữ viết tắt chưa giải thích. Khi xuất bản để nộp, kiểm tra ngắt trang, tiêu đề bảng và hình có bị cắt hay không.
- **Vì sao phải làm:** nội dung do ba người viết sẽ dễ tạo cảm giác ba bộ tài liệu riêng nếu cách trình bày khác nhau; bảng khó đọc cũng làm mất ý chính.
- **Kết quả cần giao:** mẫu trình bày chung và danh sách các lỗi hình thức đã sửa. Mỗi người tự chỉnh file mình phụ trách theo mẫu; Quang Anh kiểm sự thống nhất khi ghép.

### Việc 6 — Hoàn thiện bố cục bàn giao, bài học và kiểm tra tài liệu B

- **Cần sửa:** phần bàn giao phải có danh mục đầu ra, tình trạng, việc còn thiếu và người tiếp nhận được giao. Bài học viết theo “vấn đề gặp phải — nguyên nhân — cách làm tốt hơn”. Phần trình bày dùng câu ngắn, hạn chế mã và bảng quá dày. Khi đọc phần B, kiểm cấu trúc, cách giải thích quy tắc và sự thống nhất với kế hoạch chất lượng.
- **Vì sao phải làm:** báo cáo cuối cần giúp người nhận hiểu được kết quả và công việc tiếp nối, thay vì chỉ liệt kê tên file hoặc nhận xét chung chung.
- **Kết quả cần giao:** bố cục bàn giao, bài học, dàn ý trình bày và danh sách nhận xét tài liệu B; chỗ chưa có xác nhận tiếp nhận phải ghi rõ.

## 5. Mẫu bố cục chung cho mỗi tài liệu

Không cần ép mọi file có cùng độ dài. Giữ thứ tự đọc thống nhất và chỉ thêm mục khi thực sự có nội dung.

| Thứ tự | Phần | Cần viết gì |
| --- | --- | --- |
| 1 | Thông tin tài liệu | Tên, mã, phiên bản, ngày cập nhật, người phụ trách và trạng thái. Người được giao kiểm tra khác với người đã kiểm tra. |
| 2 | Mục đích và phạm vi | Tài liệu giải quyết việc gì, bao gồm gì, liên quan đến tài liệu nào. |
| 3 | Căn cứ | Yêu cầu, quyết định, tài liệu hoặc dữ liệu được dùng; ghi nguồn và phiên bản. |
| 4 | Nội dung chính | Giải thích trước, bảng hoặc sơ đồ sau. Mỗi bảng có tên và đơn vị nếu có số liệu. |
| 5 | Điểm còn thiếu | Thiếu nội dung hoặc căn cứ gì, người nào cần bổ sung, ảnh hưởng đến kết luận nào. |
| 6 | Lịch sử sửa và tài liệu liên quan | Nêu thay đổi chính, ngày sửa và đường dẫn để tra cứu; không chép lại toàn bộ tài liệu khác. |

**Ví dụ cách viết dễ hiểu:** thay “Module B validate entitlement trước export” bằng “Trước khi xuất video, phần B kiểm tra quyền của tài khoản và trả về độ phân giải được phép sử dụng”. Tên kỹ thuật có thể đặt sau câu này nếu cần đối chiếu mã nguồn.

## 6. Thứ tự sửa và cách giao lại

1. **Sửa nội dung từng phần:** mỗi người đọc năm file của mình, xử lý nhận xét và đánh dấu phần thiếu căn cứ. Chưa chỉnh hình thức quá kỹ khi nội dung còn thay đổi.
2. **Đối chiếu giữa các phần:** Chiến kiểm sự thống nhất về yêu cầu và phạm vi; Việt Quang kiểm số liệu kế hoạch; Quang Anh kiểm cấu trúc chất lượng và phân công.
3. **Ghép và chỉnh hình thức:** cập nhật bản chung từ nguồn đã sửa; thống nhất thuật ngữ, đề mục, bảng biểu, mục lục và đường dẫn.
4. **Kiểm tra chéo tài liệu:** Việt Quang đọc A, Quang Anh đọc B, Chiến đọc C. Ghi nhận xét cụ thể, trả lại chủ phần sửa rồi kiểm lại.

Khi giao lại, mỗi người gửi **file đã sửa** và một bảng ngắn gồm:

| File / mục | Đã sửa gì | Vì sao sửa | Còn thiếu gì |
| --- | --- | --- | --- |
| Ghi đúng tên file và số mục | Nêu thay đổi cụ thể | Dẫn nhận xét hoặc điểm mâu thuẫn đã xử lý | Ghi người cần bổ sung; nếu đủ thì ghi “không còn thiếu nội dung tại mục này” |

## 7. Điều kiện hoàn thành phần sửa tài liệu

- Người ngoài nhóm hiểu mục đích và ý chính mà không phải đoán thuật ngữ.
- Không còn mâu thuẫn về phạm vi, tên gọi, mã hoặc số liệu giữa các bản đang dùng.
- Các bảng có tiêu đề, đơn vị, nguồn và giải thích cần thiết; bảng chưa có dữ liệu không bị trình bày như kết quả thực tế.
- Phân công chỉ rõ người làm và người kiểm tra; không ghi tên như thể đã ký xác nhận.
- Mục lục, sơ đồ, tên file và đường dẫn khớp với nội dung hiện hành.
- Nhận xét kiểm tra chéo đã được xử lý hoặc ghi rõ lý do còn mở.

Hoàn thành các điều kiện này là hoàn thành **phần biên soạn và sửa tài liệu**, không phải kết luận phần mềm đã đạt mọi yêu cầu hoặc dự án đã được nghiệm thu.

