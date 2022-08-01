const mongoose = require('mongoose');
const AddReminderSchema = new mongoose.Schema({
  firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cellphoneNumber: {
      type: String,
        required: true
    },
    HourlyPayment: {
      type: String,
      required: true
    },
    DateOfBirth: {
      type: Date
      required: true
    }
    responsibility: {
      type: String
      required: true
    }
    File101: {
      type: String
      required: true
    }

})

const NewWorkerModel = mongoose.model('NewWorker', NewWorkerSchema);
module.exports = { NewWorkerModel }
