const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const DB_URI = require('./config/db_config');
const userRoutes = require('./routes/user');
const uri = require('./config/db_config');

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
// Middlewares
app.use(bodyParser.json());
app.use('/user', userRoutes);

// DB connection
mongoose.connect(DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if(err) console.log(err)
    else console.log('Connected to the database')
})
console.log(uri)

// Statics routes
const listEndpoints = require("express-list-endpoints"); // npm i express-list-endpoints
// console.log(listEndpoints(app)); // where app = express();
app.get("/routes", (req,res) =>{
  res.send(listEndpoints(app));
})
app.get('/',  (req, res) => res.send('Hellow World!'));

app.listen(port, () => console.log(`http://localhost:${port}/`));