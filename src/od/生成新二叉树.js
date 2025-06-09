/* 
给出一个二叉树，
请由该二叉树生成一个新的二叉树，它满足其树中的每个节点将包含原始树中的左子树和右子树的和。
*/

class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function generateNewTree(root) {
    if (!root) return null;
    const sum = (root) => {
        if (!root) return 0;
        return root.val + sum(root.left) + sum(root.right)
    }
    const newNode = new Node(
        sum(root.left) + sum(root.right),
        generateNewTree(root.left),
        generateNewTree(root.right),
    )
    return newNode;
}