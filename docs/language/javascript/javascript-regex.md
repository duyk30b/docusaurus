# Javascript Regex

## 1. Cú pháp Regex
```javascript
let patt1 = /^is/gmi;
let patt2 = new RegExp("\\w", "g");

let str = "\\w"
let patt3 = new RegExp(str, "g");
```

|     |             |                                              |
| --- | ----------- | -------------------------------------------- |
| i   | insensitive | Không phân biệt chữ hoa hay thường           |
| g   | global      | Tìm hết trong chuỗi, ra kết quả vẫn tìm tiếp |
| m   | multiline   | Tìm kiếm nhiều dòng                          |

## 2. Cách viết Pattern
| Ký tự      | Giải thích                                      |
| ---------- | ----------------------------------------------- |
| [ACm05]    | hoặc"A", hoặc "C", hoặc "m", hoặc "0", hoặc "5" |
| [A-Z]      | từ A đến Z chữ hoa                              |
| [a-z]      | từ a đến Z chữ thường                           |
| [A-z]      | từ A hoa đến z thường                           |
| [e-h]      | từ e đến h                                      |
| [0-9]      | từ 0 đến 9                                      |
| [3-7]      | từ 3 đến 7                                      |
| [A-C2-5q]  | hoặc từ A đến C, hoặc 2 đến 5, hoặc q           |
|            |                                                 |
| [^DEn27]   | không có "D","E","n","2","7"                    |
| [^C-Z]     | không có chữ "C" đến "Z"                        |
| [^A-e]     | không có chữ A hoa đến e thường                 |
| [^1-4]     | không có từ 1 đến 4                             |
| [^A-C2-5q] | không có từ A đến C, từ 2 đến 5, và q           |
|            |                                                 |
| a+         | có 1 hoặc nhiều chữ a                           |
| a*         | không có hoặc nhiều chữ a                       |
| a?         | có 0 hoặc 1 chữ a                               |
|            |                                                 |
| \w         | bao gồm từ a-z,A-Z,0-9, kể cả _ (dấu gạch dưới) |
| \W         | ngược lại \w                                    |
| \d         | một số bất kỳ, giống [0-9]                      |
| \D         | ngược lại \d, giống [^0-9]                      |
| \s         | ký tự trắng: dấu cách, dấu tab, xuống dòng      |
| \S         | ngược lại \s                                    |
| \b         | bắt đầu hoặc kết thúc 1 từ, tùy vị trí viết \b  |
| \B         | ngược lại của \b, không ở đầu hoặc cuối         |
| \n         | ký tự xuống dòng                                |
| \t         | ký tự tab                                       |

### Khác
```
\d{4}	               có 4 số liền nhau
\d{2,4}	               có từ 2 đến 4 số liền nhau
\d{3,}	               có ít nhất 3 số liền nhau
.	                   ký tự đơn bất kỳ, ngoài ký tự xuống dòng
/\d$/g	               có số ở cuối chuỗi
/^\d/g	               có số ở đầu chuỗi
/(red|green|\d)/g	   chữ "red" hoặc "green" hoặc một số
```

## 3. Các phương thức sử dụng trong Regex
- Bao gồm: match, exec, test
```javascript
var str = "The rain in SPAIN stays mainly in the plainn";
var patt = /ain|haha/g
var res1 = str.match(patt);
var res2 = patt.exec(str);
var res3 = patt.test(str);
//result: 
res1 => ain,ain,ain
res2 => ain
res3 => true
```

## 4. Một số ví dụ đặc biệt:
```javascript
// Example 1
let pattern = /[A-C2-5q]/g;
let string = "ABCDE 1202058 mnnopqqqrs";
let result = string.match(pattern); //result: A,B,C,2,2,5,q,q,q

// Example 2
let pattern = /[^A-C2-5q]/g;
let string = "ABCDE 1202058 mnnopqqqrs";
let result = string.match(pattern); //result: D,E, ,1,0,0,8, ,m,n,n,o,p,r,s

// Example 3
var str = "Hellooo World! Hello W3Schools!";
var patt1 = /lo+/g;
var patt2 = /lo*/g;
var patt3 = /lo?/g;
let result = str.match(patt); 
//patt1: chữ "l" + có ít nhất 1 chữ "o" =>  looo,lo 
//patt2: chữ "l" + không có hoặc có nhiều chữ "o" => l,looo,l,l,lo,l 
//patt3: chữ "l" + không có hoặc có 1 chữ "o" => l,lo,l,l,lo,l

// Example 4
let str = "ABC A2019 xyz";
let patt1 = /\b\w/g;
let patt2 = /\d\b/g;
let patt3 = /\B\w/g;
let patt4 = /\d\B/g;
let result = str.match(patt); 
//patt1: chữ bất kỳ ở đầu một từ => A,A,x 
//patt2: số bất kỳ ở cuối một từ => 9 
//patt3: chữ bất kỳ không ở đầu một từ=> B,C,2,0,1,9,y,z 
//patt4: số bất kỳ, không ở cuối một từ=>2,0,1

// Example 5
var str = "AZ và AB: Tìm chữ A nào có chữ Z đi theo sau";
var patt1 = /A(?=Z)/;
var patt1 = /A(?=Z)/;
var result = str.match(patt1); //result: A
```
- containsNumber : /\d+/,
- containsAlphabet : /[a-zA-Z]/,
- onlyLetters : /^[A-Za-z]+$/,
- onlyNumbers : /^[0-9]+$/,
- Tìm ký tự theo sau: (?=n) Công thức: ?=n
