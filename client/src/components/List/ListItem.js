import React from "react";
import "./List.css";

export const ListItem = (props) => (
  <div>
    <a href={props.url} data-id={props.id} className="col-8 article-link"> {props.headline} </a >
    {(props.date) ? <span className="col-4">Date Saved:{props.date}</span> : <span></span>}
    <button onClick={() => props.operate(props.id)} style={{ marginBottom: 10, float: "right" }} className={props.type}>
      {props.children}
    </button>
    <p className="list-group-item article-link" style={{ color: "white", background: "black" }}>{props.snippet}</p>
  </div>
);
