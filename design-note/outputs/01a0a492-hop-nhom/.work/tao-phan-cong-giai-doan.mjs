import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {Workbook,SpreadsheetFile} from '@oai/artifact-tool';
const dir=fileURLToPath(new URL('../',import.meta.url));
const wb=Workbook.create();
const s=wb.worksheets.add('Việc theo giai đoạn');
const rows=[];
const reviews={'Chiến':'Việt Quang kiểm tra\nQuang Anh xác nhận','Việt Quang':'Quang Anh kiểm tra\nChiến xác nhận','Quang Anh':'Chiến kiểm tra\nViệt Quang xác nhận'};
function add(phase,owner,work,output,done,status='Chưa bắt đầu') {rows.push([phase,owner,work,output,done,reviews[owner],status]);}
add('1. Trước dự án','Chiến','Rà luận chứng kinh doanh: nhu cầu tạo video, ba nghiệp vụ, phương án xử lý cục bộ và phạm vi sản phẩm. Gom điểm chưa nhất quán với quy tắc môn học.','Bản rà luận chứng kinh doanh và danh sách điểm cần xử lý.','Giữ mô hình phiên bản 2.1; mỗi điểm sửa có lý do.','Chưa rà soát');
add('1. Trước dự án','Việt Quang','Rà bảng giá gói năm, dự báo thuê bao, chi phí, dòng tiền và phép tính tài chính tại tài liệu nguồn hiện hành.','Bảng kiểm số liệu tài chính và các dẫn chiếu.','Số liệu khớp nguồn; dự báo được ghi là giả định.','Chưa rà soát');
add('1. Trước dự án','Quang Anh','Rà kế hoạch lợi ích: lợi ích nào, đo bằng gì, ai đo, khi nào đo; kiểm trách nhiệm vận hành sau bàn giao.','Bản rà kế hoạch quản lý lợi ích.','Đủ cách đo, thời điểm, người theo dõi; không ghi lợi ích dự báo là đã đạt.','Chưa rà soát');
add('2. Khởi tạo','Chiến','Gom rà soát điều lệ: mục tiêu, phạm vi, mốc, ngân sách, thẩm quyền. Làm rõ lịch làm bài hai tuần và lịch dự án giả định.','Điều lệ được rà soát và bảng vấn đề cần thống nhất.','Giữ đủ 12 mục; phân biệt vai trò sinh viên và nhân vật giả định.','Chưa rà soát');
add('2. Khởi tạo','Việt Quang','Rà sổ giả định và ràng buộc; lấy bổ sung từ A/B/C. Đề xuất chuẩn hóa cột, trạng thái và cách xác minh.','Sổ giả định đã rà và danh sách giả định cần kiểm chứng.','Mỗi giả định có căn cứ hoặc cách xác minh; không tự ghi đã xác minh.','Chưa rà soát');
add('2. Khởi tạo','Quang Anh','Rà danh sách bên liên quan: vai trò, kỳ vọng, mức ảnh hưởng, cách trao đổi. Ghi điểm lệch tên người quản lý và giảng viên để xác minh.','Danh sách bên liên quan đã rà và danh sách điểm cần làm rõ.','Khớp điều lệ; phân biệt tên thật nhóm với vai trò giả định.','Chưa rà soát');
add('3. Lập kế hoạch','Chiến','Viết yêu cầu A: nhập chữ/ảnh, mẫu, xem trước, xuất MP4, lưu/mở cục bộ; luồng chính, lỗi và tiêu chí tiếng Việt, tốc độ, bộ nhớ, riêng tư.','Phần A của đặc tả, bảng truy vết và nhánh phân rã công việc.','Mỗi yêu cầu có mã, tiêu chí đo, gói việc và tình huống kiểm thử.');
add('3. Lập kế hoạch','Việt Quang','Viết yêu cầu B: tài khoản, gói năm, quyền xuất, hạn mức, thanh toán/gia hạn, hóa đơn và 5 chỗ; nêu hết hạn, giao dịch trùng và xuất lỗi.','Phần B của đặc tả, bảng truy vết và nhánh phân rã công việc.','Rõ quy tắc từng gói; mỗi trạng thái có cách xử lý và kiểm thử.');
add('3. Lập kế hoạch','Quang Anh','Viết yêu cầu C: nạp mẫu, tài sản đồ họa, quyền quản trị, giám sát, hỗ trợ và đo lợi ích sau bàn giao.','Phần C của đặc tả, bảng truy vết và nhánh phân rã công việc.','Rõ tác nhân, quyền hạn, đầu ra và tiêu chí kiểm tra.');
add('3. Lập kế hoạch','Chiến','Gom yêu cầu A/B/C thành phạm vi chung; lập sơ đồ phân rã và mô tả gói việc. Chốt dữ liệu cảnh, mẫu và cách hỏi quyền giữa các phần.','Tuyên bố phạm vi, sơ đồ phân rã, mô tả gói việc, bảng truy vết và mô tả kết nối.','Phân rã đủ 100% phạm vi; gói 8–80 giờ; rõ phần được trình diễn và phần chưa triển khai.');
add('3. Lập kế hoạch','Việt Quang','Gom hoạt động và ước lượng từ cả ba người; lập quan hệ phụ thuộc, thời lượng, lịch và dữ liệu tính đường găng.','Danh sách hoạt động, biểu đồ tiến độ và bảng tính đường găng.','Có cơ sở ước lượng, người làm, mốc; không xếp quá năng lực. Chiến tích hợp và chịu trách nhiệm lịch chung.');
add('3. Lập kế hoạch','Việt Quang','Gom giờ công và tiền mặt A/B/C; tính ngân sách theo thời gian, dự phòng. Nêu khoản cần thuê/mua và tiêu chí lựa chọn.','Bảng chi phí, ngân sách và phần kế hoạch mua sắm.','Tách tiền mặt/công sức và hai loại dự phòng; Chiến rà ngân sách hợp nhất. Không giao việc rà giấy phép phần mềm.');
add('3. Lập kế hoạch','Quang Anh','Gom tiêu chí chất lượng và tình huống kiểm thử của A/B/C; lập cách kiểm tra, người kiểm tra và bằng chứng cần lưu.','Kế hoạch chất lượng và danh sách tình huống kiểm thử.','Yêu cầu nối được đến tình huống kiểm thử; có ngưỡng đạt và môi trường đo.');
add('3. Lập kế hoạch','Quang Anh','Lập phân công người làm/chịu trách nhiệm/góp ý/nhận tin; lịch họp, cách báo cáo, kế hoạch tham gia của bên liên quan.','Kế hoạch nhân lực, bảng trách nhiệm và kế hoạch trao đổi.','Mỗi việc có một người chịu trách nhiệm cuối; rõ thời điểm, nội dung và người nhận báo cáo.');
add('3. Lập kế hoạch','Việt Quang','Gom rủi ro từ A/B/C; đánh giá khả năng và tác động; ghi chủ rủi ro, cách phòng ngừa, dấu hiệu kích hoạt và phương án dự phòng.','Kế hoạch quản lý rủi ro và sổ rủi ro.','Có thang đánh giá, mức ưu tiên, người theo dõi và hành động cụ thể.');
add('3. Lập kế hoạch','Chiến','Gom các kế hoạch thành một bộ; quy định đề nghị, đánh giá, phê duyệt và ghi nhận thay đổi. Rà liên kết phạm vi, lịch và ngân sách.','Kế hoạch quản lý dự án tổng thể và quy trình kiểm soát thay đổi.','Không mâu thuẫn số liệu; mỗi phần có nguồn; các thay đổi có đúng người phê duyệt.');
add('4. Thực hiện','Chiến','Làm bản chạy thử A: nhập chữ/ảnh, một mẫu, xem trước và xuất MP4 cục bộ bằng WebCodecs; ghép kiểm quyền B và mẫu C. Ghi giờ thực tế.','Mã nguồn A, tệp MP4 thử, mô tả thiết kế và nhật ký A.','Video thử 5 cảnh/60 giây phát được; hỏi quyền trước khi xuất; có bằng chứng nội dung ở máy người dùng.');
add('4. Thực hiện','Việt Quang','Làm bản chạy thử B: đăng nhập, kiểm quyền và hạn mức lưu trên máy chủ. Minh họa thanh toán giả lập, kích hoạt/hết hạn gói. Ghi giờ thực tế.','Mã nguồn B, dữ liệu thử, mô tả thiết kế và nhật ký B.','Ba lượt miễn phí có watermark/720p, lượt 4 bị chặn; giả lập được ghi rõ; ghi giờ và kết quả thật.');
add('4. Thực hiện','Quang Anh','Làm bản chạy thử C: mẫu được A dùng, quyền quản trị, tình trạng máy chủ và ghi hỗ trợ. Gom biên bản họp, hướng dẫn chạy/sử dụng từ A/B/C.','Mã nguồn C, mẫu, nhật ký C, biên bản họp và hướng dẫn chung.','A dùng được mẫu; người thường không vào quản trị; người khác chạy lại theo hướng dẫn.');
add('5. Giám sát và kiểm soát','Chiến','Theo dõi phần A; gom tình hình chung, so phạm vi/lịch/ngân sách với kế hoạch. Quyết định xử lý trong thẩm quyền và trình thay đổi vượt thẩm quyền.','Báo cáo tiến độ chung và quyết định xử lý.','Có dự kiến, thực tế, sai lệch, nguyên nhân, người xử lý và hạn; không sửa lại số liệu quá khứ.');
add('5. Giám sát và kiểm soát','Việt Quang','Theo dõi phần B; gom giờ, chi phí và trạng thái A/B/C. Cập nhật sổ vấn đề, rủi ro, yêu cầu và quyết định thay đổi.','Bảng theo dõi, sổ vấn đề, sổ thay đổi và sổ rủi ro cập nhật.','Mỗi mục có chủ, trạng thái, hạn, bằng chứng; số liệu mô phỏng phục vụ bài tập có nhãn riêng.');
add('5. Giám sát và kiểm soát','Quang Anh','Theo dõi phần C; gom kết quả kiểm thử của cả ba, cập nhật bảng truy vết và tình trạng đáp ứng yêu cầu.','Báo cáo chất lượng, kết quả kiểm thử và bảng truy vết cập nhật.','Phân biệt đạt, lỗi, chưa thử; đính kèm bằng chứng và danh sách cần sửa.');
add('5. Giám sát và kiểm soát','Việt Quang','Kiểm tra chéo A: tiếng Việt, xem trước/xuất, quyền, độ phân giải, watermark, dữ liệu mạng. Chiến sửa; Quang Anh xác nhận.','Phiếu kiểm tra A và bằng chứng chạy thử.','Ghi môi trường, bước thử, kết quả; không tuyên bố đạt tiêu chí chưa đo.');
add('5. Giám sát và kiểm soát','Quang Anh','Kiểm tra chéo B: đăng nhập sai, hết hạn, lượt 4, giao dịch giả lập trùng. Việt Quang sửa; Chiến xác nhận.','Phiếu kiểm tra B và bằng chứng chạy thử.','Lỗi được giao người sửa và thử lại; phân biệt thanh toán thật với giả lập.');
add('5. Giám sát và kiểm soát','Chiến','Kiểm tra chéo C: mẫu dùng trong A, quyền quản trị, giám sát, hỗ trợ; rà nhật ký không chứa nội dung. Quang Anh sửa; Việt Quang xác nhận.','Phiếu kiểm tra C và bằng chứng chạy thử.','Quyền truy cập đúng; mẫu chạy được; phản hồi và lỗi có người xử lý.');
add('6. Kết thúc','Chiến','Gom báo cáo tổng kết: phạm vi, lịch, chi phí so với kế hoạch, nguyên nhân sai lệch và bài học. Viết kết quả và tồn đọng A.','Báo cáo tổng kết chung và phần bàn giao A.','Có bằng chứng đạt/chưa đạt; tách kết thúc đợt làm bài với nghiệm thu toàn bộ sản phẩm.');
add('6. Kết thúc','Việt Quang','Chốt bảng giờ/chi phí, vấn đề và thay đổi. Viết kết quả, tồn đọng B và hướng dẫn tài khoản, thuê bao, thanh toán giả lập.','Bảng số liệu cuối đợt, phần bàn giao B và bài học B.','Số liệu đối chiếu được; tồn đọng có hướng xử lý; không ghi thu tiền thật khi mới giả lập.');
add('6. Kết thúc','Quang Anh','Gom danh mục bàn giao, hướng dẫn, biểu mẫu nghiệm thu, bài học và trang trình chiếu. Viết tồn đọng C, người nhận vận hành và đo lợi ích.','Bộ bàn giao, hướng dẫn vận hành, phần tổng kết C và tài liệu trình bày.','Mở được mọi tệp; ghi rõ người tiếp nhận. Biểu mẫu chưa đủ điều kiện giữ chưa ký; cả ba tập trình bày.');
// The last column pair records review of the authored deliverable, not who tests the software.
const n=rows.length+6;
s.showGridLines=false;
s.getRange(`A1:G${n}`).format={font:{name:'Arial',size:11,color:'#243247'},verticalAlignment:'center',wrapText:true};
for(const [col,width] of [['A',150],['B',110],['C',380],['D',250],['E',320],['F',175],['G',140]])s.getRange(`${col}1:${col}${n}`).format.columnWidthPx=width;
function heading(r,text,height){s.mergeCells(`A${r}:G${r}`);s.getRange(`A${r}`).values=[[text]];s.getRange(`A${r}:G${r}`).format.rowHeight=height;}
heading(2,'PROMPTVIDEO — PHÂN CÔNG THEO TỪNG GIAI ĐOẠN',30);
s.getRange('A2').format.font={name:'Arial',size:17,bold:true,color:'#172B4D'};
heading(3,'A: Chiến — sản xuất video. B: Việt Quang — tài khoản và thuê bao. C: Quang Anh — quản trị và vận hành.',24);
heading(4,'Hồ sơ chung: mỗi người cung cấp phần nghiệp vụ mình; người được giao tổng hợp chịu trách nhiệm ghép và rà tính nhất quán.',24);
heading(5,'Giám sát diễn ra cùng lúc thực hiện. Cột kiểm tra/xác nhận dành cho tài liệu đầu ra; nghiệm thu sản phẩm theo thẩm quyền trong điều lệ.',24);
s.getRange('A6:G6').values=[['Giai đoạn','Người làm','Việc cụ thể cần làm','Tài liệu hoặc kết quả phải giao','Điều kiện hoàn thành','Kiểm tra và xác nhận nội bộ','Trạng thái']];
s.getRange(`A7:G${n}`).values=rows;
s.getRange('A6:G6').format={fill:'#203C61',font:{name:'Arial',size:11,color:'#FFFFFF',bold:true},horizontalAlignment:'center',verticalAlignment:'center',wrapText:true,rowHeight:36};
s.getRange(`A7:G${n}`).format.rowHeight=102;
s.getRange(`A7:B${n}`).format.font={name:'Arial',size:11,bold:true,color:'#172B4D'};
for(let i=0;i<rows.length;i++){
 const r=i+7,p=Number(rows[i][0][0]);
 if(p%2===1)s.getRange(`A${r}:F${r}`).format.fill='#F0F4F8';
 if(i===0||rows[i][0]!==rows[i-1][0])s.getRange(`A${r}:G${r}`).format.borders={top:{style:'medium',color:'#95A9BF'}};
}
s.getRange(`G7:G${n}`).format.fill='#FFF2D5';
s.getRange(`G7:G${n}`).dataValidation={rule:{type:'list',values:['Chưa rà soát','Chưa bắt đầu','Đang làm','Chờ kiểm tra','Cần sửa','Chờ xác nhận','Hoàn thành']}};
const table=s.tables.add(`A6:G${n}`,true,'PhanCongGiaiDoan');
table.showFilterButton=true;
s.freezePanes.freezeRows(6);
wb.recalculate();
console.log((await wb.inspect({kind:'table',range:'Việc theo giai đoạn!A6:G9',tableMaxRows:4,tableMaxCols:7,maxChars:1000})).ndjson);
const sections=[];
for(let i=0;i<rows.length;i++)if(i===0||rows[i][0]!==rows[i-1][0])sections.push({phase:rows[i][0],start:i+7});
for(let i=0;i<sections.length;i++){
 const a=sections[i],end=i+1<sections.length?sections[i+1].start-1:n;
 const png=await wb.render({sheetName:s.name,range:`A${i===0?1:a.start}:G${end}`,scale:1,format:'png'});
 await fs.writeFile(`${dir}.work/giai-doan-${i+1}.png`,new Uint8Array(await png.arrayBuffer()));
}
await(await SpreadsheetFile.exportXlsx(wb)).save(`${dir}phan-cong-theo-giai-doan.xlsx`);
console.log(JSON.stringify({soViec:rows.length,giaiDoan:sections}));
