const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/camagru_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect to MongoDB OK!!");
  } catch (error) {
    console.log("Connect to MongoDB Fail!");
  }
}

module.exports = { connect };
