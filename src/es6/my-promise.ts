/* promise实现了链式调用，避免嵌套多层级的回调
   pending可以转换为fulfilled或rejected并且只能转化一次。并且fulfilled、rejected状态只能由pending转化而来。
*/


/* 版本1：极简的实现+链式调用 
存在问题：如果在 then 方法注册 onFulfilled 之前，resolve 就执行了，onFulfilled 就不会执行到了
*/
class MyPromise {
    callbacks = [];
    constructor(fn) {
        fn(this._resolve.bind(this));
    }
    then(onFulfilled) {
        this.callbacks.push(onFulfilled) /* 存在一个数组里，可见then可以多次调用 */
        return this; /* 返回自身实例，以便链式调用 */
    }
    _resolve(value) {
        this.callbacks.forEach(fn => fn(value));
    }
}
/* 
实现思路
1. 调用 then 方法，将想要在 Promise 异步操作成功时执行的 onFulfilled 放入callbacks队列，其实也就是注册回调函数，可以向观察者模式方向思考；
2. 创建 Promise 实例时传入的函数会被赋予一个函数类型的参数，即 resolve，它接收一个参数 value，代表异步操作返回的结果，当异步操作执行成功后，会调用resolve方法，这时候其实真正执行的操作是将 callbacks 队列中的回调一一执行；
*/
// 验证：
let p = new Promise(resolve => {
    setTimeout(() => {
        console.log('done');
        resolve('5秒');
    }, 5000);
}).then((tip) => {
    console.log(tip);
}).then(tip => {
    console.log('then2', tip);
});

/* 版本2-加入延迟机制：上面实例存在一个问题，如果在then方法注册onFulfilled之前，resolve就执行了，onFulfilled就不会执行到了 
   极简的实现+链式调用+延迟机制
   存在问题：在 resolve 执行后，再通过 then 注册上来的 onFulfilled 都没有机会执行了
*/
class MyPromese2 {
    callback = [];
    constructor(fn) {
        fn(this._resolve.bind(this));
    }
    then(onFulfilled) {
        this.callback.push(onFulfilled);
        return this;
    }
    _resolve(value) {
        setTimeout(() => { /* 保证在resolve之前，then方法已经注册完所有的回调 */
            this.callback.forEach(fn => fn(value));
        });
    }
}

/* 版本3-增加状态&保存resolve的值 
注意 当增加完状态之后，原先的_resolve中的定时器可以去掉了。当reolve同步执行时，虽然callbacks为空，回调函数还没有注册上来，但没有关系，因为后面注册上来时，判断状态为fulfilled，会立即执行回调。
*/
class MyPromise3 {
    callbacks = [];
    rejects = [];
    state = 'pending'; /* 增加状态 */
    value = null; /* 保存结果 */
    error = null;
    constructor(fn) {
        fn(this._resolve.bind(this), this._reject.bind(this));
    }
    then(onFulfilled) {
        if (this.state === 'pending') {
            this.callbacks.push(onFulfilled);
        } else {
            onFulfilled(this.value);
        }
        return this;
    }
    catch(onRejected) {
        if (this.state === 'pending') {
            this.rejects.push(onRejected);
        } else {
            onRejected(this.error);
        }
        return this;
    }
    _resolve(value) {
        if (this.state !== 'pending') {
            return;
        }
        this.state = 'fulfilled'; // 改变状态
        this.value = value;
        this.callbacks.forEach(fn => fn(value));
    }
    _reject(err) {
       if (this.state !== 'pending') {
           return;
       } 
       this.state = 'rejected'; // 改变状态
       this.error = err;
       this.rejects.forEach(fn => fn(err));
    }
}