// implement your API here
const express = require('express');

const server = express();

server.get('/',(req, res) => {
    res.send('Hello World!');
});

server.get('/hobbits',(req, res) => {
    const hobbits = [
        {
        id: 1,
        name: 'Samwise Gamgee'
        },
        {
        id: 2,
        name: 'Frodo Baggins'
        },
        {
        id: 3,
        name: 'Bilbo Baggins'
        }
    ]
    res.send(hobbits);
});

server.listen(8000,() => console.log('API Running on port 8000'));
