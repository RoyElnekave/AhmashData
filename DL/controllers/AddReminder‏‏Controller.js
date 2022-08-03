const { AddReminderModel } = require("../models/AddReminder‏‏");

async function create(data) {
  return await AddReminderModel.create(data);
}
async function read(filter, proj) {
  return await AddReminderModel.find(filter, proj);
}

async function readOne(filter, proj) {
  return await AddReminderModel.findOne(filter, proj);
}
async function update(filter, newData) {
  return await AddReminderModel.findOneAndUpdate(filter, newData, {
    new: true,
  });
}
async function del(filter) {
  return await update(filter, { isActive: false });
}

module.exports = { create, read, readOne, update, del };
