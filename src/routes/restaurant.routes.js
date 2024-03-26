const { Router } = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const RestaurantController = require("../apps/controllers/RestaurantController");

const restaurantRouter = Router();

const restaurantController = RestaurantController;

restaurantRouter.get("/", restaurantController.listRestaurant);

restaurantRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  restaurantController.index
);

restaurantRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().max(80).required(),
      image: Joi.string().required(),
      category: Joi.string().required(),
      description: Joi.string().max(250).required(),
      address_id: Joi.number().integer().required(),
      dish_id: Joi.number().integer().required(),
    },
  }),
  restaurantController.create
);

restaurantRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().max(80),
      image: Joi.string(),
      category: Joi.string(),
      description: Joi.string().max(250),
      address_id: Joi.number().integer(),
      dish_id: Joi.number().integer(),
    },
  }),
  restaurantController.update
);

restaurantRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  restaurantController.delete
);

module.exports = restaurantRouter;
