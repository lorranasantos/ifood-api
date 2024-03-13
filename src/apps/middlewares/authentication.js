const { decryptedToken } = require("../../utils/token");
const { decrypt } = require("../../utils/crypt");

const verifyJwt = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Unset token!" });
  }

  // console.log(
  //   "id descriptografado inteiro",
  //   parseInt(decrypt(await decryptedToken(authHeader)))
  // );
  try {
    const userId = await decryptedToken(authHeader);

    req.userId = parseInt(decrypt(userId));

    console.log("passei");
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
};

module.exports = verifyJwt;
