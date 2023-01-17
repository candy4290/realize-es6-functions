/* 数组可以使用for of,因为内置了迭代器 */
const arr = [1,2,3,4,5,6];
const it = arr[Symbol.iterator]();
it.next();
it.next();
it.next();
it.next();

/* 对象无法for of,因为没有迭代器，可以定义一个迭代器 */
const obj = {
    a:1,
    b:2,
    c:3,
    d:4
};
Object.defineProperty(obj, Symbol.iterator, {
    enumerable: false, // 是否可在for...in...和Object.keys()中被枚举
    writable: false,
    configurable: true, // 属性可否被删除，以及除value和writable特性外的其他特性是否可被修改
    value: function() {
        var o = this;
        var idx = 0;
        var ks = Object.keys(o);
        return {
            next: function() {
                return {
                    value: o[ks[idx++]],
                    done: (idx > ks.length)
                }
            }
        }
    }
})
var it2 = obj[Symbol.iterator]();
it2.next(); // { value:1, done:false }
it2.next(); // { value:2, done:false }
it2.next(); // { value:3, done:false }
it2.next(); // { value:4, done:false }
it2.next(); // { value:undefined, done:true }
// 用 for..of 遍历 myObject
for (var v of obj) {
    console.log( v )
}