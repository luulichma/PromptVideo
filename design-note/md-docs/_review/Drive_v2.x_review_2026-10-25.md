# Review hồ sơ trên Drive — 25/10/2026

Phạm vi: 8 tài liệu chuẩn trên Drive (Business Case v2.4, Benefit Management Plan v2.3, Project Charter v2.4, Assumption Log v2.4, Stakeholder Register v1.1, PMP v2.5, Phạm vi và yêu cầu v1.1, WBS v2.4) và 16 bản nháp v1.0 mới tải lên cùng ngày. Chấm theo checklist trong `knowledge/rules/` (01–07). Các tài liệu này không có trích dẫn slide trong thân văn nên không cần chạy công cụ kiểm trích dẫn.

## Kết luận chính

1. **Bộ tài liệu v2.x trên Drive nhất quán với nhau.** Số giờ khớp ở mọi nơi: 675 giờ ngân sách, 656,3 giờ kế hoạch, 18,7 giờ dự phòng, 15 giờ/người/tuần, 3 mẫu. Tổng giờ WBS cộng đúng (67 + 20 + 33,3 + 421 + 65 + 50 = 656,3; 42 gói). Bảng tài chính trong Benefit Management Plan tính lại đều đúng: NPV +415.432.934, BCR 3,19, hoàn vốn chiết khấu khoảng 1,1 năm.
2. **16 bản nháp v1.0 tải lên sáng nay đang lệch nền với bộ v2.x.** Chúng viết theo nền cũ: 599 giờ, trần 450/495 giờ, 10 giờ/người/tuần, 5 mẫu, cổng DOC-01…05 đến 07/10. Cần viết lại hoặc gộp, không dùng nguyên văn.
3. **PMP v2.5 đã gộp Planning còn 6 file** và nói rõ kế hoạch chất lượng, nguồn lực, truyền thông, rủi ro nằm ngay trong mục 4.5–4.8; đặc tả giao tiếp và tuyên bố phạm vi nằm trong file Phạm vi và yêu cầu. Vì vậy 4 bản nháp vừa tải vào `02_Planning` (Interface, Quality Plan, Resource and Communication, Risk Management) trùng nội dung và làm thư mục vượt 6 file.
4. **Ba bảng tính mà PMP gọi tên chưa có trên Drive:** "Lịch và chi phí", "Truy vết và kiểm thử", "Sổ rủi ro". Đây là thiếu sót lớn nhất của Planning.

## Điểm lệch cụ thể giữa bản nháp và nền v2.x

| Bản nháp | Ghi | Nền v2.x |
| --- | --- | --- |
| Interface Specification | Quyền xuất hết hạn sau 30 phút; seed 5 mẫu (classic, bold…) | Phạm vi và yêu cầu REQ-B-05: hạn 2 giờ; 3 mẫu Tươi sáng, Cao cấp tối giản, Năng động mạng xã hội |
| Quality Plan | OB-04 "từ 5 mẫu"; trích 599 giờ | OB-04: 3 mẫu |
| Resource and Communication Plan | 10 giờ/người/tuần, 60 giờ cả nhóm, cổng DOC đến 07/10 | 15 giờ/người/tuần, 8 mốc M0–M7 đến 06/12 |
| Risk Management Plan | Dự phòng 46,2 giờ, forecast 599 giờ | Dự phòng 18,7 giờ trong trần 675 giờ |
| CR-G-001 | 599 giờ so với 450/495 giờ | Charter 2.3 đã áp hướng của CR này (giữ phạm vi, nâng lên 675 giờ), nhưng CR chưa ghi số mới và chưa có người duyệt |
| Status Report, Final Report, Handover, Demo Script, Implementation Record, QA | 599 giờ = 427 + 172; 10 giờ/tuần; "5 mẫu"; ngày 24/09 | Cần cập nhật theo 656,3 giờ và 3 mẫu |
| Meeting Log, Hướng dẫn cài đặt | Nhắc "ủy quyền người dùng cho công cụ", ISS-G-00x, EV-00x | Các mã này trỏ tới sổ chưa có trên Drive |

Con số kiểm thử (frontend 79/79, backend 18/60 đạt) là kết quả ngày 24/09 trong bản cũ; chưa có bằng chứng mới nên không nên mang nguyên sang.

## Kết quả theo tài liệu v2.x

### Business Case v2.4 — 0 mục 🔴 thiếu
- Đủ nhu cầu, phương án (4 lựa chọn, 1 được chọn), khả thi (kỹ thuật, pháp lý, vận hành, tiến độ, nguồn lực) và điều kiện phê duyệt.
- Số khớp Charter và Benefit Management Plan.
- 🔵 Hai dòng lịch sử (v2.3, v2.4) chưa có người phê duyệt. Phụ đề bìa ghi "Draft -chờ phê duyệt" thiếu khoảng trắng.
- 🔵 Bảng Xác nhận ở bìa khó đọc (tên lệch cột).
- 🟡 Giá trị 45 phút/video hiện ghi như hiện trạng. Nên ghi rõ là giả định kế hoạch (AS-01) và bỏ yêu cầu "bắt buộc đo" ở các tài liệu khác.

### Benefit Management Plan v2.3 — 0 mục 🔴 thiếu
- Đủ 7 thành phần: lợi ích mục tiêu, liên kết chiến lược, mốc thời gian, người phụ trách, thước đo, giả định, rủi ro.
- Bảng dòng tiền và độ nhạy tính lại đều đúng.
- 🟡 Mục 6 ghi "Chưa đo hiện trạng… bắt buộc đo trước 13/09/2026". Ngày đã qua và Assumption Log vẫn để "Mở"; nên đổi thành giả định kế hoạch đã chấp nhận hoặc ghi kết quả đo.
- 🔵 Người phụ trách ghi theo chức danh, chưa rõ ai theo dõi sau bàn giao. Dòng LI-05 chưa có số hiện trạng.
- 🔵 Lịch sử v2.3 chưa có người phê duyệt.

### Project Charter v2.4 — 0 mục 🔴 thiếu (chờ ký)
- Đủ 12 mục, mục tiêu theo SMART kèm hạn, rủi ro/giả định/ràng buộc, ngân sách, bảng thẩm quyền, câu trao quyền và khối ký.
- 🟡 Mốc M2 yêu cầu "3 mẫu được duyệt", nhưng mục tiêu OB-04 hạn 18/10 và WBS đặt 3 mẫu ở M3 (chỉ tài sản đồ hoạ ở M2). Cần chọn một.
- 🔵 Lịch sử v2.3 và v2.4 chưa có người phê duyệt; bảng Xác nhận ở bìa khó đọc.

### Assumption Log v2.4 — 0 thiếu · 1 một phần
- Có cả giả định (AS) và ràng buộc (CT), có người chịu trách nhiệm và hạn kiểm.
- 🔴 một phần: sổ chưa được cập nhật theo tiến độ. **20 giả định đã quá hạn kiểm** (hạn M0–M3) mà vẫn "Mở": AS-01, 02, 03, 06, 09, 10, 11, 14, 15, 16, 17, 18, 22, 23, 24, 32, 35, 36, 38, 48. Chưa có cập nhật sau phân tích rủi ro.
- 🟡 Dùng bốn trạng thái riêng (Mở, Đã xác nhận, Bị bác bỏ, Không còn áp dụng) thay vì ba trạng thái của mẫu; thiếu cột Impact Area (đã thay bằng chia theo nhóm).
- 🔵 Chưa liên kết giả định sai sang mã rủi ro RS-xx.

### Stakeholder Register v1.1 — 0 thiếu · 4 một phần
- Có 8 bên liên quan với kỳ vọng, kênh, mức tham gia hiện tại và mong muốn, chiến lược.
- 🔴 một phần: (1) chưa ghi "phase quan tâm nhất" và vị trí công tác; (2) giảng viên và 3 thành viên không có trong sổ — Charter §9 và §10.2 có giải thích, nhưng sổ chưa ghi lý do; (3) chưa nêu rõ đang dùng lưới Power/Interest; (4) ngày ghi vẫn là 01/09/2026 dù file được sửa 21/10, không có lịch sử cập nhật.
- 🔵 Sổ ghi số điện thoại giả định. Nên chỉ để kênh chung.

### Project Management Plan v2.5 — 0 thiếu · 2 một phần
- Đủ cách làm dự án, cổng duyệt, 10 kế hoạch con (mua sắm ghi "không áp dụng"), ba mốc chuẩn, quy trình thay đổi theo người duyệt, danh sách tài liệu chịu kiểm soát thay đổi, quản lý phiên bản, theo dõi, đóng dự án.
- 🔴 một phần: họp khởi động có nội dung nhưng chưa có ngày và biên bản, trong khi dự án đã tuần 10; chưa dùng tên "quản lý cấu hình", mới có mục quản lý phiên bản.
- 🟡 Mốc chuẩn chi phí ghi 656,3 giờ, còn 18,7 giờ dự phòng nằm ngoài mốc chuẩn. Theo quy tắc, mốc chuẩn chi phí phải gồm dự phòng của dự án, và chỉ khoản dự phòng của Nhà tài trợ nằm ngoài. Cần ghi lại cho rõ.
- 🟡 Nhắc ba bảng tính chưa có trên Drive (xem kết luận 4).
- 🔵 Bảng phân công dòng 4.1 có ô trống; câu "Quang kiểm tra" ở 3.2 nên ghi đủ tên.

### Phạm vi và yêu cầu v1.1 — 0 thiếu · 1 một phần
- Có tuyên bố phạm vi, loại trừ, tiêu chí nghiệm thu 11 điểm, câu chuyện người dùng, 13 + 8 + 4 yêu cầu có tiêu chí chấp nhận và cột nối về yêu cầu Charter.
- 🔴 một phần: truy vết đầy đủ tới mục tiêu và ca kiểm thử nằm ở bảng tính chưa có.
- 🔵 Còn hai chỗ "(Cần soát)" trong thân văn: mục 6.1 và mục 7 (NF-04). Mục 6.1 mỏng hơn bản nháp Interface: chưa có mã lỗi, chống gửi lặp.

### WBS và từ điển WBS v2.4 — 0 mục 🔴 thiếu
- Cây 6 nhánh, 42 gói, lá là sản phẩm giao được, từ điển đủ mã gói, người phụ trách, giờ, mốc, rủi ro/giả định, điều kiện xong. Tổng giờ khớp Charter, PMP, Assumption Log.
- 🟡 10 gói còn chưa chia việc (đánh dấu *); chấp nhận được theo cuốn chiếu, cần chia trước khi bắt đầu từng gói.
- 🔵 Gói 4.2 cộng các lá ra 196,2 giờ, bảng ghi 196,3 (lệch làm tròn). Thiếu bảng lịch sử và khối ba người xác nhận như các tài liệu khác.

## Việc nên làm trước
1. Chốt xử lý 16 bản nháp: giữ ở thư mục nháp, gộp vào PMP / Phạm vi và yêu cầu, hoặc viết lại theo nền v2.x. Ưu tiên 4 file Planning, vì đang vượt quy tắc 6 file.
2. Dựng 3 bảng tính còn thiếu trên Drive (Lịch và chi phí, Truy vết và kiểm thử, Sổ rủi ro) theo nền 656,3 giờ.
3. Cập nhật Assumption Log cho 20 mục quá hạn; cập nhật ngày và lịch sử Stakeholder Register.
4. Họp khởi động, ghi biên bản lên Drive.
5. Sửa nhỏ: mốc M2 so với OB-04, phần dự phòng trong mốc chuẩn chi phí, dòng 45 phút, người phê duyệt trong lịch sử.
