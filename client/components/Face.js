import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
/**
 * COMPONENT
 */
export const Face = (props) => {
  const matches = useMediaQuery('(max-width:650px)');
  return (
    <Box>
    {matches? (<Navbar page = {`lifestyle`}/>) : (<> </>) }
    <Box sx={{ display: "flex", flexDirection: "row", height: "96vh" }}>

    <Fade in = {true} timeout= {2000}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{ flexGrow: 1 }}
          style={{ margin: "5vw", marginRight: "10vw" }}
        >
           <img src={"../photos/nicole.jpg"} alt={"nicole"} style={{margin: "5vw"}}/>
        </Box>
      </Box>
      </Fade>
      {(matches) ? (<> </>) : (
        <Navbar page = {`lifestyle`}/>)}
    </Box>
  </Box>


  );
};

export default Face;
