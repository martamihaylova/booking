const Users = require('../models/Users');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/config');

function register(email, name, password) {
    let isSuccessful;
    bcrypt.hash(password, SALT_ROUNDS)
        .then((hashedPassword) => {
            let user = new Users({
                email,
                username: name,
                password: hashedPassword,
            });
            user.save();
            isSuccessful = true;
        })
        .catch((err) => {
            console.log(err.message);
            isSuccessful = false;
        });
    return isSuccessful;
}
module.exports = register;