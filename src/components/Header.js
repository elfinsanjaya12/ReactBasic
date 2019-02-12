import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Daftar Makanan Nusantara"
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <h2>Makanan Has Indonesia</h2>
        <h2>{data}</h2>
      </div>
    );
  }
}

export default Header;
