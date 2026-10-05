# Review — P11 Cost, Budget and Procurement v1.0 (xlsx)

| Tài liệu | Luật | Người review | Ngày | Kết luận |
| --- | --- | --- | --- | --- |
| [11_Cost_Budget_Procurement_v1.0.xlsx](../../official-docs/02_Planning/11_Cost_Budget_Procurement_v1.0.xlsx) | `knowledge/rules/09_cost.md` | Claude (skill `pm-ndq`), chờ Chiến xác nhận | 2026-10-05 | 1 🔴 thiếu · 2 🔴 một phần · 1 🟡 · 2 🔵 |

Cách review: trích 5 sheet gồm công thức rồi tính lại.

- Estimates: 32 gói × 80.000 VND/giờ = 47.920.000 VND; lệch 149 giờ so với 450 và 104 giờ so với 495 (công thức). Khớp P05.
- Reserves: contingency = Σ P × I = 46,2 giờ (B 33,4 + C 12,8; A và R-C-05 = 0 vì trùng base) = 3.696.000 VND. Công sức + contingency = 645,2 giờ.
- Time_Phased_Budget: 32 tuần; tổng các tuần = 47.920.000 (WP 34.160.000 + PP 13.760.000), dòng đối chiếu ≈ 0. Có bảng lũy kế để vẽ S-curve.
- Funding: 1,5 + 0,7 + 0,6 + 0,3 + 0,4 dự phòng = 3.500.000 VND = trần Charter; cột "Đã chi" trống vì chưa có chứng từ.

## Checklist

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| Cost Mgmt Plan: đơn vị, độ chính xác, ngưỡng %, quy tắc EVM (PM07:12) | 🔴 | Một phần | P01 §3 dòng Chi phí; P11 ghi chú | Có đơn vị (giờ, VND) và quy tắc làm tròn. Thiếu ngưỡng kiểm soát % (Charter §8.5 có "một mốc vượt 120%") và quy tắc đo EVM (ví dụ 0/100 hay 50/50 cho WP). Bổ sung trong P01 hoặc một sheet "Plan" của P11. |
| Basis of estimates và loại ước lượng ROM/Definitive (PM07:14, PM07:30) | 🔴 | Thiếu | Estimates cột "Cơ sở" | Có basis từng gói và khoảng O–P. Chưa ghi loại ước lượng: WP gần Budget/Definitive, PP là ROM (−25% / +75%). Thêm cột "Loại ước lượng" và mức tin cậy. |
| Cost baseline gồm contingency, không gồm MR; funding = CB + MR (PM07:32, PM07:37) | 🔴 | Một phần | Reserves r35–r37 | 599 + 46,2 = 645,2 giờ đúng nghĩa cost baseline (chưa duyệt). MR "chưa phân bổ"; chưa có dòng funding requirement = CB + MR. |
| Cost baseline dạng S-curve (PM07:36) | 🔴 | Đạt | Time_Phased_Budget r48+ | Có dữ liệu lũy kế; nên thêm biểu đồ. |
| cE = (O + M + P)/3 (PM07:22) | 🔴 | Đạt | Estimates | — |
| Make/buy/rent (PM07:10, PM07:24) | 🟡 | Một phần | Procurement | Có kế hoạch mua/thuê, chưa có so sánh phương án (ví dụ VPS thuê vs dịch vụ PaaS miễn phí). |
| Forecast không ép về 450/495 (DEC-009) | 🔵 | Đạt | Estimates r42–r46 | — |

## Gợi ý khác (🔵)

1. Bốn loại chi phí direct/indirect/variable/fixed (PM07:5) chưa được phân loại; có thể thêm cột ở Funding.
2. Chữ dính trong cột "Cơ sở" giống P10 ("Forecast23h", "sang3.1"…).
