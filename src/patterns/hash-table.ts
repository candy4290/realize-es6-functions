
/**
 * 散列表 --- HashTable
 * 散列算法作用是尽可能快地在数据结构中获得一个值。
 * 使用散列函数知道具体位置，而不需要遍历所有的值。
 * 
 * 通过散列函数发现key:Tyrion,key:Aaron指向同样位置，此时散列表发生冲突
 * 处理散列表冲突：1.分离链接：为散列表的每一个位置创建一个链表(LinkedList)并将元素存储在里面
 *              2.线性探查：当想向表中某个位置加入一个新元素的时候，如果索引 为index的位置已经被占据了，就尝试index+1的位置。如果index+1的位置也被占据了，就尝试 index+2的位置，以此类推，将key和value都存储下来，以便取值时匹配key值。
 * @export
 * @class HashTable
 */
export class HashTable {
    tables = [];
    constructor() {

    }

    /**
     * 散列函数 ---- key值与实际存储位置间的映射
     * 更好的散列函数可以尽可能减少散列表冲突。
     * @private
     * @param {string} key
     * @memberof HashTable
     */
    private loseloseHashCode(key: string) {
        var hash = 0;
        for (let i = 0, len = key.length; i < len; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }

    put(key: string, value: any) {
        const position = this.loseloseHashCode(key);
        this.tables[position] = value;
    }

    get(key: string) {
        return this.tables[this.loseloseHashCode(key)];
    }

    remove(key: string) {
        this.tables[this.loseloseHashCode(key)] = undefined;
    }
}

