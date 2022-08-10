import React, { useState, useEffect, useContext } from "react";
import { ACTIONS } from "../resources/constants";
import CounterContext from "../resources/context/CounterContext";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SecondCounter = () => {
  const { store } = useContext(CounterContext);
  const [value, setValue] = useState(0);

  const callback = (data) => {
    setValue(data);
  };

  useEffect(() => {
    store.subscribe("counter", callback);
    // return store.unsubscribe("counter", callback);
  }, [store]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Button onClick={() => store.publish(ACTIONS.increment, 1)}>+</Button>
      <Typography>{value}</Typography>
      <Button onClick={() => store.publish(ACTIONS.decrement, 1)}>-</Button>
    </Box>
  );
};

export default SecondCounter;
