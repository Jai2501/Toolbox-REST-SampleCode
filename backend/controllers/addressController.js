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

// @desc    Add an address
// @route   POST /api/addresses
// @access  Public
const addAddress = async (req, res) => {
  const { title, description } = req.body;

  // validate request body
  if (!title || !description) {
    return res.status(400).json({ message: "Please enter all fields." });
  }

  try {
    // function provided by Mongoose to create a new Address document
    const address = await Address.create({
      title,
      description,
    });

    // return the newly created Address in JSON format
    // with created success status 201
    res.status(201).json({
      _id: address._id,
      title: address.title,
      description: address.description,
    });
  } catch (error) {
    // catch exception when fields are missing
    res.status(400).json({ message: "Invalid address data." });
  }
};

// export controller functions to be used in corresponding route
module.exports = { fetchAllAddresses, addAddress };
