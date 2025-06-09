/* 
小明玩一个游戏。

系统发1+n张牌，每张牌上有一个整数。

第一张给小明，后n张按照发牌顺序排成连续的一行。

需要小明判断，后n张牌中，是否存在连续的若干张牌，其和可以整除小明手中牌上的数字。

输入描述
输入数据有多组，每组输入数据有两行，输入到文件结尾结束。

第一行有两个整数n和m，空格隔开。m代表发给小明牌上的数字。

第二行有n个数，代表后续发的n张牌上的数字，以空格隔开。

备注
1 ≤ n ≤ 1000
1 ≤ 牌上的整数 ≤ 400000
输入的组数，不多于1000
用例确保输入都正确，不需要考虑非法情况。
输出描述
对每组输入，如果存在满足条件的连续若干张牌，则输出1;否则，输出0
*/
/* 
我们维护 前缀和对 m 取模的值，只要两个前缀模值相同，说明中间那一段子数组和是 m 的倍数。
用数学公式理解：
prefix[j] - prefix[i] ≡ 0 mod m
→ prefix[j] % m == prefix[i] % m
*/
function hasDivisibleSubarray(arr, m) {
    const seen = new Set();
    seen.add(0); // 初始前缀和为0
    let prefixSum = 0;
  
    for (const num of arr) {
      prefixSum = (prefixSum + num) % m;
      if (seen.has(prefixSum)) {
        console.log([...seen], prefixSum, num)
        return 1;
      }
      seen.add(prefixSum);
    }
  
    return 0;
  }
console.log(hasDivisibleSubarray([3, 1, 2, 7, 4], 7)); // 输出: 1 （有子数组 [1,2,7,4] 和为14 能被7整除）
console.log(hasDivisibleSubarray([1, 1, 1], 5));       // 输出: 0
console.log(hasDivisibleSubarray([7, 14, 21], 7));     // 输出: 1
console.log(hasDivisibleSubarray([1, 2, 3], 6));       // 输出: 1 ([1,2,3]=6)
