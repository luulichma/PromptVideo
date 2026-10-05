# Review — P08 Risk Management Plan v1.0

| Tài liệu | Luật | Người review | Ngày | Kết luận |
| --- | --- | --- | --- | --- |
| [08_Risk_Management_Plan_v1.0.md](../02_Planning/08_Risk_Management_Plan_v1.0.md) | `knowledge/rules/13_risk.md` | Claude (skill `pm-ndq`), chờ Chiến xác nhận | 2026-10-05 | 3 🔴 thiếu · 2 🔴 một phần · 0 🟡 · 2 🔵 |

Thang P/I và ngưỡng điểm khớp DEC-005. Các mục về Risk Register (owner, residual/secondary, ngân sách response) chấm ở P13.

## Checklist — 11 mục của PM08:15

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| Risk strategy | 🔴 | Đạt | §2 | — |
| Methodology | 🔴 | Đạt | §1 | — |
| Roles & responsibilities | 🔴 | Đạt | §1 | — |
| Funding | 🔴 | Đạt | §2 | Contingency 46,2 giờ (B 33,4 + C 12,8); management reserve chưa phân bổ; 400.000 VND reserve tiền mặt. |
| Timing | 🔴 | Đạt | §1, §4 | Review tại cổng DOC và khi vượt trigger. |
| Risk categories (RBS) (PM08:16) | 🔴 | Thiếu | — | Thêm RBS: Kỹ thuật (WebCodecs, bộ nhớ, trình duyệt) · Tích hợp (A–B–C) · Nguồn lực (giờ, Docker) · Bên ngoài (cổng thanh toán, pháp lý) · Quản lý (lịch, CR). Có thể dùng bảng 10 nhóm cho phần mềm (PM08:30). |
| Stakeholder risk appetite | 🔴 | Thiếu | — | Ghi mức chấp nhận: ví dụ sponsor không chấp nhận vượt 3,5 triệu tiền mặt; nhóm chấp nhận rủi ro lịch nếu giữ phạm vi (CR-G-001). |
| Định nghĩa probability và impact; impact theo cost, time, scope, quality (PM08:18) | 🔴 | Một phần | §1 | Impact chỉ định nghĩa theo giờ; tiền/phạm vi/chất lượng chỉ "ghi thêm đơn vị thực". Thêm bảng I1–I5 cho cả bốn chiều. |
| P&I matrix | 🔴 | Đạt | §1 | Ngưỡng 1–6 / 7–12 / 13–25. Nên vẽ lưới 5×5 cho dễ đọc. |
| Reporting formats | 🔴 | Một phần | §4 | Có nơi báo cáo (P13, M01) nhưng chưa nêu định dạng/trường báo cáo rủi ro trong Status Report. |
| Tracking | 🔴 | Đạt | §4 | — |

## Checklist bổ sung

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| Có opportunity, không chỉ threat (PM08:4, PM08:64) | 🔴 | Thiếu | §2 | §2 chỉ có chiến lược cho threat (tránh, giảm, chuyển giao, chấp nhận). Thêm chiến lược opportunity (exploit, enhance, share, accept) và ví dụ cơ hội (dùng lại mô-đun, thư viện có sẵn rút ngắn 4.3.3). |
| Contingent response có trigger (PM08:69) | 🔴 | Đạt | §1, §2 | Yêu cầu trigger cho mọi risk chấp nhận. |
| EMV = P × I, nối sang contingency reserve (PM08:55, PM07:26) | 🔴 | Đạt | §1, §2 | — |
| Thang theo DEC-005, mã R-X-nn theo DEC-004 | 🔵 | Đạt | §1 | — |

## Gợi ý khác (🔵)

1. Đối soát khoản 8,4 giờ R-C-05 / R-A-06 rồi ghi kết quả, vì §2 đang để mở.
2. Bỏ câu "cập nhật bằng Codex"; thêm khối Xác nhận và lịch sử theo `00_index.md` §4.
