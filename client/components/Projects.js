import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
/**
 * COMPONENT
 */
export const Projects = (props) => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", height: "96vh" }}>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 2}}>
          <Box>
            <h1
              style={{
                textAlign: "center",
                marginBottom: "10px",
                marginTop: "100px",
              }}
            >
              projects
            </h1>
            <p style={{ textAlign: "center" }}>nothing here yet :)</p>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: "flex", flexDirection: "row", justifyContent: "center" }}
            style={{ marginLeft: "5vw", marginRight: "5vw", }}
          >
            <img src={"../photos/nicole.jpg"} alt={"nicole"} />
          </Box>
        </Box>
        <Navbar />
      </Box>
    </Box>
  );
};

export default Projects;
