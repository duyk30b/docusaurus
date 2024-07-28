# Kỹ thuật Memoization

## 1. Giả sử ta có 1 chương trình rất nặng mỗi lần tính toán như sau:
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Memoization</title>
</head>

<body>
    <script>
        // Giả sử ta có 1 function chạy rất nặng như sau
        const expensiveFunction = (number) => {
            const start = new Date();
            console.log("Start expensiveFunction", start.getTime());
            while (new Date() - start < 2000);
            console.log("End expensiveFunction", new Date().getTime());
            const square = number * number;
            return square;
        }

        console.log(expensiveFunction(2)); // Tính toán trả về 4
        console.log(expensiveFunction(3)); // Tính toán trả về 9
        console.log(expensiveFunction(2)); // Vẫn tiếp tục tính toán và trả về 4
    </script>
</body>

</html>
```

## 2. Sử dụng kỹ thuật Memoization 
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Memoization</title>
</head>

<body>
    <script>
        //Dùng kỹ thuật Memoization để lưu những params đã từng được sử dụng và cache => tối ưu hóa những lần run sau
        const expensiveFunction = (number) => {
            // Init cache
            if (!expensiveFunction.cache) {
                expensiveFunction.cache = {};
            }
            // Return cache if found
            const key = `${number}`;
            if (expensiveFunction.cache[key]) return expensiveFunction.cache[key];

            // Calculate
            const start = new Date();
            console.log("Start expensiveFunction", start.getTime());
            while (new Date() - start < 2000);
            console.log("End expensiveFunction", new Date().getTime());
            const square = number * number;

            // Save to cache
            expensiveFunction.cache[key] = square;
            return square;
        }

        console.log(expensiveFunction(2)); // Tính toán và lưu cache, trả về 4
        console.log(expensiveFunction(3)); // Tính toán và lưu cache, trả về 9
        console.log(expensiveFunction(2)); // Lần sau trả về 4 mà không cần tính toán nữa
    </script>
</body>

</html>
```