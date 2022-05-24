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

Function.prototype.myApply = function(context, arr) {
   if (typeof this !== 'function') {
      throw new Error('只有函数可以调用myApply方法！')
    }
    const ctx = context || window;
    ctx._fn = this;
    if (!arr) {
      ctx._fn();
    } else {
      ctx._fn(...arr); 
    }
    delete ctx._fn;
}