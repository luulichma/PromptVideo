"""Create evidence-grounded execution, monitoring and handover working records."""
from pathlib import Path
import hashlib
import json
import re
import os
import xml.etree.ElementTree as ET

ROOT=Path(__file__).resolve().parents[1]
DOC=ROOT/'design-note/md-docs'
EV=ROOT/'design-note/evidence'

def write(path,title,body,owner='Chiến',reviewer='Việt Quang'):
    target=DOC/path
    target.parent.mkdir(parents=True,exist_ok=True)
    target.write_text(f'# {title}\n\n**Cập nhật:** 24/09/2026 · **Phiên bản:** v1.0 · **Trạng thái:** Dự thảo làm việc, chưa nghiệm thu.\n\n**Chủ nội dung:** {owner}. **Kiểm tra được giao:** {reviewer}. Đây là phân công, không phải chữ ký hay xác nhận đã review. Codex cập nhật nội dung theo ủy quyền của người dùng.\n\n'+body.strip()+'\n',encoding='utf-8')

# Immutable identifiers for the evidence files and relevant source snapshot.
paths=[EV/'2026-09-24/frontend-vitest.json',EV/'2026-09-24/frontend-vitest.log',EV/'2026-09-24/backend-tests.trx',EV/'2026-09-24/backend-tests.log',ROOT/'src/frontend/src/core/export/exportProject.ts',ROOT/'src/frontend/src/core/export/reservation.ts',ROOT/'src/frontend/src/core/project/schema.ts',ROOT/'src/backend/PromptVideo.Api/Modules/Exports/ExportReservationService.cs']
fingerprints={str(p.relative_to(ROOT)).replace('\\','/'):hashlib.sha256(p.read_bytes()).hexdigest() for p in paths if p.exists()}
(EV/'2026-09-24/source-and-evidence-sha256.json').write_text(json.dumps({'head':'28a07efcc119493e0d89fbfb72ba422b864de747','workingTree':'Có thay đổi trước nhiệm vụ; HEAD không thay thế hash file tại lần rà','sha256':fingerprints},ensure_ascii=False,indent=2),encoding='utf-8')

(EV/'INDEX.md').write_text('''# Danh mục bằng chứng PromptVideo

Chốt dữ liệu ngày **24/09/2026**. Lần chạy mới do Codex thực hiện tại workspace của người dùng; không ghi tên một thành viên như thể họ đã chạy hoặc kiểm tra chéo. HEAD nguồn là `28a07efcc119493e0d89fbfb72ba422b864de747`, working tree đã có thay đổi. [SHA-256 của nguồn và log](2026-09-24/source-and-evidence-sha256.json) giúp đối chiếu chính xác hơn HEAD.

| EV | Phạm vi / thời điểm | Lệnh hoặc phương pháp | Kết quả có thể kết luận | Nguồn |
| --- | --- | --- | --- | --- |
|EV-001|Frontend unit, 24/09/2026; Node24.11, Windows|`npm test -- --reporter=default --reporter=json --outputFile=../../design-note/evidence/2026-09-24/frontend-vitest.json`, cwd `src/frontend`|79/79 ca, 12 file đạt; thời gian suite khoảng3.44giây. Không phải giờ công, coverage hoặc E2E thật|[JSON](2026-09-24/frontend-vitest.json), [log](2026-09-24/frontend-vitest.log) |
|EV-002|Backend, 24/09/2026; .NET10.0.303, Windows|`dotnet test src/backend/PromptVideo.Api.Tests/PromptVideo.Api.Tests.csproj --no-restore --logger "trx;LogFileName=backend-tests.trx" --results-directory design-note/evidence/2026-09-24 --verbosity minimal` từ root|60 ca:18 đạt,42 thất bại khi dựng fixture Docker/Testcontainers. Không kết luận42 lỗi nghiệp vụ. Cần chạy lại integration khi daemon sẵn sàng|[TRX](2026-09-24/backend-tests.trx), [log](2026-09-24/backend-tests.log) |
|EV-003|A benchmark Worker lịch sử; môi trường ghi trong JSON|Đọc artifact đã có, không chạy lại kỳ này|720p60giây được báo8.8giây; không suy ra1080p đạt hoặc dùng làm số đo mới|[worker-benchmark.json](../../src/frontend/artifacts/worker-benchmark.json) |
|EV-004|A benchmark lịch sử17/09; HeadlessChrome152,12luồng,16GiB|Đọc báo cáo và artifact|Ba lần main-thread heap35.44/32.07/36.11MB; không đo Worker,không phải phép×10;1080p probe không đạt ở môi trường đó|[Báo cáo](../../src/frontend/docs/benchmark-results.md), [artifact](../../src/frontend/artifacts/benchmark-report.json) |
|EV-005|Rà mã nguồn24/09|Đọc exportProject/reservation/schema, service quota, Admin/Templates/Payments và module docs|Phát hiện complete lỗi vẫn giao file, thiếu snapshot/version, checkout chưa có request idempotency. Đây là kết quả rà tĩnh, chưa thay test động|[Snapshot hash](2026-09-24/source-and-evidence-sha256.json), [E01](../md-docs/03_Executing/01_Implementation_and_Integration_Record_v1.0.md) |

**Chưa có bằng chứng nghiệm thu:** TC-I-01–06 trên server thật, HAR0byte,1080p máy tham chiếu,bộ nhớ×10,checksum3máy,134tổ hợp dấu,100lần xuất,10người thử,coverage≥70%,30ngày uptime,cổng thanh toán thật,hóa đơn/seats và xác nhận bàn giao. Kết quả E2E23/09 trong A_01 là nội dung nguồn cũ báo cáo, không tự ghi thành lần chạy mới.

Khi thêm EV: ghi ngày/múi giờ, người chạy, cấu hình, build/hash, command/dataset, expected/actual, trạng thái, đường dẫn và giới hạn kết luận. HAR phải che cookie/token trước khi đưa vào bộ chia sẻ. Không sao chép secret vào báo cáo.
''',encoding='utf-8')

write('03_Executing/_module-input/A_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md','A_03 — Thiết kế, thực hiện và hướng dẫn module A','''
## 1. Thiết kế đã có trong repo

Frontend React/Vite phân tách `features/editor` và `core`. `core/project` sở hữu schema/validation/timeline; `core/rendering` dựng Canvas và chữ; `core/export` Worker/WebCodecs/Mediabunny; `core/storage` giữ dữ liệu cục bộ. Project và media không được gửi lên API.

| WBS | Thành phần / đầu ra hiện có | Giới hạn cần theo dõi |
| --- | --- | --- |
|3.1|Prototype/probe, benchmark và quyết định xuất bằng WebCodecs|EV-003/004 là dữ liệu lịch sử,1080p chưa chứng minh |
|3.2|ProjectDocumentV1, cảnh và validation|Thiếu snapshot/version mẫu; ISS-G-002 |
|4.2.1–3|Editor chữ/ảnh,5mẫu,render/preview,undo/redo|Bộ134tổ hợp và checksum3máy chưa đủ |
|4.2.4|Worker,MP4,ghi luồng,progress/ETA/hủy|Pause/resume thuộcPP4.2.7; complete lỗi còn giao file |
|4.2.5|IndexedDB/OPFS,gói checksum,phục hồi|Cần migration mẫu khi sửa schema |
|4.2.6|Client quyền và catalog Active|IF-AB/CA đích đã chốt,ISS-G-001/002 chưa sửa mã |
|5.1|Test unit và E2E mock trong repo|Chưa có TC-I server thật đầy đủ |

## 2. Cách chạy và dùng

Theo [E03](../03_Installation_User_and_Operations_Guide_v1.0.md), chạy API và frontend; cài dependency bằng lockfile. Tạo dự án5cảnh60giây, nhập chữ/ảnh cục bộ, chọn mẫu, xem trước rồi đăng nhập trước khi xuất. Free được720p watermark; quyền server quyết định chất lượng, UI không tự cấp1080p.

Unit: `npm test` tại `src/frontend`. E2E mock: `npm run test:e2e`; benchmark riêng: `npm run benchmark`. Không suy ra đạt TC-I từ E2E có `page.route`. Khi đo ghi hệ điều hành,CPU,RAM,trình duyệt,codec probe,đầu vào và hash đầu ra.

## 3. Nhật ký thực hiện kỳ này

24/09: chuẩn hóa A_01/A_02, ánh xạ WBS, đổi kỳ vọng TC-A-20/36 theo DEC-011, viết IF và hồ sơ chung; chạy unit frontend79/79 (EV-001), đọc code đối chiếu (EV-005). Giờ thực tế của Chiến và chi phí thực tế **chưa được cung cấp**, ghi ở E05 sau khi có nguồn. Không dùng thời gian suite3.44giây làm giờ công.

## 4. Bài học và việc tiếp nối

Đóng reservation là “best effort” làm UI báo thành công dù server chưa xác nhận. Hợp đồng phải bao gồm đường lỗi và cơ chế ghi tạm/commit; sửa cả API client, điều phối export, UI và test hồi quy. Version metadata trên server chưa đủ giữ dự án cũ nếu scene chỉ lưutemplateId. Hai việc này đã được ghi ISS-G, không che bằng trạng thái “có code”.
''')

write('04_Monitoring_and_Controlling/_module-input/A_04_Theo_doi_kiem_thu_va_thay_doi_v1.0.md','A_04 — Theo dõi, kiểm thử và thay đổi module A','''
## 1. Trạng thái ngày24/09

A có editor/render/export/storage,79unit test đạt lần mới EV-001. Chưa đủ bằng chứng nghiệm thu, đặc biệt REQ-A-05 vàREQ-A-10 khác hành vi đích. P09 quản lý RTM hợp nhất; [A_01](../../02_Planning/_module-input/A_San_xuat_video/A_01_Yeu_cau_va_kiem_thu_v1.0.md) giữ thiết kế ca thử.

| Nội dung | Kết quả / bằng chứng | Xử lý và owner |
| --- | --- | --- |
|Unit frontend|79/79,12file; EV-001|Giữ log/JSON; Chiến |
|Complete lỗi/TTL|Đọc code thấy vẫn giao file; TC-A-20/36 chưa chạy đích mới|ISS-G-001,Chiến/VQ; không báo đã sửa |
|Snapshot mẫu|Project chỉtemplateId; EV-005|ISS-G-002,Chiến/QA; migration và hồi quy |
|Tích hợp server thật|Docker không sẵn sàng; backend42fail fixture,18pass|ISS-G-004,VQ; chạy lại backend rồi TC-I |
|Hiệu năng/bộ nhớ/3máy|Chỉ có720p và main-thread heap lịch sử|5.2PP; chưa kết luận OB-01/02/03 |
|134tổ hợp/100xuất/10người|Chưa đủ dữ liệu|5.3PP; giữ REQ/NF và owner |

## 2. Thay đổi hồ sơ đã thực hiện

DEC-003/004 đổi hệ mã theo WBS chung; DEC-011 đổi kỳ vọngTC-A-20/36 có lưu bản cũ, bắt buộc thử lại; DEC-012 thống nhấtRetired vàsnapshot. ForecastA225⅓h được phân bổ không trùng; CR-G-001 giữ toànscope và điều chỉnh lịch/nguồn lực. Chưa có actual/ETC để báo SPI/CPI.

## 3. Kiểm tra chéo

Việt Quang được giao kiểm A, Quang Anh xác nhận nội bộ. Kỳ này đã có rà tự động/tài liệu bằng Codex; **chưa có phiếu review do hai thành viên thực hiện**. Cần ghi comment cófile/mục,expected/actual,kếtquảsửa và ngày kiểm lại; không ký thay.
''')

write('05_Closing/_module-input/A_05_Ket_qua_ban_giao_va_bai_hoc_v1.0.md','A_05 — Kết quả bàn giao và bài học module A','''
## 1. Gói bàn giao dự thảo

A_01–04, source `src/frontend`, thiết kế `design-note/plan-note/00–07`, EV-001/003/004/005 và script chạy test. Bên tiếp nhận nội bộ là Việt Quang/Quang Anh theo vòng kiểm tra; chưa có xác nhận tiếp nhận hoặc nghiệm thu.

## 2. Kết quả và tồn đọng

Có mã editor/render/export/storage và unit79/79; không đồng nghĩa toànCharter đạt. ISS-G-001 complete, ISS-G-002 mẫu; TC-I server thật/HAR chưa đủ; pause/startup unsupported,1080p,bộ nhớ×10,checksum3máy,134tổ hợp,100xuất,10người thử vàcoverage còn mở. OwnerChiến phối hợpVQ/QA; WBS3.2,4.2.6/7,5.1/2/3 giữ rõ trong P05.

Giờ/chi phí cuối chưa có actual. Forecast phân bổA225⅓h chỉ để lập kế hoạch; không điền vào cột chi phí hoàn thành. Hướng dẫn vận hành ởE03; sơ đồ/schema sửa phải cập nhật đồng thờiP03/P09.

## 3. Bài học có hành động

1. Mã cục bộ3.x từng đụng WBS tổng: dùng registry trước khi ghép và lưu ánh xạ.
2. Unit test có thể xanh với kỳ vọng cũ chưa đúng nghiệp vụ: mỗi đổi hợp đồng phải review kỳ vọng, không chỉ sốpass.
3. Benchmark trên một môi trường không đủ cho lời hứa nhiều trình duyệt/máy: gắn môi trường và giới hạn kết luận cạnh số đo.
4. Đường thành công của export phải bao gồm xác nhận quyền: thiết kế ghi tạm và đối soát trước khi nghiệm thu.

Demo A: tạo5cảnh60giây,đổi chữ/ảnh,xem trước,xuấtFree; chỉ chạy phần môi trường đã sẵn sàng và nói rõ trạng thái nếu phải dùng mock.
''')

write('03_Executing/01_Implementation_and_Integration_Record_v1.0.md','E01 — Hồ sơ thực hiện và tích hợp','''
## 1. Kiến trúc và phần đã xây

Frontend React/Vite chạy editor/render/encode/storage cục bộ; backend ASP.NET Core10 là monolith theo module Identity,Subscriptions,Exports,Templates,Admin; PostgreSQL giữ dữ liệu tài khoản/quyền/quota/audit. API dùng cookie/CSRF, OpenAPI sinh kiểu client. Phần nội dung video không đi qua server.

| Module | Có trong mã tại lần rà | Phần thiếu / khác hợp đồng |
| --- | --- | --- |
|A|Editor5cảnh,5mẫu,Canvas,WorkerH.264,MP4,lưu/mở,clientquyền/catalog|Complete chưa xác nhận vẫn giao file;snapshotmẫu thiếu;pause và các bằng chứng toànCharter chưa đủ |
|B|Identity,entitlements,quota,reserve/complete/cancel,eventdedup,fakegateway,AccountPage một phần|Checkoutrequestidempotency,cổngthật,nhắchạn,hóađơn,seats,supportadjustment chưa đủ |
|C|CatalogActive,Adminstatus,metrics snapshot,health|CRUD/assets/versionvalidator,ticket/quotaadjustment,AdminUI và nguồn đo lợi ích chưa đủ |

Nguồn chi tiết: [A_03](_module-input/A_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md), [B_03](_module-input/B_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md), [C_03](_module-input/C_03_Thiet_ke_thuc_hien_va_huong_dan_v1.0.md). P03 là hợp đồng đích; mã hiện có không tự thay thế yêu cầu.

## 2. Các bước tích hợp và điều kiện ra cổng

1. Dựng PostgreSQL/API/frontend theoE03; kiểmhealth vàseed bằng tài khoản thử riêng.
2. KiểmAuth/CSRF/capabilities, sau đó chạy TC-I-01/02. Đối chiếuUI,API vàUsagePeriod; đừng dùng snapshotUI làm bằng chứng DB.
3. KiểmfakePersonalnon-Production và1080pcodecprobe (TC-I-03); không gọi thanh toán thật trong demo.
4. KiểmRetired/dựáncũ theoIF-CA-01, chỉ raISS-G-002 nếu thiếu snapshot;TC-I-04.
5. ThuHAR/log đãchetoken,scanmarker vàđộtrễ;TC-I-05/06.
6. GhiEV và M05, sửa lỗi rồi kiểm lại. Chỉ mởValidateScope khi QCđạt và có review.

## 3. Nhật ký được xác minh ngày24/09

Đã chuẩn hóa mã, sửa đầu vàoABC, tạo kế hoạch chung và các register từ nguồn. Frontendunit79/79 đạt EV-001. Backend60ca:18đạt,42fail do Dockerfixture EV-002; Dockerdaemon chưa sẵn sàng. Việc thử khởi động Docker chưa giải quyết được điều kiện này. Không có thay đổi mã chức năng sản phẩm trong đợt chuẩn hóa hồ sơ.

Actual giờ/chi phí của thành viên chưa có; E05 giữ ô trống có chú giải. Người thực hiện thao tác rà/chạy tự động làCodex, không gán thành xác nhận củaChiến/VQ/QA. Build/hash/môi trường được dẫn ở [EV INDEX](../../evidence/INDEX.md).
''')

write('03_Executing/02_Meeting_and_Decision_Log_v1.0.md','E02 — Sổ họp và quyết định','''
## 1. Quyết định đã có căn cứ

Ngày24/09/2026, người dùng yêu cầu Codex quyết định các phương án, thống nhất mã và sửa theo đầu việc đã giao. Từ ủy quyền đó, DEC-001–014 trong [sổ quyết định](../00_Quyet_dinh_va_quy_uoc_ma.md) có hiệu lực tổ chức hồ sơ. CR-G-001 chọn giữ phạm vi, điều chỉnh lịch/nguồn lực theo forecast599h. Đây không phải biên bản một cuộc họp nhóm đã diễn ra, cũng không phải sponsor đã duyệt baseline mới.

## 2. Agenda dùng cho cuộc họp tối nay

| Thời lượng gợi ý | Nội dung cần trao đổi | Đầu ra cần ghi |
| --- | --- | --- |
|5phút|Mở G0, nêu quyết định và vai trò đã chốt|Thành viên biết nguồn hiện hành và phạm vi trách nhiệm |
|10phút|Mỗi người xem feedback đã sửa và các việc còn cần làm thật|ETC, giờ rảnh thực tế, vướng mắc cóowner |
|10phút|599h so với450/495h;10h/người/tuần chỉ là giả định|Nguồn lực/lịch nào có thể thực hiện; cập nhậtP10/CR-G-001 |
|10phút|ISS-G-001–004 và các phép thử thiếu|Thứ tự sửa/chạy, người cung cấp môi trường, bằng chứng phải giao |
|5phút|Lịch review và bàn giao nội bộ|Ngày người kiểm tra nhận file, nơi ghi comment, cổng tiếp theo |

Không cần mở lại lựa chọn tiền tố mã hoặc chia vai đã chốt nếu không có lý do thay đổi. Nếu cuộc họp đổi một DEC, ghi DEC mới dẫn DEC cũ; thay baseline theoCR.

## 3. Phiếu ghi kết quả họp thật

Thời điểm, người tham dự, người ghi, nội dung thảo luận và xác nhận tham gia: **chưa có**. Người ghi được giao làQuang Anh. Sau họp bổ sung từng dòng: vấn đề, quyết định,owner,ngày đến hạn,linkđầu ra,ai đồng ý,điểm chưa đồng ý. Không điền trước biên bản đồng thuận.
''')

write('03_Executing/03_Installation_User_and_Operations_Guide_v1.0.md','E03 — Hướng dẫn cài đặt, sử dụng và vận hành','''
## 1. Môi trường và cài đặt

Nguồn thao tác là [src/README.md](../../../src/README.md). Yêu cầu .NET10,Node24/npm11,DockerCompose. Các lệnh sau chạy tại thư mục `src`; `compose.yaml` nằm ở đó, không nằm root. Chỉ sao chép `.env.example` nếu chưa có `.env` và cấu hình secret riêng, không chép mật khẩu vào hồ sơ.

```powershell
Set-Location 'F:/Enticy Studios/PromptVideo/src'
if (-not (Test-Path -LiteralPath '.env')) { Copy-Item -LiteralPath '.env.example' -Destination '.env' }
docker compose up -d postgres
dotnet tool restore
dotnet restore PromptVideo.sln
dotnet tool run dotnet-ef database update --project backend/PromptVideo.Api --startup-project backend/PromptVideo.Api
npm ci --prefix frontend
```

Mở API và frontend trong hai terminal riêng:

```powershell
dotnet run --project backend/PromptVideo.Api
```

```powershell
npm run dev --prefix frontend
```

UI mặc địnhlocalhost:5173,API5080,PostgreSQL55432. Viteproxy giữ same-origin cookie. Seeddevelopment là opt-in bằng biến cấu hình theoREADME; không ghi credentials trong tài liệu, không dùngtài khoảnseed choProduction. Fileenv đã tồn tại không bị ghi đè.

## 2. Sử dụng và kiểm tra nhanh

Tạo dự án5cảnh60giây; nhập chữ vàảnh cục bộ; chọnmẫu/xemtrước/lưu; đăngnhập đểxuất. Free3lượt720pwatermark; server cấpquyềncuốicùng. Hủy chỉ được thông báo hoàn lượt sau xác nhậnserver theoIF-AB-01; mã hiện tại cònISS-G-001 nên cần đối chiếu quota.

Admin đổi trạng tháimẫuquaAPIhiệncó;Retiredẩnkhỏidanhsáchhiệnhành. Giao diệnAdmin/fullCRUD làphầnchưaxong, không hứa thao tácUIđãcó. Fakepaymentchỉnon-Production,Admin,ghi rõ khôngthu tiền thật.

Kiểmtra `GET /api/foundation/health`, `/health/live`, `/health/ready`. Unitfrontend `npm test --prefix frontend`; backend `dotnet test backend/PromptVideo.Api.Tests/PromptVideo.Api.Tests.csproj` cần Docker chointegration. `scripts/check.ps1` trongsrc là chuỗi kiểmtraCI; lần24/09 khôngtuyênbố đã chạytoànbộCI.

## 3. Xử lý sự cố

| Biểu hiện | Kiểm tra / cách xử lý |
| --- | --- |
|Docker namedpipe không tồn tại|Mở/khôi phụcDockerEngine, kiểm`docker version`, sau đóchạytestlại; khôngxóadữliệuDBđểthử |
|Không nối55432|Kiểmcontainer/cổng/envconnection; tránh nhầmPostgreSQL5432đangcó |
|401/CSRF sauđăngnhập|Lấy lại token sau đổiidentity; khôngtắtCSRFđểláchlỗi |
|403quotalần4|Đối chiếucapabilities/UsagePeriod; khôngnhầm lỗiđộphângiải |
|Encoder1080p không hỗ trợ|Ghi probe vàmôi trường; khôngkếtluậnđạt1080p bằng720p |
|Complete409/mấtmạng|ISS-G-001:đối soátreservation,cấmghi kếtquảnghiệmthuđạt; sửađườngghi tạm/commit |
|Mẫu cũ khác diện mạo|ISS-G-002:kiểmversion/snapshot,migration; khôngghiđèsnapshotgốc |

## 4. Vận hành và bàn giao còn cần chứng minh

PWA chỉ cacheappshell,API/health/OpenAPI network-only. Dữliệunộidungcụcbộ cần hướngdẫnexportgói dựán trướcđổimáy/xóatrìnhduyệt. Serverbackup/restore,HTTPS,rollback và cảnhbáo production nằmPP6.1, chưa có biên bản thử. Không công bố dịch vụproduction hoặc30ngàyuptime từ lầnhealthcheck đơn lẻ. Chi phí vận hành chỉ ghi thực khi có chứng từ;PhạmQuangAnh nhận tổng hợp vận hành.
''',owner='Quang Anh',reviewer='Chiến')

write('03_Executing/04_Quality_Assurance_and_Lessons_Learned_v1.0.md','E04 — Hồ sơ đảm bảo chất lượng và bài học','''
## 1. Kiểm tra quy trình/tài liệu đã thực hiện

| Nội dung QA24/09 | Phát hiện và xử lý | Trạng thái |
| --- | --- | --- |
|MãWBS/REQ/TC|Ba nhánh mã cũ mâu thuẫn; dùng sáu giai đoạn,registry vàmapping|Đã sửa nguồn làm việc |
|Scope/Charter|C cóaudio/video,TC-Aviếtlại vàMTkhôngcótrongBMP|Đã sửaC;LI-01–05 giữtheoBMP |
|Ước lượng/chi phí|Giờ làm tròn,phầnhóađơn/seatschưađủ,schema/prototypecódễđếmđôi|599h từ32gói;P11 tính bằngcôngthức |
|Tình trạng sản phẩm|Các mô tả “đã có” chưa tách đủphạmvi|Tách code/test/mock/actualacceptance;ISS-G-001–005 |
|Phê duyệt/actual|Tên người trongbảngkhôngchứngminhđãduyệt;actualchưacó|GiữDraft,ghi phâncông;EVMkhôngtựđiền0 |
|Ghép file|Nhiều nguồn cùngđượcxemlàbảnchính|Modulehiệnhành→tàiliệuchung→outputs;oldnoteslịchsử |

QAdoCodexthực hiện theoủyquyền; chưa thay vòngreviewcủathànhviên. QC là kếtquả test ởM02/M05 vàEV INDEX, khônglẫn vớibảngQA này. Kếtquảlầnchạyfrontend79/79,backend18/60pass42failmôitrườngđượcghiriêng.

## 2. Điều kiện phát hành hồ sơ

Mã duy nhất,link tồn tại,số tổng khớp,cộtnguồn/trạngthái rõ;đầuvàochưacó khônggiảlập. PhiênbảnBC/BMP2.2 vàCharter/Assumption2.1 được giữ đúng. Module_03–05 phải nêu nội dung thực,tồnđọng vàowner; bảnxuấtchỉcóthểđổi sangofficialkhigiữđúngtrạngtháivàđãkiểm.

## 3. Bài học áp dụng ngay

Chốt mã trước khi chia nhỏ tài liệu; ghép dữ liệu thayvìviết lại số; phânbiệt forecast,ETC,actual; kiểm cảđườnglỗiAPI; đo đúngmôi trườngcủatiêuchí; ghi người/chữkýthật sau khi họđãreview. Bài học cuốiđợt gomởC03,có nguồn và hànhđộng cụthể.
''',owner='Quang Anh',reviewer='Chiến')

write('04_Monitoring_and_Controlling/01_Project_Status_Report_v1.0.md','M01 — Báo cáo trạng thái ngày24/09/2026','''
## 1. Tình trạng tổng thể

**Hồ sơ đã được chuẩn hóa; sản phẩm chưa đủ điều kiện nghiệm thu.** Pre-project vàInitiating có bản hiện hữu. Planning có đầu vào của ba module và bộ kế hoạch ghép; nguồn số liệu chuyển sang một hệWBS/REQ/TC. Executing,Monitoring,Closing là báo cáo tiến độ và dự thảo bàn giao theo dữ liệu đang có.

## 2. Phạm vi, thời gian, chi phí

32gói:599h=427hWP+172hPP. So450h tăng149h; so trần495h tăng104h.47.92triệu là công quyđổi80k/h; tiềnmặt3.5triệu gồm3.1triệu dựtrù và400kdựphòng, chưa phảiđãchi. Contingencydựthảo46.2h táchkhỏi599h;managementreservechưaphânbổ. CR-G-001 chọnđiềuchỉnhlịch/nguồn lực giữphạmvi, chưacóapprovedbaseline.

Năng lực10h/người/tuần là giảđịnh. P10 tínhCPMlogicWP83.5ngàylàm, sanbằngWP151.167ngàylàm ở2h/người/ngày trongkịchbản làmtoànbộWP từ24/09. Các sốđó **không phải ngàyhoàn thànhdựán hoặcETC**: nhiềuWPđãcómã,chưaactual/ETC,PP172hchưaphânrãvàcóngoạiphụthuộc. DOCgate26/09,29/09,02/10,05/10,07/10là lịchhồsơđãchọn.

## 3. Chất lượng và vấn đề cần xử lý

Frontend79/79unitpass;backend18pass/42failmôitrường,total60. ISS-G-001complete,002snapshot,003checkoutdedup,004Docker,005thiếuactual/baseline. Ngoài ra cổngthật,hóađơn,seats,AdminUI/support,cácthửnghiệmChartervàvậnhànhproductionchưađủ. MỗiissuecóownertrongM03;khôngghinhữngviệcnàythànhDonekhichỉsửatàiliệu.

## 4. Công việc kỳ tiếp

ViệtQuang khôi phụcmôi trường vàquảnlýactual;Chiến/VQ sửa vàthửcomplete/quota;Chiến/QA xửlýsnapshotmẫu;VQcheckoutrequestdedup;QAgom bằngchứng/testchéo. Ba người xác nhậnETC vàcôngsuấttrongcuộchọp, cậpnhậtP10/CR. Ngườiđượcphâncôngkiểmchéocầnghikếtquảthật,tráchnhiệmchưatựđóng.

Không báo phầntrăm dựán hoànthành hoặcSPI/CPI khi chưacóPV/EV/AC đủcăn cứ. M04 cóguardđểtrống cácchỉsốkhôngtínhđược.
''',owner='Việt Quang',reviewer='Quang Anh')

write('04_Monitoring_and_Controlling/02_Quality_and_Test_Report_v1.0.md','M02 — Báo cáo chất lượng và kiểm thử','''
## 1. Kết quả xác minh kỳ này

| Lần kiểm tra | Kết quả thật | Giới hạn |
| --- | --- | --- |
|FrontendVitest24/09|79pass/79,12file;EV-001|Unit hiện có;khôngcoveragenhận70%,khôngnghiệmthuTC-I |
|BackendxUnit24/09|18pass,42fail,total60;EV-002|42failmôitrườngDocker/Testcontainers;chưađánhgiálogictừngintegration |
|Ràmã/hợpđồng24/09|ISS-G-001/002/003;EV-005|Ràtĩnh,phảicótesthồiquykhisửa |
|Benchmarklịchsử|720p/heapluồngchính;EV-003/004|Khôngđạtthaycho1080p,Worker,×10hoặc3máy |

Không cộng79frontend và18backend thành một tỷ lệnghiệmthu sảnphẩm. Phạmvi test khác nhau và có42ca chưa chạynghiệpvụđược. E2Emock23/09đượcbảna01cũbáocáo;khôngghi như lầnchạyngàynay.

## 2. Những tiêu chí chưa đủ bằng chứng

TC-I-01–06;HAR0byte;1080p≤1.5×trênmáythamchiếu;bộnhớ×10<15%;checksum3máy;134tổhợpdấu;100lầnxuất≥95%;10ngườimới≥8ngườixong10phút;coverage≥70%;thanh toánthật;30ngàyuptime;support/AdminUI,hóađơn/seats. P06 cótiêuchí vàowner,P09truyvết,M05giữkếtquả vàlỗi.

## 3. Điều kiện kiểm lại và chuyển nghiệm thu

Khôi phụcDocker;chạybackendlogmới;hoànthiệnmãphầncònlệch;chạyTCcụthểvớiexpectedđãchốt;reviewbằngchứng;đónglỗikhingười kiểmtralại. Chỉ khiđápứngtiêuchíphạmviđượcduyệtmớiđưaM06xácnhận. NhữngcaBlocked/NotRunkhôngđượcghiPass.
''',owner='Quang Anh',reviewer='Chiến')

write('04_Monitoring_and_Controlling/06_Scope_Validation_Record_v1.0.md','M06 — Hồ sơ chuẩn bị xác nhận phạm vi','''
## 1. Kết luận hiện tại

**Chưa đủ điều kiện xác nhận nghiệm thu toàn bộ sản phẩm.** Tài liệu này ghi tình trạng chuẩn bị, không phải biên bản đã ký. Chưa có chữ ký/ngày chấp nhận của người có thẩm quyền theoCharter.

| Nhóm đầu ra | Đầu vào cần để xác nhận | Tình trạng24/09 |
| --- | --- | --- |
|Planning ghép|P01–13 khớp mã/số;reviewchéo vàbaselineđượcduyệt|Đãsoạn;chờreviewthànhviên vàxửlýCR-G-001 |
|A|REQ/NF,TC,cácthửnghiệmCharter|Unitcó;ISS001/002vàPPcònmở |
|B|Quota,thanh toán,cấpquyền,hóađơn/seats|Cócode/testmộtphần;integrationblocked,phạmvicònthiếu |
|C|Mẫu,assets,support,metrics,health,UI|CóAPIpartial;PPvànguồnđolợiíchcònthiếu |
|Vận hành/bàn giao|Deploy,restore,rollback,hướngdẫn,chủtiếpnhận|Cóhướngdẫn;chưabiênbảnchạythử/tiếpnhận |

## 2. Cách hoàn thiện biên bản khi có đủ điều kiện

Ghi phiênbản/build,ngày vàngười kiểmQC,danh sáchdeliverable/REQđượcchấpnhận,bằngchứng,ngoạilệđượcduyệtcùngCR,điềukiệncònlạivàchữkýthật. Nếuchỉnhậnmộttậpdemo,phảighiđúngtậpđó,khôngđổitênthànhnghiệmthutoànCharter.

Người điều phốiChiến;QAcungcấpM02/M05;VQcungcấplịch/chiphí/actual. Trìnhtự:ControlQuality→ValidateScope→Close. DựthảoClosingcóthểchuẩnbịtrước, nhưng khôngcóquyềntựxácnhậnthànhcôngdựán.
''')

write('05_Closing/01_Final_Project_Report_v1.0.md','C01 — Báo cáo tổng kết đợt chuẩn hóa hồ sơ','''
## 1. Mục tiêu và kết quả của đợt

Đợt24/09 chuyển cáchviết từ mỗi người một chương rời sang mỗi người chịu trách nhiệm mộtmodule xuyênsuốt. Đãchốt phâncông,hệ mã,baIF vàquytrìnhghép; sửaABC; tạoPlanningchung,cácsổtheodõi vàhồsơthựchiện/kiểmsoát/bàngiaodựthảo. Pre-project/Initiatinggiữbảnhiệnhữuđểđốichiếu.

Đây là **tổng kết công việc tài liệu tại ngày24/09**, chưaphảituyênbốdựánđãkếtthúc. NhómtiếptụcđóngnhữngviệccònlạitheoC02/M03vàP05.

## 2. So sánh mục tiêu và hiện trạng

| Mục tiêu | Kết quả và giới hạn |
| --- | --- |
|Một bộ hồ sơ nhất quán|Đầu vàoABC vànguồnchung đãchuẩn hóa;registry,mapping,RTM/WBS/forecastđồngbộ |
|Phạmviđầyđủ|GiữCharter,invoice/seats/support/production vàcácthửnghiệmPP;demo5cảnh60giâyrõgiớihạn |
|Giờ/ngânsách|599hforecast;47.92triệucôngquyđổi;cashcap3.5triệu;actualvàapprovedbaselinechưađủ |
|Chấtlượngmã|Frontend79/79unit;backend18pass42failmôitrường;ISSvàTCchưachạycôngkhai |
|Chấpnhận/bàngiao|Bộdựthảo vàownerđãcó;chưachữkýnghiệmthu/chưađủQC |

## 3. Quyết định và lợi ích

Giữphạmvi,điềuchỉnhlịch/nguồnlựctheoCR-G-001;khôngép599về450/495. QuangAnhnhậnđầumốiđolợiíchtheoLI-01–05củaBMP;dữliệudoanhthu/kháchhàngthậtkhôngđượcgiảbằngmetricscountdemo. Vậnhànhvàđolợiíchsaubàngiaocầnngườitiếpnhận xácnhận.

## 4. Hồ sơ tiếp tục cập nhật

C02liệt kê bàn giao/tồnđọng;C03bài học;C04lời dẫn/demo. Khi actual vàkếtquảnghiệmthucóthật,cậpnhậtbáocáovớingàynguồnchínhxác,khôngxóatrạngtháiphiênbảncũ.
''')

write('05_Closing/02_Handover_and_Outstanding_Items_v1.0.md','C02 — Bàn giao và công việc còn lại','''
## 1. Nội dung bàn giao hiện tại

Mục lụcG0;quyếtđịnh/mã;ABC_01–05;P01–P13;E01–E05;M01–M06;C01–C04;EVINDEX vànguồncode. Markdownlànguồnsửa;9workbookởoutputs làbảnsổlàmviệc;official-docsgiữbảnpháthànhhiệncó. Chưatựđóngdấubộmớiđãnghiệmthu.

## 2. Tồn đọng có người xử lý

| ID / phạm vi | Cần làm tiếp và vì sao | Owner | Bằng chứng để đóng |
| --- | --- | --- | --- |
|ISS-G-001|Complete/TTL,mấtmạng phải đối soát; khônggiao file nhưthànhcôngnếuchưa xácnhận|Chiến+VQ|TC-A-20/36vàTC-Iquota;thửđườngghi filetrực tiếp |
|ISS-G-002|Snapshot/version/migration đểmẫucũkhôngbịđổitheocatalog|Chiến+QA|Projectcũ/mới,Retired/offline,TC-I-04 |
|ISS-G-003|Checkoutrequestdedup đểclicklặpkhôngcấpquyềnhailần|VQ|Testkeycũ/payloadkhác/concurrency;khácvớireplayevent |
|ISS-G-004|KhôiphụcDocker đểthửAPI/DBthật|VQ|BackendintegrationchạylạivàTC-IcóEV |
|ISS-G-005/CR-G-001|ETC/giờrảnh/actualvàlịch599h;tránhngâmsố450thànhthực tế|VQ,Chiếnđiềuphối|Worklognguồn,approvedbaseline,updateP10/P11/M04 |
|A4.2.7/5.2/5.3|Pause,unsupportedstartup,đúngngưỡnghiệunăng/bộnhớ/tiếngViệt/dễdùng|Chiến|Ca thửCharter/máy/người thửđúngđiềukiện |
|B4.3.3/5/6|Cổngthật/nhắchạn/hóađơn/seats|VQ|Testvàđầurasảnphẩm,khôngfakeProduction |
|C4.4.1–4|CRUD/assets/version,ticket,quotaadjustment,AdminUI,nguồnmetrics/LI|QA|TC-C,IF-CB,mặthình/APIvàaudit |
|6.1/6.4|Deploy/restore/rollbackvànghiệmthu|QA/Chiến|Biênbảnchạy,QCđạt,chữkýthật |
|Reviewthànhviên|VòngA→VQ,B→QA,C→Chiến;đóngcomment|Cảngóm|Phiếureview cóngày,file,mục,kếtquảkiểmlại |

Ngày mục tiêu hồsơ: DOC-03bằngchứng02/10,DOC-04dựthảobàngiao05/10,DOC-05review07/10. Ngàyhoànthànhtínhnăng/PPchưathểcamkếtkhichưaETC vànguồnlực;P10hiểnthịkịchbảnWPriêng.

## 3. Người tiếp nhận và điều kiện phát hành

Chiến giữ nguồnchung/tổngkết;VQgiữworkbookngânsách/lịch/actual;QAgiữchấtlượng/đónggói/vậnhành. BênnghiệmthutheoCharter chưa kýnhận. BảnDOCX/PPTXtrìnhbày làbướcxuấttừnguồn đãreview;khôngviếtmộtbộsốmới. G1bảnđọc liềnmạchMDcóthểdùngngaytrongcuộchọp, địnhdạngofficialsaukhichốttrạngthái.
''',owner='Quang Anh',reviewer='Chiến')

write('05_Closing/03_Lessons_Learned_Report_v1.0.md','C03 — Bài học kinh nghiệm có hành động','''
| Bài học / nguồn | Nguyên nhân | Thay đổi áp dụng | Ai duy trì |
| --- | --- | --- | --- |
|MãWBS3.x/7.x/8.xkhácnhau|Chia tàiliệutrướckhiregistry|MộtWBSsáunhánh,mappinggiữlịch sử;kiểmIDkhighép|Chiến |
|Ướclượngthiếuphầnthanh toánhóađơn/seats|Nhầm dữliệupolicyvớitínhnăngđầ yđủ|TáchPP,ướclượngdướilên599h,khôngép450|VQ |
|TC-Ađượctạo lạitrongC,audio/video ngoàiCharter|Moduleviếtđộclập thiếuinterface|TCownerduynhất;P03giữTC-I;scopephảicónguồn|QA |
|Unitxanhvẫnkhácđíchcomplete/quota|Testkếthừa hànhvihiệncó|Reviewexpectedkhichốthợpđồng,thửlạingoạilệTTL/mấtmạng|Chiến/VQ |
|Versioncatalogkhônggiữdiệnmạodựáncũ|Thiếusnapshottrongdữliệudựán|Schema/migration vàtestRetired/offline|Chiến/QA |
|CPM/giờngân sáchnhầmactual|Khôngcóworklog vàPPchưaphânrã|Táchforecast/ETC/actual;EVMthiếuđầuvàođểtrống|VQ |
|Benchmarkđượcdiễngiảiquámức|Sốđokhônggắnđúngmôitrường/phạmvi|EVINDEXghiđầuvào,máy,build,giớihạn;mainheapkhácWorker|QA |
|Hồsơcótênngườidễbịnhầmlàđãduyệt|Formkýđượcdùngnhưphâncông|Ghirõngườikiểmtrađượcgiao,chưachữký;M06đúngtrìnhtự|Chiến |

Các bài học lấy từ lần rà24/09 và nguồn đã có; không giả cuộc phỏng vấn hồi cứu. Sau cuộc họp bổ sung ý kiến thành viên và việc đã áp dụng, không chỉ một danh sách khẩu hiệu.
''',owner='Quang Anh',reviewer='Chiến')

write('05_Closing/04_Presentation_and_Demo_Script_v1.0.md','C04 — Dàn ý trình bày và kịch bản demo','''
## 1. Trình bày khoảng12phút

| Phần | Người nói | Nội dung và bằng chứng |
| --- | --- | --- |
|1phút:bối cảnh|Chiến|Video từchữ/ảnhcụcbộ;BC/BMP/Charterhiệncó;demo làtậpcon |
|2phút:tổchứchồsơ|Chiến|G0,câyfile,mỗi người5đầuvào;DEC,mãduynhất vàIF |
|2phút:kếhoạch|VQ|WBS32gói,599h,WP427/PP172;cash3.5triệu;CRđiềuchỉnhlịch/nguồnlực |
|2phút:chấtlượng|QA|REQ→TC→EV;79frontendunitpass;backend18pass42failmôitrường;TC-Icònlại |
|3phút:demo|Chiến,VQhỗtrợ|Luồngdướinếu đủmôi trường;khônggiảkếtquả |
|2phút:tồnđọng/bàngiao|QA|C02owner,bằngchứngđểđóng;chưanghiệmthutoànCharter |

## 2. Kịch bản demo có điều kiện

Chuẩnbị trước: server/DBhealth,TKFree mới,seed5mẫu,codec720p đạt;đầu vào5cảnh60giây;ghi môitrường. Mởeditor,nhậpchữtiếngViệt/ảnh,mộtmẫu,xemtrước,xuất720pwatermark. Nếu đủthờigian/thiếtlập:3lượtFree,lần4bịchặn;hủy1lượtđối chiếusốtrước/sau;AdminRetiredvàmởdựáncũ. Personal1080pchỉkhiprobeđạt vàfakeAdminnon-Production,gắnnhãnkhôngthutiềnthật.

Nếu Docker vẫnblocked: trìnhbàyUIcụcbộ,source/test vàlog EV-002;khôngnóidemoAPIthậtđãđạt. Nếudùngclip/lầnchạylịchsử,ghi thờiđiểm/môi trường. Không bấm thanh toánthật hoặcđổidữliệungười dùng đểdemo.

## 3. Câu hỏi cần trả lời rõ

599h làforecasttoànphạmvi,khônggiờcònphảilàm;đợt14ngàylàlịchhồsơ.79passchỉunit,khôngthaycoverage/TC-I. Fakekhácproduction. BảnClosinglàdựthảođợtchuẩnhóa;M06chưanghiệmthu. Mỗivướngmắc cóowner vàđiềukiệnđóng ởC02.
''',owner='Quang Anh',reviewer='Chiến')

print('Wrote A03–05, E01–04, M01/02/06, C01–04, evidence index/hash')
