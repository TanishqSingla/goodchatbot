# GoodChatbot
Goodchatbot is a chat bot that accepts certain commands and using openai fetches the result.

## Local setup
**Prerequisites**
- Nodejs - Make sure you have nodejs installed in your local machine. You can install nodejs from [here](https://nodejs.org/en/download).

To Locally setup the project, follow these steps:

1. Install dependencies using this command
```sh
npm install
```

2. Setup environment variables: The project supports multiple environments i.e production and development environment.

**Production enviroment**
- For production enviroment create file named `.env` in the project folder.
- Copy the enviroment variables from `.env_example` file present in the project folder to `.env` file.
- Populate the enviroment variables with appropriate values.

**Other enviroment**
For other environment create file named `.env.<env_name>`. Replace this env_name with the name of enviroment. E.g - If you're creating a development environment create a file named `.env.development`.
Follow the last 2 steps mentioned above.

3. Run the project
**Production mode**
To run the prduction environment use the following command
```sh
npm run start
```

**Development mode**
The project includes script for development environment which supports hot reloading. You can run the proejct in development mode using
```sh
npm run dev
```

## Run in Docker
Docker contianer runs in production mode.

**Prerequisites**
- `.env` file with proper env variables.
- Mongodb atlas db

**Mongodb setup**
To setup mongodb, follow these steps.
- Login to mongodb atlas, create a db.
- Create user and password to access the db.
- Allow your local ip to access your db.
- Follow the connect instructions of your db and copy that url to `.env`'s `MONGODB_URL` variable.

**Run the docker container**
You can run the docker using the following command
```sh
docker compose up --build
```

**Troubleshoot Guide**
- Make sure the port in the env file and the host port for docker contianer is same. Currently the host port for docker container is 8080.
