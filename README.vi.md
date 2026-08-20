# Slide-to-Video Generator

Tạo video trình chiếu MP4 từ văn bản và hình ảnh. Toàn bộ quá trình dựng và xuất video chạy trong trình duyệt — không cần máy chủ.

**Trạng thái: đang phát triển.** Chưa dùng được cho việc thật.

*[English](./README.md)*

---

## Ý tưởng

Phần lớn công cụ tạo video bằng AI hiện nay đi theo hướng sinh ra hình ảnh. Hướng đó tốn tài nguyên, khó kiểm soát, và kết quả mỗi lần một khác.

Dự án này đi hướng ngược lại: **mô tả video bằng dữ liệu, dựng bằng HTML/CSS, rồi ghi lại thành MP4 ngay trên máy người dùng.**

Ba hệ quả:

- Không cần máy chủ render — chi phí vận hành gần bằng không
- Ảnh và nội dung không rời khỏi máy người dùng
- Video xuất ra luôn giống hệt nhau, không phụ thuộc máy nhanh hay chậm

---

## Cách hoạt động

```
JSON mô tả cảnh  →  Bộ dựng theo từng khung hình  →  WebCodecs  →  MP4
```

1. **Mô tả cảnh** — Video được biểu diễn bằng một cấu trúc JSON: danh sách cảnh, mỗi cảnh có bố cục, nội dung chữ, ảnh, thời lượng và hiệu ứng.
2. **Dựng theo từng khung hình** — Bộ dựng nhận vào số thứ tự khung hình và trả về trạng thái DOM tại đúng thời điểm đó.
3. **Mã hoá** — Từng khung được vẽ lên canvas rồi đưa vào `VideoEncoder` của WebCodecs, ghép thành MP4.

**Điểm mấu chốt:** mọi hiệu ứng là hàm của số khung hình, không dùng CSS animation chạy theo đồng hồ thật. Đây là lý do video xuất ra không bị trôi hay giật, và cũng là lý do dự án không dùng thẳng thư viện animation có sẵn.

---

## Định dạng cảnh

```json
{
  "fps": 30,
  "width": 1920,
  "height": 1080,
  "scenes": [
    {
      "template": "title-center",
      "duration": 90,
      "content": {
        "title": "Báo cáo quý III",
        "subtitle": "Phòng Kinh doanh"
      },
      "transition": { "in": "fade-up", "out": "fade" }
    }
  ]
}
```

Định dạng này là hợp đồng giữa các phần của hệ thống. Giao diện sinh ra nó, bộ dựng đọc nó, bộ mẫu định nghĩa các giá trị hợp lệ.

---

## Tính năng hiện có

- [ ] Bộ dựng theo từng khung hình
- [ ] Xuất MP4 bằng WebCodecs
- [ ] Xem trước trong trình duyệt
- [ ] Thư viện mẫu trình chiếu
- [ ] Nhập nội dung bằng biểu mẫu
- [ ] Lưu và mở lại dự án

---

## Lộ trình

- Xử lý chữ tiếng Việt đầy đủ — dấu, ngắt dòng, canh chữ trong khung hình dọc
- Ghép chữ và ảnh lên video nền có sẵn
- Sinh nội dung cảnh tự động từ một đoạn văn bản dài
- Xuất kèm file phụ đề
- Khung hình dọc cho mạng xã hội
- Chèn nhạc nền

---

## Giới hạn hiện tại

- Cần trình duyệt hỗ trợ WebCodecs: Chrome 94+, Firefox 130+ trên máy tính, Safari 26+
- Firefox trên Android chưa hỗ trợ
- Safari 16.4 đến 18.7 chỉ mã hoá được phần hình, không có phần âm thanh
- Video càng dài càng tốn bộ nhớ — hiện chưa tối ưu cho video trên 2 phút
- Tốc độ xuất phụ thuộc phần cứng máy người dùng

---

## Chạy thử

```bash
npm install
npm run dev
```

---

## Đóng góp

Dự án đang ở giai đoạn đầu, cấu trúc còn thay đổi nhiều. Nếu muốn tham gia, mở issue trước khi gửi pull request để tránh làm trùng việc.

---

## Nhánh và bối cảnh môn học

Dự án có hai nhánh đi theo hai hướng khác nhau:

| Nhánh | Hướng phát triển |
| ----- | ---------------- |
| `main` | Mã nguồn mở thuần tuý. Không mang bối cảnh doanh nghiệp, không có tài liệu quản lý dự án. |
| `for-subjects-at-uni` | Bài tập môn Quản lý dự án phần mềm. Dự án được đặt trong một **bối cảnh doanh nghiệp giả định** (Enticy Studios là tổ chức chủ quản) để có đủ dữ kiện lập Business Case, phân tích tài chính và quản lý lợi ích. |

Toàn bộ tài liệu quản lý dự án nằm trong [docs/](./docs/), tổ chức theo nhóm tiến trình PMBOK. Bộ tài liệu nhóm Initiating gồm [Business Case](./docs/01_Initiating/01_Business_Case.md), [Benefit Management Plan](./docs/01_Initiating/02_Benefit_Management_Plan.md), [Project Charter](./docs/01_Initiating/03_Project_Charter.md) và [Assumption Log](./docs/01_Initiating/04_Assumption_Log.md).

**Lưu ý:** mọi số liệu tài chính, quy mô người dùng và đơn giá trong các tài liệu đó là **giả định phục vụ học tập**, được đăng ký và theo dõi tại Assumption Log. Các thông số kỹ thuật (hỗ trợ trình duyệt, giới hạn bộ nhớ) là số liệu thật.

---

## Bối cảnh

Dự án khởi nguồn từ bài tập môn Quản lý dự án phần mềm tại Học viện Công nghệ Bưu chính Viễn thông.

## Giấy phép

Apache 2.0
