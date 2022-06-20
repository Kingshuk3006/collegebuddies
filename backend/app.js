// Imports
const express = require('express');
const app = express();
const connectDb = require('./db/connectdb');
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"


// Databse Connection
connectDb(DATABASE_URL);

// Routes
const collegeRoute = require('./api/colleges');
app.use('/colleges', collegeRoute);


//  Methods
app.get('/', (req, res) => {
    res.send('Hello World');
})


// Port Connectio
const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})