const puppeteer = require('puppeteer');

const login = '12356';
const senha = '123';

const rg = '4321';
const nome = 'Joao Cardoso De Andrade';
const sap = '213213213';
const numProcesso = '889532'

/* exports.cadesp  */
exports.cadesp = async (cpf) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/cadesp/login.html');

  // LOGAR
  const clickLogin = await page.click('#ctl00_conteudoPaginaPlaceHolder_loginControl_UserName');
  await page.keyboard.type(login)


  const clickSenha = await page.click('#ctl00_conteudoPaginaPlaceHolder_loginControl_Password');
  await page.keyboard.type(senha)

  const clickEntrar = await page.click('#ctl00_conteudoPaginaPlaceHolder_loginControl_loginButton');

  await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/cadesp/pagina3-pesquisa.html');
  await page.screenshot({path: 'CadastroDedo.png'}); 

  const inserirCPF = await page.click('#ctl00_conteudoPaginaPlaceHolder_tcConsultaCompleta_TabPanel1_txtIdentificacao');
  await page.keyboard.type(cpf)
  await page.screenshot({path: 'inserindoCPF.png'}); 

  const clickConsultar = await page.click('#ctl00_conteudoPaginaPlaceHolder_tcConsultaCompleta_TabPanel1_btnConsultarEstabelecimento');
await page.screenshot({path: 'VerificarConsultar.png'}); 
  /* await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/cadesp/pagina4-dados.html?ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstIdentificacao=1&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24txtIdentificacao=&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24txtNomeEmpresarial=&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstContabilista=0&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24txtContabilista=&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstParticipante=0&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24txtParticipante=&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstProcurador=0&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24txtProcurador=&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstDRT=0&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstTipoEstabelecimento=0&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstSituacaoCadastral=0&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstCnaePrimario=0&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24lstCnaeSecundario=0&ctl00%24conteudoPaginaPlaceHolder%24tcConsultaCompleta%24TabPanel1%24btnConsultarEstabelecimento=Consultar');
  await page.screenshot({path: 'x.png'}); 
  await page.screenshot({path: 'ConsultarDados.png'}); */

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

  await browser.close();
  return Consultar
};

exports.sivec = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/sivec/login.html');
  await page.screenshot({path: 'pageInicial.png'});

  // LOGAR
  const clickLogin = await page.click('#nomeusuario');
  await page.keyboard.type(login)


  const clickSenha = await page.click('#senhausuario');
  await page.keyboard.type(senha)

  const clickAcessar = await page.click('#Acessar');
  await page.screenshot({path: 'acessar.png'})

  //BUSCA POR RG
  //const clickBusca = await page.click('#navbar-collapse-1 > ul > li.dropdown.open > ul > li.dropdown-submenu.open > ul > li:nth-child(1) > a');
  await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/sivec/pagina3-pesquisa-rg.html');
  page.screenshot({path: 'pesquisaRg.png'})

  const clickRG = await page.click('#idValorPesq');
  await page.keyboard.type(rg)
  await page.screenshot({path: 'pesquisaRg.png'});

  const clickPesquisarRG = await page.click('#procurar');
  await page.screenshot({path: 'procurarRG.png'})

  const clickPesquisar = await page.click('#tabelaPesquisa > tbody > tr:nth-child(1) > td.textotab1.text-center.sorting_1 > a');
  await page.screenshot({path: 'consultarRG.png'})

  //BUSCA POR NOME 
  await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/sivec/pagina4-pesquisa-nome.html');
  page.screenshot({path: 'pesquisaRg.png'})

  const clickNome = await page.click('#idNomePesq');
  await page.keyboard.type(nome)
  await page.screenshot({path: 'pesquisaNome.png'});

  const clickPesquisarNome = await page.click('#procura');
  await page.screenshot({path: 'procurarNome.png'})

  const clickConsultar = await page.click('#tabelaPesquisa > tbody > tr:nth-child(1) > td.textotab1.text-center.sorting_1 > a');
  await page.screenshot({path: 'consultarNome.png'})

  //BUSCA POR MATRICULA SAP

  await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/sivec/pagina5-pesquisa-sap.html');
  page.screenshot({path: 'pesquisaSAP.png'})

  const clickSenha2 = await page.click('#idValorPesq');
  await page.keyboard.type(sap)
  await page.screenshot({path: 'pesquisaSAP.png'});

  const clickPesquisarRG2 = await page.click('#procurar');
  await page.screenshot({path: 'procurarSAP.png'})

  const clickPesquisar2 = await page.click('#tabelaPesquisa > tbody > tr:nth-child(1) > td.textotab1.text-center.sorting_1 > a');
  await page.screenshot({path: 'consultar.png'})

    const ConsultarSivec = await page.evaluate(() => {
    let nome = document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-11 > table > tbody > tr:nth-child(1) > td:nth-child(2) > span').innerText;
    let dataNascimento = document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-11 > table > tbody > tr:nth-child(2) > td:nth-child(2) > span').innerText;
    let sexo = document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-11 > table > tbody > tr:nth-child(1) > td:nth-child(5) > span').innerText;
    let rg = document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-11 > table > tbody > tr:nth-child(2) > td:nth-child(5) > span').innerText;
    let tipoRG = document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-11 > table > tbody > tr:nth-child(3) > td:nth-child(5) > span').innerText;
    let dataEmissaoRG = document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(1) > td:nth-child(2) > span').innerText;
    let estadoCivil = document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(2) > td:nth-child(2) > span').innerText;
    let naturalizado = document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(3) > td:nth-child(2) > span').innerText;
    let nomePai = document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(5) > td:nth-child(2) > span').innerText;
    let nomeMae = document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(6) > td:nth-child(2) > span').innerText;
    let cor = document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(7) > td:nth-child(2) > span').innerText;
    let alcunha = document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(1) > td:nth-child(5) > span').innerText;
    let naturalidade = document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(2) > td:nth-child(5) > span').innerText;
    let corOlhos = document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(5) > td:nth-child(5) > span').innerText;
    let profissao = document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(7) > td:nth-child(5) > span').innerText;
    let residencia = document.querySelector('body > form:nth-child(13) > div > div:nth-child(7) > div.col-md-7 > span').innerText;
    let trabalho = document.querySelector('body > form:nth-child(13) > div > div:nth-child(8) > div.col-md-7 > span').innerText;

    return {
      nome,
      dataNascimento,
      sexo,
      rg,
      tipoRG,
      dataEmissaoRG,
      estadoCivil,
      naturalizado,
      nomePai,
      nomeMae,
      cor,
      alcunha,
      naturalidade,
      corOlhos,
      profissao,
      residencia,
      trabalho
    } 

});
    await browser.close();
    return ConsultarSivec
};



exports.siel = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/siel/login.html');

  // LOGAR
  const clickLogin = await page.click('body > div.canvas > div.conteudo > div.mioloInterna.apps > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]');
  await page.keyboard.type(login)


  const clickSenha = await page.click('body > div.canvas > div.conteudo > div.mioloInterna.apps > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=password]');
  await page.keyboard.type(senha)

  const clickEntrar = await page.click('body > div.canvas > div.conteudo > div.mioloInterna.apps > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=submit]');

  /* const inserirNome = await page.click('body > div.canvas > div.conteudo > div.mioloInterna.apps > form.formulario > fieldset:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(2)');
 
  await page.keyboard.type(nome)
  await page.screenshot({path: 'inserindoNome.png'});  */
  await page.goto(' http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/siel/pagina3-dados.html?nome=132&nome_mae=&dt_nascimento=&num_titulo=&num_processo=3123&x=78&y=6');
  /* const inserirNumeroProcesso = await page.click('#num_processo');
  await page.keyboard.type(numProcesso)
  await page.screenshot({path: 'inserirNumero.png'}); 

  const clickEnviar = await page.click('body > div.canvas > div.conteudo > div.mioloInterna.apps > form.formulario > table > tbody > tr > td:nth-child(2) > input');
  await page.screenshot({path: 'enviar.png'})
 */

  const ConsultarSiel = await page.evaluate(() => {

    let nome = document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(2) > td:nth-child(2)').innerText;
    let titulo = document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(3) > td:nth-child(2)').innerText;
    let dataNascimento = document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(4) > td:nth-child(2)').innerText;
    let zona = document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(5) > td:nth-child(2)').innerText;
    let endereco = document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(6) > td:nth-child(2)').innerText;
    let municipio = document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(7) > td:nth-child(2)').innerText;
    let uf = document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(8) > td:nth-child(2)').innerText;
    let dataDomicilio = document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(9) > td:nth-child(2)').innerText;
    let nomePai = document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(10) > td:nth-child(2)').innerText;
    let nomeMae = document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(11) > td:nth-child(2)').innerText;
    let naturalidade = document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(12) > td:nth-child(2)').innerText;
    let codValidação = document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(13) > td:nth-child(2)').innerText;
    

    return {
      nome,
      titulo,
      dataNascimento,
      zona,
      endereco,
      municipio,
      uf,
      dataDomicilio,
      nomePai, 
      nomeMae,
      naturalidade,
      codValidação
    }
});
await browser.close();
return ConsultarSiel
};


exports.arpenp = async (numeroProcesso) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/arpensp/login.html');


  const clickCRC = await page.click('#main > div.container > div:nth-child(2) > div:nth-child(2) > div > a > img');
  await page.screenshot({path: 'arpenp1.png'}); 
  
  const clickArruma = await page.click('#wrapper > ul > li.item3 > a');
  await page.screenshot({path: 'arpenp2.png'});
  
  const clickBuscar = await page.click('#wrapper > ul > li.item3 > ul > li:nth-child(1) > a');
  await page.screenshot({path: 'arpenp3.png'});   

  const clickNumeroProcesso = await page.click('#principal > div > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]');
  await page.keyboard.type(numeroProcesso) //front
  await page.screenshot({path: 'arpenp4.png'});

  const clickPesquisar = await page.click('#btn_pesquisar');
  await page.screenshot({path: 'arpenp5.png'});

  const consultarArpenp = await page.evaluate(() => {
    let cartorioDeRegistro = document.querySelector('#principal > div > form > table:nth-child(3) > tbody > tr:nth-child(1) > td:nth-child(2)').innerText;
    let numeroCNS = document.querySelector('#principal > div > form > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(2)').innerText;
    let uf = document.querySelector('#principal > div > form > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(2)').innerText;
    let nomeConjugue1 = document.querySelector('#principal > div > form > table:nth-child(15) > tbody > tr:nth-child(2) > td:nth-child(2)').innerText;
    let nomeConjugue2 = document.querySelector('#principal > div > form > table:nth-child(15) > tbody > tr:nth-child(4) > td:nth-child(2)').innerText;
    let nomeNovoConjugue2 = document.querySelector('#principal > div > form > table:nth-child(15) > tbody > tr:nth-child(5) > td:nth-child(2)').innerText;
    let dataCasamento = document.querySelector('#principal > div > form > table:nth-child(15) > tbody > tr:nth-child(6) > td:nth-child(2)').innerText;
    let matricula = document.querySelector('#principal > div > form > table:nth-child(15) > tbody > tr:nth-child(8) > td:nth-child(2)').innerText;
    let dataEntrega = document.querySelector('#principal > div > form > table:nth-child(15) > tbody > tr:nth-child(9) > td:nth-child(2)').innerText; 
    let dataRegistro = document.querySelector('#principal > div > form > table:nth-child(15) > tbody > tr:nth-child(10) > td:nth-child(2)').innerText; 
    let acervo = document.querySelector('#principal > div > form > table:nth-child(15) > tbody > tr:nth-child(11) > td:nth-child(2)').innerText; 
    let numeroLivro = document.querySelector('#principal > div > form > table:nth-child(15) > tbody > tr:nth-child(12) > td:nth-child(2)').innerText; 
    let numeroFolha = document.querySelector('#principal > div > form > table:nth-child(15) > tbody > tr:nth-child(13) > td:nth-child(2)').innerText; 
    let numeroRegistro = document.querySelector('#principal > div > form > table:nth-child(15) > tbody > tr:nth-child(14) > td:nth-child(2)').innerText; 
    let tipoLivro = document.querySelector('#principal > div > form > table:nth-child(15) > tbody > tr:nth-child(15) > td:nth-child(2)').innerText; 
    
    return {
      cartorioDeRegistro,
      numeroCNS,
      uf,
      nomeConjugue1,
      nomeConjugue2,
      nomeNovoConjugue2,
      dataCasamento,
      matricula,
      dataEntrega,
      dataRegistro,
      acervo,
      numeroLivro,
      numeroFolha,
      numeroRegistro,
      tipoLivro
    } 
 }); 
 await browser.close();
 return consultarArpenp

};

exports.caged = async (chaveAutorizado,cnpjEmpresa,chaveTrabalhador) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/caged/login.html');

  const clickEntrar = await page.click('#btn-submit');
  await page.screenshot({path: 'caged1.png'});

  const hoverConsultaAutorizado = await page.hover('#nav > li:nth-child(1) > a');
  await page.screenshot({path: 'caged2.png'});   

  const clickAutorizado = await page.click('#nav > li:nth-child(1) > ul > li:nth-child(1)');
  await page.screenshot({path: 'caged3.png'});

  const clickChavePesquisa = await page.click('#formPesquisarAutorizado > fieldset > div:nth-child(8)');
  await page.keyboard.type(chaveAutorizado) //front
  await page.screenshot({path: 'caged4.png'});   

  const clickConsultarAutorizado = await page.click('#formPesquisarAutorizado > div.botoes');
  await page.screenshot({path: 'caged5.png'});

  const ConsultarAutorizado= await page.evaluate(() => {

    let cnpjCeiCpf = document.querySelector('#conteudo > fieldset:nth-child(4) > div:nth-child(2) > div > div.coluna_2NCheia').innerText;
    let razaoSocial = document.querySelector('#conteudo > fieldset:nth-child(4) > div:nth-child(3) > div > div.coluna_2NCheia').innerText;
    let logradouro = document.querySelector('#conteudo > fieldset:nth-child(6) > div:nth-child(2) > div > div.coluna_2NCheia').innerText;
    let bairro = document.querySelector('#conteudo > fieldset:nth-child(6) > div:nth-child(2) > div > div.coluna_2NCheia').innerText;
    let municipioAutorizado = document.querySelector('#conteudo > fieldset:nth-child(6) > div:nth-child(3) > div > div.coluna_2NCheia').innerText;
    let UF = document.querySelector('#conteudo > fieldset:nth-child(6) > div:nth-child(5) > div.coluna_3 > div.coluna_2n').innerText;
    let CEP = document.querySelector('#conteudo > fieldset:nth-child(6) > div:nth-child(5) > div.coluna_4 > div.coluna_2p').innerText;
    let nomeAutorizado = document.querySelector('#conteudo > fieldset:nth-child(7) > div:nth-child(2) > div > div.coluna_2NCheia').innerText;
    let cpf = document.querySelector('#conteudo > fieldset:nth-child(7) > div:nth-child(3) > div > div.coluna_2NCheia').innerText;
    let telefone = document.querySelector('#conteudo > fieldset:nth-child(7) > div:nth-child(4) > div.coluna_3 > div.coluna_2n').innerText;
    let ramal = document.querySelector('#conteudo > fieldset:nth-child(7) > div:nth-child(4) > div.coluna_4 > div.coluna_2p').innerText;
    let email = document.querySelector('#conteudo > fieldset:nth-child(7) > div:nth-child(5) > div > div.coluna_2NCheia').innerText;
    return {
      cnpjCeiCpf,
      razaoSocial,
      logradouro,
      bairro,
      municipioAutorizado,
      UF,
      CEP,
      nomeAutorizado,
      cpf, 
      telefone,
      ramal,
      email
    }
});

  const hoverConsultaEmpresa = await page.hover('#nav > li:nth-child(1) > a');
  await page.screenshot({path: 'caged6.png'});   

  const clickEmpresa = await page.click('#nav > li:nth-child(1) > ul > li:nth-child(2)');
  await page.screenshot({path: 'caged7.png'});   


  const clickCNPJEmpresa = await page.click('#formPesquisarEmpresaCAGED\\:txtcnpjRaiz');
  await page.keyboard.type(cnpjEmpresa) //front
  await page.screenshot({path: 'caged8.png'});   
  
  const clickConsultarEmpresa = await page.click('#formPesquisarEmpresaCAGED\\:btConsultar');
  await page.screenshot({path: 'caged9.png'});   

   const ConsultarEmpresa= await page.evaluate(() => {

    let cnpjEmpresa = document.querySelector('#formResumoEmpresaCaged > fieldset:nth-child(2) > div:nth-child(2) > div > div.coluna_2NCheia').innerText;
    let razaoSocialEmpresa = document.querySelector('#formResumoEmpresaCaged > fieldset:nth-child(2) > div:nth-child(3) > div > div.coluna_2NCheia').innerText;
    let atividadeEconomicaEmpresa = document.querySelector('#formResumoEmpresaCaged > fieldset:nth-child(2) > div:nth-child(4) > div > div.coluna_2NCheia').innerText;
    let numeroFiliais = document.querySelector('#formResumoEmpresaCaged > fieldset:nth-child(4) > div:nth-child(2) > div.col31 > div.coluna_2nMenor').innerText;
    let Admissoes = document.querySelector('#formResumoEmpresaCaged > fieldset:nth-child(4) > div:nth-child(3) > div.col31 > div.coluna_2nMenor').innerText;
    let variacaoAbsoluta = document.querySelector('#formResumoEmpresaCaged > fieldset:nth-child(4) > div:nth-child(4) > div > div.coluna_2nMenor').innerText;
    let totalVinculos = document.querySelector('#formResumoEmpresaCaged > fieldset:nth-child(4) > div:nth-child(2) > div.col32 > div.coluna_2nMenor').innerText;
    let desligamentos = document.querySelector('#formResumoEmpresaCaged > fieldset:nth-child(4) > div:nth-child(3) > div.col32 > div.coluna_2nMenor').innerText;
    let primeiroDia = document.querySelector('#formResumoEmpresaCaged > fieldset:nth-child(4) > div:nth-child(2) > div.col33 > div.coluna_2n').innerText;
    let ultimoDia = document.querySelector('#formResumoEmpresaCaged > fieldset:nth-child(4) > div:nth-child(3) > div.col33 > div.coluna_2n').innerText;
    return {
      cnpjEmpresa,
      razaoSocialEmpresa,
      atividadeEconomicaEmpresa,
      numeroFiliais,
      Admissoes,
      variacaoAbsoluta,
      totalVinculos,   
      desligamentos,
      primeiroDia, 
      ultimoDia,
    }
});

const hoverConsultaTrabalhador = await page.hover('#nav > li:nth-child(1) > a');
await page.screenshot({path: 'caged10.png'});   

const clickTrabalhador = await page.click('#nav > li:nth-child(1) > ul > li:nth-child(4)');
await page.screenshot({path: 'caged11.png'});   


const clickChaveTrabalhador = await page.click('#formPesquisarTrabalhador\\:txtChavePesquisa');
await page.keyboard.type(chaveTrabalhador) //front
await page.screenshot({path: 'caged12.png'});   

const clickConsultarTrabalhador = await page.click('#formPesquisarTrabalhador\\:submitPesqTrab');
await page.screenshot({path: 'caged13.png'});   

const ConsultarTrabalhador= await page.evaluate(() => {

  let nomeTrabalhador = document.querySelector('#conteudo > fieldset:nth-child(7) > div:nth-child(2) > div > div.coluna_2NCheia').innerText;
  let pisBase = document.querySelector('#conteudo > fieldset:nth-child(7) > div:nth-child(3) > div > div.coluna_2NCheia').innerText;
  let cpfTrabalhador = document.querySelector('#conteudo > fieldset:nth-child(9) > div:nth-child(2) > div.coluna_3 > div.coluna_2n').innerText;
  let ctps = document.querySelector('#conteudo > fieldset:nth-child(9) > div:nth-child(3) > div.coluna_3 > div.coluna_2n').innerText;
  let situacaoPis = document.querySelector('#conteudo > fieldset:nth-child(9) > div:nth-child(4) > div.coluna_3 > div.coluna_2n').innerText;
  let nacionalidade = document.querySelector('#conteudo > fieldset:nth-child(9) > div:nth-child(5) > div.coluna_3 > div.coluna_2n').innerText;
  let grauInstrucao = document.querySelector('#conteudo > fieldset:nth-child(9) > div:nth-child(6) > div > div.coluna_2NCheia').innerText;
  let deficiencia = document.querySelector('#conteudo > fieldset:nth-child(9) > div:nth-child(7) > div.coluna_3 > div.coluna_2n').innerText;
  let dataNascimentoTrabalhador = document.querySelector('#conteudo > fieldset:nth-child(9) > div:nth-child(2) > div.coluna_4 > div.coluna_2n').innerText;
  let sexo = document.querySelector('#conteudo > fieldset:nth-child(9) > div:nth-child(4) > div.coluna_4 > div.coluna_2n').innerText;
  let cor = document.querySelector('#conteudo > fieldset:nth-child(9) > div:nth-child(5) > div.coluna_4 > div.coluna_2n').innerText;
  let caged = document.querySelector('#conteudo > fieldset:nth-child(11) > div > div.coluna_3 > div.coluna_2n').innerText;
  let rais = document.querySelector('#conteudo > fieldset:nth-child(11) > div > div.coluna_4 > div.coluna_2n').innerText;
  return {
    nomeTrabalhador,
    pisBase,
    cpfTrabalhador,
    ctps,
    situacaoPis,
    nacionalidade,
    grauInstrucao,   
    deficiencia,
    dataNascimentoTrabalhador, 
    sexo,
    cor,
    caged,
    rais,
  }
});

await browser.close();

return [ConsultarAutorizado, ConsultarEmpresa, ConsultarTrabalhador];


};

exports.censec = async () => {
  const browser = await puppeteer.launch({defaultViewport: {width: 1920, height: 1080}});
  const page = await browser.newPage();
  await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/censec/login.html'); 

  // LOGAR
  const clickLogin = await page.click('#EntrarButton');
  await page.screenshot({path: 'censec1.png'}); 
  const hoverCentrais = await page.hover('#menucentrais');
  await page.screenshot({path: 'censec2.png'}); 
  const hoverCESDI = await page.hover('#ctl00_CESDILi > a');    
  await page.screenshot({path: 'censec3.png'}); 
  const clickConsultaAto = await page.click('#ctl00_CESDIConsultaAtoHyperLink');
  await page.screenshot({path: 'censec4.png'}); 

  const clickDocumentoCPF = await page.click('#aspnetForm > div.Geral > div > div.Conteudo > div.InternaAbas > div.AreaFormulario > fieldset > div:nth-child(2) > div');
  await page.keyboard.type('3122') //front 
  await page.screenshot({path: 'censec5.png'}); 

  const clickBuscar = await page.click('#ctl00_ContentPlaceHolder1_BuscarButton');    
  await page.screenshot({path:'censec6.png'}); 

  const clickRatio = await page.click('#ctl00_ContentPlaceHolder1_ResultadoBuscaGeralPanel > div.AreaFormulario > div.Listview > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > input[type=radio]');
  await page.screenshot({path:'censec7.png'}); 

  const clickVisualizar = await page.click('#ctl00_ContentPlaceHolder1_VisualizarButton');
  await page.screenshot({path:'censec8.png'}); 


  const ConsultarCensec = await page.evaluate(() => {
    let carga = document.querySelector('#ctl00_ContentPlaceHolder1_CodigoTextBox').innerText; 
    let mes = document.querySelector('#ctl00_ContentPlaceHolder1_MesReferenciaDropDownList').innerText;
    let ano = document.querySelector('#ctl00_ContentPlaceHolder1_AnoReferenciaDropDownList').innerText;
    let ato = document.querySelector('#ctl00_ContentPlaceHolder1_TipoAtoDropDownList').innerText;
    let diaAto = document.querySelector('#ctl00_ContentPlaceHolder1_DiaAtoTextBox').innerText;
    let livro = document.querySelector('#ctl00_ContentPlaceHolder1_LivroTextBox').innerText;  
    let folha = document.querySelector('#ctl00_ContentPlaceHolder1_FolhaTextBox').innerText;  
    
    return {
      carga,
      mes,
      ano,
      ato,
      diaAto,
      livro,
      folha,
    } 
 }); 

 await browser.close();
 return ConsultarCensec
};


/* teste().then((value) => {
  console.log(value); // Success!
}); */
  

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