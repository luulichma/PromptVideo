> **BẢN LỊCH SỬ — đã được thay thế ngày 24/09/2026.** Không tiếp tục sửa nội dung kế hoạch ở bản này. Bản hiện hành là [C_01 — Yêu cầu và kiểm thử](../design-note/md-docs/02_Planning/_module-input/C_Quan_tri_van_hanh/C_01_Yeu_cau_va_kiem_thu_v1.0.md), [C_02 — WBS, ước lượng và rủi ro](../design-note/md-docs/02_Planning/_module-input/C_Quan_tri_van_hanh/C_02_WBS_uoc_luong_rui_ro_v1.0.md), [P06 — Chất lượng](../design-note/md-docs/02_Planning/06_Quality_Plan_and_Test_Cases_v1.0.md) và [P07 — Nguồn lực, truyền thông](../design-note/md-docs/02_Planning/07_Resource_and_Communication_Plan_v1.0.md). Các mã WBS 8.x, QC-n, Inactive, OB/MT gán sai, phạm vi audio và phân công cũ bên dưới chỉ được giữ để truy vết. Áp dụng [quyết định và mã hiện hành](../design-note/md-docs/00_Quyet_dinh_va_quy_uoc_ma.md).

<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                       |                                     |
| --------------------- | ----------------------------------- |
| **Nhóm tiến trình**   | Planning                             |
| **Tên tài liệu**      | Kế hoạch nghiệp vụ C — Quản trị, vận hành và quản lý chất lượng |
| **Phiên bản**         | Ver. 1.0                             |
| **Nhóm thực hiện**    | Nhóm 02                              |
| **Ngày phát hành**    | 2026-09-21                            |
| **Trạng thái**        | Draft — chờ phê duyệt                 |

<div style="page-break-after: always"></div>

<!-- ======================= TRANG 2 — XÁC NHẬN & LỊCH SỬ ======================= -->

## Xác nhận

| Người tạo         | Người kiểm tra      | Người xác nhận    |
| ----------------- | ------------------- | ----------------- |
| Phạm Quang Anh    | Nguyễn Thế Chiến    | Nguyễn Việt Quang |
|                   |                     | Thầy Nguyễn Đình Quảng |

*Ghi chú: Theo phân công, Chiến kiểm tra và Việt Quang xác nhận cho các hạng mục của Quang Anh.*

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| -- | --------- | ------------- | -------------- | ----------------- | --------------- | --------------- |
| 1  | Ver 1.0   | 2026-09-21    | Tạo mới        | Đặc tả phần C (nạp mẫu, tài sản, quyền quản trị, giám sát, hỗ trợ, đo lợi ích); Kế hoạch chất lượng & kiểm thử (A/B/C); Kế hoạch nhân lực & truyền thông | Phạm Quang Anh | Nguyễn Việt Quang |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

## Mục lục

1. [Mục đích và phạm vi tài liệu](#1-muc-dich-va-pham-vi-tai-lieu)
2. [Căn cứ lập và thuật ngữ](#2-can-cu-lap-va-thuat-ngu)
3. [Đặc tả yêu cầu nghiệp vụ C](#3-dac-ta-yeu-cau-nghiep-vu-c)
   - 3.1 [Mô tả tổng quan](#31-mo-ta-tong-quan)
   - 3.2 [Tác nhân](#32-tac-nhan)
   - 3.3 [Quy tắc quản trị và vận hành](#33-quy-tac-quan-tri-va-van-hanh)
   - 3.4 [Yêu cầu chức năng REQ-C](#34-yeu-cau-chuc-nang-req-c)
   - 3.5 [Yêu cầu phi chức năng NF-C](#35-yeu-cau-phi-chuc-nang-nf-c)
   - 3.6 [Trạng thái, cách xử lý và kiểm thử](#36-trang-thai-cach-xu-ly-va-kiem-thu)
4. [Ma trận truy vết yêu cầu](#4-ma-tran-truy-vet-yeu-cau)
5. [Phân rã công việc nhánh C — WBS và WBS Dictionary](#5-phan-ra-cong-viec-nhanh-c--wbs-va-wbs-dictionary)
6. [Ước lượng, lịch và chi phí](#6-uoc-luong-lich-va-chi-phi)
7. [Kế hoạch chất lượng và kiểm thử toàn dự án (A/B/C)](#7-ke-hoach-chat-luong-va-kiem-thu-toan-du-an-abc)
8. [Kế hoạch rủi ro](#8-ke-hoach-rui-ro)
9. [Nguồn lực, trách nhiệm và truyền thông (Toàn dự án)](#9-nguon-luc-trach-nhiem-va-truyen-thong-toan-du-an)
10. [Kiểm soát thay đổi](#10-kiem-soat-thay-doi)
11. [Phần chưa triển khai và quy tắc cập nhật](#11-phan-chua-trien-khai-va-quy-tac-cap-nhat)

<div style="page-break-after: always"></div>

<!-- ============================== NỘI DUNG ============================== -->

## 1. Mục đích và phạm vi tài liệu

Tài liệu này là **kế hoạch mức gói công việc của nghiệp vụ C — Quản trị, Vận hành và Chất lượng** trong dự án PromptVideo, bám sát yêu cầu phiên bản 2.1. Nghiệp vụ C và các công tác tổ chức dự án do Phạm Quang Anh chủ trì; tài liệu thuộc nhóm tiến trình **Planning** và phục vụ 3 phân công cốt lõi:

1. **Viết yêu cầu C:** Nạp mẫu, tài sản đồ họa, quyền quản trị, giám sát, hỗ trợ và đo lợi ích sau bàn giao.
2. **Kế hoạch chất lượng:** Gom tiêu chí chất lượng và tình huống kiểm thử của cả 3 nhánh A/B/C; thiết lập cách kiểm tra, người kiểm tra và bằng chứng cần lưu.
3. **Kế hoạch nguồn lực & truyền thông:** Lập phân công người làm, chịu trách nhiệm, góp ý, nhận tin; lịch họp, cách báo cáo và kế hoạch tham gia của các bên liên quan.

**Phạm vi.** 
- Đối với đặc tả phần C: Bao phủ các chức năng Backend và Frontend dành riêng cho Admin (quản lý template, asset, hỗ trợ khách hàng, xem dashboard số liệu).
- Đối với quản lý chất lượng và nguồn lực: Bao phủ toàn bộ dự án, tạo khung làm việc chung để Chiến (nghiệp vụ A) và Quang (nghiệp vụ B) cùng tuân thủ.

**Trạng thái.** Tài liệu ở trạng thái **Draft**. Kiểm tra theo phân công: **Chiến kiểm tra, Việt Quang xác nhận** trước khi trở thành căn cứ thực thi.

---

## 2. Căn cứ lập và thuật ngữ

### 2.1. Căn cứ lập

| Nguồn | Nội dung sử dụng |
| ----- | ---------------- |
| [README.vi.md](../../README.vi.md) | Ba nghiệp vụ, ba gói dự kiến, phân công trách nhiệm (Quang Anh làm quản trị và vận hành) |
| Business Case v2.1 | Yêu cầu đo lường lợi ích kinh doanh sau khi bàn giao |
| Project Charter v2.1 | Ràng buộc dự án, phân bổ giờ, mục tiêu chất lượng |
| Benefit Management Plan v2.1 | Các chỉ số MT-06 → MT-09 cần hệ thống tự động đo lường |
| [01_Quy_tac_bat_buoc.md](../../research/01_Quy_tac_bat_buoc.md) | Cấu trúc bắt buộc của RTM, WBS, bảng RACI |
| Kế hoạch hai tuần 16–29/09/2026 | Lịch trình và phương thức giao tiếp của nhóm |

### 2.2. Thuật ngữ

| Thuật ngữ | Định nghĩa dùng trong tài liệu này |
| --------- | ----------------------------------- |
| **Admin** | Người dùng có `Role = Admin`, được cấp quyền truy cập vào các API và màn hình quản trị. |
| **Mẫu (Template)** | Tệp mô tả kịch bản video (định dạng JSON) kết hợp với các placeholders. |
| **Tài sản đồ họa (Asset)** | Các file hình ảnh, âm thanh, video nền dùng chung cho các mẫu, lưu trữ trên Object Storage (S3/Local). |
| **Chỉ số lợi ích (Metrics)** | Các số liệu (số lượt xuất, lượng người dùng, doanh thu) được tổng hợp để đối chiếu với Benefit Management Plan. |
| **Trường hợp kiểm thử (Test Case)** | Kịch bản kiểm tra một tính năng cụ thể, có đầu vào, các bước và kết quả kỳ vọng. |

---

## 3. Đặc tả yêu cầu nghiệp vụ C

### 3.1. Mô tả tổng quan

Nếu Nghiệp vụ A là "nhà máy sản xuất" (máy khách) và Nghiệp vụ B là "cửa bán vé" (kiểm quyền), thì Nghiệp vụ C là **"phòng điều hành"** (máy chủ).
Nghiệp vụ C cung cấp bộ công cụ để Ban quản trị hệ thống có thể:
1. Đăng tải và cập nhật các mẫu video (Templates) và tài sản đồ họa (Assets) mới cho người dùng sử dụng.
2. Theo dõi tình trạng hệ thống, số lượng người dùng mới, và số lượt xuất video thành công/thất bại.
3. Hỗ trợ người dùng khi có lỗi (ví dụ: cấp lại lượt xuất nếu bị lỗi hệ thống).
4. Tự động trích xuất các báo cáo lợi ích để đối chiếu với mục tiêu kinh doanh.

### 3.2. Tác nhân

| Tác nhân | Vai trò trong nghiệp vụ C |
| -------- | -------------------------- |
| **Admin Quản trị Nội dung** | Nạp mẫu video mới, tải lên tài sản đồ họa, duyệt/ẩn các mẫu. |
| **Admin Hỗ trợ Khách hàng (CS)** | Tra cứu lịch sử xuất của user, hoàn trả lượt (reset quota) nếu lỗi không do user. |
| **Admin Giám sát (Manager)** | Xem Dashboard metrics, xuất báo cáo đo lường lợi ích. |
| **Hệ thống (Cron Job)** | Tự động quét và tổng hợp dữ liệu lợi ích hàng ngày (Daily Metrics Aggregation). |

### 3.3. Quy tắc quản trị và vận hành

- **QC-1 — Quyền hạn tuyệt đối:** Chỉ tài khoản có Role "Admin" mới được truy cập các endpoint `/api/admin/*`. Mọi request không có role này đều bị trả về `403 Forbidden`.
- **QC-2 — Độc lập nội dung:** Tài sản đồ họa tải lên qua quản trị (Global Assets) phân biệt hoàn toàn với file tải lên của người dùng. Global Assets mang tính read-only đối với người dùng cuối.
- **QC-3 — Không thay đổi mẫu đang dùng:** Khi một Template đang được user sử dụng để render, nếu Admin chỉnh sửa, phiên bản mới chỉ áp dụng cho các lượt render sau đó. (Versioning hoặc Immutable Template).
- **QC-4 — Dữ liệu giám sát ẩn danh:** Dashboard giám sát không hiển thị chi tiết nội dung video của người dùng (tuân thủ nguyên tắc 0 byte nội dung người dùng của hệ thống B), chỉ đếm số lượng sự kiện (Reserve, Complete, Cancel).

### 3.4. Yêu cầu chức năng REQ-C

| ID | Yêu cầu | Mô tả (đo được, kiểm thử được) |
| -- | ------- | ------------------------------- |
| REQ-C-01 | Quản lý Mẫu (Templates) | CRUD các mẫu video. Hỗ trợ 2 trạng thái: `Draft` (chỉ admin xem được), `Active` (hiển thị cho user). |
| REQ-C-02 | Quản lý Tài sản (Assets) | Upload, liệt kê và xóa tài sản đồ họa (ảnh, audio). Asset có URL tĩnh để chèn vào JSON mẫu. |
| REQ-C-03 | Phân quyền Quản trị | Hệ thống nhận diện role `Admin` từ JWT. Chặn đứng các hành vi từ User thường. |
| REQ-C-04 | Hỗ trợ người dùng (CS) | Admin có thể tìm user theo email, xem lịch sử đặt lượt (ExportReservation) và trạng thái (Completed/Cancelled). |
| REQ-C-05 | Can thiệp hạn mức (Manual) | Admin có quyền cộng thêm lượt vào `UsagePeriod` của user trong tháng nếu có sự cố bồi thường. |
| REQ-C-06 | Dashboard Giám sát | API trả về số liệu tổng hợp trong khoảng thời gian: Số đăng ký mới, số lượt xuất thành công, tổng giao dịch Applied. |
| REQ-C-07 | Đo lợi ích tự động | Job chạy hàng đêm, ghi lại các chỉ số MT-06 (số user trả phí), MT-07 (lượt xuất/tháng) lưu vào bảng `DailyMetrics`. |

### 3.5. Yêu cầu phi chức năng NF-C

| ID | Yêu cầu | Tiêu chí đo |
| -- | ------- | ----------- |
| NF-C-01 | Hiệu năng báo cáo | API load Dashboard (tổng hợp dữ liệu 30 ngày) phản hồi trong < 2 giây. |
| NF-C-02 | Lưu trữ tài sản | Hỗ trợ tải lên file đồ họa kích thước tối đa 50MB/file. |
| NF-C-03 | Kiểm soát truy cập | Mọi thao tác đổi trạng thái mẫu, đổi hạn mức của Admin đều phải ghi vào `AuditEvent` (Audit log). |

### 3.6. Trạng thái, cách xử lý và kiểm thử

#### 3.6.1. Vòng đời của Mẫu (Template)

| Trạng thái | Trigger | Cách xử lý | Kiểm thử |
| ---------- | ------- | ---------- | -------- |
| **Draft** | Admin tạo mẫu mới | Chỉ trả về khi gọi API bằng Admin token. User không thấy trên danh sách. | TC-C-01 (User list không có mẫu Draft) |
| **Active** | Admin bật "Publish" | Trả về ở endpoint Public (`/api/templates`). User bắt đầu dùng được. | TC-C-02 (Mẫu Active hiển thị với User) |
| **Inactive** | Admin ẩn mẫu | Không trả về ở danh sách Public. Nhưng user đã lưu JSON cũ vẫn render được (không cấm cứng ở API render). | TC-C-03 (Ẩn mẫu, User không thấy) |

#### 3.6.2. Hỗ trợ can thiệp hạn mức

| Trạng thái | Trigger | Cách xử lý | Kiểm thử |
| ---------- | ------- | ---------- | -------- |
| **Yêu cầu hỗ trợ** | User báo lỗi | Admin tìm email -> Ra ID user -> Lấy `UsagePeriod` hiện tại. | TC-C-11 (Tìm được thông tin user) |
| **Cộng lượt đền bù** | Admin +1 lượt | Thay đổi `ExportsRemaining` (hoặc giảm `ExportsUsed`); ghi `AuditEvent` lý do. | TC-C-12 (+1 lượt, ghi log thành công, User xuất được thêm) |

---

## 4. Ma trận truy vết yêu cầu (Nhánh C)

| Req ID | Requirement Description | Business Objective | Design Doc | Code Module | Test Case | Status |
| ------ | ----------------------- | ------------------ | ---------- | ----------- | --------- | ------ |
| REQ-C-01 | CRUD Mẫu (Draft/Active) | OB-11 (Nội dung) | Kiến trúc tổng | `Modules/Templates` | TC-C-01, TC-C-02 | Chờ thực thi |
| REQ-C-02 | Quản lý Tài sản | OB-11 | Kiến trúc tổng | `Modules/Assets` | TC-C-04 | Chờ thực thi |
| REQ-C-03 | Phân quyền Admin | OB-13 (Bảo mật) | plan-note/03 | `Modules/Auth/Roles` | TC-B-53 | Đã tích hợp cùng B |
| REQ-C-04 | Xem lịch sử xuất của user| Hoạt động CS | Kiến trúc tổng | `Modules/Admin` | TC-C-11 | Chờ thực thi |
| REQ-C-05 | Can thiệp hạn mức | Hoạt động CS | Kiến trúc tổng | `Modules/Admin` | TC-C-12 | Chờ thực thi |
| REQ-C-06 | Dashboard giám sát | OB-12 (Vận hành) | Kiến trúc tổng | `Modules/Metrics` | TC-C-21 | Chờ thực thi |
| REQ-C-07 | Job đo lợi ích tự động | Phục vụ Benefit Plan | Kiến trúc tổng | `Worker/DailyMetricsJob`| TC-C-22 | Chờ thực thi |

---

## 5. Phân rã công việc nhánh C — WBS và WBS Dictionary

Nhánh C là **nhánh cấp 1 số 8 — F6: Quản trị, Vận hành và Giám sát** trong WBS tổng (40 giờ). Độ mịn 8–12 giờ/gói công việc.

### 5.1. Sơ đồ phân cấp nhánh C

```
8. F6 — Quản trị, Vận hành và Giám sát ................. 40 h 
│
├── 8.1 API Quản lý Mẫu và Tài sản ..................... 12 h   ← M3
│       CRUD Template, Upload Asset, S3/Local Storage
│
├── 8.2 API Hỗ trợ Khách hàng (CS) ..................... 8 h    ← M6
│       Tra cứu user, lịch sử xuất, hoàn trả hạn mức
│
├── 8.3 Chức năng Giám sát và Đo lợi ích ............... 10 h   ← M6
│       Dashboard API, DailyMetricsJob
│
└── 8.4 Tích hợp Giao diện Quản trị (Frontend Admin) ... 10 h   ← M6
        Lên UI cho các API đã tạo ở 8.1, 8.2, 8.3
```

### 5.2. WBS Dictionary

| WBS | Gói công việc | Mô tả đầu ra (deliverable) | Tiêu chí chấp nhận (đo được) | Giờ | Mốc | Phụ thuộc | Phụ trách |
| --- | -------------- | --------------------------- | ---------------------------- | ---: | --- | --------- | --------- |
| 8.1 | API Quản lý Mẫu và Tài sản | Các endpoint `/api/admin/templates` và `/api/admin/assets`. Lưu trữ file tĩnh | Tạo/sửa/xóa template thành công, test phân quyền Admin chặn User; upload file < 50MB OK | 12 | M3 | 7.1 (B) | Quang Anh |
| 8.2 | API Hỗ trợ Khách hàng | Endpoint lấy lịch sử user và reset quota thủ công | Cộng được lượt cho tài khoản bị hết, ghi vết AuditEvent chính xác | 8 | M6 | 7.3 (B) | Quang Anh |
| 8.3 | Giám sát và Đo lợi ích | API trả số liệu Dashboard, Job tổng hợp dữ liệu chạy ngầm | Trả về JSON đúng số lượng theo khoảng ngày; Job lưu vào DB không lỗi | 10 | M6 | 7.2 (B) | Quang Anh |
| 8.4 | Tích hợp UI Quản trị | Giao diện React/Vue riêng cho Admin | Đăng nhập Admin vào được màn hình, hiển thị được bảng dữ liệu template và chart cơ bản | 10 | M6 | 8.1, 8.3 | Quang Anh |

---

## 6. Ước lượng, lịch và chi phí

**Ước lượng ba điểm (PERT):**

| Mã | Hoạt động cơ bản (activity) | O | M | P | tE |
| -- | --------------------------- | -: | -: | -: | -: |
| 8.1 | API Quản lý Mẫu và Tài sản | 8 | 12 | 16 | 12.0 |
| 8.2 | API Hỗ trợ Khách hàng | 5 | 8 | 11 | 8.0 |
| 8.3 | Giám sát và Đo lợi ích | 7 | 10 | 13 | 10.0 |
| 8.4 | Tích hợp Giao diện Quản trị | 8 | 10 | 12 | 10.0 |
| | **Tổng** | | | | **40.0** |

---

## 7. Kế hoạch chất lượng và kiểm thử toàn dự án (A/B/C)

Với tư cách là người phụ trách Chất lượng, Quang Anh quy định **khung kiểm thử chung** cho cả 3 nhánh A (Chiến), B (Quang), C (Quang Anh).

### 7.1. Cấu trúc các cấp độ kiểm thử (Cách kiểm tra & Bằng chứng)

| Mức độ | Người thực hiện | Cách kiểm tra | Bằng chứng cần lưu | Môi trường đo | Ngưỡng đạt |
| ------ | --------------- | ------------- | ------------------ | ------------- | ---------- |
| **Unit Test** | Từng Dev tự viết (A/B/C) | Dùng xUnit/Jest chạy tự động trên logic cốt lõi. | Ảnh chụp màn hình Test Explorer (All Green) hoặc báo cáo CI. | CI Local / IDE | 100% Passed. Code coverage ≥ 70%. |
| **Integration** | Từng Dev tự viết (A/B/C) | Testcontainers (PostgreSQL giả lập) + API call. | Log chạy test, file kết quả test (.trx). | Testcontainers độc lập | Không lỗi concurrency, đúng idempotency |
| **E2E / UAT** | **Quang Anh (QA)** | Chạy ứng dụng hoàn chỉnh từ Frontend tới Backend. | Video quay màn hình luồng thao tác; Biên bản nghiệm thu (có chữ ký xác nhận). | Môi trường Staging (có đầy đủ frontend + backend) | Không có lỗi Blocker/Critical ở luồng chính (Happy path 100%). |

### 7.2. Danh sách tình huống kiểm thử chéo cốt lõi (Nối yêu cầu tới Tình huống)

*(Bảng này liệt kê các ca kiểm thử E2E quan trọng nhất để QA Quang Anh trực tiếp kiểm tra chéo)*

| Nhánh | Mã TC | Kịch bản / Yêu cầu nối đến | Kết quả kỳ vọng (Ngưỡng đạt) | Trạng thái |
| ----- | ----- | -------------------------- | ---------------------------- | ---------- |
| **A** | TC-A-01 | Dựng video 3 slide, có audio (REQ-A) | Ra file MP4, có âm thanh, không giật hình, < 5 phút. | Đang chờ A |
| **A** | TC-A-02 | Hủy xuất video giữa chừng (REQ-A) | Trình duyệt dừng render ngay lập tức, gọi API cancel. | Đang chờ A |
| **B** | TC-B-34 | Tài khoản Free xuất video thứ 4 (REQ-B-09) | Trình duyệt bị chặn, API trả `403 Quota reached`. | Quang báo Done |
| **B** | TC-B-13 | Thanh toán gói Personal (REQ-B-13) | Kích hoạt trong ≤ 5 phút, quota chuyển sang vô hạn. | Quang báo Done |
| **C** | TC-C-02 | Admin Publish Template (REQ-C-01) | User F5 trang thấy Template mới hiện ra ngay. | Chờ C |
| **C** | TC-C-12 | Admin đền bù lượt cho user (REQ-C-05) | User đang hết lượt, sau khi admin thêm, user xuất được 1 video nữa. | Chờ C |

*(Chiến kiểm tra chéo phần của Quang Anh, Quang xác nhận phần chất lượng chung)*

---

## 8. Kế hoạch rủi ro (Riêng nhánh C)

| ID | Rủi ro (nhóm RBS) | P | I | P×I | Chiến lược ứng phó + hành động |
| -- | ----------------- | - | - | --- | ------------------------------ |
| R-C-01 | File tải lên quá lớn gây sập RAM server (Tech) | 3 | 4 | 12 | **Mitigate:** Giới hạn max upload 50MB, dùng stream upload trực tiếp (không load hết vào RAM). |
| R-C-02 | Trễ tiến độ làm Admin UI do tập trung kiểm chéo A/B | 4 | 3 | 12 | **Accept/Mitigate:** Ưu tiên API trước. Nếu thiếu thời gian, Admin dùng Postman (chỉ bàn giao API) để đảm bảo QA cho A/B không bị gián đoạn. |

---

## 9. Nguồn lực, trách nhiệm và truyền thông (Toàn dự án)

Quang Anh thiết lập cách thức phối hợp chung cho 3 thành viên:

### 9.1. Bảng Trách nhiệm (RACI mở rộng)

| Hạng mục công việc / Nhánh | Việt Quang (B) | Thế Chiến (A) | Quang Anh (C, QA, PM) |
| -------------------------- | -------------- | ------------- | --------------------- |
| Xây dựng Core & Payment (Nhánh B) | **A, R** | C | I (Đợi test) |
| Xây dựng Render Engine (Nhánh A) | C | **A, R** | I (Đợi test) |
| Xây dựng Admin & Metrics (Nhánh C) | C | I | **A, R** |
| Xây dựng KH & Danh sách Test (Tổng)| I (Tuân thủ) | I (Tuân thủ) | **A, R** |
| Thực hiện Unit/Integration Test | R (Phần B) | R (Phần A) | R (Phần C) |
| **Thực hiện E2E Kiểm tra chéo** | R (Kiểm chéo C)| R (Kiểm chéo B) | **R (Kiểm chéo A)**, **A (Tổng kết)** |

*Ghi chú: Mỗi việc có ĐÚNG 1 người chịu trách nhiệm cuối (A - Accountable).*

### 9.2. Kế hoạch truyền thông & Lịch họp

| Sự kiện / Công cụ | Thời điểm / Tần suất | Người tham gia | Nội dung trao đổi | Người nhận báo cáo |
| ----------------- | -------------------- | -------------- | ----------------- | ------------------ |
| **Daily Standup** | 20:00 hàng ngày (Discord) | Cả 3 thành viên | Đã làm gì, có vướng (blocker) gì, kế hoạch mai. Push kết quả lên Github. | Quang Anh (PM) ghi nhận |
| **Tích hợp A ↔ B** | Mốc 19/09 | Quang, Chiến | Chốt cấu trúc Payload xác thực, Idempotency key. | Quang Anh |
| **Review Chéo E2E** | Mốc 27/09 | Cả 3 thành viên | Chạy demo toàn bộ luồng, đối chiếu theo Danh sách TC ở phần 7. QA lập biên bản lỗi. | Thầy / Sponsor (qua báo cáo) |
| **Kênh Báo lỗi (Bug)** | Bất cứ lúc nào (Github Issues) | Người test (Tạo), Dev (Sửa) | Ghi rõ TC lỗi, Expected, Actual, Ảnh chụp. | Dev phụ trách nhánh đó |

---

## 10. Kiểm soát thay đổi

- **Scope Baseline:** Mọi thay đổi về chỉ số chất lượng, kịch bản test lõi hoặc giao diện Admin phải được thảo luận trong Daily Standup.
- Nguồn lực: Nếu một người bị block quá 24h, Quang Anh có trách nhiệm điều phối tái phân công (ví dụ: chuyển bớt UI Admin sang Quang để Quang Anh rảnh tay hỗ trợ Chiến fix lỗi Render).

---

## 11. Phần chưa triển khai và quy tắc cập nhật

**Phần chưa triển khai trong giới hạn đợt 2 tuần:**
1. Upload trực tiếp lên AWS S3 (Trong bản chạy thử chỉ lưu file tĩnh trên ổ cứng Local Server).
2. Tự động hóa đo lường MT-08, MT-09 (Tạm thời chỉ xuất dữ liệu thô, Admin dùng Excel để tính tỉ lệ).
3. Giao diện biểu đồ (Charts) phức tạp trên Frontend Admin (Chỉ làm bảng dữ liệu DataGrid cơ bản).

Tài liệu này được cập nhật mỗi khi có thay đổi lớn về số lượng Test Case hoặc nhân sự gặp sự cố cần đổi RACI. Mọi sửa đổi lưu log tại Trang 2.
