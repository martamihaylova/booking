const express = require('express');
const routes = require('./config/routes');
const errorHandler = require('./middleware/errorHandler');
const { PORT } = require('./config/config');
const app =  express();

require('./config/express')(app);
require('./config/mongoose');
require('./config/routes')(app);
app.use(routes);
// app.use(errorHandler);
console.log(process.env.NODE_ENV);

app.listen(PORT, console.log.bind(console, `Server listening on port ${PORT}...`));