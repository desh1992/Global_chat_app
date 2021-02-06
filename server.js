var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
	console.log("user online");

	socket.on("cm", (msg) => {
		console.log("Message Recieved : " + msg);
		socket.broadcast.emit("cmb", msg);
	})
})

var server_port = process.env.PORT || 3000
http.listen(server_port, () => {
	console.log('listening on *:' + server_port);
});