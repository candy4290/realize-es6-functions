function myNew(fn, ...arg) {
    const obj = Object.create(fn.prototype); /* 创建空对象，并将空对象的__proto__链接到构造函数的prototype */
    const ret = fn.apply(obj, arg); /* 将刚才创建的对象，作为this的上下文 */
    return ret instanceof Object ? ret : obj; /* 如果构造函数返回东西，则返回。否则返回第一步创建的对象 */
}