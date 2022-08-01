const mongoose = require("mongoose");
const NewCheckListSchema = new mongoose.Schema({
  checklistName: {
    type: String,
    required: true,
  },
  everyDaychecklist: {
    type: String,
    required: true,
  },
  timechecklist: {
    type: String,
    required: true,
  },
  fromDatechecklist: {
    type: Date,
    required: true,
  },
  tochecklist: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
});

const NewCheckListModel = mongoose.model("NewCheckList", NewCheckListSchema);
module.exports = { NewCheckListModel };
