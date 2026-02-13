const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Server is connected to DB");
    })
    .catch((error) => {
      console.log("error conecting to Database");
    });
}
