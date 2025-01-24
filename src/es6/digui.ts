// 阶乘
function jiecheng(n) {
    if (n === 1) return 1;
    return n*jiecheng(n-1);
}

// 尾调用：函数内部的最后一个动作是函数调用。该调用的返回值，直接给函数；
// 尾调用：执行计算是在递的过程中，归的过程不执行任何继续，只是层层返回
// 使用尾递归来优化；主要优化递归产生的执行栈
function jcWei(n, total) {
    if (n===1) return total;
    return jcWei(n - 1, n*total);
}
// jcWei(5,1)