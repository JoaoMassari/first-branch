const puppeteer = require('puppeteer');

const login = '12356';
const senha = '123';

let scrape = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/cadesp/login.html');

  // LOGAR
  const clickLogin = await page.click('#ctl00_conteudoPaginaPlaceHolder_loginControl_UserName');
  await page.keyboard.type(login)


  const clickSenha = await page.click('#ctl00_conteudoPaginaPlaceHolder_loginControl_Password');
  await page.keyboard.type(senha)


  const clickEntrar = await page.click('#ctl00_conteudoPaginaPlaceHolder_loginControl_loginButton');

  /* //LOGADO! Consultas e Cadastro
  const clickAbaConsulta = await page.click('//*[@id="ctl00_menuPlaceHolder_menuControl1_LoginView1_menuSuperiorn1"]/table/tbody/tr/td');
  await page.screenshot({path: 'abaConsulta.png'}); 
  
  const clickAbaCadastro = await page.click('//*[@id="ctl00_menuPlaceHolder_menuControl1_LoginView1_menuSuperiorn8"]/td/table/tbody/tr/td/a');
  await page.screenshot({path: 'Cadastro.png'});  */
  
  //por algum motivo quando clico em cadastro, ele me leva para a tela de login la do site oficial, tanto que nao consigo logar apartir de la
  //então estou apontando no dedo para a pagina de retirar informações

  await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/cadesp/pagina3-pesquisa.html');
  await page.screenshot({path: 'CadastroDedo.png'}); 

  /* const clickIe = await page.click('#ctl00_conteudoPaginaPlaceHolder_tcConsultaCompleta_TabPanel1_lstIdentificacao');
  await page.screenshot({path: 'IE.png'}); */

  await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/cadesp/pagina4-dados.html?ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstIdentificacao=1&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24txtIdentificacao=&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24txtNomeEmpresarial=&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstContabilista=0&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24txtContabilista=&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstParticipante=0&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24txtParticipante=&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstProcurador=0&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24txtProcurador=&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstDRT=0&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstTipoEstabelecimento=0&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstSituacaoCadastral=0&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstCnaePrimario=0&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstCnaeSecundario=0&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24btnConsultarEstabelecimento=Consultar');
  await page.screenshot({path: 'x.png'}); 
    await page.screenshot({path: 'ConsultarDados.png'});

   const Consultar = await page.evaluate(() => {
    let ie = document.querySelector('#ctl00_conteudoPaginaPlaceHolder_dlCabecalho > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(2)').innerText;
    let cnpj = document.querySelector('#ctl00_conteudoPaginaPlaceHolder_dlCabecalho > tbody > tr > td > table > tbody > tr:nth-child(3) > td:nth-child(2)').innerText;
    let nomeEmpresarial = document.querySelector('#ctl00_conteudoPaginaPlaceHolder_dlCabecalho > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(2)').innerText;
    let drt = document.querySelector('#ctl00_conteudoPaginaPlaceHolder_dlCabecalho > tbody > tr > td > table > tbody > tr:nth-child(5) > td:nth-child(2)').innerText;
    let situacao = document.querySelector('#ctl00_conteudoPaginaPlaceHolder_dlCabecalho > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(3)').innerText;
    let dataInscricaoEstado = document.querySelector('#ctl00_conteudoPaginaPlaceHolder_dlCabecalho_ctl00_Label162').innerText;
    let regimeEstadual = document.querySelector('#ctl00_conteudoPaginaPlaceHolder_dlCabecalho > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(3)').innerText;
    let postoFiscal = document.querySelector('#ctl00_conteudoPaginaPlaceHolder_dlCabecalho > tbody > tr > td > table > tbody > tr:nth-child(5) > td:nth-child(3)').innerText; 
  return {
    ie,
    cnpj,
    nomeEmpresarial,
    drt,
     situacao,
    dataInscricaoEstado,
    regimeEstadual,
    postoFiscal, 
  } 
  
 }); 

  
 /* const result = await page.evaluate(() => {
  let data = []; // Create an empty array that will store our data
  let elements = document.querySelectorAll('.dadoDetalhe'); // Select all Products

  for (var element of elements){ // Loop through each proudct
      let info = element.innerText; // Select the title
     /*  let cnpj = element.innerText;  // Select the price 
      if(info !== '' && info !== ' ' && info !== null){
        data.push({info}); // Push an object with the data onto our array
      }
      
  }

  return data; // Return our data array
}); */

  await browser.close();
   return Consultar


};
scrape().then((value) => {
  console.log(value); // Success!
});

//<input name="ctl00$conteudoPaginaPlaceHolder$loginControl$UserName" type="text" maxlength="16" id="ctl00_conteudoPaginaPlaceHolder_loginControl_UserName" tabindex="1" class="dadoDetalhe"></input>