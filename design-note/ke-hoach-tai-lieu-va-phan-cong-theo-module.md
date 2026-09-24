# Kế hoạch viết tài liệu và phân công theo module — PromptVideo

**Ngày lập:** 23/09/2026. **Trạng thái:** Đề xuất tổ chức công việc để nhóm sử dụng. **Trọng tâm:** Planning, Executing, Monitoring and Controlling, Closing.

**Cách làm thống nhất: mỗi người phụ trách một module từ yêu cầu đến bàn giao; cả ba viết theo cùng cấu trúc; sau đó ghép thành các tài liệu chung của một dự án.** Chiến phụ trách A — Sản xuất video; Việt Quang phụ trách B — Tài khoản và thuê bao; Quang Anh phụ trách C — Quản trị và vận hành. Việc tổng hợp được chia cho cả ba theo chuyên đề, không dồn toàn bộ phần viết cho Chiến.

Đầu ra cuối cùng là **một bộ hồ sơ quản lý dự án thống nhất**, có báo cáo tổng hợp để đọc xuyên suốt và các tài liệu/bảng tính chi tiết để đối chiếu. Ba bộ đầu vào A/B/C là nơi thành viên soạn và cập nhật phần của mình, không phải ba bộ hồ sơ dự án độc lập.

## 0. Hiện trạng và căn cứ lập kế hoạch

### 0.1. Hiện trạng kiểm tra ngày 23/09/2026

| Phần | Đã có | Việc tiếp theo |
| --- | --- | --- |
| Pre-project | Business Case v2.2 và Benefit Management Plan v2.2 trong `official-docs/00_Pre-project/`. Nội dung vẫn ghi dự thảo/chờ phê duyệt. | Kế thừa để viết các phần sau; chỉ rà những điểm ảnh hưởng đến yêu cầu, phạm vi, ngân sách và bàn giao. Không dành lại một đợt để viết từ đầu. |
| Initiating | Project Charter v2.1, Assumption Log v2.1, Stakeholder Register v1.0 trong `official-docs/01_Initiating/`. Charter vẫn ghi Draft. | Dùng làm đầu vào Planning; cập nhật giả định/bên liên quan khi có thông tin mới. Tách việc “đã có tài liệu” với “đã được phê duyệt”. |
| Planning của A | Đã có `A_01_Yeu_cau_va_kiem_thu_v1.0.md` và `A_02_WBS_uoc_luong_rui_ro_v1.0.md`, trạng thái Draft, ngày 23/09. | Rà nội dung, chuẩn hóa mã và kiểm tra chéo; dùng làm mẫu bố cục cho B/C. |
| Planning của B/C | Đã có bản nháp ở `plan-note/planning_b.md` và `plan-note/05_Ke_hoach_nghiep_vu_C_v1.0.md`. Chưa thấy bộ B_01/B_02, C_01/C_02 trong `_module-input/`. | Chuyển nội dung phù hợp sang cấu trúc chung, giữ nguồn và đánh dấu điểm cần sửa; không yêu cầu hai bạn viết lại từ số không. |
| Planning chung | Đã có bản nháp `05_WBS_and_WBS_Dictionary_v1.0.md` và sơ đồ `.puml`/`.png`. Thư mục bản nộp `official-docs/02_Planning/` mới có `.gitkeep`. | Chốt hệ mã WBS; hoàn thiện các tài liệu chung và bảng tính, kiểm tra rồi xuất bản nộp. |
| Executing, Monitoring and Controlling, Closing | Các thư mục hồ sơ tương ứng hiện mới có `.gitkeep`. Repository đã có mã nguồn, hướng dẫn và một số tài liệu kỹ thuật dưới `src/`. | Thu thập và kiểm chứng bằng chứng từ công việc đã làm, rồi bổ sung hồ sơ. Sự tồn tại của mã nguồn không tự chứng minh các tiêu chí nghiệm thu đã đạt. |
| Bảng phân công gốc | Sheet `Việc theo giai đoạn`, dòng 7–12 ghi “Chưa rà soát”; dòng 13–34 ghi “Chưa bắt đầu”. | Đối soát trạng thái với các bản nháp vừa có. Không lấy nhãn trong Excel làm bằng chứng rằng chưa có bất kỳ công việc nào. |

**Những điểm phải xử lý trước khi ghép Planning:**

1. **Nguồn hiện hành:** Pre-project hiện là v2.2; Charter vẫn là v2.1. Những chỗ kế hoạch cũ ghi toàn bộ hồ sơ là v2.1 cần dẫn lại đúng file. Phiên bản tài liệu khác với phiên bản sản phẩm.
2. **Mã yêu cầu:** bản hướng dẫn cũ dùng `RQ-A/B/C`, trong khi mẫu và bản A hiện dùng `REQ-A/B/C` để phân biệt với `RQ-01…` của Charter. Đề xuất dùng `REQ-X-nn` cho yêu cầu chi tiết, giữ `RQ-nn` cho Charter, lập ánh xạ thay vì đổi mã âm thầm.
3. **Mã WBS:** kế hoạch cũ và A_02 chia A/B/C thành 3.x/4.x/5.x; WBS chung ngày 23/09 chia theo giai đoạn phát triển, phần xây dựng A/B/C ở 4.2/4.3/4.4. Đề xuất lấy cấu trúc WBS chung mới làm bản để rà và chốt, lập bảng mã cũ → mã mới. Module A/B/C vẫn giữ nguyên người phụ trách dù WBS chia theo giai đoạn.
4. **Công sức WBS:** bản nháp ghi 498,3 giờ, vượt mức 450 giờ và trần 495 giờ trong Charter, chưa tính đầy đủ phần dự phòng nêu ở chính bản nháp. Chiến và Việt Quang phải đối soát trùng việc, phạm vi và ước lượng trước khi đề nghị chốt baseline. Không ép tổng về 450 bằng cách chia lại số giờ thiếu căn cứ.
5. **Lịch:** bản hai tuần trước đề xuất 16–29/09 với 20 giờ/người/tuần; Charter dùng 10 giờ/người/tuần. Chưa coi đề xuất tăng giờ là cam kết. Lịch soạn tài liệu ở mục 4 dưới đây dùng ngày tương đối, tách khỏi lịch dự án giả định 24/08–06/12/2026.

### 0.2. Nguồn và cách áp dụng

| Nguồn | Dùng để làm gì |
| --- | --- |
| [Bảng phân công đang dùng](../phan-cong-theo-giai-doan.xlsx), sheet `Việc theo giai đoạn`, A3:G34 | Căn cứ chính về A/B/C, vai trò tổng hợp, chuỗi kiểm tra và đầu ra từng giai đoạn. Ưu tiên bản ở thư mục gốc, không dùng bản sao trong `outputs` để suy ra trạng thái hiện tại. |
| [Kế hoạch hai tuần cũ](ke-hoach-hoan-thien-2-tuan.md) | Kế thừa mục tiêu bộ hồ sơ kèm demo, ranh giới demo/toàn sản phẩm và nguyên tắc bằng chứng; rà lại ngày và công suất. |
| [Nhiệm vụ xây dựng Planning](nhiem_vu_xay_dung_planning.md) | Kế thừa danh mục 13 tài liệu Planning và cách ghép dữ liệu module; điều chỉnh điểm đã thay đổi và mở rộng sang các giai đoạn sau. |
| [PM04 — Project Planning](<research/PM - NDQ/PM04_Project Planning.pdf>), trang PDF 10–12 | PMP tích hợp kế hoạch thành phần, ba baseline, quản lý thay đổi và cấu hình. Đặc tả yêu cầu và kế hoạch quản lý yêu cầu là hai nội dung khác nhau. |
| [PM05 — Scope Management](<research/PM - NDQ/PM05_Scope Management.pdf>) | Phạm vi, yêu cầu, RTM, WBS/Dictionary, kiểm soát và xác nhận phạm vi. |
| [PM06 — Schedule Management](<research/PM - NDQ/PM06_Schedule Management.pdf>) và [PM07 — Cost Management](<research/PM - NDQ/PM07_Cost Management.pdf>) | Hoạt động, ước lượng, quan hệ phụ thuộc, CPM, lịch, ngân sách theo thời gian, dự phòng và EVM. Công thức ba điểm trong hai deck ở trang PDF 44 và 22 dùng trung bình cộng chia 3. |
| [PM08 — Risk Management and Change Control](<research/PM - NDQ/PM08_Risk Management & Change Control.pdf>) và [PM09 — Resource Management](<research/PM - NDQ/PM09_Resource Management.pdf>) | Rủi ro, ứng phó, thay đổi, nguồn lực và trách nhiệm. |
| [PM10 — Communication Management and Control Project](<research/PM - NDQ/PM10_Communication Management & Control Project.pdf>), nhất là trang PDF 21, 33, 66, 73–78 | Truyền thông, thực hiện công việc, deliverable, dữ liệu thực tế và Issue Log. Issue Log được mở khi có vấn đề, không đợi đến cuối giai đoạn thực hiện. |
| [PM11 — Quality Management and Close Project](<research/PM - NDQ/PM11_Quality Management & Close Project.pdf>), nhất là trang PDF 19–20, 41, 65–67, 72, 80–86 | Chất lượng, kết quả kiểm tra, Lessons Learned, bàn giao và báo cáo cuối kỳ. Bài học được ghi trong quá trình làm rồi tổng hợp khi kết thúc. |
| [Quy tắc đã tổng hợp từ bài giảng](research/01_Quy_tac_bat_buoc.md) và [kiến thức sử dụng](research/02_Kien_thuc_su_dung.md) | Checklist hỗ trợ soạn; khi cách diễn đạt hoặc số trang không khớp thì kiểm trực tiếp PDF. Số trang PDF có thể lệch số slide ghi trong bản tổng hợp. |

Cấu trúc file dưới đây là **đề xuất tổ chức hồ sơ cho nhóm**, không phải khẳng định giảng viên bắt buộc mỗi nội dung phải thành một file riêng. Nếu có mẫu nộp cụ thể, giữ đủ nội dung nhưng điều chỉnh cách đóng gói theo mẫu đó.

## 1. Cây thư mục các file cần làm

**Ký hiệu:** `[Có]` = đã thấy file; `[Nháp]` = đã có nội dung cần rà; `[Làm]` = cần tạo/hoàn thiện; `[Xuất]` = sinh từ nguồn đã kiểm tra. Cây mô tả đích cần đạt; việc lập kế hoạch này chưa tạo toàn bộ các file trong cây.

### 1.1. Nơi mỗi người viết và nơi ghép nội dung

```text
design-note/
├── md-docs/
│   ├── 00_Muc_luc_va_chi_dan_ho_so.md                         [Làm]
│   ├── _template/
│   │   ├── 00_Document_Template_v1.0.md                      [Có]
│   │   ├── 01_Module_Input_Template_v1.0.md                  [Có; bổ sung phần sau Planning]
│   │   └── 02_Change_Request_Form_v1.0.md                    [Có]
│   ├── 02_Planning/
│   │   ├── _module-input/
│   │   │   ├── A_San_xuat_video/
│   │   │   │   ├── A_01_Yeu_cau_va_kiem_thu_v1.0.md          [Nháp]
│   │   │   │   └── A_02_WBS_uoc_luong_rui_ro_v1.0.md         [Nháp]
│   │   │   ├── B_Tai_khoan_thue_bao/
│   │   │   │   ├── B_01_Yeu_cau_va_kiem_thu_v1.0.md          [Làm từ bản B]
│   │   │   │   └── B_02_WBS_uoc_luong_rui_ro_v1.0.md         [Làm từ bản B]
│   │   │   └── C_Quan_tri_van_hanh/
│   │   │       ├── C_01_Yeu_cau_va_kiem_thu_v1.0.md          [Làm từ bản C]
│   │   │       └── C_02_WBS_uoc_luong_rui_ro_v1.0.md         [Làm từ bản C]
│   │   ├── 01_Project_Management_Plan_v1.0.md                [Làm]
│   │   ├── 02_Requirements_Specification_v1.0.md             [Làm]
│   │   ├── 03_Interface_Specification_v1.0.md                [Làm]
│   │   ├── 04_Project_Scope_Statement_v1.0.md                [Làm]
│   │   ├── 05_WBS_and_WBS_Dictionary_v1.0.md                 [Nháp]
│   │   ├── 05_WBS_PromptVideo.puml                          [Có]
│   │   ├── 05_WBS_PromptVideo.png                           [Có; xuất lại nếu đổi sơ đồ]
│   │   ├── 06_Quality_Plan_and_Test_Cases_v1.0.md             [Làm]
│   │   ├── 07_Resource_and_Communication_Plan_v1.0.md         [Làm]
│   │   └── 08_Risk_Management_Plan_v1.0.md                   [Làm]
│   ├── 03_Executing/
│   │   ├── _module-input/
│   │   │   ├── A_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md [Làm]
│   │   │   ├── B_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md [Làm]
│   │   │   └── C_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md [Làm]
│   │   ├── 01_Implementation_and_Integration_Record_v1.0.md [Làm]
│   │   ├── 02_Meeting_and_Decision_Log_v1.0.md               [Làm]
│   │   ├── 03_Installation_User_and_Operations_Guide_v1.0.md [Làm]
│   │   └── 04_Quality_Assurance_and_Lessons_Learned_v1.0.md  [Làm]
│   ├── 04_Monitoring_and_Controlling/
│   │   ├── _module-input/
│   │   │   ├── A_04_Theo_doi_kiem_thu_va_thay_doi_v1.0.md   [Làm]
│   │   │   ├── B_04_Theo_doi_kiem_thu_va_thay_doi_v1.0.md   [Làm]
│   │   │   └── C_04_Theo_doi_kiem_thu_va_thay_doi_v1.0.md   [Làm]
│   │   ├── 01_Project_Status_Report_v1.0.md                 [Làm theo kỳ]
│   │   ├── 02_Quality_and_Test_Report_v1.0.md                [Làm theo kỳ]
│   │   └── 06_Scope_Validation_Record_v1.0.md                [Làm khi đủ đầu vào]
│   └── 05_Closing/
│       ├── _module-input/
│       │   ├── A_05_Ket_qua_ban_giao_va_bai_hoc_v1.0.md     [Làm]
│       │   ├── B_05_Ket_qua_ban_giao_va_bai_hoc_v1.0.md     [Làm]
│       │   └── C_05_Ket_qua_ban_giao_va_bai_hoc_v1.0.md     [Làm]
│       ├── 01_Final_Project_Report_v1.0.md                  [Làm]
│       ├── 02_Handover_and_Outstanding_Items_v1.0.md         [Làm]
│       ├── 03_Lessons_Learned_Report_v1.0.md                 [Làm]
│       └── 04_Presentation_and_Demo_Script_v1.0.md           [Làm; dàn ý slide và lời dẫn]
├── evidence/
│   ├── INDEX.md                                             [Làm; danh mục bằng chứng]
│   ├── A/                                                   [Lưu kết quả thật của A]
│   ├── B/                                                   [Lưu kết quả thật của B]
│   ├── C/                                                   [Lưu kết quả thật của C]
│   └── Integration/                                         [Lưu kiểm thử liên module]
└── outputs/
    └── bo-ho-so-theo-module/                                 [Bản xuất để kiểm tra]
        ├── 02_Planning/                                      [DOCX 01–08; XLSX 09–13]
        ├── 03_Executing/                                     [DOCX 01–04; XLSX 05]
        ├── 04_Monitoring_and_Controlling/                     [DOCX 01,02,06; XLSX 03–05]
        └── 05_Closing/                                       [DOCX 01–03; PPTX 04]
```

`X` trong các bảng phía dưới là A, B hoặc C. Mỗi người có **5 file đầu vào xuyên suốt**, trong đó Planning chiếm 2 file. Chủ module chịu trách nhiệm nội dung và sửa lỗi của cả 5 file. Khi chuẩn hóa B/C, ghi nguồn chuyển sang và nơi cập nhật mới ở bản cũ để tránh hai bản cùng được sửa.

### 1.2. Bộ hồ sơ sau khi kiểm tra và phát hành

```text
design-note/official-docs/
├── 00_Bao_cao_quan_ly_du_an_PromptVideo_v1.0.docx             [Xuất; ghép theo mục lục]
├── 00_Pre-project/
│   ├── 01_Business_Case_v2.2.docx                            [Có]
│   └── 02_Benefit_Management_Plan_v2.2.docx                   [Có]
├── 01_Initiating/
│   ├── 01_Project_Charter_v2.1.docx                          [Có]
│   ├── 02_Assumption_Log_v2.1.docx                           [Có; cập nhật xuyên suốt]
│   └── 03_Stakeholder_Register_v1.0.xlsx                     [Có; cập nhật xuyên suốt]
├── 02_Planning/
│   ├── 01_Project_Management_Plan_v1.0.docx                  [Xuất]
│   ├── 02_Requirements_Specification_v1.0.docx               [Xuất]
│   ├── 03_Interface_Specification_v1.0.docx                  [Xuất]
│   ├── 04_Project_Scope_Statement_v1.0.docx                  [Xuất]
│   ├── 05_WBS_and_WBS_Dictionary_v1.0.docx                   [Xuất]
│   ├── 06_Quality_Plan_and_Test_Cases_v1.0.docx               [Xuất]
│   ├── 07_Resource_and_Communication_Plan_v1.0.docx           [Xuất]
│   ├── 08_Risk_Management_Plan_v1.0.docx                     [Xuất]
│   ├── 09_Requirements_Traceability_Matrix_v1.0.xlsx          [Làm]
│   ├── 10_Schedule_and_CPM_v1.0.xlsx                         [Làm]
│   ├── 11_Cost_Budget_Procurement_v1.0.xlsx                  [Làm]
│   ├── 12_RACI_and_Communication_Matrix_v1.0.xlsx             [Làm]
│   └── 13_Risk_Register_v1.0.xlsx                           [Làm]
├── 03_Executing/
│   ├── 01_Implementation_and_Integration_Record_v1.0.docx    [Xuất]
│   ├── 02_Meeting_and_Decision_Log_v1.0.docx                  [Xuất]
│   ├── 03_Installation_User_and_Operations_Guide_v1.0.docx   [Xuất]
│   ├── 04_Quality_Assurance_and_Lessons_Learned_v1.0.docx    [Xuất]
│   └── 05_Work_Log_and_Actuals_v1.0.xlsx                     [Làm]
├── 04_Monitoring_and_Controlling/
│   ├── 01_Project_Status_Report_v1.0.docx                   [Xuất]
│   ├── 02_Quality_and_Test_Report_v1.0.docx                  [Xuất]
│   ├── 03_Issue_and_Change_Log_v1.0.xlsx                     [Làm]
│   ├── 04_Performance_and_EVM_v1.0.xlsx                      [Làm]
│   ├── 05_Test_Results_and_Defects_v1.0.xlsx                 [Làm]
│   └── 06_Scope_Validation_Record_v1.0.docx                  [Xuất khi có kết quả; nếu chưa có thì là biểu mẫu]
└── 05_Closing/
    ├── 01_Final_Project_Report_v1.0.docx                    [Xuất]
    ├── 02_Handover_and_Outstanding_Items_v1.0.docx           [Xuất]
    ├── 03_Lessons_Learned_Report_v1.0.docx                   [Xuất]
    └── 04_Presentation_and_Demo_Script_v1.0.pptx             [Làm từ dàn ý]
```

Các số 01–13 được giữ để dùng lại danh mục Planning cũ. Tài liệu có cùng tên `.md` và `.docx` là **một nội dung ở hai bước của quy trình**, không phải hai nhiệm vụ viết. Ảnh WBS được nhúng vào P05; file `.puml` là nguồn sửa sơ đồ. Không bắt buộc làm thêm `.md` tương ứng cho từng workbook.

Bản soạn nằm ở `md-docs`; workbook đang làm và bản xuất DOCX/PPTX nằm ở `outputs/bo-ho-so-theo-module`; phiên bản đã kiểm tra được đưa vào `official-docs`. Mỗi workbook có một người tổng hợp được sửa bản làm việc. Bản phát hành là ảnh chụp của phiên bản đó; không sửa đồng thời hai bản ở `outputs` và `official-docs`. Tên thư mục không thay thế trạng thái/phê duyệt ghi trong tài liệu.

## 2. Từng tài liệu là gì và sẽ chứa gì

Mã P/E/M/C dùng trong kế hoạch này lần lượt chỉ Planning/Executing/Monitoring and Controlling/Closing. Đây là **mã danh mục tài liệu**, không phải mã WBS. Mã C01 của tài liệu Closing khác `C_01` là đầu vào yêu cầu của module C.

### 2.1. Tài liệu đã có và file điều phối chung

| Mã/file | Tài liệu là gì | Nội dung cần có hoặc cần rà |
| --- | --- | --- |
| Business Case v2.2 | Giải thích vì sao làm dự án và chọn phương án này. | Nhu cầu, phương án, khả thi, mô hình thuê bao, nguồn lực và điều kiện tiếp tục. Dùng để đối chiếu lý do của yêu cầu/phạm vi; không chép lại toàn bộ phân tích vào từng module. |
| Benefit Management Plan v2.2 | Kế hoạch đo và bàn giao trách nhiệm theo dõi lợi ích. | Lợi ích mục tiêu, chỉ số, mốc đo, chủ lợi ích, giả định và rủi ro. Kết thúc dự án phải bàn giao người theo dõi lợi ích; dự báo doanh thu không được ghi thành kết quả đã đạt. |
| Project Charter v2.1 | Điều lệ xác định mục tiêu, ranh giới và thẩm quyền. | Mục tiêu/tiêu chí thành công, yêu cầu cấp cao, mốc, ngân sách, rủi ro, người có quyền duyệt. Là nguồn kiểm tra các baseline và điều kiện nghiệm thu. |
| Assumption Log v2.1 | Sổ giả định và ràng buộc xuyên suốt dự án. | Mã, nội dung, khu vực ảnh hưởng, trạng thái xác minh, căn cứ. Cập nhật cùng một sổ khi A/B/C phát hiện giả định mới hoặc bị bác bỏ. |
| Stakeholder Register v1.0 | Danh sách người/tổ chức liên quan. | Vai trò, kỳ vọng, ảnh hưởng, thông tin liên hệ và phân loại; làm đầu vào kế hoạch tham gia và truyền thông. Không nhân bản thành một sổ khác trong Planning. |
| G0 — `00_Muc_luc_va_chi_dan_ho_so.md` | Điểm vào bộ tài liệu và bảng kiểm đóng gói. | Danh mục mã/file, phiên bản, chủ nội dung, người tổng hợp, trạng thái, nguồn, ngày kiểm tra; quyết định dùng hệ mã nào; thứ tự ghép báo cáo; đường dẫn bản làm việc và bản phát hành. |
| G1 — `00_Bao_cao_quan_ly_du_an_PromptVideo_v1.0.docx` | Báo cáo đọc liền mạch của toàn dự án. | Bối cảnh Pre-project → Initiating → Planning → thực hiện → kiểm soát → kết thúc. Lấy nội dung từ tài liệu chung đã chốt, dẫn workbook và bằng chứng ở phụ lục; không viết thêm một bộ số liệu riêng. G1 là báo cáo toàn bộ, còn C01 chỉ tổng kết kết quả cuối đợt/dự án. |
| T0 — `00_Document_Template_v1.0.md` | Mẫu hình thức của tài liệu. | Bìa, xác nhận, lịch sử thay đổi, mục lục, nội dung và nguồn. Phần xác nhận ghi đúng trạng thái, không điền người phê duyệt như thể họ đã duyệt. |
| T1 — `01_Module_Input_Template_v1.0.md` | Mẫu nội dung để A/B/C ghép được với nhau. | Giữ hai phần Planning hiện có; bổ sung cấu trúc X_03, X_04, X_05 theo bảng dưới; đồng bộ quy ước REQ và WBS sau khi chốt. |
| T2 — `02_Change_Request_Form_v1.0.md` | Mẫu yêu cầu thay đổi. | Mã CR, người đề nghị, lý do, hiện trạng/đề xuất, ảnh hưởng yêu cầu–phạm vi–lịch–chi phí–chất lượng–rủi ro, phương án, quyết định và người có thẩm quyền. CR thực tế được ghi ở M03, đính kèm bản phân tích khi cần. |
| EV — `evidence/INDEX.md` | Danh mục tra bằng chứng. | Mã bằng chứng, module, REQ/TC/gói việc, ngày chạy, bản mã nguồn, môi trường, người thực hiện, đường dẫn và kết luận. File có thể nằm dưới `src` nếu đã lưu ổn định; INDEX dẫn đúng nguồn, không bắt buộc sao chép trùng. |

### 2.2. Năm file mỗi chủ module phải bàn giao

| File của mỗi module | Trả lời câu hỏi | Nội dung bắt buộc | Sẽ được dùng ở đâu |
| --- | --- | --- | --- |
| `X_01_Yeu_cau_va_kiem_thu_v1.0.md` | Module phải làm gì, kiểm tra bằng cách nào? | Mục đích và tác nhân; chức năng; quy tắc nghiệp vụ; luồng chính/ngoại lệ; REQ/NF; tiêu chí chấp nhận đo được; phần demo/phần chưa làm; TC với dữ liệu, bước và kết quả mong đợi; đầu vào/đầu ra với module khác; ánh xạ yêu cầu Charter. Đây là thiết kế kiểm thử, chưa phải kết quả chạy. | P02, P03, P04, P06, P09. |
| `X_02_WBS_uoc_luong_rui_ro_v1.0.md` | Để tạo module cần những đầu ra, công sức và điều kiện nào? | Các gói đầu ra và từ điển; hoạt động; tiền nhiệm, loại phụ thuộc, lead/lag; O/M/P và cơ sở; giờ công khác thời lượng lịch; chi phí tiền mặt/giờ quy đổi; nguồn lực; mua/thuê; rủi ro, trigger, ứng phó; giả định cần xác minh. Dùng mã WBS đã thống nhất. | P05, P07, P08, P10–P13 và các chương quản lý tương ứng trong P01. |
| `X_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md` | Module đã được thiết kế và thực hiện thế nào? | Thành phần và dữ liệu; luồng xử lý; giao tiếp thực tế so với P03; đường dẫn mã/commit; phần đã có và còn thiếu; cách cài/chạy/sử dụng; nhật ký ngày, hoạt động, giờ thực tế, chi phí và bằng chứng; quyết định kỹ thuật; rà chất lượng quy trình và bài học ban đầu. | E01, E03, E04, E05. Nội dung họp chung đi vào E02. |
| `X_04_Theo_doi_kiem_thu_va_thay_doi_v1.0.md` | Module đang lệch kế hoạch ở đâu, chất lượng ra sao? | Tiến độ đến ngày chốt; kết quả TC có người thử/môi trường/ngày/phiên bản; lỗi và lần thử lại; issue; cập nhật rủi ro; đề nghị thay đổi và tác động; ảnh hưởng module khác; dự báo việc còn lại. Dẫn nhật ký giờ ở X_03/E05, không ghi một bộ giờ khác. | M01–M06; cập nhật P09 và P13. Người kiểm tra chéo cung cấp phiếu/kết quả thử; chủ module bổ sung kết quả sửa. |
| `X_05_Ket_qua_ban_giao_va_bai_hoc_v1.0.md` | Cuối đợt bàn giao gì, còn gì và ai tiếp nhận? | Yêu cầu/đầu ra đạt, chưa đạt, chưa thử; bằng chứng; giờ/chi phí cuối từ E05/M04; tồn đọng có người và hướng xử lý; tài liệu vận hành; bài học có nguyên nhân và khuyến nghị; phần trình bày/demo của module. | C01–C04 và G1. |

Không để ô thiếu thông tin trông như đã hoàn thành: ghi “chưa xác minh”, “chưa có kết quả chạy” hoặc “không áp dụng — lý do”. Mỗi đề nghị/giả định chưa chốt phải có người xử lý. Không đưa số đo dự kiến vào cột kết quả thực tế.

### 2.3. Planning — 13 tài liệu chung, ưu tiên cao nhất

| Mã và tên file | Là gì | Nội dung cần có | Đầu vào và điều kiện hoàn thành |
| --- | --- | --- | --- |
| **P01 — `01_Project_Management_Plan`** | Kế hoạch quản lý tổng thể: nhóm sẽ tổ chức, thực hiện, kiểm soát và kết thúc dự án như thế nào. | Cách tiếp cận/vòng đời; 10 kế hoạch quản lý thành phần ở mục 2.4; ba baseline; quản lý thay đổi và cấu hình; các cổng kiểm tra; cách dùng số liệu thực tế; thẩm quyền; điều kiện chuyển giai đoạn và kết thúc. Có danh mục phiên bản tài liệu được dẫn chiếu. | Lập khung sớm, hoàn thiện sau P02–P13. Không chỉ là mục lục đính link: mỗi lĩnh vực phải có cách làm, người phụ trách và tiêu chí xử lý. |
| **P02 — `02_Requirements_Specification`** | Đặc tả hệ thống phải đáp ứng điều gì. | Bối cảnh, tác nhân, quy tắc chung; đặc tả A/B/C cùng mẫu; chức năng, NF dùng chung/riêng; luồng lỗi; tiêu chí chấp nhận; bảng toàn phạm vi/demo/chưa triển khai; nguồn yêu cầu và câu hỏi còn mở. | Gom X_01. Mã duy nhất, không mâu thuẫn Charter, không bỏ yêu cầu chưa demo. |
| **P03 — `03_Interface_Specification`** | Thỏa thuận các module trao đổi với nhau. | A–B: xác thực, quyền xuất, hạn mức, giữ/hoàn/hủy lượt, lỗi và hết hạn; C–A: danh mục/định dạng/trạng thái mẫu; C–B: quyền quản trị, tra cứu/hỗ trợ và điều chỉnh có lưu vết nếu thuộc phạm vi; cấu trúc dữ liệu cảnh; ranh giới nội dung cục bộ/máy chủ; ví dụ dữ liệu; chủ cung cấp/chủ sử dụng; TC-I. | Cả hai đầu mỗi giao tiếp đọc và xác nhận. Các thao tác chưa chốt được ghi thành quyết định cần xử lý, không tự sáng tác API thay module khác. |
| **P04 — `04_Project_Scope_Statement`** | Tuyên bố ranh giới sản phẩm và công việc dự án. | Phạm vi sản phẩm/dự án; danh mục deliverable; điều kiện nghiệm thu; phần loại trừ; giả định/ràng buộc; phạm vi demo so với toàn sản phẩm; phụ thuộc ngoài nhóm. Có cả tài liệu, tích hợp, kiểm thử và bàn giao. | Từ Charter, P02, P03. Kết hợp P05 thành Scope Baseline khi được duyệt. |
| **P05 — `05_WBS_and_WBS_Dictionary`** | Phân rã phạm vi thành các gói đầu ra quản được. | Cây WBS và từ điển: mã, đầu ra, mô tả, chủ, tiêu chí nhận, giả định/ràng buộc, mốc, công sức/cơ sở; phần A/B/C và phần chung; bảng ánh xạ mã cũ/mới; đánh dấu WP/PP. Sơ đồ `.puml` và `.png` phải khớp bảng. | Từ P04 và X_02. Kiểm đủ 100% phạm vi, không trùng, WP theo quy tắc 8–80 giờ của môn học. PP còn xa phải có mốc phân rã, chưa gán activity chi tiết như WP. |
| **P06 — `06_Quality_Plan_and_Test_Cases`** | Kế hoạch tạo và kiểm tra chất lượng cùng bộ ca thử. | Chỉ số/ngưỡng; QA và QC; kiểm tra tài liệu/mã và kiểm thử sản phẩm; môi trường; dữ liệu thử; trách nhiệm; CoQ; TC-A/B/C/I; quy tắc ghi bằng chứng, phân loại lỗi, thử lại và điều kiện chuyển sang nghiệm thu. | Từ X_01, P03, Charter. Mỗi yêu cầu có phương thức kiểm chứng và TC phù hợp; chưa chạy thì chưa có kết luận đạt. |
| **P07 — `07_Resource_and_Communication_Plan`** | Cách tổ chức con người, trao đổi và làm việc với bên liên quan. | Vai trò/thẩm quyền; cơ cấu nhóm; Team Charter; năng lực và lịch khả dụng; cách quyết định/xử lý xung đột; nội dung/kênh/tần suất trao đổi; báo cáo và escalation; kế hoạch stakeholder engagement và hành động thu hẹp khoảng cách hiện tại–mong muốn. | Từ Stakeholder Register, X_02, P05. Phân biệt người thật của nhóm với vai trò sponsor/PM giả định trong Charter. |
| **P08 — `08_Risk_Management_Plan`** | Cách nhận diện, đánh giá và theo dõi rủi ro. | Phương pháp, nhóm rủi ro/RBS, vai trò, lịch rà, ngân sách xử lý, thang P/I định nghĩa rõ, ma trận ưu tiên, ngưỡng chấp nhận, chiến lược ứng phó, trigger, định dạng báo cáo và cách cập nhật. | Thống nhất thang trước khi ghép P13. Phân biệt điểm ưu tiên P×I với EMV bằng tiền; không coi điểm ma trận là chi phí dự phòng. |
| **P09 — `09_Requirements_Traceability_Matrix.xlsx`** | Bảng truy từ mục tiêu/yêu cầu đến thiết kế, mã và kiểm thử. | Req ID, mô tả, mục tiêu nghiệp vụ/Charter, Design Doc, Code Module, Test Case, Status theo mẫu môn học; thêm gói WBS, phạm vi demo và bằng chứng khi cần. Có ánh xạ mã nguồn cũ. | Từ P02, P03, P05, P06. Quản lý cùng một RTM qua các giai đoạn; chưa triển khai/chưa thử phải còn trên bảng. |
| **P10 — `10_Schedule_and_CPM.xlsx`** | Bảng tính lịch thực hiện dự án. | Các tab: `Milestones`, `Activities`, `Estimates`, `CPM`, `Gantt`, `Calendar`. Mã activity/WBS, công sức, thời lượng, nguồn lực, tiền nhiệm, FS/SS/FF/SF khi phù hợp, lead/lag, O/M/P, cơ sở, ES/EF/LS/LF, total/free float, đường găng. Giữ lịch baseline và lịch cập nhật phân biệt. | Từ P05, X_02, lịch nguồn lực P12. Không có chu trình phụ thuộc hoặc xếp vượt công suất. Mốc có thời lượng 0. Quy tắc tính ngày ghi rõ và nhất quán. |
| **P11 — `11_Cost_Budget_Procurement.xlsx`** | Bảng chi phí, ngân sách theo thời gian và nhu cầu mua/thuê. | Các tab: `Estimates`, `Reserves`, `Time_Phased_Budget`, `Funding`, `Procurement`. Giờ/căn cứ/đơn giá; tiền mặt khác chi phí cơ hội; contingency theo rủi ro; management reserve riêng; dòng ngân sách và đường S; khoản mua/thuê, lý do, tiêu chí chọn, người/hạn và tiêu chí nhận. | Từ X_02, P10, P13. Đối chiếu Charter; làm rõ lệch 498,3/450/495 giờ. Không giao thêm nhiệm vụ rà giấy phép phần mềm. |
| **P12 — `12_RACI_and_Communication_Matrix.xlsx`** | Các ma trận áp dụng P07 vào từng gói việc và bên liên quan. | Các tab: `RACI`, `Resource_Needs`, `Resource_Calendar`, `Communication`, `Stakeholder_Engagement`. Mỗi việc đúng một Accountable; ai làm/góp ý/nhận tin; năng lực khả dụng; nội dung/người gửi/người nhận/kênh/tần suất; mức C hiện tại và D mong muốn của stakeholder. | Từ P05, P07 và sổ bên liên quan. Không nhầm A trong RACI với module A; không nhầm C/D ở engagement với người/module. |
| **P13 — `13_Risk_Register.xlsx`** | Sổ rủi ro cụ thể của dự án. | Mã R-A/B/C/G; nguyên nhân–sự kiện–hậu quả; gói/module; P, I, ưu tiên, chủ, trigger, phòng ngừa, contingency/fallback, thời hạn, trạng thái, rủi ro còn lại/thứ cấp; watch list; EMV có cơ sở cho mục cần định lượng; phần tổng hợp risk report. | Từ X_02 và P08. Chuyển nhu cầu dự phòng sang P11, không cộng hai lần. Cập nhật tiếp khi thực hiện; không tạo một Risk Register độc lập ở mỗi giai đoạn. |

### 2.4. P01 phải có đủ kế hoạch quản lý, không chỉ tập hợp bảng biểu

| Nội dung trong PMP | Phải nói rõ điều gì | Dữ liệu chi tiết dùng kèm |
| --- | --- | --- |
| Scope Management Plan | Cách lập, xác nhận, kiểm soát phạm vi và xử lý phần phát sinh. | P04, P05, M06. |
| **Requirements Management Plan** | Cách thu thập, ưu tiên, đặt mã, rà, truy vết, chấp thuận và thay đổi yêu cầu. | P02, P09. **P02 là nội dung yêu cầu; không thay được kế hoạch quản lý yêu cầu.** |
| Schedule Management Plan | Đơn vị thời lượng, lịch làm việc, phương pháp ước lượng, cập nhật, đo chậm và ngưỡng xử lý. | P10. |
| Cost Management Plan | Đơn vị đo, cơ sở/độ chính xác ước lượng, ngân sách, dự phòng, ngưỡng kiểm soát và quy tắc EVM. | P11, M04. |
| Quality Management Plan | QA/QC, chỉ số, trách nhiệm, bằng chứng, lỗi và điều kiện nhận đầu ra. | P06. |
| Resource Management Plan | Vai trò, năng lực, lịch khả dụng, phân công, hỗ trợ và xử lý thiếu nguồn lực. | P07, P12. |
| **Communications Management Plan** | Ai cần thông tin gì, ai gửi, lúc nào, qua kênh nào, cách phản hồi/escalation và lưu trữ. | P07, P12, E02. |
| Risk Management Plan | Cách nhận diện, đánh giá, ứng phó, theo dõi và báo cáo. | P08, P13. |
| Procurement Management Plan | Tiêu chí mua/thuê, chọn nhà cung cấp, quyền quyết định, theo dõi giao nhận và kết thúc nghĩa vụ nếu có. | P11, C02. Nếu không mua thêm thì ghi lý do và các dịch vụ đang sử dụng. |
| Stakeholder Engagement Plan | Mức tham gia hiện tại/mong muốn, hành động, chủ thực hiện và cách xem lại hiệu quả. | P07, P12, Stakeholder Register. |
| Baseline, Change và Configuration Management | Phiên bản phạm vi/lịch/chi phí dùng để so; luồng đề nghị–đánh giá–quyết định–triển khai–kiểm chứng; thẩm quyền; cách lưu phiên bản và lịch sử. | P04–P05, P10–P11, T2, M03, G0. |

**Ba baseline cần thống nhất:** Scope Baseline = P04 + WBS + WBS Dictionary trong P05; Schedule Baseline = phiên bản lịch được duyệt ở P10; Cost Baseline = ngân sách theo thời gian gồm contingency trong P11. Management reserve tách ngoài Cost Baseline. Một bản nháp chưa được duyệt chưa phải baseline đã chốt.

### 2.5. Executing — hồ sơ chứng minh nhóm đã thực hiện công việc

| Mã và tên file | Là gì | Nội dung cần có và điều kiện hoàn thành |
| --- | --- | --- |
| **E01 — `01_Implementation_and_Integration_Record`** | Hồ sơ thiết kế và thực hiện bản chạy A/B/C. | Kiến trúc chung; thiết kế từng module; bảng kết nối đã thực hiện so với P03; đường dẫn mã/commit/build; cấu hình và dữ liệu cần để chạy lại; đầu ra đã tạo; thay đổi đã được chấp thuận; danh sách chưa triển khai. Từ X_03, tận dụng tài liệu kỹ thuật dưới `src`, dẫn nguồn thay vì chép trùng. |
| **E02 — `02_Meeting_and_Decision_Log`** | Biên bản họp và sổ quyết định của nhóm. | Ngày, người tham dự, nội dung, quyết định, người làm, hạn và link đầu ra; xác nhận giao tiếp, chốt mã/phiên bản, nhận xét review, việc vượt thẩm quyền. Quyết định thay đổi baseline phải nối đến CR ở M03. |
| **E03 — `03_Installation_User_and_Operations_Guide`** | Hướng dẫn để người khác chạy, dùng và tiếp nhận vận hành. | Điều kiện môi trường, cài/khởi động, dữ liệu thử, thao tác A/B/C, phân quyền, thanh toán giả lập, xử lý lỗi, sao lưu/khôi phục khi có, giám sát/hỗ trợ và phần đo lợi ích được bàn giao. Dẫn hướng dẫn kỹ thuật hiện hành; người kiểm tra phải chạy lại được phần đã mô tả là hoạt động. |
| **E04 — `04_Quality_Assurance_and_Lessons_Learned`** | Nhật ký bảo đảm chất lượng và kiến thức rút ra trong quá trình làm. | Hai mục riêng: QA gồm lần rà tài liệu/quy trình, phát hiện, nguyên nhân, cải tiến và kiểm tra lại; Lessons Learned Register gồm tình huống, tác động, bài học, khuyến nghị và người áp dụng. Mở sớm, cập nhật khi có sự việc. Kết quả test chi tiết lưu M05. |
| **E05 — `05_Work_Log_and_Actuals.xlsx`** | Số liệu thô về công việc đã thực hiện. | Các tab `Work_Log`, `Actual_Costs`, `Deliverables`: ngày, người/module, activity/WBS, giờ thực tế, ngày bắt đầu/kết thúc, đầu ra/link bằng chứng; khoản chi, căn cứ/chứng từ nếu có. Dữ liệu từ X_03, gom theo cùng kỳ. Phân biệt giờ ghi thực tế, giờ khôi phục từ bằng chứng và dữ liệu mô phỏng. Không tự chia lại 450 giờ thành nhật ký đã làm. |

### 2.6. Monitoring and Controlling — chạy song song với Executing

| Mã và tên file | Là gì | Nội dung cần có và điều kiện hoàn thành |
| --- | --- | --- |
| **M01 — `01_Project_Status_Report`** | Báo cáo tình hình và quyết định cần xử lý tại một ngày chốt. | Ngày/kỳ báo cáo; baseline đang so; đầu ra/mốc kế hoạch và thực tế; sai lệch phạm vi–lịch–chi phí–nguồn lực; dự báo; rủi ro/issue/thay đổi quan trọng; hiệu quả truyền thông và tham gia stakeholder khi có vấn đề; hành động, chủ và hạn. Số liệu dẫn E05/M04, kết luận chất lượng dẫn M02. |
| **M02 — `02_Quality_and_Test_Report`** | Giải thích mức đáp ứng chất lượng và khả năng nghiệm thu. | Phạm vi/môi trường/phiên bản thử; tổng TC đạt/lỗi/chưa thử; kết quả theo REQ/NF và module; số đo; lỗi còn mở, mức ảnh hưởng; nhận xét QA từ E04; đề nghị sửa/kiểm tra lại; danh sách deliverable đủ điều kiện chuyển sang Validate Scope. |
| **M03 — `03_Issue_and_Change_Log.xlsx`** | Theo dõi vấn đề hiện hữu và mọi đề nghị thay đổi. | Tab `Issues`: mã, ngày, mô tả, ảnh hưởng, ưu tiên, chủ, hạn, trạng thái, cách giải quyết/bằng chứng. Tab `Changes`: mã CR, người đề nghị, nội dung và phân tích tác động, người/quyền duyệt, quyết định duyệt/hoãn/từ chối, phiên bản có hiệu lực, kiểm chứng sau thay đổi. Mở ngay khi có issue/CR, dù file được xếp dưới Monitoring. |
| **M04 — `04_Performance_and_EVM.xlsx`** | Bảng phân tích tiến độ và chi phí từ kế hoạch/thực tế. | Các tab `Inputs`, `Variance`, `EVM`: ngày chốt, baseline, mã gói, kế hoạch, kết quả được công nhận, công sức/chi phí thực tế; PV, EV, AC, CV, SV, CPI, SPI; BAC, EAC, VAC khi có căn cứ dự báo. Ghi quy tắc ghi nhận EV trước khi tính. Cùng phạm vi, ngày chốt và đơn vị đo; tách bài tính mô phỏng khỏi dữ liệu thực tế. |
| **M05 — `05_Test_Results_and_Defects.xlsx`** | Sổ kết quả từng lần thử và vòng sửa lỗi. | Tab `Test_Runs`: TC, REQ, module, bước/dữ liệu hoặc dẫn P06, môi trường, build, người/ngày chạy, kết quả mong đợi/thực tế, Pass/Fail/Not Run/Blocked, bằng chứng. Tab `Defects`: mã lỗi, mức độ, chủ sửa, trạng thái, liên kết TC/lần thử lại, người xác nhận. Không biến “chưa thử” thành “đạt” vì mã đã tồn tại. |
| **M06 — `06_Scope_Validation_Record`** | Hồ sơ đề nghị và ghi nhận chấp nhận đầu ra theo thẩm quyền. | Danh mục deliverable, tiêu chí, kết quả Control Quality, người có quyền chấp nhận, ngày/kết luận, điều kiện kèm theo hoặc phần phải sửa/CR. Nếu chỉ kết thúc đợt bài tập thì xác định đúng phạm vi đợt; nghiệm thu toàn sản phẩm chưa đủ điều kiện giữ ở dạng biểu mẫu/chưa ký. |

**Tiếp tục cập nhật P09 và P13 ở vị trí cũ:** M05 cung cấp trạng thái/bằng chứng kiểm thử cho RTM; sự kiện và ứng phó cập nhật Risk Register. Không làm thêm hai sổ cùng tên ở thư mục Monitoring. Các kỳ báo cáo và baseline đã phát hành được giữ phiên bản; cập nhật kỳ mới không sửa lại kết quả quá khứ.

### 2.7. Closing — tổng kết và bàn giao có căn cứ

| Mã và tên file | Là gì | Nội dung cần có và điều kiện hoàn thành |
| --- | --- | --- |
| **C01 — `01_Final_Project_Report`** | Báo cáo kết quả cuối dự án hoặc cuối đợt làm bài. | Tóm tắt; mục tiêu phạm vi và bằng chứng; mốc kế hoạch/thực tế và nguyên nhân lệch; chi phí/giờ kế hoạch–thực tế và nguyên nhân; mục tiêu chất lượng; thông tin xác nhận đầu ra; thay đổi/rủi ro quan trọng; mức hài lòng/phản hồi nếu đã thu thập; kết luận đạt/chưa đạt; việc cần tiếp tục. Từ X_05, M01–M06, không tự tạo số liệu cuối kỳ. |
| **C02 — `02_Handover_and_Outstanding_Items`** | Danh mục bàn giao và phần việc còn lại. | Mã nguồn/phiên bản, hướng dẫn, tài liệu, cấu hình cần bàn giao, bằng chứng; người giao/nhận, tình trạng tiếp nhận; tồn đọng, ảnh hưởng, chủ và phương án; trách nhiệm vận hành/hỗ trợ/đo lợi ích; kết thúc mua sắm/nghĩa vụ nếu có; lưu trữ và giải phóng nguồn lực. Dẫn E03 và M06, không nhân bản hướng dẫn hoặc tạo kết quả nghiệm thu giả. |
| **C03 — `03_Lessons_Learned_Report`** | Bản tổng hợp những bài học có thể dùng lại. | Rút từ E04 và X_05: điều làm tốt/chưa tốt, nguyên nhân, ảnh hưởng, cách xử lý, khuyến nghị và người/tình huống nên áp dụng. Có bài học A/B/C và tích hợp/quản lý tài liệu; không chỉ viết các câu chung như “cần phối hợp tốt hơn”. |
| **C04 — `04_Presentation_and_Demo_Script`** | Dàn ý và bộ trình bày/bảo vệ. | Bài toán, ba module, Planning và ba baseline, bằng chứng thực hiện/kiểm soát, kết quả/tồn đọng, bài học; người trình bày từng phần; thứ tự demo; điều kiện môi trường; phương án dùng bằng chứng đã ghi nếu demo lỗi; câu hỏi dự kiến. MD là dàn ý/lời dẫn, PPTX là bản trình bày. |

## 3. Cách ba module ghép thành một bộ tài liệu

### 3.1. Phần riêng của mỗi người và phần phải làm chung

| Phạm vi | Chiến — A | Việt Quang — B | Quang Anh — C |
| --- | --- | --- | --- |
| Nội dung riêng xuyên suốt | Nhập chữ/ảnh, editor, mẫu và xem trước, dựng/xuất MP4, lưu/mở cục bộ; tiếng Việt, hiệu năng, bộ nhớ, riêng tư. | Tài khoản, đăng nhập, gói năm, giấy phép/quyền xuất, hạn mức, thanh toán/gia hạn, hóa đơn, 5 chỗ và trạng thái lỗi. | Mẫu/tài sản đồ họa, quyền quản trị, giám sát máy chủ, hỗ trợ và đo lợi ích sau bàn giao. |
| Đầu vào bắt buộc cho kế hoạch chung | Yêu cầu, TC, WBS, hoạt động, giờ/chi phí, nguồn lực và rủi ro A. | Cùng cấu trúc cho B. | Cùng cấu trúc cho C. |
| Bằng chứng phải cung cấp | Kết quả xuất/preview, tiếng Việt, lưu mở, số đo và request/log liên quan ranh giới dữ liệu trong phạm vi đã thử. | Kết quả tài khoản/quyền/hạn mức, hết hạn, xuất lỗi/đồng thời, sự kiện thanh toán giả lập/trùng trong phạm vi đã thử. | Mẫu chạy trong A, chặn người thường khỏi admin, kết quả giám sát/hỗ trợ và log không chứa nội dung trong phạm vi đã thử. |
| Phần dùng chung phải thống nhất | Cùng B chốt hỏi quyền và vòng đời lượt xuất; cùng C chốt cách dùng mẫu; chủ trì ghép luồng A–B–C. | Cùng A chốt quyền/hạn mức; cùng C chốt phân quyền quản trị và dữ liệu hỗ trợ. | Cùng A chốt mẫu; cùng B chốt quyền quản trị, thao tác hỗ trợ và số liệu vận hành. |

Nhánh công việc chung như quản lý dự án, nền tảng, tích hợp và bàn giao phải được giao chủ trong P05/P12. Không để chúng nằm ngoài WBS vì “không thuộc riêng A/B/C”, và không cộng cùng một công việc nền tảng vào cả ba module.

### 3.2. Chuỗi ghép và kiểm tra

```text
Charter + Business Case/BMP + Assumption/Stakeholder Register
        ↓
A_01/A_02 + B_01/B_02 + C_01/C_02
        ↓
Yêu cầu P02 → Giao tiếp P03 → Phạm vi P04 → WBS/Dictionary P05
        ↓
Lịch P10 + Chi phí P11 + Chất lượng P06 + Nguồn lực/Truyền thông P07/P12
                  + Rủi ro P08/P13 + Truy vết P09
        ↓
PMP P01 + bộ baseline được rà và trình duyệt
        ↓
Thực hiện E01–E05 ↔ Theo dõi/kiểm soát M01–M05 + cập nhật P09/P13
        ↓
Control Quality → Validate Scope M06 → Closing C01–C04
        ↓
Báo cáo tổng hợp G1 + phụ lục/bảng tính/bằng chứng
```

Lịch, chi phí, chất lượng, rủi ro và nguồn lực phải được đối soát qua lại trước khi chốt. Sơ đồ trên mô tả phụ thuộc nội dung, không phải yêu cầu chờ hoàn tất toàn bộ một giai đoạn mới được ghi nhật ký, issue hoặc bài học. Nếu mã nguồn đã được làm trước khi hồ sơ hoàn chỉnh, ghi đúng ngày và nguồn khôi phục thông tin; không lập baseline với ngày lùi để làm như kế hoạch đã có từ trước.

### 3.3. Quy trình bàn giao một phần viết

1. **Chủ module viết theo mẫu**, gắn mã yêu cầu/TC/WBS, nguồn và câu hỏi còn mở. Ghi rõ phần nào đã làm, phần nào chỉ là kế hoạch.
2. **Người kiểm tra đọc chéo**, ghi lỗi cụ thể, ảnh hưởng và chỗ phải sửa; chủ module sửa và phản hồi. Phần giao tiếp phải có ý kiến của module ở đầu còn lại.
3. **Người xác nhận nội bộ chốt đầu vào đủ để ghép.** Điều này chưa phải nghiệm thu sản phẩm bởi sponsor.
4. **Người tổng hợp ghép theo loại tài liệu**, thống nhất thuật ngữ/mã, bỏ trùng, thêm phần chung và kiểm tra liên kết. Không tự thay tiêu chí hoặc số ước lượng của module khác; điểm chưa thống nhất trả về chủ module và ghi quyết định ở E02.
5. **Kiểm tra tài liệu chung**, gồm cả nội dung và số liệu giữa các file. Phần Word/Excel chỉ có một người tổng hợp sửa bản làm việc tại một thời điểm.
6. **Xuất sang `outputs`, kiểm tra hiển thị và liên kết**, rồi mới phát hành vào `official-docs` theo trạng thái thực tế. G0 ghi phiên bản và ngày chốt để có thể ghép lại G1.

### 3.4. Các quy tắc cần thống nhất để ghép không bị lệch

| Chủ đề | Quy tắc áp dụng |
| --- | --- |
| Mã | Đề xuất `REQ-A/B/C-nn`, `NF-A/B/C/G-nn`, `TC-A/B/C/I-nn`, `R-A/B/C/G-nn`, `ISS-nn`, `CR-nn`, `DEC-nn`, `EV-nn`. Mã của Charter giữ nguyên. Mã WBS dùng một danh mục chung sau khi chốt; giữ bảng ánh xạ các mã cũ. |
| Ước lượng | Theo PM06/PM07 của môn học: `tE = (O + M + P) / 3`. Ghi đơn vị, cơ sở, giả định, độ tin cậy; phân biệt giờ công với số ngày lịch phụ thuộc mức sẵn sàng. |
| Số liệu kế hoạch/thực tế | WBS, lịch và ngân sách là kế hoạch; E05 là dữ liệu thực tế; M04 phân tích từ hai phía. Dữ liệu thiếu không coi bằng 0. Chưa có đủ đầu vào thì ghi chưa tính được; ví dụ EVM mô phỏng phải tách và ghi nhãn. |
| Dự phòng | Contingency có cơ sở rủi ro và nằm trong baseline thích hợp; management reserve tách riêng. Không tính hai lần cùng khoản ở X_02, P11 và P13. |
| Demo/toàn sản phẩm | Đặc tả và RTM giữ toàn phạm vi theo hồ sơ; demo là tập con có nhãn. Một mẫu, thanh toán giả lập hoặc thử trên một môi trường không chứng minh đã đạt yêu cầu toàn sản phẩm. |
| Trạng thái | `Chưa bắt đầu → Đang soạn → Chờ kiểm tra → Cần sửa → Chờ xác nhận → Hoàn thành nội bộ`. “Approved/Đã nghiệm thu” chỉ dùng khi có quyết định đúng thẩm quyền. Ghi version/ngày, không chỉ ghi phần trăm cảm tính. |
| Bằng chứng | Ít nhất nêu nguồn, ngày, phiên bản, môi trường, người thực hiện và REQ/TC liên quan. Dùng kết quả thật đã kiểm chứng; không tự khẳng định hoàn thành dựa trên dấu tích ở bản nháp WBS. |
| Tài liệu cập nhật xuyên suốt | Assumption Log, Stakeholder Register, P09, P13, E04, M03 và M05 có một nguồn cập nhật cho từng loại. Báo cáo kỳ chỉ dẫn hoặc chụp số liệu tại ngày chốt. |
| Bản ghép cuối | G1 lấy nội dung từ phiên bản đã chọn trong G0; giữ một cách gọi, mục tiêu, phạm vi và bộ số liệu. Bảng tính chi tiết là phụ lục gốc, bản Word chỉ tóm tắt số đã đối chiếu. |

## 4. Kế hoạch hoàn thiện hồ sơ và tiêu chí chuyển bước

### 4.1. Khung hai tuần đề xuất

Ngày 1 là ngày nhóm bắt đầu thực hiện phương án mới. Đây là **lịch soạn, thu thập bằng chứng và ghép hồ sơ**, chưa phải cam kết hoàn thành toàn bộ phần mềm trong hai tuần. Không tự chuyển các ngày 16–29/09 của bản cũ sang lịch này. Nếu giữ hạn 29/09, phải cân lại theo thời gian thực còn lại và mức giờ nhóm xác nhận.

| Đợt | Chiến | Việt Quang | Quang Anh | Đầu ra để chuyển bước |
| --- | --- | --- | --- | --- |
| **Ngày 1: chốt cách làm** | Mở G0; rà hệ mã, WBS và ranh giới A/B/C. | Đối soát bảng phân công gốc, nguồn ước lượng và vấn đề 498,3 giờ. | Rà mẫu, tiêu chí nhận tài liệu và danh mục bằng chứng cần có. | Danh mục file/chủ; cách ghép; quyết định mã; số giờ khả dụng từng người; danh sách vấn đề cần giải quyết. |
| **Ngày 2–3: hoàn thiện đầu vào module** | Rà A_01/A_02; nêu giao tiếp cần B/C xác nhận. | Chuẩn hóa bản B thành B_01/B_02; cung cấp thời lượng, chi phí và rủi ro. | Chuẩn hóa bản C thành C_01/C_02; cung cấp TC, nguồn lực và rủi ro. | Sáu file đầu vào theo cùng mẫu; một vòng kiểm tra chéo; không còn mâu thuẫn giao tiếp cản trở lập kế hoạch. |
| **Ngày 4–5: ghép Planning** | P02–P05; đối soát WBS và hệ mã; khởi tạo P09. | P08/P13; lập P10, P11 từ dữ liệu cả ba; rà khả năng đáp ứng ngân sách/lịch. | P06, P07, P12; xác định QC, truyền thông, stakeholder và năng lực. | Bản ghép Planning đầy đủ dữ liệu; danh sách điểm lệch có người xử lý, đặc biệt nguồn lực/ngân sách. |
| **Ngày 6–7: chốt Planning để dùng** | Hoàn thiện P01/P09; rà liên kết phạm vi–lịch–chi phí và trình chốt các baseline. | Kiểm công thức, quan hệ lịch, dự phòng; sửa P10/P11/P13 sau review. | Rà độ phủ yêu cầu–TC, RACI, trách nhiệm; kiểm cấu trúc bản xuất. | 13 tài liệu Planning qua kiểm tra nội bộ; baseline chỉ đánh dấu chốt khi có quyết định phù hợp. Điểm vượt giới hạn còn mở phải được nêu rõ. |
| **Ngày 8–10: hoàn thiện thực hiện và kiểm soát** | A_03/A_04; E01, M01 và chuẩn bị M06; kiểm tra chéo C. | B_03/B_04; E05, M03/M04, cập nhật P13; kiểm tra chéo A. | C_03/C_04; E02–E04, M02/M05; nhận kết quả để cập nhật P09; kiểm tra chéo B. | Bằng chứng A/B/C và tích hợp; ít nhất một kỳ báo cáo thực tế có ngày chốt; vòng lỗi–sửa–thử lại được ghi. Nhật ký/issue đã mở từ trước vẫn cập nhật liên tục. |
| **Ngày 11–12: kết thúc đợt và ghép bộ** | A_05; C01; kết luận đạt/chưa đạt có căn cứ, rà nội dung G1. | B_05; đối chiếu số liệu cuối, sổ vấn đề/thay đổi và phần phụ lục tính toán. | C_05; C02/C03; dựng C04; ghép G1 theo G0. | Hồ sơ Closing đúng phạm vi đợt, tồn đọng có người, bộ nộp đủ file và tham chiếu. |
| **Ngày 13–14: kiểm cuối và sửa** | Rà nội dung toàn bộ; diễn tập A và phần quản lý chung. | Kiểm workbook, phụ lục số liệu và diễn tập B. | Kiểm Word/slide/mục lục, chạy lại hướng dẫn và diễn tập C. | File mở được, dẫn chiếu đúng, số liệu khớp, demo/bằng chứng sử dụng được; phát hành bộ đã kiểm tra. |

Mỗi người tính cả thời gian viết, họp, kiểm tra chéo, sửa và xuất bản trong khả năng nhận việc. Hồ sơ cũ cho 10 giờ/người/tuần tương đương **60 giờ cho cả nhóm trong hai tuần**; mức đề xuất cũ 20 giờ tương đương **120 giờ**. Bảng trên không khẳng định lượng việc còn lại vừa một trong hai mức: ngày 1 phải ước lượng phần còn lại từ các bản nháp, rồi phân tải. Không cộng công việc lập trình chưa làm vào lịch tài liệu mà bỏ qua công sức.

Nếu cần điều chỉnh vì thiếu giờ: ưu tiên hoàn thiện Planning, dữ liệu và báo cáo có thể chứng minh, rồi đóng gói; dùng lại nội dung/nguồn đã có; ghi rõ các yêu cầu chưa làm. Phần mềm còn thiếu đi vào công việc/tồn đọng có chủ, không đổi thành “đã đạt” để đủ bộ hồ sơ.

### 4.2. Tiêu chí hoàn thành để giao và nhận việc

| Cổng kiểm tra | Được coi là đủ khi |
| --- | --- |
| **Đầu vào module** | Cùng cấu trúc; đầy đủ yêu cầu/TC/WBS/ước lượng/rủi ro; có nguồn; các điểm thiếu có chủ; đúng người kiểm tra/xác nhận; giao tiếp đã được hai phía rà. |
| **Planning** | P01 có kế hoạch quản lý đầy đủ; P02–P13 thống nhất mã và phạm vi; lịch khả thi theo công suất; chi phí/dự phòng có căn cứ; RTM bao phủ; các quyết định baseline và sai lệch Charter được ghi rõ. |
| **Executing** | Có bản mã nguồn/đầu ra xác định được, hướng dẫn và nhật ký thực tế; người khác có thể đối chiếu hoặc chạy lại phần được báo cáo. |
| **Monitoring and Controlling** | Báo cáo có ngày chốt và baseline; số liệu truy về E05; test truy về TC/bằng chứng; lỗi có vòng sửa/thử lại; issue/CR/risk có chủ và trạng thái; phần chưa thử hiển thị rõ. |
| **Closing** | Kết quả so được với mục tiêu; có hồ sơ xác nhận hoặc nêu chưa đủ điều kiện; tồn đọng có người tiếp nhận; hướng dẫn/bộ bàn giao/bài học và dữ liệu cuối khớp; phân biệt kết thúc đợt học tập với nghiệm thu sản phẩm. |
| **Bộ nộp cuối** | G0 liệt kê đủ file/phiên bản; G1 ghép liền mạch; không link hỏng, bảng thiếu đơn vị, công thức lỗi hoặc mục lục lệch; có người đọc nội dung và người kiểm hình thức; mỗi thành viên giải thích được module và số liệu mình cung cấp. |

## 5. Đề xuất phân công

### 5.1. Trách nhiệm xuyên suốt của ba thành viên

| Thành viên | Module phải viết và hoàn thiện | Nhóm tài liệu chung phụ trách tổng hợp | Trách nhiệm đến cuối đợt |
| --- | --- | --- | --- |
| **Nguyễn Thế Chiến** | A_01–A_05: Sản xuất video. | Yêu cầu, giao tiếp, phạm vi, WBS, PMP; RTM ở bước lập; hồ sơ tích hợp; báo cáo tình hình và tổng kết. | Điều phối liên kết A/B/C, xử lý mâu thuẫn phạm vi, rà nội dung báo cáo toàn bộ; xác định việc nào cần trình người có thẩm quyền. |
| **Nguyễn Việt Quang** | B_01–B_05: Tài khoản và thuê bao. | Lịch/CPM, chi phí/mua sắm, rủi ro; nhật ký giờ và chi phí; issue/change; đo tiến độ/EVM. | Bảo đảm số liệu chung có căn cứ, công thức kiểm được, không lẫn thực tế/mô phỏng; cung cấp số cuối kỳ và phụ lục cho Closing. |
| **Phạm Quang Anh** | C_01–C_05: Quản trị và vận hành. | Chất lượng, nguồn lực/RACI, truyền thông/stakeholder; họp/hướng dẫn/QA; kết quả test; bàn giao, bài học, slide và ghép hình thức. | Bảo đảm kết quả test và RTM được cập nhật, hồ sơ sử dụng/bàn giao được, bộ xuất có bố cục và đường dẫn đúng. |

**Mỗi người phải nộp nội dung module mình cho mọi tài liệu liên quan.** Ví dụ P10 do Việt Quang tổng hợp, nhưng Chiến vẫn phải giao hoạt động/phụ thuộc/ước lượng A và Quang Anh vẫn phải giao dữ liệu C. Quang Anh tổng hợp P06 không có nghĩa bạn ấy tự nghĩ toàn bộ ca thử A và B.

### 5.2. Người tổng hợp, kiểm tra và xác nhận cho từng nhóm file

| File/nhóm file | Chủ tổng hợp hoặc quản lý nguồn | Người kiểm tra | Người xác nhận nội bộ |
| --- | --- | --- | --- |
| A_01–A_05 và bằng chứng A | Chiến | Việt Quang | Quang Anh |
| B_01–B_05 và bằng chứng B | Việt Quang | Quang Anh | Chiến |
| C_01–C_05 và bằng chứng C | Quang Anh | Chiến | Việt Quang |
| **G0; T0–T2; P01–P05; sơ đồ WBS** | Chiến | Việt Quang | Quang Anh |
| **P06, P07, P12** | Quang Anh | Chiến | Việt Quang |
| **P08, P10, P11, P13** | Việt Quang | Quang Anh | Chiến |
| **P09 — RTM, bản lập Planning** | Chiến | Việt Quang | Quang Anh |
| **P09 — RTM, cập nhật kết quả trong Monitoring/Closing** | Quang Anh, sau bàn giao nguồn từ Chiến tại cổng Planning; vẫn cùng một RTM | Chiến | Việt Quang |
| **E01 — hồ sơ thiết kế/thực hiện/tích hợp** | Chiến | Việt Quang | Quang Anh |
| **E02, E03, E04 và EV/INDEX** | Quang Anh | Chiến | Việt Quang |
| **E05; M03; M04** | Việt Quang | Quang Anh | Chiến |
| **M01 — báo cáo tình hình** | Chiến, nhận bảng tính từ Việt Quang và chất lượng từ Quang Anh | Việt Quang | Quang Anh |
| **M02; M05** | Quang Anh | Chiến | Việt Quang |
| **M06 — hồ sơ xác nhận phạm vi** | Chiến chuẩn bị, cả ba cung cấp đầu ra/bằng chứng | Việt Quang | Quang Anh kiểm đủ hồ sơ; việc chấp nhận sản phẩm do người có thẩm quyền trong Charter |
| **C01 — báo cáo tổng kết** | Chiến, cả ba viết X_05 | Việt Quang | Quang Anh |
| **C02; C03; C04** | Quang Anh, mỗi chủ module giao nội dung/bằng chứng của mình | Chiến | Việt Quang |
| **G1 — nội dung báo cáo tổng hợp toàn bộ** | Chiến chịu trách nhiệm nội dung; Quang Anh ghép theo G0 và kiểm bố cục; Việt Quang kiểm phụ lục số liệu | Việt Quang | Quang Anh |
| **Rà lại Pre-project/Initiating khi có điểm ảnh hưởng Planning** | Chiến: Business Case/Charter; Việt Quang: số liệu và Assumption Log; Quang Anh: lợi ích và Stakeholder Register | Theo vòng của người phụ trách | Theo vòng của người phụ trách; không tự thay phê duyệt sponsor |

Người tổng hợp chịu trách nhiệm cuối **về bản soạn chung**; chủ module vẫn chịu trách nhiệm nội dung và số liệu mình cung cấp. RACI chi tiết cho gói công việc nằm ở P12, mỗi dòng chỉ có một Accountable. Thẩm quyền phê duyệt baseline, thay đổi vượt quyền và nghiệm thu sản phẩm vẫn theo Charter, khác xác nhận học thuật hoặc xác nhận nội bộ.

### 5.3. Phân công kiểm thử chéo và cách đọc bảng Excel

| Module được kiểm tra | Người chạy kiểm tra chéo | Người sửa | Người xác nhận lại |
| --- | --- | --- | --- |
| A | Việt Quang | Chiến | Quang Anh |
| B | Quang Anh | Việt Quang | Chiến |
| C | Chiến | Quang Anh | Việt Quang |
| Giao tiếp A–B–C | Chiến điều phối; mỗi người kiểm phần mình nhận từ module khác | Chủ thành phần gây lỗi, phối hợp đầu còn lại | Quang Anh tổng hợp kết quả vào M05/M02; các chủ giao tiếp xác nhận phần liên quan |

Trong Excel, dòng 29–31 mô tả người **thử module** ở cột công việc, còn cột F nêu người kiểm tra/xác nhận **phiếu kiểm tra được người đó lập**. Hai vòng này khác nhau. Bảng trên dùng vòng nghiệm chứng module đã ghi ở nội dung công việc: A do Việt Quang thử, Chiến sửa, Quang Anh xác nhận; tương tự cho B/C. Khi ghi M05 nên tách ba cột “Người thử — Người sửa — Người xác nhận lại” để tránh hiểu nhầm.

### 5.4. Việc giao ngay cho lượt đầu

| Người | Việc cần bắt đầu | Sản phẩm bàn giao lượt đầu |
| --- | --- | --- |
| **Chiến** | Rà A_01/A_02 và WBS chung; lập bảng ánh xạ mã; mở G0 và khung P01; liệt kê các điểm cần chốt A–B/C. | Hai bản A sẵn review; danh mục hồ sơ; đề xuất mã WBS/REQ thống nhất; bảng giao tiếp và các quyết định đang mở. |
| **Việt Quang** | Chuyển bản B vào B_01/B_02; cung cấp dữ liệu lịch/chi phí/rủi ro B; cùng Chiến đối soát tổng WBS; dựng khung P10/P11/P13. | Hai bản B cùng mẫu; bảng hoạt động/ước lượng có căn cứ; danh sách chênh lệch ngân sách và rủi ro cần xử lý. |
| **Quang Anh** | Chuyển bản C vào C_01/C_02; lập khung P06/P07/P12; mở INDEX bằng chứng; rà những bằng chứng sẵn có có thể dùng. | Hai bản C cùng mẫu; checklist chất lượng và kiểm tra chéo; danh mục bằng chứng có/chưa có; đề xuất lịch họp và năng lực nguồn lực. |

Chiến kiểm soát tính thống nhất của bộ hồ sơ; Việt Quang kiểm soát lịch và số liệu; Quang Anh kiểm soát chất lượng, bàn giao và đóng gói. Cả ba giữ trách nhiệm viết, giải thích, sửa và chứng minh module mình đến khi bộ tài liệu hoàn tất.
