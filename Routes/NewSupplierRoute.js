const express = require("express");
const router = express.Router();
const NewSupplierLogic = require("../BL/NewSupplier");

router.post("/NewSupplier", async (req, res) => {
  try {
    const NewSupplier = await NewSupplierLogic.NewSupplier(req.body);
    res.status(200).send({ NewSupplier });
  } catch (error) {
    console.log("NewSupplier", error);
    if (error.code && error.code < 1000) {
      res.status(error.code).send(error.message);
    } else {
      res.send("something went wrong");
    }
  }
});
module.exports = router;
