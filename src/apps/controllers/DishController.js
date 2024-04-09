const Dish = require("../models/Dish");

class DishController {
  async create(req, res) {
    const { name, description, price, image } = req.body;

    try {
      const newDish = await Dish.create({
        name,
        description,
        price,
        image,
      });

      return res.status(200).json({
        data: { name, description, price, image },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Dish not created!" });
    }
  }

  async index(req, res) {
    const { id } = req.params;

    try {
      const findDish = await Dish.findOne({
        where: {
          id,
        },
      });

      return res.status(200).json(findDish);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed find this Dish!" });
    }
  }

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
  async listDish(req, res) {
    try {
      const allDishes = await Dish.findAll();
      return res.status(200).json(allDishes);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error listing dishes!" });
    }
  }

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

module.exports = new DishController();
