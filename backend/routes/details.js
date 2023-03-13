const express = require("express");
const router = express.Router();
const {
  getDetails,
  postDetails,
  postCredential,
} = require("../controllers/details.js");

router.get("/", getDetails);
router.post("/", postDetails);
router.post("/credential", postCredential);

module.exports = router;
