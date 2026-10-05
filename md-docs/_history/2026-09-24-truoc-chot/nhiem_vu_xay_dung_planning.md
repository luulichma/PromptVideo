# Nhiệm vụ xây dựng bộ hồ sơ Planning

Phân công bám theo [phan-cong-theo-giai-doan.xlsx](outputs/01a0a492-hop-nhom/phan-cong-theo-giai-doan.xlsx), giai đoạn 3. Nội dung từng tài liệu theo bài giảng NDQ (`research/PM - NDQ/PM04`–`PM09`, `PM11`) và [quy tắc bắt buộc](research/01_Quy_tac_bat_buoc.md).

- **A — Chiến:** sản xuất video.
- **B — Việt Quang:** tài khoản và thuê bao.
- **C — Quang Anh:** quản trị và vận hành.

## 1. Cây thư mục

```
design-note/
├── md-docs/
│   ├── _template/
│   │   ├── 00_Document_Template_v1.0.md
│   │   ├── 01_Module_Input_Template_v1.0.md
│   │   └── 02_Change_Request_Form_v1.0.md
│   └── 02_Planning/
│       ├── _module-input/
│       │   ├── A_San_xuat_video/
│       │   │   ├── A_01_Yeu_cau_va_kiem_thu_v1.0.md
│       │   │   └── A_02_WBS_uoc_luong_rui_ro_v1.0.md
│       │   ├── B_Tai_khoan_thue_bao/
│       │   │   ├── B_01_Yeu_cau_va_kiem_thu_v1.0.md
│       │   │   └── B_02_WBS_uoc_luong_rui_ro_v1.0.md
│       │   └── C_Quan_tri_van_hanh/
│       │       ├── C_01_Yeu_cau_va_kiem_thu_v1.0.md
│       │       └── C_02_WBS_uoc_luong_rui_ro_v1.0.md
│       ├── 01_Project_Management_Plan_v1.0.md
│       ├── 02_Requirements_Specification_v1.0.md
│       ├── 03_Interface_Specification_v1.0.md
│       ├── 04_Project_Scope_Statement_v1.0.md
│       ├── 05_WBS_and_WBS_Dictionary_v1.0.md
│       ├── 06_Quality_Plan_and_Test_Cases_v1.0.md
│       ├── 07_Resource_and_Communication_Plan_v1.0.md
│       └── 08_Risk_Management_Plan_v1.0.md
└── official-docs/
    └── 02_Planning/
        ├── 01_Project_Management_Plan_v1.0.docx
        ├── 02_Requirements_Specification_v1.0.docx
        ├── 03_Interface_Specification_v1.0.docx
        ├── 04_Project_Scope_Statement_v1.0.docx
        ├── 05_WBS_and_WBS_Dictionary_v1.0.docx
        ├── 06_Quality_Plan_and_Test_Cases_v1.0.docx
        ├── 07_Resource_and_Communication_Plan_v1.0.docx
        ├── 08_Risk_Management_Plan_v1.0.docx
        ├── 09_Requirements_Traceability_Matrix_v1.0.xlsx
        ├── 10_Schedule_and_CPM_v1.0.xlsx
        ├── 11_Cost_Budget_Procurement_v1.0.xlsx
        ├── 12_RACI_and_Communication_Matrix_v1.0.xlsx
        └── 13_Risk_Register_v1.0.xlsx
```

## 2. Quy ước chung

| Loại | A | B | C | Dùng chung |
| --- | --- | --- | --- | --- |
| Yêu cầu chức năng | `RQ-A-nn` | `RQ-B-nn` | `RQ-C-nn` | — |
| Yêu cầu phi chức năng | `NF-A-nn` | `NF-B-nn` | `NF-C-nn` | `NF-G-nn` |
| Tình huống kiểm thử | `TC-A-nn` | `TC-B-nn` | `TC-C-nn` | `TC-I-nn` (tích hợp) |
| Nhánh WBS | `3.x` | `4.x` | `5.x` | `1` Quản lý dự án · `2` Kết nối chung · `6` Bàn giao |
| Rủi ro | `R-A-nn` | `R-B-nn` | `R-C-nn` | `R-G-nn` |

- Mỗi người chỉ sửa thư mục module của mình trong `_module-input/`.
- File `.xlsx` và `.docx` trong `official-docs/` chỉ do người tổng hợp sửa, để tránh xung đột git với file nhị phân.
- Muốn sửa dữ liệu của module khác thì báo chủ module, không tự sửa.
- Stakeholder Register và Assumption Log vẫn nằm ở `01_Initiating`. Khi Planning phát sinh giả định hoặc bên liên quan mới, cập nhật hai file đó, không tạo bản mới trong `02_Planning`.
- Mỗi tài liệu phân biệt rõ **phạm vi v2.1** với **phạm vi trình diễn**. Không ghi kết quả đo khi chưa đo.

## 3. Đầu vào theo module (cả ba người làm song song)

Cả hai file của mỗi module dùng chung mẫu `_template/01_Module_Input_Template_v1.0.md`.

### 3.1. `X_01_Yeu_cau_va_kiem_thu` — mỗi người làm file của mình

Mỗi file cần có:

1. **Yêu cầu chức năng.** Mã, mô tả, luồng chính, luồng ngoại lệ/lỗi, tiêu chí chấp nhận đo được.
2. **Yêu cầu phi chức năng.** Ghi ngưỡng số và môi trường đo.
3. **Đánh dấu phạm vi.** Mỗi yêu cầu ghi rõ: có trình diễn, hay chỉ nằm trong phạm vi v2.1 và chưa triển khai.
4. **Tình huống kiểm thử.** Mỗi yêu cầu có ít nhất một TC, gồm bước thử, dữ liệu, kết quả mong đợi, ngưỡng đạt.
5. **Phụ thuộc với module khác.** Module mình cần gì và cung cấp gì cho module khác. Chiến dùng mục này để viết file 03.

Nội dung riêng của từng module:

| Người | Nội dung riêng cần có |
| --- | --- |
| Chiến (A) | Nhập chữ/ảnh; mẫu; xem trước; xuất MP4 bằng WebCodecs; lưu/mở cục bộ. Tiêu chí tiếng Việt, tốc độ, bộ nhớ, riêng tư (nội dung không rời máy). Hỏi quyền B trước khi xuất; dùng mẫu của C. |
| Việt Quang (B) | Tài khoản; gói năm; quyền xuất; hạn mức (3 lượt miễn phí, watermark/720p, lượt 4 bị chặn); thanh toán/gia hạn; hóa đơn; 5 chỗ. Xử lý các trạng thái hết hạn, giao dịch trùng, xuất lỗi. Thanh toán giả lập phải được ghi nhãn. |
| Quang Anh (C) | Nạp mẫu và tài sản đồ họa; quyền quản trị; giám sát máy chủ (không chứa nội dung người dùng); ghi yêu cầu hỗ trợ; đo lợi ích sau bàn giao. Nêu rõ tác nhân, quyền hạn và đầu ra. |

### 3.2. `X_02_WBS_uoc_luong_rui_ro` — mỗi người làm file của mình

Mỗi file cần có:

1. **Nhánh WBS của module** (A: 3.x, B: 4.x, C: 5.x). Cấp thấp nhất là deliverable, không phải hành động. Mỗi gói 8–80 giờ. Các gói con cộng lại đủ 100% nhánh.
2. **Từ điển WBS cho từng gói.** Mã, mô tả, deliverable, tiêu chí chấp nhận, giả định/ràng buộc, người làm, mốc.
3. **Danh sách hoạt động.** Mỗi gói tách thành các hoạt động. Mỗi hoạt động ghi predecessor, loại quan hệ (FS/SS/FF), lead/lag, người làm.
4. **Ước lượng PERT.** O, M, P và `tE = (O + M + P) / 3`, kèm cơ sở ước lượng và độ tin cậy.
5. **Chi phí.** Giờ công, khoản tiền mặt, khoản cần thuê/mua kèm tiêu chí chọn.
6. **Rủi ro của module.** Mô tả theo dạng nguyên nhân → sự kiện → hậu quả; xác suất; tác động; dấu hiệu kích hoạt; cách phòng ngừa; phương án dự phòng.
7. **Tiêu chí chất lượng.** Ngưỡng đạt và người kiểm tra.

### 3.3. Kiểm tra chéo đầu vào

| File | Người kiểm tra | Người xác nhận |
| --- | --- | --- |
| A_01, A_02 | Việt Quang | Quang Anh |
| B_01, B_02 | Quang Anh | Chiến |
| C_01, C_02 | Chiến | Việt Quang |

## 4. Tài liệu tổng hợp

### 4.1. Chiến

| File | Việc cần làm | Lấy từ | Kiểm tra / Xác nhận |
| --- | --- | --- | --- |
| `_template/01_Module_Input_Template` | Tạo mẫu cho 6 file đầu vào theo mục 3.1 và 3.2, **làm trước tiên** | — | Việt Quang / Quang Anh |
| `_template/02_Change_Request_Form` | Mẫu đề nghị thay đổi: mô tả, lý do, tác động phạm vi/lịch/chi phí/rủi ro, người đề nghị, quyết định, người duyệt | PM08 | Việt Quang / Quang Anh |
| `02_Requirements_Specification` | Gom RQ/NF của A/B/C; thêm NF-G dùng chung; thống nhất cách viết; bỏ trùng lặp | A/B/C_01 | Việt Quang / Quang Anh |
| `03_Interface_Specification` | Chốt dữ liệu cảnh, định dạng mẫu (C → A), API hỏi quyền và hạn mức (A → B), ranh giới dữ liệu cục bộ và dữ liệu máy chủ; lập TC-I | Mục "phụ thuộc" trong A/B/C_01 | Việt Quang / Quang Anh |
| `04_Project_Scope_Statement` | Phạm vi dự án và sản phẩm, deliverable, phần **loại trừ**, tiêu chí chấp nhận, bảng phạm vi trình diễn so với v2.1 | 02, 03, Charter | Việt Quang / Quang Anh |
| `05_WBS_and_WBS_Dictionary` | Ghép nhánh 3/4/5; tự viết nhánh 1, 2, 6; kiểm quy tắc 100% và 8/80; vẽ sơ đồ cây | A/B/C_02 | Việt Quang / Quang Anh |
| `09_Requirements_Traceability_Matrix.xlsx` | Mỗi dòng: Req ID → mục tiêu → thiết kế/Interface → gói WBS → module mã → TC → trạng thái | 02, 05, 06 | Việt Quang / Quang Anh |
| `01_Project_Management_Plan` | Viết **sau cùng**. Mỗi chương là một kế hoạch thành phần tóm tắt và dẫn chiếu tới file 02–13; ghi 3 baseline; viết quy trình kiểm soát thay đổi (đề nghị → đánh giá → phê duyệt → ghi nhận); rà phạm vi, lịch, ngân sách không mâu thuẫn | Tất cả | Việt Quang / Quang Anh |
| `10_Schedule_and_CPM.xlsx` | Rà lịch tích hợp, chịu trách nhiệm lịch chung | 10 | — |
| `11_Cost_Budget_Procurement.xlsx` | Rà ngân sách hợp nhất | 11 | — |
| Xuất `.docx` 01–05 | Xuất theo mẫu môn học (bìa → xác nhận, lịch sử → mục lục) | md-docs | — |

### 4.2. Việt Quang

| File | Việc cần làm | Lấy từ | Kiểm tra / Xác nhận |
| --- | --- | --- | --- |
| `10_Schedule_and_CPM.xlsx` | Các tab: Milestone List · Activity List và thuộc tính (predecessor, FS/SS/FF, lead/lag) · PERT và cơ sở ước lượng · CPM (ES/EF/LS/LF, total/free float, đường găng) · Gantt · Lịch dự án. Không xếp việc vượt năng lực từng người. | A/B/C_02, 05 | Quang Anh / Chiến |
| `11_Cost_Budget_Procurement.xlsx` | Các tab: ước lượng bottom-up · cơ sở ước lượng · contingency và management reserve (tách riêng) · ngân sách theo thời gian (đường S) · nhu cầu vốn · mua/thuê và tiêu chí chọn. Tách tiền mặt với công sức. **Không** giao việc rà giấy phép phần mềm. | A/B/C_02, 10 | Quang Anh / Chiến |
| `08_Risk_Management_Plan` | Phương pháp; vai trò; RBS; định nghĩa thang xác suất và tác động; ma trận P×I; khẩu vị rủi ro; tần suất rà rủi ro | PM08 | Quang Anh / Chiến |
| `13_Risk_Register.xlsx` | Gom R-A/B/C và thêm R-G. Mỗi dòng có: P, I, điểm, chủ rủi ro, chiến lược, dấu hiệu kích hoạt, contingency, rủi ro còn lại và thứ cấp, EMV với rủi ro ưu tiên cao. Gửi con số dự phòng sang tab reserve của file 11. | A/B/C_02, 08 | Quang Anh / Chiến |
| Xuất `.docx` 08 | Xuất theo mẫu môn học | md-docs | — |

### 4.3. Quang Anh

| File | Việc cần làm | Lấy từ | Kiểm tra / Xác nhận |
| --- | --- | --- | --- |
| `06_Quality_Plan_and_Test_Cases` | Chỉ số chất lượng, ngưỡng đạt, môi trường đo; cách kiểm tra chéo (inspection và testing); người kiểm tra; bằng chứng cần lưu; CoQ; gom TC-A/B/C/I. Mỗi yêu cầu phải nối được tới ít nhất một TC. | A/B/C_01, 03 | Chiến / Việt Quang |
| `07_Resource_and_Communication_Plan` | Sơ đồ tổ chức nhóm; vai trò và thẩm quyền; Team Charter (quy tắc làm việc, cách ra quyết định, xử lý xung đột); lịch họp; cách báo cáo; kế hoạch tham gia của bên liên quan | Stakeholder Register, 05 | Chiến / Việt Quang |
| `12_RACI_and_Communication_Matrix.xlsx` | Các tab: RACI theo gói WBS (mỗi việc đúng một A) · nhu cầu nguồn lực và RBS · lịch nguồn lực · ma trận truyền thông (nội dung, người nhận, tần suất, push/pull/interactive, người chuẩn bị) · ma trận mức tham gia C/D | 05, 07, Stakeholder Register | Chiến / Việt Quang |
| Xuất `.docx` 06–07 | Xuất theo mẫu môn học | md-docs | — |

## 5. Thứ tự thực hiện

1. **Chiến** tạo `01_Module_Input_Template` và `02_Change_Request_Form`.
2. **Cả ba** viết `X_01` rồi `X_02` của module mình và kiểm tra chéo theo mục 3.3.
3. **Chiến** làm 02 → 03 → 04 → 05. Chốt Scope Baseline (04 + 05) trước khi làm lịch.
4. Làm song song:
   - **Việt Quang:** 10 → 11 → 08 → 13, rồi quay lại cập nhật reserve trong 11.
   - **Quang Anh:** 06 → 07 → 12.
5. **Chiến** làm 09 (RTM) sau khi có 06, rồi viết 01 (PMP) và rà tổng thể.
6. Mỗi người xuất `.docx` của mình. Cả nhóm rà lần cuối và cập nhật cột trạng thái trong `phan-cong-theo-giai-doan.xlsx`.
