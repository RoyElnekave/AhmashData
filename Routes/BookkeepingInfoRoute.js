const express = require("express");
const router = express.Router();
const BookkeepingInfoLogic = require("../BL/BookkeepingInfoLogic");

router.post("/BookkeepingInfo", async (req, res) => {
  try {
    const BookkeepingInfo = await BookkeepingInfoLogic.BookkeepingInfo(
      req.body
    );
    res.status(200).send({ BookkeepingInfo });
  } catch (error) {
    console.log("BookkeepingInfo", error);
    if (error.code && error.code < 1000) {
      res.status(error.code).send(error.message);
    } else {
      res.send("something went wrong");
    }
  }
});

module.exports = router;
