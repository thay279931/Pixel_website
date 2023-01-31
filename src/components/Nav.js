import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Pixel_website/">Home</Link>
        </li>
        <li>
          <Link to="/Pixel_website/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
