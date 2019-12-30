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
     *
     * @memberof ArrayList
     */
    selectionSort() {
        const len = this.array.length;
        let indexMin;
        for (let i = 0; i < len - 1; i++) {

        }
    }
}