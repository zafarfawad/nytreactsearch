import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from "axios";




  const randomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
  }

class Article extends Component {
  state = {
    articles: [],
    startDate: "",
    endDate: "",
    topic: ""
  };

  // componentDidMount() {
  //   this.loadNyArticles();
  // }

  loadNyArticles = () => {
    API.getNyData()
      .then(res =>
        this.setState({
          articles: res.data.response.docs,
          startDate: "",
          endDate: "",
          topic: ""
        })
      )

      .catch(err => console.log(err));
  };

  loadArticles = () => {
    API.loadArticles()
      .then(res =>
        this.setState({
          articles: res.data,
          startDate: "",
          endDate: "",
          topic: ""
        })
      )

      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  saveArticle = id => {
    API.saveArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.startDate && this.state.endDate) {
      API.getNyData(
          this.state.startDate,
          this.state.endDate,
          this.state.topic

        // startDate: this.state.startDate,
        // endDate: this.state.endDate,
        // topic: this.state.topic
      
      )
        // .then(res => this.loadArticles()
        .catch(err => console.log(err));
        
    // }
  };

  render() {
    return <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Search Articles</h1>
            </Jumbotron>
            <form>
              <Input value={this.state.startDate} onChange={this.handleInputChange} name="startDate" placeholder="StartDate (required)" />
              <Input value={this.state.endDate} onChange={this.handleInputChange} name="endDate" placeholder="endDate (required)" />
              <TextArea value={this.state.topic} onChange={this.handleInputChange} name="topic" placeholder="topic (required)" />
              <FormBtn disabled={!(this.state.endDate && this.state.startDate && this.state.topic)} onClick={this.handleFormSubmit}>
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron vertical-center>
              <h1>New York Times Articles Scrubber</h1>
              <h2> Search and Annotate Articles of interest</h2>
            </Jumbotron>
            {this.state.articles.length ? <List>
                {this.state.articles.map(article => (
                  <ListItem key={this.randomNumber}>
                    {/* <Link to={"/nyt/"}> */}
                    <strong>{article.headline.main}</strong>
                    {/* </Link> */}
                    <SaveBtn onClick={() => this.saveArticle} />
                  </ListItem>
                ))}
              </List> : <h3>No Results to Display</h3>}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron vertical-center>
              <h2> Saved Articles</h2>
            </Jumbotron>
            {this.state.articles.length ? <List>
                {this.state.articles.map(article => (
                  <ListItem key={this.randomNumber}>
                    {/* <Link to={"/nyt/"}> */}
                    <strong>{article.headline.main}</strong>
                    {/* </Link> */}
                    <DeleteBtn onClick={() => this.deleteArticle} />
                  </ListItem>
                ))}
              </List> : <h3>No Results to Display</h3>}
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



