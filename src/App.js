import React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import GenericCounter from "./components/GenericCounter";
import GlobalCountDisplayer from "./components/GlobalCountDisplayer";

import { CounterProvider } from "./resources/context/CounterContext";

function App() {
  return (
    <CounterProvider>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" mb={10}>
          React Vanilla State Manager
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <GenericCounter identifier={"counter1"} title={"Counter 1"} />
          <Divider orientation="vertical" sx={{ height: "90%" }} />

          <GlobalCountDisplayer />

          <Divider orientation="vertical" sx={{ height: "90%" }} />
          <GenericCounter identifier={"counter2"} title={"Counter 2"} />
        </Box>
      </Box>
    </CounterProvider>
  );
}

export default App;
