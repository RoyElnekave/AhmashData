const BookkeepingInfoController = require("../DL/controllers/ BookkeepingInfoController");

async function BookkeepingInfo(data) {
  const {
    bookkeepingName,
    bookkeepingNameEmail,
    bookkeepingNamePhone,
    DateOfSendingReceipts
  } = data;

  if (
    !bookkeepingName ||
    !bookkeepingNameEmail ||
    !bookkeepingNamePhone ||
    !DateOfSendingReceipts
  )
    throw { code: 400, message: "missing data" };

  const existReminder = await BookkeepingInfoController.readOne({
    nameReminder
  });
  if (existReminder) throw { code: 405, message: "duplicated name" };

  const Reminder = await BookkeepingInfoController.create(data);
}

module.exports = { BookkeepingInfo };
