# Review — P07 Resource and Communication Plan v1.0

| Tài liệu | Luật | Người review | Ngày | Kết luận |
| --- | --- | --- | --- | --- |
| [07_Resource_and_Communication_Plan_v1.0.md](../02_Planning/07_Resource_and_Communication_Plan_v1.0.md) | `knowledge/rules/11_resource.md`, `knowledge/rules/12_communication-stakeholder.md` | Claude (skill `pm-ndq`), chờ Chiến xác nhận | 2026-10-05 | 2 🔴 thiếu · 5 🔴 một phần · 0 🟡 · 2 🔵 |

Kiểm RACI §5 bằng script: mọi dòng có đúng một A (tính `A/R` là một A). Đạt PM09:16.

## Checklist — Resource (`11_resource.md`)

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| Team resource plan đủ mục PM09:18 | 🔴 | Một phần | §1, §2, §3 | Có roles, responsibilities, authority. Thiếu org chart (sơ đồ), competences, tuyển/nhận diện, đào tạo, phát triển team, khen thưởng, giải phóng. Với nhóm cố định 3 người, ghi "không áp dụng" kèm lý do cho tuyển/giải phóng; thêm 1–2 câu cho competences và đào tạo (ví dụ ai học WebCodecs, .NET). |
| Physical resource plan đủ mục PM09:18 | 🔴 | Một phần | §4 | Có nhận diện nhu cầu và tiêu chí sẵn sàng. Thiếu RBS, thu nhận, phân bổ, kiểm soát, giải phóng (máy đo, VPS, tên miền, Docker). |
| RBS theo category/type (PM09:30) | 🔴 | Thiếu | — | Thêm cây RBS: Labor (3 người, kỹ năng) · Equipment (máy tham chiếu, máy thử) · Service (VPS, tên miền, cổng thanh toán) · Material (tài sản đồ hoạ). |
| RACI: mỗi dòng đúng một A (PM09:16) | 🔴 | Đạt | §5 | — |
| Team charter do team cùng viết, rà định kỳ (PM09:19) | 🔴 | Một phần | §2 | Nội dung quy tắc tốt. Chưa có ghi nhận cả ba người cùng soạn/đồng ý và lịch rà lại. Thêm dòng "Đồng ý: Chiến, Việt Quang, Quang Anh — ngày" và "rà lại tại mỗi gate". |
| Resource requirements theo work package, có basis (PM09:29) | 🔴 | Một phần | §3 | §3 ghi công suất theo người/tuần, không theo WP. Trỏ sang P05 §2 (owner + O/M/P mỗi gói) làm basis of estimates, hoặc thêm bảng giờ theo WP × người. |
| Resource calendar / team assignments (PM09:39) | 🔴 | Đạt | §3 | — |
| Vai làm/kiểm/xác nhận theo DEC-002; tổng hợp theo DEC-001 | 🔵 | Đạt | §1, §5 | — |
| Năng lực 10h/người/tuần (DEC-008), nêu thiếu công suất (DEC-009) | 🔵 | Đạt | §3 | 60 giờ trong đợt 24/09–07/10. |

## Checklist — Communication và Stakeholder Engagement (`12_communication-stakeholder.md`)

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| Bảng SEAM có C và D cho mỗi stakeholder chủ chốt (PM04:28) | 🔴 | Một phần | §7 | Có D. Cột C toàn bộ là "chưa đánh giá". Đánh giá C bằng một lần trao đổi rồi ghi mức U/R/N/S/L kèm ngày. |
| Chiến lược thu hẹp C → D (PM04:25) | 🔴 | Đạt | §7 cột Hành động | — |
| Communications plan: định dạng, tần suất, người soạn, lưu trữ (PM04:45) | 🔴 | Đạt | §6 | — |
| Mỗi luồng ghi push / pull / interactive (PM04:50) | 🔴 | Thiếu | §6 | Thêm cột "Phương pháp": cập nhật hằng ngày = push; file nguồn/E02 = pull; review/họp gate = interactive. |
| Issue log có tác động, ưu tiên, owner, hạn (PM10:54) | 🔴 | Không áp dụng | — | Thuộc M03. |
| Mã ISS-G-nnn duy nhất (DEC-004) | 🔵 | Đạt | §6 | — |

## Gợi ý khác (🔵)

1. Chỉ có 5 nhóm stakeholder ở §7, trong khi Stakeholder Register có SH-01 → SH-08 nhân vật giả định. Ghi rõ §7 dùng bối cảnh môn học, hoặc thêm cột SH-nn để nối hai tài liệu.
2. Đã sửa chữ dính "fixture5", "Theo5gate" trong lần review này.
