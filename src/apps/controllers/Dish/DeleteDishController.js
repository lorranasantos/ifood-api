const Dishes = require("../../models/Dishes");

class DeleteDishController {
  async delete(req, res) {
    const { id } = req.params;

    const verifyDish = await Dishes.findOne({
      where: {
        id,
      },
    });

    if (!verifyDish) {
      return res.status(404).json({ message: "This dish does not exist!" });
    }

    const deleteDish = await Dishes.destroy({
      where: {
        id,
      },
    });

    if (!deleteDish) {
      return res.status(400).json({ message: "failed to delete this dish!" });
    }

    return res.status(200).json({ message: "Dish deleted!" });
  }
}

module.exports = new DeleteDishController();
