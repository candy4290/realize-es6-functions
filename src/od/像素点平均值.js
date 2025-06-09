/* 
题目描述
一个图像有n个像素点，存储在一个长度为n的数组img里，每个像素点的取值范围[0,255]的正整数。

请你给图像每个像素点值加上一个整数k（可以是负数），得到新图newImg，使得新图newImg的所有像素平均值最接近中位值128。

请输出这个整数k。

输入描述
n个整数，中间用空格分开

备注
• 1 <= n <= 100
• 如有多个整数k都满足，输出小的那个k；
• 新图的像素值会自动截取到[0,255]范围。当新像素值<0，其值会更改为0；当新像素值>255，其值会更改为255；

例如newImg=”-1 -2 256″,会自动更改为”0 0 255″

输出描述
一个整数k

示例1
输入
129 130 129 130
输出
-2
说明
-1的均值128.5，-2的均值为127.5，输出较小的数-2
*/
/* 
输入[129,130,129,130]
输出 -2
*/
function getNum(arr) {
    let min,max;
    let minIndex,maxIndex;
    let cz;
    let czFlag;
    arr.forEach(i => {
        if (min === undefined) {
            min = i;
        }
        if (max === undefined) {
            max = i;
        }
        max = Math.max(max, i);
        min = Math.min(min, i);
        maxIndex = 255 - min;
        minIndex = -max;
    });
    for (let i = minIndex;i<maxIndex;i++) {
        const temp = arr.reduce((p, c) => {
            let temp = (c + i)
            if (temp < 0) {
                temp = 0;
            } else if (temp > 255) {
                temp = 255;
            }
            return p+temp;
        }, 0)/arr.length;
        if (cz === undefined) {
            cz = Math.abs(temp - 128);
            czFlag = i;
        } else {
            const t = Math.abs(temp - 128);
            if (t<cz) {
                cz = t;
                czFlag = i;
            }
        }
    }
    return czFlag;
}
// console.log(getNum([129,130,129,130]));
// console.log(getNum([0,0,0,0]));