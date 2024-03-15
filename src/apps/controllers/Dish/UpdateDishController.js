const Dishes = require("../../models/Dishes");

class UpdateDishController {
  async update(req, res) {
    const { name, description, price, image } = req.body;
    const { id } = req.params;

    const dish = await Dishes.findOne({
      where: {
        id: id,
      },
    });

    if (!dish) {
      return res.status(400).json({ message: "This dish do not exists!" });
    }

    await Dishes.update(
      {
        name: name || dish.name,
        description: description || dish.description,
        price: price || dish.price,
        image: image || dish.image,
      },
      {
        where: {
          id: dish.id,
        },
      }
    );

    return res.status(200).json({ message: "dish updated" });
  }
}

module.exports = new UpdateDishController();
