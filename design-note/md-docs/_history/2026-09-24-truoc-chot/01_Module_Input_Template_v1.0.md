<!--
  MẪU ĐẦU VÀO MODULE — dùng chung cho X_01 và X_02 (X = A, B hoặc C).

  Cách dùng:
  1. Sao file này hai lần vào `02_Planning/_module-input/<X>_<Ten_module>/`:
       X_01_Yeu_cau_va_kiem_thu_v1.0.md    → giữ PHẦN I, xoá PHẦN II
       X_02_WBS_uoc_luong_rui_ro_v1.0.md   → giữ PHẦN II, xoá PHẦN I
  2. Điền mọi chỗ `<<...>>`. Soát trước khi nộp: grep -n '<<' <file>
  3. Xoá các khối chú thích <!-- ... --> khi nộp.
  4. Bản mẫu đã điền đầy đủ: nhánh A (`A_San_xuat_video/A_01…`, `A_02…`).

  Quy ước mã (nhiem_vu_xay_dung_planning.md §2; tiền tố yêu cầu và mã WBS chờ QĐ-03, QĐ-04):
    Yêu cầu chức năng   REQ-X-nn      Quy tắc cứng     QT-X-n  (không dùng RQ-, trùng Charter RQ-01…17)
    Phi chức năng       NF-X-nn       Dùng chung       NF-G-nn
    Tình huống kiểm thử TC-X-nn       Tích hợp         TC-I-nn (chỉ đề xuất; Chiến chốt ở file 03)
    Nhánh WBS           A 3.x · B 4.x · C 5.x
    Rủi ro              R-X-nn
  Mã đã bỏ không cấp lại; ghi "không dùng" tại chỗ.

  Lỗi đã gặp ở bản B, C, KHÔNG lặp lại:
  - Dùng mã WBS 7.x/8.x hoặc chia giờ từ mốc 450 h. → Tính giờ từ dưới lên.
  - O và P cách đều M nên tE = M. → O/M/P lệch theo rủi ro thật, ghi cơ sở và độ tin cậy.
  - Ghi "đã kiểm chứng" không kèm test hoặc lệnh. → Status trỏ tới tên test/lệnh và ngày chạy.
  - Ghi số đo khi chưa đo. → Chưa đo thì ghi "chưa đo".
  - Tự viết TC cho module khác. → Chỉ viết TC của module mình.
  - Thêm tính năng ngoài phạm vi (âm thanh, AI, khung dọc…). → Không thêm; muốn thêm thì lập Change Request.
  - RACI một việc có nhiều A, hoặc đảo cặp kiểm tra chéo. → Đúng một A; cặp theo bảng phân công.
  - Link tương đối sai. → Tính link từ thư mục chứa file.
  - Giao việc rà soát giấy phép phần mềm. → Không giao.
-->

<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                       |                                     |
| --------------------- | ----------------------------------- |
| **Nhóm tiến trình**   | Planning                             |
| **Tên tài liệu**      | `<<X_01 Yêu cầu và kiểm thử / X_02 WBS, ước lượng và rủi ro>>` — Nghiệp vụ `<<X — Tên nghiệp vụ>>` |
| **Phiên bản**         | Ver. 1.0                             |
| **Nhóm thực hiện**    | Nhóm 02                              |
| **Ngày phát hành**    | `<<YYYY-MM-DD>>`                     |
| **Trạng thái**        | Draft / In Review / Approved         |

<div style="page-break-after: always"></div>

<!-- ======================= TRANG 2 — XÁC NHẬN & LỊCH SỬ ======================= -->

## Xác nhận

<!-- Cặp theo nhiem_vu_xay_dung_planning.md §3.3: A = Việt Quang / Quang Anh; B = Quang Anh / Chiến; C = Chiến / Việt Quang. -->

| Người tạo        | Người kiểm tra     | Người xác nhận     |
| ---------------- | ------------------ | ------------------ |
| `<<Họ và tên>>`  | `<<Họ và tên>>`    | `<<Họ và tên>>`    |

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| -- | --------- | ------------- | -------------- | ----------------- | --------------- | --------------- |
| 1  | Ver 1.0   | `<<YYYY-MM-DD>>` | Tạo mới | `<<Tóm tắt>>` | `<<Họ và tên>>` | `<<Họ và tên>>` |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

## Mục lục

<!-- Giữ đúng các mục của PHẦN đang dùng. -->

<div style="page-break-after: always"></div>

<!-- ============================== PHẦN I — X_01 ============================== -->

## 1. Mục đích và phạm vi

`<<Nghiệp vụ X làm gì, do ai phụ trách, dòng phân công giai đoạn 3 nào.>>`

### 1.1. Phạm vi v2.1 và phạm vi trình diễn

<!-- v2.1 = đủ yêu cầu của Charter v2.1. Trình diễn = phần chạy được trong đợt 16–29/09 (ke-hoach-hoan-thien-2-tuan.md §3). Phần chưa làm KHÔNG bị xoá. -->

| Hạng mục | Phạm vi v2.1 | Phạm vi trình diễn |
| --- | --- | --- |
| `<<...>>` | `<<...>>` | `<<...>>` |

**Loại trừ:** `<<danh sách>>`

## 2. Căn cứ lập và thuật ngữ

### 2.1. Căn cứ lập

| Nguồn | Nội dung sử dụng |
| --- | --- |
| `<<file hoặc mục>>` | `<<...>>` |

### 2.2. Thuật ngữ

| Thuật ngữ | Định nghĩa dùng trong tài liệu này |
| --- | --- |
| `<<...>>` | `<<...>>` |

## 3. Đặc tả yêu cầu

### 3.1. Mô tả tổng quan

`<<Luồng chính dạng sơ đồ chữ; ranh giới dữ liệu: cái gì đi qua máy chủ, cái gì không.>>`

### 3.2. Tác nhân

| Tác nhân | Vai trò, quyền hạn |
| --- | --- |
| `<<...>>` | `<<...>>` |

### 3.3. Quy tắc cứng

- **QT-X-1 — `<<tên>>`.** `<<quy tắc kiểm tra được>>`

### 3.4. Yêu cầu chức năng REQ-X

<!-- Phạm vi: D = có trình diễn; V = chỉ thuộc v2.1, chưa triển khai. Tiêu chí phải đo được và kiểm thử được. -->

| ID | Yêu cầu | Luồng chính | Ngoại lệ / lỗi | Tiêu chí chấp nhận đo được | Phạm vi |
| --- | --- | --- | --- | --- | --- |
| REQ-X-01 | `<<...>>` | `<<...>>` | `<<...>>` | `<<...>>` | D / V |

### 3.5. Yêu cầu phi chức năng NF-X

<!-- Luôn có ngưỡng số và môi trường đo. Cột "Số đo hiện có" chỉ ghi số đã đo, kèm file nguồn; chưa đo thì ghi "chưa đo". -->

| ID | Yêu cầu | Ngưỡng v2.1 (nguồn) | Môi trường đo | Ngưỡng trình diễn | Số đo hiện có |
| --- | --- | --- | --- | --- | --- |
| NF-X-01 | `<<...>>` | `<<...>>` | `<<...>>` | `<<...>>` | `<<...>>` |

### 3.6. Trạng thái, cách xử lý và kiểm thử

| Trạng thái / tình huống | Trigger | Cách xử lý | Kiểm thử |
| --- | --- | --- | --- |
| `<<...>>` | `<<...>>` | `<<...>>` | TC-X-nn |

## 4. Ma trận truy vết yêu cầu

<!-- Đúng 7 cột (01_Quy_tac_bat_buoc.md §7.4). Status chỉ dùng: "Có code + test xanh" (ghi test/lệnh, ngày chạy) · "Có code, chưa test với máy chủ thật" · "Có code, lệch hợp đồng" · "Chưa làm". -->

| Req ID | Requirement Description | Business Objective | Design Doc | Code Module | Test Case | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-X-01 | `<<...>>` | OB-nn | `<<...>>` | `<<...>>` | TC-X-nn | `<<...>>` |

## 5. Tình huống kiểm thử TC-X

<!-- Mỗi REQ và NF có ít nhất một TC. Cấp theo khung Unit / Integration / E2E (QĐ-06). -->

| TC | Req | Cấp | Bước thử và dữ liệu | Kết quả mong đợi, ngưỡng | Tự động / Cần viết | Kết quả `<<ngày>>` |
| --- | --- | --- | --- | --- | --- | --- |
| TC-X-01 | REQ-X-01 | Unit / Integration / E2E | `<<...>>` | `<<...>>` | `<<file "tên test">>` hoặc Cần viết | Đạt / Lỗi / Chưa thử |

## 6. Phụ thuộc với module khác

<!-- Người tổng hợp file 03 dùng mục này. -->

### 6.1. Module này cần

| Từ module | Cần gì (API, dữ liệu, quyết định) | Đã khớp | Còn lệch, bên sửa |
| --- | --- | --- | --- |
| `<<...>>` | `<<...>>` | `<<...>>` | `<<...>>` |

### 6.2. Module này cung cấp

| Cho module | Cung cấp gì | Hợp đồng (endpoint, trường, mã lỗi) |
| --- | --- | --- |
| `<<...>>` | `<<...>>` | `<<...>>` |

### 6.3. Tình huống kiểm thử tích hợp đề xuất

| TC-I (đề xuất) | Luồng | Kết quả mong đợi | Module |
| --- | --- | --- | --- |
| `<<...>>` | `<<...>>` | `<<...>>` | `<<...>>` |

<!-- ============================== PHẦN II — X_02 ============================== -->

## 1. Mục đích

`<<Nhánh WBS nào, phạm vi lấy từ X_01 §1.1.>>`

## 2. Phân rã công việc — WBS và WBS Dictionary

### 2.1. Sơ đồ phân cấp

<!-- Cấp thấp nhất là deliverable (danh từ), không phải hành động. Ghi WP hoặc Planning package và trạng thái. -->

```
<<n>>. <<Tên nhánh>> ............................ <<tổng tE>> h
├── <<n.1>> <<Deliverable>> ..................... <<tE>> h   WP · <<trạng thái>>
└── <<n.k>> <<Deliverable>> ..................... <<tE>> h   Planning package
```

**Kiểm quy tắc:** 8/80 (gói nhỏ nhất `<<>>` h, lớn nhất `<<>>` h) · 100% (tổng gói con = nhánh; bảng §2.3) · deliverable · planning package chưa có hoạt động.

### 2.2. WBS Dictionary

| WBS | Gói | Deliverable | Tiêu chí chấp nhận | Giả định / ràng buộc | Người làm | Mốc | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `<<n.1>>` | `<<...>>` | `<<...>>` | `<<...>>` | `<<...>>` | `<<...>>` | `<<...>>` | `<<...>>` |

### 2.3. Đối chiếu phạm vi v2.1 với WBS

| Yêu cầu Charter thuộc module | Gói WBS |
| --- | --- |
| `<<RQ-nn, OB-nn, NF-nn>>` | `<<n.x>>` |

## 3. Hoạt động, ước lượng, lịch và chi phí

### 3.1. Danh sách hoạt động

<!-- Chỉ work package có hoạt động. Quan hệ: FS / SS / FF; ghi lead/lag. Ghi rõ phụ thuộc bên ngoài. -->

| Mã | Hoạt động | Gói | Giờ | Predecessor | Quan hệ, lead/lag | Ngày dự kiến | Trạng thái |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| `<<>>` | `<<>>` | `<<>>` | `<<>>` | `<<>>` | FS | `<<>>` | `<<>>` |

### 3.2. Ước lượng ba điểm (`tE = (O + M + P) / 3`)

| Mã | Gói | O | M | P | tE | Cơ sở ước lượng | Độ tin cậy |
| --- | --- | -: | -: | -: | -: | --- | --- |
| `<<>>` | `<<>>` | | | | | `<<khối lượng thật: số file, test, lỗi đã gặp…>>` | Cao / Trung bình / Thấp |

### 3.3. Mốc, lịch và năng lực

| Mốc | Ngày | Nội dung | Loại (v2.1 / Đợt) |
| --- | --- | --- | --- |
| `<<>>` | `<<>>` | `<<>>` | `<<>>` |

### 3.4. Chi phí và dự phòng

<!-- Tách giờ công và tiền mặt. Contingency (rủi ro đã nhận diện, trong baseline) khác Management reserve (cấp dự án, ngoài baseline). -->

| Hạng mục | Giá trị | Ghi chú |
| --- | ---: | --- |
| Giờ công tE | `<<>>` h | |
| Contingency reserve | `<<>>` h | Từ EMV rủi ro cao (§5.2) |
| **Cost baseline** | `<<>>` h | |
| Tiền mặt | `<<>>` VND | |

| Hạng mục cần mua / thuê / mượn | Cách có | Tiêu chí chọn | Cần trước |
| --- | --- | --- | --- |
| `<<>>` | `<<>>` | `<<>>` | `<<>>` |

## 4. Tiêu chí chất lượng

| Cấp | Công cụ, môi trường | Phạm vi | Bằng chứng lưu | Ngưỡng đạt | Người thực hiện / kiểm tra |
| --- | --- | --- | --- | --- | --- |
| Unit | | | | | |
| Integration | | | | | |
| E2E | | | | | |

## 5. Rủi ro

### 5.1. Sổ rủi ro

<!-- Thang QĐ-05: P, I từ 1–5; P×I ≤ 6 thấp, 7–12 trung bình, ≥ 13 cao. Mô tả theo nguyên nhân → sự kiện → hậu quả. -->

| ID | Nguyên nhân → sự kiện → hậu quả | RBS | P | I | P×I | Chiến lược, phòng ngừa | Trigger | Contingency | Chủ rủi ro |
| --- | --- | --- | -: | -: | -: | --- | --- | --- | --- |
| R-X-01 | `<<>>` | `<<>>` | | | | `<<>>` | `<<>>` | `<<>>` | `<<>>` |

### 5.2. EMV và contingency

| Rủi ro (chỉ mức cao) | P | Xác suất | Tác động (giờ) | Cơ sở tác động | EMV |
| --- | -: | -: | -: | --- | -: |
| `<<>>` | | | | | |

## 6. Trách nhiệm (RACI)

<!-- Đúng một A mỗi dòng. -->

| Gói / việc | Chiến | Việt Quang | Quang Anh | GV / Sponsor |
| --- | --- | --- | --- | --- |
| `<<>>` | | | | |

## 7. Kiểm soát thay đổi

Dùng quy trình chung (đề nghị → đánh giá tác động → CCB duyệt/hoãn/từ chối → Change Log → cập nhật baseline từ mốc hiện tại), mẫu `02_Change_Request_Form`. Ghi thêm quy định riêng của module: `<<...>>`

## 8. Phần chưa triển khai và quy tắc cập nhật

1. `<<...>>`
