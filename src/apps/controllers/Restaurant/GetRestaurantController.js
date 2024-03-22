const Restaurant = require("../../models/Restaurant");

class GetRestaurantController {
  async index(req, res) {
    const { id } = req.params;

    try {
      const findRestaurant = await Restaurant.findOne({
        where: {
          id,
        },
      });

      return res.status(200).json(findRestaurant);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed find this Restaurant!" });
    }
  }
}

module.exports = new GetRestaurantController();
