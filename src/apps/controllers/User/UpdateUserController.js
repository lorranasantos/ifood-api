const Users = require("../../models/Users");
const bcryptjs = require("bcryptjs");

class UpdateUserController {
  async update(req, res) {
    const { name, avatar, old_password, new_password, confirm_new_password } =
      req.body;

    const user = await Users.findOne({
      where: {
        id: req.userId,
      },
    });

    if (!user) {
      return res.status(400).json({ message: "User do not exists!" });
    }

    let encryptedPassword = "";

    if (old_password) {
      if (!(await user.checkPassword(old_password))) {
        return res.status(401).json({ error: "Old password does not match!" });
      }

      if (!new_password || !confirm_new_password) {
        return res.status(401).json({
          error: "We need a new password and confirm new password attributes",
        });
      }
      if (new_password != confirm_new_password) {
        return res.status(401).json({
          error: "New password and confirm new password does not match",
        });
      }

      encryptedPassword = await bcryptjs.hash(new_password, 8);
    }
    await Users.update(
      {
        name: name || user.name,
        avatar: avatar || user.avatar,
        password_hash: encryptedPassword || user.password_hash,
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
