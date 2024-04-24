const { Router } = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const UserController = require("../apps/controllers/UserController");

const usersRouter = Router();

const userController = UserController;

usersRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  userController.index
);

usersRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.required(),
      email: Joi.required(),
      active: Joi.required(),
      avatar: Joi.required(),
      phone: Joi.required(),
      idAddress: Joi.required(),
    },
  }),
  userController.create
);

usersRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().max(130),
      email: Joi.string().email().max(100),
      active: Joi.boolean(),
      avatar: Joi.string(),
      phone: Joi.number().integer().max(13),
      idAddress: Joi.number().integer(),
    },
  }),
  userController.update
);

usersRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  userController.delete
);

module.exports = usersRouter;
