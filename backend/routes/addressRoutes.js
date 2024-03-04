const express = require("express");
const router = express.Router();

const { fetchAllAddresses } = require("../controllers/addressController");

// call the fetchAllAddresses function
// when a GET request is made to http://localhost:8080/api/addresses/
router.route("/").get(fetchAllAddresses);

module.exports = router;
