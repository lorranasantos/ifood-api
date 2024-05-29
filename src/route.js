const { Router } = require("express");

const { sendOTP, verifyOTP } = require("./apps/controllers/twilio-sms");
const { upload } = require("./configs/multer");

const usersRouter = require("./routes/user.routes");
const dishesRouter = require("./routes/dish.routes");
const restaurantRouter = require("./routes/restaurant.routes");
const addressRouter = require("./routes/address.routes");
const categoriesRouter = require("./routes/category.routes");
const menuRouter = require("./routes/menu.routes");
const FileController = require("./apps/controllers/FileController");
const basketRouter = require("./routes/basket.routes");
const ordersRouter = require("./routes/order.routes");
const concludeOrdersRouter = require("./routes/concludeOrder.routes");
const RestaurantController = require("./apps/controllers/RestaurantController");
const { route } = require("./routes/user.routes");
const AddressController = require("./apps/controllers/AddressController");

const routes = new Router();

routes.use("/user", usersRouter);
routes.use("/dish", dishesRouter);
routes.use("/restaurant", restaurantRouter);
routes.use("/address", addressRouter);
routes.use("/category", categoriesRouter);
routes.use("/menu", menuRouter);
routes.use("/basket", basketRouter);
routes.use("/order", ordersRouter);
routes.use("/concludeOrder", concludeOrdersRouter);

routes.put("/restaurant/:id", RestaurantController.update);
routes.post("/restaurant", RestaurantController.create);
routes.get(
  "/restaurant-report",
  RestaurantController.reportRestaurantsByCategory
);

routes.post("/address", AddressController.create);

//routes.get("/restaurant/search", RestaurantController.search);

//multer
routes.post("/upload", upload.single("image"), FileController.upload);

//OTP
routes.route("/send-otp").post(sendOTP);
routes.route("/verify-otp").post(verifyOTP);

routes.get("/teste", (req, res) => res.send({ message: "connected" }));

module.exports = routes;
