const { BookkeepingInfoModel } = require("../models/BookkeepingInfo");

async function create(data) {
  return await BookkeepingInfoModel.create(data);
}
async function read(filter, proj) {
  return await BookkeepingInfoModel.find(filter, proj);
}

async function readOne(filter, proj) {
  return await BookkeepingInfoModel.findOne(filter, proj);
}
async function update(filter, newData) {
  return await BookkeepingInfoModel.findOneAndUpdate(filter, newData, {
    new: true
  });
}
async function del(filter) {
  return await update(filter, { isActive: false });
}

module.exports = { create, read, readOne, update, del };
