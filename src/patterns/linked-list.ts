export class Node {
    element: any;
    next: Node;
    constructor(element: any) {
        this.element = element;
        this.next = null;
    }
}

/**
 * 链表-各个元素在内存上不是连续存储的，增删不需要移动其它的元素
 * 进阶：双向链表，循环链表
 * @export
 * @class LinkedList
 */
export class LinkedList {
    length = 0;
    head: Node = null;
    constructor() {

    }
    // 在链表最后添加元素
    append(element: any) {
        const node = new Node(element);
        let current: Node;
        if (!this.head) { // 当前链表为空
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }
    insert(position: number, element: any) {
        if (position > -1 && position < this.length) {
            const node = new Node(element);
            let current = this.head;
            let previous: Node;
            let index = 0;
            if (position === 0) {
                node.next = current;
                this.head = node;
            } else {
                while(index ++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        } else {
            return false;
        }
    }
    removeAt(position: number) {
        if (position > -1 && position < this.length) {
            let current = this.head;
            let previous: Node;
            let index = 0;
            if (position === 0) {
                this.head.next = null; // 断开head连接
                this.head = current.next;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    }
    remove(element: Node) {

    }
    indexOf(element: number) {

    }
    isEmpty() {

    }
    size() {
        return this.length;
    }
    toString() {

    }
    print() {

    }
}