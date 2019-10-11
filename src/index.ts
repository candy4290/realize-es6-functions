import { ObserverPattern } from './patterns/observer-pattern';

const observer = new ObserverPattern();
function callback() {
    console.log('链式调用！!');
}
observer.on('complate', (...args: any) => {
    console.log(args.join(''));
})
observer.on('complate', callback)
observer.emit('complate', '观', '察', '者', '模', '式');
observer.off('complate', callback);
observer.emit('complate', 'dsn');
observer.off('complate', callback);