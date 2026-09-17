# Kiến thức dùng được

Bộ công cụ thầy dạy, kèm chỉ dẫn **khi nào dùng cái nào**. Khác với [file 01](./01_Quy_tac_bat_buoc.md) — file đó là luật *phải* theo, file này là công cụ *được phép* chọn.

---

## 1. Chọn và biện minh dự án

### 1.1. Chọn công cụ thẩm định nào?

| Câu hỏi cần trả lời | Công cụ | Ghi chú |
| ------------------- | ------- | ------- |
| Dự án có tạo ra giá trị không? | **NPV** | Tuyệt đối, tính bằng tiền hôm nay. Ngưỡng: `> 0` |
| Một đồng bỏ ra đổi lấy mấy đồng? | **BCR** | Hiệu suất. So sánh được giữa các dự án khác quy mô |
| Bao lâu lấy lại vốn? | **Payback / Breakeven** | Trực quan nhất với nhà tài trợ; **bỏ qua giá trị thời gian của tiền** nếu không chiết khấu |
| Sinh lời bao nhiêu phần trăm? | **ROI** | Không xét giá trị thời gian của tiền |
| Dự án chịu được lãi suất tới đâu? | **IRR** | `r` làm `NPV = 0`. So với chi phí vốn để biết biên an toàn |
| Bỏ việc khác để làm việc này có đáng? | **Opportunity Cost** | Quy đổi công sức thành tiền |
| Đã lỡ chi rồi thì tính không? | **Sunk Cost** | **Không** đưa vào quyết định đi tiếp hay dừng |

> **NPV và BCR là hai mặt của một phép tính**: `NPV = PV(lợi ích) − PV(chi phí)`, `BCR = PV(lợi ích) ÷ PV(chi phí)`. Nên `NPV > 0 ⟺ BCR > 1`. Dùng cả hai vì NPV nói **quy mô**, BCR nói **hiệu suất**.

### 1.2. So sánh nhiều phương án

**Scoring model / Decision matrix** (`PM03:10` · `PM05:29-30`) — dùng khi phải chọn giữa nhiều lựa chọn và muốn quyết định minh bạch thay vì cảm tính.

Ví dụ mẫu của thầy (`PM05:30`):

| Feature | Biz Value (5) | Demand (4) | Dev Effort (3) | Risk (2) | Total |
| ------- | ------------- | ---------- | -------------- | -------- | ----: |
| User Profile | 5 × 5 = 25 | 4 × 4 = 16 | 2 × 3 = 6 | 1 × 2 = 2 | **49** |
| Push Notification | 3 × 5 = 15 | 5 × 4 = 20 | 1 × 3 = 3 | 2 × 2 = 4 | 42 |
| In-app Chat | 4 × 5 = 20 | 3 × 4 = 12 | 5 × 3 = 15 | 4 × 2 = 8 | 55 |

> Lưu ý cái bẫy trong chính ví dụ của thầy: với *Effort* và *Risk*, **điểm cao = xấu**, nên phải **đảo điểm hoặc đảo trọng số** trước khi cộng. Ví dụ trên chọn *User Profile* (49) chứ không chọn *In-app Chat* (55) chính vì lý do đó.

**Alternatives analysis cho chi phí** (`PM07:9-10`) — 5 bước: liệt kê phương án → ước lượng chi phí trực tiếp và gián tiếp → đánh giá yếu tố phi chi phí (chất lượng, rủi ro, tuân thủ) → so bằng ma trận quyết định → chọn cân bằng chi phí/giá trị tốt nhất.

Bao gồm cả lựa chọn **cách huy động vốn** (tự có / vốn góp / vay) và cách có nguồn lực (**làm / mua / thuê / cho thuê**).

---

## 2. Thu thập yêu cầu

| Tình huống | Kỹ thuật |
| ---------- | -------- |
| Cần thông tin sâu từ một người | **Interview** |
| Cần nhiều ý tưởng nhanh | **Brainstorming** — đi tìm số lượng, hoãn phê bình, hoan nghênh ý tưởng điên rồ, kết hợp và cải tiến |
| Nhóm có người ngại nói / ít thời gian | **Brain writing** |
| Cần nhiều bên bàn cùng lúc, có người điều phối | **Focus group** |
| Cần số liệu từ nhiều người | **Questionnaire / Survey** |
| Cần thống nhất nhanh giữa các bộ phận | **Facilitated workshop** (JAD, user stories) |
| Yêu cầu bị giấu, người dùng không nói ra được | **Observation / job shadowing** |
| Có sẵn tài liệu, hợp đồng, quy trình | **Document analysis** |
| Muốn so với đối thủ | **Benchmarking** |
| Cần chốt lựa chọn trong nhóm | **Voting**: Unanimity · Majority (>50%) · Plurality (khối lớn nhất) · Autocratic |
| Brainstorm rồi bỏ phiếu | **Nominal Group Technique** |
| Cần thấy được trước khi xây | **Prototype** (concept, mockup, storyboard, demo) |
| Cần thấy ranh giới hệ thống | **Context diagram** — mức nhìn cao nhất, ai ở ngoài tương tác vào |
| Gom ý tưởng thành nhóm | **Affinity diagram** |

**Phân biệt Requirement vs Scope** (`PM05:16`):

| | Requirements | Scope |
| - | ------------ | ----- |
| Mô tả | Cái gì **cần / được mong đợi** | Cái gì **sẽ được bàn giao** và cái gì **không** |
| Mục đích | Hiểu đúng nhu cầu bên liên quan | Định ranh giới công việc, chặn scope creep |
| Mức | Chi tiết, cụ thể | Mức cao, tóm lược |

**Từ vựng yêu cầu** (`PM05:17`) — dùng đúng tên: Business requirement · Business rule · Constraint · External interface requirement · Feature · **Functional requirement** (hành vi hệ thống trong điều kiện cụ thể) · **Nonfunctional requirement** (thuộc tính, đặc tính, hoặc ràng buộc phải tôn trọng) · Quality attribute · System requirement · User requirement.

---

## 3. Phân tích bên liên quan

### 3.1. Chọn mô hình biểu diễn

| Tình huống | Mô hình |
| ---------- | ------- |
| Dự án nhỏ, quan hệ đơn giản | **Grid model** — Power/Interest, Power/Influence, Impact/Influence |
| Cần thêm chiều thái độ ủng hộ/phản đối | **Stakeholder Cube** — Power × Interest × **Attitude** |
| Cộng đồng lớn, quan hệ phức tạp | **Salience Model** — Power × **Urgency** × **Legitimacy** |
| Muốn biết ai ảnh hưởng theo hướng nào | **Directions of influence** — Upward / Downward / Outward / Sideward |
| Nhiều bên, thay đổi liên tục | **Prioritization** |
| Muốn thấy quan hệ giữa các bên | **Mind mapping** |

**Bốn định nghĩa gốc** (`PM03:41`): **Power** = mức thẩm quyền · **Interest** = mức quan tâm tới kết quả · **Influence** = khả năng tác động lên kết quả · **Impact** = khả năng gây thay đổi lên kế hoạch hoặc việc thực thi.

### 3.2. Tám kiểu bên liên quan và cách xử lý (`PM03:45`)

| Kiểu | Đặc điểm | Cách ứng xử |
| ---- | -------- | ----------- |
| **Saviour** | Quyền cao, quan tâm cao, thái độ tích cực | Chăm sóc kỹ, giữ họ ở phía mình |
| **Friend** | Quyền thấp, quan tâm cao, tích cực | Dùng làm người tâm sự, nơi thử ý tưởng |
| **Saboteur** | Quyền cao, quan tâm cao, **tiêu cực** | Phải kéo vào cuộc để vô hiệu hoá; chuẩn bị sẵn tinh thần dọn dẹp sau họ |
| **Irritant** | Quyền thấp, quan tâm cao, tiêu cực | Kéo vào cuộc để họ ngừng gặm nhấm, rồi đưa về đúng chỗ |
| **Sleeping Giant** | Quyền cao, quan tâm **thấp**, tích cực | Đánh thức họ dậy |
| **Acquaintance** | Quyền thấp, quan tâm thấp, tích cực | Chỉ cần thông báo một chiều |
| **Time Bomb** | Quyền cao, quan tâm thấp, **tiêu cực** | Phải hiểu để "tháo ngòi trước khi nổ" |
| **Trip Wire** | Quyền thấp, quan tâm thấp, tiêu cực | Hiểu để tránh vấp |

**Stake của một bên liên quan** (`PM03:31`): Interest · Rights (pháp lý hoặc đạo đức) · Ownership · Knowledge · Contribution.

---

## 4. Ước lượng

| Tình huống | Kỹ thuật | Đánh đổi |
| ---------- | -------- | -------- |
| Có dự án tương tự trước đó, thông tin ít | **Analogous** | Rẻ, nhanh, **kém chính xác nhất** |
| Có đơn giá lịch sử, khối lượng đo được | **Parametric** | Chính xác nếu dữ liệu tốt. `20h/module × 50 module = 1000h` |
| Không có dữ liệu lịch sử, phải dựa phán đoán | **Three-point / PERT** | `(O + M + P) / 3` |
| Đã phân rã đủ chi tiết | **Bottom-up** | **Chính xác nhất**, tốn công nhất |

**Basis of estimates — phải kèm theo ước lượng** (`PM06:48` · `PM07:29`): cơ sở lập ước lượng · mọi giả định đã dùng · ràng buộc đã biết · **khoảng dao động** (ví dụ ±10%) · **mức tin cậy**.

**Cách diễn đạt khoảng** (`PM06:48`): *"10 ngày ± 2 ngày"* = ít nhất 8, nhiều nhất 12. Hoặc *"15% khả năng vượt 3 tuần"* = 85% khả năng xong trong 3 tuần.

---

## 5. Rủi ro

**Ma trận Probability × Impact** — công cụ chính của **qualitative** analysis, dùng để **xếp ưu tiên**, không phải để tính tiền.

**Impact đo bằng** (`PM08:17`): Cost (vượt ngân sách bao nhiêu) · Time (trễ mấy tuần) · Scope/Quality (mất tính năng, tăng lỗi) · Reputation, safety…

**Khi nào cần quantitative?** (`PM08:47-48`) — **không bắt buộc cho mọi dự án**. Tốn kém và khó, chỉ làm cho **rủi ro ưu tiên cao**. Công cụ: **EMV**, mô phỏng **Monte Carlo**.

**Cách phân nhóm rủi ro** (`PM08:42`): theo giai đoạn dự án · theo **WBS** · theo **RBS** · theo nguyên nhân gốc chung.

**Trigger** (`PM08:68`): kế hoạch dự phòng chỉ chạy khi gặp điều kiện định trước — dấu hiệu, cảnh báo, hoặc trigger. Ví dụ trigger: **trượt một milestone trung gian**. Trigger phải được **định nghĩa và theo dõi**.

---

## 6. Ra quyết định ở phase gate

**Bốn kết quả có thể** (`PM02:13`): **Go** · **Hold** · **Kill** · **Recycle**.

**Chọn cách tiếp cận theo độ phức tạp** (`PM02:14-17`):

| Miền (Cynefin / Stacey) | Đặc điểm | Chiến lược |
| ----------------------- | -------- | ---------- |
| **Clear / Simple** | Nhân quả rõ, ổn định, có best practice | Dùng **mẫu chuẩn**, cho phép fast tracking |
| **Complicated** | Biết được nhưng cần phân tích/chuyên gia | **Mời chuyên gia**, làm nguyên mẫu theo giai đoạn, lập kế hoạch kỹ hơn |
| **Complex** | Nhân quả chỉ rõ khi nhìn lại; không có đáp án đúng | **Probe & prototype trước khi cam kết**; lặp, giữ gate linh hoạt |
| **Chaotic** | Không rõ nhân quả, khủng hoảng | Quyết định theo mệnh lệnh trước, ổn định rồi chuyển sang cách xử lý complex |

**Quy trình tích hợp vào phase gate** (`PM02:18`): thu thập dữ liệu → định vị miền → phân tích tác động theo khẩu vị rủi ro của tổ chức → **quyết định Go/Hold/Recycle/Kill** → thực thi và ghi lessons learned.

---

## 7. Chọn cách tiếp cận phát triển

| | Predictive | Adaptive / Agile |
| - | ---------- | ---------------- |
| Nền tảng | **Process-based** | **Principle-based** |
| Loại việc | Việc **định nghĩa được** | Việc **bất định cao** |
| Dẫn dắt bởi | **Kế hoạch** | **Giá trị** |
| Tính chất | Prescriptive | Descriptive |

**Hybrid dùng khi** (`PM02:7`): có bất định quanh yêu cầu · deliverable chia mô-đun được · các đội khác nhau làm các deliverable khác nhau.

**Yếu tố chọn** (`PM02:9`): độ chắc chắn của yêu cầu · mức dễ thay đổi · rủi ro và quy định · mức tham gia của bên liên quan · ràng buộc lịch và vốn · cơ cấu và văn hoá tổ chức · **quy mô và vị trí đội**.

> Câu chốt của thầy (`PM02:5`): *"Không quan trọng cách đó là agile hay predictive. Câu hỏi phải đặt ra là: làm sao để thành công nhất?"*

---

## 8. Bối cảnh tổ chức

**Cơ cấu tổ chức và quyền của PM** (`PM01:44-47`) — xếp theo mức thẩm quyền tăng dần:

`Organic → Functional → Multidivisional → Weak matrix → Balanced matrix → Strong matrix → Projectized`

| Cơ cấu | Vai trò PM | Phù hợp với |
| ------ | ---------- | ----------- |
| **Organic / Simple** | Hiếm khi tồn tại hoặc rất không chính thức; **PM làm bán thời gian**, ít trách nhiệm về ngân sách — quyết định ngân sách do **chủ sở hữu** đưa ra | Đội nhỏ, trao đổi không chính thức, vận hành linh hoạt |
| **Functional** | Gần như không có thẩm quyền, đóng vai điều phối | Nhấn mạnh chuyên môn hoá, phân cấp rõ |
| **Weak matrix** | Điều phối viên, cần FM duyệt mới có nguồn lực | Giai đoạn đầu chuyển sang làm theo dự án |
| **Balanced matrix** | Chia sẻ thẩm quyền với FM | Cần phối hợp liên phòng ban |
| **Strong matrix** | Thẩm quyền mạnh về ngân sách, đội, quyết định | Dự án phức tạp, cần quyết nhanh |
| **Projectized** | **Toàn quyền**, chịu trách nhiệm thành bại | Doanh nghiệp vận hành hoàn toàn theo dự án |

**EEF vs OPA** (`PM01:39-43`):

| | EEF — Enterprise Environmental Factors | OPA — Organizational Process Assets |
| - | -------------------------------------- | ----------------------------------- |
| Là gì | Điều kiện môi trường **không do đội kiểm soát** | Tài sản quy trình **nội bộ tổ chức** |
| Nội bộ | Văn hoá, cơ cấu, hạ tầng, PMIS, nhân sự hiện có | Chính sách, quy trình, thủ tục, **mẫu tài liệu** |
| Bên ngoài | Điều kiện thị trường, pháp lý, chuẩn ngành, chính trị | — |
| Đội cập nhật được? | Không | **Có** — corporate knowledge base, lessons learned |

**PMO** (`PM01:51`): **Supportive** (kiểm soát thấp — cấp mẫu, best practice, đào tạo) · **Controlling** (kiểm soát vừa — bắt tuân thủ mẫu và khung quản trị) · **Directive** (kiểm soát cao — trực tiếp quản lý dự án, PM báo cáo cho PMO).

---

## 9. Dự án thành công là gì

**Định nghĩa** (`PM01:32`): giao được **kết quả dự định** trong phạm vi **các ràng buộc**.

**Sáu ràng buộc + trung tâm** (`PM01:34`): Scope · Schedule · Budget · Quality · Resource · Risk — tất cả xoay quanh **Stakeholder Satisfaction**.

> **Sự hài lòng của bên liên quan được coi là một mục tiêu dự án** (`PM03:34`), không phải thứ có thì tốt. Và: *"quản lý bên liên quan chủ động và đúng cách ⇒ giảm rủi ro dự án"*.

**Giá trị nằm ở mắt người mua, không phải người bán** (`PM01:19`).
