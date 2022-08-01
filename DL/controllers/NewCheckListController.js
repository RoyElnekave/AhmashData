const { NewCheckListModel } = require("../models/NewCheckList");

async function create(data) {
  return await NewCheckListModel.create(data);
}
async function read(filter, proj) {
  return await NewCheckListModel.find(filter, proj);
}

async function readOne(filter, proj) {
  return await NewCheckListModel.findOne(filter, proj);
}
async function update(filter, newData) {
  return await NewCheckListModel.findOneAndUpdate(filter, newData, {
    new: true
  });
}
async function del(filter) {
  return await update(filter, { isActive: false });
}

module.exports = { create, read, readOne, update, del };
