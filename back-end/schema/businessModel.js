const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  author: String,
  content: String,
  description: String,
  publishedAt: String,
  source: Object,
  title: String,
  url: String,
  urlToImage: String
});

const businessModel = mongoose.model("Business", businessSchema);

module.exports = businessModel;
