const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // somethings: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Something'
    // }],
});

module.exports = mongoose.model('Users', userSchema);