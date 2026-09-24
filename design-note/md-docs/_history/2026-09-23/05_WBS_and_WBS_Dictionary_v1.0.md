<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                       |                                     |
| --------------------- | ----------------------------------- |
| **Nhóm tiến trình**   | Planning                             |
| **Tên tài liệu**      | WBS and WBS Dictionary               |
| **Phiên bản**         | Ver. 1.0                             |
| **Nhóm thực hiện**    | Nhóm 02                              |
| **Ngày phát hành**    | 2026-09-23                           |
| **Trạng thái**        | Draft                                |

<div style="page-break-after: always"></div>

<!-- ======================= TRANG 2 — XÁC NHẬN & LỊCH SỬ ======================= -->

## Xác nhận

| Người tạo         | Người kiểm tra    | Người xác nhận    |
| ----------------- | ----------------- | ----------------- |
| Nguyễn Thế Chiến  | Nguyễn Việt Quang | Phạm Quang Anh    |

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| -- | --------- | ------------- | -------------- | ----------------- | --------------- | --------------- |
| 1  | Ver 1.0   | 2026-09-23    | Tạo mới        | WBS toàn dự án theo 6 giai đoạn phát triển; từ điển WBS; kiểm quy tắc 100% và 8/80 | Nguyễn Thế Chiến | Phạm Quang Anh |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

## Mục lục

1. [Mục đích và căn cứ](#1-muc-dich-va-can-cu)
2. [Cách phân rã](#2-cach-phan-ra)
3. [Sơ đồ cây WBS](#3-so-do-cay-wbs)
4. [Bảng WBS](#4-bang-wbs)
5. [Từ điển WBS](#5-tu-dien-wbs)
6. [Kiểm quy tắc phân rã](#6-kiem-quy-tac-phan-ra)
7. [Planning package và kế hoạch phân rã tiếp](#7-planning-package-va-ke-hoach-phan-ra-tiep)
8. [Vấn đề cần quyết định](#8-van-de-can-quyet-dinh)

<div style="page-break-after: always"></div>

<!-- ============================== NỘI DUNG ============================== -->

## 1. Mục đích và căn cứ

Tài liệu này phân rã **toàn bộ phạm vi v2.1** của PromptVideo thành các sản phẩm đầu ra có thể giao việc, ước lượng và theo dõi. Scope Statement (file 04), WBS và từ điển WBS hợp thành **Scope Baseline**. Sau khi phê duyệt, mọi thay đổi phải qua quy trình kiểm soát thay đổi (mẫu `02_Change_Request_Form`).

| Căn cứ | Nội dung sử dụng |
| --- | --- |
| Project Charter v2.1 | RQ, OB, NF; mốc M0–M7; ngân sách 450 h, trần 495 h (OB-11); tiền mặt 3.500.000 VND; đơn giá 80.000 VND/giờ |
| `A_02_WBS_uoc_luong_rui_ro_v1.0.md` | Giờ phần A, ước lượng PERT từ dưới lên |
| `plan-note/planning_b.md` §5 | Giờ phần B |
| `plan-note/05_Ke_hoach_nghiep_vu_C_v1.0.md` §5 | Giờ phần C |
| `ke-hoach-hoan-thien-2-tuan.md` | Giờ của các sản phẩm hồ sơ |
| Bài giảng PM05 (Create WBS) | Cách chia theo giai đoạn; quy tắc 100% và 8/80; đặt tên theo deliverable; work package và planning package; các trường của từ điển WBS |

## 2. Cách phân rã

- **Hình thức: theo giai đoạn phát triển (waterfall).** Cấp 1 gồm 6 giai đoạn: Quản lý dự án → Yêu cầu → Thiết kế → Xây dựng → Tích hợp và kiểm thử → Triển khai và bàn giao. Cách chia này theo ví dụ "Software Product Release 5.0" trong PM05.
- **Riêng giai đoạn Xây dựng** có thêm một cấp theo ba phân hệ sản phẩm: A (ứng dụng tạo video), B (dịch vụ tài khoản và thuê bao), C (cổng quản trị). Nếu không chia thêm, mỗi phân hệ sẽ vượt 80 h.
- **Đặt tên theo đầu ra, không theo hành động.** Ví dụ: "Bộ xuất MP4 theo luồng", không viết "Làm chức năng xuất"; "Báo cáo hiệu năng", không viết "Đo hiệu năng".
- **Cách làm:** chia cấp 1 từ trên xuống. Các gói lá do chủ từng phân hệ lập từ dưới lên, để cả nhóm cùng nhận việc.
- **Mã (code of accounts):** `n` là giai đoạn, `n.m` là gói hoặc phân hệ, `n.m.k` là gói trong phân hệ.
- **Đơn vị:** giờ công. Ngân sách công = giờ × 80.000 VND; đây là chi phí cơ hội, tính tách khỏi tiền mặt.
- **Loại gói:** **WP** (work package) sẽ được chia thành hoạt động trong file 10. **PP** (planning package) là việc còn xa, chưa chia thành hoạt động.

## 3. Sơ đồ cây WBS

Bản đồ họa: [`05_WBS_PromptVideo.puml`](05_WBS_PromptVideo.puml) và ảnh [`05_WBS_PromptVideo.png`](05_WBS_PromptVideo.png).

```
0. PromptVideo v2.1 ............................................. 498,3 h  100%
├── 1. Quản lý dự án .............................................. 67,0 h  13,4%
│   ├── 1.1 Bộ hồ sơ khởi tạo ...................................... 23,0 h  WP ✔
│   ├── 1.2 Kế hoạch quản lý dự án (PMP và các baseline) ............ 28,0 h  WP
│   └── 1.3 Báo cáo theo dõi và kiểm soát .......................... 16,0 h  PP
├── 2. Yêu cầu .................................................... 20,0 h   4,0%
│   ├── 2.1 Đặc tả yêu cầu phần mềm (A, B, C) ...................... 12,0 h  WP
│   └── 2.2 Ma trận truy vết yêu cầu ................................ 8,0 h  WP
├── 3. Thiết kế ................................................... 33,3 h   6,7%
│   ├── 3.1 Tài liệu kiến trúc và nguyên mẫu mã hóa ................ 10,0 h  WP ✔
│   └── 3.2 Đặc tả giao tiếp và định dạng dữ liệu cảnh ............. 23,3 h  WP
├── 4. Xây dựng .................................................. 263,0 h  52,8%
│   ├── 4.1 Nền tảng mã nguồn và CI ................................ 24,0 h  WP ✔
│   ├── 4.2 Ứng dụng tạo video (A) ................................ 139,0 h
│   │   ├── 4.2.1 Trình soạn thảo nội dung ......................... 28,7 h  WP ✔
│   │   ├── 4.2.2 Thư viện 5 mẫu trình chiếu ....................... 13,3 h  WP ✔
│   │   ├── 4.2.3 Bộ dựng và xem trước ............................. 24,7 h  WP ✔
│   │   ├── 4.2.4 Bộ xuất MP4 theo luồng ........................... 22,0 h  WP ✔
│   │   ├── 4.2.5 Kho dự án cục bộ ................................. 15,3 h  WP ✔
│   │   ├── 4.2.6 Mô-đun kiểm quyền xuất và danh mục mẫu ........... 23,7 h  WP
│   │   └── 4.2.7 Chức năng tạm dừng xuất và cảnh báo trình duyệt .. 11,3 h  PP
│   ├── 4.3 Dịch vụ tài khoản và thuê bao (B) ...................... 60,0 h
│   │   ├── 4.3.1 Mô-đun tài khoản và xác thực ..................... 14,0 h  WP ✔
│   │   ├── 4.3.2 Mô-đun giấy phép và hạn mức ...................... 20,0 h  WP ✔
│   │   ├── 4.3.3 Mô-đun thanh toán và gia hạn ..................... 16,0 h  WP
│   │   └── 4.3.4 Trang quản lý thuê bao ........................... 10,0 h  WP
│   └── 4.4 Cổng quản trị và vận hành (C) .......................... 40,0 h
│       ├── 4.4.1 Mô-đun quản lý mẫu và tài sản .................... 12,0 h  WP
│       ├── 4.4.2 Mô-đun hỗ trợ khách hàng .......................... 8,0 h  WP
│       ├── 4.4.3 Bảng giám sát và đo lợi ích ...................... 10,0 h  WP
│       └── 4.4.4 Giao diện quản trị ............................... 10,0 h  WP
├── 5. Tích hợp và kiểm thử ........................................ 65,0 h  13,0%
│   ├── 5.1 Bản tích hợp A–B–C và báo cáo kiểm thử tích hợp ........ 16,3 h  WP
│   ├── 5.2 Báo cáo hiệu năng và tính xác định ..................... 28,0 h  PP
│   └── 5.3 Báo cáo nghiệm thu độ tin cậy, tiếng Việt, dễ dùng ..... 20,7 h  PP
└── 6. Triển khai và bàn giao ...................................... 50,0 h  10,0%
    ├── 6.1 Bản phát hành production ............................... 20,0 h  PP
    ├── 6.2 Gói demo và hướng dẫn sử dụng .......................... 10,0 h  WP
    ├── 6.3 Hồ sơ kết thúc và slide bảo vệ ......................... 12,0 h  WP
    └── 6.4 Biên bản nghiệm thu v1.0 ................................ 8,0 h  PP

✔ = đã có sản phẩm
```

## 4. Bảng WBS

### 4.1. Cấp 1 — giai đoạn

| Mã | Giai đoạn | Đầu ra chính | Giờ | % | Ngân sách công (VND) | Tiền mặt (VND) | Chủ giai đoạn |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- |
| 1 | Quản lý dự án | Hồ sơ khởi tạo, PMP, báo cáo kiểm soát | 67,0 | 13,4 | 5.360.000 | 0 | Chiến |
| 2 | Yêu cầu | Đặc tả yêu cầu, ma trận truy vết | 20,0 | 4,0 | 1.600.000 | 0 | Chiến |
| 3 | Thiết kế | Kiến trúc, nguyên mẫu, đặc tả giao tiếp | 33,3 | 6,7 | 2.664.000 | 0 | Chiến |
| 4 | Xây dựng | Nền tảng; ba phân hệ A, B, C | 263,0 | 52,8 | 21.040.000 | 2.200.000 | Chiến (A), Việt Quang (B), Quang Anh (C) |
| 5 | Tích hợp và kiểm thử | Bản tích hợp, các báo cáo kiểm thử | 65,0 | 13,0 | 5.200.000 | 0 | Quang Anh |
| 6 | Triển khai và bàn giao | Bản phát hành, demo, hồ sơ kết thúc, nghiệm thu | 50,0 | 10,0 | 4.000.000 | 900.000 | Quang Anh |
| **0** | **PromptVideo v2.1** | | **498,3** | **99,9** | **39.864.000** | **3.100.000** | Chiến |

- Tổng % là 99,9 chứ không phải 100 do làm tròn.
- Tiền mặt ở giai đoạn 4 gồm phí cổng thanh toán 1.500.000 VND (4.3.3) và tài sản đồ họa 700.000 VND (4.4.1). Ở giai đoạn 6 là VPS 600.000 VND cộng tên miền 300.000 VND (6.1).
- Khoản dự phòng 400.000 VND của Charter là reserve, không đưa vào WBS.

### 4.2. Gói công việc

| Mã | Sản phẩm đầu ra | Loại | Giờ | Người phụ trách | Mốc | Trạng thái |
| --- | --- | --- | ---: | --- | --- | --- |
| 1.1 | Bộ hồ sơ khởi tạo | WP | 23,0 | Chiến | M0 | Đã có |
| 1.2 | Kế hoạch quản lý dự án | WP | 28,0 | Chiến | M-PLAN | Đang làm |
| 1.3 | Báo cáo theo dõi và kiểm soát | PP | 16,0 | Việt Quang | M1–M7 | Chưa |
| 2.1 | Đặc tả yêu cầu phần mềm | WP | 12,0 | Chiến | M1 | Đang làm |
| 2.2 | Ma trận truy vết yêu cầu | WP | 8,0 | Chiến | M-PLAN | Đang làm |
| 3.1 | Tài liệu kiến trúc và nguyên mẫu mã hóa | WP | 10,0 | Chiến | M2 | Đã có |
| 3.2 | Đặc tả giao tiếp và định dạng dữ liệu cảnh | WP | 23,3 | Chiến | M1, M-JOIN | Đang làm |
| 4.1 | Nền tảng mã nguồn và CI | WP | 24,0 | Chiến | M2 | Đã có |
| 4.2.1 | Trình soạn thảo nội dung | WP | 28,7 | Chiến | M5 | Đã có |
| 4.2.2 | Thư viện 5 mẫu trình chiếu | WP | 13,3 | Chiến | M3 | Đã có |
| 4.2.3 | Bộ dựng và xem trước | WP | 24,7 | Chiến | M3 | Đã có |
| 4.2.4 | Bộ xuất MP4 theo luồng | WP | 22,0 | Chiến | M4 | Đã có |
| 4.2.5 | Kho dự án cục bộ | WP | 15,3 | Chiến | M5 | Đã có |
| 4.2.6 | Mô-đun kiểm quyền xuất và danh mục mẫu | WP | 23,7 | Chiến | M5 | Đang làm |
| 4.2.7 | Chức năng tạm dừng xuất và cảnh báo trình duyệt | PP | 11,3 | Chiến | M4 | Chưa |
| 4.3.1 | Mô-đun tài khoản và xác thực | WP | 14,0 | Việt Quang | M2 | Đã có |
| 4.3.2 | Mô-đun giấy phép và hạn mức | WP | 20,0 | Việt Quang | M5 | Đã có |
| 4.3.3 | Mô-đun thanh toán và gia hạn | WP | 16,0 | Việt Quang | M6 | Một phần |
| 4.3.4 | Trang quản lý thuê bao | WP | 10,0 | Việt Quang | M6 | Chưa |
| 4.4.1 | Mô-đun quản lý mẫu và tài sản | WP | 12,0 | Quang Anh | M3 | Một phần |
| 4.4.2 | Mô-đun hỗ trợ khách hàng | WP | 8,0 | Quang Anh | M6 | Chưa |
| 4.4.3 | Bảng giám sát và đo lợi ích | WP | 10,0 | Quang Anh | M6 | Một phần |
| 4.4.4 | Giao diện quản trị | WP | 10,0 | Quang Anh | M6 | Chưa |
| 5.1 | Bản tích hợp A–B–C và báo cáo kiểm thử tích hợp | WP | 16,3 | Chiến | M-TEST, M4 | Chưa |
| 5.2 | Báo cáo hiệu năng và tính xác định | PP | 28,0 | Chiến | M4 | Chưa |
| 5.3 | Báo cáo nghiệm thu độ tin cậy, tiếng Việt, dễ dùng | PP | 20,7 | Chiến | M3, M6 | Chưa |
| 6.1 | Bản phát hành production | PP | 20,0 | Quang Anh | M6 | Chưa |
| 6.2 | Gói demo và hướng dẫn sử dụng | WP | 10,0 | Quang Anh | M-CLOSE | Chưa |
| 6.3 | Hồ sơ kết thúc và slide bảo vệ | WP | 12,0 | Quang Anh | M-CLOSE, M7 | Chưa |
| 6.4 | Biên bản nghiệm thu v1.0 | PP | 8,0 | Chiến | M7 | Chưa |

**Mốc Charter:** M0 30/08 · M1 13/09 · M2 27/09 · M3 18/10 · M4 01/11 · M5 15/11 · M6 29/11 · M7 06/12.
**Mốc đợt làm bài:** M-JOIN 19/09 · M-PLAN 21/09 · M-RUN 25/09 · M-TEST 27/09 · M-CLOSE 29/09.

## 5. Từ điển WBS

Mỗi dòng là một mục từ điển, gồm các trường PM05 yêu cầu (mã, mô tả, giả định và ràng buộc, người phụ trách, mốc), có thêm tiêu chí chấp nhận và rủi ro. Người phụ trách, mốc và giờ xem bảng §4.2. Ngân sách công của mỗi gói = giờ × 80.000 VND.

### 5.1. Giai đoạn 1 — Quản lý dự án

| Mã | Sản phẩm đầu ra gồm | Tiêu chí chấp nhận | Giả định / ràng buộc | Rủi ro |
| --- | --- | --- | --- | --- |
| 1.1 | Business Case v2.2, Benefit Management Plan v2.2, Project Charter v2.1, Assumption Log v2.1, Stakeholder Register v1.0 | Đủ 12 mục Charter; Nhà tài trợ ký | Giờ lấy theo mốc M0 (Charter §8.4) | Lệch tên PM/giảng viên giữa các hồ sơ |
| 1.2 | PMP (01), Scope Statement (04), WBS (05), Quality Plan (06), Resource & Communication Plan (07), Risk Plan (08), các sổ 10–13 | Có đủ 3 baseline; mỗi file được kiểm tra chéo | 20 h/người/tuần | Người tổng hợp quá tải |
| 1.3 | Báo cáo tiến độ, Issue Log, Change Log, Risk Register cập nhật, ví dụ EVM | Mỗi mốc có một báo cáo; SPI/CPI có nguồn số liệu | Có nhật ký giờ thực tế | Không có giờ thực tế để tính EVM |

### 5.2. Giai đoạn 2 — Yêu cầu

| Mã | Sản phẩm đầu ra gồm | Tiêu chí chấp nhận | Giả định / ràng buộc | Rủi ro |
| --- | --- | --- | --- | --- |
| 2.1 | File 02 Requirements Specification: REQ-A/B/C, NF-A/B/C/G, quy tắc nghiệp vụ, luồng ngoại lệ | Mọi yêu cầu có mã, tiêu chí đo được và đánh dấu phạm vi trình diễn/v2.1 | Tổng hợp từ A/B/C_01 | Trùng hoặc lệch mã giữa các module (QĐ-04) |
| 2.2 | File 09 RTM: yêu cầu → mục tiêu → thiết kế → mã nguồn → TC → trạng thái | Mỗi yêu cầu nối tới ít nhất một TC; cột Status có bằng chứng | Làm sau file 06 | Ghi "đã đạt" khi không có bằng chứng |

### 5.3. Giai đoạn 3 — Thiết kế

| Mã | Sản phẩm đầu ra gồm | Tiêu chí chấp nhận | Giả định / ràng buộc | Rủi ro |
| --- | --- | --- | --- | --- |
| 3.1 | Kiến trúc tổng (`plan-note/00`), ADR-001, ma trận năng lực trình duyệt, nguyên mẫu xuất video 5 cảnh/60 giây | Nguyên mẫu xuất được MP4; có bảng đo kèm cấu hình máy | AS-14, AS-15, AS-16 | Nguyên mẫu không đạt ở M2 |
| 3.2 | File 03 Interface Specification: schema dữ liệu cảnh, định dạng mẫu C→A, API quyền A→B, bảng mã lỗi, ranh giới dữ liệu, TC-I | B và C xác nhận; mỗi điểm lệch L-AB, L-CA có quyết định | Chốt trước M-RUN | Chốt chậm làm trượt tích hợp |

### 5.4. Giai đoạn 4 — Xây dựng

| Mã | Sản phẩm đầu ra gồm | Tiêu chí chấp nhận | Giả định / ràng buộc | Rủi ro |
| --- | --- | --- | --- | --- |
| 4.1 | Repo frontend/backend, PostgreSQL, Identity cookie + CSRF, client OpenAPI, CI, PWA shell, log có che dữ liệu nhạy cảm | Một lệnh dựng được cả hệ thống; CI xanh từ checkout sạch | Chạy trên Windows/macOS/Linux | Lỗi môi trường (cổng, Docker) |
| 4.2.1 | Editor 5 cảnh: chữ tiếng Việt, ảnh cục bộ, undo/redo, thao tác bằng bàn phím | Không mất dấu; ảnh lỗi bị từ chối kèm lý do | Không bắt người dùng sửa JSON thô | Ảnh lỗi, xoay sai theo EXIF |
| 4.2.2 | 5 mẫu trình chiếu và bộ khung vàng | Đổi mẫu không mất dữ liệu; khung vàng khớp | Mẫu chỉ gồm màu và bố cục | OB-04 chưa được nghiệm thu |
| 4.2.3 | Bộ dựng Canvas dùng chung cho xem trước và xuất; font đóng gói; watermark | Pixel xem trước trùng pixel xuất | AS-17 | Render khác nhau giữa các máy |
| 4.2.4 | Worker xuất MP4 H.264 bằng WebCodecs, ghi theo luồng, tiến trình, hủy | MP4 phát được; đúng độ phân giải | Chrome/Edge 153 | Không mã hóa được 1080p |
| 4.2.5 | Lưu vào IndexedDB/OPFS, tự lưu, gói `.promptvideo.json` có checksum | Mở lại được sau refresh; gói bị sửa bị chặn | Nội dung không rời máy | Hạn mức lưu trữ của trình duyệt |
| 4.2.6 | Client reserve → complete/cancel, thông điệp lỗi tiếng Việt, lọc mẫu theo danh mục C | Lượt thứ 4 bị chặn; hủy không mất lượt; mẫu bị gỡ không còn để chọn | Máy chủ B, C chạy được | Người dùng tắt mạng để lách lượt |
| 4.2.7 | Tạm dừng/tiếp tục xuất; trang báo không tương thích khi mở ứng dụng | RQ-04, RQ-10 đạt | Không phải tính năng mới | Giới hạn của `VideoEncoder` |
| 4.3.1 | Đăng ký, đăng nhập, khóa tài khoản, phân vai, rate limit, seed admin | Sai 5 lần thì khóa; phân biệt 401 và 403 | ASP.NET Identity | Lộ dữ liệu tài khoản |
| 4.3.2 | `EntitlementService`, reserve → complete/cancel, `UsagePeriod`, 720p + watermark, chặn lượt thứ 4 | OB-13, OB-14 đạt | Thời gian theo UTC; idempotency key | Vượt quota khi xuất song song |
| 4.3.3 | Cổng thanh toán (giả lập có gắn nhãn), webhook, gia hạn, hóa đơn VAT, 5 chỗ | Kích hoạt ≤ 5 phút (OB-15); giao dịch trùng không cấp quyền hai lần | Phí cổng 1.500.000 VND; nộp hồ sơ cổng ở M2 | Cổng thật duyệt chậm |
| 4.3.4 | Trang xem gói, lượt còn, hạn dùng, hóa đơn, danh sách chỗ | Dữ liệu khớp snapshot máy chủ | Dùng API có sẵn | — |
| 4.4.1 | API trạng thái mẫu (Draft/Active/Retired), kho tài sản đồ họa có bản quyền | Người thường gọi bị 403; mẫu bị gỡ biến mất với người dùng | Tài sản 700.000 VND (AS-11) | Tệp tải lên quá lớn |
| 4.4.2 | Tra cứu người dùng, lịch sử xuất, cộng lượt bù có ghi audit | Mỗi lần cộng lượt có `AuditEvent` | Giao tiếp C→B được chốt (B-06) | Cộng lượt làm sai hạn mức |
| 4.4.3 | Dashboard số liệu tổng hợp, job đo MT-06/MT-07 | Không chứa nội dung người dùng | Dữ liệu ẩn danh | Lộ dữ liệu trên dashboard |
| 4.4.4 | Giao diện quản trị cho 4.4.1–4.4.3 | Admin thao tác được; người thường bị chặn | Có thể thay bằng API nếu thiếu giờ | Trễ vì dồn việc kiểm thử |

### 5.5. Giai đoạn 5 — Tích hợp và kiểm thử

| Mã | Sản phẩm đầu ra gồm | Tiêu chí chấp nhận | Giả định / ràng buộc | Rủi ro |
| --- | --- | --- | --- | --- |
| 5.1 | Bản chạy A–B–C trên máy chủ thật; kết quả TC-I; tệp HAR chứng minh 0 byte nội dung rời máy; bảng đo trên Chrome/Edge | Mỗi TC-I có kết quả kèm tệp bằng chứng; OB-09 có bằng chứng | Có Docker và seed dữ liệu | Môi trường chạy lỗi |
| 5.2 | Báo cáo OB-01 (thời gian xuất ≤ 1,5 lần thời lượng), OB-02 (bộ nhớ tăng < 15%), OB-03 (checksum 3 máy), ma trận trình duyệt | Đạt trên máy tham chiếu | Mượn được máy tham chiếu | Không đo được bộ nhớ trong Worker |
| 5.3 | Kết quả bộ 134 tổ hợp dấu, 100 lần xuất, thử với 10 người dùng | OB-07; OB-06 ≥ 95%; OB-08 đạt 8/10 người | Tuyển được người thử | Thiếu người thử |

### 5.6. Giai đoạn 6 — Triển khai và bàn giao

| Mã | Sản phẩm đầu ra gồm | Tiêu chí chấp nhận | Giả định / ràng buộc | Rủi ro |
| --- | --- | --- | --- | --- |
| 6.1 | Container, HTTPS, job migration, sao lưu và khôi phục, báo cáo quét bảo mật | Triển khai mới và rollback không mất dữ liệu; không còn lỗi Critical/High | VPS 600.000 VND + tên miền 300.000 VND | Chi phí hạ tầng vượt trần |
| 6.2 | Seed dữ liệu, kịch bản demo, hướng dẫn sử dụng, hướng dẫn xử lý sự cố | Người ngoài nhóm chạy lại được | Theo kịch bản trong `plan-note/06` | Demo lỗi môi trường |
| 6.3 | Final Report, bài học kinh nghiệm, danh mục bàn giao, slide bảo vệ | Đủ các mục của PM11:85; phân biệt rõ phần đã đạt và chưa đạt | Không ghi số đo chưa đo | Thiếu bằng chứng |
| 6.4 | Biên bản nghiệm thu (Validate Scope), bàn giao vận hành, bắt đầu đo OB-16 | Nhà tài trợ ký | Thứ tự: Control Quality → Validate Scope → Close | Chưa đạt OB bắt buộc |

## 6. Kiểm quy tắc phân rã

| Quy tắc (PM05) | Kết quả |
| --- | --- |
| **100%** | Mỗi nút cha bằng đúng tổng các nút con: 4.2 = 139,0; 4.3 = 60,0; 4.4 = 40,0; giai đoạn 4 = 263,0; cả dự án = 498,3 h. Không có việc ngoài phạm vi (âm thanh, AI, khung dọc bị loại) |
| **8/80** | Gói lá nhỏ nhất 8 h (2.2, 4.4.2, 6.4), lớn nhất 28,7 h (4.2.1). Tất cả nằm trong 8–80 h |
| **Một kỳ báo cáo** | Gói lớn nhất xong trong một kỳ báo cáo hai tuần |
| **Đầu ra, không phải hành động** | Mọi gói đặt tên bằng danh từ chỉ sản phẩm: tài liệu, mô-đun, báo cáo, biên bản |
| **Đủ nhỏ** | Mỗi gói có một người phụ trách và tiêu chí đo được |
| **Không phải lịch** | WBS không ghi ngày làm hay quan hệ phụ thuộc; phần đó thuộc file 10 |

## 7. Planning package và kế hoạch phân rã tiếp

Theo rolling wave, mỗi planning package được chia thành hoạt động trước mốc tương ứng:

| PP | Phân rã trước | Người phân rã |
| --- | --- | --- |
| 1.3 | M3 (18/10) | Việt Quang |
| 4.2.7, 5.2 | M3 (18/10) | Chiến |
| 5.3 | M5 (15/11) | Chiến |
| 6.1 | M5 (15/11) | Quang Anh |
| 6.4 | M6 (29/11) | Chiến |

## 8. Vấn đề cần quyết định

1. **Vượt trần công sức.** Tổng 498,3 h, trong khi ngân sách Charter là 450 h và trần OB-11 là 495 h. Con số này chưa gồm contingency (A 13 h, B 6 h). Hướng xử lý: hoãn hoặc cắt một phần planning package (ví dụ 4.2.7, 6.1) bằng Change Request, hoặc xin Nhà tài trợ nâng trần.
2. **Phân hệ C còn thiếu hai sản phẩm:** tình trạng máy chủ (health) và nơi ghi yêu cầu hỗ trợ (C-07). Bổ sung xong thì tổng giờ sẽ tăng.
3. **Gói 4.3.3 gộp phần đã làm với phần chưa làm** (hóa đơn VAT, 5 chỗ). Nên tách phần chưa làm thành planning package (B-04).
4. **Giờ của B và C là ước lượng top-down** (O và P cách đều M). Cần làm lại từ dưới lên (B-03, C-09).
5. **NF-07 và NF-08** (giấy phép thư viện và tài sản) chưa có gói nào, vì đã quyết định không giao việc rà soát giấy phép. Cần ghi cách xử lý trong file 04.
6. **Mã giai đoạn 1–6 khác đề xuất QĐ-03**: QĐ-03 chia nhánh theo module A/B/C, bản này chia theo giai đoạn. Cần chốt lại QĐ-03 và cập nhật mã WBS trong A_02 (nhánh 3.x cũ ứng với 3.1, 3.2 phần dữ liệu cảnh, 4.2.x và 5.x của bản này).
