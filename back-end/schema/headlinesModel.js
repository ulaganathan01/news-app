const mongoose = require("mongoose");

const headlinesSchema = new mongoose.Schema({
  author: String,
  content: String,
  description: String,
  publishedAt: String,
  source: Object,
  title: String,
  url: String,
  urlToImage: String
});

const headlinesModel = mongoose.model("Headline", headlinesSchema);

module.exports = headlinesModel;
