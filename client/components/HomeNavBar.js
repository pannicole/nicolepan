import React from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
/**
 * COMPONENT
 */
export const HomeNavBar = (props) => {
  const matches = useMediaQuery('(max-width:360px)');
  let dir = (matches) ? "row" : "column"
  return (
  <Slide direction="down" in={true} timeout={800} mountOnEnter unmountOnExit>
    <Box
      sx={{
        display: "flex",
        flexDirection: `${dir}`,
        alignItems: "flex-end",
        marginTop: "3vw",
      }}
    >
        <Link to="/lifestyle">lifestyle</Link>
        <Link to="/projects">projects</Link>
        <Link to="/travel">travel</Link>
        <Link to="/art">art</Link>
        <Link to="/">home</Link>
    </Box>
    </Slide>
  );
};

export default HomeNavBar;
