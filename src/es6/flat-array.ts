
/**
 * 数组扁平化---递归
 *
 * @param {*} arr
 * @return {*} 
 */
function flatten(arr) {
    let result = [];
    arr.forEach(item => {
        if (item instanceof Array) {
            result.push(...flatten(item))
        } else {
            result.push(item);
        }
    })
    return result;
}

// 如果元素都是数字或字符串
[1, [2, [3, 4]]].toString() // "1,2,3,4"

/**
 * 数组扁平化---使用reduce+递归
 *
 * @param {*} arr
 */
function flatten2(arr) {
    return arr.reduce((prev, next) => {
        return prev.concat(Array.isArray(next) ? flatten2(next) : next)
    }, [])
}

/**
 * 数组扁平化---使用扩展运算符(只可以扁平一层)+some
 *
 * @param {*} arr
 */
function flatten3(arr) {
    while (arr.some(i => Array.isArray(i))) {
        arr = [].concat(...arr);
    }
    return arr;
}

/**
 * 数组扁平化---使用generator生成器
 *
 * @param {*} arr
 */
function* flatten4(arr) {
    if (Array.isArray(arr)) {
        for(let i = 0; i < arr.length; i++) {
            yield* flatten4(arr[i])
        }
    } else {
        yield arr;
    }
}