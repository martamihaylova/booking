const userController = require('../controllers/userController.js');
const getController = require('../controllers/getController.js');

module.exports = (app) => {
    // TODO...
    app.use('/user', userController);
    // app.use('/create', createAndDeleteController);
    // app.use('/delete', createAndDeleteController);
    // app.use('/edit', editController);
    // app.use('/search', searchController);
    app.use('/', getController);
    app.get('*', (req, res) => {
        res.send('404');
    });
};