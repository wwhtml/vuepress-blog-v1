# Array
除了 Object 之外，Array 类型恐怕是 ECMAScript 中最常用的类型了。而且，ECMAScript 中
的数组与其他多数语言中的数组有着相当大的区别。虽然 ECMAScript 数组与其他语言中的数组都是
数据的有序列表，但与其他语言不同的是，ECMAScript 数组的每一项可以保存任何类型的数据。也
就是说，可以用数组的第一个位置来保存字符串，用第二位置来保存数值，用第三个位置来保存对象，
以此类推。
[[toc]]


## 创建数组

### Array
```js
//字符
var colors = Array('red','green','blue');
console.log(colors);//['red','green','blue']

var colors = Array(3);
console.log(colors);//[空 ×3]
console.log(colors.length);//3
console.log(colors[0]);//"undefined"

//数值
var nums = Array(1,2,3);
console.log(nums );//[1,2,3]
```



### new Array()
```js
//字符
var colors = new Array('red','green','blue');
console.log(colors);//['red','green','blue']

var colors = new Array(3);
console.log(colors);//[空 ×3]
console.log(colors.length);//3
console.log(colors[0]);//"undefined"

//数值
var nums = new  Array(1,2,3);
console.log(nums );//[1,2,3]
```



### 数组字面量方式
在使用数组字面量表示法创建数组不会调用Array构造函数。
```js
var colors = ["red", "blue", "green"];  // 创建一个包含3个元素的数组
var names = [];  // 创建一个空数组
names[0] = 0;
names[1] = 1;
console.log(names);//[0,1]
var values = [1,2,];  // 创建一个包含2个元素的数组![Alt text](./1642692836787.png)
```

### Array.from()
Array.from() 将类数组结构转换为数组实例。

### Array.of()
Array.of()：将一组参数转换为数组实例。
## 数组索引
```js
var arr = [1,2,3,4]
arr.length = 4

数组末尾添加元素：arr.[arr.length-1] = 5
arr变成[1,2,3,4,5]
```

## 数组空位
数组的空位指的是，数组的某一个位置没有任何值，比如Array()构造函数返回的数组都是空位。

Array(3) // [, , ,]
上面代码中，Array(3)返回一个具有 3 个空位的数组。

注意，空位不是undefined，某一个位置的值等于undefined，依然是有值的。空位是没有任何值，in运算符可以说明这一点。

0 in [undefined, undefined, undefined] // true
0 in [, , ,] // false
上面代码说明，第一个数组的 0 号位置是有值的，第二个数组的 0 号位置没有值。

ES5 对空位的处理，已经很不一致了，大多数情况下会忽略空位。

forEach(), filter(), reduce(), every() 和some()都会跳过空位。
map()会跳过空位，但会保留这个值
join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。
// forEach方法
[,'a'].forEach((x,i) => console.log(i)); // 1

// filter方法
['a',,'b'].filter(x => true) // ['a','b']

// every方法
[,'a'].every(x => x==='a') // true

// reduce方法
[1,,2].reduce((x,y) => x+y) // 3

// some方法
[,'a'].some(x => x !== 'a') // false

// map方法
[,'a'].map(x => 1) // [,1]

// join方法
[,'a',undefined,null].join('#') // "#a##"

// toString方法
[,'a',undefined,null].toString() // ",a,,"
ES6 则是明确将空位转为undefined。

Array.from()方法会将数组的空位，转为undefined，也就是说，这个方法不会忽略空位。

Array.from(['a',,'b'])
// [ "a", undefined, "b" ]
扩展运算符（...）也会将空位转为undefined。

[...['a',,'b']]
// [ "a", undefined, "b" ]
copyWithin()会连空位一起拷贝。

[,'a','b',,].copyWithin(2,0) // [,"a",,"a"]
fill()会将空位视为正常的数组位置。

new Array(3).fill('a') // ["a","a","a"]
for...of循环也会遍历空位。

let arr = [, ,];
for (let i of arr) {
  console.log(1);
}
// 1
// 1
上面代码中，数组arr有两个空位，for...of并没有忽略它们。如果改成map()方法遍历，空位是会跳过的。

entries()、keys()、values()、find()和findIndex()会将空位处理成undefined。

// entries()
[...[,'a'].entries()] // [[0,undefined], [1,"a"]]

// keys()
[...[,'a'].keys()] // [0,1]

// values()
[...[,'a'].values()] // [undefined,"a"]

// find()
[,'a'].find(x => true) // undefined

// findIndex()
[,'a'].findIndex(x => true) // 0
由于空位的处理规则非常不统一，所以建议避免出现空位。



## 数组检测方法
```js
var colors = ["red", "blue", "green"];

console.log(colors instanceof Array); //true

console.log(Object.prototype.toString.call(colors) == "[object Array]");//true

console.log(Array.isArray(colors));//true
```

## 扩展运算符

## 数组的静态属性

## 数组的静态方法

### Array.isArray()
`Array.isArray(obj)`：判断obj是否是一个数组。
- obj：被检测的值。
- 返回值：true/false.
```js
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'))
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype);

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32))
Array.isArray({ __proto__: Array.prototype });
```
### Array.from()


### Array.of()


## 数组的实例方法

### 转换方法
- toLocaleString()
- toString()
- valueOf()
- join()：将数组转化为字符串

### 迭代方法

### 归并方法

### 队列方法

### 栈方法

### 操作方法

### 重排序方法

### 搜索和位置方法

### 迭代器方法

### 复制和填充方法

### at()

## 数组去重

## 数组排序











## 参考地址
[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
[https://es6.ruanyifeng.com/#docs/array](https://es6.ruanyifeng.com/#docs/array)
