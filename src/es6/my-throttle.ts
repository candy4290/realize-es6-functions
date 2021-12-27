
/**
 * 节流函数---使用定时器
 * 连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。
 * 停止触发后，还在执行一下（setTimeout还没执行完）
 *
 */
function MyThrottle(fn: Function, interval: number) {
    let flag = null;
    return function() {
        let that = this;
        if (!flag) {
            flag = true;
            const args = arguments;
            const t$ = setTimeout(() => {
                flag = false;
                fn.apply(that, args);
                clearTimeout(t$);
            }, interval);
        }
    }
}

/**
 * 节流---使用时间戳,如果希望触发时立即执行，可以将previous初始值设为0
 * 停止触发后不会再次执行
 *
 * @param {*} fn
 * @param {*} delay
 */
function MyThrottle2(fn: Function, delay: number) {
    let previous = new Date().getTime();
    return function() {
        const context = this;
        const args = arguments;
        let now = new Date().getTime();
        if (now - previous > delay) {
            fn.apply(context, args);
            previous = now;
        }
    }
}