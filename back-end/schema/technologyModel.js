const mongoose = require("mongoose");

const technologySchema = new mongoose.Schema({
  author: String,
  content: String,
  description: String,
  publishedAt: String,
  source: Object,
  title: String,
  url: String,
  urlToImage: String
});

const technologyModel = mongoose.model("Technology", technologySchema);

module.exports = technologyModel;
