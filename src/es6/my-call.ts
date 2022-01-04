interface Function {
    myCall(obj: any, ...args: any[]): any;
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