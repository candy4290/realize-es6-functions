
/**
 * 字典
 *
 * @export
 * @class Dictionary
 */
export class Dictionary {
    items = {

    };
    constructor() {

    }
    set(key: string, value: any) {
        this.items[key] = value;
    }
    has(key: string) {
        // return key in this.items;
        return this.items.hasOwnProperty(key);
    }
    remove(key: string) {
        if (this.has(key)) {
            delete this.items[key];
        }
    }
    get(key: string) {
        return this.has(key) ? this.items[key] : undefined;
    }
    values() {
        let results = [];
        for (let key in this.items) {
            if (this.has(key)) {
                results.push(this.items[key]);
            }
        }
    }
    clear() {
        this.items = {};
    }
    size() {
        return Object.keys(this.items).length;
    }
    keys() {
        return Object.keys(this.items);
    }
}