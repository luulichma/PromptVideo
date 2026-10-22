# E01 — Hồ sơ thực hiện và tích hợp

**Cập nhật:** 24/09/2026 · **Phiên bản:** v1.0 · **Trạng thái:** Dự thảo làm việc, chưa nghiệm thu.

**Chủ nội dung:** Chiến. **Kiểm tra được giao:** Việt Quang. Đây là phân công, không phải chữ ký hay xác nhận đã review. Codex cập nhật nội dung theo ủy quyền của người dùng.

## 1. Kiến trúc và phần đã xây dựng

Frontend React/Vite thực hiện soạn thảo, dựng, mã hóa và lưu trữ cục bộ. Backend ASP.NET Core 10 tổ chức thành các module Identity, Subscriptions, Exports, Templates và Admin; PostgreSQL giữ dữ liệu tài khoản, quyền, hạn mức và audit. API dùng cookie/CSRF; OpenAPI được dùng để sinh kiểu dữ liệu cho client. Theo thiết kế, nội dung video không đi qua máy chủ; phép kiểm network đầu-cuối vẫn cần bằng chứng riêng.

| Module | Phần có trong mã tại lần rà | Phần thiếu hoặc khác hợp đồng |
| --- | --- | --- |
| A | Editor 5 cảnh, 5 mẫu, Canvas, Worker H.264, MP4, lưu/mở và client quyền/catalog | Vẫn có thể giao file khi complete chưa được xác nhận; thiếu snapshot mẫu; chưa có pause và đủ bằng chứng theo Charter |
| B | Identity, entitlements, hạn mức, reserve/complete/cancel, chống lặp sự kiện thanh toán, cổng giả lập và một phần AccountPage | Chưa đủ chống lặp yêu cầu checkout, cổng thật, nhắc hạn, hóa đơn, seats và điều chỉnh hạn mức hỗ trợ |
| C | Catalog Active, API đổi trạng thái Admin, snapshot metrics và health | Chưa đủ CRUD/assets, kiểm phiên bản trước phát hành, ticket, điều chỉnh hạn mức, giao diện Admin và nguồn đo lợi ích |

Nguồn chi tiết: [A_03](_module-input/A_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md), [B_03](_module-input/B_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md), [C_03](_module-input/C_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md). P03 quy định hợp đồng đích; mã hiện có không tự thay thế yêu cầu.

## 2. Các bước tích hợp và điều kiện qua cổng kiểm tra

1. Dựng PostgreSQL, API và frontend theo E03; kiểm health và seed bằng tài khoản thử riêng.
2. Kiểm Auth, CSRF và capabilities, sau đó chạy TC-I-01/02. Đối chiếu UI, API và UsagePeriod; ảnh chụp UI không thay bằng chứng dữ liệu trong DB.
3. Kiểm Personal giả lập trên môi trường non-Production và probe codec 1080p theo TC-I-03; ghi rõ không có thanh toán thật.
4. Kiểm Retired và dự án cũ theo IF-CA-01 bằng TC-I-04; giữ ISS-G-002 mở nếu còn thiếu snapshot.
5. Thu HAR/log đã che token; kiểm dấu nhận diện nội dung và độ trễ theo TC-I-05/06.
6. Ghi bằng chứng vào EV và M05, sửa lỗi rồi kiểm lại. Chỉ chuyển sang xác nhận phạm vi khi QC đạt và đã có review.

## 3. Nhật ký được xác minh ngày 24/09

Đã chuẩn hóa mã, sửa đầu vào A/B/C, tạo kế hoạch chung và các sổ theo dõi từ nguồn. Frontend unit đạt 79/79 theo EV-001. Backend có 60 ca: 18 đạt, 42 thất bại do môi trường Docker/Testcontainers theo EV-002; Docker daemon chưa sẵn sàng. Việc thử khởi động Docker chưa giải quyết được điều kiện này. Đợt chuẩn hóa hồ sơ không thay đổi mã chức năng sản phẩm.

Giờ công và chi phí thực tế của thành viên chưa có nguồn; E05 giữ ô trống kèm chú giải. Codex thực hiện thao tác rà và chạy tự động, không gán kết quả đó thành xác nhận của Chiến, Việt Quang hoặc Quang Anh. Build, hash và môi trường được dẫn tại [EV INDEX](../../evidence/INDEX.md).
