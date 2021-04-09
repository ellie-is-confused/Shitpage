const ws = new WebSocket('ws://shitpage.ml:8080');

ws.onopen = function() {
    ws.send('hello')
};

ws.onmessage = function(msg) {
    console.log(msg)
};