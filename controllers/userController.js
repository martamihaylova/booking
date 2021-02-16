const { Router } = require('express');
const router = Router();
const passport = require('passport');
const initPassport = require('../config/passport-config');
const register = require('../services/registerUser');
const Users = require('../models/Users');
const check = require('../middleware/checkAuth');

initPassport(passport, async(username) => {
    try {
        return await Users.findOne({ 'username': username });
    } catch (err) {
        console.log(err.message);
    }
}, async(id) => {
    try {
        return await Users.findById(id);
    } catch (err) {
        console.log(err.message);
    }
});


router.get('/logout', check.ifLoged, (req, res) => {
    req.logOut();
    res.redirect('/user/login');
});
router.get('/login', check.ifNotLoged, (req, res) => {
    res.render('login', { title: 'Login' });
});
router.post('/login', check.ifNotLoged, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/user/login',
    failureFlash: true
}));
router.get('/register', check.ifNotLoged, (req, res) => {
    res.render('register', { title: 'Register' });
});
router.post('/register', check.ifNotLoged, (req, res) => {
    let { username, password, repeatPassword } = req.body;
    username = username.toLowerCase();
    if (password === repeatPassword) {
        Users.find({ username }, (err, data) => {
            if (data.length > 0) {
                res.render('register', { message: 'Unsuccessful reristration.Please try again.', title: 'Register' });
            } else {
                if (register(username, password)) {
                    res.render('login', { message: 'Successful reristration.Please login.', title: 'Login' });
                } else {
                    res.send('Something went wrong');
                    res.end();
                }
            }
        });
    } else {
        res.render('register', { message: 'Missmatch passwords', title: 'Register' })
    }
});

module.exports = router;