
/**
 * 使用 defineProperty做数据劫持
 * 存在问题：
 *          1.无法监听属性的添加或者删除
 *          2.数组的变化无法监听到
 *          3.使用递归遍历对象，可能耗时久且存在性能问题
 *
 * @param {*} obj
 * @return {*} 
 */
function observer(obj) {
    if (obj !== null && typeof obj === 'object') {
        for (let key in obj) {
            defineReactive(obj, key, obj[key])
        }
    }
}
function defineReactive(obj,key,value) { // 针对value是对象进行递归检测
    observer(value); // 劫持对象的key
    Object.defineProperty(obj, key, {
        get() {
            console.log('获取：' + key);
            return value;
        },
        set(val) { // 针对所有的val是对象
            observer(val);
            console.log(key + '-数据改变了')
            value = val;
        }
    })
}
let obj = {
    name: '守候',
    flag: {
        book: {
            name: 'js',
            page: 325
        },
        interest: ['火锅', '旅游'],
    }
}
observer(obj)


/**
 * 使用Proxy和Reflect来实现数据劫持
 * 优点：可以监听属性的新增\数组变化
 *
 * @param {*} obj
 * @return {*} 
 */
function observerProxy(obj) {
    let handler = {
        get(target,key,receiver) { /* receiver-Proxy或者继承Proxy的对象 */
            console.log('获取：' + key);
            if (typeof target[key] === 'object' && target[key] !== null) {
                return new Proxy(target[key], handler)
            }
            return Reflect.get(target, key, receiver);
        },
        set(target,key,value,receiver) {
            console.log(key+"-数据改变了")
            return Reflect.set(target,key,value,receiver)
        }
    }
    return new Proxy(obj, handler);
}
let obj = {
    name: '守候',
    flag: {
        book: {
            name: 'js',
            page: 325
        },
        interest: ['火锅', '旅游']
    }
}
let objTest = observerProxy(obj);

// 1.Object.defineProperty 拦截的是对象的属性，会改变原对象。proxy 是拦截整个对象，通过 new 生成一个新对象，不会改变原对象。
// 2.proxy 的拦截方式，除了上面的 get 和 set ，还有 11 种。选择的方式很多 Proxy，也可以监听一些Object.defineProperty 监听不到的操作，比如监听数组，监听对象属性的新增，删除等。