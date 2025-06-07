/* 
题目描述
喊7是一个传统的聚会游戏，N个人围成一圈，按顺时针从1到N编号。

编号为1的人从1开始喊数，下一个人喊的数字为上一个人的数字加1，但是当将要喊出来的数字是7的倍数或者数字本身含有7的话，不能把这个数字直接喊出来，而是要喊”过”。

假定玩这个游戏的N个人都没有失误地在正确的时机喊了”过”，当喊到数字K时，可以统计每个人喊”过”的次数。

现给定一个长度为N的数组，存储了打乱顺序的每个人喊”过”的次数，请把它还原成正确的顺序，即数组的第i个元素存储编号i的人喊”过”的次数。

输入描述
输入为一行，为空格分隔的喊”过”的次数，注意K并不提供，K不超过200，而数字的个数即为N。

输出描述
输出为一行，为顺序正确的喊”过”的次数，也由空格分隔。

示例1
输入

0 1 0
输出

1 0 0
说明

一共只有一次喊”过”，那只会发生在需要喊7时，按顺序，编号为1的人会遇到7，故输出1 0 0。
*/
/* 
输入：[0,1,0]
返回: [1,0,0]

输入: [0, 0, 0, 1, 2]
返回: [0, 2, 0, 1, 0]
*/
/* 计算总共喊7的次数，然后while遍历模拟，得到最终正确的顺序 */
function recoverOrder(arr) {
    const N = arr.length;
    const totalPass = arr.reduce((a, b) => a + b, 0);
  
    const shoutCount = Array(N).fill(0);
    let current = 1;
    let passCount = 0;
  
    // 动态喊数，直到“过”的次数等于输入的总数
    while (passCount < totalPass && current <= 200) {
      if (current % 7 === 0 || String(current).includes('7')) {
        const person = (current - 1) % N;
        shoutCount[person]++;
        passCount++;
      }
      current++;
    }
  
    // 若最终喊完还不满足总过数，说明不合理
    if (passCount !== totalPass) {
      return '无法还原正确顺序';
    }
  
    return shoutCount
}
  