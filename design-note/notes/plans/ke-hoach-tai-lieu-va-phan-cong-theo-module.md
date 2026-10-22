# Kế hoạch tài liệu và phân công theo module — đã chốt

**Ngày cập nhật 24/09/2026.** Thực hiện theo quyền quyết định người dùng đã giao. Mỗi người xây một module xuyên suốt, sau đó ghép thành bộ hồ sơ. Pre-project và Initiating đã có; ưu tiên Planning và hồ sơ thực hiện/kiểm soát/bàn giao.

## 1. Các file cần làm và trạng thái hiện tại

Các Markdown và 9 workbook trong cây dưới đây đã được tạo/cập nhật. Bản xuất DOCX/PPTX chính thức là bước sau khi review, không được ghi là đã phát hành.

```text
PromptVideo/
├── md-docs/
│   ├── 00_Muc_luc_va_chi_dan_ho_so.md
│   ├── 00_Quyet_dinh_va_quy_uoc_ma.md
│   ├── 00_Bao_cao_quan_ly_du_an_PromptVideo_v1.0.md
│   ├── _template/  (T0, T1, T2)
│   ├── _data/  (dữ liệu chuẩn và kết quả kiểm workbook)
│   ├── _history/  (nguồn cũ để truy vết)
│   ├── 02_Planning/
│   │   ├── 01_Project_Management_Plan_v1.0.md
│   │   ├── 02_Requirements_Specification_v1.0.md
│   │   ├── 03_Interface_Specification_v1.0.md
│   │   ├── 04_Project_Scope_Statement_v1.0.md
│   │   ├── 05_WBS_and_WBS_Dictionary_v1.0.md
│   │   ├── 06_Quality_Plan_and_Test_Cases_v1.0.md
│   │   ├── 07_Resource_and_Communication_Plan_v1.0.md
│   │   ├── 08_Risk_Management_Plan_v1.0.md
│   │   ├── _module-input/A_San_xuat_video/A_01_Yeu_cau_va_kiem_thu_v1.0.md
│   │   ├── _module-input/A_San_xuat_video/A_02_WBS_uoc_luong_rui_ro_v1.0.md
│   │   ├── _module-input/B_Tai_khoan_thue_bao/B_01_Yeu_cau_va_kiem_thu_v1.0.md
│   │   ├── _module-input/B_Tai_khoan_thue_bao/B_02_WBS_uoc_luong_rui_ro_v1.0.md
│   │   ├── _module-input/C_Quan_tri_van_hanh/C_01_Yeu_cau_va_kiem_thu_v1.0.md
│   │   ├── _module-input/C_Quan_tri_van_hanh/C_02_WBS_uoc_luong_rui_ro_v1.0.md
│   │   └── 05_WBS_PromptVideo.puml / .png
│   ├── 03_Executing/
│   │   ├── 01_Implementation_and_Integration_Record_v1.0.md
│   │   ├── 02_Meeting_and_Decision_Log_v1.0.md
│   │   ├── 03_Installation_User_and_Operations_Guide_v1.0.md
│   │   ├── 04_Quality_Assurance_and_Lessons_Learned_v1.0.md
│   │   ├── _module-input/A_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md
│   │   ├── _module-input/B_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md
│   │   ├── _module-input/C_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md
│   ├── 04_Monitoring_and_Controlling/
│   │   ├── 01_Project_Status_Report_v1.0.md
│   │   ├── 02_Quality_and_Test_Report_v1.0.md
│   │   ├── 06_Scope_Validation_Record_v1.0.md
│   │   ├── _module-input/A_04_Theo_doi_kiem_thu_va_thay_doi_v1.0.md
│   │   ├── _module-input/B_04_Theo_doi_kiem_thu_va_thay_doi_v1.0.md
│   │   ├── _module-input/C_04_Theo_doi_kiem_thu_va_thay_doi_v1.0.md
│   │   ├── change-requests/CR-G-001_Dieu_chinh_lich_va_nguon_luc.md
│   ├── 05_Closing/
│   │   ├── 01_Final_Project_Report_v1.0.md
│   │   ├── 02_Handover_and_Outstanding_Items_v1.0.md
│   │   ├── 03_Lessons_Learned_Report_v1.0.md
│   │   ├── 04_Presentation_and_Demo_Script_v1.0.md
│   │   ├── _module-input/A_05_Ket_qua_ban_giao_va_bai_hoc_v1.0.md
│   │   ├── _module-input/B_05_Ket_qua_ban_giao_va_bai_hoc_v1.0.md
│   │   ├── _module-input/C_05_Ket_qua_ban_giao_va_bai_hoc_v1.0.md
├── evidence/INDEX.md + 2026-09-24/
└── official-docs/  (docx/xlsx; Pre-project/Initiating hiện hữu; 9 workbook làm việc chưa phát hành)
    ├── 02_Planning/09_Requirements_Traceability_Matrix_v1.0.xlsx
    ├── 02_Planning/10_Schedule_and_CPM_v1.0.xlsx
    ├── 02_Planning/11_Cost_Budget_Procurement_v1.0.xlsx
    ├── 02_Planning/12_RACI_and_Communication_Matrix_v1.0.xlsx
    ├── 02_Planning/13_Risk_Register_v1.0.xlsx
    ├── 03_Executing/05_Work_Log_and_Actuals_v1.0.xlsx
    ├── 04_Monitoring_and_Controlling/03_Issue_and_Change_Log_v1.0.xlsx
    ├── 04_Monitoring_and_Controlling/04_Performance_and_EVM_v1.0.xlsx
    └── 04_Monitoring_and_Controlling/05_Test_Results_and_Defects_v1.0.xlsx
```

## 2. Từng tài liệu chứa gì

| Mã / tài liệu | Nội dung | Người tổng hợp |
| --- | --- | --- |
| [P01](<../../md-docs/02_Planning/01_Project_Management_Plan_v1.0.md>) | Kế hoạch quản lý tích hợp: vai trò, phạm vi, lịch, chi phí, chất lượng, rủi ro và kiểm soát thay đổi. | Chiến |
| [P02](<../../md-docs/02_Planning/02_Requirements_Specification_v1.0.md>) | Đặc tả hợp nhất: đầy đủ yêu cầu, quy tắc, tiêu chí, ngoại lệ và ca thử từ ba module. | Chiến |
| [P03](<../../md-docs/02_Planning/03_Interface_Specification_v1.0.md>) | Hợp đồng A–B, C–A, C–B; request/response/lỗi, hành vi đích so với mã hiện có; TC-I-01–06. | Chiến |
| [P04](<../../md-docs/02_Planning/04_Project_Scope_Statement_v1.0.md>) | Phạm vi đầy đủ và tập demo; đầu ra, loại trừ, giả định, điều kiện nghiệm thu. | Chiến |
| [P05](<../../md-docs/02_Planning/05_WBS_and_WBS_Dictionary_v1.0.md>) | WBS 32 gói, từ điển, O/M/P, owner, tiêu chí, PP và quy tắc cộng không trùng. | Chiến |
| [P06](<../../md-docs/02_Planning/06_Quality_Plan_and_Test_Cases_v1.0.md>) | QA/QC, mục tiêu chất lượng, các mức kiểm thử, ngưỡng và điều kiện chuyển nghiệm thu. | Quang Anh |
| [P07](<../../md-docs/02_Planning/07_Resource_and_Communication_Plan_v1.0.md>) | Vai trò, nguồn lực, công suất, lịch trao đổi, stakeholder và vòng review. | Quang Anh |
| [P08](<../../md-docs/02_Planning/08_Risk_Management_Plan_v1.0.md>) | Nhận diện, đánh giá, ứng phó và theo dõi rủi ro; phân biệt exposure/reserve/base. | Việt Quang |
| [P09](<../../official-docs/02_Planning/09_Requirements_Traceability_Matrix_v1.0.xlsx>) | RTM 65 REQ/NF nối Charter, thiết kế, code, TC, trạng thái và nguồn. | Chiến |
| [P10](<../../official-docs/02_Planning/10_Schedule_and_CPM_v1.0.xlsx>) | Ước lượng, 35 activities, CPM logic và lịch san bằng WP; PP/cổng ngoài và giả định được tách rõ. | Việt Quang |
| [P11](<../../official-docs/02_Planning/11_Cost_Budget_Procurement_v1.0.xlsx>) | Giờ/chi phí cơ hội, tiền mặt, mua/thuê, dự phòng và so sánh Charter; công thức giữ độ chính xác. | Việt Quang |
| [P12](<../../official-docs/02_Planning/12_RACI_and_Communication_Matrix_v1.0.xlsx>) | RACI, nhu cầu/lịch nguồn lực, truyền thông và stakeholder engagement. | Quang Anh |
| [P13](<../../official-docs/02_Planning/13_Risk_Register_v1.0.xlsx>) | 25 rủi ro: nguyên nhân/sự kiện/hậu quả, P/I, EMV, owner, trigger và ứng phó. | Việt Quang |
| [E01](<../../md-docs/03_Executing/01_Implementation_and_Integration_Record_v1.0.md>) | Thiết kế/thực hiện đã có, những phần còn thiếu, các bước tích hợp và nhật ký có nguồn. | Chiến |
| [E02](<../../md-docs/03_Executing/02_Meeting_and_Decision_Log_v1.0.md>) | Quyết định có căn cứ, agenda họp và phần để ghi kết quả họp thật. | Quang Anh |
| [E03](<../../md-docs/03_Executing/03_Installation_User_and_Operations_Guide_v1.0.md>) | Cài đặt, chạy, sử dụng, xử lý sự cố và điều kiện vận hành/bàn giao. | Quang Anh |
| [E04](<../../md-docs/03_Executing/04_Quality_Assurance_and_Lessons_Learned_v1.0.md>) | Kết quả rà quy trình/tài liệu, điều kiện phát hành và bài học áp dụng. | Quang Anh |
| [E05](<../../official-docs/03_Executing/05_Work_Log_and_Actuals_v1.0.xlsx>) | Sổ giờ/chi phí thực tế và bằng chứng; giữ trống actual chưa được cung cấp. | Việt Quang |
| [M01](<../../md-docs/04_Monitoring_and_Controlling/01_Project_Status_Report_v1.0.md>) | Báo cáo trạng thái kỳ: scope, forecast, chất lượng, vướng mắc và việc tiếp theo. | Việt Quang |
| [M02](<../../md-docs/04_Monitoring_and_Controlling/02_Quality_and_Test_Report_v1.0.md>) | Báo cáo kiểm thử có kết quả thật và giới hạn kết luận; phần chưa có bằng chứng. | Quang Anh |
| [M03](<../../official-docs/04_Monitoring_and_Controlling/03_Issue_and_Change_Log_v1.0.xlsx>) | Sổ 5 issue và CR-G-001, owner, tác động, quyết định và điều kiện đóng. | Việt Quang |
| [M04](<../../official-docs/04_Monitoring_and_Controlling/04_Performance_and_EVM_v1.0.xlsx>) | Theo dõi hiệu suất/EVM có điều kiện; không tính khi thiếu baseline hoặc actual. | Việt Quang |
| [M05](<../../official-docs/04_Monitoring_and_Controlling/05_Test_Results_and_Defects_v1.0.xlsx>) | Kết quả test/lỗi và yêu cầu kiểm lại; phân biệt Pass, Fail môi trường, Blocked, Not Run. | Quang Anh |
| [M06](<../../md-docs/04_Monitoring_and_Controlling/06_Scope_Validation_Record_v1.0.md>) | Hồ sơ chuẩn bị Validate Scope; chưa ký nghiệm thu khi chưa đủ QC. | Chiến |
| [C01](<../../md-docs/05_Closing/01_Final_Project_Report_v1.0.md>) | Tổng kết đợt chuẩn hóa hồ sơ, so sánh mục tiêu/kết quả, giới hạn và lợi ích cần theo dõi. | Chiến |
| [C02](<../../md-docs/05_Closing/02_Handover_and_Outstanding_Items_v1.0.md>) | Danh mục bàn giao và tồn đọng có owner, bằng chứng đóng và người tiếp nhận. | Quang Anh |
| [C03](<../../md-docs/05_Closing/03_Lessons_Learned_Report_v1.0.md>) | Bài học có nguyên nhân, hành động áp dụng và người duy trì. | Quang Anh |
| [C04](<../../md-docs/05_Closing/04_Presentation_and_Demo_Script_v1.0.md>) | Dàn ý trình bày, lời dẫn và kịch bản demo có điều kiện. | Quang Anh |

Mỗi module có X_01 yêu cầu/test, X_02 WBS/ước lượng/rủi ro, X_03 thiết kế/thực hiện, X_04 theo dõi/test/change, X_05 bàn giao/bài học. Cây trên chỉ rõ vị trí từng file. G0 quản lý mục lục/trạng thái; G1 là bản đọc liền từ các tài liệu chung; T0/T1/T2 là mẫu.

## 3. Phân công đã quyết định

| Người | Chủ module | Phần chung | Kiểm tra chéo |
| --- | --- | --- | --- |
|Nguyễn Thế Chiến|A — sản xuất video|PMP, yêu cầu, giao tiếp, phạm vi, WBS, RTM, tổng kết|Kiểm C |
|Nguyễn Việt Quang|B — tài khoản/thuê bao|Lịch/CPM, chi phí, rủi ro, actual/EVM|Kiểm A |
|Phạm Quang Anh|C — quản trị/vận hành|Chất lượng, nguồn lực, truyền thông, đóng gói|Kiểm B |

Không còn phần đề xuất chờ chọn. WBS/REQ/TC/risk/interface dùng [registry](../../md-docs/00_Quyet_dinh_va_quy_uoc_ma.md). Mỗi người chịu trách nhiệm sửa nội dung mình; người tổng hợp ghép nguồn, không làm thay toàn bộ module. [Feedback 25 đầu việc](../meetings/feedback-va-giao-viec-hop-nhom-2026-09-24.md) ghi rõ lý do, đã sửa và việc còn phải làm thật.

## 4. Lịch, công sức và điều kiện hoàn tất

DOC-01:26/09; DOC-02:29/09; DOC-03:02/10; DOC-04:05/10; DOC-05:07/10. Năng lực giả định 10h/người/tuần. Forecast 599h giữ toàn phạm vi, gồm 427h WP và 172h PP; chọn CR-G-001 điều chỉnh lịch/nguồn lực. Tiền mặt 3.5 triệu giữ nguyên; 599h không phải actual/ETC.

Mã/link/số liệu đã được rà; review thành viên, actual, TC-I/HAR và các phép thử Charter còn thiếu vẫn giữ rõ trong [G0](../../md-docs/00_Muc_luc_va_chi_dan_ho_so.md) và C02. Hồ sơ hiện là Working Draft, không ký nghiệm thu thay người có thẩm quyền.

## 5. Phần nợ nguồn cấp cao

Pre-project/Initiating đã được ghi riêng và thực hiện sau theo yêu cầu trước đó. Giữ [sổ nợ tài liệu](no-tai-lieu.md); lần này đã thống nhất phiên bản nguồn, mã và forecast để không tiếp tục lan sai lệch. Bản kế hoạch trước khi chốt được lưu tại md-docs/_history/2026-09-24-truoc-chot.
