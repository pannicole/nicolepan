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
  const small = useMediaQuery("(max-width:360px)");
  const medium = useMediaQuery("(max-width:650px)");
  let bgImage = !small
    ? `url("./background.png")`
    : `url("./photos/nicole.jpg")`;
  return (
    <Box
      sx={{
        backgroundImage: `${bgImage}`,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "left",
        position: "fixed",
        overflow: "hidden",
        display: "flex",
      }}
    >
      {medium ? (
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HomeNavBar />
          <IAm />
          <HomeName />
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "96vh",
            flex: 1,
          }}
        >
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
          <HomeNavBar page={"home"} />
        </Box>
      )}
    </Box>
  );
};

export default Me;
