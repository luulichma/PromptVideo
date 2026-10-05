<!--
  MẪU ĐỀ NGHỊ THAY ĐỔI (Change Request) — theo PM08:96-103 (Perform Integrated Change Control).

  Quy tắc:
  - Mọi thay đổi scope baseline, schedule baseline hoặc cost baseline, kể cả hành động khắc
    phục và phòng ngừa, phải có một phiếu này. Chỉ được làm sau khi CCB duyệt.
  - Phiếu bị từ chối hoặc hoãn vẫn ghi vào Change Log.
  - Baseline chỉ đổi từ mốc hiện tại trở đi, không sửa số liệu quá khứ.
  - Dùng management reserve thì bắt buộc có phiếu và Nhà tài trợ duyệt.
  - Tên file: CR-<nnn>_<tom-tat>.md, lưu trong 04_Monitoring_and_Controlling/change-requests/.
  - Mã CR-nnn không cấp lại.
-->

<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                       |                                     |
| --------------------- | ----------------------------------- |
| **Nhóm tiến trình**   | Monitoring and Controlling           |
| **Tên tài liệu**      | Đề nghị thay đổi `<<CR-nnn>>` — `<<Tóm tắt>>` |
| **Phiên bản**         | Ver. 1.0                             |
| **Nhóm thực hiện**    | Nhóm 02                              |
| **Ngày phát hành**    | `<<YYYY-MM-DD>>`                     |
| **Trạng thái**        | Đã gửi / Đang đánh giá / Đã duyệt / Hoãn / Từ chối |

<div style="page-break-after: always"></div>

## Xác nhận

| Người đề nghị    | Người đánh giá tác động | Người phê duyệt (CCB) |
| ---------------- | ----------------------- | --------------------- |
| `<<Họ và tên>>`  | `<<Họ và tên>>`         | `<<Họ và tên>>`       |

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| -- | --------- | ------------- | -------------- | ----------------- | --------------- | --------------- |
| 1  | Ver 1.0   | `<<YYYY-MM-DD>>` | Tạo mới | Lập đề nghị | `<<Họ và tên>>` | `<<Họ và tên>>` |

<div style="page-break-after: always"></div>

## 1. Thông tin đề nghị

| Trường | Nội dung |
| --- | --- |
| Mã | `<<CR-nnn>>` |
| Ngày đề nghị | `<<YYYY-MM-DD>>` |
| Người đề nghị | `<<Họ và tên — vai trò>>` |
| Module / nhánh WBS | `<<A 3.x / B 4.x / C 5.x / chung>>` |
| Loại | Thay đổi phạm vi · Hành động khắc phục · Hành động phòng ngừa · Sửa lỗi · Cập nhật tài liệu |
| Mức khẩn | Thường / Gấp (ghi lý do) |

## 2. Mô tả thay đổi

**Hiện trạng:** `<<baseline đang ghi gì; dẫn mã REQ/NF/WBS và file>>`

**Đề nghị:** `<<muốn đổi thành gì; đo được>>`

## 3. Lý do

`<<vấn đề hoặc cơ hội; bằng chứng (test, số đo, issue)>>`

## 4. Đánh giá tác động

| Khía cạnh | Tác động | Chi tiết |
| --- | --- | --- |
| Phạm vi | Không / Có | `<<REQ, gói WBS, deliverable bị ảnh hưởng; có đụng RQ-13 → RQ-17 không>>` |
| Lịch | Không / Có | `<<mốc bị dời; có trên đường găng không>>` |
| Chi phí | Không / Có | `<<± giờ công; ± tiền mặt; dùng contingency hay management reserve>>` |
| Chất lượng | Không / Có | `<<TC thêm/sửa/bỏ; ngưỡng đổi>>` |
| Rủi ro | Không / Có | `<<rủi ro mới, rủi ro thay đổi P/I>>` |
| Module khác | Không / Có | `<<hợp đồng file 03 bị ảnh hưởng; chủ module đã được hỏi>>` |

**Phương án khác đã xét:** `<<kể cả phương án không đổi gì>>`

## 5. Quyết định của CCB

| Trường | Nội dung |
| --- | --- |
| Quyết định | Duyệt / Duyệt có điều kiện / Hoãn đến `<<ngày>>` / Từ chối |
| Lý do | `<<...>>` |
| Điều kiện (nếu có) | `<<...>>` |
| Người phê duyệt | `<<Họ và tên — thẩm quyền>>` |
| Ngày quyết định | `<<YYYY-MM-DD>>` |

## 6. Thực hiện và cập nhật baseline

| Việc | Người làm | Hạn | Xong |
| --- | --- | --- | --- |
| Ghi Change Log | `<<>>` | `<<>>` | ☐ |
| Cập nhật tài liệu bị ảnh hưởng (liệt kê file, mục) | `<<>>` | `<<>>` | ☐ |
| Cập nhật baseline từ mốc `<<>>` trở đi | `<<>>` | `<<>>` | ☐ |
| Báo các bên liên quan | `<<>>` | `<<>>` | ☐ |
