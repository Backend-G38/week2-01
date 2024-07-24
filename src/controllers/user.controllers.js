const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async (req, res) => {
  const result = await User.findAll() // select * from users;
  return res.json(result)
});

const create = catchError(async (req, res) => {
  const result = await User.create(req.body)
  return res.status(201).json(result)
})

module.exports = {
  getAll,
  create
}