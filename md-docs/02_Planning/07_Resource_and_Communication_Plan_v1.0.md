# P07 — Kế hoạch nguồn lực, truyền thông và tham gia của các bên liên quan

| Thuộc tính | Giá trị |
| --- | --- |
| Phiên bản / ngày | v1.0 / 2026-09-24 |
| Trạng thái | Draft; quyết định tổ chức nội bộ đã áp dụng, chưa ghi nhận cam kết giờ thực hay chữ ký bên ngoài |
| Chủ soạn / kiểm tra / xác nhận nội bộ | Phạm Quang Anh / Nguyễn Thế Chiến / Nguyễn Việt Quang |
| Căn cứ | DEC-001/002/008; Charter v2.1; Stakeholder Register hiện hành; bài PM09 Resource, PM10 Communication, PM11 Quality |

## 1. Vai trò và thẩm quyền

Tổ chức làm việc được chốt theo nguyên tắc mỗi người sở hữu một module xuyên các giai đoạn. Chủ module viết, sửa và chứng minh phần mình; người tổng hợp ghép dữ liệu và chỉ ra chỗ thiếu. Quang Anh phụ trách chất lượng/nguồn lực/truyền thông, **không được gán vai trò PM của dự án trong Charter**.

| Người/vai trò | Trách nhiệm nhận | Quyền quyết định và giới hạn |
| --- | --- | --- |
| Nguyễn Thế Chiến | Module A; điều phối hồ sơ; PMP, phạm vi, giao tiếp, WBS; rà nội dung bộ ghép | Chốt thứ tự nội bộ và xử lý xung đột mã/phụ thuộc; trình thay đổi vượt Charter, không tự tăng ngân sách hay ký nghiệm thu thay sponsor |
| Nguyễn Việt Quang | Module B; lịch/CPM, chi phí, rủi ro; nhật ký actual và báo cáo số | Chọn mô hình tính minh bạch theo quy ước, phát hiện thiếu công suất; không lấy giờ kế hoạch thay actual |
| Phạm Quang Anh | Module C; chất lượng, nguồn lực/RACI, truyền thông; tổng hợp test, hướng dẫn, bàn giao/bài học/slide | Quản lý checklist/evidence và nhắc hạn; không quyết định nội dung A/B thay chủ, không chạy mọi test thay cả nhóm |
| Giảng viên hướng dẫn | Phản hồi học thuật và chấp nhận hồ sơ theo hoạt động thực tế | Ý kiến/chữ ký chỉ ghi sau khi thực sự nhận; không mặc định đã duyệt |
| Sponsor/PM/chủ vận hành trong Charter/BMP | Phê duyệt và tiếp nhận theo vai trò dự án | Tách khỏi ba người làm hồ sơ; không dùng tên vai trò bối cảnh như một người đã tham gia cuộc họp nhóm |

Vòng cố định: **A — Việt Quang kiểm, Quang Anh xác nhận; B — Quang Anh kiểm, Chiến xác nhận; C — Chiến kiểm, Việt Quang xác nhận.** Xác nhận nội bộ không thay nghiệm thu sản phẩm. Người kiểm ghi nội dung và nguồn, người làm xử lý, người xác nhận xem lại kết quả thay vì chỉ điền tên.

## 2. Team Charter — cách làm việc được áp dụng

- Mỗi đầu việc có mã, một chủ, đầu ra, lý do, hạn/gate và người kiểm; ưu tiên xử lý điểm cản đầu vào trước phần trình bày.
- Markdown hiện hành là nguồn soạn. Một workbook có một người biên tập để tránh mất dữ liệu; phần A/B/C cung cấp bảng hoặc dữ liệu theo mẫu rồi chủ workbook ghép.
- Hằng ngày trước **20:00 giờ Việt Nam** gửi cập nhật bất đồng bộ: đầu ra đã đổi, đường dẫn/evidence, số giờ thực nếu có, việc tiếp theo, vướng mắc/chủ cần hỗ trợ. 20:00 là hạn báo cáo nội bộ được chọn, không khẳng định cả nhóm có thể họp trực tiếp lúc này.
- Kênh chính là kho tệp/tài liệu của nhóm và mục cập nhật/issue dùng chung; thông báo đường dẫn qua nhóm chat đang sử dụng. Không giả định nhóm đã có Discord hay công cụ quản lý riêng. Quang Anh lưu phần kết luận vào biên bản E02 để nội dung không chỉ nằm trong chat.
- Không giao việc dựa trên nhận xét cá nhân; nhận xét nêu file/mục/vấn đề/hậu quả/cách sửa. Khi bất đồng kỹ thuật, ghi hai lựa chọn và tác động; chủ liên quan rà, Chiến chốt lựa chọn nội bộ trong phạm vi được giao.
- Vướng gây chặn người khác báo ngay khi nhận ra, không chờ 20:00. Người nhận xác nhận trong 24 giờ; quá 24 giờ hoặc ảnh hưởng gate thì Chiến điều phối lại thứ tự/khối lượng và ghi thay đổi.
- Việc ngoài Charter hoặc làm tăng trần giờ/tiền đi qua CR; không coi sự im lặng của reviewer hay hết giờ chờ là phê duyệt.
- Chủ module tự kiểm file/link/mã/nguồn trước giao; reviewer không phải sửa lại toàn bộ thay người tạo. Bài học sau mỗi gate ghi vào E04 và chuyển thành hành động cụ thể ở gate kế tiếp.

## 3. Công suất và lịch nguồn lực

**Giả định lập kế hoạch đã chọn:** 10 giờ/người/tuần. Đợt hồ sơ 24/09–07/10 có hai tuần kế hoạch: 24–30/09 và 01–07/10. Mỗi người20 giờ, nhóm60 giờ. Đây là năng lực kế hoạch, không phải số giờ thành viên đã làm hay đã xác nhận rảnh. Nhóm cập nhật lịch thực khi có dữ liệu; không chờ dữ liệu để bỏ trống kế hoạch.

| Thành viên | Tuần24–30/09 | Tuần01–07/10 | Tổng đợt | Ưu tiên dùng giờ |
| --- | ---: | ---: | ---: | --- |
| Chiến | 10h | 10h | 20h | A_01/_02, P03–P05/P01/P09; kiểm C; ghép phạm vi và kết luận |
| Việt Quang | 10h | 10h | 20h | B_01/_02, P08/P10/P11/P13; kiểm A; actual/issue/số cuối |
| Quang Anh | 10h | 10h | 20h | C_01/_02, P06/P07/P12; kiểm B; danh mục evidence/hướng dẫn/bàn giao |

P10 chọn lịch phân bổ theo năng lực này và phải hiển thị vượt tải nếu tổng việc lớn hơn60 giờ. Không xếp20 giờ cho mỗi người thành “rảnh4 giờ mọi tối”. Các mốc sau là cổng giao hồ sơ; **không cam kết xây xong toàn bộ module trong hai tuần**. Riêng C forecast 72 giờ xây dựng còn chưa tính nhiệm vụ chung cho thấy phải tách lịch sản phẩm khỏi lịch viết hồ sơ.

| Cổng | Hạn | Đầu ra và điều kiện | Chủ tập hợp |
| --- | --- | --- | --- |
| DOC-01 | 26/09/2026,20:00 | Sáu đầu vào A/B/C_01/_02; mã/REQ/TC/WBS/ước lượng/hiện trạng đồng nhất; gaps có chủ | Chiến |
| DOC-02 | 29/09/2026,20:00 | P01–P13 bản ghép và kiểm số/nguồn/công suất; CR-G-001 thể hiện forecast vượt trần nếu có | Chiến; VQ phần số, QA phần chất lượng/nguồn lực |
| DOC-03 | 02/10/2026,20:00 | Evidence, test/defect, issue/change, actual có nguồn và một kỳ báo cáo thực | Quang Anh evidence; Việt Quang actual |
| DOC-04 | 05/10/2026,20:00 | Bàn giao/bài học/hướng dẫn/slide dự thảo; danh sách tồn đọng có người tiếp nhận dự kiến | Quang Anh |
| DOC-05 | 07/10/2026,20:00 | Bộ hồ sơ đã qua review, liên kết/mã/số/phiên bản đúng; trạng thái nhận/xác nhận ghi thực | Chiến |

Khi vượt công suất: Việt Quang tính chênh lệch từ remaining estimate; Chiến sắp lại trình tự ưu tiên và phân công hỗ trợ đúng năng lực; việc chưa đủ giờ giữ nguyên trong backlog có hạn mới/CR. Không ép số ước lượng, xóa yêu cầu hoặc chuyển phần chưa làm thành Done để khớp lịch.

## 4. Nhu cầu năng lực và vật chất

| Nhu cầu | Chủ cung cấp/kiểm | Cách đáp ứng và tiêu chí sẵn sàng |
| --- | --- | --- |
| Hiểu mô hình yêu cầu, WBS, ước lượng/CPM | Mỗi chủ phần; Việt Quang rà số, Chiến rà phạm vi | Dùng bài PM-NDQ và quy ước chung; người thiếu kỹ năng ghép cặp review 30 phút trong giờ đã phân bổ, không cộng năng lực ảo |
| Đọc/chạy frontend A | Chiến chuẩn bị, Việt Quang kiểm | Node/npm theo README; browser có probe; ghi phiên bản; dùng fixture5 cảnh / 60 giây |
| Backend B/C và PostgreSQL | Việt Quang/Quang Anh chuẩn bị | .NET theo src/README; Docker daemon và Testcontainers; nếu thiếu ghi Blocked, chủ môi trường là người nhận lượt chạy |
| Ma trận số liệu/bản xuất | Việt Quang workbook số, Quang Anh hình thức, mỗi chủ nội dung tự rà | Công cụ đọc XLSX/DOCX/PDF và thư mục dùng chung; bảo toàn dữ liệu nguồn/phiên bản |
| Người kiểm độc lập và môi trường nhiều máy | Reviewer theo vòng; Chiến điều phối | Đặt trước lượt kiểm; nếu chưa có3 máy/100 lượt/10 người thì ghi chưa đủ tiêu chí tương ứng, không giả số |
| Hạ tầng phát hành, vận hành lợi ích | Chủ vai trò theo Charter khi tiếp nhận | Trước bàn giao thực xác nhận người nhận, quyền truy cập và kinh phí; giai đoạn hồ sơ chỉ ghi nhu cầu/cách kiểm |

## 5. RACI chuẩn cho P12

R thực hiện; A chịu trách nhiệm cuối **cho đúng hành động của dòng**; C tham vấn; I nhận tin. `A/R` là một người vừa làm vừa chịu trách nhiệm, vẫn tính một A. Tách soạn, kiểm, xác nhận và phê duyệt để không có hai A hoặc mất A ở Unit/Integration.

| Hành động | Chiến | Việt Quang | Quang Anh | Sponsor | GV |
| --- | --- | --- | --- | --- | --- |
| Viết/sửa A; unit/integration riêng A | A/R | C | I | I | I |
| Kiểm độc lập A | C | A/R | I | I | I |
| Xác nhận nội bộ A | R | C | A/R | I | I |
| Viết/sửa B; unit/integration riêng B | I | A/R | C | I | I |
| Kiểm độc lập B | I | C | A/R | I | I |
| Xác nhận nội bộ B | A/R | R | C | I | I |
| Viết/sửa C; unit/integration riêng C | C | I | A/R | I | I |
| Kiểm độc lập C | A/R | I | C | I | I |
| Xác nhận nội bộ C | C | A/R | R | I | I |
| Tổng hợp PMP/phạm vi/giao tiếp/WBS/RTM cấu trúc | A/R | C | C | I | I |
| Tổng hợp lịch/chi phí/rủi ro và actual | C | A/R | C | I | I |
| Tổng hợp P06/P07/P12, evidence và hình thức bàn giao | C | C | A/R | I | I |
| Điều phối tích hợp/gate và xử lý thiếu công suất | A/R | C | R | I | I |
| Phê duyệt thay đổi vượt quyền/nghiệm thu sản phẩm theo Charter | R trình | C | C | A | I |
| Phản hồi/chấp nhận học thuật theo hoạt động môn học | R trình | I | C | I | A |

Các dòng hai vai trò bên ngoài mô tả **thẩm quyền cần có**, không khẳng định sponsor/GV đã hành động. P12 giữ đúng một A ở mỗi hàng; nếu thêm tác vụ mới, tách hành động cho rõ trước thêm RACI.

## 6. Ma trận truyền thông

| Thông tin | Người gửi → người nhận | Kênh/lưu | Tần suất/hạn phản hồi | Mục đích và escalation |
| --- | --- | --- | --- | --- |
| Cập nhật module: đầu ra, giờ thực, việc tiếp, vướng | Mỗi chủ → cả nhóm; Quang Anh tổng hợp | Link file trong chat; bản lưu ở nhật ký/E02 | Hằng ngày trước 20:00; xác nhận vướng trong 24 giờ | Cho biết dữ liệu nào dùng ghép được; ảnh hưởng gate báo Chiến ngay |
| Giao đầu vào/review | Chủ → reviewer theo vòng; người xác nhận nhận link | File nguồn + nhận xét có mã; E02 ghi kết luận | Theo5gate; reviewer phản hồi trong 24 giờ từ lúc đủ đầu vào | Review nội dung/nguồn; thiếu điều kiện trả Blocked cụ thể |
| Thay đổi giao tiếp A–B/C | Chủ phát hiện → các chủ liên quan + Chiến | P03 và Change Log, kèm diff | Ngay khi phát hiện, trước sửa contract đang dùng | Ngăn hai bên dùng schema khác; Chiến điều phối nếu bất đồng |
| Lệch lịch/ngân sách/công suất | Việt Quang → Chiến, Quang Anh | P10/P11/M04 và số nguồn | Tại mỗi gate hoặc ngay khi dự báo trễ | Cân lịch/nguồn lực; vượt Charter trình CR đúng thẩm quyền |
| Test Fail/Blocked/lỗi nghiêm trọng | Người chạy → chủ sửa + Quang Anh; Chiến khi liên module | M05, evidence và issue | Ngay với Critical/Blocker; trước 20:00 với phần còn lại | Giữ lỗi và retry có chủ; không chờ cuộc họp mới báo lộ dữ liệu/sai quota |
| Báo cáo học thuật và câu hỏi phương pháp | Chiến → giảng viên, các bạn nhận bản sao nội bộ | Hồ sơ gửi theo kênh môn học; lưu phản hồi gốc | Khi cần/mốc môn học thực tế; không tự hứa lịch GV | Làm rõ tiêu chí; Quang Anh cập nhật kết luận đã nhận |
| Bàn giao vận hành và lợi ích | Chủ hồ sơ → người tiếp nhận có thật; sponsor theo Charter | Checklist, danh mục tồn đọng, biên bản nhận | Trước bàn giao thực; lịch BMP sau giao | Chỉ đóng khi có người nhận và trạng thái rõ; chưa có thì Pending |

Quy tắc lưu: kết luận ảnh hưởng mã/scope/baseline phải ghi vào DEC/CR/P03 phù hợp và thông báo link. Chat chỉ báo tin, không tự thành phiên bản nguồn. Không gửi tài khoản mật khẩu/token trong hồ sơ, dùng cách cấp quyền riêng phù hợp khi bàn giao thực.

## 7. Kế hoạch tham gia của các bên liên quan

Mức tham gia dùng U chưa nhận biết, R phản đối, N trung lập, S hỗ trợ, L dẫn dắt. Không đoán mức hiện tại từ tên trong sổ: C dưới đây là **chưa đánh giá bằng trao đổi**, D là mức mong muốn. Quang Anh cập nhật C khi có bằng chứng; P12 dùng cùng quy tắc.

| Bên liên quan | Nhu cầu/kỳ vọng | C hiện tại | D mong muốn | Hành động, chủ và lúc xem lại |
| --- | --- | --- | --- | --- |
| Ba thành viên | Biết rõ module, đầu vào cần giao, giờ và người kiểm | Chưa đánh giá mức gắn kết; phân công đã quyết định | L trong module; S khi kiểm chéo | Chiến chia đúng đầu ra; Quang Anh thu cập nhật; xem tại mỗi gate, không đồng nhất nhận việc với giờ rảnh |
| Giảng viên | Hồ sơ có phương pháp/nguồn, nhất quán và bảo vệ được | Chưa có phản hồi mới được ghi nhận | S/đánh giá đúng thẩm quyền | Chiến tập hợp câu hỏi và bộ đủ đọc; Quang Anh lưu phản hồi, kiểm thay đổi sau nhận |
| Sponsor theo Charter | Biết forecast, rủi ro và mức đạt sản phẩm để quyết định | Chưa có quyết định mới được ghi nhận | L ở quyết định vượt quyền/nghiệm thu | Chiến chuẩn bị CR và evidence; không viết đã ký; xem trước thay đổi baseline |
| Người vận hành/kinh doanh theo BMP | Có tài liệu chạy/khôi phục, nguồn số và lịch đo LI | Chưa xác nhận người nhận thực | S khi bàn giao; L với đo lợi ích được giao | Quang Anh chuẩn bị checklist, Việt Quang bàn giao nguồn số; xác nhận trước bàn giao thật |
| Người dùng thử | Luồng dễ hiểu, không mất nội dung và quyền riêng tư được giữ | Chưa xác nhận đủ mẫu tham gia | S với thử nghiệm có kịch bản | Chiến chuẩn bị kịch bản, reviewer thu feedback; cần đủ10 người mới kết luậnOB-08 |

Hiệu quả engagement được xem bằng đầu vào giao đúng, số phản hồi còn treo và quyết định nhận được; không chấm điểm tâm lý thành viên theo suy đoán. Mâu thuẫn kỳ vọng phải có câu hỏi rõ, dữ kiện và chủ xử lý trong sổ issue.

## 8. Quy trình cập nhật và nội dung đã xử lý

P12 là workbook áp dụng các bảng trên, không là nguồn quyết định khác. Quang Anh thu lịch thực/nhu cầu, Việt Quang cập nhật tác động P10/P11, Chiến chốt thứ tự nội bộ; thay đổi vượt quyền dùng PMP/CR. Không tái phân công âm thầm bằng sửa tên trong một bảng.

24/09/2026: xử lý CV-C-01/06 và phần phối hợp CV-C-07/09; chốt vai trò/vòng review, mỗi dòng RACI đúng một A, công suất giả định, báo cáo 20:00 và năm gate. Xác nhận giờ thật, phản hồi giảng viên, chữ ký sponsor và kết quả bàn giao chỉ được thêm sau khi có sự kiện thực.
