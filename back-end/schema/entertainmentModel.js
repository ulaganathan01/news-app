const mongoose = require("mongoose");

const entertainmentSchema = new mongoose.Schema({
  author: String,
  content: String,
  description: String,
  publishedAt: String,
  source: Object,
  title: String,
  url: String,
  urlToImage: String
});

const entertainmentModel = mongoose.model("Entertainment", entertainmentSchema);

module.exports = entertainmentModel;
