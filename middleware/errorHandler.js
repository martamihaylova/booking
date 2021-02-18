const errorHandler = (err, req, res, next) => {
err.message = err.message || 'Smething went wrong';
err.status = err.status || 500;
console.log(err);

res.status(err.status).render('/', {messages: {error: err._message}});
};
module.exports = errorHandler;