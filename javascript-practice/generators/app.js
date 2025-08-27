/* generator basics */

// function* genNumbers(count) {
//     const value = yield 0;
//     yield value + 3;
// };

// const generator = genNumbers(3);

// console.log(generator.next());
// console.log(generator.throw(new Error('There was an error')));
// console.log(generator.return(5));
// console.log(generator.next(5));


/* Having generators call eachother */
function* generator1() {
    yield 1;
    yield 2;
}

function* generator2() {
    yield 3;
    yield 4;
}

function* genNumbers(count) {
    yield* generator1();
    yield 2.5;
    yield* generator2();
};

const generator = genNumbers(3);

for (value of generator) {
    console.log(value);
}