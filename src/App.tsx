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
    let cells = [];
    let columns = [];
    let count = 1;

    for (let i = 0; i < gridSizeInput; i++) {
      cells.push(
        <Box
          sx={{
            backgroundColor: "beige",
            height: "50px",
            width: "50px",
            margin: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {count}
        </Box>
      );
      count++;
    }
    for (let i = 0; i < gridSizeInput; i++) {
      columns.push(
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "blueviolet",
          }}
        >
          {cells.map((cell) => {
            return cell;
          })}
        </Container>
      );
    }

    return (
      <Box sx={{ backgroundColor: "greenyellow" }}>
        {columns.map((col) => {
          return col;
        })}
      </Box>
    );
  };

  useEffect(() => {
    calculateGridSize(gridSizeInput);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {returnGrid()}
    </Box>
  );
};

export default App;
