const Hotel = require('../models/Hotels');

function createNewHotel(data) {
    let hotel = new Hotel(data);
    return hotel.save();
}

module.exports = createNewHotel;