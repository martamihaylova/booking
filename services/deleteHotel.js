const Hotel = require('../models/Hotels');
const Users = require('../models/Users');

async function deleteHotel(id) {
    let hotel = await Hotel.findById(id, 'owner');
    let user = await Users.findById(hotel.owner);
    user.offered.splice(user.offered.indexOf(hotel._id), 1);
    user.save();
    hotel.deleteOne({ _id: id }, function (err) {
        if (err) console.log(err);
        console.log("Successful deletion");
    });
}

module.exports = deleteHotel;