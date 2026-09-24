"""Build auditable planning inputs; estimates are forecasts, never actual hours."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEMP = Path.home() / 'AppData/Local/Temp/promptvideo-doc-plan'
OUT = ROOT / 'design-note/md-docs/_data'
OUT.mkdir(parents=True, exist_ok=True)

def package(id, name, owner, points, kind='WP', milestone='M5', basis='', status='Có sản phẩm; chưa nghiệm thu'):
    return dict(id=id, name=name, owner=owner, O=points[0], M=points[1], P=points[2], type=kind,
                milestone=milestone, basis=basis, scope='Toàn phạm vi Charter v2.1', status=status)

a = {'packages': [
    package('3.1', 'Kiến trúc và nguyên mẫu mã hóa', 'Chiến', (6,10,14), milestone='M2', basis='Tách 6/10/14h nguyên mẫu khỏi gói xuất A cũ 20/28/48; phần còn lại 14/18/34, tổng không đổi.'),
    package('4.2.1', 'Trình soạn thảo nội dung', 'Chiến', (20,26,40), basis='Biểu mẫu, ảnh EXIF, undo/redo, bàn phím và xử lý ảnh lỗi.'),
    package('4.2.2', 'Thư viện năm mẫu trình chiếu', 'Chiến', (8,12,20), milestone='M3', basis='Năm bộ bố cục/màu và khung vàng; biến động do sai khác render.'),
    package('4.2.3', 'Bộ dựng và xem trước', 'Chiến', (16,22,36), milestone='M3', basis='Renderer Canvas, xuống dòng tiếng Việt, parity; khác GPU/font.'),
    package('4.2.4', 'Bộ xuất MP4 theo luồng', 'Chiến', (14,18,34), milestone='M4', basis='Worker, ba đường ghi, dọn tài nguyên, encoder/dung lượng; đã tách nguyên mẫu sang3.1.'),
    package('4.2.5', 'Kho dự án cục bộ', 'Chiến', (10,14,22), basis='IndexedDB/OPFS, gói checksum, phục hồi; migration snapshot thuộc3.2/4.2.6.'),
    package('4.2.6', 'Kiểm quyền xuất và danh mục mẫu', 'Chiến', (16,21,34), basis='Cộng gói cũ3.7 (9/12/18) và3.8 (7/9/16); gồm xử lý complete và tương thích mẫu, không cộng lỗi đã biết lần nữa.', status='Một phần; ISS-G-001 và ISS-G-002 còn mở'),
    package('4.2.7', 'Tạm dừng xuất và cảnh báo trình duyệt', 'Chiến', (6,10,18), 'PP', 'M4', 'Chưa có thiết kế pause/resume; giữ trong phạm vi.', 'Chưa triển khai'),
    package('5.1', 'Bản tích hợp A–B–C và bằng chứng', 'Chiến', (11,14,24), milestone='DOC-03', basis='TC-I, HAR, kiểm trên trình duyệt; thử máy chủ thật phụ thuộc Docker.', status='Blocked môi trường tích hợp'),
    package('5.2', 'Báo cáo hiệu năng và tính xác định', 'Chiến', (16,24,44), 'PP', 'M4', '1080p, bộ nhớ×10, checksum3máy; cần máy tham chiếu.', 'Chưa đủ bằng chứng'),
    package('5.3', 'Báo cáo độ tin cậy, tiếng Việt và dễ dùng', 'Chiến', (12,18,32), 'PP', 'M6', '134tổ hợp,100lần xuất,10người thử; chưa có lịch tuyển.', 'Chưa đủ bằng chứng'),
], 'activities': [], 'requirements': [], 'risks': []}

common = {'packages': [
    package('1.1', 'Bộ hồ sơ khởi tạo', 'Chiến', (18,23,28), milestone='M0', basis='Forecast23h của hồ sơ đã có; không suy ra giờ đã làm.', status='Có bản Draft; chưa xác minh chữ ký'),
    package('1.2', 'Kế hoạch quản lý dự án', 'Chiến', (20,28,36), milestone='DOC-02', basis='Ghép PMP và kế hoạch thành phần; gồm QA tài liệu, RACI, rủi ro.'),
    package('1.3', 'Báo cáo theo dõi và kiểm soát', 'Việt Quang', (12,16,20), milestone='DOC-03', basis='PP cũ được mở thành WP: work log, issue/change, báo cáo, EVM có điều kiện.'),
    package('2.1', 'Đặc tả yêu cầu phần mềm', 'Chiến', (8,12,16), milestone='DOC-01', basis='Hợp nhất yêu cầu ba module, tiêu chí và ngoại lệ.'),
    package('2.2', 'Ma trận truy vết yêu cầu', 'Chiến', (6,8,10), milestone='DOC-02', basis='Ghép mã duy nhất; nối Charter, thiết kế, code, TC, trạng thái.'),
    package('3.2', 'Đặc tả giao tiếp và schema dự án', 'Chiến', (17,22,31), milestone='DOC-01', basis='Schema A cũ8/10/16 + giao tiếp chung9/12/15; tE23⅓h. Trong đó11⅓h thuộc A,12h dùng chung.'),
    package('4.1', 'Nền tảng mã nguồn và CI', 'Việt Quang', (18,24,30), milestone='M2', basis='Repo, DB, CSRF, OpenAPI, CI, PWA; chuyển đầu mối B để chia tải, không đổi tổng24h.'),
    package('6.1', 'Bản phát hành production', 'Quang Anh', (12,20,28), 'PP', 'M6', 'HTTPS, migration, backup/restore, rollback và triển khai; không thay bằng demo.', 'Chưa nghiệm thu'),
    package('6.2', 'Gói demo và hướng dẫn sử dụng', 'Quang Anh', (6,10,14), milestone='DOC-04', basis='Kịch bản, seed, hướng dẫn cài/chạy và xử lý sự cố.', status='Đã soạn hướng dẫn; chờ chạy lại'),
    package('6.3', 'Hồ sơ kết thúc và bài trình bày', 'Quang Anh', (8,12,16), milestone='DOC-05', basis='Final snapshot, bài học, mục lục bàn giao, nội dung slide.', status='Working Draft'),
    package('6.4', 'Biên bản nghiệm thu sản phẩm', 'Chiến', (6,8,10), 'PP', 'M7', 'Control Quality → Validate Scope → Close; chưa ký thay sponsor.', 'Chưa đủ điều kiện'),
], 'activities': [], 'requirements': [], 'risks': [],
 'calendar': {'startDate':'2026-09-24','hoursPerWeek':10,'hoursPerDay':2,'workDays':['Mon','Tue','Wed','Thu','Fri'], 'basis':'Giả định năng lực; forecast toàn phạm vi, không phải ETC'},
 'milestones': [dict(id=f'DOC-0{i+1}',date=d,name=n) for i,(d,n) in enumerate([
 ('2026-09-26','Đầu vào module'),('2026-09-29','Planning ghép'),('2026-10-02','Bằng chứng/kiểm soát'),('2026-10-05','Bàn giao dự thảo'),('2026-10-07','Review hồ sơ')])],
 'cash': [dict(id='CASH-01',wbs='4.3.3',name='Phí cổng thanh toán',amount=1500000),dict(id='CASH-02',wbs='4.4.1',name='Tài sản đồ họa',amount=700000),dict(id='CASH-03',wbs='6.1',name='VPS',amount=600000),dict(id='CASH-04',wbs='6.1',name='Tên miền',amount=300000)],
 'budget':{'charterHours':450,'capHours':495,'cashCap':3500000,'cashReserve':400000,'hourRate':80000,'managementReserveHours':None},
 'changes':[dict(id='CR-G-001',status='Phương án nội bộ đã chọn; baseline sponsor chưa phê duyệt',description='Giữ toàn phạm vi, dùng forecast mới để điều chỉnh nguồn lực/lịch; không ép về450/495h; không tăng tiền mặt3.5triệu.',owner='Chiến')],
 'issues': [
 dict(id='ISS-G-001',name='Complete lỗi nhưng A vẫn giao file',owner='Chiến + Việt Quang',status='Open',evidence='EV-005',action='Chỉ giao kết quả sau complete được xác nhận; retry/đối soát an toàn; thử offline và TTL.'),
 dict(id='ISS-G-002',name='Thiếu snapshot/version mẫu trong dự án',owner='Chiến + Quang Anh',status='Open',evidence='EV-005',action='Chốt schema/migration; đóng gói presentation có phiên bản; testRetired/offline.'),
 dict(id='ISS-G-003',name='Fake checkout thiếu khóa chống lặp phía client',owner='Việt Quang',status='Open',evidence='EV-005',action='Thêm idempotency request; testclicklặp độc lập replayevent.'),
 dict(id='ISS-G-004',name='Docker daemon không sẵn sàng',owner='Việt Quang',status='Blocked',evidence='EV-002',action='Khôi phục môi trườngDocker rồi chạy lại42integrationfail; không coi là42lỗinghiệpvụ.'),
 dict(id='ISS-G-005',name='Chưa đủ actual/baseline cho EVM',owner='Việt Quang',status='Open',evidence='Rà hồ sơ24/09',action='Thu worklog có ngày và nguồn, baseline timephased được duyệt; không giả định AC=0.'),
 ], 'actuals': [], 'taskstatuses': []}

# A 7-column RTM is the requirement source; no invented requirement IDs.
src = ROOT/'design-note/md-docs/02_Planning/_module-input/A_San_xuat_video/A_01_Yeu_cau_va_kiem_thu_v1.0.md'
body=src.read_text(encoding='utf-8').split('## 4. Ma trận truy vết yêu cầu',1)[1].split('## 5.',1)[0]
wbs=['3.2','4.2.1','4.2.1','4.2.2','4.2.6','4.2.3','4.2.4','4.2.7','4.2.7','4.2.6','4.2.6','4.2.6','4.2.5','4.2.5']
for line in body.splitlines():
    if re.match(r'\| (REQ|NF)-A-\d{2} \|',line):
        cells=[x.strip() for x in line.strip().strip('|').split('|')]
        id,description,objective,design,code,tcs,status=cells
        if id=='REQ-A-05':status='Một phần; thiếu snapshot/version (ISS-G-002)'
        if id=='REQ-A-10':status='Một phần; complete lỗi vẫn giao file (ISS-G-001)'
        a['requirements'].append(dict(id=id,description=description,objective=objective,design=design,code=code,testIds=re.findall(r'TC-[AI]-\d+',tcs),status=status,wbs=wbs[int(id[-2:])-1] if id.startswith('REQ') else ('5.1' if id=='NF-A-04' else '5.2' if id in ['NF-A-02','NF-A-03','NF-A-06'] else '5.3')))

risks=[
('01','Encoder1080p không hỗ trợ','Không xuất được1080p','Không chứng minhOB-01',3,4,12,'Chiến','Probefalse trên máyđo','Thử máy có giao diện; mượn máy tham chiếu; công bố giới hạn.'),
('02','Không đo được bộ nhớWorker','Thiếu số liệu đỉnh','Không chứng minhOB-02',4,3,8,'Chiến','Phương pháp đo không lặp lại','Thử đo bộ nhớ tiến trình; phần đo chuẩn đã nằm5.2.'),
('03','Mất mạng saureserve','Complete thất bại','Láchquota nếu vẫn giao file',3,3,8,'Việt Quang','TC-A-20khôngđạt','DEC-011; ISS-G-001 là lỗi đã biết, không cộng reserve lầnhai.'),
('04','Lệch ánh xạ lỗiAPI','Thông báo sai','Người dùng không biết lý do',2,2,4,'Chiến','TC-A-18fail','Contract testHTTP và thông điệp; unit hiệnpass.'),
('05','Danh mục thay đổi khioffline','Dùng mẫu cũ','Sai trạng thái/phiên bản',3,3,8,'Chiến','TC-I-04fail','DEC-012; snapshot,nhãncache; ISS-G-002đã tính ởbase.'),
('06','Năng lực10h/người/tuần','Quá tải tổng hợp','TrượtDOCgate',4,4,10,'Chiến','Nhu cầu > năng lực kỳ','Chia tổng hợpB/C; lịchsanbằng; giờ đã dự kiến không cộngthànhreserve.'),
('07','GPU/font khác nhau','Checksum khác','Không đạtOB-03',3,3,8,'Chiến','Khác máy2','Giữfontđónggói; đo3máy; CR nếu tiêu chí không khảthi.'),
('08','Tier2 thiếuOPFS','Lỗi lưu hoặc tăngRAM','Giảm khả năng xuất',3,2,4,'Chiến','Probe/storagefail','Giới hạnTier2; filepickerfallback; đo trước côngbố.'),
('09','Không mượn được máy','Không đủ ma trận','Không nghiệmthuOB',3,3,8,'Chiến','Thiếu máy trước5.2','Chốt người cungcấp/máy; không thay bằng kếtluận từheadless.'),
('10','Xuất kéo dài quáTTL','Complete409','Không đóng lượt thànhcông',2,3,8,'Việt Quang','TC-A-36fail','DEC-011; thiết kế đốisoát/xuất dài trong4.3.2.'),
('11','Đề nghị audio/AI/khungdọc','Phình phạmvi','Trượt lịch và chi phí',3,3,8,'Chiến','REQmới ngoàiCharter','Kiểm soát thay đổi; không đưa vào demo mặcđịnh.'),
]
for id,cause,event,effect,p,i,h,owner,trigger,response in risks:
    a['risks'].append(dict(id='R-A-'+id,cause=cause,event=event,effect=effect,p=p,i=i,probability=[.1,.3,.5,.7,.9][p-1],impactHours=h,owner=owner,trigger=trigger,response=response,status='Theo dõi',reserveEligible=False,basis='Ước lượng phán đoán; exposure chưa phải reserve được duyệt. Rủi ro đã biết/đo chuẩn nằmbase.'))
common['requirements']=[dict(id='NF-G-01',description='0byte nội dung người dùng rời trình duyệt',objective='OB-09,NF-03',design='P03 IF-AB-01/IF-CA-01',code='A export + B API + C logs',testIds=['TC-I-05'],status='Not Run: thiếu HAR thật',wbs='5.1'),dict(id='NF-G-02',description='QuyềnAdmin và log không lộ dữ liệu nhạy cảm',objective='RQ-16,NF-03',design='P03/P06',code='Backend policies/logging',testIds=['TC-B-01','TC-C-05'],status='Có code; đối chiếuTCđúngmodule',wbs='4.1')]
# One summarized FS activity per ready WP; PP deliberately has no activities.
deps={'1.2':['ACT-2.1-01','ACT-3.2-01'],'1.3':['ACT-1.2-01'],'2.1':['ACT-1.1-01'],'2.2':['ACT-2.1-01','ACT-3.2-01'],'3.1':['ACT-2.1-01'],'3.2':['ACT-2.1-01'],'4.1':['ACT-3.1-01'],'4.2.1':['ACT-3.2-01','ACT-4.1-01'],'4.2.2':['ACT-4.2.3-01'],'4.2.3':['ACT-3.2-01'],'4.2.4':['ACT-3.1-01','ACT-4.2.3-01'],'4.2.5':['ACT-4.2.1-01'],'4.2.6':['ACT-4.2.4-01','ACT-4.3.2-01','ACT-4.4.1-01'],'5.1':['ACT-4.2.6-01','ACT-4.2.5-01','ACT-4.3.3-01','ACT-4.4.4-01'],'6.2':['ACT-5.1-01'],'6.3':['ACT-6.2-01','ACT-1.3-01']}
for data in [a,common]:
    for p in data['packages']:
        if p['type']=='WP':
            data['activities'].append(dict(id='ACT-'+p['id']+'-01',wbs=p['id'],name='Hoàn thiện và tự kiểm: '+p['name'],hours=(p['O']+p['M']+p['P'])/3,predecessors=deps.get(p['id'],[]),owner=p['owner'],status=p['status']))
for name,data in [('a',a),('common',common)]:
    text=json.dumps(data,ensure_ascii=False,indent=2)
    (TEMP/f'{name}-data.json').write_text(text,encoding='utf-8')
    (OUT/f'{name}-data.json').write_text(text,encoding='utf-8')
    print(name, len(data['packages']),sum((p['O']+p['M']+p['P'])/3 for p in data['packages']), 'hours')
