@echo off
rem Bat giao dien PromptVideo va mo trinh duyet (http://localhost:5173).
rem Chay chay-may-chu.bat truoc de dang nhap va xuat video duoc.
rem (Khong dau vi cmd doc sai chu co dau trong file .bat.)
cd /d "%~dp0"

if not exist frontend\node_modules (
  echo Lan dau chay: dang cai thu vien, mat vai phut...
  call npm ci --prefix frontend
  if errorlevel 1 (
    echo.
    echo Chua cai duoc thu vien. Hay kiem tra Node.js va mang roi chay lai.
    pause
    exit /b 1
  )
)

echo Dang bat giao dien. Dong cua so nay de tat.
call npm run dev --prefix frontend -- --open
pause
