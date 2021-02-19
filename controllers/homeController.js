const { Router } = require('express');
const Hotels = require('../models/Hotels');
const router = Router();

router.get('/', async (req, res) => {
    let user = await req.user;
    let hotels = await Hotels.find().lean();
    res.render('home', { authenticated: req.isAuthenticated(), name: user?.username, hotels })

});

module.exports = router;