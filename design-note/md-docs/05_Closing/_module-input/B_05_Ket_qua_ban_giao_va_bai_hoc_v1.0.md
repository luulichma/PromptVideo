# B_05 — Kết quả, bàn giao có điều kiện và bài học module B

| Thuộc tính | Giá trị |
| --- | --- |
| Phiên bản / ngày | 1.0 / 24/09/2026 |
| Trạng thái | Snapshot chuẩn bị bàn giao; chưa tuyên bố đóng module hoặc dự án |
| Chủ / kiểm / xác nhận nội bộ | Nguyễn Việt Quang / Phạm Quang Anh / Nguyễn Thế Chiến |
| Căn cứ | [B_01](../../02_Planning/_module-input/B_Tai_khoan_thue_bao/B_01_Yeu_cau_va_kiem_thu_v1.0.md), [B_02](../../02_Planning/_module-input/B_Tai_khoan_thue_bao/B_02_WBS_uoc_luong_rui_ro_v1.0.md), [B_03](../../03_Executing/_module-input/B_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md), [B_04](../../04_Monitoring_and_Controlling/_module-input/B_04_Theo_doi_kiem_thu_va_thay_doi_v1.0.md) |

## 1. Bộ nội dung để tiếp nhận

| Thành phần | Đã có | Điều kiện tiếp nhận |
| --- | --- | --- |
| Tài liệu B | 21 REQ, 7 NF, 8 QT, 50 TC; 6 gói WBS; 12 hoạt động WP; 9 rủi ro | Còn review chéo; không tự coi là chữ ký phê duyệt |
| Tài khoản/quyền/quota | Identity, PlanCatalog, EntitlementService, ExportReservationService | Chạy lại integration sau sửa môi trường; xử lý ISS-G-001 |
| Thanh toán giả lập | Event dedup, kiểm số tiền, gia hạn trong service | Chỉ nonProduction theo quyền; gắn nhãn không thu tiền; xử lý ISS-G-003 |
| UI tài khoản | Đăng nhập/đăng ký và bảng quyền | Thiếu hạn thuê bao, mua/gia hạn, hóa đơn/chỗ |
| Kiểm thử 24/09 | Backend 18 pass/42 fail fixture; frontend 79 pass | Policy unit đạt; integration Blocked môi trường; không suy ra đạt OB-15 |
| Dữ liệu kế hoạch | B forecast 128,666666... giờ; exposure 33,4 giờ | Chưa có actual/ETC và contingency được duyệt |

## 2. Tồn đọng bàn giao

| Tồn đọng | Người tiếp tục | Vì sao phải làm | Tiêu chí hoàn tất |
| --- | --- | --- | --- |
| ISS-G-001 giao file/complete/TTL | Chiến phía A, Việt Quang phía B | Lượt phải khớp file đã giao | TC-B-41/TC-I tương ứng đạt trên luồng thật |
| ISS-G-003 checkout idempotency | Việt Quang | Retry mua không tăng kỳ ngoài ý muốn | Operation key, đối soát event, TC-B-100 đạt |
| ISS-G-004: backend bị chặn Docker | Việt Quang phối hợp vận hành | Chưa có integration runtime mới | TRX mới kiểm được nghiệp vụ, lỗi môi trường đã giải quyết |
| Coverage, p95, HAR và review B | Việt Quang cung cấp; Quang Anh kiểm | Chứng minh NF và giao tiếp A–B | Bằng chứng đúng commit/môi trường/ngưỡng |
| Cổng thật và nhắc hạn | Việt Quang | Fake chưa chứng minh OB-15 đầu-cuối thật | Adapter được duyệt; test thật ≤ 5 phút; nhắc đúng mốc |
| Invoice PP 4.3.5 | Việt Quang | Còn thuộc phạm vi v2.1 nhưng chưa có schema/API | Xác minh dữ liệu thuế, phân rã gói, TC-B-71..74 |
| Seats PP 4.3.6 | Việt Quang | Seats=5 chưa quản lý được 5 tài khoản | Phân rã gói, owner + 4 member, TC-B-61..64 |
| UI thuê bao và IF-CB-01 | Việt Quang phối hợp Quang Anh | Giao diện và hỗ trợ cần API đúng quyền | TC-B-81/96 đủ bằng chứng |
| Actual và forecast toàn dự án | Việt Quang thu; Chiến điều phối | Giờ kế hoạch không phải giờ đã làm | Đối soát nguồn; ISS-G-005/CR-G-001 có phương án đúng quyền |

## 3. Số liệu dùng cho tổng kết

Dự báo B toàn phạm vi là **128,666666... giờ**, tăng 68,666666... so với 60 giờ bản cũ. Trong đó 48 giờ là hai PP, chưa lập hoạt động chi tiết đến khi đủ đầu vào. Chi phí công quy đổi 10.293.333,33 VND theo 80.000 VND/giờ tách khỏi tiền mặt. Exposure 33,4 giờ là đầu vào định lượng rủi ro, chưa là reserve được duyệt.

Thiếu actual nên chưa chốt tổng giờ đã dùng, tiền đã chi, tiết kiệm, SPI/CPI hoặc tỷ lệ hoàn thành. Nguồn lịch sử 17/09 ghi 60/60 test pass; nguồn 24/09 là 18 pass/42 fail fixture do Docker. Đọc mỗi kết quả cùng môi trường, phiên bản và giới hạn.

## 4. Bài học có căn cứ

- **Quy tắc cần đối chiếu source và luồng đầu-cuối.** Bản cũ viết chỉ Completed mới trừ; source tăng ngay tại reserve, frontend còn complete best-effort. Sửa câu chữ phải đi cùng issue và test.
- **Tách đầu ra giúp ước lượng rõ hơn.** Hóa đơn và 5 chỗ từng nằm trong 16 giờ payment; nay là hai PP có giờ riêng, không bị che bởi tổng 60 giờ.
- **Điểm rủi ro không là xác suất.** Dự phòng 6 giờ/10% và phép 12/15 thiếu cơ sở; cần xác suất giả định, tác động giờ và chi phí phòng ngừa tách riêng.
- **Lịch sử khác kết quả hiện tại.** Note 60/60 không ngăn integration bị chặn môi trường kỳ 24/09; phải giữ cả hai kết quả với nguồn.
- **Một A cho một việc.** Kiểm nội bộ, duyệt thay đổi và nghiệm thu sản phẩm có thẩm quyền khác nhau; không gộp Sponsor/GV và chủ module vào cùng một dòng.

## 5. Điều kiện đóng và trách nhiệm tiếp tục

Việt Quang tiếp tục chịu nội dung B; Quang Anh kiểm B; Chiến xác nhận nội bộ và tổng hợp. Chưa có bằng chứng người vận hành hoặc bên nhận đã tiếp nhận; tài liệu này không thay biên bản ký nhận.

Chỉ chuyển “hoàn thành nội bộ” khi nội dung qua review, tiêu chí mục tiêu có bằng chứng và tồn đọng được gán chủ/hạn. Nhà tài trợ nghiệm thu sản phẩm theo Charter; giảng viên đánh giá học thuật riêng. Kết thúc đợt tài liệu không tự đồng nghĩa đóng toàn bộ module hoặc đạt toàn bộ v2.1.
