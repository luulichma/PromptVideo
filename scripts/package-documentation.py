from pathlib import Path
import os,json,re,shutil
from PIL import Image,ImageDraw,ImageFont

R=Path(__file__).resolve().parents[1]; D=R/'design-note/md-docs'; O=R/'design-note/outputs/bo-ho-so-theo-module'
def save(p,t):p.parent.mkdir(parents=True,exist_ok=True);p.write_text(t.strip()+'\n',encoding='utf-8')
def rel(p,base):return os.path.relpath(p,base).replace('\\','/')
def link(p,base,label):return f'[{label}](<{rel(p,base)}>)'

# Render a fresh diagram directly from the authoritative WBS package data.
packages=[]
for n in ['a','b','c','common']:packages+=json.loads((D/f'_data/{n}-data.json').read_text(encoding='utf-8'))['packages']
packages.sort(key=lambda p:tuple(map(int,p['id'].split('.'))))
im=Image.new('RGB',(2400,1830),'#f4f6fa');draw=ImageDraw.Draw(im)
font=lambda size,bold=False:ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf' if bold else 'C:/Windows/Fonts/segoeui.ttf',size)
draw.text((65,40),'PROMPTVIDEO — WBS HIỆN HÀNH',fill='#18334b',font=font(46,True))
draw.text((65,112),'32 gói • 599 giờ forecast = 427 giờ WP + 172 giờ PP',fill='#18334b',font=font(30))
groups=[('1','Quản lý dự án'),('2','Yêu cầu'),('3','Thiết kế'),('4.1','Nền tảng'),('4.2','Module A — Video'),('4.3','Module B — Thuê bao'),('4.4','Module C — Vận hành'),('5','Tích hợp và kiểm thử'),('6','Triển khai và bàn giao')]
for k,(prefix,title) in enumerate(groups):
    selected=[p for p in packages if p['id']==prefix or p['id'].startswith(prefix+'.')]
    x=65+(k%3)*775;y=190+(k//3)*510
    draw.rounded_rectangle((x,y,x+735,y+475),radius=20,fill='white',outline='#cbd6e2',width=2)
    te=sum((p['O']+p['M']+p['P'])/3 for p in selected)
    draw.text((x+23,y+20),prefix+' '+title,fill='#18334b',font=font(27,True))
    draw.text((x+23,y+61),f'{te:,.3f} giờ',fill='#146356',font=font(25,True))
    yy=y+109
    for p in selected:
        label=p['id']+' '+p['name']; words=label.split();rows=[];line=''
        for word in words:
            new=(line+' '+word).strip()
            if draw.textlength(new,font=font(20))>670:rows.append(line);line=word
            else:line=new
        rows.append(line)
        for row in rows:draw.text((x+23,yy),row,fill='#263a4e',font=font(20));yy+=25
        draw.text((x+23,yy),f"{(p['O']+p['M']+p['P'])/3:.3f} h · {p['type']}",fill='#607386',font=font(18));yy+=27
draw.text((65,1740),'WP: gói đã phân rã  |  PP: gói chờ phân rã. Đây không phải actual, ETC hoặc baseline đã được duyệt.',fill='#4b6076',font=font(24))
im.save(D/'02_Planning/05_WBS_PromptVideo.png')

descs={
'P01':'Kế hoạch quản lý tích hợp: vai trò, phạm vi, lịch, chi phí, chất lượng, rủi ro và kiểm soát thay đổi.',
'P02':'Đặc tả hợp nhất: đầy đủ yêu cầu, quy tắc, tiêu chí, ngoại lệ và ca thử từ ba module.',
'P03':'Hợp đồng A–B, C–A, C–B; request/response/lỗi, hành vi đích so với mã hiện có; TC-I-01–06.',
'P04':'Phạm vi đầy đủ và tập demo; đầu ra, loại trừ, giả định, điều kiện nghiệm thu.',
'P05':'WBS32gói, từ điển, O/M/P, owner, tiêu chí, PP và quy tắc cộng không trùng.',
'P06':'QA/QC, mục tiêu chất lượng, các mức kiểm thử, ngưỡng và điều kiện chuyển nghiệm thu.',
'P07':'Vai trò, nguồn lực, công suất, lịch trao đổi, stakeholder và vòng review.',
'P08':'Nhận diện, đánh giá, ứng phó và theo dõi rủi ro; phân biệt exposure/reserve/base.',
'P09':'RTM65REQ/NF nối Charter, thiết kế, code, TC, trạng thái và nguồn.',
'P10':'Ước lượng,35activities,CPMlogic và lịch san bằng WP; PP/cổng ngoài và giả định được tách rõ.',
'P11':'Giờ/chi phí cơ hội, tiền mặt, mua/thuê, dự phòng và so sánh Charter; công thức giữ độ chính xác.',
'P12':'RACI, nhu cầu/lịch nguồn lực, truyền thông và stakeholder engagement.',
'P13':'25rủi ro: nguyên nhân/sự kiện/hậu quả, P/I, EMV, owner, trigger và ứng phó.',
'E01':'Thiết kế/thực hiện đã có, những phần còn thiếu, các bước tích hợp và nhật ký có nguồn.',
'E02':'Quyết định có căn cứ, agenda họp và phần để ghi kết quả họp thật.',
'E03':'Cài đặt, chạy, sử dụng, xử lý sự cố và điều kiện vận hành/bàn giao.',
'E04':'Kết quả rà quy trình/tài liệu, điều kiện phát hành và bài học áp dụng.',
'E05':'Sổ giờ/chi phí thực tế và bằng chứng; giữ trống actual chưa được cung cấp.',
'M01':'Báo cáo trạng thái kỳ: scope, forecast, chất lượng, vướng mắc và việc tiếp theo.',
'M02':'Báo cáo kiểm thử có kết quả thật và giới hạn kết luận; phần chưa có bằng chứng.',
'M03':'Sổ5issue và CR-G-001, owner, tác động, quyết định và điều kiện đóng.',
'M04':'Theo dõi hiệu suất/EVM có điều kiện; không tính khi thiếu baseline hoặc actual.',
'M05':'Kết quả test/lỗi và yêu cầu kiểm lại; phân biệt Pass,Fail môi trường,Blocked,NotRun.',
'M06':'Hồ sơ chuẩn bị ValidateScope; chưa ký nghiệm thu khi chưa đủQC.',
'C01':'Tổng kết đợt chuẩn hóa hồ sơ, so sánh mục tiêu/kết quả, giới hạn và lợi ích cần theo dõi.',
'C02':'Danh mục bàn giao và tồn đọng có owner, bằng chứng đóng và người tiếp nhận.',
'C03':'Bài học có nguyên nhân, hành động áp dụng và người duy trì.',
'C04':'Dàn ý trình bày, lời dẫn và kịch bản demo có điều kiện.'}
records=[]
phases=[('02_Planning','P'),('03_Executing','E'),('04_Monitoring_and_Controlling','M'),('05_Closing','C')]
for phase,prefix in phases:
    for p in sorted((D/phase).glob('*.md')):
        code=prefix+p.name[:2];records.append((code,p,descs.get(code,'')))
    for p in sorted((O/phase).glob('*.xlsx')):
        code=prefix+p.name[:2];records.append((code,p,descs.get(code,'')))
records.sort(key=lambda row:('PEMC'.index(row[0][0]),row[0]))
owners={'P01':'Chiến','P02':'Chiến','P03':'Chiến','P04':'Chiến','P05':'Chiến','P06':'Quang Anh','P07':'Quang Anh','P08':'Việt Quang','P09':'Chiến','P10':'Việt Quang','P11':'Việt Quang','P12':'Quang Anh','P13':'Việt Quang','E01':'Chiến','E02':'Quang Anh','E03':'Quang Anh','E04':'Quang Anh','E05':'Việt Quang','M01':'Việt Quang','M02':'Quang Anh','M03':'Việt Quang','M04':'Việt Quang','M05':'Quang Anh','M06':'Chiến','C01':'Chiến','C02':'Quang Anh','C03':'Quang Anh','C04':'Quang Anh'}

def tree():
    lines=['design-note/','├── md-docs/','│   ├── 00_Muc_luc_va_chi_dan_ho_so.md','│   ├── 00_Quyet_dinh_va_quy_uoc_ma.md','│   ├── 00_Bao_cao_quan_ly_du_an_PromptVideo_v1.0.md','│   ├── _template/  (T0, T1, T2)','│   ├── _data/  (dữ liệu chuẩn và kết quả kiểm workbook)','│   ├── _history/  (nguồn cũ để truy vết)']
    for phase,_ in phases:
        lines.append('│   ├── '+phase+'/')
        for p in sorted((D/phase).rglob('*.md')):lines.append('│   │   ├── '+rel(p,D/phase))
        if phase=='02_Planning':lines.append('│   │   └── 05_WBS_PromptVideo.puml / .png')
    lines+=['├── evidence/INDEX.md + 2026-09-24/','├── outputs/bo-ho-so-theo-module/']
    for code,p,_ in records:
        if p.suffix=='.xlsx':lines.append('│   ├── '+rel(p,O))
    lines+=['└── official-docs/  (Pre-project/Initiating hiện hữu; bộ mới chưa phát hành)']
    return '\n'.join(lines)

intro='''# Mục lục và chỉ dẫn bộ hồ sơ PromptVideo

**Cập nhật24/09/2026.** Bộ nguồn đã được chuẩn hóa theo quyết định của người dùng. Đây là hồ sơ làm việc; review của thành viên, actual và nghiệm thu sản phẩm phải có bằng chứng riêng.

Đọc [quyết định và hệ mã](00_Quyet_dinh_va_quy_uoc_ma.md) trước khi sửa. Dùng [feedback25đầu việc](../feedback-va-giao-viec-hop-nhom-2026-09-24.md) cho cuộc họp. Có thể đọc [bản báo cáo ghép](00_Bao_cao_quan_ly_du_an_PromptVideo_v1.0.md) hoặc mở từng file dưới đây.

## 1. Những điểm đã chốt

Chiến phụ tráchA và tích hợp hồ sơ; ViệtQuang phụ tráchB/lịch/chi phí/rủi ro; QuangAnh phụ tráchC/chất lượng/nguồn lực/truyền thông/đóng gói. WBS6giai đoạn, xây dựngA4.2/B4.3/C4.4.32gói=599h (427hWP+172hPP); không lấy đó làmactual hoặcETC. ChọnCR-G-001 giữ phạm vi và điều chỉnh lịch/nguồn lực; tiền mặt vẫn3.5triệu.

Frontend79/79unitđạt; backend18đạt,42failmôi trườngDocker trên60ca. Không coi đó là nghiệm thu toànCharter. [EVINDEX](../evidence/INDEX.md) ghi nguồn, môi trường và phần chưa có bằng chứng.

## 2. Cây thư mục hiện hành

```text
'''+tree()+'''\n```

## 3. Tài liệu chung và nội dung

| Mã / file | Chứa gì | Người tổng hợp | Trạng thái |
| --- | --- | --- | --- |
'''
for code,p,desc in records:intro+=f'| {link(p,D,code+" — "+p.name)} | {desc} | {owners[code]} | Đã soạn/kiểm cấu trúc; chưa nghiệm thu |\n'
intro+='''
## 4. Năm đầu vào của mỗi module

| File | Nội dung | Người chịu trách nhiệm |
| --- | --- | --- |
|X_01|Yêu cầu, quy tắc, tiêu chí, TC và truy vết|A:Chiến; B:ViệtQuang; C:QuangAnh |
|X_02|WBS/dictionary, activity, O/M/P, chi phí, rủi ro|Chủ module; VQ tổng hợp số liệu |
|X_03|Thiết kế/thực hiện, hướng dẫn và nhật ký có nguồn|Chủ module |
|X_04|Trạng thái, test/lỗi, issue/change và việc còn lại|Chủ module; người review cung cấp kết quả thật |
|X_05|Kết quả bàn giao, tồn đọng/owner, bài học/demo|Chủ module; QA đóng gói |

Mỗi người sửa module của mình trước; người tổng hợp ghép và giải quyết mâu thuẫn, không viết một bộ số liệu độc lập. Vòng kiểm traA→ViệtQuang,B→QuangAnh,C→Chiến; xác nhận nội bộ lần lượtQuangAnh,Chiến,ViệtQuang.

## 5. Nguồn cấp cao, lịch và trạng thái phát hành

BusinessCase/BenefitManagementPlanv2.2; Charter/AssumptionLogv2.1; StakeholderRegisterv1.0 ởofficial-docs là nguồn đối chiếu. Pre-project vàInitiating đã có; chưa suy ra đã ký chỉ từ tên thư mục. Phần nợ kiểm tra nguồn cấp cao được giữ riêng trongno-tai-lieu.md.

Lịch hồ sơ:DOC-01ngày26/09 đầu vào;DOC-02ngày29/09 Planning;DOC-03ngày02/10 bằng chứng;DOC-04ngày05/10 bàn giao dự thảo;DOC-05ngày07/10 review.10h/người/tuần là giả định. LịchCharterM0–M7 được giữ để đối chiếu; không dùng lịch hồ sơ để hứa hoàn thiện sản phẩm trong14ngày.

Markdown là nguồn sửa;9workbook trongoutputs là sổ làm việc. Bản ghépG1 làMarkdown dùng đọc/họp. XuấtDOCX/PPTX và bảnofficial là bước đóng gói sau review; đợt này không coi bản chưa xuất là đã phát hành. Sơ đồWBS đã dựng lại theo32gói;_history chứa bản cũ, không dùng làm nguồn hiện hành.

## 6. Việc thực tế còn phải hoàn thành

ISS-G-001complete/quota;ISS-G-002snapshotmẫu;ISS-G-003checkoutidempotency;ISS-G-004Docker;ISS-G-005actual/baseline. CácPP và phép thửCharter vẫn mở. C02 có owner và điều kiện đóng. Chưa có xác nhận review/giờ thực tế/chữ ký nghiệm thu thì giữ trạng thái chưa có; không cần lựa chọn lại hệ mã và vai trò đã chốt.
'''
save(D/'00_Muc_luc_va_chi_dan_ho_so.md',intro)

# Replace old coordination plans with the current plan, preserving the earlier text.
for name in ['ke-hoach-tai-lieu-va-phan-cong-theo-module.md','nhiem_vu_xay_dung_planning.md','ke-hoach-hoan-thien-2-tuan.md']:
    p=R/'design-note'/name;dest=D/'_history/2026-09-24-truoc-chot'/name
    if p.exists() and not dest.exists():shutil.copyfile(p,dest)
plan='''# Kế hoạch tài liệu và phân công theo module — đã chốt

**Ngày cập nhật24/09/2026.** Thực hiện theo quyền quyết định người dùng đã giao. Mỗi người xây một module xuyên suốt, sau đó ghép thành bộ hồ sơ. Pre-project vàInitiating đã có; ưu tiên Planning và hồ sơ thực hiện/kiểm soát/bàn giao.

## 1. Các file cần làm và trạng thái hiện tại

Các Markdown và9workbook trong cây dưới đây đã được tạo/cập nhật. Bản xuấtDOCX/PPTX chính thức là bước sau khi review, không được ghi là đã phát hành.

```text
'''+tree()+'''\n```

## 2. Từng tài liệu chứa gì

| Mã / tài liệu | Nội dung | Người tổng hợp |
| --- | --- | --- |
'''
for code,p,desc in records:plan+=f'| {link(p,R/"design-note",code)} | {desc} | {owners[code]} |\n'
plan+='''
Mỗi module cóX_01yêu cầu/test,X_02WBS/ước lượng/rủi ro,X_03thiết kế/thực hiện,X_04theo dõi/test/change,X_05bàn giao/bài học. Cây trên chỉ rõ vị trí từngfile. G0 quản lý mục lục/trạng thái;G1 là bản đọc liền từ các tài liệu chung;T0/T1/T2 là mẫu.

## 3. Phân công đã quyết định

| Người | Chủ module | Phần chung | Kiểm tra chéo |
| --- | --- | --- | --- |
|Nguyễn Thế Chiến|A — sản xuấtvideo|PMP,yêu cầu,giao tiếp,phạm vi,WBS,RTM,tổng kết|KiểmC |
|Nguyễn Việt Quang|B — tài khoản/thuê bao|Lịch/CPM,chi phí,rủi ro,actual/EVM|KiểmA |
|Phạm Quang Anh|C — quản trị/vận hành|Chất lượng,nguồn lực,truyền thông,đóng gói|KiểmB |

Không còn phần đề xuất chờ chọn. WBS/REQ/TC/risk/interface dùng [registry](md-docs/00_Quyet_dinh_va_quy_uoc_ma.md). Mỗi người chịu trách nhiệm sửa nội dung mình; người tổng hợp ghép nguồn, không làm thay toàn bộmodule. [Feedback25đầu việc](feedback-va-giao-viec-hop-nhom-2026-09-24.md) ghi rõ lý do, đã sửa và việc còn phải làm thật.

## 4. Lịch, công sức và điều kiện hoàn tất

DOC-01:26/09;DOC-02:29/09;DOC-03:02/10;DOC-04:05/10;DOC-05:07/10. Năng lực giả định10h/người/tuần. Forecast599h giữ toàn phạm vi, gồm427hWP và172hPP; chọnCR-G-001 điều chỉnh lịch/nguồn lực. Tiền mặt3.5triệu giữ nguyên;599h không phải actual/ETC.

Mã/link/số liệu đã được rà; review thành viên,actual,TC-I/HAR và các phép thửCharter còn thiếu vẫn giữ rõ trong [G0](md-docs/00_Muc_luc_va_chi_dan_ho_so.md) vàC02. Hồ sơ hiện làWorkingDraft, không ký nghiệm thu thay người cóthẩmquyền.

## 5. Phần nợ nguồn cấp cao

Pre-project/Initiating đã được ghi riêng và thực hiện sau theo yêu cầu trước đó. Giữ [sổ nợ tài liệu](no-tai-lieu.md); lần này đã thống nhất phiên bản nguồn, mã và forecast để không tiếp tục lan sai lệch. Bản kế hoạch trước khi chốt được lưu tạimd-docs/_history/2026-09-24-truoc-chot.
'''
save(R/'design-note/ke-hoach-tai-lieu-va-phan-cong-theo-module.md',plan)
save(R/'design-note/nhiem_vu_xay_dung_planning.md','''# Nhiệm vụ xây dựng Planning — nguồn hiện hành

Quyết định và phân công đã chốt ngày24/09/2026. Dùng [kế hoạch đầy đủ](ke-hoach-tai-lieu-va-phan-cong-theo-module.md), [mục lục/file hiện hành](md-docs/00_Muc_luc_va_chi_dan_ho_so.md) và [feedback25đầu việc](feedback-va-giao-viec-hop-nhom-2026-09-24.md).

A/B/C mỗi người có5đầu vào;2filePlanning làX_01yêu cầu/test vàX_02WBS/ước lượng/rủi ro. P01–P13 đã ghép. WBS6giai đoạn, xây dựngA4.2/B4.3/C4.4;thiết kế/kiểm thử ởnhánh3/5. Mãchi tiếtREQ-X khácRQcủaCharter;TC-I doP03sở hữu;không cấp lại mã.

Chiến tổng hợpP01–05/P09;QuangAnhP06/P07/P12;ViệtQuangP08/P10/P11/P13. Chủmodule sửa tại nguồn, sau đó người tổng hợp cập nhật bản chung. Các workbook chỉ cómộtbản làmviệc ởoutputs/bo-ho-so-theo-module;tracker gốc ở../phan-cong-theo-giai-doan.xlsx.

Thứ tự:đầu vào/IF→phạm vi/WBS→lịch/chi phí/rủi ro/chất lượng→RTM/PMP→review. Giữ số chưa làm tròn;599hforecastkhông phảiactual. PP chưa phânrã khôngghi hoạtđộng giả; chưa đo/chưa ký phảighi đúngtrạngthái. Bản hướng dẫn cũ ở_history, khôngcònchờQĐ vềhệmã.
''')
save(R/'design-note/ke-hoach-hoan-thien-2-tuan.md','''# Kế hoạch hoàn thiện hồ sơ hai tuần —24/09 đến07/10/2026

Đã thay lịch16–29/09 bằng các cổng dưới đây. Đây là lịch hồ sơ, không cam kết toàn bộ sản phẩm599h được làm mới trong14ngày. Năng lực10h/người/tuần là giả định cần đối chiếu giờ rảnh thực tế; mốcCharterM0–M7giữ nguyên để so sánh.

| Cổng | Ngày | Đầu ra | Điều phối |
| --- | --- | --- | --- |
|DOC-01|26/09|A/B/C_01,_02;IF/mã thống nhất|Chiến |
|DOC-02|29/09|P01–13;forecast/PP/CR rõ|Chiến,ViệtQuang,QuangAnh theo phần được giao |
|DOC-03|02/10|Bằng chứng/test/issues;actual nếu có nguồn|ViệtQuang vàQuangAnh |
|DOC-04|05/10|Bàn giao dự thảo,hướng dẫn,tồn đọng|QuangAnh |
|DOC-05|07/10|Review hồ sơ,sửa lỗi ghép,chốt trạng thái phát hành|Cả nhóm theo vòng review |

Nguồn công việc: [feedback25đầu việc](feedback-va-giao-viec-hop-nhom-2026-09-24.md). Phần nội dung tài liệu đã được soạn; cần tiếp tục chạy các phép thử/cung cấpactual/review thật. Demo5cảnh60giây, khôngaudio/AI/khungdọc. Fakepaymentchỉnon-Productioncó nhãn.

Giữphạm vi, chọnCR-G-001điều chỉnh lịch/nguồn lực theo599h;khôngép450/495. Mỗi người báoETC/giờrảnhvàvướngmắc trongcuộchọp. ChủmoduleA/B/C làChiến/ViệtQuang/QuangAnh; vòngkiểmA→VQ,B→QA,C→Chiến. Xem [G0](md-docs/00_Muc_luc_va_chi_dan_ho_so.md) đểmở đúngfile.
''')

debt=R/'design-note/no-tai-lieu.md'
if debt.exists():
    old=debt.read_text(encoding='utf-8')
    if '## Cập nhật sau chuẩn hóa24/09' not in old:save(debt,old+'''

## Cập nhật sau chuẩn hóa24/09

Các mục nguồn cấp cao phía trên được giữ để thực hiện sau. Phần hồ sơ làm việc đã xử lý: dùng đúngBC/BMPv2.2 vàCharter/Assumptionv2.1; registryREQ/WBSduy nhất; forecast mới599h cóCR-G-001; lịchDOC24/09–07/10 và10h/người/tuần làgiảđịnh. Không sửa sốCharter hoặc ghi đãduyệtbaseline mới.

Còn cần chứng cứ để đóng:phêduyệt/phiênbản tài liệu cấp cao,giờrảnh/actual/ETC,máyđo/ngườithử vànghiệmthu. Nguồn theo dõi hiện hành làG0/P10/P11/M03,không dùng lại số498.3h cũ nhưforecastmới.
''')

print('G0, current plans, diagram and debt status written; common documents',len(records))
