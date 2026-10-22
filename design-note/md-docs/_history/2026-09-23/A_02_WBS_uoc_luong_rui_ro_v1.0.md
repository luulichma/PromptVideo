<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                       |                                     |
| --------------------- | ----------------------------------- |
| **Nhóm tiến trình**   | Planning                             |
| **Tên tài liệu**      | A_02 WBS, ước lượng và rủi ro — Nghiệp vụ A: Sản xuất video |
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
| 1  | Ver 1.0   | 2026-09-23    | Tạo mới        | Tách từ plan-note/planning_a.md: WBS 3.x và từ điển, hoạt động, PERT, lịch, chi phí, tiêu chí chất lượng, rủi ro, RACI, kiểm soát thay đổi, bảng chuyển vào bộ Planning | Nguyễn Thế Chiến | Phạm Quang Anh |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

## Mục lục

1. [Mục đích](#1-muc-dich)
2. [Phân rã công việc nhánh A — WBS và WBS Dictionary](#2-phan-ra-cong-viec-nhanh-a--wbs-va-wbs-dictionary)
   - 2.1 [Sơ đồ phân cấp nhánh A](#21-so-do-phan-cap-nhanh-a)
   - 2.2 [WBS Dictionary](#22-wbs-dictionary)
   - 2.3 [Đối chiếu phạm vi v2.1 với WBS (kiểm quy tắc 100%)](#23-doi-chieu-pham-vi-v21-voi-wbs-kiem-quy-tac-100)
3. [Hoạt động, ước lượng, lịch và chi phí](#3-hoat-dong-uoc-luong-lich-va-chi-phi)
   - 3.1 [Danh sách hoạt động](#31-danh-sach-hoat-dong)
   - 3.2 [Ước lượng ba điểm (PERT, `tE = (O + M + P) / 3`)](#32-uoc-luong-ba-diem-pert-te--o--m--p--3)
   - 3.3 [Mốc, lịch và năng lực](#33-moc-lich-va-nang-luc)
   - 3.4 [Chi phí và dự phòng](#34-chi-phi-va-du-phong)
4. [Tiêu chí chất lượng và khung kiểm thử](#4-tieu-chi-chat-luong-va-khung-kiem-thu)
5. [Rủi ro nhánh A](#5-rui-ro-nhanh-a)
   - 5.1 [Sổ rủi ro](#51-so-rui-ro)
   - 5.2 [EMV và contingency](#52-emv-va-contingency)
6. [Trách nhiệm nhánh A (RACI)](#6-trach-nhiem-nhanh-a-raci)
7. [Kiểm soát thay đổi](#7-kiem-soat-thay-doi)
8. [Phần chưa triển khai và quy tắc cập nhật](#8-phan-chua-trien-khai-va-quy-tac-cap-nhat)
9. [Chuyển vào bộ tài liệu Planning](#9-chuyen-vao-bo-tai-lieu-planning)

<div style="page-break-after: always"></div>

<!-- ============================== NỘI DUNG ============================== -->

## 1. Mục đích

Tài liệu này là **đầu vào WBS, ước lượng và rủi ro của nghiệp vụ A — Sản xuất video** theo `nhiem_vu_xay_dung_planning.md` §3.2: nhánh WBS 3.x và từ điển, hoạt động và phụ thuộc, PERT, chi phí, rủi ro, tiêu chí chất lượng. Phạm vi v2.1 và phạm vi trình diễn lấy từ A_01 §1.1; yêu cầu và TC lấy từ A_01 §3–§5.

Nguồn soạn là `plan-note/planning_a.md` (23/09/2026). Từ nay A_01 và A_02 là bản chính thức.

---

## 2. Phân rã công việc nhánh A — WBS và WBS Dictionary

Mã nhánh **3.x tạm theo QĐ-03** (1 Quản lý dự án · 2 Kết nối chung · 3 A · 4 B · 5 C · 6 Bàn giao). Giờ trong sơ đồ là **tE** tính từ dưới lên ở §3.2, không chia từ mốc 450 giờ.

Một số gói đã có sản phẩm từ trước khi có baseline này (kế hoạch 01, 04, 05 làm ngày 17–18/09). Giờ ghi cho các gói đó là **ước lượng công sức của deliverable**, không phải giờ thực tế. Nhóm chưa ghi nhật ký giờ, nên cột thực tế (AC) để trống cho tới khi đối chiếu (§8).

### 2.1. Sơ đồ phân cấp nhánh A

```
3. Sản xuất video ................................................ 225,3 h
│
├── 3.1  Định dạng dữ liệu cảnh và dự án ........................ 11,3 h   WP · đã có sản phẩm
├── 3.2  Trình soạn thảo bằng biểu mẫu .......................... 28,7 h   WP · đã có sản phẩm
├── 3.3  Thư viện mẫu trình chiếu ............................... 13,3 h   WP · đã có sản phẩm
├── 3.4  Bộ dựng khung hình và xem trước ........................ 24,7 h   WP · đã có sản phẩm
├── 3.5  Bộ xuất MP4 theo luồng (kèm nguyên mẫu, ADR-001) ....... 32,0 h   WP · đã có sản phẩm
├── 3.6  Lưu và mở dự án cục bộ ................................. 15,3 h   WP · đã có sản phẩm
├── 3.7  Kiểm quyền xuất với B .................................. 13,0 h   WP · đang làm (còn A3.7.3)
├── 3.8  Nối danh mục mẫu C và hiển thị quyền ................... 10,7 h   WP · đang làm (còn A3.8.3)
├── 3.9  Kiểm thử tích hợp và bằng chứng trình diễn A ........... 16,3 h   WP · chưa bắt đầu
├── 3.10 Bằng chứng hiệu năng và tính xác định v2.1 ............. 28,0 h   Planning package
├── 3.11 Nghiệm thu độ tin cậy, tiếng Việt và dễ dùng v2.1 ...... 20,7 h   Planning package
└── 3.12 Tạm dừng xuất và báo trình duyệt không hỗ trợ khi mở ... 11,3 h   Planning package
```

**Kiểm quy tắc:**

- **8/80:** gói nhỏ nhất 10,7 h (3.8), lớn nhất 32,0 h (3.5). Tất cả nằm trong 8–80 h.
- **100%:** tổng 12 gói = 225,3 h = nhánh 3. Bảng §2.3 cho thấy mỗi yêu cầu v2.1 của A thuộc đúng một gói, và không gói nào chứa việc ngoài phạm vi.
- **Deliverable:** mỗi gói đặt tên theo sản phẩm bàn giao, không theo hành động.
- **Planning package** (3.10–3.12): chưa có hoạt động bên dưới, sẽ phân rã theo rolling wave trước mốc tương ứng.

### 2.2. WBS Dictionary

| WBS | Gói | Deliverable | Tiêu chí chấp nhận | Giả định / ràng buộc | Người làm | Mốc v2.1 · mốc đợt | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | Định dạng dữ liệu cảnh và dự án | Schema Zod `ProjectDocumentV1`, `SceneV1`, `TextLayerV1`, `ImageLayerV1`, `TemplateManifestV1`; luật validation và timeline | Round-trip JSON không mất dữ liệu; sai phiên bản bị từ chối; TC-A-01, TC-A-02 đạt | Định dạng chốt ở M1 (Charter). Đổi schema phải có migration | Chiến | M1 · M-REQ 17/09 | Đã có sản phẩm; test xanh 23/09 |
| 3.2 | Trình soạn thảo bằng biểu mẫu | Màn hình editor: danh sách 5 cảnh, ô nhập chữ, chèn ảnh, undo/redo, vùng an toàn, điều hướng bàn phím | TC-A-03, TC-A-05, TC-A-33, TC-A-34 đạt | Không bắt người dùng sửa JSON thô (RQ-07) | Chiến | M5 · M-RUN 25/09 | Đã có sản phẩm; test xanh 23/09 |
| 3.3 | Thư viện mẫu trình chiếu | 5 mẫu (`classic`, `bold`, `minimal`, `story`, `promo`) và khung vàng tương ứng | TC-A-06 đạt; mọi ô chữ nằm trong vùng an toàn | Mẫu chỉ là bảng màu và bố cục, không dùng ảnh mua ngoài. Tài sản đồ hoạ (nếu có) thuộc C | Chiến | M3 · M-RUN 25/09 | Đã có sản phẩm; OB-04 chưa nghiệm thu |
| 3.4 | Bộ dựng khung hình và xem trước | `renderFrame`, vẽ chữ tiếng Việt bằng font đóng gói, chuyển cảnh, watermark, canvas xem trước | TC-A-03, TC-A-08 đạt; xem trước trùng pixel với xuất | AS-17 (render giống nhau giữa trình duyệt) còn mở | Chiến | M3 · M-RUN 25/09 | Đã có sản phẩm; test xanh 23/09 |
| 3.5 | Bộ xuất MP4 theo luồng | Trang probe, ADR-001, capability matrix; Worker mã hoá H.264 30 fps; ghi OPFS/file/bộ đệm; tiến trình, ETA, hủy; kiểm dung lượng; `validateMp4` | TC-A-09, TC-A-10, TC-A-11, TC-A-13, TC-A-14 đạt; MP4 mẫu phát được | AS-14, AS-15, AS-16, AS-32 còn mở. 1080p chưa qua probe ở môi trường headless | Chiến | M2 (nguyên mẫu), M4 · M-RUN 25/09 | Đã có sản phẩm; test xanh 23/09 |
| 3.6 | Lưu và mở dự án cục bộ | Lưu IndexedDB + OPFS, tự lưu 800 ms, phục hồi sau sự cố; xuất/nhập `.promptvideo.json` có checksum | TC-A-21, TC-A-22, TC-A-35 đạt | Charter cho phép bỏ lưu/mở nếu nguyên mẫu M2 không đạt; nguyên mẫu đã đạt nên không dùng quyền này | Chiến | M5 · M-RUN 25/09 | Đã có sản phẩm; test xanh 23/09 |
| 3.7 | Kiểm quyền xuất với B | Client reserve/complete/cancel; điều phối "kiểm cục bộ → hỏi quyền → mã hoá → đóng reservation"; bảng ánh xạ mã lỗi sang tiếng Việt | TC-A-12, TC-A-15 → TC-A-19 đạt; TC-I-01, TC-I-02 đạt với máy chủ B thật | Phụ thuộc gói B 4.2/4.3 và hợp đồng A↔B trong file 03 | Chiến | M5 · M-RUN 25/09 | Đang làm: client và ánh xạ lỗi xong (test xanh 23/09); chưa chạy với máy chủ thật (A3.7.3) |
| 3.8 | Nối danh mục mẫu C và hiển thị quyền | Editor đọc `/api/templates` và lọc mẫu Active; chế độ tương thích cho dự án dùng mẫu bị ẩn; bảng quyền ở ô Xuất cập nhật sau refresh/đổi gói | TC-A-07, TC-I-04 đạt | Phụ thuộc C-05 (thống nhất trạng thái mẫu) và G-04 | Chiến | M5 · M-RUN 25/09 | Đang làm: A3.8.1, A3.8.2 xong (test xanh 23/09); còn A3.8.3 |
| 3.9 | Kiểm thử tích hợp và bằng chứng trình diễn A | E2E luồng thật với máy chủ; tệp HAR chứng minh 0 byte; bảng đo trên Chrome 153 / Edge 153; cập nhật RTM | TC-A-24, TC-A-25, TC-A-26, TC-I-01 → TC-I-05 có kết quả Đạt/Lỗi/Chưa thử kèm tệp bằng chứng | Chạy được `compose.yaml` và seed tài khoản thử | Chiến | M4 · M-TEST 27/09 | Chưa bắt đầu |
| 3.10 | Bằng chứng hiệu năng và tính xác định v2.1 | Báo cáo đo OB-01 (1080p ≤ 1,5×), OB-02 (×10 < 15%), OB-03 (checksum 3 máy), ma trận Tier 1/Tier 2 | TC-A-25, TC-A-27, TC-A-28 đạt trên máy tham chiếu và ma trận | Cần mượn máy tham chiếu và máy macOS/Linux; cần cách đo bộ nhớ trong Worker (R-A-02) | Chiến | M4 (01/11) | Planning package |
| 3.11 | Nghiệm thu độ tin cậy, tiếng Việt và dễ dùng v2.1 | Bộ 134 tổ hợp dấu và kết quả; nhật ký 100 lần xuất; biên bản thử với 10 người dùng mới | TC-A-04, TC-A-29, TC-A-30 đạt | Cần 10 người thử; OB-07 chỉ kiểm khung ngang (xem câu hỏi mở ở §8) | Chiến | M3 (OB-07), M6 (OB-06, OB-08) | Planning package |
| 3.12 | Tạm dừng xuất và báo trình duyệt không hỗ trợ khi mở | Nút tạm dừng/tiếp tục; trang báo không tương thích lúc khởi động | TC-A-31, TC-A-32 đạt | Charter RQ-04, RQ-10. Không phải tính năng mới | Chiến | M4 | Planning package |

### 2.3. Đối chiếu phạm vi v2.1 với WBS (kiểm quy tắc 100%)

| Yêu cầu Charter thuộc A | Gói WBS |
| --- | --- |
| RQ-01 dữ liệu cảnh | 3.1 |
| RQ-02 bộ dựng theo khung, RQ-05 xem trước, RQ-12 chuyển cảnh | 3.4 |
| RQ-03 xuất theo luồng; OB-01, OB-02 phần chức năng | 3.5 |
| RQ-04 tiến trình, hủy | 3.5 · **tạm dừng**: 3.12 |
| RQ-06 thư viện 5 mẫu; OB-04 | 3.3 · lọc theo danh mục C: 3.8 |
| RQ-07 biểu mẫu, RQ-09 chèn ảnh | 3.2 |
| RQ-08 lưu/mở file cục bộ | 3.6 |
| RQ-10 trình duyệt không hỗ trợ, mất kết nối | 3.5 (lúc xuất), 3.7 (mất kết nối khi hỏi quyền) · lúc mở ứng dụng: 3.12 |
| RQ-14, RQ-15 phía client (hỏi quyền, áp watermark/720p) | 3.7 |
| OB-09 bằng chứng 0 byte | 3.9 |
| OB-01, OB-02, OB-03 bằng chứng đo; NF-01, NF-02, NF-04 | 3.10 |
| OB-06, OB-07, OB-08; NF-05 | 3.11 |
| NF-06 chạy không cần cài đặt | 3.6 (lưu cục bộ), 3.5 (PWA dùng nền tảng từ nhánh 2) |

**Ngoài nhánh 3:** nền tảng repo, CI, OpenAPI, PWA shell (kế hoạch 02) thuộc nhánh 2. Máy chủ quyền (RQ-13 → RQ-17) thuộc nhánh 4. Danh mục mẫu và tài sản đồ hoạ phía máy chủ thuộc nhánh 5. NF-07, NF-08 (giấy phép thư viện và tài sản) **không** đặt trong nhánh 3 vì Chiến đã quyết định không giao việc rà soát giấy phép. Người lập file 05 cần ghi cách thể hiện hai yêu cầu này để WBS tổng vẫn phủ đủ 100%.

---

## 3. Hoạt động, ước lượng, lịch và chi phí

### 3.1. Danh sách hoạt động

Chỉ các work package mới có hoạt động. Planning package 3.10–3.12 chưa có hoạt động (quy tắc PM05:51). Gói đã có sản phẩm ghi ở mức tóm tắt để giữ đủ lịch sử. Gói còn làm (3.7–3.9) được tách chi tiết theo rolling wave.

Người làm của mọi hoạt động là Chiến. "Giờ" là giờ công ước lượng M. Ngày dự kiến tính theo năng lực ở §3.3.

| Mã | Hoạt động | Gói | Giờ | Predecessor | Quan hệ, lead/lag | Ngày dự kiến | Trạng thái |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| A3.1.1 | Định nghĩa schema và validation | 3.1 | 10 | — | — | 16–17/09 | Xong |
| A3.5.1 | Làm nguyên mẫu, probe và benchmark (kế hoạch 01) | 3.5 | 10 | A3.1.1 | SS, lag 4 h | 16–17/09 | Xong |
| A3.2.1 | Làm trình soạn thảo (kế hoạch 04) | 3.2 | 26 | A3.1.1 | FS | 17–18/09 | Xong |
| A3.3.1 | Làm 5 mẫu và khung vàng | 3.3 | 12 | A3.4.1 | SS, lag 4 h | 17–18/09 | Xong |
| A3.4.1 | Làm bộ dựng và xem trước | 3.4 | 22 | A3.1.1 | FS | 17–18/09 | Xong |
| A3.6.1 | Làm lưu/mở cục bộ và gói dự án | 3.6 | 14 | A3.2.1 | SS, lag 8 h | 18/09 | Xong |
| A3.5.2 | Làm Worker xuất, ghi theo luồng, hủy, kiểm dung lượng (kế hoạch 05) | 3.5 | 18 | A3.4.1, A3.5.1 | FS | 18/09 | Xong |
| A3.7.1 | Làm client reserve/complete/cancel và điều phối `exportProject` với 10 unit test | 3.7 | 5 | A3.5.2 | FF | 18/09 | Xong |
| A3.7.2 | Sửa ánh xạ mã lỗi reserve (401/403/400/404/409, bỏ 429), thông điệp tiếng Việt, thêm unit test cho từng mã | 3.7 | 4 | A3.7.1; hợp đồng lỗi A↔B trong file 03 (G-03) | FS | 23/09 | Xong (`reservation.test.ts`) |
| A3.7.3 | Chạy reserve/complete/cancel với máy chủ B thật: 3 lượt Free, lượt 4 bị chặn, hủy không mất lượt | 3.7 | 3 | A3.7.2; máy chủ B chạy bằng `compose.yaml` (bên ngoài, gói 4.2/4.3) | FS | 24/09 | Bị chặn: Docker daemon chưa chạy trên máy (23/09) |
| A3.8.1 | Đọc `/api/templates`, lọc mẫu đóng gói theo key Active; dự phòng khi ngoại tuyến | 3.8 | 4 | C-05 chốt trạng thái mẫu (bên ngoài) | FS | 23/09 | Xong (`catalog.test.ts`, E2E) |
| A3.8.2 | Chế độ tương thích: dự án dùng mẫu bị ẩn vẫn mở, xem trước, xuất được, có cảnh báo | 3.8 | 3 | A3.8.1 | FS | 23/09 | Xong (cùng E2E với A3.8.1) |
| A3.8.3 | Ô Xuất hiển thị gói, lượt còn, hạn dùng và lý do bị chặn sau refresh/đổi gói | 3.8 | 2 | A3.7.2 | SS, lag 2 h | 26/09 hoặc hoãn (§3.3) | Chưa bắt đầu |
| A3.9.1 | Viết E2E luồng thật: đăng nhập → tạo → xem trước → xuất ×3 → lượt 4 bị chặn | 3.9 | 5 | A3.7.3, A3.8.1 | FS | 25/09 (M-RUN) | Chưa bắt đầu |
| A3.9.2 | Thu HAR luồng A và quét nội dung (TC-A-24) | 3.9 | 3 | A3.9.1 | SS, lag 2 h | 25–26/09 | Chưa bắt đầu |
| A3.9.3 | Đo trên Chrome 153 và Edge 153: 60 giây 720p ×3, 1080p ×1, thời gian, bộ nhớ, kích thước, hash | 3.9 | 4 | A3.5.2 | SS với A3.9.1, lag 0 | 25–26/09 | Chưa bắt đầu |
| A3.9.4 | Cập nhật RTM A_01 §4, đóng gói bằng chứng, giao Việt Quang kiểm tra | 3.9 | 2 | A3.9.2, A3.9.3 | FF, lag 0 | 27/09 (M-TEST) | Chưa bắt đầu |

**Phụ thuộc bên ngoài** (loại External theo PM06:30):

- **E-1:** máy chủ B chạy được, có tài khoản Free thử (gói 4.2, 4.3; B §3.6.3). Đã có mã và test (plan-note/03).
- **E-2:** C chốt danh sách trạng thái mẫu (C-05).
- **E-3:** hợp đồng lỗi A↔B trong file 03 (G-03). Chiến làm, nên đây là phụ thuộc nội bộ về tài liệu.

**Chuỗi quyết định demo:** A3.7.2 → A3.7.3 → A3.9.1 → A3.9.2 → A3.9.4. Chuỗi này chỉ cho biết thứ tự ưu tiên. Đường găng chính thức do Việt Quang tính trong file 10, sau khi có dữ liệu của cả ba nhánh.

### 3.2. Ước lượng ba điểm (PERT, `tE = (O + M + P) / 3`)

Giờ công của một người. Cơ sở ước lượng là bottom-up theo deliverable, do Chiến đánh giá dựa trên khối lượng thật trong repo (số file, số test, các lỗi đã gặp). P lệch xa M hơn O ở mọi gói vì rủi ro chủ yếu là trình duyệt và máy đo, và rủi ro loại này kéo dài thời gian nhiều hơn là rút ngắn.

| Mã | Gói | O | M | P | tE | Cơ sở ước lượng | Độ tin cậy |
| --- | --- | -: | -: | -: | -: | --- | --- |
| 3.1 | Định dạng dữ liệu cảnh | 8 | 10 | 16 | 11,3 | 1 file schema, 3 file luật (`validation`, `timeline`, `createProject`), 3 file test (16 test). P tính thêm việc sửa theo Zod v4 và luật migration | Cao: đã có sản phẩm |
| 3.2 | Trình soạn thảo | 20 | 26 | 40 | 28,7 | Thư mục `features/editor` (5 thành phần, store, hook tài sản), lệnh undo/redo, nhập ảnh có EXIF; E2E trong `editor.spec.ts` và `package-and-images.spec.ts`. P tính xử lý ảnh lỗi/EXIF và điều hướng bàn phím, hai phần dễ phát sinh vòng sửa | Trung bình–cao |
| 3.3 | Thư viện mẫu | 8 | 12 | 20 | 13,3 | 5 mẫu × (bảng màu + 3 ô), 5 bộ khung vàng. P tính việc chỉnh ngưỡng so pixel khi đổi máy | Trung bình |
| 3.4 | Bộ dựng và xem trước | 16 | 22 | 36 | 24,7 | Bộ dựng tách khỏi React, xuống dòng giữ dấu (9 unit test), 3 E2E trùng pixel. P tính AS-17 (sai khác render giữa trình duyệt) | Trung bình |
| 3.5 | Bộ xuất MP4 theo luồng | 20 | 28 | 48 | 32,0 | Nguyên mẫu, ADR-001, Worker, 3 đường ghi, kiểm encoder và dung lượng (13 unit test), E2E trong `export.spec.ts`, `probe.spec.ts`, `benchmark.spec.ts`. P lớn nhất vì 1080p chưa qua probe headless và bộ nhớ trong Worker chưa đo được | Trung bình |
| 3.6 | Lưu và mở cục bộ | 10 | 14 | 22 | 15,3 | IndexedDB (Dexie) + OPFS, tự lưu, gói có checksum; 2 E2E. P tính khác biệt hạn mức lưu trữ giữa trình duyệt | Trung bình–cao |
| 3.7 | Kiểm quyền xuất với B | 9 | 12 | 18 | 13,0 | Phần xong 5 h (2 file, 10 unit test) + phần còn 7 h (A3.7.2, A3.7.3). P tính khả năng B đổi mã lỗi khi chốt file 03 | Trung bình |
| 3.8 | Danh mục mẫu C và hiển thị quyền | 7 | 9 | 16 | 10,7 | 3 hoạt động nhỏ trên API có sẵn. P tính việc C đổi tên trạng thái (Inactive/Retired) và định dạng manifest (A_01 §6.2) | Thấp–trung bình |
| 3.9 | Kiểm thử tích hợp và bằng chứng | 11 | 14 | 24 | 16,3 | 4 hoạt động. P tính lỗi môi trường Docker/Postgres (đã gặp: xung đột cổng 5432 ở plan-note/02) và Chrome có giao diện khác headless | Trung bình |
| 3.10 | Bằng chứng hiệu năng v2.1 (PP) | 16 | 24 | 44 | 28,0 | Ước lượng thô (ROM): 3 máy × chạy/đo/ghi + làm cách đo bộ nhớ Worker. P cao vì chưa có máy tham chiếu và chưa có phương pháp đo | Thấp |
| 3.11 | Nghiệm thu tin cậy, tiếng Việt, dễ dùng (PP) | 12 | 18 | 32 | 20,7 | ROM: soạn bộ 134 tổ hợp, script 100 lần xuất, 10 buổi thử người dùng. P tính việc tuyển người thử | Thấp |
| 3.12 | Tạm dừng và báo trình duyệt (PP) | 6 | 10 | 18 | 11,3 | ROM: tạm dừng Worker giữa hai khung, trang báo khởi động. P tính giới hạn tạm dừng của `VideoEncoder` | Thấp |
| | **Work package 3.1–3.9** | | **147** | | **165,3** | | |
| | **Planning package 3.10–3.12** | | **52** | | **60,0** | | |
| | **Tổng nhánh 3** | | **199** | | **225,3** | tE cao hơn M 26,3 h vì P lệch phải | |

### 3.3. Mốc, lịch và năng lực

| Mốc | Ngày | Nội dung nhánh A | Loại |
| --- | --- | --- | --- |
| M1 (Charter) | 13/09 | Định dạng dữ liệu cảnh chốt (3.1) | v2.1 |
| M2 (Charter) | 27/09 | Nguyên mẫu chứng minh bộ nhớ không tăng theo độ dài (3.5, 3.10) | v2.1 |
| M-JOIN | 19/09 | Chốt giao tiếp A↔B, A↔C. Mã đã khớp qua OpenAPI; **văn bản file 03 chưa có** | Đợt |
| M-RUN | 25/09 | Ba phần chạy cùng nhau: đăng nhập → nhập nội dung → hỏi quyền → MP4 → lượt 4 bị chặn; mẫu lấy từ C | Đợt |
| M-TEST | 27/09 | Kết quả kiểm thử A và tệp bằng chứng; Việt Quang kiểm tra | Đợt |
| M-CLOSE | 29/09 | Sẵn sàng nộp | Đợt |
| M3 (Charter) | 18/10 | OB-04, OB-07 (3.3, 3.4, 3.11) | v2.1 |
| M4 (Charter) | 01/11 | OB-01, OB-02, OB-03, OB-09 (3.5, 3.9, 3.10, 3.12) | v2.1 |
| M5 (Charter) | 15/11 | RQ-07 → RQ-09 đầy đủ; OB-13, OB-14 phía client (3.2, 3.6, 3.7, 3.8) | v2.1 |
| M6 (Charter) | 29/11 | OB-06, OB-08, OB-12 (3.11) | v2.1 |

Các gói 3.1–3.6 đã có sản phẩm trước mốc Charter tương ứng. Nghiệm thu OB vẫn theo mốc Charter và cần bằng chứng ở 3.9–3.11.

**Năng lực: có xung đột, cần Chiến quyết định.** Lúc lập bản này, phần A còn lại trong đợt là 23 h (A3.7.2 → A3.9.4). Sau khi làm A3.7.2, A3.8.1, A3.8.2 ngày 23/09, còn 19 h (A3.7.3, A3.8.3, A3.9.1 → A3.9.4). Theo `ke-hoach-hoan-thien-2-tuan.md` §4, tuần 2 của Chiến chỉ có 20 h, gồm cả việc tổng hợp 02, 03, 04, 05, 09. Đề xuất thứ tự:

| Ưu tiên | Hoạt động | Giờ | Lý do |
| --- | --- | ---: | --- |
| Bắt buộc trước M-RUN | A3.7.2 ✔, A3.7.3, A3.8.1 ✔ | 11 (còn 3) | Demo tích hợp cần hỏi quyền đúng và dùng mẫu từ C |
| Bắt buộc trước M-TEST | A3.9.1, A3.9.2, A3.9.3, A3.9.4 | 14 | Bằng chứng OB-09, số đo trình diễn, RTM |
| Hoãn sau 29/09 nếu thiếu giờ | A3.8.2 ✔, A3.8.3 | 5 (còn 2) | Không nằm trên kịch bản demo; giữ trong gói 3.8, báo nhóm theo §7 |

Phần bắt buộc còn 17 h (A3.7.3 và A3.9.x), trong khi tuần 2 có 20 h cho cả việc tổng hợp 02–05 và 09. Đây vẫn là rủi ro R-A-06 (§5).

### 3.4. Chi phí và dự phòng

| Hạng mục | Giá trị | Ghi chú |
| --- | ---: | --- |
| Giờ công tE: work package 3.1–3.9 | 165,3 h | Baseline effort phần có thể giao việc |
| Giờ công tE: planning package 3.10–3.12 | 60,0 h | ROM, độ chính xác thấp; tinh lại khi phân rã |
| **Tổng giờ công nhánh 3** | **225,3 h** | |
| Contingency reserve | 13 h | Từ EMV hai rủi ro cao R-A-02 và R-A-06 (§5.2). Nằm trong baseline, Chiến quản lý |
| **Cost baseline nhánh 3** | **238,3 h** | Quy đổi chi phí cơ hội theo Charter §8.3: 238,3 × 80.000 = 19.064.000 VND. Không phải tiền chi ra |
| Management reserve | cấp dự án | Không đặt ở nhánh. Dùng phải có change request và sponsor duyệt |
| Tiền mặt | 0 VND | Font Noto Sans đã đóng gói sẵn; mẫu không dùng ảnh mua; thư viện đều có sẵn |

Tổng giờ của A (238,3 h), B (66 h) và C phải được cộng lại trong file 05 và 11 rồi so với trần công sức 495 h (OB-11). Bản này không tự kết luận có vượt trần hay không.

**Mua, thuê, mượn:**

| Hạng mục | Cách có | Tiêu chí chọn | Cần trước |
| --- | --- | --- | --- |
| Máy tham chiếu (i5 thế hệ 10, 8 GB, Windows 11) | Mượn | Đúng cấu hình Charter §3.1; ghi CPU/RAM/GPU/driver thật | M4 (3.10) |
| Máy macOS và Linux có Chrome | Mượn | Chrome ổn định hiện hành; có GPU thật, không dùng máy ảo headless | M4 (3.10) |
| Người dùng thử OB-08 | Mời tình nguyện | Chưa dùng sản phẩm; thuộc ba nhóm người dùng mục tiêu của Business Case | M6 (3.11) |
| Công cụ, thư viện | Không mua | Không giao việc rà soát giấy phép phần mềm | — |

---

## 4. Tiêu chí chất lượng và khung kiểm thử

Dùng khung 3 cấp Unit / Integration / E2E của C §7.1, *tạm theo QĐ-06*.

| Cấp | Công cụ, môi trường | Phạm vi A | Bằng chứng lưu | Ngưỡng đạt | Người thực hiện / kiểm tra |
| --- | --- | --- | --- | --- | --- |
| **Unit** | Vitest 5.0.1, `src/frontend` | Schema, validation, timeline, lịch sử lệnh, vùng an toàn, xuống dòng tiếng Việt, mẫu, kiểm encoder, kiểm dung lượng, điều phối xuất | Output `npx vitest run` | 100% test đạt; coverage `core/rendering` + `core/export` ≥ 70% (chưa đo) | Chiến / Việt Quang |
| **Integration** | Playwright 1.63.0 + Chrome 153, máy chủ giả lập bằng `page.route` | Worker → MP4, trùng pixel, khung vàng, gói dự án, EXIF, giao thức reservation với máy chủ giả lập | Playwright report, `artifacts/*.json`, MP4 mẫu | 100% test đạt | Chiến / Việt Quang |
| **E2E** | Frontend + API thật (`compose.yaml`), Chrome 153 và Edge 153, Windows 11 | TC-I-01 → TC-I-05; HAR; số đo trình diễn | Video màn hình, HAR, bảng đo, commit SHA | Không lỗi Blocker/Critical trên luồng demo; HAR có 0 byte nội dung | Chiến chạy; Việt Quang kiểm tra; Quang Anh xác nhận |

**Kiểm tra chéo:** Việt Quang đọc tài liệu (inspection) và chạy lại `npx vitest run`, `npx playwright test` trên máy mình, rồi ghi kết quả vào biên bản. Quang Anh xác nhận. Mỗi REQ-A và NF-A nối được tới ít nhất một TC (A_01 §4).

---

## 5. Rủi ro nhánh A

### 5.1. Sổ rủi ro

Thang *tạm theo QĐ-05*: P và I từ 1–5; P×I ≤ 6 thấp, 7–12 trung bình, ≥ 13 cao. Chỉ tính EMV cho rủi ro cao.

| ID | Nguyên nhân → sự kiện → hậu quả | RBS | P | I | P×I | Chiến lược, phòng ngừa | Trigger | Contingency | Chủ rủi ro |
| --- | --- | --- | -: | -: | -: | --- | --- | --- | --- |
| R-A-01 | Encoder phần cứng/driver không hỗ trợ H.264 1080p (headless Chrome 152 đã báo không đạt) → gói trả phí không xuất được 1080p trên máy đó → OB-01 (đo ở 1080p) không chứng minh được | Technical | 3 | 4 | 12 | **Mitigate:** probe 1080p trên Chrome/Edge có giao diện ngay ở A3.9.3; kiểm encoder trước reserve nên không mất lượt | `isConfigSupported` 1080p trả false trên Chrome 153 có giao diện | Công bố giới hạn theo máy/trình duyệt; đo OB-01 trên máy tham chiếu ở 3.10; nếu vẫn lỗi thì lập CR về tiêu chí OB-01 | Chiến |
| R-A-02 | `performance.memory` không có trong Worker → không đo được bộ nhớ đỉnh của đường xuất thật → OB-02 (mục tiêu kỹ thuật quan trọng nhất) không có bằng chứng | Technical | 4 | 4 | **16** | **Mitigate:** đo bộ nhớ tiến trình bằng công cụ hệ điều hành hoặc `performance.measureUserAgentSpecificMemory()` (cần cross-origin isolation); chốt phương pháp trước M3 | Đến 18/10 (M3) chưa có phương pháp đo lặp lại được | Theo Assumption Log AS-16: công bố giới hạn rõ, lập CR điều chỉnh cách chứng minh OB-02 | Chiến |
| R-A-03 | Client tắt mạng sau khi reserve → `complete` không tới máy chủ → reservation hết hạn, B trả lượt → người dùng Miễn phí xuất quá 3 video/tháng (vẫn 720p, vẫn có watermark) → OB-14 bị lách | Financial | 3 | 3 | 9 | **Accept + Escalate** sang B: đây là giới hạn của việc kiểm quyền ở client đã được chấp nhận trong Charter (RQ-14). Ghi vào file 03 | Tỷ lệ reservation hết hạn / hoàn tất trên dashboard C vượt ngưỡng do B và C chốt ở file 03 | B quyết định cách tính reservation hết hạn (ví dụ tính là đã dùng); A không đổi luồng khi chưa có CR | Việt Quang |
| R-A-04 | Ánh xạ mã lỗi A↔B lệch (**đã xảy ra**: 403 hết lượt bị báo "gói không cho phép độ phân giải", chuỗi tiếng Anh lọt ra) → người dùng hiểu sai lý do → OB-14 "thông báo rõ" không đạt | Technical | 2 | 3 | 6 | **Mitigate:** A3.7.2 đã sửa và có unit test cho từng mã (23/09; P hạ từ 4 xuống 2); chốt bảng mã lỗi ở file 03 | TC-A-18 không đạt | Hiển thị thông điệp chung kèm mã HTTP, không hiện chuỗi của máy chủ | Chiến |
| R-A-05 | Trạng thái mẫu chưa thống nhất (Inactive/Retired) và chưa chạy với máy chủ C thật → demo "mẫu từ C" không chạy ở M-RUN. (Phần đọc danh mục đã làm 23/09) | Project Management | 3 | 3 | 9 | **Mitigate:** A3.8.1 (đã làm) lọc theo danh sách API trả về, vốn chỉ gồm mẫu Active, nên không phụ thuộc tên trạng thái | 24/09 C-05 chưa chốt | Demo bằng seed 5 mẫu Active, đổi trạng thái bằng `POST /api/admin/templates/{key}/status` với tài khoản admin seed | Chiến |
| R-A-06 | Chiến vừa làm A (còn 23–25 h) vừa tổng hợp 02, 03, 04, 05, 09 trong tuần có 20 h → trượt M-RUN hoặc M-TEST | Organizational | 4 | 4 | **16** | **Mitigate:** làm theo thứ tự ưu tiên ở §3.3; báo nhóm khi vượt giờ quá 20% (quy tắc kế hoạch 2 tuần) | 25/09 chưa xong A3.7.3 và A3.8.1; hoặc giờ thực tế vượt kế hoạch > 20% | Hoãn A3.8.2, A3.8.3 sang sau 29/09; dùng 4 h đệm; đề nghị nhóm chia lại việc tổng hợp | Chiến |
| R-A-07 | Font, khử răng cưa hoặc GPU khác nhau giữa máy (AS-17) → khung khác nhau → OB-03 không đạt | Technical | 3 | 3 | 9 | **Mitigate:** font đóng gói, khung xác định, khung vàng | Khung vàng lệch trên máy thứ hai | CR chuyển tiêu chí sang checksum khung trước encoder | Chiến |
| R-A-08 | Safari/Firefox hoặc cửa sổ ẩn danh không có OPFS hoặc hạn mức nhỏ → xuất bị từ chối hoặc dồn vào RAM | Technical | 3 | 2 | 6 | **Mitigate:** kiểm dung lượng trước reserve (đã có); chỉ cam kết Tier 1 | Người dùng Tier 2 báo lỗi dung lượng | Hướng dẫn chọn "Lưu thẳng vào tệp" | Chiến |
| R-A-09 | Không mượn được máy tham chiếu và máy macOS/Linux → không đo OB-01/03/06 đúng điều kiện Charter | External | 3 | 3 | 9 | **Mitigate:** hỏi mượn máy từ M3; ghi cấu hình thật khi đo | Đến M3 chưa có máy | Đo trên máy gần cấu hình nhất, ghi rõ sai khác, không kết luận đạt OB | Chiến |
| R-A-10 | Reservation sống 30 phút nhưng Charter không giới hạn độ dài video → video dài xuất quá 30 phút → `complete` trả 409 → lượt không bị trừ | Technical | 2 | 3 | 6 | **Escalate** sang file 03: chọn TTL hoặc cách gia hạn | TC-A-36 ghi được 409 khi đo video dài | B điều chỉnh TTL theo độ dài dự kiến (cần CR) | Việt Quang |
| R-A-11 | Có đề nghị thêm âm thanh, khung dọc, AI (bản C từng có audio) → phạm vi phình | Project Management | 3 | 3 | 9 | **Avoid:** danh mục loại trừ ở A_01 §1.1; mọi đề nghị qua §7 | Có TC hoặc REQ mới nhắc tới âm thanh/khung dọc/AI | Từ chối qua CCB, ghi Change Log | Chiến |

### 5.2. EMV và contingency

Thang xác suất để quy đổi EMV **tạm đề xuất**, chờ file 08 của Việt Quang: P1 = 10%, P2 = 30%, P3 = 50%, P4 = 70%, P5 = 90%.

| Rủi ro | P | Xác suất | Tác động (giờ) | Cơ sở tác động | EMV |
| --- | -: | -: | -: | --- | -: |
| R-A-02 | 4 | 70% | 8 | Làm và kiểm cách đo bộ nhớ tiến trình ngoài `performance.memory` | 5,6 h |
| R-A-06 | 4 | 70% | 10 | Giờ phải làm thêm hoặc dời: A3.8.2, A3.8.3 (5 h) + A3.9.4 và một phần A3.9.x (5 h) | 7,0 h |
| **Tổng** | | | | | **12,6 h → 13 h** |

Các rủi ro trung bình và thấp chưa tính tiền. Chúng nằm trong watch list và được rà ở mỗi mốc.

---

## 6. Trách nhiệm nhánh A (RACI)

R = làm, A = chịu trách nhiệm cuối (đúng một người mỗi dòng), C = góp ý trước khi làm, I = được thông báo. Cặp kiểm tra chéo theo bảng phân công, *tạm theo QĐ-02*.

| Gói / việc | Chiến | Việt Quang | Quang Anh | GV / Sponsor |
| --- | --- | --- | --- | --- |
| 3.1 Định dạng dữ liệu cảnh | R, A | I | C (mẫu dùng dữ liệu cảnh) | I |
| 3.2 Trình soạn thảo | R, A | I | I | I |
| 3.3 Thư viện mẫu | R, A | I | C (danh mục, trạng thái) | I |
| 3.4 Bộ dựng và xem trước | R, A | I | I | I |
| 3.5 Bộ xuất MP4 theo luồng | R, A | C (thời điểm reserve) | I | I |
| 3.6 Lưu và mở cục bộ | R, A | I | I | I |
| 3.7 Kiểm quyền xuất với B | R, A | C (mã lỗi, TTL, idempotency) | I | I |
| 3.8 Danh mục mẫu C và hiển thị quyền | R, A | C (snapshot quyền) | C (trạng thái, manifest) | I |
| 3.9 Kiểm thử tích hợp và bằng chứng | R, A | C (dữ liệu B trong TC-I) | C (khung kiểm thử, bằng chứng) | I |
| 3.10–3.12 Planning package | R, A | I | C | I |
| Kiểm tra chéo A_01, A_02 | R (chuẩn bị) | R (kiểm tra) | **A** (xác nhận) | I |

---

## 7. Kiểm soát thay đổi

Nhánh A dùng **quy trình thay đổi chung** trong `planning_b.md` §10, sẽ đưa vào PMP (G-09): mô tả thay đổi → đánh giá tác động (phạm vi, lịch, chi phí, rủi ro) → CCB duyệt, hoãn hoặc từ chối → ghi Change Log, kể cả đề nghị bị từ chối → cập nhật baseline từ mốc hiện tại trở đi, không sửa số quá khứ. Mẫu đề nghị là `_template/02_Change_Request_Form`.

Riêng nhánh A:

- **Scope baseline A** = A_01 §3 + A_01 §4 + §2. Việc sau bắt buộc có CR: đổi số mẫu, đổi ngưỡng OB/NF, thêm âm thanh, khung dọc hay AI, bỏ tạm dừng (RQ-04), chuyển một planning package sang loại trừ.
- **Quyền giảm phạm vi có sẵn** (Charter §11): nếu nguyên mẫu M2 không đạt, Giám đốc dự án được giảm xuống 3 mẫu và bỏ lưu/mở mà không chờ duyệt, nhưng phải báo Nhà tài trợ trong 24 giờ và vẫn ghi Change Log. Quyền này không được đụng RQ-13 → RQ-17.
- **Dời hoạt động trong một gói** (ví dụ hoãn A3.8.2 sang sau 29/09) không đổi scope baseline. Chỉ cần báo nhóm và cập nhật lịch ở file 10.
- **Quy tắc phiên bản:** Draft thì sửa trực tiếp. Đã Approved mà đổi nội dung thì tăng phiên bản, đưa bản cũ vào `_archive`.

---

## 8. Phần chưa triển khai và quy tắc cập nhật

**Chưa triển khai.** Các mục này vẫn nằm trong đặc tả và WBS, không được ghi là đã xong.

1. **Ô Xuất cập nhật quyền sau khi đổi gói** (A3.8.3). Phần đọc danh mục mẫu C (A3.8.1, A3.8.2) đã làm ngày 23/09.
2. **Chạy thật với máy chủ B và C** (A3.7.3). Ánh xạ mã lỗi (A3.7.2) đã sửa ngày 23/09.
3. **Chạy với máy chủ B thật** (TC-I-01 → TC-I-05). Mọi test hiện tại dùng máy chủ giả lập.
4. **Bằng chứng 0 byte** (TC-A-24): chưa có HAR.
5. **Số đo trên Chrome 153 / Edge 153 có giao diện** (TC-A-25). Số hiện có là HeadlessChrome 152.
6. **Planning package 3.10–3.12:** OB-01, OB-02, OB-03 trên máy tham chiếu và ba máy; OB-06 (100 lần); OB-07 (134 tổ hợp); OB-08 (10 người); tạm dừng xuất; trang báo trình duyệt khi mở.
7. **Coverage ≥ 70%** (NF-A-09): chưa đo.
8. **Giờ thực tế (AC)** của các gói 3.1–3.6: chưa có nhật ký. Không suy ra từ ước lượng.

**Điểm lệch giữa Charter và bản hiện tại (ghi để xử lý, không tự sửa):**

- Charter §2 mô tả "dựng bằng HTML/CSS" rồi vẽ lên canvas. Mã hiện tại vẽ trực tiếp bằng Canvas 2D (ADR-001). Cần xác nhận có phải lập CR cho mô tả mức cao hay không.
- OB-07 yêu cầu kiểm "cả khung ngang và dọc", trong khi khung dọc bị loại khỏi phạm vi. Bản này chỉ đặt tiêu chí cho khung ngang (vấn đề số 6 trong kế hoạch 2 tuần).

**Quy tắc cập nhật.** Làm theo rolling wave: trước mỗi mốc Charter (M3, M4, M6) phân rã planning package tương ứng thành hoạt động. Cột Status của RTM chỉ đổi khi có lệnh chạy hoặc tệp bằng chứng mới, và ghi kèm ngày. Mỗi con số chỉ lấy từ một nguồn: ngưỡng lấy từ Charter, số đo lấy từ `src/frontend/artifacts/` và `docs/benchmark-results.md`, thiết kế lấy từ `design-note/plan-note/`.

---

## 9. Chuyển vào bộ tài liệu Planning

Tên file theo `nhiem_vu_xay_dung_planning.md` §1.

| Mục bản A | File đích | Nội dung chuyển | Ghi chú |
| --- | --- | --- | --- |
| A_01 §3 (toàn bộ), A_01 §5, A_01 §6 | `_module-input/A_San_xuat_video/A_01_Yeu_cau_va_kiem_thu_v1.0.md` | Yêu cầu, trạng thái, TC-A, phụ thuộc | Theo §3.1 của file nhiệm vụ |
| §2, §3, §4, §5 | `_module-input/A_San_xuat_video/A_02_WBS_uoc_luong_rui_ro_v1.0.md` | WBS, dictionary, hoạt động, PERT, chi phí, rủi ro, tiêu chí chất lượng | Theo §3.2 của file nhiệm vụ |
| A_01 §2.2 thuật ngữ; A_01 §3.3 QT-A; A_01 §3.4 REQ-A; A_01 §3.5 NF-A (NF-A-04 → NF-G-01) | `02_Requirements_Specification` | Gom cùng REQ-B/C; bỏ trùng | Tiền tố theo kết quả QĐ-04 |
| A_01 §3.6 bảng trạng thái | `02_Requirements_Specification`, `06_Quality_Plan_and_Test_Cases` | Luồng ngoại lệ; TC gắn trạng thái | |
| A_01 §6.1, A_01 §6.2, A_01 §6.3 | `03_Interface_Specification` | Hợp đồng A↔B, C→A, bảng mã lỗi, L-AB-1…7, L-CA-1…7, TC-I-01…06 | Chiến viết (G-03, G-04) |
| A_01 §1.1 bảng v2.1 / trình diễn; A_01 §1.1 loại trừ; §8 phần chưa triển khai | `04_Project_Scope_Statement` | Bảng phạm vi trình diễn so với v2.1 (G-06) | |
| §2.1, §2.2, §2.3 | `05_WBS_and_WBS_Dictionary` | Nhánh 3.x; kiểm 100% và 8/80; ghi chú NF-07/NF-08 | Mã theo kết quả QĐ-03 |
| §4, A_01 §5 | `06_Quality_Plan_and_Test_Cases` | Khung 3 cấp, ngưỡng, bằng chứng, TC-A | Quang Anh gom |
| A_01 §4 | `09_Requirements_Traceability_Matrix.xlsx` | 24 dòng RTM của A | Chiến làm sau khi có 06 |
| §3.1, §3.2, §3.3 | `10_Schedule_and_CPM.xlsx` | Hoạt động, quan hệ FS/SS/FF, lag, PERT, mốc, xung đột năng lực | Việt Quang gom |
| §3.4 | `11_Cost_Budget_Procurement.xlsx` | 225,3 h + contingency 13 h; 0 VND tiền mặt; hạng mục mượn và tiêu chí chọn | Việt Quang gom |
| §6 | `12_RACI_and_Communication_Matrix.xlsx` | RACI nhánh A | Quang Anh gom |
| §5.1, §5.2 | `13_Risk_Register.xlsx` (thang: `08_Risk_Management_Plan`) | R-A-01…11, EMV, thang xác suất tạm | Việt Quang gom; thang theo QĐ-05 |
| §7 | `01_Project_Management_Plan` | Quy định riêng của nhánh A trong kiểm soát thay đổi | Quy trình chung lấy từ B §10 (G-09) |
| Giả định mới (dưới đây) | `01_Initiating/02_Assumption_Log` | Cập nhật sổ hiện có, không tạo bản mới | Theo §2 của file nhiệm vụ |

**Giả định mới phát sinh cần ghi vào Assumption Log:**

1. Môi trường trình diễn là Chrome 153.0.8010.53 và Edge 153.0.4234.48 trên Windows 11. Kết quả đo ở đây không thay cho máy tham chiếu.
2. Thang quy đổi P1–P5 → 10–90% chỉ dùng tạm để tính EMV, cho tới khi file 08 chốt.
3. Có thể mượn được máy tham chiếu và máy macOS/Linux trước M4 (liên quan R-A-09).

---

*Tài liệu căn cứ: Project Charter v2.1, Assumption Log v2.1, `nhiem_vu_xay_dung_planning.md`, `00_Viec_can_lam_tu_ke_hoach_B_C.md`, `planning_b.md`, `05_Ke_hoach_nghiep_vu_C_v1.0.md`, `ke-hoach-hoan-thien-2-tuan.md`, `design-note/plan-note/00–06`, `design-note/research/01–02`, và mã nguồn `src/` đọc ngày 23/09/2026.*
