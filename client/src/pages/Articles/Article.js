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



class Article extends Component {
  state = {
    articles: [],
    savedArticles: [],
    startDate: "",
    endDate: "",
    topic: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadNyArticles = (start, end, topic) => {
    API.getNyData(start, end, topic)
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
    API.getArticles()
      .then(res =>
        this.setState({
          savedArticles: res.data,
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

  saveArticle = (articleData) => {
    const article = {
      title: articleData.headline.main,
      url: articleData.web_url
    };
    API.saveArticle(article)
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
    this.loadNyArticles(
      this.state.startDate,
      this.state.endDate,
      this.state.topic
    );
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Search Articles</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.startDate}
                onChange={this.handleInputChange}
                name="startDate"
                placeholder="StartDate (required)"
              />
              <Input
                value={this.state.endDate}
                onChange={this.handleInputChange}
                name="endDate"
                placeholder="endDate (required)"
              />
              <TextArea
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="topic (required)"
              />
              <FormBtn
                disabled={
                  !(
                    this.state.endDate &&
                    this.state.startDate &&
                    this.state.topic
                  )
                }
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron vertical-center>
              <h1>New York Times Articles Scrubber</h1>
              <h2> Search and Annotate Articles of interest</h2>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map((article,index) => (
                  <ListItem key={index}>
                    {/* <Link to={"/nyt/"}> */}
                    <strong>{article.headline.main}</strong>
                    {/* </Link> */}
                    <SaveBtn onClick= {()=>{this.saveArticle(article)}} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron vertical-center>
              <h2> Saved Articles</h2>
            </Jumbotron>
            {this.state.savedArticles.length ? (
              <List>
                {this.state.savedArticles.map((article,index) => (
                  <ListItem key={index}>
                    {/* <Link to={"/nyt/"}> */}
                    <strong>{article.title}</strong>
                    {/* </Link> */}
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Article;
  
