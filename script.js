window.onload = function () {
	socket = io.connect('http://localhost:3000');

	socket.on('cmb', function (message) {
		var html = '<div class="message-box others-message-box">' +
			'<div class="message others-message">' + message + '</div>' +
			'<div class="seprator"></div>' +
			'</div>';

		document.getElementById('message-area').innerHTML += html;
	})
}

function sendMessage() {
	var message = document.getElementById("typing-box").value;

	var html = '<div class="message-box my-message-box">' +
		'<div class="message my-message">' + message + '</div>' +
		'<div class="seprator"></div>' + '</div>';

	document.getElementById("message-area").innerHTML += html;

	document.getElementById("typing-box").value = "";

	socket.emit("cm", message);

}