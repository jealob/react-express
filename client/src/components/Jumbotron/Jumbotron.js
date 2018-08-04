import React from "react";

const Jumbotron = (props) => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">{props.header}</h1>
      <p className="lead">{props.children}</p>
    </div>
  </div>
);

export default Jumbotron;
