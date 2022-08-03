const mongoose = require("mongoose");
const NewOrderSchema = new mongoose.Schema({
  supplierName: {
    type: String,
    required: true,
  },
  orderName: {
    type: String,
    required: true,
  },
  orderEveryDay: {
    type: String,
    required: true,
  },
  orderFromDate: {
    type: String,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  stockQuantityBy: {
    type: String,
    required: true,
  },
  InventoryRequiredToOrder: {
    type: String,
    required: true,
  },
});

const NewOrderModel = mongoose.model("NewOrder", NewOrderSchema);
module.exports = { NewOrderModel };
