/* 


*/

function encrypt(passwordBook, plaintext) {
    const m = passwordBook.length;
    const n = passwordBook[0].length;
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const resultPaths = [];
  
    function dfs(x, y, index, path, visited) {
      if (passwordBook[x][y] !== Number(plaintext[index])) return;
      path.push(`${x} ${y}`);
      if (index === plaintext.length - 1) {
        resultPaths.push(path.join(' '));
        path.pop();
        return;
      }
  
      visited[x][y] = true;
  
      for (const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;
        if (
          nx >= 0 && nx < m &&
          ny >= 0 && ny < n &&
          !visited[nx][ny]
        ) {
          dfs(nx, ny, index + 1, path, visited);
        }
      }
  
      visited[x][y] = false;
      path.pop();
    }
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (passwordBook[i][j] === Number(plaintext[0])) {
          const visited = Array.from({ length: m }, () => Array(n).fill(false));
          dfs(i, j, 0, [], visited);
        }
      }
    }
  
    if (resultPaths.length === 0) {
      return "error";
    } else {
      resultPaths.sort(); // 字典序最小
      return resultPaths[0];
    }
  }
  

  const book = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(encrypt(book, "123"));  // 输出：0 0 0 1 0 2
  console.log(encrypt(book, "159"));  // 输出：error
  console.log(encrypt(
    [
        [0, 0, 2],
        [1, 3, 4],
        [6, 6, 4],
    ], '3'
  )) // 1 1
  console.log(encrypt(
    [
        [0, 0, 2],
        [1, 3, 4],
        [6, 6, 4],
    ], '03'
  )) // 0 1 1 1
  console.log(
    encrypt([
        [0,0,2,4],
        [1,3,4,6],
        [3,4,1,5],
        [6,6,6,5]
    ], '0024')
  ) // 0 0 0 1 0 2 0 3
  console.log(
    encrypt([
        [0,0,2,4],
        [1,3,4,6],
        [3,4,1,5],
        [6,6,6,5]
    ], '8223')
  ) // error
  