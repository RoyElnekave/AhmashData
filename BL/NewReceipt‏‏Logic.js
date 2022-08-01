const NewReceiptController = require("../DL/controllers/NewReceiptController");

async function NewReceipt(data) {
  const {
    supplierName,
    ReceiptFromDate,
    ReceiptPrice,
    stockQuantityBy,
    Receipt
  } = data;

  if (
    !supplierName ||
    !ReceiptFromDate ||
    !ReceiptPrice ||
    !stockQuantityBy ||
    !Receipt
  )
    throw { code: 400, message: "missing data" };

  const existNewReceipt = await NewReceiptController.readOne({
    ReceiptFromDate
  });
  if (existNewReceipt) throw { code: 405, message: "duplicated name" };

  const NewReceipt = await NewReceiptController.create(data);
}

module.exports = { NewReceipt };
