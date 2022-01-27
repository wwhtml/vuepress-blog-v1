# Object
[[toc]]

## 创建单个对象的方法有两种
*   其一：使用new操作符后面跟一个Object构造函数。`let obj = new Object()`
*   其二：对象字面量表示法。（简化了创建“包含大量对象属性”的过程）`let obj = {name:"王伟"}`

**构造函数方式**
```javascript
var person = new Object();
person.name = "wangwei";
person.age = 26;
console.log(person);//{ name: 'wangwei', age: 26 }
```
**对象字面量表示法**
```javascript
var person1 = {
    name:'malin',
    age:'age'
};
console.log(person1);//{ name: 'malin', age: 'age' }
```
属性名也可以使用字符串，有空格的属性名必须使用字符串

```javascript
var person2 = {
    'name':'malin',
    'age':26,
    5:true//数字会自动转化为字符串
};
console.log(person2);// { '5': true, name: 'malin', age: 26 }
```
只留花括号：可以定义只包含默认属性和方法的对象。

```javascript
var person3 = {};
person3.name="wangwei3";
person3.age = 26;
console.log(person3);//{ name: 'wangwei3', age: 26 }
```
注意：通过字面量定义对象的时候，实际上不会调用Object构造函数

## 对象属性的调用
```javascript
var person = {
    name:'malin',
    age:26,
    5:true,//数字会自动转化为字符串
    'first name':'wangwei'
};
console.log(person);// { '5': true, name: 'malin', age: 26 }
```
1、可以通过" ." 或者 "[]" 调用对象中的属性
```javascript
console.log(person.name);//"malin"
console.log(person["name"]);//"malin"
```
2、数字 或者 有空格的字符串 只能使用方括号调用

```javascript
console.log(person["5"]);//true
console.log(person['first name']);//wangwei
```
【除非必须使用变量来访问属性，否则建议使用点表示法。】


## Object的静态方法
### Object.assign()
`Object.assign(target, ...sources)`：方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
- target：目标对象。
- sources：源对象。
- 返回值：目标对象。
```js
var target = { a: 1 };
var source1 = { c: 3 };
var source2 = { e: 5 };
var res = Object.assign(target, source1, source2);
console.log(res); //{a:1, b:2, c:3}
console.log(target); //{a: 1, c: 3, e: 5}
console.log(res == target); //true
console.log(res === target); //true
```
如果目标对象和源对象，或者多个源对象中有同名属性，那么后面的属性会覆盖前面的属性。
```js
var target = { a: 1, b: 1 };
var source1 = { b: 2, c: 2 };
var source2 = { c: 3 };
Object.assign(target, source1, source2);
console.log(target); //{a:1, b:2, c:3}
```
如果只有一个参数，Object.assign()会直接返回该参数。
```js
var obj = { a: 1 };
Object.assign(obj) === obj; // true
```

如果该参数不是对象，则会先转成对象，然后返回。
```js
console.log(Object.assign(1)); //Number {1}
console.log(typeof Object.assign(1)); //"object"
```
由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
```js
Object.assign(undefined); // 报错
Object.assign(null); // 报错
```
如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着，如果undefined和null不在首参数，就不会报错。
```js
var obj = { a: 1 };
Object.assign(obj, undefined) === obj; // true
Object.assign(obj, null) === obj; // true
```
其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。
```js
var v1 = "abc";
var v2 = true;
var v3 = 10;

var obj = Object.assign({}, v1, v2, v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```
上面代码中，v1、v2、v3分别是字符串、布尔值和数值，结果只有字符串合入目标对象（以字符数组的形式），数值和布尔值都会被忽略。这是因为只有字符串的包装对象，会产生可枚举属性。
```js
Object(true); // {[[PrimitiveValue]]: true}
Object(10); //  {[[PrimitiveValue]]: 10}
Object("abc"); // {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}
```
上面代码中，布尔值、数值、字符串分别转成对应的包装对象，可以看到它们的原始值都在包装对象的内部属性[[PrimitiveValue]]上面，这个属性是不会被Object.assign()拷贝的。只有字符串的包装对象，会产生可枚举的实义属性，那些属性则会被拷贝。
   



### Object.is()
`Object.is()` 方法判断两个值是否为同一个值。
- value1：被比较的第一个值。
- value2：被比较的第二个值。

返回值：true/false
```js
console.log(null === null); //true
console.log(undefined === undefined); //true
console.log(null === undefined); //false
console.log(NaN === NaN); //false
console.log(NaN === null); //false
console.log(-0 === 0); //false
console.log(+0 === 0); //false
console.log(+0 === -0); //false

console.log(Object.is(NaN, NaN)); //true
console.log(Object.is(-0, 0)); //false
console.log(Object.is(-0, +0)); //false
console.log(Object.is(+0, 0)); //true
console.log(Object.is(undefined, null)); //false

```
### Object.freeze()
`Object.freeze()` 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。
```js
var obj = {
  name: "mm",
};
Object.freeze(obj);

obj.name = "sss"; //严格模式下会报错
console.log(obj); //"mm"
// Object.isFrozen()方法判断一个对象是否被冻结。
console.log(Object.isFrozen(obj)); //true
```
### Object.keys()
`Object.keys(obj) `方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。

- obj：要返回其枚举自身属性的对象。

**返回值**：一个表示给定对象的所有可枚举属性的字符串数组。
```js
// simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```
如果你想获取一个对象的所有属性,，甚至包括不可枚举的，请查看Object.getOwnPropertyNames。

### Object.values()
```js
var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array like object with random key ordering
// when we use numeric keys, the value returned in a numerical order according to the keys
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']

```

### Object.entries()
`Object.entries(obj)`：方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。
- obj：可以返回其可枚举属性的键值对的对象。

**返回值**：给定对象自身可枚举属性的键值对数组。
```js
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```
**将Object转换为Map**
new Map() 构造函数接受一个可迭代的entries。借助Object.entries方法你可以很容易的将Object转换为Map:
```js
var obj = { foo: "bar", baz: 42 };
var map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }

```

### Object.create()
`Object.create()` 创建一个新对象，将现有对象作为新对象的__proto__.


```js
var obj = {
  sayName: function () {
    console.log(this.name);
  },
};
var res = Object.create(obj);
res.name = "mm";
res.age = 20;
console.log(res);
```
![Object create](/images/Object.create.png)



`Object.create(proto，[propertiesObject])`

- `proto`:新创建对象的原型对象。

- `propertiesObject`：可选。需要传入一个对象，该对象的属性类型参照`Object.defineProperties()`的第二个参数。如果该参数被指定且不为 `undefined`，该传入对象的自有可枚举属性(即其自身定义的属性，而不是其原型链上的枚举属性)将为新创建的对象添加指定的属性值和对应的属性描述符。

**用 Object.create实现类式继**

下面的例子演示了如何使用Object.create()来实现类式继承。这是一个所有版本JavaScript都支持的单继承。
```js
// Shape - 父类(superclass)
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父类的方法
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```


### Object.defineProperty()
`Object.defineProperty()`方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
```javascript
var obj1 = {};

Object.defineProperty(obj1, "name", {
  value: "ww",
});

console.log(obj1); //{name: 'ww'}
```

#### 语法
`Object.defineProperty(obj, prop, descriptor)`

- `obj`
    要定义属性的对象。
- `prop`
    要定义或修改的属性的名称或 Symbol 。
- `descriptor`
   要定义或修改的属性描述符

**返回值**：被传递给函数的对象。   


该方法允许精确地添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，在枚举对象属性时会被枚举到（for...in 或 Object.keys 方法），可以改变这些属性的值，也可以删除这些属性。这个方法允许修改默认的额外选项（或配置）。默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改（immutable）的。

对象里目前存在的属性描述符有两种主要形式：数据描述符和存取描述符。数据描述符是一个具有值的属性，该值可以是可写的，也可以是不可写的。存取描述符是由 getter 函数和 setter 函数所描述的属性。一个描述符只能是这两者其中之一；不能同时是两者。

这两种描述符都是对象。它们共享以下可选键值（默认值是指在使用 Object.defineProperty() 定义属性时的默认值）：

**数据属性**

| Tables        | Are           | 
| :------------- |:-------------| 
| configurable    | 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。`表示能否通过delete删除属性从而重新定义属性；` | 
| enumerable      | 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。默认为 false。 |
| value |该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。 |
| writable |   当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符 (en-US)改变。默认为 false。 |


数据描述符还具有以下可选键值：

**访问器属性属性**

| Tables        | Are           | 
| :------------- |:-------------| 
|Configurable|表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为数据属性。对于直接在象上定义的属性，这个特性的默认值为true。 |
|Enumerable|表示能否通过 for-in 循环返回属性。对于直接在对象上定义的属性，这个特性的默认值为 true。 |
|Get|在读取属性时调用的函数。默认值为 undefined。 |
|Set|在写入属性时调用的函数。默认值为 undefined|

描述符默认值汇总

- 拥有布尔值的键 configurable、enumerable 和 writable 的默认值都是 false。
- 属性值和函数的键 value、get 和 set 字段的默认值为 undefined。


#### 上述特性的理解
`configurable` 特性表示对象的属性是否可以被删除，以及除 value 和 writable 特性外的其他特性是否可以被修改。

- 默认值是：`false`；
- `configurable:false;`      不能使用`delete`删除`Object.defineProperty()`定义的属性。
- `configurable:true;`     可以使用`delete`删除`Object.defineProperty()`定义的属性。
- 通过`obj.name`添加的属性默认是`configurable:true`
```js
var obj1 = {};
//给obj1添加对象，并且设置数据属性
Object.defineProperty(obj1, "name", {
  value: "wangwei",
  configurable: false,  //注意：小写字母   
});

delete obj1.name;
obj1.age = "18";//这种方式定义的属性可以删除
console.log(obj1); //{age: '18', name: 'wangwei'}  
```

`enumerable` 定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。


`value`  该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。

- 默认为 undefined。

`writable` : 当 writable 属性设置为 false 时，该属性被称为“不可写的”。它不能被重新赋值。

- 默认值是：`false`；
- `writable:false;`     不能修改`Object.defineProperty()`定义的属性。
- `writable:true;`     可以修改`Object.defineProperty()`定义的属性。
- 通过`obj.name`方式添加的属性默认是`writable:true`


```js
const obj1 = {age:'10'};
Object.defineProperty(obj1, "name", {
  value: "ww",
  writable: false,
});

obj1.name = 'mm'
obj1.age = '20'
console.log(obj1);//{age: '20', name: 'ww'}
```
`get`：在读取属性时调用的函数。默认值为 undefined。

`set`：在写入属性时调用的函数。默认值为 undefined

```js
var obj = {};
var temp = null;
Object.defineProperty(obj, "name", {
  configurable: false,
  enumerable: false,
  get: function () {
    console.log("获取数据");
    return temp;
  },
  set: function (val) {
    console.log("设置数据");
    return (temp = val);
  },
});

obj.name = "mm";
console.log(obj);
console.log(obj.name);
console.log(temp);
```
![Object.defineProperty](/images/object.defineProperty.png)





### Object.defineProperties()
`Object.defineProperties()` 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
```js
var obj = {};
Object.defineProperties(obj, {
  name: {
    value: "wangwei",
    writable: true, //可修改
  },
  age: {
    value: "12",
    writable: false, //不可修改
  },
});

console.log(obj); //{name: 'wangwei', age: '12'}
obj.name = "sss";
obj.age = "99";
console.log(obj); //{name: 'sss', age: '12'}

// Object.defineProperty()
var obj = {};
Object.defineProperty(obj, "name", {
  value: "www",
  writable: true,
});
Object.defineProperty(obj, "age", {
  value: "111",
  writable: false,
});
console.log(obj); //{name: 'www', age: '111'}
```

## Object实例方法
### Object.prototype.valueOf()
### Object.prototype.toString()
### Object.prototype.toLocaleString()
### Object.prototype.hasOwnProperty()

## 对象的扩展运算
```js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // 1
y; // 2
z; // { a: 3, b: 4 }
```
## 其他的慢慢添加

## 参考地址
[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

[https://es6.ruanyifeng.com/#docs/object](https://es6.ruanyifeng.com/#docs/object)