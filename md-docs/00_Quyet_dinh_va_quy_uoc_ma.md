# Quyết định tổ chức hồ sơ và danh mục mã PromptVideo

**Hiệu lực nội bộ:** 24/09/2026. Người dùng giao quyền quyết định các phương án trong bản feedback; các lựa chọn dưới đây được áp dụng trực tiếp vào bộ soạn. Đây là quyết định về nội dung/kế hoạch hồ sơ, không phải bằng chứng sponsor đã nghiệm thu sản phẩm hoặc thành viên đã xác nhận giờ làm thực tế.

## 1. Quyết định đã chốt

| Mã | Quyết định áp dụng | Lý do và hệ quả |
| --- | --- | --- |
| DEC-001 | Chiến điều phối/tổng hợp PMP và phạm vi; Việt Quang tổng hợp lịch, chi phí, rủi ro; Quang Anh tổng hợp chất lượng, nguồn lực, truyền thông và đóng gói. | Chủ A/B/C tiếp tục viết và sửa nội dung riêng; người tổng hợp không phải viết lại thay chủ module. |
| DEC-002 | A: Chiến làm, Việt Quang kiểm, Quang Anh xác nhận nội bộ; B: Việt Quang làm, Quang Anh kiểm, Chiến xác nhận; C: Quang Anh làm, Chiến kiểm, Việt Quang xác nhận. | Tách review tài liệu/test chéo với chấp nhận sản phẩm theo Charter. Mỗi dòng RACI chỉ có một Accountable. |
| DEC-003 | Giữ WBS chung theo sáu giai đoạn phát triển: 1 Quản lý, 2 Yêu cầu, 3 Thiết kế, 4 Xây dựng, 5 Tích hợp/kiểm thử, 6 Triển khai/bàn giao. A/B/C phần xây dựng lần lượt 4.2/4.3/4.4. | Không đổi toàn dự án về ba nhánh nghiệp vụ. Công việc thiết kế, kiểm thử và bàn giao của module ánh xạ sang đúng nhánh chung, không cộng lại hai lần. |
| DEC-004 | Yêu cầu chi tiết REQ-X-nn; phi chức năng NF-X-nn; quy tắc QT-X-n; ca thử TC-X-nn, tích hợp TC-I-nn; rủi ro R-X-nn; X=A/B/C/G theo loại. | Mã Charter RQ-nn, OB-nn, NF-nn giữ nguyên. Mã bị thay thế chỉ còn trong bảng ánh xạ hoặc bản lịch sử. Không cấp lại mã đã bỏ. |
| DEC-005 | Thang P1–P5 tương ứng 10%,30%,50%,70%,90%; tác động công sức I1 ≤2h, I2 >2–4h, I3 >4–8h, I4 >8–16h, I5 >16h. Điểm P×I 1–6 thấp, 7–12 trung bình, 13–25 cao. | Đây là quy ước lập kế hoạch bằng phán đoán của nhóm, không phải xác suất đo thực tế. Tác động tiền/phạm vi/chất lượng ghi thêm bằng đơn vị gốc; lấy mức cần xử lý cao hơn nếu hậu quả nghiêm trọng. EMV giờ = xác suất × giờ hậu quả; không lấy điểm P×I để tính tiền. |
| DEC-006 | QA có rà tài liệu/quy trình; QC dùng unit/integration/E2E và kiểm tra đầu ra theo yêu cầu. Chủ module viết TC riêng, Quang Anh tổng hợp, vòng test chéo theo DEC-002. | TC cũ không được đổi nghĩa ở tài liệu khác. Kết quả có ngày, build, môi trường, người chạy và nguồn; chưa chạy ghi Not Run/Blocked. |
| DEC-007 | Giữ toàn phạm vi Charter, tách tập demo. Demo chuẩn 5 cảnh/60 giây; không audio, AI, khung dọc hoặc upload nội dung video lên máy chủ. | Phần chưa triển khai vẫn có REQ/WBS/truy vết. Không bỏ yêu cầu để vừa giờ hoặc để viết báo cáo đạt. |
| DEC-008 | Lập lịch hồ sơ mới 24/09–07/10/2026; dùng năng lực kế hoạch 10h/người/tuần. Các cổng: 26/09 đầu vào, 29/09 Planning bản ghép, 02/10 bằng chứng/kiểm soát, 05/10 bộ bàn giao dự thảo, 07/10 review hồ sơ. | Các cổng là mục tiêu quản lý được chọn, không phải chứng nhận đủ công suất hoặc hạn nộp của giảng viên. Bảng lịch sẽ nêu thiếu công suất khi có. Lịch dự án Charter 24/08–06/12 và mốc M0–M7 giữ để đối chiếu. |
| DEC-009 | Dùng forecast từ ước lượng dưới lên, không ép tổng về 450/495 giờ. Chọn phương án giữ phạm vi, lập CR-G-001 để điều chỉnh nguồn lực/lịch chi tiết theo forecast; chưa tăng tiền mặt 3,5 triệu. | Charter là nguồn so sánh; phần vượt trần hiển thị rõ. Quyết định nội bộ không tự ghi sponsor đã phê duyệt ngân sách mới. Không ghi baseline tài chính đã được duyệt khi quyết định đó chưa tồn tại. |
| DEC-010 | Thanh toán giả lập chỉ ở môi trường non-Production và endpoint giả lập có quyền Admin; mọi minh họa ghi không thu tiền thật. | Cổng thật, hóa đơn thật và quyền doanh nghiệp chưa chứng minh vẫn là phần còn lại. “Môi trường demo có máy chủ thật” không đồng nghĩa Production. |
| DEC-011 | Quy tắc A–B: giữ lượt tại reserve; complete giữ lượt đã tính; cancel hoàn đúng một lần; cancel qua tháng hoàn vào UsagePeriod gốc; hết hạn trả phí không xóa lịch sử sử dụng tháng. TTL reservation 30 phút. | Đích yêu cầu: chỉ giao kết quả xuất khi complete được xác nhận; lỗi/mất mạng giữ file cục bộ chờ xử lý và báo chưa hoàn tất. Mã hiện tại còn giao file khi complete lỗi/hết TTL: ISS-G-001, chưa được coi là đã sửa. Cách hỗ trợ xuất dài/đối soát là việc kỹ thuật còn phải kiểm chứng. |
| DEC-012 | Mẫu dùng Draft/Active/Retired. C quản lý metadata/trạng thái; bộ trình bày tương ứng có phiên bản ở frontend. Dự án đã lưu giữ snapshot mẫu; Retired không được chọn mới khi tải danh mục hiện hành, dự án cũ vẫn mở/xuất với cảnh báo. | Khi offline chỉ dùng snapshot/danh mục đã biết, có nhãn thời điểm; không khẳng định đó là danh mục Active mới nhất. Manifest/version phải tương thích trước khi công bố. API đổi trạng thái hiện có không chứng minh đã có toàn bộ CRUD/upload. |
| DEC-013 | Hỗ trợ C→B phải có Admin, mã yêu cầu hỗ trợ, khóa chống lặp, lý do, cập nhật quota nguyên tử và audit; việc này là hợp đồng dự kiến IF-CB-01. | Chưa có endpoint thì ghi chưa triển khai. Không dùng thao tác sửa DB tay làm chứng cứ đã có tính năng hỗ trợ. |
| DEC-014 | Markdown (`md-docs/`) là nguồn soạn duy nhất; mọi docx/xlsx sinh từ Markdown, kể cả 9 workbook làm việc, nằm trong `official-docs/<giai đoạn>/` và được track trên git. Trạng thái Draft/Approved ghi trong từng file, không suy ra từ thư mục. *(Sửa 05/10/2026: bỏ thư mục outputs.)* | Mỗi workbook một người sửa; không tạo nhiều RTM/Risk Register cùng là bản hiện hành. Bản cũ ở plan-note được đánh dấu lịch sử, giữ nguyên để truy vết. |

## 2. Danh mục mã và cách sử dụng

| Đối tượng | Mẫu mã | Ví dụ / quy tắc |
| --- | --- | --- |
| Module | A, B, C | A video; B tài khoản/thuê bao; C quản trị/vận hành. |
| Yêu cầu Charter | RQ-nn, OB-nn, NF-nn | Giữ nguyên, dẫn đúng mục tiêu, không dùng OB-11 làm mục tiêu nội dung. |
| Yêu cầu module | REQ-X-nn, NF-X-nn | REQ-A-01; NF-B-02. NF-G-01 riêng tư chung; mã NF riêng có thể dẫn tới mã chung, không đổi nghĩa âm thầm. |
| Quy tắc nghiệp vụ | QT-X-n | QT-B-1 thay RQ-1 của bản B; QT-C-1 thay QC-1 của bản C. |
| WBS | n.m hoặc n.m.k | 4.2.1 editor; 4.3.1 tài khoản; 4.4.1 mẫu/tài sản. |
| Hoạt động | ACT-<WBS>-nn | ACT-4.3.1-01. Chỉ WP có hoạt động chi tiết; PP có mốc phân rã. |
| Kiểm thử | TC-A/B/C-nn, TC-I-nn | Mã đã có được bảo toàn. TC-I-01…06 theo danh mục tích hợp ở P03. |
| Giao tiếp | IF-AB-01, IF-CA-01, IF-CB-01 | Xuất/quyền; danh mục mẫu; hỗ trợ/quota. |
| Rủi ro | R-A/B/C/G-nn | G là rủi ro chung; điểm P/I khác xác suất/tác động tiền. |
| Vấn đề, thay đổi, quyết định | ISS-G-nnn, CR-G-nnn, DEC-nnn | Duy nhất toàn dự án, có module ảnh hưởng trong cột riêng. |
| Bằng chứng | EV-nnn | Duy nhất trong evidence/INDEX.md, giữ nguồn/ngày/môi trường. |
| Đầu việc họp | CV-A/B/C-nn | Giữ 25 mã đã giao; khác Activity của lịch dự án. |
| Tài liệu | P01…P13; E01…E05; M01…M06; C01…C04; G0/G1 | Danh mục hồ sơ, không phải WBS. C_01 là đầu vào module C, khác tài liệu Closing C01. |
| Mốc | M0…M7; DOC-01…DOC-05 | M0…M7 từ Charter; DOC-01=26/09,02=29/09,03=02/10,04=05/10,05=07/10. |

## 3. Bảng ánh xạ mã cũ

| Nguồn cũ | Đích hiện hành | Cách đối chiếu |
| --- | --- | --- |
| QĐ-01/02/03/04/05/06 | DEC-001/002/003/004/005/006 | Các quyết định đã chốt, không còn “tạm theo QĐ”. |
| RQ-A/B/C-nn | REQ-A/B/C-nn | Tiền tố chi tiết đổi; mã RQ của Charter giữ nguyên. |
| B RQ-1…RQ-8 | QT-B-1…QT-B-8 | Quy tắc, không phải yêu cầu Charter. |
| C QC-1…QC-4 | QT-C-1…QT-C-4 | Tránh nhầm QC là quy trình kiểm soát chất lượng. |
| A 3.1 | 3.2, phần dữ liệu cảnh | Gộp cùng đặc tả giao tiếp; không cộng giờ lần nữa ngoài 3.2. |
| A 3.2/3.3/3.4/3.5/3.6 | 4.2.1/4.2.2/4.2.3/4.2.4/4.2.5 | Editor/mẫu/render/export/lưu mở. Riêng gói xuất cũ 3.5 có 32h: tách 10h nguyên mẫu sang3.1, chỉ 22h còn ở 4.2.4; không cộng đôi. |
| A 3.7 và 3.8 | 4.2.6 | Gộp client quyền xuất và danh mục mẫu; các activity giữ phân biệt bằng mã mới. |
| A 3.9/3.10/3.11/3.12 | 5.1/5.2/5.3/4.2.7 | Tích hợp/hiệu năng/độ tin cậy–tiếng Việt–dễ dùng/tạm dừng–cảnh báo. |
| B 7.1 | 4.3.1 | Tài khoản và xác thực. |
| B 7.2 và 7.3 | 4.3.2 | Giấy phép và hạn mức; tránh đếm hai lần phần dùng chung. |
| B 7.4 | 4.3.3, 4.3.5, 4.3.6 | Thanh toán/gia hạn; hóa đơn; chỗ doanh nghiệp. Các phần chưa đủ chi tiết là PP riêng. |
| B 7.5 | 4.3.4 | Giao diện thuê bao. |
| C 8.1/8.2/8.3/8.4 | 4.4.1/4.4.2/4.4.3/4.4.4 | Mẫu/tài sản; hỗ trợ; giám sát/health; UI quản trị. |
| C Inactive | Retired | Một bộ trạng thái xuyên API, đặc tả và TC. |
| M-JOIN/M-PLAN/M-RUN/M-TEST/M-CLOSE của lịch 16–29/09 | Lưu lịch sử; lịch soạn mới dùng DOC-01…05 | Không sửa ngày hoàn thành quá khứ; mốc chưa có bằng chứng vẫn chưa xác nhận. |

Các bản lịch sử có thể giữ mã cũ để giải thích nguồn. Mọi bản nguồn làm việc, biểu mẫu và bảng tính mới phải dùng danh mục này.

## 4. Mã vấn đề và thay đổi đã cấp

| Mã | Nội dung duy nhất | Chủ xử lý |
| --- | --- | --- |
| ISS-G-001 | Complete lỗi/hết TTL nhưng A vẫn có thể giao file; chưa đáp ứng DEC-011 | Chiến + Việt Quang |
| ISS-G-002 | Dự án chưa giữ snapshot/version mẫu; chưa đáp ứng DEC-012 | Chiến + Quang Anh |
| ISS-G-003 | Fake checkout thiếu khóa chống lặp của request; khác với chống replay gateway event | Việt Quang |
| ISS-G-004 | Docker daemon chưa hoạt động, cản backend integration/TC-I | Việt Quang |
| ISS-G-005 | Thiếu actual, ETC và baseline được duyệt để báo tiến độ/EVM đúng căn cứ | Việt Quang |
| CR-G-001 | Forecast 599h vượt 450/495h: giữ phạm vi, điều chỉnh lịch/nguồn lực; chưa có phê duyệt baseline từ sponsor | Chiến điều phối, Việt Quang tổng hợp |

Không dùng ISS-G-004 cho thiếu actual hoặc ISS-G-005 cho một issue forecast khác. Chênh forecast dẫn CR-G-001. P13 chứa rủi ro; M03 chứa issue/change, không tự cấp lại mã ở module.
