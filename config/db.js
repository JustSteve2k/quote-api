const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const URI = "mongodb+srv://admin:mongopassword@cluster0.aud2amv.mongodb.net/quotes";
    // "mongodb+srv://admin:mongopassword@cluster0.aud2amv.mongodb.net/?retryWrites=true&w=majority";
    // const conn = await mongoose.connect(process.env.MONGO_URI);
    const conn = await mongoose.connect(URI);

    console.log(`MongoDB Connected ${conn.connection.host}`.underline.blue);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
