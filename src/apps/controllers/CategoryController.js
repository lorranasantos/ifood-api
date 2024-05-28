const Category = require("../models/Category");

class CategoryController {
  async index(req, res) {
    const { id } = req.params;

    try {
      const findCategory = await Category.findOne({
        attributes: ["id", "category"],
      });

      return res.status(200).json(findCategory);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed find this Category!" });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    const verifyCategory = await Category.findOne({
      where: {
        id,
      },
    });

    if (!verifyCategory) {
      return res.status(404).json({ message: "Category does not exists!" });
    }
    try {
      await Category.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({ message: "Category deleted!" });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "failed to delete this Category!" });
    }
  }

  async listCategories(req, res) {
    try {
      const categories = await Category.findAll();
      return res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error listing categories!" });
    }
  }
}

module.exports = new CategoryController();
