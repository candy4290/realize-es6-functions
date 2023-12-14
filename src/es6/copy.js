// 浅拷贝
function shallowCopy(obj) {
    if (typeof obj !== 'object') { // 只拷贝对象
        return;
    }
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
}
// 深拷贝
function deepClone(obj, hash = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) { // 只拷贝对象
        return;
    }
    if (hash.has(obj)) return hash.get(obj)
    const newObj = obj instanceof Array ? [] : {};
    hash.set(obj, newObj)
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
        }
    }
    return newObj;
}
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
