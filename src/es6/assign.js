// Object.assign() 浅拷贝 一级拷贝，拷贝的是属性值；
const a = {
    'a': {
        'c': '1'
    },
    'b': '2'
}
const b = Object.assign({}, a);
b.a.c = '11';
b.b = '22'
console.log(a); // { a: { c: '11' }, b: '2' }, c的值改变了---浅拷贝  b没变
// concat方法与slice也存在这样的情况，他们都不是真正的深拷贝
// 深拷贝
// JSON.parse(JSON.stringify({...})); 此方法只能拷贝对象

// 手动实现深拷贝
function deepClone(obj) {
    let objClone = Array.isArray(obj)?[]:{};
    if (obj && typeof obj === 'object') {
        for(key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] && typeof obj[key] === 'object') {
                    objClone[key] = deepClone(obj[key]);
                } else {
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}