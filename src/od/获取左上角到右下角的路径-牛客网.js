/* 
[
[0, 1, 0, 0, 0]
[0, 1, 0, 1, 0]
[0, 0, 0, 0, 1]
[0, 1, 1, 1, 0]
[0, 0, 0, 0, 0]
]
获取从左上角，到右下角的一条路径。0可以通过，1无法通过
*/
function getPath(grid) {
    const size = [grid.length, grid[0].length];
    const path = [];
    const directions = [
        [-1,0],
        [1,0],
        [0,1],
        [0,-1]
    ]
    const visited = Array.from({length: size[0]}, () => Array(size[1]).fill(false));
    const dfs = (row, col) => {
        if (row<0||col<0||row>size[0]-1 || col > size[1] -1||grid[row][col] === 1||visited[row][col]) {
            return false;
        }
        visited[row][col] = true;
        path.push(`(${row},${col})`);
        if (row === size[0]-1 && col === size[1]-1) {
            return true;
        }
        for(const [x,y] of directions) {
            if (dfs(row+x,col+y)) {
                return true;
            }
        }
        path.pop();
        visited[row][col] = false;
        return false;
    }
    dfs(0, 0);
    return path;
}