const { BookkeepingInfoModel } = require("../models/BookkeepingInfo");

async function create(data) {
  return await AddReminderModel.create(data);
}
async function read(filter, proj) {
  return await AddReminderModel.find(filter, proj);
}

async function readOne(filter, proj) {
  return await AddReminderrModel.findOne(filter, proj);
}
async function update(filter, newData) {
  return await AddReminderrModel.findOneAndUpdate(filter, newData, {
    new: true
  });
}
async function del(filter) {
  return await update(filter, { isActive: false });
}

module.exports = { create, read, readOne, update, del };
