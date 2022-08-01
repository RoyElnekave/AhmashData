const ShiftAssignmentController = require("../DL/controllers/ShiftAssignmentController");

async function ShiftAssignment(data) {
  const { shiftName, ShiftStartTime, shiftClosingTime, ShiftWorkers } = data;

  if (!shiftName || !ShiftStartTime || !shiftClosingTime || !ShiftWorkers)
    throw { code: 400, message: "missing data" };

  const existShiftAssignment = await ShiftAssignmentController.readOne({
    shiftName
  });
  if (existShiftAssignment) throw { code: 405, message: "duplicated name" };

  const ShiftAssignment = await ShiftAssignmentController.create(data);
}

module.exports = { ShiftAssignment };
