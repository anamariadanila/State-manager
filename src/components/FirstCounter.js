import React, { useState, useEffect } from "react";
import { ACTIONS } from "../store/constants";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FirstCounter = ({ store }) => {
  const [value, setValue] = useState(0);

  const callback = (data) => {
    setValue(data);
  };

  useEffect(() => {
    store.subscribe("counter", callback);
    // return store.unsubscribe("counter", callback);
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Button onClick={() => store.publish(ACTIONS.increment, 1)}>+</Button>
      <Typography>{value}</Typography>
      <Button onClick={() => store.publish(ACTIONS.decrement, 1)}>-</Button>
    </Box>
  );
};

export default FirstCounter;
