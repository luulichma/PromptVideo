# B_04 — Theo dõi, kiểm thử và thay đổi module B

| Thuộc tính | Giá trị |
| --- | --- |
| Kỳ chốt | 24/09/2026; phiên bản 1.0 |
| Chủ / kiểm / xác nhận nội bộ | Nguyễn Việt Quang / Phạm Quang Anh / Nguyễn Thế Chiến |
| Trạng thái | Có dữ liệu theo dõi; chưa hoàn tất kiểm chéo hoặc nghiệm thu |
| Nguồn | [B_01](../../02_Planning/_module-input/B_Tai_khoan_thue_bao/B_01_Yeu_cau_va_kiem_thu_v1.0.md), [B_02](../../02_Planning/_module-input/B_Tai_khoan_thue_bao/B_02_WBS_uoc_luong_rui_ro_v1.0.md), [B_03](../../03_Executing/_module-input/B_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md) |

## 1. Kết quả kiểm theo bằng chứng

| Phạm vi | Kết quả ngày 24/09 | Kết luận được phép |
| --- | --- | --- |
| Backend unit PlanPolicyTests | 18 Passed trong [EV-002 TRX](../../../evidence/2026-09-24/backend-tests.trx) | Các unit case về policy và tháng UTC đã đạt lần này; không phải toàn bộ B |
| Backend integration | 42 Failed trong runner do Docker/Testcontainers không sẵn sàng | **Blocked môi trường**; chưa kiểm chứng nghiệp vụ tích hợp lần này, không kết luận có 42 lỗi sản phẩm |
| Frontend unit | EV-001: 79/79, 12 file | Bộ test hiện hành xanh; không chứng minh backend thật hoặc hợp đồng mới |
| E2E A–B–C, lỗi complete/TTL | Chưa chạy mới với máy chủ thật | Chưa thử; source lệch mục tiêu tại ISS-G-001 |
| Coverage B ≥ 70%, p95 ≤ 1 giây, HAR 0 byte nội dung | Chưa có số đo/report đủ | Chưa đo; không lấy số test làm phần trăm coverage |
| Nhắc hạn, Invoice, Seat, cổng thật, IF-CB-01 | Chưa có chức năng đầy đủ | Chưa triển khai hoặc Blocked; không tính pass |
| Kết quả lịch sử 17/09 | Ghi 60/60 nhưng thiếu raw log/commit trong chính nguồn | Chỉ bằng chứng lịch sử; không thay lần chạy 24/09 |

Tên test liên quan từng REQ/TC nằm ở B_01. Khi chạy lại, chỉ cập nhật ca có kết quả đúng phiên bản và ngày; không đổi tất cả REQ thành “Done” từ một bộ test xanh. Giữ nguyên TRX/log ngày 24/09 khi có lần chạy sau.

## 2. Vấn đề đang mở

Các mã ISS-G do sổ chung quản lý; các hàng sau là phần B của vấn đề chung, không phải issue được cấp lại.

| ID / nhóm theo dõi | Hiện trạng | Chủ xử lý | Việc phải làm và lý do | Điều kiện đóng |
| --- | --- | --- | --- | --- |
| ISS-G-001 | Frontend giao file khi complete còn best-effort; TTL có thể trả lượt cho file đã giao | Chiến phía A; Việt Quang phía B | Sửa thứ tự giao file, kiểm trạng thái retry và thử lỗi mạng/TTL vì quota phải khớp đầu ra thật | TC-B-41 và TC-I do P03 quản lý đạt trên A–B thật, có bằng chứng |
| ISS-G-003 | Apply event có dedup nhưng checkout chưa có operation key | Việt Quang | Thêm chống lặp thao tác mua và thử retry vì key event không bảo vệ toàn bộ thao tác mua lại | TC-B-100 và event replay đạt, không nhân đôi kỳ |
| ISS-G-005 | Thiếu actual giờ/chi phí | Việt Quang thu; từng người chịu nguồn mình | Ghi từ lúc làm và đối soát nguồn cũ vì planned hour không phải actual | Actual có ngày/chứng cứ; phần thiếu vẫn công khai |
| CR-G-001 | B dự báo 128,6667 giờ so với 60 giờ cũ; còn gate và PP | Chiến điều phối; Việt Quang tổng hợp | Cân lịch, công suất, ngân sách toàn dự án và trình đúng quyền; không ép giờ để vừa trần | Forecast/gate minh bạch; phương án và baseline có quyết định đúng quyền |
| ISS-G-004 / EV-002 | Docker không phục vụ Testcontainers | Việt Quang phối hợp người quản môi trường | Khôi phục môi trường và chạy lại vì lỗi fixture chưa kiểm được nghiệp vụ | Log/TRX mới; lỗi logic nếu có lập issue riêng |
| Test B còn thiếu | Paid về Free giữ usage, cancel xuyên tháng, đua trạng thái, quyền Staging | Việt Quang | Viết/chạy TC-B-42/95/97/98/99 vì ngoại lệ quyết định quota và quyền | Có source test và kết quả độc lập |
| Phần ngoài demo | Cổng thật, nhắc hạn, Invoice, Seat và UI thuê bao còn thiếu | Việt Quang | Phân rã PP và thực hiện phụ thuộc; chưa làm không đồng nghĩa loại khỏi phạm vi | Đạt TC tương ứng và xác nhận đúng thẩm quyền |

## 3. Thay đổi nội dung kỳ này

| Nội dung | Lý do | Tác động / trạng thái |
| --- | --- | --- |
| Tách B_01/B_02 và bổ sung B_03..05 | Thực hiện CV-B-01 | Nguồn ghép rõ; bản cũ giữ lịch sử; chờ review con người |
| WBS 7.x → 4.3.x; quy tắc nội bộ → QT-B | Dùng mã chung theo giai đoạn | RTM, lịch, chi phí nối cùng mã |
| Sửa reserve/paid expiry/TTL | Đối chiếu source và quyết định nghiệp vụ | Bỏ mâu thuẫn “chỉ complete mới trừ” và “hết paid cấp kỳ mới”; test mới còn thiếu |
| 60 → 128,666666... giờ, tách hai PP | Ước lượng theo đầu ra | Tăng 68,666666... giờ; forecast chưa là baseline |
| 6 giờ dự phòng cố định → exposure 33,4 giờ | Tách điểm P×I khỏi xác suất×giờ | Chưa duyệt reserve; không tính phòng ngừa hai lần |
| Một A mỗi dòng; tách Sponsor/GV | Tuân thủ quyền tại Charter | Không tự nhận PM ký nghiệm thu sản phẩm |
| Tách source/test/lịch sử/actual | EV-002 bị Docker chặn | Trạng thái phản ánh đúng giới hạn bằng chứng |

Đây là sửa hồ sơ và quyết định nội bộ. Chưa ghi nhận Nhà tài trợ hoặc giảng viên đã duyệt baseline hay ký nhận sản phẩm.

## 4. Công và chi phí

| Chỉ số | Kỳ 24/09 | Cơ sở / giới hạn |
| --- | --- | --- |
| Forecast B toàn phạm vi | 128,666666... giờ | WP ước lượng từ hoạt động; PP ước lượng cấp gói |
| Actual giờ/tiền | Thiếu dữ liệu | Chưa có nhật ký/chứng từ đủ |
| ETC/EAC đáng tin cậy | Chưa xác định | Chưa đối soát actual và khối lượng còn lại |
| PV/EV/AC, SPI/CPI | Chưa tính | Thiếu baseline cùng phạm vi/đơn vị và actual đáng tin cậy |
| Exposure rủi ro | 33,4 giờ | Phán đoán planning; không thay khoản reserve được duyệt |

Nếu dùng ví dụ EVM giảng dạy, đặt bảng riêng ghi rõ “mô phỏng”; không ghép vào kết quả kỳ này.

## 5. Phiếu Việt Quang kiểm chéo A

Chưa có bằng chứng Việt Quang đã thực hiện; đây là checklist nhận việc sẵn dùng. Mã TC-A lấy từ A_01, TC-I lấy từ P03; không cấp lại mã.

| Đầu việc | Vì sao cần kiểm | Đầu ra cần giao |
| --- | --- | --- |
| So A_01/A_02 với P03 và B_01 | A thực hiện quyền do B cấp, hai đặc tả phải cùng quy tắc | Nhận xét có vị trí, mã yêu cầu và phương án sửa |
| Kiểm trần, watermark, lần thứ tư | API đúng chưa bảo đảm file đúng | File/video và API evidence của cùng phiên thử |
| Kiểm hủy/lỗi/timeout/TTL/complete | Lệch trạng thái có thể làm thất thoát quota | Reservation và file giao được đối soát |
| Kiểm hết paid và cancel xuyên tháng | Bản cũ mô tả sai reset/hoàn | Bộ đếm kỳ gốc và kỳ mới |
| Kiểm HAR không chứa nội dung | 0 byte phải được kiểm ở luồng thật | HAR che bí mật và bảng kiểm payload |
| Rà dấu “đã đạt”, forecast/actual | Demo hoặc test cục bộ không thay nghiệm thu | Danh sách kết luận thiếu nguồn |

Với A: Việt Quang kiểm, Chiến sửa, Quang Anh xác nhận nội bộ. Với B: Quang Anh kiểm, Việt Quang sửa, Chiến xác nhận nội bộ.
