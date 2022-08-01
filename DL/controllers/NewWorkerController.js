const { NewWorkerModel } = require("../models/NewWorker");

async function create(data) {
  return await NewWorkerModel.create(data);
}
async function read(filter, proj) {
  return await NewWorkerModel.find(filter, proj);
}

async function readOne(filter, proj) {
  return await NewWorkerModel.findOne(filter, proj);
}
async function update(filter, newData) {
  return await NewWorkerModel.findOneAndUpdate(filter, newData, {
    new: true
  });
}
async function del(filter) {
  return await update(filter, { isActive: false });
}

module.exports = { create, read, readOne, update, del };
