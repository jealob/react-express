import React from "react";
import "./List.css";

export const ListItem = (props) => (
  <div className="pt-2 border rounded">
    <div className="row  px-3">
      <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
        <a href={props.url} data-id={props.id} className=" list-group-item article-link"> {props.headline} </a >
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <button onClick={() => props.operate(props.id)} style={{ marginBottom: 10, float: "right" }} className={props.type}>
          Save
        </button>
      </div>
    </div>

    <div className="row article-snippet">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 snippet" >
        <p style={{ marginBottom: 0}}>{props.snippet}</p>
      </div>
    </div>
  </div>
);