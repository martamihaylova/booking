const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    let user = await req.user;
    console.log(user);
    res.render('home', { authenticated: req.isAuthenticated(), name: user?.username })

});

module.exports = router;