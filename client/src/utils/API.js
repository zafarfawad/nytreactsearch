import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "api-key=0c5ec128b06d45328a725462356412bb";

export default {
  // Gets all books
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  // getNyData: function(start) {
  // return axios.get("/api/nyt" + start);
  //},
  postNyData: function(formData) {
    return axios.post("/api/nyt", formData);
  },
  getNyData: function(start, end, topic) {
    const myBegin = "&begin_date=" + start;
    const myEnd = "&end_date=" + end;
    const myQuery = "&q=" + topic;
    const URL = BASEURL + APIKEY + myQuery + myBegin + myEnd;
    console.log(URL);
    return axios.get(URL);
  }
};
