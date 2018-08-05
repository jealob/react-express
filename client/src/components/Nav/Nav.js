import React from "react";
import "./Nav.css"

export const Nav = () => (
  <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand"href="/">NYT Scrubber</a>
  <a className="navbar-brand"href="/saved">Saved</a>
</nav>
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
