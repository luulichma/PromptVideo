# Tài liệu quản lý dự án — PromptVideo

Thư mục này chứa toàn bộ tài liệu quản lý dự án của PromptVideo, tổ chức theo **Pre-project + 5 nhóm tiến trình** (process group) của PMBOK, đúng quy cách quản lý tài liệu mà môn học yêu cầu.

> **Bối cảnh.** Nhánh `for-subjects-at-uni` phát triển dự án theo một **bối cảnh doanh nghiệp giả định** (Enticy Studios là tổ chức chủ quản) để phục vụ môn Quản lý dự án phần mềm tại Học viện Công nghệ Bưu chính Viễn thông. Mọi số liệu tài chính, quy mô người dùng và đơn giá là giả định có ghi chú, được đăng ký tại [Assumption Log](./01_Initiating/02_Assumption_Log_v1.0.md). Các thông số kỹ thuật là số liệu thật. Nhánh `main` giữ nguyên hướng mã nguồn mở, không mang bối cảnh này.

---

## Danh mục tài liệu

| STT | Tài liệu | Nhóm tiến trình | Phiên bản | Cập nhật | Nhóm phụ trách | Trạng thái |
| --- | -------- | --------------- | --------- | -------- | -------------- | ---------- |
| 1 | [Business Case](./00_Pre-project/01_Business_Case_v1.1.md) | Pre-project | Ver 1.1 | 2026-08-24 | Nhóm khởi tạo | Draft |
| 2 | [Benefit Management Plan](./00_Pre-project/02_Benefit_Management_Plan_v1.1.md) | Pre-project | Ver 1.1 | 2026-08-24 | Nhóm khởi tạo | Draft |
| 3 | [Hợp đồng thực hiện dự án](./00_Pre-project/03_Hop_dong_thuc_hien_du_an_v1.0.md) | Pre-project | Ver 1.0 | 2026-08-24 | Nhóm khởi tạo | Draft — chờ ký |
| 4 | [Project Charter](./01_Initiating/01_Project_Charter_v1.0.md) | Initiating | Ver 1.0 | 2026-08-20 | Nhóm thực hiện | Draft |
| 5 | [Assumption Log](./01_Initiating/02_Assumption_Log_v1.0.md) | Initiating | Ver 1.0 | 2026-08-20 | Nhóm thực hiện | Tài liệu sống |
| 6 | [WBS & WBS Dictionary](./02_Planning/00_WBS_v1.0.md) | Planning | Ver 1.0 | 2026-08-24 | Nhóm thực hiện | Draft |

Thứ tự đọc: **Business Case → Benefit Management Plan → Hợp đồng → Project Charter → Assumption Log**. Ba tài liệu đầu là *project business documents*, được lập **trước khi dự án được cấp phép**, nên nằm ở `00_Pre-project/`. Project Charter là tài liệu chính thức khai sinh dự án, và Assumption Log ra đời cùng nó — cả hai thuộc `01_Initiating/`.

**Phân vai giữa ba tài liệu Pre-project.** Mỗi tài liệu trả lời đúng một câu hỏi, không chồng lấn:

| Tài liệu | Trả lời câu hỏi | Nội dung đặc thù |
| -------- | --------------- | ---------------- |
| Business Case | *Có nên làm dự án này không?* | Nhu cầu thực tế, mục tiêu nghiệp vụ BO-01 → BO-06, phân tích phương án, **đánh giá khả thi** trên 5 khía cạnh |
| Benefit Management Plan | *Dự án tạo ra lợi ích gì và đáng bao nhiêu?* | Danh mục lợi ích BN-xx, chỉ số đo MT-xx, và **thẩm định tài chính bằng NPV, BCR, Payback, ROI** |
| Hợp đồng thực hiện dự án | *Hai bên cam kết gì với nhau?* | Tổng quan phạm vi, thời gian, ngân sách; nghiệm thu; kiểm soát thay đổi |

**Nội dung baseline (áp dụng cho cả bộ tài liệu):** mô hình doanh thu là **gói template có bản quyền + dịch vụ B2B** — không dùng thuê bao khoá tính năng, vì mô hình đó không thực thi được với sản phẩm mã nguồn mở chạy client-side. Quy mô đội 3 người (450 giờ), vốn tiền mặt 1.500.000 VND, không giới hạn độ dài video. Thẩm định tài chính: **NPV +165,1 triệu VND, BCR 2,08, hoà vốn ở 48% kịch bản cơ sở**.

**Thay đổi ở Ver 1.1 (Business Case và Benefit Management Plan):** hai tài liệu được tách lại theo đúng chuyên môn. Business Case bổ sung mục *Project Objectives* và giữ trọng tâm ở nhu cầu — mục tiêu — khả thi; toàn bộ phần tính toán tài chính chuyển sang Benefit Management Plan §4, nơi bốn công cụ NPV, BCR, Payback và ROI được trình bày kèm công thức và cách áp dụng.

Mẫu tài liệu trống: [`_template/00_Document_Template_v1.0.md`](./_template/00_Document_Template_v1.0.md)

---

## Cấu trúc thư mục

```
docs/
├── README.md                          ← bạn đang ở đây
├── _template/
│   └── 00_Document_Template_v1.0.md   ← khung chuẩn cho tài liệu mới
├── _archive/                          ← bản cũ đã bị thay thế, giữ để đối chiếu
│   ├── 01_Business_Case_v1.0.md
│   └── 02_Benefit_Management_Plan_v1.0.md
├── 00_Pre-project/
│   ├── 01_Business_Case_v1.1.md
│   ├── 02_Benefit_Management_Plan_v1.1.md
│   └── 03_Hop_dong_thuc_hien_du_an_v1.0.md
├── 01_Initiating/
│   ├── 01_Project_Charter_v1.0.md
│   └── 02_Assumption_Log_v1.0.md
├── 02_Planning/
│   ├── 00_WBS_v1.0.md
│   ├── 01_Requirements_Specification_...  ← chưa lập
│   └── 02_Scope_Management_Plan_...       ← chưa lập
├── 03_Executing/                      ┐
├── 04_Monitoring_and_Controlling/     │ chưa có tài liệu — sẽ lập
└── 05_Closing/                        ┘ ở các giai đoạn tiếp theo
```

Sáu thư mục nhóm tiến trình là cố định, tạo sẵn kể cả khi còn trống (giữ chỗ bằng `.gitkeep`). Không thêm, không bớt, không gộp. Hai thư mục `_template/` và `_archive/` là phụ trợ nội bộ, không thuộc bộ tài liệu nộp.

---

## Quy ước

### Đánh số thư mục

`00_Pre-project` → `05_Closing`, theo đúng trình tự nhóm tiến trình. Tài liệu nào thuộc nhóm tiến trình nào thì đặt trong thư mục của nhóm đó.

### Đặt tên file

`Thứ tự_Tên_tài_liệu_phiên bản.md` — số thứ tự **đếm lại từ 01 trong mỗi thư mục**, theo thứ tự tài liệu được tạo ra. Dùng gạch dưới thay dấu cách, không dấu tiếng Việt.

```
01_Business_Case_v1.1.md
02_Benefit_Management_Plan_v1.1.md
```

Bản Word/Excel nộp cho thầy giữ nguyên quy cách này với đuôi tương ứng (`.docx`, `.xlsx`).

### Tăng phiên bản

Quy tắc lưu trữ chỉ có hiệu lực **từ khi một phiên bản được phê duyệt (Approved)**. Lý do: bản cũ phải giữ lại để đối chiếu vì các bên đã ký vào nó. Khi tài liệu còn ở trạng thái **Draft**, việc hoàn thiện nội dung được sửa thẳng trên file hiện tại, không tăng phiên bản và không thêm dòng lịch sử.

Sau khi một phiên bản đã Approved, mọi thay đổi phải **tạo file phiên bản mới, không sửa đè** — bản vừa bị thay thế chuyển vào `_archive/`.

| Loại thay đổi | Cách tăng | Ví dụ |
| ------------- | --------- | ----- |
| Sửa lỗi chính tả, định dạng | Không tăng | — |
| Hoàn thiện nội dung khi còn ở trạng thái Draft | Không tăng | — |
| Thay đổi nhỏ, trong phạm vi đã duyệt | Tăng số sau | v1.0 → v1.1 |
| Thay đổi lớn: phạm vi, ngân sách, tiến độ | Tăng số trước | v1.2 → v2.0 |

Mỗi lần tăng phiên bản phải: (a) đổi hậu tố trong tên file, (b) sửa ô **Phiên bản** ở trang bìa, (c) thêm một dòng vào bảng *Lịch sử cập nhật*, (d) chuyển file phiên bản cũ vào `_archive/`, (e) cập nhật liên kết chéo ở các tài liệu khác và bảng danh mục phía trên.

**Bản nộp cho thầy chỉ gồm phiên bản mới nhất.** Bảng *Lịch sử cập nhật* trong file đó cộng dồn đủ mọi dòng từ Ver 1.0 trở đi — đó là cách mẫu của giảng viên ghi nhận lịch sử thay đổi. Thư mục `_archive/` chỉ dùng nội bộ để đối chiếu, không nộp.

### Cấu trúc bắt buộc của mỗi tài liệu

Theo mẫu giảng viên cung cấp, thứ tự cố định:

1. **Trang 1 — Trang bìa**: tên tài liệu, tên dự án, phiên bản, tên nhóm (kèm nhóm tiến trình, ngày phát hành)
2. **Trang 2 — Bảng cập nhật chỉnh sửa**: bảng *Xác nhận* (Người tạo / Người kiểm tra / Người xác nhận) và bảng *Lịch sử cập nhật*
3. **Trang 3 trở đi — Nội dung** (mục lục rồi tới phần thân)

---

## Còn thiếu so với yêu cầu môn học

| Tài liệu | Thư mục đích | Nhóm phụ trách |
| -------- | ------------ | -------------- |
| Stakeholder Register | `01_Initiating/` (số 03) | Nhóm thực hiện |
| Bảng quản lý phân công công việc (% effort + phân vai Scope/Time/Cost/Quality) | Upload thẳng lên Drive của nhóm | Cả hai nhóm |

---

## Trước khi nộp

1. **Điền hết placeholder.** Soát bằng: `grep -rn '<<' docs/`
2. **Kiểm tra nhất quán chéo:**
   - Summary Budget trong Project Charter, Điều 4 Hợp đồng và bảng chi phí tại Benefit Management Plan §4.1 khớp nhau: **1.500.000 VND tiền mặt + 450 giờ công**
   - Chuỗi truy vết đầy đủ: `BO-xx` (Business Case §3) → `OB-xx` (Charter §3.1) → `BN-xx` (BMP §2) → `MT-xx` (BMP §7)
   - NPV +165,1 triệu · BCR 2,08 · ngưỡng hoà vốn 48% xuất hiện thống nhất ở Business Case, BMP và Hợp đồng
   - Mọi giả định nêu trong các tài liệu đều có ID `AS-xx` trong Assumption Log
3. **Kiểm tra ràng buộc đề bài:** kinh phí < 1.000.000.000 VND, thời gian ≤ 6 tháng, ít nhất 3 deliverable nghiệp vụ chính.
4. **Cập nhật bảng danh mục ở đầu file này** nếu có tài liệu mới hoặc phiên bản mới.
5. **Convert sang Word:** mở file `.md` bằng Word hoặc dùng Pandoc; thẻ `<div style="page-break-after: always">` tương ứng một ngắt trang thủ công. Đặt tên bản `.docx` theo đúng quy cách ở trên.

---

## Trạng thái hiện tại

Bộ tài liệu **Pre-project** đã đủ ba tài liệu: Business Case và Benefit Management Plan ở **Ver 1.1**, Hợp đồng thực hiện dự án ở **Ver 1.0** — tất cả đang chờ phê duyệt và ký. Bộ **Initiating** ở Ver 1.0, còn thiếu Stakeholder Register. Nhóm **Planning** đã có WBS & WBS Dictionary; các tài liệu còn lại dự kiến gồm: Requirements Specification, Scope Management Plan, Schedule Management Plan, Cost Management Plan, Risk Register, Stakeholder Engagement Plan.
