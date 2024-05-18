const Address = require("../models/Address");
const User = require("../models/User");
class UserController {
  async create(req, res) {
    const { name, email, avatar, phone, address_id, active } = req.body;

    const address = await Address.findByPk(address_id);

    if (!address) {
      return res.status(404).json({ message: "Address not found!" });
    }

    try {
      const newUser = await User.create({
        name,
        email,
        avatar,
        phone,
        address_id,
        active,
      });

      return res.status(200).json({
        newUser,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "User not created!" });
    }
  }
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
  async update(req, res) {
    const { name, avatar, phone, address_id } = req.body;
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
        address_id: address_id || user.address_id,
      },
      {
        where: {
          id: user.id,
        },
      }
    );

    return res.status(200).json({ message: "User updated", data: { user } });
  }
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

      if (!deleteUser) {
        return res.status(404).json({ message: "Restaurant does not exist!" });
      }

      return res.status(200).json({ message: "User deleted!" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed to delete this user!" });
    }
  }
}

module.exports = new UserController();
