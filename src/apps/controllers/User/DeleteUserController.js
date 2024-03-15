const Users = require("../../models/Users");

class DeleteUserController {
  async delete(req, res) {
    const userToDelete = await Users.findOne({
      where: {
        id: req.userId,
      },
    });

    if (!userToDelete) {
      return res.status(400).json({ message: "User do not exist!" });
    }

    await Users.destroy({
      where: {
        id: req.userId,
      },
    });

    return res.status(200).json({ message: "User deleted!" });
  }
}

module.exports = new DeleteUserController();
