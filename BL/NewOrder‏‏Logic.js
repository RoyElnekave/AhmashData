const NewOrderController = require("../DL/controllers/NewOrderController");

async function NewOrder(data) {
  const {
    supplierName,
    orderName,
    orderFromDate,
    orderEveryDay,
    itemName,
    stockQuantityBy,
    InventoryRequiredToOrder
  } = data;

  if (
    !supplierName ||
    !orderName ||
    !orderFromDate ||
    !orderEveryDay ||
    !itemName ||
    !stockQuantityBy ||
    !InventoryRequiredToOrder
  )
    throw { code: 400, message: "missing data" };

  const existNewOrder = await NewOrderController.readOne({
    orderName
  });
  if (existNewOrder) throw { code: 405, message: "duplicated name" };

  const NewOrder = await NewOrderController.create(data);
}

module.exports = { NewOrder };
