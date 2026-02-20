@echo off
title Zoom Meeting - Servidor local
echo.
echo Asegurando que Node este en el PATH...
set "PATH=%ProgramFiles%\nodejs;%ProgramFiles(x86)%\nodejs;%PATH%"
cd /d "%~dp0"

where npm >nul 2>&1
if errorlevel 1 (
    echo ERROR: No se encuentra npm. Cierra Cursor, abre una terminal NUEVA de Windows
    echo y ejecuta de nuevo este archivo, o instala Node.js desde https://nodejs.org
    pause
    exit /b 1
)

echo Instalando dependencias...
call npm install
if errorlevel 1 (
    echo Error al instalar. Revisa el mensaje de arriba.
    pause
    exit /b 1
)

echo.
echo Iniciando servidor...
echo Abre el navegador en:  http://localhost:8888
echo Para detener: Ctrl+C
echo.
call npx netlify dev

pause
