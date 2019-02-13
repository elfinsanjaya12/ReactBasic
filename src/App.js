import React, { Component } from "react";
import Header from "./components/Header";
import Top from "./components/Top";
import Main from "./components/Main";
import List from "./components/List";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header list="tiga terbaik" />
        <Top />
        <Main />
        <List />
        <Footer name="Makanan Nusantara" />
      </div>
    );
  }
}

export default App;
