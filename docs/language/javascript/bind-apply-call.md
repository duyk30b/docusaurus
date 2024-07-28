# Argument, This, Bind, Apply, Call và HOF

## 1. Arguments trong Javascript
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <script>
        const example = function () {
            console.log(arguments)                                   // Arguments(2) ['abc', 123, callee: ƒ, Symbol(Symbol.iterator): ƒ]
            console.log(typeof arguments, Array.isArray(arguments))  // object false
            console.log(JSON.stringify(arguments))                   // {"0":"abc","1":123}
            console.log(Array.from(arguments))                       // ['abc', 123]
            console.log(arguments[0], arguments[1], arguments[2])    // abc 123 undefined
            for (let i = 0; i < arguments.length; i++) {
                console.log(arguments[i])                            // abc 123
            }
        }
        example("abc", 123)

        const note = () => console.log(arguments)
        note()                                                       // ReferenceError: arguments is not defined   
    </script>
</head>

</html>
```

## 2. This trong Javascript
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <script>
        const mouse = {
            aa: function () {                   // -----> có tạo context là mouse
                console.log(this);              // ===> mouse
                const a1 = function () {
                    console.log(this);          // ===> window
                };
                const a2 = () => {
                    console.log(this);          // ===> mouse
                };
                a1();
                a2();
            },
            bb: () => {                         // -----> không tạo context
                console.log(this);              // ===> window
                const b1 = function () {
                    console.log(this);          // ===> window
                };
                const b2 = () => {
                    console.log(this);          // ===> window
                };
                b1();
                b2();
            },
            cc: {
                cx: function () {               // -----> có tạo context là mouse.cc
                    console.log(this);          // ===> mouse.cc
                    const c1 = function () {
                        console.log(this);      // ===> window
                    };
                    const c2 = () => {
                        console.log(this);      // ===> mouse.cc
                    };
                    c1();
                    c2();
                },
            },
            dd: {
                dx: () => {                     // -----> không tạo context
                    console.log(this);          // ===> window
                    const d1 = function () {
                        console.log(this);      // ===> window
                    };
                    const d2 = () => {
                        console.log(this);      // ===> window
                    };
                    d1();
                    d2();
                },
            }
        };
        mouse.aa();
        mouse.bb();
        mouse.cc.ww();
        mouse.dd.dx();
    </script>
</head>

</html>
```

## 3. Bind, Apply và Call trong Javascript 
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <script>
        const example = {
            data: 1000,
            func1: function (param1, param2, param3) {
                console.log(this, param1, param2, param3)
            },
            // arrow function không có this => apply,call và bind không sử dụng context được
            func2: (param1, param2, param3) => {
                console.log(this, param1, param2, param3)
            },
        }
        const convert = { data: 99 }

        example.func1(123, 456)   // {data: 1000, func1: ƒ, func2: ƒ} 123 456 undefined

        console.log("==== BIND === chỉ tạo function mới mà chưa thực thi ====================== =====")
        convert.func1 = example.func1.bind(convert, 123, 456)
        convert.func2 = example.func2.bind(convert, "abc", "xyz")   // arrow function không có this, nên không thể bind "convert" được

        convert.func1(789)                                          // {data: 99, func1: ƒ, func2: ƒ} 123 456 789
        convert.func2("ijk")                                        // Window, 'abc' 'xyz' 'ijk'

        console.log("==== APPLY === thực thi luôn function với gắn argument vào 1 mảng ===============")
        example.func1.apply(convert, [123, 456])                    // {data: 99, func1: ƒ, func2: ƒ} 123 456 undefined
        example.func2.apply(convert, ["abc", "xyz"])                // Window, 'abc' 'xyz' undefined

        console.log("=== CALL======== thực thi luôn function với gắn argument từng biến ==============")
        example.func1.call(convert, 123, 456)                       // {data: 99, func1: ƒ, func2: ƒ} 123 456 undefined
        example.func2.call(convert, "abc", "xyz")                   // Window, 'abc' 'xyz' undefined
    </script>
</head>

</html>
```

## 4. HOF - Higher Order Function
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <script>
        function doBusinessJob() {
            console.log('Do my job', JSON.stringify(arguments))
        }

        function logDecorator(func) {
            return function () {
                console.log('Start my job')                        // Thêm chức năng ghi log cho function
                const result = func.apply(this, arguments)
                return result;
            }
        }

        const logWrapper = logDecorator(doBusinessJob);

        doBusinessJob("ABC", "XYZ");                              // Do my job {"0":"ABC","1":"XYZ"}
        logWrapper("ABC", "XYZ");                                 // Start my job  +  Do my job {"0":"ABC","1":"XYZ"}
    </script>
</head>

</html>
```