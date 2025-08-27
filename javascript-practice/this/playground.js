'use strict';

class Person {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const ryan = new Person('Ryan');
const julia = new Person('Julia');

ryan.speak();
julia.speak(); 