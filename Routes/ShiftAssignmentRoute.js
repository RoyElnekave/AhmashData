const express = require("express");
const router = express.Router();
const ShiftAssignmentLogic = require("../BL/ShiftAssignment");

router.post("/ShiftAssignment", async (req, res) => {
  try {
    const ShiftAssignment = await ShiftAssignmentLogic.ShiftAssignment(
      req.body
    );
    res.status(200).send({ ShiftAssignment });
  } catch (error) {
    console.log("ShiftAssignment", error);
    if (error.code && error.code < 1000) {
      res.status(error.code).send(error.message);
    } else {
      res.send("something went wrong");
    }
  }
});
