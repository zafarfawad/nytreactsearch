const axios = require("axios");
const router = require("express").Router();


router.get("/", function(req,res) {
  //call nyt

// const BASEURL ="https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=0c5ec128b06d45328a725462356412bb&q=syria&begin_date=20180322&end_date=20180323";
  const BASEURL = "https://api.nytimes.com/svc/topstories/v2/home.json?";
  const APIKEY = "api-key=0c5ec128b06d45328a725462356412bb";
  const query = "&q=syria";
  const beginDate = "&begin_date=20180322";
  const endDate = "&end_date=20180323";
  const URL = BASEURL + APIKEY + query + beginDate + endDate;
// api.nytimes.com/svc/search/v2/articlesearch.json?api-key=0c5ec128b06d45328a725462356412bb&q=syria&begin_date=20180322&end_date=20180323
  console.log(URL);

axios
  .get(URL)

//   axios.get(BASEURL)
  .then(function(articles) {

     // We have access to the day as an argument inside of the callback function
    res.json(articles.data);

    //   console.log(articles.data);
  });
    });



module.exports = router;
