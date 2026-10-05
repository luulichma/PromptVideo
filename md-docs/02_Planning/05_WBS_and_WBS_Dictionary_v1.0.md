# P05 — WBS và từ điển WBS

**Phiên bản:** v1.0 · cập nhật 24/09/2026. **Trạng thái:** Working Draft đã chuẩn hóa nội dung; chưa nghiệm thu.

**Chủ nội dung:** Chiến. **Người kiểm tra được giao:** Việt Quang. Việc ghi tên là phân công, không phải chữ ký xác nhận. Nội dung được cập nhật bằng Codex theo ủy quyền của người dùng.

## 1. Cấu trúc duy nhất và số liệu

WBS có sáu giai đoạn theo DEC-003. Phần xây dựng A ở 4.2, B ở 4.3, C ở 4.4; không cộng các module lần hai vào sáu nhánh. Nguồn ước lượng là A/B/C_02 và `_data/common-data.json`; tE=(O+M+P)/3, chỉ làm tròn khi hiển thị. Phần schema A 11⅓ giờ đã ở 3.2; nguyên mẫu 10 giờ đã ở 3.1.

Tổng **599 giờ**, chi phí công quy đổi **47.920.000 VND**. Số này chưa gồm reserve, không phải actual, ETC hoặc baseline được phê duyệt.

```text
0 PromptVideo — 599 giờ
├── 1 Quản lý dự án — 67 giờ
├── 2 Yêu cầu — 20 giờ
├── 3 Thiết kế — 33⅓ giờ
├── 4 Xây dựng — 363⅔ giờ
│   ├── 4.1 Nền tảng — 24 giờ
│   ├── 4.2 A — 139 giờ
│   ├── 4.3 B — 128⅔ giờ
│   └── 4.4 C — 72 giờ
├── 5 Tích hợp và kiểm thử — 65 giờ
└── 6 Triển khai và bàn giao — 50 giờ
```

## 2. Gói lá và ước lượng

| WBS | Đầu ra | Loại | Owner | O | M | P | tE giờ | Mốc mục tiêu | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | Bộ hồ sơ khởi tạo | WP | Chiến | 18 | 23 | 28 | 23.000 | M0 | Có bản Draft; chưa xác minh chữ ký |
| 1.2 | Kế hoạch quản lý dự án | WP | Chiến | 20 | 28 | 36 | 28.000 | DOC-02 | Có sản phẩm; chưa nghiệm thu |
| 1.3 | Báo cáo theo dõi và kiểm soát | WP | Việt Quang | 12 | 16 | 20 | 16.000 | DOC-03 | Có sản phẩm; chưa nghiệm thu |
| 2.1 | Đặc tả yêu cầu phần mềm | WP | Chiến | 8 | 12 | 16 | 12.000 | DOC-01 | Có sản phẩm; chưa nghiệm thu |
| 2.2 | Ma trận truy vết yêu cầu | WP | Chiến | 6 | 8 | 10 | 8.000 | DOC-02 | Có sản phẩm; chưa nghiệm thu |
| 3.1 | Kiến trúc và nguyên mẫu mã hóa | WP | Chiến | 6 | 10 | 14 | 10.000 | M2 | Có sản phẩm; chưa nghiệm thu |
| 3.2 | Đặc tả giao tiếp và schema dự án | WP | Chiến | 17 | 22 | 31 | 23.333 | DOC-01 | Có sản phẩm; chưa nghiệm thu |
| 4.1 | Nền tảng mã nguồn và CI | WP | Việt Quang | 18 | 24 | 30 | 24.000 | M2 | Có sản phẩm; chưa nghiệm thu |
| 4.2.1 | Trình soạn thảo nội dung | WP | Chiến | 20 | 26 | 40 | 28.667 | M5 | Có sản phẩm; chưa nghiệm thu |
| 4.2.2 | Thư viện năm mẫu trình chiếu | WP | Chiến | 8 | 12 | 20 | 13.333 | M3 | Có sản phẩm; chưa nghiệm thu |
| 4.2.3 | Bộ dựng và xem trước | WP | Chiến | 16 | 22 | 36 | 24.667 | M3 | Có sản phẩm; chưa nghiệm thu |
| 4.2.4 | Bộ xuất MP4 theo luồng | WP | Chiến | 14 | 18 | 34 | 22.000 | M4 | Có sản phẩm; chưa nghiệm thu |
| 4.2.5 | Kho dự án cục bộ | WP | Chiến | 10 | 14 | 22 | 15.333 | M5 | Có sản phẩm; chưa nghiệm thu |
| 4.2.6 | Kiểm quyền xuất và danh mục mẫu | WP | Chiến | 16 | 21 | 34 | 23.667 | M5 | Một phần; ISS-G-001 và ISS-G-002 còn mở |
| 4.2.7 | Tạm dừng xuất và cảnh báo trình duyệt | PP | Chiến | 6 | 10 | 18 | 11.333 | M4 | Chưa triển khai |
| 4.3.1 | Mô-đun tài khoản và xác thực | WP | Nguyễn Việt Quang | 10 | 14 | 18 | 14.000 | M2 | Có mã; cần kiểm bằng chứng |
| 4.3.2 | Mô-đun giấy phép và hạn mức | WP | Nguyễn Việt Quang | 16 | 22 | 34 | 24.000 | M5 | Có mã một phần; lệch tích hợp ISS-G-001 |
| 4.3.3 | Mô-đun thanh toán và gia hạn | WP | Nguyễn Việt Quang | 16 | 24 | 40 | 26.667 | M6 | Có mã giả lập; cổng thật/nhắc chưa có |
| 4.3.4 | Trang quản lý thuê bao | WP | Nguyễn Việt Quang | 10 | 14 | 24 | 16.000 | M6 | Có trang auth+capabilities; thiếu nhiều phần |
| 4.3.5 | Hóa đơn Doanh nghiệp | PP | Nguyễn Việt Quang | 12 | 20 | 34 | 22.000 | M6 | Chưa triển khai; chưa lập hoạt động chi tiết |
| 4.3.6 | Quản lý 5 chỗ Doanh nghiệp | PP | Nguyễn Việt Quang | 14 | 24 | 40 | 26.000 | M6 | Chưa triển khai; chưa lập hoạt động chi tiết |
| 4.4.1 | Danh mục mẫu và tài sản đồ họa | WP | Phạm Quang Anh | 14 | 20 | 32 | 22.000 | M3 | Có mã một phần; chưa đủ CRUD/assets |
| 4.4.2 | Hồ sơ hỗ trợ và giao tiếp điều chỉnh hạn mức | PP | Phạm Quang Anh | 10 | 18 | 32 | 20.000 | M6 | Chưa triển khai; hợp đồng IF-CB-01 đã chốt |
| 4.4.3 | Giám sát, health và dữ liệu đo lợi ích | WP | Phạm Quang Anh | 8 | 12 | 22 | 14.000 | M6 | Có mã một phần; chưa đo đủ |
| 4.4.4 | Giao diện quản trị | PP | Phạm Quang Anh | 8 | 14 | 26 | 16.000 | M6 | Chưa chứng minh giao diện đầy đủ |
| 5.1 | Bản tích hợp A–B–C và bằng chứng | WP | Chiến | 11 | 14 | 24 | 16.333 | DOC-03 | Blocked môi trường tích hợp |
| 5.2 | Báo cáo hiệu năng và tính xác định | PP | Chiến | 16 | 24 | 44 | 28.000 | M4 | Chưa đủ bằng chứng |
| 5.3 | Báo cáo độ tin cậy, tiếng Việt và dễ dùng | PP | Chiến | 12 | 18 | 32 | 20.667 | M6 | Chưa đủ bằng chứng |
| 6.1 | Bản phát hành production | PP | Quang Anh | 12 | 20 | 28 | 20.000 | M6 | Chưa nghiệm thu |
| 6.2 | Gói demo và hướng dẫn sử dụng | WP | Quang Anh | 6 | 10 | 14 | 10.000 | DOC-04 | Đã soạn hướng dẫn; chờ chạy lại |
| 6.3 | Hồ sơ kết thúc và bài trình bày | WP | Quang Anh | 8 | 12 | 16 | 12.000 | DOC-05 | Working Draft |
| 6.4 | Biên bản nghiệm thu sản phẩm | PP | Chiến | 6 | 8 | 10 | 8.000 | M7 | Chưa đủ điều kiện |

## 3. Từ điển gói chung

| WBS | Thành phần đầu ra | Điều kiện chấp nhận | Giả định / ràng buộc / rủi ro |
| --- | --- | --- | --- |
| 1.1 | Business Case/Benefit Plan v2.2, Charter/Assumption Log v2.1, Stakeholder Register v1.0 | Nhất quán tên, mục tiêu, ngân sách; xác minh trạng thái ký | Có Draft không đồng nghĩa Nhà tài trợ đã duyệt |
| 1.2 | PMP và các kế hoạch thành phần | Phạm vi, lịch, chi phí khớp; mọi issue có chủ | 10 giờ/tuần; chưa có baseline được phê duyệt |
| 1.3 | M01–05, E05 và sổ cập nhật | Báo cáo có ngày, trạng thái và bằng chứng; EVM có đầu vào hợp lệ | WP được phân rã từ PP cũ; thiếu actual |
| 2.1 | P02 và module_01 | Mỗi REQ có tiêu chí/TC và truy về Charter | Không cấp lại mã TC với nghĩa khác |
| 2.2 | P09 | Đủ REQ; không tự ghi pass; tối thiểu 7 cột RTM | Cập nhật khi REQ/test đổi |
| 3.1 | Kiến trúc, prototype, ADR-001, probe | Có MP4 và bảng đo kèm môi trường | Không suy khả năng 1080p từ 720p |
| 3.2 | P03, schema A, ba giao tiếp | Mỗi giao tiếp có request/response/error/version và TC; tách đích/hiện có | ISS-G-001/002; không gộp nhầm manifest |
| 4.1 | Repo, DB, CI, OpenAPI, CSRF, PWA | Build/test từ checkout có nguồn; bí mật ngoài tài liệu | Docker hiện bị chặn |
| 5.1 | TC-I-01–06, HAR, bảng đo, bản tích hợp | Kết quả có bằng chứng server thật | Demo API không thay UI bàn giao đầy đủ |
| 5.2 | OB-01/02/03, ma trận trình duyệt | 1080p ≤ 1,5× thời lượng; tăng bộ nhớ khi tăng dữ liệu 10× < 15%; checksum trên 3 máy | PP; cần máy tham chiếu |
| 5.3 | 134 tổ hợp, 100 lần xuất, 10 người thử | OB-06/07/08 theo Charter | PP; chưa tuyển người thử |
| 6.1 | Production, HTTPS, migration, backup/restore, rollback | Chạy và khôi phục có bằng chứng; không dùng fake tại Production | PP; VPS 600.000 và tên miền 300.000 VND |
| 6.2 | Hướng dẫn, kịch bản, seed | Người ngoài nhóm có thể chạy lại | Đã soạn, chưa có biên bản thử độc lập |
| 6.3 | C01–04 và mục lục bàn giao | Đủ nguồn, trạng thái tồn đọng, kết luận hợp lệ | Dự thảo kết thúc đợt, không kết luận toàn dự án xong |
| 6.4 | Validate Scope, bàn giao vận hành, trách nhiệm đo lợi ích | QC đạt, đúng người có thẩm quyền ký | PP; chưa nghiệm thu |

Từ điển chi tiết 4.2, 4.3, 4.4 nằm trong A/B/C_02 và là thành phần của P05. Hóa đơn B 4.3.5 và chỗ B 4.3.6 được tách khỏi 4.3.3 để giữ đủ phạm vi và công ước lượng. C không dùng các mã MT tự đặt; dùng LI-01–05 theo Benefit Management Plan.

## 4. Kiểm quy tắc và phân rã PP

Mỗi gói là một đầu ra, có một chủ. **32 gói lá cộng thành 599 giờ.** WP nằm trong dải 8–80 giờ; quy tắc này không tự bảo đảm gói hoàn tất trong hai tuần với công suất 10 giờ/tuần. WP có code không tự đóng nếu thiếu bằng chứng. PP chưa có hoạt động chi tiết.

Phân rã 4.2.7/5.2 trước M3; 5.3 trước M5; B 4.3.5/4.3.6 trước tích hợp thanh toán thật; C 4.4.2/4.4.4 tại DOC-02; 6.1 trước M5; 6.4 trước M6. Phân rã không tự tăng phạm vi; cập nhật P10/P11/P13 theo số đã kiểm.

NF-07/NF-08 cấp Charter còn chưa xác minh, vẫn nằm trong danh mục nghiệm thu. Đợt này không tự giao nhiệm vụ rà giấy phép. Có đủ cây WBS không đủ để tuyên bố đã chứng minh 100% tuân thủ.
