from pathlib import Path
import json, re, os, shutil

R=Path(__file__).resolve().parents[1]
D=R/'design-note/md-docs'
H=D/'_history/2026-09-24-truoc-chot'
H.mkdir(parents=True,exist_ok=True)

def save(path,text):
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(text.strip()+'\n',encoding='utf-8')

def archive(p):
    dest=H/p.name
    if p.exists() and not dest.exists():shutil.copyfile(p,dest)

def relative(p,base): return os.path.relpath(p,base).replace('\\','/')
def link(p,base,label=None):return f'[{label or p.stem}](<{relative(p,base)}>)'

# Keep the workbook network and module activity inputs identical.
activities=json.loads((D/'_data/normalized-activities.json').read_text(encoding='utf-8'))
datasets={n:json.loads((D/f'_data/{n}-data.json').read_text(encoding='utf-8')) for n in ['a','b','c','common']}
for name,data in datasets.items():
    ids={p['id'] for p in data['packages']}
    data['activities']=[a for a in activities if a['wbs'] in ids]
    if name=='common':data['requirements']=[q for q in data['requirements'] if q['id']!='NF-G-02']
    save(D/f'_data/{name}-data.json',json.dumps(data,ensure_ascii=False,indent=2))

ap=D/'02_Planning/_module-input/A_San_xuat_video'
p=ap/'A_01_Yeu_cau_va_kiem_thu_v1.0.md'
t=p.read_text(encoding='utf-8')
t=t.replace('file 03 (chưa lập)','P03 (đã lập)').replace('TC-I-04 (đề xuất)','TC-I-04 (đã chốt)')
lines=t.splitlines()
in_rtm=False
for i,line in enumerate(lines):
    if line.startswith('## 4.'):in_rtm=True
    if line.startswith('## 5.'):in_rtm=False
    if in_rtm and line.startswith('| REQ-A-05 |'):
        cells=line.split('|');cells[-2]=' Một phần; thiếu snapshot/version — ISS-G-002 ';lines[i]='|'.join(cells)
    if in_rtm and line.startswith('| REQ-A-10 |'):
        cells=line.split('|');cells[-2]=' Một phần; complete lỗi vẫn giao file — ISS-G-001 ';lines[i]='|'.join(cells)
    if line.startswith('| TC-A-07 |'):
        lines[i]='| TC-A-07 | REQ-A-05 | Integration + E2E | Danh mục có một mẫu Retired; mở dự án cũ; thử offline có/không cache; đổi version mẫu | Không chọn mới mẫu Retired khi có danh mục hiện hành; dự án cũ dùng snapshot/version; offline có nhãn thời điểm/chưa xác minh | Test catalog/mock đã có; cần bổ sung snapshot/version và máy chủ thật | Một phần; ISS-G-002; chưa đạt đầy đủ DEC-012 |'
save(p,'\n'.join(lines))
p=ap/'A_02_WBS_uoc_luong_rui_ro_v1.0.md'
t=p.read_text(encoding='utf-8')
for a in datasets['a']['activities']:
    pat=r'^\| '+re.escape(a['id'])+r' \|.*$'
    row=f"| {a['id']} | {a['wbs']} | {a['name']} | {a['hours']:.3f} | {', '.join(a['predecessors']) or 'Bắt đầu mạng'} | Chiến |"
    t=re.sub(pat,lambda m:row,t,flags=re.M)
save(p,t)

# P02 contains all three normative module inputs, with links rebased.
def rebase(text,source,target):
    def change(m):
        url=m.group(2).strip('<>')
        if re.match(r'^(https?:|#|mailto:)',url):return m.group(0)
        path,sep,anchor=url.partition('#')
        dest=(source.parent/path).resolve()
        if not dest.exists():return m.group(0)
        return f'[{m.group(1)}](<{relative(dest,target.parent)}'+('#'+anchor if sep else '')+'>)'
    return re.sub(r'\[([^\]]+)\]\(([^)]+)\)',change,text)

reqtarget=D/'02_Planning/02_Requirements_Specification_v1.0.md'
intro='''# P02 — Đặc tả yêu cầu phần mềm hợp nhất

**Phiên bản:** v1.0, ngày24/09/2026. **Trạng thái:** Nguồn soạn đã ghép; chưa nghiệm thu. Chiến tổng hợp, Việt Quang kiểm tra; chủ module chịu trách nhiệm sửa phần mình.

## 1. Cách đọc và phạm vi

Ba phụ lục dưới đây chứa đầy đủ đầu vào yêu cầu, quy tắc, luồng chính/ngoại lệ, tiêu chí và ca thử của A/B/C tại lần ghép. Chúng là thành phần của đặc tả chung. Sửa tại module trước rồi ghép lại; không sửa hai bộ độc lập. P03 sở hữu giao tiếp và TC-I; P09 là RTM hợp nhất. Có65mã yêu cầu:24củaA,28củaB,12củaC vàNF-G-01 dùng chung; các dòng truy vết lặp mã trong phụ lục không phải yêu cầu mới.

Giữ toàn phạm vi Charterv2.1. Demo5cảnh60giây là tập con; không âm thanh,AI,khung dọc hoặc upload nội dung video. Module A làm video cục bộ; B quản lý tài khoản/thuê bao/quota/thanh toán; C quản trị/vận hành. Hóa đơn,seats,support và các tiêu chí còn thiếu vẫn phải truy vết, không bị xóa để vừa lịch.

## 2. Yêu cầu dùng chung

**NF-G-01 — 0byte nội dung người dùng rời trình duyệt.** Kế thừaOB-09/NF-03; các NF tương ứng ở module giữ trách nhiệm thực hiện, không cộng thêm phạm vi. HTTP/log không chứa chữ,ảnh,tên ảnh,JSON cảnh hoặcMP4. Auth/quyền/quota/metadata catalog được phép truyền theoP03. TC-I-05 thu HAR và log với marker riêng, chetokentrướcchiasẻ; kỳ này chưa có bằng chứng luồng thật đầy đủ.

## 3. Quy tắc quản lý yêu cầu

REQ-X/NF-X/QT-X/TC-X theo registry; mãCharterRQ/OB/NFgiữ nguyên. Mỗi đổi phải cập nhật tiêu chí,TC,RTM và tác độngWBS/lịch/chi phí/rủi ro. “Có code”,“unit đạt”,“E2E mock đạt”,“server thật đạt” và“đã nghiệm thu” là những trạng thái khác nhau. TC-A-20/36 đổi kỳ vọng theoDEC-011 nên không kế thừa kết quả cũ; TC-A-07 còn thiếu snapshot/version.

'''
parts=[intro]
for name,folder in [('A','A_San_xuat_video'),('B','B_Tai_khoan_thue_bao'),('C','C_Quan_tri_van_hanh')]:
    source=D/f'02_Planning/_module-input/{folder}/{name}_01_Yeu_cau_va_kiem_thu_v1.0.md'
    text=source.read_text(encoding='utf-8')
    text=re.sub(r'^#{1,6} ',lambda m:'#'*(min(len(m.group().strip())+2,6))+' ',text,flags=re.M)
    parts.append(f'## Phụ lục {name} — Đặc tả module {name}\n\nNguồn: {link(source,reqtarget.parent)}.\n\n'+rebase(text,source,reqtarget))
save(reqtarget,'\n\n'.join(parts))

# Consistent templates, with no pending code decisions or prefilled signatures.
for name in ['00_Document_Template_v1.0.md','01_Module_Input_Template_v1.0.md','02_Change_Request_Form_v1.0.md']:archive(D/'_template'/name)
save(D/'_template/00_Document_Template_v1.0.md','''# <<Mã tài liệu — Tên tài liệu>>

| Thuộc tính | Nội dung cần điền |
| --- | --- |
| Phiên bản / ngày | <<v1.0 / YYYY-MM-DD>> |
| Trạng thái | Draft / Đã review / Đã phát hành; ghi căn cứ |
| Chủ nội dung | <<Người chịu trách nhiệm>> |
| Người kiểm tra được giao | <<Tên; chưa phải chữ ký>> |
| Xác nhận đã thực hiện | Chưa có; chỉ điền người/ngày/bằng chứng sau khi họ xác nhận |

## Lịch sử cập nhật

Ghi phiên bản,ngày,lý do,nội dung đổi,người thực hiện và nguồn xác nhận nếu có. Không điền tên người phê duyệt như thể đã ký.

## Nội dung

Mục đích/phạm vi; nguồn và giả định; nội dung chuyên môn; số liệu và bằng chứng; vấn đề còn mở có người xử lý; đầu ra/điều kiện hoàn tất.

## Kiểm tra trước khi giao

Mã theo [registry](../00_Quyet_dinh_va_quy_uoc_ma.md); link tồn tại; số tổng khớp; forecast khác actual; chưa đo ghi chưa đo; không cấp lại mãTC. Chủ module tự kiểm rồi chuyển người review. Markdown là nguồn soạn,outputs là bản làm việc/bản xuất,official-docs là bản phát hành đúng trạng thái.
''')
save(D/'_template/01_Module_Input_Template_v1.0.md','''# Mẫu đầu vào module — X=A/B/C

Mỗi người có5file; ghi metadata theoT0. Chiến phụ tráchA,ViệtQuangB,QuangAnhC. Vòng kiểm tra: A→ViệtQuang, B→QuangAnh, C→Chiến. Xác nhận nội bộ lần lượtQuangAnh,Chiến,ViệtQuang; chưa đồng nghĩa nghiệm thu sản phẩm.

## Quy ước đã chốt

REQ-X-nn,NF-X-nn,QT-X-n,TC-X-nn,R-X-nn. TC-I doP03 sở hữu; CharterRQ/OB/NF giữ nguyên. WBS chung6giai đoạn, xây dựngA4.2/B4.3/C4.4; thiết kế/kiểm thử thuộc nhánh3/5, không cộng hai lần. ActivityACT-<WBS>-nn; vấn đềISS-G-nnn; thay đổiCR-G-nnn; bằng chứngEV-nnn. Xem [registry](../00_Quyet_dinh_va_quy_uoc_ma.md) trước khi cấp mã.

| File | Nội dung bắt buộc | Tài liệu nhận |
| --- | --- | --- |
|X_01_Yeu_cau_va_kiem_thu_v1.0.md|Tác nhân,phạm vi/quy tắc,REQ/NF,luồng chính/ngoại lệ,tiêu chí đo được,TC đủ bước/dữ liệu/expected,truyCharter,IF và trạng thái|P02/P03/P04/P06/P09 |
|X_02_WBS_uoc_luong_rui_ro_v1.0.md|Gói đầu ra/dictionary,activity/phụ thuộc,WP/PP,O/M/P và cơ sở,chi phí/nguồn lực,risk/trigger/ứng phó,giả định|P05/P07/P08/P10–13 |
|X_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md|Thiết kế/source,đã làm/chưa làm,cách chạy/dùng,nhật ký có nguồn,giờ thực tế nếu có,QA/bài học|E01/E03/E04/E05 |
|X_04_Theo_doi_kiem_thu_va_thay_doi_v1.0.md|Trạng thái kỳ,bằng chứng test,môi trường/build,defect/retest,issue/risk/change,ảnh hưởng module khác,ETC có cơ sở|M01–06,P09/P13 |
|X_05_Ket_qua_ban_giao_va_bai_hoc_v1.0.md|Kết quả đã/chưa đạt,bằng chứng,actual từE05,tồn đọng/owner,người tiếp nhận,hướng dẫn,bài học và phần demo|C01–04/G1 |

## Kiểm số liệu và trạng thái

tE=(O+M+P)/3 theo học phần, không làm tròn trước khi cộng. PP chưa phân rã không có hoạt động giả. Giờ forecast không phải actual hoặcETC. EMV=xác suất×hậu quả, khác điểmP×I; bỏ phần trùngbase trước khi tính reserve. Năng lực10h/người/tuần là giả định, cần xác nhận riêng.

Không viếtTCcủa người khác theo nghĩa mới; chỉ dẫn mã. Không thêm audio/AI/khungdọc. Không tự giao việc rà giấy phép phần mềm trong đợt này; yêu cầu cấpCharter chưa xác minh vẫn phải ghi rõ. Chưa chạy/chưa có actual/chưa ký thì nói đúng tình trạng; không điền dữ liệu mẫu vào cột thực tế.
''')
save(D/'_template/02_Change_Request_Form_v1.0.md','''# CR-G-<<nnn>> — <<Tên thay đổi>>

Ngày lập,người đề nghị,owner,phiên bản,nguồn yêu cầu và trạng thái phải được ghi rõ. Không dùng mã đã cấp lại; kiểm M03 và registry. Lưu phiếu thực tế tại `04_Monitoring_and_Controlling/change-requests/`.

## 1. Hiện trạng và lý do

Nêu vấn đề,bằng chứng,baseline tham chiếu,phần chưa xác minh; chỉ rõ đây là đổi phạm vi/lịch/chi phí hay sửa tài liệu/sửa lỗi trong phạm vi.

## 2. Phương án và tác động

So sánh các phương án; chọn một phương án có lý do. Ghi tác động REQ/WBS,phụ thuộc,lịch/nguồn lực,giờ/tiền,chất lượng/rủi ro và tài liệu cần sửa. MãWBS xây dựngA4.2/B4.3/C4.4; phần chung theoP05.

## 3. Quyết định và thẩm quyền

Ghi quyết định nội bộ đã được ủy quyền riêng với phê duyệt baseline của người có thẩm quyền theoCharter. Không tự tạo chữ ký. Dùng management reserve hoặc đổi baseline phải có căn cứ thẩm quyền. Không sửa actual quá khứ; phiếu bị từ chối/hoãn vẫn lưuM03.

## 4. Thực hiện và xác minh

Liệt kê file/code cần sửa,owner,hạn,TC/EV và điều kiện đóng. Kết quả thực hiện,review và nghiệm thu ghi sau khi xảy ra.
''')

save(D/'04_Monitoring_and_Controlling/change-requests/CR-G-001_Dieu_chinh_lich_va_nguon_luc.md','''# CR-G-001 — Điều chỉnh lịch và nguồn lực theo forecast

**Ngày:**24/09/2026. **Điều phối:**Chiến. **Tổng hợp tác động:**ViệtQuang. **Trạng thái:**Đã chọn phương án nội bộ theo ủy quyền người dùng; chưa có phê duyệt baseline từ Nhà tài trợ.

## Căn cứ và quyết định

Ước lượng32gói đạt599giờ, vượt450giờ149giờ và trần495giờ104giờ. Có427giờWP,172giờPP; chưa có actual/ETC đủ cơ sở. Chọn giữ toàn phạm vi, điều chỉnh lịch/nguồn lực theo forecast và ETC được xác minh. Không ép giờ xuống450/495 hoặc xóa hóa đơn,seats,support/kiểm thử còn thiếu.

## Tác động

P05/P10/P11/P13 vàM01 cập nhật cùng số liệu.599×80,000=47,920,000VND là công quy đổi, không tiền đã chi. Contingency46.2giờ là ứng viên chưa duyệt,ngoài599giờ; cần kiểm loại trùngO/M/P. Management reserve giờ chưa phân bổ. Tiền mặt vẫn trần3.5triệu gồm3.1triệu dự trù và400nghìn dự phòng.

Kịch bản lịchWP từ24/09 dùng10h/người/tuần không phảiETC hoặc cam kết hoàn thành dự án; PP và phụ thuộc ngoài còn mở. Giai đoạn hồ sơ24/09–07/10 giữ các cổngDOC-01–05; cần công suất thật để quyết định lịch sản phẩm.

## Điều kiện đóng

Thu ETC/actual/giờ rảnh có nguồn,phân rãPP đến hạn,lập lịch khả thi,xác nhận thẩm quyền baseline,ghi người/ngày/quyết định thật vàoM03. Chưa được ghi đã nghiệm thu hoặc tự thay sốCharter.
''')

# Preserve the earlier meeting feedback, then replace it with an actionable current version.
feedback=R/'design-note/feedback-va-giao-viec-hop-nhom-2026-09-24.md'
archive(feedback)
tasks={
'A':[
('Chốt cấu trúc, mã và mẫu','Các mã riêng trước đây không nối được khi ghép.','Registry,mapping,T0–T2 vàG0 đã cập nhật.','Duy trì một nguồn hiện hành khi phát sinh thay đổi.','G0/DEC/T0–T2'),
('Hoàn thiện đầu vào A','Trạng thái code/test và nghĩa baseline phải đúng căn cứ.','A_01/A_02 dùng WBS chung; ghi ISS-G-001/002 và đổi kỳ vọngTC có lịch sử.','Sửa sản phẩm theoISS và kiểm lại; không coi sửa tài liệu là sửa code.','A_01/A_02'),
('Chốt giao tiếp A–B–C','Quota,mẫu và hỗ trợ phải cùng một hành vi.','P03 chốt3IF,TC-I-01–06,current/target vàngoại lệ.','Chiến phối hợpVQ/QA triển khai phần còn lệch,thu bằng chứng.','P03'),
('Ghép yêu cầu, phạm vi, WBS','Không bỏ sót hoặc cộng đôi các gói khi ghép.','P02/P04/P05 có đủABC;32gói599h.','Cập nhật đồng thời khiREQ hoặcgói thay đổi.','P02/P04/P05'),
('Hoàn thiện RTM và PMP','Cần nối yêu cầu với kế hoạch và cách kiểm chứng.','P01 vàP09 đã ghép65REQ/NF,trạng thái/nguồn rõ.','Review cùng chủmodule;baselinechưađượcduyệt phải giữđúngtrạngthái.','P01/P09'),
('Bổ sung bằng chứng A/tích hợp','Unit/mock không chứng minh server thật hoặc chỉ tiêuCharter.','EV-00179/79unit;A03/04 vàEVINDEX đã ghi nguồn/giới hạn.','TC-I/HAR,1080p,bộ nhớ,3máy,134tổ hợp,100xuất,10người vàcoverage còn thiếu.','A_03/A_04/E/M'),
('Kiểm tra chéo C','Chủmodule không tự xác nhận toàn bộ đầu ra của mình.','Đã rà nội dungC bằngCodex,đồng bộ scope/IF/mã.','Chiến thực hiện review độc lập,ghi comment và kiểm lại sửa lỗi.','C_01–05/P06/P07'),
('Tổng kết và rà bộ nộp','Báo cáo phải phân biệt kết quả thật với kế hoạch.','C01 vàbộClosingdựthảo cónguồn,tồnđọng;G1 bảnMD đọc liền.','Chốt sauhumanreview;xuấtđịnhdạngnộp/biênbảnnghiệmthu khiđủđiềukiện.','G1/C01–04')],
'B':[
('Tách B thành đầu vào chuẩn','Bản dài cũ khó ghép và có mã trùng.','B_01/B_02 đãtách;oldnoteđánh dấu lịch sử.','Duy trì5fileB vàsửa từnguồnmodule.','B_01/B_02'),
('Sửa quy tắc và giao tiếp B','Reserve,expire,cancel vàfake phảikhớpAPI/cácmodule.','QT-B,IF-AB/CB,TTL,UsagePeriod vànon-Production đãchốt.','Sửa complete/checkout/support cònthiếu;test thángcũ vàretry.','B_01/P03'),
('Bổ sung activity và ước lượng B','PolicySeats=5 khôngđồngnghĩa cóquảnlý5chỗ.','6gói128⅔h,12activitiesWP80⅔h;invoice/seats48hPP.','PhânrãPP,thuETCthật;khôngép về60h cũ.','B_02/P10'),
('Sửa dự phòng và phương pháp rủi ro','ĐiểmP×I khôngphảiEMV vàreservekhôngđượctrùngbase.','P08/P13 dùngthangchung;B33.4h làứngviênchưaduyệt.','Rà residual/O-M-P trướcphêduyệt;theodõitrigger.','P08/P13'),
('Tổng hợp lịch/CPM/ngân sách','Lịch phải xétphụthuộcvàcôngsuất,khôngchỉcộnggiờ.','P10/P11cócôngthức,CPM vàsanbằng,PP/cash/reserveriêng.','Thuactual/ETC vàxửlýCR-G-001 đểcólịchcamkết.','P10/P11'),
('Ghi kết quả B và actual','Không được lấy plannedhour làm giờthực tế hoặcđặtAC=0.','B03/04,E05,M03/M04đãlập;EV-002ghi18pass42failmôitrường.','KhôiphụcDocker,chạylạiintegration;mọingườighiworklogcónguồn.','B_03/B_04/E05/M03/M04'),
('Kiểm tra chéo A','Cần người ngoàiAđối chiếuTCvớihànhvithật.','ĐãràtàiliệubằngCodex,ghiissuevàgiớihạnunit.','VQtestchéoA,ghi expected/actual/EVvàretest.','A_01–05/M05'),
('Chốt số liệu và bàn giao B','Báocáocuối khôngđượcdùngforecastnhưđãchi.','B05 vàsổchi phí/bàngiao cótrạngtháichưacóactual.','Đối soátnhậtký/chứngtừ,chốttồnđọngvàngườinhận.','B_05/P11/C02')],
'C':[
('Tách C và sửa scope','Audio/video vàTC-Aviếtlại làm lệchCharter.','C_01/C_02đãtách,bỏngoàiphạmvi,giữ5cảnh60giây.','CậpnhậttheoREQ-C,khôngtựđịnhnghĩalạiTCmodulekhác.','C_01/C_02'),
('Chốt mẫu/Admin/hỗ trợ','Retired/version/quotaadjustment phải thốngnhất.','QT-C,IF-CA/CB đãkhớpP03;routeđíchghichưacó.','Phối hợpA/B thực hiện snapshot/validator/support.','C_01/P03'),
('Sửa RTM và ca thử C','Khôngthểnghiệmthu bằngmãmục tiêukhôngcótrongnguồn.','12REQ/NF,21TC-C;health/ticketvàLI-01–05đãđốichiếu.','ChạyTC-Cthật,đínhkèmEV;chưachạythìNotRun.','C_01/P09'),
('Bổ sung hoạt động/ước lượng/rủi ro','Cầnphântíchđầurachứkhôngchiađềugiờ.','C72h,WP36h;PPsupport/UI36h;reserve12.8hứngviên.','PhânrãPP;loạitrùngquátải8.4h vàO/M/Ptrướckhicộngreserve.','C_02/P10/P13'),
('Tổng hợp chất lượng','QAquytrìnhkhácQCtestvànghiệmthu.','P06,E04,M02/M05phânbiệt3lớp,bằngchứng/ngưỡng.','Điều phối đủphépthửCharter,cungcấpQCchoM06.','P06/E04/M02/M05'),
('Sửa RACI/nguồn lực/truyền thông','MỗiviệccầnmộtA,vòngreviewvàcôngsuấtrõ.','P07/P12 đúngvaitrò;10h/người/tuầnlàgiảđịnh;DOCgatesđãchọn.','Xác nhậnlịchrảnhthật,ghikếtquảcuộchọp vàoE02.','P07/P12/E02'),
('Hoàn thiện bằng chứng C','Metricscount/healthđơnlẻkhôngchứngminhlợiích hayuptime.','C03/04ghiđúngAPIcó/thiếu vàEV.','ThuAPI/UI/audit,kỳđoLI/uptimeđúngnguồn;khônggiảdoanhthu.','C_03/C_04/EV'),
('Kiểm tra chéo B','Cầnkiểm cảngoạilệthanh toán/quota.','Đãcóhợpđồngvàca thửđểreview.','QAkiểmBsaumôitrườngsẵnsàng;ghikếtquả vàretest.','B_01–05/M05'),
('Gom bàn giao/bài học/trình bày','Bộnộpphảinhấtquánvàcôngkhaiphầncònthiếu.','C05,C02–04,G0/G1đãsoạn;nộidungdemocóđiềukiện.','Reviewhìnhthức,bảnxuấtvàtiếpnhận;khôngkýnghiệmthutrướcQC.','C_05/C02–04/G0/G1')]}

head='''# Feedback và giao việc đã chốt — họp ngày24/09/2026

Các phương án đã được quyết định theo ủy quyền của bạn; không còn để nhóm tự chọn lại hệ mã hoặc người tổng hợp. Phần sửa nội dung tài liệu đã thực hiện. Những việc cần chạy thật, cung cấp giờ thực tế hoặc thành viên trực tiếp review được ghi riêng dưới từng đầu việc.

## Quyết định áp dụng

- Chiến: moduleA, PMP/yêu cầu/giao tiếp/phạm vi/WBS/RTM và tổng kết.
- ViệtQuang: moduleB, lịch/CPM/chi phí/rủi ro/actual/EVM.
- QuangAnh: moduleC, chất lượng/nguồn lực/truyền thông và đóng gói.
- WBSsáugiaiđoạn; xây dựngA4.2/B4.3/C4.4. REQ/NF/QT/TC/R có module; Chartergiữmãcũ. P03sởhữuTC-I.
- Giữphạmvi;599hforecast→CR-G-001điềuchỉnhlịch/nguồnlực,khôngép450/495h. Tiềnmặtvẫn3.5triệu.
- Lịchhồsơ:DOC-01ngày26/09,DOC-02ngày29/09,DOC-03ngày02/10,DOC-04ngày05/10,DOC-05ngày07/10. Côngsuất10h/người/tuầnlàgiảđịnhcầnbổsunggiờrảnhthật.

Nguồn hiện hành: [Mục lục hồ sơ](md-docs/00_Muc_luc_va_chi_dan_ho_so.md), [quyết định/mã](md-docs/00_Quyet_dinh_va_quy_uoc_ma.md), [bằng chứng](evidence/INDEX.md). “Đã sửa tài liệu” không có nghĩa sản phẩm đã hoàn thành hoặc thành viên đã ký review.
'''
for mod,name in [('A','Nguyễn Thế Chiến'),('B','Nguyễn Việt Quang'),('C','Phạm Quang Anh')]:
    head+=f'\n## {name} — module{mod}\n'
    for i,(title,why,done,nextstep,output) in enumerate(tasks[mod],1):
        head+=f'\n### CV-{mod}-{i:02d} — {title}\n\n- **Tại sao phải làm:** {why}\n- **Đã sửa:** {done}\n- **Yêu cầu tiếp theo:** {nextstep}\n- **Đầu ra đối chiếu:** {output}.\n'
head+='''
## Việc cần nhận ngay trong cuộc họp

Mỗi người nhận5filemodule của mình, xem việc còn lại, ghi ETC và giờ có thể làm thực tế. ViệtQuang ưu tiên môi trườngDocker và dữ liệu lịch;Chiến phối hợp sửa complete/snapshot;QuangAnh chuẩn bị ca thử và nhận bằng chứng. Vòng review:ViệtQuang kiểmA,QuangAnh kiểmB,Chiến kiểmC.

Đã có79unitfrontendđạt;backend18đạt/42failmôi trường. Chưa có đủTC-I/HAR và các phép đoCharter. Mọi đầu việc chỉ được đóng theo đúng loại đầu ra: tài liệu đượcreview, sản phẩm cóTC/EV, nghiệmthu có người đúngthẩmquyền xácnhận.
'''
save(feedback,head)

print('P02, templates, CR, A fixes, normalized data and 25-task feedback written')
