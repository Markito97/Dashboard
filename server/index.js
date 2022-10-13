const express = require("express");
const PORT = 5000;
const DB_URL = "mongodb://localhost/rest-api";
const postRouter = require("./routes/routes");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use("/api", postRouter);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}

startApp();
