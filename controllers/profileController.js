const { Router } = require('express');
const check = require('../middleware/checkAuth');
const Users = require('../models/Users');
const router = Router();

router.get('/:id', check.ifLoged, async (req, res) => {
   
  let user = await Users.findById(req.params.id).populate('booked').lean();
  
    res.render('profile', {
        authenticated: req.isAuthenticated(),
        id: user?._id,
        name: user?.username,
        email: user?.email,
        bookings: user?.booked,
    })
});

module.exports = router;