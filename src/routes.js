const { Router } = require("express");

const AuthenticationController = require("./apps/controllers/AuthenticationController");
const AuthenticationMiddleware = require("./apps/middlewares/authentication");
const authSchema = require("./schema/auth.schema.json");

const CreateUserController = require("./apps/controllers/User/CreateUserController");
const DeleteUserController = require("./apps/controllers/User/DeleteUserController");
const GetUserController = require("./apps/controllers/User/GetUserController");
const UpdateUserController = require("./apps/controllers/User/UpdateUserController");

const CreateRestaurantController = require("./apps/controllers/Restaurant/CreateRestaurantController");
const DeleteRestaurantController = require("./apps/controllers/Restaurant/DeleteRestaurantController");
const ListRestaurantController = require("./apps/controllers/Restaurant/ListRestaurantController");
const UpdateRestaurantController = require("./apps/controllers/Restaurant/UpdateRestaurantController");

const schemaValidator = require("./apps/middlewares/schemaValidator");
const userSchema = require("./schema/create.user.schema.json");
const restaurantSchema = require("./schema/create.restaurant.schema.json");

const routes = new Router();

routes.post("/user", schemaValidator(userSchema), CreateUserController.create);

routes.post(
  "/auth",
  schemaValidator(authSchema),
  AuthenticationController.authenticate
);

routes.post(
  "/restaurant",
  schemaValidator(restaurantSchema),
  CreateRestaurantController.create
);
routes.delete("/restaurant/:id", DeleteRestaurantController.delete);
routes.get("/list-restaurant", ListRestaurantController.listRestaurants);
routes.put("/restaurant/:id", UpdateRestaurantController.update);

//As rotas abaixo dessa função são privadas
routes.use(AuthenticationMiddleware);

routes.put("/user", UpdateUserController.update);
routes.delete("/user", DeleteUserController.delete);
routes.get("/user-profile", GetUserController.userProfile);

routes.get("/teste", (req, res) => res.send({ message: "connected" }));

module.exports = routes;
