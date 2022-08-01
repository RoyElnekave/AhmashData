const { NewSupplierModel } = require("../models/NewSupplier");

async function create(data) {
  return await NewSupplierModel.create(data);
}
async function read(filter, proj) {
  return await NewSupplierModel.find(filter, proj);
}

async function readOne(filter, proj) {
  return await NewSupplierModel.findOne(filter, proj);
}
async function update(filter, newData) {
  return await NewSupplierModel.findOneAndUpdate(filter, newData, {
    new: true
  });
}
async function del(filter) {
  return await update(filter, { isActive: false });
}

module.exports = { create, read, readOne, update, del };
