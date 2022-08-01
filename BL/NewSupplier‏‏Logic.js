const NewSupplierController = require("../DL/controllers/NewSupplierController");

async function NewSupplier(data) {
  const {
    suppliername,
    supplierNumber,
    supplierMail,
    supplierPriceList
  } = data;

  if (!suppliername || !supplierNumber || !supplierMail || !supplierPriceList)
    throw { code: 400, message: "missing data" };

  const existNewSupplier = await NewSupplierController.readOne({
    suppliername
  });
  if (existNewSupplier) throw { code: 405, message: "duplicated name" };

  const NewSupplier = await NewSupplierController.create(data);
}

module.exports = { NewSupplier };
