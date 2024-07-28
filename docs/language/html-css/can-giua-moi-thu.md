# HTML Căn giữa mọi thứ

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .parent {
      margin: 10px;
      width: 200px;
      height: 200px;
      background-color: green;
    }

    .child {
      width: 100px;
      height: 100px;
      background-color: orange;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
  </style>
</head>

<body>
  <div style="display: flex; flex-wrap: wrap">
    <div class="parent" style="display: flex; justify-content: center; align-items: center">
      <div class="child">1</div>
    </div>
    <div class="parent" style="display: flex">
      <div class="child" style="margin: auto">2</div>
    </div>

    <div class="parent example-3" style="position: relative">
      <div class="child" style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          ">
        3
      </div>
    </div>
  </div>

  <div style="display: flex; flex-wrap: wrap">
    <div class="parent" style="
          background-image: url('https://picsum.photos/seed/picsum/400/300');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        "></div>
    <div class="parent">
      <img style="width: 100%; height: 100%; object-fit: cover" src="https://picsum.photos/seed/picsum/400/300"
        alt="" />
    </div>
    <img src="https://picsum.photos/seed/picsum/400/300" alt="" />
  </div>
</body>

</html>
```