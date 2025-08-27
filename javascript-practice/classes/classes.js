/* 
Prototype Inheritence
*/

// const person = {
//     isHuman: true,
// };

// const child = Object.create(person);
// child.maxAge = 18;

// const john = Object.create(child);
// john.name = "John";

// const funcProto = Object.getPrototypeOf(() => {});
// console.log(Object.getOwnPropertyNames(funcProto));

// const arrayProto = Object.getPrototypeOf([]);
// console.log(Object.getOwnPropertyNames(arrayProto));

/*
Function Constructors
*/

// function Person(name) {
//     this.name = name;
// };

// Person.prototype = {
//     constructor: Person,
//     isHuman: true,
// };

// const ryan = new Person('Ryan');
// const julia = new ryan.constructor('Julia');

// Person.prototype.speak = function () {
//     console.log(`Hello this is ${this.name}.`);
//     console.log(this.isHuman);
// };

// console.log(ryan instanceof Array);

// ryan.speak();
// julia.speak();

// console.log(ryan.__proto__ === julia.__proto__);

// ryan.__proto__.test = "test";

// console.log(julia.test);

/*
Polyfills
*/

// if (Array.prototype.push === undefined) {
//     Array.prototype.push = function(value) {
//         this[this.length] = value;
//     }
// }

// const arr = [1, 2, 3];

// arr.push(4);

// console.log(arr);

/* 
Modern Class Syntax
*/

class Person {
    static isHuman = true;
    constructor(name) {
        this.name = name;
    }

    static greet() {
        console.log('Hello');
    }

    speak() {
        console.log(`Hello this is ${this.name}.`);
    }
};

class Child extends Person {
    #age;
    constructor(name, age) {
        super(name);
        this.#age = age;
    }
}

class Grandchild extends Child {
    getAge() {
        console.log(this.age);
    }
}
const child = new Child('Victor', 15);

child.speak(); 
console.log(child instanceof Person);
console.log(child.age);

const ryan = new Person('Ryan');
const julia = new Person('Julia');

Person.greet();
// ryan.greet();

ryan.speak();
julia.speak();

console.log(Person.isHuman);
console.log(ryan.isHuman);
console.log(julia.isHuman);
