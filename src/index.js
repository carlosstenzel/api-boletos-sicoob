const express = require('express');

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

server.post('/emiteboleto/', (req, res) => {

});

server.listen(3001);
