const mongoose = require("mongoose");
const NewReceiptSchema = new mongoose.Schema({
  supplierName: {
    type: String,
    required: true,
  },
  stockQuantityBy: {
    type: String,
    required: true,
  },
  ReceiptPrice: {
    type: String,
    required: true,
  },
  ReceiptFromDate: {
    type: String,
    required: true,
  },
  Receipt: {
    type: String,
    required: true,
  },
});

const NewReceiptModel = mongoose.model("NewReceipt", NewReceiptSchema);
module.exports = { NewReceiptModel };
