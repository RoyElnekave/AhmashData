const AddReminderController = require("../DL/controllers/AddReminder‏‏Controller");

async function AddReminder(data) {
  const {
    ReminderName,
    everyDayReminder,
    timeReminder,
    dateReminder,
    toReminder,
    contentReminder,
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

  const existAddReminder = await AddReminderController.readOne({
    nameReminder,
  });
  if (existAddReminder) throw { code: 405, message: "duplicated name" };

  const AddReminder = await AddReminderController.create(data);
}

module.exports = { AddReminder };
