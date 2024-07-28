# CSS Base
![Locale Dropdown](https://drive.google.com/thumbnail?id=1iL5magKZpu3D_oPcB_Iespyb8uMZHwW0&sz=w500)

### 1. CSS Variable
```html
<style>
	:root {
		--main-color: #ffa400;
		--base-size: 60px

	}
	.square {
		background: var(--main-color);
		width: var(--base-size);
		height: var(--base-size);
	}
	.rectangle {
		background: var(--color);
		width: calc(var(--i) * var(--base-size));
		height: calc(var(--j) * var(--base-size));
	}
</style>

<div class="square"></div><br/>
<div class="rectangle" style="--i:5;--j:2;--color:green"></div><br/>
```




### 2. CSS Selector
| #   | Type                                 | Example |
| --- | ------------------------------------ | ------- |
| 1   | Basic CSS Selectors                  |         |
| 2   | Descendant CSS Selectors             | div p   |
| 3   | Multiple CSS Selector                |         |
| 4   | Combination CSS Selectors            |         |
| 5   | Sibling CSS Selectors                |         |
| 6   | Pseudo CSS Selectors                 |         |
| 7   | Pseudo CSS Selectors (link và input) |         |
| 8   | Attribute CSS Selectors              |         |

| Type                     | Example  | Explain                                                      |
| ------------------------ | -------- | ------------------------------------------------------------ |
| Descendant selector      | div p    | Tất cả element p là hậu duệ bên trong div                    |
| Child combinator         | div > p  | Tất cả element p là con trực tiếp (hậu duệ đời 1) của div    |
| Younger siblings         | div ~ ul | Tất cả element ul là anh chị em cùng cấp trẻ hơn của div     |
| Younger adjacent sibling | div + ul | Tương tự div ~ ul, nhưng chỉ lấy ul liền kề ngay sau của div |



