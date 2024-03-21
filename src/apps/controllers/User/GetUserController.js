const User = require("../../models/User");

class GetUserController {
  async index(req, res) {
    const { id } = req.params;

    try {
      const findUser = await User.findOne({
        where: {
          id,
        },
      });

      return res.status(200).json(findUser);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed find this user!" });
    }
  }
}

module.exports = new GetUserController();
