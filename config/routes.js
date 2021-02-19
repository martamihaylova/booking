const userController = require('../controllers/userController.js');
const homeController = require('../controllers/homeController.js');
const detailsController = require('../controllers/detailsController.js');
const editController = require('../controllers/editController.js');
const bookingController = require('../controllers/bookingController.js');
const profileController = require('../controllers/profileController.js');
const addAndDeleteController = require('../controllers/addAndDeleteController.js');

module.exports = (app) => {
    // TODO...
    app.use('/user', userController);
    app.use('/add', addAndDeleteController);
    app.use('/details', detailsController);
    app.use('/delete', addAndDeleteController);
    app.use('/edit', editController);
    app.use('/book', bookingController);
    app.use('/profile', profileController);
    // app.use('/search', searchController);
    app.use('/', homeController);
    app.get('*', (req, res) => {
        res.send('404');
    });
};