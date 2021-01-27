const express = require('express');

const endpoints = require('./controllers/Endpoints')

const app = express();

// use process.env variables to keep private variables,
require('dotenv').config();

// Express Middleware
const helmet = require('helmet'); // creates headers that protect from attacks (security)
const bodyParser = require('body-parser'); // turns response into usable format
const cors = require('cors'); // allows/disallows cross-site communication
const morgan = require('morgan'); // logs requests

app.use(helmet());
// app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(cors({ allowedHeaders: '*' }));
app.use(morgan('combined')); // use 'tiny' or 'combined'

endpoints.initialize(app);

// App Server Connection
var ip = process.env.IP || 'localhost';
var port = process.env.PORT || '3001';
console.log(ip, port);

app.listen(port,ip);
app.listen(process.env.PORT || 3001, () => {
  console.log(`app is running on port ${process.env.PORT || 3001}`);
});
