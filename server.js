import dotenv from 'dotenv';
import app from './app.js';
import mongoose from 'mongoose';
import http from 'http';
import { Server } from 'socket.io';
import { Chat } from './models/Chat.js';
import { aiResponse } from './service/gpt.js';

if(process.env.NODE_ENV === 'production') {
	dotenv.config();
} else {
	dotenv.config({path: `.env.${process.env.NODE_ENV}`});
}

mongoose.connect(process.env.MONGODB_URL).then(() => console.log("connected to db")).catch(e => console.log(e));

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
	console.log("socket connection established");

	socket.on("message", async (data) => {
		try {
			const { user, message } = data;
			const chat = new Chat({user, message});

			const reply = await aiResponse(message);
			socket.emit("reply", {message: reply.message});

			if(reply.success) {
				chat.reply = reply.message;
				chat.save();
			}
		} catch (err) {
			console.log(err);
		}
	});

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

server.listen(process.env.PORT, () => console.log(`server is listening on port ${process.env.PORT}`));
