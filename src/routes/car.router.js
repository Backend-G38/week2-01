const { getAll, create, getOne, destroy, updated } = require('../controllers/car.controlles');
const express = require('express');


const carRouter = express.Router();

carRouter.route("/") //! RUTAS ESTATICAS
  .get(getAll)
  .post(create)

carRouter.route("/:id") //! RUTAS DINAMICAS
  .get(getOne)
  .delete(destroy)
  .put(updated)

module.exports = carRouter;