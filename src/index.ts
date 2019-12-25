import { ObserverPattern } from './patterns/observer-pattern';
import { BinarySearchTree } from './patterns/binary-search-tree';

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

const bt = new BinarySearchTree();
bt.insert(11);
bt.insert(7);
bt.insert(15);
bt.insert(5);
bt.insert(3);
bt.insert(9);
bt.insert(8);
bt.insert(10);
bt.insert(13);
bt.insert(12);
bt.insert(14);
bt.insert(20);
bt.insert(18);
bt.insert(25);
bt.insert(6);
function print(value) {
    console.log(value);
}
bt.inOrderTraverse(print);
console.log('-------');