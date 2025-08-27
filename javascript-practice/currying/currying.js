function sum(a, b, c) {
    return a + b + c;
};

function subtract(a, b, c) {
    return a - b - c;
};

// function curriedSum(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         }
//     }
// }

function curry(func) {
    return (a) => (b) => (c) => func(a, b, c);
}

const curriedSum = curry(sum);
const curriedSubtract = curry(subtract)

console.log(sum(1, 2, 3));
console.log(curriedSum(1)(2)(3));
console.log(curriedSubtract(1)(2)(3));

/* 
When to use: 

When we want to have a function that is part of another function
*/

const addFour = curriedSum(4);

console.log(addFour(10)(10));