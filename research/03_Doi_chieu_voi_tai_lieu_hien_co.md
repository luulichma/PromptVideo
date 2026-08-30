# Đối chiếu `docs/` với yêu cầu môn học

So bộ tài liệu hiện có với [luật ở file 01](./01_Quy_tac_bat_buoc.md). Kết luận dùng để quyết định **cắt gì, thêm gì, chuyển gì đi đâu**.

---

## 1. Bảng tổng hợp

| Hạng mục | Yêu cầu môn học | Hiện trạng | Kết luận |
| -------- | --------------- | ---------- | -------- |
| Project Charter — 12 mục | 12 mục cố định | Đủ 12 mục, đúng thứ tự | ✅ **Đúng cấu trúc** |
| Project Charter — độ dài | Mẫu gọn trong **1 slide** | **505 dòng** | 🔴 **Phình nặng** |
| Charter §4 High-level Requirements | Mẫu có **3 gạch đầu dòng** | **16 RQ + 11 NF = 27 dòng** | 🔴 Không còn là "mức cao" |
| Business Case — 3 nội dung lõi | Business needs · Analysis of the situation · Recommendation | Có đủ | ✅ |
| Business Case — Feasibility | Đúng **5**: Technical · **Economic** · Operational · Legal · Schedule | Có 5 nhưng là: kỹ thuật, pháp lý, vận hành, tiến độ, **nguồn lực** | 🔴 **Thiếu Economic, thừa "nguồn lực"** |
| Benefit Management Plan — 7 thành phần | Target benefits · Strategic alignment · Timeframe · Benefits owner · Metrics · Assumptions · Risks | Có đủ 7 | ✅ |
| Vị trí thẩm định tài chính | Thuộc **Project Selection** → Business Case | Nằm ở **BMP §4**, 156 dòng | 🔴 **Sai tài liệu** |
| Công cụ thẩm định | NPV · BCR · Payback · ROI · **IRR** | NPV · BCR · Payback · ROI | 🟡 **Thiếu IRR** |
| Opportunity Cost | Có trong danh sách | Có — 450 giờ × 80.000 VND | ✅ **Làm tốt** |
| Sunk Cost | Có trong danh sách | Không nhắc | 🟡 Thiếu (chấp nhận được — dự án chưa chi gì) |
| Scoring model | 5 bước, có trọng số | Có — 6 tiêu chí, trọng số, điểm chi tiết | ✅ **Làm tốt** |
| Assumption Log — số cột | **5 cột** | **8 cột** | 🟡 Thừa 3 cột |
| Assumption Log — quy mô | Mẫu **7 dòng** | **45 AS + 8 CT = 53 mục** | 🔴 **Phình gấp ~7,5 lần** |
| Assumption Log — Validity Status | 3 giá trị: Validated / Not Yet Validated / Validated (Conditional) | Dùng "🔵 Mở" | 🟡 Sai bộ giá trị |
| **Stakeholder Register** | **Bắt buộc, lập trong Initiating trước khi sang Planning** | **Chưa có** | 🔴 **Thiếu hẳn** |
| Charter §9 Stakeholder List | Mẫu: 3 gạch đầu dòng | Bảng 6 cột, 9 dòng | 🟡 Đang làm thay việc của Register |
| WBS — quy tắc 100% | Bắt buộc | Có nêu và tuân thủ | ✅ |
| WBS — quy tắc **8/80** | Không gói nào < 8h hoặc > 80h | **5 gói vi phạm cận dưới** | 🔴 **Vi phạm** |
| WBS Dictionary | Code of accounts · Description · Assumptions/constraints · Responsible org · Milestones | Có | ✅ |
| RTM | 7 cột chuẩn | Có ma trận truy vết nhưng khác cột | 🟡 Chỉnh cột khi lập RTM chính thức |
| Contingency vs Management Reserve | Phải phân biệt | Chỉ có "Dự phòng 400.000" | 🟡 Chưa tách hai loại |
| PERT | `(O + M + P) / 3` | Chưa dùng | 🟡 Sẽ cần ở Schedule Plan |

---

## 2. Năm gói công việc vi phạm quy tắc 8/80

Quy tắc: **không gói nào dưới 8 giờ**. Trích từ [WBS §4.1](../docs/02_Planning/00_WBS_v2.0.md):

| WBS | Gói công việc | Giờ | |
| --- | ------------- | --: | - |
| 8.2 | Triển khai và rà soát giấy phép | **3 h** | 🔴 |
| 3.4 | Kiểm thử người dùng | **4 h** | 🔴 |
| 8.1 | Tài liệu người dùng và tài liệu vận hành | **5 h** | 🔴 |
| 2.4.3 | Độ tin cậy và độ phủ kiểm thử | **6 h** | 🔴 |
| 2.4.1 | Khung kiểm thử và baseline MT-06 | **7 h** | 🔴 |

Cận trên không có vấn đề — gói lớn nhất là `2.2.2 Bộ dựng lõi` = 38 h, nằm trong ngưỡng 80 h.

**Cách sửa:** gộp lên cấp cha. `8.1 + 8.2 = 8 h` gộp thành một gói "Phát hành và tài liệu"; `2.4.1 + 2.4.3 = 13 h` gộp vào `2.4 Hạ tầng chất lượng`; `3.4` gộp vào `3.2 Thư viện mẫu` hoặc vào nhánh kiểm thử. Việc này **giảm số gói**, tức đi đúng hướng đơn giản hoá.

---

## 3. Trả lời câu hỏi: bộ tài liệu có bị phức tạp hoá không?

**Có — nhưng không phải ở chỗ dễ thấy nhất.**

Độ dài tự nó không sai. Cái sai là bộ tài liệu đang **tự tạo ra công việc cho chính nó** ở bốn chỗ:

### 3.1. Số liệu tài chính bị chép tay vào ba tài liệu

`NPV +433,4tr` · `BCR 3,52` · `hoà vốn 28%` xuất hiện ở Business Case, Benefit Management Plan và Hợp đồng. Hệ quả: `docs/README.md` phải dựng hẳn một checklist "kiểm tra nhất quán chéo" để canh ba chỗ này khớp nhau. **Đổi một giả định là phải sửa ba chỗ và soát lại bằng tay.**

→ **Chữa:** một nguồn duy nhất. Theo môn học, nguồn đó là **Business Case** (thẩm định đầu tư thuộc Project Selection). Hai tài liệu còn lại chỉ **dẫn chiếu**, không lặp số.

### 3.2. Assumption Log đang gánh việc của bốn tài liệu khác

53 mục với 8 cột, trong đó có cột *Hệ quả nếu sai* và *Cách xác minh / giảm thiểu*. Hai cột này là nội dung của **Risk Register** (`PM08:32`), không phải Assumption Log (`PM03:29` chỉ có 5 cột, cột cuối là *Notes / Justification*).

→ **Chữa:** rút về 5 cột đúng mẫu. Nội dung rủi ro chuyển sang Risk Register khi lập ở Planning. Gộp các giả định cùng chủ đề — 53 mục có thể rút còn ~15–20 mà không mất thông tin nào có ích.

### 3.3. Charter §4 không còn là "high-level"

27 dòng yêu cầu ở một tài liệu mà mẫu của thầy để **3 gạch đầu dòng**. Chính Charter §4.3 đã tự nhận điều này: *"Đây là yêu cầu mức cao. Việc phân rã chi tiết… sẽ thực hiện ở nhóm tiến trình Planning."* — nhưng bản thân §4 lại đã phân rã rồi.

→ **Chữa:** Charter §4 giữ ~5–7 dòng nhóm lại theo tính năng. Chi tiết RQ/NF chuyển sang **Requirements Specification** ở Planning, nơi nó thuộc về.

### 3.4. Luật "mã không bao giờ cấp lại"

Quy ước này đang bắt bộ tài liệu ghi sổ 4 mã đã rút (OB-05, RQ-11, RS-08, SH-09) ở bốn chỗ khác nhau. Đây là quy ước hợp lý cho hệ thống sống nhiều năm; với một bài tập 15 tuần nó là chi phí thuần.

→ **Chữa:** bỏ luật, đánh số lại liên tục, ghi một dòng lý do vào Assumption Log.

---

## 4. Việc phải làm, xếp theo thứ tự

| # | Việc | Vì sao | Quy mô |
| - | ---- | ------ | ------ |
| 1 | **Lập Stakeholder Register** (`docs/01_Initiating/03_...`) theo 3 nhóm cột chuẩn, xuất `.xlsx` sang `output-docs/` | Bắt buộc, và **phải xong trước khi sang Planning** | Mới |
| 2 | **Chuyển thẩm định tài chính** từ BMP §4 sang Business Case | Sai tài liệu theo `PM03:6,7` | Chuyển ~156 dòng |
| 3 | **Đổi "khả thi về nguồn lực" → "khả thi về kinh tế"** ở Business Case §5 | Đúng 5 khía cạnh thầy dạy | Sửa 1 mục |
| 4 | **Bổ sung IRR** vào bộ chỉ tiêu | Thầy có dạy, và đúng trục vốn/hoàn vốn | Thêm ~10 dòng |
| 5 | **Gộp 5 gói WBS dưới 8 giờ** | Vi phạm 8/80 | Sửa sơ đồ + dictionary |
| 6 | **Rút Assumption Log về 5 cột**, gộp 53 → ~15–20 mục, đổi Validity Status về 3 giá trị chuẩn | Đúng mẫu `PM03:29` | Rút gọn lớn |
| 7 | **Rút gọn Charter §4** còn mức cao, đẩy chi tiết sang Requirements Specification | Đúng vai tài liệu | Rút ~20 dòng |
| 8 | **Bỏ luật "mã không cấp lại"**, đánh số liên tục | Chi phí thuần với dự án 15 tuần | Sửa quy ước |
| 9 | **Tách Management Reserve** khỏi Contingency Reserve trong ngân sách | Phân biệt bắt buộc `PM07:31,35` | Sửa bảng ngân sách |

---

## 5. Những chỗ đang làm tốt — giữ nguyên

Không phải mọi thứ đều thừa. Bốn điểm dưới đây **vượt mức yêu cầu theo hướng đúng** và nên giữ:

1. **Scoring model có trọng số, có cách tính hiển thị.** `PM03:10` yêu cầu 5 bước; tài liệu làm đủ 5 và còn viết ra phép tính `5(0,25) + 5(0,20) + … = 4,60`. Đây đúng là thứ chứng minh quyết định không cảm tính.
2. **Tách chi phí tiền mặt khỏi chi phí cơ hội của công sức.** Trực tiếp áp dụng **Opportunity Cost** trong `PM03:7`, và tách ra hai bảng trả lời hai câu hỏi khác nhau — đúng tinh thần môn học.
3. **Chuỗi truy vết `BO → OB → BN → MT`.** `PM05:36` yêu cầu RTM liên kết yêu cầu với mục tiêu nghiệp vụ và deliverable. Tài liệu đã có sẵn xương sống này.
4. **Cấu trúc 12 mục của Charter và 7 thành phần của BMP.** Khớp mẫu chính xác.

---

## 6. Ghi chú về trọng tâm *vốn — thời gian — hoàn vốn — lãi*

Bốn thứ này nằm rải ở ba tài liệu. Sau khi làm việc số 2 ở §4, chúng gom về đúng chỗ:

| Câu hỏi | Sau khi sắp lại, nằm ở |
| ------- | ---------------------- |
| Cần bao nhiêu **vốn**? | Business Case (Cost summary) + Charter §8 Summary Budget |
| Mất bao nhiêu **thời gian phát triển**? | Charter §7 Summary Milestone Schedule + WBS + Schedule Management Plan |
| Bao lâu **hoàn vốn**? | Business Case — Payback / Breakeven |
| **Lãi** bao nhiêu? | Business Case — NPV, BCR, ROI, IRR |
| Lợi ích **đo bằng gì, ai chịu trách nhiệm, khi nào có**? | Benefit Management Plan — Metrics, Benefits owner, Timeframe |

Ranh giới rõ: **Business Case trả lời "có đáng bỏ tiền không"** (bằng số), **Benefit Management Plan trả lời "lợi ích đến khi nào, đo ra sao, ai chịu trách nhiệm"** (bằng chỉ số và người). Không tài liệu nào lặp lại tài liệu kia.
