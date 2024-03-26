const { Router } = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const DishController = require("../apps/controllers/DishController");

const dishesRouter = Router();

const dishController = DishController;

dishesRouter.get("/", dishController.listDish);

dishesRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  dishController.index
);

dishesRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().max(80).required(),
      description: Joi.string().max(250).required(),
      price: Joi.number().precision(2).required(),
      image: Joi.string().required(),
    },
  }),
  dishController.create
);

dishesRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().max(80),
      description: Joi.string().max(250),
      price: Joi.number().precision(2),
      image: Joi.string(),
    },
  }),
  dishController.update
);

dishesRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  dishController.delete
);

module.exports = dishesRouter;
