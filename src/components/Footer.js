import React from "react";

const Footer = props => {
  const name = props.name;

  return (
    <div>
      <h2>Ini footer {name}</h2>
      <p>2019</p>
    </div>
  );
};

export default Footer;
