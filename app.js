const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        wss.clients.forEach(function each(client) {
            client.send(data);
        });
    });
});