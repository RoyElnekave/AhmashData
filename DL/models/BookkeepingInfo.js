const mongoose = require('mongoose');
const BookkeepingInfoSchema = new mongoose.Schema({
    bookkeepingName: {
        type: String,
        required: true
    },
    bookkeepingNameEmail,: {
        type: String
        required: true,
    },
    bookkeepingNamePhone: {
        type: String,
        required: true,
    },
    DateOfSendingReceipts: {
      type: Date,
        required: true,
       
    }

})


const BookkeepingInfoModel = mongoose.model('BookkeepingInfo', BookkeepingInfoSchema);
module.exports = { BookkeepingInfoModel }
