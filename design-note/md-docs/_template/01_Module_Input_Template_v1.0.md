# Mẫu đầu vào module — X = A/B/C

Mỗi người có 5 file, ghi metadata theo T0. Chiến phụ trách A, Việt Quang phụ trách B, Quang Anh phụ trách C. Vòng kiểm tra: A → Việt Quang, B → Quang Anh, C → Chiến. Người xác nhận nội bộ tương ứng là Quang Anh, Chiến và Việt Quang; xác nhận này chưa đồng nghĩa nghiệm thu sản phẩm.

## Quy ước đã chốt

Dùng REQ-X-nn, NF-X-nn, QT-X-n, TC-X-nn và R-X-nn. TC-I do P03 sở hữu; RQ/OB/NF của Charter giữ nguyên. WBS chung có 6 giai đoạn; nhánh xây dựng A là 4.2, B là 4.3, C là 4.4. Thiết kế và kiểm thử thuộc nhánh 3 và 5, không cộng hai lần. Mã hoạt động là ACT-<WBS>-nn; vấn đề là ISS-G-nnn; thay đổi là CR-G-nnn; bằng chứng là EV-nnn. Xem [danh mục mã](../00_Quyet_dinh_va_quy_uoc_ma.md) trước khi cấp mã.

| File | Nội dung bắt buộc | Tài liệu nhận |
| --- | --- | --- |
| X_01_Yeu_cau_va_kiem_thu_v1.0.md | Tác nhân, phạm vi, quy tắc, REQ/NF, luồng chính/ngoại lệ, tiêu chí đo được; TC đủ bước, dữ liệu và kỳ vọng; truy vết Charter, IF và trạng thái | P02/P03/P04/P06/P09 |
| X_02_WBS_uoc_luong_rui_ro_v1.0.md | Gói đầu ra và từ điển WBS; hoạt động, phụ thuộc, WP/PP, O/M/P và cơ sở; chi phí, nguồn lực, rủi ro, dấu hiệu kích hoạt, ứng phó và giả định | P05/P07/P08/P10–13 |
| X_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md | Thiết kế, mã nguồn, phần đã/chưa làm, cách chạy và dùng, nhật ký có nguồn, giờ thực tế nếu có, QA và bài học | E01/E03/E04/E05 |
| X_04_Theo_doi_kiem_thu_va_thay_doi_v1.0.md | Trạng thái kỳ, bằng chứng test, môi trường/build, lỗi và kiểm lại, vấn đề/rủi ro/thay đổi, ảnh hưởng module khác, ETC có cơ sở | M01–06, P09/P13 |
| X_05_Ket_qua_ban_giao_va_bai_hoc_v1.0.md | Kết quả đã/chưa đạt, bằng chứng, actual từ E05, tồn đọng và người xử lý, người tiếp nhận, hướng dẫn, bài học và phần demo | C01–04/G1 |

## Kiểm số liệu và trạng thái

tE = (O + M + P) / 3 theo học phần; không làm tròn trước khi cộng. PP chưa phân rã không có hoạt động giả. Giờ forecast không phải actual hoặc ETC. EMV = xác suất × hậu quả, khác điểm P×I; bỏ phần trùng ước lượng gốc trước khi tính dự phòng. Năng lực 10 giờ/người/tuần là giả định, cần xác nhận riêng.

Không viết lại TC của người khác với nghĩa mới; chỉ dẫn mã. Không thêm audio, AI hoặc khung dọc. Không tự giao việc rà giấy phép phần mềm trong đợt này; yêu cầu cấp Charter chưa xác minh vẫn phải ghi rõ. Chưa chạy, chưa có actual hoặc chưa ký thì ghi đúng trạng thái; không điền dữ liệu mẫu vào cột thực tế.
