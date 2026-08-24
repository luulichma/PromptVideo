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
| Phạm Quang Anh | Nguyễn Thế Chiến | Phạm Quang Anh |
|                 | Nguyễn Việt Quang | Thầy Nguyễn Đình Quảng |

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| -- | --------- | ------------- | -------------- | ----------------- | --------------- | --------------- |
| 1  | Ver 1.0   | 2026-08-20    | Tạo mới        | Khởi tạo Project Charter theo 12 mục chuẩn: mục tiêu, phạm vi, mốc tiến độ, ngân sách, bên liên quan, thẩm quyền | Phạm Quang Anh | Phạm Quang Anh |

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

> **Lưu ý về bối cảnh.** Tài liệu lập trên bối cảnh doanh nghiệp giả định (Enticy Studios) phục vụ môn Quản lý dự án phần mềm. Số liệu tài chính và khối lượng bán là giả định, xem [Business Case §9](../00_Pre-project/01_Business_Case_v1.1.md#9-phụ-lục-a--nguồn-và-giả-định-số-liệu).

---

## 1. Project Title

**PromptVideo — Công cụ tạo video trình chiếu từ văn bản và hình ảnh, mã nguồn mở, chạy hoàn toàn trong trình duyệt.**

| Thuộc tính            | Giá trị                                    |
| --------------------- | ------------------------------------------ |
| Mã dự án              | `<<Mã dự án>>`                             |
| Tên viết tắt          | PromptVideo                                |
| Phiên bản mục tiêu    | v1.0                                       |
| Tổ chức chủ quản      | Enticy Studios (bối cảnh giả định)         |
| Giấy phép             | Apache License 2.0 — toàn bộ mã nguồn      |
| Mô hình doanh thu     | M2 — gói template có bản quyền + dịch vụ B2B |
| Ngày bắt đầu          | 2026-08-24                                 |
| Ngày kết thúc dự kiến | 2026-12-06                                 |
| Thời lượng            | 15 tuần                                    |
| Quy mô đội            | 3 thành viên bán thời gian — 450 giờ       |

---

## 2. Project Purpose or Justification

### 2.1. Lý do thực hiện

Ba nhóm người dùng — doanh nghiệp vừa và nhỏ, giáo viên, người sáng tạo nội dung — hiện mất khoảng **45 phút để tạo một video trình chiếu dài 60 giây**, và phải trả **180–276 USD mỗi năm** cho công cụ nước ngoài render trên máy chủ của nhà cung cấp. Bốn hệ quả: chi phí cao so với mặt bằng thu nhập trong nước, nội dung nội bộ bị đưa ra khỏi tổ chức, độ dài video bị giới hạn theo gói thuê bao, và kết quả xuất ra không ổn định giữa các lần chạy.

PromptVideo giải quyết cả bốn bằng một quyết định kiến trúc duy nhất: **mô tả video bằng dữ liệu, dựng bằng HTML/CSS, và mã hoá theo luồng thành MP4 ngay trên máy người dùng qua WebCodecs.** Không có máy chủ render nghĩa là chi phí biên gần bằng không và dữ liệu không rời khỏi máy. Mã hoá theo luồng nghĩa là bộ nhớ không tăng theo độ dài video, nên **người dùng tự quyết định video dài bao nhiêu**. Và vì mọi hiệu ứng là hàm của số khung hình chứ không phải của đồng hồ thật, cùng một đầu vào luôn cho ra cùng một file.

### 2.2. Căn cứ phê duyệt

Phân tích đầy đủ tại [Business Case](../00_Pre-project/01_Business_Case_v1.1.md). Tóm tắt:

| Chỉ tiêu                                | Giá trị                    |
| --------------------------------------- | -------------------------- |
| Vốn tiền mặt (Năm 0)                    | 1.500.000 VND              |
| Công sức quy đổi (không chi tiền)       | 450 giờ ≈ 36.000.000 VND   |
| NPV — cơ sở kinh tế đầy đủ (3 năm, r = 12%) | +165.094.000 VND       |
| Thời gian hoàn vốn — cơ sở kinh tế      | ~1,29 năm                  |
| Điểm hoà vốn                            | 48% kịch bản doanh thu cơ sở |
| Đánh giá khả thi                        | Khả thi trên cả 5 khía cạnh: kỹ thuật, pháp lý, vận hành, tiến độ, nguồn lực |

Hai quyết định nền tảng đã được chốt trong Business Case:

- **Kiến trúc: phương án P3** — render client-side bằng WebCodecs, đạt 4,85/5 điểm có trọng số.
- **Doanh thu: mô hình M2** — bán gói template có bản quyền và dịch vụ B2B. Mô hình thuê bao khoá tính năng đã bị loại vì **không thực thi được** với một sản phẩm mã nguồn mở chạy hoàn toàn trên máy người dùng.

### 2.3. Liên kết với chiến lược

Dự án phục vụ mục tiêu của Enticy Studios về việc xây dựng dòng doanh thu không cần vốn lớn, đồng thời tạo tài sản kỹ thuật mã nguồn mở (bộ dựng khung hình, pipeline mã hoá theo luồng) dùng lại được cho các sản phẩm sau. Chi tiết tại [Benefit Management Plan §3](../00_Pre-project/02_Benefit_Management_Plan_v1.1.md#3-strategic-alignment).

---

## 3. Measurable Project Objectives and Success Criteria

### 3.1. Mục tiêu đo được

Mọi mục tiêu dưới đây phải kiểm chứng được bằng phép đo, không bằng đánh giá cảm tính. Cấu hình máy tham chiếu cho các phép đo hiệu năng: **Intel Core i5 thế hệ 10, 8 GB RAM, Chrome bản ổn định mới nhất, Windows 11.**

| ID    | Mục tiêu                       | Chỉ số                                                              | Tiêu chí thành công          | Cách đo | Mốc kiểm |
| ----- | ------------------------------ | -------------------------------------------------------------------- | ---------------------------- | ------- | -------- |
| OB-01 | Xuất được video MP4            | Tỷ lệ thời gian xuất trên thời lượng video, ở 1920×1080 và 30 fps     | ≤ 1,5× thời lượng video trên máy tham chiếu | Kịch bản kiểm thử tự động | M4 |
| OB-02 | **Không giới hạn độ dài video** | Bộ nhớ đỉnh khi xuất video 10 phút ÷ bộ nhớ đỉnh khi xuất video 1 phút | ≤ 1,15 (tăng ≤ 15%)         | Công cụ đo bộ nhớ của trình duyệt | M4 |
| OB-03 | Đầu ra xác định                | Checksum luồng video khi xuất cùng một scene JSON trên 3 máy khác cấu hình | Giống nhau 3/3           | So sánh checksum | M4 |
| OB-04 | Thư viện template              | Số mẫu trình chiếu miễn phí dùng được                                | ≥ 8 mẫu                      | Đếm và duyệt thủ công | M2 |
| OB-05 | Gói template cài thêm được     | Cài và dùng được một gói template mẫu do bên ngoài đóng gói           | Cài thành công, mẫu hiển thị đúng | Kiểm thử tích hợp | M5 |
| OB-06 | Độ tin cậy khi xuất            | Tỷ lệ xuất thành công trên 100 lần thử ở các trình duyệt mục tiêu     | ≥ 95%                        | Kịch bản kiểm thử | M6 |
| OB-07 | Hiển thị tiếng Việt            | Tỷ lệ ký tự đúng trên bộ kiểm thử 134 tổ hợp dấu, cả khung ngang và dọc | 100%                       | Bộ kiểm thử hình ảnh | M3 |
| OB-08 | Dễ dùng                        | Thời gian người dùng mới tạo xong video đầu tiên, không có hướng dẫn   | ≤ 10 phút với ≥ 8/10 người   | Kiểm thử người dùng | M6 |
| OB-09 | Không gửi dữ liệu đi           | Số byte nội dung người dùng rời khỏi trình duyệt khi tạo và xuất video | 0 byte                      | Kiểm tra tab Network | M4 |
| OB-10 | Đúng tiến độ                   | Ngày bàn giao thực tế                                                | ≤ 2026-12-06                 | Đối chiếu lịch | M7 |
| OB-11 | Đúng ngân sách và công sức     | Chi tiền mặt thực tế; tổng giờ công thực tế                          | Tiền mặt ≤ 1.500.000 VND; công sức ≤ 495 giờ (sai lệch ≤ 10%) | Đối chiếu bảng chi phí và bảng chấm công | M7 |
| OB-12 | Chất lượng mã nguồn            | Độ phủ kiểm thử của mô-đun bộ dựng và mã hoá                         | ≥ 70%                        | Báo cáo độ phủ | M6 |

**OB-02 là mục tiêu quan trọng nhất về mặt kỹ thuật.** Nó không thể được chứng minh bằng cách xuất thử một video dài rồi tuyên bố thành công — phải chứng minh **bộ nhớ không tăng theo độ dài**, tức là kiến trúc mã hoá theo luồng thực sự hoạt động.

### 3.2. Tiêu chí thành công tổng thể

Dự án được coi là **thành công** khi thoả mãn đồng thời:

1. Toàn bộ mục tiêu OB-01 → OB-09 đạt (tiêu chí sản phẩm)
2. OB-10 và OB-11 đạt (tiêu chí quản lý)
3. Nhà tài trợ ký biên bản nghiệm thu v1.0
4. Bộ tài liệu quản lý dự án đầy đủ theo các nhóm tiến trình, được giảng viên hướng dẫn chấp nhận

Dự án được coi là **thất bại một phần** nếu OB-10 hoặc OB-11 không đạt nhưng sản phẩm vẫn nghiệm thu được. Dự án được coi là **thất bại** nếu OB-01 không đạt — vì khi đó sản phẩm không thực hiện được chức năng cốt lõi.

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
| RQ-06 | Thư viện ít nhất 8 mẫu trình chiếu miễn phí (tiêu đề, danh sách, ảnh + chữ, so sánh, kết thúc…) | Bắt buộc |
| RQ-07 | Nhập nội dung bằng biểu mẫu, không bắt người dùng viết JSON thủ công     | Bắt buộc |
| RQ-08 | Lưu và mở lại dự án dưới dạng file trên máy người dùng                    | Bắt buộc |
| RQ-09 | Chèn ảnh từ máy người dùng vào cảnh                                       | Bắt buộc |
| RQ-10 | Phát hiện trình duyệt không hỗ trợ WebCodecs hoặc không hỗ trợ ghi file theo luồng, và thông báo rõ ràng kèm gợi ý | Bắt buộc |
| RQ-11 | **Định dạng gói template cài thêm được** — người dùng cài thêm gói mẫu do bên thứ ba đóng gói mà không cần build lại ứng dụng | Bắt buộc |
| RQ-12 | Hiệu ứng chuyển cảnh vào/ra (fade, fade-up)                              | Nên có |

> **RQ-11 là điều kiện sống còn của mô hình doanh thu.** Không có định dạng gói cài thêm được thì không bán được gói template, và mô hình M2 trong Business Case không triển khai được. Đây là lý do RQ-11 nằm ở mức *bắt buộc* dù không phải chức năng người dùng cuối trực tiếp yêu cầu.

### 4.2. Yêu cầu phi chức năng

| ID    | Yêu cầu                                                                  | Ngưỡng |
| ----- | ------------------------------------------------------------------------ | ------ |
| NF-01 | Hiệu năng xuất video                                                     | ≤ 1,5× thời lượng video trên máy tham chiếu |
| NF-02 | **Bộ nhớ đỉnh không phụ thuộc độ dài video**                             | Tăng ≤ 15% khi độ dài tăng 10 lần |
| NF-03 | Tính riêng tư — không truyền nội dung người dùng ra ngoài                 | 0 byte |
| NF-04 | Tính xác định của đầu ra                                                 | 100% giống nhau giữa các máy |
| NF-05 | Hỗ trợ tiếng Việt đầy đủ                                                 | 100% ký tự đúng |
| NF-06 | Chạy được mà không cần cài đặt thêm phần mềm                             | Chỉ cần trình duyệt |
| NF-07 | Giấy phép mọi thư viện phụ thuộc                                         | MIT / Apache-2.0 / BSD / SIL OFL |
| NF-08 | Giấy phép mọi tài sản đồ hoạ trong mẫu miễn phí                          | Cho phép phân phối lại trong sản phẩm phái sinh |

### 4.3. Ghi chú

Đây là yêu cầu **mức cao**. Việc phân rã chi tiết, xác định tiêu chí chấp nhận cho từng yêu cầu, và truy vết yêu cầu sẽ thực hiện ở nhóm tiến trình Planning, kết quả là tài liệu Requirements Specification và Requirements Traceability Matrix.

---

## 5. High-level Project Description and Boundaries

### 5.1. Mô tả sản phẩm

PromptVideo là ứng dụng web tĩnh, mã nguồn mở theo Apache 2.0. Người dùng nhập nội dung qua biểu mẫu; ứng dụng sinh ra một cấu trúc JSON mô tả cảnh; bộ dựng chuyển JSON thành trạng thái giao diện cho từng khung hình; mỗi khung được vẽ lên canvas, đưa vào bộ mã hoá của WebCodecs, ghép và **ghi dần ra file trên đĩa**.

```
Biểu mẫu  →  Scene JSON  →  Bộ dựng theo khung hình  →  Canvas  →  WebCodecs  →  Ghi ra file
                                     └──────── lặp theo từng khung, giải phóng bộ nhớ ────────┘
```

Vòng lặp giải phóng bộ nhớ sau mỗi khung là điểm khác biệt so với cách làm thông thường (giữ toàn bộ khung hình rồi ghép một lần ở cuối). Nó là lý do độ dài video không bị giới hạn bởi bộ nhớ.

**Scene JSON là hợp đồng giữa các phần của hệ thống.** Giao diện sinh ra nó, bộ dựng đọc nó, thư viện mẫu và các gói template cài thêm quy định giá trị hợp lệ. Mọi thay đổi định dạng này phải qua kiểm soát thay đổi — đặc biệt vì gói template của bên thứ ba phụ thuộc vào nó.

### 5.2. Ranh giới phạm vi

| ✅ Trong phạm vi v1.0 | ❌ Ngoài phạm vi v1.0 (chuyển sang lộ trình sau) |
| -------------------- | ---------------------------------------------- |
| Định dạng Scene JSON và bộ xác thực | Sinh nội dung cảnh tự động bằng AI từ văn bản dài |
| Bộ dựng theo từng khung hình | Chèn nhạc nền và xử lý âm thanh |
| Xuất MP4 theo luồng, không giới hạn độ dài | Xuất file phụ đề |
| Xem trước trong trình duyệt | Ghép chữ và ảnh lên video nền có sẵn |
| Thư viện ≥ 8 mẫu trình chiếu miễn phí | Khung hình dọc cho mạng xã hội |
| **Định dạng gói template cài thêm được (RQ-11)** | **Sản xuất và bán các gói template thương mại** — hoạt động kinh doanh sau dự án |
| Nhập nội dung bằng biểu mẫu | Cộng tác nhiều người theo thời gian thực |
| Lưu và mở lại dự án (file cục bộ) | Tài khoản người dùng và đồng bộ đám mây |
| Chèn ảnh từ máy người dùng | Cổng thanh toán và quản lý đơn hàng |
| Khung hình ngang 1920×1080, 30 fps | Độ phân giải 4K, tốc độ 60 fps |
| Giao diện tiếng Việt | Đa ngôn ngữ giao diện |

**Lý do cắt gọn.** 15 tuần với 3 người bán thời gian cho tổng 450 giờ. Các hạng mục bị cắt đều là mở rộng trên nền kiến trúc lõi — làm sau được, nhưng nếu làm trước thì kiến trúc lõi không kịp hoàn thiện. Đây là quyết định có chủ đích, không phải bỏ sót.

**Ranh giới giữa dự án và hoạt động kinh doanh.** Dự án bàn giao *khả năng* cài thêm gói template (RQ-11). Việc *sản xuất* và *bán* các gói template thương mại là hoạt động kinh doanh của nhà tài trợ sau khi dự án đóng, không nằm trong 450 giờ này. Nhầm lẫn hai việc này sẽ làm phạm vi phình ra ngoài tầm kiểm soát.

### 5.3. Sản phẩm bàn giao

| ID    | Sản phẩm bàn giao                                          | Mốc |
| ----- | ---------------------------------------------------------- | --- |
| DL-01 | Bộ tài liệu nhóm Initiating (4 tài liệu)                   | M0  |
| DL-02 | Tài liệu đặc tả yêu cầu và định nghĩa Scene JSON v1        | M1  |
| DL-03 | Tài liệu thiết kế kiến trúc, thư viện mẫu, **nguyên mẫu mã hoá theo luồng** | M2 |
| DL-04 | Bộ dựng theo khung hình + chức năng xem trước               | M3  |
| DL-05 | Chức năng xuất MP4 theo luồng                               | M4  |
| DL-06 | Trình soạn thảo bằng biểu mẫu + lưu/mở dự án + định dạng gói template | M5 |
| DL-07 | Báo cáo kiểm thử, tài liệu hướng dẫn người dùng, tài liệu định dạng gói template cho bên thứ ba | M6 |
| DL-08 | Sản phẩm v1.0 đã triển khai + biên bản nghiệm thu + báo cáo tổng kết | M7 |

### 5.4. Giả định và ràng buộc

Giả định và ràng buộc chi phối phạm vi được ghi đầy đủ tại [Assumption Log](./02_Assumption_Log_v1.0.md). Những điều quan trọng nhất: không có ngân sách hạ tầng máy chủ (CT-03), đội 3 người bán thời gian với tổng 450 giờ (CT-04), toàn bộ mã nguồn phát hành theo Apache 2.0 không có cổng khoá tính năng (CT-07), và người dùng phải có trình duyệt hỗ trợ WebCodecs (AS-10).

---

## 6. High-level Risks

| ID    | Rủi ro                                                        | Khả năng | Tác động | Mức        | Chủ sở hữu | Ứng phó |
| ----- | ------------------------------------------------------------- | -------- | -------- | ---------- | ---------- | ------- |
| RS-01 | Nguyên mẫu mã hoá theo luồng không đạt trong thời gian dành cho M2–M4 | Trung bình | Cao | **Cao** | Trưởng nhóm kỹ thuật | Dựng nguyên mẫu ngay tuần 2; dự phòng xuất WebM/VP9; dự phòng giảm phạm vi xuống 4 mẫu và bỏ chức năng lưu/mở dự án |
| RS-02 | Một thành viên rút lui hoặc không đủ 10 giờ/tuần               | Trung bình | Cao    | **Cao**    | Giám đốc dự án | Đội 3 người nên mất 1 người là mất 1/3 năng lực; xác nhận cam kết bằng văn bản tại M0 và mỗi 2 tuần; không để kiến thức tập trung vào một người |
| RS-03 | Ghi file theo luồng không hoạt động trên Firefox/Safari        | Cao      | Trung bình | **Trung bình** | Trưởng nhóm kỹ thuật | Phương án dự phòng OPFS; công bố rõ giới hạn theo trình duyệt (RQ-10) |
| RS-04 | Phạm vi bị nới rộng trong quá trình làm                       | Trung bình | Cao    | **Trung bình** | Giám đốc dự án | Với 450 giờ, nới phạm vi là rủi ro nghiêm trọng — mọi thay đổi phải qua quy trình kiểm soát thay đổi (mục 10.3) |
| RS-05 | Không mua được tài sản đồ hoạ có quyền phân phối lại trong ngân sách 1.000.000 VND | Trung bình | Trung bình | **Trung bình** | Trưởng nhóm sản phẩm | Ưu tiên nguồn CC0 (Unsplash, Pexels, Lucide, Phosphor); nếu không đủ, làm mẫu tối giản không dùng ảnh |
| RS-06 | Doanh thu dưới ngưỡng hoà vốn 48% kịch bản cơ sở              | Trung bình | Trung bình | Trung bình | Nhà tài trợ | Cấu trúc gần như toàn biến phí nên không lỗ tiền mặt; rà soát hàng quý; điểm quyết định hết Quý 4 Năm 1 |
| RS-07 | Vấn đề bản quyền H.264 phát sinh khi thương mại hoá           | Thấp     | Cao      | Trung bình | Nhà tài trợ | Xác minh trước M4; dự phòng VP9/AV1 |
| RS-08 | Bên thứ ba fork mã nguồn và cạnh tranh bằng gói template      | Thấp     | Trung bình | Thấp     | Nhà tài trợ | Apache 2.0 cho phép điều này; cạnh tranh bằng chất lượng mẫu và quan hệ khách hàng, không bằng biện pháp pháp lý |

Danh sách này ở mức khởi tạo. Sổ đăng ký rủi ro đầy đủ sẽ được lập ở nhóm tiến trình Planning.

---

## 7. Summary Milestone Schedule

| Mốc | Tên mốc                                        | Tuần   | Ngày hoàn thành | Sản phẩm bàn giao | Tiêu chí hoàn thành |
| --- | ---------------------------------------------- | ------ | --------------- | ----------------- | ------------------- |
| M0  | Khởi động dự án và phê duyệt Charter           | 1      | 2026-08-30      | DL-01             | Nhà tài trợ ký Charter; 3 thành viên xác nhận cam kết thời gian bằng văn bản |
| M1  | Đặc tả yêu cầu và Scene JSON v1                | 2–3    | 2026-09-13      | DL-02             | Định dạng JSON được chốt; baseline MT-06 đã đo |
| M2  | Thiết kế kiến trúc, thư viện mẫu, nguyên mẫu   | 4–5    | 2026-09-27      | DL-03             | **Nguyên mẫu chứng minh bộ nhớ không tăng theo độ dài video**; ≥ 8 mẫu được duyệt |
| M3  | Bộ dựng theo khung hình và xem trước            | 6–8    | 2026-10-18      | DL-04             | OB-07 đạt; xem trước chạy đúng khung hình |
| M4  | Xuất MP4 theo luồng                            | 9–10   | 2026-11-01      | DL-05             | OB-01, OB-02, OB-03, OB-09 đạt |
| M5  | Trình soạn thảo, lưu/mở dự án, gói template     | 11–12  | 2026-11-15      | DL-06             | RQ-07, RQ-08, RQ-09, RQ-11 hoạt động đầy đủ; OB-05 đạt |
| M6  | Kiểm thử, tối ưu, tài liệu                     | 13–14  | 2026-11-29      | DL-07             | OB-06, OB-08, OB-12 đạt |
| M7  | Nghiệm thu và bàn giao v1.0                    | 15     | 2026-12-06      | DL-08             | Biên bản nghiệm thu được ký |

**Đường găng** đi qua M2 → M3 → M4. Chậm ở bất kỳ mốc nào trong ba mốc này đều đẩy lùi ngày bàn giao, vì M5 phụ thuộc vào định dạng dữ liệu được chốt ở M3 và M6 cần sản phẩm hoàn chỉnh từ M5.

**Biên an toàn bằng không.** 15 tuần đúng bằng độ dài học kỳ, và 450 giờ là một ước lượng eo hẹp cho khối lượng này. Đây là lý do các hạng mục ngoài phạm vi ở mục 5.2 bị cắt ngay từ đầu, và là lý do M2 có tiêu chí hoàn thành nghiêm ngặt: **nếu nguyên mẫu không đạt ở M2, phương án là giảm phạm vi ngay, không lùi ngày bàn giao.**

---

## 8. Summary Budget

### 8.1. Nguyên tắc

Dự án có vốn tiền mặt gần bằng không; chi phí chủ yếu là công sức của chính đội. Ngân sách vì vậy được duyệt trên **hai cơ sở tách biệt**: tiền mặt và công sức. Vượt cơ sở nào cũng là vượt ngân sách.

### 8.2. Ngân sách tiền mặt (Năm 0)

| Hạng mục                                       | Cách tính                                     | Thành tiền (VND) | Tỷ trọng |
| ---------------------------------------------- | --------------------------------------------- | ---------------: | -------: |
| Tài sản đồ hoạ có bản quyền cho 8 mẫu miễn phí | Ảnh, biểu tượng có quyền phân phối lại         |        1.000.000 |   66,7%  |
| Tên miền năm đầu                               | 1 tên miền `.com`                              |          300.000 |   20,0%  |
| Font chữ                                       | SIL OFL — Be Vietnam Pro, Noto Sans            |                0 |    0,0%  |
| Hạ tầng (hosting tĩnh)                         | Cloudflare Pages / GitHub Pages — gói miễn phí |                0 |    0,0%  |
| Dự phòng                                       |                                                |          200.000 |   13,3%  |
| **TỔNG NGÂN SÁCH TIỀN MẶT**                    |                                                |   **1.500.000** | **100%** |

### 8.3. Ngân sách công sức

| Hạng mục            | Cách tính                                    | Số giờ | Quy đổi (VND) |
| ------------------- | -------------------------------------------- | -----: | ------------: |
| Công sức phát triển | 3 người × 15 tuần × 10 giờ/tuần              | **450** |    36.000.000 |

Con số này khớp với [Benefit Management Plan §4.1](../00_Pre-project/02_Benefit_Management_Plan_v1.1.md#41-dữ-liệu-đầu-vào--chi-phí). Đơn giá quy đổi 80.000 VND/giờ là **chi phí cơ hội, không phải tiền chi ra**.

### 8.4. Phân bổ công sức theo mốc

| Mốc      | Tỷ lệ  | Số giờ  | Ghi chú |
| -------- | -----: | ------: | ------- |
| M0       |    5%  |      23 | Tài liệu khởi tạo, xác nhận cam kết |
| M1       |   10%  |      45 | Đặc tả yêu cầu, đo baseline |
| M2       |   15%  |      68 | Thiết kế + nguyên mẫu kỹ thuật — mốc quyết định |
| M3       |   25%  |     111 | Bộ dựng khung hình — hạng mục nặng nhất |
| M4       |   20%  |      90 | Mã hoá theo luồng |
| M5       |   15%  |      68 | Trình soạn thảo, lưu/mở, gói template |
| M6       |    7%  |      31 | Kiểm thử và tài liệu |
| M7       |    3%  |      14 | Nghiệm thu, bàn giao |
| **Cộng** | **100%** | **450** | |

### 8.5. Quy tắc sử dụng dự phòng và ngưỡng cảnh báo

| Nội dung | Quy tắc |
| -------- | ------- |
| Dự phòng tiền mặt 200.000 VND | Do Giám đốc dự án quản lý. Dùng hết phải báo cáo Nhà tài trợ. |
| Vượt ngân sách tiền mặt 1.500.000 VND | Phải có phê duyệt của Nhà tài trợ |
| Vượt 495 giờ công (110% của 450) | Phải có phê duyệt của Nhà tài trợ và kèm phương án giảm phạm vi |
| Một mốc vượt 120% số giờ phân bổ | Giám đốc dự án phải báo cáo ngay ở kỳ họp tuần, không đợi đến mốc sau |

---

## 9. Stakeholder List

Đội chỉ có 3 thành viên nên **mỗi người kiêm nhiều vai trò**. Bảng dưới liệt kê theo vai trò; một người có thể xuất hiện ở nhiều dòng.

| ID    | Bên liên quan            | Vai trò                       | Quan tâm chính                          | Ảnh hưởng | Cách tham gia |
| ----- | ------------------------ | ----------------------------- | --------------------------------------- | --------- | ------------- |
| SH-01 | Phạm Quang Anh          | Nhà tài trợ — Enticy Studios  | Giá trị thu về so với công sức bỏ ra     | Cao       | Phê duyệt Charter, rà soát tại mốc, quyết định thay đổi lớn |
| SH-02 | Nguyễn Thế Chiến          | Giám đốc dự án                | Bàn giao đúng phạm vi, tiến độ, công sức | Cao       | Điều hành hàng ngày, báo cáo tuần |
| SH-03 | Nguyễn Việt Quang          | Trưởng nhóm kỹ thuật          | Tính khả thi kỹ thuật, chất lượng mã     | Cao       | Quyết định kiến trúc, dựng nguyên mẫu |
| SH-04 | Phạm Quang Anh          | Trưởng nhóm sản phẩm          | Trải nghiệm người dùng, chất lượng mẫu   | Cao       | Thu thập yêu cầu, thiết kế mẫu, kiểm thử người dùng |
| SH-05 | Thầy Nguyễn Đình Quảng   | Giảng viên hướng dẫn          | Chất lượng và tính đầy đủ của tài liệu quản lý dự án | Cao | Đánh giá tài liệu theo từng nhóm tiến trình |
| SH-06 | Doanh nghiệp vừa và nhỏ  | Người dùng cuối / khách hàng tiềm năng của gói template và dịch vụ | Chi phí thấp, dễ dùng, nhanh | Cao | Phỏng vấn yêu cầu, kiểm thử chấp nhận |
| SH-07 | Giáo viên, giảng viên    | Người dùng cuối               | Hỗ trợ tiếng Việt, dùng được trên máy trường, không giới hạn độ dài bài giảng | Trung bình | Phỏng vấn yêu cầu, kiểm thử chấp nhận |
| SH-08 | Người sáng tạo nội dung  | Người dùng cuối               | Tốc độ xuất, chất lượng hình ảnh         | Trung bình | Kiểm thử beta |
| SH-09 | Cộng đồng mã nguồn mở    | Bên đóng góp và bên đóng gói template thứ ba | Chất lượng mã, giấy phép rõ ràng, định dạng gói ổn định | Trung bình | Theo dõi và đóng góp qua kho mã công khai |

Kế hoạch quản lý bên liên quan chi tiết sẽ được lập ở nhóm tiến trình Planning.

---

## 10. Project Approval Requirements

### 10.1. Điều kiện nghiệm thu dự án

Dự án được nghiệm thu khi Nhà tài trợ xác nhận đủ các điều kiện sau:

| # | Điều kiện                                                             | Người xác nhận |
| - | --------------------------------------------------------------------- | -------------- |
| 1 | Toàn bộ mục tiêu OB-01 → OB-09 đạt, có bằng chứng đo lường            | Trưởng nhóm kỹ thuật |
| 2 | Toàn bộ yêu cầu bắt buộc trong mục 4.1 được triển khai và kiểm thử     | Trưởng nhóm sản phẩm |
| 3 | Sản phẩm v1.0 đã triển khai và truy cập được công khai                 | Giám đốc dự án |
| 4 | Kho mã nguồn công khai theo Apache 2.0, không chứa cổng khoá tính năng | Trưởng nhóm kỹ thuật |
| 5 | Tài liệu hướng dẫn người dùng, báo cáo kiểm thử và tài liệu định dạng gói template đã bàn giao | Giám đốc dự án |
| 6 | Chi tiền mặt và tổng giờ công không vượt ngưỡng tại mục 8.5            | Giám đốc dự án |
| 7 | Bộ tài liệu quản lý dự án đầy đủ theo các nhóm tiến trình             | Giảng viên hướng dẫn |
| 8 | Danh mục lợi ích được bàn giao cho Nhà tài trợ, có biên bản            | Nhà tài trợ |

### 10.2. Ai ký nghiệm thu

Nghiệm thu cuối cùng do **Nhà tài trợ (SH-01)** ký. Giảng viên hướng dẫn (SH-05) đánh giá độc lập về mặt học thuật; đánh giá này không thay thế nghiệm thu của Nhà tài trợ nhưng là điều kiện cần cho điều kiện số 7.

### 10.3. Kiểm soát thay đổi

| Loại thay đổi                                    | Người phê duyệt          | Thời hạn phản hồi |
| ------------------------------------------------ | ------------------------ | ----------------- |
| Thay đổi không ảnh hưởng phạm vi, tiến độ, công sức | Giám đốc dự án         | 1 ngày làm việc   |
| Chi tiền mặt trong khoản dự phòng 200.000 VND    | Giám đốc dự án           | 2 ngày làm việc   |
| Thay đổi phạm vi, hoặc phát sinh công sức > 10%   | Nhà tài trợ              | 5 ngày làm việc   |
| Dời ngày bàn giao cuối (2026-12-06)              | Nhà tài trợ              | 5 ngày làm việc   |
| Thay đổi định dạng Scene JSON hoặc định dạng gói template sau M5 | Nhà tài trợ | 5 ngày làm việc   |

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
| Tiền mặt       | Chi trong ngân sách 1.500.000 VND đã duyệt, gồm cả khoản dự phòng 200.000 VND | Mọi khoản vượt 1.500.000 VND |
| Công sức       | Điều chỉnh phân bổ giờ giữa các mốc                                          | Tổng công sức vượt 495 giờ |
| Phạm vi        | Quyết định chi tiết triển khai trong phạm vi đã chốt                         | Mọi thay đổi ranh giới phạm vi (mục 5.2) |
| Tiến độ        | Điều chỉnh lịch nội bộ giữa các mốc, miễn không dời ngày bàn giao cuối        | Dời mốc M7 |
| Kỹ thuật       | Chọn công nghệ và kiến trúc, cùng Trưởng nhóm kỹ thuật                       | Đổi công nghệ lõi (ví dụ bỏ WebCodecs); đổi giấy phép mã nguồn |
| Nhà cung cấp   | Chọn công cụ và dịch vụ miễn phí                                             | Mọi hợp đồng có trả phí |
| Đối ngoại      | Trao đổi với người dùng cuối để thu thập yêu cầu                             | Cam kết chính thức với bên ngoài |

**Quyền đặc biệt khi kích hoạt phương án dự phòng.** Nếu nguyên mẫu tại M2 không đạt, Giám đốc dự án được quyền kích hoạt ngay phương án giảm phạm vi đã định trước (giảm xuống 4 mẫu, bỏ chức năng lưu/mở dự án) mà **không cần chờ phê duyệt**, với điều kiện báo cáo Nhà tài trợ trong 24 giờ. Quy định này tồn tại vì với biên an toàn bằng không, chờ phê duyệt 5 ngày có thể làm mất luôn cơ hội cứu tiến độ.

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
2. **Cấp và thu hồi ngân sách** 1.500.000 VND tiền mặt và 450 giờ công.
3. **Phê duyệt thay đổi phạm vi, tiến độ, ngân sách** vượt thẩm quyền của Giám đốc dự án theo mục 10.3.
4. **Quyết định về giấy phép mã nguồn và mô hình doanh thu** — đây là quyền riêng của Nhà tài trợ, Giám đốc dự án không được thay đổi.
5. **Bổ nhiệm và thay thế Giám đốc dự án.**
6. **Giải quyết vấn đề vượt cấp** mà Giám đốc dự án không xử lý được.
7. **Ký nghiệm thu sản phẩm cuối cùng** theo mục 10.2.
8. **Quyết định dừng dự án** bất kỳ lúc nào nếu căn cứ kinh doanh không còn đứng vững.
9. **Chịu trách nhiệm theo dõi lợi ích sau khi dự án đóng**, theo [Benefit Management Plan §6.2](../00_Pre-project/02_Benefit_Management_Plan_v1.1.md#62-chuyển-giao-trách-nhiệm), và **chịu trách nhiệm sản xuất, định giá, bán các gói template thương mại** — hoạt động nằm ngoài phạm vi dự án.

### 12.3. Chữ ký phê duyệt

Bằng việc ký dưới đây, Nhà tài trợ chính thức uỷ quyền khởi động dự án, xác nhận sự tồn tại của dự án và trao cho Giám đốc dự án thẩm quyền sử dụng nguồn lực của tổ chức để thực hiện.

| Vai trò            | Họ và tên       | Chữ ký | Ngày |
| ------------------ | --------------- | ------ | ---- |
| Nhà tài trợ        | Phạm Quang Anh |        |      |
| Giám đốc dự án     | Nguyễn Thế Chiến |        |      |
| Giảng viên hướng dẫn (xác nhận học thuật) | Thầy Nguyễn Đình Quảng |  |  |

---

*Tài liệu liên quan: [Business Case](../00_Pre-project/01_Business_Case_v1.1.md) · [Benefit Management Plan](../00_Pre-project/02_Benefit_Management_Plan_v1.1.md) · [Assumption Log](./02_Assumption_Log_v1.0.md)*
