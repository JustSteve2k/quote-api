const mongoose = require("mongoose");
const colors = require("colors");
const password = require("./pass");

const connectDB = async () => {
  try {
    const URI = "mongodb+srv://admin:" + password + "@cluster0.aud2amv.mongodb.net/quotes?retryWrites=true&w=majority";
    const conn = await mongoose.connect(URI);

    console.log(`MongoDB Connected ${conn.connection.host}`.underline.blue);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
