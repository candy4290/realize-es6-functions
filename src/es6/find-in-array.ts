
/**
 * findIndex手写
 *
 * @param {*} array
 * @param {*} predicate
 * @param {*} context
 * @return {*} 
 */
function myFindIndx(array, predicate, context) {
    for (let i = 0, len = array.length; i < len; i++) {
        if (predicate.call(context, array[i], i, array)) return i;        
    }
    return -1;
}

function myFindLastIndx(array, predicate, context) {
    const len = array.length;
    for (let i = len - 1; i >= 0; i--) {
        if (predicate.call(context, array[i], i, array)) return i;
    }
    return -1;
}