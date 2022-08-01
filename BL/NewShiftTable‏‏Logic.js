const NewShiftTableController = require("../DL/controllers/NewShiftTableController");

async function NewShiftTable(data) {
  const {
    dateSubmissionShifts,
    ShiftClosingDate,
    shiftName,
    ShiftStartTime,
    shiftClosingTime,
    workersPerShift,
    ActiveDay
  } = data;

  if (
    !dateSubmissionShifts ||
    !ShiftClosingDate ||
    !shiftName ||
    !ShiftStartTime ||
    !shiftClosingTime ||
    !workersPerShift ||
    ActiveDay
  )
    throw { code: 400, message: "missing data" };

  const existNewShiftTable = await NewShiftTableController.readOne({
    shiftName
  });
  if (existNewShiftTable) throw { code: 405, message: "duplicated name" };

  const NewShiftTable = await NewShiftTableController.create(data);
}

module.exports = { NewShiftTable };
