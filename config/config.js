const config = {
    development: {
DB_URL: 'mongodb+srv://admin:488690@clustercubes.xrefz.mongodb.net/bookingDB?retryWrites=true&w=majority',
        PORT: 5000,
    },
    production: {
        DB_URL: 'mongodb+srv://admin:488690@clustercubes.xrefz.mongodb.net/bookingDB?retryWrites=true&w=majority',
        PORT: 80,
    }
};

module.exports = config[process.env.NODE_ENV];