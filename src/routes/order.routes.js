const { Router } = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const OrderController = require("../apps/controllers/OrderController");

const ordersRouter = Router();

const orderController = OrderController;

ordersRouter.get("/", orderController.listOrders);

ordersRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  orderController.index
);

ordersRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      basket_id: Joi.number().integer().required(),
      restaurant_id: Joi.number().integer().required(),
      dish_id: Joi.number().integer().required(),
      dish_quantity: Joi.number().integer().required(),
      total: Joi.number().precision(2).required(),
    },
  }),
  orderController.create
);

ordersRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
    [Segments.BODY]: {
      basket_id: Joi.number().integer(),
      restaurant_id: Joi.number().integer(),
      dish_id: Joi.number().integer(),
      dish_quantity: Joi.number().integer(),
      total: Joi.number().precision(2),
    },
  }),
  orderController.update
);

ordersRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  orderController.delete
);

module.exports = ordersRouter;
