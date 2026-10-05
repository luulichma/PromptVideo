# Review — P09 Requirements Traceability Matrix v1.0 (xlsx)

| Tài liệu | Luật | Người review | Ngày | Kết luận |
| --- | --- | --- | --- | --- |
| [09_Requirements_Traceability_Matrix_v1.0.xlsx](../../official-docs/02_Planning/09_Requirements_Traceability_Matrix_v1.0.xlsx) | `knowledge/rules/07_scope.md` | Claude (skill `pm-ndq`), chờ Chiến xác nhận | 2026-10-05 | 0 🔴 thiếu · 1 🔴 một phần · 0 🟡 · 4 🔵 |

Cách review: trích sheet `RTM` bằng script (đọc XML trong xlsx), đối chiếu với P02.

- 65 dòng (64 REQ/NF của P02 + NF-G-01), không trùng mã, không thiếu mã so với P02.
- 10 cột: Mã yêu cầu · Nội dung · Mục tiêu/nguồn · Thiết kế · Mã nguồn · Mã ca thử · Trạng thái · WBS · Phạm vi · Bằng chứng.

## Checklist

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| RTM nối yêu cầu với objective và deliverable (PM05:37) | 🔴 | Một phần | cột "Mục tiêu / nguồn", "Mã ca thử" | 58/65 dòng nối RQ/OB/NF của Charter. 7 dòng nối Charter §5, BMP hoặc ngưỡng nội bộ: NF-B-07, REQ-C-04, REQ-C-06, REQ-C-07, REQ-C-09, NF-C-01, NF-C-02. NF-A-09 trống cột ca thử. Giống P02; sửa ở nguồn module rồi sinh lại. |
| Cột mẫu Req ID · Description · Business Objective · Design · Code · TC · Status (PM05:38) | 🟡 | Đạt | hàng 7 | Có đủ, thêm WBS, Phạm vi, Bằng chứng. |
| Mã REQ/NF/TC theo DEC-004 | 🔵 | Đạt | — | — |

## Gợi ý khác (🔵)

1. Cột "Trạng thái theo bằng chứng" có 47 cách ghi khác nhau ("Có code + test xanh", "Có mã/test", "Có code/test nguồn"…). Chuẩn hoá về một danh sách cố định (ví dụ: Chưa làm · Có mã · Có test đơn vị · Pass tích hợp · Accepted) để lọc và đếm được.
2. Cột "Bằng chứng" giống nhau ở cả 65 dòng ("Chưa có biên bản chạy độc lập…"); thay bằng mã EV-nnn khi có, để trống khi chưa.
3. Cột "Thiết kế" còn đường dẫn cũ `plan-note/01`, `plan-note/04`; sau P2 là `notes/mvp-plan/…`. Có chữ dính "đạt18 cases".
4. DEC-014 ghi "mọi docx/xlsx sinh từ Markdown, kể cả 9 workbook", nhưng không có file md nguồn cho P09; dữ liệu nằm trong `md-docs/_data/*.json`. Ghi rõ nguồn của workbook trong DEC-014 hoặc trong file.
