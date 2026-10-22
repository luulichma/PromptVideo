> **Bản lịch sử — đã được thay thế ngày 24/09/2026.** Dùng [B_01 — Yêu cầu và kiểm thử](../../md-docs/02_Planning/_module-input/B_Tai_khoan_thue_bao/B_01_Yeu_cau_va_kiem_thu_v1.0.md) và [B_02 — WBS, ước lượng, rủi ro](../../md-docs/02_Planning/_module-input/B_Tai_khoan_thue_bao/B_02_WBS_uoc_luong_rui_ro_v1.0.md) để ghép hồ sơ hiện hành. Nội dung dưới giữ nguyên làm nguồn lịch sử: mã 7.x/RQ nội bộ, quy tắc quota, tổng 60 giờ, dự phòng 6 giờ, RACI và các tuyên bố phê duyệt/kiểm chứng cũ không còn được dùng làm quyết định hiện hành.

<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                       |                                     |
| --------------------- | ----------------------------------- |
| **Nhóm tiến trình**   | Planning                             |
| **Tên tài liệu**      | Kế hoạch nghiệp vụ B — Đăng ký, cấp phép và thanh toán |
| **Phiên bản**         | Ver. 1.0                             |
| **Nhóm thực hiện**    | Nhóm 02                              |
| **Ngày phát hành**    | 2026-09-21                            |
| **Trạng thái**        | Draft — chờ phê duyệt                 |

<div style="page-break-after: always"></div>

<!-- ======================= TRANG 2 — XÁC NHẬN & LỊCH SỬ ======================= -->

## Xác nhận

| Người tạo         | Người kiểm tra    | Người xác nhận    |
| ----------------- | ----------------- | ----------------- |
| Nguyễn Việt Quang | Phạm Quang Anh    | Nguyễn Thế Chiến  |
|                   |                   | Thầy Nguyễn Đình Quảng |

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| -- | --------- | ------------- | -------------- | ----------------- | --------------- | --------------- |
| 1  | Ver 1.0   | 2026-09-21    | Tạo mới        | Đặc tả phần B (tài khoản, gói năm, quyền xuất, hạn mức, thanh toán/gia hạn, hóa đơn, 5 chỗ; hết hạn, giao dịch trùng, xuất lỗi), bảng truy vết và nhánh phân rã công việc | Nguyễn Việt Quang | Nguyễn Thế Chiến |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

## Mục lục

1. [Mục đích và phạm vi tài liệu](#1-muc-dich-va-pham-vi-tai-lieu)
2. [Căn cứ lập và thuật ngữ](#2-can-cu-lap-va-thuat-ngu)
3. [Đặc tả yêu cầu nghiệp vụ B](#3-dac-ta-yeu-cau-nghiep-vu-b)
   - 3.1 [Mô tả tổng quan](#31-mo-ta-tong-quan)
   - 3.2 [Tác nhân](#32-tac-nhan)
   - 3.3 [Quy tắc từng gói](#33-quy-tac-tung-goi)
   - 3.4 [Yêu cầu chức năng REQ-B](#34-yeu-cau-chuc-nang-req-b)
   - 3.5 [Yêu cầu phi chức năng NF-B](#35-yeu-cau-phi-chuc-nang-nf-b)
   - 3.6 [Trạng thái, cách xử lý và kiểm thử](#36-trang-thai-cach-xu-ly-va-kiem-thu)
4. [Ma trận truy vết yêu cầu](#4-ma-tran-truy-vet-yeu-cau)
5. [Phân rã công việc nhánh B — WBS và WBS Dictionary](#5-phan-ra-cong-viec-nhanh-b--wbs-va-wbs-dictionary)
6. [Ước lượng, lịch và chi phí](#6-uoc-luong-lich-va-chi-phi)
7. [Kế hoạch chất lượng và kiểm thử](#7-ke-hoach-chat-luong-va-kiem-thu)
8. [Kế hoạch rủi ro](#8-ke-hoach-rui-ro)
9. [Nguồn lực, trách nhiệm và truyền thông](#9-nguon-luc-trach-nhiem-va-truyen-thong)
10. [Kiểm soát thay đổi](#10-kiem-soat-thay-doi)
11. [Phần chưa triển khai và quy tắc cập nhật](#11-phan-chua-trien-khai-va-quy-tac-cap-nhat)

<div style="page-break-after: always"></div>

<!-- ============================== NỘI DUNG ============================== -->

## 1. Mục đích và phạm vi tài liệu

Tài liệu này là **kế hoạch mức gói công việc của nghiệp vụ B — Đăng ký, cấp phép và thanh toán** trong dự án PromptVideo theo mô hình thuê bao thường niên, bám đúng yêu cầu phiên bản 2.1. Nghiệp vụ B do Việt Quang chủ trì; tài liệu thuộc nhóm tiến trình **Planning** và là một phần của bộ hồ sơ `02_Planning` phục vụ phân công **"Viết yêu cầu B: tài khoản, gói năm, quyền xuất, hạn mức, thanh toán/gia hạn, hóa đơn và 5 chỗ; nêu hết hạn, giao dịch trùng và xuất lỗi"**.

Tài liệu gồm bốn sản phẩm chính:

1. **Phần B của đặc tả** — mô tả chi tiết các yêu cầu nghiệp vụ, quy tắc từng gói, và **mỗi trạng thái đều có cách xử lý và kiểm thử cụ thể**.
2. **Ma trận truy vết** (Requirements Traceability Matrix) — nối từng yêu cầu với mục tiêu, tài liệu thiết kế, mô-đun mã nguồn, ca kiểm thử và trạng thái.
3. **Nhánh phân rã công việc** (WBS nhánh B kèm WBS Dictionary) — các gói công việc với tiêu chí nghiệm thu, giờ công, mốc và người chịu trách nhiệm.
4. **Kế hoạch lần theo PMBOK** — ước lượng (PERT ba điểm), lịch, chi phí, chất lượng/kiểm thử, rủi ro, nguồn lực–truyền thông và kiểm soát thay đổi cho nhánh B.

**Phạm vi.** Tài liệu chỉ bao phủ các yêu cầu nằm trong ranh giới nghiệp vụ B của các tài liệu định hướng v2.1. Nghiệp vụ A (sản xuất video) và nghiệp vụ C (quản trị, vận hành) được nêu ở mức giao tiếp với B, không đi sâu. Nội dung video không thuộc phạm vi xử lý của nhánh B — máy chủ B** không bao giờ nhận nội dung người dùng**.

**Trạng thái.** Tài liệu ở trạng thái **Draft**. Kiểm tra chéo theo phân công: **Quang Anh kiểm tra, Chiến xác nhận** trước khi trở thành căn cứ thực thi.

---

## 2. Căn cứ lập và thuật ngữ

### 2.1. Căn cứ lập

| Nguồn | Nội dung sử dụng |
| ----- | ---------------- |
| [README.vi.md](../../README.vi.md) | Ba nghiệp vụ, ba gói dự kiến, phân công trách nhiệm |
| Business Case v2.1 | Mô hình thuê bao thường niên, ba gói, điều kiện triển khai |
| Project Charter v2.1 | Mục tiêu OB-13, OB-14, OB-15; ràng buộc CT-01/CT-03/CT-04/CT-05/CT-08; phân bổ giờ theo mốc |
| Benefit Management Plan v2.1 | Chỉ số MT-06 → MT-09 (đo baseline trước mốc M1) |
| Assumption Log v2.1 | Giả định AS-43, AS-48; ràng buộc về cổng thanh toán |
| [plan-note/03-backend-core.md](../../plan-note/03-backend-core.md) | Thiết kế đã chọn: policy là dữ liệu, idempotency, concurrency, reset quota, cổng thanh toán giả lập |
| [01_Quy_tac_bat_buoc.md](../../research/01_Quy_tac_bat_buoc.md) | Cấu trúc bắt buộc của RTM, WBS, ma trận P&I, PERT chia 3 |
| Kế hoạch hai tuần 16–29/09/2026 | Mốc chung của đợt làm bài và phạm vi bản chạy thử B |

### 2.2. Thuật ngữ

| Thuật ngữ | Định nghĩa dùng trong tài liệu này |
| --------- | ----------------------------------- |
| **Gói (Plan)** | Một trong ba mức thuê bao: Miễn phí, Cá nhân, Doanh nghiệp. Policy của gói là **dữ liệu** (`PlanCatalog`), không phải rẽ nhánh `if plan ==` trong mã |
| **Giấy phép (Entitlement)** | Tập quyền có hiệu lực của một tài khoản tại một thời điểm: gói đang có hiệu lực, số lượt xuất còn lại, trần độ phân giải, cờ watermark, số chỗ |
| **Entitlement snapshot** | Bản chụp quyền có **hạn dùng ngắn** do `EntitlementService` cấp trước mỗi lần xuất |
| **Hạn mức (UsagePeriod)** | Dòng ghi nhận số lượt đã dùng theo tháng UTC cho gói Miễn phí |
| **Đặt trước lượt (ExportReservation)** | Giao thức `reserve → complete/cancel` để không cho phép hai lượt chiếm cùng một chỗ còn lại |
| **Idempotency key** | Khóa duy nhất `(UserId, IdempotencyKey)` để retry trả về kết quả cũ thay vì thực hiện lại |
| **Giao dịch trùng** | Yêu cầu/thanh toán/webhook gửi lặp cùng một thao tác; phải nhận diện và không nhân đôi hiệu lực |
| **Xuất lỗi** | Lần xuất được đặt trước nhưng không hoàn thành (lỗi trình duyệt, mất kết nối, hủy thủ công) |
| **Chỗ (Seat)** | Tài khoản thành viên được gắn vào một thuê bao Doanh nghiệp, hưởng quyền của gói đó |

---

## 3. Đặc tả yêu cầu nghiệp vụ B

### 3.1. Mô tả tổng quan

Máy chủ quản lý toàn bộ vòng đời **tài khoản → thuê bao → giấy phép → hạn mức → thanh toán → hóa đơn**, còn trình duyệt chỉ dựng và mã hóa video trên máy người dùng. Lượng xuất video **bắt buộc được xác thực trước khi bắt đầu** với máy chủ; **0 byte nội dung người dùng được gửi lên máy chủ** — request kiểm quyền chỉ mang token và idempotency key.

Chuỗi nghiệp vụ B gồm:

```
Đăng ký → Đăng nhập → [Xem gói] → Mua/Đăng ký năm → Thanh toán → Kích hoạt gói
              │
              ├─ Xuất video: Xác thực (giấy phép/hạn mức) → Đặt trước lượt → Dựng/mã hóa ở trình duyệt → Hoàn tất / Hủy (xuất lỗi)
              │
              ├─ Gia hạn khi sắp hết hạn (nhắc trước hạn) / Xử lý khi hết hạn
              │
              └─ Doanh nghiệp: quản lý 5 chỗ, sinh hóa đơn VAT
```

### 3.2. Tác nhân

| Tác nhân | Vai trò trong nghiệp vụ B |
| -------- | -------------------------- |
| **Khách chưa đăng nhập** | Đăng ký, xem gói, đăng nhập |
| **Người dùng (User)** | Xem quyền/hạn mức của mình, xuất video hợp lệ, mua/gia hạn, quản lý thuê bao, xem hóa đơn (Doanh nghiệp/owner) |
| **Chủ thuê bao Doanh nghiệp** | Quản lý tối đa **5 chỗ** (thêm/chỉ định/thu hồi), xem hóa đơn VAT |
| **Admin** | Xem metrics, vận hành; chỉ admin được ủy quyền mới truy cập cổng thanh toán giả lập ở môi trường thật |
| **Cổng thanh toán (giả lập)** | Gửi webhook/kết quả giao dịch; chỉ chạy ở dev/test hoặc admin được phép |
| **Nghiệp vụ A (trình duyệt)** | Gọi API kiểm quyền của B trước mỗi lần xuất; không gửi nội dung |

### 3.3. Quy tắc từng gói

Chính sách ba gói được mô hình thành **dữ liệu** (`Domain/PlanCatalog.cs`), seed vào bảng `Plans`/`Entitlements` lúc khởi động và đọc lại qua `EntitlementService`. Đổi quota/trần độ phân giải là đổi dữ liệu rồi redeploy.

| Quy tắc | **Miễn phí** | **Cá nhân** | **Doanh nghiệp** |
| ------- | ------------ | ----------- | ---------------- |
| Giá | 0 VND | 599.000 VND/năm | 4.900.000 VND/năm |
| Kỳ hạn | Vô thời hạn (tài khoản mặc định) | 1 năm, gia hạn được | 1 năm, gia hạn được |
| Số video xuất | **3 video/tháng** (theo tháng UTC) | Không giới hạn | Không giới hạn |
| Trần chiều cao | 720p | 1080p | 1080p |
| Watermark | **Có** | Không | Không |
| Số chỗ ngồi | 1 | 1 | **5** |
| Hóa đơn VAT | Không | Không | **Có** (khi thanh toán thành công) |
| Hỗ trợ | Cộng đồng | Tiêu chuẩn | Phản hồi trong 1 ngày làm việc |
| Hết hạn | — | Về Miễn phí ở lần kiểm tra kế tiếp | Về Miễn phí; 5 chỗ vô hiệu |

Quy tắc nghiệp vụ cứng của toàn nhánh B:

- **RQ-1 — Xác thực trước khi xuất:** Mọi lần xuất phải xác thực giấy phép với máy chủ trước khi dựng/mã hóa. Không có giấy phép hợp lệ ⇒ không xuất được (OB-13).
- **RQ-2 — Khóa và hạn mức tính ở máy chủ:** Trình duyệt thực hiện theo quyền được cấp; mọi phán quyết quota/thời hạn dựa trên dữ liệu máy chủ, không tin client.
- **RQ-3 — Idempotency triệt để:** Retry cùng idempotency key (đặt lượt hoặc thanh toán) trả về kết quả cũ, không trừ lượt thứ hai, không cấp quyền/2 hóa đơn.
- **RQ-4 — Ranh giới nhất quán:** Chống vượt quota khi chạy song song bằng concurrency token; bằng thua cuộc đua phải đọc lại số đã dùng rồi đánh giá lại.
- **RQ-5 — Thời gian tính theo UTC:** Chu kỳ hạn mức, giờ hết hạn và snapshot giấy phép đều theo UTC; không phụ thuộc đồng hồ máy local.
- **RQ-6 — Cổng thanh toán là cổng cắm (port):** Sản phẩm phụ thuộc giao diện `IPaymentGateway`; `FakePaymentGateway` chỉ hoạt động ở dev/test hoặc admin được ủy quyền, tuyệt đối không map ở Production.
- **RQ-7 — 0 byte nội dung:** Mọi request máy chủ của B không chứa văn bản, hình ảnh, project JSON, MP4 hoặc token nội dung.
- **RQ-8 — Ghi vết bắt buộc:** Mọi sự kiện nghiệp vụ nhạy cảm (đăng nhập, mua, gia hạn, đặt lượt, thu hồi chỗ) đều có `AuditEvent`; telemetry không chứa dữ liệu định danh hoặc nội dung.

### 3.4. Yêu cầu chức năng REQ-B

| ID | Yêu cầu | Mô tả (đo được, kiểm thử được) |
| -- | ------- | ------------------------------- |
| REQ-B-01 | Đăng ký tài khoản | Tạo tài khoản bằng email + mật khẩu; tài khoản mới mặc định thuộc gói **Miễn phí**. Email trùng bị từ chối. |
| REQ-B-02 | Đăng nhập / đăng xuất | Xác thực bằng phiên; phân biệt rõ 401 (chưa đăng nhập) và 403 (đã đăng nhập nhưng không đủ quyền). |
| REQ-B-03 | Đổi mật khẩu và khóa tài khoản | Đổi mật khẩu khi còn phiên hợp lệ. **Sai mật khẩu 5 lần liên tiếp ⇒ khóa (Lockout)**; lần thứ 6 dù đúng vẫn bị từ chối kèm mã `LockedOut`. |
| REQ-B-04 | Phân vai | `User`, `Admin` (seed admin). User thường không vào được endpoint admin (403); được cấp role Admin thì 200. |
| REQ-B-05 | Danh mục gói và policy | Ba gói Free/Personal/Business như §3.3, lưu dạng dữ liệu, có sẵn cho frontend liệt kê. |
| REQ-B-06 | Cấp và kiểm giấy phép khi xuất | `EntitlementService` trả snapshot quyền (gói hiệu lực, hạn mức còn lại, trần phân giải, watermark, chỗ) có hạn dùng ngắn. **Hết hạn thuê bao ⇒ lần kiểm tra kế tiếp rớt về gói Miễn phí.** |
| REQ-B-07 | Điều chỉnh quyền theo gói | Xin 1080p từ gói Miễn phí trả `grantedHeight: 720`, `watermarkRequired: true`. Gói trả phí không watermark, 1080p. |
| REQ-B-08 | Hạn mức gói Miễn phí | Đếm số lượt xuất đã dùng theo `UsagePeriod` tháng UTC; **reset sang dòng mới mỗi tháng** (không cần job). |
| REQ-B-09 | Chặn lượt thứ tư | Gói Miễn phí hết 3 lượt ⇒ 403 `"Monthly export quota reached."` kèm gợi ý nâng cấp; **đúng video thứ 4 trong tháng bị chặn** (OB-14). |
| REQ-B-10 | Đặt trước lượt xuất | Giao thức `reserve → complete/cancel`; thao tác nằm trong transaction, idempotency key. Retry trả cùng `reservationId`, `exportsRemaining` không đổi. |
| REQ-B-11 | Chống vượt quota song song | Dùng concurrency token trên `UsagePeriod`; 8 request song song với quota 3 ⇒ đúng 3 `Reserved`, 5 `QuotaExceeded`, DB ghi nhận 3. |
| REQ-B-12 | Xử lý xuất lỗi | Xuất không hoàn thành (lỗi trình duyệt/mất kết nối/hủy) ⇒ reservation đánh dấu **Cancelled, trả lại lượt**. Reservation treo quá 30 phút tự trả lượt. Lỗi xuất **không tính là lượt đã dùng**. |
| REQ-B-13 | Mua gói một năm | Tạo giao dịch (amount = giá gói), gọi cổng thanh toán, webhook xác nhận ⇒ `Applied` ⇒ tạo Subscription từ nay + **1 năm**. Kích hoạt tự động **≤ 5 phút**, không thao tác tay (OB-15). |
| REQ-B-14 | Xử lý giao dịch trùng | Cùng idempotency key hoặc `transactionId` gửi lại ⇒ sự kiện đánh dấu **Duplicate**, không cấp lại subscription, không sinh hóa đơn thứ hai. Thiếu/mismatch số tiền ⇒ **AmountMismatch**, không cấp subscription. |
| REQ-B-15 | Gia hạn và nhắc trước hạn | Nhắc gia hạn trước hạn (7 ngày, 1 ngày). Gia hạn khi còn hiệu lực ⇒ kỳ mới tính từ hạn cũ; sau khi hết hạn ⇒ tính từ thời điểm kích hoạt lại. |
| REQ-B-16 | Hết hạn thuê bao | Sub khi hết hạn: mọi request kiểm quyền kế tiếp nhận policy **Miễn phí**; tài khoản không mất dữ liệu; quota Free bắt đầu tính lại từ `UsagePeriod` mới. |
| REQ-B-17 | Hóa đơn VAT (Doanh nghiệp) | Khi giao dịch `Applied` của gói Doanh nghiệp ⇒ tự sinh hóa đơn (số, ngày, gói, đơn giá, VAT 10% giả định, tổng) lưu và hiển thị; **mỗi giao dịch Applied đúng một hóa đơn**. Các gói khác không có hóa đơn. |
| REQ-B-18 | 5 chỗ Doanh nghiệp | Thuê bao Doanh nghiệp quản lý tối đa **5 Seat** (account thành viên). Thêm chỗ thứ 6 ⇒ `SEAT_LIMIT_EXCEEDED`. Thu hồi/chỉ định chỗ được phép; chỗ bị thu hồi mất quyền ở lần kiểm tra kế tiếp. |
| REQ-B-19 | Trang quản lý thuê bao | Xem gói hiện tại, hạn mức đã dùng/còn lại, ngày hết hạn, lịch sử hóa đơn, danh sách chỗ, nút mua/gia hạn. |
| REQ-B-20 | Rate limit và chống lạm dụng | Giới hạn endpoint auth (vd 3 lần/5 phút ⇒ 429); endpoint thường không bị ảnh hưởng. Cờ antiforgery theo danh tính, lấy token mới sau đăng nhập. |
| REQ-B-21 | Audit và telemetry sạch | Ghi audit sự kiện nghiệp vụ; telemetry/metrics **không chứa** email, idempotency key, hoặc bất kỳ nội dung người dùng. |

### 3.5. Yêu cầu phi chức năng NF-B

| ID | Yêu cầu | Tiêu chí đo |
| -- | ------- | ----------- |
| NF-B-01 | Độ trễ kiểm quyền | Phản hồi kiểm quyền ≤ 1 giây ở phần vẻ p95 (đối chiếu NF-09 của Charter). |
| NF-B-02 | Riêng tư dữ liệu | Request máy chủ B mang **0 byte nội dung** người dùng; kiểm tra được trên luồng mạng (OB-09). |
| NF-B-03 | Nhất quán dưới tải | Không vượt quota khi xuất song song; tổng reservation trong DB khớp con số đã phân phối. |
| NF-B-04 | Độ phủ kiểm thử | Kiểm thử tự động phủ ≥ 70% các mô-đun B; mọi bất biến quota/idempotency/concurrency có test. |
| NF-B-05 | Bảo mật | Mật khẩu băm; phiên cookie + bearer; antiforgery; rate limit; khóa tài khoản sau 5 lần sai. |
| NF-B-06 | Có thể theo dõi | Health, metrics tổng hợp, audit nghiệp vụ; retention job làm sạch dữ liệu quá hạn. |
| NF-B-07 | Môi trường | Test chạy độc lập (Testcontainers), không dùng chung database dev; Production không map `FakePaymentGateway`. |

### 3.6. Trạng thái, cách xử lý và kiểm thử

Nguyên tắc chung: mỗi trạng thái được mô tả bằng **trigger**, **cách xử lý** và **ca kiểm thử gắn với trạng thái đó**. Các ca kiểm thử `TC-B-xx` được liệt kê tại §7 và dẫn chiếu trong RTM (§4).

#### 3.6.1. Vòng đời thuê bao (hết hạn, gia hạn)

| Trạng thái | Trigger | Cách xử lý | Kiểm thử |
| ---------- | ------- | ---------- | -------- |
| **Không có gói (None)** | Tài khoản mới tạo | Mặc định gắn gói Miễn phí; không có subscription trả phí | TC-B-09 (tài khoản mới có Free, 3 lượt) |
| **Chờ kích hoạt (Pending)** | Đã tạo giao dịch thanh toán, chưa có webhook | Giữ `PaymentEvent = Pending`; chưa cấp quyền trả phí; user vẫn dùng Miễn phí | TC-B-12 (Pending chưa cấp quyền) |
| **Hoạt động (Active)** | Webhook xác nhận `Applied` | Tạo `Subscription` từ `now` đến `now + 1 năm`; snapshot giấy phép theo gói đã mua | TC-B-13 (kích hoạt ≤ 5 phút, hết hạn = +1 năm) |
| **Gia hạn khi còn hiệu lực** | User gia hạn, `Applied` | Kỳ mới tính từ `EndsUtc` hiện tại (không cắt quyền) | TC-B-14 (gia hạn trước hạn cộng dồn) |
| **Hết hạn (Expired)** | `EndsUtc < now` (đánh giá lười ở lần kiểm tra kế tiếp) | Không cần job; ở lần kiểm quyền kế tiếp trả policy **Miễn phí**; nhắc gia hạn; dữ liệu tài khoản giữ nguyên | TC-B-15 (clock giả vượt hạn → Free ngay) |
| **Tái kích hoạt sau hạn** | User gia hạn từ trạng thái Expired | Subscription mới tính từ thời điểm `Applied`; quota Free ngừng, quyền trả phí có lại | TC-B-16 (Expired → mua → Active từ lúc applied) |
| **Nhắc trước hạn** | Đến mốc 7 ngày / 1 ngày trước `EndsUtc` | Sinh thông báo gia hạn (MVP: ghi log/email giả lập, đánh dấu trạng thái gửi) | TC-B-17 (nhắc trước 7/1 ngày) |

#### 3.6.2. Giao dịch thanh toán (giao dịch trùng)

| Trạng thái | Trigger | Cách xử lý | Kiểm thử |
| ---------- | ------- | ---------- | -------- |
| **Tạo (Pending)** | User bấm mua/gia hạn | Tạo `PaymentEvent` với `idempotencyKey`, amount = giá gói tại thời điểm tạo; gọi cổng thanh toán | TC-B-21 (tạo giao dịch đúng amount) |
| **Thành công lần đầu (Applied)** | Webhook/gateway xác nhận thành công | Kiểm `transactionId`/key chưa tồn tại ⇒ đánh `Applied`, kích hoạt/gia hạn subscription, sinh hóa đơn nếu gói Doanh nghiệp | TC-B-22 (webhook lần 1 → Applied, 1 subscription) |
| **Giao dịch trùng (Duplicate)** | Cùng `transactionId`/key được gửi lần 2 | Trả về kết quả cũ, đánh `Duplicate`; **không** tạo subscription/hóa đơn mới | TC-B-23 (webhook lần 2 → Duplicate, vẫn 1 subscription, 1 hóa đơn) |
| **Sai số tiền (AmountMismatch)** | Amount khác giá gói trong dữ liệu | Đánh `AmountMismatch`, **không cấp subscription**, ghi audit cảnh báo | TC-B-24 (sai số tiền → AmountMismatch, không kích hoạt) |
| **Thất bại (Failed)** | Cổng thanh toán trả thất bại/hủy | Đánh `Failed`, không cấp quyền, thông báo người dùng, cho phép thử lại | TC-B-25 (thất bại không cấp quyền) |

#### 3.6.3. Hạn mức và đặt trước lượt xuất

| Trạng thái | Trigger | Cách xử lý | Kiểm thử |
| ---------- | ------- | ---------- | -------- |
| **Kiểm giấy phép hợp lệ** | Trình duyệt gọi reserve với snapshot | Trả capability: trần phân giải, watermark, hạn mức còn lại | TC-B-31 (Free xin 1080p → 720p + watermark) |
| **Giấy phép hết hạn/không hợp lệ** | Snapshot quá hạn hoặc subscription hết hạn | 403 `LicenseInvalid/Expired`; không đặt trước lượt; client lấy snapshot mới | TC-B-32 (Expired → lần check kế tiếp 403, policy Free) |
| **Đặt trước thành công (Reserved)** | Quota còn đủ | Tạo `ExportReservation` trong transaction, giảm số dư; trả `reservationId` | TC-B-33 (reserve trừ đúng 1 lượt) |
| **Hết hạn mức (QuotaExceeded)** | Gói Miễn phí hết 3 lượt/tháng | 403 `"Monthly export quota reached."`; gợi ý nâng cấp | TC-B-34 (chặn đúng video thứ 4) |
| **Retry cùng key** | Client gửi lại reserve cùng idempotency key | Trả về reservation cũ, không trừ lượt thứ hai | TC-B-35 (retry giữ `exportsRemaining`) |
| **Xuất song song** | Nhiều reserve cùng lúc | Concurrency token trên `UsagePeriod`; kẻ thua đọc lại số đã dùng và đánh giá lại | TC-B-36 (8 reserve, quota 3 → 3 Reserved / 5 QuotaExceeded) |
| **Hoàn tất (Completed)** | Trình duyệt báo mã hóa xong | Đánh `Completed`; lượt đã dùng chốt chính thức | TC-B-37 (hoàn tất giữ quyền đã trừ) |
| **Hủy do xuất lỗi (Cancelled)** | Lỗi trình duyệt / mất kết nối / hủy thủ công | Đánh `Cancelled`, **trả lại lượt**; không tính là lượt đã dùng | TC-B-38 (xuất lỗi → cancel → `exportsRemaining +1`) |
| **Reservation treo** | Không complete/cancel trong 30 phút | Retention job trả lại lượt, xóa reservation quá hạn | TC-B-39 (clock +1h → trả 1 reservation treo) |
| **Reset đầu tháng** | Sang tháng UTC mới | `UsagePeriod` mới; hết lượt tháng trước không còn ảnh hưởng | TC-B-40 (31/01 → 01/02 còn 2 lượt; qua năm, năm nhuận) |

#### 3.6.4. Lỗi xuất video (xuất lỗi)

| Tình huống lỗi | Cách xử lý | Kiểm thử |
| -------------- | ---------- | -------- |
| **Lỗi mã hóa/dựng trong trình duyệt** (bộ nhớ, WebCodecs) | Client gọi cancel reservation; slot trả về; hiển thị thông báo, cho thử lại | TC-B-38 |
| **Mất kết nối giữa reserve và complete** | Reservation tự hết hạn sau 30 phút, auto-return | TC-B-39 |
| **Lỗi server khi kiểm quyền** (token hết hạn, snapshot quá hạn) | 401/403 riêng biệt; client lấy snapshot mới, không bắt đầu dựng khi chưa có quyền | TC-B-32, TC-B-41 |
| **Hết hạn giấy phép giữa chuỗi xuất** | Lượt chưa complete không bị tính; policy Free hiệu lực từ lần kiểm tra kế tiếp | TC-B-42 |

Quy tắc cốt lõi về **xuất lỗi**: số lượt bị khấu trừ **chỉ khi hoàn tất (Completed)**; mọi kết cục khác (cancel, timeout, error) đưa lượt về trạng thái chưa dùng.

#### 3.6.5. Xác thực và khóa tài khoản

| Trạng thái | Trigger | Cách xử lý | Kiểm thử |
| ---------- | ------- | ---------- | -------- |
| **Phiên hợp lệ** | Đăng nhập đúng | Cấp phiên cookie + bearer; token antiforgery theo danh tính | TC-B-51 |
| **Chưa đăng nhập** | Gọi endpoint cần xác thực | 401; không lộ thông tin | TC-B-52 |
| **Không đủ quyền** | User thường gọi endpoint admin | 403; cấp role Admin thì 200 | TC-B-53 |
| **Nhập sai mật khẩu** | 5 lần sai liên tiếp | Khóa tài khoản (Lockout); lần 6 dù đúng vẫn từ chối, body chứa `LockedOut` | TC-B-54 |
| **Vượt rate limit auth** | 3 lần/5 phút ở endpoint auth | 429; `/api/templates` không bị ảnh hưởng | TC-B-55 |

#### 3.6.6. Chỗ ngồi gói Doanh nghiệp (5 chỗ)

| Trạng thái | Trigger | Cách xử lý | Kiểm thử |
| ---------- | ------- | ---------- | -------- |
| **Chỗ hợp lệ (Seat active)** | Owner gắn account thành viên vào subscription | Account nhận entitlement Doanh nghiệp (không giới hạn, 1080p, không watermark) | TC-B-61 (5 chỗ dùng được) |
| **Hết chỗ (SeatsExceeded)** | Thêm chỗ thứ 6 | Từ chối `SEAT_LIMIT_EXCEEDED`; không tạo gắn kết mới | TC-B-62 (chỗ thứ 6 bị chặn) |
| **Thu hồi chỗ (Seat revoked)** | Owner xóa/chỉ định lại chỗ | Entitlement của account bị thu hồi; lần kiểm tra kế tiếp nhận Miễn phí (hoặc quyền account cá nhân nếu có) | TC-B-63 (thu hồi → check kế tiếp 403) |
| **Gói hết hạn** | Subscription Doanh nghiệp hết hạn | Mọi chỗ vô hiệu chung; từng thành viên rớt về policy cá nhân riêng | TC-B-64 |

#### 3.6.7. Hóa đơn

| Trạng thái | Trigger | Cách xử lý | Kiểm thử |
| ---------- | ------- | ---------- | -------- |
| **Chưa có hóa đơn** | Gói Miễn phí/Cá nhân | Không sinh hóa đơn (chỉ Doanh nghiệp) | TC-B-71 |
| **Hóa đơn hợp lệ** | Giao dịch `Applied` gói Doanh nghiệp | Sinh 1 hóa đơn: số, ngày, nội dung gói, đơn giá, VAT, tổng; hiển thị trong trang quản lý | TC-B-72 (Applied → đúng 1 hóa đơn đúng số tiền + VAT) |
| **Giao dịch trùng** | Webhook lần 2 của cùng giao dịch | Không sinh hóa đơn thứ hai (giữ 1) | TC-B-73 (duplicate → vẫn 1 hóa đơn) |
| **Gia hạn Doanh nghiệp** | Gia hạn thành công | Sinh hóa đơn mới cho kỳ mới | TC-B-74 |

---

## 4. Ma trận truy vết yêu cầu

Cột chuẩn theo PM05:37 (Req ID · Requirement Description · Business Objective · Design Doc · Code Module · Test Case · Status).

| Req ID | Requirement Description | Business Objective | Design Doc | Code Module | Test Case | Status |
| ------ | ----------------------- | ------------------ | ---------- | ----------- | --------- | ------ |
| REQ-B-01 | Đăng ký tài khoản, mặc định Free | OB-14 | plan-note/03 §Mô hình tối thiểu | `Modules/Auth`, `Domain/User` | TC-B-09 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |
| REQ-B-02 | Đăng nhập/đăng xuất, 401/403 phân biệt | OB-13 | plan-note/03 §Thiết kế đã chọn | `Modules/Auth` | TC-B-51, TC-B-52 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |
| REQ-B-03 | Đổi mật khẩu; khóa sau 5 lần sai | NF-B-05 | plan-note/03 §Kiểm chứng | `Modules/Auth` | TC-B-54 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |
| REQ-B-04 | Phân vai User/Admin, seed admin | OB-13 | plan-note/03 | `Domain/Role`, `Modules/Admin` | TC-B-53 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |
| REQ-B-05 | Danh mục 3 gói, policy là dữ liệu | OB-13/14/15 | plan-note/03 §Thiết kế đã chọn | `Domain/PlanCatalog.cs`, `Plans/Entitlements` | TC-B-10 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |
| REQ-B-06 | Snapshot quyền khi xuất; hết hạn → Free | OB-13 | plan-note/03 | `EntitlementService` | TC-B-32, TC-B-15 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |
| REQ-B-07 | Clamp 720p + watermark gói Free | OB-14 | plan-note/03 | `Domain/PlanCatalog.cs`, `Modules/Exports` | TC-B-31 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |
| REQ-B-08 | Hạn mức theo tháng UTC, reset không job | OB-14 | plan-note/03 §Reset quota | `Domain/UsagePeriod`, `Domain/Entitlement` | TC-B-40 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |
| REQ-B-09 | Chặn đúng video thứ 4 | OB-14 | plan-note/03 | `Modules/Exports` | TC-B-34 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |
| REQ-B-10 | reserve→complete/cancel, idempotency | OB-13 | plan-note/03 §Hai bất biến | `Domain/ExportReservation` | TC-B-33, TC-B-35 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |
| REQ-B-11 | Chống vượt quota song song | OB-14, NF-B-03 | plan-note/03 §Hai bất biến | `UsagePeriod` + xmin token | TC-B-36 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |
| REQ-B-12 | Xuất lỗi trả lượt; treo 30 phút tự trả | OB-13/14 | plan-note/03 §Reset quota | `ExportReservation`, retention job | TC-B-38, TC-B-39 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |
| REQ-B-13 | Mua gói, kích hoạt ≤ 5 phút | OB-15 | plan-note/03 §Cổng thanh toán | `IPaymentGateway`, `PaymentEvent`, `Subscription` | TC-B-22, TC-B-13 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |
| REQ-B-14 | Giao dịch trùng / sai số tiền | OB-15 | plan-note/03 §Kiểm chứng | `PaymentEvent`, `FakePaymentGateway` | TC-B-23, TC-B-24 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |
| REQ-B-15 | Gia hạn + nhắc trước hạn | OB-15 | plan-note/03 §Thiết kế đã chọn | `Subscription`, audit | TC-B-14, TC-B-16, TC-B-17 | Thiết kế xong; nhắc trước hạn chưa chứng minh trong bản chạy thử |
| REQ-B-16 | Hết hạn về Free lười biếng | OB-13/14 | plan-note/03 §Kiểm chứng | `EntitlementService` | TC-B-15, TC-B-42 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |
| REQ-B-17 | Hóa đơn VAT Doanh nghiệp | OB-15 | §3.3, §3.6.7 tài liệu này | `Invoice` (chưa có entity trong bản chạy thử) | TC-B-71..74 | **Chưa triển khai** trong bản chạy thử; đã đặc tả đầy đủ |
| REQ-B-18 | 5 chỗ Doanh nghiệp | OB-15 | §3.3, §3.6.6 tài liệu này | `Seat` (chưa có trong bản chạy thử) | TC-B-61..64 | **Chưa triển khai** trong bản chạy thử; đã đặc tả đầy đủ |
| REQ-B-19 | Trang quản lý thuê bao | OB-15 | §3.3 | Frontend `features/...` | TC-B-81 | Chưa triển khai trong bản chạy thử |
| REQ-B-20 | Rate limit + antiforgery | NF-B-05 | plan-note/03 §Kiểm chứng | `Modules/Auth` middleware | TC-B-55 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |
| REQ-B-21 | Audit + telemetry sạch | OB-09, NF-B-06 | plan-note/03 §Kiểm chứng | `AuditEvent`, metrics | TC-B-91 | Đã kiểm chứng kỹ thuật; chờ kiểm tra chéo |

> Trạng thái: **"Đã kiểm chứng kỹ thuật"** = có kết quả tự động/curl ghi tại plan-note/03-backend-core.md (60/60 test pass ngày 17/09/2026), nhưng **nghiệm thu chính thức** (Validate Scope — người xác nhận: Chiến) và kiểm tra chéo B (Quang Anh) chưa hoàn tất theo lịch đợt hai tuần.

---

## 5. Phân rã công việc nhánh B — WBS và WBS Dictionary

Nhánh B là **nhánh cấp 1 số 7 — F5: Tài khoản, thuê bao và giấy phép** trong WBS tổng (60 giờ, 13,3% ngân sách 450 giờ). Nhánh này là **nghiệp vụ, không phải hạ tầng**: nó quyết định cách sản phẩm tạo doanh thu và có tiêu chí nghiệm thu riêng (OB-13/14/15). Với quy mô 60 giờ, tài liệu dùng **độ mịn 8–10 giờ/gói công việc** (đúng dải của WBS tổng), đủ để giao cho một người và nghiệm thu trong một kỳ báo cáo.

### 5.1. Sơ đồ phân cấp nhánh B

```
7. F5 — Tài khoản, thuê bao và giấy phép ............... 60 h (13,3%)
│
├── 7.1 Mô hình tài khoản và xác thực .................. 14 h   ← M2
│       đăng ký, đăng nhập, đổi mật khẩu, khóa, phân vai, rate limit,
│       antiforgery, seed admin
│
├── 7.2 Cấp và kiểm giấy phép khi xuất ................. 12 h   ← M5
│       EntitlementService (snapshot, hết hạn → Free), reserve →
│       complete/cancel, idempotency, concurrency token
│
├── 7.3 Hạn mức bậc miễn phí và watermark .............. 8 h    ← M5
│       UsagePeriod theo tháng UTC, clamp 720p + watermark,
│       chặn lượt thứ 4, gợi ý nâng cấp
│
├── 7.4 Cổng thanh toán, mua và gia hạn ................ 16 h   ← M6
│       IPaymentGateway + FakePaymentGateway, webhook, idempotency
│       thanh toán (trùng/sai số tiền), kích hoạt ≤ 5 phút,
│       gia hạn + nhắc trước hạn, hóa đơn VAT (Doanh nghiệp), 5 chỗ
│
└── 7.5 Trang quản lý thuê bao ......................... 10 h   ← M6
        xem gói/hạn mức/hạn dùng/hóa đơn/chỗ, mua–gia hạn
```

### 5.2. WBS Dictionary

| WBS | Gói công việc | Mô tả đầu ra (deliverable) | Tiêu chí chấp nhận (đo được) | Giờ | Mốc | Phụ thuộc | Phụ trách |
| --- | -------------- | --------------------------- | ---------------------------- | ---: | --- | --------- | --------- |
| 7.1 | Mô hình tài khoản và xác thực | `Domain/User`, `Role`; endpoint đăng ký/đăng nhập/đăng xuất/đổi mật khẩu; lockout, rate limit, antiforgery; seed admin | Tài khoản mới là Free; 5 sai → Lockout (lần 6 dù đúng vẫn từ chối); 429 ở auth; 401/403 phân biệt; admin seed chạy được | 14 | M2 | — | Việt Quang |
| 7.2 | Cấp và kiểm giấy phép khi xuất | `EntitlementService` trả snapshot quyền có hạn dùng ngắn; giao thức `reserve → complete/cancel`; idempotency `(UserId, Key)`; concurrency token | **OB-13**: 100% lượt xuất xác thực trước khi bắt đầu; không giấy phép hợp lệ không xuất được; hết hạn → Free ở lần check kế tiếp; retry không trừ lượt thứ hai; 8 reserve song song/quota 3 → 3 Reserved | 12 | M5 | 7.1 | Việt Quang |
| 7.3 | Hạn mức bậc miễn phí và watermark | `UsagePeriod` theo tháng UTC; clamp 720p + watermark; chặn lượt 4 kèm thông báo gợi ý nâng cấp | **OB-14**: video thứ 4 trong tháng bị từ chối đúng lúc kèm thông báo rõ; 3 video đầu watermark/720p; reset đúng ranh giới tháng (test clock giả qua năm, năm nhuận) | 8 | M5 | 7.2 | Việt Quang |
| 7.4 | Cổng thanh toán, mua và gia hạn | `IPaymentGateway`; `FakePaymentGateway` (dev/test/admin); webhook; idempotency thanh toán; Duplicate/AmountMismatch/Failed; kích hoạt ≤ 5 phút; gia hạn + nhắc trước hạn; **hóa đơn VAT Doanh nghiệp; quy tắc 5 chỗ** | **OB-15**: mua thành công, quyền hiệu lực tự động ≤ 5 phút, không thao tác tay; giao dịch thất bại/trùng/sai tiền không cấp quyền; Production không map fake gateway; 1 giao dịch Applied = 1 hóa đơn; tối đa 5 chỗ | 16 | M6 | 7.1, 7.2 (hồ sơ cổng nộp M2) | Việt Quang |
| 7.5 | Trang quản lý thuê bao | Giao diện xem gói hiện tại, hạn mức đã dùng/còn lại, ngày hết hạn, lịch sử hóa đơn, danh sách chỗ, nút mua/gia hạn | Luồng chính chạy được kèm dữ liệu từ `/api/me/*`; dữ liệu khớp snapshot máy chủ | 10 | M6 | 7.1, 7.4 | Việt Quang |

**Quy tắc phân rã áp dụng:** Quy tắc 100% (tổng 60 h bằng đúng nhánh 7 của WBS tổng); 8–80 giờ cho mỗi gói công việc; một kỳ báo cáo; gói công việc là **deliverable** (mô tả kết quả, không mô tả hành động).

---

## 6. Ước lượng, lịch và chi phí

### 6.1. Ước lượng ba điểm (PERT — công thức thầy: `tE = (O + M + P) / 3`)

| Mã | Hoạt động cơ bản (activity) | O | M | P | tE | Cơ sở ước lượng |
| -- | --------------------------- | -: | -: | -: | -: | --------------- |
| 7.1 | Xây mô hình tài khoản và xác thực | 10 | 14 | 18 | 14,0 | Đã có identity framework; chủ yếu cấu hình policy, lockout, rate limit |
| 7.2 | Cấp và kiểm giấy phép khi xuất | 9 | 12 | 15 | 12,0 | Snapshot + giao thức reserve chưa từng làm; nguồn tham chiếu plan-note/03 |
| 7.3 | Hạn mức bậc miễn phí và watermark | 6 | 8 | 10 | 8,0 | Đơn giản nếu tách được từ 7.2; test ranh giới tháng tốn công |
| 7.4 | Cổng thanh toán, mua và gia hạn | 12 | 16 | 20 | 16,0 | Chịu ảnh hưởng bên ngoài (duyệt hồ sơ cổng); idempotency + hóa đơn + chỗ mới |
| 7.5 | Trang quản lý thuê bao | 7 | 10 | 13 | 10,0 | Chủ yếu ghép API đã có; kiểm chéo dữ liệu |
| | **Tổng** | | | | **60,0** | Khớp 60 h nhánh 7 trong WBS tổng |

Basis of estimates: ước lượng top-down từ WBS tổng (tham chiếu), chốt bottom-up khi hoàn tất phân rã hoạt động; khoảng dao động ±10%; giả định Việt Quang dành ~20 giờ/tuần cho phần B trong đợt hai tuần.

### 6.2. Lịch và mốc

**Mốc dự án (từ Charter):** M2 — hoàn tất mô hình tài khoản, nộp hồ sơ cổng thanh toán; M5 — kiểm giấy phép + hạn mức (OB-13/14); M6 — thanh toán + trang quản lý (OB-15).

**Mốc đợt hai tuần 16–29/09/2026 (đợt làm bài):**

| Mốc | Ngày | Nội dung nhánh B |
| --- | ---- | ---------------- |
| M-REQB | 17/09 | Bản yêu cầu B (tài liệu này, phiên bản gốc) |
| M-JOIN | 19/09 | Chốt giao tiếp A↔B (kiểm quyền trước khi xuất, idempotency key), B↔C (cấp mẫu, ghi vết) |
| M-PLAN | 21/09 | Bộ kế hoạch B; thử sớm luồng kiểm quyền |
| M-RUN | 25/09 | Ba phần chạy cùng nhau: đăng nhập, kiểm quyền, chặn lượt 4 |
| M-TEST | 27/09 | Chốt hồ sơ và kết quả kiểm thử B (kiểm tra chéo: Quang Anh) |
| M-CLOSE | 29/09 | Kiểm tra toàn bộ tệp, đóng gói, tập trình bày |

**Quan hệ phụ thuộc chính:** `7.1 → 7.2 → 7.3` (về dữ liệu: hạn mức cần reservation), `7.1 → 7.4` (thanh toán cần mô hình tài khoản), `7.2, 7.4 → 7.5`. Chuỗi `7.1 → 7.2` là tiền đề cho các lần xuất (điểm quyết định OB-13), nên đặt sớm ở M2 như trong WBS tổng §9.1. **Bên ngoài:** hồ sơ cổng thanh toán nộp tại M2, thời hạn duyệt ngoài kiểm soát đội (AS-43, RS-10) — nếu chưa duyệt tới M6, bàn giao phương án kích hoạt giấy phép thủ công và hoãn nghiệm thu OB-15 theo Hợp đồng §6.

### 6.3. Chi phí và dự phòng

| Hạng mục | Giá trị | Ghi chú |
| -------- | ------: | ------- |
| Giờ công tE | 60 h | Baseline effort nhánh B |
| Contingency reserve | 6 h (10%) | Rủi ro **đã nhận diện**: chậm duyệt cổng, race concurrency, retry/idempotency, lỗi ranh giới tháng — xem §8. Nằm trong cost baseline |
| **Cost baseline nhánh B** | **66 h** | Baseline effort + contingency |
| Management reserve | cấp dự án | Rủi ro chưa lường trước; do sponsor kiểm soát, cần change request chính thức |
| Mua sắm (procurement) | 0 VND tiền mặt trong đợt làm bài | Hồ sơ cổng thanh toán (nộp M2); không mua giấy phép phần mềm; máy chủ dùng tài nguyên sẵn có |

Đơn giá quy đổi công sức theo Cost Management Plan chung của dự án (công sức tính riêng khi đánh giá hiệu quả kinh tế, không lẫn với vốn tiền mặt 3.500.000 VND).

### 6.4. Mua sắm (procurement)

| Hạng mục | Làm/mua/thuê | Tiêu chí lựa chọn | Bắt buộc giao |
| -------- | ------------ | ----------------- | ------------- |
| Cổng thanh toán | Làm (giả lập) + nộp hồ sơ cổng thật | Chỉ dev/test/admin; không map ở Production | Hồ sơ cổng tại M2 |
| Hạ tầng máy chủ dev | Thuê tài nguyên sẵn có | Chi phí 0 trong bài tập | — |
| Công cụ/phần mềm | Không | Không giao việc ràng giấy phép phần mềm | — |

---

## 7. Kế hoạch chất lượng và kiểm thử

**Chiến lược:** chất lượng theo ZLD (prevention/appraisal) — ngăn lỗi bằng thiết kế *policy là dữ liệu* và *idempotency dựa trên unique index*; phát hiện lỗi bằng unit + integration test; chi phí không tuân thủ (retry, hỗ trợ, mail sai) đo qua audit.

**Phân tầng kiểm thử:**

| Tầng | Môi trường | Nội dung | Mục tiêu phủ |
| ---- | ---------- | -------- | ------------ |
| Unit | CI local | `PlanPolicyTests`, `UsagePeriodTests` (ranh giới tháng, năm nhuận, UTC) | Policy 3 gói, invariant quota đúng cho 3 gói |
| Integration | PostgreSQL Testcontainers (mỗi test class một DB riêng) | Idempotency reserve/retry, concurrency 8 song song, payment trùng/sai tiền, hết hạn với clock giả, lockout, rate limit, phân quyền | Mọi bất biến B có test tự động |
| E2E / kiểm tra chéo | Frontend thật + API | Đăng nhập, kiểm quyền, chặn lượt 4, xuất lỗi, giả lập thanh toán (Quang Anh kiểm tra, Chiến xác nhận) | Luồng nghiệp vụ B chính |

**Danh mục ca kiểm thử chính (đầy đủ hơn tại plan-note/03):**

| TC-B | Nội dung | Kết quả kỳ vọng |
| ---- | -------- | --------------- |
| TC-B-09 | Đăng ký mới | User tạo xong thuộc Free, 3 lượt, watermark, 720p |
| TC-B-10 | Policy 3 gói | Đúng quota/trần/watermark/seats cho cả ba gói |
| TC-B-13 | Kích hoạt sau mua | Subscription hiệu lực từ now → +1 năm, ≤ 5 phút |
| TC-B-15 | Vượt ngày hết hạn (clock giả) | Lần check kế tiếp rớt về Free |
| TC-B-23 | Webhook lặp | Lần 1 Applied; lần 2 Duplicate; chỉ 1 subscription |
| TC-B-24 | Sai số tiền | AmountMismatch, không cấp subscription |
| TC-B-31 | Free xin 1080p | grantedHeight 720, watermarkRequired true |
| TC-B-34 | Lượt thứ 4 | 403 "Monthly export quota reached." |
| TC-B-35 | Retry reserve cùng key | Cùng reservationId, exportsRemaining giữ nguyên |
| TC-B-36 | 8 reserve song song, quota 3 | Đúng 3 Reserved, 5 QuotaExceeded, DB 3 |
| TC-B-38 | Xuất lỗi → cancel | Trả lại lượt (exportsRemaining +1) |
| TC-B-39 | Reservation treo 30 phút | Retention trả 1 lượt |
| TC-B-40 | Ranh giới tháng UTC | 31/01 → 01/02 còn 2 lượt; qua năm; năm nhuận |
| TC-B-54 | 5 lần sai mật khẩu | Lần 6 dù đúng vẫn LockedOut |
| TC-B-55 | Rate limit auth | 429; endpoint khác không bị ảnh hưởng |
| TC-B-62 | Chỗ thứ 6 | SEAT_LIMIT_EXCEEDED |
| TC-B-72/73 | Hóa đơn Doanh nghiệp + duplicate | 1 Applied = 1 hóa đơn; duplicate không sinh thêm |
| TC-B-91 | Telemetry sạch | Không chứa email/key/nội dung |

**Ngưỡng:** SPI/CPI theo dõi mức 0,95–1,10; độ phủ mô-đun B ≥ 70%; **nghiệm thu** (Validate Scope) do người xác nhận chính thức chứ không phải đội làm — ghi biên bản cho từng lần kiểm tra chéo.

---

## 8. Kế hoạch rủi ro

Định nghĩa: Probability/Impact thang 1–5; ma trận P×I: ≤ 6 thấp · 7–12 trung bình · ≥ 13 cao. Quantitative (EMV) chỉ làm cho rủi ro ưu tiên cao.

| ID | Rủi ro (nhóm RBS) | P | I | P×I | Chiến lược ứng phó + hành động | Trigger / contingency |
| -- | ----------------- | - | - | --- | ------------------------------ | --------------------- |
| R-B-01 | Cổng thanh toán chậm duyệt (External) | 3 | 4 | 12 | **Transfer/Mitigate:** nộp hồ sơ M2 sớm; để sẵn phương án kích hoạt thủ công; hoãn nghiệm thu OB-15 theo Hợp đồng §6 | Chưa duyệt đến M6 → bàn giao kích hoạt tay, ghi rõ trạng thái |
| R-B-02 | Webhook giao dịch trùng cấp quyền nhân đôi (Financial) | 2 | 5 | 10 | **Mitigate:** idempotency `(UserId,Key)` + unique index; test TC-B-23 | Phát hiện Duplicate trong log → kiểm chéo invoice/subscription |
| R-B-03 | Vượt hạn mức khi xuất song song (Technical) | 2 | 4 | 8 | **Mitigate:** concurrency token (xmin) + đọc lại đánh giá lại; load test TC-B-36 | DbUpdateConcurrencyException → retry an toàn |
| R-B-04 | Xuất lỗi đếm nhầm lượt (Technical) | 3 | 3 | 9 | **Mitigate:** chỉ Completed mới khấu trừ; cancel/auto-return 30 phút; TC-B-38/39 | Khách báo lỗi xuất → kiểm reservation còn Reserved |
| R-B-05 | Hết hạn sai do đồng hồ máy (Technical) | 2 | 3 | 6 | **Mitigate:** UTC; test clock giả ranh giới tháng/năm nhuận (TC-B-40) | — |
| R-B-06 | Fake gateway lọt Production (Organizational) | 1 | 5 | 5 | **Avoid:** factory theo env, test cấu hình Production không map | Kiểm tra config trước phát hành |
| R-B-07 | Thay đổi quy tắc gói giữa chừng → scope creep (Scope) | 2 | 3 | 6 | **Mitigate:** đặc tả quy tắc §3.3 cố định theo v2.1; mọi đổi quy tắc qua CCB §10 | Yêu cầu đổi gói → change request + đánh giá baseline |
| R-B-08 | Lộ dữ liệu nhạy cảm trong telemetry (Legal/Compliance) | 2 | 4 | 8 | **Avoid:** cho phép danh sách trường; test telemetry sạch TC-B-91 | Rà soát log trước mỗi mốc |
| R-B-09 | Kiểm tra chéo B thiếu giờ (Schedule) | 3 | 3 | 9 | **Mitigate:** chốt ngày 27/09; checklist kiểm tra chéo có trước (Quang Anh) | Trượt M-TEST 1 ngày → báo Chiến cân lại |

Contingency reserve đề xuất **6 h (10%)**: EMV các rủi ro ưu tiên cao (R-B-01 ~ 12/15, R-B-02 ~ 10/15) cộng phần thực thi phòng ngừa §7; trong baseline.

---

## 9. Nguồn lực, trách nhiệm và truyền thông

**RACI nhánh B** (R = làm, A = chịu trách nhiệm cuối — đúng một người, C = góp ý trước khi làm, I = được thông báo):

| Gói công việc | Việt Quang | Chiến | Quang Anh | Sponsor/GV |
| -------------- | ---------- | ----- | --------- | ---------- |
| 7.1 Tài khoản và xác thực | R, A | C (tích hợp A) | C (tiêu chí kiểm thử) | I |
| 7.2 Cấp và kiểm giấy phép | R, A | C (điểm gọi kiểm quyền) | C | I |
| 7.3 Hạn mức và watermark | R, A | C | C | I |
| 7.4 Thanh toán, gia hạn, hóa đơn, chỗ | R, A | C (hồ sơ cổng) | C | A (phê duyệt hồ sơ) |
| 7.5 Trang quản lý thuê bao | R, A | I | C | I |
| Kiểm tra chéo B | R (chuẩn bị), C | **A** (xác nhận) | **R** (kiểm tra) | I |

**Truyền thông (đợt hai tuần):** cập nhật ngắn mỗi ngày — *đã làm gì / tệp kết quả ở đâu / đã dùng bao nhiêu giờ / đang vướng gì* (push vào kênh nhóm); họp chốt tại 19/09, 25/09, 27/09, 29/09 (interactive); hồ sơ và bằng chứng lưu trong repo `design-note/official-docs/02_Planning` (pull). Báo ngay cho Chiến nếu bị chặn quá một ngày.

---

## 10. Kiểm soát thay đổi

- **Scope baseline nhánh B** = đặc tả §3 + RTM §4 + WBS §5. Đổi bất kỳ yêu cầu/quy tắc gói/ngân sách ảnh hưởng OB-13/14/15 phải qua đúng một quy trình: mô tả thay đổi → đánh giá tác động (scope/schedule/cost/risk) → **CCB** duyệt/hoãn/từ chối → cập nhật Change Log (kể cả bị từ chối) → cập nhật baseline **từ mốc hiện tại trở đi, không sửa hiệu năng quá khứ**.
- **Quy tắc phiên bản:** tài liệu Draft → sửa trực tiếp; khi đã Approved mà nội dung đổi thì tăng phiên bản và đưa bản bị thay thế vào `_archive`. Người phê duyệt theo lịch sử cập nhật (Chiến; GV theo thẩm quyền).

---

## 11. Phần chưa triển khai và quy tắc cập nhật

**Phần chưa phân rã / chưa triển khai trong bản chạy thử** (ghi đúng trạng thái, không tự nhận là hoàn thành):

1. **Hóa đơn VAT thật** và quy trình thuế — đặc tả xong (§3.6.7), chưa có entity trong bản chạy thử.
2. **5 chỗ Doanh nghiệp** — đặc tả xong (§3.6.6), chưa triển khai; demo hai tuần chỉ chứng minh gói Free/Personal.
3. **Tích hợp cổng thanh toán thật** — phụ thuộc duyệt hồ sơ M2; bản chạy thử dùng giả lập, ghi rõ "giả lập".
4. **Nhắc gia hạn thật (email)** — ở mức ghi log giả lập trong MVP.
5. **Trang quản lý thuê bao (7.5)** — phần ghép giao diện, ước lượng tại §6.1.

**Quy tắc cập nhật:** rolling wave — gói công việc gần đến mốc được phân rã chi tiết hơn; phần xa giữ planning package. Mọi cập nhật số liệu phải đối chiếu tài liệu nguồn duy nhất (plan-note/03 cho thiết kế, Charter cho OB/ràng buộc) để tránh giữ cùng một con số ở nhiều nơi.

---

*Tài liệu căn cứ: README.vi.md, Business Case v2.1, Project Charter v2.1, Assumption Log v2.1, plan-note/03-backend-core.md, quy tắc môn học (research/01, 02) và kế hoạch đợt hai tuần 16–29/09/2026.*
