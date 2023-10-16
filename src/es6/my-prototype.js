var animal = function() {}; // 相当于function animal() {}
var dog = function(){}; // 相当于function dog() {}
animal.price = 2000; // 
dog.prototype = animal; // 
// var tidy = new dog(); // tidy即dog.property所指向的那个对象
// console.log(dog.price); // undefined
// console.log(tidy.price); // 2000