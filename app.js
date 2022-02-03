const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(wsn, req) {
    ws.on('message', function message(data) {
        wss.clients.forEach(function each(client) {
            client.send(data);
        });
    });
    wss.clients.forEach(function each(client) {
        client.send("New connection => " + req.socket.remoteAddress);
    });
});