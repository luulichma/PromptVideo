# Review — P13 Risk Register v1.0 (xlsx)

| Tài liệu | Luật | Người review | Ngày | Kết luận |
| --- | --- | --- | --- | --- |
| [13_Risk_Register_v1.0.xlsx](../../official-docs/02_Planning/13_Risk_Register_v1.0.xlsx) | `knowledge/rules/13_risk.md` | Claude (skill `pm-ndq`), chờ Chiến xác nhận | 2026-10-05 | 3 🔴 thiếu · 1 🔴 một phần · 0 🟡 · 3 🔵 |

Cách review: trích sheet `Risk_Register` và kiểm bằng script.

- 25 rủi ro: R-A-01…11, R-B-01…09, R-C-01…05; mã theo DEC-004.
- Mọi dòng: P (1–5) khớp xác suất 10/30/50/70/90% và I (1–5) khớp nhóm giờ của DEC-005; điểm P×I và ưu tiên là công thức.
- Tổng EMV 98,8 giờ (exposure tham khảo); contingency chỉ lấy 46,2 giờ sau khi loại phần trùng base (xem P11).

## Checklist

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| Owner cho mỗi rủi ro (PM08:62) | 🔴 | Đạt | cột "Chủ rủi ro" | — |
| Chiến lược ghi đúng tên slide (PM08:64) | 🔴 | Thiếu | cột "Ứng phó / dự phòng" | Chỉ có mô tả hành động. Thêm cột "Chiến lược": Avoid / Mitigate / Transfer / Accept (threat); Exploit / Enhance / Share / Accept (opportunity). |
| Residual và secondary risk (PM08:68) | 🔴 | Một phần | cột "Còn lại / thứ cấp" | Cột có nhưng nội dung là ghi chú reserve giống nhau, không nêu rủi ro còn lại/thứ cấp. Ghi cụ thể, ví dụ R-A-01: "residual: chỉ chứng minh 1080p trên máy mượn; secondary: phụ thuộc lịch người cho mượn". |
| Ngân sách và lịch cho response (PM08:68) | 🔴 | Thiếu | — | Thêm cột "Giờ/chi phí ứng phó" và "Hạn thực hiện". |
| Có opportunity, không chỉ threat (PM08:4, PM08:64) | 🔴 | Thiếu | — | Cả 25 dòng là threat. Thêm ít nhất 2–3 opportunity (ví dụ thư viện có sẵn rút ngắn 4.3.3; dùng lại mô-đun Templates cho 4.4.1). |
| Contingent response có trigger (PM08:69) | 🔴 | Đạt | cột "Dấu hiệu kích hoạt" | — |
| EMV = P × I, nối contingency reserve (PM08:55, PM07:26) | 🔴 | Đạt | cột EMV; P11 Reserves | — |
| Thang theo DEC-005, mã theo DEC-004 | 🔵 | Đạt | — | — |

## Gợi ý khác (🔵)

1. Cột "Trạng thái" dùng ba cách ghi: "Theo dõi", "Đang theo dõi", "Open". Chuẩn hoá một danh sách (Open / Monitoring / Occurred → ISS / Closed).
2. Chữ dính rất nhiều trong sheet ("Encoder1080p", "Không chứng minhOB-01", "Probefalse trên máyđo", "lầnhai", "nằmbase", "TrượtDOCgate", "lịchsanbằng"…). Sửa trong xlsx (nguồn JSON đã lưu trữ cùng script).
3. R-A-06 (năng lực 10 giờ/người/tuần, điểm 16 – Cao) trùng nội dung với R-C-05; P08 đã nêu cần đối soát 8,4 giờ. Ghi kết quả đối soát vào cả hai dòng.
