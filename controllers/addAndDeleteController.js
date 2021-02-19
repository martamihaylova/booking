const { Router } = require('express');
const addHotel = require('../services/addHotel');
const deleteHotel = require('../services/deleteHotel');
const check = require('../middleware/checkAuth');
const validator = require('validator');
const router = Router();

router.get('/:id', check.ifLoged, (req, res) => {
    deleteHotel(req.params.id)
    .then(() => res.redirect('/'))
    .catch((err) => console.log(err.message))
})
router.get('/', check.ifLoged, async (req, res) => {
    let user = await req.user;
    res.render('add', { authenticated: req.isAuthenticated(), name: user?.username })
});
router.post('/', async (req, res) => {
    try {
        if (validator.isURL(req.body.imgUrl, { protocols: ['http', 'https'] })) {
            let user = await req.user;
            req.body.owner = user;
            addHotel(req.body, user);
            res.redirect('/');
        } else {
            res.redirect('add', { messages: { error: 'Invalid inputs' } });
        }
    } catch (err) {
        console.log(err.message)
    }
});

module.exports = router;