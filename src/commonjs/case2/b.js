let foo = 1;
setTimeout(() => {
    foo = 2
}, 500);
module.exports = {
    foo: () => { /* 利用函数延迟执行的特点 */
        return foo;
    }
}