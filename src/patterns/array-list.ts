export class ArrayList {
    array = [];
    insert(item: any) {
        this.array.push(item);
    }
    toString() {
        return this.array.join();
    }

    /**
     * 冒泡排序
     * 时间复杂度o(n)---o(n^2)
     * 最少遍历一遍，运算了n次
     * 最多运算了n(n-1)/2
     *
     * @memberof ArrayList
     */
    bubbleSort() {
        const len = this.array.length;
        let isSwap = true;//本次循环是否发生过数值交换，若false，则表示所有元素都有序
        for (let i = 0; i < len; i++) {
            if (!isSwap) {
                break;
            }
            isSwap = false;
            for (let j = 0; j < len - 1 - i; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    this.swap(j, j+1);
                    isSwap = true;
                }
            }
        }
    }

    private swap(index1: number, index2: number) {
        const temp = this.array[index1];
        this.array[index1] = this.array[index2];
        this.array[index2] = temp;
    }

    /**
     * 选择排序
     * 思路：找到最小的值放到第一位，第二小放到第二位，以此类推
     * 时间复杂度o(n^2)
     *
     * @memberof ArrayList
     */
    selectionSort() {
        const len = this.array.length;
        let indexMin;
        for (let i = 0; i < len - 1; i++) {
            indexMin = i;
            for (let j = i + 1; j < len; j ++) {
                if (this.array[indexMin] > this.array[j]) {
                    indexMin = j;
                }
            }
            if (i !== indexMin) {
                this.swap(i, indexMin);
            }
        }
    }

    /**
     * 插入排序
     * 时间复杂度o(n)~o(n^2)
     * 思路：从第二项开始，与第一项做比较，判断是否应该插入到第一项前还是不变位置，以此类推
     *
     * @memberof ArrayList
     */
    insertSort() {
        const len = this.array.length;
        let temp, j;
        for (let i = 1; i < len; i++) {
            temp = this.array[i];
            j = i;
            while(j > 0 && this.array[j - 1] > temp) {
                this.array[j] = this.array[j - 1];
                j--;
            }
            this.array[j] = temp;
        }
    }

    /**
     * 归并排序，采用分治的思想
     * 算法复杂度n*log(n)
     *
     * @memberof ArrayList
     */
    mergeSortRec(array: any[]) {
        const len = array.length;
        if (len === 1) {
            return array;
        }
        let mid = Math.floor(len / 2);
        let left = array.slice(0, mid);
        let right = array.slice(mid);
        return this.merge(this.mergeSortRec(left), this.mergeSortRec(right));
    }

    /**
     * left,right都已经排序好，将他们合并为一个排序好的数组。
     *
     * @param {any[]} left
     * @param {any[]} right
     * @memberof ArrayList
     */
    merge(left: any[], right: any[]) {
        const result = [];
        let leftIndex = 0, leftLength = left.length, 
        rightIndex = 0, rightLength = right.length;
        while (leftIndex < leftLength && rightIndex < rightLength) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex++]);
            } else {
                result.push(right[rightIndex++]);
            }
        }
        while (leftIndex < leftLength) {
            result.push(left[leftIndex++]);
        }
        while(rightIndex < rightLength) {
            result.push(right[rightIndex++]);
        }
        console.log('将数组，' + left + '和数组，' + right + '合并为数组，' + result);
        return result;
    }


    /**
     * 快速排序，采用分治思想.选取一个基准点，比其大的放右边，比其小的放左边。
     * 此处使用双指针，不需要任何额外空间
     * 算法复杂度n*log(n)
     *
     * @memberof ArrayList
     */
    quickSort() {
        this.quick(this.array, 0, this.array.length - 1);
    }

    /**
     * 采用递归
     * @param {number[]} array
     * @param {number} left 左指针
     * @param {number} right 右指针
     * @memberof ArrayList
     */
    quick(array: number[], left: number, right: number) {
        let index;
        if (array.length > 1) {
            index = this.partition(array, left, right);
            if (left < index - 1) {
                this.quick(array, left, index - 1);
            }
            if (index < right) {
                this.quick(array, index, right);
            }
        }
    }

    // 划分过程
    partition(array: number[], left: number, right: number) {
        const flag = Math.floor((right + left) / 2);
        const pivot = array[flag];
        let i = left, j = right;
        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }
            while (array[j] > pivot) {
                j--;
            }
            if (i <= j) {
                this.swap(i, j);
                i++;
                j--;
            }
        }
        return i;
    }
}