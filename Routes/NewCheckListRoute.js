const express = require("express");
const router = express.Router();
const NewCheckListLogic = require("../BL/NewCheckList");

router.post("/NewCheckList", async (req, res) => {
  try {
    const NewCheckList = await NewCheckListLogic.NewCheckList(req.body);
    res.status(200).send({ NewCheckList });
  } catch (error) {
    console.log("NewCheckList", error);
    if (error.code && error.code < 1000) {
      res.status(error.code).send(error.message);
    } else {
      res.send("something went wrong");
    }
  }
});
