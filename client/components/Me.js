import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IAm from "./iAm";
import HomeNavBar from "./HomeNavBar";
import HomeName from "./HomeName";
import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * COMPONENT
 */
export const Me = (props) => {
  const matches = useMediaQuery("(max-width:360px)");
  console.log(matches);
  return (
    <Box
      sx={{
        backgroundImage: `url("./background.png")`,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "left",
        position: "fixed",
        overflow: "hidden",
        display: "flex",
      }}
    >
      {matches ? (
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style = {{flexGrow: 1}}>
          <HomeNavBar /> </div>

          <div style ={{flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
            <IAm />
            <HomeName />
          </div>
        </div>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "row", height: "96vh", flex: 1}}>
          <Grid style={{ flex: 1 }}></Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              alignItems: "flex-start",
            }}
          >
            <Grid sx={{ flex: 1 }}></Grid>
            <IAm />
            <Grid style={{ flex: 1 }}></Grid>
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
            <HomeNavBar />
            <HomeName />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Me;
