// implement your API here
const express = require('express');

const server = express();

server.get('/');

server.listen(8000,() => console.log('API Running on port 8000'));
