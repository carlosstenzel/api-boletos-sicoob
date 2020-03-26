const express = require("express");
const request = require("request");
const dateFormat = require("dateformat");

// Inicia
const server = express();

/**
 * Configs
 * Solicite os demais dados para sua cooperativa para que possa implementar o mesmo.
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

  const data = JSON.stringify({
    numCliente,
    coopCartao,
    chaveAcessoWeb,
    numContaCorrente,
    codMunicipio,
    codEspDocumento: "DM",
    dataEmissao,
    seuNumero: "",
    nomeSacador: "",
    numCGCCPFSacador: "",
    qntMonetaria: "",
    valorTitulo: "",
    codTipoVencimento: "1",
    dataVencimentoTit: "",
    valorAbatimento: "0",
    valorIOF: "0",
    bolAceite: "1",
    percTaxaMulta: "0",
    percTaxaMora: "0",
    dataPrimDesconto: "",
    valorPrimDesconto: "0",
    dataSegDesconto: "",
    valorSegDesconto: "0",
    descInstrucao1: "",
    descInstrucao2: "",
    descInstrucao3: "",
    descInstrucao4: "",
    descInstrucao5: "",
    nomeSacado: "",
    dataNascimento: "",
    telefone: "",
    ddd: "",
    ramal: "",
    bolRecebeBoletoEletronico: "1",
    email: "",
    cpfCGC: "",
    endereco: "",
    bairro: "",
    cidade: "",
    cep: "",
    uf: ""
  });

  request.post(
    {
      url: "https://geraboleto.sicoobnet.com.br/geradorBoleto/GerarBoleto.do",
      formData: data
    },
    function optionalCallback(err, httpResponse, body) {
      res.send(
        body
          .toString()
          .replace(
            'img src="',
            'img src="https://geraboleto.sicoobnet.com.br/geradorBoleto/'
          )
      );
    }
  );
});

server.listen(3001);
