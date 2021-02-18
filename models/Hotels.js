const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({

    hotel: {
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
    imgUrl: {
        type: String,
        required: true
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

module.exports = mongoose.model('Hotels', hotelSchema);