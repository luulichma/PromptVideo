<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                     |                                |
| ------------------- | ------------------------------ |
| **Nhóm tiến trình** | Initiating                     |
| **Tên tài liệu**    | Project Charter                |
| **Phiên bản**       | Ver. 1.0                       |
| **Nhóm thực hiện**  | `<<Tên nhóm>>`                 |
| **Ngày phát hành**  | 2026-08-20                     |
| **Trạng thái**      | Draft — chờ phê duyệt          |

<div style="page-break-after: always"></div>

<!-- ======================= TRANG 2 — XÁC NHẬN & LỊCH SỬ ======================= -->

## Xác nhận

| Người tạo       | Người kiểm tra  | Người xác nhận  |
| --------------- | --------------- | --------------- |
| `<<Họ và tên>>` | `<<Họ và tên>>` | `<<Họ và tên>>` |
|                 | `<<Họ và tên>>` | `<<Họ và tên>>` |
|                 | `<<Họ và tên>>` | `<<Họ và tên>>` |

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| -- | --------- | ------------- | -------------- | ----------------- | --------------- | --------------- |
| 1  | Ver 1.0   | 2026-08-20    | Tạo mới        | Khởi tạo Project Charter theo 12 mục chuẩn: mục tiêu, phạm vi, mốc tiến độ, ngân sách, bên liên quan, thẩm quyền | `<<Họ và tên>>` | `<<Họ và tên>>` |

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

> **Lưu ý về bối cảnh.** Tài liệu lập trên bối cảnh doanh nghiệp giả định (Enticy Studios) phục vụ môn Quản lý dự án phần mềm. Số liệu tài chính và quy mô người dùng là giả định, xem [Business Case §9](./01_Business_Case.md#9-phụ-lục-a--nguồn-và-giả-định-số-liệu).

---

## 1. Project Title

**PromptVideo — Công cụ tạo video trình chiếu từ văn bản và hình ảnh, chạy hoàn toàn trong trình duyệt.**

| Thuộc tính            | Giá trị                                    |
| --------------------- | ------------------------------------------ |
| Mã dự án              | `<<Mã dự án>>`                             |
| Tên viết tắt          | PromptVideo                                |
| Phiên bản mục tiêu    | v1.0                                       |
| Tổ chức chủ quản      | Enticy Studios (bối cảnh giả định)         |
| Ngày bắt đầu          | 2026-08-24                                 |
| Ngày kết thúc dự kiến | 2026-12-06                                 |
| Thời lượng            | 15 tuần                                    |

---

## 2. Project Purpose or Justification

### 2.1. Lý do thực hiện

Ba nhóm người dùng — doanh nghiệp vừa và nhỏ, giáo viên, người sáng tạo nội dung — hiện mất khoảng **45 phút để tạo một video trình chiếu dài 60 giây**, và phải trả **180–276 USD mỗi năm** cho công cụ nước ngoài render trên máy chủ của nhà cung cấp. Ba hệ quả: chi phí cao so với mặt bằng thu nhập trong nước, nội dung nội bộ bị đưa ra khỏi tổ chức, và kết quả xuất ra không ổn định giữa các lần chạy.

PromptVideo giải quyết cả ba bằng một quyết định kiến trúc duy nhất: **mô tả video bằng dữ liệu, dựng bằng HTML/CSS, và mã hoá thành MP4 ngay trên máy người dùng qua WebCodecs.** Không có máy chủ render nghĩa là chi phí biên gần bằng không, dữ liệu không rời khỏi máy, và vì mọi hiệu ứng là hàm của số khung hình chứ không phải của đồng hồ thật, cùng một đầu vào luôn cho ra cùng một file.

### 2.2. Căn cứ phê duyệt

Phân tích đầy đủ tại [Business Case](./01_Business_Case.md). Tóm tắt:

| Chỉ tiêu             | Giá trị                    |
| -------------------- | -------------------------- |
| NPV (3 năm, r = 12%) | +120.755.000 VND           |
| ROI (3 năm)          | 270,3%                     |
| Thời gian hoàn vốn   | ~1,74 năm                  |
| Ngưỡng hoà vốn       | 62% kịch bản thuê bao cơ sở |
| Đánh giá khả thi     | Khả thi trên cả 5 khía cạnh: kỹ thuật, pháp lý, vận hành, tiến độ, nguồn lực |

Phương án được chọn là **P3 — render client-side**, đạt 4,70/5 điểm có trọng số, vượt xa ba phương án còn lại.

### 2.3. Liên kết với chiến lược

Dự án phục vụ mục tiêu của Enticy Studios về việc xây dựng dòng doanh thu định kỳ với chi phí vận hành tối thiểu, đồng thời tạo tài sản kỹ thuật (bộ dựng khung hình, muxer MP4) dùng lại được cho các sản phẩm sau. Chi tiết tại [Benefit Management Plan §3](./02_Benefit_Management_Plan.md#3-strategic-alignment).

---

## 3. Measurable Project Objectives and Success Criteria

### 3.1. Mục tiêu đo được

Mọi mục tiêu dưới đây phải kiểm chứng được bằng phép đo, không bằng đánh giá cảm tính. Cấu hình máy tham chiếu cho các phép đo hiệu năng: **Intel Core i5 thế hệ 10, 8 GB RAM, Chrome bản ổn định mới nhất, Windows 11.**

| ID    | Mục tiêu                       | Chỉ số                                                        | Tiêu chí thành công          | Cách đo | Mốc kiểm |
| ----- | ------------------------------ | ------------------------------------------------------------- | ---------------------------- | ------- | -------- |
| OB-01 | Xuất được video MP4            | Thời gian xuất một video 1920×1080, 30 fps, dài 60 giây        | ≤ 90 giây trên máy tham chiếu | Kịch bản kiểm thử tự động | M4 |
| OB-02 | Đầu ra xác định                | Checksum luồng video khi xuất cùng một scene JSON trên 3 máy khác cấu hình | Giống nhau 3/3          | So sánh checksum | M4 |
| OB-03 | Thư viện template              | Số mẫu trình chiếu dùng được                                   | ≥ 8 mẫu                      | Đếm và duyệt thủ công | M2 |
| OB-04 | Độ tin cậy khi xuất            | Tỷ lệ xuất thành công trên 100 lần thử ở các trình duyệt mục tiêu | ≥ 95%                     | Kịch bản kiểm thử | M6 |
| OB-05 | Hiển thị tiếng Việt            | Tỷ lệ ký tự đúng trên bộ kiểm thử 134 tổ hợp dấu, cả khung ngang và dọc | 100%                  | Bộ kiểm thử hình ảnh | M3 |
| OB-06 | Dễ dùng                        | Thời gian người dùng mới tạo xong video đầu tiên, không có hướng dẫn | ≤ 10 phút với ≥ 8/10 người | Kiểm thử người dùng | M6 |
| OB-07 | Không gửi dữ liệu đi           | Số byte nội dung người dùng rời khỏi trình duyệt khi tạo và xuất video | 0 byte                 | Kiểm tra tab Network | M4 |
| OB-08 | Đúng tiến độ                   | Ngày bàn giao thực tế                                          | ≤ 2026-12-06                 | Đối chiếu lịch | M7 |
| OB-09 | Đúng ngân sách                 | Chi phí thực tế so với ngân sách duyệt                         | Sai lệch ≤ 10%               | Đối chiếu bảng chi phí | M7 |
| OB-10 | Chất lượng mã nguồn            | Độ phủ kiểm thử của mô-đun bộ dựng và mã hoá                   | ≥ 70%                        | Báo cáo độ phủ | M6 |

### 3.2. Tiêu chí thành công tổng thể

Dự án được coi là **thành công** khi thoả mãn đồng thời:

1. Toàn bộ mục tiêu OB-01 → OB-07 đạt (tiêu chí sản phẩm)
2. OB-08 và OB-09 đạt (tiêu chí quản lý)
3. Nhà tài trợ ký biên bản nghiệm thu v1.0
4. Bộ tài liệu quản lý dự án đầy đủ theo các nhóm tiến trình, được giảng viên hướng dẫn chấp nhận

Dự án được coi là **thất bại một phần** nếu OB-08 hoặc OB-09 không đạt nhưng sản phẩm vẫn nghiệm thu được. Dự án được coi là **thất bại** nếu OB-01 không đạt — vì khi đó sản phẩm không thực hiện được chức năng cốt lõi.

---

## 4. High-level Requirements

### 4.1. Yêu cầu chức năng

| ID    | Yêu cầu                                                                 | Độ ưu tiên |
| ----- | ----------------------------------------------------------------------- | ---------- |
| RQ-01 | Định nghĩa và xác thực được cấu trúc JSON mô tả cảnh (fps, kích thước, danh sách cảnh, thời lượng, hiệu ứng) | Bắt buộc |
| RQ-02 | Bộ dựng nhận số thứ tự khung hình và trả về trạng thái giao diện tại đúng khung hình đó | Bắt buộc |
| RQ-03 | Xuất video MP4 bằng WebCodecs `VideoEncoder`, có thanh tiến trình         | Bắt buộc |
| RQ-04 | Xem trước video trong trình duyệt trước khi xuất                         | Bắt buộc |
| RQ-05 | Thư viện ít nhất 8 mẫu trình chiếu (tiêu đề, danh sách, ảnh + chữ, so sánh, kết thúc…) | Bắt buộc |
| RQ-06 | Nhập nội dung bằng biểu mẫu, không bắt người dùng viết JSON thủ công     | Bắt buộc |
| RQ-07 | Lưu và mở lại dự án dưới dạng file trên máy người dùng                    | Bắt buộc |
| RQ-08 | Chèn ảnh từ máy người dùng vào cảnh                                       | Bắt buộc |
| RQ-09 | Hiệu ứng chuyển cảnh vào/ra (fade, fade-up)                              | Nên có |
| RQ-10 | Phát hiện trình duyệt không hỗ trợ WebCodecs và thông báo rõ ràng         | Bắt buộc |

### 4.2. Yêu cầu phi chức năng

| ID    | Yêu cầu                                                                  | Ngưỡng |
| ----- | ------------------------------------------------------------------------ | ------ |
| NF-01 | Hiệu năng xuất video                                                     | ≤ 90 giây cho video 60 giây trên máy tham chiếu |
| NF-02 | Tính riêng tư — không truyền nội dung người dùng ra ngoài                 | 0 byte |
| NF-03 | Tính xác định của đầu ra                                                 | 100% giống nhau giữa các máy |
| NF-04 | Hỗ trợ tiếng Việt đầy đủ                                                 | 100% ký tự đúng |
| NF-05 | Chạy được mà không cần cài đặt thêm phần mềm                             | Chỉ cần trình duyệt |
| NF-06 | Giới hạn độ dài video ở v1.0                                             | ≤ 2 phút (ràng buộc bộ nhớ) |
| NF-07 | Giấy phép mọi thư viện phụ thuộc                                         | MIT / Apache-2.0 / BSD / SIL OFL |

### 4.3. Ghi chú

Đây là yêu cầu **mức cao**. Việc phân rã chi tiết, xác định tiêu chí chấp nhận cho từng yêu cầu, và truy vết yêu cầu sẽ thực hiện ở nhóm tiến trình Planning, kết quả là tài liệu Requirements Specification và Requirements Traceability Matrix.

---

## 5. High-level Project Description and Boundaries

### 5.1. Mô tả sản phẩm

PromptVideo là ứng dụng web tĩnh. Người dùng nhập nội dung qua biểu mẫu; ứng dụng sinh ra một cấu trúc JSON mô tả cảnh; bộ dựng chuyển JSON thành trạng thái giao diện cho từng khung hình; mỗi khung được vẽ lên canvas và đưa vào bộ mã hoá của WebCodecs; kết quả được ghép thành file MP4 tải về máy.

```
Biểu mẫu nhập liệu  →  Scene JSON  →  Bộ dựng theo khung hình  →  Canvas  →  WebCodecs  →  MP4
```

**Scene JSON là hợp đồng giữa các phần của hệ thống.** Giao diện sinh ra nó, bộ dựng đọc nó, thư viện mẫu quy định giá trị hợp lệ. Mọi thay đổi định dạng này phải qua kiểm soát thay đổi.

### 5.2. Ranh giới phạm vi

| ✅ Trong phạm vi v1.0 | ❌ Ngoài phạm vi v1.0 (chuyển sang lộ trình sau) |
| -------------------- | ---------------------------------------------- |
| Định dạng Scene JSON và bộ xác thực | Sinh nội dung cảnh tự động bằng AI từ văn bản dài |
| Bộ dựng theo từng khung hình | Chèn nhạc nền và xử lý âm thanh |
| Xuất MP4 qua WebCodecs | Xuất file phụ đề |
| Xem trước trong trình duyệt | Ghép chữ và ảnh lên video nền có sẵn |
| Thư viện ≥ 8 mẫu trình chiếu | Khung hình dọc cho mạng xã hội |
| Nhập nội dung bằng biểu mẫu | Cộng tác nhiều người theo thời gian thực |
| Lưu và mở lại dự án (file cục bộ) | Tài khoản người dùng và đồng bộ đám mây |
| Chèn ảnh từ máy người dùng | Cổng thanh toán và quản lý thuê bao |
| Khung hình ngang 1920×1080, 30 fps | Độ phân giải 4K, tốc độ 60 fps |
| Video dài tối đa 2 phút | Video dài hơn 2 phút |
| Giao diện tiếng Việt | Đa ngôn ngữ giao diện |

**Lý do cắt gọn.** 15 tuần với 5 người bán thời gian không đủ cho toàn bộ lộ trình. Các hạng mục bị cắt đều là mở rộng trên nền kiến trúc lõi — làm sau được, nhưng nếu làm trước thì kiến trúc lõi không kịp hoàn thiện. Đây là quyết định có chủ đích, không phải bỏ sót.

### 5.3. Sản phẩm bàn giao

| ID    | Sản phẩm bàn giao                                          | Mốc |
| ----- | ---------------------------------------------------------- | --- |
| DL-01 | Bộ tài liệu nhóm Initiating (4 tài liệu)                   | M0  |
| DL-02 | Tài liệu đặc tả yêu cầu và định nghĩa Scene JSON v1        | M1  |
| DL-03 | Tài liệu thiết kế kiến trúc và thư viện mẫu                | M2  |
| DL-04 | Bộ dựng theo khung hình + chức năng xem trước               | M3  |
| DL-05 | Chức năng xuất MP4                                          | M4  |
| DL-06 | Trình soạn thảo bằng biểu mẫu + lưu/mở dự án               | M5  |
| DL-07 | Báo cáo kiểm thử, tài liệu hướng dẫn người dùng            | M6  |
| DL-08 | Sản phẩm v1.0 đã triển khai + biên bản nghiệm thu + báo cáo tổng kết | M7 |

### 5.4. Giả định và ràng buộc

Giả định và ràng buộc chi phối phạm vi được ghi đầy đủ tại [Assumption Log](./04_Assumption_Log.md). Những điều quan trọng nhất: không có ngân sách hạ tầng máy chủ (CT-03), đội 5 người bán thời gian (CT-04), và người dùng phải có trình duyệt hỗ trợ WebCodecs (AS-10).

---

## 6. High-level Risks

| ID    | Rủi ro                                                        | Khả năng | Tác động | Mức        | Chủ sở hữu | Ứng phó |
| ----- | ------------------------------------------------------------- | -------- | -------- | ---------- | ---------- | ------- |
| RS-01 | Nguyên mẫu mã hoá MP4 không đạt trong thời gian dành cho M3–M4 | Trung bình | Cao    | **Cao**    | Trưởng nhóm kỹ thuật | Dựng nguyên mẫu ngay tuần 2; phương án dự phòng xuất WebM/VP9 |
| RS-02 | Thành viên không đủ 10 giờ/tuần vào mùa thi                    | Cao      | Trung bình | **Cao**  | Giám đốc dự án | Dồn việc nặng vào tuần 3–10; xác nhận cam kết mỗi 2 tuần |
| RS-03 | Số thuê bao Pro dưới ngưỡng hoà vốn 62%                        | Trung bình | Cao    | **Cao**    | Nhà tài trợ | Theo dõi hàng quý; điểm quyết định hết Quý 4 Năm 1 |
| RS-04 | Vấn đề bản quyền H.264 phát sinh khi thương mại hoá            | Thấp     | Cao      | Trung bình | Nhà tài trợ | Xác minh trước M4; dự phòng VP9/AV1 |
| RS-05 | Bộ nhớ trình duyệt tràn với video dài                          | Cao      | Thấp     | Trung bình | Trưởng nhóm kỹ thuật | Giới hạn cứng 2 phút ở v1.0 |
| RS-06 | Phạm vi bị nới rộng trong quá trình làm                        | Trung bình | Trung bình | Trung bình | Giám đốc dự án | Mọi thay đổi phạm vi phải qua quy trình kiểm soát thay đổi (mục 10.3) |
| RS-07 | Không tìm được font tiếng Việt đủ giấy phép trong ngân sách    | Thấp     | Thấp     | Thấp       | Trưởng nhóm sản phẩm | Dùng font SIL OFL: Be Vietnam Pro, Noto Sans |

Danh sách này ở mức khởi tạo. Sổ đăng ký rủi ro đầy đủ sẽ được lập ở nhóm tiến trình Planning.

---

## 7. Summary Milestone Schedule

| Mốc | Tên mốc                                        | Tuần   | Ngày hoàn thành | Sản phẩm bàn giao | Tiêu chí hoàn thành |
| --- | ---------------------------------------------- | ------ | --------------- | ----------------- | ------------------- |
| M0  | Khởi động dự án và phê duyệt Charter           | 1      | 2026-08-30      | DL-01             | Nhà tài trợ ký Charter |
| M1  | Đặc tả yêu cầu và Scene JSON v1                | 2–3    | 2026-09-13      | DL-02             | Định dạng JSON được chốt; baseline MT-03 đã đo |
| M2  | Thiết kế kiến trúc và thư viện mẫu             | 4–5    | 2026-09-27      | DL-03             | ≥ 8 mẫu được duyệt; nguyên mẫu mã hoá chạy được |
| M3  | Bộ dựng theo khung hình và xem trước            | 6–8    | 2026-10-18      | DL-04             | OB-05 đạt; xem trước chạy đúng khung hình |
| M4  | Xuất MP4 bằng WebCodecs                        | 9–10   | 2026-11-01      | DL-05             | OB-01, OB-02, OB-07 đạt |
| M5  | Trình soạn thảo và lưu/mở dự án                | 11–12  | 2026-11-15      | DL-06             | RQ-06, RQ-07, RQ-08 hoạt động đầy đủ |
| M6  | Kiểm thử, tối ưu, tài liệu người dùng          | 13–14  | 2026-11-29      | DL-07             | OB-04, OB-06, OB-10 đạt |
| M7  | Nghiệm thu và bàn giao v1.0                    | 15     | 2026-12-06      | DL-08             | Biên bản nghiệm thu được ký |

**Đường găng** đi qua M2 → M3 → M4. Chậm ở bất kỳ mốc nào trong ba mốc này đều đẩy lùi ngày bàn giao, vì M5 phụ thuộc vào định dạng dữ liệu được chốt ở M3 và M6 cần sản phẩm hoàn chỉnh từ M5.

**Biên an toàn** gần như bằng không — 15 tuần đúng bằng độ dài học kỳ. Đây là lý do các hạng mục ngoài phạm vi ở mục 5.2 bị cắt ngay từ đầu thay vì để dành xem xét sau.

---

## 8. Summary Budget

### 8.1. Tổng ngân sách

| Hạng mục                             | Cách tính                                        | Thành tiền (VND) | Tỷ trọng |
| ------------------------------------ | ------------------------------------------------ | ---------------: | -------: |
| Nhân lực phát triển                  | 5 người × 15 tuần × 10 giờ/tuần × 80.000 VND/giờ |       60.000.000 |   87,6%  |
| Giấy phép font tiếng Việt thương mại | Bộ 2 họ font dùng trong template                  |        2.000.000 |    2,9%  |
| Tên miền năm đầu                     | 1 tên miền `.com`                                 |          300.000 |    0,4%  |
| Hạ tầng (hosting tĩnh)               | Cloudflare Pages / GitHub Pages — gói miễn phí    |                0 |    0,0%  |
| **Cộng**                             |                                                   |   **62.300.000** |          |
| Dự phòng                             | 10% trên tổng chi phí                             |        6.230.000 |    9,1%  |
| **TỔNG NGÂN SÁCH DUYỆT**             |                                                   |   **68.530.000** | **100%** |

Con số này khớp với [Business Case §4.1](./01_Business_Case.md#41-chi-phí-đầu-tư-ban-đầu-năm-0--giai-đoạn-dự-án-15-tuần).

### 8.2. Phân bổ theo mốc

| Mốc     | Tỷ lệ công sức | Ngân sách (VND) |
| ------- | -------------: | --------------: |
| M0      |            5%  |       3.115.000 |
| M1      |           10%  |       6.230.000 |
| M2      |           15%  |       9.345.000 |
| M3      |           25%  |      15.575.000 |
| M4      |           20%  |      12.460.000 |
| M5      |           15%  |       9.345.000 |
| M6      |            7%  |       4.361.000 |
| M7      |            3%  |       1.869.000 |
| **Cộng**|      **100%**  |  **62.300.000** |
| Dự phòng|                |       6.230.000 |
| **Tổng**|                |  **68.530.000** |

### 8.3. Quy tắc sử dụng dự phòng

Khoản dự phòng 6.230.000 VND do Giám đốc dự án quản lý, dùng cho các sai lệch trong phạm vi đã duyệt. Sử dụng vượt quá 50% khoản này phải báo cáo Nhà tài trợ. Sai lệch ngân sách vượt 10% tổng (tức trên 68.530.000 VND) phải có phê duyệt của Nhà tài trợ theo mục 11.2.

---

## 9. Stakeholder List

| ID    | Bên liên quan            | Vai trò                       | Quan tâm chính                          | Ảnh hưởng | Cách tham gia |
| ----- | ------------------------ | ----------------------------- | --------------------------------------- | --------- | ------------- |
| SH-01 | `<<Họ và tên>>`          | Nhà tài trợ — Enticy Studios  | Lợi tức đầu tư, hoàn vốn đúng hạn       | Cao       | Phê duyệt Charter, rà soát tại mốc, quyết định thay đổi lớn |
| SH-02 | `<<Họ và tên>>`          | Giám đốc dự án                | Bàn giao đúng phạm vi, tiến độ, ngân sách | Cao     | Điều hành hàng ngày, báo cáo tuần |
| SH-03 | `<<Họ và tên>>`          | Trưởng nhóm kỹ thuật          | Tính khả thi kỹ thuật, chất lượng mã     | Cao       | Quyết định kiến trúc, dựng nguyên mẫu |
| SH-04 | `<<Họ và tên>>`          | Trưởng nhóm sản phẩm          | Trải nghiệm người dùng, phù hợp thị trường | Trung bình | Thu thập yêu cầu, kiểm thử người dùng |
| SH-05 | `<<Danh sách thành viên>>` | Thành viên phát triển       | Khối lượng công việc rõ ràng, học được kỹ năng | Trung bình | Thực hiện công việc, họp tiến độ |
| SH-06 | Thầy Nguyễn Đình Quảng   | Giảng viên hướng dẫn          | Chất lượng và tính đầy đủ của tài liệu quản lý dự án | Cao | Đánh giá tài liệu theo từng nhóm tiến trình |
| SH-07 | Doanh nghiệp vừa và nhỏ  | Người dùng cuối               | Chi phí thấp, dễ dùng, nhanh             | Trung bình | Phỏng vấn yêu cầu, kiểm thử chấp nhận |
| SH-08 | Giáo viên, giảng viên    | Người dùng cuối               | Hỗ trợ tiếng Việt, dùng được trên máy trường | Trung bình | Phỏng vấn yêu cầu, kiểm thử chấp nhận |
| SH-09 | Người sáng tạo nội dung  | Người dùng cuối               | Tốc độ xuất, chất lượng hình ảnh         | Thấp      | Kiểm thử beta |
| SH-10 | Cộng đồng mã nguồn mở    | Bên đóng góp                  | Chất lượng mã, giấy phép rõ ràng         | Thấp      | Theo dõi qua nhánh `main` trên kho mã |

Kế hoạch quản lý bên liên quan chi tiết sẽ được lập ở nhóm tiến trình Planning.

---

## 10. Project Approval Requirements

### 10.1. Điều kiện nghiệm thu dự án

Dự án được nghiệm thu khi Nhà tài trợ xác nhận đủ các điều kiện sau:

| # | Điều kiện                                                             | Người xác nhận |
| - | --------------------------------------------------------------------- | -------------- |
| 1 | Toàn bộ mục tiêu OB-01 → OB-07 đạt, có bằng chứng đo lường            | Trưởng nhóm kỹ thuật |
| 2 | Toàn bộ yêu cầu bắt buộc trong mục 4.1 được triển khai và kiểm thử     | Trưởng nhóm sản phẩm |
| 3 | Sản phẩm v1.0 đã triển khai và truy cập được công khai                 | Giám đốc dự án |
| 4 | Tài liệu hướng dẫn người dùng và báo cáo kiểm thử đã bàn giao          | Giám đốc dự án |
| 5 | Chi phí thực tế không vượt ngân sách quá 10%                          | Giám đốc dự án |
| 6 | Bộ tài liệu quản lý dự án đầy đủ theo các nhóm tiến trình             | Giảng viên hướng dẫn |
| 7 | Danh mục lợi ích được bàn giao cho Nhà tài trợ, có biên bản            | Nhà tài trợ |

### 10.2. Ai ký nghiệm thu

Nghiệm thu cuối cùng do **Nhà tài trợ (SH-01)** ký. Giảng viên hướng dẫn (SH-06) đánh giá độc lập về mặt học thuật; đánh giá này không thay thế nghiệm thu của Nhà tài trợ nhưng là điều kiện cần cho điều kiện số 6.

### 10.3. Kiểm soát thay đổi

| Loại thay đổi                                    | Người phê duyệt          | Thời hạn phản hồi |
| ------------------------------------------------ | ------------------------ | ----------------- |
| Thay đổi không ảnh hưởng phạm vi, tiến độ, chi phí | Giám đốc dự án         | 1 ngày làm việc   |
| Chi phí phát sinh trong khoản dự phòng ≤ 50%      | Giám đốc dự án           | 2 ngày làm việc   |
| Thay đổi phạm vi, hoặc chi phí vượt 50% dự phòng | Nhà tài trợ              | 5 ngày làm việc   |
| Dời ngày bàn giao cuối (2026-12-06)              | Nhà tài trợ              | 5 ngày làm việc   |

Mọi yêu cầu thay đổi phải lập thành văn bản và ghi vào Change Log. Thay đổi được thực hiện trước khi phê duyệt là vi phạm quy trình.

---

## 11. Assigned Project Manager and Authority Level

### 11.1. Bổ nhiệm

| Thuộc tính        | Nội dung           |
| ----------------- | ------------------ |
| Họ và tên         | `<<Họ và tên>>`    |
| Chức danh         | Giám đốc dự án (Project Manager) |
| Ngày bổ nhiệm     | 2026-08-24         |
| Người bổ nhiệm    | Nhà tài trợ (SH-01) |
| Thời gian dành cho dự án | `<<số>>` giờ/tuần |

### 11.2. Thẩm quyền

| Lĩnh vực       | Được quyền                                                                 | Phải xin phê duyệt Nhà tài trợ |
| -------------- | -------------------------------------------------------------------------- | ------------------------------ |
| Nhân sự        | Phân công công việc trong đội, điều chỉnh phân bổ nguồn lực nội bộ           | Thay đổi thành phần đội |
| Ngân sách      | Chi tiêu trong ngân sách đã duyệt; dùng đến 50% khoản dự phòng               | Chi vượt 50% dự phòng hoặc vượt tổng ngân sách |
| Phạm vi        | Quyết định chi tiết triển khai trong phạm vi đã chốt                         | Mọi thay đổi ranh giới phạm vi (mục 5.2) |
| Tiến độ        | Điều chỉnh lịch nội bộ giữa các mốc, miễn không dời ngày bàn giao cuối        | Dời mốc M7 |
| Kỹ thuật       | Chọn công nghệ và kiến trúc, cùng Trưởng nhóm kỹ thuật                       | Đổi công nghệ lõi (ví dụ bỏ WebCodecs) |
| Nhà cung cấp   | Chọn công cụ và dịch vụ miễn phí                                             | Mọi hợp đồng có trả phí |
| Đối ngoại      | Trao đổi với người dùng cuối để thu thập yêu cầu                             | Cam kết chính thức với bên ngoài |

### 11.3. Trách nhiệm báo cáo

| Báo cáo                  | Tần suất       | Gửi cho              |
| ------------------------ | -------------- | -------------------- |
| Báo cáo tiến độ tuần     | Hàng tuần      | Nhà tài trợ, đội dự án |
| Báo cáo tại mốc          | Tại mỗi mốc M0–M7 | Nhà tài trợ, giảng viên hướng dẫn |
| Báo cáo sự cố            | Trong 24 giờ kể từ khi phát hiện | Nhà tài trợ |
| Báo cáo tổng kết dự án   | Tuần 15        | Nhà tài trợ, giảng viên hướng dẫn |

---

## 12. Name and Authority of the Sponsor

### 12.1. Nhà tài trợ

| Thuộc tính     | Nội dung                       |
| -------------- | ------------------------------ |
| Họ và tên      | `<<Họ và tên>>`                |
| Chức danh      | `<<Chức danh>>` — Enticy Studios |
| Đơn vị         | Enticy Studios (bối cảnh giả định) |
| Liên hệ        | `<<Email / điện thoại>>`       |

### 12.2. Thẩm quyền của Nhà tài trợ

Nhà tài trợ là người có thẩm quyền cao nhất của dự án và giữ các quyền sau:

1. **Phê duyệt Project Charter** — dự án chỉ chính thức tồn tại sau khi tài liệu này được ký.
2. **Cấp và thu hồi ngân sách** 68.530.000 VND.
3. **Phê duyệt thay đổi phạm vi, tiến độ, ngân sách** vượt thẩm quyền của Giám đốc dự án theo mục 10.3.
4. **Bổ nhiệm và thay thế Giám đốc dự án.**
5. **Giải quyết vấn đề vượt cấp** mà Giám đốc dự án không xử lý được.
6. **Ký nghiệm thu sản phẩm cuối cùng** theo mục 10.2.
7. **Quyết định dừng dự án** bất kỳ lúc nào nếu căn cứ kinh doanh không còn đứng vững.
8. **Chịu trách nhiệm theo dõi lợi ích sau khi dự án đóng**, theo [Benefit Management Plan §5.2](./02_Benefit_Management_Plan.md#52-chuyển-giao-trách-nhiệm).

### 12.3. Chữ ký phê duyệt

Bằng việc ký dưới đây, Nhà tài trợ chính thức uỷ quyền khởi động dự án, xác nhận sự tồn tại của dự án và trao cho Giám đốc dự án thẩm quyền sử dụng nguồn lực của tổ chức để thực hiện.

| Vai trò            | Họ và tên       | Chữ ký | Ngày |
| ------------------ | --------------- | ------ | ---- |
| Nhà tài trợ        | `<<Họ và tên>>` |        |      |
| Giám đốc dự án     | `<<Họ và tên>>` |        |      |
| Giảng viên hướng dẫn (xác nhận học thuật) | Thầy Nguyễn Đình Quảng |  |  |

---

*Tài liệu liên quan: [Business Case](./01_Business_Case.md) · [Benefit Management Plan](./02_Benefit_Management_Plan.md) · [Assumption Log](./04_Assumption_Log.md)*
