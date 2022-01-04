interface Function {
    myBind(obj: any, ...args: any[]): any;
    myBind1(obj: any, ...args: any[]): any;
}
Function.prototype.myBind = function(obj: any, ...args1: any[]) {
    return (...args2: any[]) => {
        let args = args1.concat(args2);
        let val: any;
        obj._fn = this;
        val = obj._fn(...args);
        delete obj._fn;
        return val;
    }
}
var testBind = {
    name: 'cxx',
    myBindTest: function(...args: any[]) {
        console.log(this.name);
    }
}
var tt = {
    name: 'tt'
}
testBind.myBindTest();
testBind.myBindTest.bind(tt);

/* 使用apply */
Function.prototype.myBind1 = function(context) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    const fToBind = this; // 此处this指向调用myBind1函数的对象，其实就是原函数
    const outArgs = Array.prototype.slice.call(arguments, 1);
    function fBound() {
        const innerArgs = Array.prototype.slice.call(arguments);
        return fToBind.apply(this instanceof fBound ? this : context, outArgs.concat(innerArgs))
    }
    fBound.prototype = Object.create(fToBind.prototype);
    return fBound;
}