const Users = require('../models/Users');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/config');

function register(email, name, password, req, res) {

    Users.find({})
        .then((data) => {
            let foundName = data.find((x) => x?.username.toLowerCase() === name.toLowerCase());
            let foundEmail = data.find((x) => x?.email === email);
            if (foundName || foundEmail) res.render('register', { messages: { error: 'Username or email allready exists.Please try again.' }, title: 'Register' });
        });

    bcrypt.hash(password, SALT_ROUNDS)
        .then((hashedPassword) => {
            let user = new Users({
                email,
                username: name,
                password: hashedPassword,
            });
            user.save();
            res.locals.user = user;
            req.login(user, function (err) {
                if (err) { return next(err); }
                return res.redirect('/');
            });

        })
        .catch((err) => {
            console.log(err.message);
            res.render('register', { messages: { error: 'Unsuccessful reristration.Please try again.' }, title: 'Register' });
        });

}
module.exports = register;