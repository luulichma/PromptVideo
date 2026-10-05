"""Read-only structural QA of the current documentation package."""
from pathlib import Path
import json,re,zipfile,xml.etree.ElementTree as ET
R=Path(__file__).resolve().parents[1];D=R/'design-note/md-docs'
data=[json.loads((D/f'_data/{n}-data.json').read_text(encoding='utf-8')) for n in ['a','b','c','common']]
packages=[p for d in data for p in d['packages']]
reqs=[p for d in data for p in d['requirements']]
risks=[p for d in data for p in d['risks']]
acts=json.loads((D/'_data/normalized-activities.json').read_text(encoding='utf-8'))
errors=[]
for label,items,expected in [('packages',packages,32),('requirements',reqs,65),('risks',risks,25),('activities',acts,35)]:
    ids=[p['id'] for p in items]
    if len(ids)!=expected or len(set(ids))!=expected:errors.append((label,'count/duplicate',len(ids),len(set(ids))))
total=sum((p['O']+p['M']+p['P'])/3 for p in packages)
if abs(total-599)>1e-7:errors.append(('total',total))
lookup={a['id']:a for a in acts}
for a in acts:
    for dep in a['predecessors']:
        if dep not in lookup:errors.append(('missing dependency',a['id'],dep))
visited=set();active=set()
def visit(id):
    if id in active:errors.append(('cycle',id));return
    if id in visited:return
    active.add(id)
    for dep in lookup[id]['predecessors']:
        if dep in lookup:visit(dep)
    active.remove(id);visited.add(id)
for id in lookup:visit(id)
for p in packages:
    hours=sum(a['hours'] for a in acts if a['wbs']==p['id'])
    te=(p['O']+p['M']+p['P'])/3
    if (p['type']=='WP' and abs(hours-te)>1e-7) or (p['type']=='PP' and hours):errors.append(('activity hours',p['id'],hours,te))
files=[p for p in D.rglob('*.md') if '_history' not in p.parts and '_template' not in p.parts]
files += [R/'design-note'/n for n in ['feedback-va-giao-viec-hop-nhom-2026-09-24.md','ke-hoach-tai-lieu-va-phan-cong-theo-module.md','nhiem_vu_xay_dung_planning.md','ke-hoach-hoan-thien-2-tuan.md','evidence/INDEX.md']]
linkcount=0
for p in files:
    text=p.read_text(encoding='utf-8')
    text=re.sub(r'```.*?```','',text,flags=re.S)
    for m in re.finditer(r'\[[^\]]*\]\(([^)]+)\)',text):
        target=m.group(1).strip('<>')
        if re.match(r'^(#|https?://|mailto:)',target):continue
        target=target.split('#')[0]
        linkcount+=1
        if not (p.parent/target).exists():errors.append(('link',str(p.relative_to(R)),target))
feedback=(R/'design-note/feedback-va-giao-viec-hop-nhom-2026-09-24.md').read_text(encoding='utf-8')
ids=re.findall(r'^### (CV-[ABC]-\d+)',feedback,re.M)
if len(ids)!=25 or len(set(ids))!=25:errors.append(('feedback tasks',len(ids)))
for label in ['Tại sao','Đã sửa','Yêu cầu','Đầu ra']:
    if feedback.count('**'+label)<25:errors.append(('feedback fields',label))
books=list((R/'design-note/outputs/bo-ho-so-theo-module').rglob('*.xlsx'))
if len(books)!=9:errors.append(('workbook count',len(books)))
formula_errors=[];formulas=0;sheets=0
ns={'s':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
for p in books:
    with zipfile.ZipFile(p) as z:
        for name in z.namelist():
            if re.match(r'xl/worksheets/sheet\d+\.xml$',name):
                sheets+=1;tree=ET.fromstring(z.read(name))
                formulas+=len(tree.findall('.//s:f',ns))
                for cell in tree.findall('.//s:c[@t="e"]',ns):formula_errors.append((p.name,name,cell.attrib.get('r'),cell.findtext('s:v',namespaces=ns)))
errors.extend(formula_errors)
report={'markdownFilesChecked':len(files),'localLinksChecked':linkcount,'packages':len(packages),'requirements':len(reqs),'risks':len(risks),'activities':len(acts),'forecastHours':total,'tasks':len(ids),'workbooks':len(books),'sheets':sheets,'formulas':formulas,'errors':errors}
print(json.dumps(report,ensure_ascii=False,indent=2))
raise SystemExit(bool(errors))
