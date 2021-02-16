const express = require('express');

const app =  express();

require('./config/express')(app);
require('./config/mongoose');
// console.log(process.env.NODE_ENV);

app.listen(3000, console.log.bind(console, `Server listening on port 3000...`));