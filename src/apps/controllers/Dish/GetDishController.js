const Dish = require("../../models/Dish");

class GetDishController {
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
}

module.exports = new GetDishController();
