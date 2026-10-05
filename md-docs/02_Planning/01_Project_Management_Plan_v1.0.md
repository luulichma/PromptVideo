# P01 — Kế hoạch quản lý dự án tích hợp

**Phiên bản:** v1.0 · cập nhật 24/09/2026. **Trạng thái:** Working Draft đã chuẩn hóa nội dung; chưa nghiệm thu.

**Chủ nội dung:** Chiến. **Người kiểm tra được giao:** Việt Quang. Việc ghi tên là phân công, không phải chữ ký xác nhận. Nội dung được cập nhật bằng Codex theo ủy quyền của người dùng.

## 1. Mục tiêu, căn cứ và trạng thái

PromptVideo tạo video từ chữ/ảnh cục bộ trong trình duyệt và kiểm quyền qua máy chủ. Ba chủ module viết xuyên suốt phần mình rồi ghép thành một bộ hồ sơ. Charter v2.1, Assumption Log v2.1, Business Case/Benefit Management Plan v2.2 và Stakeholder Register v1.0 là nguồn cấp cao hiện có; tên file không chứng minh đã ký. Bộ này là kế hoạch làm việc được chọn theo ủy quyền của người dùng ngày 24/09, chưa thay baseline được Nhà tài trợ phê duyệt.

Ưu tiên Planning có thể truy vết, sau đó ghi bằng chứng thực hiện, kiểm soát và đóng gói. Giữ toàn bộ phạm vi; demo 5 cảnh/60 giây chỉ là tập minh họa. Quyết định DEC-001–014 nằm trong [sổ chung](../00_Quyet_dinh_va_quy_uoc_ma.md).

## 2. Tổ chức và thẩm quyền

| Người | Chủ module / phần tổng hợp | Vòng kiểm tra |
| --- | --- | --- |
| Nguyễn Thế Chiến | A; PMP, yêu cầu, giao tiếp, phạm vi, WBS, RTM, tổng kết | Việt Quang kiểm A; Quang Anh xác nhận nội bộ |
| Nguyễn Việt Quang | B; lịch/CPM, chi phí, rủi ro, actual/EVM | Quang Anh kiểm B; Chiến xác nhận nội bộ |
| Phạm Quang Anh | C; chất lượng, nguồn lực, truyền thông, đóng gói | Chiến kiểm C; Việt Quang xác nhận nội bộ |

Chiến điều phối CCB nội bộ. Sửa kỹ thuật trong phạm vi phải có chủ việc và người kiểm; thay đổi mục tiêu/ngân sách/lịch Charter phải ghi Change Request và trình người có thẩm quyền theo Charter. Nhóm không ký thay nghiệm thu. Người dùng đã giao quyền chọn phương án soạn; mã và vai trò đã được chốt để cả nhóm sử dụng.

## 3. Lập và kiểm soát kế hoạch thành phần

| Lĩnh vực | Cách áp dụng | Nguồn quản lý |
| --- | --- | --- |
| Tích hợp | Chủ module cập nhật 5 đầu vào; người tổng hợp ghép và giải quyết mâu thuẫn; G0 chỉ bản hiện hành | P01, G0, DEC |
| Yêu cầu/phạm vi | Nối REQ/NF với Charter và TC; giữ PP chưa làm; không thêm audio/AI/khung dọc; bỏ yêu cầu phải qua CR | P02, P04, P09 |
| WBS | Sáu nhánh; mỗi gói lá chỉ tính một lần, từ điển có tiêu chí; xây dựng A ở 4.2, B ở 4.3, C ở 4.4 | P05, dữ liệu JSON |
| Lịch | Mạng FS cho WP, CPM theo logic và cân nguồn lực; giả định 10 giờ/người/tuần; PP hạn chế kết luận lịch toàn phạm vi | P10 |
| Chi phí | Forecast 599 giờ; 80.000 VND/giờ là chi phí cơ hội; tách 3,1 triệu mua/thuê và 400.000 VND dự phòng tiền mặt; actual từ E05 | P11, E05, M04 |
| Chất lượng | QA kiểm tài liệu/quy trình; QC kiểm thử; có bằng chứng trước Validate Scope | P06, E04, M02, M05 |
| Nguồn lực | Giả định 10 giờ/người/tuần; kiểm chéo luân phiên; họp có nội dung; báo quá tải sớm | P07, P12 |
| Truyền thông/stakeholder | Cập nhật ngắn hằng ngày trước 20:00 giờ Việt Nam, review theo các cổng DOC; ghi kết luận họp vào DEC/CR; gán chủ cho đầu vào bên ngoài | P07, P12, E02 |
| Rủi ro | Nguyên nhân → sự kiện → hậu quả; phân biệt P/I và EMV, risk và issue; reserve chỉ chứa phần dư không trùng công cơ sở | P08, P13 |
| Mua/thuê | Dự trù cổng 1,5 triệu, tài sản 700.000, VPS 600.000, tên miền 300.000 VND; chỉ đặt khi có nhu cầu và tiêu chí đầu ra; ghi chứng từ thực | P11 |
| Cấu hình/thay đổi | Markdown là nguồn; official-docs chứa docx/xlsx sinh từ Markdown (gồm sổ làm việc), trạng thái ghi trong từng file; giữ lịch sử; mỗi workbook có một chủ | G0, CR, M03 |
| Chuyển giao/kết thúc | QC → Validate Scope → bàn giao → Close; tiếp tục đo lợi ích dài hạn sau dự án | M06, C01–04 |

## 4. Baseline, forecast và lịch hồ sơ

**Scope baseline gồm Scope Statement (P04), WBS và WBS Dictionary (P05) được phê duyệt.** P02/P09 hỗ trợ yêu cầu và truy vết, không thay cấu phần baseline. Schedule baseline và cost baseline chỉ trở thành bản được duyệt khi có thông tin xác nhận. Hiện P10/P11 là forecast.

Forecast **599 giờ** cao hơn mức tham chiếu 450 giờ là 149 giờ (33,11%), và cao hơn trần 495 giờ là 104 giờ (21,01%). Tổng 599 × 80.000 = 47.920.000 VND là chi phí công quy đổi, chưa cộng contingency/management reserve và không phải tiền đã chi.

Chọn **CR-G-001: giữ phạm vi, điều chỉnh lịch/nguồn lực theo forecast**. Không tự tăng trần tiền mặt 3,5 triệu VND. Cần ETC và năng lực thực tế để chốt ngày hoàn thành; không lấy 599 giờ làm số giờ còn phải làm.

| Cổng | Ngày mục tiêu | Đầu ra phải có |
| --- | --- | --- |
| DOC-01 | 26/09, 20:00 | A/B/C_01 và _02; mã và giao tiếp đã khớp |
| DOC-02 | 29/09, 20:00 | P01–P13; chênh lệch baseline/forecast thể hiện rõ |
| DOC-03 | 02/10, 20:00 | Bằng chứng, actual nếu có, issue và test; chưa đo thì chưa kết luận |
| DOC-04 | 05/10, 20:00 | Dự thảo bàn giao, hướng dẫn và tồn đọng |
| DOC-05 | 07/10, 20:00 | Review hồ sơ, xử lý lỗi ghép, xác định trạng thái phát hành |

Lịch Charter 24/08–06/12 và M0–M7 dùng để đối chiếu. Đây là lịch hồ sơ được chọn, không phải cam kết hoàn thiện sản phẩm trong 14 ngày. Pre-project/Initiating được rà phiên bản/mã; không viết lại toàn bộ hai giai đoạn.

## 5. Kiểm soát tiến độ, thay đổi và nghiệm thu

Chủ việc ghi đầu ra, bằng chứng và trở ngại hằng ngày; actual chỉ ghi khi người làm xác nhận. M01 báo cáo lệch, phương án và chủ xử lý hằng tuần. Issue đã xảy ra đưa vào M03; risk mới đưa vào P13. Tiền đã chi cần chứng từ; công thực tế cần nhật ký.

Chỉ tính EVM khi PV/EV/AC cùng đơn vị, ngày và phạm vi, với baseline hợp lệ; thiếu thì để trống và ghi lý do.

Nhiệm vụ tài liệu hoàn tất khi nội dung đủ, mã/link đúng, nguồn/giả định rõ và có review. Yêu cầu sản phẩm hoàn tất khi TC/ngưỡng đạt trên môi trường quy định và được kiểm chéo. M06 không ký thay người có thẩm quyền; C01 vẫn là snapshot đến hiện tại cho tới khi sản phẩm đủ điều kiện đóng.
