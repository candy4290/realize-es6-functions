// 浅拷贝
function shallowCopy(obj) {
    if (typeof obj !== 'object') { // 只拷贝对象
        return;
    }
    const newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
}

// 深拷贝
function deepClone(obj) {
    if (obj == null || typeof obj !== 'object') { // 只拷贝对象
        return obj;
    }
    const newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
        }
    }
    return newObj;
}

enum Color {Red = 1, Green, Blue = 4}
const a: Color = Color.Red

// 函数签名（重载定义）
function fn(x: number): number;
function fn(x: string): string;

// 函数实现（必须兼容所有签名）
function fn(x: number | string): number | string {
  if (typeof x === 'number') {
    return x * 2;
  } else {
    return x + '!';
  }
}


function identity<T>(value: T): T {
    return value;
  }

  identity<string>('hello');
  identity<number>(123);
  identity<boolean>(true);
// 也可以使用类型参数推断
// type ABCPrefix = `${'a' | 'b' | 'c'}${string}`;

// const a1:ABCPrefix = 'b123'


type Animal = { name: string };
type Dog = { name: string; breed: string };

let a1: Animal = { name: 'A' };
let d: Dog = { name: 'D', breed: 'Labrador' };

a1 = d; // ✅ OK（Dog → Animal 协变）

let animals: Animal[] = [];
// let dogs: Dog[] = [];

// animals = dogs; // ✅ 协变：Dog[] 是 Animal[] 的子类型

// let animals: Animal[] = [];
let dogs: Dog[] = [];

animals = dogs; // ✅ 协变：Dog[] 是 Animal[] 的子类型


