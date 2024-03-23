require("dotenv").config();
require("./database/index");
const express = require("express");
const route = require("./route");

const app = express();

app.use(express.json());
app.use(route);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is on on Port ${PORT}`);
});
