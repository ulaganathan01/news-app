const newsRouter = require("express").Router();
const axios = require("axios");
const d = new Date();
const homeModel = require("../schema/homeModel");
const headlinesModel = require("../schema/headlinesModel");
const politicsModel = require("../schema/politicsModel");
const entertainmentModel = require("../schema/entertainmentModel");
const businessModel = require("../schema/businessModel");
const technologyModel = require("../schema/technologyModel");
const sportsModel = require("../schema/sportsModel");
const healthModel = require("../schema/healthModel");



newsRouter.get("/", async (req, res) => {
  try {
    const API_KEY = process.env.NEWS_API_KEY;
    if (!API_KEY) throw new Error("API KEY is not found");
    // const news = await axios.get(
    //   `https://newsapi.org/v2/everything?domains=livemint.com&apiKey=${API_KEY}`
    // );
    // if (!news) throw new Error("Error while fetching news");
    // const insertedData = await homeModel.insertMany(news.data.articles);
    const homeData = await homeModel.find();
    res.status(200).json({
      status: true,
      data: homeData,
    });
  } catch (err) {
    res.json({
      status: false,
      message: err.message,
    });
  }
});

newsRouter.get("/top-headlines", async (req, res) => {
  try {
    const API_KEY = process.env.NEWS_API_KEY;
    if (!API_KEY) throw new Error("API KEY is not found");
    // const news = await axios.get(
    //   `https://newsapi.org/v2/everything?q=headlines&from=${d.setDate(
    //     d.getDate() - 2
    //   )}&to=${d.setDate(d.getDate())}sortBy=popularity&apiKey=${API_KEY}`
    // );
    // if (!news) throw new Error("Error while fetching news");
    // const insertedData = await headlinesModel.insertMany(news.data.articles);
    const headlinesData = await headlinesModel.find();
    res.status(200).json({
      status: true,
      data: headlinesData,
    });
  } catch (err) {
    res.json({
      status: false,
      message: err.message,
    });
  }
});

newsRouter.get("/politics", async (req, res) => {
  try {
    const API_KEY = process.env.NEWS_API_KEY;
    if (!API_KEY) throw new Error("API KEY is not found");
    // const news = await axios.get(
    //   `https://newsapi.org/v2/everything?q=politics&from=${d.setDate(
    //     d.getDate() - 2
    //   )}&to=${d.setDate(d.getDate())}sortBy=popularity&apiKey=${API_KEY}`
    // );
    // if (!news) throw new Error("Error while fetching news");
    // const insertedData = await politicsModel.insertMany(news.data.articles);
    const politicsData = await politicsModel.find();
    res.status(200).json({
      status: true,
      data: politicsData,
    });
  } catch (err) {
    res.json({
      status: false,
      message: err.message,
    });
  }
});

newsRouter.get("/business", async (req, res) => {
  try {
    const API_KEY = process.env.NEWS_API_KEY;
    if (!API_KEY) throw new Error("API KEY is not found");
    // const news = await axios.get(
    //   `https://newsapi.org/v2/everything?q=business&from=${d.setDate(
    //     d.getDate() - 2
    //   )}&to=${d.setDate(d.getDate())}sortBy=popularity&apiKey=${API_KEY}`
    // );
    // if (!news) throw new Error("Error while fetching news");
    // const insertedData = await businessModel.insertMany(news.data.articles);
    const businessData = await businessModel.find();
    res.status(200).json({
      status: true,
      data: businessData,
    });
  } catch (err) {
    res.json({
      status: false,
      message: err.message,
    });
  }
});

newsRouter.get("/entertainment", async (req, res) => {
  try {
    const API_KEY = process.env.NEWS_API_KEY;
    if (!API_KEY) throw new Error("API KEY is not found");
    // const news = await axios.get(
    //   `https://newsapi.org/v2/everything?q=entertainment&from=${d.setDate(
    //     d.getDate() - 2
    //   )}&to=${d.setDate(d.getDate())}sortBy=popularity&apiKey=${API_KEY}`
    // );
    // if (!news) throw new Error("Error while fetching news");
    // const insertedData = await entertainmentModel.insertMany(news.data.articles);
    const entertainmentData = await entertainmentModel.find();
    res.status(200).json({
      status: true,
      data: entertainmentData,
    });
  } catch (err) {
    res.json({
      status: false,
      message: err.message,
    });
  }
});

newsRouter.get("/technology", async (req, res) => {
  try {
    const API_KEY = process.env.NEWS_API_KEY;
    if (!API_KEY) throw new Error("API KEY is not found");
    // const news = await axios.get(
    //   `https://newsapi.org/v2/everything?q=technology&from=${d.setDate(
    //     d.getDate() - 2
    //   )}&to=${d.setDate(d.getDate())}sortBy=popularity&apiKey=${API_KEY}`
    // );
    // if (!news) throw new Error("Error while fetching news");
    // const insertedData = await technologyModel.insertMany(news.data.articles);
    const technologyData = await technologyModel.find();
    res.status(200).json({
      status: true,
      data: technologyData,
    });
  } catch (err) {
    res.json({
      status: false,
      message: err.message,
    });
  }
});

newsRouter.get("/sports", async (req, res) => {
  try {
    const API_KEY = process.env.NEWS_API_KEY;
    if (!API_KEY) throw new Error("API KEY is not found");
    // const news = await axios.get(
    //   `https://newsapi.org/v2/everything?q=sports&from=${d.setDate(
    //     d.getDate() - 2
    //   )}&to=${d.setDate(d.getDate())}sortBy=popularity&apiKey=${API_KEY}`
    // );
    // if (!news) throw new Error("Error while fetching news");
    // const insertedData = await sportsModel.insertMany(news.data.articles);
    const sportsData = await sportsModel.find();
    res.status(200).json({
      status: true,
      data: sportsData,
    });
  } catch (err) {
    res.json({
      status: false,
      message: err.message,
    });
  }
});

newsRouter.get("/health", async (req, res) => {
  try {
    const API_KEY = process.env.NEWS_API_KEY;
    if (!API_KEY) throw new Error("API KEY is not found");
    // const news = await axios.get(
    //   `https://newsapi.org/v2/everything?q=health&from=${d.setDate(
    //     d.getDate() - 2
    //   )}&to=${d.setDate(d.getDate())}sortBy=popularity&apiKey=${API_KEY}`
    // );
    // if (!news) throw new Error("Error while fetching news");
    // const insertedData = await healthModel.insertMany(news.data.articles);
    const healthData = await healthModel.find();
    res.status(200).json({
      status: true,
      data: healthData,
    });
  } catch (err) {
    res.json({
      status: false,
      message: err.message,
    });
  }
});

module.exports = newsRouter;
