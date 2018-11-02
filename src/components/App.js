import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import NewsSourceSelect from './News/NewsSourceSelect';
import Sidenews from './News/Sidenews';

const news_api_key = `${process.env.REACT_APP_NEWS_API_KEY}`

class App extends Component {
  state = {
    sources:[],
    source: '',
    endpoint: '',
    news1: {
      type: 'top-headlines',
      query: 'sources=bbc-news'
    },
    news2: {
      type: 'everything',
      query: 'domains=techcrunch.com&language=en'
    },
    news3: {
      type: 'everything',
      query: 'domains=comicbookmovie.com&language=en'
    }
  }

  componentDidMount() {
    const url='https://newsapi.org/v2/sources?apiKey='+ news_api_key;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ sources: data.sources});
      }).catch((error) => {
        console.log(error);
      });
  }

  changeSourceHandler = (event)=>{
    const source = event.target.value;
    this.setState({source:source})
  }
  changeEndpointHandler = (event)=>{
    const endpoint = event.target.value;
    this.setState({endpoint:endpoint})
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper indigo lighten-4">
                <a href="/" className="brand-logo center">My Feed</a>

              </div>

            </nav>
          </div>
          <div className="row indigo lighten-4">
            <NewsSourceSelect
              sources={this.state.sources}
              value={this.state.source}
              changeEndpoint={this.changeEndpointHandler}
              changeSource={this.changeSourceHandler} />
          </div>
          <div className="row">
            <div className="col s8">
                <News news = {this.state.news1} />
                <News news = {this.state.news2} />
            </div>
            <div className="col s4">
                <Sidenews news={this.state.news3} />
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
