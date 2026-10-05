# A_05 — Kết quả bàn giao và bài học module A

**Cập nhật:** 24/09/2026 · **Phiên bản:** v1.0 · **Trạng thái:** Dự thảo làm việc, chưa nghiệm thu.

**Chủ nội dung:** Chiến. **Kiểm tra được giao:** Việt Quang. Đây là phân công, không phải chữ ký hay xác nhận đã review. Codex cập nhật nội dung theo ủy quyền của người dùng.

## 1. Gói bàn giao dự thảo

Gồm A_01–04, mã nguồn `src/frontend`, thiết kế `notes/mvp-plan/00–07`, EV-001/003/004/005 và script chạy test. Bên tiếp nhận nội bộ là Việt Quang/Quang Anh theo vòng kiểm tra; chưa có xác nhận tiếp nhận hoặc nghiệm thu.

## 2. Kết quả và tồn đọng

Có mã editor, render, export và storage; unit test đạt 79/79. Kết quả này không đồng nghĩa toàn bộ Charter đạt. ISS-G-001 về complete và ISS-G-002 về mẫu còn mở. TC-I trên máy chủ thật và HAR chưa đủ bằng chứng. Pause, xử lý không hỗ trợ khi khởi động, 1080p, bộ nhớ ×10, checksum trên 3 máy, 134 tổ hợp, 100 lần xuất, 10 người thử và coverage còn phải hoàn thiện hoặc xác minh.

Chiến phụ trách, phối hợp Việt Quang/Quang Anh; P05 giữ các WBS 3.2, 4.2.6/7 và 5.1/2/3. Chưa có actual về giờ công hoặc chi phí cuối. Forecast phân bổ cho A là 225⅓ giờ, chỉ dùng lập kế hoạch; không điền vào cột chi phí hoàn thành. E03 giữ hướng dẫn vận hành. Khi sửa sơ đồ/schema, cập nhật đồng thời P03/P09.

## 3. Bài học có hành động

1. Mã cục bộ 3.x từng trùng WBS tổng: dùng danh mục mã chung trước khi ghép và giữ bảng ánh xạ.
2. Unit test có thể đạt với kỳ vọng cũ chưa đúng nghiệp vụ: mỗi lần đổi hợp đồng phải review kỳ vọng, không chỉ xem số ca đạt.
3. Benchmark trên một môi trường chưa chứng minh kết quả trên nhiều trình duyệt/máy: ghi môi trường và giới hạn kết luận cạnh số đo.
4. Luồng export thành công phải bao gồm xác nhận quyền: thiết kế ghi tạm và đối soát trước khi nghiệm thu.

Demo A: tạo 5 cảnh/60 giây, đổi chữ/ảnh, xem trước và xuất Free. Chỉ chạy phần có môi trường sẵn sàng; nói rõ trạng thái nếu dùng mock.
