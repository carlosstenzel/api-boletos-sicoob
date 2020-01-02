const express = require('express');

// Inicia
const server = express();

// Configura para receber dados via json
server.use(express.json());

server.post('/emiteboleto/', (req, res) => {

});

server.listen(3001);