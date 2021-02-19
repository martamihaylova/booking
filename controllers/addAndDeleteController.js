const { Router } = require('express');
const addHotel = require('../services/addHotel');
// const deleteCube = require('../services/deleteCube');
const check = require('../middleware/checkAuth');
const validator = require('validator');
const router = Router();

router.get('/', check.ifLoged, async (req, res) => {
    user = await req.user;
    res.render('add', { authenticated: req.isAuthenticated(), name: user?.username })
});
router.post('/', async (req, res) => {
    try {
        if (validator.isURL(req.body.imgUrl, { protocols: ['http', 'https'] })) {
            req.body.owner = await req.user;;
            addHotel(req.body)
            res.redirect('/')

        } else {
            res.redirect('add', { messages: { error: 'Invalid inputs' } });
        }
    } catch (err) {
        console.log(err.message)
    }
});

module.exports = router;