
/**
 * 队列 - 先进先出 
 * 进阶：优先队列  
 * @export
 * @class Queue
 */
export class Queue {
    items = [];
    enqueue(item: any) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    front() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    clear() {
        this.items = [];
    }
    size() {
        return this.items.length;
    }
}