const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const DB_URI = require('./config/db_config');
const userRoutes = require('./routes/user');


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

app.get('/',  (req, res) => res.send('Hellow World!'));
/*
app.get('/personne',async (req,res)=> {
    try {
    const personne = await DB_URI.find()
    res.send(personne)}
    catch (error){
        res.status(500).json({message:err.message})
    }//Select * from tablepersonne
})
*/
app.listen(port, () => console.log(`Example app listening on port port!`));