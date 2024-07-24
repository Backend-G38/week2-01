const catchError = require('../utils/catchError');
const Car = require('../models/Car');

const getAll = catchError(async (req, res) => {
  const result = await Car.findAll() //-> select * from cars;
  return res.json(result)
});

const create = catchError(async (req, res) => {
  const { brand } = req.body
  console.log(brand);
  const result = await Car.create(req.body)
  return res.status(201).json(result)
})

module.exports = {
  getAll,
  create
}