const mongoose = require("mongoose");

const sportsSchema = new mongoose.Schema({
  author: String,
  content: String,
  description: String,
  publishedAt: String,
  source: Object,
  title: String,
  url: String,
  urlToImage: String
});

const sportsModel = mongoose.model("Sports", sportsSchema);

module.exports = sportsModel;
