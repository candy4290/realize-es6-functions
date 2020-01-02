import { ObserverPattern } from './patterns/observer-pattern';
import { BinarySearchTree } from './patterns/binary-search-tree';
import { Picture } from './patterns/picture';
import { Stack } from './patterns/stack';
import { ArrayList } from './patterns/array-list';

// const observer = new ObserverPattern();
// function callback() {
//     console.log('链式调用！!');
// }
// observer.on('complate', (...args: any) => {
//     console.log(args.join(''));
// })
// observer.on('complate', callback)
// observer.emit('complate', '观', '察', '者', '模', '式');
// observer.off('complate', callback);
// observer.emit('complate', 'dsn');
// observer.off('complate', callback);

// const bt = new BinarySearchTree();
// bt.insert(11);
// bt.insert(7);
// bt.insert(15);
// bt.insert(5);
// bt.insert(3);
// bt.insert(9);
// bt.insert(8);
// bt.insert(10);
// bt.insert(13);
// bt.insert(12);
// bt.insert(14);
// bt.insert(20);
// bt.insert(18);
// bt.insert(25);
// bt.insert(6);
// function print(value) {
//     console.log(value);
// }
// bt.inOrderTraverse(print);
// console.log('-------');

// const graph = new Picture();
// const myVertices = ['A','B','C','D','E','F','G','H','I'];
// myVertices.forEach(vertice => {
//     graph.addVertex(vertice);
// });
// graph.addEdge('A', 'B'); //{9}
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('B', 'A');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'B');
// graph.addEdge('E', 'I');
// graph.addEdge('I', 'E');
// graph.addEdge('F', 'B');
// graph.addEdge('C', 'A');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'A');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('G', 'C');
// graph.addEdge('G', 'D');
// graph.addEdge('H', 'D');
// const shortestPath = graph.bfs('A');
// const fromVertex = myVertices[0];
// myVertices.forEach(vertice => {
//     const toVertex = vertice;
//     const path = new Stack();
//     for (let v = toVertex; v !== fromVertex; v = shortestPath.predecessors[v]) {
//         path.push(v);
//     }
//     path.push(fromVertex);
//     let s = path.pop();
//     while(!path.isEmpty()) {
//         s += ' - ' + path.pop();
//     }
//     console.log(s);
// });
// graph.dfs((v) => {
//     console.log('visited: ' + v);
// })

const temp = new ArrayList();
temp.insert(3);
temp.insert(5);
temp.insert(1);
temp.insert(6);
temp.insert(4);
temp.insert(7);
temp.insert(2);;
console.log(temp.toString());
console.log(temp.bubbleSort());
console.log(temp.toString());