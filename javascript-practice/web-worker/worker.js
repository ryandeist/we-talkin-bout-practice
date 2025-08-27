for (let i = 0; i < 3000000000; i++) {
    1 + 2;
}

self.addEventListener('connect', event => {
    const port = event.ports[0];

    port.onmessage = function (event) {
       port.postMessage(event.data * 10);
    }
});

console.log('slow op finished.');