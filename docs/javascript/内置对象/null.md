
# null
Null ：是一个空指针对象；他的值也只有一个，就是null。
1. 从逻辑角度来说他是空对象指针，所以用typeof检测的结果是“object”。
2. 如果定义的变量准备在将来用于保存对象，那么最好将该变量初始化为null，而不是其他值，这样一来就可以直接检查null值就可以知道变量是否已经保存了一个对象的引用
3. 实际上undefined值是派生自null值，因此console.log(null == undefined);//true