import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

class App extends Component {
  render() {
    let c='Bhavya';
    return (
      <>
      <Navbar/>
      <News pagesize={9}/>
      {/* <div>Hello this is my first class based Component {this.c}</div> */}
      </>
    ) 
  }
}

export default App


