const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        ws.send(data)
        console.log("%s", data);
    });
});