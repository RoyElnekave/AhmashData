const mongoose = require('mongoose');
const NewShiftTableSchema = new mongoose.Schema({
  workersPerShift: {
        type: String,
        required: true
    },
    shiftClosingTime: {
        type: String,
        required: true
    },
    ShiftStartTime: {
        type: String,
        required: true
    },
    dateSubmissionShifts: {
      type: Date,
        required: true
    },
    ShiftClosingDate: {
      type: String,
      required: true
    },
    shiftName: {
      type: String,
      required: true
    }
    ActiveDay: {
      type: String,
      required: true
    }
})

const NewShiftTableModel = mongoose.model('NewShiftTable', NewShiftTableSchema);
module.exports = { NewShiftTableModel }
