const Dish = require("../../models/Dish");

class UpdateDishController {
  async update(req, res) {
    const { name, description, price, image } = req.body;
    const { id } = req.params;

    const dish = await Dish.findOne({
      where: {
        id: id,
      },
    });

    if (!dish) {
      return res.status(400).json({ message: "Dish do not exists!" });
    }

    try {
      await Dish.update(
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

      return res.status(200).json({ message: "Dish updated" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Dish not updated!" });
    }
  }
}

module.exports = new UpdateDishController();
