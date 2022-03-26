import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Grid, Text, Col, Box, Image } from "@mantine/core";
import castle from "./images/castle.png";
import robot from "./images/robot.png";

const App = () => {
  const gridSizeInput = 5;
  const [gridSize, setGridSize] = useState(0);

  const calculateGridSize = (sizeInput: number) => {
    setGridSize(sizeInput * sizeInput);
  };

  const returnGrid = () => {
    for (let i = 0; i <= gridSize; i++) {
      return <Box>dgdgd</Box>;
    }
  };

  useEffect(() => {
    calculateGridSize(gridSizeInput);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "red",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ backgroundColor: "greenyellow" }}>
        <Container sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
        </Container>

        <Container sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
        </Container>

        <Container sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            <Image src="" />
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
        </Container>

        <Container sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
        </Container>

        <Container sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
          <Box
            sx={{
              backgroundColor: "beige",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            f
          </Box>
        </Container>
      </Box>
      {/* {returnGrid()} */}
    </Box>
  );
};

export default App;
