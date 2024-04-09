const { Router } = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const CategoryController = require("../apps/controllers/CategoryController");

const categoriesRouter = Router();

const categoryController = CategoryController;

categoriesRouter.get("/", categoryController.listCategories);

categoriesRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  categoryController.index
);

module.exports = categoriesRouter;
