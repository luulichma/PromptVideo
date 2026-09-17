# Luật phải tuân

Rút từ 11 deck môn học. Mỗi mục dưới đây là **ràng buộc**, không phải gợi ý: viết khác đi là lệch khỏi thứ được chấm.

> Ký hiệu nguồn: `PM03:26` = deck PM03, slide 26.

---

## 1. Khung tổng thể

**5 nhóm tiến trình** (`PM02:23`): Initiating → Planning → Executing → Monitoring & Controlling → Closing.

**10 lĩnh vực kiến thức** (`PM02:34`): Integration · Scope · Schedule · Cost · Quality · Resource · Communication · Risk · Procurement · Stakeholder.

**Thứ tự tài liệu Pre-project → Initiating** (`PM03:4-6, 17`):

```
Need Assessment  →  Business Case  →  Benefit Management Plan  →  Project Charter  →  Assumption Log
                                                                          ↓
                                                                 Stakeholder Register
```

Business Case và Benefit Management Plan là **đầu vào** của Develop Project Charter, không phải sản phẩm của nó.

**Quan hệ Output → Outcome → Benefit → Value** (`PM01:19`) — phải phân biệt, không được dùng lẫn:

| Thuật ngữ | Định nghĩa | Ví dụ của thầy |
| --------- | ---------- | -------------- |
| Output | Sản phẩm bàn giao | Hệ thống bán hàng mới |
| Outcome | Kết quả cuối của quá trình | Đơn hàng xử lý nhanh hơn, ít lỗi hơn |
| Benefit | Lợi ích tổ chức thu được | Chi phí giảm 10%, đơn hàng +15% |
| Value | Giá trị — cái đáng giá | Trải nghiệm khách hàng mượt mà |

---

## 2. Business Case

**Bắt buộc chứa** (`PM03:5`): Business needs · Analysis of the situation · Recommendation.

**Mục đích** (`PM03:5`): làm căn cứ (a) cấp phép các hoạt động quản lý dự án tiếp theo, (b) đo thành công và tiến độ trong suốt vòng đời bằng cách so kết quả với mục tiêu và tiêu chí thành công đã nêu.

**Nguồn của business need** (`PM03:4`): Market demand · Organizational need · Customer request · Legal requirements · Social need · Technological advance.

### 2.1. Feasibility Analysis — đúng **5** khía cạnh (`PM03:8`)

| # | Khía cạnh | Trả lời câu hỏi |
| - | --------- | --------------- |
| 1 | **Technical** | Làm được về mặt kỹ thuật không? |
| 2 | **Economic** | Có đáng tiền không? |
| 3 | **Operational** | Vận hành được sau khi bàn giao không? |
| 4 | **Legal** | Hợp pháp không? |
| 5 | **Schedule** | Kịp thời gian không? |

> ⚠️ Đúng năm cái này, không thêm không bớt. "Khả thi về nguồn lực" **không** nằm trong danh sách của thầy — nội dung đó thuộc *Operational* hoặc *Schedule*.

### 2.2. Công cụ chọn dự án (`PM03:7`)

| Nhóm | Công cụ |
| ---- | ------- |
| **Short-list selection** | Feasibility analysis · Murder board · Peer review · **Scoring models** |
| **Benefit–Cost analysis** | **BCR** · Opportunity Cost · Sunk Costs |
| **Investment Appraisal** | **Payback period / Breakeven** · **PV** · **NPV** · **IRR** · **ROI** |

> Cả ba nhóm này thuộc **Project Selection**, tức đầu vào của Business Case — **không** thuộc Benefit Management Plan.

**Scoring model — 5 bước bắt buộc** (`PM03:10`): (1) định nghĩa tiêu chí → (2) gán trọng số → (3) chấm từng phương án theo từng tiêu chí → (4) tính điểm có trọng số → (5) so tổng điểm.

**Murder board** (`PM03:9`): hội đồng phản biện đóng vai người hoài nghi, chất vấn giả định, có quyền "giết" phương án. Kết quả: approved / revised / rejected.

### 2.3. Công thức — phải viết đúng dạng thầy dạy

| Chỉ tiêu | Công thức (`PM03:7`) |
| -------- | -------------------- |
| **PV** | `PV = FV / (1 + r)ⁿ` — FV: giá trị tương lai · r: lãi suất · n: số kỳ |
| **NPV** | `NPV = PV of Income − PV of Cost` |
| **IRR** | Lãi suất `r` làm cho `NPV = 0` |
| **ROI** | Tỷ suất hoàn vốn trên vốn đầu tư |
| **BCR** | `PV(lợi ích) / PV(chi phí)` |
| **Payback** | Thời điểm dòng luỹ kế đổi dấu âm → dương |

Ngưỡng chấp nhận thông thường: `NPV > 0` ⟺ `BCR > 1`.

---

## 3. Benefit Management Plan

**Định nghĩa** (`PM03:6`): tài liệu mô tả **lợi ích của dự án sẽ được bàn giao *như thế nào* và *khi nào***, và **đo bằng cách nào**.

**Bắt buộc chứa đúng 7 thành phần** (`PM03:6`):

1. Target benefits
2. Strategic alignment
3. Timeframe for realizing benefits
4. Benefits owner
5. Metrics
6. Assumptions
7. Risks

> ⚠️ **Không có thẩm định tài chính trong danh sách này.** NPV / BCR / Payback / ROI / IRR thuộc §2.2 ở trên, tức Business Case.

---

## 4. Project Charter

**Là gì** (`PM03:14`): tài liệu (a) chính thức khai sinh dự án, (b) trao cho giám đốc dự án thẩm quyền dùng nguồn lực của tổ chức.
**Khi nào**: trước khi dự án/giai đoạn trở thành chính thức.
**Ai ban hành**: **project initiator hoặc sponsor** (giám đốc dự án chỉ hỗ trợ soạn).

**Cấu trúc 12 mục — theo đúng mẫu** (`PM03:26`):

| # | Mục |
| - | --- |
| 1 | Project Title |
| 2 | Project Purpose or Justification |
| 3 | Measurable Project Objectives and Success Criteria |
| 4 | High-level Requirements |
| 5 | High-level Project Description and Boundaries |
| 6 | High-level Risks |
| 7 | Summary Milestone Schedule |
| 8 | Summary Budget |
| 9 | Stakeholder List |
| 10 | Project Approval Requirements |
| 11 | Assigned Project Manager and Authority Level |
| 12 | Name and Authority of the Sponsor |

**Độ dài mẫu:** toàn bộ 12 mục của ví dụ *Smart Warehouse Management System* nằm gọn trong **một slide** — mục 3 có 3 gạch đầu dòng, mục 4 có 3 gạch, mục 9 có 3 gạch. Đây là mức chi tiết thầy kỳ vọng ở tài liệu **mức cao**.

**Mục tiêu phải S.M.A.R.T** (`PM03:16`) và phải được các bên liên quan chính cùng giám đốc dự án **thống nhất**.

---

## 5. Assumption Log

**Là gì** (`PM03:27`): sổ ghi **mọi giả định và ràng buộc** trong suốt vòng đời dự án.

- Giả định **mức cao** (chiến lược, vận hành) sinh ra ở **Business Case**, chảy vào **Project Charter**.
- Giả định **mức thấp** (hoạt động, tác vụ) sinh ra suốt dự án: đặc tả kỹ thuật, ước lượng, lịch, rủi ro.

**Ai cung cấp** (`PM03:28`): PM, sponsor, stakeholder, chuyên gia kỹ thuật.

**Bảng đúng 5 cột** (`PM03:29`):

| ID | Assumption | Impact Area | Validity Status | Notes / Justification |
| -- | ---------- | ----------- | --------------- | --------------------- |

- `Impact Area` — ví dụ trong mẫu: *Schedule, Scope* · *Integration, Timeline* · *Cost, Technical Feasibility* · *Training, Stakeholders*.
- `Validity Status` — chỉ ba giá trị: **Validated** · **Not Yet Validated** · **Validated (Conditional)**.
- Mẫu của thầy có **7 dòng** (A-01 → A-07), mã dạng `A-xx`.

---

## 6. Stakeholder Register

**Là gì** (`PM03:48`): output của tiến trình *Identify Stakeholders*.

**Ba nhóm thông tin bắt buộc** — đây chính là bộ cột của bảng:

| Nhóm | Trường |
| ---- | ------ |
| **Identification information** | Name · Organizational position · Location · Role in the project · Contact information |
| **Assessment information** | Major requirements · Main expectations · Potential influence in the project · Phase in the life cycle with the most interest |
| **Stakeholder classification** | internal/external · impact/influence/power/interest · upward/downward/outward/sideward · hoặc mô hình phân loại khác do PM chọn |

**Khi nào lập** (`PM03:35`): **càng sớm càng tốt — trong Initiating và dứt khoát trước khi bắt đầu Planning**; sau đó rà lại định kỳ.

**Vì sao** (`PM03:35`): một bên liên quan chủ chốt **không được nhận diện** có thể biến thành rủi ro cao cho dự án.

**Bốn hướng ảnh hưởng** (`PM03:46`) — dùng cho cột classification:

| Hướng | Gồm ai |
| ----- | ------ |
| **Upward** | Quản lý cấp cao, nhà tài trợ, ban chỉ đạo |
| **Downward** | Thành viên đội, chuyên gia |
| **Outward** | Ngoài đội dự án: nhà cung cấp, cơ quan nhà nước, công chúng, người dùng cuối, cơ quan quản lý |
| **Sideward** | Ngang hàng với PM: các PM khác, quản lý cấp trung |

---

## 7. Scope & WBS

**Scope Baseline = Scope Statement + WBS + WBS Dictionary** (`PM05:55`). Chỉ đổi được qua **thủ tục kiểm soát thay đổi chính thức**.

### 7.1. Luật phân rã WBS (`PM05:53-54`)

| Luật | Nội dung |
| ---- | -------- |
| **Quy tắc 100%** | Tổng công việc ở cấp con phải bằng **đúng 100%** công việc của cấp cha; WBS **không** được chứa việc nằm ngoài phạm vi dự án |
| **Quy tắc 8/80** | Không gói công việc nào **dưới 8 giờ** hoặc **trên 80 giờ** |
| **Một kỳ báo cáo** | Không gói công việc nào dài hơn một kỳ báo cáo |
| **Đủ nhỏ** | Nếu giao được, đo được, quản được mà không cần chẻ nhỏ hơn — thế là đủ nhỏ |
| **Là sản phẩm, không phải hành động** | Cấp thấp nhất của WBS **luôn là deliverable**. Lập kế hoạch theo *kết quả*, không theo *hành động* |

**WBS không phải là gì** (`PM05:53`): không phải danh sách vét cạn công việc · không phải kế hoạch, lịch trình hay danh sách theo thứ tự thời gian · không phải sơ đồ tổ chức. Nó nói **cái gì sẽ được làm**, không nói *làm thế nào* hay *khi nào*.

**Phân rã quá mức** dẫn tới quản lý vi mô không tạo giá trị.

### 7.2. Work package vs Planning package (`PM05:51`)

| Work package | Planning package |
| ------------ | ---------------- |
| Phần tử thấp nhất của WBS | Phần tử thấp nhất **tại thời điểm hiện tại** |
| Không phân rã thêm | Sẽ được phân rã thành work package sau |
| Đầu vào chính của tiến trình Define Activities | **Không có activity nào bên dưới** |

**Rolling wave planning**: việc gần → phân rã chi tiết; việc xa → định nghĩa rộng (planning package).

### 7.3. WBS Dictionary — nội dung (`PM05:56`)

Code of accounts · Description of work · Assumptions and constraints · Responsible organization · Schedule milestones.

### 7.4. Requirements Traceability Matrix — cột chuẩn (`PM05:37`)

| Req ID | Requirement Description | Business Objective | Design Doc | Code Module | Test Case | Status |
| ------ | ----------------------- | ------------------ | ---------- | ----------- | --------- | ------ |

**Yêu cầu phải** (`PM05:35`): unambiguous (**đo được và kiểm thử được**) · traceable · complete · consistent · acceptable với các bên liên quan chính.

### 7.5. Hai lỗi kinh điển phải tránh (`PM05:4`)

- **Scope creep** — phạm vi phình ra không kiểm soát, không chính thức, từ từ.
- **Gold plating** — thêm tính năng khách hàng **không** yêu cầu.

---

## 8. Schedule

**Work package ≠ Activity** (`PM06:11`):

| Work package | Activity |
| ------------ | -------- |
| Trọng tâm: **Scope** | Trọng tâm: **Time** |
| Là deliverable | Là các bước để tạo ra deliverable |
| Nằm trong **WBS** | Nằm trong **lịch** (Gantt, network diagram) |
| Gồm: ngân sách, người chịu trách nhiệm, tiêu chí nghiệm thu | Gồm: thời lượng, ngày bắt đầu/kết thúc, phụ thuộc, nguồn lực |

**Milestone** (`PM06:16`): đánh dấu hoàn thành deliverable lớn, quyết định then chốt, phê duyệt hoặc chuyển giai đoạn. **Sự kiện có thời lượng bằng 0.**

**Quy tắc ngón tay cái về milestone** (`PM06:17`): ít nhất **một milestone cho mỗi giai đoạn hoặc deliverable lớn**; dự án dài thì **một cái mỗi tháng** hoặc mỗi điểm quyết định. **Ít mà rõ tốt hơn nhiều mà vụn.**

**4 loại phụ thuộc** (`PM06:30`): Mandatory (hard logic) · Discretionary (soft logic) · External · Internal.

**4 quan hệ PDM** (`PM06:31-32`): **FS** (phổ biến nhất) · FF · SS · SF (rất hiếm). Cấm vòng lặp kín và nhiều quan hệ giữa cùng một cặp.

### 8.1. Critical Path Method (`PM06:55-60`)

- **Đường găng** = đường **dài nhất** qua sơ đồ mạng, đồng thời là **thời gian ngắn nhất** hoàn thành dự án.
- Hoạt động trên đường găng có **float = 0**.

| Công thức | |
| --------- | - |
| Forward pass | `EF = ES + Duration − 1` |
| Backward pass | `LS = LF − Duration + 1` |
| Total Float | `TF = LS − ES = LF − EF` |
| Free Float | Thời gian trễ được mà không làm trễ **early start của hoạt động kế tiếp ngay** |
| Total Float | Thời gian trễ tối đa mà **không làm trễ ngày kết thúc dự án** |

**Float âm** = dự án đã trễ so với ràng buộc → phải nén lịch (crashing / fast tracking) hoặc xem lại ràng buộc.

### 8.2. Ước lượng thời lượng

**PERT ba điểm** (`PM06:43`, `PM07:21`) — **dùng đúng công thức của thầy**:

```
tE = (tO + tM + tP) / 3
cE = (cO + cM + cP) / 3
```

> ⚠️ Thầy dùng **chia 3** (trung bình cộng đơn giản), **không phải** `(o + 4m + p)/6`. Viết theo PMBOK chuẩn sẽ lệch mẫu.

**Các kỹ thuật khác**: Analogous (rẻ, nhanh, kém chính xác) · Parametric (đơn giá × số lượng) · **Bottom-up (chính xác nhất)**.

**Hai hiệu ứng phải biết** (`PM06:40`): **Student Syndrome** (trì hoãn tới sát hạn) · **Parkinson's Law** (việc nở ra cho đầy thời gian có sẵn).

**Resource leveling vs smoothing** (`PM06:61-62`):

| Leveling | Smoothing |
| -------- | --------- |
| Cân đối theo nguồn lực khan hiếm | Ép vào giới hạn nguồn lực định trước |
| **Đường găng thường bị đổi và kéo dài** | Chỉ trễ trong phạm vi float — **đường găng không đổi** |

---

## 9. Cost

**4 loại chi phí** (`PM07:4`): **Direct** (chỉ phát sinh vì có dự án) · **Indirect** (chia sẻ giữa nhiều dự án) · **Variable** (biến theo khối lượng) · **Fixed** (không đổi suốt dự án).

**Độ chính xác ước lượng** (`PM07:13`): **ROM −25% → +75%** · **Definitive −5% → +10%**.

**Dự phòng — phân biệt bắt buộc** (`PM07:31,35` · `PM06:45,47`):

| | Contingency Reserve | Management Reserve |
| - | ------------------- | ------------------ |
| Dành cho | Rủi ro **đã nhận diện** (known-unknowns) | Việc **không lường trước** trong phạm vi (unknown-unknowns) |
| Nằm trong baseline? | **Có** | **Không** |
| Ai kiểm soát | Giám đốc dự án | Quản lý cấp cao |
| Dùng cần gì | — | **Change request chính thức** + phê duyệt sponsor |

`Cost Baseline = ước lượng + contingency reserve` · `Tổng ngân sách = Cost Baseline + Management Reserve`.
Cost baseline là **time-phased**, có dạng **đường cong S**.

**Cost Management Plan phải nêu** (`PM07:11`): đơn vị đo · mức chính xác và độ chụm · **ngưỡng kiểm soát (%)** · quy tắc đo hiệu năng (EVM).

**EVM** (`PM07:41-51`): `PV` · `EV` · `AC` → `CV = EV − AC` · `SV = EV − PV` · `CPI = EV/AC` · `SPI = EV/PV` · `VAC = BAC − EAC`.
CPI/SPI trong khoảng **0,95–1,10** được coi là bình thường.

---

## 10. Risk & Change Control

**Risk Management Plan phải nêu** (`PM08:14`): risk strategy · methodology · roles & responsibilities · funding · timing · **risk categories (RBS)** · **stakeholder risk appetite dưới dạng ngưỡng đo được** · định nghĩa probability & impact · **ma trận P&I** · định dạng báo cáo · cách theo dõi.

**Prompt list — 8 nhóm rủi ro** (`PM08:28`): Technical · External · Organizational · Project Management · Legal/Compliance · Financial · Environmental/Social · Stakeholders.

**Risk Register** (`PM08:32,45`) — sau Identify: rủi ro đã nhận diện · chủ sở hữu rủi ro · ứng phó dự kiến. Sau Qualitative bổ sung: nhóm · **điểm/thứ hạng rủi ro** · chủ sở hữu chính thức · danh sách cần ứng phó sớm · **watch list** rủi ro thấp.

**Risk Report** (`PM08:33`): nguồn rủi ro tổng thể + tổng hợp rủi ro riêng lẻ.

**EMV** (`PM08:54`): `EMV = Probability × Impact` — dùng để tính contingency reserve.

**Chiến lược ứng phó** (`PM08:61,63`):

| Threat (5) | Opportunity (5) |
| ---------- | --------------- |
| Escalate · **Avoid** · **Transfer** · **Mitigate** · **Accept** | Escalate · **Exploit** · **Share** · **Enhance** · **Accept** |

**Mitigation vs Contingency plan** (`PM08:69`): mitigation = hành động **trước**, tốn tiền trước, giảm xác suất/tác động. Contingency = chuẩn bị sẵn, **chỉ kích hoạt khi thấy dấu hiệu cảnh báo (trigger)**, không đổi xác suất.

**Perform Integrated Change Control** (`PM08:96-103`):
- **CCB** họp để **duyệt / hoãn / từ chối** change request.
- Mọi thay đổi — kể cả hành động khắc phục và phòng ngừa — **phải qua quy trình này; chỉ khi được duyệt mới được thực hiện**.
- Kết quả ghi vào **Change Log**, kể cả cái bị từ chối.
- **Baseline chỉ đổi từ mốc gần nhất trở đi — không sửa lại hiệu năng quá khứ.**

---

## 11. Resource · Communication · Quality · Close

**RACI** (`PM09:15`): **R**esponsible (người làm) · **A**ccountable (người chịu trách nhiệm cuối — **đúng một người mỗi việc**) · **C**onsulted (góp ý trước khi làm) · **I**nformed (được thông báo).

**Ba sơ đồ phân cấp** (`PM09:14`): **WBS** (mảng trách nhiệm mức cao) · **OBS** (theo phòng ban/đơn vị) · **RBS** (theo loại nguồn lực).

**Ba phương thức truyền thông** (`PM04:49`): **Push** (thư, email — gửi đi nhưng không chắc được đọc) · **Pull** (website, cơ sở dữ liệu — người nhận tự lấy) · **Interactive** (họp, gọi điện — hai chiều thời gian thực).

**Stakeholder Engagement Assessment Matrix** (`PM04:27`): đánh dấu **C** = mức tham gia **hiện tại**, **D** = mức **mong muốn**; việc của kế hoạch là tìm nguyên nhân khoảng cách C→D và bịt nó.

**Cost of Quality** (`PM11:12`): Cost of Conformance (phòng ngừa, kiểm tra, đào tạo) + Cost of Nonconformance (lỗi, hỏng, phạt).

**Final Report — nội dung bắt buộc** (`PM11:85`): mô tả tóm tắt dự án · **Scope objectives** (tiêu chí đánh giá + bằng chứng đã đạt) · **Schedule objectives** (ngày milestone thực tế + lý do sai lệch) · **Cost objectives** (khoảng chi phí chấp nhận được, chi phí thực tế, lý do sai lệch).

**Validate Scope** (`PM05:59,63`): do **khách hàng / nhà tài trợ / bên liên quan được uỷ quyền** thực hiện — **không phải đội dự án**. Ba kết quả: chấp nhận chính thức · phải sửa lỗi · phát sinh change request đưa lên CCB.
Thứ tự: **Control Quality → Validate Scope → Close Project**.
