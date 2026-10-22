# A_04 — Theo dõi, kiểm thử và thay đổi module A

**Cập nhật:** 24/09/2026 · **Phiên bản:** v1.0 · **Trạng thái:** Dự thảo làm việc, chưa nghiệm thu.

**Chủ nội dung:** Chiến. **Kiểm tra được giao:** Việt Quang. Đây là phân công, không phải chữ ký hay xác nhận đã review. Codex cập nhật nội dung theo ủy quyền của người dùng.

## 1. Trạng thái ngày 24/09

A có editor, render, export và storage; lần chạy mới đạt 79 unit test theo EV-001. Chưa đủ bằng chứng nghiệm thu, đặc biệt REQ-A-05 và REQ-A-10 còn khác hành vi đích. P09 quản lý RTM hợp nhất; [A_01](../../02_Planning/_module-input/A_San_xuat_video/A_01_Yeu_cau_va_kiem_thu_v1.0.md) giữ thiết kế ca thử.

| Nội dung | Kết quả và bằng chứng | Xử lý và người phụ trách |
| --- | --- | --- |
| Unit frontend | 79/79 ca đạt trong 12 file; EV-001 | Chiến giữ log và JSON |
| Complete lỗi hoặc hết TTL | Đọc mã thấy vẫn giao file; TC-A-20/36 chưa chạy theo kỳ vọng mới | ISS-G-001, Chiến/Việt Quang; chưa được báo đã sửa |
| Snapshot mẫu | Project chỉ lưu templateId; EV-005 | ISS-G-002, Chiến/Quang Anh; cần migration và hồi quy |
| Tích hợp máy chủ thật | Docker chưa sẵn sàng; backend có 42 ca thất bại ở fixture và 18 ca đạt | ISS-G-004, Việt Quang; chạy lại backend rồi TC-I |
| Hiệu năng, bộ nhớ và 3 máy | Chỉ có số đo 720p và heap luồng chính trong lịch sử | PP 5.2; chưa kết luận OB-01/02/03 đạt |
| 134 tổ hợp, 100 lần xuất và 10 người thử | Chưa đủ dữ liệu | PP 5.3; giữ REQ/NF và người phụ trách |

## 2. Thay đổi hồ sơ đã thực hiện

DEC-003/004 đổi hệ mã theo WBS chung. DEC-011 đổi kỳ vọng TC-A-20/36, có lưu bản cũ và bắt buộc thử lại. DEC-012 thống nhất Retired và snapshot. Forecast A là 225⅓ giờ, được phân bổ không trùng. CR-G-001 giữ toàn bộ phạm vi và điều chỉnh lịch/nguồn lực. Chưa có actual/ETC để báo SPI/CPI.

## 3. Kiểm tra chéo

Việt Quang được giao kiểm A; Quang Anh xác nhận nội bộ. Kỳ này có rà tự động và rà tài liệu bằng Codex; **chưa có phiếu review do hai thành viên thực hiện**. Mỗi nhận xét cần nêu file/mục, kỳ vọng, kết quả thực tế, kết quả sửa và ngày kiểm lại. Không ký thay người được giao.
