const express = require('express');
const app = express();
const WebSocket = require('ws');

const server = new WebSocket.Server({
    port: 8080
});

server.on('connection', function(socket) {
    socket.on('message', function(msg) {
        console.log(msg);
    });

    socket.on('close', function() {
        console.log('Socket Closed');
    });
});

app.use(express.static('public'));

app.get('/', async function(req, res){
    res.render(__dirname + '/veiws/index.ejs')
})

app.listen(80)