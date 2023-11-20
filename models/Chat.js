import mongoose from "mongoose";

const ChatSchema = mongoose.Schema({
	user: String,
	message: String,
	timestamps: { type: Date, default: Date.now },
	reply: {type: String, required: false}
});

export const Chat = mongoose.model("Chat", ChatSchema);
