# Việc cần làm sau khi rà kế hoạch B và C

**Ngày lập:** 2026-09-23 · **Trạng thái:** Draft, chờ Chiến chốt các quyết định ở mục 1.

Nguồn rà soát:

- [planning_b.md](planning_b.md): Việt Quang, nghiệp vụ B.
- [05_Ke_hoach_nghiep_vu_C_v1.0.md](05_Ke_hoach_nghiep_vu_C_v1.0.md): Quang Anh, nghiệp vụ C, kèm kế hoạch chất lượng và nhân lực.

Nơi đặt kết quả: bộ file trong [nhiem_vu_xay_dung_planning.md](../design-note/nhiem_vu_xay_dung_planning.md).

Kết luận ngắn:

- **Bản B** dùng được gần như nguyên vẹn, chỉ cần đổi mã và sửa link.
- **Bản C** lấy được phần yêu cầu, còn phần kế hoạch chung phải sửa trước khi gộp.

## 1. Quyết định cần chốt trước

| ID | Vấn đề | Đề xuất | Người chốt | Trạng thái |
| --- | --- | --- | --- | --- |
| QĐ-01 | C ghi Quang Anh là "PM" và người điều phối tái phân công | Giữ đúng bảng phân công: Chiến gom PMP, chịu trách nhiệm lịch chung và quyết định thay đổi. Quang Anh phụ trách chất lượng, nhân lực và truyền thông. | Chiến | Chưa chốt |
| QĐ-02 | Cặp kiểm tra chéo trong RACI của C bị đảo | Theo bảng phân công: Việt Quang kiểm A, Quang Anh kiểm B, Chiến kiểm C | Chiến | Chưa chốt |
| QĐ-03 | Mã WBS: B và C đang dùng nhánh 7 và 8 của WBS v2.0 (đã lưu trữ) | Nhánh 1 QLDA · 2 Kết nối chung · 3 A · 4 B · 5 C · 6 Bàn giao. Tổng giờ tính lại từ dưới lên, không dùng mốc 450 h cũ. | Chiến | Chưa chốt |
| QĐ-04 | Mã yêu cầu: B và C viết `REQ-`, quy ước ban đầu là `RQ-` | Giữ `REQ-X-nn`; sửa quy ước trong `nhiem_vu_xay_dung_planning.md` | Chiến | Chưa chốt |
| QĐ-05 | Thang rủi ro chung | Lấy thang của B: P và I từ 1–5; P×I ≤ 6 thấp, 7–12 trung bình, ≥ 13 cao; chỉ tính EMV cho rủi ro cao | Việt Quang đề xuất, Chiến chốt | Chưa chốt |
| QĐ-06 | Khung kiểm thử chung | Lấy 3 cấp Unit / Integration / E2E của C §7.1 (khớp với B §7) | Quang Anh đề xuất, Chiến chốt | Chưa chốt |

## 2. Việc của Quang Anh (sửa bản C)

| ID | Việc | Vị trí | Hoàn thành khi |
| --- | --- | --- | --- |
| C-01 | Bỏ vai trò "PM"; sửa RACI và lịch họp theo QĐ-01, QĐ-02 | §9.1, §9.2, §10 | Mỗi dòng RACI có đúng một A, khớp bảng phân công |
| C-02 | Thay §10 bằng quy trình thay đổi chung: mô tả → đánh giá tác động → duyệt/hoãn/từ chối → ghi Change Log → cập nhật baseline từ hiện tại | §10 | Giống quy trình trong B §10, dẫn chiếu tới PMP |
| C-03 | Bỏ audio khỏi REQ-C-02 và bỏ TC-A-01, TC-A-02 do C tự viết. TC của A do Chiến viết; C chỉ gom lại. | §3.4, §7.2 | Không còn audio; bảng §7.2 chỉ dẫn chiếu TC do chủ module viết |
| C-04 | Đổi "JWT" thành cơ chế đang dùng: Identity API, cookie + bearer | §3.4 REQ-C-03 | Khớp `IdentityModule.cs` và mô tả của B |
| C-05 | Thống nhất trạng thái mẫu: REQ-C-01 ghi 2 trạng thái, §3.6.1 ghi 3 (Draft/Active/Inactive) | §3.4, §3.6.1 | Một danh sách trạng thái; nói rõ có "CRUD" thật hay chỉ đổi trạng thái |
| C-06 | Cập nhật RTM theo code đã có: `GET /api/admin/templates`, `POST /api/admin/templates/{key}/status`, `GET /api/admin/metrics` (`src/backend/PromptVideo.Api/Modules/Admin/AdminModule.cs`) và `TemplateAndAdminTests.cs` | §4 | Cột Status phân biệt: đã có code, đã có test, chưa làm |
| C-07 | Thêm 2 yêu cầu đang thiếu so với phạm vi demo: **tình trạng máy chủ (health)** và **ghi một yêu cầu hỗ trợ** | §3.4, §3.6, §4, §5 | Mỗi yêu cầu có REQ, TC, gói WBS |
| C-08 | Viết đủ TC-C-04, TC-C-21, TC-C-22: bước thử, dữ liệu, kết quả mong đợi, ngưỡng | §3.6, §7 | Mỗi REQ-C có ít nhất một TC mô tả đầy đủ |
| C-09 | Thêm cơ sở ước lượng cho PERT. Không để O và P cách đều M một cách máy móc. | §6 | Mỗi gói có căn cứ và độ tin cậy |
| C-10 | Thêm chi phí và dự phòng nhánh C, mốc lịch, phụ thuộc | §6 | Có bảng giống B §6.2–6.3 |
| C-11 | Bổ sung Risk Register nhánh C: thêm cột trigger, contingency, chủ rủi ro; nhận diện thêm rủi ro (ví dụ: cộng lượt bù làm sai hạn mức của B, lộ dữ liệu trên dashboard) | §8 | Theo thang QĐ-05 |
| C-12 | Đổi mã WBS 8.x thành 5.x theo QĐ-03 | §5, §6 | Mã khớp WBS tổng |

## 3. Việc của Việt Quang (sửa bản B)

| ID | Việc | Vị trí | Hoàn thành khi |
| --- | --- | --- | --- |
| B-01 | Đổi mã WBS 7.x thành 4.x; bỏ dẫn chiếu "60 h, 13,3% của 450 h" | §5, §6 | Mã khớp WBS tổng, giờ tính từ dưới lên |
| B-02 | Sửa link `../../plan-note/03-backend-core.md` thành `design-note/plan-note/03-backend-core.md` | §2.1, §4, §6, §11 | Link mở được |
| B-03 | Rà lại PERT: O và P hiện cách đều M nên tE luôn bằng M. Giữ cơ sở ước lượng nhưng ghi O/M/P thật. | §6.1 | O/M/P phản ánh rủi ro từng gói |
| B-04 | Tách gói 4.4 (16 h, gồm thanh toán + gia hạn + hóa đơn + 5 chỗ) nếu phần chưa triển khai cần là planning package riêng | §5 | Hóa đơn và 5 chỗ ghi rõ là planning package, chưa làm |
| B-05 | Kiểm tra lại "Đã kiểm chứng kỹ thuật" trong RTM: mỗi dòng dẫn tới test hoặc lệnh cụ thể trong `03-backend-core.md` | §4 | Không còn dòng nào ghi đã kiểm chứng mà không có bằng chứng |
| B-06 | Chốt với Quang Anh giao tiếp C→B cho REQ-C-05 (admin cộng lượt bù vào `UsagePeriod`) | §3.6.3 | Có endpoint/quy tắc riêng, ghi audit, không phá concurrency token |

## 4. Việc của Chiến (gom vào bộ tài liệu chung)

Làm sau khi chốt mục 1. Riêng G-01 đến G-03 làm được ngay với phần B.

| ID | Việc | Lấy từ | Đích |
| --- | --- | --- | --- |
| G-01 | Gom thuật ngữ, quy tắc gói, RQ-1…RQ-8, REQ-B, NF-B | B §2.2, §3.3–3.5 | `02_Requirements_Specification` |
| G-02 | Gộp "0 byte nội dung" (B RQ-7, NF-B-02) và "giám sát ẩn danh" (C QC-4) thành `NF-G-01` | B, C | `02_Requirements_Specification` |
| G-03 | Viết hợp đồng A↔B: reserve → complete/cancel, idempotency key, snapshot quyền, mã lỗi 401/403/429 | B §3.1, §3.6.3–3.6.4 | `03_Interface_Specification` |
| G-04 | Viết C→A (định dạng mẫu JSON, trạng thái mẫu, `/api/templates`) và C→B (cộng lượt bù, B-06) | C §3.3, §3.6; B-06 | `03_Interface_Specification` |
| G-05 | Gom REQ-C sau khi sửa C-03 đến C-08 | C §3 | `02_Requirements_Specification` |
| G-06 | Lập bảng phạm vi trình diễn so với v2.1, lấy từ phần "chưa triển khai" của B và C | B §11, C §11 | `04_Project_Scope_Statement` |
| G-07 | Ghép nhánh WBS 4.x (B) và 5.x (C); kiểm quy tắc 100% và 8/80 | B §5, C §5 | `05_WBS_and_WBS_Dictionary` |
| G-08 | Gom RTM của B (21 dòng) và C (7 dòng trở lên) | B §4, C §4 | `09_Requirements_Traceability_Matrix.xlsx` |
| G-09 | Đưa quy trình thay đổi của B §10 vào PMP làm quy trình chung | B §10 | `01_Project_Management_Plan` |
| G-10 | Viết phần A theo cùng cấu trúc với B để ba bản thống nhất | Mẫu của B | `_module-input/A_San_xuat_video/` |

## 5. Dữ liệu chuyển cho người tổng hợp khác

| Người nhận | Dữ liệu | Lấy từ | Đích |
| --- | --- | --- | --- |
| Việt Quang | PERT, phụ thuộc, mốc đợt 2 tuần (M-JOIN 19/09, M-RUN 25/09, M-TEST 27/09, M-CLOSE 29/09) | B §6.1–6.2, C §6 | `10_Schedule_and_CPM.xlsx` |
| Việt Quang | Contingency 6 h của B, phần chi phí của C (C-10), procurement | B §6.3–6.4 | `11_Cost_Budget_Procurement.xlsx` |
| Việt Quang | Thang đo và định nghĩa rủi ro (QĐ-05); R-B-01…09, R-C | B §8, C §8 | `08_Risk_Management_Plan`, `13_Risk_Register.xlsx` |
| Quang Anh | Khung 3 cấp kiểm thử (QĐ-06), 18 TC-B, TC-C | C §7.1, B §7 | `06_Quality_Plan_and_Test_Cases` |
| Quang Anh | RACI nhánh B, lịch họp (standup 20:00 Discord), kênh báo lỗi GitHub Issues | B §9, C §9.2 | `07_Resource_and_Communication_Plan`, `12_RACI_and_Communication_Matrix.xlsx` |

## 6. Thứ tự làm

1. **Chiến** chốt QĐ-01 đến QĐ-06 và báo nhóm.
2. **Làm song song:** Quang Anh sửa C-01 đến C-12; Việt Quang sửa B-01 đến B-06; Chiến làm G-01, G-02, G-03, G-10.
3. **Kiểm tra chéo:** Chiến kiểm bản C, Việt Quang xác nhận. Quang Anh kiểm bản B, Chiến xác nhận.
4. **Chiến** làm G-04 đến G-09. Việt Quang và Quang Anh nhận dữ liệu ở mục 5 để lập 06, 07, 08, 10–13.
5. Cập nhật cột trạng thái trong `phan-cong-theo-giai-doan.xlsx`.
