import React from "react";

const TitleContainer = ({ data }) => {
  return (
    <div className="bubble">
      <strong>{data.title}</strong> releases in{" "}
      <strong>{data.days_until} days!</strong> on{" "}
      <strong>{data.release_date}</strong>
    </div>
  );
};

export default TitleContainer;
