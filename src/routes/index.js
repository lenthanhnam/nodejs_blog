const newsRouter = require("./news");
const siteRouter = require("./site");

function index(app) {
  
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
  
}

module.exports = index;
