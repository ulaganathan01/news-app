const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
const connectDatabase = require("./database");
connectDatabase();
const axios = require("axios");
const cors = require("cors");
const newsRouter = require("./router/newsRouter");

app.use(express.json());
app.use(cors());
app.use("/", newsRouter);

app.get("*", (req, res) => {
  res.status(404).send("<h1>PAGE NOT FOUND</h1>")
})

app.listen(PORT, () => {
  console.log(`The server is listening to the port: ${PORT}`);
});
