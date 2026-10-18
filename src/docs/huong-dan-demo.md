# Hướng dẫn chạy demo PromptVideo

Demo đi theo câu chuyện chị Hà trong ghi chú "Khách hàng dùng PromptVideo như thế nào" (18/10/2026): chọn mẫu, điền 5 cảnh, xem trước, xuất MP4 ngay trên máy.

Thanh toán trong demo là **giả lập**, không thu tiền thật.

## 1. Chuẩn bị (làm một lần)

Cần Docker Desktop đang chạy, .NET 10, Node.js 24. Mở PowerShell ở thư mục `src`:

```powershell
Copy-Item .env.example .env
docker compose up -d postgres
dotnet tool restore
npm ci --prefix frontend
```

## 2. Chạy

Mở hai cửa sổ PowerShell ở thư mục `src`.

Cửa sổ 1, máy chủ (tự tạo bảng và nạp 3 bậc giá, 5 mẫu):

```powershell
dotnet run --project backend/PromptVideo.Api -- --Database:ApplyMigrationsOnStartup=true
```

Cửa sổ 2, giao diện:

```powershell
npm run dev --prefix frontend
```

Mở `http://localhost:5173` bằng Chrome hoặc Edge bản mới.

## 3. Kịch bản demo (khoảng 5 phút)

Chuẩn bị sẵn 5 câu chữ và 3 tấm ảnh sản phẩm trên máy.

1. **Chọn mẫu.** Trang đầu hiện 5 mẫu kèm ảnh xem trước. Chọn "Tươi sáng", đặt tên video, bấm "Tạo video". Chưa cần đăng nhập.
2. **Điền từng cảnh.** Dự án mới có sẵn 5 cảnh: Mở đầu, 3 cảnh Chữ kèm ảnh, Kết thúc. Bấm từng cảnh ở cột trái, gõ chữ, bấm "Chọn ảnh từ máy". Ô nào còn thiếu sẽ hiện trong khung "Trước khi xuất video, còn cần".
3. **Cho thấy mẫu lo phần trình bày.** Gõ một câu thật dài: chữ tự co nhỏ; dài quá nữa thì ô báo đỏ và nút xuất bị khoá. Rút gọn lại để tiếp tục.
4. **Xem trước và chỉnh.** Bấm "Phát". Đổi thời lượng cảnh 3 thành 15 giây. Bấm "Đổi mẫu", chọn "Tối giản": chữ và ảnh giữ nguyên, chỉ đổi phong cách.
5. **Xuất video.** Bấm "Xuất video MP4". Lúc này trang mới hỏi đăng nhập: bấm "Tạo tài khoản mới" (mật khẩu từ 10 ký tự). Khung xuất hiện "Bản này có watermark, tối đa 720p. Tháng này còn 3/3 lượt". Bấm xuất, thử "Tạm dừng" rồi "Tiếp tục". File MP4 tự tải về máy.
6. **Lưu file dự án.** Bấm "Lưu file dự án" (một file, có kèm ảnh). Ở trang đầu bấm "Mở file dự án" để mở lại, sửa một ô chữ và xuất lại.
7. **Hết lượt miễn phí.** Xuất thêm 2 lần: lần thứ 4 bị chặn kèm thông báo và đường dẫn "Xem các gói".
8. **Nâng cấp.** Ở trang "Tài khoản và gói", bấm "Nâng cấp" gói Cá nhân (giả lập). Quay lại xuất: chọn được 1080p, không watermark.

## 4. Những điều cần nói rõ khi demo

- Video xuất ra **không có tiếng**; bản 1.0 chưa có nhạc và chưa có khung dọc.
- Chỉ cần mạng lúc mở trang và lúc bấm xuất. Soạn và xem trước không cần mạng.
- Chữ, ảnh và file dự án không gửi lên máy chủ; máy chủ chỉ trả lời "được xuất hay không".
- Khách chỉ sửa chữ, ảnh, kiểu cảnh, thời lượng, thứ tự và số cảnh. Vị trí, font, màu, hiệu ứng do mẫu quyết định.

## 5. Kiểm tra tự động

```powershell
cd frontend
npm run check
npx playwright test
cd ..
dotnet test backend/PromptVideo.Api.Tests
```

Kiểm thử máy chủ cần Docker đang chạy.
