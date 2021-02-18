const { Router } = require('express');
const addHotel = require('../services/addHotel');
// const deleteCube = require('../services/deleteCube');
const check = require('../middleware/checkAuth');
const validator = require('validator');
const router = Router();

let user;
router.get('/', check.ifLoged, async (req, res) => {
    user = await req.user;
    res.render('add', { authenticated: req.isAuthenticated(), name: user?.username })
});
router.post('/', (req, res) => {
    if (validator.isURL(req.body.imgUrl, { protocols: ['http', 'https'] })) {
        req.body.owner = user;
        addHotel(req.body)
            .then(() => {
                res.redirect('/')
            })
            .catch((err) => console.log(err.message));
    } else {
        res.redirect('add', { messages: { error: 'Invalid inputs' } });
    }
});

module.exports = router;