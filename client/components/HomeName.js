import React from "react";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import useMediaQuery from '@mui/material/useMediaQuery';
/**
 * COMPONENT
 */
export const HomeName = (props) => {
  const matches = useMediaQuery('(max-width:650px)');
  let textColor = (matches) ? "white" : "black"
  let marginBottom = (matches) ? "68px" : "35px"
  return (
<Slide direction="right" in={true} timeout={2000} mountOnEnter unmountOnExit>
    <h1
      style={{
        fontSize: "3rem",
        fontFamily: "gar",
        marginTop: "5px",
        marginRight: "10px",
        textAlign: "right",
        color: `${textColor}`,
        bottom: `${marginBottom}`,
        right: `10px`,
        position: "fixed",
      }}
    >
      nicole pan
    </h1>
    </Slide>
  );
};

export default HomeName;
