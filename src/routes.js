const { Router } = require("express");

const CreateUserController = require("./apps/controllers/User/CreateUserController");
const DeleteUserController = require("./apps/controllers/User/DeleteUserController");
const UpdateUserController = require("./apps/controllers/User/UpdateUserController");

const { sendOTP, verifyOTP } = require("./apps/controllers/twilio-sms");
const GetUserController = require("./apps/controllers/User/GetUserController");
const CreateDishController = require("./apps/controllers/Dish/CreateDishController");
const DeleteDishController = require("./apps/controllers/Dish/DeleteDishController");
const GetDishController = require("./apps/controllers/Dish/GetDishController");
const UpdateDishController = require("./apps/controllers/Dish/UpdateDishController");
const ListDishController = require("./apps/controllers/Dish/ListDishController");
const CreateRestaurantController = require("./apps/controllers/Restaurant/CreateRestaurantController");
const DeleteRestaurantController = require("./apps/controllers/Restaurant/DeleteRestaurantController");
const UpdateRestaurantController = require("./apps/controllers/Restaurant/UpdateRestaurantController");
const ListRestaurantController = require("./apps/controllers/Restaurant/ListRestaurantController");
const GetRestaurantController = require("./apps/controllers/Restaurant/GetRestaurantController");

const routes = new Router();

//User
routes.post("/user", CreateUserController.create);
routes.delete("/user/:id", DeleteUserController.delete);
routes.put("/user/:id", UpdateUserController.update);
routes.get("/user/:id", GetUserController.index);

//Dish
routes.post("/dish", CreateDishController.create);
routes.delete("/dish/:id", DeleteDishController.delete);
routes.get("/dish/:id", GetDishController.index);
routes.put("/dish/:id", UpdateDishController.update);
routes.get("/list-dish", ListDishController.listDish);

//Restaurant
routes.post("/restaurant", CreateRestaurantController.create);
routes.delete("/restaurant/:id", DeleteRestaurantController.delete);
routes.put("/restaurant/:id", UpdateRestaurantController.update);
routes.get("/list-restaurant", ListRestaurantController.listRestaurant);
routes.get("/restaurant/:id", GetRestaurantController.index);

//OTP
routes.route("/send-otp").post(sendOTP);
routes.route("/verify-otp").post(verifyOTP);

routes.get("/teste", (req, res) => res.send({ message: "connected" }));

module.exports = routes;
