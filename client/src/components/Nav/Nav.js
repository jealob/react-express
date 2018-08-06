import React from "react";
import "./Nav.css"

export const Nav = () => (
  // <div class="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">NYT Scrubber</a>
      <a className="navbar-brand" href="/saved">Saved</a>
    </nav>
  // </div>
);

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="bottom">
        &copy; NYTimes Article Scrubber - Powered by React
      </div>
    </footer >
  )
}
