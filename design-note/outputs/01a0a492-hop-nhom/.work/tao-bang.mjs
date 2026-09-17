import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';
const dir = fileURLToPath(new URL('../', import.meta.url));
const wb = Workbook.create();
const s = wb.worksheets.add('Phân công');
s.showGridLines = false;
s.getRange('A1:E23').format.font = {name:'Arial',size:11,color:'#243247'};
s.getRange('A1:E23').format.verticalAlignment = 'center';
s.getRange('A1:E23').format.wrapText = true;
for (const [c,w] of [['A',145],['B',280],['C',280],['D',240],['E',145]]) s.getRange(`${c}1:${c}23`).format.columnWidthPx=w;
function line(row,text,height=27){s.mergeCells(`A${row}:E${row}`);s.getRange(`A${row}`).values=[[text]];s.getRange(`A${row}:E${row}`).format.rowHeight=height;}
line(2,'PHÂN CÔNG HAI TUẦN — PROMPTVIDEO',30);
s.getRange('A2').format.font={name:'Arial',size:17,bold:true,color:'#172B4D'};
line(3,'Mục tiêu: hoàn thiện bài tập quản lý dự án và bản chạy thử tối thiểu.');
line(4,'Lịch đề xuất: 16–29/09/2026. Giờ đề xuất: 20 giờ/người/tuần, chốt trong cuộc họp.');
s.getRange('A4:E4').format.fill='#FFF2D5';
line(5,'Giữ định hướng phiên bản 2.1: video xử lý tại máy người dùng; máy chủ quản lý tài khoản, quyền xuất và thanh toán.');
s.getRange('A7:E7').values=[['Người phụ trách','Tuần 1 · 16–22/09','Tuần 2 · 23–29/09','Kết quả phải giao','Kiểm tra / xác nhận']];
s.getRange('A7:E7').format={fill:'#203C61',font:{name:'Arial',size:11,bold:true,color:'#FFFFFF'},wrapText:true,rowHeight:35,verticalAlignment:'center',horizontalAlignment:'center'};
s.getRange('A8:E10').values=[
 ['Chiến\nA. Sản xuất video','Viết yêu cầu A.\nChốt dữ liệu cảnh và cách nối ba phần.\nGom phạm vi, phân rã công việc, lịch, ngân sách và cách xử lý thay đổi.','Làm nhập chữ, ảnh, xem trước và xuất MP4 cục bộ.\nKiểm tra phần C.\nRà toàn bộ hồ sơ.','Hồ sơ A và kế hoạch chung.\nVideo thử 5 cảnh, 60 giây xuất được trên máy.','Việt Quang kiểm tra.\nQuang Anh xác nhận.'],
 ['Việt Quang\nB. Tài khoản và thuê bao','Viết quy tắc tài khoản, gói năm, quyền xuất và hạn mức.\nLập bảng thời gian, chi phí, rủi ro và dự kiến mua sắm.','Làm đăng nhập, kiểm quyền, đếm lượt xuất và thanh toán giả lập.\nKiểm tra phần A.\nGom báo cáo tiến độ, lỗi và thay đổi.','Hồ sơ B và bảng theo dõi.\nLượt xuất thứ 4 của gói miễn phí bị chặn.','Quang Anh kiểm tra.\nChiến xác nhận.'],
 ['Quang Anh\nC. Quản trị và vận hành','Viết yêu cầu C.\nLập kế hoạch chất lượng, phân công, trao đổi và bộ tình huống kiểm thử.\nChuẩn bị mẫu trình chiếu.','Làm quản lý mẫu, xem tình trạng máy chủ và ghi nhận hỗ trợ.\nKiểm tra phần B.\nGom hướng dẫn, bàn giao và trang trình chiếu.','Hồ sơ C.\nMẫu dùng được trong A.\nBộ hướng dẫn và tài liệu trình bày.','Chiến kiểm tra.\nViệt Quang xác nhận.']
];
s.getRange('A8:E10').format.rowHeight=133;
s.getRange('A8:A10').format.font={name:'Arial',size:11,bold:true,color:'#172B4D'};
s.getRange('A8:E8').format.fill='#F0F4F8';
s.getRange('A10:E10').format.fill='#F0F4F8';
line(12,'MỐC CHUNG CẦN GIỮ',27);
s.getRange('A12').format.font={name:'Arial',size:12,bold:true};
const milestones=[
 [17,'Có yêu cầu của ba phần và thống nhất việc từng người nhận.'],
 [19,'Chốt dữ liệu cảnh, mẫu và cách kiểm quyền trước khi xuất.'],
 [21,'Có bản kế hoạch đầu tiên; đã thử sớm đường xuất MP4 để phát hiện khó khăn.'],
 [25,'Chạy được toàn bộ: đăng nhập, nhập nội dung, hỏi quyền, xuất video và chặn quá hạn mức.'],
 [27,'Xong kiểm thử, sửa lỗi và nội dung hồ sơ.'],
 [29,'Mở kiểm tra toàn bộ tệp, đóng gói và tập trình bày.']
];
for(let i=0;i<milestones.length;i++){
 const r=13+i;
 s.getRange(`A${r}`).values=[[new Date(Date.UTC(2026,8,milestones[i][0]))]];
 s.getRange(`A${r}`).setNumberFormat('dd/mm/yyyy');
 s.mergeCells(`B${r}:E${r}`);s.getRange(`B${r}`).values=[[milestones[i][1]]];
 s.getRange(`A${r}:E${r}`).format.rowHeight=27;
 if(i%2===0)s.getRange(`A${r}:E${r}`).format.fill='#F0F4F8';
}
line(20,'Mỗi ngày: cập nhật việc đã làm, tệp kết quả, giờ đã dùng và vướng mắc. Bị chặn quá một ngày thì báo Chiến.',28);
line(21,'Bản chạy thử dùng một mẫu và thanh toán giả lập có ghi rõ. Phần chưa làm vẫn được ghi trong hồ sơ phiên bản 2.1.',28);
line(22,'Ngày 25/09 dừng thêm tính năng. Bốn ngày cuối dành cho kiểm thử, sửa lỗi, hoàn thiện hồ sơ và tập trình bày.',28);
wb.recalculate();
console.log((await wb.inspect({kind:'table',range:'Phân công!A7:E10',include:'values',tableMaxRows:4,tableMaxCols:5,maxChars:1600})).ndjson);
const png=await wb.render({sheetName:'Phân công',range:'A1:E23',scale:1,format:'png'});
await fs.writeFile(`${dir}.work/xem-truoc.png`,new Uint8Array(await png.arrayBuffer()));
await (await SpreadsheetFile.exportXlsx(wb)).save(`${dir}phan-cong-hai-tuan.xlsx`);
console.log('Đã lưu bảng phân công.');
