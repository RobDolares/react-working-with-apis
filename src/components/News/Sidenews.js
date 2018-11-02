import React, {Component} from 'react';
import SingleSide from './SingleSide';
import axios from 'axios';


const news_api_key = `${process.env.REACT_APP_NEWS_API_KEY}`

class Sidenews extends Component {
  constructor(props){
    super(props);
    this.state = {
      sidenews: [],
    };
  }


  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=`+ news_api_key;

    axios.get(url)
    .then((response)=>{
      this.setState({
        sidenews: response.data.articles
      })
  })
  .catch((error)=>{
    // handle error
    console.log(error);
  })
  .then(()=>{
    // always executed
  });
  }


  renderItems() {
    return this.state.sidenews.map((item) => (
      <SingleSide key={item.url} item={item} />
    ));
  }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>);
  }
}

export default Sidenews;
