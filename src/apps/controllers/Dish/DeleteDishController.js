const Dish = require("../../models/Dish");

class DeleteDishController {
  async delete(req, res) {
    const { id } = req.params;
    const verifyDish = await Dish.findOne({
      where: {
        id,
      },
    });

    if (!verifyDish) {
      return res.status(404).json({ message: "Dish does not exists!" });
    }
    try {
      await Dish.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({ message: "Dish deleted!" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed to delete this Dish!" });
    }
  }
}

module.exports = new DeleteDishController();
