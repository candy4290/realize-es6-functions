/* 函数记忆 缓存计算结果 空间换时间 */
function memoize(f) {
    const cache = {};
    return function() {
        const key = Array.prototype.join.call(arguments, ',');
        if (key in cache) {
            return cache[key]
        } else {
            return cache[key] = f.apply(this, arguments);
        }
    }
}