import React, { Component } from "react";

class Image extends Component {
  render() {
    return (
      <div>
        <img
          src=" https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"
          alt="gambar makanan"
          width="500"
        />
      </div>
    );
  }
}

export default Image;
