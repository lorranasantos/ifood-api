const Users = require("../../models/Users");

class GetUserController {
  async userProfile(req, res) {
    console.log("aqi");
    const user = await Users.findOne({
      attributes: ["id", "name", "email", "phone", "avatar"],
      where: {
        id: req.userId,
      },
    });
    console.log(user);

    if (!user) {
      return res.status(400).json({ message: "User do not exist" });
    }

    const { id, name, email, phone, avatar } = user;
    return res.status(200).json({ id, name, email, phone, avatar });
  }
}

module.exports = new GetUserController();
