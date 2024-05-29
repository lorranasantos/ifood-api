const { Router } = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const RestaurantController = require("../apps/controllers/RestaurantController");

const restaurantRouter = Router();

const restaurantController = RestaurantController;

restaurantRouter.get("/", restaurantController.listRestaurant);

restaurantRouter.get("/search", restaurantController.search);

restaurantRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  restaurantController.index
);

// restaurantRouter.post(
//   "/",
//   celebrate({
//     [Segments.BODY]: {
//       name: Joi.string().max(80),
//       image: Joi.string(),
//       description: Joi.string().max(250),
//       category_id: Joi.number().integer(),
//       address_id: Joi.number().integer(),
//     },
//   }),
//   restaurantController.create
// );

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
