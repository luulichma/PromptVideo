# P02 — Đặc tả yêu cầu phần mềm hợp nhất

**Phiên bản:** v1.0, ngày 24/09/2026. **Trạng thái:** Nguồn soạn đã ghép; chưa nghiệm thu. Chiến tổng hợp, Việt Quang kiểm tra; chủ module chịu trách nhiệm sửa phần mình.

## 1. Cách đọc và phạm vi

Ba phụ lục dưới đây chứa đầy đủ đầu vào yêu cầu, quy tắc, luồng chính/ngoại lệ, tiêu chí và ca thử của A/B/C tại lần ghép. Chúng là thành phần của đặc tả chung. Sửa tại module trước rồi ghép lại; không sửa hai bộ độc lập. P03 sở hữu giao tiếp và TC-I; P09 là RTM hợp nhất. Có 65 mã yêu cầu: 24 của A, 28 của B, 12 của C và NF-G-01 dùng chung. Dòng truy vết lặp mã trong phụ lục không phải yêu cầu mới.

Giữ toàn bộ phạm vi Charter v2.1. Demo 5 cảnh/60 giây là tập con; không có âm thanh, AI, khung dọc hoặc upload nội dung video. Module A làm video cục bộ; B quản lý tài khoản, thuê bao, quota và thanh toán; C quản trị và vận hành. Hóa đơn, seats, hỗ trợ và các tiêu chí còn thiếu vẫn phải được truy vết, không bị xóa để vừa lịch.

## 2. Yêu cầu dùng chung

**NF-G-01 — 0 byte nội dung người dùng rời trình duyệt.** Kế thừa OB-09/NF-03; các NF tương ứng ở module giữ trách nhiệm thực hiện, không cộng thêm phạm vi. HTTP/log không chứa chữ, ảnh, tên ảnh, JSON cảnh hoặc MP4. Dữ liệu xác thực, quyền, quota và metadata catalog được phép truyền theo P03. TC-I-05 thu HAR và log với dấu nhận diện riêng; che token trước khi chia sẻ. Kỳ này chưa có đầy đủ bằng chứng từ luồng thực tế.

## 3. Quy tắc quản lý yêu cầu

REQ-X/NF-X/QT-X/TC-X tuân theo danh mục mã; mã RQ/OB/NF của Charter giữ nguyên. Mỗi thay đổi phải cập nhật tiêu chí, TC, RTM và tác động tới WBS, lịch, chi phí, rủi ro. “Có mã”, “unit đạt”, “E2E dùng mock đạt”, “máy chủ thật đạt” và “đã nghiệm thu” là các trạng thái khác nhau. TC-A-20/36 đổi kỳ vọng theo DEC-011 nên không kế thừa kết quả cũ; TC-A-07 còn thiếu snapshot/phiên bản.

## Phụ lục A — Đặc tả module A

Nguồn: [A_01_Yeu_cau_va_kiem_thu_v1.0](<_module-input/A_San_xuat_video/A_01_Yeu_cau_va_kiem_thu_v1.0.md>).

<!-- ============================ TRANG 1 — BÌA ============================ -->

### PromptVideo — Slide-to-Video Generator

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

#### Phân công kiểm tra (chưa ký xác nhận)

| Người tạo         | Người kiểm tra    | Người xác nhận    |
| ----------------- | ----------------- | ----------------- |
| Nguyễn Thế Chiến  | Nguyễn Việt Quang | Phạm Quang Anh    |

#### Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| -- | --------- | ------------- | -------------- | ----------------- | --------------- | --------------- |
| 1  | Ver 1.0   | 2026-09-23    | Tạo mới        | Tách từ archive/plan-note-2026-09-23/planning_a.md: phạm vi, thuật ngữ, REQ-A, NF-A, trạng thái, RTM, TC-A, phụ thuộc với B và C | Nguyễn Thế Chiến (nguồn) | Chưa xác minh phê duyệt |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

#### Mục lục

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

#### 1. Mục đích và phạm vi

Tài liệu này là **đầu vào yêu cầu và kiểm thử của nghiệp vụ A — Sản xuất video** theo `nhiem_vu_xay_dung_planning.md` §3.1: yêu cầu chức năng và phi chức năng, đánh dấu phạm vi, tình huống kiểm thử, ma trận truy vết và phụ thuộc với B, C. Phần WBS, ước lượng, lịch, chi phí và rủi ro nằm ở `A_02_WBS_uoc_luong_rui_ro_v1.0.md`.

Nguồn soạn là `archive/plan-note-2026-09-23/planning_a.md` (bản kế hoạch A đầy đủ ngày 23/09/2026). A_01 và A_02 là nguồn soạn hiện hành; khi sửa, sửa ở đây trước. Trạng thái vẫn là Draft, không phải bản đã nghiệm thu.

##### 1.1. Phạm vi v2.1 và phạm vi trình diễn

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

#### 2. Căn cứ lập và thuật ngữ

##### 2.1. Căn cứ lập

| Nguồn | Nội dung sử dụng |
| --- | --- |
| [nhiem_vu_xay_dung_planning.md](<../../notes/plans/nhiem_vu_xay_dung_planning.md>) §2, §3.1, §3.2 | Cây tài liệu đích, quy ước mã, nội dung bắt buộc của `X_01` và `X_02` |
| [00_Viec_can_lam_tu_ke_hoach_B_C.md](<../../archive/plan-note-2026-09-23/00_Viec_can_lam_tu_ke_hoach_B_C.md>) | Nguồn lịch sử; đã thay bằng DEC-001 → DEC-006 trong danh mục quyết định |
| [planning_b.md](<../../archive/plan-note-2026-09-23/planning_b.md>) | Cấu trúc 11 mục; hợp đồng reserve → complete/cancel; quy trình thay đổi B §10 |
| [05_Ke_hoach_nghiep_vu_C_v1.0.md](<../../archive/plan-note-2026-09-23/05_Ke_hoach_nghiep_vu_C_v1.0.md>) | Trạng thái mẫu, `/api/templates`, khung kiểm thử 3 cấp C §7.1 |
| [ke-hoach-hoan-thien-2-tuan.md](<../../notes/plans/ke-hoach-hoan-thien-2-tuan.md>) §3–5 | Phạm vi demo A, Nguồn lịch sử; lịch hiện hành DOC-01 → DOC-05, năng lực giả định 10 giờ/người/tuần |
| Project Charter v2.1 §3, §4, §6, §7, §8, §11 | OB-01 → OB-09; RQ-01 → RQ-10, RQ-12; NF-01 → NF-06; máy tham chiếu; mốc M0 → M7; đơn giá 80.000 VND/giờ; quyền giảm phạm vi khi nguyên mẫu không đạt |
| Assumption Log v2.1 | AS-10, AS-14, AS-15, AS-16, AS-17, AS-32, AS-34, AS-45, AS-47; CT-04, CT-06 |
| [01_Quy_tac_bat_buoc.md](<../../archive/research-2026-09/01_Quy_tac_bat_buoc.md>) §7–11 | Quy tắc 100% và 8/80, planning package, RTM 7 cột, PERT chia 3, contingency/management reserve, RACI |
| [notes/mvp-plan/00, 01, 02, 04, 05, 06](<../../notes/mvp-plan/00-mvp-software-master-plan.md>) | Kiến trúc, stack, checklist và kết quả kiểm chứng của phần A |
| Mã nguồn `src/frontend`, `src/backend/PromptVideo.Api/Modules/{Exports,Templates}` | Trạng thái thật của từng yêu cầu (đọc ngày 23/09/2026) |

##### 2.2. Thuật ngữ

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

#### 3. Đặc tả yêu cầu nghiệp vụ A

##### 3.1. Mô tả tổng quan

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

##### 3.2. Tác nhân

| Tác nhân | Vai trò trong nghiệp vụ A |
| --- | --- |
| **Người dùng chưa đăng nhập** | Tạo, sửa, xem trước, lưu và mở dự án cục bộ. **Không xuất được**; bấm Xuất thì được nhắc đăng nhập |
| **Người dùng đã đăng nhập** | Thêm quyền xuất MP4 theo gói (Miễn phí: 720p, có watermark, 3 lượt/tháng; Cá nhân/Doanh nghiệp: 1080p, không watermark) |
| **Trình duyệt** | Môi trường chạy. Năng lực mã hoá và dung lượng lưu trữ quyết định có cho xuất hay không |
| **Nghiệp vụ B (máy chủ quyền)** | Cấp hoặc từ chối reservation; quyết định `grantedHeight` và `watermarkRequired` |
| **Nghiệp vụ C (danh mục mẫu)** | Cho biết mẫu nào đang được phép dùng (`/api/templates`) |

##### 3.3. Quy tắc cứng của nhánh A

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

##### 3.4. Yêu cầu chức năng REQ-A

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

##### 3.5. Yêu cầu phi chức năng NF-A

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

##### 3.6. Trạng thái, cách xử lý và kiểm thử

Mã trong `exportProject.ts` và `ExportPanel.tsx`. TC ở cột cuối liệt kê tại §5.

###### 3.6.1. Vòng đời một lần xuất

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

###### 3.6.2. Tình huống ngoại lệ

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

#### 4. Ma trận truy vết yêu cầu

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
| REQ-A-01 | Tạo và kiểm tra dữ liệu cảnh 5 cảnh/60 giây | RQ-01, RQ-07 | notes/mvp-plan/01 (schema), notes/mvp-plan/04 | `core/project/schema.ts`, `validation.ts`, `timeline.ts`, `createProject.ts` | TC-A-01, TC-A-02, TC-A-33 | Có code + test xanh |
| REQ-A-02 | Nhập chữ tiếng Việt bằng biểu mẫu | RQ-07, OB-07 | notes/mvp-plan/04 | `features/editor/SceneInspector.tsx`, `core/rendering/text.ts`, `core/project/safeArea.ts` | TC-A-03, TC-A-04, TC-A-34 | Có code + test xanh; TC-A-04 (134 tổ hợp) chưa làm |
| REQ-A-03 | Chèn ảnh cục bộ | RQ-09, OB-09 | notes/mvp-plan/04 | `core/images/importImage.ts`, `core/storage/assetStore.ts` | TC-A-05 | Có code + test xanh |
| REQ-A-04 | Chọn mẫu, đổi mẫu không mất dữ liệu | RQ-06, OB-04 | notes/mvp-plan/04 | `core/templates/templates.ts` | TC-A-06 | Có code + test xanh (5 mẫu); OB-04 chưa nghiệm thu |
| REQ-A-05 | Chỉ dùng mẫu Active theo danh mục C | RQ-06 | Charter §5.1 (giáp ranh A–C); P03 (đã lập) | `core/templates/catalog.ts`, `features/editor/useTemplateCatalog.ts`, `features/dashboard/DashboardPage.tsx`, `features/editor/EditorPage.tsx`. Backend (C): `Modules/Templates/TemplatesModule.cs` | TC-A-07, TC-I-04 (đã chốt) | Một phần; thiếu snapshot/version — ISS-G-002 |
| REQ-A-06 | Xem trước theo timeline, cùng bộ dựng với xuất | RQ-02, RQ-05, RQ-12 | notes/mvp-plan/04, notes/mvp-plan/05 | `core/rendering/renderer.ts`, `features/editor/PreviewCanvas.tsx` | TC-A-08 | Có code + test xanh |
| REQ-A-07 | Xuất MP4 theo luồng bằng WebCodecs | RQ-03, OB-01, OB-02 | notes/mvp-plan/05; `src/frontend/docs/ADR-001-client-video-pipeline.md` | `core/export/exportWorker.ts`, `exportMp4.ts`, `outputTarget.ts`, `storageBudget.ts`, `validateMp4.ts` | TC-A-09, TC-A-14, TC-A-25, TC-A-26 | Có code + test xanh (TC-A-09, TC-A-14); TC-A-25/26 mới đo trên HeadlessChrome 152 |
| REQ-A-08 | Tiến trình, ETA, hủy; tạm dừng | RQ-04 | notes/mvp-plan/05 | `core/export/exportClient.ts`, `features/editor/ExportPanel.tsx` | TC-A-10, TC-A-11, TC-A-31 | Có code + test xanh (tiến trình, hủy); **tạm dừng chưa làm** |
| REQ-A-09 | Phát hiện trình duyệt không hỗ trợ | RQ-10, AS-10 | notes/mvp-plan/05; `src/frontend/docs/capability-matrix.md` | `core/export/encoderSupport.ts`, `core/capabilities/probe.ts` | TC-A-13, TC-A-32 | Có code + test xanh (lúc xuất); **trang báo lúc mở ứng dụng chưa làm** |
| REQ-A-10 | Hỏi quyền B trước mỗi lần xuất | RQ-14, OB-13 | notes/mvp-plan/05; B §3.6.3 | `core/export/reservation.ts`, `core/export/exportProject.ts` | TC-A-12, TC-A-15, TC-A-17, TC-I-01 (đề xuất) | Một phần; complete lỗi vẫn giao file — ISS-G-001 |
| REQ-A-11 | Áp `grantedHeight` và watermark theo quyền | RQ-15, OB-14 | notes/mvp-plan/05; B REQ-B-07 | `core/export/exportProject.ts`, `core/rendering/renderer.ts` (`renderWatermark`) | TC-A-16, TC-I-03 (đề xuất) | Có code, chưa test với máy chủ thật |
| REQ-A-12 | Báo rõ lý do bị từ chối | RQ-10, OB-14 | §6.1 tài liệu này | `core/export/reservation.ts` (`describeStatus`) | TC-A-18, TC-A-19 | Có code + test xanh (đã sửa ánh xạ 403/400/429 ngày 23/09, A3.7.2); chưa chạy với máy chủ B thật |
| REQ-A-13 | Tự lưu và phục hồi cục bộ | RQ-08, NF-06 | notes/mvp-plan/04 | `core/storage/database.ts`, `projectStore.ts`, `assetStore.ts`, `features/editor/editorStore.ts` | TC-A-21, TC-A-35 | Có code + test xanh |
| REQ-A-14 | Xuất/nhập gói dự án có checksum | RQ-08 | notes/mvp-plan/04 | `core/package/projectPackage.ts` | TC-A-22 | Có code + test xanh |
| NF-A-01 | Tiếng Việt 134 tổ hợp | OB-07, NF-05 | notes/mvp-plan/04 | `core/rendering/text.ts` | TC-A-03, TC-A-04 | Một phần: bộ chuỗi hiện có xanh; bộ 134 chưa làm |
| NF-A-02 | Tốc độ ≤ 1,5× ở 1080p30 | OB-01, NF-01 | notes/mvp-plan/01, notes/mvp-plan/05 | `core/export/*`; `e2e/benchmark.spec.ts` | TC-A-25 | Có số đo 720p một môi trường; 1080p chưa đo |
| NF-A-03 | Bộ nhớ < 15% khi dài ×10 | OB-02, NF-02 | notes/mvp-plan/01, notes/mvp-plan/05 | `core/export/outputTarget.ts` | TC-A-26, TC-A-27 | Có số đo JS heap luồng chính; Worker và ×10 chưa đo |
| NF-A-04 | 0 byte nội dung rời máy | OB-09, NF-03 | notes/mvp-plan/04, notes/mvp-plan/06 | Toàn bộ `core/*`; request chỉ ở `reservation.ts`, `useCapabilities.ts` | TC-A-24, TC-I-05 (đề xuất) | Chưa có tệp bằng chứng |
| NF-A-05 | Trình duyệt hỗ trợ, ≥ 95%/100 lần | OB-06, AS-10 | notes/mvp-plan/00 §5; capability-matrix | `core/capabilities/probe.ts` | TC-A-25, TC-A-29 | Chưa làm (ma trận và 100 lần) |
| NF-A-06 | Checksum giống nhau trên 3 máy | OB-03, NF-04, AS-17 | notes/mvp-plan/01 | `core/rendering/renderer.ts`; `e2e/golden.spec.ts` | TC-A-06, TC-A-28 | Khung vàng xanh trên 1 máy; 3 máy chưa làm |
| NF-A-07 | Không treo giao diện khi xuất | OB-08 | notes/mvp-plan/05 | `core/export/exportWorker.ts` | TC-A-10 | Có code + test xanh |
| NF-A-08 | Dễ dùng: 10 phút, 8/10 người | OB-08 | notes/mvp-plan/04 | `features/*` | TC-A-30, TC-A-34 | Bàn phím xanh; thử với người dùng chưa làm |
| NF-A-09 | Độ phủ ≥ 70% | OB-12 | notes/mvp-plan/07 | `core/rendering`, `core/export` | — (báo cáo coverage) | Chưa đo |
| NF-A-10 | Chạy không cần cài đặt; soạn thảo không cần máy chủ | NF-06, CT-06 | notes/mvp-plan/02 (PWA), notes/mvp-plan/04 | `vite.config.ts` (PWA), `features/editor/*` | TC-A-35 | Có code + test xanh |

---

#### 5. Tình huống kiểm thử TC-A

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

#### 6. Giao tiếp đã thống nhất

Nguồn hợp đồng hiện hành là [P03](<03_Interface_Specification_v1.0.md>); quyết định là [DEC-001–014](<../00_Quyet_dinh_va_quy_uoc_ma.md>). Các bảng lệch L-AB/L-CA của bản trước được giữ trong lịch sử, đã chuyển thành quyết định hoặc ISS-G.

| Mã | A phải thực hiện | Phần B/C cung cấp | Trạng thái |
| --- | --- | --- | --- |
| IF-AB-01 | Kiểm cục bộ, reserve, mã hóa theo quyền, complete/cancel có xác nhận | Quyền từ máy chủ; reserve tính lượt ngay; complete giữ lượt; cancel hoàn đúng một lần vào kỳ gốc | Có mã một phần; ISS-G-001 |
| IF-CA-01 | Lọc Active, giữ snapshot/version mẫu cũ, nhãn cache offline | Draft/Active/Retired; metadata có version; publication kiểm tương thích | List/status đã có; snapshot/migration chưa đủ: ISS-G-002 |
| IF-CB-01 | Không gọi trực tiếp từ editor; hiển thị quota sau refresh | C hỗ trợ qua B với ticket, lý do, idempotency, audit, giao dịch nguyên tử | Hợp đồng đã chốt; endpoint chưa triển khai |

API, lỗi và TC-I-01–06 do P03 sở hữu. A dẫn mã, không tự tạo phiên bản TC-I khác. Free xuất ba lần rồi chặn lần 4; hủy xác nhận hoàn lượt; Admin kích hoạt fake non-Production; Retired và dự án cũ; HAR0byte; đo độ trễ reserve là sáu luồng chuẩn.


## Phụ lục B — Đặc tả module B

Nguồn: [B_01_Yeu_cau_va_kiem_thu_v1.0](<_module-input/B_Tai_khoan_thue_bao/B_01_Yeu_cau_va_kiem_thu_v1.0.md>).

### B_01 — Yêu cầu và kiểm thử: Tài khoản, thuê bao và thanh toán

| Thuộc tính | Giá trị |
| --- | --- |
| Nguồn soạn hiện hành | Module B, Planning, phiên bản 1.0 ngày 24/09/2026 |
| Trạng thái | Đã chuẩn hóa theo quyết định nội bộ; chờ kiểm tra chéo, chưa nghiệm thu sản phẩm |
| Chủ nội dung | Nguyễn Việt Quang |
| Kiểm tra / xác nhận nội bộ | Phạm Quang Anh / Nguyễn Thế Chiến; chưa ghi nhận chữ ký hoặc kết quả review |
| Phạm vi sửa | CV-B-01, CV-B-02, CV-B-06; đầu vào CV-B-07/CV-B-08 |
| Quy ước chung | [Quyết định và mã](<../00_Quyet_dinh_va_quy_uoc_ma.md>) |

#### 1. Mục đích và phạm vi

B quản lý tài khoản, thuê bao, quyền xuất, hạn mức, thanh toán, gia hạn, hóa đơn và chỗ Doanh nghiệp. A dựng video trên trình duyệt; C hỗ trợ/quản trị theo quyền. Tài liệu này thay phần yêu cầu/RTM/TC của [planning_b.md](<../../archive/plan-note-2026-09-23/planning_b.md>); bản cũ được giữ để tra lịch sử, không dùng số giờ hoặc kết luận phê duyệt của bản cũ làm baseline hiện hành.

| Hạng mục | Toàn phạm vi v2.1 | Phạm vi trình diễn và hiện trạng 24/09 |
| --- | --- | --- |
| Tài khoản, gói, giấy phép, hạn mức | Đầy đủ quy tắc và kiểm thử liên quan | Có mã backend và test; chưa chạy kiểm tra chéo A–B thật kỳ này |
| Mua/gia hạn | Thanh toán thật, tự động cấp quyền ≤ 5 phút, nhắc hạn | Có cổng giả lập; event dedup có mã; checkout operation dedup, cổng thật và nhắc hạn còn thiếu |
| Hóa đơn, 5 chỗ | Vẫn thuộc phạm vi; tách thành PP 4.3.5/4.3.6 | Chưa có entity/API; số Seats=5 trong policy chưa phải quản lý 5 tài khoản |
| Trang thuê bao | Gói, lượt, hạn, mua/gia hạn, hóa đơn, chỗ | Có trang tài khoản và capabilities; các phần còn lại chưa đủ |
| Giao tiếp hỗ trợ C→B | Thực thi theo IF-CB-01 | Hợp đồng nội bộ đã chốt; API chưa được triển khai |

D = có phần trong mục tiêu demo; V = thuộc v2.1. D không có nghĩa là đạt. Không xử lý media/project nội dung trên máy chủ B. Không thêm audio/video nền hoặc nhiệm vụ rà giấy phép phần mềm. Phí/gói bên dưới là dữ liệu dự án, không phải báo giá thị trường.

#### 2. Nguồn và thuật ngữ

| Nguồn | Ngày / phiên bản đối chiếu | Giá trị và giới hạn |
| --- | --- | --- |
| [Project Charter](<../../official-docs/01_Initiating/01_Project_Charter_v2.1.docx>) | v2.1 hiện hành | OB-09/12/13/14/15, NF-09, thẩm quyền; tên thư mục không chứng minh đã ký |
| [Business Case và Benefit Plan](<../../official-docs/00_Pre-project>) | Nguồn Pre-project v2.2 theo danh mục chung | Nguồn giá trị kinh doanh; không tự gán mã MT chưa đối soát |
| [Thiết kế backend](<../../notes/mvp-plan/03-backend-core.md>) | Ghi kết quả 17/09/2026 | Có tuyên bố 60/60 pass lịch sử; không kèm raw result/commit trong chính nguồn đó |
| [Source backend](<../../src/backend/PromptVideo.Api>) và [test](<../../src/backend/PromptVideo.Api.Tests>) | Đọc ngày 24/09; HEAD `28a07efcc119493e0d89fbfb72ba422b864de747` | Bằng chứng tĩnh về mã và tên test, không thay kết quả chạy |
| [AccountPage](<../../src/frontend/src/features/account/AccountPage.tsx>), [reservation](<../../src/frontend/src/core/export/reservation.ts>) | Cùng lần đọc source 24/09 | Xác nhận UI hiện có một phần và complete/cancel đang best-effort |
| [Sổ bằng chứng chung](<../03_Executing/04_Quality_Assurance_and_Lessons_Learned_v1.0.md>) | EV-001/EV-002/EV-005 | Kết quả lần chạy mới được ghi tại nguồn này; test xanh hiện hành không tự chứng minh hợp đồng mới |

| Thuật ngữ | Nghĩa dùng thống nhất |
| --- | --- |
| Plan / policy | Free, Personal, Business; quyền là dữ liệu PlanCatalog và Entitlements |
| Capability snapshot | Bản đọc quyền có TTL mặc định 60 giây; API reserve tự tính lại quyền phía server, không nhận snapshot như chứng thư |
| UsagePeriod | Bộ đếm theo tháng UTC; gồm lượt Reserved và Completed, kể cả khi đang dùng paid |
| Reservation | Giữ lượt với key duy nhất theo người dùng; TTL 30 phút; trạng thái API `Reserved/Completed/Canceled` |
| Idempotency | Lặp cùng thao tác không gây tác dụng lần hai; key reserve khác key sự kiện thanh toán |
| Applied / Duplicate / AmountMismatch | Kết quả service apply payment; không đồng nhất với toàn bộ trạng thái lưu PaymentEvent |
| Seat | Tài khoản được quyền Business từ thuê bao; tổng 5 gồm owner theo quyết định nội bộ |
| Bằng chứng tĩnh / bằng chứng chạy | Đọc source chứng minh có mã; log/TRX/HAR đúng phiên bản mới chứng minh ca đã chạy |

#### 3. Đặc tả và quyết định nghiệp vụ

##### 3.1. Luồng chính và ranh giới

```text
Đăng ký → đăng nhập → đọc quyền
                        ├─ reserve → dựng/mã hóa cục bộ → complete được server xác nhận → giao file
                        │     └─ hủy/lỗi/chưa hoàn tất → cancel hoặc giải phóng khi xử lý reservation hết TTL
                        └─ mua/gia hạn → payment được xác nhận → subscription → đọc quyền mới
Business: subscription → quản lý chỗ / hóa đơn (planning package, chưa có mã)
C hỗ trợ: Admin → IF-CB-01 cộng lượt có reason + idempotency + audit (chưa có API)
```

Request xuất chỉ mang định danh/quyền truy cập, idempotency key, độ phân giải yêu cầu hoặc reservation ID; không mang chữ, ảnh, scene/project JSON, MP4. Email/mật khẩu chỉ đi qua luồng tài khoản cần thiết và không được đưa vào telemetry. Không nói “máy chủ không nhận dữ liệu người dùng nào” vì máy chủ vẫn cần dữ liệu tài khoản/thanh toán.

##### 3.2. Tác nhân và gói

Khách xem gói/đăng ký; User quản lý tài khoản và xuất theo quyền; owner Business quản lý chỗ/hóa đơn của thuê bao mình; Admin thao tác vận hành đã được phân quyền. A thực thi quyền xuất; C yêu cầu hỗ trợ theo IF-CB-01. Cổng thanh toán thật là hệ thống bên ngoài, khác cổng giả lập.

| Chính sách | Free | Personal | Business |
| --- | --- | --- | --- |
| Giá dự án | 0 VND | 599.000 VND/năm | 4.900.000 VND/năm |
| Kỳ hạn | Không có kỳ trả phí | 12 tháng | 12 tháng |
| Hạn mức | 3 lượt/tháng UTC | Không giới hạn | Không giới hạn |
| Trần / watermark | 720p / có | 1080p / không | 1080p / không |
| Số tài khoản/chỗ | 1 | 1 | 5 gồm owner |
| Hóa đơn Business | Không | Không | Có trong toàn phạm vi; chưa triển khai |
| Hỗ trợ theo đặc tả gói | Cộng đồng | Tiêu chuẩn | Phản hồi 1 ngày làm việc; chưa có bằng chứng đạt SLA |
| Hết hạn | Không áp dụng | Trở về Free ở lần kiểm quyền kế tiếp | Chỗ dùng chung mất quyền; xét quyền cá nhân còn hiệu lực rồi Free |

##### 3.3. Quy tắc đã quyết định

- **QT-B-1 — Kiểm quyền trước xuất.** Chỉ bắt đầu dựng/mã hóa sau khi reserve được server chấp nhận; snapshot cũ không cho phép bỏ qua máy chủ.
- **QT-B-2 — Máy chủ quyết định lượt.** Reserve tăng Consumed ngay, complete giữ nguyên, cancel hoàn tối đa một lần về UsagePeriodId gốc. Completed không được cancel hoàn lại.
- **QT-B-3 — Chống lặp theo thao tác.** Reserve dùng UserId + IdempotencyKey; payment event dùng Provider + ExternalEventId. Checkout cần operation key để retry không mua thêm kỳ ngoài ý muốn; phần này đang thiếu, theo **ISS-G-003**.
- **QT-B-4 — Cập nhật nhất quán.** Tạo reservation và tăng bộ đếm cùng lần commit, dùng concurrency token/retry. Kiểm thêm đua complete/cancel/sweep; có test reserve không chứng minh mọi đua trạng thái.
- **QT-B-5 — UTC và hết hạn.** Chỉ đổi tháng UTC mới tạo kỳ mới. Paid hết hạn giữ Consumed tháng đó; không tự cấp lại 3 lượt. TTL reservation là 30 phút; quá TTL complete trả 409. Quét giải phóng diễn ra khi reserve mới hoặc khi sweep được bật; mặc định sweep tắt và khoảng quét là 6 giờ, không cam kết hoàn đúng tại phút 30.
- **QT-B-6 — Giả lập tách theo môi trường.** Production không đăng ký gateway giả lập và không map route, kể cả Admin. Development/Testing cho người đã xác thực; môi trường khác nhưng không Production chỉ Admin. Mọi kết quả giả lập ghi nhãn “không thu tiền thật”.
- **QT-B-7 — Không gửi nội dung.** Payload B không mang media/nội dung project; cần HAR luồng thật để chứng minh ngoài việc đọc schema.
- **QT-B-8 — Audit có phạm vi.** Mọi thao tác nhạy cảm mục tiêu có audit tối thiểu actor/action/đối tượng/thời điểm/correlation; telemetry không ghi nội dung hoặc bí mật. Source hiện chỉ chứng minh những sự kiện đã có code; không coi phần chưa triển khai là đã audit.

Mã `RQ-1..RQ-8` ở bản B cũ chuyển tương ứng sang `QT-B-1..QT-B-8`; không đổi `RQ/OB/NF` của Charter. Các REQ-B, NF-B và TC-B hiện có giữ nguyên ID; bổ sung TC mới ở số chưa dùng.

**Quyết định A–B:** sản phẩm mục tiêu chỉ giao file sau server xác nhận Completed (hoặc retry cùng reservation xác nhận đã Completed). Khi timeout, giữ kết quả tạm và thử lại trước TTL; khi expired/conflict thì không giao file, giải quyết lượt và yêu cầu một lần xuất mới. Source frontend hiện giao file với complete best-effort; đây là **ISS-G-001, chưa sửa mã, chưa đạt quyết định mới**.

##### 3.4. Yêu cầu chức năng và tiêu chí

Các câu dưới đây là điều kiện mong đợi có thể kiểm; cách thử và ngoại lệ tương ứng nằm ở §3.6/§5. Không gộp điều kiện còn thiếu vào “đã hoàn thành”.

| ID | Nội dung và tiêu chí chấp nhận | WBS xây dựng | Phạm vi |
| --- | --- | --- | --- |
| REQ-B-01 | Đăng ký email duy nhất, mật khẩu tối thiểu 10 ký tự; tài khoản mới dùng Free. | 4.3.1 | D |
| REQ-B-02 | Đăng nhập/đăng xuất; cookie HttpOnly, hỗ trợ bearer; 401 khi chưa xác thực, 403 khi thiếu quyền. | 4.3.1 | D |
| REQ-B-03 | Đổi mật khẩu trong phiên hợp lệ; 5 lần sai khóa 15 phút, lần tiếp theo dù đúng vẫn từ chối. | 4.3.1 | D |
| REQ-B-04 | Phân vai User/Admin; seed admin có kiểm soát; User thường không gọi được chức năng quản trị. | 4.3.1 | D |
| REQ-B-05 | Danh mục Free/Personal/Business và policy đúng bảng gói, đọc được công khai, dữ liệu thiếu phải báo lỗi. | 4.3.2 | D |
| REQ-B-06 | Máy chủ tự giải quyền trước mỗi reserve; snapshot mới có TTL 60 giây. Thuê bao hết hạn chuyển Free ở lần kiểm tra kế tiếp. | 4.3.2 | D |
| REQ-B-07 | Free yêu cầu 1080p được cấp 720p + watermark; trả phí 1080p không watermark; A phải xuất theo quyền trả về. | 4.3.2 | D |
| REQ-B-08 | UsagePeriod theo tháng UTC; tháng mới tạo kỳ mới; cancel hoàn về kỳ của reservation. | 4.3.2 | D |
| REQ-B-09 | Free chỉ giữ/hoàn tất tối đa 3 lượt trong tháng; yêu cầu thứ tư trả 403 kèm thông báo hạn mức. | 4.3.2 | D |
| REQ-B-10 | Reserve tăng bộ đếm ngay; retry cùng UserId+key không tăng lần hai; complete giữ nguyên số đã tính. | 4.3.2 | D |
| REQ-B-11 | 8 reserve đồng thời của Free quota 3 cho đúng 3 Reserved và 5 QuotaExceeded; DB không vượt 3. | 4.3.2 | D |
| REQ-B-12 | Hủy/lỗi trước complete hoàn một lần; completed không hoàn; reservation quá TTL không complete; A chỉ giao file sau complete được xác nhận. | 4.3.2 | D |
| REQ-B-13 | Mua gói năm; thanh toán hợp lệ kích hoạt tự động không quá 5 phút. Demo phải ghi giả lập, không thu tiền. | 4.3.3 | D một phần / V |
| REQ-B-14 | Sự kiện thanh toán trùng không cấp quyền hai lần; sai tiền bị từ chối. Retry checkout cùng thao tác cũng phải chống lặp. | 4.3.3 | D một phần / V |
| REQ-B-15 | Gia hạn còn hiệu lực cộng 12 tháng từ hạn cũ; hết hạn tính từ kích hoạt mới; nhắc trước 7 ngày và 1 ngày. | 4.3.3 | V |
| REQ-B-16 | Hết hạn trả phí về Free; giữ nguyên số đã dùng trong UsagePeriod tháng hiện tại, không tặng lại 3 lượt. | 4.3.2 | D |
| REQ-B-17 | Mỗi giao dịch Applied Business sinh một hóa đơn; trùng sự kiện không sinh lại, owner được xem; thông tin thuế lấy cấu hình đã xác minh. | 4.3.5 | V |
| REQ-B-18 | Business có tối đa 5 tài khoản gồm owner; cấp/thu hồi phải kiểm quyền, khi hết hạn mất quyền dùng chung. | 4.3.6 | V |
| REQ-B-19 | Trang thuê bao có gói, lượt, hạn, mua/gia hạn, hóa đơn và chỗ theo quyền; dữ liệu khớp API. | 4.3.4 | D một phần / V |
| REQ-B-20 | Rate limit auth theo cấu hình; đổi danh tính phải lấy antiforgery mới; request ghi thiếu CSRF bị chặn. | 4.3.1 | D |
| REQ-B-21 | Audit nghiệp vụ và telemetry không chứa nội dung/email/password/key; giữ dữ liệu theo chính sách và phân quyền. | 4.3.1,4.3.2,4.3.3 | D một phần / V |

##### 3.5. Phi chức năng

| ID | Ngưỡng / yêu cầu | Nguồn | TC | Số đo / kết luận hiện có |
| --- | --- | --- | --- | --- |
| NF-B-01 | Kiểm quyền p95 ≤ 1 giây | NF-09 của Charter | TC-B-93 | Chưa đo tải/độ trễ kỳ này |
| NF-B-02 | 0 byte nội dung project/ảnh/video gửi đến B | OB-09 | TC-B-94 | Đã đọc schema; chưa có HAR thật kỳ này |
| NF-B-03 | Không vượt quota khi request đồng thời; trạng thái và bộ đếm nhất quán | OB-14 | TC-B-36, TC-B-99 | Có test reserve; chưa chứng minh mọi race complete/cancel/sweep |
| NF-B-04 | Độ phủ module B ≥ 70%; bất biến quota/idempotency có test | OB-12; ngưỡng áp dụng nội bộ cho B | TC-B-92 | Chưa có báo cáo coverage xác minh |
| NF-B-05 | Mật khẩu băm; cookie/bearer; CSRF; lockout; rate limit đúng cấu hình | OB-13 (hỗ trợ); quy tắc bảo mật B | TC-B-51, TC-B-52, TC-B-53, TC-B-54, TC-B-55, TC-B-56 | Có mã và ca thử; EV-002: bị chặn Docker ngày 24/09 |
| NF-B-06 | Health/metrics/audit không lộ nội dung; chính sách retention được cấu hình và kiểm | OB-09; yêu cầu vận hành B/C | TC-B-91, TC-B-39 | Có mã/test; sweep mặc định tắt, chu kỳ 6 giờ |
| NF-B-07 | Testcontainers tách DB; fake gateway không đăng ký và không map trong Production, kể cả Admin | QT-B-6; nguyên tắc môi trường | TC-B-95 | Có test chặn Production; ngoài Dev/Testing còn cần test quyền Admin |

Đo NF-B-01 với warm-up rồi 100 lần kiểm quyền, concurrency 5, ghi CPU/RAM/DB/network, p95 và tỷ lệ lỗi; đây là quy trình kiểm nội bộ đã chọn, không tự thay môi trường nghiệm thu Charter. Coverage phải ghi phạm vi module và mẫu số, không lấy số test pass làm phần trăm phủ.

##### 3.6. Trạng thái và ngoại lệ

| Tình huống | Xử lý thống nhất | Ca thử |
| --- | --- | --- |
| Chưa có thuê bao paid | Resolve Free; tài khoản mới chưa dùng có 3 lượt | TC-B-09 |
| Paid hiệu lực / gia hạn | Quyền paid; cùng gói còn hiệu lực cộng 12 tháng từ hạn cũ | TC-B-13/14 |
| Paid hết hạn | Resolve Free, đọc số đã dùng trong kỳ hiện tại; còn quota thì vẫn reserve được | TC-B-15/16/97 |
| Snapshot đã cũ | Server tự giải lại; không quy định cứ cũ là 403 | TC-B-32 |
| Reservation còn TTL, paid hết hạn giữa chừng | Complete căn cứ reservation đã cấp; lần reserve mới xét quyền hiện thời | TC-B-42 |
| Reserved → Completed | Consumed giữ nguyên; complete lặp an toàn | TC-B-33/37 |
| Reserved → Canceled | Hoàn một lần về kỳ gốc; cancel lặp không hoàn thêm | TC-B-38/98/99 |
| Completed → cancel | 409, không hoàn | TC-B-37 |
| Quá TTL / mất mạng | Complete quá TTL 409; chưa giao file; release khi xử lý stale, không mô tả thành job chạy đúng 30 phút | TC-B-39/41 |
| Reserve cùng key đã kết thúc | Server trả bản ghi cũ; A phải kiểm trạng thái, không dùng key cũ cho lần xuất mới | TC-B-35; kiểm tích hợp bổ sung |
| Khóa tài khoản / quá rate limit | Lockout sau 5 sai trong 15 phút; 429 theo cấu hình; tách hai cách thử | TC-B-54/55 |
| Payment event lần đầu / lặp | Applied một lần; lặp trả Duplicate, không cấp thêm; DB có Received/Applied/Rejected, không có đủ mọi state thiết kế | TC-B-22/23 |
| Sai tiền / cổng báo thất bại | Sai tiền có AmountMismatch và không cấp quyền; Pending/Failed/callback thật vẫn là đầu ra phải xây | TC-B-24/25 |
| Seat bị thu hồi / Business hết hạn | Mất quyền dùng chung; fallback entitlement cá nhân/Free, không mặc định 403 | TC-B-63/64 |
| Hóa đơn | Mỗi Applied Business một hóa đơn; duplicate không sinh thêm; thuế là cấu hình được xác minh trước triển khai | TC-B-71..74 |

#### 4. Ma trận truy vết

Trạng thái dựa trên source review, nguồn lịch sử và lần chạy EV-002 ngày 24/09: **18 unit case PlanPolicyTests đạt; 42 integration case bị chặn khi khởi tạo Docker/Testcontainers**. Runner ghi Failed nhưng đây là lỗi môi trường, không kết luận 42 lỗi nghiệp vụ. Kết quả này **không phải nghiệm thu**. Tên lớp được nối đến đường dẫn trong B_03; ngày chạy, môi trường và phiên bản được giữ riêng trong B_04 và sổ bằng chứng chung.

| Req ID | Requirement Description | Business Objective | Design Doc | Code Module | Test Case | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-B-01 | Đăng ký email duy nhất, mật khẩu tối thiểu 10 ký tự; tài khoản mới dùng Free. | OB-14 | B_01 §3; P03 | IdentityModule; ApplicationUser | TC-B-09, TC-B-57 | Có mã và ca thử; email trùng chưa có ca riêng |
| REQ-B-02 | Đăng nhập/đăng xuất; cookie HttpOnly, hỗ trợ bearer; 401 khi chưa xác thực, 403 khi thiếu quyền. | OB-13 | B_01 §3; P03 | IdentityModule; AuthResponseConventions | TC-B-51, TC-B-52, TC-B-53 | Có mã và ca thử; EV-002: integration bị chặn Docker ngày 24/09 |
| REQ-B-03 | Đổi mật khẩu trong phiên hợp lệ; 5 lần sai khóa 15 phút, lần tiếp theo dù đúng vẫn từ chối. | OB-13 (hỗ trợ); NF-B-05 | B_01 §3; P03 | IdentityModule | TC-B-54, TC-B-56 | Có mã và ca thử; EV-002: integration bị chặn Docker ngày 24/09 |
| REQ-B-04 | Phân vai User/Admin; seed admin có kiểm soát; User thường không gọi được chức năng quản trị. | OB-13 (hỗ trợ) | B_01 §3; P03 | Roles; ReferenceDataSeeder; AdminModule | TC-B-53 | Có mã và ca thử; không chứng minh mọi endpoint tương lai |
| REQ-B-05 | Danh mục Free/Personal/Business và policy đúng bảng gói, đọc được công khai, dữ liệu thiếu phải báo lỗi. | OB-13, OB-14, OB-15 | B_01 §3; P03 | PlanCatalog; PlanCapabilities; SubscriptionsModule | TC-B-10 | Có mã và ca thử; EV-002: integration bị chặn Docker ngày 24/09 |
| REQ-B-06 | Máy chủ tự giải quyền trước mỗi reserve; snapshot mới có TTL 60 giây. Thuê bao hết hạn chuyển Free ở lần kiểm tra kế tiếp. | OB-13 | B_01 §3; P03 | EntitlementService; ExportReservationService | TC-B-15, TC-B-32 | Có mã và ca thử một phần; snapshot không phải token gửi lại cho reserve |
| REQ-B-07 | Free yêu cầu 1080p được cấp 720p + watermark; trả phí 1080p không watermark; A phải xuất theo quyền trả về. | OB-14 | B_01 §3; P03 | PlanCatalog; ExportReservationService; frontend export | TC-B-31 | API có mã và ca thử; file đầu ra A–B chưa kiểm chứng kỳ này |
| REQ-B-08 | UsagePeriod theo tháng UTC; tháng mới tạo kỳ mới; cancel hoàn về kỳ của reservation. | OB-14 | B_01 §3; P03 | UsagePeriod; ExportReservationService | TC-B-40, TC-B-98 | Có test chuyển tháng; cancel xuyên tháng còn thiếu ca chạy |
| REQ-B-09 | Free chỉ giữ/hoàn tất tối đa 3 lượt trong tháng; yêu cầu thứ tư trả 403 kèm thông báo hạn mức. | OB-14 | B_01 §3; P03 | ExportsModule; ExportReservationService | TC-B-34 | Có mã và ca thử; EV-002: integration bị chặn Docker ngày 24/09 |
| REQ-B-10 | Reserve tăng bộ đếm ngay; retry cùng UserId+key không tăng lần hai; complete giữ nguyên số đã tính. | OB-13, OB-14 | B_01 §3; P03 | ExportReservationService; ApplicationDbContext | TC-B-33, TC-B-35, TC-B-37 | Có mã và ca thử; EV-002: integration bị chặn Docker ngày 24/09 |
| REQ-B-11 | 8 reserve đồng thời của Free quota 3 cho đúng 3 Reserved và 5 QuotaExceeded; DB không vượt 3. | OB-14; NF-B-03 | B_01 §3; P03 | ExportReservationService; UsagePeriod xmin | TC-B-36 | Có test concurrency; EV-002: bị chặn Docker ngày 24/09 |
| REQ-B-12 | Hủy/lỗi trước complete hoàn một lần; completed không hoàn; reservation quá TTL không complete; A chỉ giao file sau complete được xác nhận. | OB-13, OB-14 | B_01 §3; P03 | ExportReservationService; DataRetentionService; frontend reservation | TC-B-37, TC-B-38, TC-B-39, TC-B-41, TC-B-99 | Có mã B; A lệch quyết định giao file: ISS-G-001; TTL/sweep cần phân biệt |
| REQ-B-13 | Mua gói năm; thanh toán hợp lệ kích hoạt tự động không quá 5 phút. Demo phải ghi giả lập, không thu tiền. | OB-15 | B_01 §3; P03 | PaymentGateway; SubscriptionService; SubscriptionsModule | TC-B-13, TC-B-21, TC-B-22, TC-B-25, TC-B-95 | Có mô phỏng và test cấp quyền; cổng thật/pending/failed chưa triển khai đầy đủ |
| REQ-B-14 | Sự kiện thanh toán trùng không cấp quyền hai lần; sai tiền bị từ chối. Retry checkout cùng thao tác cũng phải chống lặp. | OB-15 | B_01 §3; P03 | SubscriptionService; PaymentEvent | TC-B-23, TC-B-24, TC-B-100 | Event dedup có mã/test; checkout chưa có client idempotency key |
| REQ-B-15 | Gia hạn còn hiệu lực cộng 12 tháng từ hạn cũ; hết hạn tính từ kích hoạt mới; nhắc trước 7 ngày và 1 ngày. | OB-15 | B_01 §3; P03 | SubscriptionService; phần nhắc chưa có | TC-B-14, TC-B-16, TC-B-17 | Gia hạn có mã, thiếu ca riêng; nhắc hạn chưa có bằng chứng |
| REQ-B-16 | Hết hạn trả phí về Free; giữ nguyên số đã dùng trong UsagePeriod tháng hiện tại, không tặng lại 3 lượt. | OB-13, OB-14 | B_01 §3; P03 | EntitlementService; PlanCapabilities; ExportReservationService | TC-B-15, TC-B-42, TC-B-97 | Fallback có mã/test; dùng lại quota sau paid cần test riêng |
| REQ-B-17 | Mỗi giao dịch Applied Business sinh một hóa đơn; trùng sự kiện không sinh lại, owner được xem; thông tin thuế lấy cấu hình đã xác minh. | OB-15 | B_01 §3; P03 | Chưa có Invoice/entity/API | TC-B-71, TC-B-72, TC-B-73, TC-B-74 | Chưa triển khai; PP; không chốt VAT 10% thành quy định thuế |
| REQ-B-18 | Business có tối đa 5 tài khoản gồm owner; cấp/thu hồi phải kiểm quyền, khi hết hạn mất quyền dùng chung. | OB-15 | B_01 §3; P03 | PlanCatalog chỉ có Seats=5; chưa có Seat/entity/API | TC-B-61, TC-B-62, TC-B-63, TC-B-64 | Có dữ liệu số chỗ; chức năng quản lý chưa triển khai, PP |
| REQ-B-19 | Trang thuê bao có gói, lượt, hạn, mua/gia hạn, hóa đơn và chỗ theo quyền; dữ liệu khớp API. | OB-15 | B_01 §3; P03 | frontend features/account/AccountPage.tsx; useCapabilities.ts | TC-B-81 | Có auth + bảng quyền; còn thiếu hạn thuê bao/mua/gia hạn/hóa đơn/chỗ |
| REQ-B-20 | Rate limit auth theo cấu hình; đổi danh tính phải lấy antiforgery mới; request ghi thiếu CSRF bị chặn. | OB-13 (hỗ trợ); NF-B-05 | B_01 §3; P03 | Program; AntiforgeryEndpointFilter; IdentityModule | TC-B-55, TC-B-52 | Có mã/test; 3/5 phút là cấu hình test, mặc định code 10/1 phút |
| REQ-B-21 | Audit nghiệp vụ và telemetry không chứa nội dung/email/password/key; giữ dữ liệu theo chính sách và phân quyền. | OB-09; NF-B-06 | B_01 §3; P03 | AuditService; AdminModule; Logging; DataRetentionService | TC-B-91, TC-B-39 | Có test một số sự kiện; chưa chứng minh audit toàn bộ vòng đời hoặc vận hành retention |
| NF-B-01 | Kiểm quyền p95 ≤ 1 giây | NF-09 của Charter | B_01 §3.5; P03/P06 | EntitlementService; ExportsModule | TC-B-93 | Chưa đo tải/độ trễ kỳ này |
| NF-B-02 | 0 byte nội dung project/ảnh/video gửi đến B | OB-09 | B_01 §3.5; P03/P06 | ExportsModule DTO; frontend reservation | TC-B-94 | Đã đọc schema; chưa có HAR thật kỳ này |
| NF-B-03 | Không vượt quota khi request đồng thời; trạng thái và bộ đếm nhất quán | OB-14 | B_01 §3.5; P03/P06 | UsagePeriod; ExportReservationService | TC-B-36, TC-B-99 | Có test reserve; chưa chứng minh mọi race complete/cancel/sweep |
| NF-B-04 | Độ phủ module B ≥ 70%; bất biến quota/idempotency có test | OB-12; ngưỡng áp dụng nội bộ cho B | B_01 §3.5; P03/P06 | PromptVideo.Api.Tests | TC-B-92 | Chưa có báo cáo coverage xác minh |
| NF-B-05 | Mật khẩu băm; cookie/bearer; CSRF; lockout; rate limit đúng cấu hình | OB-13 (hỗ trợ); quy tắc bảo mật B | B_01 §3.5; P03/P06 | IdentityModule; Infrastructure/Security | TC-B-51, TC-B-52, TC-B-53, TC-B-54, TC-B-55, TC-B-56 | Có mã và ca thử; EV-002: bị chặn Docker ngày 24/09 |
| NF-B-06 | Health/metrics/audit không lộ nội dung; chính sách retention được cấu hình và kiểm | OB-09; yêu cầu vận hành B/C | B_01 §3.5; P03/P06 | FoundationModule; AdminModule; DataRetentionService | TC-B-91, TC-B-39 | Có mã/test; sweep mặc định tắt, chu kỳ 6 giờ |
| NF-B-07 | Testcontainers tách DB; fake gateway không đăng ký và không map trong Production, kể cả Admin | QT-B-6; nguyên tắc môi trường | B_01 §3.5; P03/P06 | SubscriptionsModule; PostgresContainerFixture | TC-B-95 | Có test chặn Production; ngoài Dev/Testing còn cần test quyền Admin |

#### 5. Danh mục kiểm thử có thể giao lại

Mỗi dòng có đầu vào, bước và expected result. Đường dẫn tự động đều ở `src/backend/PromptVideo.Api.Tests/` trừ ghi rõ frontend. “Có test” nghĩa là có phương thức source; lần chạy 24/09 có 18 unit case đạt và 42 integration case Blocked môi trường; xem EV-002/B_04. Với ca chưa viết/chưa có API, kết quả là **Chưa thử/Blocked**, không tính vào số đạt. Frontend 79/79 (EV-001) là kết quả bộ hiện hành; không chứng minh TC-B-41 theo hợp đồng đã đổi.

| TC | Yêu cầu | Cấp | Bước / dữ liệu | Kết quả mong đợi | Phương thức hiện có / phần cần viết |
| --- | --- | --- | --- | --- | --- |
| TC-B-09 | REQ-B-01 | Integration | Tạo tài khoản mới, đăng nhập và đọc capabilities | Free; quota 3; 720p; watermark | SubscriptionTests.ANewAccountFallsBackToTheFreePlan |
| TC-B-10 | REQ-B-05 | Unit/Integration | Đọc cả 3 gói; thử capability thiếu | Đúng bảng; thiếu capability báo lỗi | PlanPolicyTests.EachPlanExposesItsDocumentedCapabilities; EveryPlanDefinesEveryCapability; SubscriptionTests.PlanCatalogIsReadableAnonymouslyAndExposesCapabilitiesAsData |
| TC-B-13 | REQ-B-13 | Integration/E2E | Dev/Testing mua Personal giả lập, đo từ Applied đến quyền có hiệu lực; cổng thật thử riêng sau tích hợp | Đúng 12 tháng và ≤ 5 phút; nhãn giả lập | SubscriptionTests.PayingForPersonalUpgradesCapabilitiesImmediately (chưa đo E2E ≤ 5 phút) |
| TC-B-14 | REQ-B-15 | Integration | Gói còn hạn T, áp dụng giao dịch mới khác event | Hạn mới = T + 12 tháng, không mất thời gian cũ | Cần viết test gia hạn còn hiệu lực |
| TC-B-15 | REQ-B-06, REQ-B-16 | Integration | Clock vượt hạn paid rồi đọc capabilities | Free, không 403 chỉ vì hết paid; đọc quota kỳ hiện tại | SubscriptionTests.AnExpiredSubscriptionLosesItsCapabilitiesOnTheNextCheck |
| TC-B-16 | REQ-B-15 | Integration | Gói đã hết hạn, áp dụng giao dịch mới | Kỳ mới từ now + 12 tháng | Cần viết |
| TC-B-17 | REQ-B-15 | Integration | Clock tại hạn − 7 ngày và hạn − 1 ngày, chạy tác vụ hai lần | Mỗi mốc nhắc một lần, không trùng; chưa có tác vụ hiện hành | Cần triển khai và viết |
| TC-B-21 | REQ-B-13 | Integration | Checkout Personal/Business trong Testing; thử mua Free | Số tiền đúng giá; Free bị từ chối | SubscriptionTests.BuyingTheFreePlanIsRefused; PayingForPersonalUpgradesCapabilitiesImmediately |
| TC-B-22 | REQ-B-13 | Integration | Apply một PaymentNotification mới hợp lệ | Applied; một subscription hiệu lực | SubscriptionTests.ReplayingAPaymentEventDoesNotGrantEntitlementTwice (lần 1) |
| TC-B-23 | REQ-B-14 | Integration | Gửi cùng Provider+ExternalEventId hai lần | Lần 2 Duplicate, không cộng kỳ; hóa đơn thử ở TC-B-73 | SubscriptionTests.ReplayingAPaymentEventDoesNotGrantEntitlementTwice |
| TC-B-24 | REQ-B-14 | Integration | Apply event đúng plan sai AmountVnd | AmountMismatch; không cấp quyền | SubscriptionTests.APaymentWithTheWrongAmountIsRejected |
| TC-B-25 | REQ-B-13 | Integration | Cổng thật/adapter trả failed hoặc cancelled | Không Applied, không quyền; cho thử lại có kiểm soát | Chưa có luồng đầy đủ, cần viết |
| TC-B-31 | REQ-B-07 | Integration/E2E | Free reserve 1080 và trả phí reserve 1080; kiểm file thật ở A | Free 720p + watermark; paid 1080p không watermark | ExportReservationTests.FreePlanGrants720pWithWatermarkAndClampsAnOverAmbitiousRequest; E2E file cần chạy |
| TC-B-32 | REQ-B-06 | Integration | Cache snapshot quá 60 giây rồi reserve với phiên hợp lệ; paid đã hết hạn | Server tự giải policy mới; không nhận snapshot như chứng thư; Free còn lượt được reserve | PlanPolicyTests.SnapshotCarriesAShortLifetimeAndTheCurrentPeriod; cần ca reserve dùng snapshot cũ |
| TC-B-33 | REQ-B-10 | Integration | Free mới reserve một lần | Consumed=1, remaining=2 ngay lúc Reserved | ExportReservationTests.FreePlanGrants720pWithWatermarkAndClampsAnOverAmbitiousRequest |
| TC-B-34 | REQ-B-09 | Integration/E2E | Reserve 3 key khác; gửi key thứ 4 | HTTP 403, Consumed=3; UI giải thích hạn mức | ExportReservationTests.FourthExportInAMonthIsRefusedOnTheFreePlan; E2E cần chạy |
| TC-B-35 | REQ-B-10 | Integration | Retry reserve cùng UserId+key | Cùng reservationId; Consumed vẫn 1; không cấp slot mới | ExportReservationTests.RetryingWithTheSameIdempotencyKeyDoesNotConsumeASecondSlot |
| TC-B-36 | REQ-B-11, NF-B-03 | Integration | 8 reserve đồng thời, 8 key, Free quota 3 | 3 Reserved; 5 QuotaExceeded; Consumed=3 | ExportReservationTests.ConcurrentReservesCannotExceedTheQuota |
| TC-B-37 | REQ-B-10, REQ-B-12 | Integration | Reserve; complete hai lần; cancel sau complete | Complete không tăng thêm; cancel 409; Consumed=1 | ExportReservationTests.CompletedReservationsAreNotRefundableAndCompletingIsIdempotent |
| TC-B-38 | REQ-B-12 | Integration | Reserve rồi cancel do xuất lỗi | Canceled; hoàn về kỳ gốc một lượt | ExportReservationTests.CancelingAReservationReturnsTheSlot |
| TC-B-39 | REQ-B-12, NF-B-06 | Integration | Clock + 31 phút; complete cũ; reserve mới hoặc gọi SweepAsync; sau 90/180 ngày thử dọn | Complete quá TTL trả 409; release một lần khi quét/reserve; không cam kết quét tại phút 30 | ExportReservationTests.AnExpiredReservationReleasesItsSlotOnTheNextReserve; TemplateAndAdminTests.RetentionSweepReleasesAbandonedReservationsAndPrunesOldRows; thiếu ca complete trả 409 riêng |
| TC-B-40 | REQ-B-08 | Unit/Integration | 31/01→01/02 reserve; qua năm/năm nhuận/offset địa phương | Kỳ mới độc lập; sau reserve đầu tháng còn 2 | ExportReservationTests.QuotaResetsWhenTheClockCrossesIntoANewMonth; PlanPolicyTests.PeriodBoundariesFollowTheUtcCalendarMonth; LocalOffsetsAreNormalisedToUtcBeforeBucketing |
| TC-B-41 | REQ-B-12 | E2E A–B | Ngắt mạng lúc reserve, lúc complete; xuất kéo dài > 30 phút | Reserve lỗi không dựng; chưa complete xác nhận không giao file; ghi ISS-G-001 cho hiện trạng | Cần chạy tích hợp thật; hiện frontend xử lý settle best-effort |
| TC-B-42 | REQ-B-16 | Integration | Paid hết hạn giữa một reservation còn trong TTL; complete trước/sau TTL; reserve mới | Complete trong TTL theo reservation đã cấp; quá TTL trả 409; lần reserve mới dùng Free | Cần viết test riêng; source CompleteAsync không tái giải plan |
| TC-B-51 | REQ-B-02, NF-B-05 | Integration | Đăng nhập đúng, đọc quyền; đăng xuất rồi đọc lại | Cookie HttpOnly + SameSite; đăng xuất mất phiên | IdentityApiTests.CookieLoginIsHttpOnlyAndSameSiteLax; LogoutClearsTheSession |
| TC-B-52 | REQ-B-02, REQ-B-20, NF-B-05 | Integration | Anonymous reserve; đăng nhập rồi ghi thiếu CSRF; đổi danh tính dùng token cũ | 401 chưa auth; thiếu CSRF trả 400; token mới dùng được | ExportReservationTests.ReservingRequiresAuthenticationAndAnAntiforgeryToken; FoundationApiTests.UnsafeRequestRequiresAntiforgeryToken |
| TC-B-53 | REQ-B-04, NF-B-05 | Integration | User thường rồi Admin gọi /api/admin/metrics | User 403; Admin 200 | IdentityApiTests.AdminEndpointIsForbiddenForOrdinaryUsersAndAllowedForAdmins |
| TC-B-54 | REQ-B-03, NF-B-05 | Integration | 5 lần sai; lần 6 đúng; dùng cấu hình test không bị rate limit che lockout | LockedOut khi chưa hết 15 phút | IdentityApiTests.WrongPasswordIsRejectedAndRepeatedFailuresLockTheAccount |
| TC-B-55 | REQ-B-20, NF-B-05 | Integration | Cấu hình AuthPermitLimit 3/5 phút; gọi vượt; đọc templates | Auth 429; templates không bị chặn; không suy ra default=3/5 | AuthRateLimitTests.RepeatedLoginAttemptsAreThrottled; ThrottlingDoesNotAffectOrdinaryEditorTraffic |
| TC-B-56 | REQ-B-03, NF-B-05 | Integration | Đổi mật khẩu trong phiên; thử mật khẩu cũ/mới | Cũ bị từ chối; mới đăng nhập được | IdentityApiTests.PasswordCanBeChangedAndTheOldOneStopsWorking |
| TC-B-57 | REQ-B-01 | Integration | Đăng ký cùng email đã tồn tại | Bị từ chối, không tạo tài khoản thứ hai | Cần viết ca riêng |
| TC-B-61 | REQ-B-18 | Integration | Business owner + 4 thành viên hợp lệ | 5 tài khoản dùng quyền Business; đúng ánh xạ owner | Chưa triển khai |
| TC-B-62 | REQ-B-18 | Integration | Từ 5 tài khoản thêm thành viên thứ 6; hai add đồng thời | SEAT_LIMIT_EXCEEDED; không vượt 5 | Chưa triển khai |
| TC-B-63 | REQ-B-18 | Integration | Thu hồi 1 seat; member kiểm quyền lại | Về quyền paid cá nhân nếu còn; không thì Free; không mặc định 403 | Chưa triển khai |
| TC-B-64 | REQ-B-18 | Integration | Cho Business hết hạn rồi các member kiểm quyền | Không giữ quyền Business; áp quyền cá nhân/Free | Chưa triển khai |
| TC-B-71 | REQ-B-17 | Integration | Giao dịch Free/Personal | Không sinh hóa đơn Business | Chưa triển khai |
| TC-B-72 | REQ-B-17 | Integration | Applied Business; truy cập owner/khác owner; cấu hình thuế đã xác minh | Đúng 1 hóa đơn; tiền khớp; khác owner bị chặn; không dùng VAT 10% mặc định | Chưa triển khai |
| TC-B-73 | REQ-B-17, REQ-B-14 | Integration | Replay cùng event Applied Business | Vẫn 1 hóa đơn | Chưa triển khai |
| TC-B-74 | REQ-B-17 | Integration | Gia hạn Business bằng giao dịch mới | Hóa đơn mới cho giao dịch mới, không sửa kỳ cũ | Chưa triển khai |
| TC-B-81 | REQ-B-19 | E2E | Đăng nhập; so UI gói/lượt/hạn/hóa đơn/chỗ với API; sau mua/gia hạn refresh | Hiển thị đủ theo quyền; không stale; thiếu API phải ghi rõ | Auth+capabilities có mã; chưa đủ trang thuê bao |
| TC-B-91 | REQ-B-21, NF-B-06 | Integration | Đăng nhập, reserve, apply payment; đọc metrics/audit/log và health | Không nội dung/email/password/key; health không lộ chi tiết; ghi đúng hành động đã hỗ trợ | LoggingRedactionTests.AuthenticationRoundTripDoesNotLogSecrets; TemplateAndAdminTests.AdminMetricsAreAggregatesWithNoUserContent; AuditTrailRecordsActionsWithoutContent; FoundationApiTests.FoundationHealthReportsReadinessWithoutLeakingCheckDetail |
| TC-B-92 | NF-B-04 | Coverage | Chạy backend với XPlat Code Coverage; lọc namespace B | ≥ 70% dòng module B; ghi denominator, commit, môi trường | Cần đo/chuẩn hóa phạm vi coverage |
| TC-B-93 | NF-B-01 | Performance | Warm-up rồi 100 lần kiểm quyền, concurrency 5 trên cùng môi trường đã ghi | p95 ≤ 1.000 ms; ghi cả lỗi; protocol nội bộ, cần so cấu hình nghiệm thu | Chưa đo |
| TC-B-94 | NF-B-02 | E2E mạng | Xuất 5 cảnh 60 giây A–B thật; lưu HAR đã che token; rà mọi payload | 0 byte nội dung/ảnh/project/video đến B; chỉ dữ liệu điều khiển | Chưa có bằng chứng kỳ này |
| TC-B-95 | REQ-B-13, NF-B-07 | Integration | Production cả Admin/User; Testing; Staging User/Admin; kiểm đăng ký DI | Production 404, không IPaymentGateway; Dev/Testing có auth; Staging chỉ Admin | SubscriptionTests.FakeGatewayEndpointIsNotMappedInProduction; FakeGatewayIsNotEvenRegisteredInProduction; cần ca Staging riêng |
| TC-B-96 | Giao tiếp IF-CB-01 | Integration | Admin cộng lượt bù kèm reason và key; User thử; retry; race với reserve | Đúng quyền; atomic; retry không cộng hai lần; audit actor, reason, kỳ và mức đổi | Hợp đồng đã chốt; API chưa triển khai |
| TC-B-97 | REQ-B-16 | Integration | Trong một tháng đã dùng Free 2 lượt, paid dùng thêm 2 rồi paid hết hạn | Consumed=4 còn nguyên; FreeRemaining=0; không reset vì hết paid | Cần viết |
| TC-B-98 | REQ-B-08 | Integration | Reserve cuối tháng, cancel đầu tháng; tháng mới có lượt khác | Chỉ hoàn UsagePeriodId gốc; kỳ mới không giảm sai | Cần viết |
| TC-B-99 | REQ-B-12, NF-B-03 | Integration | Cancel lặp/đồng thời; cancel đua với complete; sweep đua với cancel | Không âm; chỉ hoàn một lần; trạng thái cuối nhất quán | Ca tuần tự có một phần; cần test concurrency đầy đủ |
| TC-B-100 | REQ-B-14 | Integration | Retry cùng checkout operation key sau timeout ở thời điểm khác | Chỉ một giao dịch nghiệp vụ; kỳ gia hạn không nhân đôi | Chưa có operation key trên FakeCheckoutRequest |

#### 6. Giao tiếp và trách nhiệm kiểm

##### 6.1. A→B

| API hiện có | Đầu vào | Kết quả / ngoại lệ |
| --- | --- | --- |
| GET `/api/me/capabilities` | Phiên hợp lệ | Quyền/TTL 60 giây/kỳ và lượt; không có ngày hết subscription trong snapshot hiện hành |
| POST `/api/exports/reservations` | `idempotencyKey` dài 1–128, `requestedHeight` 720/1080, auth + CSRF | 200 gồm ID/status/grantedHeight/watermark/expiry/lượt; 401 chưa auth; 400 đầu vào/CSRF; 403 hết quota |
| POST `.../{reservationId}/complete` | ID thuộc User; auth + CSRF | 200 Completed hoặc đã Completed; 404 không có/không thuộc User; 409 canceled/expired |
| POST `.../{reservationId}/cancel` | ID thuộc User; auth + CSRF | 200 Canceled hoặc đã Canceled; 404 không có; 409 completed |

A dùng độ phân giải/watermark server cấp; không gửi nội dung. B trả `status`, nhưng kiểu client reservation hiện chưa giữ trường này: bổ sung vào checklist sửa ISS-G-001 để retry reservation đã kết thúc không bị hiểu là lượt mới.

##### 6.2. C→B — IF-CB-01

Quyết định nội bộ: C cung cấp lý do hỗ trợ, người dùng cần cộng và kỳ áp dụng; B sở hữu phép cập nhật hạn mức. Thao tác phải có Admin, reason không rỗng, operation key duy nhất, delta dương có giới hạn do policy quy định, transaction cập nhật và audit cùng nhau. Retry cùng key trả kết quả cũ; cùng key payload khác bị conflict; User thường bị 403; ghi actor, target, period, delta, reason và key tham chiếu an toàn. Không giảm bộ đếm âm để giả cộng lượt. Đây là **hợp đồng đích, chưa có endpoint hiện hành**; đường dẫn/schema cụ thể do P03 quản lý, không tự nhận route đã tồn tại.

C quản lý vòng đời mẫu `Draft/Active/Retired`; B không đổi các trạng thái này. B chỉ cung cấp quyền tài khoản cần cho các route C.

##### 6.3. Ai kiểm và ai chấp nhận

Việt Quang tự kiểm B; Quang Anh kiểm chéo B; Chiến xác nhận nội bộ sau sửa. Việt Quang kiểm A theo danh mục TC của A/P03, không định nghĩa lại mã TC-A hoặc tự cấp TC-I chung. Nhà tài trợ ký nghiệm thu sản phẩm theo Charter; giảng viên đánh giá hồ sơ học thuật. Quyết định nội bộ của người dùng không phải chữ ký nghiệm thu từ các bên bên ngoài.

#### 7. Những sửa đã thực hiện và phần phải thực thi tiếp

Đã chuẩn hóa 21 REQ, 7 NF, 8 QT và 50 TC; sửa RQ nội bộ trùng Charter, hành vi quota/hết hạn/TTL, trạng thái thanh toán, quyền giả lập và bằng chứng. Đã quyết định cách tính 5 chỗ, cách xử lý giao file và nguyên tắc hỗ trợ C→B. Giữ mọi yêu cầu v2.1 chưa làm.

Các bước phần mềm tiếp theo: xử lý ISS-G-001 và ISS-G-003; bổ sung test paid-expiry/cross-month/race; đo coverage/p95/HAR; hoàn thiện UI/nhắc/cổng thật; phân rã invoice và seats trước triển khai. Chi tiết ước lượng, rủi ro và lịch ở [B_02](<_module-input/B_Tai_khoan_thue_bao/B_02_WBS_uoc_luong_rui_ro_v1.0.md>). Không tự đánh dấu những bước này là đã xong khi mới sửa tài liệu.


## Phụ lục C — Đặc tả module C

Nguồn: [C_01_Yeu_cau_va_kiem_thu_v1.0](<_module-input/C_Quan_tri_van_hanh/C_01_Yeu_cau_va_kiem_thu_v1.0.md>).

### C_01 — Yêu cầu và kiểm thử: Quản trị và vận hành

| Thuộc tính | Giá trị |
| --- | --- |
| Nhóm tiến trình / phiên bản | Planning / v1.0 |
| Ngày cập nhật | 2026-09-24 |
| Trạng thái | Draft; quy ước nội bộ đã chốt theo ủy quyền, chưa có xác nhận kiểm tra hay phê duyệt baseline |
| Chủ nội dung | Phạm Quang Anh |
| Kiểm tra / xác nhận nội bộ | Nguyễn Thế Chiến / Nguyễn Việt Quang |
| Thay thế | Phần nghiệp vụ C trong `archive/plan-note-2026-09-23/05_Ke_hoach_nghiep_vu_C_v1.0.md` |

#### 1. Phạm vi và căn cứ

C cung cấp danh mục mẫu, tài sản đồ họa dùng chung, quyền quản trị, hỗ trợ người dùng, giám sát và dữ liệu phục vụ đo lợi ích. C không nhận ảnh, văn bản, dự án hay video của người dùng. Bộ dữ liệu demo thống nhất là **5 cảnh / 60 giây**, chữ tiếng Việt và ảnh cục bộ; âm thanh, video nền và xử lý video phía máy chủ nằm ngoài phạm vi đang áp dụng.

| Nguồn | Cách sử dụng |
| --- | --- |
| [Project Charter v2.1](<../../official-docs/01_Initiating/01_Project_Charter_v2.1.docx>), §3–5 | Ranh giới A/B/C; OB-04, OB-09, OB-16; NF-03, NF-10; yêu cầu quản trị/vận hành ở §5 |
| [Benefit Management Plan v2.2](<../../official-docs/00_Pre-project/02_Benefit_Management_Plan_v2.2.docx>), §2, §7 | Lợi ích LI-01…LI-05 và trách nhiệm đo sau bàn giao; bản hiện hành không có mã MT-06…MT-09 |
| [C_02](<_module-input/C_Quan_tri_van_hanh/C_02_WBS_uoc_luong_rui_ro_v1.0.md>) | WBS, công sức và rủi ro của C |
| [P06](<06_Quality_Plan_and_Test_Cases_v1.0.md>), [P07](<07_Resource_and_Communication_Plan_v1.0.md>) | Chất lượng và tổ chức chung; không gộp vào trách nhiệm lập trình C |
| `src/backend/PromptVideo.Api/Modules/{Admin,Templates,Foundation}` | Hiện trạng API đọc ngày 24/09/2026; đường dẫn mã trong tài liệu tính từ gốc kho |
| `src/frontend/src/core/templates/{templates,catalog}.ts` | Frontend giữ phần trình bày; danh mục máy chủ quyết định mẫu được chọn cho dự án mới |

**Phân biệt trạng thái:** “Có mã/test nguồn” chỉ là kiểm tra tĩnh. “Đã kiểm thử đạt” phải có lần chạy, build, môi trường và bằng chứng. Đợt này chưa chạy lại test C, không phát hành kết luận Pass mới.

| Hạng mục | Phạm vi đầy đủ | Hiện trạng và mục tiêu demo |
| --- | --- | --- |
| Mẫu | Tạo/cập nhật metadata và phiên bản; xác thực manifest; phát hành/rút mẫu | Có danh sách admin/public, đổi trạng thái và 5 mẫu seed; chưa đủ CRUD hoặc xác thực trước phát hành |
| Tài sản dùng chung | Ảnh đồ họa do quản trị cung cấp, kiểm file và liên kết phiên bản | Chưa có module upload asset phía quản trị; ảnh người dùng trong A vẫn cục bộ |
| Hỗ trợ | Tra cứu người dùng/lịch sử xuất; ghi ticket; điều chỉnh hạn mức có kiểm soát | Đặc tả đã chốt, chưa thấy endpoint và UI hoàn chỉnh; ghi ticket demo bằng sổ hỗ trợ có kiểm soát được chấp nhận tạm thời |
| Giám sát | Metrics theo kỳ, health, báo cáo dữ liệu lợi ích | Có metrics tổng hợp hiện tại và readiness; chưa có job DailyMetrics hay báo cáo đủ lợi ích |
| Giao diện | Màn hình admin cho mẫu, hỗ trợ, giám sát | Chỉ được ghi hoàn thành từng thao tác có bằng chứng; không suy ra toàn bộ UI từ API |

#### 2. Thuật ngữ, tác nhân và quy tắc

**Template** gồm hai phần: metadata của máy chủ (`templateKey`, `name`, `version`, `status`, `manifestJson`) và trình bày đóng gói trong A (màu, hình học slot, typography). Manifest là dữ liệu tham số trình bày; không phải nội dung dự án hay đường dẫn tới ảnh/video của người dùng. **Global asset** là ảnh dùng chung do quản trị đưa vào, khác kho ảnh cục bộ của A. **Ticket** là hồ sơ yêu cầu hỗ trợ, chỉ chứa thông tin tối thiểu phục vụ xử lý, không chứa nội dung video.

| Tác nhân | Quyền và trách nhiệm |
| --- | --- |
| Admin | Quản lý mẫu, xem metrics, xử lý ticket và yêu cầu điều chỉnh hạn mức; theo dõi health và dữ liệu lợi ích sau bàn giao khi có xác nhận tiếp nhận; quyền được kiểm ở máy chủ |
| Người dùng | Đọc danh mục Active; gửi mã lỗi/mã reservation cần hỗ trợ; không có quyền quản trị |
| A | Tiêu thụ metadata, áp trình bày từ bundle và giữ nội dung cục bộ |
| B | Sở hữu định danh, thuê bao, UsagePeriod, reservation và giao dịch quota |

- **QT-C-1:** mọi API `/api/admin/*` kiểm chính sách Admin; chưa đăng nhập trả 401, đã đăng nhập không đủ quyền trả 403. Cookie và cơ chế chống CSRF hiện có phải được dùng đúng; không ghi mặc định hệ thống chỉ xác thực bằng JWT.
- **QT-C-2:** tài sản ảnh dùng chung của quản trị tách khỏi ảnh người dùng; người dùng không có quyền thay đổi global asset. Tài sản còn được tham chiếu phải được giữ hoặc chuyển phiên bản an toàn.
- **QT-C-3:** mẫu đang được dùng không bị thay đổi ngược do phát hành phiên bản mới. Đích DEC-012 là snapshot/phiên bản trong dự án đã lưu; mã hiện tại chỉ lưu templateId, còn khoảng trống ISS-G-002. Dự án Retired vẫn mở/xem trước/xuất khi quyền B hợp lệ.
- **QT-C-4:** metrics/log/audit không chứa nội dung dự án, media, token hoặc bí mật kết nối. Dữ liệu tài khoản chỉ xem trong màn hình hỗ trợ có phân quyền, không đưa vào dashboard tổng hợp.
- **QT-C-5:** điều chỉnh hạn mức phải có Admin, kỳ UTC, số lượt, lý do, ticket và idempotency key; quota và audit commit cùng giao dịch. C không sửa trực tiếp `ExportsConsumed` để bỏ qua B.
- **QT-C-6:** chỉ `Draft`, `Active`, `Retired` là trạng thái mẫu chuẩn; `Inactive` trong nháp cũ chuyển sang `Retired`. Khi online, chỉ Active có key trong bundle A mới được chọn cho dự án mới.
- **QT-C-7:** chỉ số giả lập, số đếm reservation và doanh thu thực thu là ba loại khác nhau; không thay thế cho nhau trong đo LI-04/LI-05.
- **QT-C-8:** kiểm cấu trúc, key/phiên bản hỗ trợ và trường cấm của manifest **trước khi phát hành**. Catalog manifest khác frontend exportManifest/schema, cần adapter và kiểm phiên bản; endpoint đổi trạng thái hiện tại chưa chứng minh kiểm này. QT-C-1…4 giữ ý nghĩa của QC-1…4 bản cũ; các quy tắc thêm dùng số mới.

#### 3. Yêu cầu và tiêu chí chấp nhận

| ID | Nội dung, luồng chính và ngoại lệ | Tiêu chí chấp nhận | WBS / mức sẵn sàng |
| --- | --- | --- | --- |
| REQ-C-01 | Admin quản lý phiên bản mẫu, phát hành/rút; lỗi key, manifest hoặc phiên bản phải từ chối | Public chỉ Active; admin thấy mọi trạng thái; mẫu không hợp lệ không thể publish; dự án cũ dùng Retired còn mở được | 4.4.1; có danh sách/đổi trạng thái, thiếu CRUD và validation trước publish |
| REQ-C-02 | Quản lý ảnh đồ họa dùng chung; kiểm loại/kích thước, quyền đọc, tham chiếu và xóa an toàn | Nhận PNG/JPEG/WebP tối đa 50 MiB/file; từ chối file giả định dạng/vượt ngưỡng; tài sản còn được tham chiếu không bị xóa cứng; không nhận audio/video | 4.4.1; chưa triển khai đầy đủ, 50 MiB là giới hạn nội bộ đã chọn, không phải ngưỡng Charter |
| REQ-C-03 | Kiểm Admin trên mọi thao tác quản trị, giữ CSRF cho thao tác thay đổi | Anonymous 401, User 403, Admin hợp lệ mới xử lý; thiếu token CSRF bị từ chối theo hợp đồng hiện hành | 4.4.1; có code/policy và test nguồn, chưa chạy lại |
| REQ-C-04 | Admin tra cứu tài khoản bằng email chính xác/ID và lịch sử reservation phân trang | Chỉ trả dữ liệu tài khoản cần hỗ trợ và reservation đúng người; không có nội dung video, không trộn người dùng khác | 4.4.2; chưa có endpoint tra cứu được xác minh |
| REQ-C-05 | Từ ticket đã xác minh, Admin gửi điều chỉnh hạn mức qua IF-CB-01 | Retry cùng key không cộng hai lần; cùng key khác payload bị từ chối; lỗi audit/quota rollback toàn bộ; không sửa kỳ khác | 4.4.2; hợp đồng đích, chưa có endpoint thực hiện |
| REQ-C-06 | Xem dashboard số đếm theo định nghĩa và kỳ đo rõ | Bộ dữ liệu biết trước cho ra đúng counts; ghi GeneratedAtUtc và kỳ của mỗi chỉ số; dữ liệu tổng hợp không chứa nội dung/tài khoản | 4.4.3; có snapshot hiện tại, chưa có lọc 30 ngày đầy đủ |
| REQ-C-07 | Xuất bộ dữ liệu phục vụ đo LI-01…LI-05 và lưu hồ sơ theo kỳ | Mỗi số có nguồn, đơn vị, cửa sổ, người đo; thiếu dữ liệu ghi Chưa đo; không tuyên bố doanh thu thực từ giao dịch giả lập | 4.4.3; thiết kế đo, chưa có job tổng hợp tự động được xác minh |
| REQ-C-08 | Xem liveness/readiness để biết hệ thống đang nhận yêu cầu được không | Readiness khỏe trả 200 và trạng thái; lỗi phụ thuộc trả 503; chỉ tên check/trạng thái, không lộ exception/connection string | 4.4.3; có FoundationModule và test nguồn |
| REQ-C-09 | Ghi nhận và theo dõi yêu cầu hỗ trợ | Ticket có mã, thời điểm, người tiếp nhận, mô tả lỗi tối thiểu, trạng thái, chủ xử lý, hạn và kết quả; không bỏ mất yêu cầu khi chưa có API | 4.4.2; sổ demo do Quang Anh quản lý, workflow API chưa triển khai |

| ID | Tiêu chí phi chức năng | Môi trường/cách đo | Số đo hiện có |
| --- | --- | --- | --- |
| NF-C-01 | p95 dashboard ≤2 giây trên cửa sổ 30 ngày, 10.000 reservation, 100 requests tuần tự; ngưỡng nội bộ đã chốt | API local/staging, PostgreSQL, ghi CPU/RAM/build và thời gian cold/warm riêng; chỉ áp khi API theo kỳ đã có | Chưa đo; API snapshot hiện tại không đáp ứng đủ phép đo theo kỳ |
| NF-C-02 | 0 file audio/video hoặc file >50 MiB được nhận vào kho asset quản trị | Bộ fixture hợp lệ/sai MIME/sai magic bytes/50 MiB +1 byte; kiểm phía máy chủ | Chưa triển khai/Chưa đo |
| NF-C-03 | 100% thay đổi trạng thái mẫu và điều chỉnh quota được gắn audit với actor, đối tượng, thời điểm và lý do phù hợp; không lộ nội dung | Integration với DB; quota/audit có rollback cùng giao dịch | Audit đổi trạng thái có code; lý do nghiệp vụ và điều chỉnh quota chưa đủ |

#### 4. Trạng thái và hợp đồng giao tiếp

| Trạng thái mẫu | Cách vào/ra và hệ quả | Ca thử |
| --- | --- | --- |
| Draft | Bản chưa phát hành; chỉ admin xem; publish sau validation thành Active | TC-C-01, TC-C-05 |
| Active | Public có key; A chỉ hiện nếu key tồn tại trong bundle; có thể rút thành Retired | TC-C-02, TC-C-06 |
| Retired | Không dùng cho lựa chọn mới; giữ dữ liệu dự án cũ. Muốn phát hành lại phải qua kiểm tương thích như Active | TC-C-03, TC-C-05 |

**IF-CA-01 — danh mục C → A.** `GET /api/templates` trả metadata Active. Key chưa có trong A bị bỏ qua. Catalog manifest và frontend exportManifest/schema là hai cấu trúc khác nhau; adapter/version check và snapshot mẫu là đích DEC-012, chưa được coi đã triển khai. Khi không đọc được catalog, A hiện có fallback mẫu đóng gói; đích là chỉ dùng snapshot/danh mục đã biết có nhãn thời điểm. API và fallback là hiện trạng, không coi fallback là bảo đảm cập nhật trạng thái khi mất mạng. Luôn kiểm quyền B trước xuất. C chịu validation trước publication; A chịu presentation và xử lý key/phiên bản không hỗ trợ. TC-I-04 kiểm luồng này; gap snapshot là ISS-G-002.

**IF-CB-01 — hỗ trợ/điều chỉnh C → B.** P03 chốt đường dẫn thiết kế `POST /api/admin/support/quota-adjustments`, **chưa phải route đang tồn tại**. Dùng đúng tên trường của P03: userId, usagePeriodStartUtc, delta nguyên dương, ticketId, reason, idempotencyKey; actor Admin lấy từ phiên xác thực, kèm CSRF. B kiểm người/kỳ/lý do/số lượt, lưu kết quả idempotency cùng cập nhật quota và AuditEvent trong giao dịch nguyên tử. Response đích gồm adjustmentId, userId, usagePeriodStartUtc, balanceBefore, balanceAfter, auditEventId. Retry cùng payload trả kết quả ban đầu; key trùng payload khác trả 409; dữ liệu không hợp lệ 400, User thường 403, ticket/user không có 404. Không dùng thanh toán giả lập để bù lượt. B chịu logic/giao dịch, C chịu ticket/UI và dữ liệu yêu cầu. Bổ sung schema vào OpenAPI khi triển khai; giữ route ở trạng thái thiết kế cho tới lúc có mã và kiểm thử.

#### 5. RTM của C

| Req ID | Requirement Description | Business Objective | Design Doc | Code Module | Test Case | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-C-01 | Danh mục và vòng đời mẫu | OB-04, RQ-06; Charter §5 nghiệp vụ C | C_01 §3–4, P03 IF-CA-01 | Modules/Admin; Modules/Templates; frontend/core/templates | TC-C-01,02,03,05,06,09 | Có mã một phần; chưa kiểm đầy đủ CRUD/validation |
| REQ-C-02 | Ảnh đồ họa dùng chung | Charter §5 nghiệp vụ C; hỗ trợ OB-04 | C_01 §3 | Chưa có module asset quản trị được xác minh | TC-C-04,10 | Chưa làm đầy đủ |
| REQ-C-03 | Quyền quản trị | Charter §5 nghiệp vụ C; NF-11 hỗ trợ bảo vệ tài khoản | C_01 QT-C-1 | Infrastructure/Security; Modules/Admin | TC-C-07,08 | Có code/test nguồn; chưa chạy lại |
| REQ-C-04 | Tra cứu hỗ trợ | Charter §5 nghiệp vụ C; không gán một OB không tồn tại | C_01 IF-CB-01 | Chưa có route được xác minh | TC-C-11 | Chưa làm |
| REQ-C-05 | Điều chỉnh hạn mức | Hỗ trợ OB-14; Charter §5 nghiệp vụ C | C_01 IF-CB-01 | B: UsagePeriod, AuditService; service điều chỉnh chưa có | TC-C-12,13,14 | Chưa làm |
| REQ-C-06 | Giám sát tổng hợp | Hỗ trợ vận hành Charter §5 và LI-04; counts không bằng doanh thu | C_01 §3 | Modules/Admin/GetMetricsAsync | TC-C-21,23 | Có snapshot, thiếu lọc kỳ; chưa chạy lại |
| REQ-C-07 | Dữ liệu đo lợi ích | BMP v2.2 LI-01…LI-05 | C_01 §7 | Chưa có DailyMetricsJob; nguồn A/B và sổ vận hành | TC-C-22 | Chưa có đo đủ theo kỳ |
| REQ-C-08 | Health/readiness | OB-16, NF-10; probe đơn lẻ không chứng minh uptime | C_01 §3 | Modules/Foundation; health configuration | TC-C-24,25 | Có code/test nguồn; lỗi phụ thuộc cần thử |
| REQ-C-09 | Ghi và theo dõi hỗ trợ | Charter §5 nghiệp vụ C | C_01 §3, C_03 §4 | Sổ hỗ trợ demo; service/UI chưa có | TC-C-15,16 | Workflow đã mô tả; chưa có ticket thực được ghi nhận |
| NF-C-01 | Hiệu năng dashboard | Ngưỡng nội bộ cho vận hành C | C_01 §3 | Modules/Admin | TC-C-23 | Chưa đo |
| NF-C-02 | Giới hạn file asset | Ngưỡng nội bộ, hỗ trợ OB-09 | C_01 §3 | Chưa có upload admin được xác minh | TC-C-04,10 | Chưa làm |
| NF-C-03 | Audit và giao dịch | Hỗ trợ kiểm soát vận hành; NF-11 | C_01 QT-C-4,5 | Infrastructure/Audit; Modules/Admin | TC-C-09,12,13,14 | Có audit một phần; thiếu nghiệp vụ điều chỉnh |

OB-11 là **ngân sách/công sức**, OB-12 là **coverage** của bộ dựng, mã hóa và giấy phép. Không dùng OB-11 cho nội dung mẫu, OB-12 cho dashboard, OB-13 làm nhãn chung cho mọi bảo mật. P09 bổ sung WBS và bằng chứng ngoài bảy cột bắt buộc này. Mã TC viết rút gọn trong ô `TC-C-01,02` có nghĩa TC-C-01 và TC-C-02.

#### 6. Ca kiểm thử C — thiết kế đã chốt, chưa phải kết quả chạy

Tiền điều kiện chung: DB thử riêng, tài khoản Admin/User/Anonymous, không dùng dữ liệu thật; ghi build, thời gian, fixture, môi trường vào M05. Các mã TC-C-17…20 chưa cấp, không được tự suy ra là ca đã tồn tại.

| TC | REQ/NF | Cấp | Dữ liệu và bước | Kết quả mong đợi | Ánh xạ nguồn / trạng thái |
| --- | --- | --- | --- | --- | --- |
| TC-C-01 | REQ-C-01 | Integration | Seed một Draft, một Active; gọi public bằng Anonymous và danh sách admin bằng Admin | Public không có Draft; admin có cả hai | TemplateAndAdminTests có nền danh mục; cần thêm fixture Draft; Not Run |
| TC-C-02 | REQ-C-01 | Integration | Admin phát hành một mẫu hợp lệ đã có trong A; tải lại public | Chỉ một metadata đúng key/version, status Active | Cần bổ sung kịch bản publish; Not Run |
| TC-C-03 | REQ-C-01 | Integration/E2E | Tạo dự án dùng promo, đổi sang Retired; tải lại danh mục và mở dự án cũ | Không được chọn mới; dự án cũ giữ nội dung/xem trước; export vẫn cần B | OrdinaryCallersSeeOnlyActiveTemplates + catalog.test.ts; chưa đủ một lần end-to-end; Not Run |
| TC-C-04 | REQ-C-02, NF-C-02 | Integration | Upload ảnh PNG/JPEG/WebP hợp lệ; thử file audio/video giả đuôi ảnh và 50 MiB +1 byte | Chỉ nhận ảnh hợp lệ trong ngưỡng; lỗi không để file rác | Chưa có upload admin; Blocked |
| TC-C-05 | REQ-C-01 | Integration | Tạo manifest sai JSON, key/phiên bản không hỗ trợ, hoặc chứa assetUrl/nội dung; yêu cầu publish từng trường hợp | Từ chối trước đổi trạng thái; public không xuất hiện mẫu lỗi | TemplateManifestsCarryLayoutParametersOnly chỉ kiểm seed, không đủ test publish; Blocked phần validation |
| TC-C-06 | REQ-C-01 | Unit/E2E | API online trả key lạ; thử offline; đổi mẫu trên dự án có chữ/ảnh | Key lạ không render; offline dùng bundle theo thông báo; nội dung không mất | frontend/core/templates/catalog.test.ts và templates.test.ts; Not Run |
| TC-C-07 | REQ-C-03 | Integration | Gọi list/status/metrics với Anonymous, User rồi Admin hợp lệ | 401, 403, thành công tương ứng; User không sửa dữ liệu | OnlyAnAdminMayChangeTemplateStatus có phần User/Admin; cần đủ ma trận endpoint; Not Run |
| TC-C-08 | REQ-C-03 | Integration | Đăng nhập Admin bằng cookie, POST đổi status thiếu/sai/có CSRF mới sau login | Thiếu/sai bị từ chối; token đúng mới thành công | FoundationApiTests và AntiforgeryEndpointFilter; Not Run |
| TC-C-09 | REQ-C-01, NF-C-03 | Integration | Admin đổi trạng thái; đối chiếu DB/audit, actor, đối tượng, thời điểm; kiểm payload log | Có audit phù hợp, không nội dung/tokens; yêu cầu reason nghiệp vụ được kiểm theo đích | AuditService có nguồn; cần test đầy đủ reason/status audit; Not Run |
| TC-C-10 | REQ-C-02, NF-C-02 | Integration | User cố upload/xóa; Admin xóa asset còn tham chiếu, rồi asset không còn tham chiếu | User bị chặn; không làm hỏng mẫu đang tham chiếu; xóa an toàn có audit | Chưa có service admin asset; Blocked |
| TC-C-11 | REQ-C-04 | Integration | Hai user có reservation riêng; Admin tìm email chính xác của một người; thử email không tồn tại và phân trang | Chỉ lịch sử đúng người, không media; kết quả rỗng rõ khi không tìm thấy | Chưa có API; Blocked |
| TC-C-12 | REQ-C-05, NF-C-03 | Integration | User đã hết 3 lượt; Admin bù 1 lượt với ticket/reason/key; gọi lại cùng key hai lần | Chỉ thêm một lượt; audit một điều chỉnh; user reserve thêm đúng một lần | IF-CB-01 chưa có service; Blocked |
| TC-C-13 | REQ-C-05, NF-C-03 | Integration | Gửi cùng key với số lượt/user khác; gửi hai yêu cầu đồng thời; ép lỗi ghi audit | Payload khác bị conflict; không cộng lặp; lỗi audit rollback quota | IF-CB-01; Blocked |
| TC-C-14 | REQ-C-05, NF-C-03 | Integration | User thường, lý do rỗng, kỳ sai, delta≤0; lấy snapshot DB trước/sau | Không chỉnh quota; trả lỗi phân quyền/validation theo hợp đồng | IF-CB-01; Blocked |
| TC-C-15 | REQ-C-09 | Manual/E2E | Ghi yêu cầu support giả lập gồm mã lỗi, userId, reservationId; phân công rồi đóng | Ticket có đủ ID/thời điểm/chủ/hạn/kết quả; lịch sử chuyển Open → InProgress → Resolved → Closed | Sổ demo C_03; Not Run |
| TC-C-16 | REQ-C-09 | Manual/E2E | Ticket thiếu chủ xử lý, hoặc mô tả dán nội dung video/token; yêu cầu bổ sung an toàn | Không đưa nội dung/token vào sổ; chuyển NeedsInfo có chủ và hạn; không đóng giả | Sổ demo C_03; Not Run |
| TC-C-21 | REQ-C-06 | Integration | Seed 2 Completed, 1 Reserved, 1 Canceled; tài khoản/gói biết trước; gọi metrics | Counts đúng fixture, không email/nội dung/key idempotency; phân biệt tổng lịch sử và tháng hiện tại | AdminMetricsAreAggregatesWithNoUserContent có phần nguồn; Not Run |
| TC-C-22 | REQ-C-07 | Manual/Integration | Đối chiếu báo cáo lợi ích với 1 benchmark A, B giả lập và sổ chi phí chưa đủ | LI-01 có nguồn đo hoặc Chưa đo; LI-04 không gọi giả lập là doanh thu thực; LI-05 không tính khi thiếu mẫu số | Chưa có báo cáo tự động; Manual Not Run |
| TC-C-23 | REQ-C-06, NF-C-01 | Performance | Seed 10.000 reservation/30 ngày; chạy 100 requests sau warmup, lưu raw durations | p95≤2 giây; số lượng và kỳ đúng; không bỏ requests lỗi khỏi mẫu | API theo kỳ còn thiếu; Blocked phép đo đầy đủ |
| TC-C-24 | REQ-C-08 | Integration | PostgreSQL thử hoạt động; GET foundation/health và /health/live | 200, readiness Healthy, chỉ name/status từng check | FoundationHealthReportsReadinessWithoutLeakingCheckDetail; Not Run |
| TC-C-25 | REQ-C-08 | Integration | Cô lập/ngắt DB thử; gọi readiness; kiểm body/log và phục hồi DB | 503 khi Unhealthy, không lộ secret; phục hồi trả khỏe; không kết luận uptime 30 ngày từ ca này | Cần thêm failure fixture; Not Run |

Không định nghĩa lại TC-A/TC-B tại đây. Người chạy C: Chiến; người sửa: Quang Anh; người xác nhận nội bộ: Việt Quang. Mã test code có sẵn chỉ là ứng viên bằng chứng cho ca tài liệu; cần đối chiếu độ bao phủ từng bước.

#### 7. Ánh xạ dữ liệu lợi ích đúng bản hiện hành

| Lợi ích | Dữ liệu cần / công thức | Nguồn và người chuẩn bị | C còn phải làm |
| --- | --- | --- | --- |
| LI-01 giảm thời gian tạo video | Thời gian từ bắt đầu đến lưu MP4; chuẩn 5 cảnh/60 giây | A đo đầu-cuối; C tổng hợp; thời gian encode riêng không thay phép đo này | Giữ timestamp, môi trường và mẫu benchmark; chưa có baseline đã xác nhận thì ghi thiếu |
| LI-02 giảm chi phí sử dụng | Chi phí phần mềm một năm, so sánh cùng nhu cầu | BMP v2.2 và dữ liệu giá/chi phí thực; chủ đo theo BMP | Không tính tự động từ reservation; lưu bằng chứng chi phí |
| LI-03 giảm rủi ro lộ nội dung | 0 byte nội dung rời máy trong luồng tạo/xuất | A/B kiểm network, C kiểm metrics/audit | Lưu log đã làm sạch và ca kiểm luồng thực |
| LI-04 doanh thu định kỳ | Doanh thu thực thu và thuê bao trả phí còn hiệu lực; thêm chuyển đổi/gia hạn | B cung cấp ledger thật khi có; C cung cấp số thuê bao; BMP giao chủ kinh doanh | API hiện chỉ counts và active subscriptions, chưa chứng minh doanh thu hoặc renewal; không dùng payment giả lập |
| LI-05 chi phí phục vụ thấp | Tiền mặt vận hành/năm / số thuê bao trả phí trung bình | Sổ chi phí + snapshots theo kỳ đủ mẫu | Chưa có số trung bình và chi phí thực; không điền 0 thay dữ liệu thiếu |

Uptime hỗ trợ OB-16/NF-10 cần chuỗi đo đủ 30 ngày sau phát hành. Một endpoint health không tự chứng minh 99%. Quyền và vai trò kinh doanh trong BMP là bối cảnh dự án; ba thành viên chỉ chuẩn bị hồ sơ, không ký thay người tiếp nhận vận hành hay nhà tài trợ.

#### 8. Nội dung đã sửa theo feedback

CV-C-01: tách nghiệp vụ/chất lượng/nguồn lực; CV-C-02: chốt Draft/Active/Retired, IF-CA-01/IF-CB-01 và bổ sung health/ticket; CV-C-03: sửa OB/LI, TC-C đầy đủ và trạng thái có căn cứ. Lịch sử: 24/09/2026 chuẩn hóa từ bản C ngày 21/09; không sửa ngược nội dung lịch sử hoặc ghi nhận phê duyệt chưa diễn ra.
