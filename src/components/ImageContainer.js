import React from "react";

const ImageContainer = ({ data }) => {
  return (
    <div className="img-container">
      <img src={data.poster_url} alt="ss" />
    </div>
  );
};

export default ImageContainer;
