# Câu hỏi Web Developer

### Câu 1. Sự khác nhau giữa HTTP và HTTPS ?
<details>
<summary>Trả lời</summary>
- HTTP: HyperText Transfer Protocol: là một giao thức ứng dụng của bộ giao thức TCP/IP. Bộ giao thức này được đặt tên theo 2 giao thức chính là: TCP (Transmission Control Protocol – Giao thức điều khiển truyền vận) và IP (Internet Protocol – Giao thức Internet).
- HTTPS: HyperText Transfer Protocol Secure: HTTPS chính là giao thức HTTP được bổ sung thêm chứng chỉ SSL (Secure Sockets Layer – tầng ổ bảo mật) hoặc TLS (Transport Layer Security – bảo mật tầng truyền tải)

<strong>A.Cơ bản</strong>
1. URL trên trình duyệt hiển thị là http -> màu đỏ, https -> màu xanh
2. Cổng sử dụng: HTTP sử dụng cổng: 80, HTTPS sử dụng cổng: 443
3. HTTP không cần chứng chỉ SSL, với HTTPS bạn phải có chứng chỉ SSL và chứng chỉ này được ký bởi CA.
4. HTTPS mã hóa dữ liệu liên lạc khiến hacker không hiểu được thông tin
<img src="https://sites.google.com/site/dichvumaychu789/_/rsrc/1516173796150/khac-biet-giua-http-va-https/Kh%C3%A1c%20bi%E1%BB%87t%20gi%E1%BB%AFa%20HTTP%20v%C3%A0%20HTTPS-3.jpg" alt="" />

- Cả SSL và TLS đều sử dụng hệ thống PKI (Public Key Infrastructure -hạ tầng khóa công khai) không đối xứng. Hệ thống này sử dụng hai “khóa” để mã hóa thông tin liên lạc, “khóa công khai” (public key) và “khóa riêng” (private key). Bất cứ thứ gì được mã hóa bằng khóa công khai chỉ có thể được giải mã bởi khóa riêng và ngược lại. Các tiêu chuẩn này đảm bảo các nội dung sẽ được mã hóa trước khi truyền đi, và giải mã khi nhận. Điều này khiến hacker dù có chen ngang lấy được thông tin cũng không thể “hiểu” được thông tin đó.
</details>

### Câu 2. RESTful API là gì ? Kể tên các phương thức HTTP Request ?
<details>
<summary>Trả lời</summary>
<strong>1. Interface là gì</strong>
- Interface là cách các đối tượng giao tiếp với nhau: 3 dạng thường gặp: CLI, GUI, API
- CLI (Command Line Interface) : người dùng và chương trình giao tiếp với nhau bằng dòng lệnh
- GUI (Graphical User Interface) : người dùng và chương trình giao tiếp với nhau thông qua các nút bấm, hình ẩm
- API (Application Programming Interface) : các ứng dụng giao tiếp với nhau
Trong lập trình web, API thường truyền dữ liệu dạng JSON hay XML

<strong>2. REST là gì</strong>
- REST (REpresentational State Transfer) : là một kiểu kiến trúc để viết API, nó sử dụng HTTP để giao tiếp giữa các ứng dụng
- RESTful API: là một tiêu chuẩn, một trong những kiểu thiết kế API phổ biến

<strong>3. Các method HTTP Request</strong>
- GET
- POST : Tạo record mới
- PUT : Ghi đè record
- PATCH : Cập nhật một phần record
- DELETE
- HEAD : response chỉ trả về header, không có body
- CONNECT: kết nối tới SERVER theo URI
- OPTIONS
- TRACE
</details>

### Câu 3. Kể tên một vài HTTP Status Code ?
<details>
<summary>Trả lời</summary>

HTTP Status Code có 5 hạng mục bao gồm:
1. 1xx (100 – 199): Information responses / Phản hồi thông tin – Yêu cầu đã được chấp nhận và quá trình xử lý yêu cầu của bạn đang được tiếp tục.

2. 2xx (200 – 299): Successful responses / Phản hồi thành công – Yêu cầu của bạn đã được máy chủ tiếp nhận, hiểu và xử lý thành công.
- 200 OK : Phản hồi thành công cho những phương thức GET, PUT, PATCH, hoặc DELETE
- 201 Created : Yêu cầu POST hoặc PUT thành công
- 204 No Content : Request xóa thành công

3. 3xx (300 – 399): Redirects / Điều hướng – Phía client cần thực hiện hành động bổ sung để hoàn tất yêu cầu.

4. 4xx (400 – 499): Client errors / Lỗi phía client – Yêu cầu không thể hoàn tất hoặc yêu cầu chứa cú pháp không chính xác. 4xx sẽ hiện ra khi có lỗi từ phía client do không đưa ra yêu cầu hợp lệ.
- 400 Bad Request : Request không hợp lệ
- 401 Unauthorized : Request cần có tài khoản
- 403 Forbidden : Bị server từ chối (do tài khoản không được phân quyền)
- 404 Not Found : Không tìm thấy trang

5. 5xx (500 – 599): Server errors / Lỗi phía máy chủ – Máy chủ không thể hoàn thành yêu cầu được cho là hợp lệ. Khi 5xx xảy ra, bạn chỉ có thể đợi để bên hệ thống máy chủ xử lý xong.
- 500: lỗi chung chung
- 503: Máy chủ quá tải hoặc đang bảo trì
- 505: Không hỗ trợ giao thức HTTP
</details>

### Câu 4. Phân biệt Stateless và Stateful ?
<details>
<summary>Trả lời</summary>

| Stateless                                                            | Statefull                                              |
| -------------------------------------------------------------------- | ------------------------------------------------------ |
| Ví dụ: HTTP, UDP                                                     | Ví dụ: FTP, SSH, Telnet                                |
| Client và Server hoạt động độc lập, không lưu trữ thông tin của nhau | Client và Server hoạt động ràng buộc chặt chẽ với nhau |

</details>

### Câu 5. Phân biệt Cookie và Session ?
<details>
<summary>Trả lời</summary>

- Bình thường: Client gửi 1 request lên Server, Server trả về 1 response. Sau khi hoàn thành 1 connect, server sẽ "quên" mọi thứ về Client
- Cookie và Session sinh ra để giải quyết vấn đề: làm thế nào để server ghi nhớ thông tin của client

| Cookie                                          | Session (Server)                                     |
| ----------------------------------------------- | ---------------------------------------------------- |
| Mỗi request lên server đều được đính kém cookie | Mỗi phiên làm việc mới sẽ được cấp một SessionID mới |
| Lưu trữ trên trình duyệt                        | Lưu trữ tại 1 file trên server                       |
| Tồn tại đến khi expired                         | Tồn tại trên 1 phiên làm việc (đóng tab).            |
| Kích thước cookie tối đa là 4096 bytes          |                                                      |

</details>

### Câu 6. Phân biệt các Storage phía client: Cookie, Session Storage, Local Storage và IndexedDB ?
<details>
<summary>Trả lời</summary>
- Local Storage, Session Storage và Cookie sinh ra để lưu trữ dữ liệu trên trình duyệt

| Cookie                                                                                                                               | Session Storage                                           | Local Storage                              | IndexedDB                                        |
| ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------ |
| Client đọc hoặc viết bằng Javascript.Nếu set httpOnly thì JS sẽ không đọc được                                                       | Chỉ Client sử dụng được                                   | Chỉ Client sử dụng được                    |                                                  |
| Server đọc hoặc viết Cookie                                                                                                          | Client đọc hoặc viết bằng Javascript                      | Client đọc hoặc viết bằng Javascript       | Lưu dưới dạng NoSQL                              |
| Được set thời gian expires, cookie tồn tại đến khi expires . Có thể set mất đi sau khi đóng trình duyệt, nếu được set expires là N/A | Tồn tại trên 1 phiên làm việc (đóng tab) hoặc cố tình xóa | Tồn tại vĩnh viễn, chỉ mất khi cố tình xóa | Tồn tại vĩnh viễn                                |
| Kích thước cookie tối đa là 4096 bytes                                                                                               | Limited tùy thuộc vào bộ nhớ hệ thống                     | Kích thước tối đa là 5MB                   | Kích thước không giới hạn                        |
| Thường lưu thông tin đăng nhập. Cookie sẽ được tự động thêm vào XHR khi gửi request lên API                                          | Thường lưu thông tin đơn giản như giỏ hàng                | Thường lưu thông tin dài hạn, hoặc token   | Có thể lưu các dữ liệu lớn hơn như cả 1 database |

</details>
