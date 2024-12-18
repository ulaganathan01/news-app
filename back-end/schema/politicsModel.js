const mongoose = require("mongoose");

const politicsSchema = new mongoose.Schema({
  author: String,
  content: String,
  description: String,
  publishedAt: String,
  source: Object,
  title: String,
  url: String,
  urlToImage: String
});

const politicsModel = mongoose.model("Politics", politicsSchema);

module.exports = politicsModel;
