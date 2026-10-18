# P11 — Cost Estimate (ước lượng chi phí)

| Mục | Nội dung |
| --- | --- |
| Mã | P11 |
| Phiên bản | v1.0 |
| Ngày | 14/10/2026 |
| Trạng thái | Draft, chưa duyệt |
| Người soạn | Nguyễn Việt Quang (phụ trách chi phí theo DEC-001); bản nháp do Claude soạn theo yêu cầu của Chiến |
| Người kiểm | Nguyễn Thế Chiến |
| Xác nhận | Chưa có. Ghi tên là phân công, không phải chữ ký |

Tài liệu này là bản markdown nguồn cho workbook [11_Cost_Budget_Procurement_v1.0.xlsx](../../official-docs/02_Planning/11_Cost_Budget_Procurement_v1.0.xlsx) theo DEC-014. Bản này có mục 1–5. Mục 6–10 (Cost of Quality, reserve, tổng hợp, basis of estimates, cập nhật tài liệu) soạn sau.

## 1. Mục đích và loại ước lượng

Cost estimate là đánh giá định lượng chi phí có khả năng phát sinh cho nguồn lực cần để hoàn thành công việc. Ước lượng có thể trình bày ở mức hoạt động hoặc ở mức tổng hợp (PM07:28). Tài liệu này ước lượng ở mức gói công việc lá của WBS (P05), rồi cộng lên sáu nhánh WBS và bốn nguồn Chung/A/B/C.

Số liệu là ảnh chụp ngày 24/09/2026 của dữ liệu module (`md-docs/_data/*.json`, commit `28a07ef`). Chưa có actual từ E05 nên chưa tinh chỉnh được. Đây là dự báo dựa trên thông tin có tại thời điểm lập. Ước lượng phải được rà lại và làm chi tiết dần khi có thêm thông tin và khi giả định được kiểm chứng (PM07:14, PM07:28). Lần tinh chỉnh tiếp theo làm khi E05 có actual, hoặc khi một gói PP được phân rã thành WP.

Slide nêu hai mức độ chính xác: ROM từ −25% đến +75%, Definitive từ −5% đến +10% (PM07:14). Đối chiếu khoảng O–P của bộ ước lượng với hai mức này:

| Nhóm | Số gói | ΣO (giờ) | cE (giờ) | ΣP (giờ) | Biên dưới | Biên trên | Loại ước lượng |
| --- | --: | --: | --: | --: | --: | --: | --- |
| WP | 23 | 288 | 427 | 595 | −32,6% | +39,3% | ROM; đã có hoạt động và tiêu chí đầu ra |
| PP | 9 | 96 | 172 | 264 | −44,2% | +53,5% | ROM; chưa phân rã hoạt động |
| **Toàn dự án** | **32** | **384** | **599** | **859** | **−35,9%** | **+43,4%** | **ROM**, chưa đạt Definitive |

🔵 Biên dưới của cả ba nhóm đều rộng hơn −25%, vì O được ước lượng cho trường hợp tận dụng tối đa mã và thư viện có sẵn. Kết luận "ROM" áp cho cả bộ số. Không khẳng định từng gói nằm trong khoảng −25%/+75%.

## 2. Quy ước

Cost Management Plan đầy đủ thuộc P01 (PMP). Ở đây chỉ nêu bốn điểm mà PM07:12 yêu cầu.

| Thành phần (PM07:12) | Quy ước áp dụng | Nguồn |
| --- | --- | --- |
| Đơn vị đo | Công sức tính bằng giờ công, tiền tính bằng VND. Giờ quy ra tiền theo 80.000 VND/giờ. Khoản quy đổi này là chi phí cơ hội, không phải tiền chi ra. Ngân sách tiền mặt và ngân sách công sức tách riêng | AS-02, Charter §8.1, §8.3 |
| Độ chính xác | cE từng gói giữ 2 chữ số thập phân. Tổng trình bày đến 0,01 giờ. VND làm tròn đến đồng, và chỉ quy đổi sau khi đã cộng giờ | Nhóm chọn |
| Ngưỡng kiểm soát | Một mốc vượt 120% giờ phân bổ thì báo ngay ở họp tuần · Vượt 495 giờ cần Nhà tài trợ duyệt, kèm phương án giảm phạm vi · Vượt 3.500.000 VND tiền mặt cần Nhà tài trợ duyệt · Hạ tầng vượt 150.000 VND/tháng trong Năm 0 cần Nhà tài trợ duyệt | Charter §8.5, CT-02, CT-03 |
| Quy tắc đo EVM | 🔵 Đề xuất, chờ đưa vào P01. Gói xong trong 1 kỳ tuần: tính 0/100, chỉ ghi EV khi gói đạt tiêu chí trong WBS Dictionary. Gói dài hơn 1 kỳ: tính 50/50. PP chưa có PV theo tuần thì chưa tính EV. PV, EV, AC phải cùng đơn vị giờ, cùng ngày cắt, cùng phạm vi | P01 §5 |

Forecast 599 giờ đã vượt ngưỡng 495 giờ. Việc này đang được xử lý qua CR-G-001.

## 3. Phương pháp ước lượng

| Kỹ thuật | Slide | Cách dùng trong tài liệu | Vai trò |
| --- | --- | --- | --- |
| Bottom-up | PM07:23 | Phân rã tới gói lá WBS (P05, DEC-003: 6 nhánh; A/B/C ở 4.2/4.3/4.4). Ước lượng từng gói rồi cộng ngược lên. Mỗi gói lá chỉ tính một lần | Phương pháp chính; slide coi đây là cách chính xác nhất |
| Three-point | PM07:22 | Mỗi gói có O/M/P; cE = (cO + cM + cP) / 3. Toàn dự án: (384 + 554 + 859) / 3 = 1.797 / 3 = **599 giờ** | Dùng vì nhóm chưa có dữ liệu lịch sử cho loại sản phẩm này |
| Expert judgment, họp | PM07:27 | Chủ gói tự ước lượng: Chiến làm A và phần chung, Việt Quang làm B, Quang Anh làm C. Rà chéo theo DEC-002 tại DOC-01 (26/09) và DOC-02 (29/09) | Người làm việc là người ước lượng |
| Parametric | PM07:21 | Chỉ dùng để quy đổi giờ × 80.000 VND. Không dùng tham số "giờ/màn hình" vì không có số liệu lịch sử | Quy đổi tiền |
| Analogous | PM07:20 | Không dùng để lập số. Con số 450 giờ của Charter tính từ năng lực (3 người × 15 tuần × 10 giờ/tuần), không phải từ khối lượng công việc | Chỉ để đối chiếu; không ép tổng về 450/495 giờ (DEC-009) |

## 4. Activity Cost Estimates

Bảng theo mẫu *Activity Cost Estimates* (hình PM07:29, đã đối chiếu ảnh slide). Theo slide, cost estimate có thể trình bày ở mức hoạt động (PM07:28).

**Project Title:** PromptVideo — trình tạo video trình chiếu trong trình duyệt  **Date Prepared:** 14/10/2026 (dữ liệu ảnh chụp ngày 24/09/2026)

Cách đọc các cột:

- **WBS ID:** mã hoạt động trong lịch P10 (`normalized-activities.json`). 9 gói PP chưa có hoạt động nên ghi mã gói, kèm `(PP)`.
- **Resource:** người làm và số giờ. Nhóm không có thiết bị hay vật tư được tính theo giờ.
- **Labor Costs:** giờ × 80.000 VND. Đây là chi phí cơ hội, không phải tiền chi ra (AS-02).
- **Physical Costs:** khoản tiền mặt gắn vào hoạt động dùng nó (CASH-01…04, P11 `Funding`). Dự phòng tiền mặt 400.000 VND không gắn vào hoạt động nào.
- **Reserve:** contingency theo EMV = xác suất × giờ hậu quả × 80.000 VND (PM07:26, DEC-005).
  - 🔵 Dữ liệu rủi ro không có trường WBS. Nhóm ghép từng rủi ro vào hoạt động theo nguyên nhân và trigger của nó.
  - Rủi ro A và R-C-05 có contingency bằng 0, vì phần việc đã nằm trong số giờ cơ sở (P11 `Reserves`, P08).
  - Không gồm management reserve.
- **Estimate** = Labor Costs + Physical Costs + Reserve.
- **Method:**
  - *Three-point* (PM07:22): hoạt động trùng với gói; giờ = cE = (O + M + P)/3.
  - *Bottom-up + expert judgment* (PM07:23, PM07:27): chủ module B/C chia cE của gói thành các hoạt động.
- **Range:** khoảng O–P của gói, kèm % so với cE (PM07:30). Hoạt động được chia từ gói thì dùng khoảng của gói.
- **Confidence Level** (PM07:30), 🔵 thang do nhóm đặt:
  - *Trung bình:* WP đã có hoạt động và tiêu chí đầu ra.
  - *Thấp:* PP, hoặc hoạt động phụ thuộc bên ngoài, đang Blocked, hay còn issue mở.

| WBS ID | Resource | Labor Costs (VND) | Physical Costs (VND) | Reserve (VND) | Estimate (VND) | Method | Assumptions/Constraints | Basis of Estimates | Range | Confidence Level |
| --- | --- | --: | --: | --: | --: | --- | --- | --- | --- | --- |
| ACT-1.1-01 — Bộ hồ sơ khởi tạo | Chiến · 23,00 h | 1.840.000 | 0 | 0 | 1.840.000 | Three-point (mức gói) | DEC-008; AS-03 (10 h/người/tuần) | P05: O/M/P 18/23/28; cE = 23,00 h | 18–28 h (−21,7% / +21,7%) | Trung bình |
| ACT-1.2-01 — Kế hoạch quản lý dự án | Chiến · 28,00 h | 2.240.000 | 0 | 0 | 2.240.000 | Three-point (mức gói) | DEC-001; AS-03 | P05: O/M/P 20/28/36; cE = 28,00 h | 20–36 h (−28,6% / +28,6%) | Trung bình |
| ACT-1.3-01 — Báo cáo theo dõi và kiểm soát | Việt Quang · 16,00 h | 1.280.000 | 0 | 320.000 (4,0 h; R-B-09) | 1.600.000 | Three-point (mức gói) | DEC-009; chưa có actual E05 | P05: O/M/P 12/16/20; cE = 16,00 h | 12–20 h (−25,0% / +25,0%) | Trung bình |
| ACT-2.1-01 — Đặc tả yêu cầu phần mềm | Chiến · 12,00 h | 960.000 | 0 | 0 | 960.000 | Three-point (mức gói) | DEC-007 giữ toàn phạm vi | P05: O/M/P 8/12/16; cE = 12,00 h | 8–16 h (−33,3% / +33,3%) | Trung bình |
| ACT-2.2-01 — Ma trận truy vết yêu cầu | Chiến · 8,00 h | 640.000 | 0 | 0 | 640.000 | Three-point (mức gói) | DEC-004 quy ước mã | P05: O/M/P 6/8/10; cE = 8,00 h | 6–10 h (−25,0% / +25,0%) | Trung bình |
| ACT-3.1-01 — Kiến trúc và nguyên mẫu mã hóa | Chiến · 10,00 h | 800.000 | 0 | 0 | 800.000 | Three-point (mức gói) | AS-14, AS-15 | A_02: O/M/P 6/10/14; cE = 10,00 h | 6–14 h (−40,0% / +40,0%) | Trung bình |
| ACT-3.2-01 — Đặc tả giao tiếp và schema dự án | Chiến · 23,33 h | 1.866.667 | 0 | 0 | 1.866.667 | Three-point (mức gói) | DEC-011, DEC-012, DEC-013 | P05: O/M/P 17/22/31; cE = 23,33 h | 17–31 h (−27,1% / +32,9%) | Trung bình |
| ACT-4.1-01 — Nền tảng mã nguồn và CI | Việt Quang · 24,00 h | 1.920.000 | 0 | 0 | 1.920.000 | Three-point (mức gói) | AS-21 giấy phép thư viện | P05: O/M/P 18/24/30; cE = 24,00 h | 18–30 h (−25,0% / +25,0%) | Trung bình |
| ACT-4.2.1-01 — Trình soạn thảo nội dung | Chiến · 28,67 h | 2.293.333 | 0 | 0 | 2.293.333 | Three-point (mức gói) | AS-33 | A_02: O/M/P 20/26/40; cE = 28,67 h | 20–40 h (−30,2% / +39,5%) | Trung bình |
| ACT-4.2.2-01 — Thư viện năm mẫu trình chiếu | Chiến · 13,33 h | 1.066.667 | 0 | 0 | 1.066.667 | Three-point (mức gói) | AS-11, AS-17 | A_02: O/M/P 8/12/20; cE = 13,33 h | 8–20 h (−40,0% / +50,0%) | Trung bình |
| ACT-4.2.3-01 — Bộ dựng và xem trước | Chiến · 24,67 h | 1.973.333 | 0 | 0 | 1.973.333 | Three-point (mức gói) | AS-17, AS-18 | A_02: O/M/P 16/22/36; cE = 24,67 h | 16–36 h (−35,1% / +45,9%) | Trung bình |
| ACT-4.2.4-01 — Bộ xuất MP4 theo luồng | Chiến · 22,00 h | 1.760.000 | 0 | 0 | 1.760.000 | Three-point (mức gói) | AS-14, AS-15, AS-16, AS-32 | A_02: O/M/P 14/18/34; cE = 22,00 h | 14–34 h (−36,4% / +54,5%) | Trung bình |
| ACT-4.2.5-01 — Kho dự án cục bộ | Chiến · 15,33 h | 1.226.667 | 0 | 0 | 1.226.667 | Three-point (mức gói) | AS-32; R-A-08 | A_02: O/M/P 10/14/22; cE = 15,33 h | 10–22 h (−34,8% / +43,5%) | Trung bình |
| ACT-4.2.6-01 — Kiểm quyền xuất và danh mục mẫu | Chiến · 23,67 h | 1.893.333 | 0 | 0 | 1.893.333 | Three-point (mức gói) | DEC-011, DEC-012; AS-47 | A_02: O/M/P 16/21/34; cE = 23,67 h | 16–34 h (−32,4% / +43,7%) | Thấp — ISS-G-001/002 còn mở |
| 4.2.7 (PP) — Tạm dừng xuất và cảnh báo trình duyệt | Chiến · 11,33 h | 906.667 | 0 | 0 | 906.667 | Three-point (mức gói) | AS-10; chưa phân rã | A_02: O/M/P 6/10/18; cE = 11,33 h; chưa có hoạt động | 6–18 h (−47,1% / +58,8%) | Thấp — PP chưa phân rã |
| ACT-4.3.1-01 — Cấu hình tài khoản, đăng nhập và đổi mật khẩu | Việt Quang · 6,00 h | 480.000 | 0 | 0 | 480.000 | Bottom-up + expert judgment | AS-48 (nhánh máy chủ 60 h, dùng thư viện) | B_02: chia cE gói 4.3.1 = 14,00 h thành 3 hoạt động | Theo gói 4.3.1: 10–18 h | Trung bình |
| ACT-4.3.1-02 — Hoàn thiện role, lockout, CSRF và rate limit | Việt Quang · 4,00 h | 320.000 | 0 | 288.000 (3,6 h; R-B-08) | 608.000 | Bottom-up + expert judgment | AS-48 (nhánh máy chủ 60 h, dùng thư viện) | B_02: chia cE gói 4.3.1 = 14,00 h thành 3 hoạt động | Theo gói 4.3.1: 10–18 h | Trung bình |
| ACT-4.3.1-03 — Kiểm test cục bộ và bàn giao API xác thực | Việt Quang · 4,00 h | 320.000 | 0 | 0 | 320.000 | Bottom-up + expert judgment | AS-48 (nhánh máy chủ 60 h, dùng thư viện) | B_02: chia cE gói 4.3.1 = 14,00 h thành 3 hoạt động | Theo gói 4.3.1: 10–18 h | Trung bình |
| ACT-4.3.2-01 — Hoàn thiện policy, snapshot và kỳ sử dụng UTC | Việt Quang · 6,67 h | 533.333 | 0 | 336.000 (4,2 h; R-B-05, R-B-07) | 869.333 | Bottom-up + expert judgment | DEC-011 (TTL 30 phút); AS-48 | B_02: chia cE gói 4.3.2 = 24,00 h thành 3 hoạt động | Theo gói 4.3.2: 16–34 h | Trung bình |
| ACT-4.3.2-02 — Hoàn thiện reserve/complete/cancel, concurrency và cộng lượt có kiểm soát | Việt Quang · 10,67 h | 853.333 | 0 | 832.000 (10,4 h; R-B-03, R-B-04) | 1.685.333 | Bottom-up + expert judgment | DEC-011 (TTL 30 phút); AS-48 | B_02: chia cE gói 4.3.2 = 24,00 h thành 3 hoạt động | Theo gói 4.3.2: 16–34 h | Trung bình |
| ACT-4.3.2-03 — Kiểm test cục bộ ranh giới hạn, TTL và hoàn lượt | Việt Quang · 6,67 h | 533.333 | 0 | 0 | 533.333 | Bottom-up + expert judgment | DEC-011 (TTL 30 phút); AS-48 | B_02: chia cE gói 4.3.2 = 24,00 h thành 3 hoạt động | Theo gói 4.3.2: 16–34 h | Trung bình |
| ACT-4.3.3-01 — Hoàn thiện sự kiện, giả lập và chống lặp checkout | Việt Quang · 7,67 h | 613.333 | 0 | 288.000 (3,6 h; R-B-02) | 901.333 | Bottom-up + expert judgment | DEC-010 giả lập non-Production; AS-48 | B_02: chia cE gói 4.3.3 = 26,67 h thành 3 hoạt động | Theo gói 4.3.3: 16–40 h | Trung bình |
| ACT-4.3.3-02 — Kết nối adapter/callback cổng thật sau hồ sơ được duyệt | Việt Quang · 12,33 h | 986.667 | 1.500.000 (CASH-01) | 480.000 (6,0 h; R-B-01) | 2.966.667 | Bottom-up + expert judgment | AS-43 (cổng duyệt ≤ 4 tuần); CT-02 | B_02: chia cE gói 4.3.3 = 26,67 h thành 3 hoạt động | Theo gói 4.3.3: 16–40 h | Thấp — phụ thuộc cổng duyệt hồ sơ |
| ACT-4.3.3-03 — Hoàn thiện gia hạn, nhắc và test cục bộ | Việt Quang · 6,67 h | 533.333 | 0 | 0 | 533.333 | Bottom-up + expert judgment | DEC-010 giả lập non-Production; AS-48 | B_02: chia cE gói 4.3.3 = 26,67 h thành 3 hoạt động | Theo gói 4.3.3: 16–40 h | Trung bình |
| ACT-4.3.4-01 — Hoàn thiện trang auth và dữ liệu quyền | Việt Quang · 4,33 h | 346.667 | 0 | 0 | 346.667 | Bottom-up + expert judgment | AS-48 | B_02: chia cE gói 4.3.4 = 16,00 h thành 3 hoạt động | Theo gói 4.3.4: 10–24 h | Trung bình |
| ACT-4.3.4-02 — Ghép mua/gia hạn và hạn thuê bao | Việt Quang · 6,67 h | 533.333 | 0 | 0 | 533.333 | Bottom-up + expert judgment | AS-48 | B_02: chia cE gói 4.3.4 = 16,00 h thành 3 hoạt động | Theo gói 4.3.4: 10–24 h | Trung bình |
| ACT-4.3.4-03 — Ghép dữ liệu hóa đơn/chỗ sau hai PP phân rã và xong API | Việt Quang · 5,00 h | 400.000 | 0 | 0 | 400.000 | Bottom-up + expert judgment | AS-48; chờ 4.3.5/4.3.6 phân rã | B_02: chia cE gói 4.3.4 = 16,00 h thành 3 hoạt động | Theo gói 4.3.4: 10–24 h | Thấp — phụ thuộc 2 gói PP |
| 4.3.5 (PP) — Hóa đơn Doanh nghiệp | Việt Quang · 22,00 h | 1.760.000 | 0 | 0 | 1.760.000 | Three-point (mức gói) | DEC-007; chưa phân rã | B_02: O/M/P 12/20/34; cE = 22,00 h; chưa có hoạt động | 12–34 h (−45,5% / +54,5%) | Thấp — PP chưa phân rã |
| 4.3.6 (PP) — Quản lý 5 chỗ Doanh nghiệp | Việt Quang · 26,00 h | 2.080.000 | 0 | 0 | 2.080.000 | Three-point (mức gói) | DEC-007; chưa phân rã | B_02: O/M/P 14/24/40; cE = 26,00 h; chưa có hoạt động | 14–40 h (−46,2% / +53,8%) | Thấp — PP chưa phân rã |
| ACT-4.4.1-01 — Chuẩn hóa model/catalog và validator manifest/version | Quang Anh · 7,00 h | 560.000 | 0 | 320.000 (4,0 h; R-C-01) | 880.000 | Bottom-up + expert judgment | DEC-012 | C_02: chia cE gói 4.4.1 = 22,00 h thành 3 hoạt động | Theo gói 4.4.1: 14–32 h | Trung bình |
| ACT-4.4.1-02 — Hoàn thiện ảnh dùng chung và kiểm tham chiếu | Quang Anh · 9,00 h | 720.000 | 700.000 (CASH-02) | 96.000 (1,2 h; R-C-03) | 1.516.000 | Bottom-up + expert judgment | AS-11, AS-38; CT-02 | C_02: chia cE gói 4.4.1 = 22,00 h thành 3 hoạt động | Theo gói 4.4.1: 14–32 h | Trung bình |
| ACT-4.4.1-03 — Kiểm unit/integration gói, quyền, trạng thái và audit | Quang Anh · 6,00 h | 480.000 | 0 | 0 | 480.000 | Bottom-up + expert judgment | DEC-006 | C_02: chia cE gói 4.4.1 = 22,00 h thành 3 hoạt động | Theo gói 4.4.1: 14–32 h | Trung bình |
| 4.4.2 (PP) — Hồ sơ hỗ trợ và giao tiếp điều chỉnh hạn mức | Quang Anh · 20,00 h | 1.600.000 | 0 | 288.000 (3,6 h; R-C-02) | 1.888.000 | Three-point (mức gói) | DEC-013 (IF-CB-01); chưa phân rã | C_02: O/M/P 10/18/32; cE = 20,00 h; chưa có hoạt động | 10–32 h (−50,0% / +60,0%) | Thấp — PP chưa phân rã |
| ACT-4.4.3-01 — Định nghĩa kỳ metrics, nguồn LI và fixture | Quang Anh · 5,00 h | 400.000 | 0 | 320.000 (4,0 h; R-C-04) | 720.000 | Bottom-up + expert judgment | AS-44; dữ liệu đo lợi ích theo BMP | C_02: chia cE gói 4.4.3 = 14,00 h thành 3 hoạt động | Theo gói 4.4.3: 8–22 h | Trung bình |
| ACT-4.4.3-02 — Hoàn thiện health/error và bộ dữ liệu theo kỳ | Quang Anh · 5,00 h | 400.000 | 0 | 0 | 400.000 | Bottom-up + expert judgment | AS-44; dữ liệu đo lợi ích theo BMP | C_02: chia cE gói 4.4.3 = 14,00 h thành 3 hoạt động | Theo gói 4.4.3: 8–22 h | Trung bình |
| ACT-4.4.3-03 — Kiểm metrics/failure health/redaction, lưu kết quả | Quang Anh · 4,00 h | 320.000 | 0 | 0 | 320.000 | Bottom-up + expert judgment | AS-44; dữ liệu đo lợi ích theo BMP | C_02: chia cE gói 4.4.3 = 14,00 h thành 3 hoạt động | Theo gói 4.4.3: 8–22 h | Trung bình |
| 4.4.4 (PP) — Giao diện quản trị | Quang Anh · 16,00 h | 1.280.000 | 0 | 0 | 1.280.000 | Three-point (mức gói) | DEC-012; chưa phân rã | C_02: O/M/P 8/14/26; cE = 16,00 h; chưa có hoạt động | 8–26 h (−50,0% / +62,5%) | Thấp — PP chưa phân rã |
| ACT-5.1-01 — Bản tích hợp A–B–C và bằng chứng | Chiến · 16,33 h | 1.306.667 | 0 | 0 | 1.306.667 | Three-point (mức gói) | DEC-006; môi trường tích hợp Blocked | A_02: O/M/P 11/14/24; cE = 16,33 h | 11–24 h (−32,7% / +46,9%) | Thấp — môi trường tích hợp Blocked |
| 5.2 (PP) — Báo cáo hiệu năng và tính xác định | Chiến · 28,00 h | 2.240.000 | 0 | 0 | 2.240.000 | Three-point (mức gói) | AS-16, AS-17; chưa phân rã | A_02: O/M/P 16/24/44; cE = 28,00 h; chưa có hoạt động | 16–44 h (−42,9% / +57,1%) | Thấp — PP chưa phân rã |
| 5.3 (PP) — Báo cáo độ tin cậy, tiếng Việt và dễ dùng | Chiến · 20,67 h | 1.653.333 | 0 | 0 | 1.653.333 | Three-point (mức gói) | AS-33; chưa phân rã | A_02: O/M/P 12/18/32; cE = 20,67 h; chưa có hoạt động | 12–32 h (−41,9% / +54,8%) | Thấp — PP chưa phân rã |
| 6.1 (PP) — Bản phát hành production | Quang Anh · 20,00 h | 1.600.000 | 900.000 (CASH-03, CASH-04) | 128.000 (1,6 h; R-B-06) | 2.628.000 | Three-point (mức gói) | CT-03 (≤ 150.000 VND/tháng); AS-25, AS-44 | P05: O/M/P 12/20/28; cE = 20,00 h; chưa có hoạt động | 12–28 h (−40,0% / +40,0%) | Thấp — PP chưa phân rã |
| ACT-6.2-01 — Gói demo và hướng dẫn sử dụng | Quang Anh · 10,00 h | 800.000 | 0 | 0 | 800.000 | Three-point (mức gói) | DEC-007 (demo 5 cảnh/60 giây) | P05: O/M/P 6/10/14; cE = 10,00 h | 6–14 h (−40,0% / +40,0%) | Trung bình |
| ACT-6.3-01 — Hồ sơ kết thúc và bài trình bày | Quang Anh · 12,00 h | 960.000 | 0 | 0 | 960.000 | Three-point (mức gói) | DEC-008 | P05: O/M/P 8/12/16; cE = 12,00 h | 8–16 h (−33,3% / +33,3%) | Trung bình |
| 6.4 (PP) — Biên bản nghiệm thu sản phẩm | Chiến · 8,00 h | 640.000 | 0 | 0 | 640.000 | Three-point (mức gói) | DEC-009; nhóm không ký thay nghiệm thu | P05: O/M/P 6/8/10; cE = 8,00 h; chưa có hoạt động | 6–10 h (−25,0% / +25,0%) | Thấp — PP chưa phân rã |
| **Tổng — 35 hoạt động + 9 gói PP** | **599,00 h** | **47.920.000** | **3.100.000** | **3.696.000 (46,2 h)** | **54.716.000** | | | | **384–859 h (−35,9% / +43,4%)** | **ROM** |

Ghi chú:

- **Labor Costs:** 599 giờ = 47.920.000 VND, gồm WP 427 giờ và PP 172 giờ. Cột VND làm tròn từng dòng, nên cộng tay có thể lệch 1 VND.
- **Physical Costs:** 3.100.000 VND. Thêm 400.000 VND dự phòng tiền mặt thì bằng trần 3.500.000 VND (CT-02).
- **Reserve:** 46,2 giờ = 3.696.000 VND, gồm B 33,4 giờ và C 12,8 giờ. Đây là đề xuất, chưa duyệt.
- **Estimate:** 54.716.000 VND. Đây là chi phí công quy đổi cộng tiền mặt dự trù cộng contingency. Không phải tiền đã chi, và chưa gồm management reserve.
- Ánh xạ rủi ro → hoạt động:

  | Rủi ro | Hoạt động / gói |
  | --- | --- |
  | R-B-01 | ACT-4.3.3-02 |
  | R-B-02 | ACT-4.3.3-01 |
  | R-B-03, R-B-04 | ACT-4.3.2-02 |
  | R-B-05, R-B-07 | ACT-4.3.2-01 |
  | R-B-06 | 6.1 |
  | R-B-08 | ACT-4.3.1-02 |
  | R-B-09 | ACT-1.3-01 |
  | R-C-01 | ACT-4.4.1-01 |
  | R-C-02 | 4.4.2 |
  | R-C-03 | ACT-4.4.1-02 |
  | R-C-04 | ACT-4.4.3-01 |

  Chủ rủi ro (Việt Quang, Quang Anh) cần xác nhận cách ghép này trong P13.

### 4.1. Tổng theo nhánh WBS

| Nhánh | Tên | Số gói | ΣO | ΣM | ΣP | cE (giờ) | VND | Tỷ trọng |
| --- | --- | --: | --: | --: | --: | --: | --: | --: |
| 1 | Quản lý dự án | 3 | 50 | 67 | 84 | 67,00 | 5.360.000 | 11,2% |
| 2 | Yêu cầu | 2 | 14 | 20 | 26 | 20,00 | 1.600.000 | 3,3% |
| 3 | Thiết kế | 2 | 23 | 32 | 45 | 33,33 | 2.666.667 | 5,6% |
| 4 | Xây dựng | 19 | 226 | 329 | 536 | 363,67 | 29.093.333 | 60,7% |
| 4.2 | — trong đó Module A | 7 | 90 | 123 | 204 | 139,00 | 11.120.000 | 23,2% |
| 4.3 | — trong đó Module B | 6 | 78 | 118 | 190 | 128,67 | 10.293.333 | 21,5% |
| 4.4 | — trong đó Module C | 4 | 40 | 64 | 112 | 72,00 | 5.760.000 | 12,0% |
| 5 | Tích hợp và kiểm thử | 3 | 39 | 56 | 100 | 65,00 | 5.200.000 | 10,9% |
| 6 | Triển khai và bàn giao | 4 | 32 | 50 | 68 | 50,00 | 4.000.000 | 8,3% |
| | **Cộng** | **32** | **384** | **554** | **859** | **599,00** | **47.920.000** | **100%** |

Nhánh 4 gồm 4.1 (24 giờ) và ba module 4.2–4.4. Các dòng "trong đó" không cộng thêm vào tổng.

### 4.2. Tổng theo nguồn ước lượng và loại gói

| Nguồn | Gói | ΣO | ΣM | ΣP | cE (giờ) | VND |
| --- | --- | --: | --: | --: | --: | --: |
| Chung | 1.x, 2.x, 3.2, 4.1, 6.x (11 gói) | 131 | 183 | 239 | 184,33 | 14.746.667 |
| A | 3.1, 4.2.x, 5.x (11 gói) | 135 | 189 | 318 | 214,00 | 17.120.000 |
| B | 4.3.x (6 gói) | 78 | 118 | 190 | 128,67 | 10.293.333 |
| C | 4.4.x (4 gói) | 40 | 64 | 112 | 72,00 | 5.760.000 |
| **Cộng** | **32 gói** | **384** | **554** | **859** | **599,00** | **47.920.000** |
| — WP | 23 gói | 288 | 398 | 595 | 427,00 | 34.160.000 |
| — PP | 9 gói | 96 | 156 | 264 | 172,00 | 13.760.000 |

### 4.3. So với Charter

| Mức so sánh | Giờ | Chênh lệch so với 599 giờ | % | Ghi chú |
| --- | --: | --: | --: | --- |
| Ngân sách công sức Charter §8.3 | 450 | +149 | +33,11% | Tính từ năng lực, không phải khối lượng |
| Trần cần phê duyệt Charter §8.5 | 495 | +104 | +21,01% | Vượt ngưỡng; xử lý qua CR-G-001 |

599 giờ chưa gồm contingency và management reserve, và không phải tiền đã chi. Phần vượt giữ nguyên và hiển thị rõ (DEC-009).

## 5. Chi phí tiền mặt, phân loại chi phí và phương án mua/thuê

### 5.1. Chi phí tiền mặt

| Mã | Khoản | WBS | VND | Thời điểm | Chủ | Đã chi |
| --- | --- | --- | --: | --- | --- | --- |
| CASH-01 | Phí khởi tạo và tích hợp cổng thanh toán | 4.3.3 | 1.500.000 | M6 | Việt Quang | Chưa có chứng từ |
| CASH-02 | Tài sản đồ họa có bản quyền cho 5 mẫu | 4.4.1 | 700.000 | M3 | Quang Anh | Chưa có chứng từ |
| CASH-03 | Máy chủ ảo và chứng chỉ, 4 tháng trong dự án | 6.1 | 600.000 | M6 | Quang Anh | Chưa có chứng từ |
| CASH-04 | Tên miền năm đầu | 6.1 | 300.000 | M6 | Quang Anh | Chưa có chứng từ |
| | **Cộng dự trù** | | **3.100.000** | | | |
| CASH-R | Dự phòng tiền mặt | — | 400.000 | Khi được duyệt dùng | Chiến | — |
| | **Tổng = trần CT-02** | | **3.500.000** | | | Chưa phân bổ: 0 |

Nguồn: Charter §8.2, sheet `Funding` của P11. Font dùng giấy phép SIL OFL nên không tốn tiền. Ứng dụng web phát hành dạng file tĩnh qua CDN gói miễn phí (AS-25), nên cũng không phát sinh khoản tiền mặt.

### 5.2. Phân loại chi phí (PM07:5)

| Khoản | Direct / Indirect | Fixed / Variable | Lý do |
| --- | --- | --- | --- |
| Công sức nhóm, 599 giờ (47.920.000 VND quy đổi) | Direct | Variable | Chỉ phát sinh vì có dự án; tăng giảm theo khối lượng việc. Slide xếp tiền công vào nhóm variable |
| CASH-01 Cổng thanh toán | Direct | Fixed | Phí khởi tạo trả một lần. 🔵 Phí giao dịch sau phát hành là chi phí variable của giai đoạn vận hành, ngoài dự án |
| CASH-02 Tài sản đồ họa | Direct | Fixed | Mua một lần cho 5 mẫu |
| CASH-03 VPS và chứng chỉ | Direct | Fixed | Tiền thuê theo tháng, cố định trong 4 tháng; slide xếp tiền thuê vào fixed. Trần 150.000 VND/tháng (CT-03) |
| CASH-04 Tên miền | Direct | Fixed | Phí năm, cố định |
| Máy cá nhân, Internet, kho mã/CI gói miễn phí, IDE | Indirect | Fixed | Dùng chung với việc học và dự án khác; không phân bổ, không tính tiền. 🔵 Nếu sau này phải trả tiền thì phân bổ theo thỏa thuận trước khi đưa vào P11 |

### 5.3. Phương án mua/thuê/tự làm (PM07:10, PM07:24)

Khi ước lượng, cần cân nhắc các đánh đổi make/buy, buy/lease và dùng chung nguồn lực (PM07:14, PM07:24).

| Hạng mục | Các phương án | Chọn | Lý do | Căn cứ |
| --- | --- | --- | --- | --- |
| Hạ tầng máy chủ | Thuê VPS · PaaS gói miễn phí · Máy nhà | Thuê VPS | PaaS miễn phí giới hạn giờ chạy và hay ngủ máy, rủi ro cho kiểm quyền trước mỗi lần xuất. Máy nhà không đáp ứng production. VPS có chi phí cố định, dự báo được, nằm trong 600.000 VND | NF-09, AS-44, AS-47, CT-03 |
| Tài sản đồ họa | Tự vẽ · Mua toàn bộ · CC0/SIL OFL rồi mua phần thiếu | CC0/SIL OFL + mua phần thiếu | Tự vẽ tốn giờ trên nhánh đang vượt giờ. Mua toàn bộ có thể vượt 700.000 VND. Thời gian tìm giới hạn ở 8 giờ; không đủ thì làm mẫu tối giản | AS-11, AS-38 |
| Xác thực và cổng thanh toán | Tự viết · Dùng thư viện/SDK có sẵn | Dùng có sẵn | Toàn nhánh máy chủ được giả định trong 60 giờ. Phí 1.500.000 VND là giá mua dịch vụ cổng | AS-48 |
| Bộ ghép luồng MP4 | Tự viết · Thư viện giấy phép phù hợp | Thư viện | Tự viết vượt xa ngân sách giờ. Nếu tại M2 không có thư viện phù hợp thì giảm phạm vi, không tự viết | AS-15, NF-07 |
| Font | Mua · SIL OFL | SIL OFL | 0 VND, được phân phối lại cùng sản phẩm | Charter §8.2 |

🔵 Chưa có so sánh định lượng giữa giờ và tiền cho từng phương án, ví dụ số giờ tự vẽ quy đổi so với giá mua. Bổ sung khi gói 4.4.1 có actual.

## Nguồn

| Loại | Chi tiết |
| --- | --- |
| Slide | PM07:5, PM07:10, PM07:12, PM07:14, PM07:20–24, PM07:26–30 |
| Quyết định | DEC-001 → DEC-014 (theo cột Assumptions/Constraints) |
| Đầu vào | Charter v2.1 §8 · P10 + `md-docs/_data/normalized-activities.json` (35 hoạt động) · Assumption Log v2.1 (AS-02, AS-11, AS-15, AS-25, AS-38, AS-44, AS-47, AS-48, CT-02, CT-03) · P01 §3–§5 · P05 · P11 sheet `Estimates`/`Funding`/`Procurement` · `md-docs/_data/{common,a,b,c}-data.json` · CR-G-001 |

## Lịch sử phiên bản

| Phiên bản | Ngày | Thay đổi |
| --- | --- | --- |
| v1.0 | 14/10/2026 | Tạo mục 1–5 từ dữ liệu module ngày 24/09 và P11, dạng bảng; mục 4 là Activity Cost Estimates theo mẫu hình PM07:29 (35 hoạt động + 9 gói PP, có Reserve theo EMV). Mục 6–10 chưa soạn |
