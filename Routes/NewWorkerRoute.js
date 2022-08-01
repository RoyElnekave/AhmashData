const express = require("express");
const router = express.Router();
const NewWorkerLogic = require("../BL/NewWorker");

router.post("/NewWorker", async (req, res) => {
  try {
    const NewWorker = await NewWorkerLogic.NewWorker(req.body);
    res.status(200).send({ NewWorker });
  } catch (error) {
    console.log("NewWorker", error);
    if (error.code && error.code < 1000) {
      res.status(error.code).send(error.message);
    } else {
      res.send("something went wrong");
    }
  }
});
module.exports = router;
