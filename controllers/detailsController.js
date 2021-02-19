const { Router } = require('express');
const check = require('../middleware/checkAuth');
const hotelDetails = require('../services/getDetails');
const router = Router();

router.get('/:id', check.ifLoged, async (req, res) => {
    let user = await req.user;
    let currentHotel = await hotelDetails(req.params.id);
    let owner = (currentHotel.owner + '') === (user._id + '');
    res.render('details', { authenticated: req.isAuthenticated(), name: user?.username, currentHotel, owner})
});

module.exports = router;