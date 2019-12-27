import { Dictionary } from "./dictionary";
import { Queue } from "./queue";

/**
 * 数据结构之---图
 * 本实例使用邻接表来实现图的结构
 *
 * @export
 * @class Picture
 */
export class Picture {
    private vertices = []; // 存储顶点的名称
    private adjList = new Dictionary(); // 存储顶点对应的邻接表
    constructor() {

    }

    /**
     * 向图中添加新的顶点
     *
     * @param {string} v
     * @memberof Picture
     */
    addVertex(v: string) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }
    /**
     * 添加顶点之间的边
     *
     * @param {string} v
     * @param {string[]} w
     * @memberof Picture
     */
    addEdge(v: string, w: string) {
        this.adjList.get(v).push(w);
    }
    toString() {
        let s = '';
        this.vertices.forEach(vertice => {
            s += vertice + ' -> ';
            const neighbors = this.adjList.get(vertice);
            neighbors.forEach(neighbor => {
                s += neighbor + ' ';
            });
            s += '\n';
        });
        return s;
    }

    /**
     * 白色:表示该顶点还没有被访问。
     * 灰色:表示该顶点被访问过，但并未被探索过。
     * 黑色:表示该顶点被访问过且被完全探索过。
     *
     * @returns
     * @memberof Picture
     */
    initializeColor() {
        const color = [];
        this.vertices.forEach(vertice => {
            color[vertice] = 'white';
        });
        return color;
    }

    /**
     * 广度优先搜索
     *
     * @param {*} v 图的顶点
     * @param {*} callback 回调函数
     * @memberof Picture
     */
    // bfs(v: string, callback: Function) {
    //     const color = this.initializeColor();
    //     const queue = new Queue();
    //     queue.enqueue(v);
    //     while(!queue.isEmpty()) {
    //         const u = queue.dequeue();
    //         const neighbors = this.adjList.get(u); // 取到u相邻的顶点列表
    //         color[u] = 'grey';
    //         neighbors.forEach((neighbor: string) => {
    //             if (color[neighbor] === 'white') {
    //                 color[neighbor] = 'grey';
    //                 queue.enqueue(neighbor);
    //             }
    //         });
    //         color[u] = 'black';
    //         if (callback) {
    //             callback(u);
    //         }
    //     }
    // }

    bfs(v: string) {
        const color = this.initializeColor();
        const queue = new Queue();
        const d = [];
        const pred = [];
        queue.enqueue(v);
        this.vertices.forEach(vertice => {
            d[vertice] = 0;
            pred[vertice] = null;
        });
        while(!queue.isEmpty()) {
            const u = queue.dequeue();
            const neighbors = this.adjList.get(u);
            color[u] = 'grey';
            neighbors.forEach(neighbor => {
                if (color[neighbor] === 'white') {
                    color[neighbor] = 'grey';
                    d[neighbor] = d[u] + 1;
                    pred[neighbor] = u;
                    queue.enqueue(neighbor);
                }
            });
            color[u] = 'black';
        }
        return {
            distance: d,
            predecessors: pred
        }
    }

    /**
     * 深度优先搜索
     *
     * @param {Function} callback
     * @memberof Picture
     */
    dfs(callback: Function) {
        const color = this.initializeColor();
        this.vertices.forEach(vertice => {
            if (color[vertice] === 'white') {
                this.dfsVisit(vertice, color, callback);
            }
        });
    }

    dfsVisit(u: string, color: any, callback: Function) {
        color[u] = 'grey';
        if (callback) {
            callback(u);
        }
        const neighbors = this.adjList.get(u);
        neighbors.forEach(neighbor => {
            if (color[neighbor] === 'white') {
                this.dfsVisit(neighbor, color, callback);
            }
        });
        color[u] = 'black';
    }
}