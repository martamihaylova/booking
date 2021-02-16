const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://admin:488690@clustercubes.xrefz.mongodb.net/bookingDB?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });
const db = mongoose.connection;
db.on('error', console.error.bind(console, `Database connection error`));
db.once('open', console.log.bind(console, `DB connected`));

module.exports = db;