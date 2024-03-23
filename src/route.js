const { Router } = require("express");

const { sendOTP, verifyOTP } = require("./apps/controllers/twilio-sms");

const usersRouter = require("./routes/userRoutes");
const dishesRouter = require("./routes/dishRoute");
const restaurantRouter = require("./routes/restaurantRoute");

const routes = new Router();

routes.use("/user", usersRouter);
routes.use("/dish", dishesRouter);
routes.use("/restaurant", restaurantRouter);

//OTP
routes.route("/send-otp").post(sendOTP);
routes.route("/verify-otp").post(verifyOTP);

routes.get("/teste", (req, res) => res.send({ message: "connected" }));

module.exports = routes;
