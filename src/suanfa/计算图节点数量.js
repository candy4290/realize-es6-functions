/* 
输入 [
['a', 'b'],
['b', 'c'],
['c', 'd'],
['d', 'e'],
],
'c'
*/
function getNum(arr, p) {
    const rel = {};
    arr.forEach(i => {
        if (!rel[i[0]]) rel[i[0]] = [];
        if (!rel[i[1]]) rel[i[1]] = [];
        rel[i[0]].push(i[1])
        rel[i[1]].push(i[0])
    })
    const edges = arr.filter(i => {
        return i[0] !== p && i[1] !== p
    });
    const visited = new Set();
    const result = [];
    rel[p].forEach(i => {
        if (!visited.has(i)) {
            const stack = [i];
            while(stack.length) {
                const cur = stack.pop();
                
            }
        }
    })
}