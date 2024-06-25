# OOP, SOLID trong lập trình hướng đối tượng

a. OOP (Object Oriented Programming) bao gồm các đặc tính sau
- Tính đóng gói (Encapsulation): che giấu thông tin bên trong đối tượng
- Tính kế thừa (Inheritance)
- Tính đa hình (Polymorphism): các Instance của Class sẽ thực thi chức năng giống nhau theo cách khác nhau
- Tính trừu tượng (Abstraction)

b. SOLID bao gồm 5 nguyên tắc đó là:
- Single responsibility principle (SRP)
- Open/Closed principle (OCP)
- Liskov substitution principe (LSP)
- Interface segregation principle (ISP)
- Dependency inversion principle (DIP)

## 1. Single responsibility priciple (SRP)
- Mỗi lớp chỉ nên chịu trách nhiệm về một nhiệm vụ cụ thể nào đó mà thôi.
- Đặt vấn đề
```javascript
class Book {
  protected $Author;

  public getAuthor($Author) {
    return $this->Author;
  }

  public function formatJson() {
    return json_encode($this->getAuthor());
  }
}
// ==> Class Book làm cả công việc formatJSON ==> không hợp lý
```
- Giải pháp
```javascript
class Book {
  protected $Author;

  public getAuthor($Author){
    return $this->Author;
  }
}

class Format{
    public function formatJSON(Book $Author) {
        return json_encode($Author->getAuthor());
    }
    public function formatHex(Book $Author) {
        return hex_encode($Author->getAuthor());
    }
}
// ==> Thằng nào làm công việc của thằng đấy thôi
```

## 2. Open/Closed principle (OCP)
- Không được sửa đổi một Class có sẵn, nhưng có thể mở rộng bằng kế thừa.


## 3. Liskov substitution principe (LSP)
- Trong một chương trình, các object của class con có thể thay thế class cha mà không làm thay đổi tính đúng đắn của chương trình
- Đặt vấn đề
```javascript
interface Bird {
    void eat();
    void fly();
}
class ChimSe implement Bird {
    // ==> ok
}
class ChimCanhCut implement Bird {
    function fly() {
        throw new Exceptions('Chim Cánh Cụt không thể bay')
    }
    // ==> chỉ vì class này mà gây lỗi chương trình
}
```
- Giải pháp: tách chim cánh cụt ra interface riêng

## 4. Interface segregation principle
- Một client không bao giờ bị buộc phải thực hiện một interface mà nó không sử dụng hoặc client không nên bị buộc phải phụ thuộc vào các phương thức mà chúng không sử dụng.
- Thay vì dùng 1 interface lớn, ta nên tách thành nhiều interface nhỏ, với nhiều mục đích cụ thể.
- Đặt vấn đề
```javascript
interface Employee {
    public function clockin()
    public function clockout()
    public function customerService()
    public function generateReport()
}

class Staff implements Employee {
    public function generateReport() {
         // ==> thật vô lý nếu 1 nhân viên thông thường phải xuất báo cáo
    }
}
```
- Giải pháp
```javascript
interface GeneralEmployee {
    public function clockin()
    public function clockout()
}

interface Employee {
    public function customerService()
}

interface Management {
    public function generateReport()
}

class Staff implements GeneralEmployee, Employee {
}

class Manager implements GeneralEmployee, Management {
}
```

## 5. Dependency inversion principle (DIP)
- Các module cấp cao không nên phụ thuộc vào các modules cấp thấp. Cả 2 nên phụ thuộc vào abstraction.
- Interface (abstraction) không nên phụ thuộc vào chi tiết, mà ngược lại (Các class giao tiếp với nhau thông qua interface)
- Đặt vấn đề:
```javascript
class ConnectionManager {
    public MySql connection;

    public function doConnection(MySql connection) {
        this.connection.doConnect()
        // ==> không thể dùng connect khác như SQLServer, Oracle
        // ==> Lỗi phổ biến vì theo cấu trúc phân cấp, class ConnectionManager là mô-đun cao hơn và MySQL là mô-đun thấp hơn.
    }
}
```

- Giải pháp:
```javascript
interface IConnection() {
    public doConnect();
}

class SqlServer implements IConnection {
    public function doConnect() {}
}

class MySql implements IConnection {
    public function doConnect() {}
}

class ConnectionManager {
    public IConnection connection
    public function doConnection(IConnection connection) {
        this.connection.doConnect()
    }
}
// ==> Giờ cả ConnectionManager và MySql đều phụ thuộc vào IConnection
```