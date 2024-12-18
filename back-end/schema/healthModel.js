const mongoose = require("mongoose");

const healthSchema = new mongoose.Schema({
  author: String,
  content: String,
  description: String,
  publishedAt: String,
  source: Object,
  title: String,
  url: String,
  urlToImage: String
});

const healthModel = mongoose.model("Health", healthSchema);

module.exports = healthModel;
