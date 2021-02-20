const { Router } = require('express');
const Hotels = require('../models/Hotels');
const router = Router();

router.get('/', async (req, res) => {
    try {
        let user = await req.user;
        console.log(user);
        if(user === null) {
            console.log('null');
            res.redirect('/');
        }
        let hotels = await Hotels.find().lean();
        hotels.sort((a, b) => Number(b.freeRooms) - Number(a.freeRooms));
        res.render('home', {
            authenticated: req.isAuthenticated(),
            id: user?._id,
            name: user?.username,
            hotels
        });
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;