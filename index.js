require("dotenv").config();
const mainRouter = require("./Routes");
const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(require("cors")());

app.use("/api", mainRouter);

app.listen(PORT, () => console.log(`server runing on port ${PORT}`));
require("./DL/db").connect();
