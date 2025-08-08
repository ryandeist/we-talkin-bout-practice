// console.log(this);

function logThis() {
    console.log(this);
}

const obj = {
    num: 32,
    logThis,
}
obj.logThis();