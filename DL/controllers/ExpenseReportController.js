const { ExpenseReportModel } = require("../models/ExpenseReport");

async function create(data) {
  return await ExpenseReportModel.create(data);
}
async function read(filter, proj) {
  return await ExpenseReportModel.find(filter, proj);
}

async function readOne(filter, proj) {
  return await ExpenseReportModel.findOne(filter, proj);
}
async function update(filter, newData) {
  return await ExpenseReportModel.findOneAndUpdate(filter, newData, {
    new: true
  });
}
async function del(filter) {
  return await update(filter, { isActive: false });
}

module.exports = { create, read, readOne, update, del };
