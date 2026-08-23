# Tài liệu quản lý dự án — PromptVideo

Thư mục này chứa toàn bộ tài liệu quản lý dự án của PromptVideo, tổ chức theo **Pre-project + 5 nhóm tiến trình** (process group) của PMBOK, đúng quy cách quản lý tài liệu mà môn học yêu cầu.

> **Bối cảnh.** Nhánh `for-subjects-at-uni` phát triển dự án theo một **bối cảnh doanh nghiệp giả định** (Enticy Studios là tổ chức chủ quản) để phục vụ môn Quản lý dự án phần mềm tại Học viện Công nghệ Bưu chính Viễn thông. Mọi số liệu tài chính, quy mô người dùng và đơn giá là giả định có ghi chú, được đăng ký tại [Assumption Log](./01_Initiating/02_Assumption_Log_v1.1.md). Các thông số kỹ thuật là số liệu thật. Nhánh `main` giữ nguyên hướng mã nguồn mở, không mang bối cảnh này.

---

## Danh mục tài liệu

| STT | Tài liệu | Nhóm tiến trình | Phiên bản | Cập nhật | Nhóm phụ trách | Trạng thái |
| --- | -------- | --------------- | --------- | -------- | -------------- | ---------- |
| 1 | [Business Case](./00_Pre-project/01_Business_Case_v1.1.md) | Pre-project | Ver 1.1 | 2026-08-20 | Nhóm khởi tạo | Draft |
| 2 | [Benefit Management Plan](./00_Pre-project/02_Benefit_Management_Plan_v1.1.md) | Pre-project | Ver 1.1 | 2026-08-20 | Nhóm khởi tạo | Draft |
| 3 | [Project Charter](./01_Initiating/01_Project_Charter_v1.1.md) | Initiating | Ver 1.1 | 2026-08-20 | Nhóm thực hiện | Draft |
| 4 | [Assumption Log](./01_Initiating/02_Assumption_Log_v1.1.md) | Initiating | Ver 1.1 | 2026-08-20 | Nhóm thực hiện | Tài liệu sống |

Thứ tự đọc: **Business Case → Benefit Management Plan → Project Charter → Assumption Log**. Business Case và Benefit Management Plan là *project business documents*, được lập **trước khi dự án được cấp phép**, nên nằm ở `00_Pre-project/`. Project Charter là tài liệu chính thức khai sinh dự án, và Assumption Log ra đời cùng nó — cả hai thuộc `01_Initiating/`.

**Thay đổi ở Ver 1.1 (áp dụng cho cả 4 tài liệu):** mô hình doanh thu chuyển từ thuê bao khoá tính năng sang **gói template có bản quyền + dịch vụ B2B** — mô hình cũ không thực thi được với sản phẩm mã nguồn mở chạy client-side. Kèm theo: quy mô đội 5 → 3 người (450 giờ), ngân sách chuyển sang cơ sở vốn tiền mặt 1.500.000 VND, và bỏ giới hạn 2 phút để người dùng tự quyết định độ dài video.

Mẫu tài liệu trống: [`_template/00_Document_Template_v1.0.md`](./_template/00_Document_Template_v1.0.md)

---

## Cấu trúc thư mục

```
docs/
├── README.md                          ← bạn đang ở đây
├── _template/
│   └── 00_Document_Template_v1.0.md   ← khung chuẩn cho tài liệu mới
├── 00_Pre-project/
│   ├── 01_Business_Case_v1.1.md
│   └── 02_Benefit_Management_Plan_v1.1.md
├── 01_Initiating/
│   ├── 01_Project_Charter_v1.1.md
│   └── 02_Assumption_Log_v1.1.md
├── 02_Planning/                       ┐
├── 03_Executing/                      │ chưa có tài liệu — sẽ lập
├── 04_Monitoring_and_Controlling/     │ ở các giai đoạn tiếp theo
└── 05_Closing/                        ┘
```

Sáu thư mục là cố định, tạo sẵn kể cả khi còn trống (giữ chỗ bằng `.gitkeep`). Không thêm, không bớt, không gộp.

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

Khi cần chỉnh sửa, **copy ra một file phiên bản mới, không sửa đè lên file cũ** — bản cũ đã được các bên phê duyệt nên phải giữ lại để đối chiếu.

| Loại thay đổi | Cách tăng | Ví dụ |
| ------------- | --------- | ----- |
| Sửa lỗi chính tả, định dạng | Không tăng | — |
| Thay đổi nhỏ, trong phạm vi đã duyệt | Tăng số sau | v1.0 → v1.1 |
| Thay đổi lớn: phạm vi, ngân sách, tiến độ | Tăng số trước | v1.2 → v2.0 |

Mỗi lần tăng phiên bản phải: (a) đổi hậu tố trong tên file, (b) sửa ô **Phiên bản** ở trang bìa, (c) thêm một dòng vào bảng *Lịch sử cập nhật*, (d) cập nhật liên kết chéo ở các tài liệu khác và bảng danh mục phía trên.

### Cấu trúc bắt buộc của mỗi tài liệu

Theo mẫu giảng viên cung cấp, thứ tự cố định:

1. **Trang 1 — Trang bìa**: tên tài liệu, tên dự án, phiên bản, tên nhóm (kèm nhóm tiến trình, ngày phát hành)
2. **Trang 2 — Bảng cập nhật chỉnh sửa**: bảng *Xác nhận* (Người tạo / Người kiểm tra / Người xác nhận) và bảng *Lịch sử cập nhật*
3. **Trang 3 trở đi — Nội dung** (mục lục rồi tới phần thân)

---

## Còn thiếu so với yêu cầu môn học

| Tài liệu | Thư mục đích | Nhóm phụ trách |
| -------- | ------------ | -------------- |
| Hợp đồng với nhóm thực hiện dự án | `00_Pre-project/` (số 03) | Nhóm khởi tạo |
| Stakeholder Register | `01_Initiating/` (số 03) | Nhóm thực hiện |
| Bảng quản lý phân công công việc (% effort + phân vai Scope/Time/Cost/Quality) | Upload thẳng lên Drive của nhóm | Cả hai nhóm |

---

## Trước khi nộp

1. **Điền hết placeholder.** Soát bằng: `grep -rn '<<' docs/`
2. **Kiểm tra nhất quán chéo:**
   - Summary Budget trong Project Charter khớp Cost–Benefit Analysis trong Business Case: **1.500.000 VND tiền mặt + 450 giờ công**
   - Mục tiêu OB-xx trong Charter khớp chỉ số MT-xx trong Benefit Management Plan
   - Ngưỡng hoà vốn 48% xuất hiện thống nhất ở cả ba tài liệu
   - Mọi giả định nêu trong các tài liệu đều có ID `AS-xx` trong Assumption Log
3. **Kiểm tra ràng buộc đề bài:** kinh phí < 1.000.000.000 VND, thời gian ≤ 6 tháng, ít nhất 3 deliverable nghiệp vụ chính.
4. **Cập nhật bảng danh mục ở đầu file này** nếu có tài liệu mới hoặc phiên bản mới.
5. **Convert sang Word:** mở file `.md` bằng Word hoặc dùng Pandoc; thẻ `<div style="page-break-after: always">` tương ứng một ngắt trang thủ công. Đặt tên bản `.docx` theo đúng quy cách ở trên.

---

## Trạng thái hiện tại

Bộ tài liệu **Pre-project** và **Initiating** đã hoàn thành ở Ver 1.1, đang chờ phê duyệt; còn thiếu Hợp đồng và Stakeholder Register. Nhóm **Planning** sẽ được lập sau khi Project Charter được ký, dự kiến gồm: Requirements Specification, Scope Management Plan, WBS, Schedule Management Plan, Cost Management Plan, Risk Register, Stakeholder Engagement Plan.
