const User = require("../../models/User");

class DeleteUserController {
  async delete(req, res) {
    const { id } = req.params;
    const verifyUser = await User.findOne({
      where: {
        id,
      },
    });

    if (!verifyUser) {
      return res.status(404).json({ message: "User does not exists!" });
    }
    try {
      const deleteUser = await User.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({ message: "User deleted!" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed to delete this user!" });
    }
  }
}

module.exports = new DeleteUserController();
