import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";

/**
 * COMPONENT
 */
export const Me = (props) => {
  return (
    <Box id="page">
      <Box sx={{ display: "flex", flexDirection: "row", height: "96vh" }}>
          <div style={{flex: 1}}></div>
          <div style={{display: "flex", flexDirection:"column", flex: 1, alignItems: "flex-start"}}>
            <div style={{flex: 1}}></div>
            <Fade in={true} style={{ transitionDelay: '2000ms'}} timeout={600}>
              <Box sx={{ flex: 1, flexWrap: "nowrap"}}>
                <h1 style={{marginBottom: "0px", marginLeft: "125px"}}>i am:</h1>
                <div style={{marginLeft: "200px"}}>
                  <p style={{ margin: "5px", textAlign: "right", fontSize: "24px", whiteSpace: "nowrap"}}>a software engineer,</p>
                  <p style={{ margin: "5px", textAlign: "right", fontSize: "24px", whiteSpace: "nowrap"}}>lifestyle model,</p>
                  <p style={{ margin: "5px", textAlign: "right", fontSize: "24px", whiteSpace: "nowrap"}}>& artist</p>
                </div>
              </Box>
            </Fade>
            <div style={{flex: 1}}></div>
          </div>


        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginRight: "70px",
            borderRight: "1px solid black",
            paddingRight: "10px",
          }}
        >
        <Slide direction="down" in={true} timeout={800} mountOnEnter unmountOnExit>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              marginTop: "50px",
            }}
          >

              <Link to="/camera">travel</Link>
              <Link to="/pen">pen</Link>
              <Link to="/lifestyle">lifestyle</Link>
              <Link to="/">me</Link>
          </Box>
          </Slide>

          <Slide direction="right" in={true} timeout={2000} mountOnEnter unmountOnExit>
          <h1
            style={{
              fontSize: "60px",
              fontFamily: "gar",
              marginTop: "5px",
              marginBottom: "33px",
            }}
          >
            nicole pan
          </h1>
          </Slide>
        </Box>
      </Box>
    </Box>
  );
};

export default Me;
