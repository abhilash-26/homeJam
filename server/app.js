const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});
