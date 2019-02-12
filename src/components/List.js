import React, { Component } from "react";
import Image from "./Image";

class List extends Component {
  render() {
    return (
      <div>
        <ol>
          <Image />
          <li>Nasi Padang</li>
          <li>Sate</li>
          <li>Soto Babat</li>
        </ol>
      </div>
    );
  }
}

export default List;
