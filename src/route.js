const { Router } = require("express");

const { sendOTP, verifyOTP } = require("./apps/controllers/twilio-sms");

const usersRouter = require("./routes/user.routes");
const dishesRouter = require("./routes/dish.routes");
const restaurantRouter = require("./routes/restaurant.routes");
const addressRouter = require("./routes/address.routes");

const routes = new Router();

routes.use("/user", usersRouter);
routes.use("/dish", dishesRouter);
routes.use("/restaurant", restaurantRouter);
routes.use("/address", addressRouter);

//OTP
routes.route("/send-otp").post(sendOTP);
routes.route("/verify-otp").post(verifyOTP);

routes.get("/teste", (req, res) => res.send({ message: "connected" }));

module.exports = routes;