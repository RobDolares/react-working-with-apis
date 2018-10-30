import React, { Component } from 'react'

const news_api_key = `${process.env.REACT_APP_NEWS_API_KEY}`

class NewsSourceSelect extends Component {
 constructor(props){
   super(props)
   this.state = {
     sources:[],
     source: ''
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

  changeEventHandler = (event)=>{
    const source = event.target.value;
    this.setState({source:source})
  }

  render(){

    return(
      <div>
        <select onChange={this.change} id="source" value={this.state.source}>
          {this.state.sources.map((source)=> {
            return <option key={this.state.sources.name} value={this.state.sources.id}>{source.name}</option>
          })}
        </select>
      </div>
    )
  }
}


export default NewsSourceSelect;
