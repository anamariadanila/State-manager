import React from "react";
import Box from "@mui/material/Box";

import FirstCounter from "./components/FirstCounter";
import SecondCounter from "./components/SecondCounter";
import ThirdCounter from "./components/ThirdCounter";

import MainStore from "./store/MainStore";

function App() {
  const event = new MainStore();

  return (
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
      <FirstCounter store={event} />
      <SecondCounter />
      <ThirdCounter />
    </Box>
  );
}

export default App;
