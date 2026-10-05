# Review — Business Case v2.2

| Tài liệu | Luật | Người review | Ngày | Kết luận |
| --- | --- | --- | --- | --- |
| [01_Business_Case_v2.2.md](../00_Pre-project/01_Business_Case_v2.2.md) | `knowledge/rules/01_business-case.md` | Claude (skill `pm-ndq`), chờ Chiến xác nhận | 2026-10-05 | 0 🔴 thiếu/sai · 2 🟡 · 3 🔵 |

Kiểm trích dẫn: `node knowledge/check-citations.mjs` → 10 trích dẫn, 0 lỗi, 0 cảnh báo.

## Checklist

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| Trả lời "vì sao nên làm" bằng benefit đo được (PM03:18, PM01:20) | 🔴 | Đạt | §1, §3 | Sáu mục tiêu đều có chỉ số (≥85%, ≤15%, 134 tổ hợp, 0 byte…). |
| Biện minh bằng business need / cost-benefit / strategy (PM03:18) | 🔴 | Đạt | §2 need; §1, §4 NPV/BCR | Phần strategy chỉ ngầm qua định vị thị trường §2. Nên thêm một câu nối với chiến lược tổ chức (Charter §2.3 đã có) để đủ ba trụ. |
| Business needs · Analysis of the situation · Recommendation (PM03:6) | 🟡 | Đạt | §2 · §2, §4 · §1 | — |
| Feasibility theo khía cạnh liên quan (PM03:9) | 🟡 | Đạt | §5 | Economic nằm ở §4 "Kinh tế dự án" và BMP; chấp nhận được. |
| Project selection: scoring model (PM03:8, PM03:11) | 🟡 | Một phần | §4 | Có 4 phương án và 6 tiêu chí nhưng không còn điểm/trọng số (đã lược từ v2.1). Nên đưa lại bảng điểm có trọng số (5 bước PM03:11) hoặc dẫn tới phụ lục chứa bảng đó, để Recommendation có căn cứ định lượng. |
| Công thức PV/NPV/BCR đúng slide (PM03:8, PM11:12) | 🔴 | Không áp dụng | §1 chỉ nêu kết quả | Công thức và dòng tiền ở BMP §4; kiểm ở review BMP. |
| Số tiền, số giờ khớp Charter và DEC-009 | 🔵 | Lệch có chủ đích | §1, §5: 450 giờ | Giữ số gốc (tài liệu Pre-project). Khi ra phiên bản mới, thêm ghi chú "forecast 599h, xem CR-G-001" thay vì sửa số (PM08:103). |
| Recommendation nêu rõ phương án được chọn và lý do | 🔵 | Đạt | §1, §4 | — |

## Kiểm chéo số liệu

| Số liệu | Business Case | BMP v2.2 | Charter v2.1 | Kết quả |
| --- | --- | --- | --- | --- |
| NPV | +433 triệu | +433.432.934 VND (§4) | +433 triệu (§2.2) | Khớp |
| BCR | 3,52 | 3,52 = PV lợi ích / PV chi phí | 3,52 | Khớp; công thức PV là diễn giải 🔵 của PM11:12 |
| Payback | "khoảng 11 tháng" | chiết khấu ~0,94 năm | ghi rõ danh nghĩa và chiết khấu | Khớp về số (0,94 năm ≈ 11 tháng), nhưng BC không ghi là payback chiết khấu |
| Doanh thu Năm 1–3 | 74,6 / 240,7 / 487,4 triệu | 74,6 / 240,7 / 487,4 | — | Khớp |
| Tiền mặt | 3.500.000 VND | — | CT-02, §8 | Khớp |

## Gợi ý khác (🔵)

1. §1 nên ghi "hoàn vốn chiết khấu khoảng 11 tháng (0,94 năm)" để khớp cách ghi của Charter v2.1 và AS-39.
2. "Hợp đồng thực hiện dự án" ở dòng Tài liệu liên quan chưa có file trong repo.
