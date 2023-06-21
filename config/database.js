// import mongoose to use it
const mongoose = require('mongoose');

// connect mongoose to the database url in the .env file
mongoose.connect(process.env.DATABASE_URL);

// saving our db connection to a var for easy use
const db = mongoose.connection;

// when db is connected, console log a message to show what db is connected to what host at what port
db.on('connected', function () {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});