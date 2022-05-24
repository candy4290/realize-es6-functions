let foo = 1;
setTimeout(() => { /* 该模块加载后，内部的foo变化影响不到输出的exports.foo */
    foo = 2;
}, 500);
module.exports = {
    foo:foo
}