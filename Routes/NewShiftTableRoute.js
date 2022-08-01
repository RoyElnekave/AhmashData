const express = require("express");
const router = express.Router();
const NewShiftTableLogic = require("../BL/NewShiftTable");

router.post("/NewShiftTable", async (req, res) => {
  try {
    const NewShiftTable = await NewShiftTableLogic.NewShiftTable(req.body);
    res.status(200).send({ NewShiftTable });
  } catch (error) {
    console.log("NewShiftTable", error);
    if (error.code && error.code < 1000) {
      res.status(error.code).send(error.message);
    } else {
      res.send("something went wrong");
    }
  }
});
