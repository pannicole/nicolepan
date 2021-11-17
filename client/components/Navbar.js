import { flexbox } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => (
  <div style={{ marginTop: "20px"}}>
    <nav style={{display: "flex", flexDirection:"row", justifyContent: "flex-end"}}>
      <div className = "navLink">
        <Link to="/lifestyle">lifestyle</Link>
      </div>
      <div className = "navLink">
        <Link to="/travel">travel</Link>
      </div>
      <div className = "navLink">
        <Link to="/art">art</Link>
      </div>
      <div className = "navLink">
        <Link to="/">home</Link>
      </div>
    </nav>
  </div>
);

export default Navbar;
