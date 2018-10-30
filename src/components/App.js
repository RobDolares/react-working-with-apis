import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import NewsSourceSelect from './News/NewsSourceSelect';



class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MY NEWS FEED</h1>
        </header>
        <NewsSourceSelect />
        <News />
      </div>
    );
  }
}

export default App;
