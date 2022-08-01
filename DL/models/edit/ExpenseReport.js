const mongoose = require('mongoose');
const AddReminderSchema = new mongoose.Schema({
  nameReminder: {
        type: String,
        required: true
    },
    everyDayReminder,: {
        type: String
        required: true,
    },
    timeReminder: {
        type: String,
        required: true,
    },
    dateReminder: {
      type: Date,
        required: true,
       
    },
    toReminder: {
      type: String,
      required: true,
    },
    contentReminder: {
      type: String
    }

})


const AddReminderModel = mongoose.model('AddReminder', AddReminderSchema);
module.exports = { AddReminderModel }
