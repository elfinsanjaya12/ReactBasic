import React, { Component } from "react";
import Header from "./components/Header";

const Footer = () => {
  return (
    <div>
      <h2>Ini footer</h2>
      <p>2019</p>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Hello</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
