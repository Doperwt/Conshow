import React, { Component } from 'react';
import './App.css';
import TopicList from './rsvps/TopicList'
import RsvpList from './rsvps/RsvpList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopicList />
        <RsvpList />
      </div>
    );
  }
}

export default App;
