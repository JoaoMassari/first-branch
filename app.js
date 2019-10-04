const express = require('express');
const mongoose = require('mongoose')
const app = express(); //executing express...now we can create routes with express
//transforming the data received in the models in json
const bodyParser = require('body-parser')

//make sure everytime we hit any request, we make sure this bodyparser runs
app.use(bodyParser.json())

//Import routes
const postsRoute = require('./routes/posts');

//Midlewares
//very important, this is redirecting the routes
app.use('/posts',postsRoute)

require('dotenv/config');



//connect to DB 
mongoose.connect(
    process.env.DB_CONNECTION, //accessing .env
    {useNewUrlParser: true},
 () => console.log('connect to db'))

//Lets listen to the server
app.listen(3000);
