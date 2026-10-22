# 09 · Cost: kế hoạch chi phí, ước lượng, ngân sách, EVA

Áp cho phần chi phí trong PMP, bảng ước lượng, cost baseline, Status Report (CV/CPI/EAC). Xem chú giải mức ở `00_index.md`.

## Định nghĩa

- 🔴 4 loại chi phí: direct, indirect, variable, fixed (PM07:5).
- 🔴 Cost Mgmt Plan mô tả cách lập, cấu trúc, kiểm soát chi phí, gồm: đơn vị đo · mức chính xác · ngưỡng kiểm soát (%) · quy tắc đo EVM (PM07:12).
- 🟡 Alternatives analysis về nguồn tài trợ, make/buy/rent/lease (PM07:10, PM07:24).

## Ước lượng

- 🔴 Ước lượng chi phí làm định kỳ, chính xác dần theo vòng đời (PM07:14).
- 🔴 ROM: −25% đến +75%; Definitive: −5% đến +10% (PM07:14).
- 🔴 Basis of estimates phải có: cách lập, assumption/constraint, khoảng sai số, mức tin cậy (PM07:30).
- 🔴 CoQ: cost of conformance (đào tạo, phòng ngừa, kiểm tra) và nonconformance (lỗi, hỏng, phạt) (PM07:24).
- 🔴 Contingency reserve cho rủi ro đã nhận diện; có thể là %, số cố định, hoặc từ phân tích định lượng (PM07:26).

## Ngân sách và baseline

- 🔴 Cost baseline = ngân sách theo thời gian đã duyệt, **gồm contingency, không gồm management reserve** (PM07:32).
- 🔴 Cost baseline có dạng S-curve (PM07:36).
- 🔴 Funding requirement = cost baseline + management reserve (PM07:37).
- 🔴 PMB = scope + schedule + cost baseline (PM07:54).

## Công thức

- 🔴 cE = (cO + cM + cP) / 3 (PM07:22).
- 🔴 PV, EV, AC theo định nghĩa EVA; báo cáo theo kỳ và lũy kế (PM07:42).
- 🔴 SV = EV − PV; SPI = EV / PV (PM06:83).
- 🔵 CV = EV − AC; CPI = EV / AC. Slide chỉ có trong hình (PM07:46–48), ghi 🔵 khi dùng.
- 🟡 Nhiều PMO coi CPI/SPI trong 0,95–1,10 là ổn (PM07:49).
- 🔵 Slide PM07:49 viết "ahead of schedule or under budget will have lower numbers": đây là lỗi slide; đúng là chỉ số > 1.
- 🔴 VAC = BAC − EAC (PM07:50).
- 🔴 EAC theo 4 kịch bản (PM07:51):
  - Biến động hiện tại tiếp diễn (typical): EAC = BAC / CPI; ETC = EAC − AC.
  - Phần còn lại theo kế hoạch (atypical): ETC = BAC − EV; EAC = AC + ETC.
  - Ước lượng gốc sai: ETC = ước lượng mới; EAC = AC + ETC.
  - Vượt chi nhưng phải giữ hạn: EAC = AC + (BAC − EV) / (CPI × SPI).
- 🔴 TCPI là CPI cần đạt để về đích; theo BAC hoặc theo EAC; > 1 là ngân sách chặt (PM07:52).
- 🔵 TCPI = (BAC − EV) / (BAC − AC), hoặc (BAC − EV) / (EAC − AC). Slide không có dạng text.
- 🔵 Dự án sinh viên: quy chi phí ra giờ công là chính; đổi ra tiền thì ghi đơn giá giờ và nguồn.

## Checklist review

- [ ] 🔴 Cost Mgmt Plan có đơn vị, độ chính xác, ngưỡng %, quy tắc EVM (PM07:12).
- [ ] 🔴 Có basis of estimates và nói rõ loại ước lượng (ROM/Definitive) (PM07:14, PM07:30).
- [ ] 🔴 Cost baseline gồm contingency, không gồm MR; funding = CB + MR (PM07:32, PM07:37).
- [ ] 🔴 EVA có PV/EV/AC, SV/SPI, EAC/ETC/VAC; nói rõ kịch bản EAC đã chọn (PM07:42, PM07:51).
- [ ] 🔵 CV/CPI/TCPI ghi 🔵 hoặc ghi "(hình PM07:46–48)".
- [ ] 🔵 Forecast từ ước lượng dưới lên, không ép về 450/495 giờ; không ghi baseline tài chính đã duyệt khi chưa có (DEC-009).
