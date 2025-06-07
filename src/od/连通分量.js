/* 
题目描述
服务器连接方式包括直接相连，间接连接。

A和B直接连接，B和C直接连接，则A和C间接连接。

直接连接和间接连接都可以发送广播。

给出一个N*N数组，代表N个服务器，

matrix[i][j] == 1，
则代表i和j直接连接；不等于 1 时，代表i和j不直接连接。

matrix[i][i] == 1，

即自己和自己直接连接。matrix[i][j] == matrix[j][i]。

计算初始需要给几台服务器广播， 才可以使每个服务器都收到广播。

输入描述
输入为N行，每行有N个数字，为0或1，由空格分隔，

构成N*N的数组，N的范围为 1 <= N <= 40

输出描述
输出一个数字，为需要广播的服务器的数量

示例1
输入

1 0 0
0 1 0
0 0 1
1
2
3
输出

3
*/
/* 
输入：[
[1,0,0],
[0,1,0],
[0,0,1],
]
输出：3

输入：[
[1 1 0],
[1 1 0],
[0 0 1],
]

返回：2
*/
/* 
解题思路同“计算岛屿的数量”
*/
function getFlNums(matrix) {
    const n = matrix.length;
    const visited = new Array(n).fill(false);
  
    function dfs(node) {
      visited[node] = true;
      for (let j = 0; j < n; j++) {
        if (matrix[node][j] === 1 && !visited[j]) {
          dfs(j);
        }
      }
    }
  
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        dfs(i);
        count++;
      }
    }
  
    return count;
}