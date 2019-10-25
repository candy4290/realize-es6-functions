// es5实现面向对象
// function Person(name) {
//     this._name = name;
//     this.getName = function() {
//         console.log(this._name);
//     };
//     this.setName = function(name) {
//         this._name = name;
//     };
// }
// let p = new Person('张三');
// p.getName();
// p.setName('李四');
// p.getName();

// es6
// class Person {
//     constructor(name) {
//         this._name = name;
//     }
//     getName() {
//         console.log(this._name);
//     }
//     setName(name) {
//         this._name = name;
//     }
// }
// let p = new Person('张三');
// p.getName();
// p.setName('李四');
// p.getName();

// 继承
// class Father {
//     constructor(name) {
//         this._name = name;
//     }
//     getName() {
//         console.log(this._name);
//     }
//     static hitXiaoMing() {
//         console.log('打小明');
//     }
// }

// class Son extends Father {
//     constructor(name, age) {
//         super(name);
//         this._age = age;
//     }
// }

// var DaMing = new Father('大明');
// Father.hitXiaoMing();
// DaMing.getName();

// var XiaoMing = new Son('小明', 15);
// XiaoMing.getName();

// es5继承-原型继承
// function SuperType(){
//    this.property = true;
// }
// SuperType.prototype.getSuperValue = function(){
//    return this.property;
// };
// function SubType(){
//    this.subproperty = false;
// }
// // 继承了SuperType
// SubType.prototype = new SuperType();
    
// SubType.prototype.getSubValue = function(){
//     return this.subproperty;
// };
// var instance = new SubType();
// console.log(instance.getSuperValue());  

// es5继承-借用构造函数+apply&call
// function SuperType() {
//     this.colors = ['red', 'blue', 'green'];
// }

// function SubType() {
//     SuperType.call(this);
// }
// var instance = new SubType();
// instance.colors.push('black');
// console.log(instance.colors);

// var instance2 = new SubType();
// console.log(instance2.colors);

// function SuperType(name) {
//     this.name = name;
// }
// function SubType() {
//     SuperType.call(this, 'Annika');
//     this.age = 21;
// }

// var instance = new SubType();
// console.log(instance.name);
// console.log(instance.age);


