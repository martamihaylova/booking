const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        validate: {
            validator: function (v) {
               return /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/.test(v);
            }
        },
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 5,
        required: true
    },
    booked: [{
        type: mongoose.Types.ObjectId,
        ref: 'Something'
    }],
    offered: [{
        type: mongoose.Types.ObjectId,
        ref: 'Something'
    }],
});

module.exports = mongoose.model('Users', userSchema);