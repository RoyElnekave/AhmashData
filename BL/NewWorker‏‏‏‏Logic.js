const NewWorkerController = require("../DL/controllers/NewWorkerController");

async function NewWorker(data) {
  const {
    firstName,
    lastName,
    email,
    cellphoneNumber,
    HourlyPayment,
    DateOfBirth,
    responsibility,
    File101
  } = data;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !cellphoneNumber ||
    !HourlyPayment ||
    !DateOfBirth ||
    !responsibility ||
    !File101
  )
    throw { code: 400, message: "missing data" };

  const existNewWorker = await NewWorkerController.readOne({
    email
  });
  if (existNewWorker) throw { code: 405, message: "duplicated name" };

  const NewWorker = await NewWorkerController.create(data);
}

module.exports = { NewWorker };
