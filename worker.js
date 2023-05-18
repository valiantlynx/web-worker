self.onmessage = function(e) {
    let final = 0;
    for (let i = 0; i < 10000000000; i++) {
        final += i;
    }

    self.postMessage(final);
}