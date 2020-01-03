const express = require("express");
const request = require("request");

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
  const data = JSON.stringify({
    numCliente,
    coopCartao,
    chaveAcessoWeb,
    codMunicipio
  });

  request.post(
    {
      url: "https://geraboleto.sicoobnet.com.br/geradorBoleto/GerarBoleto.do",
      formData: data
    },
    function optionalCallback(err, httpResponse, body) {
 
      res.send(body.toString().replace('img src="', 'img src="https://geraboleto.sicoobnet.com.br/geradorBoleto/'));
    }
  );
});

server.listen(3001);
