const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({

    name: {
        type: String,
        minlength: 4,
        unique: true,
        required: true
    },
    city: {
        type: String,
        minlength: 3,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/,
        messages: 'Must be a secured URL',
    },
    freeRooms: {
        type: Number,
        min: 1,
        max: 100
    },
    usersBooked: [{
        type: mongoose.Types.ObjectId,
        ref: 'Users'
    }],
    owner: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Hotels', userSchema);