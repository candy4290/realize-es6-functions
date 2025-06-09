/* 
题目描述
通常使用多行的节点、父节点表示一棵树，比如

西安 陕西
陕西 中国
江西 中国
中国 亚洲
泰国 亚洲

输入一个节点之后，请打印出来树中他的所有下层节点

输入描述
第一行输入行数，下面是多行数据，每行以空格区分节点和父节点

接着是查询节点

输出描述
输出查询节点的所有下层节点。以字典序排序

示例1
输入

5
b a
c a
d c
e c
f d
c
输出

d
e
f
*/

/* 
输入：[
['b','a'],
['c','a'],
['d','c'],
['e','c'],
['f','d']
], 'c'
输出：['d','e','f']
*/
function getAllChildren(arr, node) {
    const tree = new Map();
    arr.forEach(([child, parent]) => {
        if (!tree.get(parent)) {
            tree.set(parent, []);
        }
        tree.get(parent).push(child);
    });
    const result = [];
    const dfs = (node) => {
        if (!node) return;
        tree.get(node)?.forEach(i => {
            result.push(i);
            dfs(i);
        })
    }
    dfs(node);
    return result;
}

console.log(getAllChildren([
    ['b','a'],
    ['c','a'],
    ['d','c'],
    ['e','c'],
    ['f','d']
    ], 'c'))