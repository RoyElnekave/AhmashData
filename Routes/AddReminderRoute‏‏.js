const express = require("express");
const router = express.Router();
const AddReminderLogic = require("../BL/AddReminder‏‏Logic");

router.post("/AddReminder", async (req, res) => {
  try {
    const AddReminder = await AddReminderLogic.AddReminder(req.body);
    res.status(200).send({ AddReminder });
  } catch (error) {
    console.log("AddReminder", error);
    if (error.code && error.code < 1000) {
      res.status(error.code).send(error.message);
    } else {
      res.send("something went wrong");
    }
  }
});

module.exports = router;
