const Menu = require("../models/Menu");

class MenuController {
  async create(req, res) {
    const { restaurant_id, dish_id } = req.body;

    try {
      await Menu.create({
        restaurant_id,
        dish_id,
      });

      return res.status(200).json({
        restaurant_id,
        dish_id,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Menu not created!" });
    }
  }

  async index(req, res) {
    const { id } = req.params;

    try {
      const findMenu = await Menu.findOne({
        where: {
          id,
        },
      });

      return res.status(200).json(findMenu);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed find this Menu!" });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    const verifyMenu = await Menu.findOne({
      where: {
        id,
      },
    });

    if (!verifyMenu) {
      return res.status(404).json({ message: "Menu does not exists!" });
    }
    try {
      await Menu.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({ message: "Menu deleted!" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed to delete this Menu!" });
    }
  }
  async listMenu(req, res) {
    try {
      const allMenus = await Menu.findAll();
      return res.status(200).json(allMenus);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error listing dishes!" });
    }
  }

  async update(req, res) {
    const { restaurant_id, dish_id } = req.body;
    const { id } = req.params;

    const menu = await Menu.findOne({
      where: {
        id: id,
      },
    });

    if (!menu) {
      return res.status(400).json({ message: "Menu do not exists!" });
    }

    try {
      await Menu.update(
        {
          restaurant_id: restaurant_id || menu.restaurant_id,
          dish_id: dish_id || menu.dish_id,
        },
        {
          where: {
            id: menu.id,
          },
        }
      );

      return res.status(200).json({ message: "Menu updated" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Menu not updated!" });
    }
  }
}

module.exports = new MenuController();
