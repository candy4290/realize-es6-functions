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
export class BinarySearchTree {
    root = null;
    constructor() {

    }
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
}