# Tài liệu quản lý dự án PromptVideo

Bộ hồ sơ phục vụ bài tập lớn môn Quản lý dự án phần mềm tại Học viện Công nghệ Bưu chính Viễn thông, với Enticy Studios là tổ chức chủ quản trong bối cảnh giả định.

**Định hướng thống nhất:** dịch vụ web theo gói thuê bao thường niên; trình duyệt dựng và mã hoá video cục bộ, máy chủ quản lý tài khoản, quyền sử dụng, hạn mức và thanh toán. Xem [README dự án](../README.vi.md) để tra ba nghiệp vụ, các gói dự kiến và ràng buộc nguồn lực.

## Căn cứ và thứ tự đọc

1. [Business Case v2.1](../official-docs/00_Pre-project/01_Business_Case_v2.1.docx) — nhu cầu, lựa chọn phương án và mô hình kinh doanh.
2. [Benefit Management Plan v2.1](../official-docs/00_Pre-project/02_Benefit_Management_Plan_v2.1.docx) — lợi ích, thẩm định tài chính và theo dõi sau bàn giao.
3. [Project Charter v2.1](../official-docs/01_Initiating/01_Project_Charter_v2.1.docx).
4. [Assumption Log v2.1](../official-docs/01_Initiating/02_Assumption_Log_v2.1.docx).
5. [Stakeholder Register v1.0](../official-docs/01_Initiating/03_Stakeholder_Register_v1.0.xlsx).
6. [WBS & WBS Dictionary v2.0](./02_Planning/00_WBS_v2.0.md) — bản Markdown làm việc ở Planning.

Danh mục trên phản ánh các file hiện có ngoài thư mục lưu trữ. Không suy ra trạng thái phê duyệt từ tên thư mục “official”; hai bản Pre-project v2.1 hiện là dự thảo chờ phê duyệt.

## Vai trò các thư mục

| Thư mục | Cách sử dụng |
| -------- | ------------ |
| [official-docs/](../official-docs/) | Bộ tài liệu chính thức để nộp. Lấy Pre-project tại đây làm căn cứ cho hướng sản phẩm và kinh doanh. |
| [md-docs/](./) | Bản Markdown, mẫu và ghi chú làm việc. Hiện chưa có đầy đủ bản Markdown tương ứng với bộ chính thức. |
| [research/](../research/) | Luật và kiến thức từ bài giảng, dùng nội bộ để soạn và kiểm tra hồ sơ. |
| Các thư mục `_archive` | Lịch sử, không dùng làm mặc định cho trạng thái hiện tại và không cần đọc khi nắm bối cảnh. |

Hồ sơ tổ chức theo **Pre-project + 5 nhóm tiến trình PMBOK**: `00_Pre-project`, `01_Initiating`, `02_Planning`, `03_Executing`, `04_Monitoring_and_Controlling`, `05_Closing`. Tạo tài liệu trong nhóm tiến trình tương ứng khi phát sinh.

## Quy tắc soạn và cập nhật

- Đọc [quy tắc bắt buộc](../research/01_Quy_tac_bat_buoc.md) trước khi viết hoặc sửa hồ sơ; chọn kỹ thuật theo [kiến thức sử dụng](../research/02_Kien_thuc_su_dung.md).
- Mỗi nội dung chi tiết có một tài liệu nguồn; nơi khác tóm tắt và dẫn chiếu. Thẩm định tài chính hiện nằm trong Benefit Management Plan v2.1; nghiên cứu môn học đề nghị chuyển sang Business Case khi chỉnh hồ sơ. Đó là việc cần rà soát, chưa phải thay đổi đã thực hiện.
- Mọi số liệu tài chính, quy mô thuê bao và đơn giá là giả định học tập. Phân biệt mục tiêu với kết quả đã đo và trạng thái đã nghiệm thu.
- Tên file theo dạng `Thứ_tự_Tên_tài_liệu_vX.Y`, dùng đuôi phù hợp: `.md`, `.docx` hoặc `.xlsx`.
- Khi còn **Draft**, hoàn thiện trực tiếp bản hiện tại. Sau khi **Approved**, tạo phiên bản mới khi nội dung thay đổi và lưu bản bị thay thế vào `_archive`.
- Khi tăng phiên bản, cập nhật tên file, phiên bản trong tài liệu, lịch sử thay đổi và các dẫn chiếu liên quan.
- Bản nộp gồm phiên bản mới nhất. Giữ lịch sử cập nhật trong tài liệu.
- Theo mẫu môn học: trang bìa → bảng xác nhận và lịch sử cập nhật → mục lục và nội dung.

Mẫu Markdown: [Document Template v1.0](./_template/00_Document_Template_v1.0.md).

## Lưu ý về tài liệu làm việc cũ

[Ghi chú ngày 09/09/2026](./_plan-note/2026-09-09_plan-note.md), WBS và [bản đối chiếu nghiên cứu](../research/03_Doi_chieu_voi_tai_lieu_hien_co.md) có thể còn dẫn tới tên file, mã hoặc cách chia nghiệp vụ của phiên bản trước. Kiểm tra với bộ chính thức trước khi dùng để viết tài liệu mới.

Chỉ mục này cập nhật đường dẫn và định hướng; việc cập nhật nội dung WBS, ghi chú và bộ hồ sơ chính thức được thực hiện riêng theo yêu cầu của bài tập.
