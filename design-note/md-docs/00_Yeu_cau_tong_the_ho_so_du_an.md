# Yêu cầu tổng thể bộ hồ sơ quản lý dự án PromptVideo

> **Hạn hoàn thành: 25/11/2026**
> Nộp: đưa toàn bộ tài liệu lên Google Drive của nhóm và chia sẻ quyền **xem** cho GV (`ndquangr@gmail.com`).

## 1. Danh mục tài liệu bắt buộc

### 1.1. Khởi tạo
- [ ] Project Charter
- [ ] Stakeholder Register

### 1.2. Tài liệu yêu cầu của dự án
- [ ] Đặc tả yêu cầu: yêu cầu chức năng và yêu cầu phi chức năng
- [ ] Use Case diagram cho toàn bộ hệ thống
- [ ] UC Specification cho một số nghiệp vụ quan trọng
- [ ] *(Khuyến khích)* Prototype của dự án

### 1.3. Scope
- [ ] Scope Management Plan (tổng quan)
- [ ] WBS và WBS Dictionary

### 1.4. Time
- [ ] Time/Schedule Management Plan (tổng quan)
- [ ] Milestone List
- [ ] Gantt Chart

### 1.5. Cost
- [ ] Cost Management Plan (tổng quan)
- [ ] Cost Estimate và Cost Baseline (S-curve)

### 1.6. Risk
- [ ] Risk Management Plan (tổng quan)
- [ ] RBS (Risk Breakdown Structure) và Risk Register
- [ ] Risk Mitigation & Contingency Plan

### 1.7. Quality
- [ ] Quality Management Plan (tổng quan)
- [ ] Quality Metrics và danh sách Quality Roles / Responsibilities

## 2. Tài liệu bổ sung
- [ ] Bảng chấm công của nhóm
- [ ] Đánh giá của trưởng nhóm cho từng thành viên
- [ ] Bản **final tổng hợp** phiên bản cuối cùng bằng Word/PDF:
  - [ ] Có trang bìa
  - [ ] Có mục lục
  - [ ] Có ảnh chụp prototype (nếu có)

## 3. Nộp bài
- [ ] Upload toàn bộ tài liệu ở mục 1 và 2 lên Drive của nhóm dự án
- [ ] Chia sẻ quyền xem cho GV: `ndquangr@gmail.com`
- [ ] Hoàn tất trước **25/11/2026**

## 4. Đối chiếu hiện trạng (rà ngày 11/11/2026)

Nguồn rà: `design-note/md-docs` trong repo và các file PromptVideo **mà tài khoản Drive của Chiến nhìn thấy được**. Thư mục Drive chung của nhóm (`10FeZ6GM…`) chưa đọc được qua connector, nên các file do thành viên khác sở hữu (bảng tính *Lịch và chi phí*, *Truy vết và kiểm thử*, *Sổ rủi ro*, Charter, Business Case…) **chưa được kiểm**. Cần mở thư mục để xác nhận các ô ❓.

Ký hiệu: ✅ có, đủ ý · ⚠️ có nhưng thiếu/chưa đúng dạng · ❌ chưa có · ❓ chưa kiểm được

| Hạng mục | Trạng thái | Nằm ở đâu / còn thiếu gì |
| --- | --- | --- |
| Project Charter | ✅ repo · ❓ Drive | Repo: Charter v2.1. PMP nhắc tới Charter 2.3 trên Drive, chưa đọc được |
| Stakeholder Register | ✅ | Drive: `03_Stakeholder_Register_v1.1` (Sheet) |
| Yêu cầu chức năng & phi chức năng | ⚠️ | Drive: `02_Scope_and_Requirements_v1.1` §5 có REQ-A/B/C; NFR chỉ trỏ về Charter §4.2 (NF-01…13) và ghi 2 điểm làm rõ → nên chép bảng NFR vào tài liệu |
| UC diagram toàn hệ thống | ⚠️ | Có ở repo (`02_UCD_PromptVideo.puml/.png`); chưa thấy trên Drive. Phải cập nhật theo phạm vi mới (3 mẫu, 4 kiểu cảnh) |
| UC Specification (nghiệp vụ quan trọng) | ❌ | Chưa có. Gợi ý: UC Xuất video MP4, UC Xin quyền xuất/trừ lượt, UC Thanh toán thuê bao, UC Phát hành mẫu |
| Prototype (khuyến khích) | ⚠️ | Có sản phẩm chạy được trong `src/`; chưa có ảnh chụp màn hình để đưa vào hồ sơ |
| Scope management plan | ⚠️ | Chỉ có PMP v2.5 §4.1 (3 gạch đầu dòng). Nên mở rộng: thu thập yêu cầu, lập WBS, xác nhận và kiểm soát phạm vi |
| WBS & WBS Dictionary | ✅ | Drive: `05_WBS_and_WBS_Dictionary_v2.4` |
| Schedule management plan | ⚠️ | PMP v2.5 §4.3, ngắn |
| Milestone list | ✅ | PMP v2.5 §2.2 (M0–M7) |
| Gantt chart | ❓/❌ | PMP trỏ tới bảng tính *Lịch và chi phí*, chưa đọc được; repo không có |
| Cost management plan | ⚠️ | PMP v2.5 §4.4, ngắn |
| Cost estimate | ⚠️ | Repo có P11 v1.0 (số liệu cũ 599h); Drive: bảng tính *Lịch và chi phí* chưa đọc được. Số hiện hành là 656,3h + 18,7h dự phòng = 675h |
| Cost baseline (S-curve) | ❌ | Chưa thấy đường cong S; baseline chưa được Nhà tài trợ duyệt (PMP §5) |
| Risk management plan | ✅ | PMP v2.5 §4.8 (đủ 11 mục) và `08_Risk_Management_Plan_v1.0` |
| RBS | ⚠️ | PMP §4.8 mới liệt kê 5 nhóm rủi ro; chưa vẽ thành cây RBS |
| Risk register | ❓ | Bảng tính *Sổ rủi ro* chưa đọc được; repo có rủi ro rải trong A/B/C_02 |
| Risk mitigation & contingency plan | ⚠️ | Mới có nguyên tắc chung (P08 §2, PMP §4.8); chưa có bảng ứng phó và dự phòng riêng cho từng rủi ro mức Cao |
| Quality management plan | ✅ | PMP v2.5 §4.5 và `06_Quality_Plan_and_Test_Cases_v1.0` |
| Quality metrics | ✅ | PMP v2.5 §4.5: bảng 7 thước đo, kèm chi phí chất lượng |
| Quality roles / responsibilities | ⚠️ | Nằm rải trong PMP §3.2 (RACI) và P06 §3; chưa có danh sách riêng |
| Bảng chấm công | ❌ | Chưa có (nội quy nhóm có ghi giờ hằng ngày qua Zalo, cần chuyển thành bảng) |
| Đánh giá của trưởng nhóm | ❌ | Chưa có |
| Bản final Word/PDF (bìa, mục lục, ảnh prototype) | ❌ | Chưa có |
| Chia sẻ quyền xem cho GV | ❓ | Chưa kiểm được quyền chia sẻ của thư mục |

### Việc cần làm trước 25/11/2026
1. Viết UC Specification cho 3–4 UC quan trọng và cập nhật UC diagram, đưa cả hai lên Drive.
2. Chép bảng NFR từ Charter vào tài liệu Phạm vi và yêu cầu.
3. Hoàn thiện bảng tính Lịch và chi phí: Gantt, cost baseline theo tuần, S-curve.
4. Vẽ RBS; Sổ rủi ro thêm cột ứng phó và dự phòng cho từng rủi ro mức Cao.
5. Tách danh sách Quality Roles/Responsibilities.
6. Mở rộng các mục quản lý Scope, Schedule, Cost trong PMP (hoặc tách thành phụ lục).
7. Lập bảng chấm công, phiếu đánh giá thành viên; chụp ảnh prototype.
8. Ghép bản final Word/PDF (bìa và mục lục) và chia sẻ thư mục cho `ndquangr@gmail.com`.
