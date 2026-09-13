# Tài liệu quản lý dự án — PromptVideo

Thư mục này chứa toàn bộ tài liệu quản lý dự án của PromptVideo, tổ chức theo **Pre-project + 5 nhóm tiến trình** (process group) của PMBOK, đúng quy cách quản lý tài liệu mà môn học yêu cầu.

> **Bối cảnh.** Bộ tài liệu phát triển dự án theo một **bối cảnh doanh nghiệp giả định** (Enticy Studios là tổ chức chủ quản) để phục vụ môn Quản lý dự án phần mềm tại Học viện Công nghệ Bưu chính Viễn thông. Mọi số liệu tài chính, quy mô thuê bao và đơn giá là giả định có ghi chú, được đăng ký tại [Assumption Log](./01_Initiating/02_Assumption_Log_v2.2.md). Các thông số kỹ thuật là số liệu thật.

---

## Danh mục tài liệu

| STT | Tài liệu | Nhóm tiến trình | Phiên bản | Cập nhật | Nhóm phụ trách | Trạng thái |
| --- | -------- | --------------- | --------- | -------- | -------------- | ---------- |
| 1 | [Business Case](./00_Pre-project/01_Business_Case_v2.2.md) | Pre-project | Ver 2.2 | 2026-09-13 | Nhóm khởi tạo | Draft |
| 2 | [Benefit Management Plan](./00_Pre-project/02_Benefit_Management_Plan_v2.2.md) | Pre-project | Ver 2.2 | 2026-09-13 | Nhóm khởi tạo | Draft |
| 3 | [Hợp đồng thực hiện dự án](./00_Pre-project/03_Hop_dong_thuc_hien_du_an_v2.0.md) | Pre-project | Ver 2.0 | 2026-08-27 | Nhóm khởi tạo | Draft — chờ ký |
| 4 | [Project Charter](./01_Initiating/01_Project_Charter_v2.2.md) | Initiating | Ver 2.2 | 2026-09-13 | Nhóm thực hiện | Draft |
| 5 | [Assumption Log](./01_Initiating/02_Assumption_Log_v2.2.md) | Initiating | Ver 2.2 | 2026-09-13 | Nhóm thực hiện | Tài liệu sống |
| 6 | [Stakeholder Register](./01_Initiating/03_Stakeholder_Register_v2.0.md) | Initiating | Ver 2.0 | 2026-09-13 | Nhóm thực hiện | Tài liệu sống |
| 7 | [WBS & WBS Dictionary](./02_Planning/00_WBS_v2.0.md) | Planning | Ver 2.0 | 2026-08-27 | Nhóm thực hiện | Draft |

Thứ tự đọc: **Business Case → Benefit Management Plan → Hợp đồng → Project Charter → Assumption Log**. Ba tài liệu đầu là *project business documents*, được lập **trước khi dự án được cấp phép**, nên nằm ở `00_Pre-project/`. Project Charter là tài liệu chính thức khai sinh dự án; Assumption Log và Stakeholder Register ra đời cùng nó — cả ba thuộc `01_Initiating/`. **Stakeholder Register phải hoàn tất trước khi bắt đầu Planning**, vì kế hoạch tham gia và kế hoạch truyền thông đều lấy nó làm đầu vào.

**Phân vai giữa ba tài liệu Pre-project.** Mỗi tài liệu trả lời đúng một câu hỏi, không chồng lấn:

| Tài liệu | Trả lời câu hỏi | Nội dung đặc thù |
| -------- | --------------- | ---------------- |
| Business Case | *Có nên làm dự án này không?* | Nhu cầu thực tế, mục tiêu nghiệp vụ BO-xx, phân tích phương án, **đánh giá khả thi** trên 5 khía cạnh |
| Benefit Management Plan | *Dự án tạo ra lợi ích gì và đáng bao nhiêu?* | Danh mục lợi ích BN-xx, chỉ số đo MT-xx, và **thẩm định tài chính bằng NPV, BCR, Payback, ROI** |
| Hợp đồng thực hiện dự án | *Hai bên cam kết gì với nhau?* | Tổng quan phạm vi, thời gian, ngân sách; nghiệm thu; bảo hành; kiểm soát thay đổi |

**Nội dung baseline (áp dụng cho cả bộ tài liệu):**

| Hạng mục | Giá trị |
| -------- | ------- |
| Kiến trúc | **P4** — render trong trình duyệt bằng WebCodecs + máy chủ tài khoản, giấy phép, thanh toán |
| Mô hình doanh thu | **M1** — thuê bao thường niên ba bậc: Miễn phí (3 video/tháng, watermark, 720p) · Cá nhân 599.000 VND/năm · Doanh nghiệp 4.900.000 VND/năm |
| Giấy phép sản phẩm | Mã nguồn độc quyền, không công khai |
| Quy mô | Đội 3 người — 450 giờ — 15 tuần (2026-08-24 → 2026-12-06) |
| Vốn tiền mặt | 3.500.000 VND |
| Thuê bao giả định | 100 / 320 / 650 Cá nhân · 3 / 10 / 20 Doanh nghiệp |
| Thẩm định tài chính | **NPV +433,4 triệu VND · BCR 3,52 · hoà vốn ở 28% kịch bản cơ sở** |

**Quy ước mã ID.** Chuỗi truy vết là `BO-xx` → `OB-xx` → `BN-xx` → `MT-xx`, cộng `RQ/NF-xx`, `AS/CT-xx`, `RS-xx`, `SH-xx`, `DL-xx`. **Mã không bao giờ được cấp lại**: khi một mục không còn hiệu lực, mã của nó bị rút và ghi vào mục *Mã không còn sử dụng* của tài liệu tương ứng, chứ không gán cho nội dung mới. Nhờ vậy mọi viện dẫn cũ không bao giờ trỏ nhầm. Danh sách mã đã rút: [Assumption Log §8](./01_Initiating/02_Assumption_Log_v2.2.md), Charter §3.1 (OB-05), §4.1 (RQ-11), §6 (RS-08). **Ngoại lệ — `SH-xx`:** khi lập [Stakeholder Register](./01_Initiating/03_Stakeholder_Register_v2.0.md) (Ver 2.0), mã bên liên quan được đánh số lại liên tục SH-01 → SH-09; danh sách này ngắn và chỉ có 5 chỗ viện dẫn nên giữ khoảng trống không đáng.

**Về liên kết chéo.** Business Case và Benefit Management Plan **không dùng liên kết inline sang tài liệu khác**, vì bản `.docx` được xuất riêng từng file nên mọi liên kết như vậy đều thành liên kết chết. Thay vào đó chúng nhắc tên tài liệu và số mục dưới dạng chữ (`Benefit Management Plan §4`), và tra nguồn số liệu theo mã `AS-xx` tại Assumption Log. Khi sửa số mục ở một tài liệu, phải soát lại các tài liệu còn lại: `grep -rn "Business Case §\|Benefit Management Plan §" docs/`

Mẫu tài liệu trống: [`_template/00_Document_Template_v1.0.md`](./_template/00_Document_Template_v1.0.md)

---

## Cấu trúc thư mục

```
docs/
├── README.md                          ← bạn đang ở đây
├── _template/
│   └── 00_Document_Template_v1.0.md   ← khung chuẩn cho tài liệu mới
├── _archive/                          ← bản cũ đã bị thay thế, giữ để đối chiếu
│   ├── 01_Business_Case_v1.0.md          ← các bản cũ (v1.x, v2.0) đã bị thay thế
│   └── ... (13 file)
├── 00_Pre-project/
│   ├── 01_Business_Case_v2.2.md
│   ├── 02_Benefit_Management_Plan_v2.2.md
│   └── 03_Hop_dong_thuc_hien_du_an_v2.0.md
├── 01_Initiating/
│   ├── 01_Project_Charter_v2.2.md
│   ├── 02_Assumption_Log_v2.2.md
│   └── 03_Stakeholder_Register_v2.0.md
├── 02_Planning/
│   ├── 00_WBS_v2.0.md
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
01_Business_Case_v2.2.md
02_Benefit_Management_Plan_v2.2.md
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
   - Summary Budget trong Project Charter §8, Điều 4 Hợp đồng và bảng chi phí tại Benefit Management Plan §4 khớp nhau: **3.500.000 VND tiền mặt + 450 giờ công**
   - Chuỗi truy vết đầy đủ: `BO-xx` (Business Case §1.1) → `OB-xx` (Charter §3.1) → `BN-xx` (BMP §2) → `MT-xx` (BMP §7)
   - NPV +433,4 triệu · BCR 3,52 · ngưỡng hoà vốn 28% xuất hiện thống nhất ở Business Case, BMP và Hợp đồng
   - Giá và hạn mức ba bậc thuê bao ghi giống nhau ở Business Case §3.2, Charter §4.1 và Hợp đồng §2.2
   - Tổng giờ WBS theo mốc khớp đúng Charter §8.4: 23 / 48 / 67 / 101 / 78 / 74 / 45 / 14 = **450**
   - Mọi giả định nêu trong các tài liệu đều có ID `AS-xx` trong Assumption Log, và không mã nào bị cấp lại (Assumption Log §9)
3. **Kiểm tra ràng buộc đề bài:** kinh phí < 1.000.000.000 VND, thời gian ≤ 6 tháng, ít nhất 3 deliverable nghiệp vụ chính.
4. **Cập nhật bảng danh mục ở đầu file này** nếu có tài liệu mới hoặc phiên bản mới.
5. **Convert sang Word:** mở file `.md` bằng Word hoặc dùng Pandoc; thẻ `<div style="page-break-after: always">` tương ứng một ngắt trang thủ công. Đặt tên bản `.docx` theo đúng quy cách ở trên.

---

## Trạng thái hiện tại

Bộ **Pre-project** và **Initiating** đã lên bản tái cấu trúc **Ver 2.2** (riêng Stakeholder Register là **Ver 2.0**); Hợp đồng và WBS còn ở **Ver 2.0**. Toàn bộ vẫn thống nhất trên cùng một baseline: kiến trúc P4, mô hình doanh thu M1, vốn 3.500.000 VND, 450 giờ, 15 tuần. Bộ **Pre-project** và **Initiating** đang chờ phê duyệt và ký; bộ Initiating đã đủ ba tài liệu (Charter, Assumption Log, Stakeholder Register). Nhóm **Planning** đã có WBS & WBS Dictionary; các tài liệu còn lại dự kiến gồm: Requirements Specification, Scope Management Plan, Schedule Management Plan, Cost Management Plan, Risk Register, Stakeholder Engagement Plan.

**Hai điểm cần theo dõi ngay từ giai đoạn Planning**, đều đã ghi trong tài liệu nhưng chưa có phương án chốt:

1. **Tải theo tuần vượt năng lực ở M2 → M5** (WBS §9.3). Tổng 450 giờ đúng bằng năng lực 15 tuần × 30 giờ, nên bốn mốc giữa chạy ở 112–130% và chỉ được bù bằng phần dưới mức ở hai đầu. Schedule Management Plan phải chọn một trong hai hướng: dồn giờ trước ở M0–M1, hoặc giảm phạm vi theo thứ tự cắt tại WBS §9.2.
2. **Hồ sơ cổng thanh toán** (AS-43, RS-10). Phải nộp tại M2 dù kết quả chỉ cần ở M6, vì thời gian duyệt nằm ngoài tầm kiểm soát của đội.
