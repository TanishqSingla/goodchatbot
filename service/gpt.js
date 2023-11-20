import OpenAI from "openai"

/**
	* Use openai api to repond to message
	* @param {string} message to respond to
	**/
	export const aiResponse = async (message) => {
		try {
			const openai = new OpenAI();
			const reply = await openai.chat.completions.create({
				model: 'gpt-3.5-turbo',
				messages: [{role: "user", content: message}]
			});

			return { 
				success: true,
				message: reply.choices[0] 
			};
		}
		catch(err) {
			return { 
				message: err.message,
				success: true,
			}
		}
	}
