const express = require("express");
const router = express.Router();
const NewOrderLogic = require("../BL/NewOrder‏‏Logic");

router.post("/", async (req, res) => {
  try {
    const NewOrder = await NewOrderLogic.NewOrder(req.body);
    res.status(200).send({ NewOrder });
  } catch (error) {
    console.log("NewOrder", error);
    if (error.code && error.code < 1000) {
      res.status(error.code).send(error.message);
    } else {
      res.send("something went wrong");
    }
  }
});
module.exports = router;
