const { Router } = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const BasketController = require("../apps/controllers/BasketController");

const basketRouter = Router();

const basketController = BasketController;

basketRouter.get("/", basketController.listBasket);

basketRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  basketController.index
);

basketRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.number().integer().required(),
      total: Joi.number().precision(2).required(),
    },
  }),
  basketController.create
);

basketRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
    [Segments.BODY]: {
      user_id: Joi.number().integer(),
      total: Joi.number().precision(2),
    },
  }),
  basketController.update
);

basketRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  basketController.delete
);

module.exports = basketRouter;
