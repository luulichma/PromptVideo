# Tài liệu quản lý dự án — PromptVideo

Thư mục này chứa toàn bộ tài liệu quản lý dự án của PromptVideo, tổ chức theo **nhóm tiến trình** (process group) của PMBOK.

> **Bối cảnh.** Nhánh `for-subjects-at-uni` phát triển dự án theo một **bối cảnh doanh nghiệp giả định** (Enticy Studios là tổ chức chủ quản) để phục vụ môn Quản lý dự án phần mềm tại Học viện Công nghệ Bưu chính Viễn thông. Mọi số liệu tài chính, quy mô người dùng và đơn giá là giả định có ghi chú, được đăng ký tại [Assumption Log](./01_Initiating/04_Assumption_Log.md). Các thông số kỹ thuật là số liệu thật. Nhánh `main` giữ nguyên hướng mã nguồn mở, không mang bối cảnh này.

---

## Danh mục tài liệu

| STT | Tài liệu | Nhóm tiến trình | Phiên bản | Cập nhật | Trạng thái |
| --- | -------- | --------------- | --------- | -------- | ---------- |
| 01 | [Business Case](./01_Initiating/01_Business_Case.md) | Initiating | Ver 1.0 | 2026-08-20 | Draft |
| 02 | [Benefit Management Plan](./01_Initiating/02_Benefit_Management_Plan.md) | Initiating | Ver 1.0 | 2026-08-20 | Draft |
| 03 | [Project Charter](./01_Initiating/03_Project_Charter.md) | Initiating | Ver 1.0 | 2026-08-20 | Draft |
| 04 | [Assumption Log](./01_Initiating/04_Assumption_Log.md) | Initiating | Ver 1.0 | 2026-08-20 | Tài liệu sống |

Mẫu tài liệu trống: [`_template/00_Document_Template.md`](./_template/00_Document_Template.md)

---

## Cấu trúc thư mục

```
docs/
├── README.md                          ← bạn đang ở đây
├── _template/
│   └── 00_Document_Template.md        ← khung chuẩn cho tài liệu mới
├── 01_Initiating/
│   ├── 01_Business_Case.md
│   ├── 02_Benefit_Management_Plan.md
│   ├── 03_Project_Charter.md
│   └── 04_Assumption_Log.md
├── 02_Planning/                       ┐
├── 03_Executing/                      │ chưa tạo — sẽ lập ở các
├── 04_Monitoring_and_Controlling/     │ giai đoạn tiếp theo
└── 05_Closing/                        ┘
```

---

## Quy ước

### Đánh số

Thư mục đánh số theo thứ tự nhóm tiến trình (`01_Initiating` → `05_Closing`). Tài liệu trong mỗi thư mục đánh số **theo thứ tự được tạo ra**, từ `01` đến `99`. Số đã cấp không tái sử dụng: nếu một tài liệu bị bỏ, số của nó để trống.

### Đặt tên file

`NN_Ten_Tai_Lieu.md` — dùng dấu gạch dưới, không dấu tiếng Việt, không có số phiên bản trong tên file.

Phiên bản nằm trong **bảng Lịch sử cập nhật** ở đầu mỗi tài liệu, không nhét vào tên file. Lý do: đổi tên file mỗi lần tăng version sẽ làm hỏng mọi liên kết chéo giữa các tài liệu, và git đã theo dõi lịch sử thay đổi đầy đủ hơn bất kỳ hậu tố nào.

### Tăng phiên bản

| Loại thay đổi | Cách tăng | Ví dụ |
| ------------- | --------- | ----- |
| Sửa lỗi chính tả, định dạng | Không tăng | — |
| Bổ sung, chỉnh sửa nội dung trong phạm vi đã duyệt | Tăng số phụ | 1.0 → 1.1 |
| Thay đổi ảnh hưởng phạm vi, ngân sách, tiến độ | Tăng số chính | 1.2 → 2.0 |

Mỗi lần tăng phiên bản phải thêm một dòng vào bảng Lịch sử cập nhật, ghi rõ lý do và nội dung thay đổi.

### Cấu trúc bắt buộc của mỗi tài liệu

Theo mẫu giảng viên cung cấp, thứ tự cố định:

1. **Trang bìa** — tên dự án, nhóm tiến trình, tên tài liệu, phiên bản, tên nhóm, ngày phát hành
2. **Trang xác nhận** — bảng *Xác nhận* (Người tạo / Người kiểm tra / Người xác nhận) và bảng *Lịch sử cập nhật*
3. **Mục lục**
4. **Nội dung**

---

## Trước khi nộp

1. **Điền hết placeholder.** Soát bằng: `grep -rn '<<' docs/`
2. **Kiểm tra nhất quán chéo:**
   - Summary Budget trong Project Charter khớp Cost–Benefit Analysis trong Business Case (68.530.000 VND)
   - Mục tiêu OB-xx trong Charter khớp chỉ số MT-xx trong Benefit Management Plan
   - Mọi giả định nêu trong các tài liệu đều có ID `AS-xx` trong Assumption Log
3. **Cập nhật bảng danh mục ở đầu file này** nếu có tài liệu mới hoặc phiên bản mới.
4. **Convert sang Word** nếu thầy yêu cầu file `.docx`: mở file `.md` bằng Word hoặc dùng Pandoc; thẻ `<div style="page-break-after: always">` tương ứng một ngắt trang thủ công.

---

## Trạng thái hiện tại

Bộ tài liệu nhóm **Initiating** đã hoàn thành ở phiên bản Ver 1.0, đang chờ phê duyệt. Nhóm **Planning** sẽ được lập sau khi Project Charter được ký, dự kiến gồm: Requirements Specification, Scope Management Plan, WBS, Schedule Management Plan, Cost Management Plan, Risk Register, Stakeholder Engagement Plan.
