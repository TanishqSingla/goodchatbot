const input = document.getElementById("input");
const button = document.getElementById("submit");
const chat = document.getElementById('chat')

const socket = io();

button.addEventListener('click', function () {
	if(!input.value) {
		return;
	}
	socket.emit("message", {user: 'client', message: input.value});

	const li = document.createElement('li');
	li.textContent = `client: ${input.value}`;
	chat.appendChild(li);
	button.disabled = true;
});

socket.on("reply", (response) => {
	const li = document.createElement('li');
	li.textContent = `server: ${response.message}`;
	chat.appendChild(li);
	button.disabled = false;
});
