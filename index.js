// implement your API here
const express = require('express');

const server = express();

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

//server.use(function(req, res) {
  //  res.status(404).send('Dead End....');
//});

server.use(express.json());

server.get('/',(req, res) => {
    res.send('Welcome to Hobbiton');
});

// Get all of the hobbits 
server.get('/hobbits',(req, res) => {
    
    res.send(hobbits);
    });
// Add a Hobbit
server.post('/hobbits',(req, res) => {
    
    res.status(201).json({url: '/hobbits', operation: 'POST'});
    });
// Update a Hobbit
server.put('/hobbits',(req, res) => {
    
    res.status(201).json({url: '/hobbits', operation: 'PUT'});
    });
// Delete a Hobbit
server.delete('/hobbits',(req, res) => {
    
    res.sendStatus(204);
    });


server.use(function(req, res) {
    res.status(404).send('Dead End....');
    });

server.listen(8000,() => console.log('API Running on port 8000'));
