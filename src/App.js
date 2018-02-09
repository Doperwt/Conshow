import React, { Component } from 'react';
import './App.css';
import TopicList from './rsvps/TopicList'
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopicList />
      </div>
    );
  }
}

export default App;
