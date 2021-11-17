import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";

/**
 * COMPONENT
 */
export const Me = (props) => {
  return (
    <Box className = "page">
      <Box sx={{ display: "flex", flexDirection: "row", height: "96vh" }}>
          <Grid style={{flex: 1}}>
            {/* <img src="./photos/nicole.jpg"/> */}
          </Grid>
          <Grid style={{display: "flex", flexDirection:"column", flex: 1, alignItems: "flex-start"}}>
            <Grid style={{flex: 1}}></Grid>
            <Fade in={true} style={{ transitionDelay: '2000ms'}} timeout={600}>
              <Grid sx={{ flex: 1, flexWrap: "nowrap", backgroundColor: "white", color: "black"}}>
                <h1 style={{marginBottom: "0px", marginLeft: "125px"}}>i am:</h1>
                <Grid style={{marginLeft: "200px"}}>
                  <p style={{ margin: "5px", textAlign: "right", fontSize: "24px", whiteSpace: "nowrap"}}>a software engineer,</p>
                  <p style={{ margin: "5px", textAlign: "right", fontSize: "24px", whiteSpace: "nowrap"}}>lifestyle model,</p>
                  <p style={{ margin: "5px", textAlign: "right", fontSize: "24px", whiteSpace: "nowrap"}}>& artist.</p>
                  <h1 style={{marginBottom: "0px", textAlign: "right"}}>welcome!</h1>
                </Grid>

              </Grid>
            </Fade>
          <Grid style={{flex: 1}}></Grid>
          </Grid>


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
              <Link to="/lifestyle">lifestyle</Link>
              <Link to="/projects">projects</Link>
              <Link to="/travel">travel</Link>
              <Link to="/art">art</Link>
              <Link to="/">home</Link>
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
