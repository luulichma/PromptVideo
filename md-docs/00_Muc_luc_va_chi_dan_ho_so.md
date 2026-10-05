# Mục lục và chỉ dẫn bộ hồ sơ PromptVideo

**Cập nhật24/09/2026.** Bộ nguồn đã được chuẩn hóa theo quyết định của người dùng. Đây là hồ sơ làm việc; review của thành viên, actual và nghiệm thu sản phẩm phải có bằng chứng riêng.

Đọc [quyết định và hệ mã](00_Quyet_dinh_va_quy_uoc_ma.md) trước khi sửa. Dùng [feedback25đầu việc](../notes/meetings/feedback-va-giao-viec-hop-nhom-2026-09-24.md) cho cuộc họp. Có thể đọc [bản báo cáo ghép](00_Bao_cao_quan_ly_du_an_PromptVideo_v1.0.md) hoặc mở từng file dưới đây.

## 1. Những điểm đã chốt

Chiến phụ tráchA và tích hợp hồ sơ; ViệtQuang phụ tráchB/lịch/chi phí/rủi ro; QuangAnh phụ tráchC/chất lượng/nguồn lực/truyền thông/đóng gói. WBS6giai đoạn, xây dựngA4.2/B4.3/C4.4.32gói=599h (427hWP+172hPP); không lấy đó làmactual hoặcETC. ChọnCR-G-001 giữ phạm vi và điều chỉnh lịch/nguồn lực; tiền mặt vẫn3.5triệu.

Frontend79/79unitđạt; backend18đạt,42failmôi trườngDocker trên60ca. Không coi đó là nghiệm thu toànCharter. [EVINDEX](../evidence/INDEX.md) ghi nguồn, môi trường và phần chưa có bằng chứng.

## 2. Cây thư mục hiện hành

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

## 3. Tài liệu chung và nội dung

| Mã / file | Chứa gì | Người tổng hợp | Trạng thái |
| --- | --- | --- | --- |
| [P01 — 01_Project_Management_Plan_v1.0.md](<02_Planning/01_Project_Management_Plan_v1.0.md>) | Kế hoạch quản lý tích hợp: vai trò, phạm vi, lịch, chi phí, chất lượng, rủi ro và kiểm soát thay đổi. | Chiến | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [P02 — 02_Requirements_Specification_v1.0.md](<02_Planning/02_Requirements_Specification_v1.0.md>) | Đặc tả hợp nhất: đầy đủ yêu cầu, quy tắc, tiêu chí, ngoại lệ và ca thử từ ba module. | Chiến | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [P03 — 03_Interface_Specification_v1.0.md](<02_Planning/03_Interface_Specification_v1.0.md>) | Hợp đồng A–B, C–A, C–B; request/response/lỗi, hành vi đích so với mã hiện có; TC-I-01–06. | Chiến | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [P04 — 04_Project_Scope_Statement_v1.0.md](<02_Planning/04_Project_Scope_Statement_v1.0.md>) | Phạm vi đầy đủ và tập demo; đầu ra, loại trừ, giả định, điều kiện nghiệm thu. | Chiến | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [P05 — 05_WBS_and_WBS_Dictionary_v1.0.md](<02_Planning/05_WBS_and_WBS_Dictionary_v1.0.md>) | WBS32gói, từ điển, O/M/P, owner, tiêu chí, PP và quy tắc cộng không trùng. | Chiến | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [P06 — 06_Quality_Plan_and_Test_Cases_v1.0.md](<02_Planning/06_Quality_Plan_and_Test_Cases_v1.0.md>) | QA/QC, mục tiêu chất lượng, các mức kiểm thử, ngưỡng và điều kiện chuyển nghiệm thu. | Quang Anh | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [P07 — 07_Resource_and_Communication_Plan_v1.0.md](<02_Planning/07_Resource_and_Communication_Plan_v1.0.md>) | Vai trò, nguồn lực, công suất, lịch trao đổi, stakeholder và vòng review. | Quang Anh | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [P08 — 08_Risk_Management_Plan_v1.0.md](<02_Planning/08_Risk_Management_Plan_v1.0.md>) | Nhận diện, đánh giá, ứng phó và theo dõi rủi ro; phân biệt exposure/reserve/base. | Việt Quang | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [P09 — 09_Requirements_Traceability_Matrix_v1.0.xlsx](<../official-docs/02_Planning/09_Requirements_Traceability_Matrix_v1.0.xlsx>) | RTM65REQ/NF nối Charter, thiết kế, code, TC, trạng thái và nguồn. | Chiến | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [P10 — 10_Schedule_and_CPM_v1.0.xlsx](<../official-docs/02_Planning/10_Schedule_and_CPM_v1.0.xlsx>) | Ước lượng,35activities,CPMlogic và lịch san bằng WP; PP/cổng ngoài và giả định được tách rõ. | Việt Quang | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [P11 — 11_Cost_Budget_Procurement_v1.0.xlsx](<../official-docs/02_Planning/11_Cost_Budget_Procurement_v1.0.xlsx>) | Giờ/chi phí cơ hội, tiền mặt, mua/thuê, dự phòng và so sánh Charter; công thức giữ độ chính xác. | Việt Quang | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [P12 — 12_RACI_and_Communication_Matrix_v1.0.xlsx](<../official-docs/02_Planning/12_RACI_and_Communication_Matrix_v1.0.xlsx>) | RACI, nhu cầu/lịch nguồn lực, truyền thông và stakeholder engagement. | Quang Anh | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [P13 — 13_Risk_Register_v1.0.xlsx](<../official-docs/02_Planning/13_Risk_Register_v1.0.xlsx>) | 25rủi ro: nguyên nhân/sự kiện/hậu quả, P/I, EMV, owner, trigger và ứng phó. | Việt Quang | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [E01 — 01_Implementation_and_Integration_Record_v1.0.md](<03_Executing/01_Implementation_and_Integration_Record_v1.0.md>) | Thiết kế/thực hiện đã có, những phần còn thiếu, các bước tích hợp và nhật ký có nguồn. | Chiến | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [E02 — 02_Meeting_and_Decision_Log_v1.0.md](<03_Executing/02_Meeting_and_Decision_Log_v1.0.md>) | Quyết định có căn cứ, agenda họp và phần để ghi kết quả họp thật. | Quang Anh | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [E03 — 03_Installation_User_and_Operations_Guide_v1.0.md](<03_Executing/03_Installation_User_and_Operations_Guide_v1.0.md>) | Cài đặt, chạy, sử dụng, xử lý sự cố và điều kiện vận hành/bàn giao. | Quang Anh | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [E04 — 04_Quality_Assurance_and_Lessons_Learned_v1.0.md](<03_Executing/04_Quality_Assurance_and_Lessons_Learned_v1.0.md>) | Kết quả rà quy trình/tài liệu, điều kiện phát hành và bài học áp dụng. | Quang Anh | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [E05 — 05_Work_Log_and_Actuals_v1.0.xlsx](<../official-docs/03_Executing/05_Work_Log_and_Actuals_v1.0.xlsx>) | Sổ giờ/chi phí thực tế và bằng chứng; giữ trống actual chưa được cung cấp. | Việt Quang | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [M01 — 01_Project_Status_Report_v1.0.md](<04_Monitoring_and_Controlling/01_Project_Status_Report_v1.0.md>) | Báo cáo trạng thái kỳ: scope, forecast, chất lượng, vướng mắc và việc tiếp theo. | Việt Quang | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [M02 — 02_Quality_and_Test_Report_v1.0.md](<04_Monitoring_and_Controlling/02_Quality_and_Test_Report_v1.0.md>) | Báo cáo kiểm thử có kết quả thật và giới hạn kết luận; phần chưa có bằng chứng. | Quang Anh | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [M03 — 03_Issue_and_Change_Log_v1.0.xlsx](<../official-docs/04_Monitoring_and_Controlling/03_Issue_and_Change_Log_v1.0.xlsx>) | Sổ5issue và CR-G-001, owner, tác động, quyết định và điều kiện đóng. | Việt Quang | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [M04 — 04_Performance_and_EVM_v1.0.xlsx](<../official-docs/04_Monitoring_and_Controlling/04_Performance_and_EVM_v1.0.xlsx>) | Theo dõi hiệu suất/EVM có điều kiện; không tính khi thiếu baseline hoặc actual. | Việt Quang | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [M05 — 05_Test_Results_and_Defects_v1.0.xlsx](<../official-docs/04_Monitoring_and_Controlling/05_Test_Results_and_Defects_v1.0.xlsx>) | Kết quả test/lỗi và yêu cầu kiểm lại; phân biệt Pass,Fail môi trường,Blocked,NotRun. | Quang Anh | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [M06 — 06_Scope_Validation_Record_v1.0.md](<04_Monitoring_and_Controlling/06_Scope_Validation_Record_v1.0.md>) | Hồ sơ chuẩn bị ValidateScope; chưa ký nghiệm thu khi chưa đủQC. | Chiến | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [C01 — 01_Final_Project_Report_v1.0.md](<05_Closing/01_Final_Project_Report_v1.0.md>) | Tổng kết đợt chuẩn hóa hồ sơ, so sánh mục tiêu/kết quả, giới hạn và lợi ích cần theo dõi. | Chiến | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [C02 — 02_Handover_and_Outstanding_Items_v1.0.md](<05_Closing/02_Handover_and_Outstanding_Items_v1.0.md>) | Danh mục bàn giao và tồn đọng có owner, bằng chứng đóng và người tiếp nhận. | Quang Anh | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [C03 — 03_Lessons_Learned_Report_v1.0.md](<05_Closing/03_Lessons_Learned_Report_v1.0.md>) | Bài học có nguyên nhân, hành động áp dụng và người duy trì. | Quang Anh | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |
| [C04 — 04_Presentation_and_Demo_Script_v1.0.md](<05_Closing/04_Presentation_and_Demo_Script_v1.0.md>) | Dàn ý trình bày, lời dẫn và kịch bản demo có điều kiện. | Quang Anh | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |

## 4. Năm đầu vào của mỗi module

| File | Nội dung | Người chịu trách nhiệm |
| --- | --- | --- |
|X_01|Yêu cầu, quy tắc, tiêu chí, TC và truy vết|A:Chiến; B:ViệtQuang; C:QuangAnh |
|X_02|WBS/dictionary, activity, O/M/P, chi phí, rủi ro|Chủ module; VQ tổng hợp số liệu |
|X_03|Thiết kế/thực hiện, hướng dẫn và nhật ký có nguồn|Chủ module |
|X_04|Trạng thái, test/lỗi, issue/change và việc còn lại|Chủ module; người review cung cấp kết quả thật |
|X_05|Kết quả bàn giao, tồn đọng/owner, bài học/demo|Chủ module; QA đóng gói |

Mỗi người sửa module của mình trước; người tổng hợp ghép và giải quyết mâu thuẫn, không viết một bộ số liệu độc lập. Vòng kiểm traA→ViệtQuang,B→QuangAnh,C→Chiến; xác nhận nội bộ lần lượtQuangAnh,Chiến,ViệtQuang.

## 5. Nguồn cấp cao, lịch và trạng thái phát hành

BusinessCase/BenefitManagementPlanv2.2; Charter/AssumptionLogv2.1; StakeholderRegisterv1.0 ởofficial-docs là nguồn đối chiếu. Pre-project vàInitiating đã có; chưa suy ra đã ký chỉ từ tên thư mục. Phần nợ kiểm tra nguồn cấp cao được giữ riêng trongno-tai-lieu.md.

Lịch hồ sơ:DOC-01ngày26/09 đầu vào;DOC-02ngày29/09 Planning;DOC-03ngày02/10 bằng chứng;DOC-04ngày05/10 bàn giao dự thảo;DOC-05ngày07/10 review.10h/người/tuần là giả định. LịchCharterM0–M7 được giữ để đối chiếu; không dùng lịch hồ sơ để hứa hoàn thiện sản phẩm trong14ngày.

Markdown là nguồn sửa;9workbook trongoutputs là sổ làm việc. Bản ghépG1 làMarkdown dùng đọc/họp. XuấtDOCX/PPTX và bảnofficial là bước đóng gói sau review; đợt này không coi bản chưa xuất là đã phát hành. Sơ đồWBS đã dựng lại theo32gói;_history chứa bản cũ, không dùng làm nguồn hiện hành.

## 6. Việc thực tế còn phải hoàn thành

ISS-G-001complete/quota;ISS-G-002snapshotmẫu;ISS-G-003checkoutidempotency;ISS-G-004Docker;ISS-G-005actual/baseline. CácPP và phép thửCharter vẫn mở. C02 có owner và điều kiện đóng. Chưa có xác nhận review/giờ thực tế/chữ ký nghiệm thu thì giữ trạng thái chưa có; không cần lựa chọn lại hệ mã và vai trò đã chốt.
