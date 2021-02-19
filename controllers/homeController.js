const { Router } = require('express');
const Hotels = require('../models/Hotels');
const router = Router();

router.get('/', async (req, res) => {
    let user = await req.user;
    let hotels = await Hotels.find().lean();
    hotels.sort((a, b) => Number(b.freeRooms) - Number(a.freeRooms));
    res.render('home', { authenticated: req.isAuthenticated(), name: user?.username, hotels })

});

module.exports = router;