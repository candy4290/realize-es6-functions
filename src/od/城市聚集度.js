const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n = 0;
const edges = [];
rl.on('line', line => {
  if (!n) {
    n = parseInt(line);
  } else {
    edges.push(line.split(' ').map(Number));
    if (edges.length === n - 1) {
      rl.close();
    }
  }
});

rl.on('close', () => {
  // 用 Object 构建邻接表
  const graph = {};
  for (const [u, v] of edges) {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  }

  const dp = {};
  const size = {};
  let minDp = n;
  const result = [];

  const dfs = (u, parent) => {
    size[u] = 1;
    let maxPart = 0;

    for (const v of graph[u] || []) {
      if (v === parent) continue;
      dfs(v, u);
      size[u] += size[v];
      maxPart = Math.max(maxPart, size[v]);
    }

    maxPart = Math.max(maxPart, n - size[u]);
    dp[u] = maxPart;
  };

  for (let i = 1; i <= n; i++) {
    // 清空 size 和 dp
    for (let k in size) delete size[k];
    dfs(i, -1);
    if (dp[i] < minDp) {
      minDp = dp[i];
      result.length = 0;
      result.push(i);
    } else if (dp[i] === minDp) {
      result.push(i);
    }
  }

  console.log(result.sort((a, b) => a - b).join(' '));
});
