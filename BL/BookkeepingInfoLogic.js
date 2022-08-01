const BookkeepingInfoController = require("../DL/controllers/BookkeepingInfoController");

async function BookkeepingInfo(data) {
  const {
    bookkeepingName,
    bookkeepingNameEmail,
    bookkeepingNamePhone,
    DateOfSendingReceipts,
  } = data;

  if (
    !bookkeepingName ||
    !bookkeepingNameEmail ||
    !bookkeepingNamePhone ||
    !DateOfSendingReceipts
  )
    throw { code: 400, message: "missing data" };

  const existBookkeepingInfo = await BookkeepingInfoController.readOne({
    bookkeepingName,
  });
  if (existBookkeepingInfo) throw { code: 405, message: "duplicated name" };

  const BookkeepingInfo = await BookkeepingInfoController.create(data);
}

module.exports = { BookkeepingInfo };
