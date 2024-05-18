const Basket = require("../models/Basket");
const ConcludeOrder = require("../models/ConcludeOrders");

class ConcludeOrderController {
  async create(req, res) {
    const { paid, status, basket_id } = req.body;

    const basket = await Basket.findByPk(basket_id);

    try {
      await ConcludeOrder.create({
        paid,
        status,
        basket_id,
      });

      return res.status(200).json({
        paid,
        status,
        basket_id,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "ConcludeOrder not created!" });
    }
  }

  async index(req, res) {
    const { id } = req.params;

    try {
      const findOrder = await ConcludeOrder.findOne({
        where: {
          id,
        },
      });

      return res.status(200).json(findOrder);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "failed find this ConcludeOrder!" });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    const verifyOrder = await ConcludeOrder.findOne({
      where: {
        id,
      },
    });

    if (!verifyOrder) {
      return res
        .status(404)
        .json({ message: "ConcludeOrder does not exists!" });
    }
    try {
      await ConcludeOrder.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({ message: "ConcludeOrder deleted!" });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "failed to delete this ConcludeOrder!" });
    }
  }
  async listOrders(req, res) {
    try {
      const allOrders = await ConcludeOrder.findAll();
      return res.status(200).json(allOrders);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error listing dishes!" });
    }
  }

  async update(req, res) {
    const { paid, status, basket_id } = req.body;
    const { id } = req.params;

    const concludeOrder = await ConcludeOrder.findOne({
      where: {
        id: id,
      },
    });

    if (!concludeOrder) {
      return res.status(400).json({ message: "Conclude Order do not exists!" });
    }

    const concluded = await ConcludeOrder.update(
      {
        paid: paid || concludeOrder.paid,
        status: status || concludeOrder.status,
        basket_id: basket_id || concludeOrder.basket_id,
      },
      {
        where: {
          id: concludeOrder.id,
        },
      }
    );

    if (!concluded) {
      return res.status(404).json({ message: "Error" });
    }

    return res
      .status(200)
      .json({ message: "ConcludeOrder updated", data: { concludeOrder } });
  }
}

module.exports = new ConcludeOrderController();
