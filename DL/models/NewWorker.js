const mongoose = require("mongoose");
const NewWorkerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cellphoneNumber: {
    type: String,
    required: true,
  },
  HourlyPayment: {
    type: String,
    required: true,
  },
  DateOfBirth: {
    type: String,
    required: true,
  },
  responsibility: {
    type: String,
    required: true,
  },
  File101: {
    type: String,
    required: true,
  },
});

const NewWorkerModel = mongoose.model("NewWorker", NewWorkerSchema);
module.exports = { NewWorkerModel };
