const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  author: String,
  content: String,
  description: String,
  publishedAt: String,
  source: Object,
  title: String,
  url: String,
  urlToImage: String
});

const homeModel = mongoose.model("Home", homeSchema);

module.exports = homeModel;
