import React from "react";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import HomeName from "./HomeName";
import useMediaQuery from "@mui/material/useMediaQuery";
/**
 * COMPONENT
 */
export const HomeNavBar = (props) => {
  const matches = useMediaQuery("(max-width:650px)");
  let dir = matches ? "row" : "column";
  let page = props.page;
  if(page === undefined){
    page = "home"
  }
  return (
    <div>
      <Slide
        direction="down"
        in={true}
        timeout={800}
        mountOnEnter
        unmountOnExit
      >
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
          <Link to="/lifestyle">
            <p className={page == "lifestyle" ? "selected" : "notSelected"}>
              lifestyle
            </p>
          </Link>
          <Link to="/projects">
            <p className={page == "projects" ? "selected" : "notSelected"}>
              projects
            </p>
          </Link>
          <Link to="/travel">
            <p className={page == "travel" ? "selected" : "notSelected"}>
              travel
            </p>
          </Link>
          <Link to="/art">
            <p className={page == "art" ? "selected" : "notSelected"}>art</p>
          </Link>
          <Link to="/">
            <p className={page == "home" ? "selected" : "notSelected"}>home</p>
          </Link>
        </Box>
      </Slide>
      <HomeName />
    </div>
  );
};

export default HomeNavBar;
