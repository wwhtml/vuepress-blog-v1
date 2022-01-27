# Boolean

Boolean类型：只有两个字面量值，就是 true 和 false
1. 因为这两个值与数字值不是一回事，所以true不一定是1，false不一定是0.
2. true和false作为boolean值必须是小写的，其他写法都不是布尔值，只是标识符。
3. 虽然布尔类型的字面值只有两个，但是【ES中所有类型的值都有与这两个布尔值等价的值】。
4. Boolean()讲一个值转换为对应的Boolean值。
    - 任何非空字符串，转化为布尔值都是true。
    - 任何非零数值（仅限有效数字）转换为布尔值都是true。
    - 任何对象（包括空对象{}）转换为布尔值都是true。
    - null，undefined，空字符串，0，NaN 转换为布尔值是false。

5. null与undefined在与其他数相等运算时不进行类型转换