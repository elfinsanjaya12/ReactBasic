import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Daftar Makanan Nusantara",
      datalist: this.props.list
    };
    // untuk membuat this.state dlm method berfungsi
    this.handlePesan = this.handlePesan.bind(this);
  }

  handlePesan(value) {
    alert(this.state.data);
    alert(value);
    value.eventdefault();
  }
  render() {
    const { data, datalist } = this.state;
    return (
      <div>
        <h2>Makanan Has Indonesia</h2>
        <h2>{data}</h2>
        <h2>{datalist}</h2>
        <a href="/" onClick={() => this.handlePesan("DARI HEADAER")}>
          Halaman Headar
        </a>
      </div>
    );
  }
}

export default Header;
