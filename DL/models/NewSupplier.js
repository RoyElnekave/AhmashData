const mongoose = require("mongoose");
const NewSupplierSchema = new mongoose.Schema({
  supplierNumber: {
    type: String,
    required: true
  },
  suppliername: {
    type: String,
    required: true
  },
  supplierMail: {
    type: String,
    required: true
  },
  supplierPriceList: {
    type: String,
    required: true
  }
});

const NewSupplierModel = mongoose.model("NewSupplier", NewSupplierSchema);
module.exports = { NewSupplierModel };
