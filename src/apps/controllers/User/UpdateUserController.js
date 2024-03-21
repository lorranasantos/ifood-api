const User = require("../../models/User");

class UpdateUserController {
  async update(req, res) {
    const { name, avatar, phone, idAddress } = req.body;
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id: id,
      },
    });

    if (!user) {
      return res.status(400).json({ message: "User do not exists!" });
    }

    await User.update(
      {
        name: name || user.name,
        avatar: avatar || user.avatar,
        phone: phone || user.phone,
        idAddress: idAddress || user.idAddress,
      },
      {
        where: {
          id: user.id,
        },
      }
    );

    return res.status(200).json({ message: "User updated" });
  }
}

module.exports = new UpdateUserController();
