import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = (props) => {
  const matches = useMediaQuery('(max-width:650px)');
  let dir = (matches) ? "row" : "column"
  let page = props.page
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: `${dir}`,
        alignItems: "flex-end",
        marginTop: "3vw",
        top: "0",
        right: "10px",
        position: "fixed",
      }}
    >
      <Link to="/"><p className = { (page == "home") ? "selected" : "notSelected" }>home</p></Link>
      <Link to="/travel"><p className = { (page == "travel") ? "selected" : "notSelected" }>travel</p></Link>
      <Link to="/art"><p className = { (page == "art") ? "selected" : "notSelected" }>art</p></Link>
      <Link to="/lifestyle"><p className = { (page == "lifestyle") ? "selected" : "notSelected" }>lifestyle</p></Link>
      <Link to="/projects"><p className = { (page == "projects") ? "selected" : "notSelected" }>projects</p></Link>

    </Box>
  )
};

export default Navbar;
