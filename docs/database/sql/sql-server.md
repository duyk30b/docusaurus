# SQL SERVER
Ngôn ngữ truy vấn SQL có các thành phần chính: 
- Ngôn ngữ Thao tác Dữ liệu - Data Manipulation Language (DML)
- Ngôn ngữ Định nghĩa Dữ liệu - Data Definition Language (DDL)
- Ngôn ngữ Kiểm soát Dữ liệu - Data Control Language (DCL)
- Data Query Language (DQL)

<img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99923F3B5B05D4712E" alt="" />


Công ty CitySoftware cần lập 1 Databse bao gồm 4 bảng để quản lý dữ liệu bao gồm: Employee, GroupWork, GroupDetail, Project.
Trong đó: 1 Employee có thể tham gia nhiều GroupWork, 1 GroupWork có nhiều Employee và 1 Project bao gồm nhiều GroupWork
<img src="https://drive.google.com/thumbnail?id=1dI_RDc6qvyMSAxtdx0tQLSckzNY9D0c4&amp;sz=w800"/>

## 1. Tạo bảng: CREATE TABLE
```sql
CREATE TABLE Project(
	ProjectID int IDENTITY(1,1) PRIMARY KEY,
	ProjectName Nvarchar(30),
	StartDate date,
	EndDate date,
	Period int,
	Cost money
);

CREATE TABLE GroupWork(
	GroupID int IDENTITY(1,1) PRIMARY KEY,
	GroupName varchar(30),
	LeaderID int,
	ProjectID int NOT NULL FOREIGN KEY REFERENCES Project(ProjectID)
);

CREATE TABLE Employee(
	EmployeeID int IDENTITY(1,1) PRIMARY KEY,
	Name varchar(100),
	Tel char(10) UNIQUE,
	Email varchar(30),
	Birthday date,
	CONSTRAINT check_birthday CHECK (Birthday < GETDATE())
);

CREATE TABLE GroupDetail(
	GroupID int NOT NULL FOREIGN KEY REFERENCES GroupWork(GroupID),
	EmployeeID int NOT NULL FOREIGN KEY REFERENCES Employee(EmployeeID),
	Statusemployee Nvarchar(100)
);
```

## 2. Thêm dữ liệu cho bảng: INSERT TO
```sql
INSERT INTO Project(ProjectName,StartDate,EndDate,Period,Cost)
	VALUES (N'Xây cầu vượt','2020-01-02','2020-12-15',12,1000);
INSERT INTO Project(ProjectName,StartDate,EndDate,Period,Cost)
	VALUES (N'Xây chung cư','2015-05-10','2018-09-20',20,800);
INSERT INTO Project
	VALUES (N'Chính phủ điện tử','2018-02-15','2022-09-15',7,150150);

INSERT INTO GroupWork(GroupName,LeaderID,ProjectID)
	VALUES ('Nhom ONE',1,1);
INSERT INTO GroupWork
	VALUES ('Nhom VIPPRO',3,2);
INSERT INTO GroupWork
	VALUES ('Nhom Nhanuoc',4,3);

INSERT INTO Employee(Name,Tel,Email)
	VALUES ('Nguyen van A','0123456789','nguyenvana@gmail.com');
INSERT INTO Employee(Name,Tel,Email)
	VALUES ('Tran thi B','0987111222','tranthib@gmail.com');
INSERT INTO Employee(Name,Tel,Email)
	VALUES ('Do Hong C','0123412345','dohongc@gmail.com');
INSERT INTO Employee(Name,Tel,Email)
	VALUES ('Ngo Van D','0986021190','duyhn90a@gmail.com');
INSERT INTO Employee(Name,Tel,Email)
	VALUES ('Bui Thi Tr','0968100994','buitrang@gmail.com');

INSERT INTO GroupDetail(GroupID,EmployeeID,Statusemployee)
	VALUES (1,1,N'đã làm');
INSERT INTO GroupDetail
	VALUES (1,3,N'đang làm');
INSERT INTO GroupDetail
	VALUES (2,2,N'sắp làm');
INSERT INTO GroupDetail
	VALUES (2,4,N'đang làm');
INSERT INTO GroupDetail
	VALUES (2,3,N'đang làm');
INSERT INTO GroupDetail
	VALUES (3,4,N'đang làm');
INSERT INTO GroupDetail
	VALUES (3,5,N'sắp làm');
```

## 3. Thao tác định nghĩa dữ liệu - DDL Command
```sql
-- 3.a. Sửa cột, thêm cột, xóa cột ( phải xóa constraint trước)
ALTER TABLE EMployee ALTER COLUMN Name Nvarchar(50);
ALTER TABLE Employee ADD IdentityCard int NOT NULL DEFAULT(10000);
ALTER TABLE Employee DROP CONSTRAINT check_birthday;
ALTER TABLE Employee DROP COLUMN Birthday;

-- 3.b. Ngày hoàn thành dự án phải sau ngày bắt đầu dự án
ALTER TABLE Project ADD CHECK (EndDate > StartDate);

-- 3.c. Trường trạng thái làm việc chỉ nhận 1 trong 3 trạng thái: inprogress, pending, done
ALTER TABLE GroupDetail ADD CHECK (GroupDetail.Statusemployee IN (N'đã làm',N'đang làm',N'sắp làm'));

-- 3.d. Điện thoại chỉ được nhập số và bắt đầu bằng số 0, Email có định dạng @.
ALTER TABLE Employee ADD CONSTRAINT check_tel CHECK (Tel LIKE '0%' AND Tel NOT LIKE '%[^0-9]%');
ALTER TABLE Employee ADD CHECK(Email LIKE '%_@_%._%');

-- 3.e. Trưởng nhóm (LeaderID) phải là nhân viên (EmployeeID)
IF OBJECT_ID('dbo.Check_LeaderID') IS NOT NULL
	DROP FUNCTION Check_LeaderID; 
GO
CREATE FUNCTION Check_LeaderID (@ckLeaderID int)
RETURNS int AS
BEGIN
	IF EXISTS (SELECT EmployeeID From Employee WHERE EmployeeID = @ckLeaderID)
        RETURN 1
	RETURN 0
END;
GO
ALTER TABLE GroupWork ADD CONSTRAINT check_constraint_LeaderID CHECK (dbo.Check_LeaderID(LeaderID) = 1);
```

## 4. Thao tác dữ liệu - DML Command
```sql
-- 4.a. Xóa bảng GroupDetail và xóa Employee 'Ngo Van D'
DELETE FROM GroupDetail;
DELETE FROM Employee WHERE Name LIKE 'Ngo Van D';
-- 4.b. Update EmployeeID = 5 với Name = 'Bui Thi Trang', Email = 'drtrang@gmail.com'
UPDATE Employee
SET Name = 'Bui Thi Trang', Email = 'drtrang@gmail.com'
WHERE EmployeeID = 5;
```

## 5. Câu lệnh truy vấn: SELECT
```sql
-- 5.a. Xem danh sách tất cả nhân viên
SELECT * FROM Employee
	ORDER BY EmployeeID ASC;
-- 5.b. Liệt kê danh sách nhân viên đang làm dự án "chính phủ điện tử"
SELECT Employee.*,Project.ProjectName FROM Employee
	LEFT JOIN GroupDetail ON Employee.EmployeeID = GroupDetail.EmployeeID 
	LEFT JOIN GroupWork ON GroupDetail.GroupID = GroupWork.GroupID
	LEFT JOIN Project ON GroupWork.ProjectID = Project.ProjectID
	WHERE (ProjectName LIKE N'Chính phủ điện tử');

-- 5.c. Thống kê số nhân viên "đang làm việc" tại mỗi nhóm
SELECT GroupWork.GroupName, COUNT(GroupDetail.EmployeeID) FROM GroupWork
	LEFT JOIN GroupDetail ON GroupWork.GroupID = GroupDetail.GroupID
	WHERE Statusemployee LIKE N'đang làm'
	GROUP BY GroupName;
```

## 6. Khung nhìn: VIEW
```sql
-- 6.a. Tạo khung nhìn all_information: Liệt kê thông tin về nhân viên, nhóm làm việc có dự án đang thực hiện
CREATE VIEW all_information
AS
SELECT GroupWork.GroupName,Employee.Name,Project.ProjectName,Project.StartDate,Project.EndDate FROM Employee
	FULL JOIN GroupDetail ON Employee.EmployeeID = GroupDetail.EmployeeID
	FULL JOIN GroupWork ON GroupDetail.GroupID = GroupWork.GroupID
	FULL JOIN Project ON GroupWork.ProjectID = Project.ProjectID
	WHERE Project.StartDate < GETDATE() AND Project.EndDate > GETDATE();
GO
SELECT * FROM all_information;

-- 6.b. Sửa khung nhìn all_information 
ALTER VIEW all_information
AS
SELECT Employee.Name,GroupWork.GroupName,Project.ProjectName,Project.StartDate,Project.EndDate FROM Employee
	FULL JOIN GroupDetail ON Employee.EmployeeID = GroupDetail.EmployeeID
	FULL JOIN GroupWork ON GroupDetail.GroupID = GroupWork.GroupID
	FULL JOIN Project ON GroupWork.ProjectID = Project.ProjectID
	WHERE Project.StartDate < GETDATE() AND Project.EndDate > GETDATE();
GO
SELECT * FROM all_information;

-- 6.c. Xóa khung nhìn all_information
DROP VIEW dbo.all_information;
GO
```

## 7. Tạo chỉ mục: INDEX
```sql
-- a. Tạo chỉ mục duy nhất tên là IX_Group trên 2 trường GroupID và EmployeeID của bảng GroupDetail
DROP INDEX GroupDetail.IX_Group
CREATE UNIQUE INDEX IX_Group ON GroupDetail(GroupID,EmployeeID);

-- b. Tạo chỉ mục tên là IX_Project trên trường ProjectName của bảng Project gồm các trường StartDate và EndDate
DROP INDEX Project.IX_Project
CREATE INDEX IX_Project ON Project(StartDate,EndDate);
```

## 8. Tạo các thủ tục lưu trữ: PROCEDURE
```sql
-- a. Tăng giá thêm 10% các dự án có giá trị nhỏ hơn 2000
DROP PROCEDURE Project_UpdateCost;
CREATE PROCEDURE Project_UpdateCost 
AS BEGIN
UPDATE Project
	SET Cost = (Cost*1.1)
	WHERE Cost < 2000;
END;
EXEC Project_UpdateCost;

-- b. Hiển thị thông tin về dự án sắp được thực hiện
DROP PROCEDURE Project_near;
CREATE PROCEDURE Project_near
AS BEGIN
SELECT * FROM Project WHERE StartDate > GETDATE()
END;
EXEC Project_near;

-- c. Hiển thị thông tin liên quan về các dự án đã hoàn thành
DROP PROCEDURE Project_done
CREATE PROCEDURE Project_done
AS
SELECT * FROM Project
	LEFT JOIN GroupWork ON Project.ProjectID = GroupWork.ProjectID
	LEFT JOIN GroupDetail ON GroupWork.GroupID = GroupDetail.GroupID
	LEFT JOIN Employee ON GroupDetail.EmployeeID = Employee.EmployeeID
	WHERE EndDate < GETDATE()
GO;
EXEC Project_done;
```

## 9. Tạo Trigger
a. Khi trường EndDate được cập nhậtthì tự động tính toán tổng thời gian hoàn thành dự án và cập nhật vào trường Period
b. Đảm bảo rằng khi xóa một Group thì tất cả những bản ghi có liên quan trong bảng GroupDetail cũng sẽ bị xóa theo.
c. Không cho phép chèn 2 nhóm có cùng tên vào trong bảng Group.
