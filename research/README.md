# Research — Nghiên cứu tài liệu môn học

Thư mục này rút gọn 11 bài giảng môn **Quản lý dự án phần mềm (PM — thầy Nguyễn Đình Quảng)** để phục vụ bài tập lớn PromptVideo theo **mô hình gói thuê bao thường niên**.

**Căn cứ định hướng:** [Business Case v2.1](../official-docs/00_Pre-project/01_Business_Case_v2.1.docx) và [Benefit Management Plan v2.1](../official-docs/00_Pre-project/02_Benefit_Management_Plan_v2.1.docx). Trình duyệt xử lý video cục bộ; máy chủ quản lý tài khoản, quyền sử dụng, hạn mức và thanh toán. Xem [README dự án](../README.vi.md) để nắm phạm vi và ba gói dự kiến.

## Cách sử dụng

1. **Luật phải tuân** — tài liệu nào bắt buộc có, mỗi tài liệu bắt buộc chứa mục gì, công thức nào phải dùng đúng dạng thầy dạy.
2. **Kiến thức dùng được** — bộ công cụ và kỹ thuật, kèm chỉ dẫn *khi nào dùng cái nào*.
3. "md-docs" là bản markdown của các bộ tài liệu trong dự án, "official-docs" là bản docx chính thức để nộp.
4. Các tài liệu _archive thì không cần thiết phải đọc

Đây là **tài liệu nội bộ của đội, không nộp**. Nó giúp bộ hồ sơ trong [official-docs/](../official-docs/) và các bản làm việc trong [md-docs/](../md-docs/) bám yêu cầu môn học và phạm vi được chấm. Bản chính thức không đồng nghĩa đã được phê duyệt; xem trạng thái trong từng file.

---

## Danh mục

| File | Nội dung | Dùng khi nào |
| ---- | -------- | ------------ |
| [01_Quy_tac_bat_buoc.md](./01_Quy_tac_bat_buoc.md) | Luật cứng: cấu trúc bắt buộc của từng tài liệu, công thức, ngưỡng, quy tắc phân rã | Trước khi viết hoặc sửa hồ sơ dự án |
| [02_Kien_thuc_su_dung.md](./02_Kien_thuc_su_dung.md) | Bộ công cụ theo từng lĩnh vực kiến thức, kèm tiêu chí chọn công cụ | Khi cần chọn kỹ thuật cho một mục cụ thể |
| [03_Doi_chieu_voi_tai_lieu_hien_co.md](./03_Doi_chieu_voi_tai_lieu_hien_co.md) | Đối chiếu bộ tài liệu ở thời điểm rà soát trước đây với luật ở file 01 | Tham khảo khi rà soát; phải kiểm tra lại từng nhận xét với bản chính thức hiện có |


---

## Nguồn

11 file PDF tại `F:\Enticy Studios\PromptVideo\research\PM - NDQ`, tổng 773 slide:

| Deck | Slide | Nội dung chính |
| ---- | ----: | -------------- |
| PM01 — Introduction | 56 | Dự án là gì, value/benefit/outcome, stakeholder, EEF & OPA, cơ cấu tổ chức, PMO |
| PM02 — Framework | 40 | Vòng đời dự án, predictive/adaptive/hybrid, phase gate, Cynefin, Stacey, 5 process group, 10 knowledge area |
| PM03 — Initiate Project | 51 | **Need assessment, Business Case, Benefit Management Plan, công cụ chọn dự án, Assumption Log, Project Charter, Stakeholder Register** |
| PM04 — Project Planning | 53 | Project Management Plan, subsidiary plan, baseline, Stakeholder Engagement, Communication Management |
| PM05 — Scope Management | 78 | Scope/Requirement Management Plan, Collect Requirements, RTM, Scope Statement, **WBS + WBS Dictionary**, Validate/Control Scope |
| PM06 — Schedule Management | 90 | Activity, milestone, dependency, PDM, **CPM & float**, PERT, resource leveling/smoothing, nén lịch |
| PM07 — Cost Management | 54 | Loại chi phí, ước lượng, cost baseline, dự phòng, **EVM (CPI/SPI/EAC/ETC/TCPI)** |
| PM08 — Risk & Change Control | 104 | RBS, Risk Register, Risk Report, ma trận P&I, EMV, chiến lược ứng phó, **CCB & Integrated Change Control** |
| PM09 — Resource Management | 81 | Resource Management Plan, OBS, **RACI**, phát triển đội, quyền lực, xung đột |
| PM10 — Communication & Control | 80 | Communication Management Plan, push/pull/interactive, kiểm soát dự án |
| PM11 — Quality & Close | 86 | Quality Management Plan, Cost of Quality, audit, **Close Project, Final Report, Lessons Learned** |

**Cách trích:** text được bóc bằng script tự viết (`scratchpad/pdftext.js` — zero dependency, xử lý FlateDecode + ObjStm + font CID Type0 kèm ToUnicode CMap) thay vì đọc ảnh từng trang. Bản text đầy đủ nằm ở thư mục tạm của phiên làm việc, không commit.

---

## Các kết luận từ lần đối chiếu trước

Các nhận xét dưới đây ghi nhận bộ tài liệu tại thời điểm đối chiếu, khi còn dùng đường dẫn `docs/`; **không phải kết luận kiểm tra bộ chính thức hiện tại**. Ví dụ, `official-docs/01_Initiating/` hiện đã có Stakeholder Register dạng Excel. Chi tiết lần đối chiếu trước ở [file 03](./03_Doi_chieu_voi_tai_lieu_hien_co.md):

1. **Bộ tài liệu hiện tại dài gấp nhiều lần mẫu của thầy.** Project Charter mẫu (PM03 slide 26) gói trọn 12 mục trong **một slide**; bản của nhóm là **505 dòng**. Assumption Log mẫu có **7 dòng và 5 cột**; bản của nhóm có **~56 mục**. Độ dài không phải tiêu chí chấm — độ đầy đủ và nhất quán mới là.

2. **Phần thẩm định tài chính đang nằm sai tài liệu.** Theo PM03, `NPV / BCR / Payback / ROI / IRR` thuộc nhóm công cụ **Project Selection**, tức đầu vào của **Business Case**. Benefit Management Plan theo thầy chỉ gồm 7 thành phần, **không có thẩm định tài chính**. Hiện nhóm đặt toàn bộ §4 (156 dòng) ở Benefit Management Plan.

3. **Thiếu IRR và thiếu Economic Feasibility.** Cả hai đều nằm trong danh sách thầy dạy; cả hai đều thuộc đúng trục *vốn — hoàn vốn — lãi* mà dự án đang lấy làm trọng tâm.
