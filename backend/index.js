// import the dependencies required for Express.js
const express = require("express");
// import the dependencies required for cors
const cors = require("cors");

// initialize the Express.js application
// store it in the app variable
const app = express();

// allow cross-origin requests to reach the Expres.js server
// from localhost:3000, which is your frontend domain
app.options(
  "*",
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
app.use(cors());

// import the dependencies required for dotenv
// the config() function allows for reading of the .env file
const dotenv = require("dotenv").config();
// import the connectDB function created earlier
const connectDB = require("./config/db");

// initialize connection to MongoDB database
connectDB();

const PORT = 8080 || process.env.PORT;

// allow JSON data in request body to be parsed
app.use(express.json());
// allow URL-encoded data in request body to be parsed
app.use(express.urlencoded({ extended: false }));

// configure the Express.js application to run at port 8080
// since you will be running this application on your computer (localhost),
// the backend server will be running at http://localhost:8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

// when a GET request is made to http://localhost:8080/,
// the response will be { message: 'Hello World' } in JSON format
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/api/addresses", require("./routes/addressRoutes"));

// export Express.js application to be used elsewhere
module.exports = app;
