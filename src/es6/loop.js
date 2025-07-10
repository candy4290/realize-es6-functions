async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(() => {
    console.log('setTimeout')
},0);
async1();
new Promise((r) => {
    console.log('promise1');
    r()
}).then(() => console.log('promise 2'));
console.log('script end')

// 同步：console.log('script start');console.log('async1 start');console.log('async2');console.log('promise1');console.log('script end')
// 微任务：console.log('async1 end');console.log('promise 2')
// 宏任务：console.log('setTimeout')