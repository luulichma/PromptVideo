<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                       |                                     |
| --------------------- | ----------------------------------- |
| **Nhóm tiến trình**   | Planning                             |
| **Tên tài liệu**      | A_01 Yêu cầu và kiểm thử — Nghiệp vụ A: Sản xuất video |
| **Phiên bản**         | Ver. 1.0                             |
| **Nhóm thực hiện**    | Nhóm 02                              |
| **Ngày phát hành**    | 2026-09-24                           |
| **Trạng thái**        | Draft                                |

<div style="page-break-after: always"></div>

<!-- ======================= TRANG 2 — XÁC NHẬN & LỊCH SỬ ======================= -->

## Phân công kiểm tra (chưa ký xác nhận)

| Người tạo         | Người kiểm tra    | Người xác nhận    |
| ----------------- | ----------------- | ----------------- |
| Nguyễn Thế Chiến  | Nguyễn Việt Quang | Phạm Quang Anh    |

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| -- | --------- | ------------- | -------------- | ----------------- | --------------- | --------------- |
| 1  | Ver 1.0   | 2026-09-23    | Tạo mới        | Tách từ plan-note/planning_a.md: phạm vi, thuật ngữ, REQ-A, NF-A, trạng thái, RTM, TC-A, phụ thuộc với B và C | Nguyễn Thế Chiến (nguồn) | Chưa xác minh phê duyệt |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

## Mục lục

1. [Mục đích và phạm vi](#1-muc-dich-va-pham-vi)
   - 1.1 [Phạm vi v2.1 và phạm vi trình diễn](#11-pham-vi-v21-va-pham-vi-trinh-dien)
2. [Căn cứ lập và thuật ngữ](#2-can-cu-lap-va-thuat-ngu)
   - 2.1 [Căn cứ lập](#21-can-cu-lap)
   - 2.2 [Thuật ngữ](#22-thuat-ngu)
3. [Đặc tả yêu cầu nghiệp vụ A](#3-dac-ta-yeu-cau-nghiep-vu-a)
   - 3.1 [Mô tả tổng quan](#31-mo-ta-tong-quan)
   - 3.2 [Tác nhân](#32-tac-nhan)
   - 3.3 [Quy tắc cứng của nhánh A](#33-quy-tac-cung-cua-nhanh-a)
   - 3.4 [Yêu cầu chức năng REQ-A](#34-yeu-cau-chuc-nang-req-a)
   - 3.5 [Yêu cầu phi chức năng NF-A](#35-yeu-cau-phi-chuc-nang-nf-a)
   - 3.6 [Trạng thái, cách xử lý và kiểm thử](#36-trang-thai-cach-xu-ly-va-kiem-thu)
4. [Ma trận truy vết yêu cầu](#4-ma-tran-truy-vet-yeu-cau)
5. [Tình huống kiểm thử TC-A](#5-tinh-huong-kiem-thu-tc-a)
6. [Phụ thuộc với B và C](#6-phu-thuoc-voi-b-va-c)
   - 6.1 [A → B: hỏi quyền xuất](#61-a--b-hoi-quyen-xuat)
   - 6.2 [C → A: danh mục mẫu](#62-c--a-danh-muc-mau)
   - 6.3 [Tình huống kiểm thử tích hợp đề xuất (TC-I)](#63-tinh-huong-kiem-thu-tich-hop-de-xuat-tc-i)

<div style="page-break-after: always"></div>

<!-- ============================== NỘI DUNG ============================== -->

## 1. Mục đích và phạm vi

Tài liệu này là **đầu vào yêu cầu và kiểm thử của nghiệp vụ A — Sản xuất video** theo `nhiem_vu_xay_dung_planning.md` §3.1: yêu cầu chức năng và phi chức năng, đánh dấu phạm vi, tình huống kiểm thử, ma trận truy vết và phụ thuộc với B, C. Phần WBS, ước lượng, lịch, chi phí và rủi ro nằm ở `A_02_WBS_uoc_luong_rui_ro_v1.0.md`.

Nguồn soạn là `plan-note/planning_a.md` (bản kế hoạch A đầy đủ ngày 23/09/2026). A_01 và A_02 là nguồn soạn hiện hành; khi sửa, sửa ở đây trước. Trạng thái vẫn là Draft, không phải bản đã nghiệm thu.

### 1.1. Phạm vi v2.1 và phạm vi trình diễn

**Phạm vi v2.1** là toàn bộ yêu cầu của nghiệp vụ A trong Charter v2.1 (RQ-01 → RQ-10, RQ-12; OB-01 → OB-04, OB-06 → OB-09; NF-01 → NF-06). Tài liệu đặc tả đủ phạm vi này. Phần chưa làm được giữ lại dưới dạng planning package, không bị xoá.

**Phạm vi trình diễn** là phần A cần chạy được trong đợt làm bài 24/09–07/10/2026, theo `ke-hoach-hoan-thien-2-tuan.md` §3:

> Nhập chữ tiếng Việt và ảnh cục bộ, chọn **một** mẫu, xem trước, tạo video 5 cảnh/60 giây và xuất MP4 bằng WebCodecs trên một môi trường Chrome/Edge có ghi phiên bản. Ghi thời gian thực đo, không tuyên bố đạt mọi chỉ tiêu hiệu năng của Charter.

| Hạng mục | Phạm vi v2.1 | Phạm vi trình diễn (đợt 24/09–07/10) |
| --- | --- | --- |
| Mẫu | Từ 5 mẫu dùng được (OB-04) | Trình diễn 1 mẫu. Mã nguồn đã có 5 mẫu, nhưng OB-04 chưa được nghiệm thu |
| Trình duyệt | Tier 1: Chrome/Edge trên Windows, Chrome trên macOS/Linux. Tier 2: Safari/Firefox chỉ xuất khi probe đạt | Chrome 153.0.8010.53 và Edge 153.0.4234.48 trên Windows 11 (máy của Chiến) |
| Độ phân giải | 720p và 1080p theo quyền | 720p có watermark (gói Miễn phí). 1080p chỉ khi B kích hoạt gói Cá nhân bằng thanh toán giả lập |
| Hiệu năng, bộ nhớ | OB-01, OB-02, OB-03, OB-06 trên máy tham chiếu và ba máy | Đo và ghi số trên môi trường trình diễn; không kết luận đạt OB |
| Tiến trình | Thanh tiến trình, ETA, **tạm dừng** và hủy (RQ-04) | Tiến trình, ETA, hủy. **Chưa có** tạm dừng |
| Lưu/mở | File trên máy người dùng (RQ-08) | Tự lưu IndexedDB/OPFS, mở lại sau refresh; xuất/nhập gói `.promptvideo.json` |
| Tiếng Việt | 100% đúng trên bộ 134 tổ hợp dấu (OB-07) | Bộ chuỗi dấu trong test hiện có; bộ 134 tổ hợp **chưa có** |

**Loại trừ khỏi cả hai phạm vi:** âm thanh (thu âm, nhạc, TTS), AI sinh nội dung, khung dọc, upload video đầu vào, đồng bộ đám mây, tính năng mới ngoài Charter. Muốn thêm bất kỳ mục nào phải qua quy trình ở A_02 §7.

**Trạng thái.** Tài liệu ở trạng thái **Draft**. Kiểm tra chéo theo bảng phân công: **Việt Quang kiểm tra, Quang Anh xác nhận**.

---

## 2. Căn cứ lập và thuật ngữ

### 2.1. Căn cứ lập

| Nguồn | Nội dung sử dụng |
| --- | --- |
| [nhiem_vu_xay_dung_planning.md](../../../../nhiem_vu_xay_dung_planning.md) §2, §3.1, §3.2 | Cây tài liệu đích, quy ước mã, nội dung bắt buộc của `X_01` và `X_02` |
| [00_Viec_can_lam_tu_ke_hoach_B_C.md](../../../../../plan-note/00_Viec_can_lam_tu_ke_hoach_B_C.md) | Nguồn lịch sử; đã thay bằng DEC-001 → DEC-006 trong danh mục quyết định |
| [planning_b.md](../../../../../plan-note/planning_b.md) | Cấu trúc 11 mục; hợp đồng reserve → complete/cancel; quy trình thay đổi B §10 |
| [05_Ke_hoach_nghiep_vu_C_v1.0.md](../../../../../plan-note/05_Ke_hoach_nghiep_vu_C_v1.0.md) | Trạng thái mẫu, `/api/templates`, khung kiểm thử 3 cấp C §7.1 |
| [ke-hoach-hoan-thien-2-tuan.md](../../../../ke-hoach-hoan-thien-2-tuan.md) §3–5 | Phạm vi demo A, Nguồn lịch sử; lịch hiện hành DOC-01 → DOC-05, năng lực giả định 10 giờ/người/tuần |
| Project Charter v2.1 §3, §4, §6, §7, §8, §11 | OB-01 → OB-09; RQ-01 → RQ-10, RQ-12; NF-01 → NF-06; máy tham chiếu; mốc M0 → M7; đơn giá 80.000 VND/giờ; quyền giảm phạm vi khi nguyên mẫu không đạt |
| Assumption Log v2.1 | AS-10, AS-14, AS-15, AS-16, AS-17, AS-32, AS-34, AS-45, AS-47; CT-04, CT-06 |
| [01_Quy_tac_bat_buoc.md](../../../../research/01_Quy_tac_bat_buoc.md) §7–11 | Quy tắc 100% và 8/80, planning package, RTM 7 cột, PERT chia 3, contingency/management reserve, RACI |
| [design-note/plan-note/00, 01, 02, 04, 05, 06](../../../../plan-note/00-mvp-software-master-plan.md) | Kiến trúc, stack, checklist và kết quả kiểm chứng của phần A |
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
- **QT-A-5 — Reservation nào cũng phải được đối soát.** Thành công chỉ giao kết quả sau khi `complete` được xác nhận. Mất phản hồi phải retry/đối soát cùng reservation; không tự cancel giao dịch có thể đã hoàn tất. Hủy/lỗi mã hóa gửi `cancel`, chỉ báo đã hoàn lượt sau xác nhận. Đây là đích DEC-011; ISS-G-001 chưa sửa trong mã.
- **QT-A-6 — Mỗi lần thử một idempotency key.** Gửi lại cùng lần thử thì dùng lại khoá.
- **QT-A-7 — Khung xác định.** Khung = f(dữ liệu cảnh, `frameIndex / fps`). Xem trước và xuất dùng chung `renderFrame`.
- **QT-A-8 — Font đóng gói.** Chỉ vẽ bằng font đi kèm ứng dụng (Noto Sans Variable), không dùng font cài trên máy.
- **QT-A-9 — Giải phóng tài nguyên.** Worker, encoder, file handle và bitmap được giải phóng trong `finally`, dù kết quả ra sao.

### 3.4. Yêu cầu chức năng REQ-A

Mã `REQ-A-nn` đã chốt theo DEC-004. Cột "Phạm vi": **D** là có trình diễn trong đợt 24/09–07/10; **V** là chỉ thuộc phạm vi v2.1, chưa triển khai.

| ID | Yêu cầu | Luồng chính | Ngoại lệ / lỗi | Tiêu chí chấp nhận đo được | Phạm vi |
| --- | --- | --- | --- | --- | --- |
| REQ-A-01 | Tạo và kiểm tra dữ liệu cảnh | Người dùng đặt tên → hệ thống tạo dự án 5 cảnh, tổng 60 giây, 30 fps, 1280×720 theo `ProjectDocumentV1` | Thời lượng âm, thiếu cảnh, tổng vượt giới hạn, chuyển cảnh dài hơn cảnh, tiêu đề trống, ảnh mất tài sản → báo lỗi, chặn xuất | Dự án mới hợp lệ ngay; mỗi lỗi chặn đều bị gắn mức *error*; sai phiên bản dữ liệu bị từ chối kèm thông báo tiếng Việt | D |
| REQ-A-02 | Nhập chữ tiếng Việt bằng biểu mẫu | Nhập tiêu đề/phụ đề; chỉnh căn lề, cỡ, màu, xuống dòng; vùng an toàn hiển thị như công cụ phụ | Chữ tràn vùng an toàn → cảnh báo, không chặn xuất | Không mất dấu hay tách dấu khỏi chữ khi xuống dòng; từ quá dài vẫn giữ nguyên; đường viền vùng an toàn không có trong khung xuất | D |
| REQ-A-03 | Chèn ảnh từ máy người dùng | Chọn file → giải mã, xoay theo EXIF, lưu vào OPFS/IndexedDB; chọn cover/contain, vị trí, tỷ lệ | Ảnh > 12 MB, cạnh > 8192 px hoặc file hỏng → thông báo tên file và lý do; dự án không bị hỏng | Ảnh EXIF xoay đúng chiều; ảnh vượt giới hạn bị từ chối; không có request mang byte ảnh | D |
| REQ-A-04 | Chọn mẫu | Chọn một mẫu trong thư viện → bố cục, màu, kiểu chữ đổi; dữ liệu người dùng giữ nguyên | — | Đổi qua mọi mẫu không mất chữ; khung vàng từng mẫu khớp ảnh chuẩn | D (1 mẫu) / V (5 mẫu, OB-04) |
| REQ-A-05 | Dùng danh mục mẫu của C | Khi mở editor, đọc `GET /api/templates` → chỉ cho chọn mẫu có trạng thái Active | Không gọi được máy chủ → dùng snapshot/danh mục đã biết, ghi nhãn ngoại tuyến và thời điểm; bản mới chưa có cache chỉ dùng nội dung đóng gói với cảnh báo chưa xác minh trạng thái; dự án đang dùng mẫu đã bị ẩn → vẫn mở và xuất được, có cảnh báo | Mẫu Retired không được chọn mới khi có danh mục hiện hành; dự án cũ giữ snapshot/version và mở được. Mã hiện tại thiếu snapshot/version: ISS-G-002 | D |
| REQ-A-06 | Xem trước theo timeline | Phát/tua trên canvas; hiển thị đúng khung tại thời điểm chọn, có chuyển cảnh vào/ra | — | Pixel xem trước trùng pixel xuất tại cùng timestamp; một timestamp luôn cho một khung | D |
| REQ-A-07 | Xuất MP4 theo luồng bằng WebCodecs | Worker dựng từng khung → `VideoEncoder` H.264 → Mediabunny ghép MP4 → ghi dần vào OPFS hoặc file người dùng chọn; không có thì dùng bộ đệm | Hết dung lượng → từ chối trước khi hỏi quyền; lỗi mã hoá → dọn file tạm, trả lượt | MP4 phát được; codec AVC, 30 fps, độ phân giải đúng quyền; lệch thời lượng ≤ 1 khung; không có khung đen đầu/cuối | D |
| REQ-A-08 | Tiến trình, hủy và tạm dừng | Hiện số khung đã xong, ETA (sau 10 khung đầu), nút Hủy | Hủy → dừng Worker, `cancel` reservation, báo "đã hoàn lượt" | Hủy xong không còn Worker nào chạy; lượt được trả. **Tạm dừng/tiếp tục** (Charter RQ-04): chưa làm | D (tiến trình, hủy) / V (tạm dừng) |
| REQ-A-09 | Phát hiện trình duyệt không hỗ trợ | Trước khi hỏi quyền, gọi `isConfigSupported` cho đúng độ phân giải và fps | Không có `VideoEncoder` hoặc cấu hình bị từ chối → thông báo tiếng Việt, không hỏi quyền | Không có reservation nào được tạo khi encoder không hỗ trợ. Trang báo không tương thích ngay khi mở ứng dụng: chưa làm | D (lúc xuất) / V (lúc mở) |
| REQ-A-10 | Hỏi quyền B trước mỗi lần xuất | `POST /api/exports/reservations` kèm idempotency key và độ cao yêu cầu → xong thì `complete`; hủy/lỗi/ngoại lệ thì `cancel` | Máy chủ từ chối → không mã hoá (xem REQ-A-12) | 100% lần mã hoá có reservation trước; chỉ giao kết quả sau complete được xác nhận; cancel phải đối soát; gửi lại cùng khoá. ISS-G-001 còn mở | D |
| REQ-A-11 | Áp quyền được cấp | Mã hoá theo `grantedHeight`; vẽ watermark khi `watermarkRequired = true` | Giao diện xin 1080p nhưng được cấp 720p → mã hoá 720p | Gói Miễn phí: MP4 720p có watermark; gói trả phí: 1080p không watermark (OB-14) | D |
| REQ-A-12 | Báo rõ lý do bị từ chối | Ánh xạ phản hồi máy chủ sang thông điệp tiếng Việt: chưa đăng nhập, hết lượt tháng, độ phân giải không hợp lệ, mất kết nối, lỗi máy chủ | — | Mỗi mã lỗi ở §6.1 hiện đúng một thông điệp tiếng Việt đúng lý do; không có chuỗi tiếng Anh từ máy chủ lọt ra giao diện | D |
| REQ-A-13 | Tự lưu và phục hồi cục bộ | Mỗi thay đổi ghi bản nháp ngay, ghi bản chính sau 800 ms; ảnh trong OPFS | Refresh, đóng tab, mất mạng → mở lại vẫn còn dự án và ảnh | Tải lại trang: dự án, 5 cảnh và ảnh còn nguyên; không gọi máy chủ khi lưu | D |
| REQ-A-14 | Xuất/nhập gói dự án | Xuất `.promptvideo.json` kèm SHA-256 từng ảnh; nhập trên máy khác | Sai phiên bản, sai checksum → chặn trước khi ghi, dự án hiện có không bị ảnh hưởng | Gói chuyển máy mở được; gói bị sửa bị từ chối (Charter RQ-08) | D |

### 3.5. Yêu cầu phi chức năng NF-A

Máy tham chiếu của Charter §3.1: Intel Core i5 thế hệ 10, 8 GB RAM, Chrome bản ổn định mới nhất, Windows 11. **Môi trường trình diễn**: Windows 11 Home 10.0.26200, Chrome 153.0.8010.53, Edge 153.0.4234.48. Cấu hình CPU/RAM của máy trình diễn sẽ ghi khi đo (TC-A-25). Cột "Số đo hiện có" chỉ ghi số đã đo thật và có file nguồn.

| ID | Yêu cầu | Ngưỡng v2.1 (nguồn) | Môi trường đo | Ngưỡng trình diễn | Số đo hiện có |
| --- | --- | --- | --- | --- | --- |
| NF-A-01 | Tiếng Việt | 100% ký tự đúng trên bộ 134 tổ hợp dấu, khung ngang (OB-07, NF-05) | Máy tham chiếu và Tier 1 | Bộ chuỗi dấu trong `text.test.ts` và `render-parity.spec.ts` đạt 100% | Test tự động xanh ngày 23/09 (§4). Bộ 134 tổ hợp **chưa có** |
| NF-A-02 | Tốc độ xuất | ≤ 1,5 × thời lượng video ở 1920×1080, 30 fps (OB-01, NF-01) | Máy tham chiếu | Đo và ghi thời gian video 60 giây ở 720p và 1080p; không kết luận OB-01 | 60 giây 720p qua Worker: 8,8 giây (HeadlessChrome 152, 12 luồng, 16 GiB; `src/frontend/artifacts/worker-benchmark.json`). **1080p chưa đo**: H.264 1080p không đạt probe trong môi trường headless đó |
| NF-A-03 | Bộ nhớ | Bộ nhớ đỉnh tăng < 15% khi độ dài tăng 10 lần (OB-02, NF-02) | Máy tham chiếu | Ba lần xuất liên tiếp không tăng bộ nhớ đơn điệu; không còn Worker nào sau khi xuất/hủy | JS heap luồng chính qua 3 lần: 35,44 → 32,07 → 36,11 MB (`src/frontend/docs/benchmark-results.md`). Bộ nhớ trong Worker **chưa đo được**. Phép thử ×10 **chưa làm** |
| NF-A-04 | Riêng tư | 0 byte nội dung người dùng rời trình duyệt (OB-09, NF-03). Yêu cầu chung `NF-G-01` đã chốt; giữ NF-A-04 để truy vết trách nhiệm A | DevTools/HAR trên luồng thật với máy chủ thật | Tệp HAR của luồng trình diễn không chứa chữ, tên ảnh, byte ảnh, dữ liệu cảnh, MP4 | `04-editor-core.md` ghi đã kiểm bằng DevTools nhưng **không có tệp bằng chứng**. Cần làm TC-A-24 |
| NF-A-05 | Trình duyệt hỗ trợ | Tier 1 xuất đầy đủ; Tier 2 xuất khi probe đạt; thiết bị di động không cam kết. Tỷ lệ thành công ≥ 95% trên 100 lần thử (OB-06) | Ma trận Tier 1/Tier 2 | Chrome 153 và Edge 153 trên Windows 11 | Chỉ có HeadlessChrome 152. Chrome/Edge có giao diện **chưa đo** |
| NF-A-06 | Đầu ra xác định | Checksum luồng video giống nhau trên 3 máy khác cấu hình (OB-03, NF-04) | 3 máy | Khung vàng 5 mẫu khớp trên máy trình diễn | Snapshot khung ổn định qua 3 lần trên **một** máy (SHA-256 `71e7a74e…`, `benchmark-results.md`). Ba máy **chưa đo** |
| NF-A-07 | Không treo giao diện | Giao diện vẫn thao tác được khi đang xuất | Tier 1 | Như v2.1 | `export.spec.ts` "the editor stays responsive while an export runs" xanh ngày 23/09 |
| NF-A-08 | Dễ dùng | Người mới tạo xong video đầu tiên trong 10 phút, ít nhất 8/10 người (OB-08). Bàn phím tới được mọi vùng chính | 10 người dùng thử | Chỉ kiểm phần bàn phím | `editor.spec.ts` "keyboard alone reaches…" xanh. Thử với người dùng **chưa làm** |
| NF-A-09 | Độ phủ kiểm thử | Mô-đun dựng và mã hoá ≥ 70% (OB-12) | CI | Báo cáo coverage của `core/rendering`, `core/export` | **Chưa đo** coverage |
| NF-A-10 | Chạy không cần cài đặt | Chỉ cần trình duyệt; cần Internet khi xuất (NF-06, CT-06) | Tier 1 | Soạn, xem trước, lưu chạy được khi máy chủ không phản hồi | `editor.spec.ts` "builds a project end to end with the backend unreachable" xanh |

### 3.6. Trạng thái, cách xử lý và kiểm thử

Mã trong `exportProject.ts` và `ExportPanel.tsx`. TC ở cột cuối liệt kê tại §5.

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
| **Mất mạng sau khi mã hoá xong** | `complete` thất bại | Đích: giữ kết quả tạm cục bộ, báo chờ xác nhận, retry/đối soát cùng ID. Mã hiện tại vẫn giao file (ISS-G-001). TTL 30 phút; thu hồi khi reserve mới hoặc sweep được bật, không bảo đảm đúng phút thứ 30 | TC-A-20 |
| **Reservation hết hạn khi đang xuất** | Xuất lâu hơn 30 phút → `complete` trả 409 | Đích: không báo hoàn tất/giao kết quả khi nhận 409; đối soát và xử lý xuất dài. Hiện tại khác đích (ISS-G-001); TC-A-36 phải thử lại | TC-A-36 |
| **Mẫu bị ẩn** | C đổi mẫu sang Retired/Draft | Mẫu biến mất khỏi danh sách chọn; dự án đang dùng mẫu đó vẫn mở, xem trước và xuất được, có cảnh báo "mẫu không còn trong danh mục"; mẫu đó chỉ còn là giá trị hiện tại, không chọn lại được (đã làm 23/09, gói 4.2.6) | TC-A-07 |
| **Không đọc được danh mục mẫu** | `/api/templates` lỗi hoặc ngoại tuyến | Dùng danh sách mẫu đóng gói; không chặn soạn thảo | TC-A-07 |
| **Gói dự án hỏng hoặc bị sửa** | Sai `packageVersion` hoặc sai checksum | Từ chối trước khi ghi; dự án hiện có không đổi | TC-A-22 |
| **Ảnh không hợp lệ** | > 12 MB, cạnh > 8192 px, giải mã lỗi | Từ chối kèm tên file và lý do | TC-A-05 |

---

## 4. Ma trận truy vết yêu cầu

**Bằng chứng mới 24/09:** EV-001 chạy Vitest đạt 79/79; chỉ chứng minh unit tests hiện có. E2E 23/09 là kết quả được nguồn cũ báo cáo, không phải lần chạy mới hay nghiệm thu. REQ-A-05 thiếu snapshot/version; REQ-A-10 thiếu xác nhận complete; trạng thái hiện hành tương ứng là **Một phần / ISS-G-002** và **Một phần / ISS-G-001**. P09 là RTM hợp nhất.


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
| REQ-A-05 | Chỉ dùng mẫu Active theo danh mục C | RQ-06 | Charter §5.1 (giáp ranh A–C); P03 (đã lập) | `core/templates/catalog.ts`, `features/editor/useTemplateCatalog.ts`, `features/dashboard/DashboardPage.tsx`, `features/editor/EditorPage.tsx`. Backend (C): `Modules/Templates/TemplatesModule.cs` | TC-A-07, TC-I-04 (đã chốt) | Một phần; thiếu snapshot/version — ISS-G-002 |
| REQ-A-06 | Xem trước theo timeline, cùng bộ dựng với xuất | RQ-02, RQ-05, RQ-12 | plan-note/04, plan-note/05 | `core/rendering/renderer.ts`, `features/editor/PreviewCanvas.tsx` | TC-A-08 | Có code + test xanh |
| REQ-A-07 | Xuất MP4 theo luồng bằng WebCodecs | RQ-03, OB-01, OB-02 | plan-note/05; `src/frontend/docs/ADR-001-client-video-pipeline.md` | `core/export/exportWorker.ts`, `exportMp4.ts`, `outputTarget.ts`, `storageBudget.ts`, `validateMp4.ts` | TC-A-09, TC-A-14, TC-A-25, TC-A-26 | Có code + test xanh (TC-A-09, TC-A-14); TC-A-25/26 mới đo trên HeadlessChrome 152 |
| REQ-A-08 | Tiến trình, ETA, hủy; tạm dừng | RQ-04 | plan-note/05 | `core/export/exportClient.ts`, `features/editor/ExportPanel.tsx` | TC-A-10, TC-A-11, TC-A-31 | Có code + test xanh (tiến trình, hủy); **tạm dừng chưa làm** |
| REQ-A-09 | Phát hiện trình duyệt không hỗ trợ | RQ-10, AS-10 | plan-note/05; `src/frontend/docs/capability-matrix.md` | `core/export/encoderSupport.ts`, `core/capabilities/probe.ts` | TC-A-13, TC-A-32 | Có code + test xanh (lúc xuất); **trang báo lúc mở ứng dụng chưa làm** |
| REQ-A-10 | Hỏi quyền B trước mỗi lần xuất | RQ-14, OB-13 | plan-note/05; B §3.6.3 | `core/export/reservation.ts`, `core/export/exportProject.ts` | TC-A-12, TC-A-15, TC-A-17, TC-I-01 (đề xuất) | Một phần; complete lỗi vẫn giao file — ISS-G-001 |
| REQ-A-11 | Áp `grantedHeight` và watermark theo quyền | RQ-15, OB-14 | plan-note/05; B REQ-B-07 | `core/export/exportProject.ts`, `core/rendering/renderer.ts` (`renderWatermark`) | TC-A-16, TC-I-03 (đề xuất) | Có code, chưa test với máy chủ thật |
| REQ-A-12 | Báo rõ lý do bị từ chối | RQ-10, OB-14 | §6.1 tài liệu này | `core/export/reservation.ts` (`describeStatus`) | TC-A-18, TC-A-19 | Có code + test xanh (đã sửa ánh xạ 403/400/429 ngày 23/09, A3.7.2); chưa chạy với máy chủ B thật |
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

## 5. Tình huống kiểm thử TC-A

**Sửa định nghĩa có ghi lịch sử:** TC-A-20 và TC-A-36 trước đây cho phép giao file khi complete lỗi; từ 24/09 đổi theo DEC-011. Bản cũ nằm `_history/2026-09-23`; mã TC giữ để truy vết và bắt buộc chạy lại. Không kế thừa kết quả đạt của kỳ cũ.

"Tự động" là tên test trong repo. "Cần viết" là TC chưa có test. Kết quả ghi theo lần chạy ngày 23/09/2026.

| TC | Req | Cấp | Bước thử và dữ liệu | Kết quả mong đợi, ngưỡng | Tự động / Cần viết | Kết quả 23/09 |
| --- | --- | --- | --- | --- | --- | --- |
| TC-A-01 | REQ-A-01 | Unit | Tạo dự án mới bằng `createProject` | Đúng 5 cảnh, tổng 60 giây, không lỗi | `validation.test.ts` "accepts a freshly created project…" | Đạt |
| TC-A-02 | REQ-A-01 | Unit | Đặt thời lượng âm; xoá 1 cảnh; tổng > giới hạn; chuyển cảnh dài hơn cảnh; tiêu đề trống | Mỗi trường hợp có lỗi mức *error*; `isProjectExportable = false` | `validation.test.ts` (6 test "rejects…/flags…") | Đạt |
| TC-A-03 | REQ-A-02, NF-A-01 | Unit + Integration | Chuỗi tiếng Việt có dấu chồng, xuống dòng hẹp, font thật | Không mất dấu; dấu không tách khỏi chữ | `text.test.ts` (9 test); `render-parity.spec.ts` "Vietnamese diacritics survive wrapping" | Đạt |
| TC-A-04 | NF-A-01 | Integration | Bộ 134 tổ hợp dấu × 5 mẫu, khung ngang | 100% ký tự đúng (so khung vàng) | Cần viết (5.3) | Chưa thử |
| TC-A-05 | REQ-A-03 | Integration | Ảnh JPEG có EXIF xoay 90°; file > 12 MB; file hỏng | Ảnh xoay đúng; hai file sau bị từ chối kèm tên và lý do; dự án không đổi | `package-and-images.spec.ts` "image import applies EXIF orientation and refuses bad files" | Đạt |
| TC-A-06 | REQ-A-04, NF-A-06 | Integration | Đổi qua 5 mẫu; chụp khung đầu/giữa/cuối | Chữ giữ nguyên; khung khớp ảnh chuẩn theo ngưỡng pixel | `editor.spec.ts` "switching through all five templates keeps the text"; `golden.spec.ts` (5 test) | Đạt |
| TC-A-07 | REQ-A-05 | Integration + E2E | Danh mục có một mẫu Retired; mở dự án cũ; thử offline có/không cache; đổi version mẫu | Không chọn mới mẫu Retired khi có danh mục hiện hành; dự án cũ dùng snapshot/version; offline có nhãn thời điểm/chưa xác minh | Test catalog/mock đã có; cần bổ sung snapshot/version và máy chủ thật | Một phần; ISS-G-002; chưa đạt đầy đủ DEC-012 |
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
| TC-A-20 | REQ-A-10 | E2E | Chặn mạng sau khi reserve, để mã hoá xong | Không báo thành công/giao kết quả cho tới khi complete được xác nhận; retry/đối soát không trừ thêm lượt. Đích DEC-011; lỗi hiện tại ISS-G-001 | Cần viết (ACT-5.1-01) | Chưa thử |
| TC-A-21 | REQ-A-13 | Integration | Tạo dự án có ảnh, tải lại trang | Dự án, 5 cảnh, ảnh còn nguyên | `editor.spec.ts` "project and its scenes survive a reload" | Đạt |
| TC-A-22 | REQ-A-14 | Integration | Xuất gói, nhập ở profile sạch; sửa 1 byte ảnh; đổi `packageVersion` | Gói đúng mở được; hai gói sau bị từ chối, không ghi gì | `package-and-images.spec.ts` "a project package moves between machines and rejects tampering" | Đạt |
| TC-A-24 | NF-A-04 | E2E | Chạy luồng demo trên máy chủ thật, thu HAR; tìm chuỗi đánh dấu trong chữ, tên file ảnh, 16 byte đầu ảnh, `"scenes"`, `ftyp` | 0 kết quả; body request chỉ có `idempotencyKey`, `requestedHeight` | Cần viết (ACT-5.1-01) | Chưa thử |
| TC-A-25 | NF-A-02, NF-A-05 | E2E | Dự án benchmark 60 giây: 720p ×3 (OPFS), 1080p ×1, trên Chrome 153 và Edge 153 có giao diện | Ghi thời gian, kích thước, lệch thời lượng, hash, cấu hình máy. Trình diễn: chỉ ghi số. v2.1: 1080p ≤ 90 giây trên máy tham chiếu | `benchmark.spec.ts` (có sẵn, chạy riêng). Môi trường trình diễn **chưa chạy** | Chưa thử |
| TC-A-26 | NF-A-03 | Integration | Ba lần xuất liên tiếp, đếm Worker và đọc bộ nhớ | Không còn Worker; bộ nhớ không tăng đơn điệu | `benchmark.spec.ts` "exports three OPFS runs…" (số liệu cũ trên HeadlessChrome 152) | Chưa chạy lại |
| TC-A-27 | NF-A-03 | E2E | Xuất 60 giây và 600 giây trên máy tham chiếu; đo bộ nhớ đỉnh tiến trình | Chênh < 15% | Cần viết (5.2) | Chưa thử |
| TC-A-28 | NF-A-06 | E2E | Cùng gói dự án, xuất trên 3 máy khác cấu hình | Checksum luồng video giống nhau | Cần viết (5.2) | Chưa thử |
| TC-A-29 | NF-A-05 | E2E | 100 lần xuất trên các trình duyệt mục tiêu | ≥ 95 lần thành công | Cần viết (5.3) | Chưa thử |
| TC-A-30 | NF-A-08 | E2E | 10 người chưa dùng sản phẩm tự tạo video đầu tiên | ≥ 8/10 người xong trong 10 phút | Cần viết (5.3) | Chưa thử |
| TC-A-31 | REQ-A-08 | Integration | Tạm dừng rồi tiếp tục giữa chừng | MP4 hoàn chỉnh, không lặp hay mất khung | Cần viết (4.2.7) | Chưa thử |
| TC-A-32 | REQ-A-09 | Integration | Mở ứng dụng trên trình duyệt không có `VideoEncoder` | Trang báo không tương thích kèm gợi ý; soạn thảo vẫn dùng được | Cần viết (4.2.7) | Chưa thử |
| TC-A-33 | REQ-A-01, REQ-A-02 | Integration | 20 thao tác rồi undo/redo hết | Dự án trở về đúng trạng thái đầu và cuối | `editor.spec.ts` "undo and redo restore the document exactly" | Đạt |
| TC-A-34 | REQ-A-02, NF-A-08 | Integration | Chỉ dùng bàn phím | Tới được điều hướng, cảnh, xem trước, lưu | `editor.spec.ts` "keyboard alone reaches navigation, scenes, preview and save" | Đạt |
| TC-A-35 | REQ-A-13, NF-A-10 | Integration | Máy chủ không phản hồi; tạo và lưu dự án | Soạn thảo, xem trước, lưu đều chạy | `editor.spec.ts` "builds a project end to end with the backend unreachable" | Đạt |
| TC-A-36 | REQ-A-10 | Integration | Giả lập `complete` trả 409 (reservation hết hạn) | Không báo hoàn tất/giao kết quả khi complete trả 409; giữ trạng thái cần xử lý và không reserve lần mới âm thầm. Đích DEC-011; ISS-G-001 còn mở | Cần viết | Chưa thử |

Số TC-A-23 không dùng (đã chuyển thành TC-I-01 ở §6.3). Mã không cấp lại.

---

## 6. Giao tiếp đã thống nhất

Nguồn hợp đồng hiện hành là [P03](../../03_Interface_Specification_v1.0.md); quyết định là [DEC-001–014](../../../00_Quyet_dinh_va_quy_uoc_ma.md). Các bảng lệch L-AB/L-CA của bản trước được giữ trong lịch sử, đã chuyển thành quyết định hoặc ISS-G.

| Mã | A phải thực hiện | Phần B/C cung cấp | Trạng thái |
| --- | --- | --- | --- |
| IF-AB-01 | Kiểm cục bộ, reserve, mã hóa theo quyền, complete/cancel có xác nhận | Quyền từ máy chủ; reserve tính lượt ngay; complete giữ lượt; cancel hoàn đúng một lần vào kỳ gốc | Có mã một phần; ISS-G-001 |
| IF-CA-01 | Lọc Active, giữ snapshot/version mẫu cũ, nhãn cache offline | Draft/Active/Retired; metadata có version; publication kiểm tương thích | List/status đã có; snapshot/migration chưa đủ: ISS-G-002 |
| IF-CB-01 | Không gọi trực tiếp từ editor; hiển thị quota sau refresh | C hỗ trợ qua B với ticket, lý do, idempotency, audit, giao dịch nguyên tử | Hợp đồng đã chốt; endpoint chưa triển khai |

API, lỗi và TC-I-01–06 do P03 sở hữu. A dẫn mã, không tự tạo phiên bản TC-I khác. Free xuất ba lần rồi chặn lần4; hủy xác nhận hoàn lượt; Admin kích hoạt fake non-Production; Retired và dự án cũ; HAR0byte; đo độ trễ reserve là sáu luồng chuẩn.
