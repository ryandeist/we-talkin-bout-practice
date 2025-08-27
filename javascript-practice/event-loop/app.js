function logOne() {
    console.log('1');
}

function count(end) {
    for (i = 0; i <= end; i++) {
        return i;
    }
}

function main() {
    setTimeout(logOne, 0);
    Promise.resolve(2)
        .then(val => val * 2)
        .then(console.log);
    count(10000000000000000000000);
    console.log(3);
}

main();

/*
main added to call stack
setTimeout(logOne, 0); added to call stack
setTimeout(logOne, 0); added to Web APIs, removed from call stack
(logOne, 0) added to task queue, removed from Web APIs
Promise.resolve(2) added to call stack.
Promise.resolve(2) removed from call stack.
.then(val => val * 2) added to call stack. 
.then(val => val * 2) added to microtask queue, removed from call stack, creates a pending promise.
.then(console.log) added to call stack. 
.then(console.log) needs a resolved promise, removed from call stack. 
count function is added to call stack, (event loop runs for all iterations of this function).
count function is removed from call stack.
console.log(3) added to call stack. 
3 is logged to the console.
console.log(3) removed from call stack.
main() removed from call stack
microtask .then(val => val * 2) gets added to call stack, removed from microtask queue.
.then(val => val * 2) resolves to 4.
.then(val => val * 2) removed from call task.
.then(console.log) added to microtask queue.
.then(console.log) added to call stack, removed from microtask queue.
.then(console.log) resolves, logging 4 to console.
.then(console.log) is removed from call stack.
logOne() added to call stack, removed from task queue.
logOne() executed, logging 1 to console.
logOne() removed from call stack.
code execution is complete.
*/