import axios from "axios";

export default {
  // Gets all books

  getNyData: function() {
    return axios.get("/api/nyt");
  }
};
