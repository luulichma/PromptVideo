"""Apply the 24 September documentation decisions without inventing approvals."""
import json
import re
import shutil
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
DOC=ROOT/'design-note/md-docs'
TMP=Path.home()/'AppData/Local/Temp/promptvideo-doc-plan'
ARCH=DOC/'_history/2026-09-23'
ARCH.mkdir(parents=True,exist_ok=True)
for name in ['a','b','c','common']:
    shutil.copyfile(TMP/f'{name}-data.json',DOC/f'_data/{name}-data.json')
data={name:json.loads((DOC/f'_data/{name}-data.json').read_text(encoding='utf-8')) for name in ['a','b','c','common']}
packages=sorted([p for d in data.values() for p in d['packages']],key=lambda p:tuple(map(int,p['id'].split('.'))))
total=sum((p['O']+p['M']+p['P'])/3 for p in packages)
assert abs(total-599)<1e-8

def write(path,title,body,owner='Chiến',reviewer='Việt Quang'):
    path=DOC/path
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(f'# {title}\n\n**Phiên bản:** v1.0 · cập nhật 24/09/2026. **Trạng thái:** Working Draft đã chuẩn hóa nội dung; chưa nghiệm thu.\n\n**Chủ nội dung:** {owner}. **Người kiểm tra được giao:** {reviewer}. Việc ghi tên là phân công, không phải chữ ký xác nhận. Nội dung được cập nhật bằng Codex theo ủy quyền của người dùng.\n\n'+body.strip()+'\n',encoding='utf-8')

def table(headers,rows):
    return '| '+' | '.join(headers)+' |\n| '+' | '.join(['---']*len(headers))+' |\n'+''.join('| '+' | '.join(str(c).replace('|',' / ').replace('\n',' ') for c in row)+' |\n' for row in rows)

# Preserve the earlier A input and WBS as history before revising live sources.
ap=DOC/'02_Planning/_module-input/A_San_xuat_video'
for path in [ap/'A_01_Yeu_cau_va_kiem_thu_v1.0.md',ap/'A_02_WBS_uoc_luong_rui_ro_v1.0.md',DOC/'02_Planning/05_WBS_and_WBS_Dictionary_v1.0.md',DOC/'02_Planning/05_WBS_PromptVideo.puml',DOC/'02_Planning/05_WBS_PromptVideo.png']:
    target=ARCH/path.name
    if not target.exists():shutil.copyfile(path,target)
a1=(ap/'A_01_Yeu_cau_va_kiem_thu_v1.0.md').read_text(encoding='utf-8')
a1=a1.replace('2026-09-23                           |','2026-09-24                           |')
a1=a1.replace('Từ nay A_01 và A_02 là bản chính thức; khi sửa, sửa ở đây trước.','A_01 và A_02 là nguồn soạn hiện hành; khi sửa, sửa ở đây trước. Trạng thái vẫn là Draft, không phải bản đã nghiệm thu.')
a1=a1.replace('## Xác nhận','## Phân công kiểm tra (chưa ký xác nhận)',1)
a1=a1.replace('| Nguyễn Thế Chiến | Phạm Quang Anh |','| Nguyễn Thế Chiến (nguồn) | Chưa xác minh phê duyệt |')
a1=a1.replace('Mã `REQ-A-nn` **tạm theo QĐ-04**.','Mã `REQ-A-nn` đã chốt theo DEC-004.')
a1=a1.replace('16–29/09/2026','24/09–07/10/2026').replace('đợt 16–29/09','đợt 24/09–07/10')
a1=a1.replace('Đề xuất gộp thành `NF-G-01` (G-02)','Yêu cầu chung `NF-G-01` đã chốt; giữ NF-A-04 để truy vết trách nhiệm A')
a1=a1.replace('QĐ-01 → QĐ-06 (chưa chốt), các lỗi của bản B và C','Nguồn lịch sử; đã thay bằng DEC-001 → DEC-006 trong danh mục quyết định')
a1=a1.replace('mốc 17/09 → 29/09, năng lực 20 giờ/người/tuần','Nguồn lịch sử; lịch hiện hành DOC-01 → DOC-05, năng lực giả định 10 giờ/người/tuần')
a1=a1.replace('QT-A-5 — Reservation nào cũng phải được đóng.** Thành công thì `complete`. Hủy, lỗi hay ngoại lệ đều `cancel`, kể cả khi ngoại lệ ném ra giữa chừng.','QT-A-5 — Reservation nào cũng phải được đối soát.** Thành công chỉ giao kết quả sau khi `complete` được xác nhận. Mất phản hồi phải retry/đối soát cùng reservation; không tự cancel giao dịch có thể đã hoàn tất. Hủy/lỗi mã hóa gửi `cancel`, chỉ báo đã hoàn lượt sau xác nhận. Đây là đích DEC-011; ISS-G-001 chưa sửa trong mã.')
a1=a1.replace('gói 3.8','gói 4.2.6')
a1=a1.replace('Cần viết (3.11)','Cần viết (5.3)').replace('Cần viết (3.10)','Cần viết (5.2)').replace('Cần viết (3.12)','Cần viết (4.2.7)').replace('Cần viết (A3.9.1)','Cần viết (ACT-5.1-01)').replace('Cần viết (A3.9.2)','Cần viết (ACT-5.1-01)')
a1=a1.replace('Vẫn giao file (đóng reservation là nỗ lực tốt nhất). Reservation tự hết hạn sau 30 phút và B trả lượt. **Hệ quả: lượt không bị trừ** (R-A-03)','Đích: giữ kết quả tạm cục bộ, báo chờ xác nhận, retry/đối soát cùng ID. Mã hiện tại vẫn giao file (ISS-G-001). TTL 30 phút; thu hồi khi reserve mới hoặc sweep được bật, không bảo đảm đúng phút thứ 30')
a1=a1.replace('Như dòng trên: file vẫn giao, lượt không bị trừ. Video 60 giây không chạm ngưỡng này; video dài có thể chạm (R-A-10)','Đích: không báo hoàn tất/giao kết quả khi nhận 409; đối soát và xử lý xuất dài. Hiện tại khác đích (ISS-G-001); TC-A-36 phải thử lại')
a1=a1.replace('File vẫn giao; `complete` thất bại được ghi nhận; sau 30 phút B trả lượt (ghi kết quả để phục vụ R-A-03)','Không báo thành công/giao kết quả cho tới khi complete được xác nhận; retry/đối soát không trừ thêm lượt. Đích DEC-011; lỗi hiện tại ISS-G-001')
a1=a1.replace('File vẫn giao; giao diện không báo lỗi giả; sự kiện được ghi để đối chiếu R-A-10','Không báo hoàn tất/giao kết quả khi complete trả 409; giữ trạng thái cần xử lý và không reserve lần mới âm thầm. Đích DEC-011; ISS-G-001 còn mở')
a1=a1.replace('Không gọi được máy chủ → dùng danh sách đóng gói, ghi rõ là danh sách ngoại tuyến','Không gọi được máy chủ → dùng snapshot/danh mục đã biết, ghi nhãn ngoại tuyến và thời điểm; bản mới chưa có cache chỉ dùng nội dung đóng gói với cảnh báo chưa xác minh trạng thái')
a1=a1.replace('Mẫu C chuyển sang Retired biến mất khỏi danh sách chọn sau khi tải lại; dự án cũ dùng mẫu đó vẫn mở được','Mẫu Retired không được chọn mới khi có danh mục hiện hành; dự án cũ giữ snapshot/version và mở được. Mã hiện tại thiếu snapshot/version: ISS-G-002')
a1=a1.replace('100% lần mã hoá có reservation trước; mọi ngả kết thúc đều đóng reservation; gửi lại dùng cùng khoá','100% lần mã hoá có reservation trước; chỉ giao kết quả sau complete được xác nhận; cancel phải đối soát; gửi lại cùng khoá. ISS-G-001 còn mở')
a1=a1.replace('"Tự động" là tên test trong repo.','**Sửa định nghĩa có ghi lịch sử:** TC-A-20 và TC-A-36 trước đây cho phép giao file khi complete lỗi; từ 24/09 đổi theo DEC-011. Bản cũ nằm `_history/2026-09-23`; mã TC giữ để truy vết và bắt buộc chạy lại. Không kế thừa kết quả đạt của kỳ cũ.\n\n"Tự động" là tên test trong repo.')
a1=a1.replace('## 4. Ma trận truy vết yêu cầu','## 4. Ma trận truy vết yêu cầu\n\n**Bằng chứng mới 24/09:** EV-001 chạy Vitest đạt 79/79; chỉ chứng minh unit tests hiện có. E2E 23/09 là kết quả được nguồn cũ báo cáo, không phải lần chạy mới hay nghiệm thu. REQ-A-05 thiếu snapshot/version; REQ-A-10 thiếu xác nhận complete; trạng thái hiện hành tương ứng là **Một phần / ISS-G-002** và **Một phần / ISS-G-001**. P09 là RTM hợp nhất.\n')
a1=a1.split('## 6. Phụ thuộc với B và C',1)[0]+'''## 6. Giao tiếp đã thống nhất

Nguồn hợp đồng hiện hành là [P03](../../03_Interface_Specification_v1.0.md); quyết định là [DEC-001–014](../../../00_Quyet_dinh_va_quy_uoc_ma.md). Các bảng lệch L-AB/L-CA của bản trước được giữ trong lịch sử, đã chuyển thành quyết định hoặc ISS-G.

| Mã | A phải thực hiện | Phần B/C cung cấp | Trạng thái |
| --- | --- | --- | --- |
| IF-AB-01 | Kiểm cục bộ, reserve, mã hóa theo quyền, complete/cancel có xác nhận | Quyền từ máy chủ; reserve tính lượt ngay; complete giữ lượt; cancel hoàn đúng một lần vào kỳ gốc | Có mã một phần; ISS-G-001 |
| IF-CA-01 | Lọc Active, giữ snapshot/version mẫu cũ, nhãn cache offline | Draft/Active/Retired; metadata có version; publication kiểm tương thích | List/status đã có; snapshot/migration chưa đủ: ISS-G-002 |
| IF-CB-01 | Không gọi trực tiếp từ editor; hiển thị quota sau refresh | C hỗ trợ qua B với ticket, lý do, idempotency, audit, giao dịch nguyên tử | Hợp đồng đã chốt; endpoint chưa triển khai |

API, lỗi và TC-I-01–06 do P03 sở hữu. A dẫn mã, không tự tạo phiên bản TC-I khác. Free xuất ba lần rồi chặn lần4; hủy xác nhận hoàn lượt; Admin kích hoạt fake non-Production; Retired và dự án cũ; HAR0byte; đo độ trễ reserve là sáu luồng chuẩn.
'''
(ap/'A_01_Yeu_cau_va_kiem_thu_v1.0.md').write_text(a1,encoding='utf-8')

a_rows=[[p['id'],p['name'],p['type'],p['O'],p['M'],p['P'],f"{(p['O']+p['M']+p['P'])/3:.3f}",p['basis']] for p in data['a']['packages']]
write('02_Planning/_module-input/A_San_xuat_video/A_02_WBS_uoc_luong_rui_ro_v1.0.md','A_02 — WBS, ước lượng và rủi ro module A',f'''
## 1. Phạm vi và cách cộng giờ

Áp dụng [danh mục mã](../../../00_Quyet_dinh_va_quy_uoc_ma.md). A không còn là nhánh3.x. Các gói xây dựng thuộc4.2; schema thuộc3.2; nguyên mẫu3.1; kiểm thử thuộc5.1–5.3. Bảng ánh xạ mã cũ ở danh mục chung và bản nguồn trước sửa ở `_history/2026-09-23`.

Tổng công sức gắn với A vẫn **225⅓ giờ**: 214 giờ trong bảng dưới +11⅓ giờ schema đã nằm trong gói chung3.2 (23⅓ giờ gồm12 giờ giao tiếp). Khi ghép P05/P11 chỉ cộng mỗi gói lá một lần. Gói xuất cũ32 giờ tách thành nguyên mẫu10 giờ và xuất22 giờ; không mất hoặc cộng đôi10 giờ.

Đây là forecast cho toàn deliverable, **không phải giờ còn lại hoặc actual**. Các hạng mục có code không tự thành100% hoàn thành. Ước lượng bình quân ba điểm theo quy ước học phần: tE=(O+M+P)/3; không dùng công thức PERT trọng số1:4:1. Giữ số chưa làm tròn khi tổng hợp.

## 2. Gói và ước lượng dưới lên

{table(['WBS','Đầu ra','Loại','O','M','P','tE giờ','Cơ sở'],a_rows)}

WP nhỏ nhất10 giờ, lớn nhất28⅔ giờ. PP chưa có hoạt động/lịch thi công cam kết. Quy tắc8/80 không chứng minh gói xong trong hai tuần:10h/tuần thì28⅔h cần hơn hai tuần.

## 3. Từ điển, tiêu chí và phụ thuộc

| WBS | Đầu ra cụ thể | Điều kiện đạt | Phụ thuộc / rủi ro |
| --- | --- | --- | --- |
| 3.1 | Kiến trúc, prototype, capability matrix | MP4 có thông tin môi trường và file đo | Probe1080p chưa đạt ở headless |
| 3.2 (phần A) | Schema cảnh/dự án; định dạng snapshot mẫu và migration | Round-trip, từ chối sai version, mở dự án cũ | IF-CA-01; ISS-G-002 |
| 4.2.1 | Editor chữ/ảnh, undo/redo, bàn phím | TC-A-01–05,33,34 có nguồn riêng;134tổ hợp thuộc5.3 | Schema3.2; ảnh EXIF/lỗi |
| 4.2.2 | Năm mẫu và khung vàng | TC-A-06; giữ dữ liệu khi đổi mẫu | Renderer4.2.3; catalog C |
| 4.2.3 | Canvas renderer dùng chung | TC-A-03,08; parity trên môi trường ghi nhận | Sai khácGPU/font; không suy ra checksum3máy |
| 4.2.4 | Worker H.264/MP4, ghi luồng, tiến trình/hủy | TC-A-09–14; đúng quyền, MP4 phát được | Prototype3.1;1080p cần probe thật |
| 4.2.5 | Lưu, mở, phục hồi, gói checksum | TC-A-21,22,35 | IndexedDB/OPFS; migration mẫu |
| 4.2.6 | Quyền và catalog client | TC-A-07,15–20,36 vàTC-I; complete phải xác nhận | B4.3.2,C4.4.1; ISS-G-001/002 |
| 4.2.7 PP | Pause/resume và cảnh báo khởi động | TC-A-31,32 | Phân rã trước M3; chưa triển khai |
| 5.1 | TC-I, HAR và bảng đo tích hợp | Mỗi kết quả có build,môi trường,file;0byte nội dung | Máy chủ thật; ISS-G-004 |
| 5.2 PP |1080p≤1.5×,bộ nhớ×10<15%,checksum3máy | TC-A-25,27,28 đúng điều kiệnCharter | Máy tham chiếu và cách đoWorker |
| 5.3 PP |134tổ hợp,100lần xuất,10người thử | TC-A-04,29,30 đạt mục tiêuCharter | Tuyển người thử; chưa có dữ liệu |

## 4. Hoạt động và lịch

{table(['Mã','WBS','Hoạt động','Giờ forecast','Tiền nhiệm FS','Người làm'],[[a['id'],a['wbs'],a['name'],f"{a['hours']:.3f}",', '.join(a['predecessors']) or 'Bắt đầu mạng','Chiến'] for a in data['a']['activities']])}

Mỗi dòng là hoạt động tổng hợp của WP, chỉ để dựng mạng ban đầu. P10 phân biệt CPM logic, lịch san bằng và các cổng PP/môi trường. B/C có hoạt động con nên P10 nối vào **hoạt động cuối** của gói, không giả định mọi gói kết thúc ởđuôi01. Lịch hồ sơ DOC-01–05 là mục tiêu riêng; 214 giờ trên không phải lượng việc cần làm mới trong14 ngày.

Năng lực giả định10h/người/tuần. Chủ A cung cấp ETC thực tế sau khi đo tình trạng từng gói và xác nhận giờ rảnh; E05 chưa có actual. Không dùng4 giờ “đệm” cũ để chứng minh đủ lịch.

## 5. Rủi ro, chi phí và dự phòng

{table(['Mã','Nguyên nhân → sự kiện → hậu quả','P','I','Xác suất','Giờ hậu quả','Ứng phó'],[[r['id'],r['cause']+' → '+r['event']+' → '+r['effect'],r['p'],r['i'],r['probability'],r['impactHours'],r['response']] for r in data['a']['risks']])}

Thang P/I theo DEC-005; chủ, trigger và trạng thái lưu P13. Các giờ rủi ro trên là mức phơi nhiễm để đánh giá, **không tự cộng thành contingency**. Cách đo chuẩn đã ở5.2; lỗi đã biết ở4.2.6/4.3.2; quá tải là thiếu công suất. Vì vậy bỏ phép cộng cũ5.6+7=12.6 giờ làm reserve: chưa chứng minh đó là công sức phát sinh ngoài base. Chỉ cộng vào reserve khi có phần dư được xác định và không trùng O/M/P; management reserve chưa phân bổ.

A không dự trù mua riêng;80,000VND/h là chi phí cơ hội, không tiền đã chi.225⅓h×80,000=18,026,666.67VND cho phạm viA phân bổ, không cộng lại vào P11 khi gói3.2 đã được tính.

## 6. Kiểm soát và bàn giao

Chiến R, Quang Anh A cho xác nhận nội bộ đầu vàoA, Việt Quang kiểm tra; thẩm quyền nghiệm thu sản phẩm theoCharter. Mọi đổi yêu cầu cập nhật A_01→P02/P03→P09→P05/P10/P11/P13 khi có ảnh hưởng. ISS-G ghi vấn đề đã xảy ra; CR-G ghi đổi baseline; R-A ghi sự kiện chưa chắc xảy ra. Nguồn chạy hiện có làEV-001/002/003/004; không đánh dấuTC-I đạt khi chỉ có mock.

Đầu ra tiếp theo: A_03 mô tả thực hiện, A_04 theo dõi/test, A_05 bàn giao. Tất cả hiện là hồ sơ tiến độ; nghiệm thu còn phụ thuộc bằng chứng.
''')

write('02_Planning/03_Interface_Specification_v1.0.md','P03 — Đặc tả giao tiếp A–B–C','''
## 1. Ranh giới và nguồn hợp đồng

[DEC-010–013](../00_Quyet_dinh_va_quy_uoc_ma.md) là hành vi đích. Mã/API hiện tại lấy từ `src/contracts/openapi/PromptVideo.Api.json`, ExportsModule, ExportReservationService, TemplatesModule, AdminModule và frontend reservation/exportProject/schema. Bảng dưới tách rõ đã có và còn thiếu. Không gửi chữ, ảnh, tên ảnh, dữ liệu cảnh hoặc MP4 lên server;NF-G-01 kế thừaOB-09/NF-03.

## 2. IF-AB-01 — quyền xuất

| Lời gọi | Đầu vào | Thành công / ý nghĩa |
| --- | --- | --- |
| GET /api/security/csrf | Cookie phiên | Lấy token; lấy lại sau đăng nhập |
| GET /api/me/capabilities | Phiên đăng nhập | planCode,planName,maxExportHeight,watermarkRequired,exportsPerMonth,exportsUsed,exportsRemaining,hasUnlimitedExports,periodStartUtc,periodEndUtc,expiresAtUtc; chỉ để hiển thị |
| POST /api/exports/reservations | Cookie + X-CSRF-TOKEN; idempotencyKey dài1–128; requestedHeight |200:reservationId,status,grantedHeight,watermarkRequired,expiresAtUtc,exportsRemaining,exportsPerMonth |
| POST /api/exports/reservations/{id}/complete | Cookie/CSRF;ID thuộc người gọi |200 trạng thái Completed; chỉ giữ lượt đã được tính, không cộng thêm |
| POST /api/exports/reservations/{id}/cancel | Cookie/CSRF;ID thuộc người gọi |200 trạng thái Canceled; hoàn đúng một lần về UsagePeriod gốc |

Luồng: kiểm hợp lệ/encoder/dung lượng → reserve → tăng used ngay khi giữ thành công → mã hóa theo quyền server → complete có xác nhận → giao kết quả. Retry cùng lần thử dùng cùng idempotencyKey. Complete/cancel lặp không thay đổi đếm lần hai; đóng theo trạng thái đối nghịch nhận409.

Free3lượt/thángUTC,720pwatermark; Personal/Enterprise1080p không watermark khi giấy phép còn hiệu lực. Hết hạn trả phí trở vềFree và giữ lịch sử sử dụng tháng, không tự reset0. Tháng mới tạoUsagePeriod mới; cancel tháng cũ hoàn kỳ cũ.

TTL30phút là expiresAt, **không phải lời hứa thu hồi đúng30phút**: reserve mới có dọn reservation hết hạn; sweeper chạy khi được bật và mặc định không bật. Khoảng quét mặc định6giờ khi bật. Complete sau TTL trả409.

| Phản hồi | A phải hiển thị/xử lý |
| --- | --- |
|401|Nhắc đăng nhập; không mã hóa khi reserve bị từ chối |
|403 quota|Thông báo hết lượt tháng; không nhầm với cấm1080p; phân biệt403CSRF nếu xảy ra |
|400|Thông báo độ cao/key không hợp lệ, không tự lặp vô hạn |
|404 complete/cancel|Không xác nhận hoàn tất/hoàn lượt; ghi ID và đối soát quyền sở hữu |
|409|Không giao kết quả như thành công; trạng thái đã đóng/hết hạn cần xử lý |
|429|Auth có rate limit; không mô tả quotaexport như rate limit429 |
|Mất mạng/5xx|Trước reserve không mã hóa; sau reserve giữ cùng ID để retry/đối soát, không tự tạo lượt mới |

**ISS-G-001:** frontend hiện nuốt lỗicomplete/cancel và có thể giao file, kể cả đường ghi trực tiếp đã ghi ra file. Đích yêu cầu phải thiết kế vùng ghi tạm/commit và xử lý xuất dài, không chỉ thêm một thông báo. Các TC-A-20/36 được đổi kỳ vọng có lịch sử, chưa đạt. Kiểm quyền phía client có giới hạn chống can thiệp theoCharter; không tuyên bố ngăn mọi hành vi cố tình sửa client.

## 3. IF-CA-01 — danh mục và phiên bản mẫu

GET /api/templates công khai trả **Active**:templateKey,name,version,status,manifestJson. Draft/Active/Retired dùng thống nhất; Admin POST /api/admin/templates/{key}/status đã có. Seed5key:classic,bold,minimal,story,promo.

Chốt hai lớp: metadata server mô tả sceneCount5,sceneSeconds12,safeArea,titleMaxChars; presentation frontend chứaid,name,previewAssetId,supportedProjectVersion và bố cục. Cả hai có version; dùng adapter kiểm tương thích, không tùy ý coi haiJSON là cùng schema. Trước chuyểnActive phải kiểmmanifest,key và presentation có sẵn, không cóURLngoài/nội dung người dùng. CRUD/upload/versionvalidator đầy đủ chưa được mãlist/status chứng minh.

Dự án đã lưu phải có templateKey+version+snapshot tham số cần dựng; migration cho dự ánV1 chỉ cótemplateId cần giữ diện mạo gốc. Retired không chọn mới từ danh mục hiện hành; dự án cũ vẫn mở/xuất snapshot với cảnh báo. Offline chỉ dùng snapshot/cache có nhãn thời điểm; chưa có cache thì dùng bản đóng gói ghi rõ chưa xác minhActive. **ISS-G-002:** mã hiện tại chưa lưu snapshot/version; thaycatalog state chưa giải quyết vấn đề này.

## 4. IF-CB-01 — điều chỉnh hạn mức qua hỗ trợ (hợp đồng đích)

Chưa có endpoint triển khai. Chọn `POST /api/admin/support/quota-adjustments` làm đường dẫn thiết kế; không ghi nó vào danh sáchAPIđãcó. Request:userId,usagePeriodStartUtc,delta,ticketId,reason,idempotencyKey; Admin+CSRF. Delta là số lượt bù có giới hạn do chính sáchB kiểm tra; không sửa entitlement gốc.

Response đích:adjustmentId,userId,usagePeriodStartUtc,balanceBefore,balanceAfter,auditEventId. Cùngkey+cùngpayload trả kết quảcũ; cùngkey+payloadkhác409. Input khônghợp lệ400; người thường403; không cóticket/user404. B thực hiện transaction kiểmquota/cậpnhật/audit nguyên tử, C sở hữu hồ sơticket vàUI, tránh cộng đôiước lượng. Test cạnh tranh, retry, thángcũ, unauthorized vàrollback khi audit thất bại trước khi nghiệmthu.

## 5. Sáu kiểm thử tích hợp do P03 sở hữu

| Mã | Thiết lập và bước | Kết quả mong đợi | Bằng chứng / chủ |
| --- | --- | --- | --- |
|TC-I-01|UserFree mới, DBusage0; xuất3video720p rồi lần4|3MP4watermark; lần4bịchặn,DBusage3|HAR+DBsnapshot+file;Chiến/VQ |
|TC-I-02|Ghiquota trước;reserve rồi hủy giữa chừng;reload|Quota trở lại mức trước,sau cancel xác nhận;retrycancel không trảhai lần|API/DB/UI;Chiến/VQ |
|TC-I-03|Admin non-Production giả lậpPersonal;freshcapabilities;xuất1080p|Không thu tiền thật;quyền cập nhật;MP4khôngwatermark nếuprobeđạt|API+file+probe;VQ/Chiến |
|TC-I-04|Mở dự án dùngmẫu;Admin chuyểnRetired;tải danhmục mới;mở dự án cũ|Khôngchọnmới;dự án cũ mởtheosnapshot/version|UI+API+projectfile;QA/Chiến |
|TC-I-05|ThuHAR và log toànTC-I-01 với marker chữ/ảnh riêng|0byte chữ,ảnh,tênảnh,cảnh,MP4 trong request/log;authmetadata được phép|HAR đã che secrets+bảngscan;Chiến/QA |
|TC-I-06|Đo clickXuất→khungđầu có/khôngreserve, cùngmáy,dataset,sốmẫu ghi rõ|Phầnđộtrễthêm≤1giây;APIp95đo riêng, không thay thế phépđoclient|CSV/timestamp/env;Chiến/VQ |

Trạng thái24/09: cả sáu chưa có bằng chứng end-to-end server thật đầy đủ. EV-001 unitpass,EV-002 backend failmôitrường không dùng để đánh dấuTC-Ipass. Bổ sung cả TC riêng mô-đun cho các ngoại lệ trên;P06 quản lý tiêu chí xuấtkếtquả.

## 6. Quản lý thay đổi hợp đồng

Chiến tổng hợp; Việt Quang kiểmserver/quota; Quang Anh kiểmcatalog/support. Mỗi đổi cập nhậtmoduleinput,P02/P03,OpenAPI khi triển khai,P09,test và issue/change. MãTCgiữnghĩa; nếu đổi kỳvọng phải ghilịch sử vàthửlại. Không đặtAPIchưacó vào cộtđãtriểnkhai.
''')

write('02_Planning/01_Project_Management_Plan_v1.0.md','P01 — Kế hoạch quản lý dự án tích hợp','''
## 1. Mục tiêu, căn cứ và trạng thái

PromptVideo tạo video từ chữ/ảnh cục bộ trong trình duyệt, kiểm quyền qua server; ba chủ module viết xuyên suốt rồi ghép một bộ hồ sơ. Charterv2.1,AssumptionLogv2.1,BC/BMPv2.2 vàStakeholderRegisterv1.0 là nguồn cấp cao hiện có; tênfile không chứng minh đã ký. Bộ này là kế hoạch làm việc đã chọn theo ủy quyền người dùng24/09, chưa thay baseline được sponsor phê duyệt.

Ưu tiên Planning có thể truy vết, sau đó ghi bằng chứng thực hiện/kiểmsoát/đónggói. Phạmviđầyđủ giữ nguyên; demo5cảnh60giây chỉ là tập minh họa. Quyết định DEC-001–014 nằm [sổ chung](../00_Quyet_dinh_va_quy_uoc_ma.md).

## 2. Tổ chức và thẩm quyền

| Người | Chủ module / phần tổng hợp | Người kiểm tra |
| --- | --- | --- |
|Nguyễn Thế Chiến|A;PMP,yêu cầu,giao tiếp,phạmvi,WBS,RTM,tổngkết|Việt Quang kiểmA;Quang Anh xác nhậnnộibộ |
|Nguyễn Việt Quang|B;lịch/CPM,chi phí,rủi ro,actual/EVM|Quang Anh kiểmB;Chiến xác nhậnnộibộ |
|Phạm Quang Anh|C;chất lượng,nguồn lực,truyềnthông,đónggói|Chiến kiểmC;Việt Quang xác nhậnnộibộ |

CCBnội bộ doChiến điều phối: sửa kỹthuật trongphạmvi có owner/reviewer; tácđộng mục tiêu/ngânsách/lịchCharter ghiCR và đưa người cóthẩmquyền theoCharter. Nhóm không ký thay nghiệmthu. Người dùng đã giao quyền chọn phương án soạn; không cần chờ họp để chốt mã/vai trò nữa.

## 3. Cách lập và kiểm soát các kế hoạch thành phần

| Lĩnh vực | Cách áp dụng | Nguồn có thẩm quyền |
| --- | --- | --- |
|Tích hợp|Moduleowner cập nhật5đầuvào; tổnghợp chỉghép/giảimâu thuẫn; G0 chỉ bản hiện hành|P01,G0,DEC |
|Yêu cầu/phạmvi|REQ/NF→Charter→TC; giữPPchưalàm; tránhaudio/AI/khungdọc; mọi bỏyêucầuquaCR|P02,P04,P09 |
|WBS|Sáunhánh; mỗi lá đúngmộtlần, dictionary cótiêuchí; A4.2/B4.3/C4.4|P05,JSON_data |
|Lịch|FSnetwork choWP,CPMlogic và san bằngnguồnlực;10h/người/tuần làgiảđịnh;PPchặn kếtluận toànphạmvi|P10 |
|Chi phí|599hforecast;80k/hchi phícơhội;tách3.1triệumua/thuê+400kdựphòngtiềnmặt;actualtừE05|P11,E05,M04 |
|Chất lượng|QAkiểmtàiliệu/quytrình;QCtest; bằngchứng trướcValidateScope|P06,E04,M02,M05 |
|Nguồn lực|Mỗi người10h/tuần giảđịnh; xoayreview; họp cóagenda; báoquátải sớm|P07,P12 |
|Truyền thông/stakeholder|Daily cậpnhậtngắn,2lầnreview/tuần; họpkếtluận→DEC/CR; yêu cầuđầuvàobênngoài gánowner|P07,P12,E02 |
|Rủi ro|Cause-event-effect;P/IphânbiệtEMV;risktiềmnăng khácissue; reserve chỉphầndưkhôngtrùngbase|P08,P13 |
|Mua/thuê|Cổng1.5m,tàisản700k,VPS600k,domain300k làdựtrù;chỉđặt khi có nhu cầu/đầu ra nghiệmthu;ghibiênnhận thực|P11 |
|Cấu hình/thayđổi|mdnguồn,outputsbảnsổlàmviệc,officialbảnpháthành; giữlịch sử; mộtownerworkbook|G0,CR,M03 |
|Chuyểngiao/kếtthúc|QC→ValidateScope→bàngiao→Close; lợiích dàihạn tiếp tục sauproject|M06,C01–04 |

## 4. Baseline, forecast và lịch hồ sơ

Scope baseline làmviệc gồmP02/P04/P05; schedulebaseline vàcostbaseline chỉ thành bảnđượcduyệt khi có thôngtin xácnhận. Hiện P10/P11 là forecast. **599giờ**, cao hơn450giờ149giờ (33.11%) và495giờ104giờ (21.01%). Tổng599×80k=47,920,000VND là chi phí công quy đổi, chưa cộngcontingency/managementreserve và không phải đã chi.

Chọn **CR-G-001: giữ phạm vi, điều chỉnh lịch/nguồn lực theo forecast**. Không tựtăngcaptiềnmặt3.5triệu. Cần ETC vànănglực thựcđể chốt finishdate; không suy từ599h thành giờcònphảilàm.

| Cổng | Ngày mục tiêu | Đầu ra phải có |
| --- | --- | --- |
|DOC-01|26/09|A/B/C_01,_02; mã và IFđãkhớp |
|DOC-02|29/09|P01–P13; chênhlệchbase/forecast hiệnrõ |
|DOC-03|02/10|EV,actualnếucó,issues/tests; chưađochưacókếtluận |
|DOC-04|05/10|Bộbàngiaodựthảo, hướngdẫn vàtồnđọng |
|DOC-05|07/10|Reviewhồsơ, xửlýlỗi ghép; xác định trạng thái phát hành |

LịchCharter24/08–06/12,M0–M7 dùngđốichiếu. Đây làlịchhồsơđãchọn, khônglời hứa hoànthiệnsảnphẩm trong14ngày. Pre-project/Initiatingđượcràphiênbản/mã; khôngviếtlại cảhai giaiđoạn.

## 5. Kiểm soát tiến độ, thay đổi và nghiệm thu

Chủviệc ghi deliverable/bằngchứng/trởngạihằngngày;actualchỉghikhingười làmxácnhận. M01hàngtuần báo lệch,phươngán,owner. Issueđãxảyra→M03; riskmới→P13. Sốđãchi có chứngtừ; côngsức thựccóworklog. EVMchỉtính khiPV/EV/ACcùngđơnvị,cùngngày,cùngphạmvi vàbaselinehợplệ; thiếuthìđểtrống kèmlýdo.

Một nhiệm vụ tài liệu xong khi có nội dung đủ, mã/link đúng, nguồn/giảđịnh rõ và review ghi nhận. Một yêu cầu sản phẩm xong khi TC/cácngưỡng đạt trênmôitrườngquyđịnh vàđượckiểmchéo. M06khôngkýthay; C01làsnapshottiếnđộđếnhômnay chođếnkhisảnphẩmđủđiềukiệnClose.
''')

write('02_Planning/04_Project_Scope_Statement_v1.0.md','P04 — Tuyên bố phạm vi dự án','''
## 1. Sản phẩm và đầu ra

Tạo,soạn,lưu vàxuất videoMP4từchữ/ảnhcụcbộ; A renderer/editor/export, B tài khoản/thuêbao/quota/thanh toán, C quản trịmẫu/tàisản/hỗtrợ/giámsát. ToànphạmviCharterđượcgiữ, gồm phần chưa làm ởPP. BộquảnlýgồmPlanning,thựchiện,kiểmsoát vàbàngiao. Pre-project/Initiatingdùng bản đãcó, ràliênkếtphiênbản.

| Nhóm đầu ra | WBS sở hữu | Tiêu chí / nơi truy vết |
| --- | --- | --- |
|Hồ sơquảnlý,yêu cầu,thiết kế|1.x,2.x,3.x|Mãduynhất,dict+ước lượng,RTM,IF;P01–13 |
|Nềntảng/CI|4.1|Build/testcólog;Auth/CSRF/OpenAPI;E01 |
|Editor/render/export/storage|4.2.1–7|REQ-A01–14,NF-A01–10;pause cònPP |
|Identity/quota/payment/subscription/invoice/seats|4.3.1–6|REQ-B/NF-B;hóađơn vàseatsgiữPP,khôngđánhđồngfakevớicổngthật |
|Templates/assets/support/metrics/health/admin|4.4.1–4|REQ-C/NF-C;support/UIchưa triểnkhai vẫntrongscope |
|Tíchhợp vàkiểmthửnghiệmthu|5.1–3|TC-I;1080p,bộnhớ×10,3máy,134tổhợp,100lần,10ngườithử |
|Triểnkhai/hướngdẫn/đónggói/nghiệmthu|6.1–4|Rollback/restore,hướngdẫn,tồnđọng,chữkýthật khi đủđiềukiện |

## 2. Demo và loại trừ

Demo5cảnh60giây, chữtiếngViệt/ảnhcụcbộ,mộtmẫu,preview,MP4720pFreewatermark; ba lượt rồi chặnlần4/hủy; AdminfakePersonalnon-Production vàRetired nếu môi trường/probecho phép. Demo mộtmẫu không xóa yêu cầu5mẫu; fail1080pprobe khôngtựhạtiêuchíCharter.

Loạitrừaudio/TTS/nhạc,AI,khungdọc,uploadnộidunglênserver,cloudsync vàtínhnăngngoàiCharter. YêucầuNF-07/NF-08giữ ở danh mục tuânthủ cấpCharter, trạngtháichưaxácminh; khôngtựthêm nhiệm vụ ràgiấyphép vào đợtnày khi hướngdẫnnguồn khônggiao việcđó.

## 3. Giả định, ràng buộc và nghiệm thu

10h/người/tuầnchưaxácnhận;Docker/máyđo/ngườithử làđiềukiện.3.5triệu tiềnmặt,450hthamchiếu/trần495h;forecast599h cầnCR-G-001. OBS/NFkhôngđượcghiđạtchỉvìcócode.

P09 nối từngREQ/NF vớiCharter/thiết kế/code/TC/trạngthái;P05dictquyđịnhđầura;P06ngưỡngtest. QCcungcấpbằngchứng→ngườicóthẩmquyềnValidateScope(M06)→bàngiaoClose. Phêduyệtkếhoạch,reviewtài liệu vànghiệmthusảnphẩm làba trạngtháikhácnhau.

## 4. Phương án xử lý phần chưa hoàn thành

GiữPP vàowner ởWBS; phânrãtrướccổngthiết kế liênquan. ĐãbiếtISS-G-001/002/003→sửa tronggóihiệnhành,khôngghimới thànhriskngẫunhiênđểcộngchi phí. Xinđổi tiêu chí/phạmvi phải cóCRphântích tácđộng vàquyếtđịnh,khôngxóadòngRTM.
''')

rows=[]
for p in packages:
    te=(p['O']+p['M']+p['P'])/3
    rows.append([p['id'],p['name'],p['type'],p['owner'],p['O'],p['M'],p['P'],f'{te:.3f}',p['milestone'],p['status']])
write('02_Planning/05_WBS_and_WBS_Dictionary_v1.0.md','P05 — WBS và từ điển WBS',f'''
## 1. Cấu trúc duy nhất và số liệu

WBSsáugiaiđoạn theoDEC-003. MãphầnxâydựngA4.2/B4.3/C4.4; khôngcộngmodulelầnhai vào sáunhánh. Nguồnước lượnglàA/B/C_02và`_data/common-data.json`;tE=(O+M+P)/3, chỉlàmtrònhiểnthị. PhầnschemaA11⅓h đãở3.2;nguyênmẫu10hđãở3.1. Tổng **599giờ**, chiphícôngquyđổi47,920,000VND; chưareserve,khôngphảiactual/ETC/baselineapproved.

```text
0 PromptVideo — 599h
├── 1 Quản lý dự án — 67h
├── 2 Yêu cầu — 20h
├── 3 Thiết kế — 33⅓h
├── 4 Xây dựng — 363⅔h
│   ├── 4.1 Nền tảng — 24h
│   ├── 4.2 A — 139h
│   ├── 4.3 B — 128⅔h
│   └── 4.4 C — 72h
├── 5 Tích hợp và kiểm thử — 65h
└── 6 Triển khai và bàn giao — 50h
```

## 2. Gói lá và ước lượng

{table(['WBS','Đầu ra','Loại','Owner','O','M','P','tE giờ','Mốc mục tiêu','Trạng thái'],rows)}

## 3. Từ điển gói chung

| WBS | Thành phần đầu ra | Điều kiện chấp nhận | Giả định/ràng buộc/rủi ro |
| --- | --- | --- | --- |
|1.1|BC/BMPv2.2,Charter/Assumptionv2.1,Stakeholderv1.0|Nhấtquán tên,mục tiêu,ngânsách; xácminhtrạngtháiký|CófileDraftkhôngphảisponsorapproved |
|1.2|PMP vàcáckếhoạchthànhphần|Phạmvi,lịch,chiphíkhớp;mọiissuecóowner|10h/tuần;chưaapprovedbaseline |
|1.3|M01–05,E05 vàsổcậpnhật|Báocáocóngày,status,bằngchứng;EVMcóđầuvàohợplệ|WPmởtừPPcũ;chưagiờthật |
|2.1|P02vàmodule_01|MỗiREQcótiêuchí/TC,truyCharter|KhôngtạolạimãTCkhácnghĩa |
|2.2|P09|KhôngmissingREQ;khôngfakepass;7cộtRTMtối thiểu|UpdatekhiREQ/testthayđổi |
|3.1|Kiếntrúc,prototype,ADR-001,probe|CófileMP4vàbảngđomôitrường|Khôngsuy1080ptừ720p |
|3.2|P03,schemaA,3IF|MỗiIFrequest/response/error/version,TC;phânbiệtđích/hiệncó|ISS-G-001/002,khônggộpnhầmmanifest |
|4.1|Repo,DB,CI,OpenAPI,CSRF,PWA|Build/testtừcheckoutghi nguồn;secretsngoàitàiliệu|Dockerhiệnblocked |
|5.1|TC-I01–06,HAR,bảngđo,bảntíchhợp|Kếtquảcóbằngchứngserverthật|DemoAPIkhôngthayUIbàngiaođầyđủ |
|5.2|OB01/02/03,ma trậntrìnhduyệt|1080p≤1.5×,bộnhớ×10<15%,checksum3máy|PP;cầnmáythamchiếu |
|5.3|134tổhợp,100xuất,10người|OB06/07/08 theoCharter|PP;chưatuyểnngườithử |
|6.1|Production,HTTPS,migration,backup/restore,rollback|Chạy/khôiphụccóbằngchứng;khôngdùngfakeProduction|PP;VPS600k+domain300k |
|6.2|Hướngdẫn,kịchbản,seed|Ngườingoàinhómcóthểchạylại|Đãsoạn;chưacóbiênbảnthửđộclập |
|6.3|C01–04 vàmục lụcbàngiao|Đầyđủnguồn,trạngtháitồnđọng,kếtluậnhợplệ|Dựthảokếtđợt,khôngkếtluậndựánxong |
|6.4|ValidateScope,bàngiaovậnhành,nhậntráchnhiệmlợiích|QCđạt,đúngthẩmquyềnký|PP;chưanghiệmthu |

Từđiểnchi tiết4.2,4.3,4.4 nằm trongA/B/C_02, làthànhphầncủaP05;B4.3.5hóađơnvà4.3.6seatsđược táchkhỏi4.3.3đểgiữphạmvi vàước lượngthiếu. CkhôngcòncácthướcđoMTtựđặt;LI01–05theoBMP.

## 4. Kiểm tra quy tắc và mở dần PP

Mỗigóilàmộtđầura,mộtowner; cộng31góilá ra599h. WPtrong8–80h; quy tắcnàykhôngtựbảochứnggóixongtrongkỳ2tuầnvớinănglực10h/tuần. WPđangcócodekhôngtựđóngnếuthiếubằngchứng. PPkhôngcóactivitygiả.

4.2.7/5.2phânrãtrướcM3;5.3trướcM5;B4.3.5/6trướckhi tíchhợpthanhtoánthật;C4.4.2/4phânrãtạiDOC-02;6.1trướcM5;6.4trướcM6. Phânrãkhôngtựtăngscope;cậpnhậtP10/P11/P13theosốliệuđãkiểm.

NF-07/NF-08cấpChartercònchưaxácminh,khôngẩnkhỏidanhmụcnghiệmthu;đợtnàykhôngtựgiao ràgiấyphép. Do đókhôngtuyênbốđãchứngminh100%tuânthủchỉbằngcộngđủcâyWBS.
''')

# Text diagram is canonical and export source is kept in sync; old PNG is historical.
puml='@startwbs\n* PromptVideo - 599 h\n'
phase_names={'1':'Quan ly - 67 h','2':'Yeu cau - 20 h','3':'Thiet ke - 33.333 h','4':'Xay dung - 363.667 h','5':'Kiem thu - 65 h','6':'Ban giao - 50 h'}
for phase,label in phase_names.items():
    puml+='** '+phase+' '+label+'\n'
    for p in packages:
        if p['id'].split('.')[0]==phase:puml+='*** '+p['id']+' '+p['name']+f" ({(p['O']+p['M']+p['P'])/3:.3f}h;{p['type']})\n"
puml+='@endwbs\n'
(DOC/'02_Planning/05_WBS_PromptVideo.puml').write_text(puml,encoding='utf-8')

write('02_Planning/08_Risk_Management_Plan_v1.0.md','P08 — Kế hoạch quản lý rủi ro','''
## 1. Phương pháp

Chủmodulepháthiện,ViệtQuangtổnghợpP13,Chiếnquyếtđịnhứngphóliênmodule. Mỗirisk:nguyênnhân→sựkiện→hậuquả,owner,trigger,P,I,ứngphó,vậtchứng vàlầnsửa. Riskchưa chắc xảyra khácissueđãxảyra(M03);backendkhôngcóDockerlàISS-G-004,khôngghiđãpass.

P1=.1,P2=.3,P3=.5,P4=.7,P5=.9 làgiảđịnhphánđoán. I1≤2h,I2>2–4h,I3>4–8h,I4>8–16h,I5>16h. P×I1–6thấp,7–12trungbình,13–25cao; rủironặngvềtiền/phạmvi/chấtlượngghiđơnvịthựcvàđẩyxửlýtheohậuquảcao hơn. Điểmđịnh tínhkhôngphảixácsuất.

EMVgiờ=xácsuất×giờhậuquả,EMVtiền=xácsuất×hậuquảtiền;khônglấysốđiểmP×IđổiVND. P13giữcôngthứcthesốchưalàmtròn. ReviewtạiDOCgatevàkhitriggervượt;riskcaochủviệcbáongay,trungbìnhra quyếtđịnhởreview,thấpvẫn cóowner.

## 2. Ứng phó và dự phòng

TránhphạmvingoàiCharter;giảm rủirobằngprobe/contracttest/đomáythật;chuyểngiaochỉkhicóthỏathuậnthật;chấpnhậncótrigger/fallback vàngườichịutráchnhiệm. Khôngbiếnfallbackkhácngưỡngthànhnghiệmthuđạt.

Contingencychỉtínhhậuquảdưngoàibasevàchi phíđápứngkhôngtrùngO/M/P. Ađãbỏreserve12.6hcũvìđocơbản vàgiờquátảiđãtínhtrongscope;exposureAtrongP13chỉthamkhảo. B33.4h,C12.8h vàriskchungtừC8.4h làước lượngứngphó/phơinhiễmchưaduyệt,cầndeduplicateR-A-06vàR-C-05trướckhicộng. Không tự gán managementreserve=0;chưaphânbổ. Khoản400k làreserve**tiềnmặt** trong3.5triệu,khôngphảireservegiờ.

## 3. Các ưu tiên tại24/09

1. Khôiphụcmôitrườngtíchhợp;chạylại42backendtestfailmôitrườngvàTC-I,giữlogtrướcsau.
2. Khéplệchcomplete/quota,snapshotmẫu,idempotencycheckout. Đây làissueđãbiết,tráchnhiệm/tácđộngởM03vàcácWP,khôngcộnglầnhaivàoriskreserve.
3. CóphươngphápđoWorker1080p,bộnhớ×10,checksum3máy,134tổhợp vàngườithử;thiếuđiềukiệnthìPPvẫn mở.
4. Xửlý599hvớinănglực10h/tuần vàCR-G-001;chưabiếtETCthìkhôngcamkếtngàyhoànthànhtoànsảnphẩm.
5. Cổngthanh toánthật/tài liệuinvoiceseats/côngcụhỗtrợchưađủ;demo giảlậpphảigắnnnhãnnon-Production.

## 4. Cập nhật

P13làregisterduynhất,khôngmỗimodulemộtbaseline. Module_02lànguồnnhập;_04ghitrigger/issue/residualcủakỳ. Khiđổimức/ứngphó,ghingàyvàlýdo;khiriskxảyra,mởISSliênkết,mỗikiểmthửcóEV. BáocáoM01chỉtổnghợp,cộtactualkhônglấysốforecast.
''',owner='Việt Quang',reviewer='Quang Anh')

print('Updated A and Planning P01/P03/P04/P05/P08; forecast',total,'packages',len(packages))
