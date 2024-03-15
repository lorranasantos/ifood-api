const Restaurants = require("../../models/Restaurants");

class DeleteRestaurantController {
  async delete(req, res) {
    const { id } = req.params;

    const verifyRestaurant = await Restaurants.findOne({
      where: {
        id,
      },
    });

    if (!verifyRestaurant) {
      return res.status(404).json({ message: "Restaurant does not exist!" });
    }

    const deleteRestaurant = await Restaurants.destroy({
      where: {
        id,
      },
    });

    if (!deleteRestaurant) {
      return res
        .status(400)
        .json({ message: "failed to delete this restaurant!" });
    }

    return res.status(200).json({ message: "Restaurant deleted!" });
  }
}

module.exports = new DeleteRestaurantController();
