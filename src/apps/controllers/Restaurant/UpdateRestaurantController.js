const Restaurant = require("../../models/Restaurant");

class UpdateRestaurantController {
  async update(req, res) {
    try {
      const { name, category, image, description, idAddress, dish_id } =
        req.body;

      const { id } = req.params;

      const restaurant = await Restaurant.findOne({
        where: {
          id: id,
        },
      });

      if (!restaurant) {
        return res.status(400).json({ message: "Restaurant do not exists!" });
      }

      await Restaurant.update(
        {
          name: name || restaurant.name,
          category: category || restaurant.category,
          image: image || restaurant.image,
          description: description || restaurant.description,
          idAddress: idAddress || restaurant.idAddress,
          dish_id: dish_id || restaurant.dish_id,
        },
        {
          where: {
            id: restaurant.id,
          },
        }
      );

      return res.status(200).json({ message: "Restaurant updated" });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "failed update this restaurant!" });
    }
  }
}

module.exports = new UpdateRestaurantController();
