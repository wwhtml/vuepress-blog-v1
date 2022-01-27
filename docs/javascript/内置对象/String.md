# String
[[toc]]
ECMAScript中的字符串是不可变的（immutable），意思是一旦创建，它们的值就不能变了。要修改某个变量中的字符串值，必须先销毁原始的字符串，然后将包含新值的另一个字符串保存到该变量，
```javascript
let lang = "Java";
lang = lang + "Script";
```
这里，变量lang一开始包含字符串"Java"。紧接着，lang被重新定义为包含"Java"和"Script"的组合，也就是"JavaScript"。整个过程首先会分配一个足够容纳10个字符的空间，然后填充上"Java"和"Script"。最后销毁原始的字符串"Java"和字符串"Script"，因为这两个字符串都没有用了。所有处理都是在后台发生的，而这也是一些早期的浏览器（如Firefox 1.0之前的版本和IE6.0）在拼接字符串时非常慢的原因。这些浏览器在后来的版本中都有针对性地解决了这个问题。

## 创建字符串

```javascript
//构造函数方式
let str1 = new  String("aa");
let str2 = new Object("aa");//就没这么用的
//字面量方式
let str3 = "aa"

console.log(str1==str3)  //true
console.log(str2==str3)  //true
console.log(str1==str2)  //false

console.log(typeof str1);//"object"
console.log(typeof str2);//"object"
console.log(typeof str3);//"string"
```

## 特殊字符
| 代码        | 输出           | 
| :------------- |:-------------| 
| \\' | 单引号 | 
| \\" | 双引号 |   
| \\\ | 反斜杠 |    
| \n | 换行   |    
| \r | 回车   |    
| \t | tab(制表符) |    
| \b | 退格符 |    
| \f | 换页符 |    

## String对象的属性
| 属性        | 描述           | 
| :------------- |:-------------| 
|constructor|	对创建该对象的函数的引用|
|length|	字符串的长度|
|prototype	|允许您向对象添加属性和方法|

- length属性，表示字符串中字符的数量。
- 空格也会占用 length。一个空格算一个 length。
	console.log("123 456")//7
- 注意：如果字符串中包含双字节字符，那么length属性返回的值可能不是准确的字符数。
- 双字节字符是什么？不太常用？
let text = "This is the letter sigma: Σ.";
console.log(text.length); // 28

```js
let str = new String("aa");
console.log(str);
console.dir(str);

console.log(str.constructor);
console.log(str.length);
console.log(String.prototype === str.__proto__);
```
![String 属性](/images/String属性.png)

## 字符串常用的方法
三个继承的方法valueOf()、toLocaleString()和toString()都返回对象的原始字符串值。

### 转换为字符串
`toString()方法`

- null和undefined值没有toString()方法。
- toString()方法可见于数值、布尔值、对象和字符串值。（没错，字符串值也有toString()方法，该方法只是简单地返回自身的一个副本。
- 在对数值调用这个方法时，toString()可以接收一个底数参数，即以什么底数来输出数值的字符串表示。

`String()转型函数`

它始终会返回表示相应类型值的字符串。String()函数遵循如下规则。
- 如果值有toString()方法，则调用该方法（不传参数）并返回结果。
- 如果值是null，返回"null"。
- 如果值是undefined，返回"undefined"。
```js
let value1 = 10;
let value2 = true;
let value3 = null;
let value4;

console.log(String(value1));  // "10"
console.log(String(value2));  // "true"
console.log(String(value3));  // "null"
console.log(String(value4));  // "undefined"
```
这里展示了将4个值转换为字符串的情况：一个数值、一个布尔值、一个null和一个undefined。数值和布尔值的转换结果与调用toString()相同。因为null和undefined没有toString()方法，所以String()方法就直接返回了这两个值的字面量文本。

`加号操作符`
```js
let str1 = "ww";
let str2 = 2;
let res = str1+str2;
console.log(res);//"ww2"
```

### 索引方法
`charAt()`、

`charCodeAt()`、

`fromCharCode`()
```js
let message = "abcde";
console.log(message.charAt(2)); // "c"
```

### 字符串操作方法
#### 拼接字符串

`concat()`：用于将一个或多个字符串拼接成一个新字符串。
```js
let stringValue = "hello ";
let result = stringValue.concat("world");
console.log(result); // "hello world"
console.log(stringValue); // "hello"
```
操作符（+）拼接字符串

#### 提取字符串
`slice(m.n)`复制索引m到索引n之前的字符（不包含索引n的位置）

`substring`同slice

`substr`

> concat()、slice()、substr()和substring()。四种方法都不改变原字符串

### 位置方法
`indexOf()`查找字符串的索引，如果存在返回索引，不存在返回-1
	
`lastIndexOf()`

`search()`

注意：返回的索引值是number类型
```js
let stringValue = "hello world";
console.log(stringValue.indexOf("o")); // 4
console.log(stringValue.lastIndexOf("o")); // 7
```

### 字符串包含方法
`includes()`：返回布尔值，表示是否找到了参数字符串。

`startsWith()`：返回布尔值，表示参数字符串是否在原字符串的头部。

`endsWith()`：返回布尔值，表示参数字符串是否在原字符串的尾部。

```js
let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true
```
这三个方法都支持第二个参数，表示开始搜索的位置。

```js
let s = 'Hello world!';

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```
上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
### 字符串大小写转换
`toLowerCase()`

`toLocaleLowerCase()`

`toUpperCase()`

`toLocaleUpperCase()
```js
let stringValue = "Hello world";
console.log(stringValue.toLowerCase());        // "hello world"

let stringValue = "Hello world";
console.log(stringValue.toLocaleLowerCase());  // "hello world"

let stringValue = "Hello world";
console.log(stringValue.toUpperCase());        // "HELLO WORLD"

let stringValue = "Hello world";
console.log(stringValue.toLocaleUpperCase());  // "HELLO WORLD"
```

通常，如果不知道代码涉及什么语言，则最好使用地区特定的转换方法
也就是   toLocaleLowerCase()和和toLocaleUpperCase()

### 去除字符串空格
`trim()方法`：创建字符串的一个副本，删除前、后所有空格符，再返回结果。

`trimLeft()`和`trimRight()`方法分别用于从字符串开始和末尾清理空格符。

### 字符串模式匹配方法
`match()`
- 在字符串上调用这个方法，本质上与调用 RegExp 的 exec()方法相同。

- 只接受一个参数，要么是一个正则表达式，要么是一个 RegExp 对象。

- 返回值是一个数组。不改变源字符串
```js   
var str = "wangweissswangweissswangweiddwangwei";
var res  = str.match('wang');
console.log(res);//['wang',index: 0,input: 'wangweissswangweissswangweiddwangwei',groups: undefined]
var res = str.match(/.ang/)//捕获的是第一个符合条件的字符串  包括索引
console.log(res)//['wang',index: 0,input: 'wangweissswangweissswangweiddwangwei',groups: undefined]
var res = str.match(/.ang/g)
console.log(res);//[ 'wang', 'wang', 'wang', 'wang' ]
```

`search()`
- search()和indexOf()、lastIndexOf()返回值相同。

- 返回字符串中第一个匹配项的索引；如果没有找到匹配项，则返回-1。

- search()方法始终是从字符串开头向后查找模式。
```js
var str = "asdfgsdhsd";
var res = str.search('d');
console.log(res);//2

var res = str.search(/sd/);
console.log(res);//1

var res = str.search(/.df/);
console.log(res);//1
```

`replace()函数`
- 第一个参数可以是一个 RegExp 对象或者一个字符串。（这个字符串不会被转换成正则表达式），

- 第二个参数可以是一个字符串或者一个函数。

- 返回值是一个新的被替换之后的字符串。


如果第一个参数是字符串，那么只会替换第一个子字符串。
```js
var str = "wangweiwangweiwangweiwangwei";
var res = str.replace('wei',"111");
console.log(res);//wang111wangweiwangweiwangwei
```
要想替换所有子字符串，唯一的办法就是提供一个正则表达式，而且要指定全局（g）标志
```js
var str = "wangweiwangweiwangweiwangwei";
var res = str.replace(/wei/g,"1111")
console.log(res);//wang1111wang1111wang1111wang1111
```
第二个参数可以是函数

```js
var str = "wangweiwangweiwangweiwangwei";
var res = str.replace(/wei/g,(a,b,c)=>{
    console.log(a);//匹配项 wei  wei  wei  wei
    console.log(b);//匹配项的索引  4 11 18 25
    console.log(c);//源字符串
    return "1111"
})
console.log(res);//wang1111wang1111wang1111wang1111
```

`split`
基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中。分隔符可以是字符串，也可以是一个 RegExp 对象（这个方法不会将字符串看成正则表达式）。

split()方法可以接受可选的第二个参数，用于指定数组的大小，以便确保返回的数组不会超过既定大小。
```js
var colorText = "red,blue,green,yellow"; 
var colors1 = colorText.split(","); //["red", "blue", "green", "yellow"] 
var colors2 = colorText.split(",", 2); //["red", "blue"] 
var colors3 = colorText.split(/[^\,]+/); //["", ",", ",", ",", ""]
```
### repeat()方法
表示要将字符串复制多少次，然后返回拼接所有副本后的结果
```js
let stringValue = "na ";
console.log(stringValue.repeat(16) + "batman");
// na na na na na na na na na na na na na na na na batman
```

### padStart()和padEnd()方法
padStart()和padEnd()方法会复制字符串，如果小于指定长度，则在相应一边填充字符，直至满足长度条件。这两个方法的第一个参数是长度，第二个参数是可选的填充字符串，默认为空格（U+0020）。
```js
console.log(stringValue.padStart(6));       // "   foo"
console.log(stringValue.padStart(9, "."));  // "......foo"

console.log(stringValue.padEnd(6));         // "foo   "
console.log(stringValue.padEnd(9, "."));    // "foo......"
```
可选的第二个参数并不限于一个字符。如果提供了多个字符的字符串，则会将其拼接并截断以匹配指定长度。此外，如果长度小于或等于字符串长度，则会返回原始字符串。
```js
let stringValue = "foo";

console.log(stringValue.padStart(8, "bar")); // "barbafoo"
console.log(stringValue.padStart(2));        // "foo"

console.log(stringValue.padEnd(8, "bar"));   // "foobarba"
console.log(stringValue.padEnd(2));          // "foo"
```




