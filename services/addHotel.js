const Hotel = require('../models/Hotels');

function createNewHotel(data, user) {
    let hotel = new Hotel(data);
    hotel.save();
    user.offered.push(hotel);
    user.save();
    return hotel;
}

module.exports = createNewHotel;