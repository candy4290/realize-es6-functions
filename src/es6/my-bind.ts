interface Function {
    myBind(obj: any, ...args: any[]): any;
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