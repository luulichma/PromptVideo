# Review — M05 Test Results and Defects v1.0 (xlsx)

| Tài liệu | Luật | Người review | Ngày | Kết luận |
| --- | --- | --- | --- | --- |
| [05_Test_Results_and_Defects_v1.0.xlsx](../../official-docs/04_Monitoring_and_Controlling/05_Test_Results_and_Defects_v1.0.xlsx) | `knowledge/rules/10_quality.md` | Claude (skill `pm-ndq`), chờ Chiến xác nhận | 2026-10-05 | 1 🔴 thiếu · 1 🔴 một phần · 0 🟡 · 2 🔵 |

Cách review: trích Test_Runs và Defects, đối chiếu danh sách TC với P02 (TC-A/B/C) và P03 (TC-I-01…06).

- Test_Runs có 107 TC (A 33, B 49, C 21, I 4); **cả 107 là Not Run**.
- Thiếu 5 TC so với P02/P03: **TC-A-20, TC-A-36** (hai ca kiểm ISS-G-001, đã đổi kỳ vọng theo DEC-011), **TC-B-96**, **TC-I-02**, **TC-I-06**.

## Checklist

| Mục | Mức | Kết quả | Vị trí | Đề xuất sửa |
| --- | --- | --- | --- | --- |
| Báo cáo QC theo deliverable, lỗi đã kiểm lại (PM11:65–67) | 🔴 | Một phần | Test_Runs, Defects | Khung đủ trường (môi trường, người chạy, ngày, thực tế, kết quả). Chưa có lần chạy nào; Defects chưa có lần thử lại. |
| Danh mục TC đầy đủ, nối REQ (P06 §4, PM05:37) | 🔴 | Thiếu | Test_Runs | Thêm 5 TC còn thiếu; TC-A-20/36 là ưu tiên vì gắn lỗi Cao ISS-G-001. |
| TC theo DEC-006: Not Run/Blocked | 🔵 | Đạt | cột Kết quả | — |

## Gợi ý khác (🔵)

1. EV-001 đã có 79 unit test frontend đạt nhưng không TC nào được ánh xạ; ghi các TC-A tương ứng là "Pass (unit, EV-001)" kèm giới hạn, hoặc nêu rõ vì sao chưa ánh xạ.
2. Sheet Defects chỉ có ISS-G-001…003; ISS-G-004 (Docker, Blocked) cũng chặn kiểm thử nên nên có mặt.
