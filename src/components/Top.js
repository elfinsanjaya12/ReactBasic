import React from "react";

const Top = () => {
  const handlePesan = (value, e) => {
    alert("Halaman Top Tampil");
    alert(value);
    e.preventDefault();
  };

  return (
    <a href="/" onClick={e => handlePesan("DARI TOP", e)}>
      Halaman Top
    </a>
  );
};

export default Top;
