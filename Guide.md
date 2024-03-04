# Guide to rest tutorial

## Backend

### Initial Setup

Follow steps in guide till 3

- Open package.json and add `"dev": "nodemon index.js"`

### Create Dockerfile and .dockerignore file

1. add `node_modules` to .dockerignore
2. Dockerfile:

```
# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any dependencies
RUN npm install

# Bundle app source inside the Docker image
COPY . .

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Define the command to run your app
CMD ["npm", "run", "dev"]

```

### Build and Run Backend Container

Build Command:

```
docker build -t rest-tut-backend .
```

Run Command:

```
docker run --rm -p 8080:8080 -v $(pwd):/app -v /app/node_modules -it --network rest-tut-net rest-tut-backend
```

### .env file changes

```
PORT=8080
MONGODB_URI="mongodb://rest-tut-db:27017/rest-api-example"

```

## Database

### Pull mongo

```
docker pull mongo
```

### Run MongoDB in container

```
docker run --rm -p 27017:27017 --name rest-tut-db --network rest-tut-net mongo:latest
```

## Frontend

### Create a .dockerignore file

1. add `node_modules` to it

### Create a Dockerfile

1. Add the following:

```
# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any dependencies
RUN npm install

# Bundle app source inside the Docker image
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "run", "dev"]
```

### Create network

Command:

```
docker network create --driver bridge rest-tut-net
```

### Build and Run Frontend Container

Build Command:

```
docker build -t rest-tut-frontend .
```

Run Command:

```
docker run --rm -p 3000:3000 -v $(pwd):/app -v /app/node_modules -it --network rest-tut-net rest-tut-frontend

```
