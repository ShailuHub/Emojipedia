const Details = require("../Models/details.js");

const getDetails = async (req, res) => {
  try {
    const allDetails = await Details.find({});
    res.status(201).json(allDetails);
  } catch (error) {
    res.status(500).json(error);
  }
};

const postDetails = async (req, res) => {
  const { emoji, name, meaning } = req.body;
  try {
    const detail = await Details.create({
      emoji,
      name,
      meaning,
    });
    res.status(201).json(detail);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const postCredential = async (req, res) => {
  const { user, password } = req.body;
  try {
    const userName = process.env.USER;
    const userPassword = process.env.PASSWORD;
    if (user === userName && password === userPassword) {
      res.send(200);
    } else {
      res.status(201).json({ message: "Invalid username or id" });
    }
  } catch (error) {
    res.status(101).json(error);
  }
};

module.exports = { getDetails, postDetails, postCredential };
