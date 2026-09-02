/* Stakeholder Register (.md) -> .xlsx theo đúng bố cục mẫu:
   khối đầu Project / Project Manager / Date, rồi bảng đăng ký.
   Chỉ xuất phần bảng chuẩn, không xuất phần diễn giải của tài liệu. */
const fs = require('fs'), path = require('path'), zlib = require('zlib');

/* ---------------- ZIP (deflate) ---------------- */
const CRC = (() => { const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c; }
  return t; })();
function crc32(buf) { let c = -1; for (let i = 0; i < buf.length; i++) c = CRC[(c ^ buf[i]) & 0xFF] ^ (c >>> 8); return (c ^ -1) >>> 0; }
function zip(files) {
  const locals = [], central = []; let off = 0;
  for (const f of files) {
    const name = Buffer.from(f.name, 'utf8');
    const raw = Buffer.isBuffer(f.data) ? f.data : Buffer.from(f.data, 'utf8');
    const def = zlib.deflateRawSync(raw, { level: 9 });
    const crc = crc32(raw);
    const lh = Buffer.alloc(30);
    lh.writeUInt32LE(0x04034b50, 0); lh.writeUInt16LE(20, 4); lh.writeUInt16LE(0, 6);
    lh.writeUInt16LE(8, 8); lh.writeUInt16LE(0, 10); lh.writeUInt16LE(0x21, 12);
    lh.writeUInt32LE(crc, 14); lh.writeUInt32LE(def.length, 18); lh.writeUInt32LE(raw.length, 22);
    lh.writeUInt16LE(name.length, 26); lh.writeUInt16LE(0, 28);
    locals.push(lh, name, def);
    const ch = Buffer.alloc(46);
    ch.writeUInt32LE(0x02014b50, 0); ch.writeUInt16LE(20, 4); ch.writeUInt16LE(20, 6);
    ch.writeUInt16LE(0, 8); ch.writeUInt16LE(8, 10); ch.writeUInt16LE(0, 12); ch.writeUInt16LE(0x21, 14);
    ch.writeUInt32LE(crc, 16); ch.writeUInt32LE(def.length, 20); ch.writeUInt32LE(raw.length, 24);
    ch.writeUInt16LE(name.length, 28); ch.writeUInt32LE(0, 38); ch.writeUInt32LE(off, 42);
    central.push(ch, name);
    off += 30 + name.length + def.length;
  }
  const cd = Buffer.concat(central), lo = Buffer.concat(locals);
  const eo = Buffer.alloc(22);
  eo.writeUInt32LE(0x06054b50, 0); eo.writeUInt16LE(files.length, 8); eo.writeUInt16LE(files.length, 10);
  eo.writeUInt32LE(cd.length, 12); eo.writeUInt32LE(lo.length, 16);
  return Buffer.concat([lo, cd, eo]);
}

/* ---------------- đọc bảng markdown ---------------- */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* bỏ đánh dấu inline: **đậm**, *nghiêng*, `mã`, [chữ](link), <br> */
function plain(md) {
  return String(md)
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/(?<![*\w])\*([^*\n]+)\*(?!\*)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

/* tách mọi bảng markdown trong một đoạn text */
function tables(text) {
  const out = [];
  let cur = null;
  for (const line of text.split(/\r?\n/)) {
    const t = line.trim();
    if (t.startsWith('|') && t.endsWith('|')) {
      const cells = t.slice(1, -1).split('|').map(c => plain(c));
      if (cells.every(c => /^:?-{2,}:?$/.test(c.replace(/\s/g, '')))) continue; // dòng gạch
      (cur = cur || []).push(cells);
    } else if (cur) { out.push(cur); cur = null; }
  }
  if (cur) out.push(cur);
  return out;
}

/* ---------------- xlsx ---------------- */
const colName = n => { let s = ''; n++; while (n > 0) { const r = (n - 1) % 26; s = String.fromCharCode(65 + r) + s; n = (n - r - 1) / 26; } return s; };

function cell(ref, style, value) {
  if (value === '' || value == null) return `<c r="${ref}" s="${style}"/>`;
  return `<c r="${ref}" s="${style}" t="inlineStr"><is><t xml:space="preserve">${esc(value)}</t></is></c>`;
}

const CT = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
<Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>`;

const RELS = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`;

const WB = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheets><sheet name="Stakeholder Register" sheetId="1" r:id="rId1"/></sheets></workbook>`;

const WBRELS = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`;

/* 0 mặc định · 1 tiêu đề khối đầu (trắng/đen) · 2 ô giá trị khối đầu
   3 tiêu đề cột (trắng/xanh mòng két) · 4 ô dữ liệu · 5 ô dữ liệu nền xám */
const STYLES = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<fonts count="3">
<font><sz val="11"/><name val="Calibri"/></font>
<font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font>
<font><sz val="10"/><name val="Calibri"/></font>
</fonts>
<fills count="4">
<fill><patternFill patternType="none"/></fill>
<fill><patternFill patternType="gray125"/></fill>
<fill><patternFill patternType="solid"><fgColor rgb="FF000000"/><bgColor indexed="64"/></patternFill></fill>
<fill><patternFill patternType="solid"><fgColor rgb="FF00B0B9"/><bgColor indexed="64"/></patternFill></fill>
</fills>
<borders count="2">
<border><left/><right/><top/><bottom/><diagonal/></border>
<border><left style="thin"><color rgb="FFBFBFBF"/></left><right style="thin"><color rgb="FFBFBFBF"/></right><top style="thin"><color rgb="FFBFBFBF"/></top><bottom style="thin"><color rgb="FFBFBFBF"/></bottom><diagonal/></border>
</borders>
<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
<cellXfs count="6">
<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
<xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
<xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
<xf numFmtId="0" fontId="1" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
<xf numFmtId="0" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf>
<xf numFmtId="0" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="top" wrapText="1"/></xf>
</cellXfs></styleSheet>`;

function core(title) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<dc:title>${esc(title)}</dc:title><dc:creator>Nhóm 02</dc:creator><cp:lastModifiedBy>Nhóm 02</cp:lastModifiedBy>
<dcterms:created xsi:type="dcterms:W3CDTF">2026-09-01T00:00:00Z</dcterms:created></cp:coreProperties>`;
}
const APP = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"><Application>Microsoft Excel</Application></Properties>`;

/* độ rộng cột theo tên tiêu đề; cột không liệt kê dùng mặc định */
const WIDTH = {
  'ID': 8, 'Stakeholder Name': 24, 'Role': 26, 'Category': 11,
  'Power/Influence': 15, 'Interest': 11, 'Expectation': 58,
  'Communication': 18, 'Contact': 18,
};

/* các ô canh giữa (giá trị phân loại ngắn) */
const CENTER = new Set(['ID', 'Category', 'Power/Influence', 'Interest']);

/* ---------------- chạy ---------------- */
const [, , outDir, src] = process.argv;
if (!outDir || !src) { console.error('Cách dùng: node tools/md2xlsx.js <thư mục ra> <file .md>'); process.exit(1); }

const md = fs.readFileSync(src, 'utf8');

/* chỉ lấy phần "## n. Stakeholder Register" — bỏ mọi phần diễn giải khác.
   Cắt theo chỉ số dòng thay vì regex nhiều dòng, để nội dung trong bảng
   không bao giờ làm đứt phần khớp. */
const lines = md.split(/\r?\n/);
const start = lines.findIndex(l => /^##\s*\d+\.\s*Stakeholder Register\s*$/.test(l));
if (start < 0) { console.error('Không tìm thấy mục "Stakeholder Register" trong', src); process.exit(1); }
let end = lines.length;
for (let i = start + 1; i < lines.length; i++) if (/^##\s/.test(lines[i])) { end = i; break; }

const found = tables(lines.slice(start + 1, end).join('\n'));
const meta = found.find(t => /^project$/i.test(t[0][0]));
const reg = found.find(t => t[0].some(h => /stakeholder name/i.test(h)));
if (!reg) { console.error('Không tìm thấy bảng đăng ký (thiếu cột "Stakeholder Name")'); process.exit(1); }

const header = reg[0], body = reg.slice(1);
const rows = [];

/* khối đầu: Project | Project Manager | Date */
if (meta) {
  rows.push(meta[0].map(v => ({ v, s: 1 })));
  rows.push((meta[1] || []).map(v => ({ v, s: 2 })));
  rows.push([]);                                   // dòng trống ngăn cách
}

rows.push(header.map(v => ({ v, s: 3 })));
for (const r of body) rows.push(r.map((v, i) => ({ v, s: CENTER.has(header[i]) ? 5 : 4 })));

const cols = header.map((h, i) =>
  `<col min="${i + 1}" max="${i + 1}" width="${WIDTH[h] || 20}" customWidth="1"/>`).join('');

const sheetRows = rows.map((cells, ri) => {
  if (!cells.length) return `<row r="${ri + 1}"/>`;
  const xml = cells.map((c, ci) => cell(colName(ci) + (ri + 1), c.s, c.v)).join('');
  return `<row r="${ri + 1}">${xml}</row>`;
}).join('');

const lastRef = colName(header.length - 1) + rows.length;
const headerRowIdx = meta ? 4 : 1;
const sheet = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<sheetPr><outlinePr summaryBelow="1" summaryRight="1"/></sheetPr>
<dimension ref="A1:${lastRef}"/>
<sheetViews><sheetView workbookViewId="0" tabSelected="1"><pane ySplit="${headerRowIdx}" topLeftCell="A${headerRowIdx + 1}" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
<sheetFormatPr defaultRowHeight="15"/>
<cols>${cols}</cols>
<sheetData>${sheetRows}</sheetData>
<autoFilter ref="A${headerRowIdx}:${lastRef}"/>
<pageMargins left="0.4" right="0.4" top="0.5" bottom="0.5" header="0.3" footer="0.3"/>
<pageSetup orientation="landscape" paperSize="9" fitToWidth="1" fitToHeight="0"/>
</worksheet>`;

const base = path.basename(src, '.md');
fs.mkdirSync(outDir, { recursive: true });
const buf = zip([
  { name: '[Content_Types].xml', data: CT },
  { name: '_rels/.rels', data: RELS },
  { name: 'xl/workbook.xml', data: WB },
  { name: 'xl/_rels/workbook.xml.rels', data: WBRELS },
  { name: 'xl/worksheets/sheet1.xml', data: sheet },
  { name: 'xl/styles.xml', data: STYLES },
  { name: 'docProps/core.xml', data: core(base) },
  { name: 'docProps/app.xml', data: APP },
]);
const dest = path.join(outDir, base + '.xlsx');
fs.writeFileSync(dest, buf);
console.log('✓', path.basename(dest), (buf.length / 1024).toFixed(1) + ' KB',
  `— ${body.length} bên liên quan × ${header.length} cột`);
