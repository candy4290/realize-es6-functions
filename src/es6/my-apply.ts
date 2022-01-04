/**
 * 手写apply
 *
 * @interface Function
 */
interface Function {
    myApply(obj: any, args?: any[]): any;
    myApply2(obj: any, args?: any[]): any;
}
Function.prototype.myApply = function(obj: any, args: any[]) {
    obj._fn = this;
    obj._fn(...args);
    delete obj._fn;
}
var test = {
    name: 'cxx',
    myApplyTest: function(args?: any[]) {
        console.log(this.name);
    }
}
var tt = {
    name: 'tt'
}
test.myApplyTest();
test.myApplyTest.myApply(tt, ['m', 'y', 'a', 'p', 'p', 'l', 'y']);

Function.prototype.myApply2 = function(context) {
    var context = context || window;
    context._fn = this;
    context._fn(Array.prototype.slice.call(arguments, 1));
    delete context._fn;
}
