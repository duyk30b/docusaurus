# CentOS cơ bản

```
// SSH vào OS, password: abc123..
ssh root@103.124.93.214

// Check hệ điều hành
hostnamectl

// Check IP Centos
hostname -i
ifconfig
ip a
ip addr
curl ifconfig.co
curl ifconfig.me

// Đổi mật khẩu root
passwd

// Kiểm tra tình trạng máy
top
// Kiểm tra dung lượng ổ đĩa
df -h
du -h --max-depth=1

// Kiểm tra các chương trình đã cài trên CentOs
yum list installed

// Kiểm tra các service
sudo systemctl
// Khi jenkins start bị limit
sudo systemctl reset-failed jenkins.service

// Check thư mục chạy câu lệnh
which npm
which node

// Kiểm tra các cổng đang mở
sudo netstat -tulpn | grep LISTEN
-t : All TCP ports
-u : All UDP ports
-l : Display listening server sockets
-p : Show the PID and name of the program to which each socket belongs
-n : Don’t resolve names
```

## 2. Cài đặt Docker

<a href="https://docs.docker.com/engine/install/centos/" rel="noopener" target="_blank">https://docs.docker.com/engine/install/centos/</a>
