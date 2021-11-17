import React from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
export const HomeName = (props) => {
  return (
<Slide direction="right" in={true} timeout={2000} mountOnEnter unmountOnExit>
    <h1
      style={{
        fontSize: "3rem",
        fontFamily: "gar",
        marginTop: "5px",
        marginBottom: "33px",
      }}
    >
      nicole pan
    </h1>
    </Slide>
  );
};

export default HomeName;
