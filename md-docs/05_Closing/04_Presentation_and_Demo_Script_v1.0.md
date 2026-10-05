# C04 — Dàn ý trình bày và kịch bản demo

**Cập nhật:** 24/09/2026 · **Phiên bản:** v1.0 · **Trạng thái:** Dự thảo làm việc, chưa nghiệm thu.

**Chủ nội dung:** Quang Anh. **Kiểm tra được giao:** Chiến. Đây là phân công, không phải chữ ký hay xác nhận đã review. Codex cập nhật nội dung theo ủy quyền của người dùng.

## 1. Trình bày khoảng 12 phút

| Phần | Người nói | Nội dung và bằng chứng |
| --- | --- | --- |
| 1 phút: bối cảnh | Chiến | Video từ chữ/ảnh cục bộ; BC/BMP/Charter hiện có; demo là tập con |
| 2 phút: tổ chức hồ sơ | Chiến | G0, cây file, mỗi người 5 đầu vào; DEC, mã duy nhất và IF |
| 2 phút: kế hoạch | Việt Quang | WBS có 32 gói, 599 giờ gồm 427 giờ WP và 172 giờ PP; tiền mặt 3.5 triệu đồng; CR điều chỉnh lịch/nguồn lực |
| 2 phút: chất lượng | Quang Anh | REQ → TC → EV; 79 unit test frontend đạt; backend có 18 ca đạt, 42 ca thất bại do môi trường; TC-I còn lại |
| 3 phút: demo | Chiến; Việt Quang hỗ trợ | Chạy luồng dưới đây nếu đủ môi trường; không giả lập kết quả |
| 2 phút: tồn đọng và bàn giao | Quang Anh | C02 ghi người phụ trách và bằng chứng để đóng; chưa nghiệm thu toàn bộ Charter |

## 2. Kịch bản demo có điều kiện

Chuẩn bị máy chủ/DB có health đạt, tài khoản Free mới, seed 5 mẫu, codec 720p được hỗ trợ và đầu vào 5 cảnh/60 giây. Ghi môi trường trước khi chạy. Mở editor, nhập chữ tiếng Việt và ảnh, chọn một mẫu, xem trước rồi xuất 720p có watermark.

Nếu đủ thời gian và thiết lập, thử 3 lượt Free rồi lần thứ 4 bị chặn; hủy 1 lượt và đối chiếu số trước/sau; Admin chuyển mẫu sang Retired rồi mở dự án cũ. Chỉ thử Personal 1080p khi probe đạt và dùng giả lập với quyền Admin trên non-Production; gắn nhãn không thu tiền thật.

Nếu Docker vẫn bị chặn, trình bày UI cục bộ, mã nguồn/test và log EV-002; không nói demo API thật đã đạt. Nếu dùng clip hoặc lần chạy lịch sử, ghi thời điểm và môi trường. Không bấm thanh toán thật hoặc đổi dữ liệu người dùng để demo.

## 3. Câu hỏi cần trả lời rõ

599 giờ là forecast toàn phạm vi, không phải giờ còn phải làm; đợt 14 ngày là lịch hoàn thiện hồ sơ. 79 ca đạt chỉ là unit test, không thay coverage hoặc TC-I. Giả lập khác với production. Closing là dự thảo tổng kết đợt chuẩn hóa; M06 chưa xác nhận nghiệm thu. Mỗi vướng mắc có người phụ trách và điều kiện đóng ở C02.
