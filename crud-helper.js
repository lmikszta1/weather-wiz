// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const City = require('./models/city');


// Local variables will come in handy for holding retrieved documents
let user, city
let users, cities
