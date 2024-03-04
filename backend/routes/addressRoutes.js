const express = require("express");
const router = express.Router();

const {
  fetchAllAddresses,
  addAddress,
  updateAddress,
} = require("../controllers/addressController");

// call the fetchAllAddresses function
// when a GET request is made to http://localhost:8080/api/addresses/
router.route("/").get(fetchAllAddresses);

// call the addAddress function
// when a POST request is made to http://localhost:8080/api/addresses/
router.route("/").post(addAddress);

// call the updateAddress function
// when a PUT request is made to http://localhost:8080/api/addresses/:id
router.route("/:id").put(updateAddress);

module.exports = router;
