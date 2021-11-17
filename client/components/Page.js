import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * COMPONENT
 */
export const Page = (props) => {
  const matches = useMediaQuery('(max-width:650px)');
  return (
    <Box>
      {matches? (<Navbar page = {`${props.page}`}/>) : (<> </>) }
      <Box sx={{ display: "flex", flexDirection: "row", height: "96vh" }}>

      <Fade in = {true} timeout= {2000}>
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1, margin: "10vw", marginRight: "15vw" }}>
          {/* here */}
        </Box>
        </Fade>
        {(matches) ? (<> </>) : (
          <Navbar page = {`${props.page}`}/>)}
      </Box>
    </Box>
  );
};

export default Page;
