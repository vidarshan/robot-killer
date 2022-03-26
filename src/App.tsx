import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Grid, Text, Col, Box, Image } from "@mantine/core";
import castle from "./images/castle.png";
import robot from "./images/robot.png";

const App = () => {
  const gridSizeInput = 12;
  const [gridSize, setGridSize] = useState(0);

  const calculateGridSize = (sizeInput: number) => {
    setGridSize(sizeInput * sizeInput);
  };

  const getRows = () => {};

  const returnGrid = () => {
    let rows = [];
    let columns = [];

    for (let i = 0; i < gridSizeInput; i++) {
      rows.push(
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
        ></Box>
      );
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
          {rows.map((box) => {
            return box;
          })}
        </Container>
      );
    }

    console.log(columns);

    return (
      <Box sx={{ backgroundColor: "greenyellow" }}>
        {columns.map((col) => {
          return col;
        })}
      </Box>
    );
    // return (
    //   <Box sx={{ backgroundColor: "greenyellow" }}>
    //     <Container
    //       sx={{
    //         display: "flex",
    //         flexDirection: "row",
    //         backgroundColor: "blueviolet",
    //       }}
    //     >
    //       {rows.map((col) => {
    //         return col;
    //       })}
    //     </Container>
    //   </Box>
    // );
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
      {returnGrid()}
      {/* <Box sx={{ backgroundColor: "greenyellow" }}>
        <Container sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            onClick={() => console.log(1)}
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
            <Image src={robot} width="30px" />
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "50px",
              width: "50px",
              margin: "10px",
            }}
          >
            <Image src={castle} width="40px" />
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
      </Box> */}
      {/* {returnGrid()} */}
    </Box>
  );
};

export default App;
