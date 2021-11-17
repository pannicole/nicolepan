import { flexbox } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
// import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = (props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginRight: "55px",
      borderRight: "1px solid black",
      paddingRight: "10px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        marginTop: "50px",
      }}
    >
      <Link to="/lifestyle">lifestyle</Link>
      <Link to="/projects">projects</Link>
      <Link to="/travel">travel</Link>
      <Link to="/art">art</Link>
      <Link to="/">home</Link>
    </Box>
   </Box>
);

export default Navbar;
