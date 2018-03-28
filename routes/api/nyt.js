const axios = require("axios");
const router = require("express").Router();

// function nycArticleEndPoint(query , beginDate , endDate){
router.get("/", function(req, res) {
  axios
    .get(URL)
    //   axios.get(BASEURL)
    .then(function(articles) {
      // We have access to the day as an argument inside of the callback function
      res.json(articles.data);
    });
});
// }

router.post("/", function(req, res) {
  //call nyt
  (req.body.startDate);
  axios
    .post(
      nycArticleEndPoint(req.body.startDate, req.body.endDate, req.body.query)
    )
    //   axios.get(BASEURL)
    .then(function(articles) {
      // We have access to the day as an argument inside of the callback function
      res.json(articles.data);
    });
});

module.exports = router;



