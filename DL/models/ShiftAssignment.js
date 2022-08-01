const mongoose = require('mongoose');
const ShiftAssignmentSchema = new mongoose.Schema({
  shiftName: {
        type: String,
        required: true
    },
    ShiftStartTime: {
        type: String
        required: true
    },
    shiftClosingTime: {
        type: String,
        required: true
    },
    ShiftWorkers: {
      type: String,
        required: true
       
    }

})


const ShiftAssignmentModel = mongoose.model('ShiftAssignment', ShiftAssignmentSchema);
module.exports = { ShiftAssignmentModel }
