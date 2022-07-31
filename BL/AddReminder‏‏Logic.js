const AddReminderController = require("../DL/controllers/AddReminderController");

async function AddReminder(data) {
  const {
    nameReminder,
    everyDayReminder,
    timeReminder,
    dateReminder,
    toReminder,
    contentReminder
  } = data;

  if (
    !nameReminder ||
    !everyDayReminder ||
    !timeReminder ||
    !dateReminder ||
    !toReminder ||
    !contentReminder
  )
    throw { code: 400, message: "missing data" };

  const existReminder = await AddReminderController.readOne({ nameReminder });
  if (existReminder) throw { code: 405, message: "duplicated name" };

  const Reminder = await AddReminderController.create(data);
}

module.exports = { AddReminder };
