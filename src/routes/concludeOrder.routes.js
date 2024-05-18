const { Router } = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const ConcludeOrderController = require("../apps/controllers/ConcludeOrderController");

const concludeOrdersRouter = Router();

const concludeOrderController = ConcludeOrderController;

concludeOrdersRouter.get("/", concludeOrderController.listOrders);

concludeOrdersRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  concludeOrderController.index
);

concludeOrdersRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      paid: Joi.boolean().required(),
      status: Joi.boolean().required(),
      basket_id: Joi.number().integer().required(),
    },
  }),
  concludeOrderController.create
);

concludeOrdersRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
    [Segments.BODY]: {
      paid: Joi.boolean(),
      status: Joi.boolean(),
      basket_id: Joi.number().integer(),
    },
  }),
  concludeOrderController.update
);

concludeOrdersRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  concludeOrderController.delete
);

module.exports = concludeOrdersRouter;
