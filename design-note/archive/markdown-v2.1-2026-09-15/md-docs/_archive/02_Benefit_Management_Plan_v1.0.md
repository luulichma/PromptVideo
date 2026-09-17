<!-- ============================ TRANG 1 — BÌA ============================ -->

# PromptVideo — Slide-to-Video Generator

|                     |                                |
| ------------------- | ------------------------------ |
| **Nhóm tiến trình** | Pre-project                     |
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
| Nguyễn Thế Chiến | Phạm Quang Anh | Phạm Quang Anh |
|                 | Nguyễn Việt Quang | Thầy Nguyễn Đình Quảng |

## Lịch sử cập nhật

| No | Phiên bản | Ngày thay đổi | Lý do thay đổi | Nội dung thay đổi | Người thực hiện | Người phê duyệt |
| -- | --------- | ------------- | -------------- | ----------------- | --------------- | --------------- |
| 1  | Ver 1.0   | 2026-08-20    | Tạo mới        | Khởi tạo Benefit Management Plan: danh mục lợi ích, chỉ số đo, mốc hiện thực hoá, cơ chế theo dõi | Nguyễn Thế Chiến | Phạm Quang Anh |

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

> **Lưu ý về bối cảnh.** Tài liệu lập trên bối cảnh doanh nghiệp giả định (Enticy Studios) phục vụ môn Quản lý dự án phần mềm. Số liệu tài chính và khối lượng bán là giả định, xem [Business Case §9](./01_Business_Case_v1.0.md#9-phụ-lục-a--nguồn-và-giả-định-số-liệu).

---

## 1. Purpose and Scope

### 1.1. Mục đích

Tài liệu này xác định **những lợi ích mà dự án PromptVideo phải tạo ra, cách đo chúng, ai chịu trách nhiệm, và khi nào chúng được coi là đã hiện thực hoá**. Nó tồn tại vì một lý do cụ thể: dự án kết thúc ở tuần 15 khi phần mềm được bàn giao, nhưng **phần lớn lợi ích chỉ xuất hiện sau đó**.

Với dự án này, việc theo dõi lợi ích còn quan trọng hơn bình thường. Vốn tiền mặt chỉ 1.500.000 VND, nên **rủi ro thật không phải là mất tiền mà là lãng phí 450 giờ công sức**. Chỉ có việc đo lợi ích mới cho biết số giờ đó có đáng bỏ ra hay không.

### 1.2. Phạm vi

| Trong phạm vi | Ngoài phạm vi |
| ------------- | ------------- |
| Lợi ích phát sinh từ sản phẩm PromptVideo v1.0 và các gói template đi kèm | Lợi ích của các sản phẩm khác trong danh mục Enticy Studios |
| Chu kỳ theo dõi 3 năm kể từ khi bàn giao | Lợi ích sau năm thứ 3 |
| Lợi ích cho người dùng cuối, cho tổ chức chủ quản, và cho đội dự án | Lợi ích gián tiếp không đo được (ví dụ "uy tín thương hiệu" chung chung) |

### 1.3. Tài liệu liên quan

[Business Case](./01_Business_Case_v1.0.md) là nguồn gốc của các con số lợi ích. [Project Charter](../01_Initiating/01_Project_Charter_v1.0.md) chứa các mục tiêu đo được mà dự án phải đạt để lợi ích có cơ hội xảy ra. Mọi giả định nêu ở đây đều có ID tương ứng trong [Assumption Log](../01_Initiating/02_Assumption_Log_v1.0.md).

---

## 2. Target Benefits

### 2.1. Danh mục lợi ích (Benefits Register)

**Nhóm lợi ích tài chính — theo mô hình doanh thu M2:**

| ID    | Lợi ích                     | Chỉ số đo                          | Baseline | Mục tiêu Năm 1 | Mục tiêu Năm 2 | Mục tiêu Năm 3 | Chủ sở hữu |
| ----- | --------------------------- | ---------------------------------- | -------- | -------------: | -------------: | -------------: | ---------- |
| BN-01 | Doanh thu gói template      | Doanh thu bán gói template trong kỳ | 0 VND    | 19.920.000<br>(80 gói) | 64.740.000<br>(260 gói) | 124.500.000<br>(500 gói) | Nhà tài trợ |
| BN-02 | Doanh thu dịch vụ B2B       | Doanh thu hợp đồng tuỳ chỉnh và đào tạo | 0 VND | 16.000.000<br>(2 hợp đồng) | 40.000.000<br>(5 hợp đồng) | 72.000.000<br>(9 hợp đồng) | Nhà tài trợ |
| BN-03 | Doanh thu hỗ trợ có SLA     | Doanh thu hợp đồng hỗ trợ năm      | 0 VND    | 0 | 24.000.000<br>(2 khách hàng) | 60.000.000<br>(5 khách hàng) | Nhà tài trợ |
| BN-04 | Chi phí vận hành gần bằng không | Chi phí hạ tầng / người dùng hoạt động / tháng | Không áp dụng | ≤ 500 VND | ≤ 500 VND | ≤ 500 VND | Nhà tài trợ |

**Nhóm lợi ích phi tài chính:**

| ID    | Lợi ích                                | Chỉ số đo                                     | Baseline                     | Mục tiêu                     | Thời điểm hiện thực hoá | Chủ sở hữu |
| ----- | -------------------------------------- | --------------------------------------------- | ---------------------------- | ---------------------------- | ----------------------- | ---------- |
| BN-05 | Người dùng không phải trả tiền phần mềm | Chi phí phần mềm/năm/người dùng               | 180–276 USD/năm (~4,5–7 triệu VND) | **0 VND** | Ngay khi phát hành | Trưởng nhóm sản phẩm |
| BN-06 | Rút ngắn thời gian tạo một video       | Thời gian trung bình tạo 1 video 60 giây      | ~45 phút                     | ≤ 5 phút (giảm ≥ 85%)        | Ngay khi bàn giao v1.0  | Trưởng nhóm sản phẩm |
| BN-07 | Không giới hạn độ dài video            | Mức tăng bộ nhớ đỉnh khi độ dài video tăng 10 lần | Hạn mức theo gói ở công cụ hiện có | Tăng ≤ 15% | Mốc M4 (tuần 10) | Trưởng nhóm kỹ thuật |
| BN-08 | Đầu ra xác định, lặp lại được          | Tỷ lệ file MP4 giống nhau khi xuất cùng một scene JSON trên các máy khác nhau | Không đảm bảo | 100% (3/3 máy) | Mốc M4 (tuần 10) | Trưởng nhóm kỹ thuật |
| BN-09 | Nội dung không rời khỏi máy người dùng | Số byte nội dung gửi lên máy chủ              | Toàn bộ nội dung được upload | 0 byte                       | Mốc M4 (tuần 10)        | Trưởng nhóm kỹ thuật |
| BN-10 | Hiển thị tiếng Việt chính xác          | Tỷ lệ ký tự đúng trên bộ ký tự kiểm thử       | Lỗi dấu, ngắt dòng sai ở công cụ hiện có | 100%          | Mốc M3 (tuần 8)         | Trưởng nhóm kỹ thuật |
| BN-11 | Nâng cao năng lực đội ngũ              | Số thành viên tự triển khai được pipeline WebCodecs theo luồng | 0/3 | ≥ 2/3          | Khi kết thúc dự án      | Giám đốc dự án |
| BN-12 | Tài sản mã nguồn mở tái sử dụng        | Số mô-đun tách được để dùng lại cho dự án sau | 0                            | ≥ 2 (bộ dựng khung hình, pipeline mã hoá theo luồng) | Khi kết thúc dự án | Nhà tài trợ |

### 2.2. Phân loại theo thời điểm xuất hiện

| Nhóm                                          | Lợi ích                                     | Ghi chú |
| --------------------------------------------- | ------------------------------------------- | ------- |
| **Hiện thực hoá trong dự án** (trước tuần 15) | BN-07, BN-08, BN-09, BN-10, BN-11, BN-12    | Nghiệm thu được ngay tại các mốc |
| **Hiện thực hoá sau bàn giao** (Năm 1–3)      | BN-01, BN-02, BN-03, BN-04, BN-05, BN-06    | Cần theo dõi liên tục sau khi dự án đóng |

Phân biệt này quan trọng: đội dự án chỉ chịu trách nhiệm trực tiếp với nhóm thứ nhất. Nhóm thứ hai được bàn giao cho nhà tài trợ tại buổi đóng dự án.

### 2.3. Lưu ý về lợi ích BN-05

BN-05 là lợi ích **cho người dùng**, không phải doanh thu cho tổ chức. Nó được đưa vào danh mục vì đây chính là cơ chế tạo ra BN-01 → BN-03: phần mềm miễn phí thu hút người dùng, một phần trong số đó mua gói template hoặc trở thành khách hàng dịch vụ. Nếu BN-05 không đạt (ví dụ vì sản phẩm khó dùng nên không ai chuyển sang), thì cả ba dòng doanh thu đều không có nền để đứng.

---

## 3. Strategic Alignment

| Mục tiêu chiến lược của Enticy Studios       | Lợi ích đóng góp        | Cách đóng góp |
| -------------------------------------------- | ----------------------- | ------------- |
| Xây dựng dòng doanh thu không cần vốn lớn     | BN-01, BN-02, BN-03     | Bán nội dung và dịch vụ, không cần đầu tư hạ tầng |
| Giữ chi phí vận hành ở mức tối thiểu          | BN-04                   | Kiến trúc client-side, không có máy chủ render |
| Tạo khác biệt trên thị trường công cụ nội địa | BN-05, BN-06, BN-07, BN-10 | Miễn phí, nhanh hơn, không giới hạn độ dài, xử lý tiếng Việt tốt hơn |
| Giảm rủi ro pháp lý về dữ liệu cá nhân        | BN-09                   | Không thu thập, không lưu trữ nội dung người dùng |
| Xây dựng uy tín kỹ thuật qua mã nguồn mở      | BN-12                   | Kho mã công khai Apache 2.0, là nền cho dòng doanh thu dịch vụ |
| Tích luỹ năng lực và tài sản kỹ thuật         | BN-11, BN-12            | Làm chủ WebCodecs, tách mô-đun dùng lại |

---

## 4. Timeframe for Realizing Benefits

### 4.1. Lộ trình

| Giai đoạn                    | Thời gian                   | Lợi ích bắt đầu xuất hiện | Trạng thái mong đợi |
| ---------------------------- | --------------------------- | ------------------------- | ------------------- |
| Trong dự án — mốc M3         | Tuần 8 (2026-10-18)         | BN-10                     | Đo và nghiệm thu tại mốc |
| Trong dự án — mốc M4         | Tuần 10 (2026-11-01)        | BN-07, BN-08, BN-09       | Đo và nghiệm thu tại mốc |
| Đóng dự án                   | Tuần 15 (2026-12-06)        | BN-05, BN-11, BN-12       | Đánh giá tại buổi tổng kết |
| Quý 1 sau bàn giao           | Tháng 1–3 Năm 1             | BN-04, BN-06              | Đo trên nhóm người dùng đầu tiên |
| Quý 2 sau bàn giao           | Tháng 4–6 Năm 1             | BN-01                     | Gói template đầu tiên bán được |
| Quý 3 sau bàn giao           | Tháng 7–9 Năm 1             | BN-02                     | Hợp đồng dịch vụ đầu tiên |
| Năm 2                        | Tháng 13–24                 | BN-03                     | Hợp đồng hỗ trợ SLA đầu tiên |
| Năm 1 → Năm 3                | 36 tháng                    | Toàn bộ                   | Đạt mục tiêu Năm 3 |

### 4.2. Điểm kiểm tra quan trọng

**Ngưỡng hoà vốn.** Business Case xác định dự án hoà vốn trên cơ sở kinh tế đầy đủ khi doanh thu đạt **48% kịch bản cơ sở** — tương đương khoảng **38 / 125 / 240 gói template** và **1 / 2 / 4 hợp đồng dịch vụ** ở ba năm.

Nếu đến hết **Quý 4 Năm 1** số gói template bán được dưới 38, nhà tài trợ phải xem xét lại: giá gói, chất lượng mẫu, hoặc chính giả định về nhu cầu thị trường. Đây là điểm quyết định chính thức, không phải cảnh báo mềm.

**Lưu ý về bản chất rủi ro.** Vì cấu trúc chi phí gần như toàn bộ là biến phí (không bán được gói thì cũng không mua tài sản đồ hoạ cho gói đó), việc không đạt ngưỡng hoà vốn **không gây lỗ tiền mặt**. Hậu quả là công sức bỏ ra không thu lại được giá trị tương xứng — nghiêm trọng, nhưng khác về bản chất so với thua lỗ tài chính.

---

## 5. Benefits Owner

### 5.1. Phân công

Đội chỉ có 3 thành viên nên **một người kiêm nhiều vai trò**. Bảng dưới phân theo vai trò, không phải theo người; việc ánh xạ vai trò sang người cụ thể ghi tại [Project Charter §9](../01_Initiating/01_Project_Charter_v1.0.md#9-stakeholder-list).

| Vai trò                | Người đảm nhiệm  | Trách nhiệm về lợi ích |
| ---------------------- | ---------------- | ---------------------- |
| Nhà tài trợ (Sponsor)  | Phạm Quang Anh — Enticy Studios | Chịu trách nhiệm cuối cùng về BN-01 → BN-04 và BN-12. Ra quyết định khi lợi ích chệch mục tiêu. |
| Giám đốc dự án (PM)    | Nguyễn Thế Chiến  | Chịu trách nhiệm BN-11 và việc bàn giao danh mục lợi ích khi đóng dự án. |
| Trưởng nhóm kỹ thuật   | Nguyễn Việt Quang  | Chịu trách nhiệm BN-07, BN-08, BN-09, BN-10 trong thời gian dự án. |
| Trưởng nhóm sản phẩm   | Phạm Quang Anh  | Chịu trách nhiệm BN-05, BN-06. Thu thập phản hồi người dùng. |
| Giảng viên hướng dẫn   | Thầy Nguyễn Đình Quảng | Đánh giá về mặt học thuật; không chịu trách nhiệm về lợi ích kinh doanh. |

### 5.2. Chuyển giao trách nhiệm

Tại buổi đóng dự án (tuần 15), Giám đốc dự án bàn giao chính thức cho Nhà tài trợ: bảng danh mục lợi ích với trạng thái hiện tại, số liệu baseline đã đo được, và lịch rà soát của 3 năm tiếp theo. Việc bàn giao này phải có biên bản — nếu không, các lợi ích sau bàn giao sẽ không có ai theo dõi.

---

## 6. Metrics

### 6.1. Định nghĩa chi tiết từng chỉ số

| ID    | Chỉ số                          | Định nghĩa đo                                                                | Nguồn dữ liệu | Tần suất | Người đo |
| ----- | ------------------------------- | ---------------------------------------------------------------------------- | ------------- | -------- | -------- |
| MT-01 | Doanh thu gói template          | Tổng tiền thu được từ bán gói template trong kỳ, chưa trừ phí cổng thanh toán | Báo cáo cổng thanh toán | Hàng tháng | Nhà tài trợ |
| MT-02 | Số gói template bán được        | Số đơn hàng hoàn tất trong kỳ, theo từng gói                                  | Báo cáo cổng thanh toán | Hàng tháng | Nhà tài trợ |
| MT-03 | Doanh thu dịch vụ B2B           | Giá trị hợp đồng đã nghiệm thu trong kỳ                                       | Hợp đồng đã ký | Hàng quý | Nhà tài trợ |
| MT-04 | Doanh thu hỗ trợ SLA            | Giá trị hợp đồng hỗ trợ còn hiệu lực, phân bổ theo kỳ                         | Hợp đồng đã ký | Hàng quý | Nhà tài trợ |
| MT-05 | Chi phí hạ tầng / người dùng    | Tổng chi phí hạ tầng tháng ÷ số người dùng hoạt động tháng                    | Hoá đơn nhà cung cấp + số liệu truy cập | Hàng tháng | Nhà tài trợ |
| MT-06 | Thời gian tạo một video         | Thời gian từ lúc mở ứng dụng đến lúc file MP4 được lưu, đo trên nghiệm thu có người dùng thật, kịch bản chuẩn: 5 cảnh, 60 giây, có ảnh | Buổi kiểm thử người dùng, ≥ 10 người | Mỗi quý | Trưởng nhóm sản phẩm |
| MT-07 | Mức tăng bộ nhớ theo độ dài     | Bộ nhớ đỉnh khi xuất video 10 phút ÷ bộ nhớ đỉnh khi xuất video 1 phút, cùng độ phân giải | Công cụ đo bộ nhớ của trình duyệt | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-08 | Tỷ lệ đầu ra giống nhau         | Xuất cùng một scene JSON trên 3 máy cấu hình khác nhau, so sánh checksum của luồng video | Kịch bản kiểm thử tự động | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-09 | Lưu lượng nội dung gửi đi       | Tổng byte trong các request rời khỏi trình duyệt khi tạo và xuất video, đo bằng tab Network | Kiểm thử thủ công + kiểm toán | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-10 | Độ chính xác hiển thị tiếng Việt | Tỷ lệ ký tự hiển thị đúng trên bộ ký tự kiểm thử (đủ 134 tổ hợp dấu, cả khung ngang và dọc) | Bộ kiểm thử hình ảnh | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-11 | Tỷ lệ xuất video thành công     | Số lần xuất thành công ÷ tổng số lần thử, trên 100 lần thử ở các trình duyệt mục tiêu | Kịch bản kiểm thử | Mỗi lần phát hành | Trưởng nhóm kỹ thuật |
| MT-12 | Năng lực đội                    | Số thành viên tự triển khai được một pipeline WebCodecs theo luồng mà không cần hỗ trợ | Đánh giá nội bộ | Khi kết thúc dự án | Giám đốc dự án |

### 6.2. Nguyên tắc đo

- **Có baseline trước khi bắt đầu.** MT-06 phải được đo trên quy trình thủ công hiện tại **trước mốc M1**, nếu không sẽ không có gì để so sánh và BN-06 trở thành lời tuyên bố không kiểm chứng được.
- **MT-07 là cách duy nhất kiểm chứng "không giới hạn độ dài".** Không thể chứng minh bằng cách xuất một video dài rồi tuyên bố thành công — phải chứng minh bộ nhớ **không tăng theo độ dài**. Tỷ lệ ≤ 1,15 khi độ dài tăng 10 lần là bằng chứng cho thấy kiến trúc theo luồng hoạt động đúng.
- **Cùng một kịch bản kiểm thử.** Mọi phép đo MT-06 dùng chung một kịch bản chuẩn để số liệu giữa các quý so sánh được với nhau.
- **Không đo bằng cảm nhận.** Chỉ số nào không có nguồn dữ liệu cụ thể thì loại khỏi danh mục, không giữ lại cho đẹp báo cáo.

---

## 7. Assumptions and Risks

### 7.1. Giả định mà lợi ích phụ thuộc vào

| ID giả định | Nội dung                                                        | Lợi ích bị ảnh hưởng nếu sai |
| ----------- | --------------------------------------------------------------- | ---------------------------- |
| AS-01       | Người dùng hiện mất ~45 phút để tạo một video 60 giây            | BN-06 — nếu baseline thật thấp hơn nhiều, mức cải thiện không đủ hấp dẫn |
| AS-04       | Người dùng chấp nhận mức giá 249.000 VND cho một gói template    | BN-01 — trực tiếp |
| AS-05       | Bán được 80 / 260 / 500 gói template trong ba năm                | BN-01 — trực tiếp |
| AS-10       | Người dùng mục tiêu dùng trình duyệt có hỗ trợ WebCodecs         | BN-05, BN-06 — người dùng không xuất được thì không có lợi ích nào |
| AS-11       | Mua được tài sản đồ hoạ có **quyền phân phối lại** trong ngân sách | BN-01 — không có quyền này thì không bán gói template được |
| AS-27       | Bán được dịch vụ B2B ở mức 8.000.000 VND/hợp đồng                | BN-02 |
| AS-29       | Doanh nghiệp chấp nhận hợp đồng hỗ trợ SLA 12.000.000 VND/năm    | BN-03 |
| AS-31       | Người dùng miễn phí chuyển đổi thành khách hàng trả tiền ở tỷ lệ đủ | BN-01, BN-02, BN-03 — đây là mắt xích nối BN-05 với doanh thu |
| AS-13       | Nhà tài trợ duy trì việc theo dõi lợi ích sau khi dự án đóng     | Toàn bộ nhóm lợi ích sau bàn giao |

Chi tiết đầy đủ tại [Assumption Log](../01_Initiating/02_Assumption_Log_v1.0.md).

### 7.2. Rủi ro đối với việc hiện thực hoá lợi ích

| ID    | Rủi ro                                                         | Lợi ích bị đe doạ | Ứng phó |
| ----- | -------------------------------------------------------------- | ----------------- | ------- |
| BR-01 | Không ai theo dõi lợi ích sau khi dự án đóng                    | Tất cả sau bàn giao | Biên bản bàn giao có chữ ký; lịch rà soát đặt sẵn trong lịch của nhà tài trợ |
| BR-02 | Không đo baseline MT-06 trước khi phát triển                    | BN-06             | Đưa việc đo baseline thành đầu ra bắt buộc của mốc M1 |
| BR-03 | Doanh thu dưới ngưỡng hoà vốn 48%                               | BN-01, BN-02, BN-03 | Quyết định tại điểm kiểm tra hết Quý 4 Năm 1 |
| BR-04 | Phần mềm miễn phí thu hút người dùng nhưng không ai mua gói template | BN-01        | Đây là rủi ro lớn nhất của mô hình M2 — theo dõi tỷ lệ chuyển đổi từ tháng đầu; nếu thấp, chuyển trọng tâm sang dòng dịch vụ B2B |
| BR-05 | Kiến trúc theo luồng không đạt, phải quay lại giới hạn độ dài   | BN-07             | Nguyên mẫu tại M2; nếu thất bại, công bố giới hạn rõ ràng thay vì hứa suông |
| BR-06 | Chỉ số được báo cáo nhưng không dẫn đến hành động nào           | Tất cả            | Mỗi kỳ rà soát phải kết thúc bằng một quyết định: tiếp tục, điều chỉnh, hoặc dừng |

---

## 8. Benefits Realization Tracking

### 8.1. Nhịp rà soát

| Kỳ rà soát                | Thời điểm                     | Người chủ trì   | Thành phần tham dự | Đầu ra |
| ------------------------- | ----------------------------- | --------------- | ------------------ | ------ |
| Rà soát tại mốc           | Tại M3, M4                    | Giám đốc dự án  | Đội dự án          | Cập nhật trạng thái BN-07 → BN-10 |
| Rà soát đóng dự án        | Tuần 15                       | Giám đốc dự án  | Đội dự án + nhà tài trợ | Biên bản bàn giao danh mục lợi ích |
| Rà soát hàng quý          | Cuối mỗi quý, Năm 1 → Năm 3   | Nhà tài trợ     | Trưởng nhóm sản phẩm | Báo cáo hiện thực hoá lợi ích |
| Rà soát điểm quyết định   | Hết Quý 4 Năm 1               | Nhà tài trợ     | Toàn bộ bên liên quan | Quyết định: tiếp tục / điều chỉnh giá / chuyển trọng tâm sang dịch vụ / dừng |

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
| 🔴 Chệch ≥ 20% | Báo cáo nhà tài trợ trong vòng 5 ngày làm việc; xem xét lại giả định gốc trong [Assumption Log](../01_Initiating/02_Assumption_Log_v1.0.md); nếu lệch hai kỳ liên tiếp, đưa ra quyết định về số phận sản phẩm |

### 8.4. Đóng danh mục lợi ích

Danh mục lợi ích được đóng khi: mọi lợi ích đều đạt trạng thái *Đã hiện thực hoá* hoặc *Không còn khả thi*, và nhà tài trợ ký xác nhận báo cáo tổng kết cuối Năm 3. Trước thời điểm đó, danh mục vẫn là tài liệu sống — cập nhật version theo quy ước ghi trong [docs/README.md](../README.md).

---

*Tài liệu liên quan: [Business Case](./01_Business_Case_v1.0.md) · [Project Charter](../01_Initiating/01_Project_Charter_v1.0.md) · [Assumption Log](../01_Initiating/02_Assumption_Log_v1.0.md)*
