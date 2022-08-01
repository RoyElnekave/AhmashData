const { ShiftAssignmentModel } = require("../models/ShiftAssignment");

async function create(data) {
  return await ShiftAssignmentModel.create(data);
}
async function read(filter, proj) {
  return await ShiftAssignmentModel.find(filter, proj);
}

async function readOne(filter, proj) {
  return await ShiftAssignmentModel.findOne(filter, proj);
}
async function update(filter, newData) {
  return await ShiftAssignmentModel.findOneAndUpdate(filter, newData, {
    new: true
  });
}
async function del(filter) {
  return await update(filter, { isActive: false });
}

module.exports = { create, read, readOne, update, del };
