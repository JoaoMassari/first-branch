Primeiro faça download da ultima versão do node.

dentro do projeto execute:
D:\first-branch-master>npm install    fazendo assim o download das dependecias do projeto

após instalar as dependencias,

D:\first-branch-master>npm start     -- rodando o projeto localmente

para testar a funcionalidade da api use o postman ou curl caso esteja utilizando linux mac
e faça uma requisição get na seguinte url: localhost:5000/consulta?cpf= e insira algum valor no cpf.

a api esta escutando esta url neste pedaço de codigo que se encontra em app.js


Codigo importante para o funcionamento da api

const { cadesp } = require('./webscrap/cadesp/cadesp')== exports.cadesp... da forma como eu pensei, de ter um arquivo.js para cada site, seria mais intuitivo usar module.export ,
.
.
.
app.get('/consulta', async (req, res) =>{
  //esperando o parametro cpf
  const { cpf } = req.query  
  //chamando o script de automação e passando o parametro cpf
  const resultadoCADESP = await cadesp(cpf)
  
  res.status(200).json(resultadoCADESP)  //Usuario que faz requisição NÃO VE a propriedade
}

