// LIFO
const stack = [];
stack.push(1);
stack.push(2);
console.log(stack.pop());

// FIFO
const queue = [];
queue.push(1);
queue.push(2);
console.log(queue.shift());

/* maps and dictionaries */
const map = new Map(); // you can pass a map structure you can use an array here.
map.set('test', 123);
map.set('test2', 456);
console.log(map.get('test'));
console.log(map.size);
console.log(map.has('test')); // checks keys
// map.delete('test');
// console.log(map.has('test'));
// map.clear();
// console.log(map.has('test2'));

for ([key, value] of map) {
    console.log(key, value);
}

map.forEach((value, key) => {
    console.log(key, value);
})

const iter = map.entries();
console.log(iter.next().value);

// if you need a key that is not a string, use maps. 
// if the insertion order matters, use a map.

// if you just have somehting simple, use an object.
// if your using it as a req/res w/ api should use obj.
// if you need inheiritence.

/* sets */
// a map with a unique keys.

const set = new Set();
set.add(123);
set.add(456);

console.log(set.has(123));
// can use a for/of forEach or iter methods to iterate. 

// can use to remove duplicates from arrays. 
const arr = [1, 2, 3, 4, 4, 5, 6, 6, 6];
console.log(Array.from(new Set(arr)));

// weak set doesnt prevent garbage collections.
const weakSet = new WeakSet();

(function() {
    const obj = {};
    weakSet.add(obj);
})();

/* Linked Lists */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addStart(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    addEnd(value) {
        const node = new Node(value);
        let curr = this.head;
        if (curr === null) {
            this.head = node;
            return;
        }

        while (curr !== null && curr.next !== null){
            curr = curr.next;
        }

        curr.next = node;
    }
}

const list = new LinkedList();
list.addStart(1);
list.addStart(2);
list.addEnd(3);
console.log(list.head.value);
console.log(list.head.next.value);
console.log(list.head.next.next.value);
