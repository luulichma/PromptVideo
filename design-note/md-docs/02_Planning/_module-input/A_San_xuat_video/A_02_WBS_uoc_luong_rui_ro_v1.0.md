# A_02 — WBS, ước lượng và rủi ro module A

**Phiên bản:** v1.0 · cập nhật 24/09/2026. **Trạng thái:** Working Draft đã chuẩn hóa nội dung; chưa nghiệm thu.

**Chủ nội dung:** Chiến. **Người kiểm tra được giao:** Việt Quang. Việc ghi tên là phân công, không phải chữ ký xác nhận. Nội dung được cập nhật bằng Codex theo ủy quyền của người dùng.

## 1. Phạm vi và cách cộng giờ

Áp dụng [danh mục mã](../../../00_Quyet_dinh_va_quy_uoc_ma.md). A không còn là nhánh 3.x. Các gói xây dựng thuộc 4.2; schema thuộc 3.2; nguyên mẫu 3.1; kiểm thử thuộc 5.1–5.3. Bảng ánh xạ mã cũ ở danh mục chung và bản nguồn trước sửa ở `_history/2026-09-23`.

Tổng công sức gắn với A vẫn **225⅓ giờ**: 214 giờ trong bảng dưới + 11⅓ giờ schema đã nằm trong gói chung 3.2 (23⅓ giờ gồm 12 giờ giao tiếp). Khi ghép P05/P11 chỉ cộng mỗi gói lá một lần. Gói xuất cũ 32 giờ tách thành nguyên mẫu 10 giờ và xuất 22 giờ; không mất hoặc cộng đôi 10 giờ.

Đây là forecast cho toàn deliverable, **không phải giờ còn lại hoặc actual**. Các hạng mục có code không tự thành 100% hoàn thành. Ước lượng bình quân ba điểm theo quy ước học phần: tE=(O+M+P)/3; không dùng công thức PERT trọng số 1:4:1. Giữ số chưa làm tròn khi tổng hợp.

## 2. Gói và ước lượng dưới lên

| WBS | Đầu ra | Loại | O | M | P | tE giờ | Cơ sở |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | Kiến trúc và nguyên mẫu mã hóa | WP | 6 | 10 | 14 | 10.000 | Tách 6/10/14h nguyên mẫu khỏi gói xuất A cũ 20/28/48; phần còn lại 14/18/34, tổng không đổi. |
| 4.2.1 | Trình soạn thảo nội dung | WP | 20 | 26 | 40 | 28.667 | Biểu mẫu, ảnh EXIF, undo/redo, bàn phím và xử lý ảnh lỗi. |
| 4.2.2 | Thư viện năm mẫu trình chiếu | WP | 8 | 12 | 20 | 13.333 | Năm bộ bố cục/màu và khung vàng; biến động do sai khác render. |
| 4.2.3 | Bộ dựng và xem trước | WP | 16 | 22 | 36 | 24.667 | Renderer Canvas, xuống dòng tiếng Việt, parity; khác GPU/font. |
| 4.2.4 | Bộ xuất MP4 theo luồng | WP | 14 | 18 | 34 | 22.000 | Worker, ba đường ghi, dọn tài nguyên, encoder/dung lượng; đã tách nguyên mẫu sang 3.1. |
| 4.2.5 | Kho dự án cục bộ | WP | 10 | 14 | 22 | 15.333 | IndexedDB/OPFS, gói checksum, phục hồi; migration snapshot thuộc 3.2/4.2.6. |
| 4.2.6 | Kiểm quyền xuất và danh mục mẫu | WP | 16 | 21 | 34 | 23.667 | Cộng gói cũ 3.7 (9/12/18) và 3.8 (7/9/16); gồm xử lý complete và tương thích mẫu, không cộng lỗi đã biết lần nữa. |
| 4.2.7 | Tạm dừng xuất và cảnh báo trình duyệt | PP | 6 | 10 | 18 | 11.333 | Chưa có thiết kế pause/resume; giữ trong phạm vi. |
| 5.1 | Bản tích hợp A–B–C và bằng chứng | WP | 11 | 14 | 24 | 16.333 | TC-I, HAR, kiểm trên trình duyệt; thử máy chủ thật phụ thuộc Docker. |
| 5.2 | Báo cáo hiệu năng và tính xác định | PP | 16 | 24 | 44 | 28.000 | 1080p, bộ nhớ×10, checksum trên 3 máy; cần máy tham chiếu. |
| 5.3 | Báo cáo độ tin cậy, tiếng Việt và dễ dùng | PP | 12 | 18 | 32 | 20.667 | 134 tổ hợp, 100 lần xuất,10 người thử; chưa có lịch tuyển. |


WP nhỏ nhất 10 giờ, lớn nhất 28⅔ giờ. PP chưa có hoạt động/lịch thi công cam kết. Quy tắc 8/80 không chứng minh gói xong trong hai tuần: 10 giờ/tuần thì 28⅔ giờ cần hơn hai tuần.

## 3. Từ điển, tiêu chí và phụ thuộc

| WBS | Đầu ra cụ thể | Điều kiện đạt | Phụ thuộc / rủi ro |
| --- | --- | --- | --- |
| 3.1 | Kiến trúc, prototype, capability matrix | MP4 có thông tin môi trường và file đo | Probe 1080p chưa đạt ở headless |
| 3.2 (phần A) | Schema cảnh/dự án; định dạng snapshot mẫu và migration | Round-trip, từ chối sai version, mở dự án cũ | IF-CA-01; ISS-G-002 |
| 4.2.1 | Editor chữ/ảnh, undo/redo, bàn phím | TC-A-01–05,33,34 có nguồn riêng; 134 tổ hợp thuộc 5.3 | Schema 3.2; ảnh EXIF/lỗi |
| 4.2.2 | Năm mẫu và khung vàng | TC-A-06; giữ dữ liệu khi đổi mẫu | Renderer 4.2.3; catalog C |
| 4.2.3 | Canvas renderer dùng chung | TC-A-03,08; parity trên môi trường ghi nhận | Sai khác GPU/font; không suy ra checksum trên 3 máy |
| 4.2.4 | Worker H.264/MP4, ghi luồng, tiến trình/hủy | TC-A-09–14; đúng quyền, MP4 phát được | Prototype 3.1; 1080p cần probe thật |
| 4.2.5 | Lưu, mở, phục hồi, gói checksum | TC-A-21,22,35 | IndexedDB/OPFS; migration mẫu |
| 4.2.6 | Quyền và catalog client | TC-A-07,15–20,36 và TC-I; complete phải xác nhận | B 4.3.2, C 4.4.1; ISS-G-001/002 |
| 4.2.7 PP | Pause/resume và cảnh báo khởi động | TC-A-31,32 | Phân rã trước M3; chưa triển khai |
| 5.1 | TC-I, HAR và bảng đo tích hợp | Mỗi kết quả có build, môi trường, file; 0 byte nội dung | Máy chủ thật; ISS-G-004 |
| 5.2 PP | 1080p ≤ 1,5×; bộ nhớ khi độ dài ×10 tăng <15%; checksum trên 3 máy | TC-A-25,27,28 đúng điều kiện Charter | Máy tham chiếu và cách đo Worker |
| 5.3 PP | 134 tổ hợp, 100 lần xuất,10 người thử | TC-A-04,29,30 đạt mục tiêu Charter | Tuyển người thử; chưa có dữ liệu |

## 4. Hoạt động và lịch

| Mã | WBS | Hoạt động | Giờ forecast | Tiền nhiệm FS | Người làm |
| --- | --- | --- | --- | --- | --- |
| ACT-3.1-01 | 3.1 | Hoàn thiện và tự kiểm: Kiến trúc và nguyên mẫu mã hóa | 10.000 | ACT-2.1-01 | Chiến |
| ACT-4.2.1-01 | 4.2.1 | Hoàn thiện và tự kiểm: Trình soạn thảo nội dung | 28.667 | ACT-3.2-01, ACT-4.1-01 | Chiến |
| ACT-4.2.2-01 | 4.2.2 | Hoàn thiện và tự kiểm: Thư viện năm mẫu trình chiếu | 13.333 | ACT-4.2.3-01 | Chiến |
| ACT-4.2.3-01 | 4.2.3 | Hoàn thiện và tự kiểm: Bộ dựng và xem trước | 24.667 | ACT-3.2-01 | Chiến |
| ACT-4.2.4-01 | 4.2.4 | Hoàn thiện và tự kiểm: Bộ xuất MP4 theo luồng | 22.000 | ACT-3.1-01, ACT-4.2.3-01 | Chiến |
| ACT-4.2.5-01 | 4.2.5 | Hoàn thiện và tự kiểm: Kho dự án cục bộ | 15.333 | ACT-4.2.1-01 | Chiến |
| ACT-4.2.6-01 | 4.2.6 | Hoàn thiện và tự kiểm: Kiểm quyền xuất và danh mục mẫu | 23.667 | ACT-4.2.4-01, ACT-4.3.2-01, ACT-4.4.1-01 | Chiến |
| ACT-5.1-01 | 5.1 | Hoàn thiện và tự kiểm: Bản tích hợp A–B–C và bằng chứng | 16.333 | ACT-4.2.6-01, ACT-4.2.5-01, ACT-4.3.3-01 | Chiến |


Mỗi dòng là hoạt động tổng hợp của WP, chỉ để dựng mạng ban đầu. P10 phân biệt CPM logic, lịch san bằng và các cổng PP/môi trường. B/C có hoạt động con nên P10 nối vào **hoạt động cuối** của gói, không giả định mọi gói kết thúc ở đuôi 01. Lịch hồ sơ DOC-01–05 là mục tiêu riêng; 214 giờ trên không phải lượng việc cần làm mới trong 14 ngày.

Năng lực giả định 10 giờ/người/tuần. Chủ A cung cấp ETC thực tế sau khi đo tình trạng từng gói và xác nhận giờ rảnh; E05 chưa có actual. Không dùng 4 giờ “đệm” cũ để chứng minh đủ lịch.

## 5. Rủi ro, chi phí và dự phòng

| Mã | Nguyên nhân → sự kiện → hậu quả | P | I | Xác suất | Giờ hậu quả | Ứng phó |
| --- | --- | --- | --- | --- | --- | --- |
| R-A-01 | Encoder 1080p không hỗ trợ → Không xuất được 1080p → Không chứng minh OB-01 | 3 | 4 | 0.5 | 12 | Thử máy có giao diện; mượn máy tham chiếu; công bố giới hạn. |
| R-A-02 | Không đo được bộ nhớ Worker → Thiếu số liệu đỉnh → Không chứng minh OB-02 | 4 | 3 | 0.7 | 8 | Thử đo bộ nhớ tiến trình; phần đo chuẩn đã nằm 5.2. |
| R-A-03 | Mất mạng sau reserve → Complete thất bại → Lách quota nếu vẫn giao file | 3 | 3 | 0.5 | 8 | DEC-011; ISS-G-001 là lỗi đã biết, không cộng reserve lần hai. |
| R-A-04 | Lệch ánh xạ lỗi API → Thông báo sai → Người dùng không biết lý do | 2 | 2 | 0.3 | 4 | Contract test HTTP và thông điệp; unit hiện pass. |
| R-A-05 | Danh mục thay đổi khi offline → Dùng mẫu cũ → Sai trạng thái/phiên bản | 3 | 3 | 0.5 | 8 | DEC-012; snapshot, nhãn cache; ISS-G-002 đã tính ở base. |
| R-A-06 | Năng lực 10 giờ/người/tuần → Quá tải tổng hợp → Trượt cổng DOC | 4 | 4 | 0.7 | 10 | Chia tổng hợp B/C; lịch san bằng; giờ đã dự kiến không cộng thành reserve. |
| R-A-07 | GPU/font khác nhau → Checksum khác → Không đạt OB-03 | 3 | 3 | 0.5 | 8 | Giữ font đóng gói; đo 3 máy; CR nếu tiêu chí không khả thi. |
| R-A-08 | Tier 2 thiếu OPFS → Lỗi lưu hoặc tăng RAM → Giảm khả năng xuất | 3 | 2 | 0.5 | 4 | Giới hạn Tier 2; file picker fallback; đo trước công bố. |
| R-A-09 | Không mượn được máy → Không đủ ma trận → Không nghiệm thu OB | 3 | 3 | 0.5 | 8 | Chốt người cung cấp/máy; không thay bằng kết luận từ headless. |
| R-A-10 | Xuất kéo dài quá TTL → Complete 409 → Không đóng lượt thành công | 2 | 3 | 0.3 | 8 | DEC-011; thiết kế đối soát/xuất dài trong 4.3.2. |
| R-A-11 | Đề nghị audio/AI/khung dọc → Phình phạm vi → Trượt lịch và chi phí | 3 | 3 | 0.5 | 8 | Kiểm soát thay đổi; không đưa vào demo mặc định. |


Thang P/I theo DEC-005; chủ, trigger và trạng thái lưu P13. Các giờ rủi ro trên là mức phơi nhiễm để đánh giá, **không tự cộng thành contingency**. Cách đo chuẩn đã ở 5.2; lỗi đã biết ở 4.2.6/4.3.2; quá tải là thiếu công suất. Vì vậy bỏ phép cộng cũ 5,6 + 7 = 12,6 giờ làm reserve: chưa chứng minh đó là công sức phát sinh ngoài base. Chỉ cộng vào reserve khi có phần dư được xác định và không trùng O/M/P; management reserve chưa phân bổ.

A không dự trù mua riêng; 80.000 VND/giờ là chi phí cơ hội, không tiền đã chi. 225⅓ giờ × 80.000 = 18.026.666,67 VND cho phạm vi A phân bổ, không cộng lại vào P11 khi gói 3.2 đã được tính.

## 6. Kiểm soát và bàn giao

Chiến R, Quang Anh A cho xác nhận nội bộ đầu vào A, Việt Quang kiểm tra; thẩm quyền nghiệm thu sản phẩm theo Charter. Mọi đổi yêu cầu cập nhật A_01→P02/P03→P09→P05/P10/P11/P13 khi có ảnh hưởng. ISS-G ghi vấn đề đã xảy ra; CR-G ghi đổi baseline; R-A ghi sự kiện chưa chắc xảy ra. Nguồn chạy hiện có là EV-001/002/003/004; không đánh dấu TC-I đạt khi chỉ có mock.

Đầu ra tiếp theo: A_03 mô tả thực hiện, A_04 theo dõi/test, A_05 bàn giao. Tất cả hiện là hồ sơ tiến độ; nghiệm thu còn phụ thuộc bằng chứng.
