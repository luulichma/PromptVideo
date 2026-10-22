# P06 — Kế hoạch chất lượng và danh mục kiểm thử

| Thuộc tính | Giá trị |
| --- | --- |
| Phiên bản / cập nhật | v1.0 / 2026-09-24 |
| Trạng thái | Draft; phương pháp nội bộ đã chọn; chưa là biên bản nghiệm thu |
| Tổng hợp / kiểm tra / xác nhận nội bộ | Phạm Quang Anh / Nguyễn Thế Chiến / Nguyễn Việt Quang |
| Nguồn | Charter v2.1; bài giảng PM11 Quality Management & Close Project; A_01/B_01/C_01; P03; DEC-002/006/007 |

## 1. Chất lượng cần chứng minh

Kế hoạch kiểm tra cả **tài liệu quản lý** và **sản phẩm**. Có đủ tên file chưa chứng minh nội dung khớp; có endpoint hoặc code test chưa chứng minh đầu ra chạy đúng. Tập demo 5 cảnh/60 giây không thay thế mọi chỉ tiêu sản phẩm trong Charter. Ngưỡng dưới đây lấy từ Charter; tiêu chí bổ sung cấp module phải ghi rõ là quy ước nội bộ.

| Đối tượng | Tiêu chí và nguồn | Cách kiểm / giới hạn kết luận |
| --- | --- | --- |
| Độ đầy đủ hồ sơ | Mỗi REQ có thiết kế, WBS, phương pháp kiểm, trạng thái; mã và người chịu trách nhiệm thống nhất | Rà P02/P03/P05/P09/P12 và liên kết nguồn; thiếu một đầu vào ghi issue, không xóa dòng |
| Xuất MP4 | OB-01/NF-01: ≤1,5 lần thời lượng ở 1080p30 trên máy tham chiếu | Đo thực và ghi phần chờ quyền riêng; kết quả 720p trên một máy không chứng minh 1080p |
| Bộ nhớ | OB-02/NF-02: tăng đỉnh <15% khi thời lượng tăng 10 lần | So cùng nội dung/máy/cấu hình; JS heap riêng không thay tổng RAM/GPU |
| Tính xác định | OB-03/NF-04: checksum luồng video giống trên 3 máy | Hash frame hay 3 lượt một máy chỉ là bằng chứng hẹp hơn, không đổi nghĩa yêu cầu |
| Mẫu/tiếng Việt | OB-04 từ 5 mẫu; OB-07 bộ 134 tổ hợp dấu | Kiểm template và bộ dữ liệu thật; không lấy số mẫu seed làm kết luận render đạt |
| Độ tin cậy/dễ dùng | OB-06 ≥95/100 lượt trên trình duyệt mục tiêu; OB-08 ≥8/10 người mới hoàn thành trong 10 phút | Ghi đầy đủ mẫu thử, lỗi và người tham gia; chưa đủ mẫu thì Chưa đủ bằng chứng |
| Riêng tư | OB-09/NF-03: 0 byte nội dung người dùng rời trình duyệt | Kiểm network/HAR luồng đầu-cuối và log; không đưa token hoặc media vào hồ sơ chia sẻ |
| Độ phủ | OB-12: ≥70% module bộ dựng, mã hóa và giấy phép | Báo cáo coverage đúng phạm vi; không áp 70% tùy tiện cho mọi dòng hồ sơ hoặc suy ra từ số tests |
| Thuê bao/hạn mức | OB-13/14: xác thực trước 100% lần xuất; Free 3 lượt, lần 4 bị chặn, 720p/watermark | API+frontend+file đầu ra; retry/cancel/tháng mới theo TC-B; không chỉ kiểm API riêng |
| Thanh toán | OB-15: hiệu lực trong 5 phút sau thanh toán thành công | Giả lập non-Production ghi rõ; cổng thật/hóa đơn thật vẫn cần bằng chứng riêng |
| Giám sát/vận hành | OB-16/NF-10: ≥99%/30 ngày sau phát hành | Healthcheck đơn lẻ chỉ là probe, chưa là số uptime; dữ liệu lợi ích dùng LI-01…05 BMP v2.2 |
| C nội bộ | NF-C-01 p95≤2 giây/fixture 30 ngày; NF-C-02 ảnh≤50 MiB; NF-C-03 audit | Theo C_01; ngưỡng nội bộ đã chọn, không gắn nhầm OB-11 ngân sách hay OB-12 coverage |

## 2. QA, QC và chi phí chất lượng

**QA — bảo đảm chất lượng quy trình:** chủ module rà yêu cầu/đặc tả trước viết mã; peer review theo vòng A→Việt Quang, B→Quang Anh, C→Chiến; kiểm dữ liệu ước lượng, nguồn, quy ước mã, khả năng truy vết; xác minh mẫu ghi bằng chứng đủ run/build/môi trường. Quang Anh tổng hợp checklist và báo điểm thiếu, Chiến xử lý xung đột phạm vi/giao tiếp.

**QC — kiểm đầu ra:** thực thi unit/integration/E2E, kiểm MP4 và mạng, kiểm tính đúng của bảng tính/hồ sơ, ghi lỗi và thử lại. Chủ module tự chạy kiểm phù hợp trước bàn giao; người kiểm chéo dùng ca đã chốt và không đổi kỳ vọng để biến lỗi thành đạt. **Nghiệm thu/validate scope** là bước sau QC, có thẩm quyền riêng theo Charter; một dòng Pass hoặc xác nhận nội bộ không là chữ ký sponsor.

| Loại Cost of Quality | Việc cụ thể | Nơi hạch toán, tránh cộng đôi |
| --- | --- | --- |
| Phòng ngừa | Review yêu cầu/giao tiếp, chuẩn mã, validator, thiết kế fixture, hướng dẫn ghi evidence | Hoạt động thiết kế/WP hoặc P01/P06; đã nằm trong base thì không thêm reserve |
| Thẩm định | Code review, chạy test, kiểm tài liệu và bản xuất | Unit đi cùng WP; kiểm độc lập/tích hợp tại WBS 5; review hồ sơ ở gói quản lý/bàn giao |
| Sai lỗi nội bộ | Sửa trước bàn giao, tái chạy, cập nhật hợp đồng | Ghi giờ thực theo defect; phần không chắc chắn chỉ cấp contingency một lần theo P08/P11 |
| Sai lỗi bên ngoài | Hỗ trợ sự cố sau giao, rollback, đối soát quota | Ghi ticket/issue và người tiếp nhận; không giả phát sinh tiền mặt khi chưa có dữ liệu |

P11 tổng hợp CoQ từ hoạt động tương ứng, không cộng một tỷ lệ “QA” chồng lên toàn bộ WBS. R-C-05 thể hiện rủi ro quá tải người tổng hợp, không dùng Quang Anh như nguồn lực kiểm thử vô hạn.

## 3. Cấp kiểm thử, môi trường và người thực hiện

| Cấp/loại | Chủ chạy và sửa | Người kiểm/xác nhận | Môi trường, đầu vào | Bằng chứng và điều kiện đạt |
| --- | --- | --- | --- | --- |
| Unit từng module | Chủ A/B/C chạy, sửa phần mình | A: VQ/QA; B: QA/Chiến; C: Chiến/VQ | Vitest hoặc xUnit theo code hiện tại; fixture có kết quả biết trước | Log kết quả và coverage đúng phạm vi khi đo; test thất bại không bị lọc khỏi báo cáo |
| Integration API/DB | Chủ backend B/C xây fixture, chạy trước | Reviewer của module chịu trách nhiệm kiểm độc lập | PostgreSQL Testcontainers; Docker daemon; fresh DB mỗi class; accounts giả lập | Kết quả tests/API/audit; đúng transaction/idempotency/quyền; không chạy vào dữ liệu thật |
| E2E A+B | Chiến chuẩn bị build; Việt Quang chạy | Quang Anh xác nhận nội bộ | Browser+frontend+API+DB, chuẩn 5 cảnh / 60 giây, Free/Personal giả lập | Video/screenshot+MP4+network đã làm sạch; kết quả mỗi TC-I riêng |
| E2E C | Quang Anh chuẩn bị; Chiến chạy | Việt Quang xác nhận nội bộ | Admin/User, metadata có Draft/Active/Retired và fixture hỗ trợ/metrics | UI/API/DB tương ứng; route chưa có ghi Blocked |
| Hiệu năng/riêng tư | Chủ phần đo chuẩn bị; reviewer chéo chạy/soát | Người xác nhận theo module; số chung Chiến rà | Ghi CPU/RAM/OS/browser/build/resolution/codec/cách ghi file; raw samples | Không trộn số cũ và mới; báo sample size và giới hạn |
| Kiểm tài liệu/bảng tính | Người soạn tự rà; người kiểm được phân công rà lại | Người xác nhận nội bộ theo bảng phân công | Markdown nguồn, workbook và bản xuất cùng phiên bản | Mã/link/tổng/đơn vị/trạng thái đúng; không có số giả gọi là actual |

Không bắt buộc mọi test phải do Quang Anh chạy. Khi Docker hoặc route thiếu, ghi **Blocked** và điều kiện giải tỏa; khi môi trường sẵn nhưng chưa chạy ghi **Not Run**. Failed môi trường không được biến thành thất bại nghiệp vụ, cũng không được tính Pass.

## 4. Danh mục ca thử và nguồn chuẩn

| Phạm vi | Nguồn sở hữu nội dung | Quy tắc nhập kết quả |
| --- | --- | --- |
| TC-A-* / REQ-A-* / NF-A-* | [A_01](./_module-input/A_San_xuat_video/A_01_Yeu_cau_va_kiem_thu_v1.0.md) | Chiến giữ định nghĩa; Việt Quang chạy/kiểm, Quang Anh xác nhận; không tái dùng TC-A-01 thành “3 slide có audio” |
| TC-B-* / REQ-B-* / NF-B-* | [B_01](./_module-input/B_Tai_khoan_thue_bao/B_01_Yeu_cau_va_kiem_thu_v1.0.md) | Việt Quang giữ định nghĩa; Quang Anh kiểm, Chiến xác nhận; dùng đúng mã B đã có |
| TC-C-* / REQ-C-* / NF-C-* | [C_01](./_module-input/C_Quan_tri_van_hanh/C_01_Yeu_cau_va_kiem_thu_v1.0.md) | Quang Anh giữ định nghĩa; Chiến kiểm, Việt Quang xác nhận; mỗi ca có dữ liệu/bước/kỳ vọng |
| TC-I-01…06 | P03 hợp đồng và bảng tích hợp dưới đây | Chiến quản lý mã; Quang Anh tổng hợp M05; kết quả E2E tách unit/API |

### Bộ tích hợp chuẩn, không đổi nghĩa mã

Tiền điều kiện: build có commit/hash, DB cô lập, tài khoản thử mới, giờ/kỳ UTC biết trước, Chrome/Edge có probe xuất được; fixture 5 cảnh / 60 giây không âm thanh. Nếu prerequisite chưa đạt, ghi Blocked kèm issue.

| TC | Giao tiếp / mục tiêu | Dữ liệu và bước chạy | Kết quả kỳ vọng | Người chạy / sửa / xác nhận |
| --- | --- | --- | --- | --- |
| TC-I-01 | IF-AB-01; OB-13,14 | Free chưa dùng lượt; xuất thật ba video chuẩn và complete từng lần; yêu cầu lần 4; xem file và reservation | Ba file 720p có watermark, mỗi lần hỏi quyền; lần 4 bị chặn trước mã hóa; quota đúng 3 | Việt Quang / A+B / Quang Anh |
| TC-I-02 | IF-AB-01; cancel và hồi phục | Free reserve, hủy giữa xuất, tải lại; đọc quota/lịch sử; thử retry cancel | Không giao file hoàn tất; quota hoàn đúng một lần, trạng thái đúng, lượt thử sau vẫn hợp lệ | Việt Quang / A+B / Quang Anh |
| TC-I-03 | IF-AB-01; upgrade giả lập | Admin thao tác cổng giả lập non-Production để cấp Personal cho user; tải lại entitlement; xuất thật 1080p | Personal được áp, file 1080p không watermark; ghi rõ không có thanh toán thực | Quang Anh / A+B / Chiến |
| TC-I-04 | IF-CA-01; vòng đời mẫu | Lưu dự án với template đang Active; Admin đổi Retired; tải danh mục mới và mở dự án đã lưu | Không chọn mới mẫu Retired; dự án cũ mở được, có cảnh báo; giữ snapshot/phiên bản theo đích DEC-012, thiếu snapshot ghi issue | Chiến / A+C / Việt Quang |
| TC-I-05 | IF-AB-01/IF-CA-01; OB-09/NF-03 | Thu HAR luồng TC-I-01, gồm chữ/ảnh có dấu nhận diện thử; kiểm body/URL/log sau làm sạch bí mật | 0 byte nội dung video/dự án/ảnh đi máy chủ; chỉ metadata quyền/catalog được gửi/nhận | Việt Quang / A+B+C theo nơi lỗi / Quang Anh |
| TC-I-06 | IF-AB-01; chi phí chờ cấp quyền | Đo cùng fixture/máy: đường local kiểm soát và đường reserve thực; timestamp trước/sau bước cấp quyền, nhiều lượt | Bước reserve cộng ≤1 giây so đường local trong phép đo quy định; báo raw samples. Đo thêm API p95 theo NF-09 riêng, không gọi một lượt ≤1 giây là p95 đạt | Việt Quang / A+B / Quang Anh |

TC-I-03 là kịch bản giả lập để kiểm tích hợp, chưa nghiệm thu OB-15 production. TC-I-04 hiện có gap snapshot phiên bản ISS-G-002; test phải báo đúng phần đạt/chưa đạt. ISS-G-001 về complete/file delivery cần được sửa và thử lại trước chấp nhận luồng xuất; một file tạo được không tự chứng minh cả giao dịch đã hoàn tất.

## 5. Cách chạy và lưu bằng chứng

Lệnh dưới đây chạy từ `src` theo README hiện có; kiểm prerequisites trước chạy. Bộ test backend dùng Testcontainers cần Docker daemon, không dùng compose DB thật. Không đặt mật khẩu/token vào biên bản hoặc câu lệnh chia sẻ.

```powershell
dotnet test PromptVideo.sln
npm test --prefix frontend -- --run
```

Để lấy số đo/coverage hoặc E2E dùng script đã tồn tại trong `src/frontend/package.json` và mô tả bộ TC; ghi nguyên lệnh thực tế, không ghi kết quả giả của một script chưa có. Lượt kiểm ngày 24/09 có frontend 79/79 thuộc EV-001; backend EV-002 có 18 passed, 42 failed trên tổng 60 do Docker/Testcontainers không sẵn. Đây là lỗi môi trường chạy integration, không phải bằng chứng có 42 lỗi nghiệp vụ. Người tổng hợp đối chiếu [evidence/INDEX.md](../../evidence/INDEX.md) trước dẫn kết luận.

Mỗi **Test_Run** trong M05 bắt buộc: runId, TC, REQ, module, build/hash, ngày/giờ và múi giờ, người chạy, OS/browser/CPU/RAM nếu liên quan, dependency versions, fixture, command/steps, expected, actual, status, đường dẫn evidence, defect liên quan, người kiểm. Bộ raw logs/MP4/HAR đã làm sạch gắn một EV-nnn trong INDEX; không tự gán EV mới trùng bộ chung.

| Trạng thái | Nghĩa và cách dùng |
| --- | --- |
| Pass | Mọi assertion của ca trên môi trường ghi nhận đạt; không lan sang ca khác |
| Fail | Có điều kiện kỳ vọng không đạt; tạo defect với reproduction |
| Not Run | Chưa chạy, chưa có kết quả; có code test vẫn có thể Not Run |
| Blocked | Không chạy đủ vì prerequisite; ghi nguyên nhân/chủ/hạn khắc phục |

Ảnh chụp All Green không thay log/build/dữ liệu. Nguồn lịch sử EV-003/004 phải giữ ngày/môi trường cũ; EV-005 đọc mã chỉ chứng minh cấu trúc hiện có. Không đổi tên ngày nguồn cũ thành ngày tổng hợp.

## 6. Lỗi, sửa và thử lại

1. Người kiểm ghi defect trong M05: liên kết TC/run, bước tối thiểu tái hiện, expected/actual, evidence và module ảnh hưởng. Issue chung dùng ISS-G-nnn từ sổ chung, không mỗi người tự cấp một ISS-G-001.
2. Chiến triage phạm vi/liên module; chủ module phân tích và sửa. **Blocker:** không chạy được luồng chính/thiếu nền tảng bắt buộc; **Critical:** sai quota/quyền/lộ nội dung hoặc mất dữ liệu; **Major:** sai chức năng có workaround; **Minor:** trình bày/diễn giải không đổi kết quả.
3. Trước gate tiếp theo, chủ sửa cung cấp build và liên kết thay đổi; reviewer chạy lại đúng ca lỗi cùng ca hồi quy bị ảnh hưởng. Không xóa lần Fail cũ.
4. Người xác nhận nội bộ kiểm evidence trước đóng defect; yêu cầu vượt phạm vi đi qua CR, không tự giảm kỳ vọng để đóng lỗi. Nếu hết công suất ghi tồn đọng/chủ/hạn và mức ảnh hưởng gate.

## 7. Điều kiện qua các cổng hồ sơ

| Gate | Điều kiện chất lượng | Ai chuẩn bị / rà |
| --- | --- | --- |
| DOC-01 26/09 | A/B/C_01/_02 có mã chuẩn, REQ→TC/WBS, nguồn estimate và gaps; không còn tiêu chí mâu thuẫn chưa ghi issue | Mỗi chủ module / reviewer chéo |
| DOC-02 29/09 | P01–P13 khớp phạm vi, ước lượng và năng lực; mỗi dòng RACI đúng một A; công thức kiểm được; baseline ghi đúng trạng thái chưa được duyệt nếu thiếu thẩm quyền | Chủ tổng hợp / người kiểm tương ứng |
| DOC-03 02/10 | Có danh mục evidence, kết quả từng ca hoặc lý do Blocked, defect/actual theo nguồn; giữ dấu vết Fail–fix–retest | Chủ module và Quang Anh tổng hợp / Chiến rà |
| DOC-04 05/10 | Hướng dẫn chạy, danh mục file/phiên bản/tồn đọng và người nhận dự kiến; không viết đã bàn giao khi chưa có biên bản | Quang Anh tổng hợp / Chiến+Việt Quang rà đúng phần |
| DOC-05 07/10 | Bộ hồ sơ đọc được, nguồn/link/mã/số khớp; các khoảng trống có chủ và hạn | Ba thành viên rà phần mình; Chiến điều phối |

**Chuyển sang xác nhận phạm vi sản phẩm:** có bằng chứng đủ tiêu chí áp dụng, không còn Blocker/Critical trong phạm vi xin nhận, các sai lệch có quyết định đúng thẩm quyền, người kiểm độc lập và người tiếp nhận được ghi thật. Hồ sơ được rà xong không đồng nghĩa cả sản phẩm đạt Charter. Phê duyệt/đóng dự án chính thức giữ quy định Charter, không tự ký thay sponsor/giảng viên.

## 8. Lịch sử và tác vụ đã xử lý

24/09/2026: tách từ bản C; xử lý CV-C-01/03/05/07/08 bằng phương pháp QA/QC/CoQ, chủ TC rõ, vòng kiểm chéo đúng và nguyên tắc bằng chứng. Kết quả còn Not Run/Blocked tiếp tục là nhiệm vụ thực thi, không phải phần đã hoàn thành nhờ viết kế hoạch.
