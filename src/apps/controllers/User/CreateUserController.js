const Users = require("../../models/Users");

class CreateUserController {
  async create(req, res) {
    const verifyUser = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (verifyUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await Users.create(req.body);
    if (!user) {
      return res.status(400).json({ message: "Failed in creating new user" });
    }
    return res.send({ message: "User Created!" });
  }
}
module.exports = new CreateUserController();
