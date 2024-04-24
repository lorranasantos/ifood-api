const Basket = require("../models/Basket");

class BasketController {
  async create(req, res) {
    const { user_id, total } = req.body;

    try {
      await Basket.create({
        user_id,
        total,
      });

      return res.status(200).json({
        user_id,
        total,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Basket not created!" });
    }
  }

  async index(req, res) {
    const { id } = req.params;

    try {
      const findBasket = await Basket.findOne({
        where: {
          id,
        },
      });

      return res.status(200).json(findBasket);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed find this Basket!" });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    const verifyBasket = await Basket.findOne({
      where: {
        id,
      },
    });

    if (!verifyBasket) {
      return res.status(404).json({ message: "Basket does not exists!" });
    }
    try {
      await Basket.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({ message: "Basket deleted!" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed to delete this Basket!" });
    }
  }
  async listBasket(req, res) {
    try {
      const allBasket = await Basket.findAll();
      return res.status(200).json(allBasket);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error listing dishes!" });
    }
  }

  async update(req, res) {
    const { user_id, total } = req.body;
    const { id } = req.params;

    const basket = await Basket.findOne({
      where: {
        id: id,
      },
    });

    if (!basket) {
      return res.status(400).json({ message: "Basket do not exists!" });
    }

    try {
      await Basket.update(
        {
          user_id: user_id || basket.user_id,
          total: total || basket.total,
        },
        {
          where: {
            id: basket.id,
          },
        }
      );

      return res.status(200).json({ message: "Basket updated" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Basket not updated!" });
    }
  }
}

module.exports = new BasketController();
