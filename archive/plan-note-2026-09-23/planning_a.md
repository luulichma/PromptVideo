<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                       |                                     |
| --------------------- | ----------------------------------- |
| **Nhóm tiến trình**   | Planning                             |
| **Tên tài liệu**      | Kế hoạch nghiệp vụ A — Sản xuất video |
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
| 1  | Ver 1.0   | 2026-09-23    | Tạo mới        | Đặc tả phần A (nhập chữ/ảnh, mẫu, xem trước, xuất MP4 bằng WebCodecs, lưu/mở cục bộ, hỏi quyền B, áp quyền được cấp); RTM; nhánh WBS 3.x và từ điển; hoạt động, PERT, chi phí; TC-A; R-A; RACI; phụ thuộc với B và C; bảng chuyển vào bộ Planning | Nguyễn Thế Chiến | Phạm Quang Anh |
| 2  | Ver 1.0   | 2026-09-23    | Cập nhật trạng thái | Sửa ánh xạ mã lỗi reserve (A3.7.2), nối danh mục mẫu C (A3.8.1, A3.8.2); cập nhật RTM, TC, R-A-04/05. Tách thành `design-note/md-docs/02_Planning/_module-input/A_San_xuat_video/A_01…`, `A_02…`; từ đây sửa ở A_01/A_02 | Nguyễn Thế Chiến | Phạm Quang Anh |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

## Mục lục

1. [Mục đích và phạm vi tài liệu](#1-muc-dich-va-pham-vi-tai-lieu)
2. [Căn cứ lập và thuật ngữ](#2-can-cu-lap-va-thuat-ngu)
3. [Đặc tả yêu cầu nghiệp vụ A](#3-dac-ta-yeu-cau-nghiep-vu-a)
   - 3.1 [Mô tả tổng quan](#31-mo-ta-tong-quan)
   - 3.2 [Tác nhân](#32-tac-nhan)
   - 3.3 [Quy tắc cứng của nhánh A](#33-quy-tac-cung-cua-nhanh-a)
   - 3.4 [Yêu cầu chức năng REQ-A](#34-yeu-cau-chuc-nang-req-a)
   - 3.5 [Yêu cầu phi chức năng NF-A](#35-yeu-cau-phi-chuc-nang-nf-a)
   - 3.6 [Trạng thái, cách xử lý và kiểm thử](#36-trang-thai-cach-xu-ly-va-kiem-thu)
4. [Ma trận truy vết yêu cầu](#4-ma-tran-truy-vet-yeu-cau)
5. [Phân rã công việc nhánh A — WBS và WBS Dictionary](#5-phan-ra-cong-viec-nhanh-a--wbs-va-wbs-dictionary)
6. [Hoạt động, ước lượng, lịch và chi phí](#6-hoat-dong-uoc-luong-lich-va-chi-phi)
7. [Tiêu chí chất lượng và tình huống kiểm thử](#7-tieu-chi-chat-luong-va-tinh-huong-kiem-thu)
8. [Rủi ro nhánh A](#8-rui-ro-nhanh-a)
9. [Trách nhiệm nhánh A (RACI)](#9-trach-nhiem-nhanh-a-raci)
10. [Kiểm soát thay đổi](#10-kiem-soat-thay-doi)
11. [Phần chưa triển khai và quy tắc cập nhật](#11-phan-chua-trien-khai-va-quy-tac-cap-nhat)
12. [Phụ thuộc với B và C](#12-phu-thuoc-voi-b-va-c)
13. [Chuyển vào bộ tài liệu Planning](#13-chuyen-vao-bo-tai-lieu-planning)

<div style="page-break-after: always"></div>

<!-- ============================== NỘI DUNG ============================== -->

## 1. Mục đích và phạm vi tài liệu

Tài liệu này là **kế hoạch mức gói công việc của nghiệp vụ A — Sản xuất video**: từ bản thảo người dùng nhập trên trình duyệt tới file MP4 nằm trên máy người dùng. Chiến phụ trách nghiệp vụ A. Tài liệu phục vụ dòng giai đoạn 3 của Chiến trong `phan-cong-theo-giai-doan.xlsx`: *"Viết yêu cầu A: nhập chữ/ảnh, mẫu, xem trước, xuất MP4, lưu/mở cục bộ; luồng chính, lỗi và tiêu chí tiếng Việt, tốc độ, bộ nhớ, riêng tư"*. Điều kiện hoàn thành của dòng này: *mỗi yêu cầu có mã, tiêu chí đo, gói việc và tình huống kiểm thử*.

Tài liệu có hai vai trò:

1. **Đầu vào `A_01` và `A_02`** trong `_module-input/A_San_xuat_video/`. Bảng chia mục ở §13.
2. **Bản mẫu thống nhất cho B và C.** Cấu trúc 11 mục giữ nguyên như bản B, thêm §12 (phụ thuộc) và §13 (bảng chuyển). Các lỗi đã ghi trong `00_Viec_can_lam_tu_ke_hoach_B_C.md` được tránh như sau:

| Lỗi đã thấy ở B/C | Cách bản A xử lý |
| --- | --- |
| Dùng mã WBS 7.x/8.x của WBS v2.0 và mốc 450 h cũ (B-01, C-12) | Dùng nhánh **3.x** và tính giờ từ dưới lên (§5, §6), *tạm theo QĐ-03* |
| O và P cách đều M nên tE luôn bằng M (B-03, C-09) | O/M/P lệch theo rủi ro thật của từng gói, có cơ sở và độ tin cậy (§6.2) |
| Ghi "đã kiểm chứng" mà không trỏ tới test hoặc lệnh (B-05) | Cột Status của RTM trỏ tới file test và lệnh đã chạy ngày 23/09/2026 (§4) |
| Link tương đối sai (B-02) | Mọi link tính từ thư mục `plan-note/` |
| Tự viết TC cho module khác, còn audio (C-03) | Chỉ viết TC-A; TC tích hợp chỉ đề xuất, để file 03 chốt (§12.3) |
| Vai trò "PM" và cặp kiểm tra chéo bị đảo (C-01, QĐ-01, QĐ-02) | Việt Quang kiểm tra, Quang Anh xác nhận; RACI mỗi dòng đúng một A (§9) |
| Thiếu trigger, contingency, chủ rủi ro (C-11) | Mỗi R-A có đủ ba cột này, dùng thang QĐ-05 (§8) |

### 1.1. Phạm vi v2.1 và phạm vi trình diễn

**Phạm vi v2.1** là toàn bộ yêu cầu của nghiệp vụ A trong Charter v2.1 (RQ-01 → RQ-10, RQ-12; OB-01 → OB-04, OB-06 → OB-09; NF-01 → NF-06). Tài liệu đặc tả đủ phạm vi này. Phần chưa làm được giữ lại dưới dạng planning package, không bị xoá.

**Phạm vi trình diễn** là phần A cần chạy được trong đợt làm bài 16–29/09/2026, theo `ke-hoach-hoan-thien-2-tuan.md` §3:

> Nhập chữ tiếng Việt và ảnh cục bộ, chọn **một** mẫu, xem trước, tạo video 5 cảnh/60 giây và xuất MP4 bằng WebCodecs trên một môi trường Chrome/Edge có ghi phiên bản. Ghi thời gian thực đo, không tuyên bố đạt mọi chỉ tiêu hiệu năng của Charter.

| Hạng mục | Phạm vi v2.1 | Phạm vi trình diễn (đợt 16–29/09) |
| --- | --- | --- |
| Mẫu | Từ 5 mẫu dùng được (OB-04) | Trình diễn 1 mẫu. Mã nguồn đã có 5 mẫu, nhưng OB-04 chưa được nghiệm thu |
| Trình duyệt | Tier 1: Chrome/Edge trên Windows, Chrome trên macOS/Linux. Tier 2: Safari/Firefox chỉ xuất khi probe đạt | Chrome 153.0.8010.53 và Edge 153.0.4234.48 trên Windows 11 (máy của Chiến) |
| Độ phân giải | 720p và 1080p theo quyền | 720p có watermark (gói Miễn phí). 1080p chỉ khi B kích hoạt gói Cá nhân bằng thanh toán giả lập |
| Hiệu năng, bộ nhớ | OB-01, OB-02, OB-03, OB-06 trên máy tham chiếu và ba máy | Đo và ghi số trên môi trường trình diễn; không kết luận đạt OB |
| Tiến trình | Thanh tiến trình, ETA, **tạm dừng** và hủy (RQ-04) | Tiến trình, ETA, hủy. **Chưa có** tạm dừng |
| Lưu/mở | File trên máy người dùng (RQ-08) | Tự lưu IndexedDB/OPFS, mở lại sau refresh; xuất/nhập gói `.promptvideo.json` |
| Tiếng Việt | 100% đúng trên bộ 134 tổ hợp dấu (OB-07) | Bộ chuỗi dấu trong test hiện có; bộ 134 tổ hợp **chưa có** |

**Loại trừ khỏi cả hai phạm vi:** âm thanh (thu âm, nhạc, TTS), AI sinh nội dung, khung dọc, upload video đầu vào, đồng bộ đám mây, tính năng mới ngoài Charter. Muốn thêm bất kỳ mục nào phải qua quy trình ở §10.

**Trạng thái.** Tài liệu ở trạng thái **Draft**. Kiểm tra chéo theo bảng phân công: **Việt Quang kiểm tra, Quang Anh xác nhận**.

---

## 2. Căn cứ lập và thuật ngữ

### 2.1. Căn cứ lập

| Nguồn | Nội dung sử dụng |
| --- | --- |
| [nhiem_vu_xay_dung_planning.md](../../notes/plans/nhiem_vu_xay_dung_planning.md) §2, §3.1, §3.2 | Cây tài liệu đích, quy ước mã, nội dung bắt buộc của `X_01` và `X_02` |
| [00_Viec_can_lam_tu_ke_hoach_B_C.md](00_Viec_can_lam_tu_ke_hoach_B_C.md) | QĐ-01 → QĐ-06 (chưa chốt), các lỗi của bản B và C |
| [planning_b.md](planning_b.md) | Cấu trúc 11 mục; hợp đồng reserve → complete/cancel; quy trình thay đổi B §10 |
| [05_Ke_hoach_nghiep_vu_C_v1.0.md](05_Ke_hoach_nghiep_vu_C_v1.0.md) | Trạng thái mẫu, `/api/templates`, khung kiểm thử 3 cấp C §7.1 |
| [ke-hoach-hoan-thien-2-tuan.md](../../notes/plans/ke-hoach-hoan-thien-2-tuan.md) §3–5 | Phạm vi demo A, mốc 17/09 → 29/09, năng lực 20 giờ/người/tuần |
| Project Charter v2.1 §3, §4, §6, §7, §8, §11 | OB-01 → OB-09; RQ-01 → RQ-10, RQ-12; NF-01 → NF-06; máy tham chiếu; mốc M0 → M7; đơn giá 80.000 VND/giờ; quyền giảm phạm vi khi nguyên mẫu không đạt |
| Assumption Log v2.1 | AS-10, AS-14, AS-15, AS-16, AS-17, AS-32, AS-34, AS-45, AS-47; CT-04, CT-06 |
| [01_Quy_tac_bat_buoc.md](../research-2026-09/01_Quy_tac_bat_buoc.md) §7–11 | Quy tắc 100% và 8/80, planning package, RTM 7 cột, PERT chia 3, contingency/management reserve, RACI |
| [design-note/plan-note/00, 01, 02, 04, 05, 06](../../notes/mvp-plan/00-mvp-software-master-plan.md) | Kiến trúc, stack, checklist và kết quả kiểm chứng của phần A |
| Mã nguồn `src/frontend`, `src/backend/PromptVideo.Api/Modules/{Exports,Templates}` | Trạng thái thật của từng yêu cầu (đọc ngày 23/09/2026) |

### 2.2. Thuật ngữ

| Thuật ngữ | Định nghĩa dùng trong tài liệu này |
| --- | --- |
| **Cảnh (scene)** | Một đoạn của video gồm lớp ảnh, tiêu đề, phụ đề, thời lượng và chuyển cảnh. Kiểu `SceneV1` trong `core/project/schema.ts`. Dự án chuẩn có 5 cảnh, tổng 60 giây |
| **Dữ liệu cảnh (project document)** | JSON `ProjectDocumentV1` mô tả toàn bộ video: phiên bản, kích thước, fps, `templateId`, vùng an toàn, danh sách tài sản, danh sách cảnh. Là đầu vào duy nhất của bộ dựng (Charter RQ-01) |
| **Mẫu (template)** | Bộ trình bày thuần: bảng màu, vị trí và kiểu chữ các ô, thời lượng chuyển cảnh. Không chứa logic nghiệp vụ, không chứa nội dung người dùng. Kiểu `EditorTemplate` trong `core/templates/templates.ts` |
| **Danh mục mẫu** | Metadata mẫu trên máy chủ do C quản lý (`TemplateCatalogEntry`: key, tên, phiên bản, trạng thái, manifest). Phần hình ảnh của mẫu đóng gói sẵn trong frontend |
| **Dự án cục bộ** | Dự án chỉ tồn tại trên máy người dùng: metadata trong IndexedDB, ảnh trong OPFS. Máy chủ không có bản sao |
| **Gói dự án** | File `.promptvideo.json` có `packageVersion` và SHA-256 của từng ảnh, để chuyển dự án sang máy khác |
| **Bộ dựng (renderer)** | Hàm `renderFrame(project, timestamp, surface)` vẽ một khung bằng Canvas 2D. Xem trước và xuất dùng chung hàm này |
| **Khung xác định** | Khung thứ *n* chỉ phụ thuộc dữ liệu cảnh và `n / fps`, không phụ thuộc đồng hồ thật |
| **WebCodecs** | API mã hoá video có sẵn trong trình duyệt (`VideoEncoder`). A dùng H.264 High, 30 fps |
| **Mediabunny** | Thư viện ghép luồng H.264 thành MP4 ngay trong trình duyệt |
| **Ghi theo luồng** | Ghi MP4 từng phần vào OPFS hoặc file do người dùng chọn. Khi không có hai cách này thì dùng bộ đệm trong RAM (chỉ chứa dữ liệu đã nén, không chứa khung thô) |
| **Capability probe** | Kiểm tra năng lực trình duyệt bằng `VideoEncoder.isConfigSupported`, không dựa vào user-agent |
| **Tier 1 / Tier 2** | Mức cam kết trình duyệt ở `00-mvp-software-master-plan.md` §5 |
| **Snapshot quyền** | Bản chụp quyền của tài khoản do B trả (`GET /api/me/capabilities`). A chỉ dùng để hiển thị; quyết định cuối cùng nằm trong phản hồi reserve |
| **Reservation (lượt giữ chỗ)** | Lượt xuất B giữ cho một lần xuất: `reserve` → `complete` hoặc `cancel`, hết hạn sau 30 phút |
| **Idempotency key** | Khoá của **một lần thử** xuất. Gửi lại cùng khoá thì nhận lại reservation cũ, không mất thêm lượt |
| **`grantedHeight`, `watermarkRequired`** | Độ cao và cờ watermark B cấp cho reservation. A mã hoá đúng hai giá trị này |
| **Khung vàng (golden frame)** | Ảnh chụp chuẩn ở đầu/giữa/cuối mỗi cảnh, dùng để phát hiện render sai lệch |

---

## 3. Đặc tả yêu cầu nghiệp vụ A

### 3.1. Mô tả tổng quan

Nghiệp vụ A chạy **hoàn toàn trong trình duyệt**. Máy chủ chỉ tham gia ở hai điểm: hỏi quyền xuất (B) và đọc danh mục mẫu (C).

```
Tạo dự án 5 cảnh → Nhập chữ tiếng Việt / chèn ảnh cục bộ → Chọn mẫu → Xem trước
        │                                   │
        └── Tự lưu IndexedDB + OPFS ◄───────┘      (không gửi gì lên máy chủ)
                                            │
Bấm Xuất ─► Kiểm cục bộ: dự án hợp lệ → encoder hỗ trợ → đủ dung lượng
              │ (lỗi ở đây: từ chối, KHÔNG tốn lượt)
              ▼
           Hỏi quyền B: reserve(idempotencyKey, requestedHeight)
              │ (bị từ chối: thông báo lý do, KHÔNG mã hoá)
              ▼
           Mã hoá theo grantedHeight + watermarkRequired trong Worker
              ├─ Xong  → complete → giao file MP4
              └─ Hủy / lỗi / ngoại lệ → cancel → trả lượt
```

Ranh giới dữ liệu: request gửi máy chủ chỉ chứa `idempotencyKey`, `requestedHeight`, `reservationId`, cookie phiên và token chống giả mạo. Chữ, ảnh, tên file ảnh, dữ liệu cảnh và MP4 không bao giờ rời máy (Charter OB-09).

### 3.2. Tác nhân

| Tác nhân | Vai trò trong nghiệp vụ A |
| --- | --- |
| **Người dùng chưa đăng nhập** | Tạo, sửa, xem trước, lưu và mở dự án cục bộ. **Không xuất được**; bấm Xuất thì được nhắc đăng nhập |
| **Người dùng đã đăng nhập** | Thêm quyền xuất MP4 theo gói (Miễn phí: 720p, có watermark, 3 lượt/tháng; Cá nhân/Doanh nghiệp: 1080p, không watermark) |
| **Trình duyệt** | Môi trường chạy. Năng lực mã hoá và dung lượng lưu trữ quyết định có cho xuất hay không |
| **Nghiệp vụ B (máy chủ quyền)** | Cấp hoặc từ chối reservation; quyết định `grantedHeight` và `watermarkRequired` |
| **Nghiệp vụ C (danh mục mẫu)** | Cho biết mẫu nào đang được phép dùng (`/api/templates`) |

### 3.3. Quy tắc cứng của nhánh A

Mã `QT-A-n` đặt riêng để không trùng với `RQ-01…RQ-17` của Charter.

- **QT-A-1 — Nội dung không rời máy.** Không request, log hay bản ghi máy chủ nào chứa chữ, ảnh, tên file ảnh, dữ liệu cảnh hoặc MP4.
- **QT-A-2 — Kiểm cục bộ trước, hỏi quyền sau.** Thứ tự bắt buộc: dự án hợp lệ → encoder hỗ trợ đúng cấu hình → đủ dung lượng → reserve. Lỗi phát hiện được mà không cần máy chủ thì không được làm mất lượt.
- **QT-A-3 — Không có reservation thì không mã hoá.** Khung đầu tiên chỉ được mã hoá sau khi reserve thành công (Charter RQ-14, OB-13).
- **QT-A-4 — Máy chủ quyết định chất lượng.** A mã hoá đúng `grantedHeight` và `watermarkRequired`, bỏ qua lựa chọn trên giao diện.
- **QT-A-5 — Reservation nào cũng phải được đóng.** Thành công thì `complete`. Hủy, lỗi hay ngoại lệ đều `cancel`, kể cả khi ngoại lệ ném ra giữa chừng.
- **QT-A-6 — Mỗi lần thử một idempotency key.** Gửi lại cùng lần thử thì dùng lại khoá.
- **QT-A-7 — Khung xác định.** Khung = f(dữ liệu cảnh, `frameIndex / fps`). Xem trước và xuất dùng chung `renderFrame`.
- **QT-A-8 — Font đóng gói.** Chỉ vẽ bằng font đi kèm ứng dụng (Noto Sans Variable), không dùng font cài trên máy.
- **QT-A-9 — Giải phóng tài nguyên.** Worker, encoder, file handle và bitmap được giải phóng trong `finally`, dù kết quả ra sao.

### 3.4. Yêu cầu chức năng REQ-A

Mã `REQ-A-nn` **tạm theo QĐ-04**. Cột "Phạm vi": **D** là có trình diễn trong đợt 16–29/09; **V** là chỉ thuộc phạm vi v2.1, chưa triển khai.

| ID | Yêu cầu | Luồng chính | Ngoại lệ / lỗi | Tiêu chí chấp nhận đo được | Phạm vi |
| --- | --- | --- | --- | --- | --- |
| REQ-A-01 | Tạo và kiểm tra dữ liệu cảnh | Người dùng đặt tên → hệ thống tạo dự án 5 cảnh, tổng 60 giây, 30 fps, 1280×720 theo `ProjectDocumentV1` | Thời lượng âm, thiếu cảnh, tổng vượt giới hạn, chuyển cảnh dài hơn cảnh, tiêu đề trống, ảnh mất tài sản → báo lỗi, chặn xuất | Dự án mới hợp lệ ngay; mỗi lỗi chặn đều bị gắn mức *error*; sai phiên bản dữ liệu bị từ chối kèm thông báo tiếng Việt | D |
| REQ-A-02 | Nhập chữ tiếng Việt bằng biểu mẫu | Nhập tiêu đề/phụ đề; chỉnh căn lề, cỡ, màu, xuống dòng; vùng an toàn hiển thị như công cụ phụ | Chữ tràn vùng an toàn → cảnh báo, không chặn xuất | Không mất dấu hay tách dấu khỏi chữ khi xuống dòng; từ quá dài vẫn giữ nguyên; đường viền vùng an toàn không có trong khung xuất | D |
| REQ-A-03 | Chèn ảnh từ máy người dùng | Chọn file → giải mã, xoay theo EXIF, lưu vào OPFS/IndexedDB; chọn cover/contain, vị trí, tỷ lệ | Ảnh > 12 MB, cạnh > 8192 px hoặc file hỏng → thông báo tên file và lý do; dự án không bị hỏng | Ảnh EXIF xoay đúng chiều; ảnh vượt giới hạn bị từ chối; không có request mang byte ảnh | D |
| REQ-A-04 | Chọn mẫu | Chọn một mẫu trong thư viện → bố cục, màu, kiểu chữ đổi; dữ liệu người dùng giữ nguyên | — | Đổi qua mọi mẫu không mất chữ; khung vàng từng mẫu khớp ảnh chuẩn | D (1 mẫu) / V (5 mẫu, OB-04) |
| REQ-A-05 | Dùng danh mục mẫu của C | Khi mở editor, đọc `GET /api/templates` → chỉ cho chọn mẫu có trạng thái Active | Không gọi được máy chủ → dùng danh sách đóng gói, ghi rõ là danh sách ngoại tuyến; dự án đang dùng mẫu đã bị ẩn → vẫn mở và xuất được, có cảnh báo | Mẫu C chuyển sang Retired biến mất khỏi danh sách chọn sau khi tải lại; dự án cũ dùng mẫu đó vẫn mở được | D |
| REQ-A-06 | Xem trước theo timeline | Phát/tua trên canvas; hiển thị đúng khung tại thời điểm chọn, có chuyển cảnh vào/ra | — | Pixel xem trước trùng pixel xuất tại cùng timestamp; một timestamp luôn cho một khung | D |
| REQ-A-07 | Xuất MP4 theo luồng bằng WebCodecs | Worker dựng từng khung → `VideoEncoder` H.264 → Mediabunny ghép MP4 → ghi dần vào OPFS hoặc file người dùng chọn; không có thì dùng bộ đệm | Hết dung lượng → từ chối trước khi hỏi quyền; lỗi mã hoá → dọn file tạm, trả lượt | MP4 phát được; codec AVC, 30 fps, độ phân giải đúng quyền; lệch thời lượng ≤ 1 khung; không có khung đen đầu/cuối | D |
| REQ-A-08 | Tiến trình, hủy và tạm dừng | Hiện số khung đã xong, ETA (sau 10 khung đầu), nút Hủy | Hủy → dừng Worker, `cancel` reservation, báo "đã hoàn lượt" | Hủy xong không còn Worker nào chạy; lượt được trả. **Tạm dừng/tiếp tục** (Charter RQ-04): chưa làm | D (tiến trình, hủy) / V (tạm dừng) |
| REQ-A-09 | Phát hiện trình duyệt không hỗ trợ | Trước khi hỏi quyền, gọi `isConfigSupported` cho đúng độ phân giải và fps | Không có `VideoEncoder` hoặc cấu hình bị từ chối → thông báo tiếng Việt, không hỏi quyền | Không có reservation nào được tạo khi encoder không hỗ trợ. Trang báo không tương thích ngay khi mở ứng dụng: chưa làm | D (lúc xuất) / V (lúc mở) |
| REQ-A-10 | Hỏi quyền B trước mỗi lần xuất | `POST /api/exports/reservations` kèm idempotency key và độ cao yêu cầu → xong thì `complete`; hủy/lỗi/ngoại lệ thì `cancel` | Máy chủ từ chối → không mã hoá (xem REQ-A-12) | 100% lần mã hoá có reservation trước; mọi ngả kết thúc đều đóng reservation; gửi lại dùng cùng khoá | D |
| REQ-A-11 | Áp quyền được cấp | Mã hoá theo `grantedHeight`; vẽ watermark khi `watermarkRequired = true` | Giao diện xin 1080p nhưng được cấp 720p → mã hoá 720p | Gói Miễn phí: MP4 720p có watermark; gói trả phí: 1080p không watermark (OB-14) | D |
| REQ-A-12 | Báo rõ lý do bị từ chối | Ánh xạ phản hồi máy chủ sang thông điệp tiếng Việt: chưa đăng nhập, hết lượt tháng, độ phân giải không hợp lệ, mất kết nối, lỗi máy chủ | — | Mỗi mã lỗi ở §12.1 hiện đúng một thông điệp tiếng Việt đúng lý do; không có chuỗi tiếng Anh từ máy chủ lọt ra giao diện | D |
| REQ-A-13 | Tự lưu và phục hồi cục bộ | Mỗi thay đổi ghi bản nháp ngay, ghi bản chính sau 800 ms; ảnh trong OPFS | Refresh, đóng tab, mất mạng → mở lại vẫn còn dự án và ảnh | Tải lại trang: dự án, 5 cảnh và ảnh còn nguyên; không gọi máy chủ khi lưu | D |
| REQ-A-14 | Xuất/nhập gói dự án | Xuất `.promptvideo.json` kèm SHA-256 từng ảnh; nhập trên máy khác | Sai phiên bản, sai checksum → chặn trước khi ghi, dự án hiện có không bị ảnh hưởng | Gói chuyển máy mở được; gói bị sửa bị từ chối (Charter RQ-08) | D |

### 3.5. Yêu cầu phi chức năng NF-A

Máy tham chiếu của Charter §3.1: Intel Core i5 thế hệ 10, 8 GB RAM, Chrome bản ổn định mới nhất, Windows 11. **Môi trường trình diễn**: Windows 11 Home 10.0.26200, Chrome 153.0.8010.53, Edge 153.0.4234.48. Cấu hình CPU/RAM của máy trình diễn sẽ ghi khi đo (TC-A-25). Cột "Số đo hiện có" chỉ ghi số đã đo thật và có file nguồn.

| ID | Yêu cầu | Ngưỡng v2.1 (nguồn) | Môi trường đo | Ngưỡng trình diễn | Số đo hiện có |
| --- | --- | --- | --- | --- | --- |
| NF-A-01 | Tiếng Việt | 100% ký tự đúng trên bộ 134 tổ hợp dấu, khung ngang (OB-07, NF-05) | Máy tham chiếu và Tier 1 | Bộ chuỗi dấu trong `text.test.ts` và `render-parity.spec.ts` đạt 100% | Test tự động xanh ngày 23/09 (§4). Bộ 134 tổ hợp **chưa có** |
| NF-A-02 | Tốc độ xuất | ≤ 1,5 × thời lượng video ở 1920×1080, 30 fps (OB-01, NF-01) | Máy tham chiếu | Đo và ghi thời gian video 60 giây ở 720p và 1080p; không kết luận OB-01 | 60 giây 720p qua Worker: 8,8 giây (HeadlessChrome 152, 12 luồng, 16 GiB; `src/frontend/artifacts/worker-benchmark.json`). **1080p chưa đo**: H.264 1080p không đạt probe trong môi trường headless đó |
| NF-A-03 | Bộ nhớ | Bộ nhớ đỉnh tăng < 15% khi độ dài tăng 10 lần (OB-02, NF-02) | Máy tham chiếu | Ba lần xuất liên tiếp không tăng bộ nhớ đơn điệu; không còn Worker nào sau khi xuất/hủy | JS heap luồng chính qua 3 lần: 35,44 → 32,07 → 36,11 MB (`src/frontend/docs/benchmark-results.md`). Bộ nhớ trong Worker **chưa đo được**. Phép thử ×10 **chưa làm** |
| NF-A-04 | Riêng tư | 0 byte nội dung người dùng rời trình duyệt (OB-09, NF-03). Đề xuất gộp thành `NF-G-01` (G-02) | DevTools/HAR trên luồng thật với máy chủ thật | Tệp HAR của luồng trình diễn không chứa chữ, tên ảnh, byte ảnh, dữ liệu cảnh, MP4 | `04-editor-core.md` ghi đã kiểm bằng DevTools nhưng **không có tệp bằng chứng**. Cần làm TC-A-24 |
| NF-A-05 | Trình duyệt hỗ trợ | Tier 1 xuất đầy đủ; Tier 2 xuất khi probe đạt; thiết bị di động không cam kết. Tỷ lệ thành công ≥ 95% trên 100 lần thử (OB-06) | Ma trận Tier 1/Tier 2 | Chrome 153 và Edge 153 trên Windows 11 | Chỉ có HeadlessChrome 152. Chrome/Edge có giao diện **chưa đo** |
| NF-A-06 | Đầu ra xác định | Checksum luồng video giống nhau trên 3 máy khác cấu hình (OB-03, NF-04) | 3 máy | Khung vàng 5 mẫu khớp trên máy trình diễn | Snapshot khung ổn định qua 3 lần trên **một** máy (SHA-256 `71e7a74e…`, `benchmark-results.md`). Ba máy **chưa đo** |
| NF-A-07 | Không treo giao diện | Giao diện vẫn thao tác được khi đang xuất | Tier 1 | Như v2.1 | `export.spec.ts` "the editor stays responsive while an export runs" xanh ngày 23/09 |
| NF-A-08 | Dễ dùng | Người mới tạo xong video đầu tiên trong 10 phút, ít nhất 8/10 người (OB-08). Bàn phím tới được mọi vùng chính | 10 người dùng thử | Chỉ kiểm phần bàn phím | `editor.spec.ts` "keyboard alone reaches…" xanh. Thử với người dùng **chưa làm** |
| NF-A-09 | Độ phủ kiểm thử | Mô-đun dựng và mã hoá ≥ 70% (OB-12) | CI | Báo cáo coverage của `core/rendering`, `core/export` | **Chưa đo** coverage |
| NF-A-10 | Chạy không cần cài đặt | Chỉ cần trình duyệt; cần Internet khi xuất (NF-06, CT-06) | Tier 1 | Soạn, xem trước, lưu chạy được khi máy chủ không phản hồi | `editor.spec.ts` "builds a project end to end with the backend unreachable" xanh |

### 3.6. Trạng thái, cách xử lý và kiểm thử

Mã trong `exportProject.ts` và `ExportPanel.tsx`. TC ở cột cuối liệt kê tại §7.2.

#### 3.6.1. Vòng đời một lần xuất

| Trạng thái | Trigger | Cách xử lý | Kiểm thử |
| --- | --- | --- | --- |
| **Sẵn sàng** | Dự án hợp lệ, đã đăng nhập | Bật nút Xuất; hiển thị gói, lượt còn lại, trần độ phân giải từ snapshot quyền | TC-A-01 |
| **Dự án còn lỗi** | Validation có mức *error* | Tắt nút Xuất, liệt kê lỗi; không hỏi quyền | TC-A-02 |
| **Kiểm cục bộ** | Bấm Xuất | Chạy lần lượt: hợp lệ → encoder → dung lượng. Chưa gọi máy chủ | TC-A-13, TC-A-14 |
| **Đang hỏi quyền** | Kiểm cục bộ đạt | `reserve(idempotencyKey, requestedHeight)` | TC-A-15, TC-A-17 |
| **Đang mã hoá** | Nhận reservation | Worker mã hoá theo `grantedHeight`/`watermarkRequired`; báo tiến trình, ETA | TC-A-09, TC-A-10, TC-A-16 |
| **Xuất thành công** | Worker báo xong | `complete` → giao file (OPFS/file/tải về) → "Đã tạo MP4 … MB (có watermark)" | TC-A-09, TC-A-15 |
| **Đã hủy** | Người dùng bấm Hủy | Gửi lệnh hủy vào Worker → dừng → `cancel` → "Đã hủy. Lượt xuất được hoàn lại"; Worker bị terminate | TC-A-11 |
| **Lỗi mã hoá** | Worker báo lỗi hoặc ném ngoại lệ | `cancel` trong `finally`; hiện thông báo lỗi; cho thử lại với khoá mới | TC-A-12 |

#### 3.6.2. Tình huống ngoại lệ

| Tình huống | Trigger | Cách xử lý | Kiểm thử |
| --- | --- | --- | --- |
| **Trình duyệt không hỗ trợ** | Không có `VideoEncoder`, hoặc `isConfigSupported` trả `false`/ném lỗi | Từ chối, mã `encoder`, thông báo tiếng Việt; **không reserve** | TC-A-13 |
| **Thiếu dung lượng** | `navigator.storage.estimate()` không đủ cho file ước tính cộng 64 MB dự trữ | Từ chối, mã `storage`, nêu dung lượng cần và còn; **không reserve**. Trình duyệt không ước lượng được thì vẫn cho xuất | TC-A-14 |
| **Chưa đăng nhập** | Reserve trả 401 | "Hãy đăng nhập để xuất video."; không mã hoá | TC-A-18 |
| **Hết lượt tháng** | Reserve trả 403 "Monthly export quota reached." | "Bạn đã dùng hết lượt xuất của tháng này…" kèm gợi ý nâng cấp; không hiện chuỗi tiếng Anh của máy chủ (đã sửa 23/09) | TC-A-18 |
| **Yêu cầu không hợp lệ** | Reserve trả 400 (độ cao không hỗ trợ, khoá sai) | Thông báo độ phân giải không hợp lệ, gợi ý chọn lại (đã sửa 23/09) | TC-A-18 |
| **Mất mạng trước khi hỏi quyền** | `fetch` ném lỗi | "Không liên hệ được máy chủ để kiểm tra quyền xuất…"; không mã hoá. Soạn thảo vẫn chạy | TC-A-19 |
| **Mất mạng sau khi mã hoá xong** | `complete` thất bại | Vẫn giao file (đóng reservation là nỗ lực tốt nhất). Reservation tự hết hạn sau 30 phút và B trả lượt. **Hệ quả: lượt không bị trừ** (R-A-03) | TC-A-20 |
| **Reservation hết hạn khi đang xuất** | Xuất lâu hơn 30 phút → `complete` trả 409 | Như dòng trên: file vẫn giao, lượt không bị trừ. Video 60 giây không chạm ngưỡng này; video dài có thể chạm (R-A-10) | TC-A-36 |
| **Mẫu bị ẩn** | C đổi mẫu sang Retired/Draft | Mẫu biến mất khỏi danh sách chọn; dự án đang dùng mẫu đó vẫn mở, xem trước và xuất được, có cảnh báo "mẫu không còn trong danh mục"; mẫu đó chỉ còn là giá trị hiện tại, không chọn lại được (đã làm 23/09, gói 3.8) | TC-A-07 |
| **Không đọc được danh mục mẫu** | `/api/templates` lỗi hoặc ngoại tuyến | Dùng danh sách mẫu đóng gói; không chặn soạn thảo | TC-A-07 |
| **Gói dự án hỏng hoặc bị sửa** | Sai `packageVersion` hoặc sai checksum | Từ chối trước khi ghi; dự án hiện có không đổi | TC-A-22 |
| **Ảnh không hợp lệ** | > 12 MB, cạnh > 8192 px, giải mã lỗi | Từ chối kèm tên file và lý do | TC-A-05 |

---

## 4. Ma trận truy vết yêu cầu

Cột theo `01_Quy_tac_bat_buoc.md` §7.4. Đường dẫn mã tính từ `src/frontend/src/` nếu không ghi khác.

**Quy ước cột Status:**

- **Có code + test xanh**: có mã, và test nêu ở cột Test Case đã chạy đạt ngày 23/09/2026 bằng lệnh `npx vitest run` (12 file, 79/79 test đạt) hoặc `npx playwright test` (23/23 test đạt, Chrome 153 qua Playwright 1.63.0, máy chủ được giả lập bằng `page.route`) trong `src/frontend`. Lần chạy đầu trong ngày (trước khi sửa A3.7.2, A3.8.1) là 66/66 và 22/22.
- **Có code, chưa test với máy chủ thật**: test chỉ chạy với máy chủ giả lập.
- **Có code, lệch hợp đồng**: có mã nhưng hành vi khác đặc tả ở §3.
- **Chưa làm**: planning package, chưa có mã.

Chưa dòng nào qua kiểm tra chéo (Việt Quang) hay nghiệm thu.

| Req ID | Requirement Description | Business Objective | Design Doc | Code Module | Test Case | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-A-01 | Tạo và kiểm tra dữ liệu cảnh 5 cảnh/60 giây | RQ-01, RQ-07 | plan-note/01 (schema), plan-note/04 | `core/project/schema.ts`, `validation.ts`, `timeline.ts`, `createProject.ts` | TC-A-01, TC-A-02, TC-A-33 | Có code + test xanh |
| REQ-A-02 | Nhập chữ tiếng Việt bằng biểu mẫu | RQ-07, OB-07 | plan-note/04 | `features/editor/SceneInspector.tsx`, `core/rendering/text.ts`, `core/project/safeArea.ts` | TC-A-03, TC-A-04, TC-A-34 | Có code + test xanh; TC-A-04 (134 tổ hợp) chưa làm |
| REQ-A-03 | Chèn ảnh cục bộ | RQ-09, OB-09 | plan-note/04 | `core/images/importImage.ts`, `core/storage/assetStore.ts` | TC-A-05 | Có code + test xanh |
| REQ-A-04 | Chọn mẫu, đổi mẫu không mất dữ liệu | RQ-06, OB-04 | plan-note/04 | `core/templates/templates.ts` | TC-A-06 | Có code + test xanh (5 mẫu); OB-04 chưa nghiệm thu |
| REQ-A-05 | Chỉ dùng mẫu Active theo danh mục C | RQ-06 | Charter §5.1 (giáp ranh A–C); file 03 (chưa lập) | `core/templates/catalog.ts`, `features/editor/useTemplateCatalog.ts`, `features/dashboard/DashboardPage.tsx`, `features/editor/EditorPage.tsx`. Backend (C): `Modules/Templates/TemplatesModule.cs` | TC-A-07, TC-I-04 (đề xuất) | Có code + test xanh; chưa chạy với máy chủ C thật |
| REQ-A-06 | Xem trước theo timeline, cùng bộ dựng với xuất | RQ-02, RQ-05, RQ-12 | plan-note/04, plan-note/05 | `core/rendering/renderer.ts`, `features/editor/PreviewCanvas.tsx` | TC-A-08 | Có code + test xanh |
| REQ-A-07 | Xuất MP4 theo luồng bằng WebCodecs | RQ-03, OB-01, OB-02 | plan-note/05; `src/frontend/docs/ADR-001-client-video-pipeline.md` | `core/export/exportWorker.ts`, `exportMp4.ts`, `outputTarget.ts`, `storageBudget.ts`, `validateMp4.ts` | TC-A-09, TC-A-14, TC-A-25, TC-A-26 | Có code + test xanh (TC-A-09, TC-A-14); TC-A-25/26 mới đo trên HeadlessChrome 152 |
| REQ-A-08 | Tiến trình, ETA, hủy; tạm dừng | RQ-04 | plan-note/05 | `core/export/exportClient.ts`, `features/editor/ExportPanel.tsx` | TC-A-10, TC-A-11, TC-A-31 | Có code + test xanh (tiến trình, hủy); **tạm dừng chưa làm** |
| REQ-A-09 | Phát hiện trình duyệt không hỗ trợ | RQ-10, AS-10 | plan-note/05; `src/frontend/docs/capability-matrix.md` | `core/export/encoderSupport.ts`, `core/capabilities/probe.ts` | TC-A-13, TC-A-32 | Có code + test xanh (lúc xuất); **trang báo lúc mở ứng dụng chưa làm** |
| REQ-A-10 | Hỏi quyền B trước mỗi lần xuất | RQ-14, OB-13 | plan-note/05; B §3.6.3 | `core/export/reservation.ts`, `core/export/exportProject.ts` | TC-A-12, TC-A-15, TC-A-17, TC-I-01 (đề xuất) | Có code, chưa test với máy chủ thật |
| REQ-A-11 | Áp `grantedHeight` và watermark theo quyền | RQ-15, OB-14 | plan-note/05; B REQ-B-07 | `core/export/exportProject.ts`, `core/rendering/renderer.ts` (`renderWatermark`) | TC-A-16, TC-I-03 (đề xuất) | Có code, chưa test với máy chủ thật |
| REQ-A-12 | Báo rõ lý do bị từ chối | RQ-10, OB-14 | §12.1 tài liệu này | `core/export/reservation.ts` (`describeStatus`) | TC-A-18, TC-A-19 | Có code + test xanh (đã sửa ánh xạ 403/400/429 ngày 23/09, A3.7.2); chưa chạy với máy chủ B thật |
| REQ-A-13 | Tự lưu và phục hồi cục bộ | RQ-08, NF-06 | plan-note/04 | `core/storage/database.ts`, `projectStore.ts`, `assetStore.ts`, `features/editor/editorStore.ts` | TC-A-21, TC-A-35 | Có code + test xanh |
| REQ-A-14 | Xuất/nhập gói dự án có checksum | RQ-08 | plan-note/04 | `core/package/projectPackage.ts` | TC-A-22 | Có code + test xanh |
| NF-A-01 | Tiếng Việt 134 tổ hợp | OB-07, NF-05 | plan-note/04 | `core/rendering/text.ts` | TC-A-03, TC-A-04 | Một phần: bộ chuỗi hiện có xanh; bộ 134 chưa làm |
| NF-A-02 | Tốc độ ≤ 1,5× ở 1080p30 | OB-01, NF-01 | plan-note/01, plan-note/05 | `core/export/*`; `e2e/benchmark.spec.ts` | TC-A-25 | Có số đo 720p một môi trường; 1080p chưa đo |
| NF-A-03 | Bộ nhớ < 15% khi dài ×10 | OB-02, NF-02 | plan-note/01, plan-note/05 | `core/export/outputTarget.ts` | TC-A-26, TC-A-27 | Có số đo JS heap luồng chính; Worker và ×10 chưa đo |
| NF-A-04 | 0 byte nội dung rời máy | OB-09, NF-03 | plan-note/04, plan-note/06 | Toàn bộ `core/*`; request chỉ ở `reservation.ts`, `useCapabilities.ts` | TC-A-24, TC-I-05 (đề xuất) | Chưa có tệp bằng chứng |
| NF-A-05 | Trình duyệt hỗ trợ, ≥ 95%/100 lần | OB-06, AS-10 | plan-note/00 §5; capability-matrix | `core/capabilities/probe.ts` | TC-A-25, TC-A-29 | Chưa làm (ma trận và 100 lần) |
| NF-A-06 | Checksum giống nhau trên 3 máy | OB-03, NF-04, AS-17 | plan-note/01 | `core/rendering/renderer.ts`; `e2e/golden.spec.ts` | TC-A-06, TC-A-28 | Khung vàng xanh trên 1 máy; 3 máy chưa làm |
| NF-A-07 | Không treo giao diện khi xuất | OB-08 | plan-note/05 | `core/export/exportWorker.ts` | TC-A-10 | Có code + test xanh |
| NF-A-08 | Dễ dùng: 10 phút, 8/10 người | OB-08 | plan-note/04 | `features/*` | TC-A-30, TC-A-34 | Bàn phím xanh; thử với người dùng chưa làm |
| NF-A-09 | Độ phủ ≥ 70% | OB-12 | plan-note/07 | `core/rendering`, `core/export` | — (báo cáo coverage) | Chưa đo |
| NF-A-10 | Chạy không cần cài đặt; soạn thảo không cần máy chủ | NF-06, CT-06 | plan-note/02 (PWA), plan-note/04 | `vite.config.ts` (PWA), `features/editor/*` | TC-A-35 | Có code + test xanh |

---

## 5. Phân rã công việc nhánh A — WBS và WBS Dictionary

Mã nhánh **3.x tạm theo QĐ-03** (1 Quản lý dự án · 2 Kết nối chung · 3 A · 4 B · 5 C · 6 Bàn giao). Giờ trong sơ đồ là **tE** tính từ dưới lên ở §6.2, không chia từ mốc 450 giờ.

Một số gói đã có sản phẩm từ trước khi có baseline này (kế hoạch 01, 04, 05 làm ngày 17–18/09). Giờ ghi cho các gói đó là **ước lượng công sức của deliverable**, không phải giờ thực tế. Nhóm chưa ghi nhật ký giờ, nên cột thực tế (AC) để trống cho tới khi đối chiếu (§11).

### 5.1. Sơ đồ phân cấp nhánh A

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
- **100%:** tổng 12 gói = 225,3 h = nhánh 3. Bảng §5.3 cho thấy mỗi yêu cầu v2.1 của A thuộc đúng một gói, và không gói nào chứa việc ngoài phạm vi.
- **Deliverable:** mỗi gói đặt tên theo sản phẩm bàn giao, không theo hành động.
- **Planning package** (3.10–3.12): chưa có hoạt động bên dưới, sẽ phân rã theo rolling wave trước mốc tương ứng.

### 5.2. WBS Dictionary

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
| 3.11 | Nghiệm thu độ tin cậy, tiếng Việt và dễ dùng v2.1 | Bộ 134 tổ hợp dấu và kết quả; nhật ký 100 lần xuất; biên bản thử với 10 người dùng mới | TC-A-04, TC-A-29, TC-A-30 đạt | Cần 10 người thử; OB-07 chỉ kiểm khung ngang (xem câu hỏi mở ở §11) | Chiến | M3 (OB-07), M6 (OB-06, OB-08) | Planning package |
| 3.12 | Tạm dừng xuất và báo trình duyệt không hỗ trợ khi mở | Nút tạm dừng/tiếp tục; trang báo không tương thích lúc khởi động | TC-A-31, TC-A-32 đạt | Charter RQ-04, RQ-10. Không phải tính năng mới | Chiến | M4 | Planning package |

### 5.3. Đối chiếu phạm vi v2.1 với WBS (kiểm quy tắc 100%)

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

## 6. Hoạt động, ước lượng, lịch và chi phí

### 6.1. Danh sách hoạt động

Chỉ các work package mới có hoạt động. Planning package 3.10–3.12 chưa có hoạt động (quy tắc PM05:51). Gói đã có sản phẩm ghi ở mức tóm tắt để giữ đủ lịch sử. Gói còn làm (3.7–3.9) được tách chi tiết theo rolling wave.

Người làm của mọi hoạt động là Chiến. "Giờ" là giờ công ước lượng M. Ngày dự kiến tính theo năng lực ở §6.3.

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
| A3.8.3 | Ô Xuất hiển thị gói, lượt còn, hạn dùng và lý do bị chặn sau refresh/đổi gói | 3.8 | 2 | A3.7.2 | SS, lag 2 h | 26/09 hoặc hoãn (§6.3) | Chưa bắt đầu |
| A3.9.1 | Viết E2E luồng thật: đăng nhập → tạo → xem trước → xuất ×3 → lượt 4 bị chặn | 3.9 | 5 | A3.7.3, A3.8.1 | FS | 25/09 (M-RUN) | Chưa bắt đầu |
| A3.9.2 | Thu HAR luồng A và quét nội dung (TC-A-24) | 3.9 | 3 | A3.9.1 | SS, lag 2 h | 25–26/09 | Chưa bắt đầu |
| A3.9.3 | Đo trên Chrome 153 và Edge 153: 60 giây 720p ×3, 1080p ×1, thời gian, bộ nhớ, kích thước, hash | 3.9 | 4 | A3.5.2 | SS với A3.9.1, lag 0 | 25–26/09 | Chưa bắt đầu |
| A3.9.4 | Cập nhật RTM §4, đóng gói bằng chứng, giao Việt Quang kiểm tra | 3.9 | 2 | A3.9.2, A3.9.3 | FF, lag 0 | 27/09 (M-TEST) | Chưa bắt đầu |

**Phụ thuộc bên ngoài** (loại External theo PM06:30):

- **E-1:** máy chủ B chạy được, có tài khoản Free thử (gói 4.2, 4.3; B §3.6.3). Đã có mã và test (plan-note/03).
- **E-2:** C chốt danh sách trạng thái mẫu (C-05).
- **E-3:** hợp đồng lỗi A↔B trong file 03 (G-03). Chiến làm, nên đây là phụ thuộc nội bộ về tài liệu.

**Chuỗi quyết định demo:** A3.7.2 → A3.7.3 → A3.9.1 → A3.9.2 → A3.9.4. Chuỗi này chỉ cho biết thứ tự ưu tiên. Đường găng chính thức do Việt Quang tính trong file 10, sau khi có dữ liệu của cả ba nhánh.

### 6.2. Ước lượng ba điểm (PERT, `tE = (O + M + P) / 3`)

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
| 3.8 | Danh mục mẫu C và hiển thị quyền | 7 | 9 | 16 | 10,7 | 3 hoạt động nhỏ trên API có sẵn. P tính việc C đổi tên trạng thái (Inactive/Retired) và định dạng manifest (§12.2) | Thấp–trung bình |
| 3.9 | Kiểm thử tích hợp và bằng chứng | 11 | 14 | 24 | 16,3 | 4 hoạt động. P tính lỗi môi trường Docker/Postgres (đã gặp: xung đột cổng 5432 ở plan-note/02) và Chrome có giao diện khác headless | Trung bình |
| 3.10 | Bằng chứng hiệu năng v2.1 (PP) | 16 | 24 | 44 | 28,0 | Ước lượng thô (ROM): 3 máy × chạy/đo/ghi + làm cách đo bộ nhớ Worker. P cao vì chưa có máy tham chiếu và chưa có phương pháp đo | Thấp |
| 3.11 | Nghiệm thu tin cậy, tiếng Việt, dễ dùng (PP) | 12 | 18 | 32 | 20,7 | ROM: soạn bộ 134 tổ hợp, script 100 lần xuất, 10 buổi thử người dùng. P tính việc tuyển người thử | Thấp |
| 3.12 | Tạm dừng và báo trình duyệt (PP) | 6 | 10 | 18 | 11,3 | ROM: tạm dừng Worker giữa hai khung, trang báo khởi động. P tính giới hạn tạm dừng của `VideoEncoder` | Thấp |
| | **Work package 3.1–3.9** | | **147** | | **165,3** | | |
| | **Planning package 3.10–3.12** | | **52** | | **60,0** | | |
| | **Tổng nhánh 3** | | **199** | | **225,3** | tE cao hơn M 26,3 h vì P lệch phải | |

### 6.3. Mốc, lịch và năng lực

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
| Hoãn sau 29/09 nếu thiếu giờ | A3.8.2 ✔, A3.8.3 | 5 (còn 2) | Không nằm trên kịch bản demo; giữ trong gói 3.8, báo nhóm theo §10 |

Phần bắt buộc còn 17 h (A3.7.3 và A3.9.x), trong khi tuần 2 có 20 h cho cả việc tổng hợp 02–05 và 09. Đây vẫn là rủi ro R-A-06 (§8).

### 6.4. Chi phí và dự phòng

| Hạng mục | Giá trị | Ghi chú |
| --- | ---: | --- |
| Giờ công tE: work package 3.1–3.9 | 165,3 h | Baseline effort phần có thể giao việc |
| Giờ công tE: planning package 3.10–3.12 | 60,0 h | ROM, độ chính xác thấp; tinh lại khi phân rã |
| **Tổng giờ công nhánh 3** | **225,3 h** | |
| Contingency reserve | 13 h | Từ EMV hai rủi ro cao R-A-02 và R-A-06 (§8.2). Nằm trong baseline, Chiến quản lý |
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

## 7. Tiêu chí chất lượng và tình huống kiểm thử

### 7.1. Khung kiểm thử và tiêu chí chất lượng

Dùng khung 3 cấp Unit / Integration / E2E của C §7.1, *tạm theo QĐ-06*.

| Cấp | Công cụ, môi trường | Phạm vi A | Bằng chứng lưu | Ngưỡng đạt | Người thực hiện / kiểm tra |
| --- | --- | --- | --- | --- | --- |
| **Unit** | Vitest 5.0.1, `src/frontend` | Schema, validation, timeline, lịch sử lệnh, vùng an toàn, xuống dòng tiếng Việt, mẫu, kiểm encoder, kiểm dung lượng, điều phối xuất | Output `npx vitest run` | 100% test đạt; coverage `core/rendering` + `core/export` ≥ 70% (chưa đo) | Chiến / Việt Quang |
| **Integration** | Playwright 1.63.0 + Chrome 153, máy chủ giả lập bằng `page.route` | Worker → MP4, trùng pixel, khung vàng, gói dự án, EXIF, giao thức reservation với máy chủ giả lập | Playwright report, `artifacts/*.json`, MP4 mẫu | 100% test đạt | Chiến / Việt Quang |
| **E2E** | Frontend + API thật (`compose.yaml`), Chrome 153 và Edge 153, Windows 11 | TC-I-01 → TC-I-05; HAR; số đo trình diễn | Video màn hình, HAR, bảng đo, commit SHA | Không lỗi Blocker/Critical trên luồng demo; HAR có 0 byte nội dung | Chiến chạy; Việt Quang kiểm tra; Quang Anh xác nhận |

**Kiểm tra chéo:** Việt Quang đọc tài liệu (inspection) và chạy lại `npx vitest run`, `npx playwright test` trên máy mình, rồi ghi kết quả vào biên bản. Quang Anh xác nhận. Mỗi REQ-A và NF-A nối được tới ít nhất một TC (§4).

### 7.2. Tình huống kiểm thử TC-A

"Tự động" là tên test trong repo. "Cần viết" là TC chưa có test. Kết quả ghi theo lần chạy ngày 23/09/2026.

| TC | Req | Cấp | Bước thử và dữ liệu | Kết quả mong đợi, ngưỡng | Tự động / Cần viết | Kết quả 23/09 |
| --- | --- | --- | --- | --- | --- | --- |
| TC-A-01 | REQ-A-01 | Unit | Tạo dự án mới bằng `createProject` | Đúng 5 cảnh, tổng 60 giây, không lỗi | `validation.test.ts` "accepts a freshly created project…" | Đạt |
| TC-A-02 | REQ-A-01 | Unit | Đặt thời lượng âm; xoá 1 cảnh; tổng > giới hạn; chuyển cảnh dài hơn cảnh; tiêu đề trống | Mỗi trường hợp có lỗi mức *error*; `isProjectExportable = false` | `validation.test.ts` (6 test "rejects…/flags…") | Đạt |
| TC-A-03 | REQ-A-02, NF-A-01 | Unit + Integration | Chuỗi tiếng Việt có dấu chồng, xuống dòng hẹp, font thật | Không mất dấu; dấu không tách khỏi chữ | `text.test.ts` (9 test); `render-parity.spec.ts` "Vietnamese diacritics survive wrapping" | Đạt |
| TC-A-04 | NF-A-01 | Integration | Bộ 134 tổ hợp dấu × 5 mẫu, khung ngang | 100% ký tự đúng (so khung vàng) | Cần viết (3.11) | Chưa thử |
| TC-A-05 | REQ-A-03 | Integration | Ảnh JPEG có EXIF xoay 90°; file > 12 MB; file hỏng | Ảnh xoay đúng; hai file sau bị từ chối kèm tên và lý do; dự án không đổi | `package-and-images.spec.ts` "image import applies EXIF orientation and refuses bad files" | Đạt |
| TC-A-06 | REQ-A-04, NF-A-06 | Integration | Đổi qua 5 mẫu; chụp khung đầu/giữa/cuối | Chữ giữ nguyên; khung khớp ảnh chuẩn theo ngưỡng pixel | `editor.spec.ts` "switching through all five templates keeps the text"; `golden.spec.ts` (5 test) | Đạt |
| TC-A-07 | REQ-A-05 | Integration + E2E | Mở editor khi `/api/templates` trả 4 mẫu Active (1 mẫu Retired); mở dự án cũ dùng mẫu Retired; ngắt mạng rồi mở editor | Chỉ 4 mẫu để chọn; dự án cũ mở, xem trước, xuất được và có cảnh báo; ngoại tuyến dùng danh sách đóng gói | `editor.spec.ts` "a template the admin retired is no longer offered but old work still opens"; `catalog.test.ts` (5 test); nhánh ngoại tuyến phủ bởi các test `editor.spec.ts` chặn máy chủ | Đạt (máy chủ giả lập) |
| TC-A-08 | REQ-A-06 | Integration | Cùng dữ liệu cảnh, cùng timestamp, vẽ lên canvas xem trước và canvas xuất | Pixel trùng; biểu diễn timestamp khác nhau cho cùng một khung | `render-parity.spec.ts` (2 test) | Đạt |
| TC-A-09 | REQ-A-07 | Integration | Dự án 5 cảnh × 1 giây, xuất qua Worker | MP4 phát được, AVC, 30 fps, độ phân giải đúng quyền | `export.spec.ts` "the worker turns a project into a playable H.264 MP4" | Đạt |
| TC-A-10 | REQ-A-08, NF-A-07 | Integration | Thao tác giao diện trong khi xuất | Giao diện vẫn phản hồi; tiến trình tăng | `export.spec.ts` "the editor stays responsive while an export runs" | Đạt |
| TC-A-11 | REQ-A-08, REQ-A-10 | Unit + Integration | Bấm Hủy giữa chừng | `cancel` được gọi; không còn Worker nào | `exportProject.test.ts` "returns the slot when the user cancels"; `export.spec.ts` "cancelling returns the slot and leaves no worker behind" | Đạt |
| TC-A-12 | REQ-A-10 | Unit | Worker báo lỗi; export ném ngoại lệ | `cancel` được gọi cả hai trường hợp | `exportProject.test.ts` "returns the slot when the encode fails", "…even when the export throws outright" | Đạt |
| TC-A-13 | REQ-A-09 | Unit | Không có `VideoEncoder`; `isConfigSupported` trả false; probe ném lỗi | Từ chối mã `encoder`; **không** gọi reserve | `encoderSupport.test.ts` (3 test "refuses…/treats a throwing probe…"); `exportProject.test.ts` "never reserves when the browser cannot encode the format" | Đạt |
| TC-A-14 | REQ-A-07 | Unit | `storage.estimate` cho thấy thiếu chỗ; đủ chỗ nhưng không còn dự trữ; không ước lượng được | Hai trường hợp đầu từ chối trước reserve; trường hợp sau vẫn cho xuất | `storageBudget.test.ts` (7 test); `exportProject.test.ts` "never reserves when there is no room" | Đạt |
| TC-A-15 | REQ-A-10 | Unit + Integration | Xuất thành công | `complete` được gọi đúng 1 lần với `reservationId` | `exportProject.test.ts` "completes the reservation after a successful encode"; `export.spec.ts` "a finished export completes its reservation" | Đạt (máy chủ giả lập) |
| TC-A-16 | REQ-A-11 | Unit + Integration | Chọn 1080p; máy chủ cấp `grantedHeight: 720, watermarkRequired: true` | MP4 720p có watermark | `exportProject.test.ts` "encodes what the server granted…"; `export.spec.ts` "the server decides the resolution, not the browser" | Đạt (máy chủ giả lập) |
| TC-A-17 | REQ-A-10 | Unit | Gọi xuất với một idempotency key cho trước | Reserve dùng đúng khoá đó | `exportProject.test.ts` "keeps one idempotency key for the attempt it was given" | Đạt |
| TC-A-18 | REQ-A-12 | Unit | Reserve trả lần lượt 401, 403 (hết lượt), 400 (độ cao), 409, 500 | Mỗi mã một thông điệp tiếng Việt đúng lý do; không mã hoá; không hiện chuỗi tiếng Anh | `reservation.test.ts` (5 test `describeStatus`, "never shows the English problem text the server returns"); `exportProject.test.ts` "reports the server refusal rather than encoding anyway". 409/404 chỉ gặp ở `complete`/`cancel`, xử lý ở TC-A-36 | Đạt |
| TC-A-19 | REQ-A-12 | Unit | Reserve ném lỗi mạng | Thông điệp mất kết nối; không mã hoá | `reservation.test.ts` "reports a network failure as being offline" | Đạt |
| TC-A-20 | REQ-A-10 | E2E | Chặn mạng sau khi reserve, để mã hoá xong | File vẫn giao; `complete` thất bại được ghi nhận; sau 30 phút B trả lượt (ghi kết quả để phục vụ R-A-03) | Cần viết (A3.9.1) | Chưa thử |
| TC-A-21 | REQ-A-13 | Integration | Tạo dự án có ảnh, tải lại trang | Dự án, 5 cảnh, ảnh còn nguyên | `editor.spec.ts` "project and its scenes survive a reload" | Đạt |
| TC-A-22 | REQ-A-14 | Integration | Xuất gói, nhập ở profile sạch; sửa 1 byte ảnh; đổi `packageVersion` | Gói đúng mở được; hai gói sau bị từ chối, không ghi gì | `package-and-images.spec.ts` "a project package moves between machines and rejects tampering" | Đạt |
| TC-A-24 | NF-A-04 | E2E | Chạy luồng demo trên máy chủ thật, thu HAR; tìm chuỗi đánh dấu trong chữ, tên file ảnh, 16 byte đầu ảnh, `"scenes"`, `ftyp` | 0 kết quả; body request chỉ có `idempotencyKey`, `requestedHeight` | Cần viết (A3.9.2) | Chưa thử |
| TC-A-25 | NF-A-02, NF-A-05 | E2E | Dự án benchmark 60 giây: 720p ×3 (OPFS), 1080p ×1, trên Chrome 153 và Edge 153 có giao diện | Ghi thời gian, kích thước, lệch thời lượng, hash, cấu hình máy. Trình diễn: chỉ ghi số. v2.1: 1080p ≤ 90 giây trên máy tham chiếu | `benchmark.spec.ts` (có sẵn, chạy riêng). Môi trường trình diễn **chưa chạy** | Chưa thử |
| TC-A-26 | NF-A-03 | Integration | Ba lần xuất liên tiếp, đếm Worker và đọc bộ nhớ | Không còn Worker; bộ nhớ không tăng đơn điệu | `benchmark.spec.ts` "exports three OPFS runs…" (số liệu cũ trên HeadlessChrome 152) | Chưa chạy lại |
| TC-A-27 | NF-A-03 | E2E | Xuất 60 giây và 600 giây trên máy tham chiếu; đo bộ nhớ đỉnh tiến trình | Chênh < 15% | Cần viết (3.10) | Chưa thử |
| TC-A-28 | NF-A-06 | E2E | Cùng gói dự án, xuất trên 3 máy khác cấu hình | Checksum luồng video giống nhau | Cần viết (3.10) | Chưa thử |
| TC-A-29 | NF-A-05 | E2E | 100 lần xuất trên các trình duyệt mục tiêu | ≥ 95 lần thành công | Cần viết (3.11) | Chưa thử |
| TC-A-30 | NF-A-08 | E2E | 10 người chưa dùng sản phẩm tự tạo video đầu tiên | ≥ 8/10 người xong trong 10 phút | Cần viết (3.11) | Chưa thử |
| TC-A-31 | REQ-A-08 | Integration | Tạm dừng rồi tiếp tục giữa chừng | MP4 hoàn chỉnh, không lặp hay mất khung | Cần viết (3.12) | Chưa thử |
| TC-A-32 | REQ-A-09 | Integration | Mở ứng dụng trên trình duyệt không có `VideoEncoder` | Trang báo không tương thích kèm gợi ý; soạn thảo vẫn dùng được | Cần viết (3.12) | Chưa thử |
| TC-A-33 | REQ-A-01, REQ-A-02 | Integration | 20 thao tác rồi undo/redo hết | Dự án trở về đúng trạng thái đầu và cuối | `editor.spec.ts` "undo and redo restore the document exactly" | Đạt |
| TC-A-34 | REQ-A-02, NF-A-08 | Integration | Chỉ dùng bàn phím | Tới được điều hướng, cảnh, xem trước, lưu | `editor.spec.ts` "keyboard alone reaches navigation, scenes, preview and save" | Đạt |
| TC-A-35 | REQ-A-13, NF-A-10 | Integration | Máy chủ không phản hồi; tạo và lưu dự án | Soạn thảo, xem trước, lưu đều chạy | `editor.spec.ts` "builds a project end to end with the backend unreachable" | Đạt |
| TC-A-36 | REQ-A-10 | Integration | Giả lập `complete` trả 409 (reservation hết hạn) | File vẫn giao; giao diện không báo lỗi giả; sự kiện được ghi để đối chiếu R-A-10 | Cần viết | Chưa thử |

Số TC-A-23 không dùng (đã chuyển thành TC-I-01 ở §12.3). Mã không cấp lại.

---

## 8. Rủi ro nhánh A

### 8.1. Sổ rủi ro

Thang *tạm theo QĐ-05*: P và I từ 1–5; P×I ≤ 6 thấp, 7–12 trung bình, ≥ 13 cao. Chỉ tính EMV cho rủi ro cao.

| ID | Nguyên nhân → sự kiện → hậu quả | RBS | P | I | P×I | Chiến lược, phòng ngừa | Trigger | Contingency | Chủ rủi ro |
| --- | --- | --- | -: | -: | -: | --- | --- | --- | --- |
| R-A-01 | Encoder phần cứng/driver không hỗ trợ H.264 1080p (headless Chrome 152 đã báo không đạt) → gói trả phí không xuất được 1080p trên máy đó → OB-01 (đo ở 1080p) không chứng minh được | Technical | 3 | 4 | 12 | **Mitigate:** probe 1080p trên Chrome/Edge có giao diện ngay ở A3.9.3; kiểm encoder trước reserve nên không mất lượt | `isConfigSupported` 1080p trả false trên Chrome 153 có giao diện | Công bố giới hạn theo máy/trình duyệt; đo OB-01 trên máy tham chiếu ở 3.10; nếu vẫn lỗi thì lập CR về tiêu chí OB-01 | Chiến |
| R-A-02 | `performance.memory` không có trong Worker → không đo được bộ nhớ đỉnh của đường xuất thật → OB-02 (mục tiêu kỹ thuật quan trọng nhất) không có bằng chứng | Technical | 4 | 4 | **16** | **Mitigate:** đo bộ nhớ tiến trình bằng công cụ hệ điều hành hoặc `performance.measureUserAgentSpecificMemory()` (cần cross-origin isolation); chốt phương pháp trước M3 | Đến 18/10 (M3) chưa có phương pháp đo lặp lại được | Theo Assumption Log AS-16: công bố giới hạn rõ, lập CR điều chỉnh cách chứng minh OB-02 | Chiến |
| R-A-03 | Client tắt mạng sau khi reserve → `complete` không tới máy chủ → reservation hết hạn, B trả lượt → người dùng Miễn phí xuất quá 3 video/tháng (vẫn 720p, vẫn có watermark) → OB-14 bị lách | Financial | 3 | 3 | 9 | **Accept + Escalate** sang B: đây là giới hạn của việc kiểm quyền ở client đã được chấp nhận trong Charter (RQ-14). Ghi vào file 03 | Tỷ lệ reservation hết hạn / hoàn tất trên dashboard C vượt ngưỡng do B và C chốt ở file 03 | B quyết định cách tính reservation hết hạn (ví dụ tính là đã dùng); A không đổi luồng khi chưa có CR | Việt Quang |
| R-A-04 | Ánh xạ mã lỗi A↔B lệch (**đã xảy ra**: 403 hết lượt bị báo "gói không cho phép độ phân giải", chuỗi tiếng Anh lọt ra) → người dùng hiểu sai lý do → OB-14 "thông báo rõ" không đạt | Technical | 2 | 3 | 6 | **Mitigate:** A3.7.2 đã sửa và có unit test cho từng mã (23/09; P hạ từ 4 xuống 2); chốt bảng mã lỗi ở file 03 | TC-A-18 không đạt | Hiển thị thông điệp chung kèm mã HTTP, không hiện chuỗi của máy chủ | Chiến |
| R-A-05 | Trạng thái mẫu chưa thống nhất (Inactive/Retired) và chưa chạy với máy chủ C thật → demo "mẫu từ C" không chạy ở M-RUN. (Phần đọc danh mục đã làm 23/09) | Project Management | 3 | 3 | 9 | **Mitigate:** A3.8.1 (đã làm) lọc theo danh sách API trả về, vốn chỉ gồm mẫu Active, nên không phụ thuộc tên trạng thái | 24/09 C-05 chưa chốt | Demo bằng seed 5 mẫu Active, đổi trạng thái bằng `POST /api/admin/templates/{key}/status` với tài khoản admin seed | Chiến |
| R-A-06 | Chiến vừa làm A (còn 23–25 h) vừa tổng hợp 02, 03, 04, 05, 09 trong tuần có 20 h → trượt M-RUN hoặc M-TEST | Organizational | 4 | 4 | **16** | **Mitigate:** làm theo thứ tự ưu tiên ở §6.3; báo nhóm khi vượt giờ quá 20% (quy tắc kế hoạch 2 tuần) | 25/09 chưa xong A3.7.3 và A3.8.1; hoặc giờ thực tế vượt kế hoạch > 20% | Hoãn A3.8.2, A3.8.3 sang sau 29/09; dùng 4 h đệm; đề nghị nhóm chia lại việc tổng hợp | Chiến |
| R-A-07 | Font, khử răng cưa hoặc GPU khác nhau giữa máy (AS-17) → khung khác nhau → OB-03 không đạt | Technical | 3 | 3 | 9 | **Mitigate:** font đóng gói, khung xác định, khung vàng | Khung vàng lệch trên máy thứ hai | CR chuyển tiêu chí sang checksum khung trước encoder | Chiến |
| R-A-08 | Safari/Firefox hoặc cửa sổ ẩn danh không có OPFS hoặc hạn mức nhỏ → xuất bị từ chối hoặc dồn vào RAM | Technical | 3 | 2 | 6 | **Mitigate:** kiểm dung lượng trước reserve (đã có); chỉ cam kết Tier 1 | Người dùng Tier 2 báo lỗi dung lượng | Hướng dẫn chọn "Lưu thẳng vào tệp" | Chiến |
| R-A-09 | Không mượn được máy tham chiếu và máy macOS/Linux → không đo OB-01/03/06 đúng điều kiện Charter | External | 3 | 3 | 9 | **Mitigate:** hỏi mượn máy từ M3; ghi cấu hình thật khi đo | Đến M3 chưa có máy | Đo trên máy gần cấu hình nhất, ghi rõ sai khác, không kết luận đạt OB | Chiến |
| R-A-10 | Reservation sống 30 phút nhưng Charter không giới hạn độ dài video → video dài xuất quá 30 phút → `complete` trả 409 → lượt không bị trừ | Technical | 2 | 3 | 6 | **Escalate** sang file 03: chọn TTL hoặc cách gia hạn | TC-A-36 ghi được 409 khi đo video dài | B điều chỉnh TTL theo độ dài dự kiến (cần CR) | Việt Quang |
| R-A-11 | Có đề nghị thêm âm thanh, khung dọc, AI (bản C từng có audio) → phạm vi phình | Project Management | 3 | 3 | 9 | **Avoid:** danh mục loại trừ ở §1.1; mọi đề nghị qua §10 | Có TC hoặc REQ mới nhắc tới âm thanh/khung dọc/AI | Từ chối qua CCB, ghi Change Log | Chiến |

### 8.2. EMV và contingency

Thang xác suất để quy đổi EMV **tạm đề xuất**, chờ file 08 của Việt Quang: P1 = 10%, P2 = 30%, P3 = 50%, P4 = 70%, P5 = 90%.

| Rủi ro | P | Xác suất | Tác động (giờ) | Cơ sở tác động | EMV |
| --- | -: | -: | -: | --- | -: |
| R-A-02 | 4 | 70% | 8 | Làm và kiểm cách đo bộ nhớ tiến trình ngoài `performance.memory` | 5,6 h |
| R-A-06 | 4 | 70% | 10 | Giờ phải làm thêm hoặc dời: A3.8.2, A3.8.3 (5 h) + A3.9.4 và một phần A3.9.x (5 h) | 7,0 h |
| **Tổng** | | | | | **12,6 h → 13 h** |

Các rủi ro trung bình và thấp chưa tính tiền. Chúng nằm trong watch list và được rà ở mỗi mốc.

---

## 9. Trách nhiệm nhánh A (RACI)

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

## 10. Kiểm soát thay đổi

Nhánh A dùng **quy trình thay đổi chung** trong `planning_b.md` §10, sẽ đưa vào PMP (G-09): mô tả thay đổi → đánh giá tác động (phạm vi, lịch, chi phí, rủi ro) → CCB duyệt, hoãn hoặc từ chối → ghi Change Log, kể cả đề nghị bị từ chối → cập nhật baseline từ mốc hiện tại trở đi, không sửa số quá khứ. Mẫu đề nghị là `_template/02_Change_Request_Form`.

Riêng nhánh A:

- **Scope baseline A** = §3 + §4 + §5. Việc sau bắt buộc có CR: đổi số mẫu, đổi ngưỡng OB/NF, thêm âm thanh, khung dọc hay AI, bỏ tạm dừng (RQ-04), chuyển một planning package sang loại trừ.
- **Quyền giảm phạm vi có sẵn** (Charter §11): nếu nguyên mẫu M2 không đạt, Giám đốc dự án được giảm xuống 3 mẫu và bỏ lưu/mở mà không chờ duyệt, nhưng phải báo Nhà tài trợ trong 24 giờ và vẫn ghi Change Log. Quyền này không được đụng RQ-13 → RQ-17.
- **Dời hoạt động trong một gói** (ví dụ hoãn A3.8.2 sang sau 29/09) không đổi scope baseline. Chỉ cần báo nhóm và cập nhật lịch ở file 10.
- **Quy tắc phiên bản:** Draft thì sửa trực tiếp. Đã Approved mà đổi nội dung thì tăng phiên bản, đưa bản cũ vào `_archive`.

---

## 11. Phần chưa triển khai và quy tắc cập nhật

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

## 12. Phụ thuộc với B và C

Mục này là nguồn cho `03_Interface_Specification`. Hợp đồng lấy từ mã và OpenAPI hiện có (`src/contracts/openapi/PromptVideo.Api.json`), đối chiếu với bản B và bản C.

### 12.1. A → B: hỏi quyền xuất

Mọi lời gọi đều cần phiên đăng nhập (cookie `PromptVideo.Auth`) và header chống giả mạo `X-CSRF-TOKEN` lấy từ `GET /api/security/csrf`. Token phải lấy lại sau khi đăng nhập.

| Lời gọi | Request | Response thành công |
| --- | --- | --- |
| `GET /api/me/capabilities` | — | `planCode`, `planName`, `maxExportHeight`, `watermarkRequired`, `exportsPerMonth`, `exportsUsed`, `exportsRemaining`, `hasUnlimitedExports`, `periodStartUtc`, `periodEndUtc`, `expiresAtUtc` (A chỉ dùng để hiển thị) |
| `POST /api/exports/reservations` | `{ idempotencyKey: string (1–128 ký tự), requestedHeight: int }` | 200 `{ reservationId, status, grantedHeight, watermarkRequired, expiresAtUtc, exportsRemaining, exportsPerMonth }` |
| `POST /api/exports/reservations/{id}/complete` | — | 200 reservation (trạng thái Completed) |
| `POST /api/exports/reservations/{id}/cancel` | — | 200 reservation (trạng thái Cancelled) |

**Bảng mã lỗi.** Cột "Máy chủ" lấy từ `ExportsModule.cs`. Cột "A phải xử lý" là hợp đồng đề xuất cho file 03. Cột "A hiện tại" lấy từ `reservation.ts`.

| Mã | Máy chủ trả khi | A phải xử lý | A hiện tại |
| --- | --- | --- | --- |
| 401 | Chưa đăng nhập, phiên hết hạn | "Hãy đăng nhập để xuất video." | Đúng |
| 403 | Hết lượt tháng: title "Monthly export quota reached.", detail "The Free plan allows 3 exports per month." | "Bạn đã dùng hết lượt xuất tháng này" + gợi ý nâng cấp; không hiện chuỗi tiếng Anh | Đúng (sửa 23/09) |
| 400 | Thiếu hoặc quá dài idempotency key; độ cao không hỗ trợ | "Độ phân giải không hợp lệ" / lỗi nội bộ | Đúng (sửa 23/09) |
| 404 | `complete`/`cancel` với reservation không thuộc tài khoản | Ghi nhận, không báo người dùng | Bỏ qua (đóng reservation là nỗ lực tốt nhất) |
| 409 | Reservation đã hết hạn, hoặc đã đóng theo cách khác | Ghi nhận, không báo lỗi giả | Bỏ qua |
| 429 | Chỉ ở endpoint đăng nhập (B REQ-B-20); **endpoint xuất không giới hạn tần suất** | Không xuất hiện ở luồng xuất | Đúng (sửa 23/09): mọi mã khác đều là "máy chủ chưa xử lý được", không còn báo hết lượt |
| Lỗi mạng | `fetch` ném lỗi | "Không liên hệ được máy chủ…" | Đúng |

**Đã khớp với bản B:**

- Giao thức reserve → complete/cancel, idempotency key, chỉ Completed mới tính lượt (B REQ-B-10, REQ-B-12, §3.6.3).
- `grantedHeight`/`watermarkRequired` theo gói (B REQ-B-07, TC-B-31). A mã hoá đúng giá trị được cấp (TC-A-16).
- Lỗi mã hoá trong trình duyệt thì client gọi cancel (B §3.6.4 ↔ TC-A-12).
- Reservation treo 30 phút tự trả lượt (B REQ-B-12). A dựa vào cơ chế này khi `complete`/`cancel` thất bại.
- 0 byte nội dung (B RQ-7, NF-B-02 ↔ NF-A-04). Đề xuất gộp thành `NF-G-01`.

**Còn lệch, cần chốt ở file 03:**

| # | Điểm lệch | Bên sửa |
| --- | --- | --- |
| L-AB-1 | Ánh xạ 403/400/429 ở A sai. **Đã sửa 23/09**; còn chờ file 03 chốt bảng mã | A (A3.7.2) |
| L-AB-2 | B §3.6.3 và TC-B-32 ghi "403 `LicenseInvalid/Expired`" khi giấy phép hết hạn. Máy chủ không có mã này: hết hạn thì rơi về gói Miễn phí và reserve trả 200 (720p + watermark) hoặc 403 hết lượt | B sửa đặc tả cho khớp mã, hoặc lập CR nếu muốn thêm mã |
| L-AB-3 | B §3.6.3 viết "trình duyệt gọi reserve **với snapshot**". A không gửi snapshot; máy chủ tự tính quyền. Chỉ cần sửa câu chữ | B |
| L-AB-4 | TTL 30 phút so với "không giới hạn độ dài video" (OB-02) → video dài có thể không trừ lượt (R-A-10) | B quyết định, A ghi nhận |
| L-AB-5 | Tắt mạng sau reserve thì không trừ lượt (R-A-03). Bản B chưa nêu | B quyết định |
| L-AB-6 | Thời gian kiểm quyền: B NF-B-01 (≤ 1 giây p95) đo phía máy chủ; AS-47 cần đo độ trễ người dùng thấy từ lúc bấm Xuất tới khung đầu tiên. Đề xuất TC-I-06 | Chiến viết ở file 03 |
| L-AB-7 | B đặt tên quy tắc nghiệp vụ `RQ-1…RQ-8`, trùng tiền tố với `RQ-01…RQ-17` của Charter. Bản A dùng `QT-A-n` | Đề xuất B đổi thành `QT-B-n` khi gom (G-01) |

### 12.2. C → A: danh mục mẫu

**Hợp đồng hiện có** (`TemplatesModule.cs`, `ReferenceDataSeeder.cs`):

- `GET /api/templates`: không cần đăng nhập, chỉ trả mẫu **Active**, sắp theo key. Mỗi phần tử có `{ templateKey, name, version, status, manifestJson }`.
- Trạng thái trong mã: `Draft = 0`, `Active = 1`, `Retired = 2`.
- Seed 5 mẫu: `classic`, `bold`, `minimal`, `story`, `promo`. Khớp đúng 5 `id` trong `core/templates/templates.ts`.
- `manifestJson` seed: `{"templateKey","sceneCount":5,"sceneSeconds":12,"safeArea":{"top":0.08,"bottom":0.12},"titleMaxChars":80}`. Không được chứa nội dung người dùng hay URL ngoài.
- Admin đổi trạng thái: `POST /api/admin/templates/{key}/status` (C).

**Đã khớp với bản C:**

- Chỉ mẫu Active hiện với người dùng (REQ-C-01, TC-C-02).
- Dự án cũ dùng mẫu đã ẩn vẫn render được (C §3.6.1 dòng Inactive ↔ REQ-A-05).
- Quyền admin chặn người thường (QC-1).

**Còn lệch, cần chốt ở file 03:**

| # | Điểm lệch | Bên sửa |
| --- | --- | --- |
| L-CA-1 | Tên trạng thái: mã dùng `Retired`; C §3.6.1 dùng `Inactive`; REQ-C-01 chỉ ghi 2 trạng thái | C (C-05) |
| L-CA-2 | Frontend chưa gọi `/api/templates`. **Đã sửa 23/09**: editor lọc theo key Active; nếu không đọc được danh mục thì dùng danh sách đóng gói | A (gói 3.8) |
| L-CA-3 | Hai định dạng manifest không khớp: frontend `TemplateManifestV1` = `{version, id, name, previewAssetId, supportedProjectVersion}`; máy chủ = `{templateKey, sceneCount, sceneSeconds, safeArea, titleMaxChars}`. Cần chọn một, có trường `version` | Chiến chốt ở file 03; A và C sửa theo |
| L-CA-4 | C QC-3 yêu cầu versioning mẫu, nhưng dữ liệu cảnh chỉ lưu `templateId`, không lưu phiên bản mẫu. Mở lại dự án sẽ dùng phiên bản mẫu mới nhất | Quyết định ở file 03; nếu cần thì thêm trường qua migration schema (3.1) |
| L-CA-5 | C REQ-C-02 cho asset "có URL tĩnh để chèn vào JSON mẫu" và có audio. Mâu thuẫn với quy tắc "manifest không chứa URL ngoài", với việc tài sản mẫu đóng gói trong frontend (plan-note/03), và với loại trừ âm thanh | C (C-03) |
| L-CA-6 | C §7.2 tự viết TC-A-01/02 có audio. Các TC-A chính thức nằm ở §7.2 bản này | C (C-03) |
| L-CA-7 | C chưa có hạn mức tài sản cho mẫu. Charter dự trù 700.000 VND tài sản đồ hoạ cho 5 mẫu (AS-11); 5 mẫu hiện tại chỉ dùng màu và chữ | C ghi rõ có dùng khoản này hay không |

### 12.3. Tình huống kiểm thử tích hợp đề xuất (TC-I)

Chiến chốt mã và nội dung chính thức ở file 03. Dưới đây là đề xuất từ phía A.

| TC-I | Luồng | Kết quả mong đợi | Module |
| --- | --- | --- | --- |
| TC-I-01 | Tài khoản Free thật xuất 3 lần, rồi thử lần 4 | 3 MP4 720p có watermark; lần 4 báo hết lượt bằng tiếng Việt, không mã hoá; DB ghi 3 lượt | A 3.7/3.9 + B 4.2/4.3 |
| TC-I-02 | Hủy giữa chừng, tải lại trang | `exportsRemaining` không đổi, trên giao diện và trong DB | A + B |
| TC-I-03 | Admin kích hoạt gói Cá nhân bằng thanh toán giả lập; người dùng chọn 1080p | MP4 1080p không watermark | A + B |
| TC-I-04 | Admin chuyển 1 mẫu sang Retired | Editor chỉ còn 4 mẫu; dự án cũ vẫn mở | A 3.8 + C |
| TC-I-05 | Thu HAR toàn luồng TC-I-01 | 0 byte nội dung (NF-G-01) | A + B + C |
| TC-I-06 | Đo từ lúc bấm Xuất tới khung đầu tiên, có và không có reserve | Phần reserve thêm vào ≤ 1 giây (AS-47, NF-09) | A + B |

---

## 13. Chuyển vào bộ tài liệu Planning

Tên file theo `nhiem_vu_xay_dung_planning.md` §1.

| Mục bản A | File đích | Nội dung chuyển | Ghi chú |
| --- | --- | --- | --- |
| §3 (toàn bộ), §7.2, §12 | `_module-input/A_San_xuat_video/A_01_Yeu_cau_va_kiem_thu_v1.0.md` | Yêu cầu, trạng thái, TC-A, phụ thuộc | Theo §3.1 của file nhiệm vụ |
| §5, §6, §7.1, §8 | `_module-input/A_San_xuat_video/A_02_WBS_uoc_luong_rui_ro_v1.0.md` | WBS, dictionary, hoạt động, PERT, chi phí, rủi ro, tiêu chí chất lượng | Theo §3.2 của file nhiệm vụ |
| §2.2 thuật ngữ; §3.3 QT-A; §3.4 REQ-A; §3.5 NF-A (NF-A-04 → NF-G-01) | `02_Requirements_Specification` | Gom cùng REQ-B/C; bỏ trùng | Tiền tố theo kết quả QĐ-04 |
| §3.6 bảng trạng thái | `02_Requirements_Specification`, `06_Quality_Plan_and_Test_Cases` | Luồng ngoại lệ; TC gắn trạng thái | |
| §12.1, §12.2, §12.3 | `03_Interface_Specification` | Hợp đồng A↔B, C→A, bảng mã lỗi, L-AB-1…7, L-CA-1…7, TC-I-01…06 | Chiến viết (G-03, G-04) |
| §1.1 bảng v2.1 / trình diễn; §1.1 loại trừ; §11 phần chưa triển khai | `04_Project_Scope_Statement` | Bảng phạm vi trình diễn so với v2.1 (G-06) | |
| §5.1, §5.2, §5.3 | `05_WBS_and_WBS_Dictionary` | Nhánh 3.x; kiểm 100% và 8/80; ghi chú NF-07/NF-08 | Mã theo kết quả QĐ-03 |
| §7.1, §7.2 | `06_Quality_Plan_and_Test_Cases` | Khung 3 cấp, ngưỡng, bằng chứng, TC-A | Quang Anh gom |
| §4 | `09_Requirements_Traceability_Matrix.xlsx` | 24 dòng RTM của A | Chiến làm sau khi có 06 |
| §6.1, §6.2, §6.3 | `10_Schedule_and_CPM.xlsx` | Hoạt động, quan hệ FS/SS/FF, lag, PERT, mốc, xung đột năng lực | Việt Quang gom |
| §6.4 | `11_Cost_Budget_Procurement.xlsx` | 225,3 h + contingency 13 h; 0 VND tiền mặt; hạng mục mượn và tiêu chí chọn | Việt Quang gom |
| §9 | `12_RACI_and_Communication_Matrix.xlsx` | RACI nhánh A | Quang Anh gom |
| §8.1, §8.2 | `13_Risk_Register.xlsx` (thang: `08_Risk_Management_Plan`) | R-A-01…11, EMV, thang xác suất tạm | Việt Quang gom; thang theo QĐ-05 |
| §10 | `01_Project_Management_Plan` | Quy định riêng của nhánh A trong kiểm soát thay đổi | Quy trình chung lấy từ B §10 (G-09) |
| Giả định mới (dưới đây) | `01_Initiating/02_Assumption_Log` | Cập nhật sổ hiện có, không tạo bản mới | Theo §2 của file nhiệm vụ |

**Giả định mới phát sinh cần ghi vào Assumption Log:**

1. Môi trường trình diễn là Chrome 153.0.8010.53 và Edge 153.0.4234.48 trên Windows 11. Kết quả đo ở đây không thay cho máy tham chiếu.
2. Thang quy đổi P1–P5 → 10–90% chỉ dùng tạm để tính EMV, cho tới khi file 08 chốt.
3. Có thể mượn được máy tham chiếu và máy macOS/Linux trước M4 (liên quan R-A-09).

---

*Tài liệu căn cứ: Project Charter v2.1, Assumption Log v2.1, `nhiem_vu_xay_dung_planning.md`, `00_Viec_can_lam_tu_ke_hoach_B_C.md`, `planning_b.md`, `05_Ke_hoach_nghiep_vu_C_v1.0.md`, `ke-hoach-hoan-thien-2-tuan.md`, `design-note/plan-note/00–06`, `design-note/research/01–02`, và mã nguồn `src/` đọc ngày 23/09/2026.*
