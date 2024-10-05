# Windows Setup

## I. Windows và Office bản gốc Microsoft
### 1. Link tổng hợp: 
- Link 1: <a href="https://docs.google.com/spreadsheets/d/1o5dmOw8jBCVGxFmlMOsKgoIKULMY7tk-TCSz67IJMc4/pubhtml" target="_blank" rel="noopener noreferrer">https://docs.google.com/spreadsheets/d/1o5dmOw8jBCVGxFmlMOsKgoIKULMY7tk-TCSz67IJMc4/pubhtml</a>
- Link 2: <a href="https://docs.google.com/spreadsheets/d/14-D4tIlFp9APP0OOvQBRXvfLOYC447UygywenX5LXfo/edit#gid=960687212" rel="noopener" target="_blank">https://docs.google.com/spreadsheets/d/14-D4tIlFp9APP0OOvQBRXvfLOYC447UygywenX5LXfo/edit#gid=960687212</a>

### 2. SHA1 Microsoft
- Win 7 Sp1x64 Professional: SHA1: 0BCFC54019EA175B1EE51F6D2B207A3D14DD2B58 
- Win 7 Sp1x32 Professional: SHA1: D89937DF3A9BC2EC1A1486195FD308CD3DADE928

### 3. Office
- Office_ProPlus_2013_SP1x32 (Bản VLSC): d4d7ffd3dffef0a3c08748e400e0890a7a730888 - <a href="https://drive.google.com/file/d/1SpuzzZSFvtbVWOX6qqofHWoOi4ngDC8_/view" rel="noopener" target="_blank">https://drive.google.com/file/d/1SpuzzZSFvtbVWOX6qqofHWoOi4ngDC8_/view</a>
- Office_ProPlus_2013_SP1x64 (Bản VLSC): ab2c2d525d63a72e0a2dc66efdcea0f824f02cff - <a href="https://drive.google.com/file/d/1KSsy1l2hkDIzEvOYWZapjZILQ_XY0Dbe/view" rel="noopener" target="_blank">https://drive.google.com/file/d/1KSsy1l2hkDIzEvOYWZapjZILQ_XY0Dbe/view</a>
- Office 2019 Pro Plus 64bit Retail: <a href="https://officecdn.microsoft.com/pr/492350f6-3a01-4f97-b9c0-c7c6ddf67d60/Office/Data/SetupProPlus2019Retail.x64.en-us.exe" rel="noopener" target="_blank">https://officecdn.microsoft.com/pr/492350f6-3a01-4f97-b9c0-c7c6ddf67d60/Office/Data/SetupProPlus2019Retail.x64.en-us.exe</a>

### 4. Check key Online
- <a href="https://quanghuy.it/check-key" target="_blank" rel="noopener noreferrer">https://quanghuy.it/check-key</a>
- <a href="http://khoatoantin.com/pidms" target="_blank" rel="noopener noreferrer">http://khoatoantin.com/pidms</a>
- <a href="https://dbmer.com/checkkey/">https://dbmer.com/checkkey/</a>

### 5. Get Confirmation ID:
- <a href="http://khoatoantin.com/cidms" target="_blank" rel="noopener noreferrer">http://khoatoantin.com/cidms</a> - User: trogiup24h- Pass: PHO
- <a href="https://getcid.top/" target="_blank" rel="noopener noreferrer">https://getcid.top/</a>
- <a href="https://0xc004c008.com/">https://0xc004c008.com/</a>
- <a href="https://getcid.info/">https://getcid.info/</a>

## II. Cài Win và Ghost
### 1. Tạo USB cài Win
- Dùng phần mềm Rufus: <a href="https://rufus.akeo.ie/?locale=vi_VN" target="_blank" rel="noopener noreferrer">https://rufus.akeo.ie/?locale=vi_VN</a>

### 2. Bolus cần biết
#### 2.1. Hiểu thế nào về "BIOS" và "UEFI", "MBR" và "GPT", "Legacy"
<img src="https://www.passmoz.com/images/others/firmware-workflow.jpg" alt="BIOS vs UEFI" />

- Có thể hiểu đơn giản: "UEFI" là chẩn mới đang dần thay thế cho chuẩn cũ "BIOS", từ "Legacy" - nghĩa là BIOS
- UEFI chỉ hỗ trợ cho các phiên bản Windows 64-bit
- Nếu sử dụng chuẩn "UEFI" &gt; cần định dạng ổ cứng là "GPT"
- Nếu sử dụng chuẩn "Legacy" &gt; cần định dạng ổ cứng là "MBR"

- **. Kiểm tra BIOS Mode
  + Vào: Run\ msinfo32
  + Kéo xuống phần BIOS Mode: "UEFI" hoặc "Legacy"
  + Nếu máy tính có hỗ trợ chuẩn "UEFI", có thể vào BIOS để chuyển qua lại giữa 2 chuẩn này

- **. Kiểm tra định dạng ổ cứng
  + Vào: Run\ diskpart -&gt; đánh lệnh: list disk
  + Tại đây máy tính sẽ được hiện thị tất cả các ổ cứng
  + Tại cột “Gpt”: nếu có dấu * --&gt; chuẩn "GPT", còn nếu không có --&gt; chuẩn "MBR"


## III. Active Windows và Office
--- Tham khảo thêm: <a href="https://vn-z.vn/threads/tong-hop-key-windows-va-office.10945/" rel="noopener" target="_blank">https://vn-z.vn/threads/tong-hop-key-windows-va-office.10945/</a>

### 1. Windows 10
- Khởi động Cmd với Quyền Admin
- **Bước 1**: Kiểm tra xem Windows đã Active hay chưa theo các lệnh sau:
```
slmgr.vbs /dli  ##Hiển thị thông tin giấy phép cơ bản.
slmgr.vbs /dlv  ##Hiển thị thông tin giấy phép đầy đủ.
slmgr.vbs /xpr  ##Hiển thị ngày hết hạn của giấy phép.
```

- **Bước 2:** Đưa Windows về trạng thái chưa nhập Key nào bằng các lệnh:
```
slmgr.vbs /upk ##Gỡ bỏ key
slmgr.vbs /cpky ##Gỡ key khỏi Registry 
slmgr.vbs /rearm ##Reset kích hoạt
```
Sau khi thực hiện 3 lệnh trên bạn phải khởi động lại máy tính

- **Bước 3**: Điền Key bằng lệnh:
```
slmgr.vbs -ipk XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
```
- **Bước 4:** Lấy ID2 Windows nhanh theo lệnh sau
```
slmgr.vbs /dti>step2.txt 
start step2.txt
```

- **Bước 5:** Lấy ID3 theo hướng dẫn ở đây: http://khoatoantin.com/cidms - User: trogiup24h- Pass: PHO https://getcid.top/ 
- **Bước 6:** Điền ID3 (không dấu gạch ngang) theo lệnh:
```
slmgr.vbs /atp ID3
```

- **Bước 7:** Kích hoạt Windows theo lệnh sau 
```
slmgr.vbs -ato 
```
- **Bolus:** Một số lệnh CMD khác của Windows
```
slmgr.vbs /rilc - Reset lại license được lưu trong hệ thống 
slmgr.vbs /skms (Đặt máy chủ KMS) 
slmgr.vbs /ckms - Xoá máy chủ KMS
```
### 2. Office
- **Bước 1:** Trỏ vào folder của Office (tương ứng như sau: 14 - Office 2010, 15 - Office 2013, 16 - Office 2016,2019):
```
set ver=16
if exist "%ProgramFiles%\Microsoft Office\Office%ver%\ospp.vbs" cd /d "%ProgramFiles%\Microsoft Office\Office%ver%"
if exist "%ProgramFiles(x86)%\Microsoft Office\Office%ver%\ospp.vbs" cd /d "%ProgramFiles(x86)%\Microsoft Office\Office%ver%"
```

- **Bước 2:** Add Key mới
```
cscript ospp.vbs /inpkey:<Key của bạn>
```

- **Bước 3:** Convert từ bản Retail sang Volume
```
for /f %i in ('dir /b ..\root\Licenses16\ProPlus2019VL_MAK*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%i"
```

- **Bước 4:** Lấy step 2:
```
cscript OSPP.VBS /dinstid>step2.txt start step2.txt
start step2.txt
```

- **Bước 5:** Điền step 3:
```
cscript OSPP.VBS /actcid:<8_nhóm_CID_viết_liền>
```

- **Bước 6:** Kiểm tra tình trạng bản quyền (key cũ đã điền - chỉ hiện 5 ký tự cuối của tất cả các key đã up)
```
cscript ospp.vbs /dstatus (Hiện thông tin kích hoạt với key hiện tại)
cscript ospp.vbs /dstatusall (Hiện thông tin kích hoạt đầy đủ)
```

- **Bolus:** Kích hoạt nhanh Office 2019 Pro Plus 64bit Retail:
```
cscript slmgr.vbs /upk 52c4d79f-6e1a-45b7-b479-36b666e0a2f8
cscript slmgr.vbs /upk 5f472f1e-eb0a-4170-98e2-fb9e7f6ff535
cscript slmgr.vbs /upk a3072b8f-adcc-4e75-8d 62-fdeb9 bdfae57
if exist "%ProgramFiles%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles%\Microsoft Office\Office16"
if exist "%ProgramFiles(x86)%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles(x86)%\Microsoft Office\Office16"
cscript ospp.vbs /remhst
cscript ospp.vbs /ckms-domain
for /f %i in ('dir /b ..\root\Licenses16\ProPlus2019VL_MAK*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%i"
cscript //nologo ospp.vbs /inpkey:GP3YN-RPX2T-FVYT8-4TPFY-7MKG3
cscript //nologo ospp.vbs /act
cscript //nologo ospp.vbs /dinstid > step2.txt
start step2.txt
cls
cscript ospp.vbs /actcid:
```
- Lấy step3 như ở trên rồi điền nốt vào -> Finish

## IV. Driver
### 1. Driver HP EliteBook 8570p - Windows 7 x64bit
Link Full: <a href="https://support.hp.com/us-en/drivers/selfservice/hp-elitebook-8570p-notebook-pc/5212912" target="_blank" rel="noopener noreferrer">https://support.hp.com/us-en/drivers/selfservice/hp-elitebook-8570p-notebook-pc/5212912</a>
- LAN: <a href="https://ftp.hp.com/pub/softpaq/sp60501-61000/sp60775.exe" target="_blank" rel="noopener noreferrer">https://ftp.hp.com/pub/softpaq/sp60501-61000/sp60775.exe</a>
- Wifi: <a href="https://ftp.hp.com/pub/softpaq/sp58501-59000/sp58782.exe" target="_blank" rel="noopener noreferrer">https://ftp.hp.com/pub/softpaq/sp58501-59000/sp58782.exe</a>
- Graphics: <a href="https://ftp.hp.com/pub/softpaq/sp57001-57500/sp57174.exe" target="_blank" rel="noopener noreferrer">https://ftp.hp.com/pub/softpaq/sp57001-57500/sp57174.exe</a>
- Audio: <a href="https://ftp.hp.com/pub/softpaq/sp60001-60500/sp60317.exe" target="_blank" rel="noopener noreferrer">https://ftp.hp.com/pub/softpaq/sp60001-60500/sp60317.exe</a>
- Toupad: <a href="https://ftp.hp.com/pub/softpaq/sp63501-64000/sp63779.exe" target="_blank" rel="noopener noreferrer">https://ftp.hp.com/pub/softpaq/sp63501-64000/sp63779.exe</a>
- Bluetooth (64bit): <a href="https://ftp.hp.com/pub/softpaq/sp66001-66500/sp66402.exe" target="_blank" rel="noopener noreferrer">https://ftp.hp.com/pub/softpaq/sp66001-66500/sp66402.exe</a>
- Canon Printer: <a href="https://vn.canon/vi/support/0100278201/9" target="_blank" rel="noopener noreferrer">https://vn.canon/vi/support/0100278201/9</a>

### 2. Driver HP Probook 6460b - Windows 7
Link Full: <a href="https://support.hp.com/us-en/drivers/selfservice/hp-probook-6460b-notebook-pc/5045594" rel="noopener" target="_blank">https://support.hp.com/us-en/drivers/selfservice/hp-probook-6460b-notebook-pc/5045594</a>
- LAN - x32x64: <a href="https://ftp.hp.com/pub/softpaq/sp60501-61000/sp60775.exe" target="_blank" rel="noopener noreferrer">https://ftp.hp.com/pub/softpaq/sp60501-61000/sp60775.exe</a>
- Wifi - x32x64: <a href="https://ftp.hp.com/pub/softpaq/sp58501-59000/sp58782.exe" target="_blank" rel="noopener noreferrer">https://ftp.hp.com/pub/softpaq/sp58501-59000/sp58782.exe</a>
- Graphics x32: <a href="https://ftp.hp.com/pub/softpaq/sp64501-65000/sp64729.exe" rel="noopener" target="_blank">https://ftp.hp.com/pub/softpaq/sp64501-65000/sp64729.exe</a>
- Graphics x64: <a href="https://ftp.hp.com/pub/softpaq/sp64501-65000/sp64730.exe" rel="noopener" target="_blank">https://ftp.hp.com/pub/softpaq/sp64501-65000/sp64730.exe</a>

## V. Application
### 1. Winrar
- Download: <a href="http://www.rarlab.com/download.htm" target="_blank" rel="noopener noreferrer">http://www.rarlab.com/download.htm</a>
- Key: Copy đoạn code sau lưu thành rarreg.key -&gt; ném trực tiếp vào 1 file nén bất kỳ là có thể reg key
```
RAR registration data
vietdl.net
Unlimited Company License
UID=27996101676cd47a3408
64122122503408785285aa25406547e8b2de90024a7ef9597f9509
f8b02c2d41b5d476c3c160fce6cb5ffde62890079861be57638717
7131ced835ed65cc743d9777f2ea71a8e32c7e593cf66794343565
b41bcf56929486b8bcdac33d50ecf7739960f8d36f2d4a1b6c1140
7f4c63970973c98d63fcf230483f49411bae352864e73010b9b19b
90f0f547020c9652779e231a7964866eca24577c7ddeab9360b4e9
04efebd231ed54defe7296b7f8e4dc67fcd9cec098ce1236753878
```

### 2. StarUML
<a href="http://staruml.io/">http://staruml.io/</a>