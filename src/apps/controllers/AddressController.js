const Address = require("../models/Address");

class AddressController {
  async create(req, res) {
    const {
      address,
      house_number,
      zip_code,
      neighborhood,
      city,
      state,
      complement,
    } = req.body;

    try {
      const addresses = await Address.create({
        address,
        house_number,
        zip_code,
        neighborhood,
        city,
        state,
        complement,
      });

      return res.status(200).json({ addresses });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Address not created!" });
    }
  }

  async index(req, res) {
    const { id } = req.params;

    try {
      const findAddress = await Address.findOne({
        where: {
          id,
        },
      });

      return res.status(200).json(findAddress);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed find this Address!" });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    const verifyAddress = await Address.findOne({
      where: {
        id,
      },
    });

    if (!verifyAddress) {
      return res.status(404).json({ message: "Address does not exists!" });
    }
    try {
      await address.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({ message: "Address deleted!" });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "failed to delete this Address!" });
    }
  }
  async listAddress(req, res) {
    try {
      const allAddresses = await Address.findAll();
      return res.status(200).json(allAddresses);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error listing dishes!" });
    }
  }

  async update(req, res) {
    const {
      address,
      house_number,
      zip_code,
      neighborhood,
      city,
      state,
      complement,
    } = req.body;
    const { id } = req.params;

    const findAddress = await Address.findOne({
      where: {
        id: id,
      },
    });

    if (!findAddress) {
      return res.status(400).json({ message: "Address do not exists!" });
    }

    try {
      await findAddress.update(
        {
          address: address || findAddress.address,
          house_number: house_number || findAddress.house_number,
          zip_code: zip_code || findAddress.zip_code,
          neighborhood: neighborhood || findAddress.neighborhood,
          city: city || findAddress.city,
          state: state || findAddress.state,
          complement: complement || findAddress.complement,
        },
        {
          where: {
            id: findAddress.id,
          },
        }
      );

      return res.status(200).json({ message: "Address updated" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Address not updated!" });
    }
  }
}

module.exports = new AddressController();
