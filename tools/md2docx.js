/* Markdown -> .docx theo đúng định dạng mẫu "01_Project Charter_v1.2.docx" */
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

/* ---------------- tiện ích XML ---------------- */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const FONT = 'Calibri';
const rF = `<w:rFonts w:ascii="${FONT}" w:eastAsia="${FONT}" w:hAnsi="${FONT}" w:cs="${FONT}"/>`;
const rFm = `<w:rFonts w:ascii="Consolas" w:eastAsia="Consolas" w:hAnsi="Consolas" w:cs="Consolas"/>`;

function run(text, o = {}) {
  const rpr = `<w:rPr>${o.mono ? rFm : rF}${o.b ? '<w:b/><w:bCs/>' : ''}${o.i ? '<w:i/><w:iCs/>' : ''}` +
    `${o.u ? '<w:u w:val="single"/>' : ''}<w:sz w:val="${o.sz * 2}"/><w:szCs w:val="${o.sz * 2}"/>` +
    `${o.color ? `<w:color w:val="${o.color}"/>` : ''}${o.shd ? `<w:shd w:val="clear" w:fill="${o.shd}"/>` : ''}</w:rPr>`;
  const parts = String(text).split('\n');
  const body = parts.map((p, i) => (i ? '<w:br/>' : '') + `<w:t xml:space="preserve">${esc(p)}</w:t>`).join('');
  return `<w:r>${rpr}${body}</w:r>`;
}

/* inline markdown -> runs */
function inline(md, base) {
  md = String(md).replace(/<br\s*\/?>/gi, '\n');
  md = md.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');   // link -> chữ thường
  const out = []; let buf = '';
  const flush = o => { if (buf) { out.push(run(buf, Object.assign({}, base, o))); buf = ''; } };
  const re = /(\*\*[^*]+\*\*|`[^`]+`|(?<![*\w])\*[^*\n]+\*(?!\*))/g;
  let last = 0, m;
  while ((m = re.exec(md))) {
    buf += md.slice(last, m.index); flush();
    const tk = m[0];
    if (tk.startsWith('**')) out.push(run(tk.slice(2, -2), Object.assign({}, base, { b: true })));
    else if (tk.startsWith('`')) out.push(run(tk.slice(1, -1), Object.assign({}, base, { mono: true, sz: Math.max(8, base.sz - 1), shd: 'F2F2F2' })));
    else out.push(run(tk.slice(1, -1), Object.assign({}, base, { i: true })));
    last = m.index + tk.length;
  }
  buf += md.slice(last); flush();
  return out.join('') || run('', base);
}

const ALIGN = { left: 'left', center: 'center', right: 'right', both: 'both' };
function para(runsXml, o = {}) {
  const ind = o.indent ? `<w:ind w:left="${o.indent}"/>` : '';
  const spc = `<w:spacing w:before="${o.before || 0}" w:after="${o.after == null ? 60 : o.after}" w:line="${o.line || 259}" w:lineRule="auto"/>`;
  const bdr = o.leftBar ? '<w:pBdr><w:left w:val="single" w:sz="18" w:space="6" w:color="BFBFBF"/></w:pBdr>' : '';
  const shd = o.shd ? `<w:shd w:val="clear" w:fill="${o.shd}"/>` : '';
  const ka = o.keepNext ? '<w:keepNext/>' : '';
  const st = o.style ? `<w:pStyle w:val="${o.style}"/>` : '';
  return `<w:p><w:pPr>${st}${ka}${bdr}${shd}${spc}${ind}<w:jc w:val="${ALIGN[o.jc] || 'both'}"/></w:pPr>${runsXml}</w:p>`;
}
const emptyPara = (sz = 11) => para(run('', { sz }), { after: 0 });
const pageBreak = () => `<w:p><w:r><w:br w:type="page"/></w:r></w:p>`;

/* ---------------- bảng ---------------- */
const TBL_W = 9354;                       // = 11906 - 1418 - 1134
const BORDERS = ['top', 'left', 'bottom', 'right', 'insideH', 'insideV']
  .map(s => `<w:${s} w:val="single" w:sz="4" w:space="0" w:color="000000"/>`).join('');

function table(rows, opt = {}) {
  const nCol = Math.max(...rows.map(r => r.cells.length));
  let w = opt.widths;
  if (!w) {
    const score = new Array(nCol).fill(0);
    rows.forEach(r => r.cells.forEach((c, i) => {
      const len = String(c).replace(/<br\s*\/?>/gi, ' ').replace(/[*`]/g, '').length;
      score[i] = Math.max(score[i], Math.min(len, 60));
    }));
    const tot = score.reduce((a, b) => a + b, 0) || 1;
    w = score.map(s => Math.max(620, Math.round(s / tot * (opt.total || TBL_W))));
    const diff = (opt.total || TBL_W) - w.reduce((a, b) => a + b, 0);
    w[w.length - 1] += diff;
  }
  const grid = w.map(x => `<w:gridCol w:w="${x}"/>`).join('');
  const jc = opt.center ? '<w:jc w:val="center"/>' : '';
  const body = rows.map((r, ri) => {
    const hdr = r.header;
    const trPr = `<w:trPr><w:cantSplit/>${hdr ? '<w:tblHeader/>' : ''}${opt.center ? '<w:jc w:val="center"/>' : ''}</w:trPr>`;
    const tcs = [];
    for (let i = 0; i < nCol; i++) {
      const raw = r.cells[i] == null ? '' : r.cells[i];
      const sz = hdr ? (opt.headSz || 10) : (opt.bodySz || 9);
      const al = hdr ? 'center' : (opt.align && opt.align[i]) || 'left';
      const inner = String(raw).split(/<br\s*\/?>/i)
        .map(line => para(inline(line, { sz, b: hdr }), { jc: al, after: 0, line: 240 })).join('');
      tcs.push(`<w:tc><w:tcPr><w:tcW w:w="${w[i]}" w:type="dxa"/>` +
        `${hdr ? '<w:shd w:val="clear" w:fill="EDEDED"/>' : ''}<w:vAlign w:val="center"/>` +
        `<w:tcMar><w:top w:w="40" w:type="dxa"/><w:bottom w:w="40" w:type="dxa"/><w:left w:w="80" w:type="dxa"/><w:right w:w="80" w:type="dxa"/></w:tcMar>` +
        `</w:tcPr>${inner || para(run('', { sz }), { after: 0 })}</w:tc>`);
    }
    return `<w:tr>${trPr}${tcs.join('')}</w:tr>`;
  }).join('');
  return `<w:tbl><w:tblPr><w:tblW w:w="${opt.total || TBL_W}" w:type="dxa"/>${jc}` +
    `<w:tblBorders>${BORDERS}</w:tblBorders><w:tblLayout w:type="fixed"/>` +
    `<w:tblLook w:val="0000"/></w:tblPr><w:tblGrid>${grid}</w:tblGrid>${body}</w:tbl>`;
}

/* ---------------- parse markdown ---------------- */
function parse(md) {
  const lines = md.split(/\r?\n/);
  const blocks = []; let i = 0;
  const isTableSep = s => /^\s*\|?[\s:-]*-[-\s:|]*\|?\s*$/.test(s) && s.includes('-');
  const splitRow = s => s.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(x => x.trim());
  while (i < lines.length) {
    let L = lines[i];
    if (/^<!--/.test(L)) { while (i < lines.length && !/-->/.test(lines[i])) i++; i++; continue; }
    if (/page-break-after/.test(L)) { blocks.push({ t: 'pb' }); i++; continue; }
    if (!L.trim()) { i++; continue; }
    if (/^```/.test(L)) { const buf = []; i++; while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]); i++; blocks.push({ t: 'code', lines: buf }); continue; }
    if (/^(-{3,}|\*{3,})\s*$/.test(L)) { blocks.push({ t: 'hr' }); i++; continue; }
    const h = L.match(/^(#{1,4})\s+(.*)$/);
    if (h) { blocks.push({ t: 'h', lvl: h[1].length, text: h[2].trim() }); i++; continue; }
    if (L.trim().startsWith('|') && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const head = splitRow(L); const align = splitRow(lines[i + 1]).map(s => s.endsWith(':') && s.startsWith(':') ? 'center' : s.endsWith(':') ? 'right' : 'left');
      i += 2; const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) rows.push(splitRow(lines[i++]));
      blocks.push({ t: 'table', head, align, rows }); continue;
    }
    if (/^>\s?/.test(L)) { const buf = []; while (i < lines.length && /^>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, '')); blocks.push({ t: 'quote', text: buf.join(' ').trim() }); continue; }
    const li = L.match(/^(\s*)([-*]|\d+\.)\s+(.*)$/);
    if (li) {
      const items = [];
      while (i < lines.length) {
        const m2 = lines[i].match(/^(\s*)([-*]|\d+\.)\s+(.*)$/);
        if (!m2) { if (lines[i].trim() && /^\s{2,}\S/.test(lines[i]) && items.length) { items[items.length - 1].text += ' ' + lines[i].trim(); i++; continue; } break; }
        items.push({ ord: /\d/.test(m2[2]), marker: m2[2], depth: Math.floor(m2[1].length / 2), text: m2[3].trim() });
        i++;
      }
      blocks.push({ t: 'list', items }); continue;
    }
    const buf = [];
    while (i < lines.length && lines[i].trim() && !/^[#>|]|^```|^<!--|^(-{3,})\s*$|page-break-after/.test(lines[i]) && !/^(\s*)([-*]|\d+\.)\s+/.test(lines[i])) buf.push(lines[i++]);
    if (buf.length) blocks.push({ t: 'p', text: buf.join(' ') }); else i++;
  }
  return blocks;
}

/* ---------------- render body ---------------- */
function renderBlock(b) {
  switch (b.t) {
    case 'pb': return pageBreak();
    case 'hr': return `<w:p><w:pPr><w:pBdr><w:bottom w:val="single" w:sz="6" w:space="1" w:color="BFBFBF"/></w:pBdr><w:spacing w:after="120"/></w:pPr></w:p>`;
    case 'h': {
      const sz = b.lvl === 1 ? 16 : b.lvl === 2 ? 14 : b.lvl === 3 ? 12 : 11;
      return para(inline(b.text, { sz, b: true }), { jc: 'left', before: b.lvl <= 2 ? 240 : 160, after: 100, keepNext: true, style: b.lvl <= 3 ? 'Heading' + b.lvl : null });
    }
    case 'p': return para(inline(b.text, { sz: 11 }), { jc: 'both', after: 120 });
    case 'quote': return para(inline(b.text, { sz: 10, i: false }), { jc: 'both', indent: 284, leftBar: true, shd: 'F7F7F7', after: 120 });
    case 'code': return table([{ cells: [b.lines.join('\n')] }], { widths: [TBL_W], bodySz: 9 });
    case 'list': return b.items.map(it =>
      para(run((it.ord ? it.marker + ' ' : '• '), { sz: 11 }) + inline(it.text, { sz: 11 }),
        { jc: 'both', indent: 284 + it.depth * 284, after: 60 })).join('');
    case 'table': {
      const rows = [{ header: true, cells: b.head }].concat(b.rows.map(r => ({ cells: r })));
      return table(rows, { align: b.align, headSz: 10, bodySz: 9 });
    }
    default: return '';
  }
}

/* ---------------- lắp tài liệu theo mẫu ---------------- */
function build(md) {
  const blocks = parse(md);
  const meta = {};
  const h1 = blocks.find(b => b.t === 'h' && b.lvl === 1);
  const metaTbl = blocks.find(b => b.t === 'table' && b.rows.some(r => /Nhóm tiến trình/.test(r[0] || '')));
  if (metaTbl) for (const r of metaTbl.rows) meta[r[0].replace(/\*\*/g, '').trim()] = (r[1] || '').replace(/`/g, '').trim();

  const idx = t => blocks.findIndex(b => b.t === 'h' && new RegExp('^' + t, 'i').test(b.text));
  const iXN = idx('Xác nhận'), iLS = idx('Lịch sử'), iML = idx('Mục lục');
  const tblAfter = k => { for (let j = k + 1; j < blocks.length; j++) { if (blocks[j].t === 'table') return blocks[j]; if (blocks[j].t === 'h') break; } return null; };
  const xnT = iXN >= 0 ? tblAfter(iXN) : null, lsT = iLS >= 0 ? tblAfter(iLS) : null;
  const mlL = iML >= 0 ? (() => { for (let j = iML + 1; j < blocks.length; j++) { if (blocks[j].t === 'list') return blocks[j]; if (blocks[j].t === 'h') break; } return null; })() : null;

  const R = a => a.jc = a.jc; // noop
  const out = [];

  /* --- TRANG 1: bìa --- */
  out.push(emptyPara(20), emptyPara(20), emptyPara(20));
  out.push(para(run(h1 ? h1.text : '', { sz: 20, b: true }), { jc: 'right', after: 0 }));
  out.push(emptyPara(14));
  out.push(para(run(meta['Nhóm tiến trình'] || '', { sz: 28, b: true }), { jc: 'right', after: 0 }));
  out.push(emptyPara(14));
  out.push(para(run(meta['Tên tài liệu'] || '', { sz: 20, b: true }), { jc: 'right', after: 0 }));
  out.push(para(run(meta['Phiên bản'] || '', { sz: 12, b: true }), { jc: 'right', after: 0 }));
  out.push(emptyPara(12));
  out.push(para(run(meta['Nhóm thực hiện'] || '', { sz: 14, b: true }), { jc: 'right', after: 0 }));
  out.push(emptyPara(11));
  out.push(para(run('Ngày phát hành: ' + (meta['Ngày phát hành'] || ''), { sz: 11 }), { jc: 'right', after: 0 }));
  out.push(para(run('Trạng thái: ' + (meta['Trạng thái'] || ''), { sz: 11 }), { jc: 'right', after: 0 }));
  for (let k = 0; k < 5; k++) out.push(emptyPara(12));

  /* bảng Xác nhận — 4 cột, căn giữa trang, cột 1 gộp dọc */
  if (xnT) {
    const W = [645, 2100, 2220, 2355];
    const heads = xnT.head;                       // Người tạo / Người kiểm tra / Người xác nhận
    const cols = heads.length;
    const rowsXml = [];
    const cell = (txt, w, opt) => `<w:tc><w:tcPr><w:tcW w:w="${w}" w:type="dxa"/>${opt.merge || ''}<w:vAlign w:val="center"/>` +
      `<w:tcMar><w:top w:w="60" w:type="dxa"/><w:bottom w:w="60" w:type="dxa"/><w:left w:w="80" w:type="dxa"/><w:right w:w="80" w:type="dxa"/></w:tcMar></w:tcPr>` +
      (txt == null ? para(run('', { sz: 10 }), { after: 0 })
        : String(txt).split(/<br\s*\/?>/i).map(l => para(inline(l, { sz: 10 }), { jc: opt.jc || 'left', after: 0, line: 240 })).join('')) + `</w:tc>`;
    rowsXml.push(`<w:tr><w:trPr><w:cantSplit/><w:jc w:val="center"/></w:trPr>` +
      cell('Xác nhận', W[0], { merge: '<w:vMerge w:val="restart"/>', jc: 'center' }) +
      heads.map((h, i) => cell(h, W[i + 1], { jc: 'center' })).join('') + `</w:tr>`);
    xnT.rows.forEach(r => {
      rowsXml.push(`<w:tr><w:trPr><w:cantSplit/><w:jc w:val="center"/></w:trPr>` +
        cell(null, W[0], { merge: '<w:vMerge/>' }) +
        r.slice(0, cols).map((c, i) => cell(c, W[i + 1], { jc: 'left' })).join('') + `</w:tr>`);
    });
    out.push(`<w:tbl><w:tblPr><w:tblW w:w="7320" w:type="dxa"/><w:jc w:val="center"/>` +
      `<w:tblBorders>${BORDERS}</w:tblBorders><w:tblLayout w:type="fixed"/><w:tblLook w:val="0000"/></w:tblPr>` +
      `<w:tblGrid>${W.map(x => `<w:gridCol w:w="${x}"/>`).join('')}</w:tblGrid>${rowsXml.join('')}</w:tbl>`);
  }

  /* --- TRANG 2: Lịch sử cập nhật --- */
  out.push(pageBreak());
  out.push(para(run('Lịch sử cập nhật', { sz: 14, b: true, u: true }), { jc: 'center', after: 240 }));
  if (lsT) out.push(table([{ header: true, cells: lsT.head }].concat(lsT.rows.map(r => ({ cells: r }))),
    { headSz: 11, bodySz: 9, align: lsT.align }));

  /* --- TRANG 3: Mục lục --- */
  out.push(pageBreak());
  out.push(para(run('Mục lục', { sz: 14, b: true, u: true }), { jc: 'center', after: 240 }));
  if (mlL) mlL.items.forEach(it => out.push(para(
    run((it.ord ? it.marker + ' ' : '') , { sz: 11 }) + inline(it.text, { sz: 11 }),
    { jc: 'left', indent: 284, after: 60 })));

  /* --- TRANG 4+: thân --- */
  out.push(pageBreak());
  let start = 0;
  const marks = [iXN, iLS, iML].filter(x => x >= 0);
  const lastMark = marks.length ? Math.max(...marks) : -1;
  if (lastMark >= 0) {
    start = lastMark + 1;
    while (start < blocks.length && blocks[start].t !== 'h') start++;   // bỏ qua mục lục
  }
  let skippedLeadingPb = false;
  for (let j = start; j < blocks.length; j++) {
    const b = blocks[j];
    if (!skippedLeadingPb && b.t === 'pb') { skippedLeadingPb = true; continue; }
    out.push(renderBlock(b));
  }
  return out.join('');
}

/* ---------------- các part cố định ---------------- */
const SECTPR = `<w:sectPr><w:footerReference w:type="default" r:id="rId1"/>` +
  `<w:pgSz w:w="11906" w:h="16838"/>` +
  `<w:pgMar w:top="1701" w:right="1134" w:bottom="1134" w:left="1418" w:header="1174" w:footer="323" w:gutter="0"/>` +
  `<w:pgNumType w:start="1"/><w:cols w:space="720"/><w:titlePg/></w:sectPr>`;

const STYLES = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:docDefaults><w:rPrDefault><w:rPr>${rF}<w:sz w:val="22"/><w:szCs w:val="22"/><w:lang w:val="vi-VN"/></w:rPr></w:rPrDefault>
<w:pPrDefault><w:pPr><w:jc w:val="both"/><w:spacing w:after="60" w:line="259" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>
<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>
${[1, 2, 3].map(n => `<w:style w:type="paragraph" w:styleId="Heading${n}"><w:name w:val="heading ${n}"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:outlineLvl w:val="${n - 1}"/><w:jc w:val="left"/></w:pPr><w:rPr><w:b/><w:sz w:val="${n === 1 ? 32 : n === 2 ? 28 : 24}"/></w:rPr></w:style>`).join('')}
</w:styles>`;

const FOOTER = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:p><w:pPr><w:jc w:val="center"/></w:pPr>
<w:r><w:rPr>${rF}<w:sz w:val="18"/></w:rPr><w:fldChar w:fldCharType="begin"/></w:r>
<w:r><w:rPr>${rF}<w:sz w:val="18"/></w:rPr><w:instrText xml:space="preserve"> PAGE </w:instrText></w:r>
<w:r><w:rPr>${rF}<w:sz w:val="18"/></w:rPr><w:fldChar w:fldCharType="separate"/></w:r>
<w:r><w:rPr>${rF}<w:sz w:val="18"/></w:rPr><w:t>1</w:t></w:r>
<w:r><w:rPr>${rF}<w:sz w:val="18"/></w:rPr><w:fldChar w:fldCharType="end"/></w:r>
<w:r><w:rPr>${rF}<w:sz w:val="18"/></w:rPr><w:t xml:space="preserve"> / </w:t></w:r>
<w:r><w:rPr>${rF}<w:sz w:val="18"/></w:rPr><w:fldChar w:fldCharType="begin"/></w:r>
<w:r><w:rPr>${rF}<w:sz w:val="18"/></w:rPr><w:instrText xml:space="preserve"> NUMPAGES </w:instrText></w:r>
<w:r><w:rPr>${rF}<w:sz w:val="18"/></w:rPr><w:fldChar w:fldCharType="separate"/></w:r>
<w:r><w:rPr>${rF}<w:sz w:val="18"/></w:rPr><w:t>1</w:t></w:r>
<w:r><w:rPr>${rF}<w:sz w:val="18"/></w:rPr><w:fldChar w:fldCharType="end"/></w:r>
</w:p></w:ftr>`;

const CT = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>
<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
<Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>`;

const RELS = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`;

const DRELS = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`;

function core(title) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<dc:title>${esc(title)}</dc:title><dc:creator>Nhóm 02</dc:creator><cp:lastModifiedBy>Nhóm 02</cp:lastModifiedBy>
<dcterms:created xsi:type="dcterms:W3CDTF">2026-08-25T00:00:00Z</dcterms:created></cp:coreProperties>`;
}
const APP = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"><Application>Microsoft Office Word</Application></Properties>`;

/* ---------------- chạy ---------------- */
const [, , outDir, ...srcs] = process.argv;
fs.mkdirSync(outDir, { recursive: true });
for (const src of srcs) {
  const md = fs.readFileSync(src, 'utf8');
  const bodyXml = build(md);
  const doc = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<w:body>${bodyXml}${SECTPR}</w:body></w:document>`;
  const base = path.basename(src, '.md');
  const buf = zip([
    { name: '[Content_Types].xml', data: CT },
    { name: '_rels/.rels', data: RELS },
    { name: 'word/document.xml', data: doc },
    { name: 'word/styles.xml', data: STYLES },
    { name: 'word/footer1.xml', data: FOOTER },
    { name: 'word/_rels/document.xml.rels', data: DRELS },
    { name: 'docProps/core.xml', data: core(base) },
    { name: 'docProps/app.xml', data: APP },
  ]);
  const dest = path.join(outDir, base + '.docx');
  fs.writeFileSync(dest, buf);
  console.log('✓', path.basename(dest), (buf.length / 1024).toFixed(1) + ' KB');
}
