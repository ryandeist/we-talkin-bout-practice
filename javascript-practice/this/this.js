'use strict';

// console.log(this);
// const button = document.getElementById('btn');

// button.addEventListener('click', logThis);

// function logThis(x, y) {
//     console.log(this);
//     console.log(x, y);
// }

// const obj = {
//     num: 32,
//     logThis,
// }

// obj.logThis();

// const obj = {
//     num: 32,
// };

// logThis();

// const boundLogThis = logThis.bind(obj);

// boundLogThis(1, 2);

// logThis.call(obj, 1, 2);

// logThis.apply(obj, [1, 2]);

// [1, 2, 3].forEach(function(num) {
//     console.log(this);
//     console.log(num)
// }, { num: 32 });

class Person {
    constructor(name) {
        // console.log(this);
        this.name = name;
        // console.log(this);
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const john = new Person('John');
const jane = new Person('Jane');

john.sayHello();
jane.sayHello();