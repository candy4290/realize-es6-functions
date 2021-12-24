/* 
所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
防抖函数，接受一个函数，防抖时间，返回一个具有防抖功能的函数
*/
function MyDebounce(fn: Function, delay: number) {
    let timer = null;
    return function() {
        const that = this;
        const args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            fn.apply(that, args)
        }, delay);
    }
}

/**
 * 立即执行版本---立即执行，然后等到停止触发delay后，才可以重新触发执行
 *
 * @param {Function} fn
 * @param {number} delay
 * @param {boolean} immediate
 * @return {*} 
 */
function MyDebounce2(fn: Function, delay: number, immediate: boolean) {
    let timer = null;
    return function() {
        const that = this;
        const args = arguments;
        clearTimeout(timer);
        if (immediate) {
            // 如果已经执行过，不再执行
            let callNow = !timer;
            timer = setTimeout(function() {timer = null}, delay);
            if (callNow) {
                fn.apply(that, args);
            }
        } else {
            timer = setTimeout(function() {
                fn.apply(that, args)
            }, delay);;
        }
    }
}

/**
 * 立即执行+可取消版本
 *
 * @param {Function} fn
 * @param {number} delay
 * @param {boolean} immediate
 * @return {*} 
 */
function MyDebounce3(fn: Function, delay: number, immediate: boolean) {
    let timer = null;
    const debounce = function() {
        const that = this;
        const args = arguments;
        clearTimeout(timer);
        if (immediate) {
            // 如果已经执行过，不再执行
            let callNow = !timer;
            timer = setTimeout(function() {timer = null}, delay);
            if (callNow) {
                fn.apply(that, args);
            }
        } else {
            timer = setTimeout(function() {
                fn.apply(that, args)
            }, delay);;
        }
    }
    debounce.cancel = function() {
        clearTimeout(timer);
        timer = null;
    };
    return debounce;
}

