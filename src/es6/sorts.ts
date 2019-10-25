
/**
 * 插入排序 --- 类比打扑克抓牌阶段 排序
 * 
 * 时间复杂度o(n)-o(n^2)
 * 空间复杂度o(1)
 * 
 * 从第一个元素开始，该元素可以认为已经被排序；
 * 取出下一个元素，在已经排序的元素序列中从后向前扫描；
 * 如果该元素（已排序）大于新元素，将该元素移到下一位置；
 * 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
 * 将新元素插入到该位置后；
 * 重复步骤2~5。
 *
 */
function insertSort(arr: number[]) {
    const len = arr.length;
    let preIndex: number, current: number;
    for(let i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >=0 && current < arr[preIndex]) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}
// let arr = [3,5,7,1,4,56,12,78,25,0,9,8,42,37];
// const start = Date.now();
// insertSort(arr);
// console.log('耗时：' + (Date.now() - start) + 'ms')
// console.log(arr);

/**
 * 冒泡排序
 * 时间复杂度o(n)~o(n^2)
 * 数组中有 n 个数，比较每相邻两个数，如果前者大于后者，就把两个数交换位置；
 * 这样一来，第一轮就可以选出一个最大的数放在最后面；那么经过 n-1（数组的 length - 1） 轮，
 * 就完成了所有数的排序。
 * @param {number[]} arr
 */
function popSort(arr: number[]) {
    for (let i = 0, len = arr.length; i < len - 1; i ++) {
        let isSort = true;
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                isSort = false;
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if (isSort) {
            break;
        }
    }
    return arr;
}
// let arr2 = [3,5,7,1,4,56,12,78,25,0,9,8,42,37];
// const start2 = Date.now();
// popSort(arr2);
// console.log('耗时：' + (Date.now() - start2) + 'ms')
// console.log(arr2);

/**
 * 快速排序
 *
 * @param {number[]} arr
 */
function Partition(arr: number[], low: number, high: number) {
    let i = low, j = high, pivot = arr[i];
    while(i !== j) {
        while(i < j && arr[j] > pivot)
            j--;
        if (i < j) {
            swap(i++, j, arr);
        }

        while(i < j && arr[i] <= pivot)
            i++;
        if (i < j) {
            swap(i, j--, arr);
        }
    }
    return i;
}
function swap(a: number, b: number, arr: number[]) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function quickSort(arr: number[], low: number, high: number) {
    let mid: number;
    if (low < high) {
        mid = Partition(arr, low, high);
        quickSort(arr, low,mid-1);
        quickSort(arr, mid+1,high);
    }
}
let arr2 = [3,5,7,1,4,56,12,78,25,0,9,8,42,37];
const start2 = Date.now();
quickSort(arr2, 0, arr2.length - 1);
console.log('耗时：' + (Date.now() - start2) + 'ms')
console.log(arr2);