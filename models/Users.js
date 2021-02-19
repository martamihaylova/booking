const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        // validate: /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 1,
        required: true
    },
    booked: [{
        type: mongoose.Types.ObjectId,
        ref: 'Hotels'
    }],
    offered: [{
        type: mongoose.Types.ObjectId,
        ref: 'Hotels'
    }],
});

module.exports = mongoose.model('Users', userSchema);