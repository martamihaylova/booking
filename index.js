const express = require ('express');

const server =  express();

server.listen(3000, console.log.bind(console, `Server listening on port 3000...`));