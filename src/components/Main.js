import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Menu Makanan",
      isi: "Memu Minuman"
    };
    this.ubahData = this.ubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //   ubahData() {
  //     this.setState({ title: "Ubah Menu Makanan" });
  //   }

  ubahData() {
    this.setState((state, props) => {
      return {
        isi: state.title,
        title: state.isi
      };
    });
  }

  handleChange = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h3>{this.state.isi}</h3>
        <button onClick={this.ubahData}>Ubah Data</button>
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

export default Main;
