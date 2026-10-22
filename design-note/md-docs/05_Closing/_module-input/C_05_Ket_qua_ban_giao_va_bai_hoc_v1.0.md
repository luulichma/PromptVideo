# C_05 — Kết quả, bàn giao có điều kiện và bài học module C

| Thuộc tính | Giá trị |
| --- | --- |
| Phiên bản / ngày cập nhật | v1.0 / 2026-09-24 |
| Trạng thái | Draft chuẩn bị bàn giao; chưa đóng dự án hoặc xác nhận tiếp nhận |
| Chủ / kiểm tra / xác nhận nội bộ | Phạm Quang Anh / Nguyễn Thế Chiến / Nguyễn Việt Quang |
| Gate cập nhật | DOC-04 ngày 05/10; rà toàn bộ tại DOC-05 ngày 07/10 |

## 1. Kết quả đã có và giới hạn

Bộ C_01/C_02 đã tách yêu cầu, kiểm thử, WBS, ước lượng và rủi ro; chuẩn hóa mã và hợp đồng C–A/B. P06/P07 tách công việc chất lượng, nguồn lực và truyền thông chung khỏi tính năng C. C_03/C_04 ghi hiện trạng, cách chạy và khoảng trống. Đây là kết quả **soạn hồ sơ**. Catalog, đổi trạng thái, metrics và health đã có một phần mã nguồn; chưa có chứng cứ hoàn thành toàn bộ CRUD, assets, hỗ trợ, giao diện quản trị hoặc đo lợi ích.

Nguồn thực thi ngày 24/09: frontend 79/79 tests đạt (EV-001); backend có 18 passed, 42 failed trên tổng 60 vì Docker/Testcontainers không sẵn (EV-002). Kết quả này không chứng minh toàn bộ C đạt, cũng không thể diễn giải thành 42 lỗi nghiệp vụ. Giờ thực, chi thực và chữ ký nhận chưa có nguồn thì giữ trạng thái **chưa ghi nhận**.

## 2. Gói chuyển giao và người nhận dự kiến

| Hạng mục | Nguồn bàn giao | Người chuẩn bị / người nhận dự kiến | Điều kiện tiếp nhận | Hiện trạng |
| --- | --- | --- | --- | --- |
| Yêu cầu, TC và RTM C | C_01, P09 và P06 | Quang Anh / Chiến kiểm, Việt Quang xác nhận | Mã, liên kết, TC khớp; phần thiếu có chủ; phản hồi đã xử lý | Có bản soạn, chờ review thực |
| WBS, ước lượng và rủi ro C | C_02, P05, P10, P11, P13 | Quang Anh / Việt Quang ghép số | Không cộng đôi; tách forecast, actual và reserve; PP có mốc phân rã | Có forecast 72 giờ; chưa là baseline phê duyệt |
| Hướng dẫn quản trị và nguồn mã | C_03, src/README, OpenAPI hiện có | Quang Anh / người vận hành được chỉ định khi bàn giao thực | Chạy lại được trên môi trường ghi nhận; tài khoản được cấp an toàn | Hướng dẫn có; chưa xác nhận vận hành tiếp nhận |
| Bằng chứng chất lượng | C_04, M05, evidence/INDEX | Người chạy từng ca / người kiểm theo vòng | Có build, môi trường, kỳ vọng, thực tế, lỗi và thử lại | Unit frontend có; backend bị môi trường chặn; E2E chưa đủ |
| Giao tiếp mẫu và hỗ trợ | P03 IF-CA-01/IF-CB-01 | A/B/C cùng chịu nội dung / người bảo trì | Phân biệt đích và mã hiện có; không dùng route giả | Snapshot và adjustment còn tồn đọng |
| Đo lợi ích và giám sát | BMP v2.2, C_01 §7, danh mục nguồn | Quang Anh gom, B cung cấp thuê bao, A cung cấp benchmark / vai trò BMP khi nhận | Mỗi LI có người, nguồn, kỳ đo; uptime đủ 30 ngày sau phát hành | Chưa có doanh thu, chi phí hoặc uptime đủ; không ghi đạt |

Tài khoản, quyền truy cập và bí mật cấu hình được chuyển bằng kênh riêng khi có người nhận thật. Hồ sơ chỉ ghi danh mục và trạng thái cấp quyền, không chứa secret. Bảng “người nhận dự kiến” không thay biên bản đã ký.

## 3. Tồn đọng phải mang theo khi ghép báo cáo cuối

| Tồn đọng | Chủ | Hành động và điều kiện đóng |
| --- | --- | --- |
| Catalog manifest và frontend schema khác nhau; chưa có snapshot/phiên bản bền vững | Quang Anh và Chiến | Hoàn thiện IF-CA-01, validator và adapter phiên bản; sửa ISS-G-002, chạy TC-C-05/06 và TC-I-04 |
| Chưa quản lý đầy đủ ảnh dùng chung | Quang Anh | Hoàn thiện 4.4.1 với kiểm file 50 MiB, tham chiếu, quyền và audit; chạy TC-C-04/10 |
| Chưa có tra cứu, ticket và adjustment giao dịch | Quang Anh và Việt Quang | Phân rã PP 4.4.2, thực hiện IF-CB-01; thử retry, concurrency và rollback; không sửa DB tay để đóng việc |
| Metrics chưa đủ kỳ và nguồn LI | Quang Anh nhận nguồn A/B | Định nghĩa dữ liệu kỳ; đối soát BMP và số thực; thiếu thì ghi Chưa đo |
| Test backend bị Docker chặn; chưa đủ E2E | Chủ lượt chạy; Chiến điều phối | Sửa môi trường, chạy lại, ghi M05/evidence và xử lý vòng lỗi–sửa–thử lại |
| Chưa có người nhận vận hành và đo lợi ích xác nhận | Chiến trình; Quang Anh chuẩn bị | Xác nhận vai trò thực trước bàn giao; áp lịch BMP sau giao, không tự tạo chữ ký |

Tồn đọng không tự biến mất khi đổi tên file sang Closing. Báo cáo cuối phải nêu kết quả và sai lệch theo phạm vi xin nhận. Nếu chỉ xong đợt hồ sơ thì ghi đúng “kết thúc đợt hoàn thiện hồ sơ”.

## 4. Bài học rút từ nguồn đã quan sát

| Quan sát | Vì sao quan trọng | Hành động áp dụng | Chủ |
| --- | --- | --- | --- |
| Bản C cũ trộn tính năng, quản lý chất lượng và nguồn lực | Khối lượng chung dễ bị tính hết vào C và giao sai người | Giữ C_01/_02 riêng, P06/P07 chung; hạch toán WBS một lần | Quang Anh và Việt Quang |
| Mã OB/MT và trạng thái mẫu từng không khớp nguồn | RTM có mã nhưng không truy ra mục tiêu thật | Dùng danh mục mã chung, dẫn Charter/BMP hiện hành; rà mã tại DOC-01 | Chiến điều phối; mỗi chủ tự rà |
| API đổi status bị hiểu như đủ CRUD/upload | Báo cáo dễ nâng mức hoàn thành mà không có bằng chứng | Ghi phần có mã, phần đã thử và phần thiếu riêng; phải có lần chạy để kết luận Pass | Quang Anh |
| Backend test không chạy đúng điều kiện vì Docker | Công cụ và môi trường là điều kiện bàn giao, cần có chủ kiểm | Kiểm prerequisite trước đặt lượt review; lưu Blocked và người giải tỏa | Chủ lượt chạy |

Các bài học trên dựa vào tài liệu, mã và lượt kiểm đang có; không bịa phản hồi người dùng hoặc kết quả vận hành. Khi có thử nghiệm thật, thêm ngày, nguồn và thay đổi được áp dụng.

## 5. Điều kiện ký nhận và đóng phần C

1. Chủ module cung cấp đủ file hiện hành, nguồn mã/build, hướng dẫn và danh mục bằng chứng.
2. Chiến kiểm phần C, Quang Anh sửa; Việt Quang xác nhận nội bộ sau xem bằng chứng và lần thử lại. Tên trên bìa là phân công, không có nghĩa review đã diễn ra.
3. Phạm vi xin nhận không còn Blocker/Critical chưa được xử lý đúng thẩm quyền; các tồn đọng khác có chủ, ảnh hưởng và hạn rõ.
4. Người nhận thực xác nhận hệ thống, tài liệu, quyền truy cập và trách nhiệm đo LI; sponsor thực hiện thẩm quyền theo Charter.
5. Chỉ cập nhật ngày, chữ ký và kết luận sau khi nhận được. Ở snapshot ngày 24/09, các điều kiện trên **chưa được xác nhận đầy đủ**, chưa đóng dự án.

CV-C-09 đã có khung và nội dung có nguồn để ghép C02/C03/C04 chung. Nhận A_05/B_05 và ghép bộ cuối tại DOC-04/05. Chiến rà nội dung, Việt Quang rà phụ lục số; từng người kiểm bản xuất phần mình.
