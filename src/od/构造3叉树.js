/* 
题目描述
定义构造三叉搜索树规则如下：

每个节点都存有一个数，当插入一个新的数时，从根节点向下寻找，直到找到一个合适的空节点插入。查找的规则是：

如果数小于节点的数减去500，则将数插入节点的左子树

如果数大于节点的数加上500，则将数插入节点的右子树

否则，将数插入节点的中子树

给你一系列数，请按以上规则，按顺序将数插入树中，构建出一棵三叉搜索树，最后输出树的高度。

输入描述
第一行为一个数 N，表示有 N 个数，1 ≤ N ≤ 10000

第二行为 N 个空格分隔的整数，每个数的范围为[1,10000]

输出描述
输出树的高度（根节点的高度为1）

示例1
输入

5
5000 2000 5000 8000 1800
输出

3
*/

class Tree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.mid = null;
        this.right = null;
    }
}

function insert(root, val) {
    if (!root) return new Tree(val);
    if (val < root.val - 500) {
        root.left = insert(root.left, val);
    } else if (val > root.val + 500) {
        root.right = insert(root.right, val);
    } else {
        root.mid = insert(root.mid, val);
    }
    return root;
}

function getHeight(node) {
    if (!node) return 0;
    return 1 + Math.max(
        getHeight(node.left),
        getHeight(node.mid),
        getHeight(node.right)
    );
}

function getTree(arr) {
    const n = arr.length;
    if (n === 0) return 0;
    let root = new Tree(arr[0]);
    for (let i = 1; i < n; i++) {
      root = insert(root, arr[i]);
    }
    return getHeight(root);
}
console.log(getTree([5000, 2000, 5000, 8000, 1800]))
console.log(getTree([5000, 4000, 3000]))
console.log(getTree([5000, 2000, 5000, 8000, 1800, 7500, 4500, 1400, 8100]))