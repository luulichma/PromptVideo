# E04 — Hồ sơ đảm bảo chất lượng và bài học

**Cập nhật:** 24/09/2026 · **Phiên bản:** v1.0 · **Trạng thái:** Dự thảo làm việc, chưa nghiệm thu.

**Chủ nội dung:** Quang Anh. **Kiểm tra được giao:** Chiến. Đây là phân công, không phải chữ ký hay xác nhận đã review. Codex cập nhật nội dung theo ủy quyền của người dùng.

## 1. Kiểm tra quy trình và tài liệu đã thực hiện

| Nội dung QA ngày 24/09 | Phát hiện và xử lý | Trạng thái |
| --- | --- | --- |
| Mã WBS/REQ/TC | Ba nhánh mã cũ mâu thuẫn; chuyển sang WBS sáu giai đoạn, danh mục mã và bảng ánh xạ | Đã sửa nguồn làm việc |
| Phạm vi và Charter | C có audio/video, định nghĩa lại TC-A và dùng mã MT không có trong BMP | Đã sửa C; LI-01–05 giữ theo BMP |
| Ước lượng và chi phí | Có số làm tròn, phần hóa đơn/seats chưa đủ; schema và prototype dễ bị tính hai lần | 599 giờ từ 32 gói; P11 tính bằng công thức |
| Tình trạng sản phẩm | Các mô tả “đã có” chưa tách rõ mức đáp ứng | Phân biệt có mã, có test, dùng mock và được nghiệm thu; ghi ISS-G-001–005 |
| Phê duyệt và actual | Tên trong bảng không chứng minh đã duyệt; chưa có dữ liệu actual | Giữ Draft và ghi rõ phân công; không tự điền 0 cho EVM |
| Ghép file | Nhiều nguồn cùng được xem là bản chính | Module hiện hành → tài liệu chung → official-docs; bản ghi cũ giữ làm lịch sử |

Codex thực hiện QA theo ủy quyền; hoạt động này không thay vòng review của thành viên. QC là kết quả kiểm thử tại M02/M05 và EV INDEX, khác bảng QA trên. Kết quả frontend 79/79 và backend 18/60 đạt, 42 thất bại do môi trường được ghi riêng.

## 2. Điều kiện phát hành hồ sơ

Mã phải duy nhất, liên kết tồn tại, số tổng khớp và cột nguồn/trạng thái rõ. Đầu vào chưa có không được giả lập thành dữ liệu thực tế. Giữ đúng phiên bản BC/BMP 2.2 và Charter/Assumption 2.1.

Module_03–05 phải nêu nội dung thực, tồn đọng và người xử lý. Chỉ đưa bản xuất vào official khi đã kiểm nội dung, phiên bản và trạng thái phát hành phù hợp; xuất file không tự tạo phê duyệt.

## 3. Bài học áp dụng ngay

Chốt mã trước khi chia tài liệu; ghép dữ liệu thay vì viết lại số; phân biệt forecast, ETC và actual; kiểm cả đường lỗi API; đo đúng môi trường của tiêu chí; chỉ ghi xác nhận sau khi người được giao thực sự review. Bài học cuối đợt tổng hợp ở C03, mỗi bài học có nguồn và hành động cụ thể.
