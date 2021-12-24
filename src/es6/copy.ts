// 浅拷贝
function shallowCopy(obj) {
    if (typeof obj !== 'object') { // 只拷贝对象
        return;
    }
    const newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
}

// 深拷贝
function deepClone(obj) {
    if (typeof obj !== 'object') { // 只拷贝对象
        return;
    }
    const newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
        }
    }
    return newObj;
}