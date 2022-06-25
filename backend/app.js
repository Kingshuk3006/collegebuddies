// Imports
const express = require ('express');
const app = express ();
const bodyParser = require ('body-parser');
const connectDb = require ('./db/connectdb');
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';

//Body Parser
app.use (
  bodyParser.urlencoded ({
    extended: true,
  })
);

// Databse Connection
connectDb (DATABASE_URL);

app.use (express.json ());
// Routes
const collegeRoute = require ('./api/colleges');
app.use ('/colleges', collegeRoute);

const profileRoute = require ('./api/profiles');
app.use ('/profiles', profileRoute);

const eventRoute = require ('./api/events');
app.use ('/event', eventRoute);

const projectRoute = require ('./api/projects');
app.use ('/project', projectRoute);

const featuredRoute = require ('./api/featuredEvent');
app.use ('/featuredEvent', featuredRoute);

//  Methods
app.get ('/', (req, res) => {
  res.send ('Hello World');
});

// Port Connectio
const port = 5000;
app.listen (port, () => {
  console.log (`Server running on port http://localhost:${port}`);
});
