##  undefined
Undefined:是基本数据类型。
1. 这个数据类型只有一个值，那就是undefined
2. 在使用var 声明但是没有初始化的时候，这个变量的值就默认是undefined。
3. 之所以会在第三版引入这个undefined值，就是为了这个是区分空对象指针null和未经初始化的变量。
## null
Null ：是一个空指针对象；他的值也只有一个，就是null。
1. 从逻辑角度来说他是空对象指针，所以用typeof检测的结果是“object”。
2. 如果定义的变量准备在将来用于保存对象，那么最好将该变量初始化为null，而不是其他值，这样一来就可以直接检查null值就可以知道变量是否已经保存了一个对象的引用
3. 实际上undefined值是派生自null值，因此console.log(null == undefined);//true