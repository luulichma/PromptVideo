# Kế hoạch 07 Chất lượng phát hành và bằng chứng

## Mục tiêu

Biến bản tích hợp thành MVP có thể trình diễn lặp lại, triển khai được và tạo đủ số liệu thật để viết hồ sơ dự án chính thức.

## Checklist

- [ ] Chốt requirement-to-test map cho từng tiêu chí trong master plan. **Kiểm chứng:** không có yêu cầu MVP nào thiếu test hoặc lý do kiểm thủ công.
- [ ] Chạy unit, integration, contract và E2E; đặt quality gate cho build/lint/typecheck/test. **Kiểm chứng:** CI artifact chứa test result và coverage, không chỉ ảnh chụp màn hình.
- [ ] Chạy ma trận Tier 1/Tier 2 với project benchmark và project tiếng Việt. **Kiểm chứng:** ghi version OS/browser, kết quả Pass/Limited/Fail và issue liên kết.
- [ ] Kiểm accessibility, responsive tối thiểu cho laptop, keyboard flow và thông báo progress/error. **Kiểm chứng:** không còn lỗi nghiêm trọng trong axe/manual keyboard pass.
- [ ] Kiểm auth, authorization, rate limit, CSRF/cookie, dependency và secret scan. **Kiểm chứng:** không còn lỗ hổng Critical/High mở; admin API đều có negative test.
- [ ] Chạy benchmark API và export; kiểm memory leak qua ba vòng export. **Kiểm chứng:** số đo gắn cấu hình máy, commit SHA và file project input.
- [ ] Đóng gói production bằng container, HTTPS/reverse proxy và migration job; thử backup/restore PostgreSQL. **Kiểm chứng:** deploy mới và rollback phiên bản ứng dụng không làm mất dữ liệu.
- [ ] Tạo seed/demo script, user guide ngắn, troubleshooting và danh sách giới hạn MVP. **Kiểm chứng:** một người không tham gia phát triển chạy demo theo hướng dẫn.
- [ ] Tạo evidence pack cho hồ sơ: scope thực tế, kiến trúc, benchmark, test report, issue/risk, log giờ và deviation. **Kiểm chứng:** mọi tuyên bố “đã đạt” có file bằng chứng; phần chưa đạt ghi rõ backlog.
- [ ] Gắn tag MVP chỉ sau buổi nghiệm thu nội bộ. **Kiểm chứng:** release notes liệt kê tính năng, giới hạn, migration và hash container/image.

## Tiêu chí phát hành

- [ ] Toàn bộ Definition of Done trong `00-mvp-software-master-plan.md` đạt hoặc có waiver được ghi rõ chủ sở hữu, tác động và hạn xử lý.
- [ ] Không lấy dữ liệu dự báo làm kết quả thực đo; số liệu chính thức lấy từ evidence pack của đúng release commit.
- [ ] Bộ hồ sơ PM chỉ bắt đầu cập nhật trạng thái “đã thực hiện” sau khi release gate này hoàn tất.

