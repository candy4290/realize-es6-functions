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

/* 柯里化函数 */
function curry(fn) {
    const args = [].slice.call(arguments, 1);
    return function() {
        const newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this, newArgs)
    }
}

function addT(a, b) {
    return a+b;
}
const addCurry = curry(addT);

/* 偏函数 */
function partial(fn) {
    const args = [].slice.call(arguments, 1);
    return function() {
        const newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this, newArgs)
    }
}

function add1(a, b) {
    return a + b + this.value;
}

// var addOne = partial(add1, 1);

// var value = 1;
// var obj = {
//     value: 2,
//     addOne: addOne
// }
// obj.addOne(2); // 5