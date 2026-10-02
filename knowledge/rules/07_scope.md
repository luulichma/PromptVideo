# 07 · Scope: Requirements, Scope Statement, WBS, Validate/Control Scope

Áp cho Scope/Requirements Management Plan, Requirements Specification, RTM, Interface Specification, Scope Statement, WBS + WBS Dictionary, Scope Validation Record. Xem chú giải mức ở `00_index.md`.

## Định nghĩa

- 🔴 Product scope = tính năng, chức năng của sản phẩm; project scope = toàn bộ công việc để làm ra sản phẩm (PM05:4).
- 🔴 Scope creep = thay đổi không kiểm soát; gold plating = thêm tính năng khách không yêu cầu (PM05:5).
- 🔴 Requirements nói cái cần; scope nói cái sẽ giao và không giao (PM05:17).
- 🟡 Thuật ngữ yêu cầu: business requirement, business rule, constraint, external interface requirement … (PM05:18).

## Kế hoạch

- 🔴 Scope Mgmt Plan: cách lập Scope Statement, tạo WBS, duyệt và duy trì scope baseline, lấy formal acceptance (PM05:13).
- 🔴 Requirements Mgmt Plan: lập/theo dõi/báo cáo yêu cầu; config mgmt cho thay đổi yêu cầu; ưu tiên; metric; cấu trúc truy vết (PM05:14).

## Requirements và RTM

- 🔴 Yêu cầu phải unambiguous (đo được, test được), traceable, complete, consistent, được key stakeholder chấp nhận (PM05:36).
- 🔴 RTM liên kết yêu cầu với business/project objectives và deliverable đáp ứng (PM05:37).
- 🟡 Cột RTM mẫu: Req ID · Description · Business Objective · Design Doc · Code Module · Test Case · Status (PM05:38).
- 🟡 Decision matrix có trọng số để ưu tiên yêu cầu / chọn MVP (PM05:30–31).

## Scope Statement

- 🔴 Mô tả toàn bộ scope (project + product), mô tả deliverable chi tiết (PM05:45).
- 🔴 Team và stakeholder phải đồng ý trước khi thực hiện (PM05:45).
- 🟡 Có thể ghi rõ exclusions (PM05:45).
- 🔴 Không phải mọi yêu cầu đã thu thập đều vào scope (PM05:40).

## WBS và WBS Dictionary

- 🔴 Mức thấp nhất của WBS luôn là deliverable; lập theo deliverable, không theo hành động (PM05:54).
- 🔴 WBS không phải danh sách việc đầy đủ, không phải lịch, không phải sơ đồ tổ chức (PM05:54).
- 🔴 Quy tắc 100%: tổng con = 100% cha, không chứa việc ngoài scope (PM05:55).
- 🟡 Heuristic: mỗi work package ≤ 1 kỳ báo cáo; 8/80 giờ; "đủ nhỏ" = giao, đo, quản được (PM05:55).
- 🔴 Work package là mức thấp nhất; planning package dùng cho rolling wave (PM05:52).
- 🟡 Tổ chức theo phase, theo deliverable chính, hoặc kết hợp; top-down hoặc bottom-up (PM05:53).
- 🟡 WBS Dictionary "may include": code of accounts, mô tả, assumption/constraint, đơn vị phụ trách, milestone (PM05:57).
- 🔴 Scope baseline = Scope Statement + WBS + WBS Dictionary đã duyệt; chỉ đổi qua change control (PM05:56).

## Validate và Control Scope

- 🔴 Validate Scope = formal acceptance deliverable đã hoàn thành, do customer/sponsor/stakeholder có thẩm quyền; sau Control Quality, trước Close (PM05:60, PM05:63).
- 🔴 Ba kết quả: chấp nhận · lỗi phải sửa · change request qua CCB (PM05:64).
- 🔴 Output: accepted deliverables có sign-off; WPI kèm lý do không chấp nhận; cập nhật RTM (PM05:68).
- 🔴 Control Scope: mọi thay đổi và corrective/preventive action qua Integrated Change Control (PM05:71).
- 🟡 Variance analysis theo WBS: kế hoạch · thực tế · chênh lệch · nguyên nhân · hành động (PM05:75, PM05:77).

## Checklist review

- [ ] 🔴 Mỗi REQ đo được, test được và có mặt trong RTM nối tới objective và TC (PM05:36–37).
- [ ] 🔴 WBS lá là deliverable; tổng con = 100% cha (PM05:54–55).
- [ ] 🔴 Có Scope Statement được đồng ý và WBS Dictionary (PM05:45, PM05:57).
- [ ] 🔴 Validation record ghi người chấp nhận, kết quả, lý do không đạt (PM05:64, PM05:68).
- [ ] 🔵 Mã REQ/NF/TC theo DEC-004; WBS 6 giai đoạn theo DEC-003; phần chưa làm vẫn có REQ (DEC-007).
