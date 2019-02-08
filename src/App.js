import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header/";

class App extends Component {
  constructor(){
    super();
    this.state = {
      language: "en"
    }
  }
  render() {
    return (
      <div className="App">
        <Header language={this.state.language}/>
      </div>
    );
  }
}

export default App;
