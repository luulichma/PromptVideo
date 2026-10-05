# PromptVideo — Slide-to-Video Generator

**Business Case (bản rút gọn)** · Pre-project · Ver. 2.2 · Nhóm 02

| Ngày phát hành | Trạng thái |
| --- | --- |
| 2026-09-22 | Draft — chờ phê duyệt |

> **Nguồn:** chuyển nguyên văn từ `official-docs/00_Pre-project/01_Business_Case_v2.2.docx` ngày 05/10/2026. Từ nay file markdown này là nguồn sửa (DEC-014); bản docx sinh lại từ đây. Nội dung, số liệu và khuyến nghị không đổi so với bản docx. Phụ lục A là phần thêm khi chuyển, dùng để đối chiếu luật môn học.

## Xác nhận

| Người tạo | Người kiểm tra | Người xác nhận |
| --- | --- | --- |
| Nguyễn Thế Chiến | Phạm Quang Anh | Phạm Quang Anh<br>Nguyễn Việt Quang<br>Thầy Nguyễn Đình Quảng |

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Ver 1.0 | 2026-08-20 | Tạo mới | Khởi tạo Business Case | Nguyễn Thế Chiến | Phạm Quang Anh |
| 2 | Ver 1.1 | 2026-08-24 | Chỉnh sửa | Bổ sung mục tiêu nghiệp vụ và bảng truy vết BO → OB → BN; chuyển tính toán tài chính sang Benefit Management Plan | Nguyễn Thế Chiến | Phạm Quang Anh |
| 3 | Ver 2.0 | 2026-08-27 | Chỉnh sửa lớn | Chuyển sang mô hình máy chủ dịch vụ, thu phí thuê bao thường niên, mã nguồn độc quyền | Nguyễn Thế Chiến | Phạm Quang Anh |
| 4 | Ver 2.1 | 2026-09-01 | Tái cấu trúc | Rút gọn cho người đọc nghiệp vụ: lược chi tiết kỹ thuật trong đánh giá khả thi, lược ma trận trọng số và số liệu trùng với Benefit Management Plan | Nguyễn Thế Chiến | Phạm Quang Anh |
| 5 | Ver 2.2 | 2026-09-22 | Rút gọn trình bày | Viết lại toàn bộ nội dung ngắn gọn hơn để dễ đọc và thuyết trình; giữ nguyên số liệu, khuyến nghị và điều kiện phê duyệt | Nguyễn Thế Chiến | Phạm Quang Anh |

## Mục lục

1. Tóm tắt và khuyến nghị
2. Nhu cầu kinh doanh
3. Mục tiêu nghiệp vụ
4. Phương án và mô hình kinh doanh
5. Khả thi, rủi ro và điều kiện phê duyệt

## 1. Tóm tắt và khuyến nghị

PromptVideo là dịch vụ web thu phí thuê bao thường niên, biến văn bản và hình ảnh thành video MP4. Ứng dụng dựng và mã hoá video ngay trên máy người dùng; máy chủ chỉ giữ tài khoản, giấy phép và thanh toán — không bao giờ thấy nội dung video.

Cần 3.500.000 VND tiền mặt và 450 giờ công của 3 thành viên trong 15 tuần (24/08–06/12/2026). Trên vòng đời 3 năm, chiết khấu 12%: NPV +433 triệu VND, BCR 3,52, hoàn vốn khoảng 11 tháng. Điểm hoà vốn ở 28% doanh thu cơ sở (biên an toàn 72%).

Khuyến nghị: phê duyệt phương án render trong trình duyệt kết hợp máy chủ tài khoản – giấy phép, bán thuê bao thường niên ba bậc. Điều kiện kèm theo ở mục 5.

## 2. Nhu cầu kinh doanh

Nhu cầu video ngắn tăng đều ở ba nhóm tại Việt Nam: doanh nghiệp nhỏ, giáo viên, người sáng tạo nội dung. Quy trình thủ công hiện tốn khoảng 45 phút cho một video 60 giây, và phải làm lại toàn bộ khi sai một chi tiết nhỏ.

Công cụ hiện có không đáp ứng được vì: giá tính bằng USD (4,5–7 triệu VND/năm) quá cao; render trên máy chủ nhà cung cấp khiến dữ liệu rời tổ chức; giới hạn độ dài và hạn mức xuất kể cả gói trả phí; kết quả AI không lặp lại; xử lý tiếng Việt kém; không xuất được hoá đơn VAT.

Chưa sản phẩm nào tại Việt Nam kết hợp đủ giá nội địa, xử lý cục bộ, không giới hạn độ dài, ưu tiên tiếng Việt và hoá đơn VAT — nay khả thi nhờ công nghệ mã hoá video trong trình duyệt đã đủ chín trên các trình duyệt phổ biến.

## 3. Mục tiêu nghiệp vụ

Sáu mục tiêu gom theo ba nghiệp vụ của sản phẩm:

**Nghiệp vụ A — Sản xuất video**

- Rút ngắn thời gian tạo video: dưới 5 phút/video 60 giây (giảm ≥85%)
- Bỏ giới hạn độ dài video: bộ nhớ tăng ≤15% khi độ dài tăng 10 lần
- Xử lý tiếng Việt đúng: 100% ký tự đúng trên bộ 134 tổ hợp dấu
- Giữ nội dung trong tổ chức: 0 byte nội dung rời khỏi trình duyệt

**Nghiệp vụ B — Đăng ký, cấp phép và thanh toán**

- Hạ chi phí phần mềm cho người dùng: 599.000 VND/năm (giảm ≥85%)
- Xây dựng doanh thu định kỳ: NPV dương, BCR trên 1, tỷ lệ gia hạn từ 70%

**Nghiệp vụ C — Quản trị và vận hành dịch vụ:** là điều kiện để A và B giữ được kết quả sau bàn giao (máy chủ, mẫu, đo lợi ích); không sở hữu mục tiêu riêng.

Khi phải đánh đổi: không hy sinh tốc độ tạo video và xử lý tiếng Việt — đó là lý do sản phẩm tồn tại. Mục tiêu hạ chi phí có thể giảm phạm vi. Doanh thu định kỳ chỉ hiện thực hoá được sau bàn giao.

## 4. Phương án và mô hình kinh doanh

Bốn phương án kiến trúc được chấm trên sáu tiêu chí ưu tiên: chi phí phục vụ mỗi thuê bao, khả năng thực thi thuê bao, riêng tư dữ liệu, tính lặp lại của đầu ra, phù hợp năng lực đội, vốn khởi tạo.

| Phương án | Nhận xét | Kết luận |
| --- | --- | --- |
| Không làm gì | Không giải quyết được nhu cầu; chỉ dùng làm mốc so sánh | Loại |
| Bán lại phần mềm dịch vụ nước ngoài | Biên lợi nhuận mỏng; phần lớn điều khoản bán lại không cho phép | Loại |
| Dịch vụ render trên máy chủ | Chi phí máy chủ tăng theo số phút video; lưu nội dung phát sinh nghĩa vụ nặng theo NĐ 13/2023/NĐ-CP | Loại |
| Render trong trình duyệt + máy chủ tài khoản – giấy phép | Chi phí phục vụ theo số tài khoản, không theo lượng video; thuê bao thực thi ở tầng máy chủ; nội dung không rời máy người dùng | Được chọn |

Hai đánh đổi của phương án được chọn: phụ thuộc phần cứng người dùng và cần Internet khi xuất video. Bù lại, cổng khoá tính năng đặt ở máy chủ nên quyền lợi trả phí thực thi được.

Ba nghiệp vụ tách bạch: A — Sản xuất video (văn bản/ảnh → MP4 trên máy người dùng); B — Đăng ký, cấp phép, thanh toán (tài khoản → giấy phép hiệu lực/hết hạn/gia hạn); C — Quản trị và vận hành (nạp mẫu, giám sát máy chủ, hỗ trợ, đo lợi ích định kỳ).

**Mô hình doanh thu: thuê bao thường niên ba bậc.**

- Miễn phí — 0 VND: 3 video/tháng, có watermark, tối đa 720p, 5 mẫu
- Cá nhân — 599.000 VND/năm: không giới hạn video, 1080p, không watermark
- Doanh nghiệp — 4.900.000 VND/năm: như Cá nhân, 5 chỗ, hoá đơn VAT, hỗ trợ phản hồi trong 1 ngày làm việc

Bậc miễn phí giới hạn bằng độ phân giải chứ không bằng số mẫu, để người dùng thấy toàn bộ sản phẩm nhưng trần 720p tự chặn dùng cho mục đích thương mại.

Kinh tế dự án: chi phí tiền mặt 3,5 / 6,5 / 15 / 28 triệu VND (Năm 0–3); doanh thu 0 / 74,6 / 240,7 / 487,4 triệu VND. Chi tiết dòng tiền và độ nhạy trình bày ở Benefit Management Plan. Lưu ý: mô hình thuần thuê bao chỉ có một trụ doanh thu — toàn bộ kết quả phụ thuộc số thuê bao Năm 1 và tỷ lệ gia hạn.

## 5. Khả thi, rủi ro và điều kiện phê duyệt

**Khả thi trên cả năm khía cạnh:**

- Kỹ thuật — có điều kiện: mã hoá video trong trình duyệt đã đủ hỗ trợ trên các trình duyệt phổ biến; ràng buộc khó nhất là độ dài không giới hạn, cần xử lý theo luồng — chứng minh bằng nguyên mẫu tại mốc M2.
- Pháp lý — khả thi: chỉ thu thập email, tên và lịch sử thanh toán (NĐ 13/2023/NĐ-CP); nội dung video không rời máy nên không thuộc diện này; hệ thống không lưu thông tin thẻ.
- Vận hành — khả thi, kèm nghĩa vụ mới: cần vận hành liên tục sau bàn giao; một máy chủ ảo nhỏ đủ cho 1.000 thuê bao, mục tiêu hoạt động từ 99%/tháng; chi phí phục vụ giảm dần 65.000 → 45.000 VND/thuê bao/năm.
- Tiến độ — điểm căng nhất: 450 giờ cho toàn bộ hệ thống là ước lượng eo hẹp; nếu hết M2 nguyên mẫu chưa chạy, giảm còn 3 mẫu, bỏ lưu/mở dự án, không lùi ngày bàn giao.
- Nguồn lực — phụ thuộc cam kết: 3 người × 10 giờ/tuần × 15 tuần; mất một người là mất một phần ba năng lực, không có dự phòng.

**Rủi ro ở cấp quyết định đầu tư:**

| Rủi ro | Mức | Ứng phó |
| --- | --- | --- |
| Nguyên mẫu xử lý theo luồng không đạt | Cao | Làm nguyên mẫu ngay tuần 4; chuẩn bị định dạng dự phòng và phương án giảm phạm vi |
| Một thành viên rút lui hoặc không đủ 10 giờ/tuần | Cao | Cam kết bằng văn bản tại M0; rà lại mỗi 2 tuần; không tập trung kiến thức vào một người |
| Máy chủ giấy phép ngừng hoạt động | Cao | Giám sát tự động; mục tiêu hoạt động ≥99%/tháng; diễn tập khôi phục tại M6 |
| Tỷ lệ gia hạn thấp làm doanh thu Năm 2–3 sụp | Cao | Theo dõi từ chu kỳ gia hạn đầu tiên; điểm quyết định cuối Quý 4 Năm 1 |
| Cổng thanh toán không duyệt kịp M6 | Trung bình | Nộp hồ sơ tại M2; dự phòng chuyển khoản và kích hoạt thủ công 3 tháng đầu |

Ràng buộc: 15 tuần, xong trước 06/12/2026; vốn tiền mặt 3.500.000 VND, không huy động thêm; hạ tầng tối đa 150.000 VND/tháng Năm 0 và 800.000 VND/tháng đến hết Năm 3; 3 thành viên bán thời gian, 450 giờ; chỉ dùng thư viện/tài sản có phép thương mại hoá; chạy được chỉ cần trình duyệt nhưng cần Internet khi xuất video; mã nguồn độc quyền.

**Điều kiện kèm theo khi phê duyệt:**

- Nguyên mẫu chứng minh bộ nhớ không tăng theo độ dài video, hoàn thành trước M2; nếu thất bại thì kích hoạt phương án giảm phạm vi
- Nộp hồ sơ cổng thanh toán tại M2, hoàn tất trước M6
- Ban hành Chính sách quyền riêng tư và Điều khoản sử dụng, xác minh bản quyền định dạng mã hoá, trước khi mở đăng ký công khai
- Cam kết thời gian của 3 thành viên bằng văn bản tại M0; nhà tài trợ xác nhận bằng văn bản việc tiếp nhận nghĩa vụ vận hành máy chủ 3 năm sau bàn giao

Bước tiếp theo: ký Hợp đồng thực hiện dự án, phê duyệt Project Charter và bổ nhiệm Giám đốc dự án.

Tài liệu liên quan: [Benefit Management Plan](02_Benefit_Management_Plan_v2.2.md) · Hợp đồng thực hiện dự án · [Project Charter](../01_Initiating/01_Project_Charter_v2.1.md) · [Assumption Log](../01_Initiating/02_Assumption_Log_v2.1.md).

## Phụ lục A. Đối chiếu luật môn học (thêm khi chuyển sang markdown)

Luật: `knowledge/rules/01_business-case.md`. Phụ lục này không thay đổi nội dung đã trình ở mục 1–5.

| Mục luật | Mức | Vị trí trong tài liệu | Ghi chú |
| --- | --- | --- | --- |
| Business Case nêu vì sao nên làm, tức lợi ích của dự án (PM03:18) | 🔴 | §1, §3 | Mục tiêu §3 có chỉ số đo được; lợi ích chi tiết ở Benefit Management Plan. |
| Biện minh bằng business need, cost-benefit, business strategy (PM03:18) | 🔴 | §2 (need), §1 và §4 (NPV, BCR), §4 (phương án) | |
| Phân biệt output → outcome → benefit → value (PM01:20) | 🔴 | §3 | Mục tiêu viết theo outcome/benefit, không liệt kê tính năng. |
| Business needs · Analysis of the situation · Recommendation (PM03:6) | 🟡 | §2 · §2 và §4 · §1 | |
| Feasibility: Technical, Economic, Operational, Legal, Schedule (PM03:9) | 🟡 | §5 | Tài liệu dùng Kỹ thuật, Pháp lý, Vận hành, Tiến độ, Nguồn lực; khía cạnh Economic nằm ở §4 "Kinh tế dự án" và Benefit Management Plan. |
| Project selection: scoring model, benefit-cost, investment appraisal (PM03:8, PM03:11) | 🟡 | §4 | Có sáu tiêu chí nhưng ma trận trọng số đã lược từ v2.1 (xem lịch sử). |
| PV, NPV (PM03:8); BCR = Total Benefits / Total Costs (PM11:12) | 🔴 | §1 chỉ nêu kết quả | Công thức và dòng tiền nằm ở Benefit Management Plan; kiểm ở file đó. Nếu BCR 3,52 tính theo PV(benefits)/PV(costs) thì đó là diễn giải 🔵. |

**Điểm lệch cần nhóm xử lý (🔵):** §1 và §5 ghi 450 giờ; DEC-009 đã chốt dùng forecast 599h từ ước lượng dưới lên và lập CR-G-001. Business Case là tài liệu Pre-project nên giữ số gốc; khi phát hành phiên bản mới cần ghi chú forecast hoặc dẫn CR-G-001, không sửa số quá khứ (PM08:103).
