const axios = require("axios");
const router = require("express").Router();

// function nycArticleEndPoint(query , beginDate , endDate){
router.get("/", function(req,res) {
  //call nyt
  console.log(req.body);
  const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  const APIKEY = "api-key=0c5ec128b06d45328a725462356412bb";
    // const query = query;
    // const beginDate = beginDate;
    // const endDate = endDate;
   const query = "&q=syria";
  const beginDate = "&begin_date=20180322";
  const endDate = "&end_date=20180323";

  const URL = BASEURL + APIKEY + query + beginDate + endDate;
  // const URL = `${BASEURL}${APIKEY}&q=${query}&begin_date=${beginDate}&end_date=${endDate}`;
//api.nytimes.com/svc/search/v2/articlesearch.json?api-key=0c5ec128b06d45328a725462356412bb&q=syria&begin_date=20180323&end_date=20180324
https: console.log(URL);
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
  console.log(req.body.startDate)
  axios
    .post(nycArticleEndPoint(req.body.startDate, req.body.endDate,req.body.query))
    //   axios.get(BASEURL)
    .then(function(articles) {
      // We have access to the day as an argument inside of the callback function
      res.json(articles.data);
    });
});

module.exports = router;
