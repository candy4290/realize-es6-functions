
/**
 * 节流函数
 * 连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。
 *
 */
function MyThrottle(fn: Function, interval: number) {
    let flag = null;
    let that = this;
    return function() {
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