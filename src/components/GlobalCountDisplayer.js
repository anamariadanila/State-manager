import React, { useState, useEffect, useContext } from "react";
import CounterContext from "../resources/context/CounterContext";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const GlobalCountDisplayer = () => {
  const { store } = useContext(CounterContext);
  const [value, setValue] = useState(store.getCounter);

  const callback = (data) => {
    setValue(data);
  };

  useEffect(() => {
    store.subscribe("globalCounter", callback);
  }, [store]);

  return (
    <Box
      sx={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Global Counter Value</Typography>

      <Typography fontSize="150px">{value}</Typography>
    </Box>
  );
};

export default GlobalCountDisplayer;
