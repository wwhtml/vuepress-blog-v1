# number
[[toc]]
## 1. 概述
```js
var num1 = new Object(11);//“一般人”不这么用
var num2 = new Number(11);
var num3 = 11;

console.log(num1==num2);//false
console.log(num1==num3);//true
console.log(num3==num2);//true

console.log(typeof num1);//'object'
console.log(typeof num2);//'object'
console.log(typeof num3);//'number'
```
### 1.1 整数和浮点数
**浮点数**
```js
let floatNum1 = 1.1;
let floatNum2 = 0.1;
let floatNum3 = .1; // 有效，但不推荐
```
因为存储浮点值使用的内存空间是存储整数值的两倍，所以ECMAScript总是想方设法把值转换为整数。在小数点后面没有数字的情况下，数值就会变成整数
```js
// 小数点后面没有数字，当成整数1处理
let num1 = 1.;  
console.log(num1);  //1
// 小数点后面是零，当成整数10处理
let num2 = 10.0;   
console.log(num2);  //10
```
科学计数法表示浮点值
```js
let floatNum = 3.125e7; // 等于31250000
0.000 000 000 000 000 03。这个数值用科学记数法可以表示为3e-17
```

由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心。
```js
0.1 + 0.2 == 0.3 //false   因此永远不要测试某个特定的浮点值  
console.log(0.1 + 0.2);////0.30000000000000004
0.05 + 0.25 == 0.3 //true
```
> 关于浮点数值计算会产生舍入误差的问题，有一点需要明确：这是使用基于
IEEE754 数值的浮点计算的通病，ECMAScript 并非独此一家；其他使用相同数值格
式的语言也存在这个问题。
### 1.2 数值精度
整数会精确到15位
```js
console.log(111122223333444455556);//111122223333444450000
//上面看着还不太明显，看看下面的例子：
console.log(111122223333444499999);//111122223333444500000
```

小数的最大数是 17 位，但是浮点的算数并不总是 100% 精准：
```js
console.log(0.1+0.2);//0.30000000000000004
```
小数点前的数字多于21位，就会自动使用科学计数法
```js
console.log(1111222233334444555566);//1.1112222333344446e+21
```

### 1.2 数值范围
根据标准，64位浮点数的指数部分的长度是11个二进制位，意味着指数部分的最大值是2047（2的11次方减1）。也就是说，64位浮点数的指数部分的值最大为2047，分出一半表示负数，则 JavaScript 能够表示的数值范围为21024到2-1023（开区间），超出这个范围的数无法表示。

如果一个数大于等于2的1024次方，那么就会发生“正向溢出”，即 JavaScript 无法表示这么大的数，这时就会返回Infinity。
```js
Math.pow(2, 1024) // Infinity
```
如果一个数小于等于2的-1075次方（指数部分最小值-1023，再加上小数部分的52位），那么就会发生为“负向溢出”，即 JavaScript 无法表示这么小的数，这时会直接返回0。
```js
Math.pow(2, -1075) // 0
```
下面是一个实际的例子。
```js
var x = 0.5;

for(var i = 0; i < 25; i++) {
  x = x * x;
}

x // 0
```
上面代码中，对0.5连续做25次平方，由于最后结果太接近0，超出了可表示的范围，JavaScript 就直接将其转为0。

JavaScript 提供Number对象的`MAX_VALUE`和`MIN_VALUE`属性，返回可以表示的具体的最大值和最小值。
```js
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MIN_VALUE // 5e-324
```
## 科学计数法
数值也可以采用科学计数法表示，下面是几个科学计数法的例子。
```js
123e3 // 123000
123e-3 // 0.123
-3.1E+12
.1e-23
```
科学计数法允许字母e或E的后面，跟着一个整数，表示这个数值的指数部分。

以下两种情况，JavaScript 会自动将数值转为科学计数法表示，其他情况都采用字面形式直接表示。

1）小数点前的数字多于21位。
```js
1234567890123456789012
// 1.2345678901234568e+21

123456789012345678901
// 123456789012345680000
```
（2）小数点后的零多于5个。
```js
// 小数点后紧跟5个以上的零，
// 就自动转为科学计数法
0.0000003 // 3e-7

// 否则，就保持原来的字面形式
0.000003 // 0.000003
```
## 2. 数值的进制
| 进制        | 前缀           | 
| :------------- |:-------------| 
| 十进制    | 没有前导的0的数值 | 
| 十六进制  | 0o 或 0O      |  
| 八进制 | 0x 或 0X      |   
| 二进制 | 0b 或 0B      |    

默认情况下，JavaScript 内部会自动将八进制、十六进制、二进制转为十进制。下面是一些例子。
```js
0xff // 255
0o377 // 255
0b11 // 3
```
如果八进制、十六进制、二进制的数值里面，出现不属于该进制的数字，就会报错。
```js
0xzz // 报错
0o88 // 报错
0b22 // 报错
```
上面代码中，十六进制出现了字母z、八进制出现数字8、二进制出现数字2，因此报错。

通常来说，有前导0的数值会被视为八进制，但是如果前导0后面有数字8和9，则该数值被视为十进制。
```js
0888 // 888
0777 // 511
```
前导0表示八进制，处理时很容易造成混乱。ES5 的严格模式和 ES6，已经废除了这种表示法，但是浏览器为了兼容以前的代码，目前还继续支持这种表示法。
## 3. 特殊的数值
### 3.1 正零和负零
```js
console.log(-0 === +0);//true
console.log(0 === +0);//true
console.log(0 === -0);//true
```
几乎所有场合，正零和负零都会被当作正常的0。
```js
+0 // 0
-0 // 0
(-0).toString() // '0'
(+0).toString() // '0'
```
唯一有区别的场合是，+0或-0当作分母，返回的值是不相等的。
```js
(1 / +0) === (1 / -0) // false
```
上面的代码之所以出现这样结果，是因为除以正零得到+Infinity，除以负零得到-Infinity，这两者是不相等的（关于Infinity详见下文）。

Object.is()：可以区分正零和负零
```js
console.log(Object.is(+0,-0))//false
console.log(Object.is(0,+0))//true
console.log(Object.is(0,-0))//false
```
### 3.2 NaN
`NaN`，即非数值（Not a Number）是一个特殊的数值.
```js
console.log(typeof NaN);//"number"
```

任何数值除以 0会返回 NaN
```js
console.log(0/0);    // NaN
console.log(0/+0);  // NaN
console.log(0/-0);  //NaN
console.log(-0/0);  //NaN
```

任何涉及 NaN 的操作（例如 NaN/10）都会返回 NaN
```js
console.log(NaN/0);//NaN
console.log(NaN/NaN);//NaN
console.log(0/NaN);//NaN
console.log(10/NaN);//NaN
console.log(NaN/10);//NaN
console.log(NaN+10);//NaN
console.log(NaN*10);//NaN
```
NaN 与任何值都不相等，包括 NaN 本身
```js
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(NaN === 1); // false
console.log(NaN === "b"); // false
```
NaN在布尔运算时被当作false。
```js
Boolean(NaN) // false
```
### 3.3 Infinity
如果分子是非0值，分母是有符号0或无符号0，则会返回 Infinity 或 -Infinity：
```js
console.log(5 / 0); // Infinity
console.log(5 / -0); // -Infinity
console.log(1 / 0); //Infinity
console.log(1 / -0); //-Infinity
console.log(-1 / -0); //Infinity
console.log(-1 / 0); //-Infinity
console.log(typeof Infinity); //number
console.log(typeof -Infinity); //number
```
## 4. 与数值相关的全局方法
### 4.1 Number()
**`Number()是转型函数，可用于任何数据类型`**

1、布尔值，true转换为1，false转换为0。

2、数值，直接返回。

3、undefined，返回NaN。

4、如果是 null 值，返回 0。

```js
parseInt(null)//NaN
```
5、如果参数是字符串：

（1）如果字符串包含数值字符，包括数值字符前面带加、减号的情况，则转换为一个十进制数值。
```js
Number("1")返回1，
Number("123")返回123，
Number("011")返回11（忽略前面的零）。
Number("-123");//-123
Number("+123");//123
注意：如果一个纯数值字符串中包含空格，返回NaN
字符串中的首尾空格会自动忽略。
```
（2）如果字符串包含有效的浮点值格式如"1.1"，则会转换为相应的浮点值（同样，忽略前面的零）。

（3）如果字符串包含有效的十六进制格式如"0xf"，则会转换为与该十六进制值对应的十进制整数值。

（4）如果是空字符串（不包含字符），则返回0。
```js
Number('')//0
parseInt(null)//NaN
```

（5）如果字符串包含除上述情况之外的其他字符，则返回NaN。

6、对象，调用valueOf()方法，并按照上述规则转换返回的值。如果转换结果是NaN，则调用toString()方法，再按照转换字符串的规则转换。


### 4.2 parseInt()
**`parseInt()主要用于将字符串转换为数值`**

1、空字符串，返回值是NaN。（Number()返回值是0）
```js
console.log(parseInt(''));//NaN
```

2、在转换字符串的时候，他会首先判断字符串是否属于数值模式，忽略字符串前面的空格(仅限开头的空格，字符串中间的空格不会省略)，直到找到第一个非空字符，然后在进行判断。
 - 如果第一个字符不是“数字字符”或者“负号”，返回NaN.
 - 如果第一个字符是数字字符，parseInt()会继续解析下一个字符，直到解析所有后续字符，或者遇到一个非数字字符为止。例如："1234567aaaa"：1234567  "；"111.3"：111.3(因为小数点不是有效数字)
```js
let num1 = parseInt("1234blue"); // 1234

let num2 = parseInt(""); // NaN

let num3 = parseInt("0xA"); // 10，解释为十六进制整数

let num4 = parseInt(22.5); // 22

let num5 = parseInt("70"); // 70，解释为十进制值

let num6 = parseInt("0xf"); // 15，解释为十六进制整数
```


3、parseInt()可以解析八进制、十进制、十六进制等等。并且可以通过添加一个参数来确定返回值的格式。
- 如果字符串以0x开头，后面紧跟的是数字字符，那么这个字符串将会作为十六进制来进行解析。
- 如果以0开头，后面紧跟的是数字字符，那么这个字符串将会当做八进制来进行解析。
- 因为对于八进制的转换，es5和es3会产生一些冲突，所以现在引入了‘基数’这个概念，也就是parseInt()的第二个参数，是用来规定第一个参数是几进制数值的。返回值都是十进制的数值。
```js
let num1 = parseInt("10", 2); // 2，按二进制解析

let num2 = parseInt("10", 8); // 8，按八进制解析

let num3 = parseInt("10", 10); // 10，按十进制解析

let num4 = parseInt("10", 16); // 16，按十六进制解析

let num1 = parseInt("AF", 16); // 175

let num2 = parseInt("AF"); // NaN

```
### 4.3 parseFloat()
十六进制数值始终会返回0。因为parseFloat()只解析十进制值，因此不能指定底数。

parseFloat()函数的另一个不同之处在于，它始终忽略字符串开头的零。这个函数能识别前面讨论的所有浮点格式，以及十进制格式（开头的零始终被忽略）。

### 4.4 isNaN()
**ECMAScript提供了`isNaN()`函数。**

该函数接收一个参数，可以是任意数据类型，然后判断这个参数是否“不是数值”。

把一个值传给isNaN()后，该函数会尝试把它转换为数值。某些非数值的值可以直接转换成数值，如字符串"10"或布尔值。任何不能转换为数值的值都会导致这个函数返回true
```js
console.log(isNaN(NaN));     // true
console.log(isNaN(10));      // false，10是数值
console.log(isNaN("10"));    // false，可以转换为数值10
console.log(isNaN("blue"));  // true，不可以转换为数值
console.log(isNaN(true));    // false，可以转换为数值1
```
**isNaN函数的不足？**

参数是纯数值字符串的时候会返回false.可以适当区分一下
### 4.5 isFinite()
`isFinite`方法返回一个布尔值，表示某个值是否为正常的数值。
```js
isFinite(Infinity) // false
isFinite(-Infinity) // false
isFinite(NaN) // false
isFinite(undefined) // false
isFinite(null) // true
isFinite(-1) // true
```
除了Infinity、-Infinity、NaN和undefined这几个值会返回false，isFinite对于其他的数值都会返回true。

## Number的属性
### Number.EPSILON
### Number.MAX_SAFE_INTEGER
### Number.MAX_VALUE
### Number.MIN_SAFE_INTEGER
### Number.MIN_VALUE
### Number.NaN
### Number.NEGATIVE_INFINITY
### Number.POSITIVE_INFINITY
## Number的静态方法
### Number.isFinite()


### Number.isNaN()
在 JavaScript 中，NaN 最特殊的地方就是，我们不能使用相等运算符（== (en-US) 和 === (en-US)）来判断一个值是否是 NaN，因为 NaN == NaN 和 NaN === NaN 都会返回 false。因此，必须要有一个判断值是否是 NaN 的方法。

和全局函数 isNaN() 相比，Number.isNaN() 不会自行将参数转换成数字，只有在参数是值为 NaN 的数字时，才会返回 true。
```js
Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0)       // true

// 下面这几个如果使用全局的 isNaN() 时，会返回 true。
Number.isNaN("NaN");      // false，字符串 "NaN" 不会被隐式转换成数字 NaN。
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN("blabla");   // false

// 下面的都返回 false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```
### Number.parseInt()
```js
console.log(parseInt===Number.parseInt);//true
```
### Number.parseFloat()
Number.parseFloat() 方法可以把一个字符串解析成浮点数。该方法与全局的 parseFloat() 函数相同，并且处于 ECMAScript 6 规范中（用于全局变量的模块化）。
```js
console.log(parseFloat===Number.parseFloat);//true
```
### Number.isInteger()
`Number.isInteger(value)`：用来判断value是否是整数。

```js
console.log(Number.isInteger(1));//true

console.log(Number.isInteger(1.23));//false
console.log(Number.isInteger(null));//false
console.log(Number.isInteger(undefined));//false
console.log(Number.isInteger("1"));//false
console.log(Number.isInteger([1]));//false
console.log(Number.isInteger({1:1}));//false

```

### Number.EPSILON()

## Number的实例方法
### Number.prototype.valueOf()
### Number.prototype.toString()
Number对象部署了自己的toString方法，用来将一个数值转为字符串形式。
```js
var num = 123.0000;
console.log(num.toString());//"123"
```

可以为 toString()方法传递一个表示基数的参数，告诉它返回几进制
```js

var num = 10; 
console.log(num.toString()); //"10" 
console.log(num.toString(2)); //"1010" 
console.log(num.toString(8)); //"12" 
console.log(num.toString(10)); //"10" 
console.log(num.toString(16)); //"a"
```
### Number.prototype.toLocaleString()
### Number.prototype.toFixed()
指定小数位个数，返回字符串
```js
var num = 10;
cosole.log(num.toFixed(2)); //"10.00"
var num = 10.005; 
console.log(num.toFixed(2)); //"10.01"
```


### Number.prototype.toExponential()
```js
var num = 10; 
console.log(num.toExponential(1)); //"1.0e+1"
```
以上代码输出了"1.0e+1"；不过，这么小的数值一般不必使用 e 表示法。如果你想得到表示某个 数值的最合适的格式，就应该使用 toPrecision()方法。
### Number.prototype.toPrecision()
对于一个数值来说，toPrecision()方法可能会返回固定大小（fixed）格式，也可能返回指数 （exponential）格式；具体规则是看哪种格式最合适。这个方法接收一个参数，即表示数值的所有数字的位数（不包括指数部分）。
```js
var num = 99; 
console.log(num.toPrecision(1)); //"1e+2" 
console.log(num.toPrecision(2)); //"99" 
console.log(num.toPrecision(3)); //"99.0"
```
toPrecision()方法可以表现 1 到 21 位小数。某些浏览器支持的范围更大，但这是典型实现的范围。
## 参考链接
[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)

[https://es6.ruanyifeng.com/#docs/number](https://es6.ruanyifeng.com/#docs/number)