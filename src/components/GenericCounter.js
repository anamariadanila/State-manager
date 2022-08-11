import React, { useState, useContext } from "react";
import { ACTIONS } from "../resources/constants";
import CounterContext from "../resources/context/CounterContext";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const GenericCounter = ({ identifier, title }) => {
  const { store } = useContext(CounterContext);
  const [value, setValue] = useState(0);

  const callback = (data) => {
    setValue(data);
  };

  const handleSubscribe = () => {
    store.subscribe(identifier, callback);
    setValue(store.getCounter);
  };

  const handleUnsubscribe = () => store.unsubscribe(identifier);

  const handleIncrement = () => {
    if (store.isSubscribed(identifier)) {
      store.publish(ACTIONS.increment, 1);
    } else {
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (store.isSubscribed(identifier)) {
      store.publish(ACTIONS.decrement, 1);
    } else {
      setValue(value - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px 40px",
      }}
    >
      <Typography variant="h4">{title}</Typography>

      <Typography fontSize="100px">{value}</Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Button onClick={handleIncrement} variant="contained" color="success">
          +
        </Button>
        <Button onClick={handleDecrement} variant="contained" color="error">
          -
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Button
          onClick={handleSubscribe}
          sx={{ textTransform: "none", marginRight: "15%" }}
          color="success"
        >
          Subscribe
        </Button>
        <Button
          onClick={handleUnsubscribe}
          sx={{ textTransform: "none", marginLeft: "15%" }}
          color="error"
        >
          Unsubscribe
        </Button>
      </Box>
    </Box>
  );
};

export default GenericCounter;
