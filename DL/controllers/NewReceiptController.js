const { NewReceiptModel } = require("../models/NewReceipt");

async function create(data) {
  return await NewReceiptModel.create(data);
}
async function read(filter, proj) {
  return await NewReceipt.find(filter, proj);
}

async function readOne(filter, proj) {
  return await NewReceiptModel.findOne(filter, proj);
}
async function update(filter, newData) {
  return await NewReceiptModel.findOneAndUpdate(filter, newData, {
    new: true
  });
}
async function del(filter) {
  return await update(filter, { isActive: false });
}

module.exports = { create, read, readOne, update, del };
