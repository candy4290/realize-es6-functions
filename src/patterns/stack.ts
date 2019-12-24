
/**
 * 栈-先进后出
 *
 * @export
 * @class Stack
 */
export class Stack {
    items = [];
    push(item: any) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
    print() {
        console.log(this.items.toString())
    }
}