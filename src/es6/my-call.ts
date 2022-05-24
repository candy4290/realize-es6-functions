interface Function {
    myCall(obj: any, ...args: any[]): any;
    myCall2(obj: any, ...args: any[]): any;
}
Function.prototype.myCall = function(context) {
    var context = context || window;
    context.fn = this;
    const args = [];
    for(let i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    eval('context.fn(' + args + ')');
    delete context.fn;
}

Function.prototype.myCall2 = function(context) {
    if (typeof this !== 'function') {
      throw new Error('只有函数可以调用myCall')
    }
    const ctx = context || window; // 没有传入this，则默认指向window
    const arr = Array.prototype.slice.call(arguments, 1); 
    ctx._fn = this;
    if (arr.length === 0) {
        ctx._fn();
    } else {
      ctx._fn(...arr); 
    }
    delete ctx._fn;
  }