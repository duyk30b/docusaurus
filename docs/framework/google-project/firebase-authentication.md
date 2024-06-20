# Firebase Authentication

1. Create FireBase Project
- Link: https://console.firebase.google.com/
- Use Firebase Authentication with: Sign-in method: Facebook, Google, Twitter
- Facebook example
```
App ID: 360546695603583 (includes facebook)
App secret: 5468bd1a4e6b3dfc278291fa60fba0c4 (includes facebook)
```

2. Create App Facebook
- Link: https://developers.facebook.com/apps/
- Create Policy from: https://www.freeprivacypolicy.com/ . ==> get link and file for "Baic Settings"
- Basic Settings (importants): 
```
App domains: duycode-77e9a.firebaseapp.com
Privacy Policy URL: https://www.freeprivacypolicy.com/live/e5f49c97-6f4d-40b9-95c7-bbdc284ba674
User data deletion: instructions URL: https://drive.google.com/file/d/1IhD88Bt5XXD5r-nnntLpX-G6ruhzA8Di/view?usp=share_link
Site URL: https://duycode-77e9a.web.app/
```
- App Mode: Development => Live

- Facebook Login Settings:
```
Embedded Browser OAuth Login: Yes
Valid OAuth Redirect URIs: https://duycode-77e9a.firebaseapp.com/__/auth/handler (includes firebase)
```

3. User remove registered app:
- Google: "https://myaccount.google.com/permissions"
- Facebook: "https://www.facebook.com/settings/?tab=applications"

4. SSL for localhost
- Because: Facebook App required use Https
- Create key and cert for OpenSSL
```
openssl req -days 3650 -x509 -newkey rsa:2048 -sha256 -nodes -keyout ./ssl/key.pem -out ./ssl/cert.pem -subj "/C=/ST=/L=/O=/OU=web/CN=medihome.vn"
```
- Stop port 443 in your computer
- Run docker: `docker compose up -d`

5. Config Nginx
```conf title="./conf.d/default.conf"
server {
    listen       443 ssl;
    server_name  localhost;

    ssl_certificate           /etc/nginx/ssl/cert.pem;
    ssl_certificate_key       /etc/nginx/ssl/key.pem;
    ssl_protocols             TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers               'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';

    location / {
        root   /etc/nginx/dist;
        index  index.html index.htm;
    }
}
```

6. Try access: `https://localhost` to test

```html title="index.html"
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Firebase</title>
    <script src="https://www.gstatic.com/firebasejs/ui/4.8.1/firebase-ui-auth.js"></script>
    <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.8.1/firebase-ui-auth.css" />
    <style>
        p {
            font-family: monospace;
            white-space: pre-wrap;
        }
    </style>
</head>

<body>
    <div id="app">
        <h3>Welcome to Firebase Login Test</h3>
        <div id="auth-info">Loader...</div>
        <div id="firebaseui-auth-container"></div>
    </div>

    <!-- Link setup firebase: https://firebase.google.com/docs/web/setup -->
    <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-auth.js"></script>

    <script>
        var firebaseConfig = {
            apiKey: "AIzaSyADcAyM-3Fb7ZJdJf86yLKFUnZmxx-QHmU",
            authDomain: "duycode-77e9a.firebaseapp.com",
        };
        firebase.initializeApp(firebaseConfig);
        let ui = new firebaseui.auth.AuthUI(firebase.auth());
    </script>

    <script>
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // Just Login
                document.getElementById('auth-info').innerHTML = `
                            <img src="${user.providerData[0].photoURL}"></img>
                            <div>Xin chào: ${user.providerData[0].displayName}</div>
                            <div>UID: ${user.uid}</div>
                            <div>Social: ${user.providerData[0].providerId}</div>
                            <div><button onclick="signout()">Sign out</button></div>
                            <p>${JSON.stringify(user, null, 4)}</p>
                        `;
            } else {
                // Not Login
                document.getElementById('auth-info').innerHTML = ""
                ui.start('#firebaseui-auth-container', uiConfig);
            }
        });

        // 2. Login UI
        let uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    return false;
                },
                uiShown: function () {
                    // 2.1. Finish load Firebase CSS
                    document.getElementById('loader').style.display = 'none';
                }
            },
            // 2.2. Signin page: popup
            signInFlow: 'popup',
            signInOptions: [
                {
                    provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                    recaptchaParameters: {
                        type: 'image',
                        size: 'normal',
                        badge: 'bottomleft'
                    },
                    defaultCountry: 'VN',
                },
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            ],
            tosUrl: '/link-terms-of-service',
            privacyPolicyUrl: '/link-privacy-policy'
        };

        let signout = () => {
            firebase.auth().signOut()
                .then(() => {
                    console.log("You are sign out");
                })
                .catch((error) => {
                    console.log("SignOut faild");
                });
        }
    </script>
</body>

</html>
```

