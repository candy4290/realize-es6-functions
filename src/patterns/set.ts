
/**
 * set集合
 *
 * @export
 * @class Set
 */
export class Set {
    items = {};
    constructor() {

    }
    has(key: string) {
        // 不包括原型链中的属性
        return this.items.hasOwnProperty(key);
    }
    add(value: string) {
        if (!this.has(value)) {
            this.items[value] = value;
            return true;
        }
        return false;
    }
    remove(value: string) {
        if (this.has(value)) {
            delete this.items[value];
            return true;
        }
        return false;
    }
    clear() {
        this.items = {};
    }
    size() {
        // Object.keys不包括继承来的属性
        return Object.keys(this.items).length;
    }
    values() {
        return Object.keys(this.items);
    }
}