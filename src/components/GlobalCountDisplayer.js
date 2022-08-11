import React, { useState, useEffect, useContext } from "react";
import CounterContext from "../resources/context/CounterContext";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const GlobalCountDisplayer = () => {
  const { store } = useContext(CounterContext);
  const [value, setValue] = useState(0);

  const callback = (data) => {
    setValue(data);
  };

  useEffect(() => {
    store.subscribe("secondCounter", callback);
  }, [store]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Typography>{value}</Typography>
    </Box>
  );
};

export default GlobalCountDisplayer;
