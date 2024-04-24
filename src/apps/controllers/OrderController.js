const Order = require("../models/Order");

class OrderController {
  async create(req, res) {
    const { basket_id, restaurant_id, dish_id, dish_quantity, total } =
      req.body;

    try {
      await Order.create({
        basket_id,
        restaurant_id,
        dish_id,
        dish_quantity,
        total,
      });

      return res.status(200).json({
        basket_id,
        restaurant_id,
        dish_id,
        dish_quantity,
        total,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Order not created!" });
    }
  }

  async index(req, res) {
    const { id } = req.params;

    try {
      const findOrder = await Order.findOne({
        where: {
          id,
        },
      });

      return res.status(200).json(findOrder);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed find this Order!" });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    const verifyOrder = await Order.findOne({
      where: {
        id,
      },
    });

    if (!verifyOrder) {
      return res.status(404).json({ message: "Order does not exists!" });
    }
    try {
      await Order.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({ message: "Order deleted!" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed to delete this Order!" });
    }
  }
  async listOrders(req, res) {
    try {
      const allOrders = await Order.findAll();
      return res.status(200).json(allOrders);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error listing dishes!" });
    }
  }

  async update(req, res) {
    const { basket_id, restaurant_id, dish_id, dish_quantity, total } =
      req.body;
    const { id } = req.params;

    const order = await Order.findOne({
      where: {
        id: id,
      },
    });

    if (!order) {
      return res.status(400).json({ message: "Order do not exists!" });
    }

    try {
      await Order.update(
        {
          basket_id: basket_id || order.basket_id,
          restaurant_id: restaurant_id || order.restaurant_id,
          dish_id: dish_id || order.dish_id,
          dish_quantity: dish_quantity || order.dish_quantity,
          total: total || order.total,
        },
        {
          where: {
            id: order.id,
          },
        }
      );

      return res.status(200).json({ message: "Order updated" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Order not updated!" });
    }
  }
}

module.exports = new OrderController();
