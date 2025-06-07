/* 题目描述
输入N个互不相同的二维整数坐标，求这N个坐标可以构成的正方形数量。[内积为零的的两个向量垂直]

输入描述
第一行输入为N，N代表坐标数量，N为正整数。N <= 100

之后的 K 行输入为坐标x y以空格分隔，x，y为整数，-10<=x, y<=10

输出描述
输出可以构成的正方形数量。

示例1
输入

3
1 3
2 4
3 1
输出
0
说明

（3个点不足以构成正方形）

示例2
输入

4
0 0
1 2
3 1
2 -1
输出
1

*/

/* 
输入： [
[0,0],
[1,2],
[3,1],
[2,-1],
]
输出：1
*/

function getNum(points) {
  const N = points.length;
  const pointSet = new Set(points.map(p => `${p[0]},${p[1]}`));
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) continue;
      const A = points[i];
      const B = points[j];

      const dx = B[0] - A[0];
      const dy = B[1] - A[1];

      // 垂直向量 (-dy, dx)
      const Cx = A[0] - dy;
      const Cy = A[1] + dx;
      const Dx = B[0] - dy;
      const Dy = B[1] + dx;
      const C_key = `${Cx},${Cy}`;
      const D_key = `${Dx},${Dy}`;

      if (pointSet.has(C_key) && pointSet.has(D_key)) {
        // 找到一个正方形，统计一次
        count++;
      }
    }
  }

  // 每个正方形会被重复统计 4 次（每条边都作为起始边），所以除以 4
  return count / 4;
}