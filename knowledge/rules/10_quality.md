# 10 · Quality: Quality Plan, test case, Manage/Control Quality, báo cáo chất lượng

Áp cho Quality Plan and Test Cases, Quality Assurance record, Quality and Test Report. Xem chú giải mức ở `00_index.md`.

## Định nghĩa

- 🔴 Quality = mức sản phẩm/dịch vụ/quy trình đáp ứng yêu cầu và kỳ vọng stakeholder (PM11:4).
- 🔴 Quality khác grade: low quality luôn là vấn đề, low grade thì có thể không (PM11:5).
- 🔴 QA lo quy trình, phòng ngừa, cả vòng đời; QC lo sản phẩm, phát hiện lỗi, phần kiểm thử (PM11:6).
- 🔴 Inspection: tĩnh, rà tài liệu/code/thiết kế; testing: động, chạy phần mềm (PM11:56, PM11:18).

## Plan Quality

- 🔴 Plan Quality Management là process lập kế hoạch chất lượng (PM11:8).
- 🔴 Quality Mgmt Plan là subsidiary plan của PMP, **phải nêu QC, QA và quản lý chất lượng** của dự án (PM11:19).
- 🔴 Quality metric: định nghĩa cách đo chất lượng (tỷ lệ lỗi, bug, failure …) (PM11:20).
- 🔴 Test & inspection planning: cách test/inspect để đáp ứng nhu cầu, hiệu năng, độ tin cậy (PM11:17–18).
- 🔴 CoQ 4 loại: Prevention · Appraisal · Internal failure · External failure (PM11:13–14).

## Manage Quality (QA)

- 🔴 Biến Quality Plan thành hoạt động thực hiện được; làm suốt dự án (PM11:22–23).
- 🟡 Công cụ: checklist (PM11:26), quality audit (PM11:32), problem solving (PM11:35), PDCA (PM11:37), Six Sigma (PM11:38–39).
- 🟡 Quality report "may include": vấn đề leo thang, đề xuất cải tiến, đề xuất corrective action (PM11:41).
- 🟡 Test and evaluation documents: checklist chuyên dụng, RTM chi tiết; là đầu vào Control Quality (PM11:41).

## Control Quality (QC)

- 🔴 Theo dõi và ghi kết quả hoạt động chất lượng để đảm bảo output đầy đủ, đúng, đáp ứng kỳ vọng (PM11:43).
- 🔴 Manage dùng công cụ để phòng ngừa; Control dùng công cụ để điều tra lỗi thực tế (PM11:51).
- 🔴 Rule of seven: 7 điểm liên tiếp cùng một phía đường trung bình là bất thường (PM11:54).
- 🔴 Mọi deliverable phải được kiểm; lỗi đã sửa phải kiểm lại (PM11:65).
- 🔴 Output: verified deliverables, validated changes, change request (qua change control), WPI, quality control measurements, test & evaluation documents (PM11:65–67).
- 🟡 Retrospective, 5 whys để tìm nguyên nhân (PM11:48–49).

## Công thức

- 🔴 Net Benefit = Total Benefits − Total Costs; BCR = Total Benefits / Total Costs (PM11:12).
- 🔵 Tỷ lệ đạt = số TC Passed / số TC đã chạy; báo riêng số Not Run/Blocked, không gộp vào mẫu số.
- 🔵 Mật độ lỗi = số defect / đơn vị kích thước (module, KLOC, REQ).

## Checklist review

- [ ] 🔴 Quality Plan có phần QA, phần QC, phần quản lý chất lượng (PM11:19).
- [ ] 🔴 Có quality metric đo được, có ngưỡng (PM11:20).
- [ ] 🔴 Có kế hoạch test và inspection (PM11:17–18).
- [ ] 🔴 Có CoQ đủ 4 loại hoặc lý do bỏ (PM11:13–14).
- [ ] 🔴 Báo cáo QC ghi kết quả từng deliverable và lỗi đã kiểm lại (PM11:65–67).
- [ ] 🔵 TC theo DEC-006: có ngày, build, môi trường, người chạy, nguồn; chưa chạy ghi Not Run/Blocked.
- [ ] 🔵 TC cũ không đổi nghĩa; TC nối được về REQ qua RTM (`07_scope.md`).
