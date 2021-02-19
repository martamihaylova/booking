const { Router } = require('express');
const hotelDetails = require('../services/getDetails');
const edit = require('../services/editHotel')
const check = require('../middleware/checkAuth');
const router = Router();

router.get('/:id', check.ifLoged, async (req, res) => {
    try {
        let user = await req.user;
        let currentHotel = await hotelDetails(req.params.id);
        user.booked.push(currentHotel);
        currentHotel.freeRooms = Number(currentHotel.freeRooms) - 1;
        user.save();
        edit(req.params.id, currentHotel)
            .then(() => res.redirect('/'))
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;