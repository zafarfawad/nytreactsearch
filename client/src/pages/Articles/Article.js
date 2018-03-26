import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from "axios";


class Article extends Component {
  state = {
    articles: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getNyData()
      .then(response =>
        this.setState({
          articles: response.data.results,
          title: "",
          author: "",
          synopsis: ""
        })
      )

      .catch(err => console.log(err));
  };

  render() {
    return <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.articles.length ? 
            <List>
                {this.state.articles.map(article => <ListItem key= '3333'>
                    {/* <Link to={"/nyt/"}> */}
                      <strong>
                        {article.title}
                      </strong>
                    {/* </Link> */}
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </ListItem>)}
              </List> : 
              <h3>No Results to Display</h3>}
          </Col>
        </Row>
      </Container>;
  }
}
export default Article;
  

// state = {};

//   componentDidMount() {
//     this.retrieveData();
//   }

//   retrieveData() {
//     API.getNyData().then(response => {
//       console.log(response.data);
//     });
//   }

//   render() {
//     return(
//     <div>
//       <h1>fawad</h1>
//     </div>
//   )
// }



