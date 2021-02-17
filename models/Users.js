const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
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