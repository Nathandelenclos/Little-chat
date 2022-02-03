const { WebSocket } = require('ws');
const readline = require('readline');
const ws = new WebSocket('ws://' + process.argv[2]);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let data = {
    "name": process.argv[3],
    "message": null,
}
function pr() {
    rl.question('', function (message) {
        data["message"] = message;
        ws.send(data["name"] + " => " + data["message"]);
        pr()
    })
}

ws.on('open', function open() {
    ws.send(data["name"] + " viens de ce connecter");
    pr()
});

ws.on('message', function message(data) {
    console.log("%s", data);
});