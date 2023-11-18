import dotenv from 'dotenv';
import app from './app.js';

if(process.env.NODE_ENV === 'production') {
	dotenv.config();
} else {
	dotenv.config({path: `.env.${process.env.NODE_ENV}`});
}

app.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));
