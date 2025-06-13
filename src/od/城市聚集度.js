/* 
题目描述
一张地图上有n个城市，城市和城市之间有且只有一条道路相连：要么直接相连，要么通过其它城市中转相连（可中转一次或多次）。城市与城市之间的道路都不会成环。

当切断通往某个城市i的所有道路后，地图上将分为多个连通的城市群，设该城市i的聚集度为DP[i] (Degree of Polymerization)，公式如下：

DP[i]=max(城市群1的城市个数,城市群2的城市个数,...,城市群m的城市个数)

请找出地图上DP值最小的城市，即找到城市j，使得DP[j]=min(DP[1],DP[2],...,DP[n])。

提示：

如果有多个城市都满足条件，这些城市都要找出来（可能存在多个解）。
DP[i]的计算，可以理解为已知一棵树，删除某个节点后，生成的多个子树，求解多个子树节点数的问题。
输入描述
第一行有一个整数N，表示有N个节点。取值范围是1 <= N <= 1000。

接下来的N-1行，每行有两个整数x、y，表示城市x与城市y连接。取值范围是1 <= x,y <= N。

输出描述
输出城市的编号。如果有多个，按照编号升序输出。

示例描述
示例一
输入：

5
1 2
2 3
3 4
4 5
Copy to clipboardErrorCopied
输出：

3
Copy to clipboardErrorCopied
说明：

对于城市3，切断通往3的所有道路后，形成2个城市群[(1,2), (4,5)]，其聚集度分别都是2，DP[3]=2。

对于城市4，切断通往4的所有道路后，形成2个城市群[(1,2,3),(5)]，DP[4] = max(3,1) = 3。

依次类推，切断其他城市的所有道路后，得到的DP都会大于2，因此城市3就是满足条件的城市，输出是3。
*/
/* 
输入
5,
[
[1,2],
[2,3],
[3,4],
[4,5],
]
*/
function findMinDP(n, edges) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const res = Array(n + 1).fill(0); // 存储每个节点的 DP 值
  let minDP = n;

  function dfs(u, parent) {
    let size = 1; // 当前子树大小
    let maxPart = 0; // 删除当前节点后，子树的最大规模

    for (const v of graph[u]) {
      if (v !== parent) {
        const subtreeSize = dfs(v, u);
        maxPart = Math.max(maxPart, subtreeSize);
        size += subtreeSize;
      }
    }

    // 剩下的那部分（不是子树，是上方）
    maxPart = Math.max(maxPart, n - size);
    res[u] = maxPart;
    minDP = Math.min(minDP, maxPart);

    return size;
  }

  dfs(1, -1); // 从任意节点开始 DFS

  const result = [];
  for (let i = 1; i <= n; i++) {
    if (res[i] === minDP) {
      result.push(i);
    }
  }

  return result;
}
console.log(findMinDP(5, [
  [1,2],
  [2,3],
  [3,4],
  [4,5],
]))
console.log(findMinDP(6, [
  [1,2],
  [2,3],
  [2,5],
  [3,4],
  [3,6],
]))