export class Node {
    key: number;
    left: Node;
    right: Node;
    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

/**
 * 二叉搜索树-左子树的值小于父节点的值，右子树的值>=父节点的值，缺点：如果插入的值是排序好的，二叉搜索树将变为向量
 * 为了解决这个缺点可以引入平衡二叉树
 * @export
 * @class BinarySearchTree
 */
export class BinarySearchTree {
    root = null;
    constructor() {

    }

    /**
     * 往现有搜索树中插入值
     *
     * @param {number} key
     * @memberof BinarySearchTree
     */
    insert(key: number) {
      const newNode = new Node(key);
      if (!this.root) {
          this.root = newNode;
      } else {
          this.insertNode(this.root, newNode)
      }
    }

    private insertNode(node: Node, newNode: Node) {
        if (newNode.key < node.key) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraverse(callback: Function) {
        this.inOrderTraverseNode(this.root, callback)
    }

    inOrderTraverseNode(node: Node, callback: Function) {
        if (node) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    /**
     * 寻找二叉搜索树中的最小值
     *
     * @returns
     * @memberof BinarySearchTree
     */
    min() {
        return this.minNode(this.root);
    }

    private minNode(node: Node) {
        if (node) {
            while(node && node.left) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    }

    /**
     * 寻找二叉搜索树中最大值
     *
     * @returns
     * @memberof BinarySearchTree
     */
    max() {
        return this.maxNode(this.root);
    }

    private maxNode(node: Node) {
        if (node) {
            while(node && node.right) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    }
    
    /**
     * 查找二叉搜索树中是否存在某个值
     *
     * @param {number} key
     * @memberof BinarySearchTree
     */
    search(key: number) {
        return this.searchNode(this.root, key);
    }

    private searchNode(node: Node, key: number) {
        if (!node) {
            return false;
        }
        if (key < node.key) {
            return this.searchNode(node.left, key);
        } else if (key > node.key) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }

    /**
     * 移除节点值为key的节点
     *
     * @param {number} key
     * @memberof BinarySearchTree
     */
    remove(key: number) {
        this.root = this.removeNode(this.root, key);
    }

    private removeNode(node: Node, key: number) {
        if (!node) {
            return null;
        }
        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (!node.left && !node.right) {
                node = null;
                return node;
            }
            if (!node.left) {
                node = node.right;
                return node;
            }
            if (!node.right) {
                node = node.left;
                return node;
            }
            const aux = this.findMinNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }

    /**
     * 查找某个几点下，值最小的节点
     *
     * @param {Node} node
     * @returns {Node}
     * @memberof BinarySearchTree
     */
    findMinNode(node: Node): Node {
        if (node) {
            while(node && node.left) {
                node = node.left;
            }
            return node;
        }
        return null;
    }
}