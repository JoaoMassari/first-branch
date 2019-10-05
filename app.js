require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose')
const app = express(); //executing express...now we can create routes with express
//transforming the data received in the models in json
const bodyParser = require('body-parser')
const { cadesp } = require('./webscrap/cadesp/cadesp')
//make sure everytime we hit any request,his bodyparser runs
app.use(bodyParser.json())

//Import routes
const postsRoute = require('./routes/posts');

//Midlewares
//very important, this is redirecting the routes
/* app.get('/posts',postsRoute) */

//routes

app.get('/consulta', async (req, res) => {
    //localhost:3000/test?batata=texto
    const { cpf } = req.query;
    
    const resultadoCADESP = await cadesp(cpf);

    res.status(200).json(resultadoCADESP)      

    
})

//connect to DB 
mongoose.connect(
    process.env.DB_CONNECTION, //accessing .env
    {useNewUrlParser: true},
 () => console.log('connect to db'))

//Lets listen to the server
app.listen(5000);
