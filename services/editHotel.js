const Hotel = require('../models/Hotels');

function editHotel(hotelId, data) {
    console.log(data);
    return Hotel.updateOne({ _id: hotelId }, data);
}

module.exports = editHotel;