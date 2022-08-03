const express = require("express");
const router = express.Router();
const NewReceiptLogic = require("../BL/NewReceipt‏‏Logic");

router.post("/", async (req, res) => {
  try {
    const NewReceipt = await NewReceiptLogic.NewReceipt(req.body);
    res.status(200).send({ NewReceipt });
  } catch (error) {
    console.log("NewReceipt", error);
    if (error.code && error.code < 1000) {
      res.status(error.code).send(error.message);
    } else {
      res.send("something went wrong");
    }
  }
});
module.exports = router;
