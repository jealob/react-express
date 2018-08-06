import React from "react";
import "./List.css";

export const SavedItem = (props) => (
  <div className="pt-2 border rounded">
    <div className = "row px-3">
      <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12 ">
        <a href={props.url} data-id={props.id} className=" list-group-item article-link"> {props.headline} </a >
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        {(props.date) ? <p style={{ float: "right"}}>Date Saved: {props.date}</p> : <p></p>}
      </div>
    </div>

    <div className="row article-snippet">
      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 snippet" >
        <p style={{ marginBottom: 0}}>{props.snippet}</p>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 py-2">
        <button onClick={() => props.operate(props.id)} style={{ float: "right"}} className={props.type}>
          Delete
      </button>
      </div>
    </div>
  </div>
);
