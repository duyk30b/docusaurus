# Google Apis

### Link
- Google console:  **[https://console.cloud.google.com/welcome](https://console.cloud.google.com/welcome)**
- Google doc:  **[https://developers.google.com/drive/api/quickstart/nodejs](https://developers.google.com/drive/api/quickstart/nodejs)**
- OAuthPlayground: **[https://developers.google.com/oauthplayground](https://developers.google.com/oauthplayground)**

### Config
1. Tạo project
- Create Project / Select Project
- Menu APIs & Services 

2. Enable API
- `Enable APIs & Services` --> `+ ENABLE APIs AND SERVICES` --> `Google Drive API` --> `ENABLE`
- `Credentials` --> `+ ENABLE APIs AND SERVICES` --> `OAuth client ID` --> `CONFIGURE CONSENT SCREEN`
- `OAuth consent screen` --> `External` --> `Create`

3. Tạo `OAuth consent screen`
- Đăng ký
 -- App name: điền tên bất kỳ
 -- Support email:
 -- Developer email:
 -> `Save and continue`
- Scopes: `Save and continue`
- Test users: `ADD USERS` thêm email giống bên trên -> `Save and continue`

4. Quay lại `Credentials`
- `CREATE CREDENTIALS` --> `OAuth client ID`
- Application type: chọn `Web application`
- Authorized redirect URIS: `ADD URI`: **[https://developers.google.com/oauthplayground](https://developers.google.com/oauthplayground)**.
- `CREATE`
- Bây giờ đã có `CLIENT ID` và `CLIENT_SECRET`

5. Lấy RefreshToken
- Vào Link OAuthPlayground
- Chọn `Driver API v3` --> COPY link `https://www.googleapis.com/auth/drive`
- Config: Tick `Use your own OAuth credentials` --> Điền `OAuth Client ID` và `OAuth Client Secret`
- Click `Authorize APIs` --> `OK` hết khi có cảnh báo
- `Exchange authorization code for tokens` 
--> Đã lấy được `REFRESH TOKEN`