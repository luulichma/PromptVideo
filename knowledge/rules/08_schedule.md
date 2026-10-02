# 08 · Schedule: kế hoạch lịch, milestone, ước lượng, CPM, baseline, Control Schedule

Áp cho phần lịch trong PMP, milestone list, network/Gantt, Status Report (SV/SPI). Xem chú giải mức ở `00_index.md`.

## Kế hoạch và hoạt động

- 🔴 Schedule Mgmt Plan: thủ tục, chính sách để lập, giám sát, kiểm soát lịch; là thành phần của PMP (PM06:9).
- 🔴 Work package = cái cần giao (WBS); activity = làm thế nào, khi nào (lịch) (PM06:12).
- 🔴 Activity list gồm: tên, mã, mô tả ngắn (PM06:19).
- 🟡 Activity attributes "may include": predecessor/successor, quan hệ, lead/lag, nguồn lực, ràng buộc, ngày áp đặt, giả định (PM06:20).
- 🔴 Dừng phân rã khi activity theo dõi được, ước được chi phí/nguồn lực, và **giao được cho một người** (PM06:22).
- 🟡 Rolling wave: việc gần làm chi tiết, việc xa để mức planning package (PM06:23–24).

## Milestone

- 🔴 Milestone là sự kiện có thời lượng 0, đánh dấu deliverable lớn, quyết định, phê duyệt, chuyển phase (PM06:17).
- 🔴 Milestone list liệt kê mọi milestone; phân loại internal/external, interim/final, mandatory/optional (PM06:16).
- 🟡 Rule of thumb: ít nhất một milestone mỗi phase hoặc deliverable lớn; dự án dài thì mỗi tháng một mốc (PM06:18).

## Trình tự và ước lượng

- 🔴 4 loại phụ thuộc: mandatory, discretionary, external, internal (PM06:31).
- 🔴 PDM: FS (phổ biến nhất), SS, FF, SF (hiếm); tránh vòng kín và nhiều quan hệ giữa cùng hai activity (PM06:32–33).
- 🔴 Lead = successor bắt đầu sớm; lag = phải chờ (PM06:34).
- 🔴 Ước lượng: analogous (rẻ, kém chính xác) (PM06:42), parametric (PM06:43), three-point (PM06:44), bottom-up (chính xác nhất) (PM06:45).
- 🔴 Duration estimate không gồm lag; có thể kèm khoảng (PM06:49).
- 🔴 Contingency reserve cho rủi ro đã biết, phải ghi rõ; management reserve cho unknown-unknowns, nằm ngoài schedule baseline (PM06:46, PM06:48).
- 🟡 Student Syndrome, Parkinson's law là yếu tố làm sai ước lượng (PM06:41).

## Công thức

- 🔴 tE = (tO + tM + tP) / 3 (PM06:44).
- 🔵 Slide ghi "Beta distribution" cạnh công thức /3; công thức beta chuẩn là (tO + 4tM + tP) / 6. Dùng /3 như slide; nếu dùng /6 phải ghi 🔵.
- 🔴 EF = ES + D − 1; LS = LF − D + 1 (PM06:59).
- 🔴 Total Float = LS − ES = LF − EF; activity trên critical path có float 0 (PM06:57).
- 🔴 Critical path là đường dài nhất qua network, cũng là thời gian ngắn nhất để xong dự án (PM06:56).
- 🔴 SV = EV − PV; SPI = EV / PV (PM06:83).

## Tối ưu, baseline, kiểm soát

- 🔴 Float âm nghĩa là dự án đã trễ so với hạn, cần crashing/fast tracking (PM06:61, PM06:68).
- 🔴 Leveling có thể đổi critical path; smoothing chỉ dời trong float (PM06:62–63).
- 🟡 What-if, Monte Carlo (PM06:65).
- 🔴 Schedule baseline do stakeholder phù hợp duyệt, chỉ đổi qua change control; là thành phần PMP (PM06:70).
- 🔴 Project schedule là bản sống, cập nhật tiến độ thực tế; baseline đóng băng để so (PM06:71, PM06:73–74).
- 🔴 Control Schedule output: SV/SPI, forecast, change request; baseline chỉ đổi qua integrated change control (PM06:79, PM06:88–89).

## Checklist review

- [ ] 🔴 Activity có mã, tên, mô tả, mỗi activity giao một người (PM06:19, PM06:22).
- [ ] 🔴 Có milestone list phân loại, milestone thời lượng 0 (PM06:16–17).
- [ ] 🔴 Có network, critical path, float tính đúng công thức (PM06:57, PM06:59).
- [ ] 🔴 Reserve tách contingency và management (PM06:46, PM06:48).
- [ ] 🔴 Tách schedule baseline và project schedule (PM06:73–74).
- [ ] 🔵 Năng lực 10h/người/tuần và cổng kiểm theo DEC-008; nêu thiếu công suất nếu có.
