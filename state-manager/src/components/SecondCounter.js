import React, { useState } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SecondCounter = () => {
  const [value, setValue] = useState(0);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Button onClick={increment}>+</Button>
      <Typography>{value}</Typography>
      <Button onClick={decrement}>-</Button>
    </Box>
  );
};

export default SecondCounter;
