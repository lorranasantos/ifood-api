const { Router } = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const MenuController = require("../apps/controllers/MenuController");

const menuRouter = Router();

const menuController = MenuController;

menuRouter.get("/", menuController.listMenu);

menuRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  menuController.index
);

menuRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      restaurant_id: Joi.number().integer().required(),
      dish_id: Joi.number().integer().required(),
    },
  }),
  menuController.create
);

menuRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
    [Segments.BODY]: {
      restaurant_id: Joi.number().integer(),
      dish_id: Joi.number().integer(),
    },
  }),
  menuController.update
);

menuRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  menuController.delete
);

module.exports = menuRouter;
