# Các bộ giao thức mạng

Mô hình OSI có 7 tầng
<img src="https://images.viblo.asia/1596a7ea-09cc-4a36-82ac-48768e0cb24f.png" alt="https://images.viblo.asia/1596a7ea-09cc-4a36-82ac-48768e0cb24f.png" />
Bộ giao thức TCP/IP có 4 tầng giao thức
1. Tầng vật lý: bao gồm các thiết bị phần cứng giao tiếp với môi trường mạng: Ethernet,...
2. Tầng mạng: đóng gói dữ liệu kèm theo chứa dữ liệu của địa chỉ nguồn và địa chỉ đích: IP
3. Tầng giao thức: có nhiệm vụ trao đổi dữ liệu, xác định trạng thái kết nối khi vận chuyển. Có 2 giao thức chính: TCP (đảm báo gói tin và đúng thứ tự) và UDP (koc cần đảm bảo gói tin mà cần tốc độ như truyền video)
4. Tầng ứng dụng: HTTP, FTP, SSH ... là các giao thức ứng dụng của bộ giao thức TCP/IP. Bộ giao thức này có 2 giao thức chính là giao thức TCP và giao thức IP

Các thành phần HTTP:
1 HTTP Request
<img src="https://images.viblo.asia/87ee0c1c-abac-4d08-973e-e8bae533cbf0.png" alt="" />
- Request-line: Phương thức + URI + phiên bản HTTP
- Header
- Body
2. HTTP Response
<img src="https://images.viblo.asia/8414d386-f4e5-4b9c-aded-d3b379dc7c20.png" alt="" />
- Status-line: phiên bản HTTP + Mã trạng thái + Trạng thái
- Header
- Body


