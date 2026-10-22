# C_04 — Theo dõi, kiểm thử và thay đổi module C

| Thuộc tính | Giá trị |
| --- | --- |
| Phiên bản / ngày chốt | v1.0 / 2026-09-24 |
| Trạng thái | Draft báo cáo kiểm soát từ dữ liệu có nguồn; không xác nhận nghiệm thu |
| Chủ / kiểm tra / xác nhận nội bộ | Phạm Quang Anh / Nguyễn Thế Chiến / Nguyễn Việt Quang |
| Nguồn | C_01/C_02/C_03; P06; EV-001/002/005 |

## 1. Hiện trạng theo yêu cầu

| Yêu cầu | Trạng thái thực tế | Bằng chứng / việc còn lại | Người thực hiện |
| --- | --- | --- | --- |
| REQ-C-01 | Có mã một phần | List/status/catalog có nguồn; thiếu CRUD/validation trước publish và snapshot/version A–C | Quang Anh + Chiến phần A |
| REQ-C-02 | Chưa triển khai đầy đủ | Không thấy admin asset upload/CRUD tương ứng; chưa có ca chạy | Quang Anh |
| REQ-C-03 | Có code và test nguồn; integration chưa đạt điều kiện chạy | AdminPolicy/CSRF; EV-002 bị Docker/Testcontainers chặn | Quang Anh chuẩn bị; Chiến kiểm |
| REQ-C-04/05 | Chưa triển khai | Tra cứu/support adjustment chưa có route; IF-CB-01 là đích | Quang Anh + Việt Quang phần B |
| REQ-C-06 | Có snapshot metrics | Chưa có cửa sổ 30 ngày/performance và nguồn đủ doanh thu | Quang Anh |
| REQ-C-07 | Chưa đo đủ lợi ích | BMP v2.2 LI-01…05; không có DailyMetricsJob được chứng minh | Quang Anh nhận nguồn A/B |
| REQ-C-08 | Có code/readiness test nguồn | Ca DB healthy/unhealthy cần run hợp lệ; uptime 30 ngày chưa có | Quang Anh |
| REQ-C-09 | Đã đặc tả workflow, chưa có ticket thực xác minh | Sổ demo/schemaC_03; không ghi “đã xử lý người dùng” | Quang Anh |

Không tính phần trăm hoàn thành C từ số endpoint hay số test file. Chưa có weights/actual/EV đồng phạm vi thì không tính EVM/SPI/CPI. Base 72 giờ và contingency ứng viên 12,8 giờ là forecast từ C_02; giờ thực/chi thực/remaining estimate cần chủ bổ sung bằng nguồn.

## 2. Kết quả kiểm tra đang có

| Hoạt động | Kết quả theo nguồn | Ý nghĩa cho C | Hành động tiếp |
| --- | --- | --- | --- |
| Frontend unit ngày 24/09, EV-001 | 79/79 passed, 12 files; [JSON](../../../evidence/2026-09-24/frontend-vitest.json) | Có kết quả cho catalog/templates nếu tên test tương ứng trong JSON; không là E2E admin hay TC-I | Chiến rà mapping assertion với TC-C-03/06 |
| Backend attempt ngày 24/09, EV-002 | 18 passed, 42 failed, 60 total; Docker/Testcontainers unavailable; [TRX](../../../evidence/2026-09-24/backend-tests.trx) | Ghi thất bại môi trường; các integration C chưa được kết luận Pass; không ghi 42 lỗi nghiệp vụ | Chủ môi trường khôi phục Docker; Chiến chạy lại C và Quang Anh kiểm B |
| Review mã nguồn, EV-005 | Có Admin/Templates/Foundation và tests nguồn | Chứng minh hiện trạng cấu trúc, không thay thực thi | Giữ từng gap trong RTM/M05 |
| TC-C-04/10/11/12/13/14/23 | Blocked theo thiết kế, thiếu chức năng hoặc API theo kỳ | Giữ lý do blocked từng ca | Hoàn thiện WP/PP theo forecast rồi kiểm |
| Các TC-C còn lại | Not Run ở cấp ca tài liệu, trừ assertion hẹp có mapping bằng chứng rõ | Testcode có sẵn không tự hoàn tất toàn ca | Reviewer chạy theo C_01 và lưu test_run |
| TC-I-01…06 | Chưa có kết luận E2E mới trong bộ bằng chứng này | Không chuyển frontend unit xanh sang integration xanh | Theo P06/P03 và chủ chạy đã phân công |

Mọi lần thử phải có expected/actual và evidence; giữ dòng Fail cũ rồi thêm RetestRun. Sau khắc phục môi trường mới nhận kết quả runtime. Các tên mã test chỉ được ghi Pass khi assertion tương ứng thực sự chạy và đủ phạm vi.

## 3. Vấn đề và hành động kiểm soát

| Vấn đề | Ảnh hưởng | Chủ / cách xử lý | Hạn/gate kiểm |
| --- | --- | --- | --- |
| ISS-G-002: thiếu snapshot/version mẫu | Dự án cũ chưa được bảo đảm giữ trình bày khi bundle đổi; catalog manifest khác frontend schema | Chiến xử lý A, Quang Anh validation/catalog; cập nhật IF-CA-01 và TC-I-04 | Phân tích tại DOC-02; không đóng trước evidence sửa/thử |
| IF-CB-01 chưa có triển khai | Không thể chứng minh tra cứu/bù lượt nguyên tử và audit | Việt Quang service quota, Quang Anh ticket/UI; PP4.4.2 phân rã sau schema | DOC-02 phân rã; thực thi theo P10 |
| Docker/Testcontainers không sẵn | Backend integration C/B bị chặn | Người nhận lượt chạy kiểm môi trường; Quang Anh báo vướng 20:00, Chiến điều phối | Trước DOC-03; vẫn ghi Blocked nếu chưa sửa |
| Metrics hiện tại chưa đủ kỳ/nguồn LI | Có thể dùng nhầm count như doanh thu hoặc uptime | Quang Anh ghi data dictionary, yêu cầu nguồn từ A/B, giữ số thiếu | DOC-02/03 |
| Khối lượng C và việc chung vượt năng lực giả định | Có nguy cơ chậm gate và thiếu review | Chiến cân thứ tự, Việt Quang tính lịch, Quang Anh không nhận mọi test | Tại mỗi cập nhật ngày/gate |

Những hàng chưa có mã issue là danh sách đầu vào cho M03; người quản lý sổ chung cấp ISS-G-nnn một lần, không tự cấp trùng. Hợp đồng thiếu là tồn đọng đã biết, không tự gán mức severity của defect runtime khi chưa có ca chạy.

## 4. Thay đổi đã áp dụng vào hồ sơ

| Thay đổi | Căn cứ | Phạm vi ảnh hưởng | Tình trạng |
| --- | --- | --- | --- |
| WBS8.x→4.4.x; QC-n→QT-C-n; Active/Draft/Retired | DEC-003/004/012 | C_01/C_02/P03/RTM/WBS | Nội dung nguồn đã chuẩn hóa; nháp cũ giữ lịch sử |
| Bỏ audio/video nền và caA tự định nghĩa lại | DEC-006/007 | C_01/P06 | Đã sửa tài liệu, không là thay đổi code |
| Sửa OB-11/12 và bỏ mã MT không có trong BMP v2.2 | Charter/BMP hiện hành | C_01/P06 | Đã sửa truy vết; chưa đo lợi ích thực |
| Thêm REQ-C-08 health và REQ-C-09 ticket | Phạm vi C trong Charter; DEC-013 | C_01/C_02/TC/P03 | Đặc tả đã viết; hiện trạng health có code, ticket chưa có service |
| Ước lượng C từ 40 giờ lên 72 giờ; tách exposure 12,8 giờ và rủi ro chung 8,4 giờ | Ước lượng từ dưới lên theo DEC-009 | P05/P10/P11/P13 | Forecast chưa là baseline phê duyệt; reserve chỉ xem xét phần dư ngoài base; CR-G-001 xử lý tổng nguồn lực/lịch |

## 5. Review B theo phân công

Quang Anh kiểm B_01/B_02 và bằng chứng B: quyền/hạn mức, tháng UTC, hết hạn, retry/thanh toán giả lập, chống cộng lặp, EMV và hạch toán reserve. Dùng nguyên TC-B của Việt Quang, không đặt lại số hay suy đoán kết quả.

**Hiện tại:** chưa ghi biên bản review B do Quang Anh thực sự thực hiện hoặc E2E mới; đây là nhiệm vụ được giao, không tự ký thay. Đầu ra cần có: nhận xét theo file/mục/TC, actual/expected, nguồn EV hoặc Not Run/Blocked; Việt Quang sửa, Chiến xác nhận lại. Tại DOC-03, chuyển kết quả sang M05 và P09, không đợi Closing mới bổ sung.

## 6. Kết luận kỳ báo cáo

Hồ sơ C đã được chuẩn hóa theo đầu việc CV-C-01…06 và mở cấu trúc CV-C-07/08; sản phẩm C mới có một phần catalog/adminmetrics/health. Điều kiện cần để nhận phần sản phẩm: triển khai gaps có chủ, môi trường test chạy được, kiểm độc lập có evidence, sửa/thử lại, và người có thẩm quyền xem phạm vi xin nhận. Chưa có đủ căn cứ ghi module C hoàn thành.
