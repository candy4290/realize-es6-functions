Object.prototype.myPrototypeOf = function(obj) {
    obj = obj.__proto__;
    while (obj) {
        if (obj === this) return true
        obj = obj__proto__;
    }
    return false
}

function instanceof1(left, right) {
    let prototype = right.prototype;
    obj = left.__proto__;
    while (obj) {
        if (obj === prototype) return true
        obj = obj__proto__;
    }
    return false

}