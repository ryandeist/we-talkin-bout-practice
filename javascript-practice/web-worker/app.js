const slowButton = document.getElementById('slow');
const sayHelloButton = document.getElementById('say-hello');

slowButton.addEventListener('click', slowOperation);
sayHelloButton.addEventListener('click', sayHello);

function slowOperation() {
    const worker = new SharedWorker('worker.js');
    worker.port.postMessage(10);
    worker.port.onmessage = function(event) {
        console.log(event.data);
    };
    // worker.terminate();
}

function sayHello() {
    console.log('Hello!');
}