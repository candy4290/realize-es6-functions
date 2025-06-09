/* 
网络信号经过传递会逐层衰减，且遇到阻隔物无法直接穿透，在此情况下需要计算某个位置的网络信号值。
注意:网络信号可以绕过阻隔物。

array[m][n] 的二维数组代表网格地图，
array[i][j] = 0代表i行j列是空旷位置;
array[i][j] = x(x为正整数)代表i行j列是信号源，信号强度是x;
array[i][j] = -1代表i行j列是阻隔物。
信号源只有1个，阻隔物可能有0个或多个
网络信号衰减是上下左右相邻的网格衰减1
现要求输出对应位置的网络信号值。

输入:
[
[0, 0, 0, -1, 0],
[0, 0, 0, 0, 0],
[0, 0, -1, 4, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, -1],
[0, 0, 0, 0, 0]
]
[1,4]
返回：2
*/


function getSignalStrength(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const res = Array.from({ length: m }, () => Array(n).fill(0));
    const queue = [];
  
    // 找信号源
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === -1) {
          res[i][j] = -1; // 阻隔物
        } else if (grid[i][j] > 0) {
          res[i][j] = grid[i][j]; // 初始信号
          queue.push([i, j, grid[i][j]]);
        }
      }
    }
  
    const dirs = [
      [0, 1], [1, 0], [0, -1], [-1, 0]
    ];
  
    // BFS
    while (queue.length > 0) {
      const [x, y, strength] = queue.shift();
      if (strength <= 1) continue;
  
      for (const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;
        if (
          nx >= 0 && nx < m &&
          ny >= 0 && ny < n &&
          grid[nx][ny] !== -1 &&
          res[nx][ny] < strength - 1
        ) {
          res[nx][ny] = strength - 1;
          queue.push([nx, ny, strength - 1]);
        }
      }
    }
    return res;
}

  
function getTarget(arr, tar) {
    return getSignalStrength(arr)[tar[0]][tar[1]]
}

console.log(
    getTarget([
        [0, 0, 0, -1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, -1, 4, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, -1],
        [0, 0, 0, 0, 0]
        ], [1,4])
)