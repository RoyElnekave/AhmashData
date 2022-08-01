const { NewShiftTableModel } = require("../models/NewShiftTable");

async function create(data) {
  return await NewShiftTableModel.create(data);
}
async function read(filter, proj) {
  return await NewShiftTableModel.find(filter, proj);
}

async function readOne(filter, proj) {
  return await NewShiftTableModel.findOne(filter, proj);
}
async function update(filter, newData) {
  return await NewShiftTableModel.findOneAndUpdate(filter, newData, {
    new: true
  });
}
async function del(filter) {
  return await update(filter, { isActive: false });
}

module.exports = { create, read, readOne, update, del };
