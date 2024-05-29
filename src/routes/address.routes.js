const { Router } = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const AddressController = require("../apps/controllers/AddressController");

const addressRouter = Router();

const addressController = AddressController;

addressRouter.get("/", addressController.listAddress);

addressRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  addressController.index
);

addressRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
    [Segments.BODY]: {
      address: Joi.string().max(80),
      house_number: Joi.number().integer(),
      zip_code: Joi.number().integer(),
      neighborhood: Joi.string().max(40),
      city: Joi.string().max(40),
      state: Joi.string().max(40),
      complement: Joi.string().max(100),
    },
  }),
  addressController.update
);

addressRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  addressController.delete
);

module.exports = addressRouter;
