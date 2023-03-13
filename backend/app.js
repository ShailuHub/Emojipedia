const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./database/connect.js");
const details = require("./routes/details.js");
const bodyParser = require("body-parser");
const cors = require("cors");

const baseURL = process.env.connectionURL;
const port = process.env.port;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/details", details);

const connect = async () => {
  try {
    await connectDB(baseURL);
    app.listen(8000, () => {
      console.log(`Server is working on the port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connect();
