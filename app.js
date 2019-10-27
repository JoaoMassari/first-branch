require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose')
const app = express(); //executing express...now we can create routes with express
//transforming the data received in the models in json
const bodyParser = require('body-parser')
const { cadesp, sivec, siel, arpenp, caged, censec} = require('./webscrap/cadesp/cadesp')
//make sure everytime we hit any request,his bodyparser runs
app.use(bodyParser.json())

//Import routes
const postsRoute = require('./routes/posts');

//Midlewares
//very important, this is redirecting the routes
/* app.get('/posts',postsRoute) */

//routes

app.get('/consultaCadesp', async (req, res) => {
    //localhost:3000/test?batata=texto
    const { cpf } = req.query;
    
    const resultadoCADESP = await cadesp(cpf);

    res.status(200).json(resultadoCADESP)      

})

app.get('/consultaSivec', async (req, res) => {
    //localhost:3000/test?batata=texto
    const {  } = req.query;
    
    const resultadoSivec = await sivec();

    res.status(200).json(resultadoSivec)      

    
})
app.get('/consultaSiel', async (req, res) => {
    //localhost:3000/test?batata=texto
    const {  } = req.query;
    
    const resultadoSiel = await siel();

    res.status(200).json(resultadoSiel)      

    
})

app.get('/consultaArpenp', async (req, res) => {
    //localhost:3000/test?batata=texto
    const { numeroProcesso } = req.query;
    
    const resultadoArpenp = await arpenp(numeroProcesso);

    res.status(200).json(resultadoArpenp)      

    
})

app.get('/consultaCaged', async (req, res) => {
    //localhost:3000/test?batata=texto
    const { chaveAutorizado,cnpjEmpresa,chaveTrabalhador } = req.query;
    
    const resultadoCaged = await caged(chaveAutorizado,cnpjEmpresa,chaveTrabalhador);

    res.status(200).json(resultadoCaged)      

    
})

app.get('/consultaCensec', async (req, res) => {
    //localhost:3000/test?batata=texto
    const {  } = req.query;
    
    const resultadoCensec = await censec();

    res.status(200).json(resultadoCensec)      

    
})



//connect to DB 
mongoose.connect(
    process.env.DB_CONNECTION, //accessing .env
    {useNewUrlParser: true},
 () => console.log('connect to db'))

//Lets listen to the server
app.listen(5000);
