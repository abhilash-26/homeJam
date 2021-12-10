const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

// ******* database connection
mongoose
  .connect(process.env.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected To the database");
  })
  .catch((error) => {
    console.log(error);
  });

const PORT = process.env.PORT || 8080;

app.use("/api", require("../server/src/routes/index"));

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});
