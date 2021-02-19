const Hotel = require('../models/Hotels');

function getDetails(id) {

    return Hotel.findById(id).lean();

}

module.exports = getDetails;