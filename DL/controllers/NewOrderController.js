const { NewOrderModel } = require("../models/NewOrder");

async function create(data) {
  return await NewOrderModel.create(data);
}
async function read(filter, proj) {
  return await NewOrderModel.find(filter, proj);
}

async function readOne(filter, proj) {
  return await NewOrderModel.findOne(filter, proj);
}
async function update(filter, newData) {
  return await NewOrderModel.findOneAndUpdate(filter, newData, {
    new: true
  });
}
async function del(filter) {
  return await update(filter, { isActive: false });
}

module.exports = { create, read, readOne, update, del };
