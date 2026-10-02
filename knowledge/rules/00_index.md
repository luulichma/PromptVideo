# Luật hồ sơ môn Quản lý dự án phần mềm (NDQ): chỉ mục

Tầng ② trong thứ bậc nguồn. Mỗi dòng luật có mức và trích slide `PMxx:n` (n = số trang PDF, xem `knowledge/slides/PMxx.md`).
Kiểm trích dẫn: `node knowledge/check-citations.mjs knowledge/rules`.

## 1. Thứ bậc nguồn (cao thắng thấp)

1. `knowledge/slides/`: text slide sinh tự động từ PDF, không sửa tay.
2. `knowledge/rules/`: luật rút gọn theo tài liệu; mỗi dòng 🔴/🟡 phải trích slide ①.
3. Quyết định nhóm `DEC-nnn` (`design-note/md-docs/00_Quyet_dinh_va_quy_uoc_ma.md`): chỉ được chọn trong khoảng slide cho phép, không được trái 🔴.
4. Hồ sơ markdown (`design-note/md-docs/`).
5. Bản docx/xlsx: chỉ sinh từ ④, không sửa tay rồi bỏ quên bản md.

Khi ② mâu thuẫn ①: sửa ②. Khi ④ mâu thuẫn ②/③: sửa ④ hoặc lập DEC mới có lý do.

## 2. Chú giải mức

| Mức | Nghĩa | Dấu hiệu trên slide |
| --- | --- | --- |
| 🔴 Bắt buộc | Thiếu là lệch khỏi thứ thầy dạy | include, must, only, always, shall; danh sách thành phần không kèm "may"; định nghĩa khẳng định ("X is …") |
| 🟡 Mẫu thầy | Nên theo, được điều chỉnh có lý do | may contain/include, "not limited to", ví dụ, mẫu bảng, rule of thumb |
| 🔵 Diễn giải | Không có trong slide (hoặc chỉ có trong hình) | nhóm tự suy hoặc lấy PMBOK; ghi rõ là diễn giải khi dùng trong hồ sơ |

Dòng 🔵 không bắt buộc trích slide; nếu dựa vào slide hình thì ghi "(hình)".

## 3. Bản đồ tài liệu → file luật

| Nhóm | Tài liệu (hồ sơ hiện có / cần có) | File luật |
| --- | --- | --- |
| Pre-project | Business Case | `01_business-case.md` |
| Pre-project | Benefits Management Plan | `02_benefit-management-plan.md` |
| Initiating | Project Charter | `03_project-charter.md` |
| Initiating | Assumption Log | `04_assumption-log.md` |
| Initiating | Stakeholder Register | `05_stakeholder-register.md` |
| Planning | `02_Planning/01_Project_Management_Plan` | `06_project-management-plan.md` |
| Planning | `02_Planning/02_Requirements_Specification`, `03_Interface_Specification`, `04_Project_Scope_Statement`, `05_WBS_and_WBS_Dictionary` | `07_scope.md` |
| Planning | Lịch, milestone, network (trong PMP / `_data`) | `08_schedule.md` |
| Planning | Ước lượng, ngân sách, EVA (trong PMP / Status Report) | `09_cost.md` |
| Planning | `02_Planning/06_Quality_Plan_and_Test_Cases` | `10_quality.md` |
| Planning | `02_Planning/07_Resource_and_Communication_Plan` | `11_resource.md` + `12_communication-stakeholder.md` |
| Planning | `02_Planning/08_Risk_Management_Plan` (+ Risk Register) | `13_risk.md` |
| Executing | `03_Executing/01_Implementation_and_Integration_Record`, `02_Meeting_and_Decision_Log` | `14_monitoring-change-control.md` |
| Executing | `03_Executing/04_Quality_Assurance_and_Lessons_Learned` | `10_quality.md` + `15_closing.md` |
| M&C | `04_Monitoring_and_Controlling/01_Project_Status_Report`, `change-requests/` | `14_monitoring-change-control.md` (+ `08`, `09` cho SV/CV) |
| M&C | `04_.../02_Quality_and_Test_Report` | `10_quality.md` |
| M&C | `04_.../06_Scope_Validation_Record` | `07_scope.md` (Validate Scope) |
| Closing | `05_Closing/01_Final_Project_Report`, `02_Handover_and_Outstanding_Items`, `03_Lessons_Learned_Report`; `03_Executing/03_Installation_User_and_Operations_Guide` | `15_closing.md` |
| Mọi tài liệu | Công cụ, kỹ thuật dùng trong tài liệu | `16_tools-catalog.md` |

## 4. Khung chung cho mọi tài liệu

- 🔴 Tài liệu dự án là giao tiếp formal written; họp là informal verbal (PM10:33).
- 🔴 Áp change control ngay khi deliverable có phiên bản đầu tiên (PM10:74).
- 🔴 PMP xác định tài liệu nào chịu formal change control (PM04:16).
- 🔴 Baseline chỉ đổi từ mốc gần nhất trở đi, không sửa số quá khứ; mọi thay đổi ghi change log (PM08:103).
- 🔵 Đầu file: tên, mã, phiên bản, ngày, người soạn / kiểm / xác nhận theo DEC-002, trạng thái (Draft / Reviewed / Approved).
- 🔵 Cuối file: lịch sử phiên bản; nguồn (slide, DEC, đầu vào module).
- 🔵 Mã đối tượng theo DEC-004 (REQ-X-nn, TC-X-nn, R-X-nn, CR-G-nnn …); không cấp lại mã đã bỏ.

## 5. Đính chính so với research cũ

Áp cho `design-note/research/01_Quy_tac_bat_buoc.md` và `02_Kien_thuc_su_dung.md`; hai file này **đã bị thay thế** bởi thư mục này. Giữ nguyên trong P1, xử lý ở P2.

1. Mọi trích dẫn cũ lệch +1 slide ở cả 11 deck (`PM03:26` cũ = `PM03:27` thật). Chạy `check-citations` trên bản cũ sẽ báo nhiều slide tiêu đề mục.
2. Charter: slide ghi "May contain" 8 mục (PM03:26); mẫu 12 mục chỉ là ví dụ (PM03:27). Mức 🟡, không phải 🔴.
3. Feasibility: "may includes" 5 khía cạnh (PM03:9). Không có luật "đúng 5".
4. Final Report có 6 phần, gồm cả **Quality objectives** và **Summary of validation** (PM11:86). Bản cũ thiếu hai phần này.
5. BCR theo slide = Total Benefits / Total Costs (PM11:12). Dạng PV(benefits)/PV(costs) là diễn giải 🔵.
6. CV/CPI chỉ có trong slide hình (PM07:46–48); TCPI không có công thức dạng text (PM07:52); Payback/IRR/ROI chỉ nêu tên (PM03:8). Mọi công thức này là 🔵.

## 6. Việc để lại cho P2/P3

- P2: đánh dấu "đã thay thế" vào đầu `design-note/research/01`, `02`; dời cây thư mục bằng `git mv`, sửa link và đường dẫn trong scripts.
- P3: `.gitignore` chặn mọi `*.docx`/`*.xlsx`, ngoại lệ trỏ tới `output-docs/` không tồn tại; `md-docs/00_Pre-project`, `01_Initiating` trống; README ghi Pre-project v2.1 nhưng `official-docs` có v2.2; script normalize làm mất dấu cách ("Cập nhật24/09/2026", "phụ tráchA").
