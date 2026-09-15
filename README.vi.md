# PromptVideo

PromptVideo là dự án dịch vụ web tạo video trình chiếu MP4 từ văn bản và hình ảnh, kinh doanh theo **gói thuê bao thường niên**. Trình duyệt dựng và mã hoá video trên máy người dùng; máy chủ quản lý tài khoản, giấy phép sử dụng, hạn mức và thanh toán.

Đây là **bài tập lớn môn Quản lý dự án phần mềm** tại Học viện Công nghệ Bưu chính Viễn thông, với Enticy Studios là tổ chức chủ quản trong bối cảnh giả định. Giá gói, dự báo doanh thu và nguồn lực là giả định phục vụ bài tập, chưa phải thông tin chào bán hoặc kết quả thực tế.

*[English](./README.md)*

## Định hướng hiện tại

Hướng phát triển thống nhất là **dịch vụ thuê bao với xử lý video cục bộ và quản lý quyền sử dụng trên máy chủ**, theo bộ Pre-project chính thức phiên bản 2.1.

Hai tài liệu Pre-project v2.1 đang ở trạng thái **Draft — chờ phê duyệt**. README phản ánh hướng làm bài đã thống nhất; các mục tiêu sản phẩm vẫn cần được triển khai và nghiệm thu.

## Căn cứ và thứ tự đọc

Đọc hồ sơ theo thứ tự sau để nắm đúng bối cảnh và tránh dùng nhầm tài liệu lịch sử:

1. [Business Case v2.1](./official-docs/00_Pre-project/01_Business_Case_v2.1.docx) — nhu cầu, phương án được chọn, ba nghiệp vụ, mô hình thuê bao và điều kiện triển khai.
2. [Benefit Management Plan v2.1](./official-docs/00_Pre-project/02_Benefit_Management_Plan_v2.1.docx) — lợi ích, cách đo, thẩm định tài chính và trách nhiệm theo dõi sau bàn giao.
3. [Project Charter v2.1](./official-docs/01_Initiating/01_Project_Charter_v2.1.docx) — mục tiêu, phạm vi cấp cao, mốc chính và thẩm quyền dự án.
4. [Assumption Log v2.1](./official-docs/01_Initiating/02_Assumption_Log_v2.1.docx) — các giả định và ràng buộc cần theo dõi.
5. [Stakeholder Register v1.0](./official-docs/01_Initiating/03_Stakeholder_Register_v1.0.xlsx) — các bên liên quan và phương án tham gia.

Tên thư mục `official-docs/` thể hiện nơi lưu bộ hồ sơ dùng để nộp; trạng thái phê duyệt phải được xác định từ nội dung của từng tài liệu. Phiên bản hiện hành của bộ tài liệu định hướng là **v2.1**.

## Người dùng và giá trị sản phẩm

Người dùng mục tiêu gồm doanh nghiệp vừa và nhỏ, giáo viên/giảng viên và người sáng tạo nội dung tại Việt Nam.

Mục tiêu chính:

- Tạo video chuẩn 5 cảnh, dài 60 giây trong dưới 5 phút.
- Hiển thị tiếng Việt đúng, gồm dấu và cách ngắt dòng.
- Giữ văn bản, hình ảnh và nội dung video trên máy người dùng.
- Hỗ trợ video dài bằng xử lý theo luồng, kiểm soát mức sử dụng bộ nhớ.
- Cung cấp mức giá nội địa và tạo doanh thu định kỳ để duy trì vận hành.

Đây là **mục tiêu cần kiểm chứng**, chưa phải tính năng đã hoàn thành.

## Ba nghiệp vụ

| Nghiệp vụ | Phạm vi và đầu ra |
| ---------- | ---------------- |
| **A. Sản xuất video** | Biên tập văn bản và ảnh, chọn mẫu, xem trước, dựng và xuất MP4 trên máy người dùng. |
| **B. Đăng ký, cấp phép và thanh toán** | Tạo tài khoản, quản lý gói thuê bao, kiểm tra quyền xuất, đếm hạn mức, thanh toán, hết hạn và gia hạn. |
| **C. Quản trị và vận hành dịch vụ** | Quản lý mẫu và tài sản đồ hoạ, giám sát máy chủ, hỗ trợ khách hàng và theo dõi lợi ích sau bàn giao. |

## Kiến trúc dự kiến

```text
Trình duyệt
  Văn bản + hình ảnh → JSON mô tả cảnh → Xem trước / dựng từng khung hình
                                               ↓
                          Kiểm tra quyền xuất với máy chủ
                                               ↓
                                  WebCodecs → MP4 cục bộ

Máy chủ dịch vụ
  Tài khoản · Gói thuê bao · Giấy phép sử dụng · Hạn mức · Thanh toán
```

Hiệu ứng được xác định theo số khung hình để trạng thái hình ảnh không phụ thuộc tốc độ chạy của máy. JSON mô tả cảnh là dữ liệu chung giữa trình biên tập, bộ dựng và thư viện mẫu; định dạng chi tiết cần được chốt khi thiết kế.

**Xuất video cần Internet** để kiểm tra giấy phép sử dụng và hạn mức. Dựng và mã hoá diễn ra trong trình duyệt; máy chủ xử lý dữ liệu tài khoản, quyền sử dụng, lượt xuất và thanh toán. Ranh giới thiết kế là **0 byte nội dung người dùng được gửi lên máy chủ**.

## Gói thuê bao dự kiến

| Gói | Giá | Quyền lợi theo Business Case |
| --- | ---: | --------------------------- |
| Miễn phí | 0 VND | 3 video/tháng, watermark, tối đa 720p, đủ 5 mẫu. |
| Cá nhân | 599.000 VND/năm | Không giới hạn số video, 1080p, không watermark. |
| Doanh nghiệp | 4.900.000 VND/năm | Quyền lợi gói Cá nhân, 5 chỗ, hoá đơn VAT, phản hồi hỗ trợ trong 1 ngày làm việc. |

Quyền xuất và hạn mức được quản lý ở máy chủ, trình duyệt thực hiện theo quyền được cấp. Mục tiêu không giới hạn độ dài video cần được chứng minh bằng nguyên mẫu xử lý theo luồng; khác với hạn mức số video của gói Miễn phí.

## Phạm vi và ràng buộc bài tập

- **Nguồn lực:** 3 thành viên, tổng 450 giờ công trong 15 tuần, từ 24/08/2026 đến 06/12/2026.
- **Vốn tiền mặt:** 3.500.000 VND; công sức được tính riêng khi đánh giá hiệu quả kinh tế.
- **Phạm vi sản phẩm:** trình biên tập, bộ dựng/xem trước, xuất MP4, 5 mẫu, lưu/mở dự án và các nghiệp vụ tài khoản, thuê bao, thanh toán, quản trị.
- **Điều kiện tại M2:** chứng minh nguyên mẫu xử lý theo luồng và nộp hồ sơ cổng thanh toán. Nếu nguyên mẫu không đạt, phương án giảm phạm vi là còn 3 mẫu và bỏ lưu/mở dự án, giữ ngày bàn giao.
- **Sau bàn giao:** đơn vị vận hành tiếp nhận dịch vụ và theo dõi lợi ích trong 3 năm. Doanh thu và tỷ lệ gia hạn là kết quả cần đo sau triển khai.

Các phép tính dòng tiền, NPV, BCR và thời gian hoàn vốn hiện nằm trong Benefit Management Plan; tra trực tiếp tài liệu nguồn để tránh sao chép số liệu ở nhiều nơi.

## Trạng thái kho dự án

Kho hiện tập trung vào hồ sơ quản lý dự án và nghiên cứu môn học. Chưa có cấu hình ứng dụng `package.json` hoặc bộ lệnh chạy được xác nhận, nên chưa có hướng dẫn chạy thử phần mềm.

| Thư mục | Vai trò |
| -------- | ------- |
| [official-docs/](./official-docs/) | Bộ tài liệu chính thức dùng để nộp; trạng thái phê duyệt ghi trong từng file. |
| [md-docs/](./md-docs/) | Mẫu hỗ trợ soạn tài liệu mới. |
| [research/](./research/) | Quy tắc, kiến thức từ bài giảng và nội dung đối chiếu dùng để soạn, rà soát hồ sơ. |
| [archive/](./archive/) | Tài liệu Markdown và các phiên bản cũ chỉ dùng để tra cứu lịch sử. |

## Nguyên tắc sử dụng tài liệu

- Lấy bộ Pre-project trong `official-docs/` làm căn cứ cho định hướng sản phẩm và mô hình kinh doanh. Khi README khác tài liệu chính thức, ưu tiên tài liệu chính thức.
- Đọc [quy tắc bắt buộc](./research/01_Quy_tac_bat_buoc.md) trước khi viết hoặc sửa hồ sơ; chọn kỹ thuật phù hợp theo [kiến thức sử dụng](./research/02_Kien_thuc_su_dung.md).
- Mỗi nội dung chi tiết có một tài liệu nguồn. Các tài liệu khác chỉ tóm tắt và dẫn chiếu để tránh duy trì cùng một số liệu ở nhiều nơi.
- Phân biệt mục tiêu, giả định và dự báo với kết quả đã đo hoặc nội dung đã nghiệm thu. Mọi số liệu tài chính, quy mô thuê bao và đơn giá trong hồ sơ là giả định học tập.
- Khi tài liệu còn ở trạng thái **Draft**, cập nhật trực tiếp phiên bản hiện tại. Sau khi **Approved**, tạo phiên bản mới nếu nội dung thay đổi và đưa phiên bản bị thay thế vào `_archive`.
- Khi tăng phiên bản, cập nhật đồng thời tên file, số phiên bản trong tài liệu, lịch sử thay đổi và mọi dẫn chiếu liên quan.
- Hồ sơ được tổ chức theo Pre-project và năm nhóm tiến trình PMBOK: `00_Pre-project`, `01_Initiating`, `02_Planning`, `03_Executing`, `04_Monitoring_and_Controlling`, `05_Closing`.
- Dùng [Document Template v1.0](./md-docs/_template/00_Document_Template_v1.0.md) khi tạo hồ sơ mới. Bản nộp tuân theo cấu trúc: trang bìa → bảng xác nhận và lịch sử cập nhật → mục lục → nội dung.
- Các nhận xét đối chiếu và tài liệu trong `archive/` phải được kiểm tra lại với bộ chính thức trước khi sử dụng.
