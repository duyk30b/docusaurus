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
