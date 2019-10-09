
/**
 * 手动实现观察者模式
 *
 * @export
 * @class ObserverPattern
 */
export class ObserverPattern {
    handles: {
        key?: Function[]
    }; // 注册的监听事件的回调事件对象
    constructor() {
        this.handles = {};
    }

    /**
     * 订阅事件
     *
     * @param {string} eventType 事件名称
     * @param {Function} handle  回调函数
     * @memberof ObserverPattern
     */
    on(eventType: string, handle: Function): ObserverPattern {
        if (!this.handles[eventType]) {
            this.handles[eventType] = [];
        }
        if (typeof handle === 'function') {
            this.handles[eventType].push(handle)
        } else {
            throw new Error('缺少回调函数');
        }
        return this;
    }

    /**
     * 发布事件
     *
     * @param {string} eventType 事件名称
     * @param {...any[]} args    参数
     * @returns {ObserverPattern}
     * @memberof ObserverPattern
     */
    emit(eventType: string, ...args: any[]): ObserverPattern {
        if (!this.handles[eventType]) {
            throw new Error(`"${eventType}"事件未注册`);
        } else {
            this.handles[eventType].forEach((func: Function) => {
                func.apply(null, args);
            });
        }
        return this;
    }

    /**
     * 删除事件/取消监听
     *
     * @param {string} eventType 事件名称
     * @param {Function} handle  回调函数
     * @memberof ObserverPattern
     */
    off(eventType: string, handle: Function): ObserverPattern {
        if (!this.handles[eventType]) {
            throw new Error(`"${eventType}"事件未注册`);
        } else if (typeof handle !== 'function'){
            throw new Error('缺少回调函数');
        } else {
            this.handles[eventType].forEach((func: Function, index: number, arrs: Function[]) => {
                if (func === handle) {
                    arrs.splice(index, 1);
                }
            });
        }
        return this;
    }
}