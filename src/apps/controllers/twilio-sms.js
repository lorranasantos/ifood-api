const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_SID } =
  process.env;
const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const PhoneNumber = require("../models/PhoneNumber");

function generateOTP(length) {
  const charset = "0123456789";
  let otp = "";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * charset.length);
    console.log("Charset:", charset);
    otp += charset[index];
  }

  return otp;
}

const sendOTP = async (req, res, next) => {
  const { phone_number } = req.body;

  try {
    const code = generateOTP(6);

    const otp = await PhoneNumber.create({
      phone_number: phone_number,
      code: code,
    });
    console.log("Registro OTP criado:", otp.toJSON());

    await client.messages.create({
      body: `Seu código de verificação é: ${code}`,
      from: TWILIO_SERVICE_SID,
      to: phone_number,
      channel: "sms",
    });
    console.log("OTP enviado por SMS para:", phoneNumber);

    res.status(200).send("OTP enviado com sucesso!");
  } catch (error) {
    res
      .status(error?.status || 400)
      .send(error?.message || "Error sending otp");
  }
};

const verifyOTP = async (req, res, next) => {
  const { countryCode, phoneNumber, otp } = req.body;

  try {
    const verifiedResponse = await client.verify.v2
      .services(TWILIO_SERVICE_SID)
      .verificationChecks.create({
        to: `+${countryCode}${phoneNumber}`,
        code: otp,
      });
    res
      .status(200)
      .send(`OTP verified successfully!: ${JSON.stringify(verifiedResponse)}`);
  } catch (error) {
    res
      .status(error?.status || 400)
      .send(error?.message || "Something went wrong");
  }
};

module.exports = {
  sendOTP,
  verifyOTP,
};
