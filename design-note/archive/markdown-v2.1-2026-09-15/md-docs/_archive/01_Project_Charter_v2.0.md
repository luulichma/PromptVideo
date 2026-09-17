<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                     |                                |
| ------------------- | ------------------------------ |
| **Nhóm tiến trình** | Initiating                     |
| **Tên tài liệu**    | Project Charter                |
| **Phiên bản**       | Ver. 2.1                       |
| **Nhóm thực hiện**  | Nhóm 02                        |
| **Ngày phát hành**  | 2026-09-01                     |
| **Trạng thái**      | Draft — chờ phê duyệt          |

<div style="page-break-after: always"></div>

<!-- ======================= TRANG 2 — XÁC NHẬN & LỊCH SỬ ======================= -->

## Xác nhận

| Người tạo       | Người kiểm tra  | Người xác nhận  |
| --------------- | --------------- | --------------- |
| Phạm Quang Anh | Nguyễn Thế Chiến | Phạm Quang Anh |
|                 | Nguyễn Việt Quang | Thầy Nguyễn Đình Quảng |

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| -- | --------- | ------------- | -------------- | ----------------- | --------------- | --------------- |
| 1  | Ver 1.0   | 2026-08-20    | Tạo mới        | Khởi tạo Project Charter theo 12 mục chuẩn: mục tiêu, phạm vi, mốc tiến độ, ngân sách, bên liên quan, thẩm quyền | Phạm Quang Anh | Phạm Quang Anh |
| 2  | Ver 2.0   | 2026-08-27    | Chỉnh sửa lớn  | Cập nhật theo mô hình dịch vụ máy chủ thu phí thuê bao thường niên: bổ sung mục tiêu và yêu cầu về tài khoản, giấy phép, hạn mức và thanh toán; cập nhật ranh giới phạm vi, ngân sách, rủi ro, phân bổ công sức theo mốc và thẩm quyền | Phạm Quang Anh | Phạm Quang Anh |
| 3  | Ver 2.1   | 2026-09-01    | Chỉnh sửa      | Lược bỏ nội dung trùng với Business Case và Benefit Management Plan tại §2.1, §6 và §8.2; ghi rõ payback danh nghĩa và payback chiết khấu tại §2.2; rút §9 về mức danh sách cao và chuyển bảng chi tiết sang Stakeholder Register, đánh số lại SH-01 → SH-09. Giữ nguyên cấu trúc 12 mục | Phạm Quang Anh | Phạm Quang Anh |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

## Mục lục

1. [Project Title](#1-project-title)
2. [Project Purpose or Justification](#2-project-purpose-or-justification)
3. [Measurable Project Objectives and Success Criteria](#3-measurable-project-objectives-and-success-criteria)
4. [High-level Requirements](#4-high-level-requirements)
5. [High-level Project Description and Boundaries](#5-high-level-project-description-and-boundaries)
6. [High-level Risks](#6-high-level-risks)
7. [Summary Milestone Schedule](#7-summary-milestone-schedule)
8. [Summary Budget](#8-summary-budget)
9. [Stakeholder List](#9-stakeholder-list)
10. [Project Approval Requirements](#10-project-approval-requirements)
11. [Assigned Project Manager and Authority Level](#11-assigned-project-manager-and-authority-level)
12. [Name and Authority of the Sponsor](#12-name-and-authority-of-the-sponsor)

<div style="page-break-after: always"></div>

<!-- ============================== NỘI DUNG ============================== -->

> **Lưu ý về bối cảnh.** Tài liệu lập trên bối cảnh doanh nghiệp giả định (Enticy Studios) phục vụ môn Quản lý dự án phần mềm. Số liệu tài chính và quy mô thuê bao là giả định, đăng ký kèm nguồn tại [Assumption Log](./02_Assumption_Log_v2.0.md).

---

## 1. Project Title

**PromptVideo — Dịch vụ tạo video trình chiếu từ văn bản và hình ảnh, thu phí thuê bao thường niên, dựng video ngay trong trình duyệt.**

| Thuộc tính            | Giá trị                                    |
| --------------------- | ------------------------------------------ |
| Mã dự án              | `<<Mã dự án>>`                             |
| Tên viết tắt          | PromptVideo                                |
| Phiên bản mục tiêu    | v1.0                                       |
| Tổ chức chủ quản      | Enticy Studios (bối cảnh giả định)         |
| Giấy phép             | Độc quyền — mã nguồn không công khai       |
| Kiến trúc             | P4 — render client-side + máy chủ tài khoản, giấy phép, thanh toán |
| Mô hình doanh thu     | M1 — thuê bao thường niên ba bậc           |
| Ngày bắt đầu          | 2026-08-24                                 |
| Ngày kết thúc dự kiến | 2026-12-06                                 |
| Thời lượng            | 15 tuần                                    |
| Quy mô đội            | 3 thành viên bán thời gian — 450 giờ       |

---

## 2. Project Purpose or Justification

### 2.1. Lý do thực hiện

Nhu cầu thị trường và sáu hạn chế của các công cụ hiện có được phân tích đầy đủ tại [Business Case §2](../00_Pre-project/01_Business_Case_v2.2.md#2-nhu-cầu-kinh-doanh): ba nhóm người dùng mục tiêu mất ~45 phút cho một video 60 giây và trả 180–276 USD/năm cho công cụ nước ngoài render trên máy chủ nhà cung cấp.

PromptVideo giải quyết cả năm bằng một quyết định kiến trúc duy nhất: **mô tả video bằng dữ liệu, dựng bằng HTML/CSS, mã hoá theo luồng thành MP4 ngay trên máy người dùng qua WebCodecs, và đặt toàn bộ tài khoản – giấy phép – thanh toán trên một máy chủ dịch vụ.**

Cách chia này cho ba hệ quả trực tiếp. Máy chủ không chạm vào nội dung, nên **chi phí phục vụ tỷ lệ theo số tài khoản chứ không theo số phút video** và dữ liệu không rời khỏi máy người dùng. Mã hoá theo luồng nghĩa là bộ nhớ không tăng theo độ dài video, nên **người dùng tự quyết định video dài bao nhiêu**. Và vì mọi hiệu ứng là hàm của số khung hình chứ không phải của đồng hồ thật, cùng một đầu vào luôn cho ra cùng một file.

### 2.2. Căn cứ phê duyệt

Phân tích đầy đủ tại [Business Case](../00_Pre-project/01_Business_Case_v2.2.md). Tóm tắt:

| Chỉ tiêu                                | Giá trị                    |
| --------------------------------------- | -------------------------- |
| Vốn tiền mặt (Năm 0)                    | 3.500.000 VND              |
| Công sức quy đổi (không chi tiền)       | 450 giờ ≈ 36.000.000 VND   |
| NPV — cơ sở kinh tế đầy đủ (3 năm, r = 12%) | +433.433.000 VND       |
| Thời gian hoàn vốn — cơ sở kinh tế      | ~0,84 năm (danh nghĩa) · ~0,94 năm (chiết khấu) |
| Điểm hoà vốn                            | 28% kịch bản doanh thu cơ sở |
| Đánh giá khả thi                        | Khả thi trên cả 5 khía cạnh: kỹ thuật, pháp lý, vận hành, tiến độ, nguồn lực |

Hai quyết định nền tảng đã được chốt trong Business Case:

- **Kiến trúc: phương án P4** — render client-side bằng WebCodecs kết hợp máy chủ tài khoản và giấy phép, đạt 4,60/5 điểm có trọng số.
- **Doanh thu: mô hình M1** — thuê bao thường niên ba bậc: Miễn phí (3 video/tháng, watermark, 720p), Cá nhân 599.000 VND/năm, Doanh nghiệp 4.900.000 VND/năm.

### 2.3. Liên kết với chiến lược

Dự án phục vụ mục tiêu của Enticy Studios về việc xây dựng dòng doanh thu định kỳ dự báo được với chi phí phục vụ thấp, đồng thời tạo tài sản kỹ thuật (bộ dựng khung hình, pipeline mã hoá theo luồng, mô-đun tài khoản – giấy phép) dùng lại được cho các sản phẩm sau. Chi tiết tại [Benefit Management Plan §3](../00_Pre-project/02_Benefit_Management_Plan_v2.2.md#3-liên-kết-chiến-lược).

---

## 3. Measurable Project Objectives and Success Criteria

### 3.1. Mục tiêu đo được

Mọi mục tiêu dưới đây phải kiểm chứng được bằng phép đo, không bằng đánh giá cảm tính. Cấu hình máy tham chiếu cho các phép đo hiệu năng: **Intel Core i5 thế hệ 10, 8 GB RAM, Chrome bản ổn định mới nhất, Windows 11.**

| ID    | Mục tiêu                       | Chỉ số                                                              | Tiêu chí thành công          | Cách đo | Mốc kiểm |
| ----- | ------------------------------ | -------------------------------------------------------------------- | ---------------------------- | ------- | -------- |
| OB-01 | Xuất được video MP4            | Tỷ lệ thời gian xuất trên thời lượng video, ở 1920×1080 và 30 fps     | ≤ 1,5× thời lượng video trên máy tham chiếu | Kịch bản kiểm thử tự động | M4 |
| OB-02 | **Không giới hạn độ dài video** | Bộ nhớ đỉnh khi xuất video 10 phút ÷ bộ nhớ đỉnh khi xuất video 1 phút | ≤ 1,15 (tăng ≤ 15%)         | Công cụ đo bộ nhớ của trình duyệt | M4 |
| OB-03 | Đầu ra xác định                | Checksum luồng video khi xuất cùng một scene JSON trên 3 máy khác cấu hình | Giống nhau 3/3           | So sánh checksum | M4 |
| OB-04 | Thư viện template              | Số mẫu trình chiếu dùng được                                         | ≥ 5 mẫu                      | Đếm và duyệt thủ công | M3 |
| OB-06 | Độ tin cậy khi xuất            | Tỷ lệ xuất thành công trên 100 lần thử ở các trình duyệt mục tiêu     | ≥ 95%                        | Kịch bản kiểm thử | M6 |
| OB-07 | Hiển thị tiếng Việt            | Tỷ lệ ký tự đúng trên bộ kiểm thử 134 tổ hợp dấu, cả khung ngang và dọc | 100%                       | Bộ kiểm thử hình ảnh | M3 |
| OB-08 | Dễ dùng                        | Thời gian người dùng mới tạo xong video đầu tiên, không có hướng dẫn   | ≤ 10 phút với ≥ 8/10 người   | Kiểm thử người dùng | M6 |
| OB-09 | Không gửi nội dung đi          | Số byte **nội dung người dùng** rời khỏi trình duyệt khi tạo và xuất video | 0 byte                  | Kiểm tra tab Network | M4 |
| OB-10 | Đúng tiến độ                   | Ngày bàn giao thực tế                                                | ≤ 2026-12-06                 | Đối chiếu lịch | M7 |
| OB-11 | Đúng ngân sách và công sức     | Chi tiền mặt thực tế; tổng giờ công thực tế                          | Tiền mặt ≤ 3.500.000 VND; công sức ≤ 495 giờ (sai lệch ≤ 10%) | Đối chiếu bảng chi phí và bảng chấm công | M7 |
| OB-12 | Chất lượng mã nguồn            | Độ phủ kiểm thử của mô-đun bộ dựng, mã hoá và giấy phép              | ≥ 70%                        | Báo cáo độ phủ | M6 |
| OB-13 | **Thực thi thuê bao**          | Tỷ lệ lần xuất video được máy chủ xác thực giấy phép trước khi bắt đầu | 100%; không có giấy phép hợp lệ thì không xuất được | Kịch bản kiểm thử tự động | M5 |
| OB-14 | Hạn mức bậc miễn phí           | Hành vi khi tài khoản miễn phí xuất video thứ 4 trong tháng           | Bị từ chối kèm thông báo rõ; 3 video đầu có watermark và tối đa 720p | Kịch bản kiểm thử | M5 |
| OB-15 | Chu trình thanh toán           | Thời gian từ lúc thanh toán thành công đến lúc giấy phép có hiệu lực  | ≤ 5 phút, tự động, không thao tác tay | Kiểm thử đầu-cuối trên môi trường thật | M6 |
| OB-16 | Thời gian hoạt động của máy chủ giấy phép | Tỷ lệ thời gian máy chủ phản hồi đúng, đo trong 30 ngày sau phát hành | ≥ 99%                | Công cụ giám sát tự động | M7 |

**OB-02 là mục tiêu quan trọng nhất về mặt kỹ thuật.** Nó không thể được chứng minh bằng cách xuất thử một video dài rồi tuyên bố thành công — phải chứng minh **bộ nhớ không tăng theo độ dài**, tức là kiến trúc mã hoá theo luồng thực sự hoạt động.

**OB-13 là mục tiêu quan trọng nhất về mặt kinh doanh.** Không đạt nó thì mô hình doanh thu M1 không tồn tại, bất kể sản phẩm chạy tốt đến đâu.

**Về mã OB-05.** Mã này không còn được sử dụng và không được cấp lại cho mục tiêu khác, để mọi viện dẫn cũ không trỏ nhầm.

### 3.2. Tiêu chí thành công tổng thể

Dự án được coi là **thành công** khi thoả mãn đồng thời:

1. Toàn bộ mục tiêu OB-01 → OB-04 và OB-06 → OB-09 đạt (tiêu chí sản phẩm)
2. OB-13, OB-14, OB-15 đạt (tiêu chí kinh doanh)
3. OB-10 và OB-11 đạt (tiêu chí quản lý)
4. Nhà tài trợ ký biên bản nghiệm thu v1.0
5. Bộ tài liệu quản lý dự án đầy đủ theo các nhóm tiến trình, được giảng viên hướng dẫn chấp nhận

Dự án được coi là **thất bại một phần** nếu OB-10 hoặc OB-11 không đạt nhưng sản phẩm vẫn nghiệm thu được. Dự án được coi là **thất bại** nếu OB-01 hoặc OB-13 không đạt — vì khi đó sản phẩm hoặc không thực hiện được chức năng cốt lõi, hoặc không thu được tiền.

---

## 4. High-level Requirements

### 4.1. Yêu cầu chức năng

| ID    | Yêu cầu                                                                 | Độ ưu tiên |
| ----- | ----------------------------------------------------------------------- | ---------- |
| RQ-01 | Định nghĩa và xác thực được cấu trúc JSON mô tả cảnh (fps, kích thước, danh sách cảnh, thời lượng, hiệu ứng) | Bắt buộc |
| RQ-02 | Bộ dựng nhận số thứ tự khung hình và trả về trạng thái giao diện tại đúng khung hình đó | Bắt buộc |
| RQ-03 | Xuất video MP4 bằng WebCodecs `VideoEncoder` **theo luồng**: mã hoá, ghép và ghi ra file theo từng phần, giải phóng bộ nhớ ngay sau mỗi khung | Bắt buộc |
| RQ-04 | Thanh tiến trình theo khung hình, ước lượng thời gian còn lại, cho phép tạm dừng và huỷ | Bắt buộc |
| RQ-05 | Xem trước video trong trình duyệt trước khi xuất                         | Bắt buộc |
| RQ-06 | Thư viện ít nhất 5 mẫu trình chiếu (tiêu đề, danh sách, ảnh + chữ, so sánh, kết thúc) | Bắt buộc |
| RQ-07 | Nhập nội dung bằng biểu mẫu, không bắt người dùng viết JSON thủ công     | Bắt buộc |
| RQ-08 | Lưu và mở lại dự án dưới dạng file trên máy người dùng                    | Bắt buộc |
| RQ-09 | Chèn ảnh từ máy người dùng vào cảnh                                       | Bắt buộc |
| RQ-10 | Phát hiện trình duyệt không hỗ trợ WebCodecs hoặc không hỗ trợ ghi file theo luồng, **và phát hiện mất kết nối Internet**, thông báo rõ ràng kèm gợi ý | Bắt buộc |
| RQ-12 | Hiệu ứng chuyển cảnh vào/ra (fade, fade-up)                              | Nên có |
| RQ-13 | **Đăng ký, đăng nhập và quản lý tài khoản người dùng**                   | Bắt buộc |
| RQ-14 | **Máy chủ cấp và kiểm tra giấy phép; ứng dụng phải xác thực thành công trước khi bắt đầu mỗi lần xuất video** | Bắt buộc |
| RQ-15 | **Đếm hạn mức bậc miễn phí (3 video/tháng); áp watermark và trần độ phân giải 720p cho bậc miễn phí** | Bắt buộc |
| RQ-16 | **Mua và gia hạn thuê bao qua cổng thanh toán nội địa; xuất hoá đơn VAT cho bậc Doanh nghiệp** | Bắt buộc |
| RQ-17 | **Trang quản lý thuê bao**: xem bậc, hạn dùng, lịch sử hoá đơn; quản lý 5 chỗ cho bậc Doanh nghiệp | Bắt buộc |

> **RQ-14 là điều kiện sống còn của mô hình doanh thu.** Không có xác thực giấy phép ở tầng máy chủ thì mọi quyền lợi trả phí đều bị vô hiệu hoá trong vài phút bằng công cụ nhà phát triển, và mô hình M1 trong Business Case không triển khai được. Đây là lý do RQ-14 nằm ở mức *bắt buộc* dù không phải chức năng người dùng cuối trực tiếp yêu cầu.

> **Đánh đổi đã chấp nhận của RQ-14.** Xác thực bắt buộc trực tuyến nghĩa là **mất kết nối Internet thì không xuất được video**. Quyết định này được chọn có chủ đích để hạn mức bậc miễn phí đếm được chính xác. RQ-10 phải xử lý tình huống mất kết nối một cách rõ ràng, và việc xác thực phải diễn ra **trước** khi bắt đầu mã hoá để không làm hỏng một lần xuất đang chạy dở.

> **Về mã RQ-11.** Mã này không còn được sử dụng và không được cấp lại.

### 4.2. Yêu cầu phi chức năng

| ID    | Yêu cầu                                                                  | Ngưỡng |
| ----- | ------------------------------------------------------------------------ | ------ |
| NF-01 | Hiệu năng xuất video                                                     | ≤ 1,5× thời lượng video trên máy tham chiếu |
| NF-02 | **Bộ nhớ đỉnh không phụ thuộc độ dài video**                             | Tăng ≤ 15% khi độ dài tăng 10 lần |
| NF-03 | Tính riêng tư — không truyền **nội dung** người dùng ra ngoài             | 0 byte nội dung |
| NF-04 | Tính xác định của đầu ra                                                 | 100% giống nhau giữa các máy |
| NF-05 | Hỗ trợ tiếng Việt đầy đủ                                                 | 100% ký tự đúng |
| NF-06 | Chạy được mà không cần cài đặt thêm phần mềm                             | Chỉ cần trình duyệt; cần kết nối Internet khi xuất video |
| NF-07 | Giấy phép mọi thư viện phụ thuộc                                         | MIT / Apache-2.0 / BSD / SIL OFL — cấm GPL / AGPL |
| NF-08 | Giấy phép mọi tài sản đồ hoạ trong mẫu đi kèm                            | Cho phép phân phối lại trong sản phẩm phái sinh |
| NF-09 | **Thời gian phản hồi của máy chủ giấy phép**                             | ≤ 1 giây ở phân vị 95 |
| NF-10 | **Thời gian hoạt động của máy chủ giấy phép**                            | ≥ 99% mỗi tháng |
| NF-11 | **An toàn dữ liệu tài khoản**                                            | Mật khẩu lưu dạng băm (bcrypt hoặc argon2); **không lưu thông tin thẻ trên hệ thống của dự án** |

### 4.3. Ghi chú

Đây là yêu cầu **mức cao**. Việc phân rã chi tiết, xác định tiêu chí chấp nhận cho từng yêu cầu, và truy vết yêu cầu sẽ thực hiện ở nhóm tiến trình Planning, kết quả là tài liệu Requirements Specification và Requirements Traceability Matrix.

---

## 5. High-level Project Description and Boundaries

### 5.1. Mô tả sản phẩm

PromptVideo gồm hai phần, phát hành cùng nhau nhưng chạy ở hai nơi khác nhau.

**Ứng dụng trình duyệt.** Người dùng nhập nội dung qua biểu mẫu; ứng dụng sinh ra một cấu trúc JSON mô tả cảnh; bộ dựng chuyển JSON thành trạng thái giao diện cho từng khung hình; mỗi khung được vẽ lên canvas, đưa vào bộ mã hoá của WebCodecs, ghép và **ghi dần ra file trên đĩa**.

```
Biểu mẫu  →  Scene JSON  →  Bộ dựng theo khung hình  →  Canvas  →  WebCodecs  →  Ghi ra file
                                     └──────── lặp theo từng khung, giải phóng bộ nhớ ────────┘
```

**Máy chủ dịch vụ.** Giữ tài khoản, giấy phép, hạn mức và thanh toán. Trước mỗi lần xuất, ứng dụng gửi một yêu cầu xác thực và nhận về quyền xuất kèm cấu hình bậc (có watermark hay không, trần độ phân giải bao nhiêu).

```
Ứng dụng  ──(token, không kèm nội dung)──→  Máy chủ giấy phép
          ←──(quyền xuất + cấu hình bậc)──
```

**Ranh giới giữa hai phần là ranh giới sản phẩm, không phải chi tiết triển khai.** Máy chủ biết *ai* xuất và *bao nhiêu lần*; nó không bao giờ biết *nội dung gì*. Đây là điều làm cho OB-09 vẫn đạt được (0 byte **nội dung** rời khỏi trình duyệt) trong khi thuê bao vẫn thực thi được.

**Scene JSON là hợp đồng giữa các phần của hệ thống.** Giao diện sinh ra nó, bộ dựng đọc nó, thư viện mẫu quy định giá trị hợp lệ. Mọi thay đổi định dạng này phải qua kiểm soát thay đổi.

### 5.2. Ranh giới phạm vi

| ✅ Trong phạm vi v1.0 | ❌ Ngoài phạm vi v1.0 (chuyển sang lộ trình sau) |
| -------------------- | ---------------------------------------------- |
| Định dạng Scene JSON và bộ xác thực | Sinh nội dung cảnh tự động bằng AI từ văn bản dài |
| Bộ dựng theo từng khung hình | Chèn nhạc nền và xử lý âm thanh |
| Xuất MP4 theo luồng, không giới hạn độ dài | Xuất file phụ đề |
| Xem trước trong trình duyệt | Ghép chữ và ảnh lên video nền có sẵn |
| Thư viện ≥ 5 mẫu trình chiếu | Khung hình dọc cho mạng xã hội |
| Nhập nội dung bằng biểu mẫu | Cộng tác nhiều người theo thời gian thực |
| Lưu và mở lại dự án (file cục bộ) | **Lưu dự án trên đám mây và đồng bộ giữa các máy** |
| Chèn ảnh từ máy người dùng | **Render video trên máy chủ** |
| **Tài khoản, đăng nhập, quản lý người dùng (RQ-13)** | Đăng nhập bằng tài khoản mạng xã hội |
| **Máy chủ cấp và kiểm giấy phép (RQ-14)** | Giấy phép dùng offline dài hạn |
| **Hạn mức bậc miễn phí, watermark, trần 720p (RQ-15)** | Bậc giá theo dung lượng hoặc theo phút video |
| **Thanh toán và gia hạn thuê bao (RQ-16, RQ-17)** | Thanh toán quốc tế, nhiều loại tiền tệ |
| Khung hình ngang 1920×1080, 30 fps | Độ phân giải 4K, tốc độ 60 fps |
| Giao diện tiếng Việt | Đa ngôn ngữ giao diện |

**Lý do cắt gọn.** 15 tuần với 3 người bán thời gian cho tổng 450 giờ, trong đó 60 giờ dành cho hệ thống tài khoản – giấy phép – thanh toán. Các hạng mục bị cắt đều là mở rộng trên nền kiến trúc lõi — làm sau được, nhưng nếu làm trước thì kiến trúc lõi không kịp hoàn thiện. Đây là quyết định có chủ đích, không phải bỏ sót.

**Ranh giới giữa dự án và hoạt động kinh doanh.** Dự án bàn giao *hệ thống* thu phí đang chạy được. Việc *vận hành* máy chủ, *bán hàng*, *hỗ trợ khách hàng* và *đối soát thanh toán* trong ba năm tiếp theo là hoạt động kinh doanh của nhà tài trợ sau khi dự án đóng, không nằm trong 450 giờ này — trừ 30 ngày bảo hành lỗi theo Hợp đồng §7.

### 5.3. Sản phẩm bàn giao

| ID    | Sản phẩm bàn giao                                          | Mốc |
| ----- | ---------------------------------------------------------- | --- |
| DL-01 | Bộ tài liệu nhóm Initiating                                | M0  |
| DL-02 | Tài liệu đặc tả yêu cầu, định nghĩa Scene JSON v1, ma trận năng lực trình duyệt | M1 |
| DL-03 | Tài liệu thiết kế kiến trúc (gồm mô hình tài khoản – giấy phép), thư viện mẫu, **nguyên mẫu mã hoá theo luồng** | M2 |
| DL-04 | Bộ dựng theo khung hình, chức năng xem trước, bộ ghi file    | M3  |
| DL-05 | Chức năng xuất MP4 theo luồng                               | M4  |
| DL-06 | Trình soạn thảo bằng biểu mẫu, lưu/mở dự án, kiểm giấy phép và hạn mức khi xuất | M5 |
| DL-07 | Thanh toán và trang quản lý thuê bao, báo cáo kiểm thử, tài liệu hướng dẫn người dùng, **tài liệu vận hành máy chủ** | M6 |
| DL-08 | Sản phẩm v1.0 đã triển khai + biên bản nghiệm thu + báo cáo tổng kết | M7 |

### 5.4. Giả định và ràng buộc

Giả định và ràng buộc chi phối phạm vi được ghi đầy đủ tại [Assumption Log](./02_Assumption_Log_v2.0.md). Những điều quan trọng nhất: vốn tiền mặt 3.500.000 VND và trần chi phí hạ tầng (CT-02, CT-03), đội 3 người bán thời gian với tổng 450 giờ (CT-04), mã nguồn độc quyền và mọi quyền lợi trả phí thực thi ở tầng máy chủ (CT-08), người dùng phải có trình duyệt hỗ trợ WebCodecs (AS-10) và kết nối Internet khi xuất video (AS-45).

---

## 6. High-level Risks

Mục này gán **khả năng, tác động và chủ sở hữu** cho từng rủi ro — phần Business Case §5 không có. Nội dung ứng phó chi tiết ghi tại [Business Case §5](../00_Pre-project/01_Business_Case_v2.2.md#5-khả-thi-rủi-ro-và-điều-kiện-phê-duyệt); dưới đây chỉ nêu biện pháp then chốt.

| ID    | Rủi ro                                                        | Khả năng | Tác động | Mức        | Chủ sở hữu | Biện pháp then chốt |
| ----- | ------------------------------------------------------------- | -------- | -------- | ---------- | ---------- | ------------------- |
| RS-01 | Nguyên mẫu mã hoá theo luồng không đạt trong thời gian dành cho M2–M4 | Trung bình | Cao | **Cao** | Trưởng nhóm kỹ thuật | Nguyên mẫu ngay tuần 4; giảm phạm vi nếu thất bại |
| RS-02 | Một thành viên rút lui hoặc không đủ 10 giờ/tuần               | Trung bình | Cao    | **Cao**    | Giám đốc dự án | Cam kết bằng văn bản tại M0 và mỗi 2 tuần |
| RS-09 | **Máy chủ giấy phép ngừng hoạt động** — người dùng trả phí không xuất được video | Trung bình | Cao | **Cao** | Trưởng nhóm kỹ thuật | Giám sát tự động; quy trình khôi phục diễn tập tại M6; NF-10 ≥ 99%/tháng |
| RS-11 | Tỷ lệ gia hạn thấp làm doanh thu Năm 2–3 sụp đổ                | Trung bình | Cao    | **Cao**    | Nhà tài trợ | Theo dõi MT-15 và MT-16; điểm quyết định hết Quý 4 Năm 1 |
| RS-10 | Cổng thanh toán không duyệt hồ sơ kịp mốc M6                  | Trung bình | Cao    | **Trung bình** | Nhà tài trợ | Nộp hồ sơ tại M2 chứ không đợi tới M6 |
| RS-03 | Ghi file theo luồng không hoạt động trên Firefox/Safari        | Cao      | Trung bình | **Trung bình** | Trưởng nhóm kỹ thuật | Phương án dự phòng OPFS; công bố rõ giới hạn theo trình duyệt (RQ-10) |
| RS-04 | Phạm vi bị nới rộng trong quá trình làm                       | Trung bình | Cao    | **Trung bình** | Giám đốc dự án | Với 450 giờ và một nhánh máy chủ mới, nới phạm vi là rủi ro nghiêm trọng — mọi thay đổi phải qua quy trình kiểm soát thay đổi (mục 10.3) |
| RS-05 | Không mua được tài sản đồ hoạ có quyền phân phối lại trong ngân sách 700.000 VND | Trung bình | Trung bình | **Trung bình** | Trưởng nhóm sản phẩm | Ưu tiên nguồn CC0; nếu không đủ, làm mẫu tối giản không dùng ảnh |
| RS-12 | Rò rỉ dữ liệu tài khoản người dùng                            | Thấp     | Cao      | **Trung bình** | Trưởng nhóm kỹ thuật | Thu thập dữ liệu ở mức tối thiểu (NF-11); rà soát an toàn tại M6 |
| RS-06 | Doanh thu dưới ngưỡng hoà vốn 28% kịch bản cơ sở              | Trung bình | Trung bình | Trung bình | Nhà tài trợ | Rà soát hàng quý; điểm quyết định hết Quý 4 Năm 1 |
| RS-07 | Vấn đề bản quyền định dạng mã hoá phát sinh khi thương mại hoá | Thấp     | Cao      | Trung bình | Nhà tài trợ | Xác minh trước M4; dự phòng codec khác |

Danh sách này ở mức khởi tạo. Sổ đăng ký rủi ro đầy đủ sẽ được lập ở nhóm tiến trình Planning. Mã RS-08 không còn được sử dụng và không được cấp lại.

---

## 7. Summary Milestone Schedule

| Mốc | Tên mốc                                        | Tuần   | Ngày hoàn thành | Sản phẩm bàn giao | Tiêu chí hoàn thành |
| --- | ---------------------------------------------- | ------ | --------------- | ----------------- | ------------------- |
| M0  | Khởi động dự án và phê duyệt Charter           | 1      | 2026-08-30      | DL-01             | Nhà tài trợ ký Charter; 3 thành viên xác nhận cam kết thời gian bằng văn bản |
| M1  | Đặc tả yêu cầu và Scene JSON v1                | 2–3    | 2026-09-13      | DL-02             | Định dạng JSON được chốt; baseline MT-06 đã đo |
| M2  | Thiết kế kiến trúc, thư viện mẫu, nguyên mẫu, mô hình tài khoản | 4–5 | 2026-09-27 | DL-03 | **Nguyên mẫu chứng minh bộ nhớ không tăng theo độ dài video**; ≥ 5 mẫu được duyệt; **hồ sơ cổng thanh toán đã nộp** |
| M3  | Bộ dựng theo khung hình, xem trước, bộ ghi file  | 6–8    | 2026-10-18      | DL-04             | OB-04, OB-07 đạt; xem trước chạy đúng khung hình |
| M4  | Xuất MP4 theo luồng                            | 9–10   | 2026-11-01      | DL-05             | OB-01, OB-02, OB-03, OB-09 đạt |
| M5  | Trình soạn thảo, lưu/mở dự án, giấy phép và hạn mức | 11–12 | 2026-11-15    | DL-06             | RQ-07, RQ-08, RQ-09 hoạt động đầy đủ; **OB-13 và OB-14 đạt** |
| M6  | Thanh toán, quản lý thuê bao, kiểm thử, tài liệu | 13–14 | 2026-11-29      | DL-07             | **OB-15 đạt**; OB-06, OB-08, OB-12 đạt; quy trình khôi phục máy chủ đã diễn tập |
| M7  | Nghiệm thu và bàn giao v1.0                    | 15     | 2026-12-06      | DL-08             | Biên bản nghiệm thu được ký; OB-16 bắt đầu đo |

**Đường găng** đi qua M1 → M2 → M3 → M4 → M5. Chậm ở bất kỳ mốc nào cũng đẩy lùi ngày bàn giao: M3 phụ thuộc định dạng dữ liệu chốt ở M1 và kiến trúc chốt ở M2; M4 phụ thuộc bộ dựng và bộ ghi file ở M3; và M5 phụ thuộc chức năng xuất video ở M4 vì **không thể kiểm giấy phép cho một thao tác chưa tồn tại**.

**Biên an toàn bằng không.** 15 tuần đúng bằng độ dài học kỳ, và 450 giờ là một ước lượng eo hẹp cho khối lượng này. Đây là lý do các hạng mục ngoài phạm vi ở mục 5.2 bị cắt ngay từ đầu, và là lý do M2 có tiêu chí hoàn thành nghiêm ngặt: **nếu nguyên mẫu không đạt ở M2, phương án là giảm phạm vi ngay, không lùi ngày bàn giao.**

**Hồ sơ cổng thanh toán nộp ở M2 chứ không ở M6.** Việc duyệt hồ sơ nằm ngoài tầm kiểm soát của đội và có thể mất tới 4 tuần (AS-43). Nộp sớm 8 tuần là cách duy nhất để rủi ro RS-10 không rơi vào đúng mốc cuối.

---

## 8. Summary Budget

### 8.1. Nguyên tắc

Dự án có vốn tiền mặt nhỏ; chi phí chủ yếu là công sức của chính đội. Ngân sách vì vậy được duyệt trên **hai cơ sở tách biệt**: tiền mặt và công sức. Vượt cơ sở nào cũng là vượt ngân sách.

### 8.2. Ngân sách tiền mặt (Năm 0)

Cách tính từng hạng mục ghi tại [Benefit Management Plan §4](../00_Pre-project/02_Benefit_Management_Plan_v2.2.md#4-thẩm-định-tài-chính).

| Hạng mục                                       | Thành tiền (VND) | Tỷ trọng |
| ---------------------------------------------- | ---------------: | -------: |
| Phí khởi tạo và tích hợp cổng thanh toán (AS-43) |      1.500.000 |   42,9%  |
| Tài sản đồ hoạ có bản quyền cho 5 mẫu đi kèm   |          700.000 |   20,0%  |
| Máy chủ ảo và chứng chỉ (4 tháng trong dự án)  |          600.000 |   17,1%  |
| Tên miền năm đầu                               |          300.000 |    8,6%  |
| Font chữ (SIL OFL)                             |                0 |    0,0%  |
| Dự phòng                                       |          400.000 |   11,4%  |
| **TỔNG NGÂN SÁCH TIỀN MẶT**                    |   **3.500.000** | **100%** |

### 8.3. Ngân sách công sức

| Hạng mục            | Cách tính                                    | Số giờ | Quy đổi (VND) |
| ------------------- | -------------------------------------------- | -----: | ------------: |
| Công sức phát triển | 3 người × 15 tuần × 10 giờ/tuần              | **450** |    36.000.000 |

Con số này khớp với [Benefit Management Plan §4](../00_Pre-project/02_Benefit_Management_Plan_v2.2.md#4-thẩm-định-tài-chính). Đơn giá quy đổi 80.000 VND/giờ là **chi phí cơ hội, không phải tiền chi ra**.

### 8.4. Phân bổ công sức theo mốc

| Mốc      | Tuần   | Tỷ lệ  | Số giờ  | Giờ/tuần | Ghi chú |
| -------- | ------ | -----: | ------: | -------: | ------- |
| M0       | 1      |   5,1% |      23 |       23 | Tài liệu khởi tạo, xác nhận cam kết |
| M1       | 2–3    |  10,7% |      48 |       24 | Đặc tả yêu cầu, Scene JSON, năng lực trình duyệt, đo baseline |
| M2       | 4–5    |  14,9% |      67 |     33,5 | Thiết kế + nguyên mẫu kỹ thuật + mô hình tài khoản — mốc quyết định |
| M3       | 6–8    |  22,4% |     101 |     33,7 | Bộ dựng khung hình — hạng mục nặng nhất |
| M4       | 9–10   |  17,3% |      78 |       39 | Mã hoá theo luồng — **tuần căng nhất của dự án** |
| M5       | 11–12  |  16,4% |      74 |       37 | Trình soạn thảo, lưu/mở, giấy phép, hạn mức |
| M6       | 13–14  |  10,0% |      45 |     22,5 | Thanh toán, quản lý thuê bao, kiểm thử, tài liệu |
| M7       | 15     |   3,1% |      14 |       14 | Nghiệm thu, bàn giao |
| **Cộng** | **15** | **100%** | **450** | **30** | |

**Đọc cột "Giờ/tuần" cùng với năng lực đội.** Năng lực danh nghĩa là 3 người × 10 giờ/tuần = **30 giờ/tuần**, và tổng 450 giờ trên 15 tuần đúng bằng con số đó. Nghĩa là **mọi tuần đều phải chạy ở 100% năng lực** — không có tuần nào để bù. Bốn mốc M2 → M5 nằm trên hoặc trên mức 30 giờ/tuần, và phần vượt đó chỉ được bù bằng phần dưới mức ở M0, M1, M6 và M7. Đây là hình thức cụ thể của "biên an toàn bằng không" ở mục 7, và là lý do ngưỡng cảnh báo ở mục 8.5 áp ở cấp mốc chứ không đợi tổng kết cuối kỳ.

### 8.5. Quy tắc sử dụng dự phòng và ngưỡng cảnh báo

| Nội dung | Quy tắc |
| -------- | ------- |
| Dự phòng tiền mặt 400.000 VND | Do Giám đốc dự án quản lý. Dùng hết phải báo cáo Nhà tài trợ. |
| Vượt ngân sách tiền mặt 3.500.000 VND | Phải có phê duyệt của Nhà tài trợ |
| Vượt 495 giờ công (110% của 450) | Phải có phê duyệt của Nhà tài trợ và kèm phương án giảm phạm vi |
| Một mốc vượt 120% số giờ phân bổ | Giám đốc dự án phải báo cáo ngay ở kỳ họp tuần, không đợi đến mốc sau |
| Chi phí hạ tầng vượt 150.000 VND/tháng trong Năm 0 | Phải có phê duyệt của Nhà tài trợ (CT-03) |

---

## 9. Stakeholder List

Dự án có **9 bên liên quan, mã SH-01 → SH-09**, chia ba nhóm:

- **Nội bộ (SH-01 → SH-04)** — Nhà tài trợ, Giám đốc dự án, Trưởng nhóm kỹ thuật, Trưởng nhóm sản phẩm. Đội chỉ có 3 người nên **mỗi người kiêm nhiều vai trò**; danh sách liệt kê theo vai trò chứ không theo người.
- **Bên ngoài — quyền mạnh (SH-05, SH-06)** — Giảng viên hướng dẫn và khách hàng bậc Doanh nghiệp.
- **Bên ngoài — quyền trung bình (SH-07 → SH-09)** — khách hàng bậc Cá nhân (giáo viên, người sáng tạo nội dung) và nhà cung cấp cổng thanh toán.

Danh sách đầy đủ kèm phân loại, mức quyền, mức quan tâm, kỳ vọng và kênh liên lạc nằm tại [Stakeholder Register](./03_Stakeholder_Register_v1.0.md). Kế hoạch tham gia và kế hoạch truyền thông chi tiết sẽ được lập ở nhóm tiến trình Planning.

---

## 10. Project Approval Requirements

### 10.1. Điều kiện nghiệm thu dự án

Dự án được nghiệm thu khi Nhà tài trợ xác nhận đủ các điều kiện sau:

| # | Điều kiện                                                             | Người xác nhận |
| - | --------------------------------------------------------------------- | -------------- |
| 1 | Toàn bộ mục tiêu OB-01 → OB-04 và OB-06 → OB-09 đạt, có bằng chứng đo lường | Trưởng nhóm kỹ thuật |
| 2 | **OB-13, OB-14, OB-15 đạt** — hệ thống thu tiền hoạt động đầu-cuối trên môi trường thật | Giám đốc dự án |
| 3 | Toàn bộ yêu cầu bắt buộc trong mục 4.1 được triển khai và kiểm thử     | Trưởng nhóm sản phẩm |
| 4 | Sản phẩm v1.0 đã triển khai và truy cập được công khai                 | Giám đốc dự án |
| 5 | **Chính sách quyền riêng tư và Điều khoản sử dụng đã ban hành**        | Nhà tài trợ |
| 6 | Tài liệu hướng dẫn người dùng, báo cáo kiểm thử và **tài liệu vận hành máy chủ** đã bàn giao | Giám đốc dự án |
| 7 | Chi tiền mặt và tổng giờ công không vượt ngưỡng tại mục 8.5            | Giám đốc dự án |
| 8 | Bộ tài liệu quản lý dự án đầy đủ theo các nhóm tiến trình             | Giảng viên hướng dẫn |
| 9 | Danh mục lợi ích được bàn giao cho Nhà tài trợ, có biên bản            | Nhà tài trợ |

### 10.2. Ai ký nghiệm thu

Nghiệm thu cuối cùng do **Nhà tài trợ (SH-01)** ký. Giảng viên hướng dẫn (SH-05) đánh giá độc lập về mặt học thuật; đánh giá này không thay thế nghiệm thu của Nhà tài trợ nhưng là điều kiện cần cho điều kiện số 8.

### 10.3. Kiểm soát thay đổi

| Loại thay đổi                                    | Người phê duyệt          | Thời hạn phản hồi |
| ------------------------------------------------ | ------------------------ | ----------------- |
| Thay đổi không ảnh hưởng phạm vi, tiến độ, công sức | Giám đốc dự án         | 1 ngày làm việc   |
| Chi tiền mặt trong khoản dự phòng 400.000 VND    | Giám đốc dự án           | 2 ngày làm việc   |
| Thay đổi phạm vi, hoặc phát sinh công sức > 10%   | Nhà tài trợ              | 5 ngày làm việc   |
| Dời ngày bàn giao cuối (2026-12-06)              | Nhà tài trợ              | 5 ngày làm việc   |
| Thay đổi định dạng Scene JSON sau M5             | Nhà tài trợ              | 5 ngày làm việc   |
| **Thay đổi mức giá hoặc cấu trúc bậc thuê bao**  | Nhà tài trợ              | 5 ngày làm việc   |

Mọi yêu cầu thay đổi phải lập thành văn bản và ghi vào Change Log. Thay đổi được thực hiện trước khi phê duyệt là vi phạm quy trình.

---

## 11. Assigned Project Manager and Authority Level

### 11.1. Bổ nhiệm

| Thuộc tính        | Nội dung           |
| ----------------- | ------------------ |
| Họ và tên         | Nguyễn Thế Chiến    |
| Chức danh         | Giám đốc dự án (Project Manager) |
| Ngày bổ nhiệm     | 2026-08-24         |
| Người bổ nhiệm    | Nhà tài trợ (SH-01) |
| Thời gian dành cho dự án | 10 giờ/tuần — kiêm cả vai trò phát triển |

### 11.2. Thẩm quyền

| Lĩnh vực       | Được quyền                                                                 | Phải xin phê duyệt Nhà tài trợ |
| -------------- | -------------------------------------------------------------------------- | ------------------------------ |
| Nhân sự        | Phân công công việc trong đội, điều chỉnh phân bổ giờ công giữa các mốc      | Thay đổi thành phần đội |
| Tiền mặt       | Chi trong ngân sách 3.500.000 VND đã duyệt, gồm cả khoản dự phòng 400.000 VND | Mọi khoản vượt 3.500.000 VND |
| Công sức       | Điều chỉnh phân bổ giờ giữa các mốc                                          | Tổng công sức vượt 495 giờ |
| Phạm vi        | Quyết định chi tiết triển khai trong phạm vi đã chốt                         | Mọi thay đổi ranh giới phạm vi (mục 5.2) |
| Tiến độ        | Điều chỉnh lịch nội bộ giữa các mốc, miễn không dời ngày bàn giao cuối        | Dời mốc M7 |
| Kỹ thuật       | Chọn công nghệ và kiến trúc, cùng Trưởng nhóm kỹ thuật                       | Đổi công nghệ lõi (ví dụ bỏ WebCodecs, chuyển render lên máy chủ) |
| Sản phẩm       | Quyết định trải nghiệm và luồng thao tác trong bậc đã chốt                   | **Mức giá, cấu trúc bậc thuê bao, hạn mức bậc miễn phí** |
| Nhà cung cấp   | Chọn công cụ và dịch vụ miễn phí; chọn nhà cung cấp hạ tầng trong trần CT-03 | **Ký hợp đồng cổng thanh toán**; mọi hợp đồng có trả phí khác |
| Đối ngoại      | Trao đổi với người dùng cuối để thu thập yêu cầu                             | Cam kết chính thức với bên ngoài |

**Quyền đặc biệt khi kích hoạt phương án dự phòng.** Nếu nguyên mẫu tại M2 không đạt, Giám đốc dự án được quyền kích hoạt ngay phương án giảm phạm vi đã định trước (giảm xuống 3 mẫu, bỏ chức năng lưu/mở dự án) mà **không cần chờ phê duyệt**, với điều kiện báo cáo Nhà tài trợ trong 24 giờ. Quy định này tồn tại vì với biên an toàn bằng không, chờ phê duyệt 5 ngày có thể làm mất luôn cơ hội cứu tiến độ.

**Giới hạn của quyền này.** Phương án giảm phạm vi **không được chạm vào RQ-13 → RQ-17**. Cắt một mẫu trình chiếu là mất một tính năng; cắt cơ chế thu tiền là xoá bỏ mô hình doanh thu, và đó là quyết định chỉ Nhà tài trợ mới có thẩm quyền.

### 11.3. Trách nhiệm báo cáo

| Báo cáo                  | Tần suất       | Gửi cho              |
| ------------------------ | -------------- | -------------------- |
| Báo cáo tiến độ tuần (gồm số giờ công thực tế) | Hàng tuần | Nhà tài trợ, đội dự án |
| Báo cáo tại mốc          | Tại mỗi mốc M0–M7 | Nhà tài trợ, giảng viên hướng dẫn |
| Báo cáo sự cố            | Trong 24 giờ kể từ khi phát hiện | Nhà tài trợ |
| Báo cáo tổng kết dự án   | Tuần 15        | Nhà tài trợ, giảng viên hướng dẫn |

---

## 12. Name and Authority of the Sponsor

### 12.1. Nhà tài trợ

| Thuộc tính     | Nội dung                       |
| -------------- | ------------------------------ |
| Họ và tên      | Phạm Quang Anh                |
| Chức danh      | Nhà sáng lập kiêm Giám đốc điều hành — Enticy Studios |
| Đơn vị         | Enticy Studios (bối cảnh giả định) |
| Liên hệ        | `<<Email / điện thoại>>`       |

### 12.2. Thẩm quyền của Nhà tài trợ

Nhà tài trợ là người có thẩm quyền cao nhất của dự án và giữ các quyền sau:

1. **Phê duyệt Project Charter** — dự án chỉ chính thức tồn tại sau khi tài liệu này được ký.
2. **Cấp và thu hồi ngân sách** 3.500.000 VND tiền mặt và 450 giờ công.
3. **Phê duyệt thay đổi phạm vi, tiến độ, ngân sách** vượt thẩm quyền của Giám đốc dự án theo mục 10.3.
4. **Quyết định về mức giá, cấu trúc bậc thuê bao và chính sách giấy phép sản phẩm** — đây là quyền riêng của Nhà tài trợ, Giám đốc dự án không được thay đổi.
5. **Ký hợp đồng với cổng thanh toán** và chịu trách nhiệm pháp lý về hoạt động thu tiền.
6. **Bổ nhiệm và thay thế Giám đốc dự án.**
7. **Giải quyết vấn đề vượt cấp** mà Giám đốc dự án không xử lý được.
8. **Ký nghiệm thu sản phẩm cuối cùng** theo mục 10.2.
9. **Quyết định dừng dự án** bất kỳ lúc nào nếu căn cứ kinh doanh không còn đứng vững.
10. **Chịu trách nhiệm vận hành máy chủ dịch vụ và theo dõi lợi ích trong 3 năm sau khi dự án đóng**, theo [Benefit Management Plan §6](../00_Pre-project/02_Benefit_Management_Plan_v2.2.md#6-chủ-sở-hữu-lợi-ích). Nghĩa vụ này gồm giữ máy chủ hoạt động, xử lý thanh toán, hỗ trợ khách hàng và gia hạn thuê bao — hoạt động nằm ngoài phạm vi dự án.

### 12.3. Chữ ký phê duyệt

Bằng việc ký dưới đây, Nhà tài trợ chính thức uỷ quyền khởi động dự án, xác nhận sự tồn tại của dự án, trao cho Giám đốc dự án thẩm quyền sử dụng nguồn lực của tổ chức để thực hiện, và **xác nhận tiếp nhận nghĩa vụ vận hành dịch vụ sau bàn giao theo mục 12.2 khoản 10**.

| Vai trò            | Họ và tên       | Chữ ký | Ngày |
| ------------------ | --------------- | ------ | ---- |
| Nhà tài trợ        | Phạm Quang Anh |        |      |
| Giám đốc dự án     | Nguyễn Thế Chiến |        |      |
| Giảng viên hướng dẫn (xác nhận học thuật) | Thầy Nguyễn Đình Quảng |  |  |

---

*Tài liệu liên quan: [Business Case](../00_Pre-project/01_Business_Case_v2.2.md) · [Benefit Management Plan](../00_Pre-project/02_Benefit_Management_Plan_v2.2.md) · [Assumption Log](./02_Assumption_Log_v2.0.md)*
