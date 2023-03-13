const mongoose = require("mongoose");

function connectDB(baseurl) {
  mongoose.connect(baseurl).then((res) => {});
}
module.exports = connectDB;
