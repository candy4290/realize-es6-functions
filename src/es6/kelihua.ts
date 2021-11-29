/* 函数柯里化 add函数返回接受剩余参数的函数----特点：延迟执行（累计入参，最后才进行计算执行） */
function add() {
    const slice = Array.prototype.slice;
    const __args = slice.call(arguments);
    return function() {
        const __inargs = slice.call(arguments);
        if (arguments.length === 0) {
            return __args.reduce((p, c) => p + c);
        } else {
            return add.apply(this, __args.concat(__inargs));
        }
    }
}