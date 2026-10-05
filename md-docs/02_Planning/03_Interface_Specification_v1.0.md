# P03 — Đặc tả giao tiếp A–B–C

**Phiên bản:** v1.0 · cập nhật 24/09/2026. **Trạng thái:** Working Draft đã chuẩn hóa nội dung; chưa nghiệm thu.

**Chủ nội dung:** Chiến. **Người kiểm tra được giao:** Việt Quang. Việc ghi tên là phân công, không phải chữ ký xác nhận. Nội dung được cập nhật bằng Codex theo ủy quyền của người dùng.

## 1. Ranh giới và nguồn hợp đồng

[DEC-010–013](../00_Quyet_dinh_va_quy_uoc_ma.md) là hành vi đích. Mã/API hiện tại lấy từ `src/contracts/openapi/PromptVideo.Api.json`, ExportsModule, ExportReservationService, TemplatesModule, AdminModule và frontend reservation/exportProject/schema. Tách rõ phần đã có và phần còn thiếu. Không gửi chữ, ảnh, tên ảnh, dữ liệu cảnh hoặc MP4 lên server; NF-G-01 kế thừa OB-09/NF-03.

## 2. IF-AB-01 — quyền xuất

| Lời gọi | Đầu vào | Thành công / ý nghĩa |
| --- | --- | --- |
| GET /api/security/csrf | Cookie phiên | Lấy token; lấy lại sau đăng nhập |
| GET /api/me/capabilities | Phiên đăng nhập | planCode, planName, maxExportHeight, watermarkRequired, exportsPerMonth, exportsUsed, exportsRemaining, hasUnlimitedExports, periodStartUtc, periodEndUtc, expiresAtUtc; dùng để hiển thị |
| POST /api/exports/reservations | Cookie + X-CSRF-TOKEN; idempotencyKey dài 1–128; requestedHeight | 200: reservationId, status, grantedHeight, watermarkRequired, expiresAtUtc, exportsRemaining, exportsPerMonth |
| POST /api/exports/reservations/{id}/complete | Cookie/CSRF; ID thuộc người gọi | 200, trạng thái Completed; giữ lượt đã tính, không cộng thêm |
| POST /api/exports/reservations/{id}/cancel | Cookie/CSRF; ID thuộc người gọi | 200, trạng thái Canceled; hoàn đúng một lần về UsagePeriod gốc |

Luồng: kiểm hợp lệ/encoder/dung lượng → reserve → tăng used ngay khi giữ thành công → mã hóa theo quyền server → complete có xác nhận → giao kết quả. Retry cùng lần thử dùng cùng idempotencyKey. Complete/cancel lặp không đổi bộ đếm lần hai; đóng theo trạng thái đối nghịch nhận 409.

Free có 3 lượt/tháng UTC, 720p và watermark; Personal/Business có 1080p không watermark khi giấy phép còn hiệu lực. Paid hết hạn về Free và giữ số đã dùng trong tháng, không tự reset về 0. Tháng mới tạo UsagePeriod mới; cancel reservation tháng cũ hoàn vào kỳ cũ.

TTL 30 phút là expiresAt, **không phải cam kết thu hồi đúng phút 30**. Reserve mới dọn reservation hết hạn; sweeper chạy khi được bật và mặc định tắt. Khoảng quét mặc định khi bật là 6 giờ. Complete sau TTL trả 409.

| Phản hồi | A phải hiển thị/xử lý |
| --- | --- |
| 401 | Nhắc đăng nhập; không mã hóa khi reserve bị từ chối |
| 403 quota | Báo hết lượt tháng; không nhầm với cấm 1080p, vì độ cao được clamp theo quyền |
| 400 | Đầu vào độ cao/key hoặc CSRF không hợp lệ; không retry vô hạn; lấy token mới khi cần |
| 404 complete/cancel | Chưa xác nhận hoàn tất/hoàn lượt; ghi ID và đối soát quyền sở hữu |
| 409 | Không giao kết quả như thành công; xử lý trạng thái đã đóng/hết hạn |
| 429 | Auth có rate limit; không mô tả quota xuất như rate limit 429 |
| Mất mạng/5xx | Trước reserve không mã hóa; sau reserve giữ cùng ID để retry/đối soát, không tự tạo lượt mới |

**ISS-G-001:** frontend hiện nuốt lỗi complete/cancel và có thể giao file, kể cả đường ghi trực tiếp. Đích yêu cầu vùng ghi tạm/commit và xử lý xuất dài, không chỉ thêm thông báo. TC-A-20/36 đã đổi kỳ vọng có lịch sử, chưa đạt. Client hiện cũng chưa giữ trường status trong kiểu reservation; cần kiểm để retry không tái sử dụng reservation đã kết thúc như một lượt mới. Giới hạn chống can thiệp phía client theo Charter vẫn tồn tại; không tuyên bố ngăn mọi hành vi cố tình sửa client.

## 3. IF-CA-01 — danh mục và phiên bản mẫu

GET /api/templates công khai trả mẫu **Active** với templateKey, name, version, status, manifestJson. Dùng thống nhất Draft/Active/Retired; Admin POST /api/admin/templates/{key}/status đã có. Seed 5 key: classic, bold, minimal, story, promo.

Chốt hai lớp: metadata server mô tả sceneCount=5, sceneSeconds=12, safeArea, titleMaxChars; presentation frontend chứa id, name, previewAssetId, supportedProjectVersion và bố cục. Cả hai có version; adapter kiểm tương thích, không coi hai JSON là cùng schema. Trước khi Active, kiểm manifest, key và presentation có sẵn, không có URL ngoài/nội dung người dùng. Mã list/status chưa chứng minh CRUD/upload/version validator đầy đủ.

Dự án đã lưu phải có templateKey + version + snapshot tham số dựng; migration cho dự án V1 chỉ có templateId phải giữ diện mạo gốc. Retired không được chọn mới; dự án cũ vẫn mở/xuất bằng snapshot kèm cảnh báo. Offline dùng snapshot/cache có nhãn thời điểm; chưa có cache thì dùng bản đóng gói và ghi chưa xác minh Active. **ISS-G-002:** mã hiện chưa lưu snapshot/version; đổi trạng thái catalog chưa giải quyết vấn đề này.

## 4. IF-CB-01 — điều chỉnh hạn mức qua hỗ trợ

**Hợp đồng đích, chưa có endpoint triển khai.** Chọn `POST /api/admin/support/quota-adjustments` làm đường dẫn thiết kế; không đưa vào danh sách API đã có. Request: userId, usagePeriodStartUtc, delta, ticketId, reason, idempotencyKey; cần Admin + CSRF. Delta là số lượt bù có giới hạn do policy B kiểm; không sửa entitlement gốc.

Response đích: adjustmentId, userId, usagePeriodStartUtc, balanceBefore, balanceAfter, auditEventId. Cùng key/cùng payload trả kết quả cũ; cùng key/payload khác trả 409. Input sai trả 400; người thường 403; thiếu ticket/user trả 404.

B thực hiện transaction kiểm quota, cập nhật và audit nguyên tử. C sở hữu ticket và UI, tránh tính công hai lần. Phải thử cạnh tranh, retry, kỳ cũ, quyền và rollback khi audit thất bại trước nghiệm thu.

## 5. Sáu kiểm thử tích hợp do P03 sở hữu

| Mã | Thiết lập và bước | Kết quả mong đợi | Bằng chứng / chủ |
| --- | --- | --- | --- |
| TC-I-01 | User Free mới, DB usage=0; xuất 3 video 720p rồi lần thứ tư | 3 MP4 có watermark; lần thứ tư bị chặn, DB usage=3 | HAR + DB snapshot + file; Chiến/Việt Quang |
| TC-I-02 | Ghi quota trước; reserve rồi hủy giữa chừng; reload | Quota trở lại mức trước sau cancel được xác nhận; retry không hoàn hai lần | API/DB/UI; Chiến/Việt Quang |
| TC-I-03 | Admin nonProduction giả lập Personal; đọc quyền mới; xuất 1080p | Không thu tiền thật; quyền cập nhật; MP4 không watermark nếu probe đạt | API + file + probe; Việt Quang/Chiến |
| TC-I-04 | Mở dự án dùng mẫu; Admin chuyển Retired; tải danh mục và mở dự án cũ | Không chọn mới; dự án cũ mở bằng snapshot/version | UI + API + project file; Quang Anh/Chiến |
| TC-I-05 | Thu HAR/log toàn TC-I-01 với marker chữ/ảnh riêng | 0 byte chữ, ảnh, tên ảnh, cảnh, MP4 trong request/log; auth metadata được phép | HAR che bí mật + bảng rà payload; Chiến/Quang Anh |
| TC-I-06 | Đo click Xuất → khung đầu có/không reserve, cùng máy/dataset; ghi số mẫu | Độ trễ thêm ≤ 1 giây; API p95 đo riêng, không thay phép đo client | CSV/timestamp/môi trường; Chiến/Việt Quang |

Ngày 24/09, cả sáu chưa có bằng chứng đầu-cuối với server thật đầy đủ. EV-001 unit pass và EV-002 backend bị chặn môi trường không dùng để đánh dấu TC-I pass. Bổ sung TC module cho ngoại lệ; P06 quản lý tiêu chí xuất kết quả.

## 6. Quản lý thay đổi hợp đồng

Chiến tổng hợp; Việt Quang kiểm server/quota; Quang Anh kiểm catalog/support. Mỗi thay đổi phải cập nhật đầu vào module, P02/P03, OpenAPI khi triển khai, P09, test và issue/change. Giữ ý nghĩa mã TC; đổi kỳ vọng phải ghi lịch sử và thử lại. Không đưa API chưa có vào cột đã triển khai.
