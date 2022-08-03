const express = require("express");
const router = express.Router();

const AddReminderRouter = require("./AddReminderRoute‏‏");
const BookkeepingInfoRouter = require("./BookkeepingInfoRoute");
const NewCheckListRouter = require("./NewCheckListRoute");
const NewOrderRouter = require("./NewOrderRoute");
const NewReceiptRouter = require("./NewReceiptRoute");
const NewShiftTableRouter = require("./NewShiftTableRoute");
const NewSupplierRouter = require("./NewSupplierRoute");
const NewWorkerRouter = require("./NewWorkerRoute");
const ShiftAssignmentRouter = require("./ShiftAssignmentRoute");

router.use("/AddReminder", AddReminderRouter);
router.use("/BookkeepingInfo", BookkeepingInfoRouter);
router.use("/NewCheckList", NewCheckListRouter);
router.use("/NewOrder", NewOrderRouter);
router.use("/NewReceipt", NewReceiptRouter);
router.use("/NewShiftTable", NewShiftTableRouter);
router.use("/NewSupplier", NewSupplierRouter);
router.use("/NewWorker", NewWorkerRouter);
router.use("/ShiftAssignment", ShiftAssignmentRouter);

module.exports =router;
