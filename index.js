require("dotenv").config();
const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(require("cors")());

const mainRouter = require("./Routes");
app.use("/api", mainRouter.AddReminderRouter);

app.listen(PORT, () => console.log(`server runing on port ${PORT}`));
require("./DL/db").connect();
