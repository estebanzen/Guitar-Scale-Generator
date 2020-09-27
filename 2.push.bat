@echo off

REM git fetch
REM git pull

@echo off
git add .

set /p Input1=Ingrese el titulo del commit: 
set /p Input2=Ingrese la descripcion del commit: 
git commit -m "%Input1%" -m "%Input2%" 
git push