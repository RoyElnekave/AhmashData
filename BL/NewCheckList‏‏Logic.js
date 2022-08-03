const NewCheckListController = require("../DL/controllers/NewCheckListController");

async function NewCheckList(data) {
  const {
    checklistName,
    everyDaychecklist,
    timechecklist,
    fromDatechecklist,
    tochecklist,
    task,
    picture
  } = data;

  if (
    !checklistName ||
    !everyDaychecklist ||
    !timechecklist ||
    !fromDatechecklist ||
    !tochecklist ||
    !task ||
    !picture
  )
    throw { code: 400, message: "missing data" };

  const existNewCheckList = await NewCheckListController.readOne({
    checklistName
  });
  if (existNewCheckList) throw { code: 405, message: "duplicated name" };

  const NewCheckList = await NewCheckListController.create(data);
}

module.exports = { NewCheckList };
