const { Router } = require('express');
const Hotels = require('../models/Hotels');
const router = Router();

router.get('/', async (req, res) => {
    let user = await req.user;
    let hotels = await Hotels.find().lean();
    console.log(user);
    hotels.sort((a, b) => Number(b.freeRooms) - Number(a.freeRooms));
    res.render('home', {
        authenticated: req.isAuthenticated(),
        id: user?._id,
        name: user?.username,
        hotels
    });

});

module.exports = router;