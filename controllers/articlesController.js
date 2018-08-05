const db = require("../models");
const request = require("request");
// const apikey = process.env.NYTIMES_API;

// Defining methods for the articlesController

module.exports = {
  findAll: function (req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("back: ", req.body);
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    console.log(req.params);
    console.log(req.body);
    console.log(req.query);
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  search: function (req, res) {
    const searchString = req.params;
    if (searchString.begin === 'null') {
      searchString.begin = "19000101";
    }
    if (searchString.end === 'null') {
      searchString.end = "20180101";
    }
    console.log("params:", searchString);
    request.get({
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        'api-key': "26a92129d8584084af3e204eb688ec82",
        'q': searchString.query,
        'begin_date': searchString.begin,
        'end_date': searchString.end
      },
    }, function (err, response, body) {
      // console.log("apikey:", apikey);
      body = JSON.parse(body);
      res.json(body.response.docs);
    })
  }
};
