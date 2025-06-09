/* 
题目描述
一个局域网内有很多台电脑，分别标注为 0 ~ N-1 的数字。相连接的电脑距离不一样，所以感染时间不一样，感染时间用 t 表示。

其中网络内一台电脑被病毒感染，求其感染网络内所有的电脑最少需要多长时间。如果最后有电脑不会感染，则返回-1。

给定一个数组 times 表示一台电脑把相邻电脑感染所用的时间。

如图：path[i] = {i, j, t} 表示：电脑 i->j，电脑 i 上的病毒感染 j，需要时间 t。

输入描述
第一行输入一个整数N ，表示局域网内电脑个数 N ，1 ≤ N ≤ 200 ;

第二行输入一个整数M ,表示有 M 条网络连接；

接下来M行 ,每行输入为 i , j , t 。表示电脑 i 感染电脑j 需要时间 t 。（1 ≤ i , j ≤ N）

最后一行为病毒所在的电脑编号。

输出描述
输出最少需要多少时间才能感染全部电脑，如果不存在输出 -1

用例
输入	4
3
2 1 1
2 3 1
3 4 1
2
输出	2
说明	第一个参数：局域网内电脑个数N，1 ≤ N ≤ 200；
第二个参数：总共多少条网络连接
第三个 2 1 1 表示2->1时间为1
第六行：表示病毒最开始所在电脑号2
*/
/*
4, 
[
[2,1,1],
[2,3,1],
[3,4,1]
],
2
*/
/* 
 Bellman-Ford 算法
*/
function networkInfectTime(N, times, K) {
    const INF = Number.MAX_SAFE_INTEGER;
    const dist = new Array(N).fill(INF);
    dist[K - 1] = 0; // 初始电脑编号从 1 转换为 0-based
  
    for (let i = 0; i < N - 1; i++) {
      let updated = false;
      for (const [u, v, t] of times) {
        const from = u - 1, to = v - 1;
        if (dist[from] !== INF && dist[from] + t < dist[to]) {
          dist[to] = dist[from] + t;
          updated = true;
        }
      }
      if (!updated) break;
    }
  
    const max = Math.max(...dist);
    return max === INF ? -1 : max;
  }
  
console.log(
    networkInfectTime(4, [
        [2,1,1],
        [2,3,1],
        [3,4,1]
        ], 2)
)

const N = 4;
const times = [
  [1, 2, 1],
  [2, 3, 1]
];
const K = 1;
console.log(networkInfectTime(N, times, K)); // 输出: -1
