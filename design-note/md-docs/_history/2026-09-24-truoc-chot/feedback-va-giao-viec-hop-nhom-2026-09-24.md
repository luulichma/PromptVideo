# Feedback và giao việc cho buổi họp tối 24/09/2026

**Mục tiêu buổi họp:** thống nhất những chỗ cần sửa trong tài liệu từng người, giao đầu ra cụ thể và chốt thứ tự làm để ghép thành bộ hồ sơ hoàn chỉnh. Ưu tiên hoàn thiện **Planning**, đồng thời bắt đầu ghi dữ liệu thực hiện và kiểm soát để có cơ sở viết Closing.

**Nguyên tắc phân công:** Chiến phụ trách module A; Việt Quang phụ trách module B; Quang Anh phụ trách module C. Mỗi người viết đủ phần module của mình và nhận thêm một nhóm tài liệu chung để tổng hợp. Người tổng hợp ghép và kiểm tính nhất quán; phần thiếu hoặc sai vẫn do chủ module bổ sung, sửa và giải thích.

Nhận xét dưới đây dựa trên nội dung đã đọc ngày 24/09, không phải đánh giá năng lực cá nhân hay kết luận nghiệm thu phần mềm. Các trạng thái “đã kiểm chứng” trong bản nháp được xem là thông tin cần đối chiếu với bằng chứng; lần rà này không chạy lại toàn bộ kiểm thử.

## 1. Kết luận để mở đầu cuộc họp

- **Chiến:** phần A đã được tách theo cấu trúc mới, có yêu cầu, ca thử, ước lượng và phân biệt khá rõ kết quả đã có/chưa có. Việc cần tập trung là thống nhất mã WBS, giao tiếp A–B–C và bộ tài liệu chung; bổ sung bằng chứng tích hợp thật.
- **Việt Quang:** bản B có nền tảng nghiệp vụ tốt, đã xét nhiều trạng thái khó như hết hạn, giao dịch trùng, giữ/hoàn lượt. Tuy nhiên cần sửa nội dung quản lý dự án, đặc biệt dự phòng rủi ro, RACI, baseline và thẩm quyền nghiệm thu, trước khi dùng làm nguồn ghép.
- **Quang Anh:** bản C đã nhận diện được quản trị mẫu, hỗ trợ và giám sát, đồng thời có khung chất lượng/nguồn lực. Cần sửa phạm vi, mã mục tiêu, kiểm tra chéo và quyền điều phối; tách phần module C khỏi kế hoạch chung để tránh nhầm trách nhiệm.

**Điểm điều chỉnh cách giao việc:** mỗi người tự hoàn thiện và kiểm bản xuất tài liệu mình tổng hợp. Quang Anh phụ trách ghép hình thức cuối và checklist chất lượng; không phải viết lại tài liệu cho cả nhóm hoặc tự chạy toàn bộ kiểm tra chéo A/B/C.

### Nguồn đối chiếu

| Nguồn | Nội dung đã sử dụng |
| --- | --- |
| [Kế hoạch tài liệu và phân công theo module](ke-hoach-tai-lieu-va-phan-cong-theo-module.md) | Cây thư mục, danh mục P01–P13, E01–E05, M01–M06, C01–C04 và cách ghép hồ sơ. |
| [Bảng phân công gốc](../phan-cong-theo-giai-doan.xlsx), sheet `Việc theo giai đoạn` | Chủ module, người tổng hợp, vòng kiểm tra/xác nhận. Cột trạng thái vẫn có 22 việc “Chưa bắt đầu” và 6 việc “Chưa rà soát”, cần đối soát lại với bản nháp đã có. |
| [A_01 — Yêu cầu và kiểm thử](md-docs/02_Planning/_module-input/A_San_xuat_video/A_01_Yeu_cau_va_kiem_thu_v1.0.md) và [A_02 — WBS, ước lượng, rủi ro](md-docs/02_Planning/_module-input/A_San_xuat_video/A_02_WBS_uoc_luong_rui_ro_v1.0.md) | Feedback phần A và dữ liệu dùng để ghép Planning. |
| [Bản Planning của Việt Quang](../plan-note/planning_b.md) | Feedback phần B, đặc biệt §5–§10. |
| [Bản Planning của Quang Anh](../plan-note/05_Ke_hoach_nghiep_vu_C_v1.0.md) | Feedback phần C, chất lượng, nguồn lực và truyền thông. |
| [WBS chung ngày 23/09](md-docs/02_Planning/05_WBS_and_WBS_Dictionary_v1.0.md) | Hệ mã mới, tổng 498,3 giờ và các vấn đề cần quyết định ở §8. |
| [Project Charter v2.1](official-docs/01_Initiating/01_Project_Charter_v2.1.docx) và [quy tắc từ PM-NDQ](research/01_Quy_tac_bat_buoc.md) | Mục tiêu OB, phạm vi, ngân sách, baseline, rủi ro, RACI và thẩm quyền chấp nhận sản phẩm. |

**Cách đọc mã:** P = Planning; E = Executing; M = Monitoring and Controlling; C = Closing. Ví dụ P10 là bảng lịch/CPM; `C_01` có dấu gạch dưới là file yêu cầu của module C, còn C01 là báo cáo tổng kết. Tên và đường dẫn đầy đủ nằm trong kế hoạch tổng ở trên.

## 2. Những việc cả nhóm phải chốt ngay tối nay

- [ ] **Chốt một hệ mã yêu cầu và WBS để cả ba cùng dùng.**
  - **Tại sao:** A_02 đang dùng 3.x, B dùng 7.x, C dùng 8.x, trong khi WBS chung mới chia theo giai đoạn và đặt phần xây dựng A/B/C tại 4.2/4.3/4.4. Nếu tiếp tục viết riêng, lịch, chi phí và truy vết sẽ không nối được.
  - **Đề xuất và đầu ra:** Chiến chủ trì chọn WBS chung làm bản để rà/chốt; lập bảng mã cũ → mã mới, gồm cả phần thiết kế/kiểm thử của module ở nhánh khác. Giữ `REQ-X-nn` cho yêu cầu chi tiết và `RQ-nn` của Charter. Ghi quyết định để ba người cập nhật đồng thời.

- [ ] **Chốt đúng vai trò và vòng kiểm tra chéo.**
  - **Tại sao:** bản C đang gán Quang Anh vai trò PM và đảo người kiểm tra; điều này làm một số việc trùng người chịu trách nhiệm, một số việc thiếu người nhận.
  - **Đề xuất và đầu ra:** Chiến điều phối và tổng hợp phạm vi/PMP; Việt Quang tổng hợp lịch–chi phí–rủi ro; Quang Anh tổng hợp chất lượng–nguồn lực–truyền thông. Việt Quang kiểm A, Quang Anh kiểm B, Chiến kiểm C. Quyền nghiệm thu sản phẩm vẫn theo Charter.

- [ ] **Chốt đầu ra của lượt giao đầu và số giờ mỗi người thực sự có.**
  - **Tại sao:** kế hoạch cũ dùng 20 giờ/người/tuần, hồ sơ dự án dùng 10 giờ. Lịch 16–29/09 có các mốc đã qua; không thể coi mọi mốc cũ là còn nguyên hiệu lực.
  - **Đề xuất và đầu ra:** lượt đầu ưu tiên sửa đầu vào module và các điểm cản trở ghép. Mỗi người ghi giờ có thể làm trong 48 giờ tiếp theo, file sẽ giao và hạn cụ thể. Nếu còn giữ hạn 29/09 thì phải chốt rõ bộ đầu ra có thể đạt trong thời gian còn lại.

- [ ] **Chốt cách ghi trạng thái và bằng chứng.**
  - **Tại sao:** Excel vẫn ghi chưa bắt đầu trong khi đã có bản nháp; một số tài liệu lại dùng “Done/đã kiểm chứng” nhưng chưa dẫn từng kết quả. Hai cách ghi đều có thể làm nhóm đánh giá sai việc còn lại.
  - **Đề xuất và đầu ra:** phân biệt “đang soạn”, “chờ kiểm tra”, “cần sửa”, “hoàn thành nội bộ”; với phần mềm phân biệt “có mã”, “đã chạy kiểm thử”, “đã kiểm tra chéo”, “được nghiệm thu”. Người nhận việc cung cấp link file và bằng chứng trước khi cập nhật bảng theo dõi.

## 3. Nguyễn Thế Chiến — module A và tích hợp hồ sơ

### 3.1. Feedback nội dung hiện tại

- **Nên giữ:** A_01 đã có luồng chính/ngoại lệ, tiêu chí và TC; phần NF tách số đo hiện có khỏi những thử nghiệm chưa làm. A_02 đã có hoạt động, cơ sở ước lượng và rủi ro. Đây là nền tảng để ghép, không cần viết lại toàn bộ.
- **Cần sửa hệ mã và cách gọi bản chính thức:** A_02 §2 vẫn dùng nhánh 3.x cũ. A_01/A_02 §1 gọi mình là “bản chính thức” trong khi bìa ghi Draft. Nên gọi là “nguồn soạn hiện hành của module A”; trạng thái phê duyệt được ghi riêng.
- **Cần sửa định nghĩa baseline:** A_02 §7 đang lấy đặc tả + RTM + nhánh WBS làm “Scope baseline A”. Cần dẫn Scope Baseline chung gồm Scope Statement + WBS + WBS Dictionary; RTM là tài liệu truy vết dùng kèm.
- **Cần giải quyết điểm nối A–B:** A_01 §3.6.2 nêu trường hợp `complete` thất bại hoặc reservation quá 30 phút: file vẫn được giao và lượt có thể được trả. Đây là quyết định nghiệp vụ ảnh hưởng hạn mức, không chỉ là lỗi giao diện. Cần thống nhất với Việt Quang và ghi kết quả trong đặc tả giao tiếp.
- **Còn thiếu bằng chứng được chính bản A ghi nhận:** A_02 §8 nêu thử tích hợp với máy chủ thật, HAR chứng minh ranh giới dữ liệu, đo trên Chrome/Edge có giao diện, coverage và nhật ký giờ chưa đầy đủ. Vì vậy chưa dùng dấu tích ở WBS để kết luận toàn bộ tiêu chí A đã đạt.

### 3.2. Đầu việc giao Chiến

#### CV-A-01 — Chốt cấu trúc chung, mã và mẫu bàn giao [Tối nay]

- **Cần làm:** hoàn tất quyết định hệ mã/role ở mục 2; mở danh mục hồ sơ G0; cập nhật quy ước trong mẫu để A/B/C cùng làm một cách. Ghi rõ bộ nguồn hiện hành: Pre-project v2.2, Charter v2.1.
- **Tại sao phải làm:** B/C đang chuẩn hóa file; nếu chưa có quy ước thống nhất thì cả hai phải sửa lại sau khi ghép.
- **Đầu ra cần giao:** bảng ánh xạ mã, danh mục file–người tổng hợp, mẫu dùng chung và biên bản quyết định. Không tự suy ra tài liệu đã được phê duyệt từ tên thư mục `official-docs`.

#### CV-A-02 — Rà và hoàn thiện hai file đầu vào A [Lượt 1]

- **Cần làm:** sửa mã WBS theo CV-A-01; sửa định nghĩa baseline và trạng thái tài liệu; rà mỗi REQ/NF có tiêu chí, TC và trạng thái; đánh dấu số liệu/kết luận nào đã có nguồn và phần nào chưa đo.
- **Tại sao phải làm:** phần A sẽ làm đầu vào cho đặc tả, WBS, lịch và kiểm thử chung. Sai mã hoặc kết luận quá mức sẽ lan sang nhiều tài liệu.
- **Đầu ra cần giao:** A_01/A_02 đã sửa, kèm danh sách thay đổi và điểm còn mở để Việt Quang kiểm, Quang Anh xác nhận. Giữ các yêu cầu chưa demo trong phạm vi, không xóa để làm tài liệu trông hoàn tất.

#### CV-A-03 — Chủ trì chốt giao tiếp A–B, C–A và C–B [Lượt 1]

- **Cần làm:** cùng Việt Quang chốt giữ/hoàn/hủy lượt, lỗi mạng, hết hạn và trường hợp xuất quá 30 phút; cùng Quang Anh chốt dữ liệu/trạng thái mẫu, mẫu đã ẩn và hành vi ngoại tuyến; để B/C thống nhất quyền cộng lượt bù và lưu vết. Ghi dữ liệu vào/ra, quy tắc, ngoại lệ và ca thử tích hợp.
- **Tại sao phải làm:** một module có thể tự chạy đúng nhưng cả hệ thống vẫn sai nếu A nhận quyền khác cách B tính lượt, hoặc C công bố mẫu mà A không hiểu.
- **Đầu ra cần giao:** bản P03 — Interface Specification có xác nhận của cả hai phía ở mỗi giao tiếp. Nội dung chưa chốt phải được ghi là câu hỏi/quyết định mở, không chọn ngầm theo một bản riêng.

#### CV-A-04 — Ghép yêu cầu, phạm vi và WBS chung [Lượt 2, sau đầu vào A/B/C]

- **Cần làm:** tổng hợp P02, P04, P05; ghi rõ toàn phạm vi và phạm vi demo; phân bổ cả thiết kế, nền tảng, quản lý, tích hợp và bàn giao; cùng Việt Quang đối soát tổng 498,3 giờ trong WBS với mức 450/trần 495 giờ của Charter.
- **Tại sao phải làm:** cộng ba module chưa tự tạo thành đủ phạm vi dự án. Công việc chung dễ bị bỏ sót hoặc tính hai lần; tổng hiện tại đã vượt trần và còn các mục cần bổ sung.
- **Đầu ra cần giao:** bộ đặc tả–Scope Statement–WBS/Dictionary khớp nhau, bảng giải thích chênh lệch công sức và phương án xử lý để quyết định. Không giảm số giờ tùy ý để vừa ngân sách.

#### CV-A-05 — Hoàn thiện RTM và PMP [Lượt 2, sau kế hoạch thành phần]

- **Cần làm:** lập P09 nối yêu cầu → thiết kế → WBS → module mã → TC → trạng thái; hoàn thiện P01 từ các phần cả ba đã cung cấp. Phải có cách quản lý yêu cầu, phạm vi, lịch, chi phí, chất lượng, nguồn lực, truyền thông, rủi ro, mua sắm và stakeholder; kèm baseline, thay đổi và quản lý phiên bản.
- **Tại sao phải làm:** có đủ file riêng chưa bảo đảm kế hoạch chung nhất quán. PMP phải giải thích nhóm làm và kiểm soát ra sao; đặc tả yêu cầu không thay thế được kế hoạch quản lý yêu cầu.
- **Đầu ra cần giao:** P09 và P01 qua review, dẫn đúng phiên bản P02–P13. Bàn giao quyền cập nhật kết quả kiểm thử trên cùng RTM cho Quang Anh khi chuyển sang theo dõi thực hiện.

#### CV-A-06 — Bổ sung bằng chứng A và hồ sơ tích hợp [Bắt đầu ngay, cập nhật xuyên suốt]

- **Cần làm:** chọn các TC cần chạy lại trên luồng A–B–C thật; lưu kết quả theo ngày/môi trường/phiên bản; ưu tiên xuất đúng quyền, chặn lượt thứ tư, hủy/lỗi và ranh giới dữ liệu. Ghi giờ từ thời điểm làm; số giờ quá khứ chưa có căn cứ giữ trạng thái thiếu dữ liệu.
- **Tại sao phải làm:** kết quả với máy chủ giả lập chưa chứng minh tích hợp thật; Closing cần bằng chứng và giờ thực tế để giải thích kết quả, không chỉ có kế hoạch.
- **Đầu ra cần giao:** A_03/A_04, bằng chứng A và tích hợp; phần tổng hợp E01, báo cáo tình hình M01 và đầu vào M06. Các phép đo chưa thực hiện vẫn để “chưa đo”.

#### CV-A-07 — Kiểm tra chéo C [Sau khi Quang Anh giao bản sửa]

- **Cần làm:** kiểm phạm vi C, ánh xạ mục tiêu, trạng thái mẫu, quyền admin, hỗ trợ/giám sát và đầu vào cho chất lượng/nguồn lực; khi có bản chạy thì kiểm các TC-C theo phân công.
- **Tại sao phải làm:** C là đầu cung cấp mẫu cho A và có thao tác ảnh hưởng B; lỗi C không chỉ ảnh hưởng trang quản trị. Việc review cũng giúp phát hiện phần chung bị gán nhầm cho C.
- **Đầu ra cần giao:** phiếu nhận xét C có vị trí, lý do và tiêu chí sửa; kết quả chạy có bằng chứng. Quang Anh sửa, Việt Quang xác nhận lại.

#### CV-A-08 — Viết tổng kết chung và rà nội dung bộ nộp [Cuối đợt]

- **Cần làm:** viết A_05 và C01 — Final Report từ số liệu đã chốt; xác định mục tiêu đạt/chưa đạt, nguyên nhân lệch và tồn đọng; rà nội dung báo cáo tổng hợp G1 trước khi phát hành.
- **Tại sao phải làm:** cần có người chịu trách nhiệm kết luận chung, đặc biệt khi demo chỉ bao phủ một phần yêu cầu sản phẩm.
- **Đầu ra cần giao:** phần bàn giao A, báo cáo tổng kết và nhận xét cuối cho G1. Phân biệt kết thúc đợt làm bài với nghiệm thu toàn sản phẩm.

## 4. Nguyễn Việt Quang — module B, lịch, chi phí và rủi ro

### 4.1. Feedback nội dung hiện tại

- **Nên giữ:** bản B §3 có quy tắc từng gói và các trạng thái hết hạn, giao dịch trùng, hạn mức, xuất lỗi; §4 đã tách các phần như hóa đơn/chỗ chưa triển khai. Những nội dung này có thể chuyển sang cấu trúc mới sau khi rà.
- **Cần sửa WBS và cơ sở ước lượng:** §5 dùng nhánh 7.x; §6.1 nêu ước lượng top-down để khớp 60 giờ. Cần tách hoạt động và ước lượng từ dưới lên, nhất là gói thanh toán 16 giờ đang chứa nhiều đầu ra. O/P đối xứng quanh M **không tự nó là sai**; vấn đề là mỗi con số phải có căn cứ, không đổi số chỉ để tạo bất đối xứng.
- **Cần sửa dự phòng rủi ro:** §8 gọi khoản 6 giờ là từ EMV nhưng dùng biểu diễn `12/15`, `10/15` từ điểm rủi ro, trong khi bảng P×I cho R-B-01 = 12 và R-B-02 = 10; chính thang của bản B xếp hai mức này vào nhóm trung bình. Chưa thấy phép xác suất × tác động có đơn vị đủ để chứng minh 6 giờ.
- **Cần sửa RACI và thẩm quyền:** §9 dòng 7.4 có Accountable ở cả Việt Quang và Sponsor/GV. Chú thích §4 gọi Chiến là người nghiệm thu chính thức. Cần tách trách nhiệm làm/duyệt hồ sơ, xác nhận nội bộ và người chấp nhận sản phẩm theo Charter.
- **Cần sửa baseline và trạng thái có bằng chứng:** §10 định nghĩa Scope Baseline gồm đặc tả + RTM + WBS; cần dẫn baseline chung đúng thành phần. Các dòng “đã kiểm chứng kỹ thuật” phải nối tới TC/lệnh/kết quả cụ thể, không dùng một tổng số test để suy ra mọi yêu cầu B đều đạt.
- **Cần chốt mô tả thanh toán giả lập:** §3.2 cho phép admin được ủy quyền dùng ở “môi trường thật”, nhưng quy tắc ở §3.3 lại ghi tuyệt đối không map ở Production. Cần một quy tắc môi trường rõ ràng để không lẫn môi trường demo và giao dịch thật.

### 4.2. Đầu việc giao Việt Quang

#### CV-B-01 — Chuyển bản B thành hai đầu vào chuẩn [Lượt 1]

- **Cần làm:** tách bản hiện tại thành B_01 — yêu cầu/kiểm thử và B_02 — WBS/ước lượng/rủi ro; sửa link theo nơi đặt file mới; cập nhật nguồn Pre-project v2.2 và mã theo quyết định chung. Ghi ở bản cũ nơi tiếp tục cập nhật.
- **Tại sao phải làm:** người ghép cần lấy dữ liệu đúng chỗ, tránh vừa sửa bản dài cũ vừa sửa hai bản mới và dùng nhầm phiên bản.
- **Đầu ra cần giao:** B_01/B_02 trong `_module-input/B_Tai_khoan_thue_bao/`, nội dung đã chuyển đủ, các link mở được và danh sách phần cần quyết định còn lại.

#### CV-B-02 — Sửa quy tắc quản lý và chốt hành vi B với A/C [Lượt 1]

- **Cần làm:** sửa baseline, RACI, thẩm quyền nghiệm thu; thống nhất môi trường fake payment; cùng Chiến chốt hoàn/hủy/timeout và kết quả khi `complete` không thành công; cùng Quang Anh chốt cộng lượt bù, chống cộng trùng và audit.
- **Tại sao phải làm:** đây là các quy tắc quyết định quyền sử dụng và hạn mức. Viết khác nhau giữa A/B/C có thể khiến demo được nhưng không giải thích được cách hệ thống tính lượt.
- **Đầu ra cần giao:** bảng quy tắc B đã sửa và nội dung xác nhận gửi vào P03. Mỗi tình huống chính có TC tương ứng; chưa xác định cách xử lý thì ghi điểm mở có chủ.

#### CV-B-03 — Làm lại dữ liệu hoạt động và ước lượng B [Lượt 1]

- **Cần làm:** tách work package khỏi activity; ghi tiền nhiệm, nguồn lực, công sức và thời lượng. Rà riêng thanh toán/gia hạn, hóa đơn, 5 chỗ và giao diện thuê bao; phần chưa rõ có thể giữ planning package với mốc phân rã. Ghi O/M/P, cơ sở, giả định và độ tin cậy.
- **Tại sao phải làm:** gộp nhiều đầu ra vào một dòng 16 giờ làm khó biết phần nào đã xong và còn bao nhiêu việc; lấy 60 giờ làm mục tiêu để chia ngược chưa đủ cơ sở tính lịch chung.
- **Đầu ra cần giao:** B_02 có bảng hoạt động và ước lượng kiểm được. Nếu tổng khác 60 giờ thì giải thích chênh lệch, không ép số về tổng cũ.

#### CV-B-04 — Sửa dự phòng B và xây phương pháp rủi ro chung [Lượt 1 rồi tổng hợp ở lượt 2]

- **Cần làm:** định nghĩa thang xác suất/tác động và ngưỡng ưu tiên; tách điểm P×I khỏi xác suất dùng để tính EMV. Với khoản định lượng, ghi xác suất có căn cứ, tác động bằng giờ hoặc tiền, cách tính và phạm vi sử dụng. Rà lại đề xuất 6 giờ của B, 13 giờ tạm tính của A; thu rủi ro C và rủi ro tích hợp.
- **Tại sao phải làm:** điểm ma trận dùng để xếp ưu tiên, không tự chuyển thành tiền/giờ dự phòng. Nếu gộp số chưa có căn cứ thì ngân sách chung sẽ sai từ đầu.
- **Đầu ra cần giao:** P08 — Risk Management Plan, P13 — Risk Register và bảng dự phòng chuyển sang P11. Tách chi phí phòng ngừa, contingency và management reserve; không cộng hai lần cùng khoản.

#### CV-B-05 — Tổng hợp lịch/CPM và ngân sách dự án [Lượt 2, sau dữ liệu cả ba]

- **Cần làm:** lập P10 từ WBS/activities, phụ thuộc và giờ khả dụng; lập P11 từ giờ công, tiền mặt, dự phòng và nhu cầu mua/thuê. So với Charter và tổng WBS 498,3 giờ; trao đổi với Chiến khi cần điều chỉnh phạm vi, lịch hoặc nguồn lực.
- **Tại sao phải làm:** ba lịch riêng chưa đảm bảo lịch tích hợp khả thi. Chi phí cơ hội, tiền mặt và dự phòng cần được tách để biết dự án thực sự thiếu loại nguồn lực nào.
- **Đầu ra cần giao:** workbook P10/P11 có cơ sở ước lượng, CPM/Gantt, ngân sách theo thời gian, kiểm công suất và danh sách sai lệch. Chiến rà lịch/ngân sách hợp nhất. Không thêm nhiệm vụ rà giấy phép phần mềm.

#### CV-B-06 — Ghi kết quả B và quản lý số liệu thực tế chung [Bắt đầu ngay, cập nhật xuyên suốt]

- **Cần làm:** rà từng trạng thái “đã kiểm chứng” của B, dẫn tới kết quả cụ thể; ghi B_03/B_04 và giờ/chi phí thực tế. Gom dữ liệu cả ba vào E05, issue/change vào M03, phân tích tiến độ/chi phí ở M04; cập nhật Risk Register khi có sự kiện.
- **Tại sao phải làm:** báo cáo tiến độ và tổng kết cần dữ liệu từ việc thực sự đã làm. Dùng giờ kế hoạch làm giờ thực tế hoặc gọi toàn bộ B hoàn thành vì một bộ test xanh sẽ làm kết luận sai.
- **Đầu ra cần giao:** dữ liệu theo kỳ có ngày chốt, nguồn và chủ; danh sách thiếu bằng chứng; số EVM chỉ tính khi đủ đầu vào cùng phạm vi/đơn vị. Ví dụ mô phỏng phải ghi nhãn và tách khỏi kết quả thực.

#### CV-B-07 — Kiểm tra chéo A [Sau khi Chiến giao bản sửa/bản chạy]

- **Cần làm:** đọc A_01/A_02; kiểm các liên kết với B và ranh giới demo/toàn phạm vi. Khi chạy, ưu tiên quyền xuất, watermark/độ phân giải, hết lượt, hủy/lỗi và dữ liệu gửi máy chủ theo TC thống nhất.
- **Tại sao phải làm:** B quyết định quyền nhưng A thực hiện xuất. Kiểm riêng API của B chưa chứng minh file đầu ra áp dụng đúng quyền được cấp.
- **Đầu ra cần giao:** phiếu nhận xét và kết quả TC-A/TC-I liên quan có bằng chứng; Chiến sửa, Quang Anh xác nhận lại.

#### CV-B-08 — Chốt số liệu cuối và bàn giao phần B [Cuối đợt]

- **Cần làm:** viết B_05, đối soát giờ/chi phí cuối với nhật ký; chốt trạng thái issue/change/risk; giao hướng dẫn tài khoản–thuê bao, phần thanh toán giả lập và tồn đọng hóa đơn/chỗ/cổng thật theo hiện trạng thực tế.
- **Tại sao phải làm:** báo cáo cuối cần một bộ số liệu thống nhất và người tiếp nhận biết chính xác phần nào đã dùng được, phần nào còn phải làm.
- **Đầu ra cần giao:** B_05, bảng số liệu cuối kỳ và phụ lục đã kiểm; nội dung B cho C01/C02/C04. Không ghi phát sinh thu tiền thật nếu mới thực hiện giả lập.

## 5. Phạm Quang Anh — module C, chất lượng, nguồn lực và truyền thông

### 5.1. Feedback nội dung hiện tại

- **Nên giữ:** bản C đã nhận diện nhóm chức năng mẫu, tài sản, hỗ trợ, giám sát và đo lợi ích; khung ba cấp kiểm thử có thể dùng làm điểm khởi đầu cho kế hoạch chất lượng chung.
- **Cần sửa phạm vi:** §2.2 đưa âm thanh/video nền vào Assets; REQ-C-02 có audio; §7.2 có TC-A-01 “3 slide, có audio”. Các nội dung này không khớp phạm vi hiện tại và kịch bản chuẩn 5 cảnh/60 giây. TC-A-01/02 cũng không được tự định nghĩa lại khi A đã có bộ mã riêng.
- **Cần sửa giao tiếp mẫu:** REQ-C-01 nói hai trạng thái Draft/Active, §3.6 dùng thêm Inactive; A và mã nguồn hiện dùng Retired. Định nghĩa mẫu “kịch bản JSON” của C cần đối soát với mẫu trình bày/metadata của A. Không coi endpoint đổi trạng thái hiện có là đã làm đủ CRUD/upload.
- **Cần sửa truy vết mục tiêu:** §4 gắn OB-11 với “Nội dung”, OB-12 với “Vận hành”; trong Charter, OB-11 là ngân sách/công sức, OB-12 là độ phủ kiểm thử. Gắn mã cho có sẽ làm RTM mất ý nghĩa. Mã chỉ số MT cũng cần tra đúng bản Benefit Management Plan hiện hành.
- **Cần sửa tổ chức và kiểm tra chéo:** §9 gọi Quang Anh là PM, dòng Unit/Integration chưa có Accountable, vòng E2E bị đảo so với bảng phân công. §10 chỉ yêu cầu thảo luận tại standup chưa đủ mô tả quy trình thay đổi; quyền tái phân công cũng cần theo quyết định chung.
- **Cần bổ sung dữ liệu để lập kế hoạch:** §6 mới có bảng ước lượng ngắn, thiếu cơ sở, hoạt động/phụ thuộc, lịch khả dụng và chi phí. §8 mới có hai rủi ro, chưa ghi đầy đủ chủ/trigger/dự phòng. Yêu cầu health và nơi ghi yêu cầu hỗ trợ của demo chưa được thể hiện thành đầu ra rõ.
- **Cần cập nhật hiện trạng cẩn thận:** RTM C còn ghi “Chờ thực thi” cho những phần đã có một số endpoint quản trị mẫu/metrics trong mã nguồn. Cần tách phần đã có mã, phần đã kiểm thử và phần chưa làm; không đổi cả yêu cầu thành “Done” chỉ vì tìm thấy endpoint.

### 5.2. Đầu việc giao Quang Anh

#### CV-C-01 — Tách phần C và sửa nội dung ngoài phạm vi [Lượt 1]

- **Cần làm:** chuyển yêu cầu/TC C sang C_01, WBS/ước lượng/rủi ro C sang C_02; tách chất lượng toàn dự án sang P06, nguồn lực/truyền thông sang P07/P12. Loại nội dung audio/video nền chưa được chấp thuận khỏi phạm vi đang áp dụng; phần đề xuất mở rộng nếu muốn giữ phải ghi riêng.
- **Tại sao phải làm:** module quản trị là một phần sản phẩm; quản lý chất lượng/nhân lực là công việc chung. Gộp tất cả vào “module C” làm sai phạm vi và khiến Quang Anh bị hiểu là phải làm thay phần của người khác.
- **Đầu ra cần giao:** C_01/C_02 đúng mẫu, bản nháp P06/P07/P12 lấy lại nội dung dùng được; bảng TC chung không định nghĩa lại mã TC-A/B của chủ module.

#### CV-C-02 — Chốt mẫu, quyền quản trị và hỗ trợ với A/B [Lượt 1]

- **Cần làm:** thống nhất một bộ trạng thái mẫu; mô tả mẫu/tài sản và phần dữ liệu A thực sự dùng; ghi rõ thay đổi trạng thái khác CRUD/upload đầy đủ. Cùng B chốt cơ chế nhận diện quyền admin, cộng lượt bù, chống lặp và audit. Bổ sung health và ghi nhận yêu cầu hỗ trợ theo phạm vi demo đã đề xuất.
- **Tại sao phải làm:** C phải cung cấp đúng dữ liệu A sử dụng và thao tác đúng dữ liệu do B quản lý. Các khái niệm chung chưa rõ sẽ kéo theo đặc tả, mã và test khác nhau.
- **Đầu ra cần giao:** REQ-C/luồng/tiêu chí được cập nhật, nội dung C gửi vào P03, bảng phần đã có–cần bổ sung–chưa triển khai. Quyết định chưa chốt vẫn ghi rõ, không tự nhận đã được A/B đồng ý.

#### CV-C-03 — Sửa RTM và viết đủ ca thử C [Lượt 1]

- **Cần làm:** đối chiếu từng REQ-C với đúng mục tiêu/nguồn, không dùng nhãn OB-11/12 sai; kiểm mã chỉ số lợi ích hiện hành; viết các TC đang mới được nhắc tên như TC-C-04/21/22 với dữ liệu, bước và kết quả mong đợi. Thêm TC cho health/hỗ trợ và kiểm quyền. Ghi trạng thái theo bằng chứng.
- **Tại sao phải làm:** khi bảo vệ phải giải thích được chức năng này phục vụ mục tiêu nào và đã kiểm thế nào. Một mã TC chưa có nội dung chưa đủ để người khác chạy lại.
- **Đầu ra cần giao:** RTM C và bộ TC-C đầy đủ; chỗ chưa có mục tiêu phù hợp ghi nguồn/yêu cầu nghiệp vụ cần làm rõ, không gán tùy ý một mã OB.

#### CV-C-04 — Bổ sung hoạt động, cơ sở ước lượng, chi phí và rủi ro C [Lượt 1]

- **Cần làm:** cập nhật mã WBS sau khi chốt; phân rã hoạt động và phụ thuộc B/A; ghi O/M/P có cơ sở, mức sẵn sàng và phần việc chung ngoài module; kê giờ/tiền mặt/nhu cầu mua hoặc mượn. Bổ sung chủ, trigger và phương án dự phòng cho rủi ro, đặc biệt mẫu không tương thích, cộng lượt sai và quá tải vì việc QA.
- **Tại sao phải làm:** bảng 40 giờ hiện tại chưa đủ dữ liệu để ghép CPM hoặc cân nguồn lực. Công sức chất lượng/đóng gói cũng cần được tính ở công việc chung, không coi là miễn phí.
- **Đầu ra cần giao:** C_02 có đủ bảng để Việt Quang tổng hợp P10/P11/P13. Khoản chưa biết ghi giả định/cách xác minh; không mặc định bằng 0.

#### CV-C-05 — Tổng hợp kế hoạch chất lượng đúng trách nhiệm [Lượt 2, sau TC của ba module]

- **Cần làm:** lập P06 từ tiêu chí/TC do A/B/C cung cấp; bổ sung QA, QC, môi trường, ngưỡng, cách lưu bằng chứng, lỗi/thử lại và điều kiện chuyển sang xác nhận phạm vi. Đối soát ca tích hợp với P03 và giữ nguyên mã TC đã chốt.
- **Tại sao phải làm:** chất lượng cần được kiểm ở toàn hệ thống, nhưng Quang Anh không thể tự suy đoán yêu cầu và cách thử thay A/B. Tách QA/QC khỏi nghiệm thu giúp báo cáo đúng thẩm quyền.
- **Đầu ra cần giao:** P06 với người thử–người sửa–người xác nhận rõ ràng; Việt Quang thử A, Quang Anh thử B, Chiến thử C. Ngưỡng mới ngoài Charter phải ghi là đề xuất và được chốt, không tự trở thành yêu cầu chính thức.

#### CV-C-06 — Sửa RACI, kế hoạch nguồn lực và truyền thông [Lượt 2; vai trò chốt ngay tối nay]

- **Cần làm:** lập P07/P12 theo vai trò đã thống nhất; mỗi dòng có đúng một Accountable; tách các việc khác thẩm quyền nếu cần. Thu giờ khả dụng từng người; ghi ai gửi/nhận báo cáo, kênh, tần suất, cách báo vướng và kế hoạch tham gia stakeholder. Dẫn quy trình thay đổi chung trong PMP.
- **Tại sao phải làm:** không rõ ai quyết định/ai thực hiện thì việc dễ bị bỏ trống hoặc làm trùng. Lịch họp và kênh trao đổi phải phù hợp khả năng thực tế, không coi 20:00 Discord đã là cam kết khi chưa chốt.
- **Đầu ra cần giao:** P07/P12 khớp bảng phân công và công suất, không còn tự gán vai trò PM hoặc vòng kiểm tra bị đảo; góp ý về thiếu nguồn lực được chuyển cho Chiến điều phối.

#### CV-C-07 — Hoàn thiện bằng chứng C và tổng hợp hồ sơ chất lượng [Bắt đầu ngay, cập nhật xuyên suốt]

- **Cần làm:** ghi C_03/C_04; lưu bằng chứng module C; mở danh mục bằng chứng. Gom biên bản, hướng dẫn, QA/bài học thành E02–E04; tổng hợp kết quả test vào M05, báo cáo M02 và cập nhật P09 sau khi nhận nguồn từ Chiến.
- **Tại sao phải làm:** kết quả kiểm tra nằm rải rác sẽ khó dùng khi nghiệm thu và bảo vệ. Có đầu mối tổng hợp giúp phân biệt đạt/lỗi/chưa thử, nhưng vẫn phải truy về kết quả do từng người cung cấp.
- **Đầu ra cần giao:** danh mục bằng chứng có đường dẫn; kết quả test và vòng sửa/thử lại; hướng dẫn chung chạy lại được trong phạm vi đã mô tả. Không tự viết thêm số đo hoặc giờ thực tế của A/B.

#### CV-C-08 — Kiểm tra chéo B [Sau khi Việt Quang giao bản sửa/bản chạy]

- **Cần làm:** kiểm B_01/B_02, đặc biệt quy tắc quyền/hạn mức, hết hạn, giao dịch trùng, thanh toán giả lập và dự phòng. Khi chạy, dùng TC-B đã thống nhất, ghi môi trường, kết quả và bằng chứng.
- **Tại sao phải làm:** B kiểm soát quyền xuất và hỗ trợ vận hành C. Kiểm tra độc lập giúp phát hiện trường hợp API trả đúng ở một lần chạy nhưng sai khi hết hạn, lặp hoặc xuất lỗi.
- **Đầu ra cần giao:** phiếu review/test B; Việt Quang sửa, Chiến xác nhận lại. Phần test chưa đủ điều kiện ghi Blocked/Chưa thử, không gộp vào số đạt.

#### CV-C-09 — Gom bàn giao, bài học và bộ trình bày [Cuối đợt]

- **Cần làm:** viết C_05; nhận A_05/B_05; tổng hợp C02/C03/C04 và ghép hình thức G1. Kiểm danh mục file/phiên bản, người nhận vận hành, tồn đọng, hướng dẫn và trách nhiệm đo lợi ích.
- **Tại sao phải làm:** kết thúc đợt cần biết đã bàn giao gì, ai nhận và phần nào cần tiếp tục. Slide phải phản ánh đúng bộ hồ sơ và bằng chứng đã chốt.
- **Đầu ra cần giao:** bộ bàn giao, bài học, slide/kịch bản demo và bản ghép cuối. Chiến rà nội dung chung, Việt Quang rà phụ lục số liệu; mỗi người tự sửa và kiểm bản xuất phần mình.

## 6. Thứ tự giao việc sau buổi họp

**Mốc dưới đây là đề xuất để chốt trong cuộc họp, chưa phải giờ công hoặc hạn đã được thành viên cam kết.** Không giao toàn bộ danh sách trên như các việc phải xong cùng lúc.

| Lượt | Chiến phải giao | Việt Quang phải giao | Quang Anh phải giao | Điều kiện kết thúc lượt |
| --- | --- | --- | --- | --- |
| **Tối 24/09** | Quyết định mã, vai trò, cấu trúc bàn giao; danh sách điểm giao tiếp cần chốt. | Xác nhận giờ khả dụng, phạm vi B còn lại và các vấn đề lịch/chi phí/rủi ro. | Xác nhận giờ khả dụng, danh sách lỗi C cần sửa và vòng kiểm tra chéo. | Mỗi việc ưu tiên có chủ, đầu ra, người kiểm và hạn được ghi lại. |
| **Lượt 1 — ưu tiên 48 giờ sau họp** | A_01/A_02 đã sửa; P03 bản đầu với các điểm A–B/C thống nhất hoặc còn mở. | B_01/B_02 đã chuẩn hóa; sửa EMV/RACI/baseline và giao dữ liệu lịch/chi phí B. | C_01/C_02 đã sửa phạm vi, RTM/TC, hoạt động/chi phí/rủi ro; khung P06/P07/P12. | Sáu file đầu vào dùng chung mẫu; điểm cản trở ghép được xử lý hoặc có người/hạn rõ ràng. Chốt khối lượng vừa giờ đã nhận. |
| **Lượt 2 — sau đầu vào đã rà** | P02–P05, P09, sau đó hoàn thiện P01. | P08/P10/P11/P13; phân tích lệch nguồn lực và ngân sách. | P06/P07/P12; đối soát độ phủ TC và khả năng phân công. | 13 tài liệu Planning khớp phạm vi, mã, số liệu và trách nhiệm; quyết định baseline được ghi đúng trạng thái. |
| **Xuyên suốt từ bây giờ** | Bằng chứng A/tích hợp, E01/M01; review C. | Bằng chứng B, E05/M03/M04/P13; review A. | Bằng chứng C, E02–E04/M02/M05/P09; review B. | Có nhật ký, issue, test và bài học theo thực tế, không đợi đến cuối mới điền lại. |
| **Cuối đợt đã chốt** | A_05, C01 và rà nội dung G1. | B_05, số liệu cuối và phụ lục. | C_05, C02/C03/C04 và ghép hình thức. | Bộ nộp truy được về nguồn; phần chưa đạt và người tiếp nhận được ghi rõ. |

### Cách nhận một đầu việc là đã xong

- [ ] **Có file hoặc phần nội dung cụ thể được giao.** Tại sao: “đã làm Planning” không cho người khác biết lấy gì để ghép.
- [ ] **Có giải thích thay đổi và nguồn số liệu.** Tại sao: người kiểm cần biết nội dung mới giải quyết nhận xét nào và số liệu lấy ở đâu.
- [ ] **Có người kiểm tra và phản hồi đã xử lý.** Tại sao: chủ module tự đánh dấu xong chưa đủ chứng minh nội dung đã thống nhất với phần còn lại.
- [ ] **Có trạng thái phần còn thiếu và người xử lý.** Tại sao: một điểm chưa giải quyết không được biến mất khi chuyển từ bản riêng sang hồ sơ chung.
- [ ] **Cập nhật bảng theo dõi sau khi đối chiếu đầu ra.** Tại sao: nhóm cần nhìn cùng một hiện trạng khi giao lượt tiếp theo; không để Excel và thư mục tài liệu kể hai câu chuyện khác nhau.

## 7. Phiếu chốt phân công ngay trong cuộc họp

Điền các ô trống khi từng người nhận việc. Chưa điền thì chưa coi là đã thống nhất hạn hoặc năng lực. Mỗi người chọn một việc chính làm trước; các việc khác xếp tiếp theo phụ thuộc.

| Thành viên | Mã việc ưu tiên nhận trước | Giờ có thể dành trong 48 giờ tới | File/phần sẽ giao | Hạn thống nhất | Người kiểm tra |
| --- | --- | --- | --- | --- | --- |
| Chiến | CV-A-01, rồi CV-A-02/CV-A-03 | … | … | … | Việt Quang |
| Việt Quang | CV-B-01, rồi các sửa trọng yếu CV-B-02/CV-B-04 | … | … | … | Quang Anh |
| Quang Anh | CV-C-01, rồi CV-C-02/CV-C-03 | … | … | … | Chiến |

**Câu chốt phân công:** mỗi người chịu trách nhiệm viết, sửa và chứng minh module mình. Chiến ghép phạm vi và kế hoạch tổng; Việt Quang ghép lịch, chi phí và rủi ro; Quang Anh ghép chất lượng, nguồn lực và truyền thông. Phần tổng hợp chỉ bắt đầu chốt khi đầu vào đủ, còn nhật ký và bằng chứng phải ghi ngay từ lúc làm.
