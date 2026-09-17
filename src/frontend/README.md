# PromptVideo feasibility spike

Trang probe cho Plan 01 kiểm tra trực tiếp trên browser:

- WebCodecs H.264 720p/1080p và AAC-LC, OffscreenCanvas, OPFS, File System Access.
- `ProjectDocumentV1`/template schema bằng Zod và timeline 5 cảnh, 60 giây, 30 fps.
- Canvas 2D renderer dùng font Noto Sans được bundle và ảnh benchmark cục bộ.
- MP4 H.264 qua Mediabunny, ghi tuần tự bằng Buffer, OPFS hoặc file handle.
- Đọc lại MP4 để kiểm tra duration, số frame, độ phân giải và frame đen đầu/cuối.

## Chạy

```powershell
npm.cmd install
npm.cmd run dev
```

Mở URL Vite in ra và dùng Chrome/Edge hiện hành. `localhost` được tính là secure context cho WebCodecs/OPFS.

## Kiểm tra tự động

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd test
npm.cmd run build
npm.cmd run test:e2e
```

Kết quả benchmark thực tế được tải từ nút **Tải báo cáo JSON** và điền vào `docs/benchmark-results.md`. Không suy diễn peak memory nếu browser không cung cấp `performance.memory`.
