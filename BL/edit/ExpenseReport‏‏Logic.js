const ExpenseReportController = require("../DL/controllers/ ExpenseReportInfoController");
//לקבל
async function BookkeepingInfo(data) {
  const { salaryAllWorkers, costOfAllReceipts, AllFixedExpenses } = data;

  if (
    !bookkeepingName ||
    !bookkeepingNameEmail ||
    !bookkeepingNamePhone ||
    !DateOfSendingReceipts
  )
    throw { code: 400, message: "missing data" };

  const existReminder = await ExpenseReportController.readOne({
    nameReminder
  });
  if (existReminder) throw { code: 405, message: "duplicated name" };

  const Reminder = await ExpenseReportController.create(data);
}

module.exports = { ExpenseReport };
