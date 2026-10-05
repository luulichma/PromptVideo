# P08 — Kế hoạch quản lý rủi ro

**Phiên bản:** v1.0 · cập nhật 24/09/2026. **Trạng thái:** Working Draft đã chuẩn hóa nội dung; chưa nghiệm thu.

**Chủ nội dung:** Việt Quang. **Người kiểm tra được giao:** Quang Anh. Việc ghi tên là phân công, không phải chữ ký xác nhận. Nội dung được cập nhật bằng Codex theo ủy quyền của người dùng.

## 1. Phương pháp

Chủ module phát hiện, Việt Quang tổng hợp P13, Chiến điều phối ứng phó liên module. Mỗi risk ghi nguyên nhân → sự kiện → hậu quả, chủ, trigger, P, I, ứng phó, bằng chứng và lịch sử cập nhật. Risk chưa chắc xảy ra khác với issue đã xảy ra trong M03. Backend bị chặn Docker tại EV-002 là vấn đề môi trường hiện hữu ISS-G-004; không ghi là đã pass.

P1=0,10; P2=0,30; P3=0,50; P4=0,70; P5=0,90 là giả định phán đoán. I1 ≤ 2 giờ; I2 > 2–4 giờ; I3 > 4–8 giờ; I4 > 8–16 giờ; I5 > 16 giờ. Điểm P×I từ 1–6 thấp, 7–12 trung bình, 13–25 cao. Rủi ro nặng về tiền/phạm vi/chất lượng ghi thêm đơn vị thực và xử lý theo hậu quả; điểm định tính không phải xác suất.

EMV giờ = xác suất × giờ hậu quả; EMV tiền = xác suất × hậu quả tiền. Không đổi trực tiếp điểm P×I thành VND. P13 tính với số chưa làm tròn. Review tại các cổng DOC và khi vượt trigger; risk cao phải báo ngay, mức trung bình quyết định tại review, mức thấp vẫn có chủ theo dõi.

## 2. Ứng phó và dự phòng

Tránh phạm vi ngoài Charter; giảm rủi ro bằng probe, test hợp đồng và đo máy thật; chỉ gọi chuyển giao khi có thỏa thuận thật; chấp nhận cần trigger, phương án dự phòng và người chịu trách nhiệm. Phương án dự phòng khác ngưỡng không được coi là đã đạt nghiệm thu.

Contingency chỉ tính hậu quả còn lại ngoài công cơ sở và chi phí ứng phó không trùng O/M/P. A đã bỏ reserve 12,6 giờ cũ vì phép đo cơ bản và công quá tải đã nằm trong phạm vi; exposure A trong P13 chỉ tham khảo.

Dữ liệu dự phòng làm việc hiện là **46,2 giờ = B 33,4 + C 12,8**. Khoản 8,4 giờ rủi ro chung từ R-C-05 được **loại khỏi tổng** vì trùng, cần đối soát với R-A-06. Đây là dự báo chưa phê duyệt; không biến số này thành baseline hoặc actual. Các sai lệch đã biết tại ISS-G-001/002/003 được sửa trong WP, không tính lại vào reserve.

Management reserve chưa phân bổ, không tự gán bằng 0. Khoản 400.000 VND là reserve **tiền mặt** trong trần 3,5 triệu VND, không phải reserve giờ.

## 3. Ưu tiên ngày 24/09

1. Khôi phục môi trường tích hợp; chạy lại 42 backend test bị lỗi môi trường và TC-I, giữ log trước/sau.
2. Sửa lệch complete/quota, snapshot mẫu và checkout idempotency. Đây là issue đã biết; trách nhiệm/tác động nằm trong M03 và WP, không cộng lần hai vào risk reserve.
3. Chuẩn bị phép đo Worker 1080p, bộ nhớ ×10, checksum 3 máy, 134 tổ hợp và người thử; thiếu điều kiện thì PP vẫn mở.
4. Xử lý forecast 599 giờ với giả định 10 giờ/người/tuần và CR-G-001; chưa có ETC thì chưa cam kết ngày hoàn thành toàn sản phẩm.
5. Giữ cổng thật, hóa đơn, chỗ và hỗ trợ trong phạm vi còn phải làm; demo giả lập phải gắn nhãn nonProduction, không thu tiền thật.

## 4. Cập nhật

P13 là sổ tổng hợp duy nhất; mỗi module không tự tạo một baseline riêng. Module_02 là nguồn đầu vào; _04 ghi trigger, issue và rủi ro còn lại trong kỳ. Khi đổi mức/ứng phó, ghi ngày và lý do. Khi risk xảy ra, mở issue liên kết; kết quả kiểm có mã bằng chứng. M01 chỉ tổng hợp; cột actual không lấy số forecast.
