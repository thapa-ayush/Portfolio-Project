// This is my personal cluster
let URI = "mongodb+srv://itsayushthapa:%3Cpassword%3E@cluster0.1seoka8.mongodb.net/";

// Database setup
let mongoose = require("mongoose");

module.exports = function () {
  // Connect to the database
  mongoose.connect(URI);

  let mongoDB = mongoose.connection;
  mongoDB.on("error", console.error.bind(console, "Connection Error:"));
  mongoDB.once("open", () => {
    console.log("Connected to MongoDB ...");
  });

  return mongoDB;
};
