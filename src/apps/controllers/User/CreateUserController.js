const User = require("../../models/User");

class CreateUserController {
  async create(req, res) {
    const { name, email, avatar, phone, idAddress, active } = req.body;

    try {
      const newUser = await User.create({
        name,
        email,
        avatar,
        phone,
        idAddress,
        active,
      });

      return res.status(200).json({
        data: { name, email, avatar, phone, avatar, idAddress, active },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "User not created!" });
    }
  }
}

module.exports = new CreateUserController();
