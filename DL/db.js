// מטרת קובץ זה :
// התחברות לשרת MONGO מרוחק - atlas / או לשרת מקומי

const mongoose = require("mongoose");
MONGO_URL =
  "mongodb+srv://RoeeElnekave:0546673186@cluster0.ls8szfc.mongodb.net/Store?retryWrites=true&w=majority";
// const MONGO_URL = process.env.MONGO_URL;
console.log(MONGO_URL);
const connect = async () => {
  console.log("ggggg");
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true }, err => {
      if (err) {
        throw err;
      }

      console.log("Connection Success, State:", mongoose.connection.readyState);
    });
  } catch (e) {
    console.log("error mongoose: ", e);
  }
};

module.exports = { connect };
