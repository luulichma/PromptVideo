# C02 — Bàn giao và công việc còn lại

**Cập nhật:** 24/09/2026 · **Phiên bản:** v1.0 · **Trạng thái:** Dự thảo làm việc, chưa nghiệm thu.

**Chủ nội dung:** Quang Anh. **Kiểm tra được giao:** Chiến. Đây là phân công, không phải chữ ký hay xác nhận đã review. Codex cập nhật nội dung theo ủy quyền của người dùng.

## 1. Nội dung bàn giao hiện tại

Gồm mục lục G0, quyết định và mã, A/B/C_01–05, P01–P13, E01–E05, M01–M06, C01–C04, EV INDEX và mã nguồn. Markdown là nguồn sửa; 9 workbook là sổ làm việc trong official-docs, trạng thái ghi trong từng file. Bộ hồ sơ mới chưa được xác nhận nghiệm thu.

## 2. Tồn đọng có người xử lý

| ID hoặc phạm vi | Cần làm tiếp và lý do | Người phụ trách | Bằng chứng để đóng |
| --- | --- | --- | --- |
| ISS-G-001 | Đối soát complete/TTL và mất mạng; không giao file như một lần xuất thành công khi chưa được xác nhận | Chiến + Việt Quang | TC-A-20/36 và TC-I về quota; kiểm cả đường ghi file trực tiếp |
| ISS-G-002 | Bổ sung snapshot, phiên bản và migration để mẫu cũ không đổi theo catalog | Chiến + Quang Anh | Project cũ/mới, Retired/offline và TC-I-04 |
| ISS-G-003 | Chống lặp yêu cầu checkout để click lặp không cấp quyền hai lần | Việt Quang | Test key cũ, payload khác và đồng thời; phân biệt với chống lặp sự kiện |
| ISS-G-004 | Khôi phục Docker để thử API và DB thật | Việt Quang | Chạy lại backend integration và TC-I có EV |
| ISS-G-005 / CR-G-001 | Thu ETC, thời gian sẵn có, actual và lập lịch theo forecast 599 giờ; tránh coi 450 giờ là thực tế đã xác nhận | Việt Quang; Chiến điều phối | Work log có nguồn, baseline được duyệt, cập nhật P10/P11/M04 |
| A: 4.2.7, 5.2, 5.3 | Hoàn thiện pause, xử lý không hỗ trợ khi khởi động; kiểm hiệu năng, bộ nhớ, tiếng Việt và tính dễ dùng | Chiến | Ca thử theo Charter, máy và người thử đáp ứng đúng điều kiện |
| B: 4.3.3, 4.3.5, 4.3.6 | Hoàn thiện cổng thật, nhắc hạn, hóa đơn và seats | Việt Quang | Test và đầu ra sản phẩm; không dùng giả lập trong Production |
| C: 4.4.1–4 | Hoàn thiện CRUD, assets, phiên bản, ticket, điều chỉnh quota, Admin UI và nguồn metrics/LI | Quang Anh | TC-C, IF-CB-01, màn hình/API và audit |
| 6.1 / 6.4 | Thử deploy, restore, rollback và thực hiện nghiệm thu | Quang Anh / Chiến | Biên bản chạy, QC đạt và chữ ký thực tế |
| Review của thành viên | A do Việt Quang kiểm; B do Quang Anh kiểm; C do Chiến kiểm; xử lý nhận xét | Cả nhóm | Phiếu review có ngày, file, mục và kết quả kiểm lại |

Mục tiêu hồ sơ: DOC-03 có bằng chứng ngày 02/10, DOC-04 có dự thảo bàn giao ngày 05/10, DOC-05 review ngày 07/10. Chưa thể cam kết ngày hoàn thành tính năng/PP khi chưa có ETC và nguồn lực; P10 hiển thị riêng kịch bản WP.

## 3. Người tiếp nhận và điều kiện phát hành

Chiến giữ nguồn chung và tổng kết; Việt Quang giữ workbook ngân sách, lịch và actual; Quang Anh giữ chất lượng, đóng gói và vận hành. Bên nghiệm thu theo Charter chưa ký nhận. DOCX/PPTX được xuất từ nguồn đã review, không viết lại một bộ số liệu khác. G1 là bản Markdown đọc liền mạch có thể dùng trong cuộc họp; định dạng official được thực hiện sau khi chốt trạng thái phát hành.
