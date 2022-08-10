import React from "react";
import Box from "@mui/material/Box";

import FirstCounter from "./components/FirstCounter";
import SecondCounter from "./components/SecondCounter";
import ThirdCounter from "./components/ThirdCounter";

import { CounterProvider } from "./resources/context/CounterContext";

function App() {
  return (
    <CounterProvider>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <FirstCounter />
        <SecondCounter />
        <ThirdCounter />
      </Box>
    </CounterProvider>
  );
}

export default App;
