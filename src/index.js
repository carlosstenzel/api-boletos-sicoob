const express = require("express");
const request = require("request");
const dateFormat = require('dateformat');

// Inicia
const server = express();

/**
 * Configs
 */
// numero do cliente
const numCliente = "";
// numero da agencia
const coopCartao = "";
// chave de acesso
const chaveAcessoWeb = "";
// numero da conta corrente
const numContaCorrente = "";
// codigo municipio *(ver file codMunicipio.xls)
const codMunicipio = "";

// Configura para receber dados via json
server.use(express.json());

server.post("/emiteboleto/", (req, res) => {
  //DATA EMISSAO 20200103
  const now = new Date();
  const dataEmissao = dateFormat(now, "yyyymmdd");
  console.log(dataEmissao);
  const data = JSON.stringify({
    numCliente,
    coopCartao,
    chaveAcessoWeb,
    codMunicipio,
    dataNascimento: "",
    telefone: "",
    ddd: "",
    ramal: "",
    bolRecebeBoletoEletronico: "1",
    email: "",
    codEspDocumento: "DS",
    dataEmissao
  });

  
});

server.listen(3001);
