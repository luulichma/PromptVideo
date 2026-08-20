<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                     |                                |
| ------------------- | ------------------------------ |
| **Nhóm tiến trình** | Initiating                     |
| **Tên tài liệu**    | Benefit Management Plan        |
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
| 1  | Ver 1.0   | 2026-08-20    | Tạo mới        | Khởi tạo Benefit Management Plan: danh mục lợi ích, chỉ số đo, mốc hiện thực hoá, cơ chế theo dõi | `<<Họ và tên>>` | `<<Họ và tên>>` |

<div style="page-break-after: always"></div>

<!-- ============================ TRANG 3 — MỤC LỤC ============================ -->

## Mục lục

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Target Benefits](#2-target-benefits)
3. [Strategic Alignment](#3-strategic-alignment)
4. [Timeframe for Realizing Benefits](#4-timeframe-for-realizing-benefits)
5. [Benefits Owner](#5-benefits-owner)
6. [Metrics](#6-metrics)
7. [Assumptions and Risks](#7-assumptions-and-risks)
8. [Benefits Realization Tracking](#8-benefits-realization-tracking)

<div style="page-break-after: always"></div>

<!-- ============================== NỘI DUNG ============================== -->

> **Lưu ý về bối cảnh.** Tài liệu lập trên bối cảnh doanh nghiệp giả định (Enticy Studios) phục vụ môn Quản lý dự án phần mềm. Số liệu tài chính và quy mô người dùng là giả định, xem [Business Case §9](./01_Business_Case.md#9-phụ-lục-a--nguồn-và-giả-định-số-liệu).

---

## 1. Purpose and Scope

### 1.1. Mục đích

Tài liệu này xác định **những lợi ích mà dự án PromptVideo phải tạo ra, cách đo chúng, ai chịu trách nhiệm, và khi nào chúng được coi là đã hiện thực hoá**. Nó tồn tại vì một lý do cụ thể: dự án kết thúc ở tuần 15 khi phần mềm được bàn giao, nhưng **phần lớn lợi ích chỉ xuất hiện sau đó**. Nếu không có kế hoạch này, không ai theo dõi xem khoản đầu tư 68.530.000 VND có sinh ra giá trị như Business Case đã hứa hay không.

### 1.2. Phạm vi

| Trong phạm vi | Ngoài phạm vi |
| ------------- | ------------- |
| Lợi ích phát sinh từ sản phẩm PromptVideo v1.0 | Lợi ích của các sản phẩm khác trong danh mục Enticy Studios |
| Chu kỳ theo dõi 3 năm kể từ khi bàn giao | Lợi ích sau năm thứ 3 |
| Lợi ích cho người dùng cuối, cho tổ chức chủ quản, và cho đội dự án | Lợi ích gián tiếp không đo được (ví dụ "uy tín thương hiệu") |

### 1.3. Tài liệu liên quan

[Business Case](./01_Business_Case.md) là nguồn gốc của các con số lợi ích. [Project Charter](./03_Project_Charter.md) chứa các mục tiêu đo được mà dự án phải đạt để lợi ích có cơ hội xảy ra. Mọi giả định nêu ở đây đều có ID tương ứng trong [Assumption Log](./04_Assumption_Log.md).

---

## 2. Target Benefits

### 2.1. Danh mục lợi ích (Benefits Register)

| ID    | Lợi ích                                   | Loại        | Chỉ số đo                                 | Hiện trạng (Baseline)  | Mục tiêu                    | Thời điểm hiện thực hoá | Chủ sở hữu lợi ích |
| ----- | ----------------------------------------- | ----------- | ----------------------------------------- | ---------------------- | --------------------------- | ----------------------- | ------------------ |
| BN-01 | Doanh thu từ gói Pro                      | Tài chính   | Doanh thu thuê bao luỹ kế theo năm        | 0 VND                  | 47,52 / 130,68 / 237,6 triệu VND (Năm 1/2/3) | Quý 2 Năm 1 → Năm 3 | Nhà tài trợ |
| BN-02 | Tiết kiệm chi phí công cụ cho người dùng  | Tài chính (phía khách hàng) | Chênh lệch chi phí công cụ/năm/người dùng | 180–276 USD/năm (~4,5–7 triệu VND) | ≤ 1.188.000 VND/năm — tiết kiệm ≥ 70% | Ngay khi người dùng chuyển đổi | Trưởng nhóm sản phẩm |
| BN-03 | Rút ngắn thời gian tạo một video          | Phi tài chính | Thời gian trung bình tạo 1 video 60 giây | ~45 phút               | ≤ 5 phút (giảm ≥ 85%)       | Ngay khi bàn giao v1.0  | Trưởng nhóm sản phẩm |
| BN-04 | Đầu ra xác định, lặp lại được             | Phi tài chính | Tỷ lệ file MP4 giống nhau khi xuất cùng một scene JSON trên các máy khác nhau | Không đảm bảo | 100% (3/3 máy kiểm thử) | Mốc M4 (tuần 10) | Giám đốc dự án |
| BN-05 | Nội dung không rời khỏi máy người dùng    | Phi tài chính (tuân thủ) | Số byte nội dung người dùng gửi lên máy chủ | Toàn bộ nội dung được upload | 0 byte | Mốc M4 (tuần 10) | Giám đốc dự án |
| BN-06 | Hiển thị tiếng Việt chính xác             | Phi tài chính | Tỷ lệ ký tự hiển thị đúng trên bộ ký tự kiểm thử | Lỗi dấu, ngắt dòng sai ở công cụ hiện có | 100% | Mốc M3 (tuần 8) | Trưởng nhóm kỹ thuật |
| BN-07 | Chi phí vận hành gần bằng không           | Tài chính   | Chi phí hạ tầng / người dùng hoạt động / tháng | Không áp dụng | ≤ 500 VND | Quý 1 Năm 1 | Nhà tài trợ |
| BN-08 | Nâng cao năng lực đội ngũ                 | Phi tài chính | Số thành viên tự triển khai được pipeline WebCodecs | 0/5 | ≥ 3/5 | Khi kết thúc dự án | `<<Trưởng nhóm>>` |
| BN-09 | Tài sản mã nguồn tái sử dụng              | Phi tài chính | Số mô-đun tách được để dùng lại cho dự án sau | 0 | ≥ 2 (bộ dựng khung hình, muxer) | Khi kết thúc dự án | Nhà tài trợ |

### 2.2. Phân loại theo thời điểm xuất hiện

| Nhóm                                              | Lợi ích                     | Ghi chú |
| ------------------------------------------------- | --------------------------- | ------- |
| **Hiện thực hoá trong dự án** (trước tuần 15)     | BN-04, BN-05, BN-06, BN-08, BN-09 | Nghiệm thu được ngay tại các mốc |
| **Hiện thực hoá sau bàn giao** (Năm 1–3)          | BN-01, BN-02, BN-03, BN-07  | Cần theo dõi liên tục sau khi dự án đóng |

Phân biệt này quan trọng: đội dự án chỉ chịu trách nhiệm trực tiếp với nhóm thứ nhất. Nhóm thứ hai được bàn giao cho nhà tài trợ tại buổi đóng dự án.

---

## 3. Strategic Alignment

| Mục tiêu chiến lược của Enticy Studios       | Lợi ích đóng góp     | Cách đóng góp |
| -------------------------------------------- | -------------------- | ------------- |
| Xây dựng dòng doanh thu định kỳ               | BN-01                | Mô hình thuê bao 99.000 VND/tháng |
| Giữ chi phí vận hành ở mức tối thiểu          | BN-07                | Kiến trúc client-side, không có máy chủ render |
| Tạo khác biệt trên thị trường công cụ nội địa | BN-02, BN-03, BN-06  | Giá nội địa, nhanh hơn, xử lý tiếng Việt tốt hơn |
| Giảm rủi ro pháp lý về dữ liệu cá nhân        | BN-05                | Không thu thập, không lưu trữ nội dung người dùng |
| Tích luỹ năng lực và tài sản kỹ thuật         | BN-08, BN-09         | Làm chủ WebCodecs, tách mô-đun dùng lại |

---

## 4. Timeframe for Realizing Benefits

### 4.1. Lộ trình

| Giai đoạn                    | Thời gian                | Lợi ích bắt đầu xuất hiện | Trạng thái mong đợi |
| ---------------------------- | ------------------------ | ------------------------- | ------------------- |
| Trong dự án — mốc M3         | Tuần 8 (2026-10-18)      | BN-06                     | Đo và nghiệm thu tại mốc |
| Trong dự án — mốc M4         | Tuần 10 (2026-11-01)     | BN-04, BN-05              | Đo và nghiệm thu tại mốc |
| Đóng dự án                   | Tuần 15 (2026-12-06)     | BN-08, BN-09              | Đánh giá tại buổi tổng kết |
| Quý 1 sau bàn giao           | Tháng 1–3 Năm 1          | BN-03, BN-07              | Đo trên nhóm người dùng đầu tiên |
| Quý 2 sau bàn giao           | Tháng 4–6 Năm 1          | BN-01, BN-02              | Thuê bao Pro đầu tiên |
| Năm 1 → Năm 3                | 36 tháng                 | Toàn bộ                   | Đạt mục tiêu Năm 3 |

### 4.2. Điểm kiểm tra quan trọng

**Ngưỡng hoà vốn.** Business Case xác định dự án hoà vốn khi số thuê bao đạt **62% kịch bản cơ sở** — tức khoảng **25 / 68 / 124 thuê bao Pro trung bình** ở ba năm. Nếu đến hết Quý 4 Năm 1 số thuê bao dưới 25, nhà tài trợ phải xem xét lại mô hình giá hoặc cắt giảm chi phí vận hành. Đây là điểm quyết định chính thức, không phải cảnh báo mềm.

---

## 5. Benefits Owner

### 5.1. Phân công

| Vai trò                | Người đảm nhiệm  | Trách nhiệm về lợi ích |
| ---------------------- | ---------------- | ---------------------- |
| Nhà tài trợ (Sponsor)  | `<<Họ và tên>>` — Enticy Studios | Chịu trách nhiệm cuối cùng về BN-01, BN-07, BN-09. Ra quyết định khi lợi ích chệch mục tiêu. |
| Giám đốc dự án (PM)    | `<<Họ và tên>>`  | Chịu trách nhiệm BN-04, BN-05 trong thời gian dự án. Bàn giao việc theo dõi phần còn lại khi đóng dự án. |
| Trưởng nhóm sản phẩm   | `<<Họ và tên>>`  | Chịu trách nhiệm BN-02, BN-03. Thu thập phản hồi người dùng. |
| Trưởng nhóm kỹ thuật   | `<<Họ và tên>>`  | Chịu trách nhiệm BN-06. Bảo đảm chất lượng kỹ thuật của các chỉ số. |
| Giảng viên hướng dẫn   | Thầy Nguyễn Đình Quảng | Đánh giá về mặt học thuật; không chịu trách nhiệm về lợi ích kinh doanh. |

### 5.2. Chuyển giao trách nhiệm

Tại buổi đóng dự án (tuần 15), Giám đốc dự án bàn giao chính thức cho Nhà tài trợ: bảng danh mục lợi ích với trạng thái hiện tại, số liệu baseline đã đo được, và lịch rà soát của 3 năm tiếp theo. Việc bàn giao này phải có biên bản — nếu không, các lợi ích sau bàn giao sẽ không có ai theo dõi.

---

## 6. Metrics

### 6.1. Định nghĩa chi tiết từng chỉ số

| ID    | Chỉ số                          | Định nghĩa đo                                                                | Nguồn dữ liệu | Tần suất | Người đo |
| ----- | ------------------------------- | ---------------------------------------------------------------------------- | ------------- | -------- | -------- |
| MT-01 | Doanh thu thuê bao              | Tổng tiền thu được từ gói Pro trong kỳ, chưa trừ phí cổng thanh toán          | Báo cáo cổng thanh toán | Hàng tháng | Nhà tài trợ |
| MT-02 | Số thuê bao Pro hoạt động       | Số tài khoản có thuê bao còn hiệu lực tại ngày cuối kỳ                        | Hệ thống thanh toán | Hàng tháng | Nhà tài trợ |
| MT-03 | Thời gian tạo một video         | Thời gian từ lúc mở ứng dụng đến lúc file MP4 được lưu, đo trên nghiệm thu có người dùng thật, kịch bản chuẩn: 5 cảnh, 60 giây, có ảnh | Buổi kiểm thử người dùng, ≥ 10 người | Mỗi quý | Trưởng nhóm sản phẩm |
| MT-04 | Tỷ lệ đầu ra giống nhau         | Xuất cùng một scene JSON trên 3 máy cấu hình khác nhau, so sánh checksum của luồng video | Kịch bản kiểm thử tự động | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-05 | Lưu lượng nội dung gửi đi       | Tổng byte trong các request rời khỏi trình duyệt khi tạo và xuất video, đo bằng tab Network | Kiểm thử thủ công + kiểm toán | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-06 | Độ chính xác hiển thị tiếng Việt | Tỷ lệ ký tự hiển thị đúng trên bộ ký tự kiểm thử (đủ 134 tổ hợp dấu, cả khung ngang và dọc) | Bộ kiểm thử hình ảnh | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-07 | Chi phí hạ tầng / người dùng    | Tổng chi phí hạ tầng tháng ÷ số người dùng hoạt động tháng                    | Hoá đơn nhà cung cấp + số liệu truy cập | Hàng tháng | Nhà tài trợ |
| MT-08 | Tỷ lệ xuất video thành công     | Số lần xuất thành công ÷ tổng số lần thử, trên 100 lần thử ở các trình duyệt mục tiêu | Kịch bản kiểm thử | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-09 | Năng lực đội                    | Số thành viên tự triển khai được một pipeline WebCodecs tối giản mà không cần hỗ trợ | Đánh giá nội bộ | Khi kết thúc dự án | `<<Trưởng nhóm>>` |

### 6.2. Nguyên tắc đo

- **Có baseline trước khi bắt đầu.** MT-03 phải được đo trên quy trình thủ công hiện tại **trước mốc M1**, nếu không sẽ không có gì để so sánh và BN-03 trở thành lời tuyên bố không kiểm chứng được.
- **Cùng một kịch bản kiểm thử.** Mọi phép đo MT-03 dùng chung một kịch bản chuẩn để số liệu giữa các quý so sánh được với nhau.
- **Không đo bằng cảm nhận.** Chỉ số nào không có nguồn dữ liệu cụ thể thì loại khỏi danh mục, không giữ lại cho đẹp báo cáo.

---

## 7. Assumptions and Risks

### 7.1. Giả định mà lợi ích phụ thuộc vào

| ID giả định | Nội dung                                                        | Lợi ích bị ảnh hưởng nếu sai |
| ----------- | --------------------------------------------------------------- | ---------------------------- |
| AS-01       | Người dùng hiện mất ~45 phút để tạo một video 60 giây            | BN-03 — nếu baseline thật thấp hơn nhiều, mức cải thiện không đủ hấp dẫn |
| AS-04       | Người dùng chấp nhận mức giá 99.000 VND/tháng                    | BN-01, BN-02 |
| AS-05       | Đạt 40 / 110 / 200 thuê bao Pro trung bình trong ba năm          | BN-01 — trực tiếp |
| AS-07       | Chi phí vận hành không vượt 36 / 54 / 72 triệu VND/năm           | BN-07 |
| AS-10       | Người dùng mục tiêu dùng trình duyệt có hỗ trợ WebCodecs         | BN-01, BN-03 — người dùng không xuất được thì không có lợi ích nào |
| AS-13       | Nhà tài trợ duy trì việc theo dõi lợi ích sau khi dự án đóng     | Toàn bộ nhóm lợi ích sau bàn giao |

Chi tiết đầy đủ tại [Assumption Log](./04_Assumption_Log.md).

### 7.2. Rủi ro đối với việc hiện thực hoá lợi ích

| ID    | Rủi ro                                                    | Lợi ích bị đe doạ | Ứng phó |
| ----- | --------------------------------------------------------- | ----------------- | ------- |
| BR-01 | Không ai theo dõi lợi ích sau khi dự án đóng               | Tất cả sau bàn giao | Biên bản bàn giao có chữ ký; lịch rà soát đặt sẵn trong lịch của nhà tài trợ |
| BR-02 | Không đo baseline MT-03 trước khi phát triển               | BN-03             | Đưa việc đo baseline thành đầu ra bắt buộc của mốc M1 |
| BR-03 | Số thuê bao dưới ngưỡng hoà vốn 62%                        | BN-01             | Quyết định tại điểm kiểm tra hết Quý 4 Năm 1 |
| BR-04 | Giới hạn 2 phút khiến người dùng bỏ sản phẩm                | BN-01, BN-03      | Nêu rõ giới hạn từ đầu; ưu tiên tối ưu bộ nhớ ở v1.1 |
| BR-05 | Chỉ số được báo cáo nhưng không dẫn đến hành động nào       | Tất cả            | Mỗi kỳ rà soát phải kết thúc bằng một quyết định: tiếp tục, điều chỉnh, hoặc dừng |

---

## 8. Benefits Realization Tracking

### 8.1. Nhịp rà soát

| Kỳ rà soát                | Thời điểm                     | Người chủ trì   | Thành phần tham dự | Đầu ra |
| ------------------------- | ----------------------------- | --------------- | ------------------ | ------ |
| Rà soát tại mốc           | Tại M3, M4                    | Giám đốc dự án  | Đội dự án          | Cập nhật trạng thái BN-04, BN-05, BN-06 |
| Rà soát đóng dự án        | Tuần 15                       | Giám đốc dự án  | Đội dự án + nhà tài trợ | Biên bản bàn giao danh mục lợi ích |
| Rà soát hàng quý          | Cuối mỗi quý, Năm 1 → Năm 3   | Nhà tài trợ     | Trưởng nhóm sản phẩm | Báo cáo hiện thực hoá lợi ích |
| Rà soát điểm quyết định   | Hết Quý 4 Năm 1               | Nhà tài trợ     | Toàn bộ bên liên quan | Quyết định: tiếp tục / điều chỉnh giá / dừng |

### 8.2. Mẫu báo cáo hiện thực hoá lợi ích

Mỗi kỳ rà soát điền bảng sau. Cột *Đánh giá* dùng ba mức: 🟢 Đạt · 🟡 Chệch < 20% · 🔴 Chệch ≥ 20%.

| ID    | Lợi ích | Mục tiêu kỳ này | Thực đạt | Chênh lệch | Đánh giá | Nguyên nhân | Hành động | Người chịu trách nhiệm | Hạn |
| ----- | ------- | --------------- | -------- | ---------- | -------- | ----------- | --------- | ---------------------- | --- |
| BN-01 |         |                 |          |            |          |             |           |                        |     |
| BN-02 |         |                 |          |            |          |             |           |                        |     |
| ...   |         |                 |          |            |          |             |           |                        |     |

### 8.3. Quy tắc xử lý khi lệch mục tiêu

| Mức đánh giá | Xử lý bắt buộc |
| ------------ | -------------- |
| 🟢 Đạt        | Ghi nhận, không cần hành động |
| 🟡 Chệch < 20% | Ghi nguyên nhân, đề ra hành động khắc phục, theo dõi ở kỳ sau |
| 🔴 Chệch ≥ 20% | Báo cáo nhà tài trợ trong vòng 5 ngày làm việc; xem xét lại giả định gốc trong [Assumption Log](./04_Assumption_Log.md); nếu lệch hai kỳ liên tiếp, đưa ra quyết định về số phận sản phẩm |

### 8.4. Đóng danh mục lợi ích

Danh mục lợi ích được đóng khi: mọi lợi ích đều đạt trạng thái *Đã hiện thực hoá* hoặc *Không còn khả thi*, và nhà tài trợ ký xác nhận báo cáo tổng kết cuối Năm 3. Trước thời điểm đó, danh mục vẫn là tài liệu sống — cập nhật version theo quy ước ghi trong [docs/README.md](../README.md).

---

*Tài liệu liên quan: [Business Case](./01_Business_Case.md) · [Project Charter](./03_Project_Charter.md) · [Assumption Log](./04_Assumption_Log.md)*
