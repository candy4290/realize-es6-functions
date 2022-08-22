
/**
 * 冒泡
 * 时间复杂度o(n)~o(n^2)
 * 空间复杂度o(1)
 *
 * @param {number[]} arr
 * @return {*} 
 */
function popSort(arr: number[]) {
    let isSort = true;
    for (let i = 0,len=arr.length; i< len - 1; i++) {
        for (let j=0;j<len - i - 1;j++) {
            if (arr[j] > arr[j+1]) {
                isSort = false;
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]] /* 利用解构来交换 */
            }
        }
        if (isSort) {
            break;
        }
    }
    return arr;
}

/**
 * 插入排序
 * 时间复杂度o(n)~o(n^2)
 * 空间复杂度o(1)
 *
 * @param {number[]} arr
 * @return {*} 
 */
function insertSort(arr: number[]) {
    let cIdx;
    for (let i = 1,len=arr.length; i < len; i++) {
        cIdx = i;
        while (cIdx >= 0 && arr[cIdx] < arr[cIdx - 1]) {
            [arr[cIdx], arr[cIdx - 1]] = [arr[cIdx-1], arr[cIdx]];
            cIdx--;
        }
    }
    return arr;
}

/**
 * 快排：选取基准点，比基准点小的放左边，大的放右边
 *
 */
function quickSort(arr: number[]) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIdx = Math.floor(arr.length/2);
    const point = arr.splice(pivotIdx, 1)[0];
    let left = [], right = [];
    arr.forEach(i => {
        i <= point ? left.push(i) : right.push(i)
    });
    return quickSort(left).concat([point], quickSort(right));
}

/**
 * 按大小顺序合并两个已排序的数组
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 */
function mergeSort(arr1: number[], arr2: number[]) {
    const result = [];
    while(arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) {
            result.push(arr1.shift())
        } else {
            result.push(arr2.shift())
        }
    }
    return result.concat(arr1, arr2);
}

/**
 * 归并排序;将数组不停从中间划分为两块，一直到划分到最小后，开始合并；分冶思想
 *
 * @param {number[]} arr
 */
function guiBingSort(arr: number[]) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    left = guiBingSort(left);
    right = guiBingSort(right);
    return mergeSort(left, right);
}

function binarySearch(arr: number[], target: number) {
    let minIdx = 0,maxIdx = arr.length - 1;
    while(minIdx <= maxIdx) {
        let mid = Math.floor((maxIdx + minIdx)/2);
        const temp = arr[mid];
        if (temp < target) {
            minIdx = mid + 1;
        } else if (temp > target) {
            maxIdx = mid - 1
        } else {
            return temp;
        }
    }
    return -1;
}