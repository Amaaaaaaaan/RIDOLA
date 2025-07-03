const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db'); // Importing the database connection function
const userRoutes = require('./routes/user.routes'); // Importing user routes
const captainRoutes = require('./routes/captain.routes'); // Importing captain routes

connectToDb(); // Establishing the database connection

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(cookieParser()); // Middleware to parse cookies

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', userRoutes); // Using user routes
app.use('/captains', captainRoutes); // Using captain routes

module.exports = app;
