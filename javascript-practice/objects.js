// Obj literal
const website = {
    name: 'AlgoExpert',
    domain: 'algoexpert.io',
};
console.log(website.name);

// adding to a Obj
website.foo = 'bar';
console.log(website.foo);

// Obj Constructor
const obj = new Object();
obj.name = 'Ryan'
console.log(obj)

// Custom Obj Constructor
function Website(name, rating, founders) {
    this.name = name
    this.rating = rating
    this.founders = founders
}

const frontendExpert = new Website('Front End Expert', 5, ['Ryan'])

console.log(frontendExpert)

//Symbol
const id = Symbol('id');
const id2 = Symbol('id');
// Symbols are always unique. If you want multiple objs to have the same symbol.
const id3 = Symbol.for('id3') 
const id4 = Symbol.for('id3')

console.log('Unique Symbol Comparision, despite same value', id === id2)
console.log('Symbol.for comparison will be equal if value is the same', id3 === id4)
const obj2 = {
  [id]: 1234,
  [id2]: 0,
  id: 'hello'
};

console.log(obj2)