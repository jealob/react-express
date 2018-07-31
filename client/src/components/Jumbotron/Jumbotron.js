import React from "react";

const Jumbotron = (props) => (
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">New York Times Article Scrubber</h1>
    <p class="lead">{props.children}</p>
  </div>
</div>
);

export default Jumbotron;
