const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(`mongodb+srv://admin:488690@clustercubes.xrefz.mongodb.net/bookingDB?retryWrites=true&w=majority`)
    const db = mongoose.connection;
    db.on('error', console.log.bind(`Database connection error`));
    db.once('start', console.log.bind(`DB connected...`));
}