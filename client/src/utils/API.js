import axios from "axios";

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
  getNyData: function(start, end, topic) {
    console.log(formData.startDate);
    return axios.get("/api/nyt" + start + end + topic);
  },
  postNyData: function(formData) {
    return axios.post("/api/nyt", formData);
  }
};
