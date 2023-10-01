import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends Component {
 
  render() {
    let {country } = this.props;
  
    // const { country } = this.state;
    console.log("Country-",country);
    let c = "Bhavya";
    
    return (
        <>
       
          <Navbar />
          
          <Routes>
            <Route
             exact path="/"
             element={<News country={"in"} pagesize={9} key="business" category={"general"} />}
            />
            <Route
             exact path="/business"
             element={<News country={"in"} pagesize={9} key="business" category={"business"} />}
            />
            <Route
             exact path="/entertainment"
             element={<News country={"in"}  pagesize={9} key="entertainment" category={"entertainment"} />}
            />
            <Route
             exact path="/general"
             element={<News country={"in"} pagesize={9} key="general" category={"general"} />}
            />
            <Route
             exact path="/health"
             element={<News country={"in"} pagesize={9} key="health" category={"health"} />}
            />
            <Route
             exact path="/science"
             element={<News country={"in"} pagesize={9}  key="science" category={"science"} />}
            />
            <Route
             exact path="/sports"
             element={<News country={"in"} pagesize={9} key="sports" category={"sports"} />}
            />
            <Route
             exact path="/technology"
             element={<News country={"in"} pagesize={9} key="technology" category={"technology"} />}
            />
          </Routes>
          {/* <div>Hello this is my first class based Component {this.c}</div> */}
        
        </>
    );
  }
}

export default App;
