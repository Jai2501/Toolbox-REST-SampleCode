// import Address model
const Address = require("../models/addressModel");

// @desc    Fetch all addresses
// @route   GET /api/addresses
// @access  Public
const fetchAllAddresses = async (req, res) => {
  // function provided by Mongoose to fetch all Address documents
  const addresses = await Address.find({});

  // return all addresses in JSON format
  // with success status 200
  res.status(200).json(addresses);
};

// export controller functions to be used in corresponding route
module.exports = { fetchAllAddresses };
