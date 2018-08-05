const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  headline: { type: String, required: true },
  url: String,
  snippet: String,
  date: { type: Date, default:Date.now }
});
console.log("db");
const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
