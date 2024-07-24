const { getAll, create } = require('../controllers/car.controlles');
const express = require('express');


const carRouter = express.Router();

carRouter.route("/")
  .get(getAll)
  .post(create)

module.exports = carRouter;