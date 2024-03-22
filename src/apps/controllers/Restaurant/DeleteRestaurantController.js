const Restaurant = require("../../models/Restaurant");

class DeleteRestaurantController {
  async delete(req, res) {
    try {
      const { id } = req.params;

      const verifyRestaurant = await Restaurant.findOne({
        where: {
          id,
        },
      });

      if (!verifyRestaurant) {
        return res.status(404).json({ message: "Restaurant does not exist!" });
      }

      await Restaurant.destroy({
        where: {
          id,
        },
      });
      return res.status(200).json({ message: "Restaurant deleted!" });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "failed to delete this restaurant!" });
    }
  }
}

module.exports = new DeleteRestaurantController();
